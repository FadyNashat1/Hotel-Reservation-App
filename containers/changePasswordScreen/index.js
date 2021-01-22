import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Dimensions
} from "react-native";
import SearchBar from '../../components/SearchBar/index'
import Input from '../../components/Input/index'
import MainButton from "../../components/MainButton";
const { width, height } = Dimensions.get("window");


export default function ChangePasswordScreen ({navigation}){
    const Mydata = {
        orderSatus: [
            {
                placeholder:"Current password" ,
              },
              {
                placeholder:"New password" ,
              },
              {
                placeholder:"New password agian" ,
              },
                   ]
    }
  Mydata.renderOrderSatatus = item => (
    <Input
    placeholder={item.placeholder}
    inputStyle={{width:width }}
        
  />
);
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
            <SearchBar icon1="ios-arrow-back" title="Change Password" />
            <FlatList
               data={Mydata.orderSatus}
               extraData={Mydata}
               renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
               <MainButton 
                title="Save"
                />
        </SafeAreaView>
    )
    }
