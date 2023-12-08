import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import img from "../../assets/pictures/rick-and-morty-portal.png"

export default function Home({ navigation }) {

  function handlePress() {
    navigation.navigate('CharacteresList');
  }

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>In this app you will have access to about hundreds of characteres, images, location and episodes about the TV show Rick and Morty.</Text>
         <TouchableOpacity style={[styles.button]} onPress={handlePress}>
          <Text style={styles.buttonText}>See characteres</Text> 
        </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: "80%",
    height: "40%",
  },
  title:{
    fontSize: 28,
    marginBottom: 12,
  },
  subtitle:{
    fontSize: 18,
    color: "rgba(168, 168, 168, 1)",
    margin: 16,
  },
  button:{
    borderWidth: 1, 
    borderColor: "rgba(88, 108, 54, 1)",
    padding: 12,
    margin: 16,
    borderRadius: 8,
    width: "90%",
    alignItems: 'center',
  },
  buttonText:{
    color: "rgba(88, 108, 54, 1)",
  }
});

