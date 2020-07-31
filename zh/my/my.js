
var script = document.createElement('script');
script.onload = function () {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-135081047-4');
};
script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-135081047-4';
document.head.appendChild(script);