import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator, withNavigation} from 'react-navigation';
import Header from '../Components/header';
import Icon from "react-native-vector-icons/FontAwesome";


class MyBackButton extends Component {
  render() {
    return (
    	<TouchableOpacity>
			<Icon name="minus" size={25} style={{marginLeft: 10}} onPress={() => { this.props.navigation.navigate('Home') }}/>
		</TouchableOpacity>
    );
  }
}

const MyButton = withNavigation(MyBackButton);

class App extends Component {
	static navigationOptions = {
		title: 'Add Note',
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
			<View>
				
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

export default AppNavigator;