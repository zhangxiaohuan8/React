import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
  StatusBar
} from 'react-native';
import {Icon} from '@ant-design/react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window')
const s=width/640;
export default class Home extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="red" translucent={true}/>
                <View style={styles.head}>
                    <View style={{width:'80%',height:50*s,backgroundColor:'#fff',opacity:0.7,borderRadius:25,flexDirection:'row',color:'#fff'}}>
                        <Icon name="search" style={styles.icon}/>
                        <TextInput 
                            placeholder="请输入你要输入的搜索字"
                            placeholderTextColor="#fff"
                        ></TextInput>
                    </View>
                    <Icon name="shopping-cart" style={styles.icon}/>
                </View>
                <ScrollView> 
                    <Swiper
                        style={{height:270*s}}
                        horizontal={true}
                        autoplay={true}   
                        autoplayTimeout={4}
                        dot={<View style={{ 
                            backgroundColor:'#fff',
                            width:10,
                            height:10,
                            borderRadius:5,
                            marginLeft:10
                        }}/>}
                        activeDot={<View style={{
                            backgroundColor:'red',
                            width:10,
                            height:10,
                            borderRadius:5,
                            marginLeft:10
                        }}/>}
                        >
                        <View style={styles.slide}>
                            <Image
                                resizeMode='stretch'
                                style={{width:'100%',height:270*s}}
                                source={require('../../img/banner_02.gif')}
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                resizeMode='stretch'
                                style={{width:'100%',height:270*s}}
                                source={require('../../img/banner_02.gif')}
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                resizeMode='stretch'
                                style={{width:'100%',height:270*s}}
                                source={require('../../img/banner_02.gif')}
                            />
                        </View>
                    </Swiper>
                    <View style={styles.box}>
                        <View style={[styles.cricle,{backgroundColor:'#ffcccc'}]}>
                            <Image style={styles.img}source={require('../../img/images/服务_03.gif')}/>
                        </View>
                        <Text style={styles.text}>居家维修保养</Text>
                        <Icon name="right" style={{position:'absolute',right:30*s}}/>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.cricle,{backgroundColor:'#ffe1b1'}]}>
                            <Image style={styles.img}source={require('../../img/images/服务_07.gif')}/>
                        </View>
                        <Text style={styles.text}>住宿优惠</Text>
                        <Icon name="right" style={{position:'absolute',right:30*s}}/>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.cricle,{backgroundColor:'#bfe6a8'}]}>
                            <Image style={styles.img}source={require('../../img/images/服务_10.gif')}/>
                        </View>
                        <Text style={styles.text}>出行接送</Text>
                        <Icon name="right" style={{position:'absolute',right:30*s}}/>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.cricle,{backgroundColor:'#c3ddf2'}]}>
                            <Image style={styles.img}source={require('../../img/images/服务_13.gif')}/>
                        </View>
                        <Text style={styles.text}>E族活动</Text>
                        <Icon name="right" style={{position:'absolute',right:30*s}}/>
                    </View>
                    <Button
                        style={styles.btn}
                    >
                        发布需求
                    </Button>
                    <View style={styles.bottom}>
                        <Text 
                            style={{color:'#767676',fontSize:14*s}}
                        >
                            E族之家 版权所有
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
     head:{
         height:80*s,
         width:'100%',
         alignItems:'center',
         flexDirection:'row',
         justifyContent:'center',
         backgroundColor:'red'
     },
     icon:{
        fontSize:30,
        color:'#fff',
        marginLeft:10,
        marginTop:5
     },
     slide:{
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box:{
        width:'100%',
        height:120*s,
        backgroundColor:'#fff',
        marginTop:11*s,
        alignItems:'center',
        flexDirection:'row'
    },
    cricle:{
        width:100*s,
        height:100*s,
        borderRadius:50*s,
        marginLeft:24*s,
        alignItems:'center',
        justifyContent: 'center',
    },
    img:{
        width:58*s,
        height:58*s
    },
    text:{
        marginLeft:47*s,
        fontSize:20*s,
        color:'#5d5d5d'
    },
    btn:{
        width:540*s,
        height:65*s,
        backgroundColor:'#f23030',
        borderRadius:5,
        color: '#fff',
        textAlignVertical: 'center',
        marginLeft:50*s,
        marginTop:35*s
    },
    bottom:{
        width:width,
        height:100*s,
        alignItems:'center',
        justifyContent: 'center',
    }
 })
