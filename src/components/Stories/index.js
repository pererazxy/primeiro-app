import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import foto1 from "../../assets/julios.jpg";
import foto2 from "../../assets/chris.jpg";
import foto3 from "../../assets/amigocris.jpg";
import foto4 from "../../assets/maedocris.jpg";
import foto5 from "../../assets/irmacris.jpg";
import foto6 from "../../assets/irmaodocris.jpg";


export default function Stories() {
  return (
    <ScrollView horizontal style={{ flexDirection: "row", gap: 16 }}
      contentContainerStyle={styles.container }
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity>
        <Image
          style={styles.story}
          source={
            foto1
          }
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.story}
          source={
            foto2
          }
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.story}
          source={
            foto3
          }
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.story}
          source={
            foto4
          }
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.story}
          source={
            foto5
          }
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.story}
          source={
            foto6
          }
        />
      </TouchableOpacity>
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