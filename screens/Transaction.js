import React, {Component} from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Transaction extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Tela Transação</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5653D4'
    },
    text: {
        color: "#FFF",
        fontSize: 30
    }
})