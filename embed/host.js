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
   coming back to it — the window says her thank-you (2026-11-04), and once it's closed the room is told, once. */
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
    // (900 wide or more, Squarespace's checkout sets its summary beside the form: no scrolling, no second Total)
    '.rmi-window.wide { max-width: 900px; }',
    /* more below (Robyn, 2026-11-03: "it needs a vertical scroll wheel and arrows on both ends or something to show that
       there is more data below, like the bottom of the page fades and when you begin scrolling the top of the page
       fades"): over the page in the window, its bottom fading while there's more below, its top once it's scrolled;
       and beside it a scroll bar, an arrow at each end */
    '.rmi-fade { position: absolute; z-index: 2; height: 56px; pointer-events: none; opacity: 0; transition: opacity .25s; }',
    '.rmi-fade.top { background: linear-gradient(to bottom, rgba(255,255,255,.97), rgba(255,255,255,0)); }',
    '.rmi-fade.bottom { background: linear-gradient(to top, rgba(255,255,255,.97), rgba(255,255,255,0)); }',
    '.rmi-fade.on { opacity: 1; }',
    '.rmi-bar { position: absolute; z-index: 3; width: 18px; display: none; flex-direction: column; align-items: center; }',
    '.rmi-window.scrolls .rmi-bar { display: flex; }',
    '.rmi-bar button { flex: none; width: 18px; height: 18px; padding: 0; border: 0; background: transparent; color: #111; cursor: pointer; opacity: .6;',
    '  font: 11px/18px "Helvetica Neue", Helvetica, Arial, sans-serif; }',
    '.rmi-bar button:hover { opacity: 1; } .rmi-bar button[disabled] { opacity: .18; cursor: default; }',
    '.rmi-track { position: relative; flex: 1; width: 4px; margin: 4px 0; border-radius: 2px; background: rgba(0,0,0,.12); cursor: pointer; }',
    '.rmi-thumb { position: absolute; left: -2px; width: 8px; border-radius: 4px; background: rgba(0,0,0,.55); cursor: grab; }',
    '.rmi-thumb:active { cursor: grabbing; }',
    // (paying: a little × at the top right)
    '.rmi-x { display: none; position: absolute; top: 10px; right: 14px; width: 34px; height: 34px; border: 0; background: transparent; color: #111;',
    '  font: 300 28px/34px "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif; cursor: pointer; opacity: .55; }',
    '.rmi-x:hover { opacity: 1; } .rmi-window.wide .rmi-x, .rmi-window.thanked .rmi-x { display: block; }',
    // (paid: her thank-you in the window, in the Contact form's lettering — Robyn, 2026-11-04)
    '.rmi-thanks { display: none; margin: 0; font: 300 17px/1.85 "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif; color: #111;',
    '  text-align: center; text-wrap: balance; -webkit-font-smoothing: antialiased; }',
    '.rmi-window.thanked .rmi-thanks { display: block; }',
    '.rmi-window.thanked iframe { display: none !important; }',
    '@media (min-width: 1100px) and (min-height: 600px) {',
    '  .rmi-window.wide { width: min(980px, calc(100vw - 48px)); min-height: 0; padding: 40px; }',
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
  // (more below: the fades and the scroll bar over the window's page)
  var sb = { top: null, bottom: null, bar: null, drag: null, tick: null, running: false };
  // the tip jar's own frame in the same window (only one of the two shows at a time)
  var tip = { frame: null, block: null, wanted: false, at: null, dressed: false, paying: false, watch: 0, x: null, thanks: null, owed: false };
  var showing = 'contact';

  function build() {
    veil = document.createElement('div'); veil.className = 'rmi-veil'; document.body.appendChild(veil);
    veil.addEventListener('click', function () { if (!tip.paying) close(); });   // a click off the window closes it (not while paying)
    box = document.createElement('div'); box.className = 'rmi-window';
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Contact');
    frame = document.createElement('iframe'); frame.title = 'Contact';
    box.appendChild(frame); document.body.appendChild(box);
    frame.addEventListener('load', dress);
    tip.frame = document.createElement('iframe'); tip.frame.title = 'Tip jar'; tip.frame.style.display = 'none';
    box.appendChild(tip.frame);
    tip.frame.addEventListener('load', dressTip);
    // (card, Apple Pay: let in the window)
    tip.frame.setAttribute('allow', 'payment');
    // paying, a way out that can't be clicked by mistake (not a click off the window: that would lose what's typed)
    tip.x = document.createElement('button'); tip.x.className = 'rmi-x'; tip.x.type = 'button'; tip.x.setAttribute('aria-label', 'Close'); tip.x.textContent = '×';
    tip.x.addEventListener('click', close);
    box.appendChild(tip.x);
    // paid: her thank-you, before they're back in the room (thank)
    tip.thanks = document.createElement('p'); tip.thanks.className = 'rmi-thanks'; tip.thanks.textContent = THANKS;
    box.appendChild(tip.thanks);
    // more below: the fades and the bar (scrollBits)
    sb.top = document.createElement('div'); sb.top.className = 'rmi-fade top';
    sb.bottom = document.createElement('div'); sb.bottom.className = 'rmi-fade bottom';
    sb.bar = document.createElement('div'); sb.bar.className = 'rmi-bar';
    sb.bar.innerHTML = '<button type="button" class="up" aria-label="Scroll up">▲</button><div class="rmi-track"><div class="rmi-thumb"></div></div><button type="button" class="down" aria-label="Scroll down">▼</button>';
    box.append(sb.top, sb.bottom, sb.bar);
    scrollBits();
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
    // (gone on from the Tip Jar page — to pay, say — or somewhere it can't be read: the window widened to hold it;
    // the checkout dressed as the Contact form is)
    if (path !== '/tip-jar' || !d) {
      if (tip.dressed) { box.classList.add('wide'); fit(); }
      if (d && d.head && !d.getElementById('rmi-checkout')) {
        var cf = d.createElement('link'); cf.rel = 'stylesheet'; cf.href = FONT; d.head.appendChild(cf);
        d.head.appendChild(Object.assign(d.createElement('style'), { id: 'rmi-checkout', textContent: CHECKOUT_STYLE }));
        // (Robyn, 2026-11-03: less of it — the Subtotal and Tax lines left out, the Total kept; again each time the
        // checkout draws itself afresh)
        var trim = function () {
          var all = d.querySelectorAll('div, li, tr, p, dl');
          for (var i = 0; i < all.length; i++) {
            var el = all[i], t = (el.innerText || '').replace(/\s+/g, ' ').trim();
            if (t.length > 40 || !/^(Subtotal|Tax) \$?[\d.,]+$/i.test(t)) continue;
            // (the line itself — the biggest box holding just that line)
            while (el.parentElement && (el.parentElement.innerText || '').replace(/\s+/g, ' ').trim() === t) el = el.parentElement;
            el.style.setProperty('display', 'none', 'important');
          }
        };
        trim();
        // (at most once a frame, however busily it redraws as they type)
        var queued = false, later = function () { if (queued) return; queued = true; d.defaultView.requestAnimationFrame(function () { queued = false; trim(); }); };
        try { new d.defaultView.MutationObserver(later).observe(d.body, { childList: true, subtree: true }); } catch (e) {}
      }
      if (d) d.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      // (paid, the checkout sends itself on to Squarespace's own thank-you page: caught as it goes — her thank-you
      // instead, there and then — Robyn, 2026-11-04: "this image won't leave the screen after you purchase. in this
      // window, user should see the thank you info after making payment")
      try {
        var fnav = tip.frame.contentWindow.navigation;
        if (fnav && fnav.addEventListener && !fnav.rmiWatched) {
          fnav.rmiWatched = true;
          fnav.addEventListener('navigate', function (e) {
            var u; try { u = new URL(e.destination.url); } catch (x) { return; }
            if (!tip.paying || !paidAt(u)) return;
            if (e.cancelable) e.preventDefault();
            try { localStorage.removeItem(TIPPED); } catch (x) {}
            thank();
          });
        }
      } catch (e) {}
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
        // A CODE (Robyn, 2026-11-09: "this is a code that would allow users to donate for free"): typed here and Enter, it counts as a tip — the same thank-you, then the creature —
        // with nothing paid. Under Donate, over the notice. Any capitals, spaces ignored. A wrong one: said so
        // (2026-11-09: typed, then DONATE clicked — as he did — went on to pay $1: the box has its own → now, and DONATE
        // with a good code in the box uses the code, nothing paid. Return, → or DONATE, all caught before the page's own
        // handlers (on the window, capturing))
        if (!block.querySelector('.rmi-code')) {
          var code = d.createElement('div'); code.className = 'rmi-code';
          var row = d.createElement('div'); row.className = 'rmi-code-row';
          var ci = d.createElement('input'); ci.type = 'text'; ci.placeholder = 'Have a code?'; ci.autocomplete = 'off'; ci.spellcheck = false;
          ci.setAttribute('autocapitalize', 'off'); ci.setAttribute('autocorrect', 'off'); ci.setAttribute('aria-label', 'Code'); ci.setAttribute('enterkeyhint', 'go');
          var cb = d.createElement('button'); cb.type = 'button'; cb.className = 'rmi-code-go'; cb.textContent = '\u2192'; cb.setAttribute('aria-label', 'Use code');
          var cm = d.createElement('p'); cm.className = 'rmi-code-msg'; cm.setAttribute('aria-live', 'polite');
          var useCode = function () {
            if (codeOk(ci.value)) { ci.value = ''; cm.textContent = ''; thank('code'); return; }
            cm.textContent = ci.value.trim() ? "Sorry \u2014 that code doesn't work." : '';
            ci.focus(); ci.select();
          };
          var w = d.defaultView;
          w.addEventListener('keydown', function (e) {
            if (e.target !== ci || e.key !== 'Enter') return;
            e.preventDefault(); e.stopImmediatePropagation(); useCode();
          }, true);
          w.addEventListener('keypress', function (e) { if (e.target === ci && e.key === 'Enter') { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
          w.addEventListener('keyup', function (e) { if (e.target === ci && e.key === 'Enter') { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
          w.addEventListener('click', function (e) {
            var t = e.target && e.target.closest ? e.target : null;
            if (!t) return;
            if (t.closest('.rmi-code-go')) { e.preventDefault(); e.stopImmediatePropagation(); useCode(); return; }
            // (DONATE — the Donation block's own button — with a good code typed: the code instead)
            if (codeOk(ci.value) && !t.closest('.rmi-code') && t.closest('button, [type=submit], a.btn, .button, .sqs-donate-button') && block.contains(t)) { e.preventDefault(); e.stopImmediatePropagation(); useCode(); }
          }, true);
          w.addEventListener('submit', function (e) { if (codeOk(ci.value)) { e.preventDefault(); e.stopImmediatePropagation(); useCode(); } }, true);
          ci.addEventListener('input', function () { cm.textContent = ''; });
          row.appendChild(ci); row.appendChild(cb); code.appendChild(row); code.appendChild(cm);
          var notice = block.querySelector('.rmi-notice');
          if (notice) block.insertBefore(code, notice); else block.appendChild(code);
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
  /* Squarespace's checkout in the window, dressed as the Contact form (Robyn, 2026-11-03: "can it be the same text style
     as the contact pop up and can it be against a transparent background like the contact popup?"): no page behind it
     (the frosted window shows through), Inter Tight light, labels in small spaced capitals, fields a hairline
     underneath (red while typing), buttons a hairline box filled when pointed at. (The card number's boxes are the
     payment company's own frames: their insides stay as they are) */
  var CHECKOUT_STYLE = [
    ':root { color-scheme: light; }',
    'html, body { background: transparent !important; }',
    'body *:not(iframe):not(svg):not(svg *):not(img) { background-color: transparent !important; background-image: none !important; box-shadow: none !important; }',
    'body, body * { font-family: "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif !important; -webkit-font-smoothing: antialiased; }',
    'body { color: #111 !important; font-weight: 300 !important; }',
    'body * { color: #111; border-color: rgba(0,0,0,.18) !important; }',
    'h1, h2, h3, h4, legend { font-weight: 300 !important; letter-spacing: -0.01em !important; color: #111 !important; }',
    'label, [class*="label" i], [class*="Label"] { font-size: 11px !important; font-weight: 400 !important; letter-spacing: .22em !important; text-transform: uppercase !important; color: #6b6b6b !important; }',
    'input:not([type=checkbox]):not([type=radio]), select, textarea { -webkit-appearance: none; appearance: none; background: transparent !important; border: 0 !important;',
    '  border-bottom: 1px solid #111 !important; border-radius: 0 !important; box-shadow: none !important; outline: none !important; font-size: 16px !important; font-weight: 300 !important; color: #111 !important;',
    '  padding-left: 0 !important; padding-right: 0 !important; }',
    'input:focus, select:focus, textarea:focus { border-bottom-color: #f82c1c !important; }',
    'input::placeholder { color: #9b9a96 !important; opacity: 1 !important; }',
    'input[type=checkbox], input[type=radio] { accent-color: #111; }',
    'button, [role=button], a[class*="button" i] { background: transparent !important; color: #111 !important; border: 1px solid #111 !important; border-radius: 0 !important;',
    '  box-shadow: none !important; font-size: 12px !important; font-weight: 400 !important; letter-spacing: .24em !important; text-transform: uppercase !important; transition: background .15s, color .15s; }',
    'button:hover, [role=button]:hover, a[class*="button" i]:hover { background: #111 !important; color: #f0f0ee !important; }',
    'button:hover *, [role=button]:hover *, a[class*="button" i]:hover * { color: #f0f0ee !important; }',
    'button *, [role=button] * { color: inherit !important; }',
    // (its sections' boxes: a hairline at most, as the window is the frame)
    'section, fieldset, [class*="card" i], [class*="panel" i], [class*="section" i] { border-radius: 0 !important; }',
    // (paying: Squarespace's "Completing your order" alone in the window — its white screen, made see-through above,
    // had left the words written over the summary's buttons: Robyn, 2026-11-04, "two overlapping screens")
    'html:has([class*="LoadingOverlay-overlay"]) body * { visibility: hidden !important; }',
    'html:has([class*="LoadingOverlay-overlay"]) body [class*="LoadingOverlay-overlay"], html:has([class*="LoadingOverlay-overlay"]) body [class*="LoadingOverlay-overlay"] * { visibility: visible !important; }',
    // (and a box of Squarespace's own over the checkout — "Submit Failure", say, for a tip under its 50¢ least: Robyn,
    // 2026-11-04 — alone in the window too, its Ok a hairline box like the others)
    'html:has([aria-modal="true"]) body * { visibility: hidden !important; }',
    'html:has([aria-modal="true"]) body [aria-modal="true"], html:has([aria-modal="true"]) body [aria-modal="true"] * { visibility: visible !important; }',
    '[aria-modal="true"] { box-shadow: none !important; }',
    '[aria-modal="true"] button { min-width: 120px !important; padding: 13px 34px 12px !important; outline: none !important; }'
  ].join('\n');
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
    // (the code: a short hairline under Donate, its answer under it in the notice's grey)
    '.rmi-tip .rmi-code { margin: 30px auto 0 !important; max-width: 200px !important; }',
    '.rmi-tip .rmi-code-row { display: flex !important; align-items: flex-end !important; border-bottom: 1px solid #111 !important; }',
    '.rmi-tip .rmi-code-row:focus-within { border-bottom-color: #f82c1c !important; }',
    '.rmi-tip .rmi-code input[type=text] { flex: 1 1 auto !important; min-width: 0 !important; width: auto !important; text-align: center !important; font-size: 14px !important; padding: 4px 0 4px 26px !important; border-bottom: 0 !important; }',
    '.rmi-tip .rmi-code .rmi-code-go { flex: none !important; width: 26px !important; margin: 0 !important; padding: 0 0 4px !important; border: 0 !important; background: transparent !important;',
    '  color: #111 !important; font-size: 16px !important; letter-spacing: 0 !important; line-height: 1.4 !important; cursor: pointer; }',
    '.rmi-tip .rmi-code .rmi-code-go:hover { background: transparent !important; color: #f82c1c !important; }',
    '.rmi-tip .rmi-code input::placeholder { color: #8a8a8a; letter-spacing: .04em; }',
    '.rmi-tip .rmi-code-msg { font-size: 12px !important; line-height: 1.6 !important; color: #6b6b6b !important; margin: 8px 0 0 !important; min-height: 1.6em; }',
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
  /* Donate (Robyn, 2026-11-03: "after donating, the user must stay in the room. it's okay if a pop-up window comes up
     with the buyer info but then the user should be able to continue listening to the song" — in this window, "do not
     leave the room"): Squarespace's block sends the whole page on to its checkout (top.location) — caught here (the
     Navigation API) and opened in the window instead, wide; and while paying, wherever the checkout sends the whole
     page (itself again, its thank-you) kept in the window too. Paid: watchPaid. */
  function catchCheckout() {
    var nav = window.navigation;
    if (!nav || !nav.addEventListener) return;
    nav.addEventListener('navigate', function (e) {
      if (showing !== 'tip' || !box.classList.contains('open') || !e.cancelable || e.hashChange || e.downloadRequest) return;
      var u; try { u = new URL(e.destination.url); } catch (x) { return; }
      if (u.origin !== location.origin) return;
      if (!tip.paying && !/^\/checkout(\/|$)/.test(u.pathname)) return;
      e.preventDefault();
      if (tip.paying && paidAt(u)) { try { localStorage.removeItem(TIPPED); } catch (x) {} thank(); return; }
      // (the checkout trying to be the whole page from in here: it stays where it is)
      var at = null; try { at = tip.frame.contentWindow.location.href; } catch (x) { at = null; }
      if (at !== u.href) tip.frame.src = u.href;
      if (!tip.paying) { tip.paying = true; box.classList.add('wide'); fit(); watchPaid(); }
    });
  }
  /* paid (Robyn: "The message should come from the creature" — not Squarespace's thank-you page): the window shuts as
     soon as the payment's through, and the room is told — the creature thanks them. Known by the line her Order
     Confirmation Page code leaves (embed/), or by the checkout arriving at its confirmation (its address, or its words) */
  /* (a donation's, as Squarespace's checkout sends itself on when it's paid — Robyn, 2026-11-04, a real $1 left the window
     on the summary: /checkout/confirmed/redirect?oid=…&type=donation, then /checkout/donation-confirmed; an order's
     received but not yet settled: /checkout/order-received) */
  var PAID_AT = /\/checkout\/(confirmed|donation-confirmed|order-received|order-confirmed|gift-card-order-confirmed|subscription-confirmed|membership-confirmed)|order-confirm|confirmation|\/orders?\/|[?&](orderid|oid)=|type=donation|thank-?you/i;
  function paidAt(u) { var p = u.pathname + u.search; return PAID_AT.test(p) && !/^\/checkout\/?\?cartToken=/i.test(p); }
  var PAID_SAYS = /thank you for your (donation|order|gift|support|purchase)|order confirmed|donation (confirmed|received)|order (number|#)/i;
  function watchPaid() {
    clearInterval(tip.watch);
    var since = Date.now();
    tip.watch = setInterval(function () {
      if (!tip.paying) { clearInterval(tip.watch); return; }
      var href = '', text = '', flag = 0;
      try { href = tip.frame.contentWindow.location.href; text = tip.frame.contentDocument.body.innerText || ''; } catch (x) { href = ''; }
      try { flag = +localStorage.getItem(TIPPED) || 0; } catch (x) { flag = 0; }
      var paid = flag >= since - 1000 || (!!href && paidAt(new URL(href))) || PAID_SAYS.test(text);
      if (!paid) return;
      try { localStorage.removeItem(TIPPED); } catch (x) {}
      thank();
    }, 400);
  }
  /* paid (Robyn, 2026-11-04: "before user leaves donation dialog, after they have donated, in pop up dialog box type,
     "THANK YOU for contributing …"): the window says so — its words in place of the checkout, at the Contact window's
     size — and the room is told to get ready; closed (the ×, a click off it, Esc), the room's told, and the creature
     takes it from there. (Told of a tip some other way — the checkout in a tab of its own — the window opens to say it) */
  /* the tip jar's codes, each kept as a hash of itself (lower case, no spaces: FNV-1a) so it isn't there to be read in
     this file (Robyn's, 2026-11-09 — which word it is: the project's notes). Another: its hash added here */
  var CODES = [2036957983];
  function codeOk(s) {
    s = String(s || '').toLowerCase().replace(/\s+/g, '');
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return !!s && CODES.indexOf(h) >= 0;
  }
  /* the code's own screens, in place of the thank-you (Robyn, 2026-11-09 — his words, as he wrote them): the side room
     not yet found in this browser, or found (the room says which as it opens the tip jar: rmiTipJar.open) */
  // (kept as base64, so the word they'd give away isn't there to be read in this file: NOTES.md has them as written)
  var CODE_NEW = atob('QSBCYW5kY2FtcCBjb250cmlidXRvcj8gSG9seSBtYWNrZXJlbCEgSSdtIHNvIGdsYWQgeW91IHN0b3BwZWQgYnkuIFdlIGhhdmUgc29tZSB0aGluZ3MgdG8gc2hvdyB5b3Uh');
  var CODE_IN = atob('WWF5ISBBIGJhbmRjYW1wIHVzZXIhIEl0IGxvb2tzIGxpa2UgeW91J3ZlIGFscmVhZHkgZm91bmQgeW91ciB3YXkgaW50byBzZWNyZXQgYXJlYXMu');
  var THANKS = "THANK YOU for contributing to Robyn's ongoing musical work and his work in the sound listening room. He has something for you too! Take a look!";
  function thank(how) {
    if (!box) return;
    tip.code = how === 'code';
    if (tip.thanks) tip.thanks.textContent = tip.code ? (tip.roomOpen ? CODE_IN : CODE_NEW) : THANKS;
    tip.paying = false; clearInterval(tip.watch);
    var p = document.querySelector('.rmi-frame');
    if (!tip.owed && p && p.contentWindow) p.contentWindow.postMessage({ rmiTipSoon: true }, PAGE);
    tip.owed = true;
    // (Squarespace's own thank-you, behind: let go of, so nothing there can take the page anywhere)
    tip.dressed = false; tip.block = null;
    try { tip.frame.src = 'about:blank'; } catch (e) {}
    showing = 'thanks';
    box.classList.remove('wide'); box.classList.add('thanked');
    box.setAttribute('aria-label', 'Thank you');
    if (!box.classList.contains('open')) { from = null; frame.style.display = 'none'; tip.frame.style.display = 'none'; show(null); }
    else fit();
  }
  /** the page showing in the window, and what of it scrolls (its own page, or the biggest box in it that scrolls) */
  function scroller() {
    if (showing === 'thanks') return null;
    var f = showing === 'tip' ? tip.frame : frame, d = null;
    try { d = f && f.contentDocument; } catch (e) { d = null; }
    if (!d || !d.body) return null;
    var se = d.scrollingElement || d.documentElement;
    if (se.scrollHeight > se.clientHeight + 2) return { f: f, el: se };
    if (!f.rmiInner || !f.rmiInner.isConnected || Date.now() - (f.rmiInnerAt || 0) > 2000) {
      f.rmiInnerAt = Date.now(); f.rmiInner = null;
      var all = d.querySelectorAll('div, main, section, form'), best = 0;
      for (var i = 0; i < all.length; i++) {
        var el = all[i];
        if (el.scrollHeight <= el.clientHeight + 2 || el.clientHeight < 120) continue;
        var oy = d.defaultView.getComputedStyle(el).overflowY;
        if ((oy === 'auto' || oy === 'scroll') && el.clientHeight > best) { best = el.clientHeight; f.rmiInner = el; }
      }
    }
    return f.rmiInner ? { f: f, el: f.rmiInner } : { f: f, el: null };
  }
  function scrollBits() {
    var up = sb.bar.querySelector('.up'), down = sb.bar.querySelector('.down'), track = sb.bar.querySelector('.rmi-track'), thumb = sb.bar.querySelector('.rmi-thumb');
    var by = function (k) { var s = scroller(); if (s && s.el) s.el.scrollBy({ top: k * s.el.clientHeight * 0.6, behavior: 'smooth' }); };
    up.addEventListener('click', function () { by(-1); });
    down.addEventListener('click', function () { by(1); });
    track.addEventListener('pointerdown', function (e) {
      if (e.target === thumb) return;
      var r = thumb.getBoundingClientRect(); by(e.clientY < r.top ? -1 : 1);
    });
    thumb.addEventListener('pointerdown', function (e) {
      var s = scroller(); if (!s || !s.el) return;
      e.preventDefault(); thumb.setPointerCapture(e.pointerId);
      sb.drag = { y: e.clientY, top: s.el.scrollTop, el: s.el };
    });
    thumb.addEventListener('pointermove', function (e) {
      var g = sb.drag; if (!g) return;
      var room = track.clientHeight - thumb.offsetHeight, span = g.el.scrollHeight - g.el.clientHeight;
      if (room > 0) g.el.scrollTop = g.top + (e.clientY - g.y) * span / room;
    });
    thumb.addEventListener('pointerup', function () { sb.drag = null; });
    thumb.addEventListener('pointercancel', function () { sb.drag = null; });
    // (kept up to date as it's scrolled, and as the checkout opens its next part — only while the window's open)
    sb.tick = function tick() {
      if (!box.classList.contains('open')) { box.classList.remove('scrolls'); sb.running = false; return; }
      requestAnimationFrame(tick);
      var s = scroller(), el = s && s.el;
      var more = !!el && el.scrollHeight > el.clientHeight + 2;
      box.classList.toggle('scrolls', more);
      if (!s) { sb.top.classList.remove('on'); sb.bottom.classList.remove('on'); return; }
      // (over the page: its own place in the window)
      var f = s.f, fl = f.offsetLeft, ft = f.offsetTop, fw = f.offsetWidth, fh = f.offsetHeight;
      var inner = el && el !== (el.ownerDocument.scrollingElement || el.ownerDocument.documentElement) ? el.getBoundingClientRect() : null;
      var t0 = inner ? ft + inner.top : ft, h0 = inner ? inner.height : fh, l0 = inner ? fl + inner.left : fl, w0 = inner ? inner.width : fw;
      sb.top.style.cssText = 'left:' + l0 + 'px;top:' + t0 + 'px;width:' + w0 + 'px';
      sb.bottom.style.cssText = 'left:' + l0 + 'px;top:' + (t0 + h0 - 56) + 'px;width:' + w0 + 'px';
      var top = more ? el.scrollTop : 0, span = more ? el.scrollHeight - el.clientHeight : 0;
      sb.top.classList.toggle('on', more && top > 2);
      sb.bottom.classList.toggle('on', more && top < span - 2);
      if (!more) return;
      // (clear of the × at the top)
      var bt = Math.max(ft, 52);
      sb.bar.style.cssText = 'left:' + (fl + fw + 8) + 'px;top:' + bt + 'px;height:' + (fh - (bt - ft)) + 'px';
      up.disabled = top <= 2; down.disabled = top >= span - 2;
      var th = track.clientHeight, kh = Math.max(28, th * el.clientHeight / el.scrollHeight);
      thumb.style.height = kh + 'px';
      thumb.style.top = ((th - kh) * (span ? top / span : 0)) + 'px';
    };
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
    if (sb.tick && !sb.running) { sb.running = true; requestAnimationFrame(sb.tick); }
    if (showing === 'contact') prefill(what);
  }
  function open(what, at) {
    from = at && typeof at.x === 'number' && typeof at.y === 'number' ? at : null;
    showing = 'contact';
    frame.style.display = 'block'; if (tip.frame) tip.frame.style.display = 'none';
    box.classList.remove('wide'); box.setAttribute('aria-label', 'Contact');
    if (!form) { wanted = what || ''; load(); return; }
    show(what);
  }
  function close() {
    if (!box) return;
    veil.classList.remove('open'); box.classList.remove('open');
    // (their thanks read: the room told — the creature's turn)
    if (tip.owed) {
      tip.owed = false;
      var p = document.querySelector('.rmi-frame');
      if (p && p.contentWindow) p.contentWindow.postMessage({ rmiTipped: true, code: !!tip.code }, PAGE);
      tip.code = false;
    }
    hiding = setTimeout(function () {
      if (box.classList.contains('open')) return;
      box.style.display = 'none';
      // (the tip jar, if it went on to pay: back to its start for next time)
      if (box.classList.contains('wide') || box.classList.contains('thanked')) {
        box.classList.remove('wide', 'thanked'); tip.paying = false; clearInterval(tip.watch);
        tip.dressed = false; tip.block = null; tip.frame.src = 'about:blank'; tip.frame.removeAttribute('src');
        if (showing === 'thanks') showing = 'tip';
      }
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
    if (!p || !p.contentWindow || !box) return;
    try { localStorage.removeItem(TIPPED); } catch (e) {}
    thank();
  }
  window.addEventListener('storage', function (e) { if (e.key === TIPPED && e.newValue) tipped(); });
  window.addEventListener('pageshow', function (e) { if (e.persisted) tipped(); });
  window.addEventListener('message', function (e) {
    if (e.origin !== PAGE || !e.data) return;
    if (e.data.rmiHello) { e.source.postMessage({ rmiContactHost: true }, PAGE); tipped(); }
    if (e.data.rmiContact) open(e.data.rmiContact.about, e.data.rmiContact.from);
    if (e.data.rmiTipJar) { tip.roomOpen = !!e.data.rmiTipJar.open; openTip(e.data.rmiTipJar.from); }
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
