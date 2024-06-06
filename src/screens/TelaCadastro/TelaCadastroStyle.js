import { StyleSheet } from "react-native";

// simplifiquei os estilos
export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#3E5DFF",
  },
  formWrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  form: {
    gap: 16,
    padding: 16,
  },
  formItem: {
    gap: 4,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 24,
    height: 48,
    paddingLeft: 16,
  },
  inputIfError: {
    borderWidth: 1,
    borderColor: "#ff375b",
  },
  inputErrorMessage: {
    // eu recomendaria mudar alguma das cores, uma vez que o texto vermelho não fica muito bem visível
    color: "red",
  },
  buttonWrapper: {
    justifyContent: "center",
    padding: 40,
  },
  button: {
    backgroundColor: "white",
    width: "100",
    borderRadius: 24,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#3E5DFF",
  },
});
