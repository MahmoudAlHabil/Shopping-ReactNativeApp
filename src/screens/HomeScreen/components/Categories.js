import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Categories = ({ category }) => {
    return (
        <View style={styles.container}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.name}>{category.name}</Text>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        width: 200,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
    },
    image: {
        width: 200,
        height: 220,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: -11,
        marginBottom: 0,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 6,
    },
})