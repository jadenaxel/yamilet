import type { FC } from "react";
import type { Router } from "expo-router/build/types";

import { useState } from "react";
import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

import { TCard } from "../type";
import { Color, screenWidth } from "../const";

const Card: FC<any> = (props: TCard): JSX.Element => {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const router: Router = useRouter();

	const { news, movie }: TCard = props;

	const newsStyle = { width: screenWidth / 3, height: 201 };

	return (
		<Pressable onPress={() => router.push("player")} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
			<View style={[styles.cardContainer, isFocused ? { borderColor: Color.white } : null]}>
				<ImageBackground source={require("../assets/temp/channel.png")} style={[styles.card, news ? newsStyle : null]} borderRadius={news ? 0 : 14} />
			</View>
			<View style={styles.info}>
				<Text lineBreakMode={"tail"} numberOfLines={2} style={[styles.text, styles.title]}>
					Hablemos
				</Text>
				{!news && !movie && (
					<Text lineBreakMode={"tail"} numberOfLines={2} style={[styles.text, styles.description]}>
						Sociedad
					</Text>
				)}
			</View>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	cardContainer: {
		borderWidth: 3,
		padding: 5,
		paddingRight: 10,
		paddingBottom: 10,
		borderRadius: 14,
		marginBottom: 10,
	},
	card: {
		width: screenWidth / 4.5,
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
		width: screenWidth / 4.6,
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
