import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function Welcome() {
	return (
		<View style={styles.container}>
			<Redirect href="/(tabs)" />

			{/* <Text>Welcome</Text> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#0da5e7",
	},
});
