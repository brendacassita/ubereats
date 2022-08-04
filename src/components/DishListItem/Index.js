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
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: "Lightgray",
    borderBottomWidth: 1,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
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