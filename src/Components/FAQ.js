import React, { useState } from 'react';


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
      <div className="question">
        <span>{question}</span>
        <span className={`icon ${isOpen ? 'open' : ''}`}>&#x25BC;</span>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'What is FAQ?',
      answer: 'FAQ stands for Frequently Asked Questions. It is a list of common questions and answers.'
    },
    {
      question: 'Why use FAQs?',
      answer: 'FAQs provide quick answers to common queries, reducing the need for users to contact support.'
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
