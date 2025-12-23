import { Tabs, Redirect } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function TabsLayout() {
    const { user, loading } = useAuth();

    if (loading) {
        return (null); // Or a loading indicator
    }

    if (!user) {
        return <Redirect href="/(auth)/login" />;
    }

    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ headerShown: false }} />
            <Tabs.Screen name="profile" options={{ headerShown: false }} />
        </Tabs>
    );

}
