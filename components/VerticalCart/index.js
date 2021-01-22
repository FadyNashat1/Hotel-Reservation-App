import React from "react";
import { Text, View, TouchableOpacity, Dimensions,ScrollView,Image,ImageBackground,FlatList, SafeAreaView } from "react-native";
const { width, height } = Dimensions.get("window");
import colors from '../../constants/colors'

export default function VerticalCart({onPress,overlay,txt,image,navigation}) {
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image31.png'),
                title:"Canada" ,     
              },
              {
                image:require('../../assets/image24.png'),
                title:"USA" ,     
              },
              {
                image:require('../../assets/image26.png'),
                title:"Australia" ,     
              },
      ]
    }
  
  Mydata.renderOrderSatatus = item => (
          <View style={{}}>
    <View>
        <TouchableOpacity 
                onPress={onPress}>
            <ImageBackground
                source={item.image}
                style={{
                    width:width*0.33,
                    height:height*0.2,
                    justifyContent:"center",
                    
        }}>
            </ImageBackground>
            <Text style={{alignSelf:"center"}}> 
                {item.title} 
            </Text>
        </TouchableOpacity>
    </View>
    </View>
);
    return (
        <FlatList
            horizontal
            data={Mydata.orderSatus}
            extraData={Mydata}
            renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
    )
}