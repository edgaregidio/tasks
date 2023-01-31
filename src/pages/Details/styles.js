import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fFF',
    padding: 20
  },
  labelNewTask: {
    color: '#9400d3',
    fontSize: 20,
    fontWeight: '500',
    width: '90%',
    marginTop: 20,
    marginLeft: 20
  },
  input: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    height: 50,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#9400d3',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#f9f9f9'
  },
  buttonNewTask: {
    backgroundColor: '#9400d3',
    height: 50,
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
})

export default styles
