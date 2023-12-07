import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';

class Favorites extends Component {
    render() {
        return(
            <View>
                <Text style={styles.headerTitle}>Meus favoritos</Text>
            </View>
        )
    }
};

export default Favorites;

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 32, 
        fontWeight: 'bold',
    }
});


