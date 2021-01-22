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

export default function BestPlaceScreen ({navigation}){
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image41.png'),
                title:"Ramade Encore" ,
                subtitle:"Kuta, Kota Denpasar" ,
                onPress:() => navigation.navigate("HotelDetailsScreen")    
              },
              {
                image:require('../../assets/image44.png'),
                title:"Alam Sembuwuk Resort" ,
                subtitle:"Kabupaten Gianyar"     
              },
              {
                image:require('../../assets/image42.png'),
                title:"The ONE Legian Hotel Resort" ,
                subtitle:"Badung Regency" ,
              },
              {
                image:require('../../assets/image28.png'),
                title:"Grand Zuri Kuta" ,
                subtitle:"Kuta, Kabupaten Badung"     
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
            <SearchBar icon1="ios-arrow-back" textplace={{width:width*0.7}} title="Best Place & Hotel in canada"/>
            <SearchTabBar/>
            <FlatList
               data={Mydata.orderSatus}
               extraData={Mydata}
               renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
               </View>
        </SafeAreaView>
    )
    }
