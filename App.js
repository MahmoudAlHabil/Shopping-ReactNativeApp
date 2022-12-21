import { StyleSheet, View } from 'react-native'
import React from 'react'
import RootStack from './src/navigations/RootStack'

const App = () => {
  return (
    <View style={styles.contanier}>
      <RootStack />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#fff'
  }
})