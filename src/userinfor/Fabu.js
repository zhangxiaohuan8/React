import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  ScrollView,
} from 'react-native';     
import Button from 'react-native-button';
export default class Fabu extends Component {
    constructor(){
        super();
        this.state={
            tits:[],
            page:1,
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&limit=12')
        .then(res => res.json())
        .then(res => {
            this.setState({
                tits:res.data
            })          
        })
    }
    dele=()=>{
        let page=this.state.page-1;
        fetch('https://cnodejs.org/api/v1/topics?page='+page+'&limit=12')
        .then(res => res.json())
        .then(res => {
            this.setState({
                tits:res.data,
                page:this.state.page-1
            }) 
            if(this.state.page==0){
                ToastAndroid.show('已经为第一页',1000);
                this.setState({
                    page:1
                }) 
            }         
        })
    }

    add=()=>{
        let page=this.state.page+1;
        fetch('https://cnodejs.org/api/v1/topics?page='+page+'&limit=12')
        .then(res => res.json())
        .then(res => {
            this.setState({
                tits:res.data,
                page:this.state.page+1
            })          
        })
    }
    render() {
        return (
            <View style={{backgroundColor:'#fff'}}>
                <ScrollView>
                {
                    this.state.tits.map((item)=>(
                        <View style={styles.box}>
                            <Text style={styles.text}>
                                {item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title}
                            </Text>
                            <Text style={styles.create}>{item.create_at.substr(0, 10)}</Text>
                            {
                                item.reply_count%2==0?
                                <Text style={styles.fu}>已回复</Text>:
                                <Text style={[styles.fu,{color:'red'}]}>待回复</Text>
                            }
                        </View>
                    ))
                }
                <View style={styles.foot}>
                    <Button onPress={this.dele} style={styles.btn}>上一页</Button>
                    <Text style={styles.footpage}>第{this.state.page}页</Text>
                    <Button onPress={this.add} style={styles.btn}>下一页</Button>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
   box:{
    width:'100%',
    height:50,
    marginLeft:'5%',
    flexDirection:'row',
    alignItems:'center'
   },
   text:{
    fontSize:15
   },
   create:{
    position:'absolute',
    left:'65%'
   },
   foot:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:100,
    marginLeft:'5%'
   },
   btn:{
       width:100,
       height:40,
       borderRadius:20,
       backgroundColor:'red',
       padding:6,
       color:'#fff'
   },
   footpage:{
       marginLeft:'20%',
       marginRight:'20%',
       fontSize:20
   },
   fu:{
    position:'absolute',
    left:'85%'
   }

})