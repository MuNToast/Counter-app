import React from 'react';
import { Text, View, Button } from 'react-native';
import Sentry from 'sentry-expo';

export default class CounterScreen extends React.Component {
    state = {
        count: 0
    };
    _add = number => {
        const count = this.state.count + number;

        if (count > 33) {
            throw new Error("count > 33");
        }

        this.setState({
            count
        });
    };

    render() {
        return (
            <View>
                <Text> CounterScreen </Text>
                <Text> {this.state.count} </Text>
                <Button title="+10" onPress={ () => this._add(10) } />
                <Button title="+1" onPress={ () => this._add(1) } />
            </View>
        );
    }
}