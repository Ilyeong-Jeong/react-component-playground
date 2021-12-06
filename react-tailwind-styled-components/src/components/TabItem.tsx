import React from 'react';
import cx from 'classnames';

function TabItem(props: {
  className?: string;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (e: MouseEvent) => void;
}) {
  const handleClick = (e: MouseEvent) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <div
      className={cx('tab-item', props.className, {
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
