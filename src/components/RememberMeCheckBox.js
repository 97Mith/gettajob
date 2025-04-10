import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Expo tem suporte automático

export default function RememberMeCheck() {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      <FontAwesome
        name={checked ? "check-square" : "square-o"}
        size={20}
        color="#00f"
      />
      <Text style={{ color: "#fff", marginLeft: 8 }}>Lembrar de mim</Text>
    </TouchableOpacity>
  );
}
