/* eslint-disable prettier/prettier */
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

class NotificationManager {
  // Configuração orientada pela documentação do React Native Push Notification
  // Essa configuração garante o funcionamento da biblioteca no Android e no iOS
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('[NotificationManager] onRegister token:', token);
      },
      onNotification: function (notification) {
        console.log('[NotificationManager] onNotification:', notification);
        // Função de processamento da notificação
        // Chamada quando uma notificação é recebida ou aberta
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    });
  };

  createChannel = () => {
    PushNotification.deleteChannel('PushNotification');
    PushNotification.createChannel(
      {
        channelId: 'PushNotification', // (required)
        channelName: 'Noti Food', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); // ['channel_id_1']
    });
  }


  // É aqui que nossa notificação para o Android é construida
  buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_launcher',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
    };
  };

  // Fução que exibe a notificação
  showNotification = (id, title, message, data = {}, options = {}) => {

    PushNotification.localNotificationSchedule({
      /* Propriedades do Android */
      ...this.buildAndroidNotification(id, title, message, data, options),


      /* Propriedades do Android e iOS */
      channelId: 'PushNotification',
      title: title || '',
      message: message || '',
      date: new Date(Date.now() + 15000),
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false,
      allowWhileIdle: false,
      repeatType: 'time',
      repeatTime: 15000,
    });
  };

  sendNotification = (id, title, message, data = {}, options = {}) => {

    PushNotification.localNotification({
      /* Propriedades do Android */
      ...this.buildAndroidNotification(id, title, message, data, options),


      /* Propriedades do Android e iOS */
      channelId: 'PushNotification',
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false,
      allowWhileIdle: false,
    });
  };

  // Função que cancela todas notiificações e limpa as que estão no centro de notificações
  cancelAllLocalNotification = () => {
    PushNotification.cancelAllLocalNotifications();
  };
}

export const notificationManager = new NotificationManager();
