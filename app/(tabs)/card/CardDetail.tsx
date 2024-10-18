import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function CardDetail() {
	return (
		<View>
			<Text>CardDetail</Text>
			<Button title="Go back" onPress={() => router.back()} />
		</View>
	);
}

const styles = StyleSheet.create({});
