import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";
import {
    getCurrentPositionAsync,
    requestForegroundPermissionsAsync,
} from "expo-location";
import { router } from "expo-router";

const userIconMap = require("./../assets/user-map.png");
const GymIconMap = require("./../assets/gym-icon-map.png");

const polis = {
    poliMao: {
        latitude: 39.88731723084614,
        longitude: 4.249927681851884,
    },
    poliMalbuger: {
        latitude: 39.87819846925615,
        longitude: 4.252696014828193,
    },
};

export function GymMap() {
    const [origin, setOrigin] = useState({
        latitude: 39.88755642288377,
        longitude: 4.254876314979115,
    });

    // ({latitude: 39.88119668886889,longitude: 4.252086817727747,}

    const [destination, setDestination] = useState(null);

    useEffect(() => {
        obtenerPermisoLocalizacion();
    }, []);

    async function obtenerPermisoLocalizacion() {
        let { status } = await requestForegroundPermissionsAsync();

        if (status !== "granted") {
            // alert("Permiso no concedido");
            router.back();
            return;
        }

        let localizacion = await getCurrentPositionAsync({});

        const localizacionActual = {
            latitude: localizacion.coords.latitude,
            longitude: localizacion.coords.longitude,
        };

        setOrigin(localizacionActual);
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker
                    draggable
                    coordinate={origin}
                    image={userIconMap}
                    // onDragEnd={(direction) =>
                    //     setOrigin(direction.nativeEvent.coordinate)
                    // }
                />

                <Marker
                    coordinate={polis.poliMao}
                    image={GymIconMap}
                    onPress={() => setDestination(polis.poliMao)}
                />

                <Marker
                    coordinate={polis.poliMalbuger}
                    image={GymIconMap}
                    onPress={() => setDestination(polis.poliMalbuger)}
                />

                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_KEY}
                
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
