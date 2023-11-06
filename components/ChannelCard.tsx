import type { FC } from "react";

import { useState, useRef, useEffect } from "react";
import { Animated, View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";

import { Color, WindowsHeight, WindowsWith } from "../const";
import { TChannelCard } from "../type";

const ChannelCard: FC<any> = (props: TChannelCard): JSX.Element => {
	const [isFocus, setIsFocus] = useState<boolean>(false);

	// Future props
	const {}: TChannelCard = props;

	const numberAnimation: Animated.Value = useRef(new Animated.Value(-90)).current;
	const infoAnimation: Animated.Value = useRef(new Animated.Value(-295)).current;

	useEffect(() => {
		Animated.sequence([Animated.timing(numberAnimation, { toValue: -90, duration: 500, useNativeDriver: true })]).start();
		Animated.sequence([Animated.timing(infoAnimation, { toValue: -295, duration: 500, useNativeDriver: true })]).start();
		if (isFocus) {
			Animated.sequence([Animated.timing(numberAnimation, { toValue: 0, duration: 500, useNativeDriver: true })]).start();
			Animated.sequence([Animated.timing(infoAnimation, { toValue: -27, duration: 500, useNativeDriver: true })]).start();
		}
	}, [isFocus]);

	return (
		<Animated.View>
			<Pressable style={styles.main} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}>
				<View style={[styles.channel, { borderColor: isFocus ? Color.white : "transparent" }]}>
					<ImageBackground source={require("../assets/temp/channel.png")} style={styles.channelImage} borderRadius={14}>
						<Animated.View style={[styles.number, { transform: [{ translateX: numberAnimation }] }]}>
							<Text style={styles.numberText}>130</Text>
						</Animated.View>
						<Animated.View style={[styles.info, { transform: [{ translateX: infoAnimation }] }]}>
							<View style={styles.infoFirstSide}></View>
							<View style={styles.infoSecondSide}>
								<Text style={styles.infoSecondSideTitle}>Anastacia TV</Text>
								<Text style={styles.infoSecondType}>Documentales</Text>
							</View>
							<View style={styles.infoThirdSide}></View>
						</Animated.View>
					</ImageBackground>
				</View>
			</Pressable>
		</Animated.View>
	);
};
const styles = StyleSheet.create({
	main: {
		overflow: "hidden",
	},
	channel: {
		borderWidth: 3,
		padding: 5,
		borderRadius: 14,
		borderColor: "transparent",
	},
	channelImage: {
		width: WindowsWith / 3 - 60,
		height: WindowsHeight / 2,
		borderRadius: 14,
		padding: 20,
		flexDirection: "column",
		justifyContent: "space-between",
	},
	number: {
		backgroundColor: Color.white,
		borderRadius: 14,
		// Modificar
		width: 55,
		height: 55,
		justifyContent: "center",
		alignItems: "center",
	},
	numberText: {
		fontWeight: "700",
		fontSize: 18,
	},
	info: {
		flexDirection: "row",
	},
	infoFirstSide: {
		height: 85,
		width: 5,
		backgroundColor: "#D9D9D9",
	},
	infoSecondSide: {
		height: 85,
		width: 191,
		backgroundColor: Color.black,
		justifyContent: "center",
		paddingLeft: 20,
	},
	infoThirdSide: {
		height: 85,
		width: 70,
		backgroundColor: "rgba(255, 255, 255, .3)",
	},
	infoSecondSideTitle: {
		fontWeight: "700",
		fontSize: 21,
		color: Color.white,
	},
	infoSecondType: {
		fontWeight: "400",
		fontSize: 15,
		color: Color.white,
	},
});

export default ChannelCard;
