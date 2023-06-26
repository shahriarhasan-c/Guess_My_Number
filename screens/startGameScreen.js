import { TextInput,Button,View } from "react-native";
import PrimaryButton from "../components/primaryButton";
function StartGameScreen(){
    return(
        <View>
            <TextInput/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;