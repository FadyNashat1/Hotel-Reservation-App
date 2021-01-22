import React from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import CenterHeader from '../../components/CenterHeader/index'
const { width, height } = Dimensions.get("window");
import Cart from '../../components/Cart/index'
import {Ionicons} from '@expo/vector-icons'
export default function ProfileScreen ({navigation}){
    const Data = {
        orderSatus: [
            {
                image:require('../../assets/image48.png'),
              },
              {
                image:require('../../assets/image49.png'),
              },
              
      ]
    }
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image49.png'),
              },
              {
                image:require('../../assets/image48.png'),
              },
      ]
    }
    Mydata.renderOrderSatatus = item => (
        <Cart 
          image={item.image}
          onPress={item.onPress}
          txt={item.txt}
        />
      )
  
    Data.renderOrderSatatus = item => (
      <Cart 
        image={item.image}
        onPress={item.onPress}
        txt={item.txt}
      />
    )
    
    return (
        <View style={{
            flex:1,
            alignItems:"center",
            backgroundColor:"white"
            }}>
            <View style={{flex:0.6}}>
            <ImageBackground
                style={{flex:1}}
                source={require('../../assets/image47.png')}>
                </ImageBackground>                
            <View style={{
                alignItems:"center",
                bottom:40
                }}>
                <ImageBackground 
                    source={require('../../assets/image50.png')}
                    style={{
                        width:110,
                        height:110,
                        borderRadius:20
                        }}>
                        <TouchableOpacity
                             style={{   
                                width:30,
                                height:28,
                                borderRadius:20,
                                backgroundColor:"#eee",
                                top:70,
                                left:70,
                                justifyContent:"center"
                            }}>
                              <Ionicons name="ios-camera"size={22}style={{alignSelf:"center"}}/>
                        </TouchableOpacity>
                    </ImageBackground>
                    <Text style={{fontSize:20,color:"#000000"}}>
                        Michelle Garrett
                    </Text>
                    <Text style={{fontSize:12,color:"#707070"}}>
                        joe.lawson@mail.com
                    </Text>
            <View style={{
                borderBottomWidth:0.45,
                borderTopWidth:0.45,
                flexDirection:"row",
                justifyContent:"space-evenly",
                padding:10,
                width:width,
                marginVertical:5
                }}>
            <View>
                <Text style={{textAlign:"center"}}>
                        320
                    </Text>
                    <Text>
                        Following
                </Text>
            </View>
            <View>
                <Text style={{textAlign:"center"}}>
                        320
                    </Text>
                    <Text>
                        Follower
                    </Text>
            </View>
         </View>
      </View>
 </View>
            <View style={{flex:0.2}}>
              <CenterHeader title="Your post"/>
                    <FlatList
                        horizontal
                        data={Data.orderSatus}
                        extraData={Data}
                        renderItem={({ item }) => Data.renderOrderSatatus(item)}/>
          </View>
          <View style={{flex:0.2}}>
               <CenterHeader title="Add To Favourite"/>
                   <FlatList
                        horizontal
                        data={Mydata.orderSatus}
                        extraData={Mydata}
                        renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
           </View>
        </View>
    )
    }
