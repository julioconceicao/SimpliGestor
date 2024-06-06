// AgendaDiaria.js
import React from "react";
import { View, Text } from "react-native";
import SearchBar from "../../components/BarraDePesquisa/BarraDePesquisa";
import { styles } from "./AgendaDiariaStyle";

export default function AgendaDiaria() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <View style={styles.itemsContainer}>
        <View style={styles.item}>
          <View style={styles.line} />
          <Text style={[styles.label, styles.info, styles.title]}>
            {" "}
            Carlinhos Das Costas Dodois{" "}
          </Text>
          <Text style={[styles.label, styles.info]}> Quiropraxia </Text>
          <Text style={[styles.label, styles.info, styles.horario]}>
            {" "}
            08:00{" "}
          </Text>
          <View style={styles.line} />
        </View>

        <View style={styles.item}>
          <Text style={[styles.label, styles.info, styles.title]}>
            {" "}
            Carlinhos Das Costas Dodois{" "}
          </Text>
          <Text style={[styles.label, styles.info]}> Quiropraxia </Text>
          <Text style={[styles.label, styles.info, styles.horario]}>
            {" "}
            10:00{" "}
          </Text>
          <View style={styles.line} />
        </View>

        <View style={styles.item}>
          <Text style={[styles.label, styles.info, styles.title]}>
            {" "}
            Carlinhos Das Costas Dodois{" "}
          </Text>
          <Text style={[styles.label, styles.info]}> Massagem Relaxante </Text>
          <Text style={[styles.label, styles.info, styles.horario]}>
            {" "}
            14:00{" "}
          </Text>
          <View style={styles.line} />
        </View>

        <View style={styles.item}>
          <Text style={[styles.label, styles.info, styles.title]}>
            {" "}
            Carlinhos Das Costas Dodois{" "}
          </Text>
          <Text style={[styles.label, styles.info]}> Day Spa 1 </Text>
          <Text style={[styles.label, styles.info, styles.horario]}>
            {" "}
            14:00{" "}
          </Text>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  );
}
