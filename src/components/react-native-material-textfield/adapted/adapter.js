import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import ThemeContext from '../../react-native-material-ui/src/styles/themeContext';

// TODO adapt: apply theme
const adapt = Component => {
  class AdaptedTextInput extends React.PureComponent {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => <Component {...this.props} tintColor={theme.palette.primaryColor} />}
        </ThemeContext.Consumer>
      );
    }
  }
  hoistNonReactStatics(AdaptedTextInput, Component);
  return AdaptedTextInput;
};

export default adapt;
