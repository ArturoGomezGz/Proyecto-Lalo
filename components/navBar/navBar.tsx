import {
    StyleSheet,
    View,
    Text   
} from "react-native";
import { useState } from "react";
import Button from "./button";
import Header from "./header";
import { 
    usePathname, 
    router 
} from "expo-router";

interface Props {
    username?: string,
    email?: string,
    unactiveColor?: string
    activeColor?: string
    handleProfileClick?: () => void
}

export default function NavBar({ username, email, unactiveColor, activeColor, handleProfileClick }: Props) {

    const pathName = usePathname();

    return (
        <View>
            <Header username={username} email={email} handleProfileClick={handleProfileClick}/>

            <View style={styles.buttonContainer}>
                <Button
                    label="Videos"
                    isActive={pathName === "/home/videos"}
                    handlePress={() => router.push("/home/videos" as any)}
                    unactiveColor={unactiveColor}
                    activeColor={activeColor}
                />

                <Button
                    label="Photos"
                    isActive={pathName === "/home/photos"}
                    handlePress={() => router.push("/home/photos" as any)}
                    unactiveColor={unactiveColor}
                    activeColor={activeColor}
                />

                <Button
                    label="Audios"
                    isActive={pathName === "/home/audios"}
                    handlePress={() => router.push("/home/audios" as any)}
                    unactiveColor={unactiveColor}
                    activeColor={activeColor}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderColor: "gray",
        borderBottomWidth: 1
    }
});