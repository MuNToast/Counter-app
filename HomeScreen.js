import React from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text> HomeScreen </Text>
                <Button title="next" onPress={ () => this.props.navigation.navigate("Counter") } />
            </View>
        );
    }
}