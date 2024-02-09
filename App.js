import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Logo from './assets/instagram.png';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{ width: 200, height: 60 }} source={Logo} />
        <StatusBar style="auto" />
        <View style={styles.edit}>
          <TouchableOpacity><AntDesign name="hearto" size={35} color="black" /></TouchableOpacity>
          <TouchableOpacity><Feather name="message-circle" size={35} color="black" /></TouchableOpacity>
        </View>

      </View>
      <ScrollView horizontal style={{ flexDirection: "row", gap: 16}}
      contentContainerStyle={{height:100, gap:8}}
      showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://audienciadatv.net/wp-content/uploads/2020/04/julius-rock.jpg"
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://img.ibxk.com.br/2021/03/16/16152428660257.jpg"
          }}
        />
        </TouchableOpacity>
         <TouchableOpacity>
         <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://th.bing.com/th/id/OIP.FIvNZSH3MY5Kf3qb3eX8-QHaFj?rs=1&pid=ImgDetMain"
          }}
        />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://th.bing.com/th/id/R.97ac2c289f74881bcaa494265e9d9ffe?rik=yN0rVtb11YyRIA&riu=http%3a%2f%2frederecord.r7.com%2fwp-content%2fblogs.dir%2f21%2ffiles%2ftodo-mundo-adora-o-drew-veja-fotos-do-queridinho-da-serie%2f1.jpg&ehk=DJZD39pGaRGHhPT%2bdfhBAb%2fr1Fe9R3eFFK0ez66FkJw%3d&risl=&pid=ImgRaw&r=0"
          }}
        />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://th.bing.com/th/id/OIP.PWBFN3FCy2tSApzlxjGOkwHaEK?rs=1&pid=ImgDetMain"
          }}
        />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://th.bing.com/th/id/OIP.jGlfG1iFeD_Nckjhg0ueBwAAAA?rs=1&pid=ImgDetMain"
          }}
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

