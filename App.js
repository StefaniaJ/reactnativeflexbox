import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 25}}>
      <View style= {{
        backgroundColor: 'yellow',
        height: 75,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Hi</Text>
      </View>

      <View style= {{
        backgroundColor: 'blue',
        height: 75,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>I</Text>
      </View>

      <View style= {{
        backgroundColor: 'green',
        height: 75,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>am</Text>
      </View>

      <View style= {{
        backgroundColor: 'brown',
        height: 75,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Flex</Text>
      </View>

      <View style= {{
        backgroundColor: 'purple',
        height: 75,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Box</Text>
      </View>
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
