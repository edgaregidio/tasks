import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fFF',
    paddingRight: 25,
    paddingLeft: 25
  },
  Tasks: {
    // backgroundColor: '#f7f7f7',
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: '#9400d3',
    width: '100%',
    height: 60,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  button: {
    backgroundColor: '#f8f8f8',
    width: '80%',
    borderRadius: 50
    // outline: 'none'
  },
  descriptionTask: {
    width: '75%',
    alignContent: 'flex-start',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    // marginBottom: 5,
    marginRight: 15,
    fontSize: 18,
    color: '#9400d3'
  },
  deleteTasks: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9400d3'
  },
  buttonNewTask: {
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 30,
    right: 20,
    borderRadius: 50,
    backgroundColor: '#9400d3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    color: '#FFF',
    fontSize: 25
  }
})

export default styles
