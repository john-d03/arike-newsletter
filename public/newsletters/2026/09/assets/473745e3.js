/* @ds-bundle: {"format":4,"namespace":"ArikeDesignSystem_07e9f7","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ListRow","sourcePath":"components/navigation/ListRow.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"assets/image-slot.js":"fff26d081c8d","components/core/Button.jsx":"23739fde1438","components/core/Icon.jsx":"c30eddc2d36e","components/core/IconButton.jsx":"9cbe03330dbb","components/core/Logo.jsx":"dadeb18f230c","components/display/Avatar.jsx":"0be99b6b2935","components/display/Badge.jsx":"d1add8e67775","components/display/Card.jsx":"98e949aceb5e","components/display/ProgressBar.jsx":"a9b4082c01af","components/display/Stat.jsx":"010cbbca99b4","components/display/Tag.jsx":"a6c302b87e96","components/feedback/Dialog.jsx":"ca5d0916bfd0","components/feedback/EmptyState.jsx":"b11921f3aade","components/feedback/Toast.jsx":"5297e85f571a","components/feedback/Tooltip.jsx":"9c8aaf1745cb","components/forms/Checkbox.jsx":"5a1de4aa535b","components/forms/Field.jsx":"3b17fa710817","components/forms/Input.jsx":"22297de2332a","components/forms/Radio.jsx":"7da52a65b76f","components/forms/Select.jsx":"52118bb6990e","components/forms/Switch.jsx":"63c68b16a0e8","components/forms/Textarea.jsx":"12d8c9bb39bd","components/navigation/ListRow.jsx":"ff6365e10fbd","components/navigation/NavItem.jsx":"af2f8f205786","components/navigation/TabBar.jsx":"3c8cac0bb62d","components/navigation/Tabs.jsx":"720a5e5139f0","guidelines/doc-page.js":"f52ae9c02fca","ui_kits/console/ConsoleShell.jsx":"947fceade426","ui_kits/console/views.jsx":"7746f56695a1","ui_kits/donate/DonateFlow.jsx":"81b31e2e4e1f","ui_kits/family_portal/FamilyPortal.jsx":"cc4bea1faeac","ui_kits/field_app/PhoneFrame.jsx":"d0377efd6b83","ui_kits/field_app/data.js":"74ed4f9882f2","ui_kits/field_app/screens.jsx":"b64313a678c9","ui_kits/website/AboutPage.jsx":"1af6fbfddc90","ui_kits/website/CarePage.jsx":"49c6378cc616","ui_kits/website/DonatePanel.jsx":"e7e1164c55d9","ui_kits/website/HomePage.jsx":"e211684b026c","ui_kits/website/RequestPage.jsx":"ff30770bceb3","ui_kits/website/SiteChrome.jsx":"c97bcc397428"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArikeDesignSystem_07e9f7 = window.ArikeDesignSystem_07e9f7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/image-slot.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/';

/* Icons are Lucide, loaded from CDN as masks so they inherit currentColor.
   No icon glyph is hand-drawn anywhere in this system. */
