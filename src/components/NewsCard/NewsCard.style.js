import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10
  },
  inner_container: {
    padding: 15
  },
  image: {
    height: height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8
  },
  description: {
    color: 'gray'
  },
  author: {
    textAlign: 'right',
    fontStyle: 'italic'
  }
});

//styles
