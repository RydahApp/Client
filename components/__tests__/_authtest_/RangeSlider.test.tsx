// RangeSlider.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RangeSlider from '@/components/auth/RangeSlider';

describe('RangeSlider', () => {
  const sliderWidth = 300;
  const min = 0;
  const max = 100;
  const step = 1;
  const onValueChange = jest.fn();

  it('renders correctly', () => {
    const { getByTestId } = render(
      <RangeSlider
        sliderWidth={sliderWidth}
        min={min}
        max={max}
        step={step}
        onValueChange={onValueChange}
      />
    );
    expect(getByTestId('sliderContainer')).toBeTruthy();
    expect(getByTestId('thumb1')).toBeTruthy();
    expect(getByTestId('thumb2')).toBeTruthy();
  });

  // it('calls onValueChange when thumbs are moved', () => {
  //   const { getByTestId } = render(
  //     <RangeSlider
  //       sliderWidth={sliderWidth}
  //       min={min}
  //       max={max}
  //       step={step}
  //       onValueChange={onValueChange}
  //     />
  //   );

  //   const thumb1 = getByTestId('thumb1');
  //   const thumb2 = getByTestId('thumb2');

  //   // Simulate thumb movements
  //   fireEvent(thumb1, 'onGestureEvent', {
  //     nativeEvent: {
  //       translationX: 50,
  //     },
  //   });
  //   fireEvent(thumb1, 'onHandlerStateChange', {
  //     nativeEvent: {
  //       state: 5, // End state
  //     },
  //   });

  //   fireEvent(thumb2, 'onGestureEvent', {
  //     nativeEvent: {
  //       translationX: -50,
  //     },
  //   });
  //   fireEvent(thumb2, 'onHandlerStateChange', {
  //     nativeEvent: {
  //       state: 5, // End state
  //     },
  //   });

  //   expect(onValueChange).toHaveBeenCalledTimes(2);
  //   expect(onValueChange).toHaveBeenCalledWith({
  //     min: expect.any(Number),
  //     max: expect.any(Number),
  //   });
  // });
});
