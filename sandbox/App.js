import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View >
            <Text style={styles.displayText}>Here to WIN</Text>
          </View>
        </View>
        <View style={styles.anotherInnerContainer}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 3,
    backgroundColor: '#f7f7f7',
  },
  anotherInnerContainer: {
    flex: 7,
    backgroundColor: '#0033cc',
  },
  displayText: {
    color: '#ff0066',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20
  },
});
