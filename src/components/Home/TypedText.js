import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const el = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'I am an Electrical and Electronics Engineer.',
        'I am in love with robotics and machine learning applications.',
        'Weight lifting is my passion. I am a huge fan of calisthenics.',
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
    };

    typedInstance.current = new Typed(el.current, options);
    return () => { typedInstance.current.destroy(); };
  }, []);

  return <div><span ref={el} /></div>;
};

export default TypedText;
