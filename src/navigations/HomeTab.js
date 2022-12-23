import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import { ProfileScreen } from '../screens';


const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#54a8fc',
            tabBarInactiveTintColor: '#C9C9C9',
            headerShown: false,
        }}>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{
                tabBarLabel: "Home", tabBarLabelStyle: { fontSize: 12 },
                tabBarIcon: ({ focused, color, size }) =>
                    <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarLabel: "Profile", tabBarLabelStyle: { fontSize: 12 },
                tabBarIcon: ({ focused, color, size }) =>
                    <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={size} color={color} />
            }} />
        </Tab.Navigator>
    );
}

export default HomeTab;