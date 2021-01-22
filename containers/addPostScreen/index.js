import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ListViewProperties

} from "react-native";
import SearchBar from '../../components/SearchBar/index'
import MainButton from "../../components/MainButton";
const { width, height } = Dimensions.get("window");
import {Ionicons} from '@expo/vector-icons'

export default function AddPostScreen({navigation,onPress}){
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            <SearchBar icon1="ios-arrow-back" title="Add Post"/> 
            <View style={{
                width:width*0.8,
                height:height*0.3,
                borderWidth:0.4,
                alignItems:"center",
                justifyContent:"center"
                }}>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={{fontSize:18}}>
                            Choose Picture
                        </Text>
                        <Ionicons name="ios-camera"size={30}style={{alignSelf:"center"}}/>
                    </TouchableOpacity>
            </View>
            <TextInput 
                style={{
                    borderWidth:0.4,
                    width:width*0.8,
                    borderRadius:8,
                    borderColor:"#989898",
                    padding:8,
                    marginVertical:10
                    }}
                    placeholder="Place">
                    </TextInput>
                    <TextInput 
                style={{
                    borderWidth:0.4,
                    width:width*0.8,
                    borderRadius:8,
                    borderColor:"#989898",
                    padding:8,
                    }}
                    placeholder="About Photo">
                    </TextInput>
                    <MainButton title="Share"touchStyle={{marginVertical:10}}/>

        </SafeAreaView>
    )
    }
