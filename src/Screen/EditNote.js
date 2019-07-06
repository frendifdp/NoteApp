import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Picker} from 'react-native';
import {connect} from 'react-redux'
import {editNote} from '../public/redux/actions/note';

class App extends Component {
	static navigationOptions = ({navigation}) => {
		const {params = {}} = navigation.state;
		return {
			title: 'Edit Note',
			headerTitleStyle: {
				marginLeft: '30%'
			},
			headerRight: (
				<TouchableOpacity onPress={params.editNote}>
					<Image source={require('../../assets/images/checked.png')} style={{marginRight: 20, width: 25, height: 25}}/>
				</TouchableOpacity>
			)
			//headerLeft: MyButton
		}
	}
	constructor(){
		super();
		this.state = {}
	}

	handleGoBack = () => {
		const {navigation} = this.props;
		navigation.navigate('Home')
  	}

	editNote = () => {
		const id = this.state.id
		const title = this.state.title
		const note = this.state.note
		const category = this.state.category
		try {
			this.props.dispatch(editNote(id, {title, note, category}))
			this.props.navigation.pop();
		} catch (error) {
			this.props.navigation.pop();
		}
	}

	componentDidMount = () => {
		this.setState({
			id : this.props.navigation.state.params.id,
			title : this.props.navigation.state.params.title,
			note: this.props.navigation.state.params.note,
			category: this.props.navigation.state.params.categoryId
		})
		this.props.navigation.setParams({editNote: this.editNote})
	}

	render(){
		return (
			<View style={{marginLeft: 25}}>
				<View style={{marginTop: 75}}>
					<TextInput value={this.state.title} placeholder="ADD TITLE ..." style={{fontSize: 25}}
						onChangeText={(title) =>
							this.setState({ title })
						}
					/>
					<TextInput value={this.state.note} multiline={true} placeholder="ADD DESCRIPTION ..." style={{fontSize: 25, maxHeight: '70%'}}
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
            				<Picker.Item label={item.category} value={item.id}/>)
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