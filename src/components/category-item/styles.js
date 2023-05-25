import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 17,
    fontFamily: "Kanit-Regular",
    color: COLORS.text,
  },
});