function Icon({
  name,
  size = 20,
  strokeWidth,
  color = 'currentColor',
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : 'presentation',
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: color,
      WebkitMaskImage: `url(${CDN}${name}.svg)`,
      maskImage: `url(${CDN}${name}.svg)`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Every tone draws from the page's range or from the neutrals — there is no
   off-range accent here. Hierarchy is fill → outline → text, not hue. */
const TONES = {
  primary: {
    bg: 'var(--action-primary)',
    fg: 'var(--text-on-action)',
    bd: 'transparent',
    hover: 'var(--action-primary-hover)',
    shadow: 'var(--shadow-brand)'
  },
  secondary: {
    bg: 'var(--surface-card)',
    fg: 'var(--text-heading)',
    bd: 'var(--border-default)',
    hover: 'var(--ink-100)',
    shadow: 'var(--shadow-xs)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--action-primary)',
    bd: 'var(--action-primary)',
    hover: 'var(--range-100)',
    shadow: 'none'
  },
  donate: {
    bg: 'var(--action-donate)',
    fg: 'var(--text-on-action)',
    bd: 'transparent',
    hover: 'var(--action-donate-hover)',
    shadow: 'var(--shadow-brand)'
  },
  calm: {
    bg: 'var(--range-100)',
    fg: 'var(--range-500)',
    bd: 'transparent',
    hover: 'var(--range-200)',
    shadow: 'none'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-heading)',
    bd: 'transparent',
    hover: 'var(--ink-100)',
    shadow: 'none'
  },
  danger: {
    bg: 'var(--status-urgent)',
    fg: 'var(--white)',
    bd: 'transparent',
    hover: '#A82B22',
    shadow: 'none'
  }
};
const SIZES = {
  sm: {
    pad: '8px 16px',
    font: 'var(--text-sm)',
    icon: 16,
    min: 36
  },
  md: {
    pad: '12px 22px',
    font: 'var(--text-md)',
    icon: 18,
    min: 44
  },
  lg: {
    pad: '16px 30px',
    font: 'var(--text-lg)',
    icon: 20,
    min: 52
  }
};
function Button({
  children,
  tone = 'primary',
  size = 'md',
  icon,
  iconAfter,
  block = false,
  disabled = false,
  loading = false,
  as = 'button',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const El = as;
  const off = disabled || loading;
  return /*#__PURE__*/React.createElement(El, _extends({
    disabled: El === 'button' ? off : undefined,
    "aria-busy": loading || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      minHeight: s.min,
      padding: s.pad,
      font: `var(--weight-semibold) ${s.font}/1.2 var(--font-body)`,
      color: off ? 'var(--text-subtle)' : t.fg,
      background: off ? 'var(--ink-200)' : hover ? t.hover : t.bg,
      border: `var(--border-width) solid ${off ? 'transparent' : t.bd}`,
      borderRadius: 'var(--radius-control)',
      boxShadow: off || tone === 'ghost' ? 'none' : hover ? t.shadow : 'var(--shadow-xs)',
      transform: down && !off ? 'scale(.97)' : 'scale(1)',
      cursor: off ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: s.icon,
    style: {
      animation: 'arike-spin 900ms linear infinite'
    }
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconAfter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  tone = 'ghost',
  size = 'md',
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const solid = tone === 'primary';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: d,
      height: d,
      color: disabled ? 'var(--text-subtle)' : solid ? 'var(--text-on-action)' : 'var(--text-muted)',
      background: solid ? hover ? 'var(--action-primary-hover)' : 'var(--action-primary)' : hover && !disabled ? 'var(--ink-100)' : 'transparent',
      border: tone === 'outline' ? 'var(--border-width) solid var(--border-default)' : '1px solid transparent',
      borderRadius: 'var(--radius-circle)',
      transform: down && !disabled ? 'scale(.94)' : 'scale(1)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 22 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  arike: 'ASSET_BASE/logo-arike.png',
  koottinu: 'ASSET_BASE/logo-koottinu.png',
  wordmark: 'ASSET_BASE/wordmark-arike.png'
};

/* The mark is a supplied raster. It is never redrawn, recoloured or rotated. */
function Logo({
  variant = 'arike',
  height = 40,
  withName = false,
  assetBase,
  style,
  ...rest
}) {
  const src = (SRC[variant] || SRC.arike).replace('ASSET_BASE', assetBase || '../../assets');
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Arike",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  }), withName && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Arike"), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      lineHeight: 1
    }
  }, "\u0D05\u0D30\u0D3F\u0D15\u0D46")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80
};
// In-range steps only — a stack of avatars must not turn into a petal rainbow.
// These re-map with the page under data-theme="warm".
const RING = ['var(--range-300)', 'var(--range-400)', 'var(--range-alt-400)', 'var(--cat-psychological)', 'var(--accent-highlight)'];
function Avatar({
  name = '',
  src,
  size = 'md',
  ring = false,
  style,
  ...rest
}) {
  const d = SIZES[size] || SIZES.md;
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const hue = RING[(name.length + (name.charCodeAt(0) || 0)) % RING.length];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'grid',
      placeItems: 'center',
      width: d,
      height: d,
      flex: '0 0 auto',
      background: src ? `center/cover url(${src})` : 'var(--ink-200)',
      color: 'var(--ink-700)',
      font: `var(--weight-semibold) ${Math.round(d * 0.36)}px/1 var(--font-body)`,
      borderRadius: 'var(--radius-circle)',
      boxShadow: ring ? `0 0 0 2px var(--surface-card), 0 0 0 4px ${hue}` : 'none',
      overflow: 'hidden',
      ...style
    }
  }, rest), !src && initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  stable: {
    bg: 'var(--status-stable-soft)',
    fg: 'var(--status-stable)'
  },
  watch: {
    bg: 'var(--status-watch-soft)',
    fg: 'var(--status-watch)'
  },
  urgent: {
    bg: 'var(--status-urgent-soft)',
    fg: 'var(--status-urgent)'
  },
  info: {
    bg: 'var(--status-info-soft)',
    fg: 'var(--range-alt-500)'
  },
  neutral: {
    bg: 'var(--status-neutral-soft)',
    fg: 'var(--ink-700)'
  },
  brand: {
    bg: 'var(--accent-highlight-soft)',
    fg: 'var(--yellow-700)'
  },
  accent: {
    bg: 'var(--range-100)',
    fg: 'var(--range-500)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  icon,
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '4px 10px',
      background: t.bg,
      color: t.fg,
      font: 'var(--type-caption)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: 'var(--radius-circle)',
      background: 'currentColor'
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  plain: {
    bg: 'var(--surface-card)',
    bd: 'var(--border-subtle)'
  },
  brand: {
    bg: 'var(--surface-brand-soft)',
    bd: 'var(--yellow-200)'
  },
  calm: {
    bg: 'var(--surface-calm)',
    bd: 'var(--range-200)'
  },
  accent: {
    bg: 'var(--surface-accent)',
    bd: 'transparent'
  },
  sunken: {
    bg: 'var(--surface-sunken)',
    bd: 'transparent'
  },
  inverse: {
    bg: 'var(--surface-inverse)',
    bd: 'transparent'
  }
};
function Card({
  children,
  tone = 'plain',
  pad = 'var(--gutter-card)',
  elevation = 'sm',
  interactive = false,
  accent,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.plain;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      position: 'relative',
      padding: pad,
      background: t.bg,
      color: tone === 'inverse' ? 'var(--text-inverse)' : 'var(--text-body)',
      border: `var(--border-width) solid ${t.bd}`,
      borderRadius: 'var(--radius-card)',
      boxShadow: hover ? 'var(--shadow-lg)' : `var(--shadow-${elevation})`,
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
      overflow: 'hidden',
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '0 0 auto 0',
      height: 4,
      background: accent
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'var(--action-primary)',
  label,
  height = 10,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data)',
      color: 'var(--text-heading)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height,
      background: 'var(--ink-200)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: tone,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  labelMl,
  icon,
  tint = 'var(--accent-highlight)',
  align = 'start',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      justifyItems: align,
      textAlign: align === 'center' ? 'center' : 'left',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 44,
      height: 44,
      background: tint,
      borderRadius: 'var(--radius-circle)',
      marginBottom: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "var(--ink-900)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-extrabold) var(--text-3xl)/1 var(--font-display)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, label), labelMl && /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, labelMl));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  color = 'var(--range-400)',
  onRemove,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '5px 12px',
      font: 'var(--type-caption)',
      color: 'var(--ink-800)',
      background: 'var(--surface-card)',
      border: `var(--border-width) solid var(--border-subtle)`,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-circle)',
      background: color
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 18,
      height: 18,
      marginRight: -4,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-subtle)',
      borderRadius: 'var(--radius-circle)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 460,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 'var(--z-overlay)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)',
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-overlay)',
      animation: 'arike-rise var(--duration-base) var(--ease-out)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      flex: 1,
      font: 'var(--type-h3)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose,
    style: {
      marginTop: -6,
      marginRight: -8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-6)',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  icon = 'inbox',
  title,
  children,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-10) var(--space-6)',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 64,
      height: 64,
      background: 'var(--surface-calm)',
      borderRadius: 'var(--radius-circle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: "var(--teal-600)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      maxWidth: '38ch'
    }
  }, children), action && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    icon: 'check-circle',
    fg: 'var(--status-stable)'
  },
  error: {
    icon: 'alert-circle',
    fg: 'var(--status-urgent)'
  },
  info: {
    icon: 'info',
    fg: 'var(--sky-500)'
  }
};
function Toast({
  children,
  tone = 'success',
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-5)',
      maxWidth: 420,
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      font: 'var(--type-body-sm)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)',
      animation: 'arike-rise var(--duration-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    color: t.fg
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--ink-400)',
      cursor: 'pointer',
      padding: 0,
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  placement = 'top',
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, rest), children, on && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      padding: '6px 10px',
      background: 'var(--ink-900)',
      color: 'var(--white)',
      font: 'var(--type-caption)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      whiteSpace: 'nowrap',
      zIndex: 'var(--z-raised)',
      animation: 'arike-rise var(--duration-fast) var(--ease-out)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const on = !!checked;
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 'var(--tap-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: on,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 22,
      height: 22,
      flex: '0 0 auto',
      background: on ? 'var(--action-primary)' : 'var(--surface-card)',
      border: `var(--border-width-thick) solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-xs)',
      transition: 'var(--transition-control)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--text-on-action)"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  labelMl,
  hint,
  error,
  required,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-urgent)'
    }
  }, " *")), labelMl && /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, labelMl)), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: error ? 'var(--status-urgent)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  invalid,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%',
    minHeight: 'var(--tap-min)',
    padding: '12px 14px',
    font: 'var(--type-body-sm)',
    color: 'var(--text-body)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
    border: `var(--border-width) solid ${invalid ? 'var(--status-urgent)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-input)',
    boxShadow: focus ? 'var(--ring-focus)' : 'var(--shadow-inner)',
    outline: 'none',
    transition: 'var(--transition-control)'
  };
  const input = /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: icon ? {
      ...field,
      border: 'none',
      boxShadow: 'none',
      background: 'transparent',
      paddingLeft: 0,
      ...style
    } : {
      ...field,
      ...style
    }
  }, rest));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...field,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--text-subtle)"
  }), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled,
  style,
  ...rest
}) {
  const on = !!checked;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      background: on ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
      border: `var(--border-width-thick) solid ${on ? 'var(--border-brand)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 20,
      height: 20,
      marginTop: 2,
      flex: '0 0 auto',
      border: `var(--border-width-thick) solid ${on ? 'var(--yellow-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--surface-card)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--yellow-500)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  invalid,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%',
    minHeight: 'var(--tap-min)',
    padding: '12px 14px',
    font: 'var(--type-body-sm)',
    color: 'var(--text-body)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
    border: `var(--border-width) solid ${invalid ? 'var(--status-urgent)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-input)',
    boxShadow: focus ? 'var(--ring-focus)' : 'var(--shadow-inner)',
    outline: 'none',
    transition: 'var(--transition-control)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...field,
      display: 'flex',
      alignItems: 'center',
      padding: '0 14px'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minHeight: 'var(--tap-min)',
      border: 'none',
      background: 'transparent',
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      outline: 'none',
      appearance: 'none',
      cursor: 'pointer',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-subtle)"
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const on = !!checked;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 'var(--tap-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: 46,
      height: 28,
      flex: '0 0 auto',
      background: on ? 'var(--status-stable)' : 'var(--ink-300)',
      borderRadius: 'var(--radius-pill)',
      transition: 'background-color var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 22,
      height: 22,
      background: 'var(--white)',
      borderRadius: 'var(--radius-circle)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid,
  disabled,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%',
    minHeight: 'var(--tap-min)',
    padding: '12px 14px',
    font: 'var(--type-body-sm)',
    color: 'var(--text-body)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
    border: `var(--border-width) solid ${invalid ? 'var(--status-urgent)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-input)',
    boxShadow: focus ? 'var(--ring-focus)' : 'var(--shadow-inner)',
    outline: 'none',
    transition: 'var(--transition-control)'
  };
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...field,
      minHeight: undefined,
      lineHeight: 'var(--leading-relaxed)',
      resize: 'vertical',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ListRow({
  leading,
  title,
  titleMl,
  subtitle,
  meta,
  trailing,
  chevron = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: clickable ? 'button' : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) var(--space-5)',
      minHeight: 64,
      background: clickable && hover ? 'var(--ink-050)' : 'transparent',
      borderBottom: 'var(--border-width) solid var(--border-subtle)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'background-color var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), leading, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)',
      font: 'var(--type-label)',
      color: 'var(--text-heading)'
    }
  }, title, titleMl && /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, titleMl)), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, subtitle)), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data)',
      color: 'var(--text-muted)'
    }
  }, meta), trailing, chevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--text-subtle)"
  }));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavItem({
  icon,
  label,
  active = false,
  badge,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-current": active ? 'page' : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width: '100%',
      minHeight: 44,
      padding: '10px 14px',
      font: `var(--weight-${active ? 'semibold' : 'medium'}) var(--text-sm)/1.2 var(--font-body)`,
      color: active ? 'var(--ink-900)' : 'var(--text-muted)',
      background: active ? 'var(--surface-brand-soft)' : hover ? 'var(--ink-100)' : 'transparent',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textAlign: 'left',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: active ? 'var(--yellow-600)' : 'currentColor'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      color: 'var(--ink-800)',
      background: 'var(--yellow-300)',
      padding: '2px 7px',
      borderRadius: 'var(--radius-pill)'
    }
  }, badge));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TabBar({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      padding: 'var(--space-2) var(--space-2) var(--space-3)',
      background: 'var(--surface-card)',
      borderTop: 'var(--border-width) solid var(--border-subtle)',
      ...style
    }
  }, rest), items.map(t => {
    const on = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      style: {
        display: 'grid',
        justifyItems: 'center',
        gap: 5,
        minHeight: 'var(--tap-min)',
        padding: '8px 4px',
        border: 'none',
        background: 'transparent',
        color: on ? 'var(--ink-900)' : 'var(--text-subtle)',
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        width: 44,
        height: 26,
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--yellow-200)' : 'transparent',
        transition: 'background-color var(--duration-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `var(--weight-${on ? 'semibold' : 'medium'}) var(--text-2xs)/1 var(--font-body)`
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const norm = items.map(i => typeof i === 'string' ? {
    value: i,
    label: i
  } : i);
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: pill ? 'var(--space-2)' : 'var(--space-6)',
      alignItems: 'center',
      padding: pill ? 'var(--space-1)' : 0,
      background: pill ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: pill ? 'var(--radius-pill)' : 0,
      borderBottom: pill ? 'none' : 'var(--border-width) solid var(--border-subtle)',
      overflowX: 'auto',
      ...style
    }
  }, rest), norm.map(t => {
    const on = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: pill ? '9px 18px' : '0 0 12px',
        font: `var(--weight-${on ? 'bold' : 'medium'}) var(--text-sm)/1.2 var(--font-body)`,
        color: on ? 'var(--text-heading)' : 'var(--text-muted)',
        background: pill && on ? 'var(--surface-card)' : 'transparent',
        border: 'none',
        borderRadius: pill ? 'var(--radius-pill)' : 0,
        boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
        borderBottom: pill ? 'none' : `3px solid ${on ? 'var(--action-primary)' : 'transparent'}`,
        marginBottom: pill ? 0 : -1,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'var(--transition-control)'
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-subtle)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// guidelines/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleShell.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
function Sidebar({
  view,
  setView
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flex: '0 0 auto',
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 38,
    withName: true,
    assetBase: "../../assets"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '0 var(--space-3)',
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "layout-dashboard",
    label: "Today",
    active: view === 'today',
    onClick: () => setView('today')
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "users",
    label: "Patients",
    badge: 94,
    active: view === 'patients',
    onClick: () => setView('patients')
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "siren",
    label: "Escalations",
    badge: 3,
    active: view === 'escalations',
    onClick: () => setView('escalations')
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "calendar-check",
    label: "Rosters",
    active: view === 'rosters',
    onClick: () => setView('rosters')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-3)',
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      padding: '0 14px 6px'
    }
  }, "Routes"), [['Aluva', 'Sr. Liji Thomas', 6], ['Kalamassery', 'Sr. Anila Kurian', 5], ['Kakkanad', 'Sr. Beena Jose', 7]].map(([w, n, c]) => /*#__PURE__*/React.createElement(NavItem, {
    key: w,
    icon: "map-pin",
    label: w,
    badge: c,
    onClick: () => setView('patients')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 'var(--space-5)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Vinod Chandran",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 1,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Vinod Chandran"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "Care coordinator")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    label: "Settings",
    size: "sm"
  })));
}
function TopBar({
  title,
  subtitle,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-6) var(--space-7)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h2)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, subtitle)), actions);
}
Object.assign(window, {
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/views.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
const S = window.ARIKE_STATUS_LABEL;
const P = () => window.ARIKE_PATIENTS;
function TodayView({
  open
}) {
  const [tab, setTab] = React.useState('visits');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.TopBar, {
    title: "Today",
    subtitle: "Monday, 16 September \xB7 18 visits scheduled across three routes",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      tone: "secondary",
      icon: "download",
      size: "sm"
    }, "Export day"), /*#__PURE__*/React.createElement(Button, {
      tone: "primary",
      icon: "plus",
      size: "sm"
    }, "Register patient"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-7)',
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "18",
    label: "visits scheduled",
    icon: "calendar-check",
    tint: "var(--teal-200)"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "11",
    label: "visits completed",
    icon: "check",
    tint: "var(--yellow-200)"
  })), /*#__PURE__*/React.createElement(Card, {
    accent: "var(--status-urgent)"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "3",
    label: "open escalations",
    icon: "siren",
    tint: "var(--status-urgent-soft)"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "94",
    label: "patients on the register",
    icon: "users",
    tint: "var(--sky-200)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) var(--space-5) var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-h3)'
    }
  }, "Visits in progress"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ['All', 'Aluva', 'Kakkanad'],
    value: tab === 'visits' ? 'All' : tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", null, P().map((p, i, a) => /*#__PURE__*/React.createElement(ListRow, {
    key: p.id,
    leading: /*#__PURE__*/React.createElement(Avatar, {
      name: p.name,
      ring: true
    }),
    title: p.name,
    titleMl: p.ml,
    subtitle: `${p.ward} · ${p.dx} · Sr. Liji Thomas`,
    meta: p.time,
    trailing: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, i < 2 ? /*#__PURE__*/React.createElement(Badge, {
      tone: "stable",
      icon: "check"
    }, "Done") : /*#__PURE__*/React.createElement(Badge, {
      tone: p.status,
      dot: true
    }, S[p.status])),
    chevron: true,
    onClick: () => open(p),
    style: i === a.length - 1 ? {
      borderBottom: 'none'
    } : undefined
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "Needs a doctor"), [['Ayesha Beevi', 'SpO₂ 88% · breathless 2 days', 'urgent'], ['Radhamani K.', 'Pain 5/10 despite dose increase', 'watch'], ['Thomas Varghese', 'Requesting a will conversation', 'watch']].map(([n, r, t]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      paddingBottom: 'var(--space-3)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "siren",
    size: 18,
    color: `var(--status-${t})`,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, r)), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Start teleconsult"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "video",
    label: "Teleconsult",
    size: "sm",
    tone: "outline"
  })))), /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    block: true,
    size: "sm"
  }, "See all escalations")), /*#__PURE__*/React.createElement(Card, {
    tone: "calm",
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Nurses on the road"), [['Liji Thomas', 'Aluva', '4 of 6'], ['Anila Kurian', 'Kalamassery', '3 of 5'], ['Beena Jose', 'Kakkanad', '4 of 7']].map(([n, w, p]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Sr. ", n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, w)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data)',
      color: 'var(--text-muted)'
    }
  }, p))))))));
}
function PatientsView({
  open
}) {
  const [q, setQ] = React.useState('');
  const [filter, setFilter] = React.useState('All');
  const rows = P().filter(p => (filter === 'All' || S[p.status] === filter) && p.name.toLowerCase().includes(q.toLowerCase()));
  const th = {
    textAlign: 'left',
    padding: '12px 16px',
    font: 'var(--type-overline)',
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    color: 'var(--text-subtle)',
    borderBottom: '1px solid var(--border-default)',
    whiteSpace: 'nowrap'
  };
  const td = {
    padding: '14px 16px',
    borderBottom: '1px solid var(--border-subtle)',
    font: 'var(--type-body-sm)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.TopBar, {
    title: "Patients",
    subtitle: "94 people on the register across Ernakulam",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      tone: "secondary",
      icon: "filter",
      size: "sm"
    }, "Filters"), /*#__PURE__*/React.createElement(Button, {
      tone: "primary",
      icon: "plus",
      size: "sm"
    }, "Register patient"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-7)',
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search name or MRN",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ['All', 'Urgent', 'Watch', 'Stable'],
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Patient"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "MRN"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Ward"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Diagnosis"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Care"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Next visit"), /*#__PURE__*/React.createElement("th", {
    style: th
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(p => /*#__PURE__*/React.createElement("tr", {
    key: p.id,
    onClick: () => open(p),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: "sm",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--text-muted)'
    }
  }, p.ml, " \xB7 ", p.age)))), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      font: 'var(--type-data)',
      color: 'var(--text-muted)'
    }
  }, p.mrn), /*#__PURE__*/React.createElement("td", {
    style: td
  }, p.ward), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: 'var(--text-muted)'
    }
  }, p.dx), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    title: t,
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: `var(--cat-${t})`
    }
  })))), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.status,
    dot: true
  }, S[p.status])), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      font: 'var(--type-data)',
      color: 'var(--text-muted)'
    }
  }, p.time), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--text-subtle)"
  })))))), !rows.length && /*#__PURE__*/React.createElement(EmptyState, {
    icon: "search",
    title: "No patients match"
  }, "Clear the filter, or search by MRN."))));
}
function EscalationsView() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.TopBar, {
    title: "Escalations",
    subtitle: "Three open. Dr. Rejani Menon is on call until 9pm.",
    actions: /*#__PURE__*/React.createElement(Button, {
      tone: "primary",
      icon: "video",
      size: "sm"
    }, "Start teleconsult")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-7)',
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start'
    }
  }, [['Ayesha Beevi', 'ആയിഷ', 'Kalamassery', 'urgent', '11:52', 'SpO₂ 88% on 2L oxygen, breathless for two days. Son asking about hospital admission. Please advise on increasing oxygen and whether to admit.', 'Sr. Anila Kurian'], ['Radhamani K.', 'രാധാമണി', 'Kakkanad', 'watch', '10:20', 'Pain 5/10 despite morphine increase on the 9th. Requesting review of the ladder.', 'Sr. Beena Jose'], ['Thomas Varghese', 'തോമസ്', 'Kalamassery', 'watch', '09:05', 'Patient wants to discuss his will and where he wants to die. Requesting a counsellor visit, not clinical.', 'Sr. Liji Thomas']].map(([n, ml, w, t, time, body, nurse]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    accent: `var(--status-${t})`,
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "lg",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--text-muted)'
    }
  }, ml)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, w, " \xB7 raised by ", nurse, " at ", time)), /*#__PURE__*/React.createElement(Badge, {
    tone: t,
    dot: true
  }, t === 'urgent' ? 'Urgent' : 'Watch')), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      maxWidth: '78ch'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    size: "sm",
    icon: "video"
  }, "Teleconsult now"), /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    size: "sm",
    icon: "phone"
  }, "Call the nurse"), /*#__PURE__*/React.createElement(Button, {
    tone: "ghost",
    size: "sm",
    icon: "notebook-pen"
  }, "Add advice"))))));
}
function RostersView() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const nurses = [['Liji Thomas', 'Aluva'], ['Anila Kurian', 'Kalamassery'], ['Beena Jose', 'Kakkanad'], ['Seena Paul', 'Tripunithura']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.TopBar, {
    title: "Rosters",
    subtitle: "Week of 16 September \xB7 six working days, Sundays on call only",
    actions: /*#__PURE__*/React.createElement(Button, {
      tone: "secondary",
      icon: "download",
      size: "sm"
    }, "Export roster")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px repeat(6, 1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: '1px solid var(--border-default)',
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Nurse"), days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      padding: 'var(--space-4)',
      borderBottom: '1px solid var(--border-default)',
      borderLeft: '1px solid var(--border-subtle)',
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, d)), nurses.map(([n, w]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Sr. ", n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, w))), days.map((d, i) => {
    const count = [6, 5, 7, 4, 6, 3][(n.length + i) % 6];
    const off = i === 3 && n === 'Beena Jose';
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        padding: 'var(--space-3)',
        borderBottom: '1px solid var(--border-subtle)',
        borderLeft: '1px solid var(--border-subtle)',
        display: 'grid',
        placeItems: 'center'
      }
    }, off ? /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Leave") : /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        gap: 3,
        justifyItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) var(--text-lg)/1 var(--font-mono)',
        color: 'var(--text-heading)'
      }
    }, count), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-overline)',
        color: 'var(--text-subtle)'
      }
    }, "visits")));
  })))))));
}

