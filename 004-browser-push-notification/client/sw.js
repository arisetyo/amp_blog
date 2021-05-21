/**
 * service worker that listens to event from the push server
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

/**
 * self.addEventListener() can be thought of as adding an event listener to the service worker itself
 */
self.addEventListener('push', event => {
  const data = event.data.json();

  /** 
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