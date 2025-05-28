// screens/FollowersScreen.js
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function FollowersScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Siguiendo", headerShown: true }} />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Lista de seguidores</Text>
            </View>
        </>
    );
}
