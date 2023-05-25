import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 10,
    marginVertical: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 16,
    fontFamily: "Kanit-Regular",
    color: COLORS.text,
    marginBottom: 5,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  quantity: {
    fontSize: 14,
    fontFamily: "Kanit-Regular",
    color: COLORS.text,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    fontFamily: "Kanit-Bold",
    color: COLORS.text,
    marginBottom: 5,
  },
});
