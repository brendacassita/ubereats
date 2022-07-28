import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/Index';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';




export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantDetailsScreen />
      {/* <HomeScreen /> */}
    <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingVertical: 30,// temporary fix
  },
});
