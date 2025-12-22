import { 
    StyleSheet, 
    View,
    Text,
    TouchableOpacity
} from "react-native";

interface Props {
    label: string
    unactiveColor?: string
    activeColor?: string
    isActive?: boolean
    toggleActive?: () => void
}

export default function Button({
    label, 
    unactiveColor = "gray", 
    activeColor = "orange", 
    isActive = false,
    toggleActive
}: Props) {
    return (
        <TouchableOpacity 
            onPress={toggleActive} 
            style={[styles.button, isActive && {borderBottomColor: activeColor}] }>

            <Text style={{color: isActive ? activeColor : unactiveColor}}>{label}</Text>
            <View style={[styles.indicator, isActive && {backgroundColor: activeColor}]}/>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        paddingHorizontal: 0
    },
    indicator:{
        backgroundColor: "none",
        height: 4,
        width: "100%",
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        position: "absolute",
        bottom: 0,
        left: 0
    }
});