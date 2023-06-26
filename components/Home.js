import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    OleoScript: require("../assets/fonts/Oleo_Script/OleoScript-Bold.ttf"),
    OleoScriptRegular: require("../assets/fonts/Oleo_Script/OleoScript-Regular.ttf"),
    Inter: require("../assets/fonts/Inter/static/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleExplorePress = () => {
    navigation.navigate("Categories");
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#fff", "#fff"]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.logo}>INSPIREME</Text>
            <Text
              style={{
                fontFamily: "OleoScript",
                fontSize: 50,
                lineHeight: 50,
                color: "#252424",
                paddingTop: 20,
              }}
            >
              Embrace Change
            </Text>
          </View>

          <View style={styles.quoteCont}>
            <View style={styles.quote}>
              <Text style={[styles.quoteMark, styles.quoteMarkLeft]}>❝</Text>
              <Text style={styles.quoteText}>
                "All symbols are unicode character, not image nor combined
                characters. But you can also combine them by yourself them by
                yourself yo"
              </Text>
              <Text style={[styles.quoteMark, styles.quoteMarkRight]}>❞</Text>
            </View>
            <Text style={styles.author}>- Winston Churchill</Text>
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleExplorePress}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Explore</Text>
              <LinearGradient
                colors={["#414141", "#000000"]}
                style={styles.iconContainer}
              >
                <View>
                  <AntDesign name="arrowright" size={20} color="white" />
                </View>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    borderRadius: 100,
    marginTop: 30,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    shadowColor: "#ccc",
    elevation: 5,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#414141",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  iconContainer: {
    borderRadius: 50,
    padding: 8,
    paddingHorizontal: 9,
  },
  quoteCont: {
    backgroundColor: "#252424",
    width: "100%",
    shadowColor: "#ccc",
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    // borderRadius: 20,
    paddingBottom: 30,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  quote: {
    flexDirection: "row",
    paddingVertical: 50,
    alignItems: "center",
    padding: 30,
    paddingBottom: 20,
  },
  quoteMark: {
    fontSize: 60,
    fontWeight: "bold",
    position: "absolute",
    color: "rgba(255,255,255,0.1)",
    zIndex: -1,
  },
  quoteMarkLeft: {
    top: 14,
    left: 10,
  },
  quoteMarkRight: {
    bottom: -23,
    right: 10,
  },
  quoteText: {
    flex: 1,
    fontSize: 25,
    lineHeight: 24,
    fontFamily: "OleoScriptRegular",
    color: "#fff",
  },
  author: {
    flex: 1,
    fontSize: 12,
    lineHeight: 24,
    fontFamily: "Inter",
    // color: "rgb(191, 191 ,217)",
    color: "rgba(255,255,255,0.5)",
    // color: "#E0E0FB",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    width: "60%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
  },
  gradient: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
  },
  logo: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 20,
    color: "rgb(193, 132, 207)",
    width: "100%",
  },
});

export default Home;
