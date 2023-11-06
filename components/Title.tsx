import type { FC } from "react";

import { Text, StyleSheet } from "react-native";

import { Color } from "../const";

const Title: FC<any> = ({ title, size = 15 }: { title: string; size: number }): JSX.Element => {
	return <Text style={[styles.main, { fontSize: size }]}>{title}</Text>;
};
const styles = StyleSheet.create({
	main: {
		color: Color.white,
		fontWeight: "700",
		textTransform: "uppercase",
	},
});

export default Title;
