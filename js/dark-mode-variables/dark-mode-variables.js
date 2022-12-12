$(function () {
  "use strict";

  const themeBtn = $("#darkModeSwitch");

  function getCurrentTheme() {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    localStorage.getItem("framework.theme")
      ? (theme = localStorage.getItem("framework.theme"))
      : null;

    return theme;
  }

  function loadTheme(theme) {
    const root = $(":root");

    if (theme === "light") {
      themeBtn.html(
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      );
      themeBtn.attr("title", "turn on dark mode");
    } else {
      themeBtn.html(
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      );
      themeBtn.attr("title", "turn off dark mode");
    }

    root.attr("color-scheme", theme);
  }

  themeBtn.on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const enableAudio = $(this).hasClass("withAudio");
    let theme = getCurrentTheme();
    let audio;

    if (theme === "dark") {
      audio = enableAudio
        ? document.querySelector(".theme-audio-light-on")
        : null;
      theme = "light";
    } else {
      audio = enableAudio
        ? document.querySelector(".theme-audio-light-off")
        : null;
      theme = "dark";
    }

    if (enableAudio) {
      audio.currentTime = 0;

      audio.play();
    }
    localStorage.setItem("framework.theme", theme);
    loadTheme(theme);
  });

  loadTheme(getCurrentTheme());
});
