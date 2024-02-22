import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import foto1 from "./src/assets/julios.jpg"
import foto2 from "./src/assets/chris.jpg"
import foto3 from "./src/assets/amigocris.jpg"
import foto4 from "./src/assets/maedocris.jpg"
import foto5 from "./src/assets/irmacris.jpg"
import foto6 from "./src/assets/irmaodocris.jpg"
import Header from "./src/components/Header"

export default function App() {
  return (
    <View style={styles.container}>
      
      <Header/>
      <ScrollView horizontal style={{ flexDirection: "row", gap: 16}}
      contentContainerStyle={{height:100, gap:8}}
      showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={
            foto1
          }
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={
            foto2
          }
        />
        </TouchableOpacity>
         <TouchableOpacity>
         <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={
            foto3
          }
        />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={
            foto4
          }
        />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={
            foto5
          }
        />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={
            foto6
          }
        />
         </TouchableOpacity>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 35,

  },
  edit: {
    flexDirection: 'row',
    padding: 10,
    gap: 5,
  }
});
