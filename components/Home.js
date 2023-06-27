import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Alert,
  Share,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import * as Speech from "expo-speech";
import * as Clipboard from "expo-clipboard";
import { Feather, Entypo, AntDesign } from "@expo/vector-icons";
import randomQuotes from "../assets/quotes/random.json";

function Home() {
  const navigation = useNavigation();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const randomQuote =
      randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    setQuote(randomQuote["quote"]);
    setAuthor(randomQuote["author"]);
  }, []);

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

  const speak = () => {
    Speech.speak(quote, {
      _voiceIndex: 2,
    });
  };

  const shareContent = async () => {
    try {
      const content = `"${quote}" - ${author}`;
      await Share.share({
        message: content,
      });
    } catch (error) {
      alert("Failed to share content.");
    }
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(`"${quote}" - ${author}`);
    Alert.alert("Copied to clipboard");
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
              <Text style={styles.quoteText}>"{quote}"</Text>
              <Text style={[styles.quoteMark, styles.quoteMarkRight]}>❞</Text>
            </View>
            <Text style={styles.author}>- {author}</Text>

            <View style={styles.quotesBtn}>
              <TouchableOpacity onPress={speak} style={styles.button}>
                <Entypo name="controller-play" size={22} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={copyToClipboard} style={styles.button}>
                <Feather name="copy" size={22} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={shareContent} style={styles.button}>
                <Entypo name="share" size={22} color="white" />
              </TouchableOpacity>
            </View>
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
  button: {
    padding: 0,
    borderRadius: 5,
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.2)",
    elevation: 20,
  },
  quotesBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
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
    lineHeight: 28,
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
