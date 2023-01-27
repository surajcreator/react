import React from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const FeaturedDetail = (props) => {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 3 };

  const renderScreen = () => {
    const { targetItems } = props.fields.data.datasource.detailPage;
    return (
      <div>
        <Slider {...settings}>
          {targetItems &&
            targetItems.map((detail, index) => (
              <div key={`featured-detail${index}`}>
                <Card>
                  <Card.Body>
                    <Card.Title>{detail.pageTitle.value}</Card.Title>

                    <Card.Text>
                      {detail.description.value}
                      <br />
                      {detail.openingTime && (
                        <>
                          <strong>Opening time : </strong>
                          {detail.openingTime.value}
                          <br />
                        </>
                      )}
                      {detail.hasOwnProperty('ageLimit') && (
                        <>
                          <strong>Age limit : </strong>
                          {detail.ageLimit.value}
                          <br />
                        </>
                      )}
                      {detail.hasOwnProperty('adventureType') && (
                        <>
                          <strong>Adventure type : </strong>
                          {detail.adventureType.value}
                          <br />
                        </>
                      )}
                      {detail.hasOwnProperty('leisureType') && (
                        <>
                          <strong>Leisure type : </strong>
                          {detail.leisureType.value}
                          <br />
                        </>
                      )}
                      {detail.hasOwnProperty('restaurantType') && (
                        <>
                          <strong>Restaurant type : </strong>
                          {detail.restaurantType.value}
                        </>
                      )}
                    </Card.Text>

                    <Link className="btn btn-primary" to={detail.url.url}>
                      More detail
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </Slider>
      </div>
    );
  };
  return (
    <div style={{ backgroundColor: 'antiquewhite' }}>
      <div className="container">{props && renderScreen()}</div>
    </div>
  );
};

export default FeaturedDetail;
