import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export function GymMap() {
    const [origin, setOrigin] = useState({
        latitude: 39.88755642288377,
        longitude: 4.254876314979115,
    });

    const [destination, setDestination] = useState({
        latitude: 39.88119668886889,
        longitude: 4.252086817727747,
    });
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
                    onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
                />
                <Marker coordinate={destination}/>
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
