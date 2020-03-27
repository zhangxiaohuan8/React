import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid,AsyncStorage} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from 'react-native-button'
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Userinfor from './src/userinfor/Userinfor';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Fabu from './src/userinfor/Fabu';
import Resiger from './src/common/Resiger';


console.disableYellowBox = true;

const App = () => {
  // 实现 Tabs
	let [isLogin,setLogin]=useState(false);
	let [isInstall,setInstall]=useState(true);
	let now = 0;
	let init=()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res);
			if(res){
				setInstall(false);
			}
		})
		// AsyncStorage.clear();
    	AsyncStorage.getItem('user')
      	.then(res=>{
        	let user=JSON.parse(res)
        	if(!user){
          	SplashScreen.hide();
        	}
        	if(user&&user.token){
          	setLogin(true);
          	SplashScreen.hide();
        	}
		})
	}
	useEffect(()=>{
		 init()

	},[])
	let afterInstall =()=>{
		setInstall(false);
	}
	if(isInstall){
		return <View style={{flex:1}}>
					<SwiperPage afterInstall={afterInstall}/>
				</View>
	}
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene === 'home'){
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				else if(Actions.currentScene === 'login'){
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				else{
					Actions.pop();
          			return true;
				}
				
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="#ababab"
							>
								{/* 首页 */}
								<Scene key='homePage'
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'red':'#ababab'} 
											name="home"
										/>
									  }
									hideNavBar
								>
									<Scene key='home' hideNavBar={true} component={Home}/>
								</Scene>
								{/* 商品分类 */}
								<Scene key='goodsPage'
									title='商品分类'
									icon={
										({focused})=><Icon 
											color={focused?'red':'#ababab'} 
											name="shopping"
										/>
									}
									hideNavBar
								>
									<Scene key="goods" component={Goods}/>
								</Scene>
								{/* 用户中心 */}
								<Scene 
									key='userPage'
									title="个人中心" 
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'#ababab'} 
											name='user'/>
										}
										hideNavBar
								>
									<Scene component={Userinfor}/>
									<Scene title='我的发布' 
                    					hideTabBar 
                    					key='fabu' 
                    					renderRightButton={
                    					<Button>
                      						<Text style={{fontsize:50,marginRight:30,marginTop:-10,color:'#fff'}}>. . .</Text>
                      					</Button>}
                    					component={Fabu}
                    					titleStyle={{flex:1,marginLeft:'40%',color:'#fff'}}
                    					navBarButtonColor="white"
                    					navigationBarStyle={{backgroundColor:'red'}}
                  					/> 
								</Scene>
								
							</Tabs>
						</Scene>
					</Drawer>
				</Lightbox>		
        	<Scene key="login"  initial={!isLogin} component={Login}/>
			<Scene key="resiger" component={Resiger}/>
			</Modal>
			</Overlay>
		</Router>
	);
};

export default App;