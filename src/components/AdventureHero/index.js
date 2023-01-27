import React from 'react';
import { withTranslation } from 'react-i18next';

const AdventureHero = (props) => {
  const { Image, PageTitle, Description } = props.fields,
    { t } = props;
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: `url('${Image.value.src}')`,
        height: 400,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">{PageTitle.value}</h1>
            <p className="mb-3">{Description.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(AdventureHero);
