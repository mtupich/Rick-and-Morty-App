import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
import axios from 'axios';

export default function CharacterDetail({ route }) {
    const { character } = route.params;
    const [episodes, setEpisodes] = useState([]);
    const [isFavorite, setFavorite] = useState(false);
    const emptyArray = [];
    
    const toggleFavorite = () => {
        setFavorite(!isFavorite);
      };

    const extractedValues = character.episode.map((url) => {
    const lastSlashIndex = url.lastIndexOf('/');
    return url.substring(lastSlashIndex + 1);
    });
    

    const getEpisodes = async () => {
        try {
            const episodeIds = extractedValues.join(',');
            const url = `https://rickandmortyapi.com/api/episode/${episodeIds}`;
            
            const response = await axios.get(url);
            const episodesData = response.data;
    
            episodesData.forEach(item => {
                emptyArray.push({ episode: item.episode, name: item.name });
              });
        
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }    
    
    useEffect(() => {
        getEpisodes(); 
    }, []);

    return (

        <View style={styles.header}>
            <SafeAreaView  style={styles.header}>
            <View style={styles.imageBox}>
                 <Image style={styles.imageCharacter} source={{ uri: character.image }} />
            </View>
            </SafeAreaView>

            <ScrollView style={styles.informationBox}>

                <View>
                    <View style={styles.alignment}>
                        <Text style={styles.boldTextTitle}>{character.name}</Text>

                        <TouchableOpacity>
                            <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={30} color={isFavorite ? 'red' : 'black'} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.alignment}>
                        <Icon name="fiber-manual-record" size={20} color="red" />
                        <Text style={styles.regularLettering}>{character.status}</Text>
                    </View>


                    <Text style={[styles.boldTextSubtitles, styles.titleMargin]}>About</Text>
                </View>

                <View style={styles.alignment}>
                    <View>
                        <Text style={[styles.darkGrayText, styles.titleMargin]}>Specie:</Text>
                        <Text style={[styles.darkGrayText, styles.titleMargin]}>Origin:</Text>
                        <Text style={[styles.darkGrayText, styles.titleMargin]}>Location:</Text>
                    </View>

                    <View>
                        <Text style={[styles.regularLettering, styles.titleMargin]}>{character.species}</Text>
                        <Text style={[styles.regularLettering, styles.titleMargin]}>{character.origin.name}</Text>
                        <Text style={[styles.regularLettering, styles.titleMargin]}>{character.location.name}</Text>
                    </View>
                </View>

                <View>
                    <Text style={[styles.boldTextSubtitles, styles.titleMargin]}>Episodes</Text>

                    <FlatList
                            style={styles.list}
                            data={emptyArray}
                            renderItem={({ item }) => (
                                <View style={styles.alignment}>
                                   <View>
                                     <Text>{item.episode}: {item.name}</Text>
                                   </View>

                                   <View>
                                    <Text>{item.nomeEpisodio}</Text>
                                   </View>
                                </View>


                                
                            )}                            
                            keyExtractor={(item) => item.toString()}
                        />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
    },
    imageBox: {
        flex: 4,
        height: '40%', 
    },
    informationBox: {
        flex: 1,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 12,
        marginTop: '-10%',
        backgroundColor: 'white',
    },
    boldTextTitle: {
        fontSize: 36,
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 12,
    },
    boldTextSubtitles: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 12,
    },
    regularLettering: {
        fontSize: 20,
        color: "rgba(168, 168, 168, 1)",
        fontWeight: 'bold',
    },
    darkGrayText: {
        fontSize: 20,
        color: "rgba(68, 69, 73, 1)",
        fontWeight: 'bold',
        paddingRight: 8,
    },
    alignment: {
        flexDirection: 'row',
        marginVertical: 6,
        alignItems: 'center',
    },
    titleMargin: {
        marginVertical: 6,
    },
    list:{
        marginTop: 24,
        backgroundColor: 'pink',
        // paddingVertical: 12,

      },
      imageCharacter:{
        width: "100%",
        height: "100%",
        padding: 10,
        borderRadius: 8,
      },
});




