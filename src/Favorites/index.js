import React, { useState, useEffect } from 'react'; 
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CharacteresList({ navigation }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        console.log("passei aqui 1")
        getData()
    }, []);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('listaDePersonagens');
            if (value !== null) {
                const storedCharacters = JSON.parse(value);
                setFavorites(storedCharacters)
                console.log("passei aqui 2")
                console.log(storedCharacters)
            }
        } catch (error) {
            // error reading value
            console.error('Erro ao ler dados:', error);
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.headerTitle}>Meus favoritos</Text>
   
        <FlatList
            style={styles.list}
            numColumns={2} 
            data={favorites}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.circularImage}
                    />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
        
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 32, 
        fontWeight: 'bold',
    },
    circularImage: {
        width: 150, 
        height: 150, 
        borderRadius: 75, 
        margin: 20,
        backgroundColor: 'green',
      },
      list: {
        flex:1,
        marginTop: 24,
      },
      name: {
        marginLeft: 50,
      },
});

const mock= [
    { id: '01', image: require('../../assets/pictures/characterTesteImg.jpeg'), name: 'Quantum Rick'},
    { id: '02', image: require('../../assets/pictures/characterTesteImg.jpeg'), name: 'Quantum Rick'},
    { id: '03', image: require('../../assets/pictures/characterTesteImg.jpeg'), name: 'Quantum Rick'},
    { id: '04', image: require('../../assets/pictures/characterTesteImg.jpeg'), name: 'Quantum Rick'},
];



