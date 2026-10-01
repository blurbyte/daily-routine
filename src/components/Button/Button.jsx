import { useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router';

import StyledButton from './StyledButton';
import Text from './Text';

function Button({ to, onClick = () => {}, children, ...props }) {
  const mappedProps = {
    ...props,
    onClick,
    ...(to ? { as: Link, to } : { onClick })
  };

  const [isClicked, setIsClicked] = useState(false);
  const animationStyles = useSpring({
    borderBottomWidth: isClicked ? 0 : 3,
    config: {
      mass: 0.4,
      tension: 400,
      friction: 18
    }
  });

  return (
    <StyledButton
      {...mappedProps}
      style={animationStyles}
      draggable={false}
      onPointerDown={() => setIsClicked(true)}
      onPointerUp={() => setIsClicked(false)}
      onPointerLeave={() => setIsClicked(false)}
      onPointerCancel={() => setIsClicked(false)}
    >
      <Text>{children}</Text>
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
