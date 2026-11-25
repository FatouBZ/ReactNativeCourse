import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ThemeView from '../components/ThemeView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemedText style={styles.title}>Contact Page</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemeView>
  )
}

export default Contact
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
})
