import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,AsyncStorage,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Grid,Icon} from '@ant-design/react-native'
import {myFetch} from '../utils'
export default class Resiger extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle=(text)=>{
        this.setState({username:text});
        console.log(this.state.username);
    }
    pwdhandle=(text)=>{
        this.setState({pwd:text});
        console.log(this.state.pwd);
    }
    register=()=>{
        this.setState({isloading:true})
        myFetch.post('/register',{
            username:this.state.username,
            pwd:this.state.pwd
        })
        .then(res=>{
            //根据返回状态进行判断，正确时跳转首页
            AsyncStorage.setItem('user1',JSON.stringify(res.data))
            .then(()=>{
                console.log(res);
                if(res.data.token==1){
                    Actions.login();
                }
                else if(res.data.token==2){
                    ToastAndroid.show("此账户已存在",100);
                }
                else if(res.data.username==''||res.data.pwd==""){
                    ToastAndroid.show("不能为空",100);
                }
                else{
                    Actions.login();
                }
            })
        })
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={{
                alignItems:"center"
            }}>
                <View style={[{flexDirection:'row'},styles.input]}>
                    <TextInput 
                        placeholder="用户名"
                        onChangeText={this.userhandle}
                        style={{paddingTop:0,paddingBottom:0}}
                    />
                </View>
                <View style={[{flexDirection:'row'},styles.input]}>
                    <TextInput 
                        placeholder="密码"
                        onChangeText={this.pwdhandle}
                        secureTextEntry={true}
                        style={{paddingTop:0,paddingBottom:0}}
                    />
                </View>
                <View style={[{flexDirection:'row'},styles.input]}>
                    <TextInput 
                        placeholder="再输入一次密码"
                        style={{paddingTop:0,paddingBottom:0}}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={this.register} style={styles.btn}>
                <Text>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1} onPress={()=>Actions.login()}><Text>登录</Text></TouchableOpacity>
        </View>
        )
    }
}
const styles=StyleSheet.create({
    btn:{
        borderColor:"silver",
        width:280,
        height:34,
        borderWidth:1,
        backgroundColor:"silver",
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        borderColor:"silver",
        width:320,
        height:34,
        borderBottomWidth:1,
        alignItems:"center",
        margin:10
    },
    load:{
        marginTop:30
    },
    btn1:{
        marginTop:10,
        marginLeft:'50%'
    }
});
