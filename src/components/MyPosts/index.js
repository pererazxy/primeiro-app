import { Touchable, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Post from '../../assets/post.jpg'


export default function MyPosts() {
    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="grid" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="account-outline" size={35} color="#aaa" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="movie-open-play-outline" size={35} color="#aaa" />
                </TouchableOpacity>
            </View>
            <View style={styles.postsList}>
                <Image source={Post} style={styles.post} />
                <Image source={Post} style={styles.post} />
                <Image source={Post} style={styles.post} />
                <Image source={Post} style={styles.post} />
                <Image source={Post} style={styles.post} />
                <Image source={Post} style={styles.post} />
                <Image source={Post} style={styles.post} />
                <Image source={Post} style={styles.post} />
                <Image source={Post} style={styles.post} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        marginTop: 16,
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    postsList: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
        flexWrap: "wrap",
    },
    post: {
        width: "33.3%",
        borderColor: "white",
        borderWidth: 1,
        height: 120,
    },
});

