import React from 'react';
import cx from 'classnames';

function TabItem(props: {
  className?: string;
  preset?: 'default' | 'primary' | 'black';
  active?: boolean;
  disabled?: boolean;
  value?: any;
  children: React.ReactNode;
  onClick?: (e: MouseEvent) => void;
}) {
  const handleClick = (e: MouseEvent) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

  const themeCls = (() => {
    return {
      default: '',
      primary: 'tab-item-primary',
      black: 'tab-item-black',
    }[props.preset || 'default'];
  })();

  return (
    <div
      className={cx(`tab-item ${themeCls}`, props.className, {
        'tab-active': props.active,
        'tab-disabled': props.disabled,
      })}
      onClick={(e) => handleClick(e.nativeEvent)}
    >
      {props.children}
    </div>
  );
}

export default TabItem;
