import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS } from "../../constants";
import { Categories, Product, Products } from "../../screens";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: "Kanit-Bold",
        },
      }}>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: route.params.color,
          },
        })}
      />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
