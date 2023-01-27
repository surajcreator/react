import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const ListingHero = (props) => {
  console.log('props', props);
  const { results } = props.fields.data.contextItem.children;
  return (
    <div>
      <Carousel>
        {results &&
          results.map((listing, index) => {
            return (
              <Carousel.Item key={index}>
                <Link to={listing.url.url}>
                  <img
                    className="d-block w-100"
                    src={listing.image.jsonValue.value.src}
                    alt={listing.image.jsonValue.value.alt}
                  />
                </Link>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
};

export default ListingHero;
