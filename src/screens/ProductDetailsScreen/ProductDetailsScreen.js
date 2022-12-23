import { View, Text, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Icon from '@expo/vector-icons/Ionicons'
import { Button, Input } from '../../components'
import { useNavigation, useRoute } from '@react-navigation/native'

const ProductDetailsScreen = () => {
  const { goBack } = useNavigation()
  const { product } = useRoute().params
  const [isFavorite, setIsFavorite] = useState(false)
  const [cartNumber, setCartNumber] = useState(0)
  const [notes, setNotes] = useState()
  const [counter, setCounter] = useState(1)
  const [isAddToCart, setIsAddToCart] = useState(true)

  const handleCounter = (type) => {
    if (type === 'decrement') {
      if (counter > 1) {
        setCounter(counter - 1)
      }
    } else {
      setCounter(counter + 1)
    }
  }

  const handleAddRemoveCart = () => {
    if (isAddToCart) {
      setCartNumber(cartNumber + 1)
    } else {
      setCartNumber(cartNumber - 1)
    }
    setIsAddToCart(!isAddToCart)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground source={product.image} style={styles.image}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backIconWrapper} activeOpacity={0.8}
              onPress={goBack}>
              <Icon name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.8}
                onPress={() => setIsFavorite(!isFavorite)}>
                <Icon name="heart" size={24} color={isFavorite ? 'red' : '#ccc'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.8}>
                <Icon name="cart-outline" size={24} color='#54a8fc' />
                <View style={styles.badge} >
                  <Text style={styles.badgeText} >{cartNumber}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.namePriceWrapper}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>
          <View style={styles.rating}>
            <Icon name='star' size={20} color='#54a8fc' />
            <Icon name='star' size={20} color='#54a8fc' />
            <Icon name='star' size={20} color='#54a8fc' />
            <Icon name='star' size={20} color='#54a8fc' />
            <Icon name='star' size={20} color='#54a8fc' />
          </View>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.notes}>Notes:</Text>
          <Input
            wrapperStyle={styles.input}
            placeholder='Enter your notes'
            onChangeText={setNotes}
            value={notes} />
        </View>
        <View style={styles.footer}>
            <View style={styles.counterWrapper}>
              <TouchableOpacity style={styles.counterButton} activeOpacity={0.8}
                onPress={() => handleCounter('decrement')}>
                <Icon name="remove" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.counterText}>{counter}</Text>
              <TouchableOpacity style={styles.counterButton} activeOpacity={0.8}
                onPress={() => handleCounter('increment')}>
                <Icon name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <Button title={isAddToCart ? 'Add to cart' : 'Remove from cart'} wrapperStyle={styles.button}
              onPress={handleAddRemoveCart} />
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ProductDetailsScreen