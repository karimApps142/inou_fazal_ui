import React from "react";
import { View, StyleSheet } from "react-native";
import { AppbgImage, AppButton, AppInput } from "../../components";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";

export const LoginCheckPoints = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.img_bg}>
        <AppbgImage logo={icons.admin_logo} />
      </View>
      <View style={styles.bottom_view}>
        <AppInput placeholder="User ID" />
        <AppButton
          title={"Login"}
          otherStyles={{ marginTop: 15 }}
          onPress={() => navigation.navigate("RoundsCheckPoints")}
        />
        <AppButton
          title={"Scan NFC Tag"}
          otherStyles={{ marginTop: 70, backgroundColor: "#42FFD2" }}
          textStyles={{ color: COLORS.primary }}
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
