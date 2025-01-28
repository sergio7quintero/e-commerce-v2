import React, { useState } from "react";
import "./accordian.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "Are the sneakers authentic?",
      answer:
        "100% Authentic. We source all of our sneakers from reputable brands and suppliers.",
    },
    {
      question: "What payments do you accept?",
      answer:
        "We accept all major credit cards. Including Apple Pay and Google Pay.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We do not accept returns. All of our sales are final. If you have any issues with your order please contact our customer service team.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we will ship anywhere in the world. Shipping costs and delivery times may vary by location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has shipped, you will receive an email with the tracking information.",
    },
    {
      question: "Do you offer Gift Cards?",
      answer:
        "Yes, we offer gift cards in various denominations. They can be purchased on our website and are available for both physical and digital delivery.",
    },
  ];

  return (
    <section className="faq-section">
      <h2 id="faq">Frequently Asked Questions</h2>
      <ul className="accordian">
        {faqData.map((faq, index) => (
          <li key={index}>
            <input
              type="radio"
              name="accordian"
              id={`faq-${index}`}
              checked={activeIndex === index}
              onChange={() => toggleAccordion(index)}
            />
            <label htmlFor={`faq-${index}`}>{faq.question}</label>
            <div className="content">
              <p>{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Accordion;
