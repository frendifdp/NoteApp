import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Modal, TextInput} from 'react-native';

export default class Screen1 extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

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
                <TouchableOpacity style={{marginLeft: 25}} onPress={() => {this.setModalVisible(true);}}>
                    <Image style={{width: 25, height: 25}} source={require('../../assets/images/plus.png')}/>
                    <Text style={styles.category}> Add Category</Text>
                </TouchableOpacity>

                <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',backgroundColor: '#dddddd50', width: '100%', height: '100%'}}
                        onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                        <TouchableOpacity style={{borderRadius: 5,elevation: 5, backgroundColor: 'white', width: '80%', height: 200}}>
                            <TextInput style={styles.addcat} placeholder="Category" />
                            <TextInput style={styles.addcat} placeholder="Url" />
                            <TouchableOpacity style={{marginLeft: 150, marginTop: 50}}>
                                <Text style={{color: 'black', fontSize: 20}}>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 200, marginTop: -20}}
                            onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                                <Text style={{color: 'grey', fontSize: 20}}>Cancel</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
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
    },
    addcat: {
        fontSize: 20,
        paddingLeft: 20,
        marginTop: 10
    }
});