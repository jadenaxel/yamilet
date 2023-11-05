import type { FC } from "react";

import { Stack } from "expo-router";

const Layout: FC = (): JSX.Element => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
        </Stack>
    );
};

export default Layout;
