import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, TouchableHighlight, Modal, Alert} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import MyButton from '../Components/button';

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
		navigation.navigate('Note')
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
				
				<ScrollView>
					{/*<FlatList
					  data={[{key: 'a'}, {key: 'b'}]}
					  renderItem={({item}) => <Text>{item.key}</Text>}
					/>

								 <Modal
			     //      animationType="slide"
			     //      transparent={false}
			     //      visible={this.state.modalVisible}
			     //      onRequestClose={() => {
			     //        Alert.alert('Modal has been closed.');
			     //      }}>
			     //      <View style={{marginTop: 22}}>
			     //        <View>
			     //          <Text>Hello World!</Text>

			     //          <TouchableHighlight
			     //            onPress={() => {
			     //              this.setModalVisible(!this.state.modalVisible);
			     //            }}>
			     //            <Text>Hide Modal</Text>
			     //          </TouchableHighlight>
			     //        </View>
			     //      </View>
			     //    </Modal>

			        
			          onPress={() => {
			            this.setModalVisible(true);*/}
			          
			          
					<View>
						<TextInput style={styles.search} placeholder="Type Here" />
					</View>
					<View style={styles.body}>
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
						<TouchableOpacity style={styles.box} />
					</View>
				</ScrollView>
				<TouchableOpacity style={styles.fab}>
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
		margin: '5%',
		justifyContent: 'center',
		borderRadius: 25,
		width: '90%',
		height: 45,
	},
	box: {
		backgroundColor: 'blue',
		marginLeft: '7%',
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