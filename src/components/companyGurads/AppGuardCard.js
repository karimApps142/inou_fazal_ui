import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import icons from "../../constants/icons";
import { COLORS, FONTS } from "../../constants/theme";
export const AppGuardCard = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "100%",
        padding: 20,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
      }}
    >
      <Image
        source={icons.guard_avatar}
        style={{
          height: 80,
          width: 80,
        }}
      />
      <View style={{ flexDirection: "column", flex: 1, marginLeft: 20 }}>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 18,
          }}
        >
          Name
        </Text>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 18,
          }}
        >
          Property Name
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            fontSize: 15,
            marginTop: 5,
          }}
        >
          Guard Id
        </Text>
      </View>
    </Pressable>
  );
};
