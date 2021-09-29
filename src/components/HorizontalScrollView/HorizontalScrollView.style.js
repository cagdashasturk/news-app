import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  banner_image: {
    height: height / 3,
    width: width,
  },
})