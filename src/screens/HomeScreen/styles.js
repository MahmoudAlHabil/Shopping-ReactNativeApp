import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
      marginTop: -15,
    },
    logoImage: {
      width: 100,
      height: 50,
      resizeMode: 'contain',
    },
    bottomLineHeader: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        marginHorizontal: -20,
        elevation: 1
    },
    sliderContainer: {
        marginTop: 15,
    },
    imageSlider: {
      width: 350,
      height: 200,
      borderRadius: 10,
      marginRight: 5,
    },
    sectionText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333'
    },
    horizontalLine: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        marginTop: 15,
        marginBottom: 10,
    },
    categoriesContainer: {
        marginBottom: 20,
    },
})

export default styles