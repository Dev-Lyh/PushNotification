/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cupom() {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Button onPress={() => navigation.navigate('Home')} title="Voltar para a tela inicial" color={'#4DD0E1'} />
      <Text style={styles.emoji}>🎟️</Text>
      <Text style={styles.text}>Tela de redirecionamento: </Text>
      <Text style={[styles.text, styles.type]}>CUPOM</Text>
      <View>
        <Text style={styles.listTitle}>Notificações possíveis: </Text>
        <View style={styles.notify}>
          <Text style={styles.title}>🤑 Que tal um cupom de desconto?</Text>
          <Text style={styles.message}>Utilize o cupom DINNER50 e ganhe um jantar com 50% de desconto!</Text>
        </View>
        <View style={styles.notify}>
          <Text style={styles.title}>🎫 Será que um novo cupom é bem vindo?</Text>
          <Text style={styles.message}>Abra o aplicativo e resgate o cupom BURGER20 para ter 20% de desconto na próxima compra!</Text>
        </View>
        <View style={styles.notify}>
          <Text style={styles.title}>👉 Quer um baita cupom?</Text>
          <Text style={styles.message}>Se a resposta for sim, resgate agora o seu cupom que expira hoje!</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
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
    color: '#00BCD4',
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
