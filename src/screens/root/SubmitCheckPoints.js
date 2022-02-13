import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { AppbgImage, AppButton, AppIcon, AppPicker } from "../../components";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";
import pickerData from "../../constants/pickerData";
export const SubmitCheckPoints = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg_img}>
        <AppbgImage
          ic_guard={icons.guard_avatar}
          icon={icons.back_arrow}
          onPress={() => navigation.navigate("SpotNameCheckPoints")}
        />
      </View>

      <View style={styles.bottom_view}>
        <ScrollView>
          <View style={styles.icons_container}>
            <Image source={icons.ic_emergency_bell} style={styles.icons} />
            <Image source={icons.ic_emergency_call} style={styles.icons} />
          </View>

          <View style={styles.cards}>
            <Text style={{ marginTop: 10 }}>Type of report</Text>
            <AppPicker
              items={pickerData.vehicleMakers}
              onSelect={(value) => value}
              otherStyles={{ marginTop: 30 }}
            />
            <View style={styles.lorem_Box}>
              <Text style={styles.lorem_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio.
              </Text>
            </View>
            <View style={styles.attack_image_box}>
              <AppIcon
                icon={icons.attachment}
                size={20}
                color={COLORS.primary}
              />
              <Text style={styles.attack_text}>
                Atack image/Video{"\n"}(Optional)
              </Text>
            </View>
            <AppButton title={"Submit"} otherStyles={{ marginTop: 30 }} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bg_img: {
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  round_text: {
    position: "absolute",
    right: 15,
    bottom: 0,
    textAlign: "center",
    color: COLORS.primary,
  },
  bottom_view: {
    height: "65%",
    padding: 20,
  },
  icons_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10,
  },
  icons: {
    height: 80,
    width: 80,
  },
  cards: {
    flex: 1,
    alignItems: "center",
  },
  lorem_Box: {
    height: 140,
    width: "100%",
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    borderColor: COLORS.gray,
    borderWidth: 1,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  lorem_text: {
    color: COLORS.gray,
  },
  attack_image_box: {
    width: 150,
    height: 90,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    borderColor: COLORS.gray,
    borderWidth: 1,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  attack_text: {
    color: COLORS.gray,
    textAlign: "center",
  },
});