/* Patient detail drawer */
function PatientDrawer({
  patient,
  onClose
}) {
  const p = patient;
  const CAT = {
    physical: 'Physical',
    psychological: 'Psychological',
    social: 'Social',
    spiritual: 'Spiritual'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-overlay)',
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-overlay)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 520,
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column',
      animation: 'arike-rise var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: "xl",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--text-muted)'
    }
  }, p.ml)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p.age, " \xB7 ", p.ward, " \xB7 ", p.dx), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data)',
      color: 'var(--text-subtle)'
    }
  }, p.mrn)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-6)',
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.status,
    dot: true
  }, S[p.status]), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Free care"), p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    color: `var(--cat-${t})`
  }, CAT[t]))), /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Latest vitals \xB7 12 Sep"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)'
    }
  }, [['BP', p.vitals.bp], ['Pulse', p.vitals.pulse], ['SpO₂', p.vitals.spo2], ['Pain', p.vitals.pain]].map(([l, v]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--text-lg)/1 var(--font-mono)',
      color: 'var(--text-heading)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Last note"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p.note))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Visit history"), /*#__PURE__*/React.createElement(Card, {
    pad: "0"
  }, [['12 Sep', 'Nursing visit', 'Sr. Liji Thomas'], ['09 Sep', 'Teleconsult', 'Dr. Rejani Menon'], ['05 Sep', 'Nursing visit', 'Sr. Liji Thomas'], ['28 Aug', 'First assessment', 'Sr. Anila Kurian']].map(([d, t, by], i, a) => /*#__PURE__*/React.createElement(ListRow, {
    key: d,
    title: t,
    subtitle: by,
    meta: d,
    style: i === a.length - 1 ? {
      borderBottom: 'none'
    } : undefined
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-5) var(--space-6)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    icon: "phone"
  }, "Call family"), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    block: true,
    icon: "calendar-check"
  }, "Schedule a visit"))));
}
Object.assign(window, {
  TodayView,
  PatientsView,
  EscalationsView,
  RostersView,
  PatientDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/views.jsx", error: String((e && e.message) || e) }); }

// ui_kits/donate/DonateFlow.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
const AMOUNTS = [{
  v: '1000',
  label: '₹1,000',
  desc: 'One nursing visit, medicines included'
}, {
  v: '2000',
  label: '₹2,000',
  desc: 'A month of visits for one patient who pays nothing'
}, {
  v: '5000',
  label: '₹5,000',
  desc: 'A month of care for a family, including equipment'
}, {
  v: '12000',
  label: '₹12,000',
  desc: 'Six months of care for one patient'
}];
function StepDots({
  step
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, ['Amount', 'Your details', 'Payment'].map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-circle)',
      background: i <= step ? 'var(--action-donate)' : 'var(--ink-200)',
      color: i <= step ? 'var(--white)' : 'var(--text-subtle)',
      font: 'var(--weight-bold) var(--text-xs) var(--font-mono)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-${i === step ? 'bold' : 'medium'}) var(--text-sm) var(--font-body)`,
      color: i === step ? 'var(--text-heading)' : 'var(--text-subtle)'
    }
  }, l)), i < 2 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 2,
      background: i < step ? 'var(--action-donate)' : 'var(--ink-200)'
    }
  }))));
}
function DonateFlow() {
  const [step, setStep] = React.useState(0);
  const [amt, setAmt] = React.useState('2000');
  const [monthly, setMonthly] = React.useState(true);
  const [method, setMethod] = React.useState('upi');
  const [anon, setAnon] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const chosen = AMOUNTS.find(a => a.v === amt);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '14px var(--gutter-page)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 38,
    withName: true,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    icon: "shield-check"
  }, "Secure \xB7 80G approved"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter-page)',
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)'
    }
  }, step === 3 ? 'Thank you' : 'Fund a family\u2019s care'), step < 3 && /*#__PURE__*/React.createElement(StepDots, {
    step: step
  })), step === 0 && /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-7)",
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      padding: 4,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)'
    }
  }, [['Monthly', true], ['One time', false]].map(([l, v]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setMonthly(v),
    style: {
      flex: 1,
      minHeight: 42,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: monthly === v ? 'var(--surface-card)' : 'transparent',
      boxShadow: monthly === v ? 'var(--shadow-xs)' : 'none',
      font: `var(--weight-${monthly === v ? 'bold' : 'medium'}) var(--text-md) var(--font-body)`,
      color: monthly === v ? 'var(--text-heading)' : 'var(--text-muted)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, AMOUNTS.map(a => /*#__PURE__*/React.createElement(Radio, {
    key: a.v,
    name: "amt",
    value: a.v,
    label: monthly ? `${a.label} / month` : a.label,
    description: a.desc,
    checked: amt === a.v,
    onChange: () => setAmt(a.v)
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Other amount",
    hint: "Any amount helps. \u20B9600 covers one home visit's travel and dressings."
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "indian-rupee",
    placeholder: "Enter an amount"
  })), /*#__PURE__*/React.createElement(Button, {
    tone: "donate",
    size: "lg",
    block: true,
    iconAfter: "arrow-right",
    onClick: () => setStep(1)
  }, "Continue")), step === 1 && /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-7)",
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    required: true,
    htmlFor: "dn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "dn",
    placeholder: "As it should appear on the receipt"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    required: true,
    htmlFor: "de"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "de",
    type: "email",
    icon: "mail",
    placeholder: "you@email.com"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    htmlFor: "dp"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "dp",
    icon: "phone",
    placeholder: "98470 12345"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "PAN",
    hint: "Needed for an 80G receipt",
    htmlFor: "dpan"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "dpan",
    placeholder: "ABCDE1234F"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "A message to the family",
    hint: "Optional. We read these out on visits."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 2,
    placeholder: "Thinking of you."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    id: "an",
    label: "Keep my gift anonymous",
    checked: anon,
    onChange: e => setAnon(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    icon: "arrow-left",
    onClick: () => setStep(0)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    tone: "donate",
    block: true,
    iconAfter: "arrow-right",
    onClick: () => setStep(2)
  }, "Continue to payment"))), step === 2 && /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-7)",
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "m",
    value: "upi",
    label: "UPI",
    description: "GPay, PhonePe, Paytm or any UPI app",
    checked: method === 'upi',
    onChange: () => setMethod('upi')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "m",
    value: "card",
    label: "Card",
    description: "Visa, Mastercard, RuPay",
    checked: method === 'card',
    onChange: () => setMethod('card')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "m",
    value: "nach",
    label: "Bank mandate (e-NACH)",
    description: "Best for monthly gifts \u2014 no reminders needed",
    checked: method === 'nach',
    onChange: () => setMethod('nach')
  })), method === 'card' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Card number",
    htmlFor: "cc"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cc",
    icon: "credit-card",
    placeholder: "4242 4242 4242 4242"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Expiry"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "MM / YY"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "CVV"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "123"
  })))), method === 'upi' && /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 22,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "You will be sent to your UPI app to approve ", monthly ? 'a monthly' : 'this', " payment of ", chosen.label, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    icon: "arrow-left",
    onClick: () => setStep(1)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    tone: "donate",
    size: "lg",
    block: true,
    icon: "lock",
    onClick: () => {
      setStep(3);
      setToast(true);
    }
  }, "Pay ", chosen.label))), step === 3 && /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "hand-heart",
    title: `${chosen.label}${monthly ? ' a month' : ''}, set up`,
    action: /*#__PURE__*/React.createElement(Button, {
      tone: "secondary",
      onClick: () => setStep(0)
    }, "Give again")
  }, "Your 80G receipt is on its way to your email. Every quarter we will write to you about the families your gift reached \u2014 plainly, with numbers, no newsletter."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      position: 'sticky',
      top: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Your gift today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-extrabold) var(--text-4xl)/1 var(--font-display)',
      color: 'var(--action-donate)'
    }
  }, chosen.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, monthly ? '/ month' : 'once')), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, chosen.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 18.4,
    max: 30,
    label: "This month's care fund",
    tone: "var(--action-donate)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, "\u20B918.4 lakh of \u20B930 lakh \xB7 342 donors")), /*#__PURE__*/React.createElement(Card, {
    tone: "calm",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 22,
    color: "var(--teal-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Where it goes"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "78 paise of every rupee reaches patient care directly. 8 paise is administration. We publish this every year.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "donate-aside",
    shape: "rect",
    placeholder: "Photo: nurse and patient's hands, warm light"
  })))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 'var(--z-toast)'
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    onClose: () => setToast(false)
  }, "Payment received \u2014 receipt sent")));
}
Object.assign(window, {
  DonateFlow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/donate/DonateFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/family_portal/FamilyPortal.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
function PortalHeader({
  tab,
  setTab
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 'var(--z-sticky)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: 'var(--space-4) var(--gutter-page) 0',
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 38,
    withName: true,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    icon: "shield-check"
  }, "Free care"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    tone: "outline"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Bindu Rajan",
    ring: true
  })), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: 'care',
      label: 'Care'
    }, {
      value: 'visits',
      label: 'Visits'
    }, {
      value: 'messages',
      label: 'Messages',
      count: 2
    }, {
      value: 'help',
      label: 'Help'
    }],
    value: tab,
    onChange: setTab
  })));
}
function CareTab({
  onMessage
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    pad: "var(--space-7)",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--ink-700)'
    }
  }, "Next visit"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h2)'
    }
  }, "Thursday, 19 September \xB7 10:30 am"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-700)'
    }
  }, "Sr. Liji Thomas will visit Amma at home. She will bring dressings and review the pain medicine."), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--ink-700)'
    }
  }, "\u0D05\u0D1F\u0D41\u0D24\u0D4D\u0D24 \u0D38\u0D28\u0D4D\u0D26\u0D30\u0D4D\u200D\u0D36\u0D28\u0D02")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      justifyItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    icon: "phone"
  }, "Call the nurse"), /*#__PURE__*/React.createElement(Button, {
    tone: "ghost",
    icon: "calendar-check"
  }, "Ask to change"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Sulekha Devi",
    size: "xl",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 4,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "Sulekha Devi"), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--text-muted)'
    }
  }, "\u0D38\u0D41\u0D32\u0D47\u0D16")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "72 \xB7 Aluva \xB7 under Arike's care since 28 August"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "What the care plan covers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, [['physical', 'Pain relief, reviewed every visit'], ['physical', 'Syringe driver, changed by the nurse'], ['psychological', 'Someone to talk to, for Amma and for you'], ['social', 'Help applying for the disability pension']].map(([k, t], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: `var(--cat-${k})`,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)'
    }
  }, t))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Medicines at home"), /*#__PURE__*/React.createElement(Card, {
    pad: "0",
    tone: "sunken",
    style: {
      overflow: 'hidden'
    }
  }, [['Morphine 10 mg', 'Two times a day, and if the pain is bad', '14 left'], ['Lactulose 15 ml', 'At night', '8 days left'], ['Pantoprazole 40 mg', 'Morning, before food', '21 left']].map(([n, d, left], i, a) => /*#__PURE__*/React.createElement(ListRow, {
    key: n,
    title: n,
    subtitle: d,
    meta: left,
    style: {
      background: 'transparent',
      ...(i === a.length - 1 ? {
        borderBottom: 'none'
      } : {})
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    tone: "calm",
    size: "sm",
    icon: "pill",
    style: {
      justifySelf: 'start'
    }
  }, "Ask for a refill"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "calm",
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 24,
    color: "var(--teal-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "If things get worse"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Call 0484 240 1234 at any hour. A nurse or the on-call doctor will answer. You do not need to wait for the next visit."), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    block: true,
    icon: "phone"
  }, "Call Arike now")), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Your care team"), [['Liji Thomas', 'Nurse · visits every Thursday'], ['Rejani Menon', 'Doctor · on teleconsult'], ['Fathima Rasheed', 'Counsellor']].map(([n, r]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, n.startsWith('Rejani') ? 'Dr. ' : 'Sr. ', n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, r)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "message-circle",
    label: `Message ${n}`,
    size: "sm",
    onClick: onMessage
  })))))));
}
function VisitsTab() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "calm",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 24,
    color: "var(--teal-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-md)'
    }
  }, "Thursday, 19 September \xB7 10:30 am"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "Sr. Liji Thomas \xB7 nursing visit")), /*#__PURE__*/React.createElement(Badge, {
    tone: "info",
    dot: true
  }, "Scheduled")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Past visits"), [['12 September', 'Nursing visit', 'Sr. Liji Thomas', 'Pain was better than last week. Dressing changed. I showed Bindu how to reset the syringe driver.'], ['9 September', 'Teleconsult', 'Dr. Rejani Menon', 'Morphine increased to 10 mg twice a day. Review in a week.'], ['5 September', 'Nursing visit', 'Sr. Liji Thomas', 'Syringe driver started. Amma slept through the night for the first time in a fortnight.'], ['28 August', 'First assessment', 'Sr. Anila Kurian', 'Registered with Arike. Care is free — no fee was assessed for the family.']].map(([d, t, by, note]) => /*#__PURE__*/React.createElement(Card, {
    key: d,
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-md)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data)',
      color: 'var(--text-muted)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: by.replace(/^(Dr\.|Sr\.)\s/, ''),
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, by))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, note)))));
}
function MessagesTab() {
  const [msgs, setMsgs] = React.useState([{
    from: 'them',
    who: 'Sr. Liji Thomas',
    t: '12 Sep, 4:10 pm',
    body: 'I have noted the pain score. If Amma needs an extra dose tonight, give it and tell me tomorrow.'
  }, {
    from: 'me',
    who: 'You',
    t: '12 Sep, 8:32 pm',
    body: 'She slept better. We did not need the extra dose.'
  }, {
    from: 'them',
    who: 'Sr. Liji Thomas',
    t: '13 Sep, 9:05 am',
    body: 'Good. I will bring fresh dressings on Thursday. Keep the old ones for me to see.'
  }]);
  const [draft, setDraft] = React.useState('');
  const send = () => {
    if (!draft.trim()) return;
    setMsgs(m => [...m, {
      from: 'me',
      who: 'You',
      t: 'Just now',
      body: draft
    }]);
    setDraft('');
  };
  return /*#__PURE__*/React.createElement(Card, {
    pad: "0",
    style: {
      display: 'grid',
      gridTemplateRows: '1fr auto',
      height: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      overflowY: 'auto',
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start'
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gap: 5,
      justifyItems: m.from === 'me' ? 'end' : 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, m.who, " \xB7 ", m.t), /*#__PURE__*/React.createElement("span", {
    style: {
      maxWidth: '62%',
      padding: 'var(--space-4) var(--space-5)',
      font: 'var(--type-body-sm)',
      background: m.from === 'me' ? 'var(--surface-brand-soft)' : 'var(--surface-sunken)',
      color: 'var(--text-body)',
      borderRadius: 'var(--radius-lg)',
      borderTopRightRadius: m.from === 'me' ? 4 : 'var(--radius-lg)',
      borderTopLeftRadius: m.from === 'me' ? 'var(--radius-lg)' : 4
    }
  }, m.body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-5)',
      borderTop: '1px solid var(--border-subtle)',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 2,
    placeholder: "Write to Sr. Liji\u2026",
    value: draft,
    onChange: e => setDraft(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    icon: "send",
    onClick: send
  }, "Send")));
}
function HelpTab() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, [['What do I do if the pain gets worse at night?', 'Give the extra dose the nurse has written on the medicine chart, and call 0484 240 1234. Someone answers at every hour.'], ['Can I ask for a visit sooner?', 'Yes. Message your nurse or call the office. We will not ask you to justify it.'], ['Does Arike charge us anything?', 'Your family was assessed as free care on 28 August. You will never be billed. If your situation changes, tell us.'], ['What happens if Amma has to go to hospital?', 'Call us first if you can. We will talk it through and, if admission is right, help you arrange it.']].map(([q, a]) => /*#__PURE__*/React.createElement(Card, {
    key: q,
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-md)'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, a)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 24,
    color: "var(--accent-highlight)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--white)'
    }
  }, "0484 240 1234"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-300)'
    }
  }, "Any hour, any day. Malayalam, English or Tamil.")), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Looking after yourself"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Carers get tired, and that is not a failing. Our counsellor can see you on your own \u2014 Amma does not have to be part of it."), /*#__PURE__*/React.createElement(Button, {
    tone: "calm",
    size: "sm",
    style: {
      justifySelf: 'start'
    }
  }, "Ask for a carer visit"))));
}
function FamilyPortal() {
  const [tab, setTab] = React.useState('care');
  const Body = {
    care: CareTab,
    visits: VisitsTab,
    messages: MessagesTab,
    help: HelpTab
  }[tab];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PortalHeader, {
    tab: tab,
    setTab: setTab
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter-page) var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement(Body, {
    onMessage: () => setTab('messages')
  })));
}
Object.assign(window, {
  FamilyPortal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/family_portal/FamilyPortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field_app/PhoneFrame.jsx
try { (() => {
function PhoneFrame({
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 780,
      background: 'var(--ink-900)',
      borderRadius: 46,
      padding: 10,
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--surface-page)',
      borderRadius: 38,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px 4px',
      font: 'var(--weight-semibold) 13px var(--font-body)',
      color: 'var(--ink-900)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(window.DSIcon, {
    name: "signal",
    size: 14
  }), /*#__PURE__*/React.createElement(window.DSIcon, {
    name: "wifi",
    size: 14
  }), /*#__PURE__*/React.createElement(window.DSIcon, {
    name: "battery-full",
    size: 16
  }))), children)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, label));
}
Object.assign(window, {
  PhoneFrame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field_app/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field_app/data.js
try { (() => {
window.ARIKE_PATIENTS = [{
  id: 'p1',
  name: 'Sulekha Devi',
  ml: 'സുലേഖ',
  age: 72,
  ward: 'Aluva',
  time: '09:30',
  status: 'watch',
  dx: 'Carcinoma stomach',
  tags: ['physical', 'psychological'],
  note: 'Pain better controlled since Tuesday. Daughter managing the syringe driver well.',
  mrn: 'MRN-04182',
  vitals: {
    bp: '124/78',
    pulse: '88',
    spo2: '96%',
    pain: '4/10'
  }
}, {
  id: 'p2',
  name: 'Kunjumon P.',
  ml: 'കുഞ്ഞുമോന്‍',
  age: 68,
  ward: 'Aluva',
  time: '10:45',
  status: 'stable',
  dx: 'Post-CVA, bedridden',
  tags: ['physical', 'social'],
  note: 'Bed sore on sacrum healing. Wife needs a new air bed.',
  mrn: 'MRN-03911',
  vitals: {
    bp: '138/84',
    pulse: '76',
    spo2: '97%',
    pain: '2/10'
  }
}, {
  id: 'p3',
  name: 'Ayesha Beevi',
  ml: 'ആയിഷ',
  age: 81,
  ward: 'Kalamassery',
  time: '12:15',
  status: 'urgent',
  dx: 'COPD, on home oxygen',
  tags: ['physical', 'spiritual'],
  note: 'Breathlessness worse for two days. Son asking about hospital.',
  mrn: 'MRN-04520',
  vitals: {
    bp: '148/90',
    pulse: '104',
    spo2: '88%',
    pain: '3/10'
  }
}, {
  id: 'p4',
  name: 'Thomas Varghese',
  ml: 'തോമസ്',
  age: 59,
  ward: 'Kalamassery',
  time: '14:00',
  status: 'stable',
  dx: 'Motor neurone disease',
  tags: ['physical', 'psychological', 'spiritual'],
  note: 'Speech harder this week. Wants to talk about the will.',
  mrn: 'MRN-04033',
  vitals: {
    bp: '118/72',
    pulse: '80',
    spo2: '95%',
    pain: '1/10'
  }
}, {
  id: 'p5',
  name: 'Radhamani K.',
  ml: 'രാധാമണി',
  age: 66,
  ward: 'Kakkanad',
  time: '15:30',
  status: 'watch',
  dx: 'Diabetic foot ulcer',
  tags: ['physical', 'social'],
  note: 'Dressing every second day. Ration support requested.',
  mrn: 'MRN-04277',
  vitals: {
    bp: '132/86',
    pulse: '84',
    spo2: '98%',
    pain: '5/10'
  }
}, {
  id: 'p6',
  name: 'Joseph Antony',
  ml: 'ജോസഫ്',
  age: 77,
  ward: 'Kakkanad',
  time: '16:45',
  status: 'stable',
  dx: 'Prostate cancer',
  tags: ['physical'],
  note: 'Catheter change due. Otherwise comfortable.',
  mrn: 'MRN-03840',
  vitals: {
    bp: '126/80',
    pulse: '72',
    spo2: '97%',
    pain: '2/10'
  }
}];
window.ARIKE_STATUS_LABEL = {
  stable: 'Stable',
  watch: 'Watch',
  urgent: 'Urgent'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field_app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/field_app/screens.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
window.DSIcon = Icon;
const S = window.ARIKE_STATUS_LABEL;
function AppHeader({
  title,
  ml,
  right,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '8px 12px 12px',
      background: 'var(--surface-page)',
      flex: '0 0 auto'
    }
  }, onBack && /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Back",
    onClick: onBack
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 0,
      paddingLeft: onBack ? 0 : 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--text-xl)/1.2 var(--font-display)',
      color: 'var(--text-heading)'
    }
  }, title), ml && /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--text-muted)'
    }
  }, ml)), right);
}

