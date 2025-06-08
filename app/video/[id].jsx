// app/video/[id].jsx
import { useLocalSearchParams } from "expo-router";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { useVideo } from "../../context/VideoContext";
import { Image } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { useCallback } from "react";
import { FloppyIcon, LikeIcon, ShareIcon } from "../../components/Icons";
import { VideoCard } from "../../components/VideoCard";

const videos = [
    {
        id: "1",
        imgVideo: require("../../assets/miniaturaVideo.png"),
        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: require("../../assets/BLACK SABBATH-Paranoid.mp4"),
        imgChannel: require("../../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "2",
        imgVideo: require("../../assets/miniaturaVideo.png"),
        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: require("../../assets/BLACK SABBATH-Paranoid.mp4"),
        imgChannel: require("../../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "3",
        imgVideo: require("../../assets/miniaturaVideo.png"),
        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: require("../../assets/BLACK SABBATH-Paranoid.mp4"),
        imgChannel: require("../../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "4",
        imgVideo: require("../../assets/miniaturaVideo.png"),
        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: require("../../assets/BLACK SABBATH-Paranoid.mp4"),
        imgChannel: require("../../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "5",
        imgVideo: require("../../assets/miniaturaVideo.png"),
        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: require("../../assets/BLACK SABBATH-Paranoid.mp4"),
        imgChannel: require("../../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
    {
        id: "6",
        imgVideo: require("../../assets/miniaturaVideo.png"),
        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: require("../../assets/BLACK SABBATH-Paranoid.mp4"),
        imgChannel: require("../../assets/imagenCanal.png"),
        nameChannel: "Chuy Almada",
    },
];

export default function VideoDetailScreen() {
    const { id } = useLocalSearchParams();
    const { selectedVideo } = useVideo();
    const { imgVideo, titleVideo, uriVideo, imgChannel, nameChannel } =
        selectedVideo;

    const player = useVideoPlayer(
        uriVideo, // Asegúrate que esto sea una URI válida o require() para local
        useCallback((player) => {
            player.loop = false;
            player.play();
        }, [])
    );

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <VideoView
                        player={player}
                        allowsFullscreen
                        allowsPictureInPicture
                        style={{ width: "100%", height: 240 }}
                    />
                </View>
            </View>
            <View style={{ padding: 8, gap: 16 }}>
                <Text style={styles.title}>{titleVideo}</Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8 
                        }}
                        activeOpacity={0.7}
                    >
                        <Image
                            source={imgChannel}
                            style={{ width: 50, height: 50 , borderRadius: 25}}
                        />
                        <Text style={{ color: "#1976D2" }}>{nameChannel}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnSeguir}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 18,
                                color: "#fff",
                            }}
                        >
                            Seguir
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", gap: 4 }}>
                    <TouchableOpacity style={styles.btns} activeOpacity={0.7}>
                        <LikeIcon />
                        <Text>145M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btns} activeOpacity={0.7}>
                        <ShareIcon />
                        <Text>Compartir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btns} activeOpacity={0.7}>
                        <FloppyIcon />
                        <Text>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={videos}
                keyExtractor={(video) => video.id}
                renderItem={({ item }) => <VideoCard video={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 16,
    },
    btnSeguir: {
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 40,
        paddingVertical: 8,
        backgroundColor: "#1976D2",
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
