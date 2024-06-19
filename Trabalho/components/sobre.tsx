import React from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Home from './home';
import celgps from '../assets/celgps.jpg';

export default function App() {
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if(page === 'sobre') {
            return(
                <View style={styles.container}>
                    <Text style={styles.title}>NavTrack</Text>
                    <Image source={celgps} style={styles.celgps} />
                    <View style={styles.div}>
                    <Text style={styles.subtitle}>Sua localização atual!</Text>
                    <Text style={styles.subtitle2}>Longitude::</Text>
                    <Text style={styles.subtitle3}>Latitude:</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <Text style={styles.subtitle1}>Developded by @CamilaBorges</Text>
                    </View>
                </View>
            );
        }else if(page === 'home') {
            return <Home />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    div:{
        backgroundColor: '#6672AD',
        justifyContent: 'center',
        alignItems: 'center',
        width: 430,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
    },
    subtitle: {
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
        alignItems: 'center',
        marginTop: 47,
    },
    subtitle1: {
        fontFamily: 'Arial',
        fontSize: 10,
        color: '#fff',
        marginBottom: 5,
        marginTop: 69,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle2: {
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 27,
        marginTop: 64,
    },
    subtitle3: {
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 96,
        marginTop: 27,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginTop: 20,
        width:100,
        height: 30,
    },
    buttonText: {
        fontFamily: 'Arial',
        color: '#6672AD',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    celgps:{
        width: 335,
        height: 335,
    },
});