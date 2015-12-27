/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./searchPage');

var {
  AppRegistry,
  BackAndroid,
  Text,
  View,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  ToastAndroid,
} = React;

var styles = React.StyleSheet.create({
	container: {
		flex: 1
	}
});

var PropertyFinderApp = React.createClass({
  render: function() {
    return <SearchPage />
  }
});

React.AppRegistry.registerComponent('PropertyFinderApp', function() { return PropertyFinderApp });
