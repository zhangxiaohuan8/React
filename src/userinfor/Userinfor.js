import React, { Component } from 'react'

import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';     
import {Icon} from '@ant-design/react-native';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';
import {Router, Scene,Actions} from "react-native-router-flux";
const {width,scale} = Dimensions.get('window');
const s=width/640;
const options = {
    title: '选择方式',
     cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
export default class Userinfor extends Component {
    constructor(){
        super();
        this.state = {
            avatarSource:''
        }
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else {
                AsyncStorage.setItem('userImage',response.uri,
                ()=>{console.log('success')}
                )
                const source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                })
            }
          });
    }
    unlogin=()=>{
        AsyncStorage.removeItem('user');
        Actions.login()
    }
    componentDidMount(){
        AsyncStorage.getItem('userImage').then((res)=>{
            const source = { uri: res };
            this.setState({
                avatarSource: source,

            });
            console.log(this.state.avatarSource);
        }

        )
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="red" translucent={true}/>
                <ScrollView>
                <View  style={{width:'100%'}}>
                    <ImageBackground  
                    resizeMode='stretch' 
                    style={{width:'100%',height:380*s,alignItems:'center'}} 
                    source={require('../../img/back.gif')
                }
                >
                    <Button 
                        onPress={()=>{this.takephoto()}}
                    >{
                        this.state.avatarSource.uri==null?
                        <Image style={{width:140,height:140,borderRadius:70,marginTop:15}} source={require('../../img/head_03.gif')}/>:
                        <Image style={{width:140,height:140,borderRadius:70,marginTop:15}} source={this.state.avatarSource}/>
                    }
                        </Button>
                     
                    <Text style={{color:'#fff',fontSize:22}}>BINNU DHILLON</Text>
                </ImageBackground >
                </View>
                <View style={{width:'100%',
                    height:75*s,
                    backgroundColor:'#fff',
                    flexDirection:'row',
                    }}
                >
                    <Icon name='user' style={{margin:10}}/>
                    <Text style={{margin:10,fontSize:15,color:'#ababab'}}>我的个人中心</Text>
                </View>
                <View style={{marginTop:1,backgroundColor:'#fff',flexDirection:'row',flexWrap:'wrap'}}>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>账户管理</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>收货地址</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>我的信息</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>我的订单</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>我的二维码</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>我的积分</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>我的收藏</Text>
                    </View>
                </View>
                <View style={{width:'100%',
                    height:50,
                    backgroundColor:'#fff',
                    flexDirection:'row',
                    marginTop:7
                    }}
                >
                    <Icon name='home' style={{margin:10}}/>
                    <Text style={{margin:10,fontSize:15,color:'#ababab'}}>E族活动</Text>
                </View>
                <View style={{marginTop:1,backgroundColor:'#fff',flexDirection:'row',flexWrap:'wrap'}}>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>居家维修保养</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>出行接送</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>我的受赠人</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>我的住宿优惠</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.text}>我的活动</Text>
                    </View>
                    <View style={styles.box}>
                        <Button onPress={()=>Actions.fabu()}>
                            <Icon name='home' style={styles.icon}/>
                        </Button>
                        <Button onPress={()=>Actions.fabu()}>
                            <Text style={styles.text}>我的发布</Text>
                        </Button>
                    </View>
                </View>
                <View style={{height:94*s,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.btn} onPress={this.unlogin}><Text>退出登录</Text></TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
     box:{
        width:'33%',
        height:130*s,
        justifyContent:'center',
        alignItems:'center'
     },
     text:{
        color:'#ababab',fontSize:15,marginTop:5
     },
     icon:{
          fontSize:25
     },
     btn:{
        borderColor:"silver",
        width:280,
        height:34,
        borderWidth:1,
        backgroundColor:"silver",
        alignItems:"center",
        justifyContent:"center"
    },
  })