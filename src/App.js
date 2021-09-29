import React from 'react';
import { SafeAreaView, View, Text, FlatList, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import NewsCard from './components/NewsCard';
import HorizontalScrollView from './components/HorizontalScrollView';
import news_data from './news_data.json';


const App = () => {

  const renderNews = ({ item }) => <NewsCard news={item} />
  const extractKey = item => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header_text}>News</Text>
        <FlatList
          ListHeaderComponent={HorizontalScrollView}
          data={news_data}
          renderItem={renderNews}
          keyExtractor={extractKey}
        />
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 50,
    paddingLeft:20,
  }
})