import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ChiTiet extends Component {
    state = {  }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>ChiTiet</Text>
            </View>
        );
    }
}