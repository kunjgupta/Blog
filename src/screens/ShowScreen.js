import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from "../context/BlogContext";
import { Entypo } from '@expo/vector-icons';

const ShowScreen = ({ navigation, route: { params } }) => {
    const { state } = useContext(Context)
    const { id } = params;

    console.log("Shouw: Id: "+id)

    const blogPost = state.find((blogPost) => blogPost.id === id)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () =>
                <TouchableOpacity >
                    <Entypo name="edit" size={24} color="black" onPress={() => navigation.navigate('Edit', { id: id })} />
                </TouchableOpacity>,
        });
    }, []);

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

const style = StyleSheet.create({});

export default ShowScreen