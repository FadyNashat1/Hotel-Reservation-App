import React from 'react';
import { ScrollView,Dimensions,ImageBackground,Text,SafeAreaView,FlatList,View } from 'react-native';
const { width, height } = Dimensions.get("window");
import MainButton from '../../components/MainButton/index'
import colors from '../../constants/colors'
import { useNavigation } from '@react-navigation/native';
import FavButton from '../../components/FavButton';
import HotelPhotoCart from '../../components/HotelPhotoCart/index'

 export default function HotelDetailsScreen ({navigation }) {
    const Mydata = {
        orderSatus: [
          {
            image:require('../../assets/image34.png'),
          },
          {
            image:require('../../assets/image35.png'),
          },
          {
            image:require('../../assets/image36.png'),
          },
          {
            image:require('../../assets/image34.png'),
          },
          {
            image:require('../../assets/image35.png'),
          },
          {
            image:require('../../assets/image36.png'),
          },
]
    }
  
  Mydata.renderOrderSatatus = item => (
    <HotelPhotoCart
        onPress={item.onPress}
        image={item.image}
  />
);    
     const{navigate}=useNavigation()
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
                <ImageBackground
                    source={require("../../assets/image33.png")}
                    style={{
                      flex:0.8,
                      justifyContent:"flex-end"
                    }}>
                    <Text style={{
                        fontSize:19,
                        color:colors.white,
                        fontWeight:"bold",
                        padding:10
                        }}>
                            Ramade Encore
                    </Text>
                    <Text style={{
                        fontSize:15,
                        color:colors.white,
                        marginHorizontal:20,
                        width:width*0.65
                        }}>
                            Jl, Devi Saraswayi lll, Seminyak,
                            Kuta, Kota Denpasar, Bali, 80361 
                    </Text>
                    <Text style={{
                        fontSize:10,
                        color:colors.white,
                        padding:10,
                        width:width*0.65
                        }}>
                            Etiam facilisis ligula nec veilt posuere egetas.
                            Nunc dictum lectus sem, vel dignissim purus l
                            uctus quis, Vestibulum et ligula suscipit, hendre
                            nit erat a, ultricies velit. Prasent convallis in lore
                            m nec blandit. Phasellus a porta tellus, .
                    </Text>
                    <MainButton title="Open Maps"touchStyle={{width:width*0.4}}/>
             </ImageBackground>

        <View style={{flex:0.19}}>
             <Text style={{marginHorizontal:15,marginVertical:10}}>
                 More photos
            </Text>
            <FlatList
                horizontal
                data={Mydata.orderSatus}
                extraData={Mydata}
                renderItem={({ item }) => Mydata.renderOrderSatatus(item)}>
             </FlatList>
        </View>
       </View>
    );
}
