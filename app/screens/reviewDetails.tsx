import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { RouteProp } from '@react-navigation/native';
import Card from "../shared/card";

export default function ReviewDetails({ route }: { route: RouteProp<any, any> }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ route.params?.title}</Text>
                <Text>{route.params?.body}</Text>
                <Text>{route.params?.rating}</Text>
            </Card>
        </View>
    )
}