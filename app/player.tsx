import type { FC } from "react";

import { useState, useRef, useEffect } from "react";
import { Animated, View, ScrollView, Text, StyleSheet, Pressable, Image } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { useKeepAwake } from "expo-keep-awake";

import { Color, screenHeight, screenWidth } from "../const";
import { Favorite } from "../components";

const sampleVideo: string = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";

const hackStyle: any = {
	position: "absolute",
	top: 10,
	width: 10,
	height: 10,
};

const menu: string[] = ["Todos", "Recientes", "Favoritos", "Deportes", "Niños", "Peliculas", "Noticias"];

const Player: FC = (): JSX.Element => {
	const [over, setOver] = useState<boolean>(false);

	const overlayAnimation: Animated.Value = useRef(new Animated.Value(-screenHeight)).current;

	useKeepAwake();

	useEffect(() => {
		Animated.timing(overlayAnimation, {
			toValue: over ? 0 : -screenHeight,
			duration: 500,
			useNativeDriver: true,
		}).start();

		const overChange: NodeJS.Timeout = setTimeout(() => {
			setOver(false);
		}, 10000);

		return () => clearTimeout(overChange);
	}, [over]);

	return (
		<View style={styles.main}>
			<Video source={{ uri: sampleVideo }} style={styles.player} shouldPlay resizeMode={ResizeMode.CONTAIN} />
			{!over && <Pressable style={hackStyle} onFocus={() => setOver(true)}></Pressable>}

			<Animated.View style={[styles.overlay, { transform: [{ translateY: overlayAnimation }] }]}>
				<View style={styles.menu}>
					{menu.map((item: string, i: number) => {
						return (
							<Pressable key={i}>
								<Text style={styles.menuItem}>{item}</Text>
							</Pressable>
						);
					})}
				</View>
				<View style={styles.content}>
					<View style={styles.contentVideo}>
						<Image source={require("../assets/temp/channel.png")} style={styles.contentVideoShot} />
						<View style={styles.contentVideoInfo}>
							<Text style={styles.contentVideoInfoTitle}>Lorem ipsum dolor sit amet, consectetur.</Text>
							<Text style={styles.contentVideoInfoDesc}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu</Text>
						</View>
					</View>
					<ScrollView showsVerticalScrollIndicator={false}>
						{[0, 1, 2, 3, 4, 5].map((item: number, i: number) => {
							return <Favorite key={i} />;
						})}
					</ScrollView>
				</View>
			</Animated.View>
		</View>
	);
};
const styles = StyleSheet.create({
	main: {},
	player: {
		width: screenWidth,
		height: screenHeight,
	},
	overlay: {

		position: "absolute",
        top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		flexDirection: "row",
		backgroundColor: "rgba(0,0,0,.7)",
		paddingLeft: 32,
		paddingTop: 59,
	},
	menu: {
		marginRight: 40,
	},
	content: {},
	menuItem: {
		color: Color.white,
		fontSize: 17,
		marginBottom: 21,
	},
	contentVideo: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 35,
	},
	contentVideoShot: {
		width: 167,
		height: 112,
		borderRadius: 6,
	},
	contentVideoInfo: {
		marginLeft: 16,
	},
	contentVideoInfoTitle: {
		color: Color.white,
		fontSize: 21,
		marginBottom: 15,
	},
	contentVideoInfoDesc: {
		color: Color.white,
		width: 400,
	},
});

export default Player;
