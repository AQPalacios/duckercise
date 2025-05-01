import { StyleSheet, Text, View } from 'react-native'
import { HomeIcon, PlusIcon, GymIcon, UserIcon, HealIcon } from "../../components/Icons";

import React from 'react'
import { Tabs } from 'expo-router'
import { Header } from '../../components/Header';
export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#071427",
            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
                    header: () => <Header />,
                    headerShown: true
                }}
            />
            <Tabs.Screen
                name="heal"
                options={{
                    title: "Doctor",
                    tabBarIcon: ({ color }) => <HealIcon color={color} />,
                    header: () => <Header /> ,
                    headerShown: true
                }}
            />
            <Tabs.Screen
                name="addVideo"
                options={{
                    title: "",
                    tabBarIcon: ({ color }) => <PlusIcon color={color} />,

                }}
            />
            <Tabs.Screen
                name="gym"
                options={{
                    title: "Gimnasios",
                    tabBarIcon: ({ color }) => <GymIcon color={color} />

                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <UserIcon color={color} />,
                    header: () =>  <Header /> ,
                    headerShown: true
                }}
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({})