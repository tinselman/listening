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
   the home page, if they came from elsewhere). */
(function () {
  var PAGE = 'https://tinselman.github.io', STYLE = PAGE + '/instruments/embed/forms.css';
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
    '@media (min-width: 1100px) and (min-height: 600px) {',
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

  function build() {
    veil = document.createElement('div'); veil.className = 'rmi-veil'; document.body.appendChild(veil);
    veil.addEventListener('click', close);                       // a click off the window closes it
    box = document.createElement('div'); box.className = 'rmi-window';
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Contact');
    frame = document.createElement('iframe'); frame.title = 'Contact';
    box.appendChild(frame); document.body.appendChild(box);
    frame.addEventListener('load', dress);
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
    if (!form) return;
    var cs = getComputedStyle(box), room = window.innerHeight - (big.matches ? 48 : 32) - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    frame.style.height = Math.max(120, Math.min(form.offsetHeight + 2, room)) + 'px';
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
    prefill(what);
  }
  function open(what, at) {
    from = at && typeof at.x === 'number' && typeof at.y === 'number' ? at : null;
    if (!form) { wanted = what || ''; load(); return; }
    show(what);
  }
  function close() {
    veil.classList.remove('open'); box.classList.remove('open');
    hiding = setTimeout(function () { if (!box.classList.contains('open')) box.style.display = 'none'; }, box.classList.contains('grow') ? 470 : 220);
  }
  window.addEventListener('message', function (e) {
    if (e.origin !== PAGE || !e.data) return;
    if (e.data.rmiHello) e.source.postMessage({ rmiContactHost: true }, PAGE);
    if (e.data.rmiContact) open(e.data.rmiContact.about, e.data.rmiContact.from);
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
