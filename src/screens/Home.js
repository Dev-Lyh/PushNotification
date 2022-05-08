/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { notificationManager } from '../services/NotificationManager.js';

import Logo from '../assets/Logo.js';

export default function Home() {

  const [isNotify, setIsNotify] = useState('Cancelar notificações');

  let localNotify = notificationManager;

  const componentDidMount = () => {
    localNotify.configure();
    localNotify.createChannel();
  };

  if (isNotify === 'Cancelar notificações') {
    componentDidMount();
  }

  const CUPOM =
  {
    title: [
      '🤑 Que tal um cupom de desconto?',
      '🎫 Será que um novo cupom é bem vindo?',
      '👉 Quer um baita cupom?'],
    message: {
      data: [
        'Utilize o cupom DINNER50 e ganhe um jantar com 50% de desconto!',
        'Abra o aplicativo e resgate o cupom BURGER20 para ter 20% de desconto na próxima compra!',
        'Se a resposta for sim, resgate agora o seu cupom que expira hoje!'],
    },
    type: 'cupom',
  };
  const REFEICAO =
  {
    title: [
      '🍔 Mal posso esperar!',
      '🍟 Dar uma pausa para comer um lanchinho me parece uma boa ideia!',
      '🍖 Apenas esperando a fome bater...'],
    message: {
      data: [
        'Sua próxima refeição está em suas mãos. Escolha um restaurante perto de você e garanta o seu próximo rango!',
        'Dê uma pausa do trabalho e se distraia com uma saborosa comida!',
        'Quando a fome bater não exite em nos procurar. Estamos com saudades!'],
    },
    type: 'bem-humorada',
  };
  const OFERTA =
  {
    title: [
      '⏰ Está com fome?',
      '😋 Sua barriga está roncando?',
      '💰 Ofertas especiais apenas para hoje!'],
    message: {
      data: [
        'Estamos com ofertas imperdíveis nos melhores restaurantes! Que tal dar uma olhadinha?',
        'Veja nossas ofertas e mate a sua fome pagando menos!',
        'O patrão ficou louco e resolveu disponibilizar mais de 100 ofertas, venha ver!'],
    },
    type: 'oferta',
  };
  const DEFAULT =
  {
    title: [
      '🔔 O sino acabou de tocar!',
      '💣 Aqui que pediram uma notificação?',
      '📢 Nova notificação recebida!'],
    message: {
      data: [
        'Você acabou de receber uma notificação instantânea!',
        'Sua notificação está aqui! O que acha de entrar no app e ver nossas ofertas?',
        'Atenção! Sua conta está em risco, use o próximo cupom para salvá-la!'],
    },
    type: 'default',
  };

  const arr = [CUPOM, REFEICAO, OFERTA];

  const returnNotifyState = () => {
    componentDidMount();
    let dataInd = Math.floor(Math.random() * 3);
    const title = DEFAULT.title[dataInd];
    const message = DEFAULT.message.data[dataInd];
    const type = DEFAULT.type;
    localNotify.sendNotification('1', title, message, { type }, {});
  };

  const receiveNotification = () => {
    let dataInd = Math.floor(Math.random() * 3);
    const title = DEFAULT.title[dataInd];
    const message = DEFAULT.message.data[dataInd];
    const type = DEFAULT.type;
    localNotify.sendNotification('1', title, message, { type }, {});

    if (isNotify === 'Notificações canceladas') {
      setIsNotify('Cancelar notificações');
      returnNotifyState();
    }

  };

  const randomArr = () => {
    let index = Math.floor(Math.random() * arr.length);
    let dataInd = Math.floor(Math.random() * 3);

    const title = arr[index].title[dataInd];
    const message = arr[index].message.data[dataInd];
    const type = arr[index].type;

    localNotify.showNotification('1', title, message, { type }, {});

  };

  const intervalId = setInterval(randomArr, 30000);

  const cancelNotify = () => {
    localNotify.cancelAllLocalNotification();
    clearInterval(intervalId);
    setIsNotify('Notificações canceladas');
  };

  return (
    <>
      <View style={styles.view}>
        <Logo />
        <TouchableOpacity style={styles.button} onPress={receiveNotification}>
          <MaterialCommunityIcons name="bell-ring" size={20} color="white"/>
          <Text style={styles.title}>Receber notificação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isNotify === 'Cancelar notificações' ? styles.buttonCancel : styles.buttonReCancel} onPress={cancelNotify}>
          <MaterialCommunityIcons name="bell-cancel" size={20} color="white"/>
          <Text style={styles.title}>{isNotify}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#282828',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rebeccapurple',
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonCancel: {
    backgroundColor: 'crimson',
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonReCancel: {
    backgroundColor: 'gray',
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});
