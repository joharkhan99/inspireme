import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    OleoScript: require("../assets/fonts/Oleo_Script/OleoScript-Bold.ttf"),
    OleoScriptRegular: require("../assets/fonts/Oleo_Script/OleoScript-Regular.ttf"),
    Inter: require("../assets/fonts/Inter/static/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const navigateToQuotes = (category) => {
    navigation.navigate("Quotes", { cat: category });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearGradient
          // colors={["#fff", "#D7E1EC"]}
          // colors={["#EFEFEF", "#FFFFFF"]}
          colors={["#faf0e6", "#faf0e6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>QUOTES COLLECTIONS</Text>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["#FF9800", "#FFB74D"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#FF9800",
                      elevation: 20,
                      elevation: 20,
                      shadowOpacity: 0.5,
                      shadowRadius: 10,
                      shadowOffset: {
                        width: 0,
                        height: 5,
                      },
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={() => navigateToQuotes("Motivational")}
                  >
                    <Text style={styles.text}>Motivational</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["#5D4B72", "#B49FCE"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#5D4B72",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Alone")}>
                    <Text style={styles.text}>Alone</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["#F5515F", "#FFA384"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#F5515F",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={() => navigateToQuotes("Friendship")}
                  >
                    <Text style={styles.text}>Friendship</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["#5E60CE", "#9B59B6"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#5E60CE",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={() => navigateToQuotes("Leadership")}
                  >
                    <Text style={styles.text}>Leadership</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["#1E90FF", "#56CCF2"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#1E90FF",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Reading")}>
                    <Text style={styles.text}>Reading</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["#FFA500", "#FFC542"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#FFA500",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={() => navigateToQuotes("Strength")}
                  >
                    <Text style={styles.text}>Strength</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["#9C27B0", "#BA68C8"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#9C27B0",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Trust")}>
                    <Text style={styles.text}>Trust</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["#E15A97", "#F47BB3"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#E15A97",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={() => navigateToQuotes("Attitude")}
                  >
                    <Text style={styles.text}>Attitude</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["#FDD835", "#FFEE58"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#FDD835",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={() => navigateToQuotes("Happiness")}
                  >
                    <Text style={styles.text}>Happiness</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["#4A148C", "#7E57C2"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#4A148C",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Life")}>
                    <Text style={styles.text}>Life</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["#00B894", "#00EAA4"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#00B894",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Nature")}>
                    <Text style={styles.text}>Nature</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["#FF6B6B", "#FFCE56"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#FF6B6B",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={() => navigateToQuotes("Relationship")}
                  >
                    <Text style={styles.text}>Relationship</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["#4CAF50", "#8BC34A"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#4CAF50",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Success")}>
                    <Text style={styles.text}>Success</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["#795548", "#A1887F"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#795548",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Wisdom")}>
                    <Text style={styles.text}>Wisdom</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["#40C4FF", "#80D8FF"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#40C4FF",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={() => navigateToQuotes("Inspirational")}
                  >
                    <Text style={styles.text}>Inspirational</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["#E53935", "#EF5350"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#E53935",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Love")}>
                    <Text style={styles.text}>Love</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["#FFD700", "#FBC531"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#FFD700",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={() => navigateToQuotes("Positive")}
                  >
                    <Text style={styles.text}>Positive</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["#2C3E50", "#3498DB"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#2C3E50",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Time")}>
                    <Text style={styles.text}>Time</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["#FF1744", "#FF5252"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#FF1744",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Anger")}>
                    <Text style={styles.text}>Anger</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["#FF4081", "#F48FB1"]}
                  style={[
                    styles.category,
                    {
                      shadowColor: "#FF4081",
                      elevation: 20,
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity onPress={() => navigateToQuotes("Woman")}>
                    <Text style={styles.text}>Woman</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202123",
  },
  contentContainer: {},
  gradient: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
  },
  column: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    gap: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 40,
    color: "black",
    textAlign: "center",
    fontWeight: "900",
    fontFamily: "OleoScriptRegular",
  },
  categoryList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  category: {
    paddingVertical: 50,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
  },
  Success: {
    paddingVertical: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Inter",
  },
});

export default Categories;
