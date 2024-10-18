import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const CardLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				options={{ title: "Card", headerShown: false }}
				name="index"
			/>
			<Stack.Screen
				options={{ title: "CardDetail", headerShown: false }}
				name="CardDetail"
			/>
		</Stack>
	);
};

export default CardLayout;

const styles = StyleSheet.create({});
