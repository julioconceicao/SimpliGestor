import React from "react";
import { View, Text } from "react-native";

import { styles } from "./HistoricoStyle";
import SearchBar from "../../components/BarraDePesquisa/BarraDePesquisa";

export function Historico() {
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
          <Text style={[styles.label, styles.info, styles.horario]}>
            {" "}
            23/02/2024 - 09:00{" "}
          </Text>
          <Text style={[styles.label, styles.info]}> Quiropraxia </Text>
          <Text
            style={[
              styles.label,
              styles.info,
              styles.result,
              { color: "#3CB371" },
            ]}
          >
            {" "}
            Atendido{" "}
          </Text>

          <View style={styles.line} />
        </View>

        <View style={styles.item}>
          <Text style={[styles.label, styles.info, styles.title]}>
            {" "}
            Carlinhos Das Costas Dodois{" "}
          </Text>
          <Text style={[styles.label, styles.info, styles.horario]}>
            {" "}
            23/02/2024 - 14:00{" "}
          </Text>
          <Text style={[styles.label, styles.info]}> Massagem Relaxante </Text>
          <Text
            style={[
              styles.label,
              styles.info,
              styles.result,
              { color: "#3CB371" },
            ]}
          >
            {" "}
            Atendido{" "}
          </Text>
          <View style={styles.line} />
        </View>

        <View style={styles.item}>
          <Text style={[styles.label, styles.info, styles.title]}>
            {" "}
            Carlinhos Das Costas Dodois{" "}
          </Text>
          <Text style={[styles.label, styles.info, styles.horario]}>
            {" "}
            23/02/2024 - 15:10{" "}
          </Text>
          <Text style={[styles.label, styles.info]}> Day Spa 1 </Text>
          <Text
            style={[
              styles.label,
              styles.info,
              styles.result,
              { color: "#3CB371" },
            ]}
          >
            {" "}
            Atendido{" "}
          </Text>
          <View style={styles.line} />
        </View>

        <View style={styles.item}>
          <Text style={[styles.label, styles.info, styles.title]}>
            {" "}
            Carlinhos Das Costas Dodois{" "}
          </Text>
          <Text style={[styles.label, styles.info, styles.horario]}>
            {" "}
            22/02/2024 - 09:30{" "}
          </Text>
          <Text style={[styles.label, styles.info]}> Day Spa 2 </Text>
          <Text
            style={[
              styles.label,
              styles.info,
              styles.result,
              { color: "#FF6347" },
            ]}
          >
            {" "}
            Faltou{" "}
          </Text>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  );
}
