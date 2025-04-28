import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Tab = createBottomTabNavigator();

// ✅ Extracted animated icon component to safely use hooks
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
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(focused ? 1.3 : 1, { duration: 300 }),
        },
      ],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Ionicons name={name} size={size} color={color} />
    </Animated.View>
  );
}

export default function App() {
  // Check if user prefers Light over Dark Theme
  const isLightTheme = useColorScheme() === "light";

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />

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
          {/* 🏠 Home Tab */}
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

          {/* 🔍 Search Tab */}
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


