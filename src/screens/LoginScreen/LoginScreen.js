import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { Button, Input } from '../../components';
import styles from './styles';

const LoginScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const visibleHandler = () => setIsVisible(prevIsVisible => prevIsVisible ? false : true)
  const visibleIcon = (<TouchableOpacity
    style={styles.visibleIcon}
    onPress={visibleHandler}>
    {isVisible ?
      <Icon name='ios-eye' size={16} color={'#c6c6c6'} /> :
      <Icon name='ios-eye-off' size={16} color={'#c6c6c6'} />}
  </TouchableOpacity>)

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError(true)
    } else {
      navigation.navigate('HomeScreen');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.backgroundImage}
        >
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo} />
          <View style={styles.WrapperForm}>
            <Input
              wrapperStyle={styles.input}
              placeholder='Email'
              onChangeText={val => setEmail(val)}
              keyboardType='email-address'
              renderIconLeft={() => <Icon name='mail' size={16} color={'#c6c6c6'} />} />
            {error && email === '' && <Text style={styles.errorText}>Email is required</Text>}
            <Input
              wrapperStyle={styles.input}
              placeholder='Password'
              secureTextEntry={!isVisible}
              onChangeText={val => setPassword(val)}
              renderIconLeft={() => <Icon name='lock-closed' size={16} color={'#c6c6c6'} />}
              renderIconRight={() => visibleIcon} />
            {error && password === '' && <Text style={styles.errorText}>Password is required</Text>}
            <Button
              onPress={handleLogin}
              title='Login'
              wrapperStyle={styles.button} />
          </View>
          <View style={styles.registerAction}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.registerText}>Register now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen;
