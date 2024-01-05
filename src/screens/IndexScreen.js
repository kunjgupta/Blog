import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const value = useContext(BlogContext)
    console.log(value)
    return (
        <View> 
            <Text>Index Screen: {value}</Text>
            <Text>Kunj: fff {value}</Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default IndexScreen;