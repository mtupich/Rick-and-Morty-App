import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native'
import { SearchBar } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';

const imgTeste = require("../../assets/pictures/characterTesteImg.jpeg")

export default function CharacteresList() {
    const [arrayEmpty, setArrayData] = useState([]);

    useEffect(() => {
        getCharacteres();
    }, []);

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    const getCharacteres = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            const newArray = response.data.results;
            setArrayData(newArray);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return(
        <SafeAreaView style={styles.header}>
                <Text style={styles.title}>Characteres</Text>
                <Text style={styles.subtitle}>Search for Rick & Morty characteres by name using filters</Text>
                
                <View style={styles.viewSearch}>
                    <SearchBar
                    placeholder="What character are you looking for?"
                    onChangeText={updateSearch}
                    value={search}
                    placeholderTextColor={'grey'}
                    fontSize={14}
                    lightTheme={true}
                    backgroundColor={'lightgrey'}
                    containerStyle={{ backgroundColor: 'white', borderBottomWidth: 0, borderTopWidth: 0 }}
                    inputContainerStyle={{ borderRadius: 16, backgroundColor: 'lightgrey' }}
                    />
                </View>

                <FlatList style={styles.list}
                data={arrayEmpty}
                renderItem={({item}) => (
                    <View style={[styles.card, styles.box]}>
                        <Image style={styles.imageCharacter} source={{ uri: item.image }} />
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>{item.name}</Text>
                            <Text>{item.status}</Text>
                            <Text style={styles.infoTitle}>Last known location</Text>
                            <Text>{item.origin.name}</Text>
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
        marginLeft: 14,
       },
       infoTitle:{
        fontWeight: 'bold',
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
      viewSearch: {
        marginLeft: 14,
        marginRight: 14,
      },
})


