import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';


const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={news_data}
        renderItem={({ item }) => <NewsCard news={item} />}
      />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}


export default App;
