import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

function Tab(props: {
  target?: string | number;
  bordered?: boolean;
  small?: boolean;
  noSlider?: boolean;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}) {
  const tabEl = useRef<HTMLDivElement | null>(null);

  const [sliderLeft, setSliderLeft] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderTop, setSliderTop] = useState(0);

  useEffect(() => {
    const target = tabEl.current!.querySelector(
      '.tab-active',
    ) as HTMLDivElement;
    const top = tabEl.current!.clientHeight - (props.small ? 2 : 4);

    setSliderLeft(target!.offsetLeft);
    setSliderWidth(target!.clientWidth);
    setSliderTop(top);
  }, [props.target]);

  return (
    <div
      className={cx('tabs', {
        'tab-bordered': props.bordered,
      })}
      ref={tabEl}
    >
      {(props.left || props.center) && (
        <div className="tab-left">{props.left}</div>
      )}
      {props.center && <div className="tab-center">{props.center}</div>}
      {(props.right || props.center) && (
        <div className="tab-right">{props.right}</div>
      )}
      <div
        className={cx('tab-slider', {
          'tab-small': props.small,
          'tab-none': props.noSlider,
        })}
        style={{ top: sliderTop, left: sliderLeft, width: sliderWidth }}
      />
    </div>
  );
}

export default Tab;
