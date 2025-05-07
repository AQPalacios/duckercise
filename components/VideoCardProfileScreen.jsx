import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function VideoCardProfileScreen({ video }) {
    return (
        <Pressable>
            <View>

            </View>
            <View>
                <Text>
                    {video.titleVideo}
                </Text>
                <Text>
                    {video.nameChannel}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({})