// service worker that listens to event from the push server
self.addEventListener('push', event => {
  const data = event.data.json();

  // Show the browser notification popup
  self.registration.showNotification(
    data.title, 
    {
      body: data.message,
      icon: '/notification_image.png'
    }
  );

});