import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AppRoundCard, AppbgImage, AppIcon, AppButton } from "../../components";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";
export const RoundsCheckPoints = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg_img}>
        <AppbgImage ic_guard={icons.guard_avatar} />
        <Text style={styles.round_text}>Total Rounds {"\n"} 1</Text>
      </View>
      <View style={styles.bottom_view}>
        <View style={styles.icons_container}>
          <Image source={icons.ic_emergency_bell} style={styles.icons} />
          <Image source={icons.ic_emergency_call} style={styles.icons} />
        </View>

        <View style={styles.cards}>
          <AppRoundCard />
        </View>

        <AppButton
          title={"Start Round"}
          onPress={() => navigation.navigate("SpotNameCheckPoints")}
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
  },
});
