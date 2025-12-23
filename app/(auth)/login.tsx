import { View } from "react-native";
import LoginCard from "@/components/login/loginCard";
import { router } from "expo-router";
import { useState } from "react";
import { auth } from "@/firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
 
const handleCreateAcount = () => {
    router.push("/createAcount");
}


export default function Login() {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.replace("/");
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <LoginCard 
            verticalSpace={20}
            handleLogin={login}
            handleCreateAcount={handleCreateAcount}
            color="#8744e4ff"
            emailHandleChange={setEmail}
            passwordHandleChange={setPassword}
        />
        </View>
    );
}
