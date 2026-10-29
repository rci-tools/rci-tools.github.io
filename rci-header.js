(function () {
  var s = document.currentScript;
  var title = s.getAttribute('data-title') || 'RCI Tools';
  var sub = s.getAttribute('data-subtitle') || 'Right Choice Improvements — Field Tools';
  var HUB = 'https://rci-tools.github.io/?launch=app';
  var LOGO = 'https://rci-tools.github.io/logo.jpg';

  var css =
    '.rci-hdr{background:#fff;border-bottom:3px solid #CC0000;padding:12px 32px;display:flex;align-items:center;gap:16px;box-shadow:0 2px 8px rgba(0,0,0,.08);font-family:Inter,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;box-sizing:border-box}' +
    '.rci-hdr img{height:56px;object-fit:contain}' +
    '.rci-hdr .rci-div{width:1px;height:40px;background:#e0e0e0}' +
    '.rci-hdr h1{font-size:18px;font-weight:700;color:#111;letter-spacing:-.3px;margin:0}' +
    '.rci-hdr p{font-size:12px;color:#666;margin:2px 0 0}' +
    '.rci-hdr .rci-hub{margin-left:auto;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:#CC0000;text-decoration:none;border:1.5px solid #CC0000;border-radius:4px;padding:6px 12px;white-space:nowrap}' +
    '.rci-hdr .rci-hub:hover{background:#CC0000;color:#fff}' +
    '.rci-ftr{background:#fff;border-top:3px solid #CC0000;color:#1c1c1c;text-align:center;padding:14px 16px;font-family:"Roboto Slab",serif;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.08em}' +    
    /* '.rci-ftr{background:#1c1c1c;border-top:3px solid #CC0000;color:#fff;text-align:center;padding:14px 16px;font-family:"Roboto Slab",serif;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.08em}' + */
    /* '.rci-ftr{text-align:center;padding:20px;color:#aaa;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:Inter,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}' + */
    '@media(max-width:480px){.rci-hdr{padding:10px 16px;gap:10px}.rci-hdr img{height:40px}.rci-hdr .rci-div{display:none}.rci-hdr h1{font-size:15px}}';

  /* var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st); */ 
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
  var fl = document.createElement('link');
  fl.rel = 'stylesheet';
  fl.href = 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap';
  document.head.appendChild(fl);
  
  var h = document.createElement('header');
  h.className = 'rci-hdr';
  h.innerHTML =
    '<img alt="Right Choice Improvements">' +
    '<div class="rci-div"></div>' +
    '<div><h1></h1><p></p></div>' +
    '<a class="rci-hub" target="_top">← Tools Hub</a>';
  h.querySelector('img').src = LOGO;
  h.querySelector('h1').textContent = title;
  h.querySelector('p').textContent = sub;
  h.querySelector('.rci-hub').href = HUB;
  s.parentNode.insertBefore(h, s);

  function addFooter() {
    var f = document.createElement('footer');
    f.className = 'rci-ftr';
    f.textContent = 'Right Choice Improvements — Internal Use Only';
    document.body.appendChild(f);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addFooter);
  else addFooter();
})();
