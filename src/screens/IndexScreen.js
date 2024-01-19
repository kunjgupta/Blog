import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context)
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () =>
                <TouchableOpacity >
                    <Feather name="plus" size={30} onPress={() => navigation.navigate('Create')} />
                </TouchableOpacity>,
        });
    }, []);
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={blogPosts => blogPosts.title}
                renderItem={({ item }) => {
                    return (<TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })} >
                        <View style={style.row}>
                            <Text style={style.title} >{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name="trash" style={style.icon} color="black" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>)
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },

    title: {
        fontSize: 18
    },

    icon: {
        fontSize: 24
    }

});


export default IndexScreen;