# Push notification

Push notification service & browser-based notification system

## Generate VAPID Keys
The web-push library relies on a set of VAPID keys to work. VAPID keys are a pair of public and private keys which is used to restrict the validity of a push subscription to a specific application server, and also to identify the server that is sending the push notifications.

You can generate the VAPID key pair by running the command below from the root of your project directory:
```
./node_modules/.bin/web-push generate-vapid-keys
```