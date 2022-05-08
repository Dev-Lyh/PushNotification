/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Oferta() {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Button onPress={() => navigation.navigate('Home')} title="Voltar para a tela inicial" color={'#FFC046'} />
      <Text style={styles.emoji}>🪙</Text>
      <Text style={styles.text}>Tela de redirecionamento: </Text>
      <Text style={[styles.text, styles.type]}>OFERTA</Text>
      <View>
        <Text style={styles.listTitle}>Notificações possíveis: </Text>
        <View style={styles.notify}>
          <Text style={styles.title}>⏰ Está com fome?</Text>
          <Text style={styles.message}>Estamos com ofertas imperdíveis nos melhores restaurantes! Que tal dar uma olhadinha?</Text>
        </View>
        <View style={styles.notify}>
          <Text style={styles.title}>😋 Sua barriga está roncando?</Text>
          <Text style={styles.message}>Veja nossas ofertas e mate a sua fome pagando menos!</Text>
        </View>
        <View style={styles.notify}>
          <Text style={styles.title}>💰 Ofertas especiais apenas para hoje!</Text>
          <Text style={styles.message}>O patrão ficou louco e resolveu disponibilizar mais de 100 ofertas, venha ver!</Text>
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
    color: '#FF8B02',
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
