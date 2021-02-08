import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
                                /* 1 and 2 */                               /* 3          5 */
    <View style={{padding: 25, flexDirection: 'row', alignItems: 'center', height: 300, alignItems: 'stretch' }}>
      <View style= {{
        backgroundColor: 'yellow',
        flex: 1, /* 3*/
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Hi</Text>
      </View>

      <View style= {{
        backgroundColor: 'blue',
        flex: 1, /* 4 */
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>I</Text>
      </View>

      <View style= {{
        backgroundColor: 'green',
        flex: 1, /* 4 */
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>am</Text>
      </View>

      <View style= {{
        backgroundColor: 'brown',
        flex: 1, /* 4 */
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Flex</Text>
      </View>

      <View style= {{
        backgroundColor: 'purple',
        flex: 2, /* 4 */
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
