import { StyleSheet, StatusBar } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  footerContainer: {
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.white,
    borderTopWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: COLORS.gray,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonConfirm: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonConfirmText: {
    color: COLORS.text,
    fontFamily: "Kanit-Regular",
    fontSize: 14,
  },
  totalContainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalText: {
    color: COLORS.text,
    fontFamily: "Kanit-Regular",
    fontSize: 14,
  },
  totalPrice: {
    color: COLORS.text,
    fontFamily: "Kanit-Bold",
    fontSize: 15,
  },
});
