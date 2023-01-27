import React, { useState } from 'react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const RestaurantMenu = (props) => {
  const [prices, setPrices] = useState({
    error: null,
    isPriceLoaded: false,
    menuListWithPrices: [],
    menuListWithoutPrice: props.sitecoreContext.route.fields.Menu,
  });
  const ShowPrices = () => {
    let { itemId, databaseName, itemLanguage } = props.sitecoreContext.route;
    if (databaseName === 'available-in-connected-mode') {
      itemId = '{2A81DC7D-F130-4E4F-9A18-C8CBAC9B7B3B}';
      databaseName = 'master';
      languageName = 'en';
    }
    console.log(itemId, databaseName);
    let requestPayload = {
      ContextItemId: itemId,
      ContextDatabaseName: databaseName,
      ContextLanguageName: itemLanguage,
    };
    let requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      cors: 'no-cors',
      body: JSON.stringify(requestPayload),
    };
    fetch(
      'http://sitecorejsstraining.dev.local/datamaticsapi/Restaurant/FetchMenuPrice',
      requestOptions
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setPrices({
            isPriceLoaded: true,
            menuListWithPrices: result,
            menuListWithoutPrices: [],
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div
      className="container mt-5"
      style={{ backgroundColor: props.fields.ComponentBackground.value }}
    >
      <div className="pt-3 pb-3">
        <h4>{props.fields.ComponentTitle.value}</h4>
        <button className="btn btn-primary mb-5" key="showPriceBtn" onClick={ShowPrices}>
          Show Price
        </button>
        {prices.menuListWithPrices &&
          prices.menuListWithPrices.map((menuItem, index) => {
            let { ItemName, ItemType, ItemPrice, ItemDetail } = menuItem;
            return (
              <div key={index}>
                <h6>{ItemName}</h6>
                <h6>{ItemType}</h6>
                <strong className="float-end">{ItemPrice}</strong>
                <p>{ItemDetail}</p>
                <hr />
              </div>
            );
          })}

        {prices.menuListWithoutPrice &&
          prices.menuListWithoutPrice.map((menuItem, index) => {
            return (
              <div key={index}>
                <h6>{menuItem.fields.ItemName.value}</h6>
                <h6>{menuItem.fields.ItemType.value}</h6>
                <p>{menuItem.fields.ItemDetail.value}</p>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default withSitecoreContext()(RestaurantMenu);
