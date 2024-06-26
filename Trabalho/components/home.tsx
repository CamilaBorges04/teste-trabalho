import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Sobre from './sobre';
import gps from '../assets/gps.jpg';


export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>NavTrack</Text>
                    <Text style={styles.subtitle}>Navegue com confiança e rastreie sua</Text>
                    <Text style={styles.subtitle}>localização em tempo real!</Text>
                    {/* <img src={gps} alt='gps' /> */}
                    <Image source={gps} style={styles.gps} />
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Localizar</Text>
                    </TouchableOpacity>
                    <Text style={styles.subtitle1}>Developded by @CamilaBorges</Text>
                </View>
            );
        } else if (page === 'sobre') {
            return <Sobre />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#6774AE',
        marginBottom: 67,
    },
    subtitle: {
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subtitle1: {
        fontFamily: 'Arial',
        fontSize: 10,
        color: '#333',
        marginBottom: 5,
        marginTop: 69,
    },
    button: {
        backgroundColor: '#6774AE',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginTop: 20,
        width:250,
        height: 39,
    },
    buttonText: {
        fontFamily: 'Arial',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    gps:{
        height: 352,
        width:502,
        alignItems: 'center',
    },
});