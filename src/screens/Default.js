/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Default() {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Button onPress={() => navigation.navigate('Home')} title="Voltar para a tela inicial" color={'mediumpurple'} />
      <Text style={styles.emoji}>🚀</Text>
      <Text style={styles.text}>Tela de redirecionamento: </Text>
      <Text style={[styles.text, styles.type]}>PADRÃO</Text>
      <View>
        <Text style={styles.listTitle}>Notificações possíveis: </Text>
        <View style={styles.notify}>
          <Text style={styles.title}>🔔 O sino acabou de tocar!</Text>
          <Text style={styles.message}>Você acabou de receber uma notificação instantânea!</Text>
        </View>
        <View style={styles.notify}>
          <Text style={styles.title}>💣 Aqui que pediram uma notificação?</Text>
          <Text style={styles.message}>Sua notificação está aqui! O que acha de entrar no app e ver nossas ofertas?</Text>
        </View>
        <View style={styles.notify}>
          <Text style={styles.title}>📢 Nova notificação recebida!</Text>
          <Text style={styles.message}>Atenção! Sua conta está em risco, use o próximo cupom para salvá-la!</Text>
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
    color: 'rgba(255, 255, 255, 0.6)',
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
    color: 'mediumorchid',
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
