import type { FC } from "react";

import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Color, screenWidth } from "../const";

const Favorite: FC = (): JSX.Element => {
	return (
		<View style={styles.main}>
			<Pressable style={styles.heartButton}>
				<Feather name={"heart"} size={24} color={"white"} />
				<View style={styles.heartCircle} />
			</Pressable>
			<Pressable style={styles.timeline}>
				<Text style={styles.timelineText}>Start a blog to reach your creative peak</Text>
			</Pressable>
		</View>
	);
};
const styles = StyleSheet.create({
	main: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 18,
	},
	heartButton: {
		width: 117,
		height: 68,
		borderRadius: 7,
		backgroundColor: Color.black,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 15,
		marginRight: 11,
	},
	heartCircle: {
		height: 45,
		width: 45,
		borderRadius: 45,
		backgroundColor: "#B7B7B7",
	},
	timeline: {
		backgroundColor: Color.black,
		borderRadius: 7,
		justifyContent: "center",
		paddingHorizontal: 20,
		width: screenWidth / 1.7,
	},
	timelineText: {
		color: Color.white,
	},
});

export default Favorite;
