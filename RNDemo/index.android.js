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
  TouchableOpacity,
  ScrollView,
  Navigator,
  BackAndroid,
} = React;

var MyToastAndroid = require('./MyToastAndroid');

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  _navigator.pop();
  return true;
});

var RNDemo = React.createClass({

  _onPress: function() {
    // return _navigator.push({title: 'jump', id: 'jump'});
    return MyToastAndroid.show("MyToastAndroid", MyToastAndroid.SHORT);
  },

  renderSceneAndroid: function(route, navigator) {
    _navigator = navigator;
    if(route.id == 'main') {
      return <ScrollView >
      <View style={styles.box1} >
      <View style={styles.item} />
      </View>

      <View style={styles.box2} >
      <View style={styles.item} />
      <View style={styles.item} />
      </View>

      <View style={styles.box3} >
      <View style={styles.item31} />
      <View style={styles.item} />
      <View style={styles.item33} />
      </View>

      <View style={{flexDirection: 'row', padding: 5, width: 65, height: 65, borderRadius: 5, backgroundColor: 'white', margin: 10, justifyContent: 'space-around'}} >
      <View style={{justifyContent: 'space-around'}} >
      <View style={styles.item} />
      <View style={styles.item} />
      </View>

      <View style={{justifyContent: 'space-around'}}>
      <View style={styles.item} />
      <View style={styles.item} />
      </View>
      </View>

      <View style={{flexDirection: 'row', padding: 5, width: 65, height: 65, borderRadius: 5, backgroundColor: 'white', margin: 10, justifyContent: 'space-around'}} >
      <View style={{justifyContent: 'space-around'}} >
      <View style={styles.item} />
      <View style={styles.item} />
      </View>

      <View style={[styles.item, {alignSelf: 'center'}]} />

      <View style={{justifyContent: 'space-around'}}>
      <View style={styles.item} />
      <View style={styles.item} />
      </View>
      </View>

      <View style={{flexDirection: 'row', padding: 5, width: 65, height: 65, borderRadius: 5, backgroundColor: 'white', margin: 10, justifyContent: 'space-around'}} >
      <View style={{justifyContent: 'space-around'}} >
      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
      </View>

      <View style={{justifyContent: 'space-around'}}>
      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
      </View>
      </View>

      <TouchableOpacity onPress={this._onPress} style={{height: 56, margin: 10, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
      <Text>Jump</Text>
      </TouchableOpacity>
      </ScrollView>
    }else if(route.id == 'jump') {
      return <View >
        <Text>
          Hello
        </Text>
      </View>
    }
  },

  render: function() {
    var renderScene = this.renderSceneAndroid;
    var sceneConfigs = Navigator.SceneConfigs.FadeAndroid;
    return (
      <Navigator
        initialRoute={{title: 'main', id: 'main'}}
        renderScene={renderScene}
      />
    );
  }
});

var styles = StyleSheet.create({
  box1: {
    padding: 5,
    height: 65,
    width: 65,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },

  box2: {
    padding: 5,
    height: 65,
    width: 65,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10
  },

  box3: {
    padding: 5,
    height: 65,
    width: 65,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10
  },

  item: {
    borderRadius: 7.5,
    width: 15,
    height: 15,
    backgroundColor: 'black'
  },

  item31: {
    borderRadius: 7.5,
    width: 15,
    height: 15,
    backgroundColor: 'black',
    alignSelf: 'flex-start'
  },

  item33: {
    borderRadius: 7.5,
    width: 15,
    height: 15,
    backgroundColor: 'black',
    alignSelf: 'flex-end'
  }

});

AppRegistry.registerComponent('RNDemo', () => RNDemo);
