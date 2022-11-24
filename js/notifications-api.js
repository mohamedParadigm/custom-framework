window.onload = function () {
  const notifBtn = document.getElementById("applyNotification");

  console.log("Notification Status: ", Notification.permission);
  // The maxActions attribute of the Notification interface returns the maximum number of actions supported by the device and the User Agent.
  // Effectively, this is the maximum number of elements in Notification.actions array which will be respected by the User Agent.
  console.log("Max Number of Notifications: ", Notification.maxActions);

  notifBtn.addEventListener("click", () => {
    // Requests permission from the user to display notifications.
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        const notification = new Notification(
          "Notification Title", // Defines a title for the notification, which is shown at the top of the notification window.
          {
            // A string representing the body text of the notification, which is displayed below the title.
            body: "Notification body description",
            // Arbitrary data that you want associated with the notification. This can be of any data type.
            // Returns a structured clone of the notification's data.
            data: { hello: "world" },
            // A string containing the URL of an icon to be displayed in the notification..
            icon: "img/sun.svg",
            // a string containing the URL of an image to be displayed in the notification.
            image: "img/300x200.png",
            // A string containing the URL of the image used to represent the notification when there isn't enough space to display the notification itself.
            badge: "img/300x200.png",
            // The direction in which to display the notification. 
            // It defaults to auto, which just adopts the browser's language setting behavior, but you can override that behavior by setting values of ltr and rtl (although most browsers seem to ignore these settings.)
            dir: "auto",
            // The language code of the notification as specified in the constructor's options parameter.
            lang: "en",
            // The ID of the notification A string representing an identifying tag for the notification.
            // Incase of using tag the behaviour will change from close one and open the next to change content of one to content of next
            tag: "Notification_Example", // Default empty
            // A boolean value specifying whether the user should be notified after a new notification replaces an old one.
            // The default is false, which means they won't be notified.
            // Must have tag property
            // override max number of actions
            renotify: true,
            // Indicates that a notification should remain active until the user clicks or dismisses it, rather than closing automatically.
            // The default value is false.
            requireInteraction: false,
            // Specifies whether the notification should be silent — i.e., no sounds or vibrations should be issued, regardless of the device settings.
            silent: false,
            // Specifies the time at which a notification is created or applicable (past, present, or future).
            // A number representing a timestamp, given as Unix time in milliseconds.
            timestamp: Math.floor(Date.now()),
            // A vibration pattern for the device's vibration hardware to emit with the notification.
            vibrate: [200, 100, 200],  // https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API#vibration_patterns
            // An array of actions to display in the notification. Each element in the array is an object with the following members:
            // actions: [
            //   {
            //     // A string identifying a user action to be displayed on the notification.
            //     action: "play",
            //     // A string containing action text to be shown to the user.
            //     title: "Play the game",
            //     // A string containing the URL of an icon to display with the action.
            //     icon: "img/moon.svg"
            //   }
            // ]
          }
        );

        // Programmatically closes a notification instance.
        // notification.close();

        notification.onclick = () => console.log("clicked");
        notification.onclose = () => console.log("closed");
        console.log(notification.timestamp)
      }
    });
  });

  // let notification;
  // let timeout;

  // document.addEventListener("visibilitychange", () => {
  //   if (document.visibilityState === "hidden") {
  //     const leaveDate = new Date();
  //     interval = setInterval(() => {
  //       notification = new Notification("Come Back Please", {
  //         body: `You have been gone for ${Math.round((new Date() - leaveDate) / 1000)} seconds`,
  //         tag: "Come Back"
  //       })
  //     }, 100);
  //   } else {
  //     interval && clearInterval(interval);
  //     notification && notification.close();
  //   }
  // })
};
