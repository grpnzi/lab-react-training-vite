import React from 'react';

const Greetings = (props) => {
  const { lang, children } = props;
  
  const greetingText =
        lang === 'de' ? 'Hallo': 
        lang === 'es' ? 'Hola' : 
        lang === 'fr' ? 'Bonjour' 
        : 'Hello';
  
  return (
    <div className="greetings">
      <p>{greetingText}, {children}!</p>
    </div>
  );
};

export default Greetings;