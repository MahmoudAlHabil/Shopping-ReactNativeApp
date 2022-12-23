import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
      paddingTop: 50,
    },
    logo: {
        width: 200,
        height: 100,
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 50,
    },
    WrapperForm: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        marginVertical: 6
    },
    button: {
        marginTop: 12,
    },
    haveAccountText: {
        color: '#8cc3fc',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    errorText: {
      color: 'red',
      alignSelf: 'flex-start',
      marginLeft: 10,
    }
})

export default styles;