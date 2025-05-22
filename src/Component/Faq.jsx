import React, { use } from 'react';

const Faq = ({ faqData }) => {

    const faqs = use(faqData);

    return (
        <div className='w-full py-10'>
            <h1 className='text-4xl font-bold text-center py-5 leading-14'>Frequently Asked Questions (FAQs)</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="collapse collapse-plus border border-[#d6d6d6] shadow my-5">
                    <input type="radio" name="my-accordion-3" id={`faq-${index}`} />
                    <div className="collapse-title font-semibold">{faq.question}</div>
                    <div className="collapse-content text-sm">{faq.answer}</div>
                </div>
            ))}
        </div>
    );
};

export default Faq;