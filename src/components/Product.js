import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Product = ({ product, vertical }) => {
  const { navigate } = useNavigation()
  const style = styles(vertical)

  return (
    <TouchableOpacity onPress={() => navigate('ProductDetailsScreen', { product })}
      style={style.container} activeOpacity={0.8}>
      <Image source={product.image} style={style.image} />
      <Text style={style.name}>{product.name}</Text>
      <Text style={style.price}>{product.price}</Text>
    </TouchableOpacity>
  )
}

export default Product

const styles = (vertical) => StyleSheet.create({
  container: {
    marginRight: vertical ? 0 : 20,
    marginBottom: vertical ? 20 : 0,
    height: 250,
    width: vertical ? '100%' : 175,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 6,
  },
  image: {
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    marginLeft: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 6,
    marginBottom: 10,
  },
})