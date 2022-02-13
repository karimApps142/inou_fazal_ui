import React from "react";
import { View, Text } from "react-native";
import { AppIcon } from "..";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { COLORS, FONTS } from "../../constants/theme";
export const AppSpotName = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        marginTop: 20,
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
      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        <View
          style={{
            height: 20,
            width: 70,
            borderRadius: 5,
            backgroundColor: COLORS.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>1</Text>
        </View>
        <Text style={{ color: COLORS.primary, ...FONTS.h3, marginTop: 5 }}>
          Jan-25-2022
        </Text>
      </View>
      <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>Spot Name</Text>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <AppIcon
          icon={icons.ic_report_fill}
          size={18}
          color={COLORS.primary}
          otherStyles={{}}
        />
        <Text style={{ marginTop: 5 }}>12:00 pm</Text>
      </View>
    </View>
  );
};
