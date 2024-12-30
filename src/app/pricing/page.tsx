'use client'
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'Monthly' | 'Annually'>('Monthly');

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl rounded-2xl bg-yellow-600 font-mono font-bold title-font mb-2 text-gray-900">Pricing BLOGS!</h1>
          <p className="lg:w-2/3 mx-auto underline leading-relaxed text-base text-gray-500">
          You could buy whatever you wanted Blogs.
          </p>
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button
              className={`py-1 px-4 ${
                billingCycle === 'Monthly' ? 'bg-indigo-500 text-white' : ''
              } focus:outline-none`}
              onClick={() => setBillingCycle('Monthly')}
            >
              Monthly
            </button>
            <button
              className={`py-1 px-4 ${
                billingCycle === 'Annually' ? 'bg-indigo-500 text-white' : ''
              } focus:outline-none`}
              onClick={() => setBillingCycle('Annually')}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            { name: 'START', price: 'Free', features: ['Basic Themes', 'Limited Storage/Bandwidth', 'Social Sharing Buttons'], popular: false },
            { name: 'PRO', price: '$25/mo', features: ['Comprehensive Analytics and Marketing Tools', ' Ad-Free Experience', 'Faster Load Times', 'Multi-language Support'], popular: true },
            { name: 'BUSINESS', price: '$46/mo', features: ['Analytics for Social Media Integration', ' A/B Testing Capabilities', 'Multiple User Access', ' Unlimited Posts & Pages', 'Content Scheduling'], popular: false },
            { name: 'SPECIAL', price: '$92/mo', features: ['Custom Domain Name', 'Advanced SEO and Analytics Tools', ' Increased Storage and Bandwidth', 'Customer Support', 'Professional Design and Customization'], popular: false },
          ].map((plan, index) => (
            <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div
                className={`h-full p-6 rounded-lg border-2 ${
                  plan.popular ? 'border-indigo-500' : 'border-gray-300'
                } flex flex-col relative overflow-hidden`}
              >
                {plan.popular && (
                  <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                )}
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{plan.name}</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>{plan.price}</span>
                </h1>
                {plan.features.map((feature, featureIndex) => (
                  <p key={featureIndex} className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {feature}
                  </p>
                ))}
                <button
                  className={`flex items-center mt-auto text-white ${
                    plan.popular ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-400 hover:bg-gray-500'
                  } border-0 py-2 px-4 w-full focus:outline-none rounded`}
                >
                CLICK HERE!
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                You will get everything at this Price Tag.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
