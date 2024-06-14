import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as yup from "yup";
import TelaCadastroComponents from "../../components/TelaCadastroComponents/TelaCadastro";
import { styles } from "./TelaCadastroStyle";
import { useNavigation } from "@react-navigation/native";
import {
  Provider,
  Dialog,
  Portal,
  Button,
  Paragraph,
} from "react-native-paper";
import { supabase } from "../../../supabase.js"; // Importando o cliente Supabase

export default function TelaCadastro() {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const schema = yup.object({
    nome: yup.string().required("Informe seu nome"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Informe seu email"),
    telefone: yup
      .string()
      .min(9, "Digite um número válido")
      .required("Digite seu número"),
    cpf: yup
      .string()
      .required("Digite seu CPF")
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
    cargo: yup
      .string()
      .min(2, "Digite um cargo válido")
      .required("Digite seu cargo"),
    senha: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Digite sua senha"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      cargo: "",
      senha: "",
    },
  });

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await supabase.from("usuarios").select("*").eq();
    setData(data);
  };

  const handleSignIn = async (formData) => {
    const { error } = await supabase.from("usuarios").insert({
      nome: formData.nome,
      email: formData.email,
      cargo: formData.cargo,
      cpf: formData.cpf,
      telefone: formData.telefone,
      senha: formData.senha,
    });

    if (error) {
      console.error(error);
    } else {
      setVisible(true);
      fetchData(); // Atualiza a lista de dados após a inserção
    }
  };

  const hideDialog = () => {
    setVisible(false);
    navigation.navigate("TelaLogin");
  };

  return (
    <ScrollView>
      <Provider>
        <View style={styles.screen}>
          <TelaCadastroComponents />
          <View style={styles.formWrapper}>
            <View style={styles.form}>
              <View style={styles.formItem}>
                <Controller
                  control={control}
                  name="nome"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[styles.input, errors.nome && styles.inputIfError]}
                      placeholder="Nome Completo"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {errors.nome && (
                  <Text style={styles.inputErrorMessage}>
                    {errors.nome?.message}
                  </Text>
                )}
              </View>
              <View style={styles.formItem}>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[styles.input, errors.email && styles.inputIfError]}
                      placeholder="Email"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {errors.email && (
                  <Text style={styles.inputErrorMessage}>
                    {errors.email?.message}
                  </Text>
                )}
              </View>
              <View style={styles.formItem}>
                <Controller
                  control={control}
                  name="telefone"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[styles.input, errors.celular && styles.inputIfError]}
                      placeholder="Telefone"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {errors.telefone && (
                  <Text style={styles.inputErrorMessage}>
                    {errors.telefone?.message}
                  </Text>
                )}
              </View>
              <View style={styles.formItem}>
                <Controller
                  control={control}
                  name="cpf"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[styles.input, errors.cpf && styles.inputIfError]}
                      placeholder="CPF"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {errors.cpf && (
                  <Text style={styles.inputErrorMessage}>
                    {errors.cpf?.message}
                  </Text>
                )}
              </View>
              <View style={styles.formItem}>
                <Controller
                  control={control}
                  name="cargo"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[styles.input, errors.cargo && styles.inputIfError]}
                      placeholder="Cargo"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {errors.cargo && (
                  <Text style={styles.inputErrorMessage}>
                    {errors.cargo?.message}
                  </Text>
                )}
              </View>
              <View style={styles.formItem}>
                <Controller
                  control={control}
                  name="senha"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[styles.input, errors.senha && styles.inputIfError]}
                      placeholder="Senha"
                      onChangeText={onChange}
                      secureTextEntry={true}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {errors.senha && (
                  <Text style={styles.inputErrorMessage}>
                    {errors.senha?.message}
                  </Text>
                )}
              </View>
              <View style={styles.formItem}>
                <Controller
                  control={control}
                  name="confirmarSenha"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[
                        styles.input,
                        errors.confirmarSenha && styles.inputIfError,
                      ]}
                      placeholder="Confirme a sua senha"
                      onChangeText={onChange}
                      secureTextEntry={true}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {errors.confirmarSenha && (
                  <Text style={styles.inputErrorMessage}>
                    {errors.confirmarSenha?.message}
                  </Text>
                )}
              </View>
            </View>

            <View style={styles.formItem}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[styles.input, errors.email && styles.inputIfError]}
                    placeholder="Email"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.email && (
                <Text style={styles.inputErrorMessage}>
                  {errors.email?.message}
                </Text>
              )}
            </View>

            <View style={styles.formItem}>
              <Controller
                control={control}
                name="telefone"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[
                      styles.input,
                      errors.telefone && styles.inputIfError,
                    ]}
                    placeholder="Telefone"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.telefone && (
                <Text style={styles.inputErrorMessage}>
                  {errors.telefone?.message}
                </Text>
              )}
            </View>

            <View style={styles.formItem}>
              <Controller
                control={control}
                name="cpf"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[styles.input, errors.cpf && styles.inputIfError]}
                    placeholder="CPF"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.cpf && (
                <Text style={styles.inputErrorMessage}>
                  {errors.cpf?.message}
                </Text>
              )}
            </View>

            <View style={styles.formItem}>
              <Controller
                control={control}
                name="cargo"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[styles.input, errors.cargo && styles.inputIfError]}
                    placeholder="Cargo"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.cargo && (
                <Text style={styles.inputErrorMessage}>
                  {errors.cargo?.message}
                </Text>
              )}
            </View>

            <View style={styles.formItem}>
              <Controller
                control={control}
                name="senha"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[styles.input, errors.senha && styles.inputIfError]}
                    placeholder="Senha"
                    onChangeText={onChange}
                    secureTextEntry={true}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.senha && (
                <Text style={styles.inputErrorMessage}>
                  {errors.senha?.message}
                </Text>
              )}
            </View>
          </View>

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Cadastro Concluído</Dialog.Title>
              <Dialog.Content>
                <Paragraph>Dados cadastrados com sucesso!</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>OK</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Cadastro Concluído</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Dados cadastrados com sucesso!</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
}