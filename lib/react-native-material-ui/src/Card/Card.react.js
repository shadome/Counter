/* eslint-disable import/no-unresolved, import/extensions */
import { View } from 'react-native';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/* eslint-enable import/no-unresolved, import/extensions */
import RippleFeedback from '../RippleFeedback';
import { ViewPropTypes } from '../utils';
import withTheme from '../styles/withTheme';
import getPlatformElevation from '../styles/getPlatformElevation';

const propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};
const defaultProps = {
  children: null,
  onPress: null,
  style: {},
};

function getStyles(props) {
  const { palette } = props.theme;
  const local = props.FullWidth ? { marginHorizontal: 0} : {};
  const base = {
    backgroundColor: palette.canvasColor,
    borderRadius: 2,
    marginVertical: 4,
    marginHorizontal: 8,
    overflow: 'hidden',
    ...getPlatformElevation(2),
  };
  return [base, local, props.style];
}

class Card extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      styles: getStyles(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ styles: getStyles(nextProps) });
  }

  renderContent = () => {
    const { children } = this.props;
    const { styles } = this.state;
    return (
      <View style={styles} pointerEvents="auto">
        {children}
      </View>
    );
  };

  render() {
    const { onPress } = this.props;
    if (onPress) {
      return (
        <RippleFeedback onPress={onPress}>
          {this.renderContent()}
        </RippleFeedback>
      );
    }
    return this.renderContent();
  }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default withTheme(Card);
