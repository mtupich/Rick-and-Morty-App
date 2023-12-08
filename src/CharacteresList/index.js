import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function CharacteresList({ navigation }) {
  const [allCharacters, setAllCharacters] = useState([]); 
  const [characters, setCharacters] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCharacters();
  }, []);

  const LoadingOverlay = () => (
    <View style={styles.overlay}>
      <View style={styles.overlayContent}>
        <ActivityIndicator size="large" color="black" />
      </View>
    </View>
  );

  const getCharacters = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      const newArray = response.data.results;
      setAllCharacters(newArray);
      setCharacters(newArray);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(true)
      console.error("Error fetching data:", error);
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredCharacters = allCharacters.filter(
      character => character.name.toLowerCase().includes(query.toLowerCase())
    );
    setCharacters(filteredCharacters);
  }

  const handleDetail = (item) => {
    navigation.navigate('CharacterDetail', { character: item });
  };

  const handleFavorites = () => {
    navigation.navigate('Favorites');
  };
  
  return (
    <View style={styles.header}>
      {isLoading && <LoadingOverlay />}     
      <View style={styles.aligment}>
        <Text style={styles.title}>Characters</Text>
        <TouchableOpacity onPress={handleFavorites} style={{ marginTop: 24, marginLeft: 140 }}>
          <FontAwesome name='heart' size={30} color='rgba(88, 108, 54, 1)'/>
        </TouchableOpacity>
      </View>

        <Text style={styles.subtitle}>Search for Rick & Morty characters by name using filters</Text>

          <View style={styles.searchContainer}>
          <Ionicons name="md-search" size={24} color="black" style={styles.searchIcon} />
          <TextInput
              style={styles.search}
              placeholder='What character are you looking for?'
              value={searchQuery}
              onChangeText={handleSearch}
          />
          </View>

        <FlatList
          style={styles.list}
          data={characters}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleDetail(item)}>
            <View style={[styles.card, styles.box]}>
              <Image style={styles.imageCharacter} source={{ uri: item.image }} />
              <View style={styles.info}>
                <Text style={styles.infoTitle}>{item.name}</Text>
                <Text>{item.status}</Text>
                <Text style={styles.infoTitle}>Last known location</Text>
                <Text>{item.origin.name}</Text>
              </View>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );
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
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 24,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
      },
      searchIcon: {
        marginRight: 10,
      },
      search: {
        flex: 1,
      },
      aligment: {
        flexDirection: 'row',
      }, 
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Branco translúcido
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      overlayContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      },
})


