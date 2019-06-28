import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Modal} from 'react-native';
import {createStackNavigator,createAppContainer, withNavigation} from 'react-navigation';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

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

class App extends React.PureComponent{
	_menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };

	static navigationOptions = {
		title: 'Note App',
		headerTitleStyle: {
			marginLeft: '35%'
		},
		headerRight: (
			<View>
				<Image source={require('../../assets/images/download.png')} style={{marginRight: 10, width: 30, height: 30}}/>
			</View>
		),
		headerLeft: MyButton
	}
	constructor(props) {
	  super();
	  this.state = {};
	}

	addNavigate = () => {
		const {navigation} = this.props;
		navigation.navigate('AddNote')
	};
	editNavigate = () => {
		const {navigation} = this.props;
		navigation.navigate('EditNote')
	};
	componentDidMount = () => {
		
	};
	render(){
		return (
			<View style={styles.container}>
				<View style={{position: 'absolute', right: 0}}>
	        	<Menu
	          		ref={this.setMenuRef}
	          		button={<Text onPress={this.showMenu} style={{width: 50, height: 20}}> </Text>}
	        	>
		          	<MenuItem onPress={this.hideMenu}>ASCENDING</MenuItem>
		          	<MenuItem onPress={this.hideMenu}>DESCENDING</MenuItem>
        		</Menu>
      			</View>

				<View>
					<TextInput style={styles.search} placeholder="Type Here" />
				</View>
				<FlatList numColumns={2}
				  	data={[
				  		{date: '24 Juni',title: 'Life Cycle', category: 'learn', note: 'Component DidMount, Component willUnmount ...', key: 'item0', color: '#2FC2DF'},
				  		{date: '23 Juni',title: 'Hooks', category: 'learn', note: 'UseState, UseEffect, UseConteks, UseStyle, UseReducer, UseRef ...', key: 'item1', color: '#2FC2DF'},
				  		{date: '24 Juni',title: 'Daily Standup', category: 'work', note: 'Yesterday i’m learn about react native, Today i will start make application ...', key: 'item2', color: '#C0EB6A'},
				  		{date: '24 Juni',title: 'Macbook', category: 'wishlist', note: 'I have to buy a Macbook this year ...', key: 'item3', color: '#FAD06C'},
				  		{date: '24 Juni',title: 'Daily Standup', category: 'work', note: 'Yesterday i’m learn about react native, Today i will start make application ...', key: 'item4', color: '#C0EB6A'},
				  		{date: '24 Juni',title: 'Today', category: 'personal', note: 'Install React Native, Learn about React Native, Make simple app ...', key: 'item5', color: '#FF92A9'},
				  		{date: '24 Juni',title: 'Today', category: 'personal', note: 'Install React Native, Build as signed apk ...', key: 'item5', color: '#FF92A9'}
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
						}}
						onPress={this.editNavigate}
						>
							<Text style={{color: 'white', fontWeight: 'bold', marginLeft: 105, marginTop: 5,  fontSize: 14}}>{item.date}</Text>
				        	<Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, fontSize: 20, }}>{item.title}</Text>
							<Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, marginTop: 3, fontSize: 12}}>{item.category}</Text>
				        	<Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, marginTop: 7, fontSize: 14}}>{item.note}</Text>
					    </TouchableOpacity>
				  	)}
				/>
				<TouchableOpacity style={styles.fab} onPress={this.addNavigate}>
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