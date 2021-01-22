import React from "react";
import {
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import SearchBar from '../../components/SearchBar/index'
import SearchTabBar from '../../components/SearchTabBar/index'
import Requests from '../../components/Requests/index'
import colors from '../../constants/colors'

export default function FollowScreen ({navigation}){
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image45.png'),
                title:"Jessica Stanley" ,
                color:colors.skyBlue,
                btntxt:"Follow"
                
              },
              {
                image:require('../../assets/image45.png'),
                title:"Janet Green" ,
                color:colors.skyBlue  ,
                btntxt:"Follow"
            },
              {
                image:require('../../assets/image45.png'),
                title:"Jouniur agai" ,
                color:colors.skyBlue,
                btntxt:"Follow"

            },
            {
                image:require('../../assets/image45.png'),
                title:"Fransisica" ,
                color:colors.skyBlue,
                btntxt:"Follow"

            },

                   ]
    }
  Mydata.renderOrderSatatus = item => (
    <Requests
    onPress={item.onPress}
    image={item.image}
    title={item.title}
    color={item.color}
    btntxt={item.btntxt}
  />
);
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            <SearchBar icon1="ios-arrow-back" title="Follow requests" />
            <SearchTabBar/>
            <FlatList
               data={Mydata.orderSatus}
               extraData={Mydata}
               renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
        </SafeAreaView>
    )
    }
