import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  AppbgImage,
  AppIcon,
  AppButton,
  AppGuardCard,
  AppSpotName,
} from "../../components";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";
export const SpotNameCheckPoints = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg_img}>
        <AppbgImage
          ic_guard={icons.guard_avatar}
          icon={icons.back_arrow}
          onPress={() => navigation.navigate("RoundsCheckPoints")}
        />
        <Text style={styles.round_text}>Scanned Spots{"\n"}4</Text>
      </View>
      <View style={styles.bottom_view}>
        <View style={styles.cards}>
          <AppSpotName />
        </View>

        <AppButton
          title={"Finish Round"}
          onPress={() => navigation.navigate("SubmitCheckPoints")}
        />
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
  cards: {
    flex: 1,
  },
});
