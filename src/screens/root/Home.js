import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { AppbgImage, AppButton } from "../../components";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";
export const Home = ({ navigation }) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.img_bg}>
        <AppbgImage logo={icons.admin_logo} />
      </View>

      <View style={styles.bottom_view}>
        <AppButton
          title={"Create Spot"}
          onPress={() => navigation.navigate("CreateSpot")}
        />
        <AppButton
          onPress={() => navigation.navigate("EnrollGuards")}
          title={"Enroll Guards"}
          textStyles={{ color: COLORS.primary }}
          otherStyles={{ backgroundColor: "#30FFD3" }}
        />
        <AppButton
          title={"Company Guards"}
          onPress={() => navigation.navigate("CompanyGuards")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
  },
  bottom_view: {
    zIndex: 10,
    padding: 20,
    height: "40%",
    justifyContent: "flex-end",
  },
  img_bg: {
    height: "60%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
