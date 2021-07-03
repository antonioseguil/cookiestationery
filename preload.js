const NOTIFICATION_TITLE = "Title";
const NOTIFICATION_BODY = "Notificacion";
const CLICK_MESSAGE = "Notificación";

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick =
  () => console.log(CLICK_MESSAGE);
