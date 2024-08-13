import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }: { navigation: any }) {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button title='back to home scren' onPress={pressHandler} />
        </View>
    )
}