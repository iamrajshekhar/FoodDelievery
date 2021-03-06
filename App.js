import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './screens/navigation/tabs';
import OrderDetails from './screens/OrderDetails';
import TrackOrder from './screens/TrackOrder';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
