using Sitecore.Pipelines;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Datamatics.Pipelines
{
    public class RegisterDatamaticsApiRoute
    {
        public void Process(PipelineArgs args)
        {
            var config = GlobalConfiguration.Configuration;
            config.Routes.MapHttpRoute("DatamaticsApiRoute", "datamaticsapi/{controller}/{action}/{id}",
                new { id = RouteParameter.Optional });
        }
    }
}