/**
 * The client application
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

/**
 * function to encode Vapid public key
 */
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/**
 * Vapid public key
 */
const publicVapidKey = 'BNmRjiaZVBSDA55dlhFEJlitYuMkCbOpFVahHEuwImGzy-zdWQJMYexBYRK107JVrKXjKldezCl35hGoVWV5kYs';

/**
 * trigger the push notification
 */
async function triggerPushNotification() {

  /**
   * register the service worker,
   * which needs to be stored as a different file
   */
  if ('serviceWorker' in navigator) {
    /** 1. register the browser's serviceWorker, assign to variable `register` */
    const register = await navigator.serviceWorker.register('/sw.js', { // <================= register script in `sw.js` as a browser serviceWorker
      scope: '/'
    });

    /** 2. make the register variable to subscribe to the pushManager, assign as `subscription` variable  */
    const subscription = await register.pushManager.subscribe({ // <================= subscribe the registered serviceWorker to a channel identified by the VAPID key
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });

    /** 
     * 3. call the backend API to trigger webPush.sendNotification,
     *    send the subscription information (as `subscription` variable) to the backend
     */
    await fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } else {
    console.error('Service workers are not supported in this browser');
  }
}

// assign variable to the trigger button
const triggerPush = document.querySelector('.trigger-push');

// add event listener to the trigger button
triggerPush.addEventListener('click', () => {
  triggerPushNotification().catch(error => console.error(error));
});