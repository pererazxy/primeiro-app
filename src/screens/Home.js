import { ScrollView, StyleSheet,  View} from "react-native";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Foto1 from "../assets/julios.jpg";
import Foto2 from "../assets/chris.jpg";
import Post1 from "../assets/post.jpg"

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Stories/>
      <Post
     profileImage = {Foto1}
      postImage = {Post1}
      profileName = "Julios"
      description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum venenatis finibus. Suspendisse a velit id est finibus scelerisque. Sed lectus felis, scelerisque eget tortor in, accumsan condimentum justo. Vivamus et lectus quis dolor tincidunt aliquam. In pulvinar tristique quam et pharetra. Duis dictum metus felis, nec tincidunt sem vestibulum et. Fusce congue nisi id est consectetur, eu consectetur elit sollicitudin."

    />

    <Post
    profileImage = {Foto2}
    postImage = {Post1}
    profileName = "Chris"
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum venenatis finibus. Suspendisse a velit id est finibus scelerisque. Sed lectus felis, scelerisque eget tortor in, accumsan condimentum justo. Vivamus et lectus quis dolor tincidunt aliquam. In pulvinar tristique quam et pharetra. Duis dictum metus felis, nec tincidunt sem vestibulum et. Fusce congue nisi id est consectetur, eu consectetur elit sollicitudin."
    />
    </ScrollView>
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