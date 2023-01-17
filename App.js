import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,Button } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons,Feather } from '@expo/vector-icons';

import Home from './screens/Home';
import Product from './screens/ProductSingle';
import Cart from './screens/Cart';
import WhishList from './screens/WhishList';
import Profile from './screens/Profile';
import Shop from './screens/Shop';
import About from './screens/About';
import ProductSingle from './screens/ProductSingle';
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

const HomeStack=()=>{
  return (
    <Stack.Navigator initialRouteName={Home}  screenOptions={{  
         headerTintColor: '#59569D', 
         headerTitleAlign: 'center',
    }}>  
    <Stack.Screen name="Home2" component={Home} options={{ headerShown:false }}  /> 
     <Stack.Screen name="About" navigator={navigator}  component={About} />
     <Stack.Screen name="productSingle" navigator={navigator}  options={{ title: 'Roller Rabit' }}  component={ProductSingle} />
</Stack.Navigator> 
  )

}
const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <NavigationContainer>

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
          else if(route.name==='Whish List'){
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
        headerShown:false,
        tabBarStyle: { backgroundColor: '#fff' ,height:60, borderRadius:20,width:'80%', alignSelf:'center',position:'absolute',bottom:0, left:45,marginBottom:10,},
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#59569D'
        }

 
      })}
 
      

      
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="All Products" component={Shop}  options={{
              //  headerRight: () => (
              //   <Button
              //     onPress={() => alert('This is a button!')}
              //     title="Info"
              //     color="#777"
              //   />
              // ),
        }}/>
        <Tab.Screen name="My Cart"  options={{ tabBarBadge:3, tabBarBadgeStyle:{backgroundColor:'#F25292'} }} component={Cart} />
        <Tab.Screen name="Whish List" component={WhishList} />
        <Tab.Screen name="Profile" component={Profile} />
        {/* <Tab.Screen name="About" component={HomeStack} /> */}

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
