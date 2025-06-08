import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import logo from "../assets/duckercise-logo.png";
import { BookMarkIcon, LikeIcon, UploadIcon } from "../components/Icons";
import { VideoCardProfileScreen } from "../components/VideoCardProfileScreen";
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
    {
        id: "7",
        imgVideo: require("../assets/miniaturaVideo.png"),

        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: require("../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "8",
        imgVideo: require("../assets/miniaturaVideo.png"),

        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: require("../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "9",
        imgVideo: require("../assets/miniaturaVideo.png"),

        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: require("../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
];
const uploadedVideos = [...videos];
const likedVideos = [...videos.slice(0, 3)]; // solo algunos
const savedVideos = [...videos.slice(4, 7)]; // otros

export function ProfileScreen() {
    const router = useRouter();
    const [botonActivo, setBotonActivo] = useState("uploaded");

    let videoData = uploadedVideos;
    if (botonActivo === "upload") videoData = uploadedVideos;
    if (botonActivo === "liked") videoData = likedVideos;
    if (botonActivo === "saved") videoData = savedVideos;

    return (
        <View style={{ flex: 1, backgroundColor: "#FFFDFA" }}>
            <View style={styles.profileCard}>
                <Image source={logo} style={{ width: 80, height: 80 }} />
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    @Duckercise
                </Text>
            </View>

            <View>
                {/* Botones de los usuario que sigue, y seguidores */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginBottom: 12,
                    }}
                >

                    <TouchableOpacity
                        onPress={() => {
                            router.push("/(stack)/following");
                        }}
                        activeOpacity={0.4}
                    >
                        <View>
                            <Text style={styles.textNumber}>1</Text>
                            <Text style={{ color: "#A1A1A1" }}>Siguiendo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push("/(stack)/followers")}
                        activeOpacity={0.4}
                    >
                        <View>
                            <Text style={styles.textNumber}>0</Text>
                            <Text style={{ color: "#A1A1A1" }}>Seguidores</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Botones para cambiar los videos  */}
                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            gap: "4",
                            borderBottomColor: "#A1A1A1",
                            borderBottomWidth: 0.2,
                            padding: 8,
                            borderTopWidth: 0.2,
                            borderTopColor: "#A1A1A1",
                        }}
                    >
                        <Pressable
                            onPress={() => setBotonActivo("uploaded")}
                        >
                            <View style={{ padding: 4 }}>
                                <UploadIcon
                                    color={botonActivo === "uploaded" ? "#131515" : "#A1A1A1"}
                                    size={32}
                                />
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={() => setBotonActivo("liked")}
                        >
                            <View style={{ padding: 4 }}>
                                <LikeIcon
                                    color={botonActivo === "liked" ? "#131515" : "#A1A1A1"}
                                    size={32}
                                />
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={() => setBotonActivo("saved")}
                        >
                            <View style={{ padding: 4 }}>
                                <BookMarkIcon
                                    color={botonActivo === "saved" ? "#131515" : "#A1A1A1"}
                                    size={32}
                                />
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>

            {/* Lista de videos del usuario */}
            <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-around" }}
                contentContainerStyle={{ paddingBottom: 16 }}
                data={videoData}
                keyExtractor={(video) => video.id}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, margin: 2 }}>
                        <VideoCardProfileScreen video={item} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    profileCard: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
        marginBottom: 12,
    },

    textNumber: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
    },
});
