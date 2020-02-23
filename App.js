import React from 'react';
import Matches from './components/Matches'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ArticleDetail from './components/ArticleDetail';
import HomeScreen from './components/Home'

const Tab = createBottomTabNavigator()
const ArticleStack = createStackNavigator()

export default function App() {
      return (
        <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
          <Tab.Screen name="Home">
            {() => (
              <ArticleStack.Navigator>
                <ArticleStack.Screen name="Home" component={HomeScreen} />
                <ArticleStack.Screen name="Story" component={ArticleDetail} />
              </ArticleStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Matches" component={Matches} />
          </Tab.Navigator>
        </NavigationContainer>
        </PaperProvider>
      )
    }
