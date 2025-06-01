import { Stack } from "expo-router";
import { Header } from "../../components/Header";

export default function VideoLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerBackTitleVisible: false,
                animation: "slide_from_right",
                header: () => <Header />
            }}
        />
    );
}