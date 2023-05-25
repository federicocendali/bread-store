import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 120,
  },
  containerTouchable: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontFamily: "Kanit-Regular",
    textAlign: "center",
  },
  price: {
    fontSize: 15,
    fontFamily: "Kanit-Bold",
    paddingBottom: 5,
    textAlign: "center",
  },
  weight: {
    fontSize: 12,
    fontFamily: "Kanit-Regular",
    textAlign: "center",
  },
});
