import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, TouchableHighlight, Modal, Alert} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";

class MyBackButton extends Component {
  render() {
    return (
    	<TouchableOpacity>
			<Icon name="minus" size={25} style={{marginLeft: 10}} onPress={() => { this.props.navigation.toggleDrawer()}}/>
		</TouchableOpacity>
    );
  }
}

const MyButton = withNavigation(MyBackButton);

class App extends Component{
	static navigationOptions = {
		title: 'Note App',
		headerTitleStyle: {
			marginLeft: '35%'
		},
		headerRight: (
			<TouchableOpacity>
				<Icon name="sort" size={25} style={{marginRight: 10}}/>
			</TouchableOpacity>
		),
		headerLeft: MyButton
	}
	// this.props.navigation.toggleDrawer()
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
	toggleDrawer = () => {
		const {navigation} = this.props;
    	navigation.toggleDrawer();
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
				  		{title: 'Title Text', key: 'item0'},
				  		{title: 'Title Text', key: 'item1'},
				  		{title: 'Title Text', key: 'item2'},
				  		{title: 'Title Text', key: 'item3'}
				  	]}
				  	renderItem={({item}) => (
				  		<View style={styles.box}>
				    	<TouchableOpacity style={{backgroundColor: 'blue'}}>
				        	<Text>{item.title}</Text>
					    </TouchableOpacity>
					    </View>
				  	)}
				/>

				{/*
				<ScrollView>
					<View style={styles.body}>
						<TouchableOpacity style={styles.box}><Text style={{color: 'white'}}>dasdasdasdasdadadadsdasdasdasdasdadadads</Text></TouchableOpacity>
						<TouchableOpacity style={styles.box} />
						<TouchableOpacity style={styles.box} />
						<TouchableOpacity style={styles.box} />
						<TouchableOpacity style={styles.box} />
						<TouchableOpacity style={styles.box} />
						<TouchableOpacity style={styles.box} />
						<TouchableOpacity style={styles.box} />
						<TouchableOpacity style={styles.box} />
						<TouchableOpacity style={styles.box} />
						<TouchableOpacity style={styles.box} />
					</View>
				</ScrollView>
				*/}
				<TouchableOpacity style={styles.fab} onPress={this.handleNavigate}>
					<Icon name="plus" size={30} color='white' style={{right: -13, bottom: -11,justifyContent: 'center', alignItems: 'center'}}/>
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
		backgroundColor: 'pink',
		right: 30,
		bottom: 30
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