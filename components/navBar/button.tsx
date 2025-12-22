import { 
    StyleSheet, 
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";

interface Props {
    label: string
    unactiveColor?: string
    activeColor?: string
    isActive?: boolean
}

export default function Button({label, unactiveColor, activeColor, isActive}: Props) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>{label}</Text>
            <View style={styles.indicator}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "orange",
        paddingVertical: 20,
        paddingHorizontal: 0
    },
    indicator:{
        backgroundColor: "purple",
        height: 8,
        width: "100%",
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        position: "absolute",
        bottom: 0,
        left: 0
    }
});