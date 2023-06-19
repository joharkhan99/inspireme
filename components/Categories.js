import React from "react";
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

const categories = [
  { id: 1, title: "Motivation" },
  { id: 2, title: "Success" },
  { id: 3, title: "Love" },
  { id: 4, title: "Wisdom" },
  { id: 5, title: "Friendship" },
  // Add more categories as needed
];

const Categories = () => {
  const colors = [
    ["#FEE8D6", "#FBB996", "#F69C81"],
    ["#FAF3E8", "#E8DCCD", "#CBB7A9"],
    ["#EAE2F8", "#C3ADF0", "#9887E2"],
    ["#FDD7E8", "#F59BB3", "#E96387"],
    ["#DAF8E9", "#86E9B7", "#51CE8A"],
  ];

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
                  colors={[
                    "rgba(181, 23, 158, 0.7)",
                    "rgba(247, 91, 180, 0.7)",
                  ]}
                  style={[
                    styles.Motivation,
                    {
                      elevation: 20,
                      shadowColor: "rgba(181, 23, 158, 1)",
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity>
                    <Text style={styles.text}>Motivation</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["rgba(0, 163, 255, 0.7)", "rgba(3, 218, 198, 0.7)"]}
                  style={[
                    styles.Motivation,
                    {
                      elevation: 20,
                      shadowColor: "rgba(0, 163, 255, 1)",
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity>
                    <Text style={styles.text}>Motivation</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["rgba(255, 111, 0, 0.7)", "rgba(255, 214, 0, 0.7)"]}
                  style={[
                    styles.Motivation,
                    {
                      elevation: 20,
                      shadowColor: "rgba(255, 111, 0, 1)",
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity>
                    <Text style={styles.text}>Motivation1</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={[
                    "rgba(110, 254, 167, 0.7)",
                    "rgba(24, 166, 173, 0.7)",
                  ]}
                  style={[
                    styles.Motivation,
                    {
                      elevation: 20,
                      shadowColor: "rgba(24, 166, 173, 1)",
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity>
                    <Text style={styles.text}>Motivation2</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={[
                    "rgba(135, 206, 235, 0.7)",
                    "rgba(224, 176, 255, 0.7)",
                  ]}
                  style={[
                    styles.Motivation,
                    {
                      elevation: 20,
                      shadowColor: "rgba(135, 206, 235, 1)",
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity>
                    <Text style={styles.text}>Motivation2</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={[
                    "rgba(61, 126, 255, 0.7)",
                    "rgba(160, 107, 255, 0.7)",
                  ]}
                  style={[
                    styles.Motivation,
                    {
                      elevation: 20,
                      shadowColor: "rgba(61, 126, 255, 1)",
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity>
                    <Text style={styles.text}>Motivation</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.column}>
                <LinearGradient
                  colors={["rgba(255, 23, 68, 0.7)", "rgba(255, 109, 0, 0.7)"]}
                  style={[
                    styles.Motivation,
                    {
                      elevation: 20,
                      shadowColor: "rgba(255, 23, 68, 1)",
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity>
                    <Text style={styles.text}>Motivation</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={[
                    "rgba(30, 136, 229, 0.7)",
                    "rgba(38, 198, 218, 0.7)",
                  ]}
                  style={[
                    styles.Motivation,
                    {
                      elevation: 20,
                      shadowColor: "rgba(30, 136, 229, 1)",
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity>
                    <Text style={styles.text}>Motivation</Text>
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
    backgroundColor: "white",
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 40,
    color: "black",
    textAlign: "center",
  },
  categoryList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  Motivation: {
    paddingVertical: 50,
    backgroundColor: "#fff",
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
    fontSize: 18,
  },
});

export default Categories;
