import { StyleSheet, View } from 'react-native'
import { HomeIcon, PlusIcon, GymIcon, UserIcon, HealIcon, MapIcon } from "../../components/Icons";

import { Tabs } from 'expo-router'
import { Header } from '../../components/Header';
export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#131515",
                tabBarStyle: {
                    borderTopWidth: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "#FFFDFA"
                    // paddingTop: 10,
                },
                // tabBarShowLabel: false
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            height: 30,
                            width: 30,
                        }}>
                            <HomeIcon color={color} />
                        </View>
                    ),
                    header: () => <Header />,
                    headerShown: true,
                }}
            />

            <Tabs.Screen
                name="heal"
                options={{
                    title: "Doctor",
                    tabBarIcon: ({ color }) => (
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            height: 30,
                            width: 30,
                        }}>
                            <HealIcon color={color} />
                        </View>
                    ),
                    header: () => <Header />,
                    headerShown: true
                }}
            />
            <Tabs.Screen
                name="addVideo"
                options={{
                    title: "",
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color }) =>
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FEC14A",
                            borderRadius: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            height: 45,
                            width: 45,
                            marginBottom: -10
                        }}>
                            <PlusIcon color={color} />
                        </View>
                }}
            />
            <Tabs.Screen
                name="gym"
                options={{
                    title: "Mapa",
                    tabBarIcon: ({ color }) => (
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            height: 30,
                            width: 40,
                        }}>
                            <MapIcon color={color}/>
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            height: 30,
                            width: 30,
                        }}>
                            <UserIcon color={color} />
                        </View>
                    ),
                    header: () => <Header />,
                    headerShown: true
                }}
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({})