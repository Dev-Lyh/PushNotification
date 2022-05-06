/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Humorada() {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Button onPress={() => navigation.navigate('Home')} title="Voltar para a tela inicial" color={'lightcoral'}/>
      <Text style={styles.emoji}>😄</Text>
      <Text style={styles.text}>Tela de redirecionamento: </Text>
      <Text style={[styles.text, styles.type]}>BEM-HUMORADA</Text>
      <View>
        <Text style={styles.listTitle}>Notificações possíveis: </Text>
        <View style={styles.notify}>
          <Text style={styles.title}>🍔 Mal posso esperar!</Text>
          <Text style={styles.message}>Sua próxima refeição está em suas mãos. Escolha um restaurante perto de você e garanta o seu próximo rango!</Text>
        </View>
        <View style={styles.notify}>
          <Text style={styles.title}>🍟 Dar uma pausa para comer um lanchinho me parece uma boa ideia!</Text>
          <Text style={styles.message}>Dê uma pausa do trabalho e se distraia com uma saborosa comida!</Text>
        </View>
        <View style={styles.notify}>
          <Text style={styles.title}>🍖 Apenas esperando a fome bater...</Text>
          <Text style={styles.message}>Quando a fome bater não exite em nos procurar. Estamos com saudades!</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: 'rgba(255, 255, 255, .5)',
    fontSize: 20,
    textAlign: 'center',
  },
  emoji: {
    fontSize: 86,
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
  },
  type: {
    fontWeight: 'bold',
    color: 'crimson',
  },
  listTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  notify: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: '#181818',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#252525',
    lineHeight: 25,
  },
});
