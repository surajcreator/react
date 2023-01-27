using Datamatics.Models;
using Sitecore.Data.Fields;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Datamatics.Controllers
{
    public class RestaurantController : ApiController
    {
        [EnableCors(origins:"*", headers:"*", methods:"*")]
        [HttpPost]
        public IEnumerable<RestaurantMenuItem> FetchMenuPrice(GetMenuPriceRequest request) {
            Sitecore.Data.Database contextDatabase = Sitecore.Configuration.Factory.GetDatabase(request.ContextDatabaseName);
            Sitecore.Globalization.Language language = Sitecore.Globalization.Language.Parse(request.ContextLanguageName);

            var contextItem = contextDatabase.Items.GetItem(new Sitecore.Data.ID(request.ContextItemId), language);

            MultilistField menuItemListField = contextItem.Fields["Menu"];

            var response = menuItemListField.GetItems()
                                    .Select(x => new RestaurantMenuItem
                                    {
                                        ItemName = x.Fields["ItemName"].Value,
                                        ItemType = x.Fields["ItemType"].Value,
                                        ItemPrice = x.Fields["ItemPrice"].Value,
                                        ItemDetail = x.Fields["ItemDetail"].Value,
                                    });
            return response;
        }
    }
}
