/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { notificationManager } from '../services/NotificationManager.js';

import Logo from '../assets/Logo.js';

export default function Home() {

  let localNotify = notificationManager;

  const componentDidMount = () => {
    localNotify.configure();
    localNotify.createChannel();
  };
  componentDidMount();

  const CUPOM =
  {
    title: ['Que tal um cupom de desconto?', 'Será que um novo cupom é bem vindo?', 'Quer um baita cupom?'],
    message: {
      data: ['Utilize o cupom DINNER50 e ganhe um jantar com 50% de desconto!', 'Abra o aplicativo e resgate o cupom BURGER20 para ter 20% de desconto na próxima compra!', 'Se a resposta for sim, resgate agora o seu cupom que expira hoje!'],
    },
    type: 'cupom',
  };
  const REFEICAO =
  {
    title: ['Mal posso esperar!', 'Dar uma pausa para comer um lanchinho me parece uma boa ideia!', 'Apenas esperando a fome bater...'],
    message: {
      data: ['Sua próxima refeição está em suas mãos. Escolha um restaurante perto de você e garanta o seu próximo rango!', 'DÊ uma pausa do trabalho e se distraia com uma saborosa comida!', 'Quando a fome bater não exite em nos procurar. Estamos com saudades!'],
    },
    type: 'bem-humorada',
  };
  const OFERTA =
  {
    title: ['Está com fome?', 'Sua barriga está roncando?', 'Ofertas especiais apenas para hoje!'],
    message: {
      data: ['Estamos com ofertas imperdíveis nos melhores restaurantes! Que tal dar uma olhadinha?', 'Veja nossas ofertas e mate a sua fome pagando menos!', 'O patrão ficou louco e resolveu disponibilizar mais de 100 ofertas, venha ver!'],
    },
    type: 'oferta',
  };

  const arr = [CUPOM, REFEICAO, OFERTA];

  const receiveNotification = () => {
    localNotify.sendNotification(1, 'Notificação recebida', 'Lorem ipsum dolor at simet...', {}, {});
  };

  const randomArr = () => {
    let index = Math.floor(Math.random() * arr.length);
    let dataInd = Math.floor(Math.random() * 2);

    const title = arr[index].title[dataInd];
    const message = arr[index].message.data[dataInd];

    console.log('The TITLE of notification is: ', title, '\r\nThe MESSAGE of notification is: ', message);

    localNotify.showNotification(1, title, message, {}, {});

  };
  setInterval(randomArr, 30000);

  return (
    <View style={styles.view}>
      <Logo />
      {/* <TouchableOpacity style={styles.button}  onPress={() => onPressSendNotification(msg[Math.floor(Math.random() * msg.length)])}>
        <Text style={styles.title}>Notify</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.button} onPress={receiveNotification}>
        <Text style={styles.title}>Receber notificação</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'brown' }]} onPress={localNotify.cancelAllLocalNotification}>
        <Text style={styles.title}>Cancelar notificação</Text>
      </TouchableOpacity>
    </View>
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
    backgroundColor: 'olive',
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 5,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
});
