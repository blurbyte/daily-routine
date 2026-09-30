import { to, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '../Button';

function ButtonBase({ icon: Icon, onClick = () => {}, children, ...props }) {
  const [shouldPlayAnimation, toggleIconAnmiation] = useState(false);

  const handleOnClick = event => {
    toggleIconAnmiation(true);
    onClick(event);
  };

  const { x } = useSpring({
    x: shouldPlayAnimation ? 1 : 0,
    onRest: () => toggleIconAnmiation(false)
  });

  const iconShakingAnimation = {
    transform:
      shouldPlayAnimation &&
      to(
        [x.to([0, 0.3, 0.5, 0.8, 1], [1, 0.8, 1, 1.2, 1]), x.to([0, 0.3, 0.5, 0.8, 1], [0, 15, 0, -7, 0])],
        (scale, rotation) => `scale(${scale}) rotate(${rotation}deg)`
      )
  };

  return (
    <Button {...props} onClick={handleOnClick}>
      {children}
      <Icon style={iconShakingAnimation} />
    </Button>
  );
}

ButtonBase.propTypes = {
  // Support for `animated` react-spring object type
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default ButtonBase;
