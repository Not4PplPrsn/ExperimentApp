import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>La luna </Text>
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
