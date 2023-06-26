import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {

    function pressHandler() {
        console.log("pressHandler");
    }

    return (
        <View style={styles.btnOuter}>
            <Pressable style={({ pressed }) =>
                pressed ? [styles.container, styles.pressed] : styles.container}
                onPress={pressHandler}
                android_ripple={{ color: '#644202' }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;


const styles = StyleSheet.create({
    btnOuter: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    container: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
})


