import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 150,
        backgroundColor: '#eee',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#eee',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        elevation: 1,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333'
    },
    form: {
        flex: 1,
        paddingHorizontal: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#eee',
        alignSelf: 'center',
        marginTop: 54,
        marginBottom: 20,
    },
    input: {
        marginVertical: 6
    },
    changePasswordText: {
        color: '#8cc3fc',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginTop: 16,
    },
    button: {
        marginTop: 54,
    },
})

export default styles;