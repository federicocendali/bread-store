import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  content: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontFamily: "Kanit-Bold",
    fontSize: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "Kanit-Regular",
    paddingVertical: 8,
  },
  input: {
    height: 45,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Kanit-Regular",
    marginBottom: 5,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  link: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    textAlign: "center",
  },
  linkText: {
    fontFamily: "Kanit-Regular",
    fontSize: 14,
    borderBottomColor: COLORS.tertiary,
    borderBottomWidth: 1,
    color: COLORS.tertiary,
    textAlign: "center",
  },
  submitContainer: {
    paddingVertical: 5,
  },
});
