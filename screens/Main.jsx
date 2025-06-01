import { StyleSheet, View, FlatList } from "react-native";
import { VideoCard } from "../components/VideoCard";
// npx expo start -c --tunnel // Para iniciar el servidor de expo

const videos = [
    {
        id: "1",
        imgVideo: require("../assets/miniaturaVideo.png"),
        titleVideo:
            "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: require("../assets/BLACK SABBATH-Paranoid.mp4"),
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

export function Main() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#FFFDFA",
            }}
        >
            {/* Componente Scroll-video */}
            <FlatList
                data={videos}
                keyExtractor={(video) => video.id}
                renderItem={({ item }) => <VideoCard video={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
