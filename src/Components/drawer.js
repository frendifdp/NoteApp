import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Modal, TextInput} from 'react-native';

import {getCategory, addCategory} from '../public/redux/actions/category';
import { connect } from 'react-redux';

class Drawer extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    getCategory = () => {
        this.props.dispatch(getCategory())
    }

    addCategory = () => {
        const category = this.state.category;
        const iconuri = this.state.iconuri;
        this.props.dispatch(addCategory({ category, iconuri}))
        this.setModalVisible(false);
        this.props.dispatch(getCategory())
		this.props.category.isLoading
    }

	componentDidMount = () => {
		this.getCategory()
	};
    
    renderItem = ({ item, index }) => (
        <TouchableOpacity style={{marginLeft: 25}}>
            <Image style={{width: 25, height: 25}} source={{uri : item.icon}}/>
            <Text style={styles.category}>{item.category}</Text>
        </TouchableOpacity>
    )

    render() {
        //console.log(this.props.category.data)
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={require('../../assets/images/w644.png')} style={styles.profil}/>
                    <Text style={{color: 'black', fontSize: 25}}>Frendi Dwi</Text>
                </View>
                <ScrollView>
                    <FlatList
                        data={this.props.category.data}
                        renderItem={this.renderItem}
                        refreshing={this.props.category.isLoading}
                        onRefresh={this.getCategory}
                        keyExtractor={(item, index) => item.id}
                    />
                    <TouchableOpacity style={{marginLeft: 25}} onPress={() => {this.setModalVisible(true);}}>
                        <Image style={{width: 25, height: 25}} source={require('../../assets/images/plus.png')}/>
                        <Text style={styles.category}> Add Category</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',backgroundColor: '#dddddd50', width: '100%', height: '100%'}}
                        onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                        <TouchableOpacity style={{borderRadius: 5,elevation: 5, backgroundColor: 'white', width: '80%', height: 200}}>
                            <TextInput  style={styles.addcat} placeholder="Category"
                            onChangeText={(category) =>
                                this.setState({ category })
                            }
                            />
                            <TextInput style={styles.addcat} placeholder="Url"
                            onChangeText={(iconuri) =>
                                this.setState({ iconuri })
                            }
                            />
                            <TouchableOpacity style={{marginLeft: 150, marginTop: 40}}
                            onPress={() => {this.addCategory()}}
                            >
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
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'green'
    }
});

const mapStateToProps = (state) => {
    return{
        category: state.category
    }
}

export default connect(mapStateToProps)(Drawer);