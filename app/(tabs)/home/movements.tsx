import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function movements() {
	return (
		<View style={styles.container}>
			<SafeAreaView style={{ backgroundColor: "white" }} />
			<View style={styles.subContainer}>
				<Text>movements</Text>
				<Button title="Go back" onPress={() => router.back()} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	subContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		paddingHorizontal: 10,
	},
});