/* ---------- Login ---------- */
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      alignContent: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-7)',
      background: 'var(--surface-brand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-arike.png",
    alt: "Arike",
    style: {
      height: 110,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--ink-900)'
    }
  }, "Nurse app"), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-body-sm)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--ink-800)'
    }
  }, "\u0D28\u0D34\u0D4D\u0D38\u0D4D \u0D06\u0D2A\u0D4D\u0D2A\u0D4D")), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-6)",
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Phone number",
    labelMl: "\u0D2B\u0D4B\u0D23\u0D4D\u200D \u0D28\u0D2E\u0D4D\u0D2A\u0D30\u0D4D\u200D",
    htmlFor: "ph"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ph",
    icon: "phone",
    defaultValue: "98470 12345"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "PIN",
    htmlFor: "pin",
    hint: "Four digits"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pin",
    type: "password",
    defaultValue: "1234"
  })), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    size: "lg",
    block: true,
    onClick: onLogin
  }, "Sign in")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--ink-800)',
      textAlign: 'center'
    }
  }, "Trouble signing in? Call the coordinator on 0484 240 1234."));
}

/* ---------- Route ---------- */
function RouteScreen({
  go,
  done
}) {
  const list = window.ARIKE_PATIENTS;
  const [filter, setFilter] = React.useState('All');
  const shown = filter === 'All' ? list : list.filter(p => S[p.status] === filter);
  const left = list.filter(p => !done[p.id]).length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Today's route",
    ml: "\u0D07\u0D28\u0D4D\u0D28\u0D24\u0D4D\u0D24\u0D46 \u0D38\u0D28\u0D4D\u0D26\u0D30\u0D4D\u200D\u0D36\u0D28\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D",
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Alerts",
      tone: "outline"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px 12px',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    pad: "var(--space-5)",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-extrabold) var(--text-3xl)/1 var(--font-display)'
    }
  }, left), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--ink-700)'
    }
  }, "visits left \xB7 Aluva \u2192 Kalamassery \u2192 Kakkanad")), /*#__PURE__*/React.createElement(Icon, {
    name: "map",
    size: 30,
    color: "var(--ink-900)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px 10px',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ['All', 'Urgent', 'Watch', 'Stable'],
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 12px 12px',
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    pad: "var(--space-4)",
    interactive: true,
    onClick: () => go('patient', p),
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      opacity: done[p.id] ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2,
      justifyItems: 'center',
      width: 52,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--text-md) var(--font-mono)',
      color: 'var(--text-heading)'
    }
  }, p.time), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      color: 'var(--text-subtle)'
    }
  }, p.ward)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      alignSelf: 'stretch',
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-md)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--text-muted)'
    }
  }, p.ml)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, p.dx, " \xB7 ", p.age), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 2
    }
  }, done[p.id] ? /*#__PURE__*/React.createElement(Badge, {
    tone: "stable",
    icon: "check"
  }, "Visit done") : /*#__PURE__*/React.createElement(Badge, {
    tone: p.status,
    dot: true
  }, S[p.status]))), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--text-subtle)"
  })))));
}

