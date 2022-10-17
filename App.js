import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreens from './screens/CategoriesScreens';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavotitesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './screens/store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'teal' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: 'peachpuff' },
        drawerContentStyle: { backgroundColor: 'teal' },
        drawerInactiveTintColor: 'white',
        drawerActiveBackgroundColor: 'darkseagreen',
        drawerActiveTintColor: 'darkcyan',
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreens}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavotitesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: 'teal' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: 'peachpuff' },
            }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigation}
              options={{
                //title: 'All Categories',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealsDetails'
              component={MealDetailScreen}
              options={{ title: 'About the Meal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
