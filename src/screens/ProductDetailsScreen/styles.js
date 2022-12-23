import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 350,
        borderRadius: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 45,
        marginHorizontal: 20,
    },
    headerRight: {
        flexDirection: 'row',
    },
    backIconWrapper: {
        backgroundColor: '#54a8fc',
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWrapper: {  
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    badge: {
        position: "absolute",
        top: 3,
        right: 2,
        backgroundColor: '#54a8fc',
        borderRadius: 10,
        width: 15,
        height: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        lineHeight: 12,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    namePriceWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#54a8fc',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
    },
    notes: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        marginTop: 10,
        borderRadius: 8,
        height: 150,
        paddingTop: 6,
        justifyContent: 'flex-start',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    counterWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterButton: {
        backgroundColor: '#a9d3fd',
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    button: {
        flex: 1,
        width: 150,
        height: 50,
        marginLeft: 20,
    },
})

export default styles;