import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity,} from "react-native";
import Logo from "../../assets/instagram.png";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={{ width: 200, height: 60 }} source={Logo} />
      <StatusBar style="auto" />
      <View style={styles.edit}>
        <TouchableOpacity><AntDesign name="hearto" size={35} color="black" /></TouchableOpacity>
        <TouchableOpacity><Feather name="message-circle" size={35} color="black" /></TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 35,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    flexDirection: 'row',
    padding: 10,
    gap: 5,
  }
});