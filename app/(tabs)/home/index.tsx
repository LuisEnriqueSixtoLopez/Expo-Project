import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function HomePage() {
	return (
		<View style={styles.container}>
			<SafeAreaView style={{ backgroundColor: "white" }} />
			<Text>HomePage</Text>
			<Button
				title="Go to Movements"
				onPress={() => router.navigate("/(tabs)/home/movements")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
