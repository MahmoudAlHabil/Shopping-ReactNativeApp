import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Category = ({ category }) => {
    const { navigate } = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigate('AllProductsScreen', { category })}
            style={styles.container} activeOpacity={0.8}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.name}>{category.name}</Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 6,
    },
    image: {
        width: 175,
        height: 200,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 6,
        marginLeft: 6,
    },
})