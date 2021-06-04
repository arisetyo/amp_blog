/** function to encode Vapid public key */
const urlBase64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// public vapid key
const publicVapidKey = 'BILQKGKJB72BuLZWmOrk1xrzsPU1qO-NtUOY9tZxO5xB7ebhGODHr_XZ1wDqXWXmK5znsosbdicA-m4a0tIYems';

export {
  urlBase64ToUint8Array,
  publicVapidKey
}