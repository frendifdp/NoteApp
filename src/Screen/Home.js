import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Modal} from 'react-native';
import {createStackNavigator,createAppContainer, withNavigation} from 'react-navigation';

class Profil extends Component {
  render() {
    return (
    	<TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer()}}>
			<Image style={{marginLeft: 10, width: 30, height: 30}} source={require('../../assets/images/w644.png')} />
		</TouchableOpacity>
    );
  }
}

const MyButton = withNavigation(Profil);

class App extends Component{
	static navigationOptions = {
		title: 'Note App',
		headerTitleStyle: {
			marginLeft: '35%'
		},
		headerRight: (
			<TouchableOpacity>
				<Image source={require('../../assets/images/download.png')} style={{marginRight: 10, width: 20, height: 20}}/>
			</TouchableOpacity>
		),
		headerLeft: MyButton
	}
	constructor(props) {
	  super();
	  this.state = {};
	}

	// state = {
 //    modalVisible: false,
 //  };

 //  setModalVisible(visible) {
 //    this.setState({modalVisible: visible});
 //  }


	handleNavigate = () => {
		const {navigation} = this.props;
		navigation.navigate('AddNote')
	};
	componentDidMount = () => {
		
	};
	render(){
		return (
			<View style={styles.container}>
				<View>
					<TextInput style={styles.search} placeholder="Type Here" />
				</View>
				<FlatList numColumns={2}
				  	data={[
				  		{title: 'Title Text', key: 'item0', color: '#2FC2DF'},
				  		{title: 'Title Text', key: 'item1', color: '#2FC2DF'},
				  		{title: 'Title Text', key: 'item2', color: '#C0EB6A'},
				  		{title: 'Title Text', key: 'item3', color: '#FAD06C'},
				  		{title: 'Title Text', key: 'item4', color: '#C0EB6A'},
				  		{title: 'Title Text', key: 'item5', color: '#FF92A9'}
				  	]}
				  	renderItem={({item}) => (
				    	<TouchableOpacity style={{
				    		backgroundColor: item.color,
				    		marginLeft: '3.5%',
							marginRight: '3.5%',
							height: 140,
							width: '43%',
							marginTop: 10,
							marginBottom: 10,
							borderRadius: 8,
							elevation: 3
						}}>
				        	<Text>{item.title}</Text>
					    </TouchableOpacity>
				  	)}
				/>
				<TouchableOpacity style={styles.fab} onPress={this.handleNavigate}>
					<Text style={{color:'black', fontSize: 40, alignItems: 'center', right: -14, bottom: -3}}>+</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	body: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		marginRight: '7%'
	},
	search: {
		elevation: 5,
		paddingLeft: 25,
		margin: '3.5%',
		justifyContent: 'center',
		borderRadius: 25,
		width: '91.5%',
		height: 45,
	},
	box: {
		marginLeft: '3.5%',
		marginRight: '3.5%',
		height: 140,
		width: '43%',
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 10,
	},
	fab: {
		position: 'absolute',
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: 'white',
		right: 30,
		bottom: 30,
		elevation: 5
	},
	title: {
		color: 'white',
		paddingLeft: 10,
	}
});

const AppNavigator = createStackNavigator({
  	Home: {
    	screen: App
  	}
});
export default createAppContainer(AppNavigator);