import React from 'react';
import { ColorContainer } from '../inputComponents';
import { TwitterPicker  } from 'react-color';

interface ColorProps {
    color: { value: string; error: string };
    ref: any;
};

const Color: React.FC<ColorProps> = React.forwardRef((props, ref:any) => {
  const color = props.color;
  return (<ColorContainer>
      <TwitterPicker ref={ref} color={color.value} />
  </ColorContainer>);
});

export default Color;
