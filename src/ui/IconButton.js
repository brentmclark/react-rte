/* @flow */

import React, {Component} from 'react';
import cx from 'classnames';
import Button from './Button';
import ButtonWrap from './ButtonWrap';

// $FlowIssue - Flow doesn't understand CSS Modules
import styles from './IconButton.css';

type Props = {
  isActive: ?boolean;
  children: React.Node;
  className: ?string;
  iconName: string;
  label: string;
};

export default class IconButton extends Component<Props> {
  props: Props;

  render(): React.Element {
    let {props} = this;
    let {className, iconName, label, ...otherProps} = props;
    className = cx(className, {
      [styles.root]: true,
      [styles.isActive]: props.isActive,
    });
    return (
      <ButtonWrap>
        <Button {...otherProps} title={label} className={className}>
          <span className={styles['icon-' + iconName]} />
          {/* TODO: add text label here with aria-hidden */}
        </Button>
        {props.children}
      </ButtonWrap>
    );
  }
}
