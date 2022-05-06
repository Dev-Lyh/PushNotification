/* eslint-disable prettier/prettier */
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
class NotificationManager {
  // Configuração orientada pela documentação do React Native Push Notification
  // Essa configuração garante o funcionamento da biblioteca no Android e no iOS

  setNavigator = (newNavigator) => {
    navigator = newNavigator;
  }

  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('[NotificationManager] onRegister token:', token);
      },
      onNotification: function (notification) {
        console.log('[NotificationManager] onNotification:', notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);

        if (notification.data.type === 'bem-humorada') {
          navigator.navigate('Humorada');
        } else if (notification.data.type === 'oferta') {
          navigator.navigate('Oferta');
        } else if (notification.data.type === 'cupom') {
          navigator.navigate('Cupom');
        } else if (notification.data.type === 'default') {
          navigator.navigate('Default');
        }
      },
    });
  };

  createChannel = () => {
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
      id: id || '',
      channelId: 'PushNotification',
      title: title || '',
      message: message || '',
      date: new Date(Date.now() + 15000),
      playSound: options.playSound || true,
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
      id: id || '',
      channelId: 'PushNotification',
      title: title || '',
      message: message || '',
      playSound: options.playSound || true,
      soundName: options.soundName || 'default',
      userInteraction: false,
      allowWhileIdle: false,
    });
  };

  // Função que cancela todas notiificações e limpa as que estão no centro de notificações
  cancelAllLocalNotification = (intervalID) => {
    clearInterval(intervalID);
    // PushNotification.deleteChannel('PushNotification');
    PushNotification.cancelAllLocalNotifications('1');
    PushNotification.cancelLocalNotification('1');
    // PushNotification.cancelAllLocalNotifications();
  };
}

export const notificationManager = new NotificationManager();
