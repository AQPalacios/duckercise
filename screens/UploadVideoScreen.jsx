import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function UploadVideoScreen() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {/* Preview del video */}
            </View>
            <View>
                <Pressable>
                    <Text>Añadir de la galeria</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})