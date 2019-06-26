import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";

class MyBackButton extends React.Component {
  render() {
    return (
    	<TouchableOpacity>
			<Icon name="plus" size={25} style={{marginLeft: 10}} onPress={() => { this.props.navigation.toggleDrawer() }}/>
		</TouchableOpacity>
    );
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);