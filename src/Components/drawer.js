import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList} from 'react-native';

export default class Screen1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={require('../../assets/images/w644.png')} style={styles.profil}/>
                    <Text style={{color: 'black', fontSize: 25}}>Frendi Dwi</Text>
                </View>
                <FlatList style={{maxHeight: '19%'}}
                    data={[
                        {category: ' Personal', key: 'item0', img: require('../../assets/images/writing.png')},
                        {category: ' Work', key: 'item1', img: require('../../assets/images/portfolio.png')},
                        {category: ' Wishlist', key: 'item2', img: require('../../assets/images/wishlist.png')}
                    ]}
                    renderItem={({item}) => (
                        <TouchableOpacity style={{marginLeft: 25}}>
                            <Image style={{width: 25, height: 25}} source={item.img}/>
                            <Text style={styles.category}>{item.category}</Text>
                        </TouchableOpacity>
                    )}
                />
                <TouchableOpacity style={{marginLeft: 25,}}>
                    <Image style={{width: 25, height: 25}} source={require('../../assets/images/plus.png')}/>
                    <Text style={styles.category}> Add Category</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    profil: {
        marginTop: '15%',
        marginBottom: '5%',
        width: 100,
        height: 100,
    },
    row: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
    },
    category: {
        marginTop: -28,
        marginLeft: 25,
        marginBottom: 15,
        fontSize: 25,
        color: 'black'
    }
});