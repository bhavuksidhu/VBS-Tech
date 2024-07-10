import React from 'react';

const PricingCard = ({ title, price, features }) => {
  return (
    <div className="col-md-6 col-sm-12 col-lg-4 mt-3 d-flex justify-content-center">
      <div className="card-body p-5 text-white" style={{ backgroundColor: '#18181B' }}>
        <h4 className="card-title">{title}</h4>
        <div className="d-flex">
          <h1 className="card-price">${price}</h1>
          <h4 className="mt-3 ml-1">/month</h4>
        </div>
        <p className="mt-3">All the basic features to boost your freelance career</p>
        <hr className="border border-dark" />
        <ul className="list-unstyled mt-4 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="d-flex">
              <i className="fa-solid fa-circle-check m-2"></i>
              {feature}
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary btn-block">Get 14 Days Free Trial</button>
      </div>
    </div>
  );
};

const PricingCards = () => {
  const pricingOptions = [
    {
      title: 'Personal',
      price: '19',
      features: [
        'Full Access to Landingfolio',
        '100 GB Free Storage',
        'Unlimited Visitors',
        '10 Agents',
        'Live Chat Support'
      ]
    },
    {
      title: 'Professional',
      price: '49',
      features: [
        'Full Access to Landingfolio',
        '100 GB Free Storage',
        'Unlimited Visitors',
        '20 Agents',
        'Live Chat Support'
      ]
    },
    {
      title: 'Business',
      price: '99',
      features: [
        'Full Access to Landingfolio',
        '100 GB Free Storage',
        'Unlimited Visitors',
        '30 Agents',
        'Live Chat Support'
      ]
    }
  ];

  return (
    <div className="container-fluid" style={{ width: '82%' }}>
      <div className="row d-flex justify-content-center">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} title={option.title} price={option.price} features={option.features} />
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
