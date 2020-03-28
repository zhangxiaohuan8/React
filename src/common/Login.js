import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Grid,Icon} from '@ant-design/react-native'
import {myFetch} from '../utils'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle=(text)=>{
        this.setState({username:text})
    }
    pwdhandle=(text)=>{
        this.setState({pwd:text});
        console.log(this.state.pwd);
    }
    login=()=>{
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd
        })
        .then(res=>{
            //根据返回状态进行判断，正确时跳转首页
            AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
                this.setState({isloading:false})
                Actions.homePage();
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
                        <Icon name="user" color="red"/>
                        <TextInput 
                            placeholder="用户名"
                            onChangeText={this.userhandle}
                            style={{paddingTop:0,paddingBottom:0}}
                        />
                    </View>
                    <View style={[{flexDirection:'row'},styles.input]}>
                        <Icon name="user" color="red"/>
                        <TextInput 
                            placeholder="密码"
                            onChangeText={this.pwdhandle}
                            secureTextEntry={true}
                            style={{paddingTop:0,paddingBottom:0}}
                        />
                    </View>
                    
                </View>
                <TouchableOpacity onPress={this.login} style={styles.btn}>
                    <Text>登录</Text>
                </TouchableOpacity>
                {
                    this.state.isloading
                    ?<View stlyle={styles.load}><Text style={{color:'red'}}>正在登录...</Text></View>
                    :null
                }
                <TouchableOpacity style={styles.btn1} onPress={()=>Actions.resiger()}><Text>注册</Text></TouchableOpacity>
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
