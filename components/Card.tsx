import type { FC } from "react";

import { useState } from "react";
import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";

import { TCard } from "../type";
import { Color, WindowsWith } from "../const";

const Card: FC<any> = (props: TCard): JSX.Element => {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const {}: TCard = props;

	return (
		<Pressable style={styles.main} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
			<View style={[styles.cardContainer, isFocused ? { borderColor: Color.white } : null]}>
				<ImageBackground source={require("../assets/temp/channel.png")} style={styles.card} borderRadius={14} />
			</View>
			<View style={styles.info}>
				<Text lineBreakMode={"tail"} numberOfLines={2} style={[styles.text, styles.title]}>
					Hablemos
				</Text>
				<Text lineBreakMode={"tail"} numberOfLines={2} style={[styles.text, styles.description]}>
					Sociedad
				</Text>
			</View>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	main: {},
	cardContainer: {
		borderWidth: 3,
		padding: 5,
		paddingRight: 10,
		paddingBottom: 10,
		borderRadius: 14,
		marginBottom: 10,
	},
	card: {
		width: WindowsWith / 4.5,
		height: 140,
		padding: 10,
		borderWidth: 3,
	},
	cardFocus: {
		borderColor: Color.white,
	},
	info: {
		flexDirection: "column",
		marginLeft: 15,
		width: WindowsWith / 4.6,
	},
	text: {
		color: Color.white,
	},
	title: {
		marginBottom: 5,
	},
	description: {
		fontSize: 12,
	},
});

export default Card;
