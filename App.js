import React, { Component } from 'react';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import Home from './src/Screen/Home';
import Drawer from './src/Components/drawer';
import { Provider } from 'react-redux';
import store from './src/public/redux/store';

// const AppNavigator = createStackNavigator({
//     defaultNavigationOptions: {
//         title: 'Note'
//     }
// });

const MyDrawer = createDrawerNavigator(
    {
        Home: {
            screen: Home,
        }
    },
    {
        contentComponent: Drawer,
        drawerWidth: 250
    }
);

// const AppNavigator = createStackNavigator(
//     {
//         Home: {
//             screen: Home,
//         },
//         AddNote: {
//             screen: AddNote,
//         },
//         EditNote: {
//         	screen: EditNote
//         },
//         DrawerNav:{
//             screen:MyDrawer
//   }
//     }
// );
// const MyNote = createStackNavigator(
//     {
//         Home: {
//             screen: Home,
//         },
//         AddNote: {
//             screen: AddNote,
//         }
//     }
// );

const AppContainer = createAppContainer(MyDrawer);

// const appContainer = createAppContainer(AppNavigator);
//export default appContainer;

export default class App extends Component {
    render(){
      return(
        <Provider store={store}>
          <AppContainer />
        </Provider>
      )
    }
  }