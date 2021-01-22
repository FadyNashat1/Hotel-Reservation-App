import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Dimensions
} from "react-native";
import SearchBar from '../../components/SearchBar/index'
import CountryCart from '../../components/CountryCart/index'
import SearchTabBar from '../../components/SearchTabBar/index'
const { width, height } = Dimensions.get("window");

export default function PopularDestinationScreen ({navigation}){
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image8.png'),
                title:"Banff National Park" ,
                subtitle:"Canada"     
              },
              {
                image:require('../../assets/image7.png'),
                title:"Bali" ,
                subtitle:"Indonisia"     
              },
              {
                image:require('../../assets/image25.png'),
                title:"Bali" ,
                subtitle:"Indonisia"     
              },
              {
                image:require('../../assets/image22.png'),
                title:"Bali" ,
                subtitle:"Indonisia"     
              },

                   ]
    }
  Mydata.renderOrderSatatus = item => (
    <CountryCart
    onPress={item.onPress}
    image={item.image}
    title={item.title}
    subtitle={item.subtitle}
  />

);

    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            <View>
            <SearchBar icon1="ios-arrow-back" title="Popular Destination"/>
            <SearchTabBar/>
            <FlatList
               data={Mydata.orderSatus}
               extraData={Mydata}
               renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
               </View>
        </SafeAreaView>
    )
    }
