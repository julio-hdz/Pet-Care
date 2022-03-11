import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <AntDesign name={"left"} size={24} color="#52575D" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <AntDesign name={"edit"} size={24} color="#52575D" />
          </TouchableOpacity>
        </View>

        <View style={styles.headerProfile}>
          <View style={styles.profileImage}>
            <Image
              source={require("./img/media1.jpg")}
              style={styles.imageProfile}
            ></Image>
          </View>
          <View style={styles.dm}>
            <TouchableOpacity>
              <AntDesign name={"message1"} size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.add}>
            <TouchableOpacity>
              <AntDesign name={"plus"} size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            Carla
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
            "Descripcion corta o frase"
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>4</Text>
            <Text style={[styles.text, styles.subText]}>RATING</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>12</Text>
            <Text style={[styles.text, styles.subText]}>CONTRATACIONES</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media1.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media2.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./img/media3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
          </ScrollView>
        </View>
        <Text style={styles.title}>PUBLICACION</Text>
        <View style={{ alignItems: "center" }}>
          <View style={styles.recentItem}>
            <View>
              <Text style={styles.publicartionCard}>CARD PUBLICACION </Text>
            </View>
          </View>
          <Text style={styles.title}>REVIEWS</Text>
          <View style={styles.recentItem}>
            <View>
              <Text style={styles.review}> REVIEW 1 </Text>
              <Text style={styles.review}> REVIEW 3 </Text>
              <Text style={styles.review}> REVIEW 4 </Text>
              <Text style={styles.review}> REVIEW 5 </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  headerProfile: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginHorizontal: 16,
  },
  title: {
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 24,
    marginHorizontal: 16,
    textAlign: "center",
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    marginTop: 10,
    width: 200,
    height: 200,
    borderRadius: 300,
    overflow: "hidden",
  },
  imageProfile: {
    flex: 1,
    width: 200,
    height: 200,
  },
  image: {
    flex: 1,
    width: 200,
    height: 200,
    alignSelf: "center",
    alignItems: "center",
  },
  dm: {
    backgroundColor: "#00d2c6",
    position: "absolute",
    bottom: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  add: {
    backgroundColor: "#00d2c6",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 186,
    height: 250,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },

  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  review: {
    backgroundColor: "#00d2c6",
    height: 100,
    marginTop: 5,
    borderRadius: 12,
    overflow: "hidden",
    textAlign: "center",
    alignSelf: "center",
    width: 395,
    color: "#41444B",
    fontWeight: "300",
  },

  publicartionCard: {
    backgroundColor: "#00d2c6",
    height: 100,
    width: 395,
    borderRadius: 12,
    overflow: "hidden",
    textAlign: "center",
    alignSelf: "center",
    color: "#41444B",
    fontWeight: "300",
  },
});
