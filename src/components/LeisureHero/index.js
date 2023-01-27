import React from 'react';
import { withTranslation } from 'react-i18next';

const LeisureHero = (props) => {
  const { Image, PageTitle, Title, ContactUsPage } = props.fields,
    { t } = props;
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: `url('${Image.value.src}')`,
        height: 400,
      }}
    >
      <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">{PageTitle.value}</h1>
            <h4 className="mb-3">{Title.value}</h4>
            <a
              className="btn btn-outline-light btn-lg"
              href={ContactUsPage.value.href}
              role="button"
            >
              {t('CallUs')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(LeisureHero);
