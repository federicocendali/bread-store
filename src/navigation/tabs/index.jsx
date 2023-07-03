import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

import { COLORS } from "../../constants";
import CartNavigator from "../cart";
import OrdersNavigator from "../orders";
import ShopNavigator from "../shop";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  const cart = useSelector((state) => state.cart.data);

  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "Kanit-Regular",
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "grid" : "grid-outline"} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "clipboard" : "clipboard-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "cart" : "cart-outline"} size={size} color={color} />
          ),
          tabBarBadge: cart.length,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.secondary,
            color: COLORS.text,
            fontFamily: "Kanit-Regular",
            fontSize: 11,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
