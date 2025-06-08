// screens/FollowingScreen.js
import { Stack } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const logo = require("../assets/duckercise-logo.png");

export default function FollowingScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Siguiendo", headerShown: true }} />
            <View style={{ flex: 1 , padding: 4}}>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        backgroundColor: "white",
                        borderRadius: 8
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                        }}
                    >
                        <Image
                            source={logo}
                            style={{ width: 50, height: 50 }}
                        />
                        <Text style={{color: "#1976D2"}}>Duckercise</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.btnSeguiendo}
                            activeOpacity={0.7}
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 14,
                                    color: "#fff",
                                }}
                            >
                                Siguiendo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
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
        borderRadius: 8,
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
        borderRadius: 12,
    },
    btnText: {
        color: "#A1A1A1",
    },
});
