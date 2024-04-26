import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button mode="contained" onPress={()=> navigation.navigate('Details')} title='Go to details'></Button>
    </View>
  )
}

export default HomeScreen

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})