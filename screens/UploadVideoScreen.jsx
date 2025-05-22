import { Alert, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from "expo-image-picker"

export default function UploadVideoScreen() {
    // #3A2D32
    // #131515
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
    // console.log(status)
    const pickImage = async () => {
        try {
            if (Platform.OS !== "web") {
                console.log({ status });
                if (status.status !== "granted") {
                    const permisoRespuesta = await requestPermission();
                    console.log({ permisoRespuesta });
                    if(permisoRespuesta.status == "granted"){
                        Alert.alert("Hola", "adios");
                    }
                }
            }

            // No permissions request is necessary for launching the image library
            // let result = await ImagePicker.launchImageLibraryAsync({
            //     mediaTypes: "videos",
            //     allowsEditing: false,
            //     aspect: [16, 9],
            //     quality: 1,
            // });

            // console.log(result);

            // if (!result.canceled) {
            //     setImage(result.assets[0].uri);
            // }

        } catch (error) {
            console.log(error)
        }

    };
    return (
        <View style={{ flex: 1, backgroundColor: "#131515" }}>
            <View style={{ flex: 1 }}>
                {/* Preview del video */}
            </View>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                marginBottom: 100,
                paddingStart: 16,
                paddingEnd: 16

            }}>
                <TouchableOpacity
                    style={styles.btnPicker}
                    onPress={pickImage}
                    activeOpacity={0.5}
                >
                    <View>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 16
                        }}>
                            Añadir de la galeria
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnPicker}
                    onPress={() => { }}
                    activeOpacity={0.5}
                >
                    <View>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 16
                        }}>
                            aaaa
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnPicker: {
        backgroundColor: "#FEC14A",
        // width: 300,
        width: "100%",
        borderRadius: 50,
        padding: 12,
    }
})