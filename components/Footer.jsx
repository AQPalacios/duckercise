import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeIcon } from './HomeIcon'
import { PlusIcon } from './PlusIcon'
import { GymIcon } from './GymIcon'
import { UserIcon } from './UserIcon'

export function Footer() {
    return (
        <View style={styles.footerMain}>
            <View
                style={{
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "#A1A1A1",
                    borderRadius: 5,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    padding: 4
                }}
            >
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#FEC14A" : "white",
                            width: 60,
                            height: 45,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 100
                        }
                    ]}>
                    <HomeIcon />
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#FEC14A" : "white",
                            width: 60,
                            height: 45,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 100
                        }
                    ]}>
                    <HomeIcon />
                </Pressable>
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
                    ]}>
                    <PlusIcon />
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#FEC14A" : "white",
                            width: 60,
                            height: 45,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 100
                        }
                    ]}>
                    <GymIcon />
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#FEC14A" : "white",
                            width: 60,
                            height: 45,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 100
                        }
                    ]}>
                    <UserIcon />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerMain: {
        borderRadius: 5
    },
})