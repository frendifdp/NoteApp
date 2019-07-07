import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList} from 'react-native';
import {createStackNavigator, withNavigation} from 'react-navigation';
import Menu, { MenuItem } from 'react-native-material-menu';
import AddNote from './AddNote';
import EditNote from './EditNote';
import moment from 'moment';


import {getNote, delNote} from '../public/redux/actions/note';
import { connect } from 'react-redux';
import _ from 'lodash';

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

	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
	 	return {
			title: 'Note App',
			headerTitleStyle: {
				marginLeft: '35%'
			},
			headerRight: (
				<TouchableOpacity onPress={params.showMenu}>
					<Image source={require('../../assets/images/download.png')} style={{marginRight: 10, width: 25, height: 25}}/>
				</TouchableOpacity>
			),
			headerLeft: MyButton
		}
	}
	constructor(props) {
	  	super();
		this.state = {
			search : '',
			sort: 'DESC',
			page: 1,
			color : ['#2FC2DF', '#FAD06C', '#C0EB6A', '#FF92A9']
		};
	}

	addNavigate = () => {
		const {navigation} = this.props;
		navigation.navigate('AddNote')
	};
	editNavigate = (item) => {
		const {navigation} = this.props;
		navigation.navigate('EditNote', item)
	};

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

	getNote = () => {
		this.setState({page: 1})
		this.props.dispatch(getNote(this.state.search, this.state.sort, 1))
    }

	fillterNote = (query) => {
		const q = query
		if(q.search !== undefined){
			this.setState({search: q.search})
			q.page = 0
		}
		else{
			q.search = ''
		}
		if(q.sort !== undefined){
			this.setState({sort: q.sort})
			q.page = 0
		}
		else{
			q.sort = this.state.sort
		}
		if(q.page === 0){
			q.page = 1
		}
		else if(q.page !== undefined){
			this.setState({page: this.state.page + 1})
			q.page = this.state.page + 1
			if(q.page > this.props.note.max){
				q.page = this.props.note.max
			}
		}
		else{
			q.page = this.props.note.max
		}
		
		this.props.dispatch(getNote(q.search, q.sort, q.page))
		this.props.note.isLoading;
	}

	delNote = (id) => {
		this.props.dispatch(delNote(id))
	}

	confirmDelete(id) {
        Alert.alert(
            "Delete Note",
            "Are you sure want to delete note?",
            [
                {
                    text: "NO", onPress: () => {
                        // console.log("Cancel delete");
                    }
                },
                {
                    text: "YES", onPress: () => {
                        // console.log("Confirm delete");
                        // this.deleteSingleNote(note);
                        // this.removeNote(note)
						this.delNote(id)
						this.props.dispatch(getNote())
						this.props.note.isLoading
                    }
                }
            ],
            { cancelable: false }
        )
    }

	componentDidMount = () => {
		this.props.navigation.setParams({ showMenu: this.showMenu });
		this.getNote()
		this.subs = [
			this.props.navigation.addListener('willFocus', () => {
				this.setState({isLoading: false})
				this.getNote()
			})
		]
	};

	componentWillUnmount() {
		this.subs.forEach(sub => {sub.remove()})
	}


	renderItem = ({ item, index }) => (
        <TouchableOpacity style={{
			//backgroundColor: item.color,
			backgroundColor: this.state.color[item.categoryId%this.state.color.length],
			marginLeft: '3.5%',
			marginRight: '3.5%',
			height: 140,
			width: '43%',
			marginTop: 10,
			marginBottom: 10,
			borderRadius: 8,
			elevation: 3
		}}
		onPress={() => this.editNavigate(item)}
		onLongPress={() => this.confirmDelete(item.id)}
		>
			
			<Text style={{color: 'white', fontWeight: 'bold', marginLeft: 105, marginTop: 5,  fontSize: 14}}>
				{moment(item.time).format('DD MMM')}
            </Text>
			<Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, fontSize: 20, paddingRight: 10}} 
			numberOfLines={1}>{item.title}</Text>
			<Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, marginTop: 3, fontSize: 12, paddingRight: 10}}
			numberOfLines={1}>{item.category}</Text>
	      	<Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, marginTop: 7, fontSize: 14, paddingRight: 10}}
			numberOfLines={5}>{item.note}</Text>
	    </TouchableOpacity>
    )
	render(){
		console.warn(this.props.note.data)
		return (
			<View style={styles.container}>

				<View style={{position: 'absolute', right: 0, top: -10}}>
					<Menu
						ref={this.setMenuRef}
						button={<Text style={{width: 50, height: 20}}> </Text>}
					>
						<MenuItem onPress={() => {
							this.fillterNote({sort: 'ASC'});
							this.hideMenu();
						}}>ASCENDING</MenuItem>
						<MenuItem onPress={() => {
							this.fillterNote({sort: 'DESC'});
							this.hideMenu();
						}}>DESCENDING</MenuItem>
					</Menu>
				</View>
				<View>
					<TextInput style={styles.search} placeholder="Type Here" 
						onChangeText={ _.debounce((ttl) => this.fillterNote({search: ttl}), 500)}/>
				</View>
				{this.props.note.data === undefined ? 
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<Text>
						No data
						</Text>
					</View> : this.props.note.data === '404 not found' ? <Text>Not Found</Text> :

					<FlatList numColumns={2}
						data={this.state.page === 1 ? this.props.note.data : this.props.note.data === '404 not found' ? 
						this.props.note.data : this.props.note.loaded}
						renderItem={this.renderItem}
						refreshing={this.props.note.isLoading}
						onRefresh={this.getNote}
						keyExtractor={(item, index) => item.id}
						onEndReachedThreshold={0.5}
  						onEndReached={() => {
							this.state.page < this.props.note.max ?
							this.fillterNote({page: 1}) : '';
							this.props.note.isLoading;
						}}
					/>
				}
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

const mapStateToProps = (state) => {
    return{
        note: state.note
    }
}

const mapConn = connect(mapStateToProps)(App);

const AppNavigator = createStackNavigator({
  	Home: {
    	screen: mapConn
	},
	AddNote: {
		screen: AddNote
	},
	EditNote: {
		screen: EditNote
	}
});

export default AppNavigator;