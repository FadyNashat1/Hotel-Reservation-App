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

export default function FollowRequestScreen ({navigation}){
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image45.png'),
                title:"Jessica Stanley" ,
                color:colors.success,
                btntxt:"Confirm"

              },
              {
                image:require('../../assets/image45.png'),
                title:"Janet Green" ,
                color:colors.success,
                btntxt:"Confirm"
              },
              {
                image:require('../../assets/image45.png'),
                title:"Jouniur agai" ,
                color:colors.success,
                btntxt:"Confirm"
            },
            {
                image:require('../../assets/image45.png'),
                title:"Fransisica" ,
                color:colors.success,
                btntxt:"Confirm"
            },
            {
                image:require('../../assets/image45.png'),
                title:"Tomas yong" ,
                color:colors.success,
                btntxt:"Confirm"
            },
            {
                image:require('../../assets/image45.png'),
                title:"Peter Lous" ,
                color:colors.success,
                btntxt:"Confirm"
            },
            {
                image:require('../../assets/image45.png'),
                title:"Lucas" ,
                color:colors.success,
                btntxt:"Confirm"
            },
            {
                image:require('../../assets/image45.png'),
                title:"Solly Frano" ,
                color:colors.success,
                btntxt:"Confirm"
            },
            {
                image:require('../../assets/image45.png'),
                title:"Angokr Wat" ,
                color:colors.success,
                btntxt:"Confirm"
            },
              {
                image:require('../../assets/image45.png'),
                title:"Kenya" ,
                color:colors.success,
                btntxt:"Confirm"
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
