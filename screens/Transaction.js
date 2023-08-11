import React, {Component} from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";

import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from "expo-barcode-scanner";

export default class Transaction extends Component{
    constructor(){
        super();
        this.state={
            domState: 'normal',
            hasCameraPermissions: null,
            scanned: false,
            scannedData: ''
        }
    }

    getCameraPermissions = async domState => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions: status === "granted",
            domState: domState
        })
    }
    handleBarCodeScanner = async ({type, data}) => {
        this.setState({
            scannedData: data,
            domState: "normal",
            scanned: true
        })
    }

    render(){
        const {domState, hasCameraPermissions, scannedData, scanned} = this.state;
        if(domState === "scanner"){
            return (
                <BarCodeScanner 
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanner}
                    style= {StyleSheet.absoluteFillObject}
                />
            )
        }

        return (
            <View style={styles.container}>
              <ImageBackground source={bgImage} style={styles.bgImage}>
                <View style={styles.upperContainer}>
                  <Image source={appIcon} style={styles.appIcon} />
                  <Image source={appName} style={styles.appName} />
                </View>
                <View style={styles.lowerContainer}>
                  <View style={styles.textinputContainer}>
                  </View>
                </View>
              </ImageBackground>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    bgImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    upperContainer: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center"
    },
    appIcon: {
      width: 200,
      height: 200,
      resizeMode: "contain",
      marginTop: 80
    },
    appName: {
      width: 180,
      resizeMode: "contain"
    },
    lowerContainer: {
      flex: 0.5,
      alignItems: "center"
    },
    textinputContainer: {
      borderWidth: 2,
      borderRadius: 10,
      flexDirection: "row",
      backgroundColor: "#9DFD24",
      borderColor: "#FFFFFF"
    },
    textinput: {
      width: "57%",
      height: 50,
      padding: 10,
      borderColor: "#FFFFFF",
      borderRadius: 10,
      borderWidth: 3,
      fontSize: 18,
      backgroundColor: "#5653D4",
      fontFamily: "Rajdhani_600SemiBold",
      color: "#FFFFFF"
    },
    scanbutton: {
      width: 100,
      height: 50,
      backgroundColor: "#9DFD24",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    scanbuttonText: {
      fontSize: 20,
      color: "#0A0101",
      fontFamily: "Rajdhani_600SemiBold"
    }
  });