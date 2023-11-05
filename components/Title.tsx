import type { FC } from "react";

import { Text, StyleSheet } from "react-native";

import { Color } from "../const";

const Title: FC<any> = ({ title, size }: { title: string; size: number }): JSX.Element => {
	return <Text style={[styles.main, { fontSize: size }]}>{title}</Text>;
};
const styles = StyleSheet.create({
	main: {
		color: Color.white,
		fontWeight: "700",
		fontSize: 15,
	},
});

export default Title;