/* ---------- Patient ---------- */
function PatientScreen({
  patient,
  go,
  done
}) {
  const p = patient;
  const [tab, setTab] = React.useState('today');
  const [escalate, setEscalate] = React.useState(false);
  const CAT = {
    physical: 'Physical',
    psychological: 'Psychological',
    social: 'Social',
    spiritual: 'Spiritual'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppHeader, {
    title: p.name,
    ml: p.ml,
    onBack: () => go('route'),
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: "phone",
      label: "Call family",
      tone: "outline"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 12px 12px',
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-5)",
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: "lg",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 3,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p.age, " \xB7 ", p.ward), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data)',
      color: 'var(--text-subtle)'
    }
  }, p.mrn)), /*#__PURE__*/React.createElement(Badge, {
    tone: p.status,
    dot: true
  }, S[p.status])), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-md)'
    }
  }, p.dx), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    color: `var(--cat-${t})`
  }, CAT[t])))), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: 'today',
      label: 'Today'
    }, {
      value: 'vitals',
      label: 'Vitals'
    }, {
      value: 'history',
      label: 'History'
    }],
    value: tab,
    onChange: setTab
  }), tab === 'today' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-5)",
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Last visit \u2014 3 days ago"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Liji Thomas",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, "Sr. Liji Thomas"))), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-5)",
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Care plan for this visit"), [['Review pain score and dose', true], ['Change sacral dressing', false], ['Check carer is sleeping', false], ['Ask about ration support', false]].map(([t, c]) => /*#__PURE__*/React.createElement(Checkbox, {
    key: t,
    id: t,
    label: t,
    checked: c,
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-5)",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Visit note"), /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "What did you observe today?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    icon: "siren",
    onClick: () => setEscalate(true)
  }, "Escalate"), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    block: true,
    icon: "check",
    onClick: () => go('done', p)
  }, "Save & finish visit")))), tab === 'vitals' && /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-5)",
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Record today's vitals"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "BP",
    hint: `Last ${p.vitals.bp}`
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: p.vitals.bp
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Pulse",
    hint: `Last ${p.vitals.pulse}`
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: p.vitals.pulse
  })), /*#__PURE__*/React.createElement(Field, {
    label: "SpO\u2082",
    hint: `Last ${p.vitals.spo2}`
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: p.vitals.spo2,
    invalid: p.status === 'urgent'
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Pain score",
    hint: `Last ${p.vitals.pain}`
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['0/10', '1/10', '2/10', '3/10', '4/10', '5/10', '6/10'],
    defaultValue: p.vitals.pain
  }))), /*#__PURE__*/React.createElement(Button, {
    tone: "calm",
    block: true,
    icon: "activity"
  }, "Save vitals")), tab === 'history' && /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-2)",
    style: {
      display: 'grid'
    }
  }, [['12 Sep', 'Nursing visit', 'Dressing changed. Pain 4/10.'], ['09 Sep', 'Teleconsult', 'Dr. Rejani increased morphine to 10mg.'], ['05 Sep', 'Nursing visit', 'Syringe driver started. Carer trained.'], ['28 Aug', 'First assessment', 'Registered. Free care — means assessed.']].map(([d, t, n], i, a) => /*#__PURE__*/React.createElement(ListRow, {
    key: d,
    title: t,
    subtitle: n,
    meta: d,
    style: i === a.length - 1 ? {
      borderBottom: 'none'
    } : undefined
  })))), escalate && /*#__PURE__*/React.createElement(Dialog, {
    open: true,
    title: "Escalate to the on-call doctor?",
    width: 320,
    onClose: () => setEscalate(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      tone: "ghost",
      size: "sm",
      onClick: () => setEscalate(false)
    }, "Not now"), /*#__PURE__*/React.createElement(Button, {
      tone: "primary",
      size: "sm",
      onClick: () => setEscalate(false)
    }, "Escalate"))
  }, "Dr. Rejani will get ", p.name.split(' ')[0], "'s vitals and your note immediately, and will call you back."));
}

