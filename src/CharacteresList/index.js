import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const imgTeste = require("../../assets/pictures/characterTesteImg.jpeg")

export default function CharacteresList() {

    return(
        <SafeAreaView style={styles.header}>
                <Text style={styles.title}>Characteres</Text>
                <Text style={styles.subtitle}>Search for Rick & Morty characteres by name using filters</Text>
                
                <FlatList style={styles.list}
                data={characteresListMock}
                renderItem={({item}) => (
                    <View style={[styles.card, styles.box]}>
                        <Image style={styles.imageCharacter}
                         source={imgTeste}
                        />
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>{item.name}</Text>
                            <Text>{item.aliveOrDead}</Text>
                            <Text style={styles.infoTitle}>Last known location</Text>
                            <Text>{item.lastPlaceSawed}</Text>
                        </View>
                        
                    </View>
                )}/>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    header:{
        flex: 1,
        backgroundColor: "white",
    },
    title:{
        fontSize: 28,
        margin: 24,
      },
      subtitle:{
        fontSize: 18,
        color: "rgba(168, 168, 168, 1)",
        marginLeft: 24,
      },
      list:{
        flex:1,
        marginTop: 24,
      },
      imageCharacter:{
        width: "33%",
        height: "100%",
        padding: 10,
        borderRadius: 8,
      },
      card:{
        borderWidth: 1,
        borderColor: 'grey',
        width: '90%',
        flexDirection: 'row',
        height: 130,
        marginBottom: 16,
        marginRight: 24,
        marginLeft: 24,
        borderRadius: 8,
       },
       info:{
        padding: 10,
       },
       infoTitle:{
        fontWeight: 'bold',
       },
       info:{

       },
       box: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5, // Somente Android
        shadowColor: '#000', // Somente iOS
        shadowOffset: { width: 0, height: 2 }, // Somente iOS
        shadowOpacity: 0.4, // Somente iOS
        shadowRadius: 2, // Somente iOS
      },
})



const characteresListMock = [
    {
        name: "Quantum Rick",
        image: imgTeste,
        aliveOrDead: "alive",
        lastPlaceSawed: "Earth (Replacement Dimension)"
    },
    {
        name: "Teste 1",
        image: imgTeste,
        aliveOrDead: "alive",
        lastPlaceSawed: "Earth (Replacement Dimension)"
    },
    {
        name: "Teste 2",
        image: imgTeste,
        aliveOrDead: "alive",
        lastPlaceSawed: "Earth (Replacement Dimension)"
    },
    {
        name: "Teste 3",
        image: imgTeste,
        aliveOrDead: "alive",
        lastPlaceSawed: "Earth (Replacement Dimension)"
    },
    {
        name: "Teste 4",
        image: imgTeste,
        aliveOrDead: "alive",
        lastPlaceSawed: "Earth (Replacement Dimension)"
    },
    {
        name: "Teste 5",
        image: imgTeste,
        aliveOrDead: "alive",
        lastPlaceSawed: "Earth (Replacement Dimension)"
    },
    {
        name: "Teste 6",
        image: imgTeste,
        aliveOrDead: "alive",
        lastPlaceSawed: "Earth (Replacement Dimension)"
    },
    {
        name: "Teste 7",
        image: imgTeste,
        aliveOrDead: "alive",
        lastPlaceSawed: "Earth (Replacement Dimension)"
    },
    {
        name: "Teste 8",
        image: imgTeste,
        aliveOrDead: "alive",
        lastPlaceSawed: "Earth (Replacement Dimension)"
    },
];

