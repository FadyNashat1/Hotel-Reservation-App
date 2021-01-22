import React from "react";
import {
  SafeAreaView,
  Text,
  Dimensions,
  View
} from "react-native";
import SearchBar from '../../components/SearchBar/index'
const { width, height } = Dimensions.get("window");


export default function PrivacyPolicyScreen ({navigation}){
    return (
        <SafeAreaView style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",padding:10}}>
            <SearchBar icon1="ios-arrow-back" title="Privacy Policy" />
            <View>
            <Text style={{fontSize:15,color:"#979797",width:width*0.9}}>
            Vivamus eget aliquam dui. Integer eu arcu 
            vel arcu suscipit ultrices quis non mauris. A
            enean scelerisque, sem eu dictum commod
            o, velit nisi blandit magna, quis scelerisque ips
            um lectus ut libero. Sed elit diam, dignissim a
            c congue quis, aliquam in purus. Proin ligul
            a nulla, scelerisque quis venenatis pulvinar, 
            congue eget neque. Proin scelerisque metus
            sit amet dolor tempor vehicula. Sed laoreet
            quis velit vitae facilisis.
            </Text>
            <Text style={{fontSize:15,color:"#979797",marginVertical:5,width:width*0.9}}>
            Duis ut sapien eu urna laoreet maximus. Do
            nec nibh diam, vulputate vel nulla ut, viverra
            congue turpis. Fusce consectetur posuere p
            urus, eget placerat nunc hendrerit at. Sed le
            ctus dui, euismod a odio vitae, dictum dictum
            m justo.
            </Text>
            <Text style={{fontSize:15,marginVertical:5}}>
                Loerm ipsum
            </Text>
            <Text style={{fontSize:15,color:"#979797",marginVertical:4,width:width*0.9}}>
            Duis ut sapien eu urna laoreet maximus. Do
            nec nibh diam, vulputate vel nulla ut, viverra
            congue turpis.
            </Text>
            </View>
        </SafeAreaView>
    )
    }
