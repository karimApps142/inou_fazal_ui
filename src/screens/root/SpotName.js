import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AppRoundCard, AppbgImage, AppSpotName } from "../../components";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";
export const SpotName = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg_img}>
        <AppbgImage
          icon={icons.back_arrow}
          ic_guard={icons.guard_avatar}
          onPress={() => navigation.navigate("Rounds")}
        />
      </View>
      <View style={styles.bottom_view}>
        <AppSpotName />
        <AppSpotName />
        <AppSpotName />
        <AppSpotName />
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
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom_view: {
    height: "60%",
    padding: 20,
  },
});
