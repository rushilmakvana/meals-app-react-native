import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CatagoriesScreen from "./screens/CatagoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import Making from "./screens/Making";
import Favorite from "./screens/Favorite";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import FavoriteContextProvider from "./store/context/favorite-context";
// import { store } from "./store/redux/store";
// import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerInactiveTintColor: "white",
        drawerType: "slide",
        drawerStyle: { backgroundColor: "#351401" },
        drawerActiveTintColor: "#e2b497",

        // drawerItemStyle: { justifyContent: "center" },
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
        name="All categories"
        component={CatagoriesScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
        name="Favorites"
        component={Favorite}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        {/* <Provider store={store}> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Category"
              component={DrawerScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meals" component={MealsOverview} />
            <Stack.Screen name="Making" component={Making} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </Provider> */}
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
