import { Stack, Redirect } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function AuthLayout() {
    const { user, loading } = useAuth();

    if (loading) {
        return (null); // Or a loading indicator
    }

    if (user) {
        return <Redirect href="/home" />;
    }

    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
        </Stack>
    );
}
