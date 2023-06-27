import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Button,
  Share,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import { Feather, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Speech from "expo-speech";
import * as Clipboard from "expo-clipboard";
import motivationQuotes from "../assets/quotes/motivation.json";
import aloneQuotes from "../assets/quotes/alone.json";
import angerQuotes from "../assets/quotes/anger.json";
import attitudeQuotes from "../assets/quotes/attitude.json";
import friendshipQuotes from "../assets/quotes/friendship.json";
import happinessQuotes from "../assets/quotes/happiness.json";
import inspirationalQuotes from "../assets/quotes/inspirational.json";
import leadershipQuotes from "../assets/quotes/leadership.json";
import lifeQuotes from "../assets/quotes/life.json";
import loveQuotes from "../assets/quotes/love.json";
import natureQuotes from "../assets/quotes/nature.json";
import positiveQuotes from "../assets/quotes/positive.json";
import readingQuotes from "../assets/quotes/reading.json";
import relationshipQuotes from "../assets/quotes/relationship.json";
import strengthQuotes from "../assets/quotes/strength.json";
import successQuotes from "../assets/quotes/success.json";
import timeQuotes from "../assets/quotes/time.json";
import trustQuotes from "../assets/quotes/trust.json";
import wisdomQuotes from "../assets/quotes/wisdom.json";
import womanQuotes from "../assets/quotes/woman.json";

const Quotes = () => {
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");
  const [quotesList, setQuotesList] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fontsList = [
    "OleoScript",
    "OleoScriptRegular",
    "Inter",
    "Exthing",
    "Monday",
    "Montez",
    "Spirax",
    "PTMono",
    "Qwigley",
    "normal",
    "notoserif",
    "sans-serif",
    "sans-serif-light",
    "sans-serif-thin",
    "sans-serif-condensed",
    "sans-serif-medium",
    "serif",
    "Roboto",
    "monospace",
  ];

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(`"${quote}" - ${author}`);
    Alert.alert("Copied to clipboard");
  };

  const generateRandomDarkColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";

    do {
      color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    } while (isColorTooBright(color));

    return color;
  };

  const isColorTooBright = (color) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness >= 128;
  };

  const getRandomQuoteFromCategory = (category) => {
    var q = [];
    switch (category) {
      case "Motivational":
        q = motivationQuotes;
        break;
      case "Alone":
        q = aloneQuotes;
        break;
      case "Anger":
        q = angerQuotes;
        break;
      case "Attitude":
        q = attitudeQuotes;
        break;
      case "Friendship":
        q = friendshipQuotes;
        break;
      case "Happiness":
        q = happinessQuotes;
        break;
      case "Inspirational":
        q = inspirationalQuotes;
        break;
      case "Leadership":
        q = leadershipQuotes;
        break;
      case "Life":
        q = lifeQuotes;
        break;
      case "Love":
        q = loveQuotes;
        break;
      case "Nature":
        q = natureQuotes;
        break;
      case "Positive":
        q = positiveQuotes;
        break;
      case "Reading":
        q = readingQuotes;
        break;
      case "Relationship":
        q = relationshipQuotes;
        break;
      case "Strength":
        q = strengthQuotes;
        break;
      case "Success":
        q = successQuotes;
        break;
      case "Time":
        q = timeQuotes;
        break;
      case "Trust":
        q = trustQuotes;
        break;
      case "Wisdom":
        q = wisdomQuotes;
        break;
      case "Woman":
        q = womanQuotes;
        break;
      default:
        q = [];
        break;
    }
    const randomQuote = q[Math.floor(Math.random() * q.length)];

    setColor(generateRandomDarkColor());
    setFont(fontsList[Math.floor(Math.random() * fontsList.length)]);
    setQuote(randomQuote["quote"]);
    setAuthor(randomQuote["author"]);
  };

  const route = useRoute();
  const { cat } = route.params;

  useEffect(() => {
    getRandomQuoteFromCategory(cat);
  }, [cat]);

  const [fontsLoaded] = useFonts({
    OleoScript: require("../assets/fonts/Oleo_Script/OleoScript-Bold.ttf"),
    OleoScriptRegular: require("../assets/fonts/Oleo_Script/OleoScript-Regular.ttf"),
    Inter: require("../assets/fonts/Inter/static/Inter-Regular.ttf"),
    Exthing: require("../assets/fonts/exthing-font/Exthing-1Gox2.ttf"),
    Monday: require("../assets/fonts/monday-feelings-font/MondayFeelings-7BD2l.ttf"),
    Montez: require("../assets/fonts/Montez-Regular.ttf"),
    Spirax: require("../assets/fonts/Spirax/Spirax-Regular.ttf"),
    PTMono: require("../assets/fonts/PT_Mono/PTMono-Regular.ttf"),
    Qwigley: require("../assets/fonts/Qwigley/Qwigley-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const speak = () => {
    Speech.speak(quote, {
      _voiceIndex: 1,
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

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color }]}>
      <ScrollView>
        <View style={[styles.gradient]}>
          <View style={styles.contentContainer}>
            <Text
              style={{
                fontFamily: font,
                fontSize: 50,
                color: "#252424",
                paddingTop: 30,
              }}
            >
              {cat}
            </Text>
          </View>

          <View style={styles.quoteCont}>
            <View style={styles.quote}>
              <Text style={[styles.quoteText, { fontFamily: font }]}>
                {quote}
              </Text>
            </View>
            <View style={styles.authorCont}>
              <Text style={styles.authorIcon}>-</Text>
              <Text style={[styles.author, { fontFamily: font }]}>
                {author}
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.buttonContainer, { paddingBottom: 0 }]}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "white" }]}
            onPress={() => {
              getRandomQuoteFromCategory(cat);
            }}
          >
            <Text style={{ color: color, fontWeight: 700 }}>GENERATE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.1)",
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.2)",
    elevation: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
  quoteCont: {
    width: "100%",
    paddingBottom: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    flex: 1,
    height: "100%",
  },
  quote: {
    flexDirection: "row",
    paddingVertical: 50,
    alignItems: "center",
    padding: 10,
    paddingBottom: 20,
    paddingTop: 0,
    flex: 1,
    height: "100%",
  },
  quoteText: {
    flex: 1,
    fontSize: 30,
    fontFamily: "sans-serif-condensed",
    color: "#fff",
    flex: 1,
    height: "100%",
  },
  author: {
    fontSize: 18,
    fontFamily: "PTMono",
    color: "rgba(255,255,255,1)",
  },
  authorIcon: {
    fontSize: 20,
    color: "rgba(255,255,255,1)",
    fontWeight: 600,
  },
  authorCont: {
    flex: 1,
    opacity: 0.8,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
  },
  contentContainer: {
    marginBottom: 30,
    flex: 1,
    height: "100%",
  },
  gradient: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    height: "100%",
  },
});
export default Quotes;
