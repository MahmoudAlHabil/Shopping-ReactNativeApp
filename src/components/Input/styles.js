import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderColor: '#C9C9C9',
        borderWidth: 1,
        borderRadius: 23,
        height: 50,
        width: '100%',
        justifyContent: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
    },
    iconWrapper: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;