/* ---------- Visit done ---------- */
function DoneScreen({
  patient,
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Visit saved",
    onBack: () => go('route')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      alignContent: 'center',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "check-circle",
    title: `Note saved for ${patient.name}`,
    action: /*#__PURE__*/React.createElement(Button, {
      tone: "primary",
      block: true,
      iconAfter: "arrow-right",
      onClick: () => go('route')
    }, "Next visit")
  }, "Synced. The coordinator can see it now. You have 4 visits left today \u2014 next is Ayesha Beevi in Kalamassery at 12:15."))));
}

/* ---------- Me ---------- */
function MeScreen() {
  const [onCall, setOnCall] = React.useState(true);
  const [notify, setNotify] = React.useState(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Sr. Liji Thomas",
    ml: "\u0D28\u0D34\u0D4D\u0D38\u0D4D"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 12px 12px',
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-5)",
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Liji Thomas",
    size: "xl",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-md)'
    }
  }, "Senior nurse"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "Aluva \u2192 Kalamassery route"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data)',
      color: 'var(--text-subtle)'
    }
  }, "Employee 0042"))), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-5)",
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "This week"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "28",
    label: "visits"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "19",
    label: "patients"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3",
    label: "escalations"
  })), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 28,
    max: 34,
    label: "Visits completed"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-5)",
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "On call tonight",
    checked: onCall,
    onChange: e => setOnCall(e.target.checked)
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Visit reminders",
    checked: notify,
    onChange: e => setNotify(e.target.checked)
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-2)",
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "wifi-off",
      size: 20,
      color: "var(--text-muted)"
    }),
    title: "Offline notes",
    subtitle: "0 waiting to sync",
    chevron: true,
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListRow, {
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "book-open",
      size: 20,
      color: "var(--text-muted)"
    }),
    title: "Protocols",
    subtitle: "Pain ladder, syringe drivers",
    chevron: true,
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListRow, {
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "log-out",
      size: 20,
      color: "var(--status-urgent)"
    }),
    title: "Sign out",
    chevron: true,
    onClick: () => {},
    style: {
      borderBottom: 'none'
    }
  }))));
}

