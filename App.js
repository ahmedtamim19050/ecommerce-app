import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,Button } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons,Feather } from '@expo/vector-icons';

import Home from './screens/Home';
import Product from './screens/ProductSingle';
import Cart from './screens/Cart';
import WhichList from './screens/WhichList';
import Profile from './screens/Profile';
import Shop from './screens/Shop';
import CustomNavigator from './navigator/StackNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 80, height: 80, justifyContent: 'center' }}
      source={require("./assets/images/logo.png")}
    />
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <NavigationContainer>
      {/* <Stack.Navigator >  */}
      {/* <Stack.Screen name="Home" component={Home}   options={{ headerTitleAlign: 'center'}}/> */}
      {/* <Stack.Screen name="About" component={About} options={{ headerlargeTitle:true,headerTitleAlign: 'center' }} /> */}
    {/* </Stack.Navigator> */}
      <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon:({focused,size,color})=>{
          let iconName;
          if(route.name==='Home'){
            iconName=focused ? 'home' :'home-outline';
            size=focused ? 30 : 24;

          }
          else if(route.name==='My Cart'){
            iconName=focused ? 'cart' :'cart-outline';
            size=focused ? 30 : 24;
          
          }
          else if(route.name==='WhichList'){
            iconName=focused ? 'heart' :'heart-outline';
            size=focused ? 30 : 24;
    
          }
          else if(route.name==='Profile'){
            iconName=focused ? 'person' :'person-outline';
            size=focused ? 30 : 24;

          }
          else if(route.name==='All Products'){
            iconName=focused ? 'basket' :'basket-outline';
            size=focused ? 30 : 24;
     
          }
          return <Ionicons name={iconName} size={size} color="#59569D" style={styles.navIcon}/>
        },
        tabBarShowLabel:false,
        tabBarStyle: { backgroundColor: '#fff' ,height:60, borderRadius:20,width:'80%', alignSelf:'center',position:'absolute',bottom:0, left:45,marginBottom:10,},
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#59569D'
        }

 
      })}
 
      

      
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="All Products" component={Shop}  options={{
              //  headerRight: () => (
              //   <Button
              //     onPress={() => alert('This is a button!')}
              //     title="Info"
              //     color="#777"
              //   />
              // ),
        }}/>
        <Tab.Screen name="My Cart" component={Cart} />
        <Tab.Screen name="WhichList" component={WhichList} />
        <Tab.Screen name="Profile" component={Profile} />

      </Tab.Navigator>
    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    width: '100%',
    marginHorizontal: 20,

  },
  // navIcon:{
  //   backgroundColor:'black',
  // }
});
