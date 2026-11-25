import { StyleSheet, Text } from 'react-native'
import { Link, link } from 'expo-router'
import ThemeView from '../components/ThemeView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
const Home = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer />

      <ThemedText style={styles.title} title={true}>
        The Number one
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Reading list App</ThemedText>
      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>
    </ThemeView>
  )
}

export default Home

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
  img: {
    marginVertical: 20,
    width: 300,
    height: 200,
  },
})
