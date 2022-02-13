import React from "react";
import { View, Text, StyleSheet } from "react-native";
import pickerData from "../../constants/pickerData";
import { AppGuardCard, AppPicker, AppbgImage } from "../../components";
import icons from "../../constants/icons";
export const CompanyGurads = ({ navigation }) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.bg_img}>
        <AppbgImage
          icon={icons.back_arrow}
          logo={icons.admin_logo}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={styles.bottom_view}>
        <AppPicker
          items={pickerData.vehicleMakers}
          onSelect={(value) => value}
        />
        <AppGuardCard onPress={() => navigation.navigate("Rounds")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
  },
  bg_img: {
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom_view: {
    marginTop: 40,
    height: "55%",
    zIndex: 10,
    padding: 20,
  },
});
