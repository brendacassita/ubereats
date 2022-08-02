import {View, Text, StyleSheet, Image} from "react-native"

const DishListItem = ({dish}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>${dish.price}</Text>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  description: {
    color: "gray",
    marginVertical: 5,

  },
  price: {
    fontSize: 16,
  },
})

export default DishListItem 