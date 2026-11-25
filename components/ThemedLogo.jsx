import { Image, View, Text, useColorScheme } from 'react-native'
import React from 'react'
import LightLogo from '../assets/img/LightLogo.png'
import DarkLogo from '../assets/img/DarkLogo.png'
const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme()

  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
  return (
    <View>
      <Image source={logo} {...props} />
    </View>
  )
}

export default ThemedLogo
