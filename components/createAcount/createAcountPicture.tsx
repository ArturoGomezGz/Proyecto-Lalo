import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from "react-native";
import SubmitBtn from "../submitBtn";

interface Props {
    color?: string;
    verticalSpace?: number
}

export default function CreateAcountPicture({ color, verticalSpace }: Props) {
    return (
        <View style={[styles.container, {marginBottom: verticalSpace}]}>
            <Image 
                source={require("../../assets/images/profileImage.png")} 
                style={[styles.imagen, {borderColor: color}]}
            />
            <SubmitBtn buttonLabel="Cambiar Foto" backgroundColor="gray" verticalSpace={0}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    imagen: {
        width: 100, 
        height: 100, 
        borderRadius: 50,
        borderWidth: 1.4
    },
    button: {
        backgroundColor: "red",
        padding: 6
    }
    })