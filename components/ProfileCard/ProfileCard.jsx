import { Text, View, Image, Linking } from "react-native";
import { s } from "./ProfileCard.style";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function ProfilCard() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.texts}>
          <Text style={s.name}>Dewabrata</Text>
          <Text>Saya adalah trainer React Native untuk di JuaraCoding</Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity
          style={s.socialBtn}
          onPress={() => {
            Linking.openURL("https://detik.com");
          }}
        >
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
