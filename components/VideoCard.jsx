import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useVideo } from "../context/VideoContext";

export function VideoCard({ video }) {
    const router = useRouter();

    const { setSelectedVideo } = useVideo();

    const handlePress = () => {
        setSelectedVideo(video);
        router.push(`/video/${video.id}`);
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={styles.componentVideo}
        >
            {/* Imagen del video */}
            <View
                style={{
                    flex: 3,
                    backgroundColor: "#FFFDFA",
                }}
            >
                <Image
                    source={video.imgVideo}
                    style={{ width: "100%", height: "100%" }}
                />

                {/* <Text>{video.imgVideo}</Text> */}
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 8,
                    gap: 10,
                }}
            >
                <Image
                    source={video.imgChannel}
                    style={{ width: 50, height: 50, borderRadius: 100 }}
                />
                <View
                    style={{
                        flex: 1,
                        justifyContent: "space-evenly",
                    }}
                >
                    <Text style={{ fontSize: 14 }}>{video.titleVideo}</Text>
                    <Text style={{ fontSize: 12, color: "#1976D2" }}>
                        {video.nameChannel}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    componentVideo: {
        height: 300,
        borderBottomColor: "#A1A1A1",
        borderBottomWidth: 1,
        borderRadius: 5,
        backgroundColor: "#FFFDFA",
        marginBottom: 24,
    },
});
