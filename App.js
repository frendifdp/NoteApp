import {View, Text} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import Home from './src/Screen/Home';
import AddNote from './src/Screen/AddNote';
import EditNote from './src/Screen/EditNote';
import Drawer from './src/Components/drawer';

// const AppNavigator = createStackNavigator({
//     defaultNavigationOptions: {
//         title: 'Note'
//     }
// });

const MyDrawer = createDrawerNavigator(
    {
        Home: {
            screen: Home,
        },
        AddNote: {
            screen: AddNote,
        },
        EditNote: {
        	screen: EditNote
        }
    },
    {
        contentComponent: Drawer,
        drawerWidth: 250
    }
);
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

const appContainer = createAppContainer(MyDrawer);

// const appContainer = createAppContainer(AppNavigator);
export default appContainer;