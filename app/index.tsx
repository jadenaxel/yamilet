import type { FC } from "react";

import { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, Image, View, Text, ScrollView } from "react-native";

import { Splash } from "../screens";
import { Color, WindowsWith } from "../const";
import { Header, ChannelCard, Title, Card } from "../components";

const Page: FC = (): JSX.Element => {
	const [isAnimated, setIsAnimated] = useState<boolean>(true);

	useEffect(() => {
		const animationDone: NodeJS.Timeout = setTimeout((): void => {
			setIsAnimated((prev: boolean) => !prev);
		}, 3000);
		return () => clearTimeout(animationDone);
	}, []);

	// if (isAnimated) return <Splash />;

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
			{/* Header */}
			<ImageBackground source={require("../assets/temp/header.png")} style={styles.header} resizeMode={"cover"}>
				<Header bottom={91} />
				<ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.channel}>
					{[0, 1, 2, 3, 4].map((item: number, i: number) => {
						return <ChannelCard key={i} />;
					})}
				</ScrollView>
			</ImageBackground>
			{/* Deportes */}
			<View style={styles.deportes}>
				<Title title={"deportes"} size={32} />
				<ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.deportesCards}>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number, i: number) => {
						return <Card key={i} />;
					})}
				</ScrollView>
				<View style={styles.deportesLive}>
					<View style={styles.deportesLiveInfo}>
						<View style={styles.deportesLiveInfoEnVivo}>
							<Text style={styles.deportesLiveInfoEnVivoText}>EN VIVO</Text>
						</View>
						<Text style={styles.deportesLiveInfoTitle}>Starting your traveling blog with Vasco</Text>
						<Text style={styles.deportesLiveInfoDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Text>
					</View>
					<View style={styles.deportesLivePic}>
						<Image source={require("../assets/temp/channel.png")} />
					</View>
				</View>
			</View>
			{/* Noticias */}
			<View style={styles.news}>
				<View style={styles.newsHeader}>
					<Title size={32} title={"noticias"} />
					<View style={styles.newsHeaderBox} />
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.nowBox}>
						<View style={styles.nowBoxOne} />
						<View style={styles.nowBoxTwo}>
							<Text style={styles.nowBoxTwoTitle}>Ahora</Text>
							<Text style={styles.nowBoxTwoChannel}>CNN News</Text>
						</View>
					</View>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number, i: number) => {
						return <Card news key={i} />;
					})}
				</ScrollView>
			</View>
			{/* Peliculas */}
			<View>
				<Title title={"películas"} size={32} />
				<ScrollView showsHorizontalScrollIndicator={false} horizontal>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number, i: number) => {
						return <Card movie key={i} />;
					})}
				</ScrollView>
			</View>
		</ScrollView>
	);
};

export default Page;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Color.black,
	},
	header: {
		paddingHorizontal: 30,
		marginBottom: 102,
	},
	channel: {
		flexDirection: "row",
	},
	deportes: {
		paddingHorizontal: 30,
		marginBottom: 71,
	},
	deportesCards: {
		marginTop: 30,
		marginBottom: 78,
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 5,
	},
	deportesLive: {
		flexDirection: "row",
	},
	deportesLiveInfo: {
		paddingVertical: 70,
	},
	deportesLiveInfoEnVivo: {
		borderColor: Color.red,
		borderWidth: 1,
		paddingVertical: 15,
		borderRadius: 14,
		width: 89,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 21,
	},
	deportesLiveInfoEnVivoText: {
		color: Color.red,
	},
	deportesLiveInfoTitle: {
		fontSize: 41,
		color: Color.white,
		width: WindowsWith / 2,
		fontWeight: "900",
		marginBottom: 21,
	},
	deportesLiveInfoDesc: {
		color: Color.white,
		width: WindowsWith / 2.5,
	},
	deportesLivePic: {
		borderWidth: 3,
		borderColor: Color.white,
		borderRadius: 14,
		width: WindowsWith / 2.5,
		paddingBottom: 20,
		paddingLeft: 20,
	},
	news: {
		marginBottom: 45,
	},
	newsHeader: {
		marginBottom: 234,
	},
	newsHeaderBox: {
		width: 152,
		height: 35,
		borderWidth: 3,
		borderColor: Color.white,
	},
	nowBox: {
		flexDirection: "row",
	},
	nowBoxOne: {
		backgroundColor: "#D9D9D9",
		width: 45,
		height: 201,
	},
	nowBoxTwo: {
		width: 181,
		height: 201,
		backgroundColor: Color.black,
		justifyContent: "center",
		alignItems: "center",
	},
	nowBoxTwoTitle: {
		color: Color.white,
		fontSize: 16,
	},
	nowBoxTwoChannel: {
		color: Color.white,
		fontSize: 41,
	},
});
