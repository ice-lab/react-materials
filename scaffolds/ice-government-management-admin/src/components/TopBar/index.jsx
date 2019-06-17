import React, { PureComponent } from 'react';
import { Button, Icon } from '@alifd/next';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default class TopBar extends PureComponent {
  render() {
    const { title, buttonText, extraBefore, extraAfter } = this.props;

    return (
      <div className={styles.container}>
        {extraBefore || <div className={styles.title}>{title || ''}</div>}

        {extraAfter || (
          <div className={styles.buttons}>
            <Button type="primary">
              <Icon type="add" size="xs" className={styles.addIcon} />
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    );
  }
}

TopBar.propTypes = {
  extraBefore: PropTypes.element,
  extraAfter: PropTypes.element,
};

TopBar.defaultProps = {
  extraAfter: null,
  extraBefore: null,
};


