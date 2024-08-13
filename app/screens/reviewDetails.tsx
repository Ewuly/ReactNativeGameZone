import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { RouteProp } from '@react-navigation/native';

export default function ReviewDetails({ route }: { route: RouteProp<any, any> }) {
    return (
        <View style={globalStyles.container}>
            <Text>{ route.params?.title}</Text>
            <Text>{route.params?.body}</Text>
            <Text>{route.params?.rating}</Text>
        </View>
    )
}