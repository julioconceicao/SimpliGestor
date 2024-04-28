import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import TelaCadastroComponents from "../../components/TelaCadastroComponents/TelaCadastro";
import { styles } from "./TelaCadastroStyle2";
import { useForm, Controller } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

export default function TelaCadastro() {
  
    const schema = yup.object({
    
      cpf: yup.string().matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido').required('CPF é obrigatório'),
      cep: yup.string().matches(/^\d{5}-\d{3}$/, 'CEP inválido').required('CEP é obrigatório'),
      logradouro: yup.string().max(100, "Logradouro deve ter no máximo 100 caracteres").required('Informe seu logradouro'),
      cargo: yup.string().required("Informe seu cargo atual")
  
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
          name="cpf"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
             style={[styles.textInputCpf, {
                borderWidth: errors.nome && 1.5,
                borderColor: errors.nome && "#ff375b"
              }]}
              placeholder="CPF"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.cpf && <Text style={styles.labelError} > {errors.cpf?.message} </Text>}
  
        <Controller
          control={control}
          name="cep"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
             style={[styles.textInputCep, {
                borderWidth: errors.nome && 1.5,
                borderColor: errors.nome && "#ff375b"
              }]}
              placeholder="CEP"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.cep && <Text style={styles.labelError} > {errors.cep?.message} </Text>}
  
        <Controller
          control={control}
          name="logradouro"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
             style={[styles.textInputLogradouro, {
                borderWidth: errors.nome && 1.5,
                borderColor: errors.nome && "#ff375b"
              }]}
              placeholder="Logradouro"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.logradouro && <Text style={styles.labelError} > {errors.logradouro?.message} </Text>}
  
        <Controller
          control={control}
          name="cargo"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.textInputCargo, {
                borderWidth: errors.nome && 1.5,
                borderColor: errors.nome && "#ff375b"
              }]}
              placeholder="Cargo"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.cargo && <Text style={styles.labelError} > {errors.cargo?.message} </Text>}
        
  
        <TouchableOpacity
          onPress={handleSubmit(handleSignIn)}
          style={styles.botaoCadastrar}
        >
          <Text style={{ fontWeight: "bold", color: "#3E5DFF" }}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    );
  }