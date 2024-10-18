import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Card() {
	return (
		<View style={styles.container}>
			<SafeAreaView style={{ backgroundColor: "white" }} />
			<Button
				title="Go to Home"
				onPress={() => router.push("/card/CardDetail")}
			/>
			<Text>Card</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidth: 1,
		backgroundColor: "pink",
	},
});
