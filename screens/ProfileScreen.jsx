import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native'
import logo from "../assets/duckercise-logo.png"
import { BookMarkIcon, LikeIcon, UploadIcon } from '../components/Icons'
import { VideoCard } from '../components/VideoCard';
// const photo = require("./../assets/duckercise-logo.png")

const videos = [
    {
        id: "1",
        imgVideo: require("../assets/miniaturaVideo.png"),
        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: require("../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "2",
        imgVideo: require("../assets/miniaturaVideo.png"),
        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: require("../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "3",
        imgVideo: require("../assets/miniaturaVideo.png"),
        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: require("../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "4",
        imgVideo: require("../assets/miniaturaVideo.png"),

        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: require("../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "5",
        imgVideo: require("../assets/miniaturaVideo.png"),

        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: require("../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "6",
        imgVideo: require("../assets/miniaturaVideo.png"),

        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: require("../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
];

export function ProfileScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFFDFA" }}>

            <View style={styles.profileCard}>
                <Image source={logo} style={{ width: 80, height: 80 }} />
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>@AlvaroAdmin</Text>
            </View>

            <View>
                {/* Botones de los usuario que sigue, y seguidores */}
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginBottom: 12}}>
                    <View>
                        <Text style={styles.textNumber}>207</Text>
                        <Text style={{ color: "#A1A1A1" }}>Siguiendo</Text>
                    </View>
                    <View>
                        <Text style={styles.textNumber}>4</Text>
                        <Text style={{ color: "#A1A1A1" }}>Seguidores</Text>
                    </View>
                    <View>
                        <Text style={styles.textNumber}>0</Text>
                        <Text style={{ color: "#A1A1A1" }}>Me gusta</Text>
                    </View>
                </View>

                {/* Botones para cambiar los videos  */}
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", gap: "4", borderBottomColor: "#A1A1A1", borderBottomWidth: .2, padding: 8, borderTopWidth: .2, borderTopColor: "#A1A1A1" }}>
                        <Pressable >
                            <View style={{ padding: 4 }}>
                                <LikeIcon color={"#A1A1A1"} size={32} />
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ padding: 4 }}>
                                <BookMarkIcon color={"#A1A1A1"} size={32} />
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ padding: 4 }}>
                                <UploadIcon color={"#A1A1A1"} size={32} />
                            </View>
                        </Pressable>
                    </View>
                </View>

                {/* Lista de videos del usuario */}
                <View>
                    <FlatList
                        data={videos}
                        keyExtractor={(video) => video.id}
                        renderItem={({ item }) => <VideoCard video={item} />}
                    />
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