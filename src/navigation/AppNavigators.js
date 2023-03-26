import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardScreen } from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigators = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => (routeNameRef.current = navigationRef.current.getCurrentRoute().name)}
        onStateChange={async () => {
          // const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;
          // const currentRouteParams = navigationRef.current.getCurrentRoute().params;
          // Save the current route name for later comparision
          routeNameRef.current = currentRouteName;
        }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigators;
