/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';
import CalendarView from "./CalendarView";

export default class MainView extends Component {
    render() {
        return (
            <CalendarView
                year={2017}
                month={7}
                selectOnListener={(date) => {
                    Alert.alert("选择", "选中日期" + date);
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});