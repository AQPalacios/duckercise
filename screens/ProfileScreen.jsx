import { StyleSheet, Text, View, Image } from 'react-native'
import logo from "../assets/duckercise-logo.png"
// const photo = require("./../assets/duckercise-logo.png")

export function ProfileScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFFDFA" }}>
            <View style={styles.profileCard}>
                <Image source={logo} style={{ width: 80, height: 80 }} />
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>@AlvaroAdmin</Text>
            </View>
            <View style={{ gap: 18 }}>
                {/*  */}
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                    <View>
                        <Text style={styles.textNumber}>207</Text>
                        <Text style={{ color: "#A1A1A1" }}>Siguiendo</Text>
                    </View>
                    <View>
                        <Text style={styles.textNumber}>4</Text>
                        <Text style={{ color: "#A1A1A1" }}>Seguidores</Text>
                    </View>
                    <View>
                        <Text style={styles.textNumber}>207</Text>
                        <Text style={{ color: "#A1A1A1" }}>Me gusta</Text>
                    </View>
                </View>
                {/*  */}
                <View>
                    <Text>Aquí estará  </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileCard: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
        marginBottom: 12
    },

    textNumber: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center"
    }
})