import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  name: {
    fontFamily: "Kanit-Regular",
    fontSize: 18,
    paddingVertical: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: "Kanit-Regular",
    paddingVertical: 10,
  },
  price: {
    fontSize: 18,
    fontFamily: "Kanit-Bold",
    paddingVertical: 20,
  },
  weight: {
    fontSize: 12,
    fontFamily: "Kanit-Regular",
  },
});
