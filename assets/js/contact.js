// Build the mail link only on user interaction to deter basic email scrapers.
// This is obfuscation, not protection against crawlers that execute JavaScript.
document.querySelectorAll('[data-email-contact]').forEach(function (button) {
  button.hidden = false;
  button.addEventListener('click', function () {
    var address = String.fromCharCode(101, 100, 53, 53, 64, 114, 105, 99, 101, 46, 101, 100, 117);
    window.location.href = 'mailto:' + address;
  });
});
