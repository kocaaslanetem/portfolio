import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';

const TypedText = ({
  strings,
  loop,
  typeSpeed,
  backSpeed,
  backDelay,
  startDelay,
}) => {
  const el = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'I am an Electrical and Electronics Engineer.',
        'I am in love with robotics and machine learning applications.',
        'Weight lifthing is my passion. I am a huge fan of calisthenics.',
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
    };

    typedInstance.current = new Typed(el.current, options);

    return () => {
      typedInstance.current.destroy();
    };
  }, [strings, loop, typeSpeed, backSpeed, backDelay, startDelay]);

  return (
    <div>
      <span ref={el} />
    </div>
  );
};

TypedText.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string),
  loop: PropTypes.bool,
  typeSpeed: PropTypes.number,
  backSpeed: PropTypes.number,
  backDelay: PropTypes.number,
  startDelay: PropTypes.number,
};

TypedText.defaultProps = {
  strings: [],
  loop: false,
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  startDelay: 0,
};

export default TypedText;
