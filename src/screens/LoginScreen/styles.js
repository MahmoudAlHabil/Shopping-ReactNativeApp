import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
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
    alignItems: 'center',
  },
  input: {
    marginVertical: 6,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#54a8fc',
    marginTop: 12,
  },
  registerAction: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: '#8cc3fc',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 10,
  }
})

export default styles;