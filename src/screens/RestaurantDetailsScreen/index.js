import {View, Text, Image, FlatList} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import {Ionicons} from "@expo/vector-icons"
import DishListItem from '../../components/DishListItem/Index'
import { Header } from './Header'

const restaurant = restaurants[0]


const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      

      <FlatList 
      ListHeaderComponent={Header}
      data={restaurant.dishes}
      renderItem={({item})=> <DishListItem dish={item}/>} />
       <Ionicons 
          name="arrow-back-circle" 
          size={45} color="white" 
          style={styles.imageIcon} 
          />
      </View>


    
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5/3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
    margin: 10,
  },
  subtitle: {
    color: 'grey',
    fontSize: 15,
  },
  container: {
    margin: 10,
  }
})
  

export default RestaurantDetailsPage 