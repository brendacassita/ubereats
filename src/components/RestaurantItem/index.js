import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Image 
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg',
        }} 
        style={styles.image}/>
      <Text style={styles.name}>El Cabo Cafe Bar Tres De May</Text>
      <Text style={styles.name}>$1.99 15-30 minutes</Text>
    </View>
  )
}

export default RestaurantItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5/3,
    marginBottom: 5,
  },
  title:{
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
});