import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CharacteresList() {

    return(
        <SafeAreaView style={styles.header}>
            <View>
                <Text style={styles.title}>Characteres</Text>
                <Text style={styles.subtitle}>Search for Rick & Morty characteres by name using filters</Text>

                <FlatList style={styles.list}
                    // keyExtractor={item => item.name}
                    // data={characteresListMock}
                    // renderItem={({item}) => <CharacterItem character={item} />}
                />
            </View>
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
        margin: 20,
      },
      subtitle:{
        fontSize: 18,
        color: "rgba(168, 168, 168, 1)",
        marginLeft: 20,
      },
      list:{
        flex:1,
        backgroundColor: "yellow",
      },
})

const imgTeste = require("../../assets/pictures/characterTesteImg.jpeg")

 export const characteresListMock = [
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

