import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../Screen";
import AppText, { MeidumText } from "../../Components/AppText";
import AppInput from "../../Components/AppInput";
import AppBtn from "../../Components/AppBtn";
import Colors from "../../Config/Colors";

export default function Details() {
  return (
    <Screen>
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <View style={styles.container}>
          <MeidumText text="Welcome" />
          <AppText text="Let's get you started" />
          <View style={styles.form}>
            <View style={styles.name}>
              <AppInput placeholder="First Name" style={{ width: "50%" }} />
              <AppInput
                placeholder="Last Name"
                style={{ width: "50%", marginLeft: 6 }}
              />
            </View>
            <AppInput placeholder="Country" />
            <AppInput placeholder="State" />
            <AppInput placeholder="Phone Number" />
          </View>
        </View>
        <View style={styles.footer}>
          <AppBtn title="Continue" color="green" style={styles.btn} />
          <AppText
            text="Already have an account?"
            style={{ fontSize: 18, marginBottom: 6 }}
          />
          <TouchableOpacity>
            <AppText
              text="Login"
              style={{ fontSize: 18, color: Colors.primary, fontWeight: "700" }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  forgot: {
    right: -200,
  },
  name: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    mtop: 500,
    width: "100%",
    padding: 20,
    flex: 1,
  },
  form: {
    paddingTop: 60,
  },
  btn: {
    marginBottom: 30,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    bottom: -10,
    position: "relative",
  },
});
