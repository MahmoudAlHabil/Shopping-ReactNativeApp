import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Products = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    // overflow: 'scroll'
  },
  image: {
    width: 198,
    height: 220,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: -10,
    marginBottom: 0,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555'
  },
})