(function () {
  var primary = localStorage.getItem("primary") || "#6f5a99";
  var secondary = localStorage.getItem("secondary") || "#e24175";

  window.LagosAdminConfig = {
    // Theme Primary Color
    primary: primary,
    // theme secondary color
    secondary: secondary,
  };
})();
