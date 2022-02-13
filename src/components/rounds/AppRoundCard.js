import React from "react";
import { View, Text } from "react-native";
import { AppButton } from "..";
import { COLORS, FONTS } from "../../constants/theme";
export const AppRoundCard = ({ onPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        marginTop: 15,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}
    >
      <Text style={{ color: COLORS.black, ...FONTS.h3 }}>Rounds No 1</Text>
      <AppButton
        onPress={onPress}
        otherStyles={{ height: 30, width: 100, marginTop: 0 }}
        textStyles={{ fontSize: 10 }}
        title={"Completed"}
      />
    </View>
  );
};
