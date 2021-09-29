import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';


const App = () => {

  const renderNews = ({ item }) => <NewsCard news={item} />
  const extractKey = item => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
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
    flex:1,
    backgroundColor: '#eceff1',
  }
})