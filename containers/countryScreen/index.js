import React from "react";
import {
  SafeAreaView,
  FlatList,
} from "react-native";
import SearchBar from '../../components/SearchBar/index'
import SearchTabBar from '../../components/SearchTabBar/index'
import TouchView from '../../components/TouchView/index'

export default function CountryScreen ({navigation}){
    const Mydata = {
        orderSatus: [
            {
                title:"America" ,
              },
              {
                title:"Canada" ,
              },
              {
                title:"Australia" ,
              },
              {
                title:"Brazil" ,
              },
              {
                title:"China" ,
              },
              {
                title:"Colombia" ,
              },
              {
                title:"Greece" ,
              },
              {
                title:"India" ,
              },
              {
                title:"Indonesia" ,
              },
              {
                title:"Italy" ,
              },
              {
                title:"France" ,
              },
              {
                title:"Japan" ,
              },
              {
                title:"Tokyo" ,
              },

                   ]
    }
  Mydata.renderOrderSatatus = item => (
    <TouchView
    onPress={item.onPress}
    title={item.title}
  />
);
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            <SearchBar icon1="ios-arrow-back" title="Country" />
            <SearchTabBar/>
            <FlatList
               data={Mydata.orderSatus}
               extraData={Mydata}
               renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
        </SafeAreaView>
    )
    }
