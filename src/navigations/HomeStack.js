import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllProductsScreen, HomeScreen, ProductDetailsScreen } from '../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AllProductsScreen" component={AllProductsScreen}
                options={{ headerShown: true, title: 'All Product' }} />
            <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;