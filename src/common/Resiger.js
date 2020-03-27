import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Grid,Icon} from '@ant-design/react-native'

export default class Resiger extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={{
                alignItems:"center"
            }}>
                <View style={[{flexDirection:'row'},styles.input]}>
                    <TextInput 
                        placeholder="用户名或者用户名"
                    />
                </View>
                <View style={[{flexDirection:'row'},styles.input]}>
                    <TextInput 
                        placeholder="密码"
                    />
                </View>
                <View style={[{flexDirection:'row'},styles.input]}>
                    <TextInput 
                        placeholder="再输入一次密码"
                    />
                </View>
            </View>
            <TouchableOpacity onPress={()=>Actions.login()} style={styles.btn}>
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
