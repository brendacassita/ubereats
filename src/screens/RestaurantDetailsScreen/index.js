import {View, Text, Image, FlatList} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'

const restaurant = restaurant[0]


const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image source={{uri: restaurant.image}} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle} >
            ${restaurant.deliveryFee} &#8226; 
            {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes
          </Text>
    
    </View>
  )
}

const styles = StyleSheet.create({})
  image: {
    width: "100%",
    aspectRatio: 4/3,
  }

export default RestaurantDetailsPage 