/* ---------- Patients list ---------- */
function PatientsScreen({
  go
}) {
  const [q, setQ] = React.useState('');
  const list = window.ARIKE_PATIENTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Patients",
    ml: "\u0D30\u0D4B\u0D17\u0D3F\u0D15\u0D33\u0D4D\u200D"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px 10px',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search by name",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 12px 12px'
    }
  }, list.length ? /*#__PURE__*/React.createElement(Card, {
    pad: "0",
    style: {
      display: 'grid'
    }
  }, list.map((p, i) => /*#__PURE__*/React.createElement(ListRow, {
    key: p.id,
    leading: /*#__PURE__*/React.createElement(Avatar, {
      name: p.name,
      ring: true
    }),
    title: p.name,
    titleMl: p.ml,
    subtitle: `${p.ward} · ${p.dx}`,
    trailing: /*#__PURE__*/React.createElement(Badge, {
      tone: p.status,
      dot: true
    }, S[p.status]),
    chevron: true,
    onClick: () => go('patient', p),
    style: i === list.length - 1 ? {
      borderBottom: 'none'
    } : undefined
  }))) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "search",
    title: "No patient by that name"
  }, "Try part of the name, or search in Malayalam.")));
}
Object.assign(window, {
  LoginScreen,
  RouteScreen,
  PatientScreen,
  DoneScreen,
  MeScreen,
  PatientsScreen,
  AppHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field_app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutPage.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
function AboutPage() {
  const {
    Section,
    Eyebrow
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      maxWidth: '56ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "About us"), /*#__PURE__*/React.createElement("h1", null, "Beside you, at home"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, "Arike began in 2019 with two nurses and a scooter. The idea was plain: professional palliative care should reach the house, and money should not decide who gets it."))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 320,
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "site-about",
    shape: "rect",
    placeholder: "Wide photo: the Arike team outside their Kochi office with scooters"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", null, "How the money works"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, "We assess every family's means at the first visit. Families who can pay the full fee do. Families who can pay part, pay part. Families who can pay nothing, pay nothing \u2014 and their care is funded by the first two groups and by donors."), /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Where a rupee goes"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 78,
    label: "Direct patient care",
    tone: "var(--teal-500)"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 14,
    label: "Nurse training and transport",
    tone: "var(--sky-500)"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 8,
    label: "Administration",
    tone: "var(--ink-400)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("h2", null, "The team"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, [['Dr. Rejani Menon', 'Medical lead · palliative physician'], ['Sr. Liji Thomas', 'Senior nurse · Aluva route'], ['Sr. Anila Kurian', 'Senior nurse · Kakkanad route'], ['Vinod Chandran', 'Care coordinator'], ['Fathima Rasheed', 'Counsellor']].map(([n, r]) => /*#__PURE__*/React.createElement(ListRow, {
    key: n,
    leading: /*#__PURE__*/React.createElement(Avatar, {
      name: n.replace(/^(Dr\.|Sr\.)\s/, ''),
      ring: true
    }),
    title: n,
    subtitle: r,
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)'
    }
  })))))), /*#__PURE__*/React.createElement(Section, {
    tone: "var(--surface-calm)",
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      justifyItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-koottinu.png",
    alt: "\u0D15\u0D42\u0D1F\u0D4D\u0D1F\u0D3F\u0D28\u0D4D",
    style: {
      height: 96,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: '24ch'
    }
  }, "\u0D15\u0D42\u0D1F\u0D4D\u0D1F\u0D3F\u0D28\u0D4D \u2014 our companionship programme"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      maxWidth: '56ch'
    }
  }, "Trained volunteers sit with patients who have nobody at home during the day. Not nursing \u2014 company. Started on WhatsApp, and still coordinated there."), /*#__PURE__*/React.createElement(Button, {
    tone: "calm",
    size: "lg",
    icon: "hand-heart"
  }, "Volunteer for \u0D15\u0D42\u0D1F\u0D4D\u0D1F\u0D3F\u0D28\u0D4D"))));
}
Object.assign(window, {
  AboutPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CarePage.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
function CarePage({
  go
}) {
  const {
    Section,
    Eyebrow
  } = window;
  const [tab, setTab] = React.useState('home');
  const services = {
    home: {
      title: 'Home visits',
      ml: 'വീട്ടുസന്ദര്‍ശനം',
      icon: 'house',
      rows: [['Nursing visit', 'A trained palliative nurse, at home, on a schedule you know in advance.'], ['Pain and symptom control', 'Reviewed every visit, with a doctor on teleconsult when medication changes.'], ['Wound and stoma care', 'Dressings, catheters, syringe drivers, tracheostomy care.'], ['Carer training', 'We teach the family to do safely what they will be doing anyway.']]
    },
    tele: {
      title: 'Teleconsultation',
      ml: 'ടെലി കണ്‍സള്‍ട്ടേഷന്‍',
      icon: 'video',
      rows: [['On-call doctor', 'A palliative physician available to our nurses every day.'], ['Family video review', 'For relatives living outside Kerala who want to be part of decisions.'], ['Prescription review', 'Renewals and dose changes without a hospital trip.']]
    },
    support: {
      title: 'Family support',
      ml: 'കുടുംബ സഹായം',
      icon: 'users',
      rows: [['Counselling', 'For the patient, and separately for the carer — who is often more exhausted.'], ['Equipment on loan', 'Air beds, wheelchairs, oxygen concentrators, commodes.'], ['Paperwork help', 'Disability certificates, pension and scheme applications.'], ['Bereavement follow-up', 'We stay in touch with the family for a year after a death.']]
    }
  };
  const s = services[tab];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      maxWidth: '58ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Our care"), /*#__PURE__*/React.createElement("h1", null, "What Arike actually does"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, "Most of our patients are living with illnesses that will not be cured. We look after how they live \u2014 at home, where they would rather be."))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-2)"
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: 'home',
      label: 'Home visits'
    }, {
      value: 'tele',
      label: 'Teleconsultation'
    }, {
      value: 'support',
      label: 'Family support'
    }],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "calm",
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 30,
    color: "var(--teal-600)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)'
    }
  }, s.title), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-body-sm)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--text-muted)'
    }
  }, s.ml)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: "var(--cat-physical)"
  }, "No charge if you cannot pay"), /*#__PURE__*/React.createElement(Tag, {
    color: "var(--cat-social)"
  }, "Ernakulam district")), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => go('request'),
    style: {
      justifySelf: 'start',
      marginTop: 'var(--space-2)'
    }
  }, "Request a visit")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, s.rows.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    color: "var(--status-stable)",
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-md)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, d))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "var(--surface-brand-soft)",
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, [['Who can register?', 'Anyone in Ernakulam living with a serious, progressive or long-term illness. You do not need a referral.'], ['What does it cost?', 'We assess what a family can pay. Over half our patients pay nothing at all.'], ['How soon can you come?', 'A first assessment usually happens within a week. Urgent cases, sooner.']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, a))))));
}
Object.assign(window, {
  CarePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CarePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DonatePanel.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
const AMOUNTS = [{
  v: '1000',
  label: '₹1,000',
  desc: 'One nursing visit, medicines included'
}, {
  v: '2000',
  label: '₹2,000',
  desc: 'A month of visits for one patient who pays nothing'
}, {
  v: '5000',
  label: '₹5,000',
  desc: 'A month of care for a family, including equipment'
}, {
  v: '12000',
  label: '₹12,000',
  desc: 'Six months of care for one patient'
}];
function DonatePanel({
  onClose
}) {
  const [amt, setAmt] = React.useState('2000');
  const [monthly, setMonthly] = React.useState(true);
  const [done, setDone] = React.useState(false);
  const chosen = AMOUNTS.find(a => a.v === amt);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-overlay)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)',
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-overlay)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 480,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      animation: 'arike-rise var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "Fund a family's care"), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--text-muted)'
    }
  }, "\u0D12\u0D30\u0D41 \u0D15\u0D41\u0D1F\u0D41\u0D02\u0D2C\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D4D \u0D15\u0D42\u0D1F\u0D4D\u0D1F\u0D3E\u0D15\u0D41\u0D15")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose,
    style: {
      marginTop: -4,
      marginRight: -8
    }
  })), done ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "hand-heart",
    title: "Thank you",
    action: /*#__PURE__*/React.createElement(Button, {
      tone: "secondary",
      onClick: onClose
    }, "Close")
  }, "Your ", monthly ? 'monthly' : 'one-time', " gift of ", chosen.label, " is set up. We will send an 80G receipt to your email, and a note each quarter about the families it reached.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-6)',
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      padding: 4,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)'
    }
  }, [['Monthly', true], ['One time', false]].map(([l, v]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setMonthly(v),
    style: {
      flex: 1,
      minHeight: 38,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: monthly === v ? 'var(--surface-card)' : 'transparent',
      boxShadow: monthly === v ? 'var(--shadow-xs)' : 'none',
      font: `var(--weight-${monthly === v ? 'bold' : 'medium'}) var(--text-sm) var(--font-body)`,
      color: monthly === v ? 'var(--text-heading)' : 'var(--text-muted)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, AMOUNTS.map(a => /*#__PURE__*/React.createElement(Radio, {
    key: a.v,
    name: "amt",
    value: a.v,
    label: monthly ? `${a.label} / month` : a.label,
    description: a.desc,
    checked: amt === a.v,
    onChange: () => setAmt(a.v)
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Other amount"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "indian-rupee",
    placeholder: "Enter an amount"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "donate",
    size: "lg",
    block: true,
    icon: "hand-heart",
    onClick: () => setDone(true)
  }, "Give ", chosen.label, monthly ? ' a month' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)',
      textAlign: 'center'
    }
  }, "80G tax exemption \xB7 cancel a monthly gift any time")))));
}
Object.assign(window, {
  DonatePanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DonatePanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
function HomePage({
  go
}) {
  const {
    Section,
    Eyebrow
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    icon: "map-pin"
  }, "Ernakulam district"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display)',
      letterSpacing: 'var(--tracking-tight)',
      maxWidth: '18ch'
    }
  }, "Care that comes home"), /*#__PURE__*/React.createElement("p", {
    className: "ml",
    style: {
      font: 'var(--weight-bold) var(--text-xl)/var(--leading-malayalam) var(--font-malayalam)',
      color: 'var(--text-muted)'
    }
  }, "\u0D35\u0D40\u0D1F\u0D4D\u0D1F\u0D3F\u0D32\u0D46\u0D24\u0D4D\u0D24\u0D41\u0D28\u0D4D\u0D28 \u0D2A\u0D30\u0D3F\u0D1A\u0D30\u0D23\u0D02"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, "Arike nurses visit people living with serious illness in their own homes, six days a week. A doctor is on call whenever a nurse needs one. If your family cannot pay, you pay nothing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    size: "lg",
    icon: "heart-handshake",
    onClick: () => go('request')
  }, "Request a visit"), /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    size: "lg",
    iconAfter: "arrow-right",
    onClick: () => go('care')
  }, "See how we care"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 430,
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "site-hero",
    shape: "rect",
    fit: "cover",
    placeholder: "Documentary photo: an Arike nurse sitting beside a patient on a bed in a Kerala home, warm window light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      padding: 'var(--space-6)',
      background: 'linear-gradient(to top, rgba(28,26,23,.78), transparent)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--white)',
      maxWidth: '34ch'
    }
  }, "Sr. Liji reaches six homes a day on her scooter, across Aluva and Kalamassery."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "var(--surface-brand-soft)",
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "650+",
    label: "patients under our care",
    labelMl: "\u0D30\u0D4B\u0D17\u0D3F\u0D15\u0D33\u0D4D\u200D",
    icon: "heart-handshake",
    tint: "var(--white)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2019",
    label: "caring for Ernakulam since",
    icon: "calendar-check",
    tint: "var(--white)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6 days",
    label: "of home visits every week",
    icon: "map",
    tint: "var(--white)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\u20B90",
    label: "charged to families who cannot pay",
    icon: "shield-check",
    tint: "var(--white)"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-8)',
      maxWidth: '54ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we look after"), /*#__PURE__*/React.createElement("h2", null, "Illness is never only physical"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, "Every visit attends to four things, because a family in difficulty rarely needs only one of them.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, [['physical', 'Physical', 'ശാരീരികം', 'pill', 'Pain relief, wound care, catheters, syringe drivers, mobility and nutrition.'], ['psychological', 'Psychological', 'മാനസികം', 'messages-square', 'Time to talk. Anxiety, sleep, and the fear that nobody names out loud.'], ['social', 'Social', 'സാമൂഹികം', 'users', 'Ration and school support, help with paperwork, and relief for the carer.'], ['spiritual', 'Spiritual', 'ആത്മീയം', 'hand-heart', 'Dignity, meaning, and company — whatever faith the family holds.']].map(([k, t, ml, icon, body]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    accent: `var(--cat-${k})`,
    interactive: true,
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    color: `var(--cat-${k})`
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, ml)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, body))))), /*#__PURE__*/React.createElement(Section, {
    tone: "var(--surface-calm)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How it works"), /*#__PURE__*/React.createElement("h2", null, "Three steps, and a nurse is at your door")), [['Tell us about the patient', 'Call us or fill the form. It takes about five minutes.'], ['A nurse assesses at home', 'Usually within a week. Nothing is decided over the phone.'], ['A care plan you keep', 'Regular visits, a number to call, and a doctor on teleconsult.']].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 36,
      height: 36,
      flex: '0 0 auto',
      background: 'var(--white)',
      borderRadius: 'var(--radius-circle)',
      font: 'var(--weight-bold) var(--text-md) var(--font-mono)',
      color: 'var(--teal-600)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-md)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, d)))), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    icon: "heart-handshake",
    onClick: () => go('request'),
    style: {
      justifySelf: 'start'
    }
  }, "Request a visit")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 360,
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "site-howitworks",
    shape: "rect",
    placeholder: "Photo: nurse's bag open on a patterned bedsheet, hands taking blood pressure"
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "site-story",
    shape: "rect",
    placeholder: "Portrait: a daughter caring for her mother at home, warm natural light"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "From a family"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--weight-medium) var(--text-2xl)/1.45 var(--font-display)',
      color: 'var(--text-heading)'
    }
  }, "\u201CAmma was in pain for four months before Arike came. Now the nurse knows her, and I know who to call at night.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Bindu Rajan",
    ring: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Bindu Rajan"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "Daughter \xB7 Kalamassery")))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    pad: "var(--space-10)",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'center',
      borderRadius: 'var(--radius-3xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--white)'
    }
  }, "Families who can pay fund families who cannot"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--ink-300)',
      maxWidth: '48ch'
    }
  }, "A little over half of the people we look after pay nothing. Their care is funded by fees from families who can afford them, and by donors like you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "donate",
    size: "lg",
    icon: "hand-heart",
    onClick: () => go('donate')
  }, "Fund a month of visits"), /*#__PURE__*/React.createElement(Button, {
    tone: "ghost",
    size: "lg",
    style: {
      color: 'var(--white)'
    },
    onClick: () => go('about')
  }, "How we spend it"))), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-6)",
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "This month's care fund"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 18.4,
    max: 30,
    label: "\u20B918.4 lakh of \u20B930 lakh",
    tone: "var(--action-donate)",
    height: 12
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1,140",
    label: "visits funded"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "342",
    label: "donors this month"
  }))))));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RequestPage.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
