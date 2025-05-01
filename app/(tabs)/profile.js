import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Profile() {
    return (
        <View>
            <Text>Ventana del perfil de usuario</Text>
            <Link href="/">
                <Text>Volver al inicio</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({})