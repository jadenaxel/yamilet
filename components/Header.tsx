import type { FC } from "react";

import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

import Logo from "../assets/logo";
import { Color } from "../const";
import { TMenu } from "../type";

const menu: TMenu[] = [
	{
		name: "EXPLORAR",
		link: "index",
	},
	{
		name: "LIVE TV",
		link: " ",
	},
	{
		name: "DEPORTES",
		link: "",
	},
	{
		name: "NOTICIAS",
		link: "",
	},
	{
		name: "PELICULAS",
		link: "",
	},
];

const Header: FC = (): JSX.Element => {
	const [isFocused, setIsFocused] = useState<any>({});
	const [isFocusedSearch, setIsFocusedSearch] = useState<boolean>(false);

	const navigation: any = useNavigation();

	return (
		<View style={styles.container}>
			<View style={[styles.align, styles.menu]}>
				<View style={[styles.align, styles.item]}>
					<Pressable onFocus={() => setIsFocusedSearch(true)} onBlur={() => setIsFocusedSearch(false)}>
						<Feather name="search" size={27} color={isFocusedSearch ? "gray" : "white"} style={styles.search} />
					</Pressable>
					{menu.map((item: any, i: number) => {
						const activeMenu: boolean = navigation.getState().routes[navigation.getState().routes.length - 1].name.toLowerCase() === item.link.toLowerCase();

						return (
							<Pressable key={i} onFocus={() => setIsFocused({ item: item.name })} onBlur={() => setIsFocused({ item: "" })}>
								<View style={[styles.menuItem, activeMenu ? styles.menuItem__active : {}, isFocused?.item === item.name ? styles.menuItem__active : {}]}>
									<Text style={styles.menuItemText}>{item.name}</Text>
								</View>
							</Pressable>
						);
					})}
				</View>
				<Logo size={100} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	align: {
		flexDirection: "row",
		alignItems: "center",
	},
	menu: {
		justifyContent: "space-between",
	},
	item: {
		gap: 5,
	},
	search: {
		marginRight: 20,
	},
	menuItem: {
		borderRadius: 7,
		paddingVertical: 11,
		paddingHorizontal: 19,
		borderWidth: 1,
	},
	menuItem__active: {
		borderColor: Color.white,
	},
	menuItemText: {
		color: Color.white,
		fontWeight: "bold",
	},
});

export default Header;