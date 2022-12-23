import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import styles from './styles'
import { Product } from '../../components'

const AllProductsScreen = () => {
    const { category } = useRoute().params

    return (
        <View style={styles.container}>
            <FlatList
                data={category.products}
                renderItem={({ item }) => <Product product={item} vertical/>}
                keyExtractor={(item, index) => index}
                contentContainerStyle={styles.content}
                ListHeaderComponent={<Text style={styles.categoryName}>{category.name}</Text>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default AllProductsScreen