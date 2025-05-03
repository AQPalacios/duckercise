import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import logo from "../assets/duckercise-logo.png"
import { SearchIcon } from './Icons'

export function Header() {
    return (
        <>
            {/* Header*/}
            <View style={styles.headerMain}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                }}>
                    <Image source={logo} style={{ width: 40, height: 40 }} />
                    <Text
                        style={{
                            fontSize: 18
                        }}
                    >
                        Duckercise
                    </Text>
                </View>

                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#FEC14A" : "white",
                            width: 70,
                            height: 45,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 100
                        }
                    ]}
                >
                    <View style={{
                        width: 25,
                        height: 25
                    }}>
                        <SearchIcon/>
                    </View>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headerMain: {
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFDFA",
    },
})