import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../Components/header';

export default class App extends Component {
	static navigationOptions = {
		title: 'Note'
	}
	constructor(){
		super();
		this.state = {}
	}

	handleGoBack = () => {
    	const {navigation} = this.props; //es6
    	navigation.goBack();
    	this.props.navigation.goBack();
  	}

	componentDidMount = () => {

	}

	render(){
		return (
			<View style={styles.container}>
				<Header title='This Note' />
				<TouchableOpacity onPress={this.handleGoBack} style={{backgroundColor:'blue'}} >
			        <Text style={{color:'white'}} >GO BACK</Text>
        		</TouchableOpacity>
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
