import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,
  Dimensions,
  Image,
ImageBackground,
}
 from 'react-native';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import colors from '../../constants/colors'
const { width, height } = Dimensions.get("window");
import { useNavigation } from '@react-navigation/native';
import MainButton from '../../components/MainButton/index'

export default function StartSwiper({index,entries}){
  const {navigate} = useNavigation()
        const Mydata= {
          carouselItems: [
          {
              title:"Let's Travel",
              text: "Lorem ipsum dolar sit amet, consectetuer adiniscing elit,sed diarn nonummy nibh euismod tincidunt ut lapreet dolare",
              image:require('../../assets/image32.png')
          },
          {
            title:"Plan A Trip",
            text: "Lorem ipsum dolar sit amet, consectetuer adiniscing elit,sed diarn nonummy nibh euismod tincidunt ut lapreet dolare",
            image:require('../../assets/image2.png')
          },
        ]
      }
    Mydata._renderItem =item =>(
      
      <ImageBackground 
        source={item.image}
        style={{flex:1,alignItems:"center",backgroundColor:"white"}}>
              <View style={{alignSelf:"flex-start",margin:20,paddingTop:20}}>
              < Text 
                  style={{
                      fontSize: 33,
                      color:colors.skyBlue,
                      fontWeight:"bold",
                      marginVertical:10
                      }}>
                      {item.title}
                </Text>
                <Text
                   style={{
                     color:colors.black,
                     fontSize:10 ,
                     width:width*0.5,
                     }}>
                       {item.text}
                </Text>
                <MainButton
                  title="Get started"
                  touchStyle={{alignSelf:"flex-start"}}
                  onPress={() => navigate("WelcomeScreen")}
                 />
                 </View>   
        </ImageBackground>

        )
        return (
          <SafeAreaView style={{
            flex: 1,
            }}>
                <Carousel
                  layout={'default'}
                  ref={ref => Mydata.carousel = ref}
                  data={Mydata.carouselItems}
                  sliderWidth={width}
                  layoutCardOffset={`10`} 
                  itemWidth={width}
                  autoplayInterval={3000}
                  renderItem={ ({item}) => Mydata._renderItem(item)}/>   
                  <Pagination                  inactiveDotColor={"white"}
                  activeDotIndex={0}
                  dotsLength={2}
                  containerStyle={{bottom:0,position:"absolute",alignSelf:"center"}}
                  inactiveDotOpacity={0.1}
                  inactiveDotScale={1}
                  data={Mydata.carouselItems}
                  dotColor={"blue"}
                  dotContainerStyle={{backgroundColor:"black",borderRadius:50}}
                  onSnapToItem = { index => Mydata({activeIndex:index}) }
                  animatedDuration={250}
                  />
          </SafeAreaView>
        );
    }


