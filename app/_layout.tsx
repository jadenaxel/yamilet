import type { FC } from "react";

import { Stack } from "expo-router";

import Wrapper from "../Wrapper";

const Layout: FC = (): JSX.Element => {
	return (
		<Wrapper>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
				<Stack.Screen name="player" />
			</Stack>
		</Wrapper>
	);
};

export default Layout;
