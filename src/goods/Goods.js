import React ,{useState}from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  Image
} from 'react-native';
import {Icon} from '@ant-design/react-native';
export default function Goods() {
  let [data, setData] = useState([1,2,3,4,5,6]);
  return (
    <View style={styles.back}> 
      <View style={styles.head}>
        <View style={styles.input}>
          <TextInput placeholder="请输入商品名称" placeholderTextColor="#a6a6a6"/>
          <Icon name="search" style={styles.img}/>
        </View>
      </View>
      <View style={styles.tab}>
          <Text style={[styles.text,{color:'red'}]}>综合</Text>
          <Text style={styles.text}>销售</Text>
          <Text style={styles.text}>新品</Text>
          <Text style={styles.text}>价格</Text>
          <Text style={styles.text}>信用</Text>
      </View>
      <ScrollView>
          <View style={styles.bottom}>
          {data.map((item)=>{
        return(
            <View style={styles.box} key={item}>
              <View style={styles.img1}>
                {
                  item%2==0?
                  <Image resizeMode='contain' style={{width:150,height:150,margin:14}} source={require('../../img/a1.gif')}/>
                  :<Image resizeMode='contain' style={{width:150,height:150,margin:14}} source={require('../../img/a2.gif')}/>
                }
              </View>
              <View>
                <Text style={styles.txt}>Oisshi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={styles.dallor}>36.00</Text>
              </View>
            </View>
             
            )}
            )}  
          </View>
          <View style={styles.bottom1} ></View>
       </ScrollView>
    </View>
  );
   
};
const styles=StyleSheet.create({
  back:{
    backgroundColor:'#eeeeee'
  },
  head:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  input:{
    marginTop:10,
    width:'80%',
    height:40,
    borderRadius:5,
    backgroundColor:'#eeeeee',
    alignItems:'center',
    flexDirection:'row',
    fontSize:20
  },
  img:{
    width:20,
    height:20,
    margin:10,
    marginLeft:'55%'
  },
  tab:{
    height:70,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'center',
    paddingLeft:40,
    marginBottom:5
  },
  text:{
    width:'18%',
    marginTop:30,
    fontSize:17
  },
  bottom:{
    flexDirection:'row',
    flexWrap:'wrap',
    width:'100%',
    marginTop:10
  },
  box:{
    width:'47%',
    height:300,
    backgroundColor:'#fff',
    marginLeft:'2%',
    marginTop:5
  },
  img1:{
    height:'60%',
    margin:'10%',
  },
  txt:{
    margin:5,
    marginTop:0,
    color:'#666666'
  },
  dallor:{
    color:'red',
    margin:10
  },
  bottom1:{
    height:200
  }
})



