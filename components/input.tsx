import { withLayoutContext } from "expo-router";
import {
    Text,
    TextInput,
    View,
    StyleSheet
} from "react-native";

interface Props {
    labelName: string,
    placeholderName: string,
    password?: boolean,
    backgroundColor?: string,
    fontColor?: string,
    verticalSpace?: number,
    onChangeText?: (text: string) => void;
}

export default function Input(
    {
        labelName, 
        placeholderName,
        password = false,
        backgroundColor = 'white',
        fontColor = 'black',
        verticalSpace = 30,
        onChangeText
    }: Props){
    return (
        <View style = {[styles.container, {backgroundColor: backgroundColor, marginBottom: verticalSpace}]} >
            <Text style = {[styles.label, {backgroundColor: backgroundColor, color: fontColor}]} >
                {labelName}
            </Text>
            <TextInput
                style= {[styles.input, {backgroundColor: backgroundColor, color: fontColor, borderColor: fontColor}
                ]}
                placeholder={placeholderName}
                secureTextEntry={password}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        position: 'relative',
    },
    label : {
        zIndex: 2,
        position: 'absolute',
        top: -8,
        left: 10,
        paddingHorizontal: 2,
        fontSize: 12,
    },
    input : {
        zIndex: 1,
        padding: 12,
        borderRadius: 4,
        borderWidth: 1
    }
})