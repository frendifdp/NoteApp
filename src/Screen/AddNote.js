import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Picker, FlatList} from 'react-native';
import {addNote} from '../public/redux/actions/note';
import { connect } from 'react-redux';

// class MyBackButton extends Component {
//   render() {
//     return (
//     	<TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }}>
// 			<Image style={{marginLeft: 10, width: 20, height: 20}} source={require('../../assets/images/left-arrow.png')} />
// 		</TouchableOpacity>
//     );
//   }
// }

//const MyButton = withNavigation(MyBackButton);

class App extends Component {
	static navigationOptions = ({navigation}) => {
		const {params = {}} = navigation.state;
		return {
			title: 'Add Note',
			headerTitleStyle: {
				marginLeft: '30%'
			},
			headerRight: (
				<TouchableOpacity onPress={params.addNote}>
					<Image source={require('../../assets/images/checked.png')} style={{marginRight: 20, width: 25, height: 25}}/>
				</TouchableOpacity>
			)
			//headerLeft: MyButton
		}
	}
	constructor(){
		super();
		this.state = {
			category: 2
		}
	}

	handleGoBack = () => {
		const {navigation} = this.props;
		navigation.navigate('Home')
  	}

	addNote = () => {
		const title = this.state.title;
		const note = this.state.note;
		const category = this.state.category;
		try {
			this.props.dispatch(addNote({ title, note, category}));
			this.props.navigation.pop();
		} catch (error) {
			this.props.navigation.pop();
		}
	}
	
	componentDidMount = () => {
		this.props.navigation.setParams({ addNote: this.addNote });
	}

	render(){
		//console.warn(this.props.category.data)
		return (
			<View style={{marginLeft: 25}}>
				<View style={{marginTop: 75}}>
					<TextInput placeholder="ADD TITLE ..." style={{fontSize: 25}}
					onChangeText={(title) =>
						this.setState({ title })
					}
					/>
					<TextInput multiline={true} placeholder="ADD DESCRIPTION ..." style={{fontSize: 25, maxHeight: '70%'}}
					onChangeText={(note) =>
						this.setState({ note })
					}
					/>
				</View>
				<View style={{marginTop: 200}}>
					<Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>Category</Text>
					<View style={{elevation: 5, backgroundColor: 'white', marginTop: 5, width: 150}}>
						<Picker
						mode="dropdown"
						selectedValue={this.state.category}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({category: itemValue})
						}
						>
						{ this.props.category.data.map((item, key)=>(
            				<Picker.Item label={item.category} value={item.id} key={key}/>)
            			)}
						</Picker>
					</View>
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

// const AppNavigator = createStackNavigator({
//   	AddNote: {
//     	screen: App
//   	}
// });
const mapStateToProps = (state) => {
    return{
        category: state.category
    }
}

export default connect(mapStateToProps)(App);