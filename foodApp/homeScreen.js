import React from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import categoriesData from "./data/catergoriesData";
import popularData from "./data/popularData";
import colors from "./components/color";
import BouncyView from "react-native-bouncy-touchable";


Feather.loadFont();

export default HomeScreen = ({navigation}) => {

    const catCard = ({ item }) => {
        return (
            <View style={{
                height: 160,
                
                shadowColor:colors.black,
                shadowOffset:{
                    width:0,
                    height:2,
                },
                shadowOpacity:0.05,
                shadowRadius:10,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 2,
                marginLeft: item.id=="1"?20:0 ,marginRight: 15,marginVertical:10, backgroundColor: item.selected ? colors.primary : colors.white, paddingHorizontal: 24, paddingVertical: 10, alignItems: "center", justifyContent: "space-between", flexDirection: "column", borderRadius: 32
            }}>
                <Image source={item.image} height={60} width={60} />
                <Text>
                    {item.title}
                </Text>
                <TouchableOpacity style={{ backgroundColor: !item.selected ? colors.secondary : colors.white,borderRadius: 40, padding: 8 }}>
                    <Feather name='chevron-right' size={12} />
                </TouchableOpacity>
            </View>
        );
  
    };
   
    const popularCard =({item}) => {
        return(
            <View style={{
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation:2,
                marginBottom:10,
                marginHorizontal:20,
                backgroundColor:colors.white,
               
                borderRadius:30,
                overflow:"hidden"

            }}>
                <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                    <View style={{paddingLeft:20,paddingTop:20}}>
                        <View style={{flexDirection:"row",marginBottom:20 ,alignItems:"center"}}>
                         <MaterialCommunityIcons name = "crown"  color={colors.primary} size={12}/>
                            <Text style={{marginLeft:10, fontWeight: "600", color: colors.textDark  }}>Top of the Week </Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: '600', fontSize: 16, color: colors.textDark}}>{item.title}</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: colors.textLight ,marginTop:5}}>Weight  {item.weight}</Text>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <View style={{
                                marginLeft:-20,
                                borderBottomLeftRadius:25,
                                borderTopRightRadius:25,
                                backgroundColor:colors.primary,paddingHorizontal:40,paddingVertical:20,marginTop:10}}>
                                <Feather  name="plus" color={colors.black} />
                            </View>
                            <View style={{flexDirection:"row",marginLeft:20,marginTop:10,alignItems:"center"}}>
                                <MaterialCommunityIcons name= "star"  />
                                <Text> {item.rating} </Text>
                            </View>
                        </View>
                    </View>
                <Image source={item.image} style={{
                    
                    right:-50,
                    
                    width: 210,
                        height: 125,
                        resizeMode:'contain'
                }}/>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
           
            <SafeAreaView>
                <ScrollView 
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator= {false}
                >
                <View style={styles.headerWrapper}>
                    <Image source={require('./images/profile.png')} style={styles.porfileImage} />
                    <Feather name="menu" size={24} color={colors.textDark} />
                </View>
                <View style={{
                    marginTop: 30,
                    paddingHorizontal: 20
                }}>
                    <Text style={{ fontSize: 16, color: colors.textDark, fontWeight: "400" }}>
                        Food
                    </Text>
                    <Text style={{ fontSize: 32, color: colors.textDark, marginTop: 5, fontWeight: "800" }}>Delivery</Text>
                </View>

                {/* search*/}
                <View style={{ flexDirection: "row", alignItems: "center", margin: 20 }}>
                    <Feather name='search' size={24} />
                    <TextInput placeholder="Search .."
                        placeholderTextColor={colors.textLight}
                        cursorColor={colors.textLight}
                        style={{
                            fontWeight: "500",
                            fontSize: 16,
                            flex: 1,
                            marginLeft: 15,
                            borderBottomWidth: 0.8,
                            color: colors.black,
                        }}
                    />
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontWeight: "700", fontSize: 20 }}> Categories </Text>
                </View>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={categoriesData}
                        renderItem={catCard}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontWeight: "700", fontSize: 20 }}> Popular </Text>
                </View>
                <View>
                    {popularData.map((item)=>(
                        <BouncyView 
                            delay={20} // Animation delay in miliseconds
                            scale={0.9} // Max scale of animation
                            onPress={()=>navigation.navigate('Details',{item:item})}
                        key={item.key}>
                        <View key={item.key}
                        style={{
                            shadowColor: colors.black,
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.05,
                            shadowRadius: 10,
                            shadowColor: colors.black,
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.05,
                            shadowRadius: 10,
                            elevation: 2,
                            marginBottom: 10,
                            marginHorizontal: 20,
                            backgroundColor: colors.white,

                            borderRadius: 30,
                            overflow: "hidden"

                        }}>
                            <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ paddingLeft: 20, paddingTop: 20 }}>
                                    <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
                                        <MaterialCommunityIcons name="crown" color={colors.primary} size={12} />
                                        <Text style={{ marginLeft: 10, fontWeight: "600", color: colors.textDark }}>Top of the Week </Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontWeight: '600', fontSize: 16, color: colors.textDark }}>{item.title}</Text>
                                        <Text style={{ fontWeight: '400', fontSize: 14, color: colors.textLight, marginTop: 5 }}>Weight  {item.weight}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <View style={{
                                            marginLeft: -20,
                                            borderBottomLeftRadius: 25,
                                            borderTopRightRadius: 25,
                                            backgroundColor: colors.primary, paddingHorizontal: 40, paddingVertical: 20, marginTop: 10
                                        }}>
                                            <Feather name="plus" color={colors.black} />
                                        </View>
                                        <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10, alignItems: "center" }}>
                                            <MaterialCommunityIcons name="star" />
                                            <Text> {item.rating} </Text>
                                        </View>
                                    </View>
                                </View>
                                <Image source={item.image} style={{

                                    right: -50,

                                    width: 210,
                                    height: 125,
                                    resizeMode: 'contain'
                                }} />
                            </View>
                        </View>
                        </BouncyView >
                    ))}
                    {/* <FlatList 
                    data={popularData}
                        renderItem={popularCard}
                     keyExtractor={(item) => item.id}
                    /> */}
                
                    </View>
            </ScrollView>
            </SafeAreaView>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: "center"
    },
    porfileImage: {
        borderRadius: 40,
        width: 40,
        height: 40
    }

})