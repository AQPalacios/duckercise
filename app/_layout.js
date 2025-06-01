import { Slot, Stack } from "expo-router"
import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Header } from "../components/Header";
import { VideoProvider } from "../context/VideoContext";

export default function Layout() {
    const insets = useSafeAreaInsets();


    return (
        // <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
        //     <Slot />
        // </View>
        <VideoProvider>
            <Stack
                screenOptions={{
                    contentStyle: {
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                        flex: 1,
                    },
                    headerShown: false,
                    
                }}
            />
        </VideoProvider>
    )
}

