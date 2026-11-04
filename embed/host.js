/* host.js — THE LISTENING ROOM's copy of the Portrait gallery's page script (tinselman.github.io/gallery/embed/host.js),
   loaded by the Music page's Page Header Code Injection on robynmiller.net (one line:
   <script src="https://tinselman.github.io/listening/embed/host.js"></script>), so how the page holds the room and
   shows Robyn's contact form changes with a publish, never a new paste. As the gallery's, but for one thing (Robyn,
   2026-10-28: "open a dialog from the creature and inside the dialog is the squarespace contact info"): asked with
   where the creature is on the screen (rmiContact.from), the contact window grows out of him, and goes back into him.

   The page: no menu or sidebar; the gallery (its Code block, an iframe) fills the window.
   The contact window: when a visitor says "Yes please." to a question about a painting, the gallery asks this page
   to open it — exactly the Instruments page's Contact window (Robyn, 2026-10-26: "make that the same contact info
   pop up as is in the RM instruments contacts"): her site's own Contact form, loaded here (being on her site, it can
   send), dressed by the Instruments page's forms.css; on a computer a frosted square in the middle of the window.
   Its message already says which painting.
   Walking out of the gallery's front door takes the visitor back to the page they came from on the site (or
   the home page, if they came from elsewhere).
   The TIP JAR (Robyn, 2026-11-03: "bring the tip jar entry page and reformat it as the same style pop up window as the
   contact pop up"): the same window, holding her Tip Jar page (/tip-jar) down to its Donation block, growing out of
   the words TIP JAR. Donate: Squarespace's block sends the whole page on to its checkout itself (top.location — a
   full page, for Apple Pay and the rest); caught here where the browser lets a page catch it (the Navigation API), it
   opens in a tab of its own instead and the room plays on in this one; where it can't be caught, it goes as
   Squarespace sends it.
   A tip made (Robyn, 2026-11-03: "If user donates … the creature jumps into view and says …"): her site's Order
   Confirmation Page code (embed/squarespace-order-confirmation.html) notes it in this browser; here — in this tab, or
   coming back to it — the room is told, once. */
