import * as React from 'react';
import { FlatList, View, StyleSheet, Text} from 'react-native'; 
import Navbar from './components/navbar';
import ArticleCard from './components/articleCard';
import ArticleBanner from './components/articleBanner';
import { ImageSlider } from "react-native-image-slider-banner"
import banner_1 from '../../assets/banner_1.png'

export default function Article(){
  images = [
    {img : require('../../assets/banner_1.png')}, 
    {img : require('../../assets/banner_1.png')},
  ]
    return (<View style={styles.container}>
    {/* <Text>Article, Testing</Text> */}
    <ImageSlider
            data={images}
            autoPlay={false}
            closeIconColor="#fff"
            localImg
      />
    <ArticleCard />
    <Navbar />
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1EDDF',
      // paddingTop: 10
    }
  });