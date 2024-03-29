import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ( { onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    return <View>
        <Text style={style.lable}>Enter Title: </Text>
        <TextInput style={style.input} value={title} onChangeText={text => {
            setTitle(text)
        }} />
        <Text style={style.lable} >Enter Content: </Text>
        <TextInput style={style.input} value={content} onChangeText={text => {
            setContent(text)
        }} />
        <Button title="Save Blog Post"
        onPress={() => onSubmit(title, content)}></Button>
    </View>
}

BlogPostForm.defaultProps = {
    initialValues : {
        title: '',
        content: ''
    }
}

const style = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },

    lable: {
        fontSize: 20,
        marginBottom: 5,
        marginStart: 5
    }
});

export default BlogPostForm