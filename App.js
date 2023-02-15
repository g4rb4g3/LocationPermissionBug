import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    Location.requestForegroundPermissionsAsync().then((result) => {
      setText('requestForegroundPermissionsAsync: ' + JSON.stringify(result));
      Location.requestPermissionsAsync().then((result) => {
        setText((text) => text + '\n\nrequestPermissionsAsync: ' + JSON.stringify(result));
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
