import type { FC } from "react";

import { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";

import Title from "../assets/logo";

import { Color } from "../const";

const Splash: FC = (): JSX.Element => {
	const startAnimation: Animated.Value = useRef(new Animated.Value(0)).current;
	const startAnimationUp: Animated.Value = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const startAnimationTimeOut = setTimeout(() => {
			Animated.sequence([
				Animated.timing(startAnimation, {
					toValue: 20,
					duration: 500,
					useNativeDriver: true,
				}),
				Animated.timing(startAnimation, {
					toValue: -40,
					duration: 500,
					useNativeDriver: true,
				}),
				Animated.timing(startAnimation, {
					toValue: 0,
					duration: 1000,
					useNativeDriver: true,
				}),
			]).start();
		}, 1000);

		return () => {
			clearTimeout(startAnimationTimeOut);
		};
	});

	return (
		<Animated.View style={styles.container}>
			<Animated.View
				style={{
					transform: [{ translateX: startAnimation }, { translateY: startAnimationUp }],
				}}
			>
				<Title width={100} height={25} color="white" />
			</Animated.View>
		</Animated.View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.black,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Splash;
