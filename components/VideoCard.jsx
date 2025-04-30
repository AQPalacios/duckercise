import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import logo from "../assets/duckercise-logo.png"


export function VideoCard({ video }) {
    return (
        <Pressable style={styles.componentVideo}>
            {/* Imagen del video */}
            <View style={{
                flex: 3,
                backgroundColor: "#FFFDFA"
            }}>
                <Text>{video.imgVideo}</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 8,
                gap: 10
            }}>
                <Image source={logo} style={{ width: 50, height: 50, borderRadius: 100 }} />
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
        </Pressable>
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