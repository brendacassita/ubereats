import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import RestaurantItem from './src/components/RestaurantItem';
import restaurant from './assets/data/restaurants.json'


export default function App() {
  return (
    <View style={styles.container}>
     <RestaurantItem title="restaurant 1"/>
     <RestaurantItem title="restaurant 2"/>
     <RestaurantItem title="restaurant 3"/>
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
    padding: 10,
  },
});
