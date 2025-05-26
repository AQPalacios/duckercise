import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from 'react-native'


export function VideoCard({ video }) {
    return (
        // <Link href={"/ProfileScreen"} style={{flex: 1}} asChild>
            <TouchableOpacity
                activeOpacity={.7}
                style={styles.componentVideo}
            >
                {/* Imagen del video */}
                <View style={{
                    flex: 3,
                    backgroundColor: "#FFFDFA"
                }}>
                    <Image source={video.imgVideo} style={{ width: "100%", height: "100%" }} />

                    {/* <Text>{video.imgVideo}</Text> */}
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 8,
                    gap: 10
                }}>
                    <Image source={video.imgChannel} style={{ width: 50, height: 50, borderRadius: 100 }} />
                    <View style={{
                        flex: 1,
                        justifyContent: 'space-evenly'
                    }}>
                        <Text
                            style={{ fontSize: 14 }}
                        >
                            {video.titleVideo}
                        </Text>
                        <Text
                            style={{ fontSize: 12, color: "#1976D2" }}
                        >
                            {video.nameChannel}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        // </Link>

    )
}

const styles = StyleSheet.create({
    componentVideo: {
        height: 300,
        borderBottomColor: "#A1A1A1",
        borderBottomWidth: 1,
        borderRadius: 5,
        backgroundColor: "#FFFDFA",
        marginBottom: 24
    }
})