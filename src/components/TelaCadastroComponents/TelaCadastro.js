import { Image, StyleSheet, View } from "react-native";
import logo from "../../assets/LogoSecundaria-removebg-preview (1).png";

export default function TelaCadastroComponents() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

// simplifiquei os estilos
const styles = StyleSheet.create({
  container: {
    // essa margem é uma gambiarra, já que não vou mexer nas outras páginas
    // é provável que em algum dispositivo ela não funcione corretamente
    marginTop: 130,
    //
    height: 100,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  logo: {
    width: "100%",
  },
});
