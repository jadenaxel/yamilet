import type { FC } from "react";

import { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";

import { Splash } from "../screens";
import { Color } from "../const";
import { Header, ChannelCard } from "../components";
import { ScrollView } from "react-native-gesture-handler";

const Page: FC = (): JSX.Element => {
	const [isAnimated, setIsAnimated] = useState<boolean>(true);

	useEffect(() => {
		const animationDone: NodeJS.Timeout = setTimeout((): void => {
			setIsAnimated((prev: boolean) => !prev);
		}, 3000);
		return () => clearTimeout(animationDone);
	}, []);

	if (isAnimated) return <Splash />;

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
			{/* Header */}
			<ImageBackground source={require("../assets/temp/header.png")} style={styles.header} resizeMode={"cover"}>
				<Header bottom={91} />
				<View style={styles.channel}>
					{[0, 1, 2].map((item: number, i: number) => {
						return <ChannelCard key={i} />;
					})}
				</View>
			</ImageBackground>
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
        marginBottom: 102
	},
	channel: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
