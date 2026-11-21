import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/logo.png'
import { Link, link } from 'expo-router'
const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img}></Image>
      <Text style={styles.title}>The Number one</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading list App</Text>
      <Link href="/about" style={styles.link}>
        About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact Page
      </Link>
    </View>
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
