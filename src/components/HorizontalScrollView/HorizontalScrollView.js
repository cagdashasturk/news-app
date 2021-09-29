import React from 'react';
import { ScrollView, Image } from 'react-native';
import styles from './HorizontalScrollView.style';
import news_banner_data from '../../news_banner_data.json';


const HorizontalScrollView = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        news_banner_data.map(bannerNews => (
          <Image
            key={bannerNews.id}
            style={styles.banner_image}
            source={{ uri: bannerNews.imageUrl }} />
        ))
      }
    </ScrollView>
  );
}

export default HorizontalScrollView;
