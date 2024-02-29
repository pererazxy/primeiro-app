import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import foto1 from "../../assets/julios.jpg";
import foto2 from "../../assets/chris.jpg";
import foto3 from "../../assets/amigocris.jpg";
import foto4 from "../../assets/maedocris.jpg";
import foto5 from "../../assets/irmacris.jpg";
import foto6 from "../../assets/irmaodocris.jpg";
import Story from "../story";


export default function Stories() {
  return (
    <ScrollView horizontal style={{ flexDirection: "row", gap: 16 }}
      contentContainerStyle={styles.container }
      showsHorizontalScrollIndicator={false}>
      <Story image={foto1}/>
      <Story image={foto2}/>
      <Story image={foto3}/>
      <Story image={foto4}/>
      <Story image={foto5}/>
      <Story image={foto6}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
      height: 100,
},
  story: { width:100, height: 100, borderRadius: 50},
})