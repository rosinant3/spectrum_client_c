import React from 'react';
import { ColorContainer } from './colorDateStyles';
import { TwitterPicker  } from 'react-color';
import { useColorError } from './colorHooks';

interface ColorProps {
    color: { value: string; error: string };
};

const Color: React.FC<ColorProps> = (props) => {
  
  const color = props.color;
  const { colorError } = useColorError(color);

  return (<ColorContainer>
      <TwitterPicker color={color.value} />
      {colorError.status && <div>{colorError.message}</div>}
  </ColorContainer>);
};

export default Color;