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
    const [isAlive, setIsAlive] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Novo estado
    
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
    
            if (Array.isArray(episodesData)) {
                setEpisodes(episodesData);
            } else {
                console.error("episodesData is not an array");
                setEpisodes([episodesData]);
            }
    
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false);
        }
    };
    
    
    useEffect(() => {
        setIsLoading(true)
        getEpisodes(); 
        if (character.status.toLowerCase() === "dead") {
            setIsAlive(false)
        } else {
            setIsAlive(true)
        }         
    }, []);


    if (isLoading) {
        // Renderiza algo enquanto os dados estão sendo carregados
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (

        <View style={styles.header}>
            <View style={styles.imageBox}>
                 <Image style={styles.imageCharacter} source={{ uri: character.image }} />
            </View>

            <ScrollView style={styles.informationBox}>

                <View>

                    <View style={styles.alignment}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.boldTextTitle}>{character.name}</Text>
                        </View>
                        <TouchableOpacity onPress={toggleFavorite} style={{ marginRight: 24 }}>
                            <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={30} color={isFavorite ? 'red' : 'black'} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.alignment}>
                        <Icon name="fiber-manual-record" size={20} color={ isAlive ? "green" : "red" } style={{ marginRight: 12 }} />
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
                            data={episodes}
                            renderItem={({ item }) => (
                                <View style={styles.alignment}>
                                    <Text style={styles.episodeNumber}>{item.episode}: </Text>
                                    <Text style={styles.regularLettering}>{item.name}</Text>
                                </View>
                            )}
                            keyExtractor={(item) => item.episode.toString()}
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
        flex: 1,
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
        paddingVertical: 6,
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
      },
      imageCharacter:{
        width: "100%",
        height: "100%",
        padding: 10,
        borderRadius: 8,
      },
      episodeNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "rgba(88, 108, 54, 1)"
      },
});

const mockEpiseodesData= [
        {"episode": "S01E01", "name": "Pilot"}, 
        {"episode": "S01E02", "name": "Lawnmower Dog"}, 
        {"episode": "S01E03", "name": "Anatomy Park"}, 
        {"episode": "S01E04", "name": "M. Night Shaym-Aliens!"},
         {"episode": "S01E05", "name": "Meeseeks and Destroy"}, 
         {"episode": "S01E06", "name": "Rick Potion #9"},
        {"episode": "S01E07", "name": "Raising Gazorpazorp"}, 
        {"episode": "S01E08", "name": "Rixty Minutes"}, 
        {"episode": "S01E09", "name": "Something Ricked This Way Comes"}, 
        {"episode": "S01E10", "name": "Close Rick-counters of the Rick Kind"},
        {"episode": "S01E11", "name": "Ricksy Business"}, 
        {"episode": "S02E01", "name": "A Rickle in Time"}, 
        {"episode": "S02E02", "name": "Mortynight Run"},
        {"episode": "S02E03", "name": "Auto Erotic Assimilation"}, 
        {"episode": "S02E04", "name": "Total Rickall"},
        {"episode": "S02E05", "name": "Get Schwifty"},
        {"episode": "S02E06", "name": "The Ricks Must Be Crazy"}
     ];
    