function RequestPage({
  go
}) {
  const {
    Section,
    Eyebrow
  } = window;
  const [step, setStep] = React.useState(0);
  const [pay, setPay] = React.useState('assess');
  const [consent, setConsent] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const submit = () => {
    setStep(2);
    setToast(true);
  };
  return /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Request a visit"), /*#__PURE__*/React.createElement("h1", null, "Tell us about the patient"), /*#__PURE__*/React.createElement("p", {
    className: "ml",
    style: {
      font: 'var(--type-body)',
      fontFamily: 'var(--font-malayalam)',
      color: 'var(--text-muted)'
    }
  }, "\u0D30\u0D4B\u0D17\u0D3F\u0D2F\u0D46\u0D15\u0D4D\u0D15\u0D41\u0D31\u0D3F\u0D1A\u0D4D\u0D1A\u0D4D \u0D2A\u0D31\u0D2F\u0D41\u0D15")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: step + 1,
    max: 3,
    label: `Step ${Math.min(step + 1, 3)} of 3`
  }), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-7)",
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Patient's name",
    labelMl: "\u0D30\u0D4B\u0D17\u0D3F\u0D2F\u0D41\u0D1F\u0D46 \u0D2A\u0D47\u0D30\u0D4D",
    required: true,
    htmlFor: "pn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pn",
    placeholder: "Full name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Age",
    labelMl: "\u0D35\u0D2F\u0D38\u0D4D\u0D38\u0D4D",
    required: true,
    htmlFor: "ag"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ag",
    type: "number",
    placeholder: "72"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Where do they live?",
    labelMl: "\u0D38\u0D4D\u0D25\u0D32\u0D02",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Aluva', 'Kakkanad', 'Kalamassery', 'Fort Kochi', 'Tripunithura', 'Elsewhere in Ernakulam']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What is the illness?",
    labelMl: "\u0D30\u0D4B\u0D17\u0D02",
    hint: "In your own words is fine. We will ask a nurse to call you."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Cancer of the stomach, diagnosed in March. She cannot walk to the bathroom now."
  })), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    block: true,
    iconAfter: "arrow-right",
    onClick: () => setStep(1)
  }, "Continue")), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    labelMl: "\u0D28\u0D3F\u0D19\u0D4D\u0D19\u0D33\u0D41\u0D1F\u0D46 \u0D2A\u0D47\u0D30\u0D4D",
    required: true,
    htmlFor: "yn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "yn",
    placeholder: "Full name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Relationship to patient",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Daughter', 'Son', 'Spouse', 'Neighbour', 'Other relative']
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Phone number",
    labelMl: "\u0D2B\u0D4B\u0D23\u0D4D\u200D \u0D28\u0D2E\u0D4D\u0D2A\u0D30\u0D4D\u200D",
    required: true,
    hint: "A nurse will call within two working days.",
    htmlFor: "ph"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ph",
    icon: "phone",
    placeholder: "98470 12345"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Paying for care"), /*#__PURE__*/React.createElement(Radio, {
    name: "pay",
    value: "assess",
    label: "Please assess what we can pay",
    description: "Most families choose this. Over half of our patients pay nothing.",
    checked: pay === 'assess',
    onChange: () => setPay('assess')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "pay",
    value: "full",
    label: "We can pay the full fee",
    description: "Your fee funds a free visit for another family.",
    checked: pay === 'full',
    onChange: () => setPay('full')
  })), /*#__PURE__*/React.createElement(Checkbox, {
    id: "cs",
    label: "I have the patient's or family's permission to share these details.",
    checked: consent,
    onChange: e => setConsent(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    icon: "arrow-left",
    onClick: () => setStep(0)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    block: true,
    disabled: !consent,
    onClick: submit
  }, "Send request"))), step === 2 && /*#__PURE__*/React.createElement(EmptyState, {
    icon: "check-circle",
    title: "We have your request",
    action: /*#__PURE__*/React.createElement(Button, {
      tone: "secondary",
      onClick: () => go('home')
    }, "Back to home")
  }, "A nurse will call you on the number you gave, within two working days. If things get worse before then, call us on 0484 240 1234 \u2014 any day."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "Would you rather talk?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-700)'
    }
  }, "Call 0484 240 1234 between 9am and 6pm, any day including Sundays. We speak Malayalam, English and Tamil.")), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "What happens next"), [['Within 2 days', 'A nurse calls you'], ['Within a week', 'Home assessment visit'], ['After that', 'A care plan and a number to call']].map(([w, t]) => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data)',
      color: 'var(--text-muted)',
      width: 96,
      flex: '0 0 auto'
    }
  }, w), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)'
    }
  }, t)))))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 'var(--z-toast)'
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    onClose: () => setToast(false)
  }, "Request sent \u2014 a nurse will call you")));
}
Object.assign(window, {
  RequestPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RequestPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Card,
  Badge,
  Tag,
  Avatar,
  Stat,
  ProgressBar,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  NavItem,
  TabBar,
  ListRow,
  Dialog,
  Toast,
  Tooltip,
  EmptyState
} = window.ArikeDesignSystem_07e9f7;
const NAV = [{
  id: 'home',
  label: 'Home',
  ml: 'ഹോം'
}, {
  id: 'care',
  label: 'Our care',
  ml: 'പരിചരണം'
}, {
  id: 'request',
  label: 'Request a visit'
}, {
  id: 'about',
  label: 'About us'
}];
function SiteHeader({
  page,
  go,
  scrolled
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 'var(--z-sticky)',
      background: scrolled ? 'rgba(251,249,245,.88)' : 'var(--surface-page)',
      backdropFilter: scrolled ? 'var(--blur-chrome)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
      transition: 'background-color var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-content)',
      margin: '0 auto',
      padding: '14px var(--gutter-page)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 42,
    withName: true,
    assetBase: "../../assets"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 'var(--space-6)',
      justifyContent: 'center'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '6px 0',
      font: `var(--weight-${page === n.id ? 'bold' : 'medium'}) var(--text-sm)/1.2 var(--font-body)`,
      color: page === n.id ? 'var(--text-heading)' : 'var(--text-muted)',
      borderBottom: `2px solid ${page === n.id ? 'var(--action-primary)' : 'transparent'}`
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "ghost",
    size: "sm",
    icon: "phone"
  }, "0484 240 1234"), /*#__PURE__*/React.createElement(Button, {
    tone: "donate",
    size: "sm",
    icon: "hand-heart",
    onClick: () => go('donate')
  }, "Donate"))));
}
function SiteFooter({
  go
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-300)',
      textDecoration: 'none'
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--ink-200)',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-content)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--gutter-page) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-arike.png",
    alt: "Arike",
    style: {
      height: 52,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-400)',
      maxWidth: '30ch'
    }
  }, "Professional home-based palliative and health care in Kochi. Beside you, at home."), /*#__PURE__*/React.createElement("p", {
    className: "ml",
    style: {
      font: 'var(--type-caption)',
      color: 'var(--ink-500)'
    }
  }, "\u0D05\u0D30\u0D3F\u0D15\u0D46 \xB7 \u0D15\u0D4A\u0D1A\u0D4D\u0D1A\u0D3F")), col('Care', ['Home visits', 'Teleconsultation', 'Family counselling', 'Equipment support']), col('Get involved', ['Donate', 'Volunteer', 'Partner with us', 'Careers']), col('Contact', ['0484 240 1234', 'hello@arike.org', 'Kochi, Ernakulam'])), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-content)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--gutter-page)',
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-caption)',
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Registered not-for-profit \xB7 80G approved"), /*#__PURE__*/React.createElement("span", null, "Serving Ernakulam since 2019"))));
}
function Section({
  children,
  tone,
  pad = 'var(--gutter-section)',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone || 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-content)',
      margin: '0 auto',
      padding: `${pad} var(--gutter-page)`
    }
  }, children));
}
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, children);
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Section,
  Eyebrow,
  SITE_NAV: NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
