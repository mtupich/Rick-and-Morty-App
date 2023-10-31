import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/pictures/rick-and-morty-portal.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
         ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
         explicabo.</Text>
         <TouchableOpacity style={[styles.button]}>
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
    // marginBottom: 60,
  },
  title:{
    fontSize: 28,
    fontFamily: "bold",
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