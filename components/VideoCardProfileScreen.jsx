import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export function VideoCardProfileScreen({ video }) {
    return (
        <TouchableOpacity
            activeOpacity={.7}
        >
            <View style={{
                borderRadius: 5,
                overflow: "hidden",
            }}>
                <View >
                    <Image
                        source={video.imgVideo}
                        style={{
                            width: undefined,
                            height: 160,
                            resizeMode: "stretch",
                        }} />
                </View>
                <View
                    style={{
                        borderRightWidth: .5,
                        borderLeftWidth: .5,
                        borderBottomWidth: .5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderColor: "#A1A1A1",
                        padding: 8
                    }}
                >
                    <Text
                        style={{ fontSize: 14 }}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {video.titleVideo}
                    </Text>
                    <Text style={{ fontSize: 12, color: "#1976D2" }}>
                        {video.nameChannel}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})