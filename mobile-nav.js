/* TT Pistoia — mobile/tablet navigation drawer.
   Turns the existing header .rtc-nav into a slide-in drawer under 900px. */
(function () {
  var CSS = "\
.mnav-btn{display:none}\
@media (max-width:900px){\
  .mnav-btn{display:flex!important;flex-direction:column;gap:5px;width:44px;height:44px;align-items:center;justify-content:center;background:none;border:0;padding:0;cursor:pointer;position:relative;z-index:70}\
  .mnav-btn span{display:block;width:24px;height:2.5px;border-radius:2px;background:linear-gradient(100deg,#01017b 0%,#c00c1e 100%);transition:transform .25s ease,opacity .18s ease}\
  html.mnav-open .mnav-btn span:nth-child(1){transform:translateY(7.5px) rotate(45deg)}\
  html.mnav-open .mnav-btn span:nth-child(2){opacity:0}\
  html.mnav-open .mnav-btn span:nth-child(3){transform:translateY(-7.5px) rotate(-45deg)}\
  header .rtc-nav{position:fixed!important;top:0;right:0;height:100vh;width:min(80vw,320px);max-width:none!important;box-sizing:border-box;background:#fff;display:flex!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-start!important;gap:0!important;padding:92px 26px 28px!important;box-shadow:-10px 0 44px rgba(0,0,0,.20);transform:translateX(102%);transition:transform .3s cubic-bezier(.4,0,.2,1);z-index:60;overflow-y:auto!important}\
  html.mnav-open header .rtc-nav{transform:translateX(0)}\
  header .rtc-nav a{font-size:20px!important;line-height:1.3!important;width:100%;padding:15px 0!important;border-bottom:1px solid #eceef1;white-space:normal!important}\
  .mnav-back{position:fixed;inset:0;background:rgba(1,1,40,.45);opacity:0;pointer-events:none;transition:opacity .3s ease;z-index:50}\
  html.mnav-open .mnav-back{opacity:1;pointer-events:auto}\
  html.mnav-open,html.mnav-open body{overflow:hidden}\
}";

  function injectCSS() {
    if (document.getElementById('mnav-css')) return;
    var s = document.createElement('style');
    s.id = 'mnav-css';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  function close() { document.documentElement.classList.remove('mnav-open'); }

  function setup() {
    injectCSS();
    var navs = document.querySelectorAll('header .rtc-nav');
    for (var i = 0; i < navs.length; i++) {
      var nav = navs[i];
      if (nav.getAttribute('data-mnav')) continue;
      nav.setAttribute('data-mnav', '1');
      var bar = nav.parentElement;
      if (!bar) continue;

      var btn = document.createElement('button');
      btn.className = 'mnav-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Apri il menu');
      btn.innerHTML = '<span></span><span></span><span></span>';
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        document.documentElement.classList.toggle('mnav-open');
      });
      bar.appendChild(btn);

      var back = document.createElement('div');
      back.className = 'mnav-back';
      back.addEventListener('click', close);
      bar.appendChild(back);

      nav.addEventListener('click', function (e) {
        if (e.target && e.target.closest && e.target.closest('a')) close();
      });
    }
  }

  window.addEventListener('resize', function () { if (window.innerWidth > 900) close(); });
  window.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  setup();
  document.addEventListener('DOMContentLoaded', setup);
  if (window.MutationObserver) {
    new MutationObserver(setup).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
