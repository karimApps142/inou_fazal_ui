import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AppButton, AppInput, AppPicker, AppbgImage } from "../../components";
import icons from "../../constants/icons";
import pickerData from "../../constants/pickerData";

export const EnrollGuards = ({ navigation }) => {
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
        <View style={styles.inputContiner}>
          <AppInput otherStyles={{ flex: 1 }} placeholder={"First Name"} />
          <AppInput
            otherStyles={{ flex: 1, marginLeft: 10 }}
            placeholder={"Last Name"}
          />
        </View>
        <AppInput placeholder={"ID No."} />
        <AppButton title={"Enroll Now"} otherStyles={{ marginTop: 50 }} />
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
    zIndex: 10,
    height: "55%",
    justifyContent: "flex-end",
    padding: 20,
    marginTop: 15,
  },
  inputContiner: {
    flexDirection: "row",
  },
});
