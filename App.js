/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  Button
} from "react-native";

type Props = {};

/* App host url */
const APP_HOST = 'https://...';

export default class App extends Component<Props> {

  onTabItemClick = path => {
    this.webview.injectJavaScript(`window.location.pathname = '${path}'`);
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={ref => (this.webview = ref)}
          source={{
            uri: APP_HOST
          }}
          style={styles.webApp}
        />
        <View style={styles.tabBar}>
          <Button
            title="Home"
            onPress={() => this.onTabItemClick("/home/")}
            color="#842284"
            style={styles.tabItem}
          />
          <Button
            onPress={() => this.onTabItemClick("/profile/")}
            title="Profile"
            color="#841599"
            style={styles.tabItem}
          />
          <Button
            onPress={() => this.onTabItemClick("/data-pump/")}
            title="Data Pump"
            color="#841599"
            style={styles.tabItem}
          />
          <Button
            onPress={() => this.onTabItemClick("/")}
            title="Chat"
            color="#841599"
            style={styles.tabItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    //  alignItems: 'center',
    backgroundColor: "#FFF"
  },
  webApp: {
    flex: 1,
    marginTop: 40
  },
  tabBar: {
    height: 80,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    flexDirection: "row"
  },
  tabItem: {
    height: 50,
    flex: 1
  }
});
