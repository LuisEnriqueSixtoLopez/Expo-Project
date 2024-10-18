import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Movements = () => {
	return (
		<View style={styles.container}>
			<Text>Movements</Text>
			<Button title="Go to Home" onPress={() => router.back()} />
		</View>
	);
};

export default Movements;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
	},
});
