import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Hashrate(props) {
  const FormatHashrate = rawHashrate => {
    let formattedHashrate = rawHashrate / 1000000;
    formattedHashrate = formattedHashrate.toFixed(2);
    return `${formattedHashrate} MH/s`;
  };

  const FormatName = (rawName = "") => {
    let formattedName = rawName;
    for (let i = 1; i < rawName.length; i++) {
      if (rawName[i].toUpperCase() == rawName[i]) {
        formattedName =
          formattedName.slice(0, i) + " " + formattedName.slice(i);
      }
    }

    formattedName =
      formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

    return formattedName;
  };

  return (
    <View>
      <Text style={styles.hashrateName}>
        {FormatName(props.hashrateName)}
        {": "}
        <Text style={styles.hashrate}>
          {FormatHashrate(props.stats[props.hashrateName])}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hashrateName: {
    textAlign: "center",
  },
  hashrate: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Hashrate;