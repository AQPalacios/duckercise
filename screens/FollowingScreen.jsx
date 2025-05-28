// screens/FollowingScreen.js
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function FollowingScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Siguiendo", headerShown: true }} />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Lista de personas siguiendo</Text>
            </View>
        </>
    );
}
