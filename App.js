
import { StyleSheet,  View} from 'react-native';
import PessoaProfile from "./src/assets/julios.jpg";
import InfoProfile from "./src/components/InfoProfile";
import MyPosts from './src/components/MyPosts';

export default function App() {
  return (
    <View style={styles.container}>
      <InfoProfile
      image={PessoaProfile}
      publi={2}
      followers={456.045}
      following={4}
      descricao={"Julios"}
      />
      <MyPosts/>
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
