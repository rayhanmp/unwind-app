import { ImageSlider } from "react-native-image-slider-banner"
import { View } from "react-native"

export default function ArticleBanner(){
    images = [
        {img : require('../../../assets/banner_1.png')}, 
        {img : require('../../../assets/banner_2.png')},
      ]
    return (
        <ImageSlider
            data={images}
            autoPlay={false}
            closeIconColor="#fff"
            localImg
            caroselImageContainerStyle={{height:280}}
            activeIndicatorStyle={{backgroundColor:"#9768CD"}}
        />
    )
}