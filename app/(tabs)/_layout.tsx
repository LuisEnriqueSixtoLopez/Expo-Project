import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack, Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Redirect } from "expo-router";
import { Text } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	// const [loaded] = useFonts({
	// 	SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	// });

	// useEffect(() => {
	// 	if (loaded) {
	// 		SplashScreen.hideAsync();
	// 	}
	// }, [loaded]);

	// if (!loaded) {
	// 	return null;
	// }

	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					height: 88,
					display: "flex",
				},
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",

					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "home" : "home-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarItemStyle: { display: "none" },
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "home" : "home-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="card"
				options={{
					title: "Tarjeta",

					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "card" : "card-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "Explore",

					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "code" : "code-outline"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
