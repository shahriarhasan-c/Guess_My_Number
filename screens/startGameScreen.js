import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/primaryButton";
import { useState } from "react";

function StartGameScreen() {
    const[enteredNumber,setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function resetInputHandler(){
        setEnteredNumber('')
    }

    function confirmInputHandler(){
            const choosenNumber = parseInt(enteredNumber);
               
            if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber >99){
                Alert.alert('Invalid NUmber!',
                'Number has to be a number between 1 and 99',
                [{text:'Okay',style:'destructive',onPress: resetInputHandler}]
                );
                    return;
            }

            console.log('valid Number!');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;



const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer:{
        flex: 1,
    }

});