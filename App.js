import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, Feather } from '@expo/vector-icons';

import Home from './screens/Home';
import Product from './screens/ProductSingle';
import Cart from './screens/Cart';
import WhishList from './screens/WhishList';
import Profile from './screens/Profile';
import Shop from './screens/Shop';
import About from './screens/About';
import ProductSingle from './screens/ProductSingle';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Thankyou from './screens/ThankYou';
import OrderDetails from './screens/OrderDetails';
import Orders from './screens/Orders';
import EditProfile from './screens/EditProfile';
import ShippingAddress from './screens/ShippingAddress';
import Notifications from './screens/Notifications';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from 'react-query';
import MyStore from './component/feature/MyStore';
import { Provider, useSelector } from 'react-redux';
import { CartContext, CartProvider } from './Global/CartContext';
import { useContext } from 'react';



const Stack = createNativeStackNavigator();

const HomeStack = () => {

  return (
    <Stack.Navigator initialRouteName={Home} screenOptions={{
      headerTintColor: '#59569D',
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen name="Home2" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="About" navigator={navigator} component={About} />
      <Stack.Screen name="productSingle" navigator={navigator} options={{ title: 'Product Single' }} component={ProductSingle} />
      <Stack.Screen name="Checkout" navigator={navigator} options={{ title: 'Shipping' }} component={Checkout} />
      <Stack.Screen name="Payment" navigator={navigator} options={{ title: 'Payment' }} component={Payment} />
      <Stack.Screen name="Thankyou" navigator={navigator} options={{ title: 'Thank you' }} component={Thankyou} />
      <Stack.Screen name="OrderDetails" navigator={navigator} options={{ title: 'Order Details' }} component={OrderDetails} />
      <Stack.Screen name="Orders" navigator={navigator} options={{ title: 'My Orders' }} component={Orders} />
      <Stack.Screen name="EditProfile" navigator={navigator} options={{ title: 'Edit Profile' }} component={EditProfile} />
      <Stack.Screen name="Notifications" navigator={navigator} options={{ title: 'Notifications' }} component={Notifications} />
      <Stack.Screen name="ShippingAddress" navigator={navigator} options={{ title: 'My Shipping Address' }} component={ShippingAddress} />
    </Stack.Navigator>
  )

}

const Tab = createBottomTabNavigator();

export default function App() {
  const queryClient = new QueryClient()



  return (

    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Provider store={MyStore}>
          <CartProvider>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                  let iconName;
                  if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                    size = focused ? 30 : 24;

                  }
                  else if (route.name === 'My Cart') {
                    iconName = focused ? 'cart' : 'cart-outline';
                    size = focused ? 30 : 24;

                  }
                  else if (route.name === 'Whish List') {
                    iconName = focused ? 'heart' : 'heart-outline';
                    size = focused ? 30 : 24;

                  }
                  else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                    size = focused ? 30 : 24;

                  }
                  else if (route.name === 'All Products') {
                    iconName = focused ? 'basket' : 'basket-outline';
                    size = focused ? 30 : 24;

                  }
                  return <Ionicons name={iconName} size={size} color="#59569D" style={styles.navIcon} />
                },
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: { backgroundColor: '#fff', height: 60, borderRadius: 20, width: '80%', alignSelf: 'center', position: 'absolute', bottom: 0, left: 45, marginBottom: 10, },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  color: '#59569D'
                }


              })}




            >
              <Tab.Screen name="Home" component={HomeStack} />
              <Tab.Screen name="All Products" navigator={navigator} component={Shop} options={{
                tabBarOnPress: ({ navigation, route }) => {
                  const parent = navigation.dangerouslyGetParent();
                  if (route.name === parent.state.routes[parent.state.index].name) {
                    // If the current route is the last route, reset it
                    parent.dispatch(state => {
                      parent.reset({
                        index: 0,
                        routes: [state.routes[0]],
                      });
                    });
                  } else {
                    // If the current route is not the last route, navigate to it
                    navigation.navigate(route.name);
                  }
                },


              }} />
              <Tab.Screen name="My Cart" options={{ tabBarBadge: 3, tabBarBadgeStyle: { backgroundColor: '#F25292' } }} component={Cart} />
              <Tab.Screen name="Whish List" navigator={navigator} component={WhishList} />
              <Tab.Screen name="Profile" navigator={navigator} component={Profile} />
              {/* <Tab.Screen name="About" component={HomeStack} /> */}

            </Tab.Navigator>
          </CartProvider>
        </Provider>
      </NavigationContainer>
    </QueryClientProvider>



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
