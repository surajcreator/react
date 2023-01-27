import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeCarousel = (props) => {
  return (
    <div>
      <Carousel>
        {props.fields.data.datasource.carouselItems.targetItems &&
          props.fields.data.datasource.carouselItems.targetItems.map((carosuelItem, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={carosuelItem.image.jsonValue.value.src}
                alt={carosuelItem.image.jsonValue.value.alt}
              />
              <Carousel.Caption>
                <h3>
                  <a href={carosuelItem.url.url}>{carosuelItem.title.value}</a>
                </h3>
                <p>{carosuelItem.pageTitle.value}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
