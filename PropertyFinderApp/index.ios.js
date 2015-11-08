/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },

  container: {
    flex: 1
  },

});

class HelloWorld extends React.Component {
  render() {
    // return React.createElement(React.Text, {style: styles.text}, "Hello World");
    return <React.Text style={styles.text}>Hello World</React.Text>;
  }
};

class PropertyFinderApp extends React.Component {
  render() {
    return <React.NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'PropertyFinder',
        component: HelloWorld,
      }} />
  };
}

AppRegistry.registerComponent('PropertyFinderApp', () => PropertyFinderApp);
