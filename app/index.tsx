import type { FC } from "react";

import { useState, useEffect } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";

import { Splash } from "../screens";
import { Color } from "../const";
import { Header } from "../components";

const Page: FC = (): JSX.Element => {
	const [isAnimated, setIsAnimated] = useState<boolean>(true);

	useEffect(() => {
		const animationDone: NodeJS.Timeout = setTimeout(() => {
			setIsAnimated((prev: boolean) => !prev);
		}, 3000);
		return () => clearTimeout(animationDone);
	}, []);

	if (isAnimated) return <Splash />;

	return (
		<View style={styles.container}>
			<Header />
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.black,
	},
});
