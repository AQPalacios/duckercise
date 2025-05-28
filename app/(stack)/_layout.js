import { Stack } from "expo-router";


export default function StackLayout() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen 
                name="followers" 
                options={{ title: "Seguidores" }} 
            />
            <Stack.Screen 
                name="following" 
                options={{ title: "Siguiendo" }}    
            />
        </Stack>

    );
}

