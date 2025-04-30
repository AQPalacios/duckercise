import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from './Header';
import { Footer } from './Footer';
import { VideoCard } from './VideoCard';

const videos = [
    {
        id: "1",
        imgVideo: "Imagen Video",
        titleVideo: "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: "Imagen Canal",
        nameChannel: "Chuy Almada",
    },
    {
        id: "2",
        imgVideo: "Imagen Video",
        titleVideo: "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: "Imagen Canal",
        nameChannel: "Chuy Almada",
    },
    {
        id: "3",
        imgVideo: "Imagen Video",
        titleVideo: "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: "Imagen Canal",
        nameChannel: "Chuy Almada",
    },
    {
        id: "4",
        imgVideo: "Imagen Video",
        titleVideo: "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: "Imagen Canal",
        nameChannel: "Chuy Almada",
    },
    {
        id: "5",
        imgVideo: "Imagen Video",
        titleVideo: "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: "Imagen Canal",
        nameChannel: "Chuy Almada",
    },
    {
        id: "6",
        imgVideo: "Imagen Video",
        titleVideo: "Rutina de ejercicio para PRINCIPIANTES En Casa (20 Minutos) Empieza de cero a hacer ejercicio",
        uriVideo: "uriVideo",
        imgChannel: "Imagen Canal",
        nameChannel: "Chuy Almada",
    },

]

export function Main() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <Header />
            {/* Componente Scroll-video */}
            <FlatList
                data={videos}
                keyExtractor={(video) => video.id}
                renderItem={({ item }) => <VideoCard video={item} />}
            />
            <Footer />

        </View>
    )
}

const styles = StyleSheet.create({

})