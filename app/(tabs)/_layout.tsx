import { Stack, Redirect } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function StackLayout() {
    const { user, loading } = useAuth();

    if (loading) {
        return (null); // Or a loading indicator
    }

    if (!user) {
        return <Redirect href="/(auth)/login" />;
    }

    return (
        <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }}  />
            <Stack.Screen name="profile" options={{ headerShown: false }} />
        </Stack>
    );

}
