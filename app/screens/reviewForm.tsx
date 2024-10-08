import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm({ addReview }: { addReview: (review: any) => void }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    addReview(values);
                    actions.resetForm();
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Review Body"
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                        />
                        <Button title="Submit" color="maroon" onPress={() => props.handleSubmit()} />
                    </View>
                )}
            </Formik>
        </View>
    )
}   

