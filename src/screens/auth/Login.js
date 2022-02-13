import React from "react";
import { View, StyleSheet } from "react-native";
import { AppbgImage, AppButton, AppInput } from "../../components";
import icons from "../../constants/icons";

export const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.img_bg}>
        <AppbgImage logo={icons.admin_logo} />
      </View>
      <View style={styles.bottom_view}>
        <AppInput placeholder="UserName" />
        <AppInput placeholder="Password" />
        <AppButton
          title={"Login"}
          otherStyles={{ marginTop: 70 }}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bottom_view: {
    zIndex: 10,
    padding: 20,
    height: "50%",
    justifyContent: "flex-end",
  },
  img_bg: {
    height: "50%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
