import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
// import all basic components
 
export default class Screen1 extends Component {
  //Screen1 Component
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.profil}/>
                    <Text style={{color: 'black', fontSize: 15}}>Frendi Dwi</Text>
                </View>
                <View style={styles.row}>
                    <Icon style={styles.category} name="plus-circle">
                        <Text> Personal</Text>
                    </Icon>
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        // paddingTop: 20,
        // alignItems: 'center',
        // marginTop: 50,
        // justifyContent: 'center',
    },
    profil: {
        backgroundColor: 'blue',
        marginTop: '15%',
        marginBottom: '5%',
        width: 100,
        height: 100,
        borderRadius: 50
    },
    row: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
    },
    category: {
        marginLeft: -90,
        fontSize: 25,
        height: 30,
        fontWeight: 'bold',
        color: 'black'
    }
});