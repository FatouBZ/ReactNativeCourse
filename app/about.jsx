import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constant/colors'
import ThemeView from '../components/ThemeView'
import ThemedText from '../components/ThemedText'
const About = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemeView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedText style={[styles.title, { color: theme.text }]}>
        About Page
      </ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemeView>
  )
}

export default About
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
