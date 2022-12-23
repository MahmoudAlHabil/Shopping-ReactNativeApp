import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { Button, Input } from '../../components';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const CreateAccountScreen = () => {
  const { navigate } = useNavigation()
  const [firstName, setFisrtName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const visibleHandler = () => setIsVisible(prevIsVisible => prevIsVisible ? false : true)
  const visibleIcon = (<TouchableOpacity
    style={styles.visibleIcon}
    onPress={visibleHandler}>
    {isVisible ?
      <Icon name='ios-eye' size={16} color={'#c6c6c6'} /> :
      <Icon name='ios-eye-off' size={16} color={'#c6c6c6'} />}
  </TouchableOpacity>)

  const handleSignup = () => {
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      setError(true)
    } else {
      navigate('HomeTab');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo} />
        <View style={styles.WrapperForm}>
          <Input
            wrapperStyle={styles.input}
            placeholder='First name'
            onChangeText={val => setFisrtName(val)}
            renderIconLeft={() => <Icon name='person-sharp' size={16} color={'#c6c6c6'} />} />
          {error && firstName === '' && <Text style={styles.errorText}>First name is required</Text>}
          <Input
            wrapperStyle={styles.input}
            placeholder='Last name'
            onChangeText={val => setLastName(val)}
            renderIconLeft={() => <Icon name='person-sharp' size={16} color={'#c6c6c6'} />} />
          {error && lastName === '' && <Text style={styles.errorText}>Last name is required</Text>}
          <Input
            wrapperStyle={styles.input}
            placeholder='Email'
            onChangeText={val => setEmail(val)}
            renderIconLeft={() => <Icon name='mail' size={16} color={'#c6c6c6'} />} />
          {error && email === '' && <Text style={styles.errorText}>Email is required</Text>}
          <Input
            wrapperStyle={styles.input}
            placeholder='Password'
            onChangeText={val => setPassword(val)}
            renderIconLeft={() => <Icon name='lock-closed' size={16} color={'#c6c6c6'} />}
            renderIconRight={() => visibleIcon}
            secureTextEntry={!isVisible} />
          {error && password === '' && <Text style={styles.errorText}>Password is required</Text>}
          <Button
            onPress={handleSignup}
            title='Sign Up'
            wrapperStyle={styles.button} />
        </View>
        <TouchableOpacity
          onPress={() => navigate('LoginScreen')}
          style={styles.haveAccountTouch}>
          <Text style={styles.haveAccountText}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CreateAccountScreen;

