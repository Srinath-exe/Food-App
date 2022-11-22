import React from "react";
import { View ,Text, Image, FlatList, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "./components/color";

export default DetailsScreen = ({ route, navigation }) => {
     const {item} = route.params;

     const Cell = ({data,title}) => {
        return (
            <View style={{paddingVertical:10}}>
                <Text style={{color:colors.textLight,fontSize:16,marginBottom:4}}>{title}</Text>
                <Text style={{ color: colors.textDark,fontWeight:'600', fontSize: 20 }}>{data}</Text>
            </View>
        );
     }

    const ingredientsCards = ({ item }) => {
        return (
            <View style={{width:120,elevation:2,backgroundColor:colors.white,justifyContent:'center',alignItems:'center',padding:10, marginLeft:item.id=='1'?20:0 ,marginRight:10,marginVertical:5,borderRadius:30}}>
                <Image source={item.image} height={60} width={50}/>
            </View>
        );
     }
    return(
        <SafeAreaView style={{marginHorizontal:20}}>

        <View style={{flexDirection:"row" , justifyContent:"space-between",marginTop:20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ borderColor: colors.black, borderWidth: 2, borderColor: colors.textLight, padding: 10, width: 50, height: 50, borderRadius: 12, alignItems: "center", justifyContent: "center" }}>
                        <Feather name="chevron-left" color={colors.black} size={20} />
                    </View> 
                </TouchableOpacity>
                <View style={{ backgroundColor: colors.primary, padding: 10, borderRadius: 16, width: 50, height: 50, alignItems:"center",justifyContent:"center"}}>
                    <MaterialCommunityIcons name="star" color={colors.white} size={20} />
                </View>
        </View>
            <Text style={{ color: colors.textDark, fontSize: 40, fontWeight: '600', marginVertical: 20 }}>
                {item.title}
            </Text>
            <Text style={{ color: colors.price, fontSize: 40, fontWeight: '600', marginVertical: 10 }}>
           $ {item.price}
        </Text>
        <View style={{flexDirection:"row",alignItems:'center'}}>
       <View>
                    <Cell title="Size" data={item.sizeName + item.sizeNumber+"''"  } />
                    <Cell title="Crust" data={item.crust} />
                    <Cell title="Delivery In" data={item.deliveryTime+ " min"} />
       </View>
       <Image style={{right:-30}} source={item.image}/>
        </View>
            <View style={{ marginVertical: 20 }}>
                <Text style={{ fontWeight: "700", fontSize: 20 }}> Ingredients </Text>
            </View>
            <FlatList style={{marginHorizontal:-20}}
                data= {item.ingredients}
                showsHorizontalScrollIndicator={false}
                renderItem={ingredientsCards}
                horizontal={true}
            />
            <TouchableOpacity style={{backgroundColor:colors.primary,padding:20,alignItems:'center',borderRadius:40,marginVertical:40}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: "700", fontSize: 18 ,marginRight:20}}>
                        Place an Order
                    </Text>
                    <Feather name= 'chevron-right' size={30}/>
                </View>

            </TouchableOpacity>
        </SafeAreaView>
    );
}