(function () {
  var PAGE = 'https://tinselman.github.io', STYLE = PAGE + '/instruments/embed/forms.css';
  // (loaded from the Mac itself — the practice copy of her site, tools/try-site.mjs — the room is there too)
  try { var own = new URL(document.currentScript.src); if (/^(localhost|127\.0\.0\.1)$/.test(own.hostname)) PAGE = own.origin; } catch (e) {}
  var FONT = 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400&display=swap';

  // at once, before the page draws: the gallery fills the window
  var css = document.createElement('style');
  css.textContent = [
    'html, body { background: #fff !important; overflow: hidden !important; height: 100% !important; overscroll-behavior: none !important; }',
    'body { position: fixed !important; top: 0; right: 0; bottom: 0; left: 0; }',
    '#headerWrapper, #mobileNav, #topNavMobile, #mobileMenuLink { display: none !important; }',
    '#page .sqs-block-code { transform: none !important; }',
    '#page .sqs-code-container { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 5; background: #fff; }',
    '.rmi-frame { display: block; width: 100%; height: 100%; border: 0; }',
    // a long press on a phone never selects the gallery's frame (an iPhone shades it blue and stops it working)
    '#page .sqs-code-container, .rmi-frame { -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; }',
    // the Instruments Contact window, as it is there
    '.rmi-veil { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 60; display: none; }',
    '.rmi-veil.open { display: block; }',
    '.rmi-window { position: fixed; z-index: 61; left: 16px; top: 50%; width: calc(100vw - 32px); max-width: 440px; padding: 30px 34px 32px;',
    '  box-sizing: border-box; display: none; flex-direction: column; justify-content: center;',
    '  background: rgba(250, 250, 248, .84); -webkit-backdrop-filter: blur(18px) saturate(1.2); backdrop-filter: blur(18px) saturate(1.2);',
    '  border-radius: 18px; box-shadow: 0 0 70px rgba(0, 0, 0, .24);',
    '  opacity: 0; transform: translateY(-48%); pointer-events: none; transition: opacity .2s, transform .2s; }',
    '.rmi-window.open { opacity: 1; transform: translateY(-50%); pointer-events: auto; }',
    // (from the creature: out of him, and back into him)
    '.rmi-window.grow { transform: translateY(-50%) scale(.08); transition: opacity .3s, transform .45s cubic-bezier(.2, .9, .3, 1.12); }',
    '.rmi-window.grow.open { transform: translateY(-50%); }',
    '.rmi-window iframe { display: block; width: 100%; height: 300px; border: 0; background: transparent; color-scheme: light; }',
    // (the tip jar, gone on to pay: wider, for the checkout)
    '.rmi-window.wide { max-width: 760px; }',
    // (the browser kept the checkout from opening a tab by itself: a button to it, in the window)
    '.rmi-go { display: none; margin: auto; text-align: center; font: 300 15px/2 "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif; color: #111; }',
    '.rmi-window.go .rmi-go { display: block; } .rmi-window.go iframe { display: none !important; }',
    '.rmi-go a { display: inline-block; margin: 22px 0 0; border: 1px solid #111; color: #111; text-decoration: none; padding: 13px 34px 12px;',
    '  font-size: 12px; font-weight: 400; line-height: 1.4; letter-spacing: .24em; text-transform: uppercase; transition: background .15s, color .15s; }',
    '.rmi-go a:hover { background: #111; color: #f0f0ee; }',
    '@media (min-width: 1100px) and (min-height: 600px) {',
    '  .rmi-window.wide { width: min(860px, calc(100vw - 48px)); min-height: 0; padding: 40px; }',
    '  .rmi-window { --side: min(max(33.333vw, 460px), calc(100vh - 48px));',
    '    left: 50%; top: 50%; width: var(--side); max-width: none; min-height: var(--side); padding: 1in; transform: translate(-50%, -48%); }',
    '  .rmi-window.open { transform: translate(-50%, -50%); }',
    '  .rmi-window.grow { transform: translate(-50%, -50%) scale(.08); }',
    '  .rmi-window.grow.open { transform: translate(-50%, -50%); }',
    '}',
  ].join('\n');
  document.head.appendChild(css);

  var big = window.matchMedia('(min-width: 1100px) and (min-height: 600px)');
  var veil, box, frame, form = null, wanted = null, hiding = 0;
  // the tip jar's own frame in the same window (only one of the two shows at a time)
  var tip = { frame: null, block: null, wanted: false, at: null, dressed: false };
  var showing = 'contact';

  function build() {
    veil = document.createElement('div'); veil.className = 'rmi-veil'; document.body.appendChild(veil);
    veil.addEventListener('click', close);                       // a click off the window closes it
    box = document.createElement('div'); box.className = 'rmi-window';
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Contact');
    frame = document.createElement('iframe'); frame.title = 'Contact';
    box.appendChild(frame); document.body.appendChild(box);
    frame.addEventListener('load', dress);
    tip.frame = document.createElement('iframe'); tip.frame.title = 'Tip jar'; tip.frame.style.display = 'none';
    box.appendChild(tip.frame);
    tip.frame.addEventListener('load', dressTip);
    tip.go = document.createElement('div'); tip.go.className = 'rmi-go';
    tip.go.innerHTML = '<div>Your checkout is ready.</div><a target="_blank" rel="noopener">Go to checkout</a>';
    tip.go.querySelector('a').addEventListener('click', function () { setTimeout(close, 0); });
    box.appendChild(tip.go);
    catchCheckout();
    window.addEventListener('resize', fit);
    // tell the gallery this page can show the form; and give it the keyboard, so W walks before any click
    var page = document.querySelector('.rmi-frame');
    if (page) page.addEventListener('load', function () { page.contentWindow.postMessage({ rmiContactHost: true }, PAGE); try { page.focus(); } catch (e) {} });
    // keys pressed while this page (not the gallery's frame) has the keyboard go on to the gallery
    var KEYS = /^(Key[WASD]|Arrow(Up|Down|Left|Right)|Shift(Left|Right)|Space|Enter)$/;
    function pass(type) {
      return function (e) {
        var p = document.querySelector('.rmi-frame');
        if (!p || !KEYS.test(e.code) || (box && box.classList.contains('open'))) return;
        if (e.target && e.target.closest && e.target.closest('input, textarea, select')) return;
        p.contentWindow.postMessage({ rmiKey: { type: type, code: e.code } }, PAGE);
        if (/^Arrow|^Space$/.test(e.code)) e.preventDefault();
      };
    }
    document.addEventListener('keydown', pass('down'));
    document.addEventListener('keyup', pass('up'));
  }
  function load() { if (frame && !frame.getAttribute('src')) frame.src = '/contact'; }
  // the Contact page, down to its form, dressed like the Instruments page
  function dress() {
    var d = frame.contentDocument, tries = 0;
    (function wait() {
      var block = d && d.querySelector('.sqs-block-form');
      if (!block || !block.querySelector('form')) { if (++tries < 100) setTimeout(wait, 100); return; }
      var font = d.createElement('link'); font.rel = 'stylesheet'; font.href = FONT; d.head.appendChild(font);
      var style = d.createElement('link'); style.rel = 'stylesheet'; style.href = STYLE;
      style.onload = style.onerror = function () {
        block.classList.add('rmi-form'); d.body.appendChild(block); form = block;
        new frame.contentWindow.ResizeObserver(fit).observe(block);
        fit();
        if (wanted !== null) { var w = wanted; wanted = null; show(w); }
      };
      d.head.appendChild(style);
      d.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    })();
  }
  function fit() {
    var cs = getComputedStyle(box), room = window.innerHeight - (big.matches ? 48 : 32) - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    if (showing === 'tip') {
      // (on to pay: as tall as there's room for; else as tall as the Donation block)
      if (box.classList.contains('wide')) tip.frame.style.height = room + 'px';
      else if (tip.block) tip.frame.style.height = Math.max(120, Math.min(tip.block.offsetHeight + 2, room)) + 'px';
      return;
    }
    if (!form) return;
    frame.style.height = Math.max(120, Math.min(form.offsetHeight + 2, room)) + 'px';
  }
  /* the Tip Jar page, down to its Donation block (or, failing one, whatever the page says), dressed as the Contact
     form is; and if it goes on from there (to pay), the window widened to hold it */
  function dressTip() {
    var d = null;
    try { d = tip.frame.contentDocument; } catch (e) { d = null; }
    var path = null;
    try { path = tip.frame.contentWindow.location.pathname; } catch (e) { path = null; }
    // (gone on from the Tip Jar page — to pay, say — or somewhere it can't be read: the window widened to hold it)
    if (path !== '/tip-jar' || !d) {
      if (tip.dressed) { box.classList.add('wide'); fit(); }
      if (d) d.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      return;
    }
    // (back on it, or on it for the first time: dressed, at its own width)
    tip.dressed = false; tip.block = null; box.classList.remove('wide');
    var tries = 0;
    (function wait() {
      // (Squarespace has called the Donation block by several names; its whole block, whichever is found)
      var block = d.querySelector('.sqs-block-donation, [class*="sqs-block-donation"], [data-block-type="donation"], .sqs-donation-block-container, .donation-block');
      if (block) block = block.closest('.sqs-block') || block;
      if (!block && ++tries < 100) { setTimeout(wait, 100); return; }
      // (no Donation block there — the page not made yet, say: what the page itself says)
      if (!block) block = d.querySelector('#content, .main-content, main, article') || d.body;
      var font = d.createElement('link'); font.rel = 'stylesheet'; font.href = FONT; d.head.appendChild(font);
      var style = d.createElement('link'); style.rel = 'stylesheet'; style.href = STYLE;
      style.onload = style.onerror = function () {
        block.classList.add('rmi-form', 'rmi-tip');
        // (Robyn, 2026-11-03: "Notice: User data will not be shared or sold." — under it, unless the block says so already)
        if (!/shared or sold/i.test(block.textContent || '')) {
          var note = d.createElement('p'); note.className = 'rmi-notice'; note.textContent = 'Notice: User data will not be shared or sold.';
          block.appendChild(note);
        }
        if (block !== d.body) d.body.appendChild(block);
        tip.block = block; tip.dressed = true;
        d.head.appendChild(Object.assign(d.createElement('style'), { textContent: TIP_STYLE }));
        new tip.frame.contentWindow.ResizeObserver(fit).observe(block);
        // (Donate opening a window of Squarespace's own over the page, to choose an amount: room made for it)
        new tip.frame.contentWindow.MutationObserver(function (ms) {
          for (var i = 0; i < ms.length; i++) for (var j = 0; j < ms[i].addedNodes.length; j++) {
            var n = ms[i].addedNodes[j];
            if (n.nodeType === 1 && n !== block && !/^(SCRIPT|STYLE|LINK|IFRAME|NOSCRIPT)$/.test(n.tagName)) { box.classList.add('wide'); fit(); return; }
          }
        }).observe(d.body, { childList: true });
        fit();
        if (tip.wanted) { tip.wanted = false; showTip(); }
      };
      d.head.appendChild(style);
      d.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    })();
  }
  // the Donation block's own parts, dressed like the Contact form's: the amounts as small capitals, the button a hairline box
  var TIP_STYLE = [
    '.rmi-tip { text-align: center !important; }',
    // (the block's own rounded frame left off: the window is the frame, as for the Contact form)
    '.rmi-tip .donation-form { border: 0 !important; border-radius: 0 !important; padding: 0 !important; background: transparent !important; box-shadow: none !important; }',
    // (Once / Monthly: a hairline underneath, as the Contact form's fields)
    '.rmi-tip select { -webkit-appearance: none; appearance: none; background-color: transparent !important; border: 0 !important; border-bottom: 1px solid #111 !important;',
    '  border-radius: 0 !important; box-shadow: none !important; font-size: 15px !important; color: #111 !important; }',
    '.rmi-tip p { font-size: 15px !important; line-height: 2 !important; color: #111 !important; margin: 0 0 18px !important; }',
    '.rmi-tip label { font-size: 12px !important; letter-spacing: .18em !important; text-transform: uppercase !important; color: #111 !important; cursor: pointer; }',
    '.rmi-tip input[type=radio] { accent-color: #111; }',
    '.rmi-tip .rmi-notice { font-size: 12px !important; line-height: 1.6 !important; letter-spacing: .02em !important; color: #6b6b6b !important; margin: 22px 0 0 !important; }',
    '.rmi-tip input[type=number], .rmi-tip input[type=text] { -webkit-appearance: none; appearance: none; background: transparent !important; border: 0 !important;',
    '  border-bottom: 1px solid #111 !important; border-radius: 0 !important; box-shadow: none !important; outline: none !important; font-size: 16px !important; color: #111 !important; }',
    '.rmi-tip input[type=number]:focus, .rmi-tip input[type=text]:focus { border-bottom-color: #f82c1c !important; }',
    '.rmi-tip .button, .rmi-tip .sqs-donate-button, .rmi-tip .sqs-block-button-element, .rmi-tip button, .rmi-tip a.btn {',
    '  display: inline-block !important; width: auto !important; height: auto !important; min-height: 0 !important; margin: 22px 0 0 !important;',
    '  background: transparent !important; color: #111 !important; border: 1px solid #111 !important; border-radius: 0 !important; box-shadow: none !important;',
    '  padding: 13px 34px 12px !important; font-size: 12px !important; font-weight: 400 !important; line-height: 1.4 !important; letter-spacing: .24em !important;',
    '  text-transform: uppercase !important; text-decoration: none !important; cursor: pointer; transition: background .15s, color .15s; }',
    '.rmi-tip .button:hover, .rmi-tip .sqs-donate-button:hover, .rmi-tip .sqs-block-button-element:hover, .rmi-tip button:hover, .rmi-tip a.btn:hover {',
    '  background: #111 !important; color: #f0f0ee !important; }'
  ].join('\n');
  // Donate's checkout in a tab of its own (the room playing on in this one); the browser's own new-tab rule may want
  // a click of the visitor's own for it — then a button to it in the window
  function catchCheckout() {
    var nav = window.navigation;
    if (!nav || !nav.addEventListener) return;
    nav.addEventListener('navigate', function (e) {
      if (showing !== 'tip' || !box.classList.contains('open') || !e.cancelable || e.hashChange || e.downloadRequest) return;
      var u; try { u = new URL(e.destination.url); } catch (x) { return; }
      if (u.origin !== location.origin || !/^\/checkout(\/|$)/.test(u.pathname)) return;
      e.preventDefault();
      var w = null; try { w = window.open(u.href, '_blank'); } catch (x) { w = null; }
      if (w) { try { w.opener = null; } catch (x) {} close(); return; }
      tip.go.querySelector('a').href = u.href;
      box.classList.add('go');
    });
  }
  function openTip(at) {
    from = at && typeof at.x === 'number' && typeof at.y === 'number' ? at : null;
    if (!tip.dressed) { tip.wanted = true; if (!tip.frame.getAttribute('src')) tip.frame.src = '/tip-jar'; return; }
    showTip();
  }
  function showTip() {
    showing = 'tip';
    frame.style.display = 'none'; tip.frame.style.display = 'block';
    box.setAttribute('aria-label', 'Tip jar');
    show(null);
    try { tip.frame.focus(); } catch (e) {}
  }
  // the message starts with which painting (set the way the form's own typing would, so it's sent)
  function prefill(what) {
    var d = frame.contentDocument, ta = d && d.querySelector('.rmi-form textarea');
    if (!ta || !what) return;
    var set = Object.getOwnPropertyDescriptor(frame.contentWindow.HTMLTextAreaElement.prototype, 'value').set;
    if (!ta.value || /^About No\. /.test(ta.value)) { set.call(ta, 'About ' + what + ':\n\n'); ta.dispatchEvent(new frame.contentWindow.Event('input', { bubbles: true })); }
    var first = d.querySelector('.rmi-form input[type=text], .rmi-form input[type=email]');
    if (first) first.focus();
  }
  var from = null;
  function show(what) {
    clearTimeout(hiding);
    box.style.display = 'flex'; fit(); box.getBoundingClientRect();     // laid out first, so it fades in
    // out of the creature: the window grows from where he is (the room fills this page, so his place in it is here).
    // Where it will stand, open, is measured first (no animating); the point of it that sits on him, scaled small,
    // is then that far into it.
    box.classList.remove('grow'); box.style.transformOrigin = '';
    if (from) {
      box.style.transition = 'none'; box.classList.add('open');
      var r = box.getBoundingClientRect();
      box.classList.remove('open'); box.classList.add('grow');
      box.style.transformOrigin = (from.x * window.innerWidth - r.left) + 'px ' + (from.y * window.innerHeight - r.top) + 'px';
      box.getBoundingClientRect(); box.style.transition = '';
    }
    box.getBoundingClientRect();
    veil.classList.add('open'); box.classList.add('open');
    if (showing === 'contact') prefill(what);
  }
  function open(what, at) {
    from = at && typeof at.x === 'number' && typeof at.y === 'number' ? at : null;
    showing = 'contact';
    frame.style.display = 'block'; if (tip.frame) tip.frame.style.display = 'none';
    box.classList.remove('wide', 'go'); box.setAttribute('aria-label', 'Contact');
    if (!form) { wanted = what || ''; load(); return; }
    show(what);
  }
  function close() {
    veil.classList.remove('open'); box.classList.remove('open');
    hiding = setTimeout(function () {
      if (box.classList.contains('open')) return;
      box.style.display = 'none'; box.classList.remove('go');
      // (the tip jar, if it went on to pay: back to its start for next time)
      if (box.classList.contains('wide')) { box.classList.remove('wide'); tip.dressed = false; tip.block = null; tip.frame.src = 'about:blank'; tip.frame.removeAttribute('src'); }
    }, box.classList.contains('grow') ? 470 : 220);
  }
  /* a tip made: the Order Confirmation Page left the time of it here (same site, same browser). Told to the room as it
     says hello, as the note's left (the checkout in a tab of its own), or as this page comes back (Back from it) */
  var TIPPED = 'rmiTipped';
  function tipped() {
    var at = 0;
    try { at = +localStorage.getItem(TIPPED) || 0; } catch (e) { at = 0; }
    if (!at || Date.now() - at > 2 * 3600 * 1000) return;
    var p = document.querySelector('.rmi-frame');
    if (!p || !p.contentWindow) return;
    try { localStorage.removeItem(TIPPED); } catch (e) {}
    p.contentWindow.postMessage({ rmiTipped: true }, PAGE);
  }
  window.addEventListener('storage', function (e) { if (e.key === TIPPED && e.newValue) tipped(); });
  window.addEventListener('pageshow', function (e) { if (e.persisted) tipped(); });
  window.addEventListener('message', function (e) {
    if (e.origin !== PAGE || !e.data) return;
    if (e.data.rmiHello) { e.source.postMessage({ rmiContactHost: true }, PAGE); tipped(); }
    if (e.data.rmiContact) open(e.data.rmiContact.about, e.data.rmiContact.from);
    if (e.data.rmiTipJar) openTip(e.data.rmiTipJar.from);
    if (e.data.rmiContactClose) close();
    // the visitor walked out of the gallery's front door: back to wherever they were on the site
    // (going Back, not loading the page again, so they land where they were on it, scrolled as they left it)
    if (e.data.rmiLeave) {
      var from = document.referrer, here = location.href.split('#')[0];
      if (/^https:\/\/(www\.)?robynmiller\.net\//.test(from) && from.split('#')[0] !== here) {
        history.back();
        setTimeout(function () { location.href = from; }, 1500);   // in case there was nothing to go back to
      } else location.href = '/';
    }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
  // load the form quietly once the page is up, so the window opens at once (a phone: only when asked)
  window.addEventListener('load', function () {
    if (window.matchMedia('(hover: none)').matches) return;
    setTimeout(load, 1500);
  });
})();
