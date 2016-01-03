/* @flow */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  Text,
  View,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  ToastAndroid,
  TimerMixin,
  Image,
} = React;

// var SplashScreen = require('./app/view/SplashScreen');
// var MainScreen = require('./app/view/MainScreen');
// var StoryScreen = require('./app/view/StoryScreen');

// var _navigator;

// BackAndroid.addEventListener('hardwareBackPress', function() {
//   if (_navigator && _navigator.getCurrentRoutes().length > 1) {
//     _navigator.pop();
//     return true;
//   }
//   return false;
// });

var ZhiHuDaily = React.createClass({
  // mixins: [TimerMixin],
  // componentDidMount: function() {
  //
  //   this.setState({splashed: false});
  //   this.setTimeout(
  //     () => {
  //
  //     },
  //     2000,
  //   );
  // },

  // RouteMapper: function(route, navigationOperations, onComponentRef) {
  //   _navigator = navigationOperations;
  //   if (route.name == 'home') {
  //     return (
  //       <View style={styles.container}>
  //         <MainScreen navigator={navigationOperations} />
  //       </View>
  //     );
  //   } else if (route.name == 'story') {
  //     return (
  //       <View style={styles.container}>
  //         <StoryScreen
  //           style={{flex: 1}}
  //           navigator={navigationOperations}
  //           story={route.story}
  //         />
  //       </View>
  //     );
  //   }
  // },

  // getInitialState: function() {
  //   return {
  //     splashed: false,
  //   };
  // },
  //
  // onActionSelected: function(position) {
  //
  // },

  render: function() {
    // if (this.state.splashed) {
    //   var initialRoute = {name: 'home'};
    //   return (
    //     <Navigator
    //       style={styles.container}
    //       initialRoute={initialRoute}
    //       configureScene={() => Navigator.SceneConfigs.FadeAndroid}
    //       renderScene={this.RouteMapper}
    //     />
    //   );
    // } else {
    //   return (
    //     <SplashScreen />
    //   );
    // }
    return (
      <View style={{}}>
        <View style={[styles.height160, styles.row]}>
          <View style={[styles.height160, styles.part_1_left]} >
            <Text style={[styles.font14, styles.marginTop18, styles.marginLeft10, styles.green]}>我们约吧</Text>
            <Text style={[styles.font10, styles.marginTop14, styles.marginLeft10]}>恋人爱人好朋友</Text>
            <Image style={[styles.yue,]} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}} />
          </View>
          <View style={[styles.height160, styles.part_1_right]} >
            <View style={[styles.row,{flex: 1}]}>
              <View style={{flex: 1}}>
                <Text style={[styles.font14, {marginLeft: 30}, styles.red]}>超低价值</Text>
                <Text style={[styles.font10, {marginLeft: 30}, ]}>十元慧生活</Text>
              </View>
              <View style={[{flex: 1}, {marginTop: -13}]}>
                <Image style={[styles.hanbao]} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}} />
              </View>
            </View>
            <View style={[{flex: 1, flexDirection: 'row', borderTopWidth: 0.5, borderColor: '#ddd8ce'}]}>
              <View style={[{flex: 1, borderRightWidth: 1, borderColor: '#DDD8CE'}]}>
                <Text style={{color: '#F742AB', marginLeft: 5, fontWeight: 'bold', fontSize: 15, marginTop: 8}}>聚餐宴请</Text>
                <Text style={{fontSize: 12, marinTop: 4, marginLeft: 5}}>朋友家人常聚聚</Text>
                <Image style={{height: 25, width: 25, alignSelf: 'center'}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}} />
              </View>
              <View style={[{flex: 1}]}>
                <Text style={[styles.font14, {color: '#FF8601', marginTop: 8, marginLeft: 5}]}>名店抢购</Text>
                <Text style={[{marginLeft: 5, fontSize: 12, marginTop: 4}]}>还有</Text>
                <Text style={[{marginLeft: 5, fontSize: 12, marginTop: 4}]}>12:06:12分</Text>
              </View>
              </View>
            </View>
            <View >
            </View>
        </View>


    </View>);
  }
});

var styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  row:{
      flexDirection: 'row',
      paddingTop:20
  },
  marTop18:{
      marginTop:18,
  },
  marTop14:{
      marginTop:14,
  },
  font14:{
      fontSize:14,
  },
  font10:{
      fontSize:12,
  },
  height160:{
      height: 160
  },
  yue:{
      height:80,
  },
  green:{
      color:'#55A44B',
      fontWeight: '900'
  },
  red:{
      color: '#FF3F0D',
      fontWeight: '900'
  },
  marLeft10:{
      marginLeft:10,
  },
  part_1_left:{
      flex: 1,
      borderColor: '#DCD7CD',
      borderRightWidth: 0.5,
      borderBottomWidth: 1,
  },
  part_1_right:{
      flex:2,
      borderColor: '#DCD7CD',
      borderBottomWidth: 1,
  },
  hanbao:{
      height:55,
      width:55
  }

});

AppRegistry.registerComponent('ZhiHuDaily', () => ZhiHuDaily);
