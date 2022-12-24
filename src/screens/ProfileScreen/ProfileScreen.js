import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '../../components';
import styles from './styles'

const ProfileScreen = () => {
    const [name, setName] = useState('Doe');
    const [phone, setPhone] = useState('+972222222');
    const [email, setEmail] = useState('John@gmail.com');
    const [address, setAddress] = useState('');

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Profile</Text>
                </View>
                <View style={styles.form}>
                    <Image style={styles.image}
                        source={require('../../assets/images/person.png')} />
                    <Input
                        placeholder='Write your name'
                        value={name}
                        onChangeText={val => setName(val)}
                        wrapperStyle={styles.input} />
                    <Input
                        placeholder='Write your phone'
                        value={phone}
                        onChangeText={val => setPhone(val)}
                        wrapperStyle={styles.input} />
                    <Input
                        placeholder='Write your email'
                        value={email}
                        onChangeText={val => setEmail(val)}
                        wrapperStyle={styles.input} />
                    <Input
                        placeholder='Write your address'
                        value={address}
                        onChangeText={val => setAddress(val)}
                        wrapperStyle={styles.input} />
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.changePasswordText}>Change your password</Text>
                    </TouchableOpacity>
                    <Button
                        onPress={() => { }}
                        title='Save'
                        wrapperStyle={styles.button} />
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default ProfileScreen