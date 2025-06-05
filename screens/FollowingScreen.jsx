// screens/FollowingScreen.js
import { Stack } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function FollowingScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Siguiendo", headerShown: true }} />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal:12, paddingVertical:4}}>
                    <View>
                        <Text>Nombre Canal</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.btnSeguiendo}
                            activeOpacity={.7}
                        >
                            <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>Siguiendo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 16,
    },
    btnSeguiendo: {
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 8,
        backgroundColor: "#A1A1A1",
        borderRadius: 8
    },
    subtitle: { fontSize: 18, marginTop: 10 },
    btns: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        borderWidth: 1,
        borderBlockColor: "#A1A1A1",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12
    },
    btnText: {
        color: "#A1A1A1"
    }
});