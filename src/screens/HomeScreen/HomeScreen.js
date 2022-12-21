import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, ScrollView } from 'react-native';
import styles from './styles';
import Icon from '@expo/vector-icons/MaterialIcons'
import { Categories, Products } from './components';
import { categories, products, sliders } from '../../utils/dummyData';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="notifications" size={30} color="#555" />
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage} />
      </View>
      <View style={styles.bottomLineHeader} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sliderContainer}>
          <FlatList
            data={sliders}
            renderItem={({ item }) => <Image source={item.image} style={styles.imageSlider} />}
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </View>
        <View style={styles.horizontalLine} />
        <View>
          <Text style={styles.sectionText}>Newest Product</Text>
          <FlatList
            data={products}
            renderItem={({ item }) => <Products product={item} />}
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionText}>Product Categories</Text>
          <FlatList
            data={categories}
            renderItem={({ item }) => <Categories category={item} />}
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;