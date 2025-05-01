import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { HomeIcon, PlusIcon, GymIcon, UserIcon } from "./Icons";

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
                    padding: 4,
                }}
            >
                <Link asChild  href="profile">
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "#FEC14A" : "white",
                                padding:8,
                                width: 60,
                                height: 45,
                                display: "flex",
                                flex:1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 100,
                            },
                        ]}
                    >
                        {({pressed}) => (
                            <HomeIcon color={ pressed ? "#FEC14A" : "#071427"}/>
                        )}
                        {/* <HomeIcon /> */}
                    </Pressable>
                </Link>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#FEC14A" : "white",
                            width: 60,
                            height: 45,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 100,
                        },
                    ]}
                >
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
                            borderRadius: 100,
                        },
                    ]}
                >
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
                            borderRadius: 100,
                        },
                    ]}
                >
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
                            borderRadius: 100,
                        },
                    ]}
                >
                    <UserIcon />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerMain: {
        borderRadius: 5,
    },
});
