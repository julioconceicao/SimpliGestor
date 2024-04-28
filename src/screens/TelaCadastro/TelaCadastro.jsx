import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import TelaCadastroComponents from "../../components/TelaCadastroComponents/TelaCadastro";
import { styles } from "./TelaCadastroStyle";
import { useForm, Controller } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

export default function TelaCadastro() {
  
  const schema = yup.object({
    nome: yup.string().required("Informe seu nome"),
    email: yup.string().email("Digite um email válido").required("informe seu email"),
    telefone: yup.number().min(9, "Digite um número válido").required("Digite um número válido"),
    senha: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required("Digite sua senha"),
    confirmarSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais').required('Confirme sua senha'),
    
  })
  
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema)});

  function handleSignIn(cmd) {
    console.log(cmd);
  }

  return (
    <View style={styles.container}>
      <TelaCadastroComponents />

      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.textInputNome, {
              borderWidth: errors.nome && 1.5,
              borderColor: errors.nome && "#ff375b"
            }]}
            placeholder="Nome Completo"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.nome && <Text style={styles.labelError} > {errors.nome?.message} </Text>}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.textInputEmail, {
              borderWidth: errors.nome && 1.5,
              borderColor: errors.nome && "#ff375b"
            }]}
            placeholder="Email"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.labelError} > {errors.email?.message} </Text>}

      <Controller
        control={control}
        name="celular"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
           style={[styles.textInputTelefone, {
              borderWidth: errors.nome && 1.5,
              borderColor: errors.nome && "#ff375b"
            }]}
            placeholder="Celular"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.celular && <Text style={styles.labelError} > {errors.celular?.message} </Text>}

      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.textInputSenha, {
              borderWidth: errors.nome && 1.5,
              borderColor: errors.nome && "#ff375b"
            }]}
            placeholder="Senha"
            onChangeText={onChange}
            secureTextEntry={true}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.senha && <Text style={styles.labelError} > {errors.senha?.message} </Text>}

      <Controller
        control={control}
        name="confirmarSenha"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
              style={[styles.textInputConfirmar, {
              borderWidth: errors.nome && 1.5,
              borderColor: errors.nome && "#ff375b"
            }]}
            placeholder="Confirme a sua senha"
            onChangeText={onChange}
            secureTextEntry={true}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.confirmarSenha && <Text style={styles.labelError} > {errors.confirmarSenha?.message} </Text>}

    
      <TouchableOpacity
        onPress={handleSubmit(handleSignIn)}
        style={styles.botaoCadastrar}
      >
        <Text style={{ fontWeight: "bold", color: "#3E5DFF" }}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}
