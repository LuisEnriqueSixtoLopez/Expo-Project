import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";

export default function index() {
	return (
		<View>
			<SafeAreaView style={{ backgroundColor: "white" }} />
			<Text>index</Text>
			<Button
				title="Go to movements"
				onPress={() => router.navigate("/views/movements")}
			/>
			{/* <Redirect href="/(tabs)/(home)" /> */}
		</View>
	);
}

const styles = StyleSheet.create({});
