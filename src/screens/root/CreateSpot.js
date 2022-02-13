import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import {
  AppbgImage,
  AppButton,
  AppIcon,
  AppInput,
  AppPicker,
} from "../../components";
import icons from "../../constants/icons";
import pickerData from "../../constants/pickerData";
export const CreateSpot = ({ navigation }) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.bg_img}>
        <AppbgImage
          icon={icons.back_arrow}
          logo={icons.admin_logo}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <ScrollView>
        <View style={styles.bottom_view}>
          <Image source={icons.ic_nfc_tag} style={styles.nfc_icon} />
          <AppPicker
            otherStyles={{ marginTop: 50 }}
            items={pickerData.vehicleMakers}
            onSelect={(value) => value}
          />
          <AppInput placeholder={"SpotName"} />
          <AppButton title={"Create Spot"} otherStyles={{ marginTop: 50 }} />
        </View>
      </ScrollView>
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
    padding: 20,
    marginTop: 15,
    alignItems: "center",
    height: "55%",
  },
  nfc_icon: {
    height: 70,
    width: 70,
  },
});
