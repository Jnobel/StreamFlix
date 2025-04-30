<<<<<<< HEAD
import { useState } from "react";
import { SafeAreaView, Switch, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
=======
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
<<<<<<< HEAD
import { MyLightTheme, MyDarkTheme } from "./src/theme/themes";
import { Pressable } from "react-native";


const Tab = createBottomTabNavigator();

=======

const Tab = createBottomTabNavigator();

// ✅ Extracted animated icon component to safely use hooks
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
function AnimatedTabIcon({
  focused,
  name,
  size,
  color,
}: {
  focused: boolean;
  name: string;
  size: number;
  color: string;
}) {
<<<<<<< HEAD
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(focused ? 1.3 : 1, { duration: 300 }) }],
  }));
=======
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(focused ? 1.3 : 1, { duration: 300 }),
        },
      ],
    };
  });
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033

  return (
    <Animated.View style={animatedStyle}>
      <Ionicons name={name} size={size} color={color} />
    </Animated.View>
  );
}

export default function App() {
<<<<<<< HEAD
  const [isLightTheme, setIsLightTheme] = useState(true); // Default to light

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  return (
    <NavigationContainer theme={isLightTheme ? MyLightTheme : MyDarkTheme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: isLightTheme ? "#fff" : "#000" }}>
        <StatusBar style={isLightTheme ? "dark" : "light"} />

        {/* 🔥 Add Theme Switch Toggle */}
        <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
  <Pressable onPress={() => setIsLightTheme(prev => !prev)}>
    <Ionicons
      name={isLightTheme ? "moon" : "sunny"}
      size={28}
      color={isLightTheme ? "#000" : "#fff"}
    />
  </Pressable>
</View>
=======
  // Check if user prefers Light over Dark Theme
  const isLightTheme = useColorScheme() === "light";

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033

        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "turquoise",
            tabBarStyle: {
              height: "7%",
              backgroundColor: isLightTheme ? "#fff" : "#000",
              position: "absolute",
              borderTopWidth: 0,
            },
          }}
        >
<<<<<<< HEAD
=======
          {/* 🏠 Home Tab */}
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <AnimatedTabIcon
                  focused={focused}
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />

<<<<<<< HEAD
=======
          {/* 🔍 Search Tab */}
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <AnimatedTabIcon
                  focused={focused}
                  name={focused ? "search" : "search-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}


