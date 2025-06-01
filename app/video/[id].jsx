// app/video/[id].jsx
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { useVideo } from "../../context/VideoContext";
import { Image } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { useCallback } from "react";

//     id: "1",
//     imgVideo: require("../assets/miniaturaVideo.png"),
//     titleVideo:
//         "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
//     uriVideo: "uriVideo",
//     imgChannel: require("../assets/imagenCanal.png"),
//     nameChannel: "Chuy Almada",
// },

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
                <View></View>
            </View>
            {/* Aqui tiene ir un flatList con los otros videos */}
            <Text style={styles.title}>Video ID: {id}</Text>
            <Text style={styles.subtitle}>Título: {titleVideo}</Text>
            <Text>{nameChannel}</Text>
            {/* Aquí puedes integrar un reproductor de video */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
    },
    title: { fontSize: 24, fontWeight: "bold" },
    subtitle: { fontSize: 18, marginTop: 10 },
});
