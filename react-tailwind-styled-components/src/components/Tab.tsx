import React, { useCallback, useEffect, useRef, useState } from 'react';
import cx from 'classnames';

function Tab(props: {
  className?: string;
  preset?: 'default' | 'black' | 'primary';
  size?: 'md' | 'sm';
  bordered?: boolean;
  top?: boolean;
  hidden?: boolean;
  target?: any;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}) {
  const tabEl = useRef<HTMLDivElement | null>(null);
  const observer = useRef<ResizeObserver | null>(null);

  const [init, setInit] = useState(false);
  const [transition, setTransition] = useState(false);
  const [sliderTop, setSliderTop] = useState(0);
  const [sliderLeft, setSliderLeft] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setInit(true);
    }, 500);

    return () => setInit(false);
  }, []);

  useEffect(() => {
    if (init) {
      (async () => {
        trackingSlider();
        setTransition(true);
      })();
    }
  }, [props.target, init]);

  useEffect(() => {
    if (tabEl.current) {
      observer.current = new (window as any).ResizeObserver(() => {
        trackingSlider();
      });
      observer.current!.observe(tabEl.current!);
    }

    return () => {
      if (tabEl.current) {
        observer.current!.unobserve(tabEl.current!);
      }
    };
  }, [tabEl.current]);

  const trackingSlider = useCallback(() => {
    const target = tabEl.current?.querySelector(
      '.tab-active',
    ) as HTMLDivElement;

    if (target) {
      const top = (() => {
        if (props.top) {
          return props.size ? 0 : -2;
        } else {
          return tabEl.current!.clientHeight - (props.size ? 0 : 2);
        }
      })();

      setSliderLeft(target!.offsetLeft);
      setSliderWidth(target!.clientWidth);
      setSliderTop(top);
    } else {
      setSliderWidth(0);
    }
  }, [tabEl.current]);

  const themeCls = (() => {
    return {
      default: '',
      black: 'tab-black',
      primary: 'tab-primary',
    }[props.preset || 'default'];
  })();

  return (
    <div
      className={cx(`tabs ${themeCls}`, props.className, {
        'tab-bordered': props.bordered,
        'tab-top': props.top,
        'tab-sm': props.size === 'sm',
        'tab-md': props.size === 'md',
      })}
      ref={tabEl}
    >
      {props.left && <div className="tab-left">{props.left}</div>}
      {props.center && <div className="tab-center">{props.center}</div>}
      {props.right && <div className="tab-right">{props.right}</div>}
      <div
        className={cx('tab-slider', {
          transition: transition,
          'tab-none': props.hidden,
        })}
        style={{ top: sliderTop, left: sliderLeft, width: sliderWidth }}
      />
    </div>
  );
}

export default Tab;
