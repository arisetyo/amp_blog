/**
 * service worker that listens to event from the push server
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

self.addEventListener('push', event => {
  const data = event.data.json();

  // determine the visual option on the browser notification
  const options = {
    body: data.message,
    icon: '/notification_image.png'
  };

  self.registration.showNotification( data.title, options );
});