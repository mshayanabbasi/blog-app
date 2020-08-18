import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 20,
    margin: 10,
    padding: 10,
  },
});

export default BlogPostForm;
