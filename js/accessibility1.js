$(function () {
  "use strict";

  $("body").openAccessibility({
    // enable the plugin on mobile
    isMobileEnabled: true,
    // text selector
    textSelector: "*",
    // s(mall), m(edium), l(arge)
    iconSize: "s",
    // local
    localization: ["en"],
  });
});
