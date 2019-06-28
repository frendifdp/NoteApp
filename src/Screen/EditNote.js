import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Picker} from 'react-native';
import {createStackNavigator, withNavigation, createAppContainer} from 'react-navigation';
import Header from '../Components/header';

class MyBackButton extends Component {
  render() {
    return (
    	<TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }}>
			<Image style={{marginLeft: 10, width: 20, height: 20}} source={require('../../assets/images/left-arrow.png')} />
		</TouchableOpacity>
    );
  }
}

const MyButton = withNavigation(MyBackButton);

class App extends Component {
	static navigationOptions = {
		title: 'Edit Note',
		headerTitleStyle: {
			marginLeft: '35%'
		},
		headerRight: (
			<TouchableOpacity>
				<Image source={require('../../assets/images/checked.png')} style={{marginRight: 10, width: 25, height: 25}}/>
			</TouchableOpacity>
		),
		headerLeft: MyButton
	}
	constructor(){
		super();
		this.state = {}
	}

	handleGoBack = () => {
		const {navigation} = this.props;
		navigation.navigate('Home')
  	}

	componentDidMount = () => {

	}

	render(){
		return (
			<View style={{marginLeft: 25}}>
				<View style={{marginTop: 75}}>
					<TextInput placeholder="ADD TITLE ..." style={{fontSize: 25}}/>
					<TextInput multiline={true} placeholder="ADD DESCRIPTION ..." style={{fontSize: 25, maxHeight: '70%'}}/>
				</View>
				<View style={{marginTop: 50}}>
					<Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>Category</Text>
					<Picker style={{marginTop: 5, elevation: 5, backgroundColor: 'white', width: 150}}>
						<Picker.Item label="Java" value="java" />
  						<Picker.Item label="JavaScript" value="js" />
					</Picker>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
    	flex: 1, //flexBox CSS
    	justifyContent: 'center',
	    alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});

const AppNavigator = createStackNavigator({
  	AddNote: {
    	screen: App
  	}
});

export default createAppContainer(AppNavigator);