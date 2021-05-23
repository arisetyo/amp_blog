/**
 * service worker that listens to event from the push server
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

/**
 * The self.addEventListener() can be thought of as adding an event listener to the service worker itself.
 * Remmber that we sent a subscription to the server, and it returns the subcription back with `webPush.sendNotification(subscription, payload)`,
 * so that's why this event listener is like "listening to itself" sending a notification.
 */
self.addEventListener('push', event => {
  const data = event.data.json();

  /** 
   * when this registered & subscribed service worker receives (`sw.js`) a "push" event, 
   * show the browser notification popup, using the data sent from server's webPush.sendNotification.
   */
  self.registration.showNotification(
    data.title, 
    {
      body: data.message,
      icon: '/notification_image.png'
    }
  );

});