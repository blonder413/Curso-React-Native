import { Stack } from "expo-router";

export default function ProductLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#f6c455" },
                headerTintColor: "#fff",
                headerTitleStyle: { fontWeight: "bold" },
            }}
        >
            <Stack.Screen name="details" />
        </Stack>
    );
}
