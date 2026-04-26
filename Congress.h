<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Whose Side Are They On — Congressional Accountability</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0a0b;
    --bg2: #0f0f11;
    --text: #f0ede6;
    --text-dim: #8a8680;
    --blue: #2563eb;
    --blue-dim: #1d4ed8;
    --red: #dc2626;
    --border: rgba(240,237,230,0.08);
    --grain: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #050506;
    font-family: 'DM Mono', monospace;
    color: var(--text);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── FORMAT TOGGLE ── */
  .format-bar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    background: rgba(5,5,6,0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 52px;
  }

  .format-bar .brand {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.25em;
    color: var(--text-dim);
    text-transform: uppercase;
  }

  .toggle-group {
    display: flex;
    gap: 4px;
    background: rgba(240,237,230,0.05);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 3px;
  }

  .toggle-btn {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 6px 14px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s;
    background: transparent;
    color: var(--text-dim);
  }

  .toggle-btn.active {
    background: var(--blue);
    color: #fff;
  }

  .nav-hint {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: var(--text-dim);
    text-transform: uppercase;
  }

  /* ── STAGE ── */
  .stage {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 72px 24px 40px;
    min-height: 100vh;
  }

  /* ── VIEWER ── */
  .viewer {
    position: relative;
    overflow: hidden;
  }

  /* TikTok: 1080x1920 → display at 390x693 */
  .viewer.tiktok {
    width: 390px;
    height: 693px;
  }

  /* X: 1600x900 → display at 720x405 */
  .viewer.xformat {
    width: 720px;
    height: 405px;
  }

  /* ── FRAMES ── */
  .frames {
    display: flex;
    transition: transform 0.45s cubic-bezier(0.77,0,0.18,1);
    height: 100%;
  }

  .frame {
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    background: var(--bg);
  }

  .viewer.tiktok .frame { width: 390px; height: 693px; }
  .viewer.xformat .frame { width: 720px; height: 405px; }

  /* grain overlay on every frame */
  .frame::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(--grain);
    background-size: 128px 128px;
    pointer-events: none;
    z-index: 10;
    opacity: 0.4;
    mix-blend-mode: overlay;
  }

  /* ── FRAME COUNTER ── */
  .frame-counter {
    position: absolute;
    top: 18px; right: 18px;
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    color: var(--text-dim);
    z-index: 20;
  }

  /* ── SOURCE TAG ── */
  .source {
    position: absolute;
    bottom: 18px; left: 20px; right: 20px;
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 0.12em;
    color: var(--text-dim);
    text-transform: uppercase;
    z-index: 20;
    line-height: 1.5;
  }

  /* ── BLUE ACCENT LINE ── */
  .blue-line {
    display: block;
    width: 36px;
    height: 2px;
    background: var(--blue);
    margin-bottom: 16px;
  }

  .blue-rule {
    display: block;
    width: 100%;
    height: 1px;
    background: var(--blue);
    margin: 16px 0;
    opacity: 0.6;
  }

  /* ─────────────────────────────────────────
     TIKTOK FRAME LAYOUTS
  ───────────────────────────────────────── */

  /* F1 — THE HOOK */
  .f1-tk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 28px 60px;
    background: var(--bg);
  }

  .f1-tk .big-stat {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 88px;
    line-height: 0.9;
    color: var(--text);
    letter-spacing: 0.01em;
    margin-bottom: 8px;
  }

  .f1-tk .big-stat span {
    color: var(--blue);
  }

  .f1-tk .headline {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    font-weight: 400;
    color: var(--text);
    line-height: 1.6;
    margin-bottom: 6px;
    letter-spacing: 0.04em;
  }

  .f1-tk .subtext {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--blue);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
  }

  .f1-tk .agree {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 18px;
    color: var(--text);
    line-height: 1.4;
    margin-top: 14px;
  }

  /* F2 — THE INSTITUTION */
  .f2-tk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 28px 60px;
    background: var(--bg2);
  }

  .f2-tk .not-about {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.08em;
    color: var(--text-dim);
    line-height: 2;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  .f2-tk .this-is {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 64px;
    line-height: 0.95;
    color: var(--text);
    letter-spacing: 0.02em;
    margin-bottom: 6px;
  }

  .f2-tk .underline-blue {
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--blue) 0%, transparent 100%);
    margin-bottom: 24px;
  }

  .f2-tk .body {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    line-height: 1.8;
    color: var(--text);
    letter-spacing: 0.02em;
  }

  .f2-tk .body em {
    color: var(--text-dim);
    font-style: normal;
    display: block;
    margin-top: 8px;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* F3 — THE QUESTION */
  .f3-tk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 48px 28px 60px;
    background: var(--bg);
  }

  .f3-tk .pull-quote {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 24px;
    line-height: 1.35;
    color: var(--text);
    margin-bottom: 28px;
    padding-left: 16px;
    border-left: 3px solid var(--blue);
  }

  .f3-tk .below {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: var(--text-dim);
    text-transform: uppercase;
    line-height: 2;
  }

  .f3-tk .watch {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 32px;
    color: var(--blue);
    letter-spacing: 0.05em;
    margin-top: 28px;
  }

  /* F4 — THE SHUTDOWN */
  .f4-tk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 28px 60px;
    background: #0c0808;
  }

  .f4-tk .year {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 100px;
    line-height: 0.85;
    color: var(--text);
    opacity: 0.12;
    position: absolute;
    top: 30px;
    right: -8px;
    letter-spacing: -0.02em;
    z-index: 1;
  }

  .f4-tk .content { position: relative; z-index: 2; }

  .f4-tk .header {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 52px;
    line-height: 0.95;
    color: var(--text);
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }

  .f4-tk .days {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    color: var(--text-dim);
    text-transform: uppercase;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border);
  }

  .f4-tk .items {
    list-style: none;
    margin-bottom: 20px;
  }

  .f4-tk .items li {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--text);
    letter-spacing: 0.04em;
    padding: 7px 0;
    border-bottom: 1px solid rgba(240,237,230,0.05);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .f4-tk .items li::before {
    content: '—';
    color: var(--text-dim);
    flex-shrink: 0;
  }

  .f4-tk .verdict {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--blue);
    letter-spacing: 0.06em;
    line-height: 1.6;
    text-transform: uppercase;
    margin-top: 12px;
  }

  /* F5 — SPLIT */
  .f5-tk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 24px 60px;
    background: var(--bg);
  }

  .f5-tk .split-header {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
  }

  .f5-tk .split-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    flex: 1;
  }

  .f5-tk .col-head {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 12px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--border);
  }

  .col-want .col-head { color: var(--text); }
  .col-deliver .col-head { color: var(--blue); }

  .f5-tk .col-item {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: var(--text);
    line-height: 1.5;
    padding: 8px 0;
    border-bottom: 1px solid rgba(240,237,230,0.04);
    letter-spacing: 0.02em;
  }

  .col-deliver .col-item {
    color: var(--text-dim);
  }

  /* F6 — HUMAN COST */
  .f6-tk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 28px 60px;
    background: var(--bg2);
  }

  .f6-tk .label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 28px;
  }

  .f6-tk .stat-block {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border);
  }

  .f6-tk .stat-block:last-of-type { border-bottom: none; }

  .f6-tk .stat-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 54px;
    line-height: 0.9;
    color: var(--text);
    letter-spacing: 0.01em;
  }

  .f6-tk .stat-label {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--text-dim);
    letter-spacing: 0.04em;
    line-height: 1.6;
    margin-top: 4px;
  }

  .f6-tk .kicker {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: var(--blue);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 16px;
    line-height: 1.6;
  }

  /* F7 — UNIPARTY */
  .f7-tk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 28px 60px;
    background: var(--bg);
  }

  .f7-tk .header {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 46px;
    line-height: 0.95;
    color: var(--text);
    letter-spacing: 0.02em;
    margin-bottom: 20px;
  }

  .f7-tk .stat-row {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
  }

  .f7-tk .mini-stat {
    flex: 1;
    background: rgba(240,237,230,0.03);
    border: 1px solid var(--border);
    padding: 12px;
  }

  .f7-tk .mini-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 38px;
    color: var(--blue);
    line-height: 1;
    display: block;
  }

  .f7-tk .mini-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: var(--text-dim);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 1.5;
    margin-top: 4px;
    display: block;
  }

  .f7-tk .body {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--text-dim);
    line-height: 1.7;
    letter-spacing: 0.02em;
    margin-bottom: 16px;
  }

  .f7-tk .pull {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 14px;
    color: var(--text);
    line-height: 1.5;
    padding-left: 14px;
    border-left: 2px solid var(--blue);
  }

  /* F8 — FOUNDING */
  .f8-tk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 28px 60px;
    background: #0b0a08;
    position: relative;
  }

  .f8-tk .texture {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(240,237,230,0.008) 2px,
      rgba(240,237,230,0.008) 3px
    );
    z-index: 1;
  }

  .f8-tk .content { position: relative; z-index: 2; }

  .f8-tk .big-line {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 40px;
    line-height: 1.05;
    color: var(--text);
    letter-spacing: 0.02em;
    margin-bottom: 8px;
  }

  .f8-tk .second-line {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 22px;
    color: var(--blue);
    line-height: 1.3;
    margin-bottom: 24px;
  }

  .f8-tk .body {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--text-dim);
    line-height: 1.8;
    letter-spacing: 0.03em;
    margin-bottom: 20px;
  }

  .f8-tk .we {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 56px;
    color: var(--text);
    letter-spacing: 0.05em;
    line-height: 0.9;
  }

  .f8-tk .we span { color: var(--blue); }

  /* F9 — CLOSE */
  .f9-tk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 28px 60px;
    background: var(--bg);
  }

  .f9-tk .line1 {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    color: var(--text-dim);
    letter-spacing: 0.06em;
    line-height: 1.6;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .f9-tk .line2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 72px;
    color: var(--text);
    letter-spacing: 0.02em;
    line-height: 0.9;
    margin-bottom: 4px;
  }

  .f9-tk .line3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 72px;
    color: var(--blue);
    letter-spacing: 0.02em;
    line-height: 0.9;
    margin-bottom: 36px;
  }

  .f9-tk .triplet {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--text-dim);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 2.2;
    border-top: 1px solid var(--border);
    padding-top: 20px;
    width: 100%;
  }

  .f9-tk .final {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--text);
    letter-spacing: 0.06em;
    margin-top: 20px;
    font-style: italic;
  }

  /* F10 — CTA */
  .f10-tk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 28px 60px;
    background: var(--bg2);
  }

  .f10-tk .top-stat {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 8px;
  }

  .f10-tk .big-85 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 96px;
    line-height: 0.85;
    color: var(--text);
    letter-spacing: 0.01em;
    margin-bottom: 4px;
  }

  .f10-tk .big-85 span { color: var(--blue); }

  .f10-tk .rule { 
    width: 100%;
    height: 1px;
    background: var(--blue);
    opacity: 0.4;
    margin: 20px 0;
  }

  .f10-tk .cta-text {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--text);
    letter-spacing: 0.04em;
    line-height: 1.8;
    margin-bottom: 16px;
  }

  .f10-tk .tags {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: var(--blue);
    letter-spacing: 0.1em;
    line-height: 2;
  }

  /* ─────────────────────────────────────────
     X FORMAT FRAMES (16:9, 720×405)
  ───────────────────────────────────────── */

  /* X frames use horizontal layouts */
  .frame-x {
    display: none;
  }

  .viewer.xformat .frame-x { display: flex; }
  .viewer.xformat .frame-tk { display: none; }
  .viewer.tiktok .frame-tk { display: flex; }
  .viewer.tiktok .frame-x { display: none; }

  /* X Frame base */
  .fx-base {
    width: 100%;
    height: 100%;
    padding: 28px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--bg);
    position: relative;
  }

  .fx-base .fx-top {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }

  .fx-base .fx-left { flex: 1; }
  .fx-base .fx-right { flex: 1; }

  /* X specific typography */
  .fx-giant {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 80px;
    line-height: 0.85;
    color: var(--text);
    letter-spacing: 0.01em;
  }

  .fx-giant span { color: var(--blue); }

  .fx-headline {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
    line-height: 1;
    color: var(--text);
    letter-spacing: 0.02em;
  }

  .fx-body {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--text-dim);
    letter-spacing: 0.04em;
    line-height: 1.7;
  }

  .fx-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .fx-accent {
    color: var(--blue);
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .fx-bottom {
    border-top: 1px solid var(--border);
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .fx-divider-v {
    width: 1px;
    background: var(--border);
    align-self: stretch;
    margin: 0 4px;
  }

  /* X pull quote */
  .fx-pull {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 18px;
    line-height: 1.4;
    color: var(--text);
    padding-left: 14px;
    border-left: 3px solid var(--blue);
  }

  /* ── NAVIGATION ── */
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 20px 24px;
  }

  .nav-btn {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 8px 20px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.2s;
  }

  .nav-btn:hover { border-color: var(--blue); color: var(--text); }
  .nav-btn:disabled { opacity: 0.2; cursor: default; }

  .nav-dots {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--text-dim);
    transition: all 0.2s;
    cursor: pointer;
  }

  .dot.active { background: var(--blue); width: 16px; border-radius: 2px; }

  /* ── ANIMATION ── */
  @keyframes slideUp {
    from { transform: translateY(12px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .frame.active > * {
    animation: slideUp 0.4s ease forwards;
  }

  /* ── DOWNLOAD NOTE ── */
  .dl-note {
    text-align: center;
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    color: var(--text-dim);
    text-transform: uppercase;
    padding-bottom: 32px;
    opacity: 0.5;
  }
</style>
</head>
<body>

<!-- FORMAT BAR -->
<div class="format-bar">
  <span class="brand">Congressional Accountability — Storyboard</span>
  <div class="toggle-group">
    <button class="toggle-btn active" onclick="setFormat('tiktok')">TikTok 9:16</button>
    <button class="toggle-btn" onclick="setFormat('x')">X / Twitter 16:9</button>
  </div>
  <span class="nav-hint">← → to navigate</span>
</div>

<!-- STAGE -->
<div class="stage">
  <div>
    <div class="viewer tiktok" id="viewer">
      <div class="frames" id="frames">

        <!-- ══════════ FRAME 1 ══════════ -->
        <div class="frame">
          <!-- TIKTOK -->
          <div class="frame-tk f1-tk">
            <span class="frame-counter">01 / 10</span>
            <span class="blue-line"></span>
            <div class="big-stat">1<span>5</span>%</div>
            <div class="headline">Congressional approval rating.<br>March 2026.</div>
            <div class="agree">"That means 85% of Americans<br>agree on something."</div>
            <div class="subtext">When is the last time that happened?</div>
            <div class="source">Source: Gallup, March 2026</div>
          </div>
          <!-- X FORMAT -->
          <div class="frame-x fx-base" style="background:#0a0a0b;">
            <span class="frame-counter">01 / 10</span>
            <div class="fx-top">
              <div class="fx-left">
                <span class="blue-line"></span>
                <div class="fx-giant">1<span>5</span>%</div>
                <div class="fx-label" style="margin-top:8px;">Congressional approval — Gallup March 2026</div>
              </div>
              <div class="fx-divider-v"></div>
              <div class="fx-right" style="display:flex;flex-direction:column;justify-content:center;padding-left:20px;">
                <div class="fx-pull">"That means 85% of Americans agree on something."</div>
                <div class="fx-accent" style="margin-top:16px;">When is the last time that happened?</div>
              </div>
            </div>
            <div class="fx-bottom">
              <span class="fx-label">Whose Side Are They On</span>
              <span class="fx-label">#HoldThemAccountable</span>
            </div>
          </div>
        </div>

        <!-- ══════════ FRAME 2 ══════════ -->
        <div class="frame">
          <div class="frame-tk f2-tk">
            <span class="frame-counter">02 / 10</span>
            <div class="not-about">This is not about Republicans.<br>This is not about Democrats.</div>
            <div class="this-is">THIS IS<br>ABOUT<br>CONGRESS.</div>
            <div class="underline-blue"></div>
            <div class="body">
              An institution that has not passed a complete federal budget on time in over 25 years.
              <em>Not once. Not under either party.</em>
            </div>
            <div class="source">Source: Congressional Budget Office / Congressional Research Service</div>
          </div>
          <div class="frame-x fx-base" style="background:#0f0f11;">
            <span class="frame-counter">02 / 10</span>
            <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
              <div class="fx-label" style="margin-bottom:12px;line-height:2;">This is not about Republicans. &nbsp;|&nbsp; This is not about Democrats.</div>
              <div class="fx-headline" style="font-size:52px;line-height:0.9;margin-bottom:8px;">THIS IS ABOUT CONGRESS.</div>
              <div style="width:100%;height:2px;background:linear-gradient(90deg,var(--blue),transparent);margin-bottom:16px;"></div>
              <div class="fx-body">An institution that has not passed a complete federal budget on time in over 25 years.<br><span style="color:var(--text);letter-spacing:0.06em;text-transform:uppercase;font-size:10px;">Not once. Not under either party.</span></div>
            </div>
            <div class="fx-bottom">
              <span class="fx-label">Source: Congressional Budget Office</span>
              <span class="fx-label">#CongressFailed</span>
            </div>
          </div>
        </div>

        <!-- ══════════ FRAME 3 ══════════ -->
        <div class="frame">
          <div class="frame-tk f3-tk">
            <span class="frame-counter">03 / 10</span>
            <div class="pull-quote">"The first duty of the American government is to protect American citizens."</div>
            <div class="below">
              Congress was asked to stand<br>
              if they agreed.<br>
              <br>
              February 24, 2026.
            </div>
            <div class="watch">Watch what happened next →</div>
          </div>
          <div class="frame-x fx-base" style="background:#0a0a0b;">
            <span class="frame-counter">03 / 10</span>
            <div style="flex:1;display:flex;align-items:center;gap:32px;">
              <div style="flex:1;">
                <div class="fx-pull" style="font-size:22px;">"The first duty of the American government is to protect American citizens."</div>
              </div>
              <div class="fx-divider-v"></div>
              <div style="flex:1;padding-left:24px;">
                <div class="fx-body" style="margin-bottom:12px;">Congress was asked to stand<br>if they agreed.<br><br>February 24, 2026.</div>
                <div class="fx-headline" style="font-size:28px;color:var(--blue);">Watch what happened next →</div>
              </div>
            </div>
            <div class="fx-bottom">
              <span class="fx-label">State of the Union — Feb 24, 2026</span>
              <span class="fx-label">#WeThePeople</span>
            </div>
          </div>
        </div>

        <!-- ══════════ FRAME 4 ══════════ -->
        <div class="frame">
          <div class="frame-tk f4-tk">
            <span class="frame-counter">04 / 10</span>
            <div class="year">2025</div>
            <div class="content">
              <div class="header">Fall<br>2025.</div>
              <div class="days">The longest government shutdown in American history — 43 days</div>
              <ul class="items">
                <li>Federal workers went without pay</li>
                <li>Government services went dark</li>
                <li>Both parties pointed fingers</li>
                <li>No one accepted responsibility</li>
              </ul>
              <div class="verdict">Real people paid the price<br>for their politics.</div>
            </div>
            <div class="source">Source: Congressional Record / CRS Report</div>
          </div>
          <div class="frame-x fx-base" style="background:#0c0808;">
            <span class="frame-counter">04 / 10</span>
            <div class="fx-top" style="align-items:stretch;">
              <div class="fx-left">
                <div class="fx-giant" style="font-size:64px;line-height:0.85;opacity:0.15;position:absolute;top:20px;left:20px;">2025</div>
                <div style="position:relative;z-index:2;padding-top:8px;">
                  <div class="fx-headline" style="font-size:44px;">FALL 2025.</div>
                  <div class="fx-label" style="margin-top:4px;margin-bottom:16px;">The longest government shutdown in American history — 43 days</div>
                </div>
              </div>
              <div class="fx-divider-v"></div>
              <div class="fx-right" style="padding-left:24px;display:flex;flex-direction:column;justify-content:center;">
                <div class="fx-body" style="line-height:2;">— Federal workers went without pay<br>— Government services went dark<br>— Both parties pointed fingers<br>— No one accepted responsibility</div>
              </div>
            </div>
            <div class="fx-bottom">
              <span class="fx-accent">Real people paid the price for their politics.</span>
              <span class="fx-label">Source: Congressional Record</span>
            </div>
          </div>
        </div>

        <!-- ══════════ FRAME 5 ══════════ -->
        <div class="frame">
          <div class="frame-tk f5-tk">
            <span class="frame-counter">05 / 10</span>
            <div class="split-header">The gap between what you want — and what they do</div>
            <div class="split-grid">
              <div class="col-want">
                <div class="col-head">Americans want</div>
                <div class="col-item">Only citizens vote<br><span style="color:var(--blue);font-size:9px;">80%+ support</span></div>
                <div class="col-item">Balanced federal budget</div>
                <div class="col-item">Government that functions</div>
                <div class="col-item">Transparent spending</div>
              </div>
              <div class="col-deliver">
                <div class="col-head">Congress delivers</div>
                <div class="col-item">Blocked. Stalled.</div>
                <div class="col-item">Not once in 25 yrs</div>
                <div class="col-item">Shutdown. Twice.</div>
                <div class="col-item">$34 trillion in debt</div>
              </div>
            </div>
            <div class="source">Sources: Gallup / CBO / Congressional Record</div>
          </div>
          <div class="frame-x fx-base">
            <span class="frame-counter">05 / 10</span>
            <div class="fx-label" style="margin-bottom:14px;">The gap between what you want — and what they do</div>
            <div style="display:grid;grid-template-columns:1fr 1px 1fr;gap:0;flex:1;align-items:start;">
              <div style="padding-right:20px;">
                <div class="fx-label" style="margin-bottom:10px;color:var(--text);">Americans want</div>
                <div class="fx-body" style="line-height:2.4;">Only citizens vote &nbsp;<span style="color:var(--blue);">80%+</span><br>Balanced federal budget<br>Government that functions<br>Transparent spending</div>
              </div>
              <div style="background:var(--border);"></div>
              <div style="padding-left:20px;">
                <div class="fx-label" style="margin-bottom:10px;color:var(--blue);">Congress delivers</div>
                <div class="fx-body" style="line-height:2.4;color:var(--text-dim);">Blocked. Stalled.<br>Not once in 25 years<br>Shutdown. Twice.<br>$34 trillion in debt</div>
              </div>
            </div>
            <div class="fx-bottom">
              <span class="fx-label">Sources: Gallup / CBO / Congressional Record</span>
              <span class="fx-label">#HoldThemAccountable</span>
            </div>
          </div>
        </div>

        <!-- ══════════ FRAME 6 ══════════ -->
        <div class="frame">
          <div class="frame-tk f6-tk">
            <span class="frame-counter">06 / 10</span>
            <div class="label">The human cost — right now</div>
            <div class="stat-block">
              <div class="stat-num">7<span style="font-size:32px;color:var(--text-dim)"> in 10</span></div>
              <div class="stat-label">Americans cannot afford to live<br>where they live</div>
            </div>
            <div class="stat-block">
              <div class="stat-num">1<span style="font-size:32px;color:var(--text-dim)"> in 3</span></div>
              <div class="stat-label">say their finances got worse<br>last year</div>
            </div>
            <div class="stat-block">
              <div class="stat-num" style="font-size:36px;">HALF</div>
              <div class="stat-label">believe we are already<br>in a recession</div>
            </div>
            <div class="kicker">Congress has been in session<br>this entire time.</div>
            <div class="source">Sources: Gallup / Marist Poll, 2025–2026</div>
          </div>
          <div class="frame-x fx-base" style="background:#0f0f11;">
            <span class="frame-counter">06 / 10</span>
            <div class="fx-label" style="margin-bottom:14px;">The human cost — right now</div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;flex:1;align-items:center;">
              <div style="text-align:center;padding:12px;border:1px solid var(--border);">
                <div class="fx-giant" style="font-size:52px;">7<span style="font-size:28px;color:var(--text-dim)"> in 10</span></div>
                <div class="fx-label" style="margin-top:6px;line-height:1.5;">cannot afford to live where they live</div>
              </div>
              <div style="text-align:center;padding:12px;border:1px solid var(--border);">
                <div class="fx-giant" style="font-size:52px;">1<span style="font-size:28px;color:var(--text-dim)"> in 3</span></div>
                <div class="fx-label" style="margin-top:6px;line-height:1.5;">say finances got worse last year</div>
              </div>
              <div style="text-align:center;padding:12px;border:1px solid var(--border);">
                <div class="fx-headline" style="font-size:40px;line-height:0.9;">OVER<br>HALF</div>
                <div class="fx-label" style="margin-top:6px;line-height:1.5;">believe we're already in a recession</div>
              </div>
            </div>
            <div class="fx-bottom">
              <span class="fx-accent">Congress has been in session this entire time.</span>
              <span class="fx-label">Sources: Gallup / Marist 2025–2026</span>
            </div>
          </div>
        </div>

        <!-- ══════════ FRAME 7 ══════════ -->
        <div class="frame">
          <div class="frame-tk f7-tk">
            <span class="frame-counter">07 / 10</span>
            <span class="blue-line"></span>
            <div class="header">Career politicians.<br>Both parties.</div>
            <div class="stat-row">
              <div class="mini-stat">
                <span class="mini-num">11<span style="font-size:20px;">+</span></span>
                <span class="mini-label">Avg years — U.S. Senator</span>
              </div>
              <div class="mini-stat">
                <span class="mini-num">8<span style="font-size:20px;">+</span></span>
                <span class="mini-label">Avg years — House member</span>
              </div>
            </div>
            <div class="body">In that time: 25+ years of unbalanced budgets. Multiple shutdowns. Real wages stagnant for a decade.</div>
            <div class="pull">"At what point does loyalty to the institution become the problem?"</div>
          </div>
          <div class="frame-x fx-base">
            <span class="frame-counter">07 / 10</span>
            <div class="fx-top" style="align-items:center;">
              <div class="fx-left">
                <span class="blue-line"></span>
                <div class="fx-headline" style="font-size:42px;margin-bottom:12px;">Career politicians.<br>Both parties.</div>
                <div style="display:flex;gap:10px;margin-bottom:14px;">
                  <div style="flex:1;padding:10px;border:1px solid var(--border);text-align:center;">
                    <div class="fx-giant" style="font-size:44px;">11<span style="font-size:22px;color:var(--text-dim)">+</span></div>
                    <div class="fx-label">Avg yrs — Senator</div>
                  </div>
                  <div style="flex:1;padding:10px;border:1px solid var(--border);text-align:center;">
                    <div class="fx-giant" style="font-size:44px;">8<span style="font-size:22px;color:var(--text-dim)">+</span></div>
                    <div class="fx-label">Avg yrs — House</div>
                  </div>
                </div>
                <div class="fx-body">25+ years of unbalanced budgets. Multiple shutdowns. Real wages stagnant for a decade.</div>
              </div>
              <div class="fx-divider-v"></div>
              <div class="fx-right" style="padding-left:28px;display:flex;align-items:center;">
                <div class="fx-pull" style="font-size:16px;">"At what point does loyalty to the institution become the problem?"</div>
              </div>
            </div>
            <div class="fx-bottom">
              <span class="fx-label">Congressional Research Service</span>
              <span class="fx-label">#WeThePeople</span>
            </div>
          </div>
        </div>

        <!-- ══════════ FRAME 8 ══════════ -->
        <div class="frame">
          <div class="frame-tk f8-tk">
            <span class="frame-counter">08 / 10</span>
            <div class="texture"></div>
            <div class="content">
              <div class="big-line">They did not build this government<br>because they trusted power.</div>
              <div class="second-line">They built it because they did not.</div>
              <div class="body">Checks. Balances. Accountability.<br><br>The entire architecture assumes that without pressure from the people — power drifts.<br><br>Every time.</div>
              <div class="we">WE ARE<br>THE <span>PRESSURE.</span></div>
            </div>
          </div>
          <div class="frame-x fx-base" style="background:#0b0a08;">
            <span class="frame-counter">08 / 10</span>
            <div style="position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(240,237,230,0.006) 3px,rgba(240,237,230,0.006) 4px);pointer-events:none;z-index:1;"></div>
            <div style="position:relative;z-index:2;flex:1;display:flex;align-items:center;gap:32px;">
              <div style="flex:1.2;">
                <div class="fx-headline" style="font-size:28px;line-height:1.1;margin-bottom:10px;">They did not build this government because they trusted power.<br><span style="font-family:'Playfair Display',serif;font-style:italic;font-size:22px;color:var(--blue);">They built it because they did not.</span></div>
                <div class="fx-body">Checks. Balances. Accountability. The entire architecture assumes that without pressure from the people — power drifts. Every time.</div>
              </div>
              <div class="fx-divider-v"></div>
              <div style="flex:0.8;padding-left:28px;text-align:center;">
                <div class="fx-giant" style="font-size:60px;line-height:0.9;">WE ARE<br>THE<br><span>PRESSURE.</span></div>
              </div>
            </div>
            <div class="fx-bottom">
              <span class="fx-label">The Founding Architecture</span>
              <span class="fx-label">#HoldThemAccountable</span>
            </div>
          </div>
        </div>

        <!-- ══════════ FRAME 9 ══════════ -->
        <div class="frame">
          <div class="frame-tk f9-tk">
            <span class="frame-counter">09 / 10</span>
            <div class="line1">The Constitution does not give them power.</div>
            <div class="line2">IT LOANS</div>
            <div class="line3">IT.</div>
            <div class="line1" style="font-size:20px;color:var(--blue);font-family:'Bebas Neue',sans-serif;letter-spacing:0.05em;">FROM US.</div>
            <div class="triplet">
              Not with anger.<br>
              Not with noise.<br>
              With information. With votes. With memory.
            </div>
            <div class="final">Remember what you just watched.</div>
          </div>
          <div class="frame-x fx-base">
            <span class="frame-counter">09 / 10</span>
            <div style="flex:1;display:flex;align-items:center;gap:0;">
              <div style="flex:1.2;padding-right:32px;">
                <div class="fx-body" style="margin-bottom:6px;text-transform:uppercase;letter-spacing:0.1em;font-size:10px;">The Constitution does not give them power.</div>
                <div class="fx-giant" style="font-size:72px;line-height:0.85;">IT LOANS<br>IT.</div>
                <div class="fx-headline" style="font-size:36px;color:var(--blue);margin-top:4px;">FROM US.</div>
              </div>
              <div class="fx-divider-v"></div>
              <div style="flex:0.8;padding-left:32px;display:flex;flex-direction:column;justify-content:center;">
                <div class="fx-body" style="line-height:2.4;text-transform:uppercase;letter-spacing:0.1em;">Not with anger.<br>Not with noise.<br>With information.<br>With votes.<br>With memory.</div>
                <div class="fx-body" style="margin-top:14px;font-style:italic;color:var(--text);">Remember what you just watched.</div>
              </div>
            </div>
            <div class="fx-bottom">
              <span class="fx-label">Whose Side Are They On</span>
              <span class="fx-label">#WeThePeople</span>
            </div>
          </div>
        </div>

        <!-- ══════════ FRAME 10 ══════════ -->
        <div class="frame">
          <div class="frame-tk f10-tk">
            <span class="frame-counter">10 / 10</span>
            <div class="top-stat">Congress approval rating — Gallup March 2026</div>
            <div class="big-85">YOUR<br>VOTE IS THE<br><span>OTHER<br>85%.</span></div>
            <div class="rule"></div>
            <div class="cta-text">Share this if you think Congress should answer to the people.<br>Not the other way around.</div>
            <div class="tags">
              #HoldThemAccountable<br>
              #WeThePeople<br>
              #CongressFailed
            </div>
          </div>
          <div class="frame-x fx-base" style="background:#0f0f11;">
            <span class="frame-counter">10 / 10</span>
            <div style="flex:1;display:flex;align-items:center;gap:32px;">
              <div style="flex:1;">
                <div class="fx-label" style="margin-bottom:8px;">Congress approval — Gallup March 2026</div>
                <div class="fx-giant" style="font-size:96px;line-height:0.8;">15<span style="font-size:40px;">%</span></div>
                <div style="width:100%;height:1px;background:var(--blue);opacity:0.4;margin:12px 0;"></div>
                <div class="fx-headline" style="font-size:32px;">Yours is the<br><span style="color:var(--blue);">other 85%.</span></div>
              </div>
              <div class="fx-divider-v"></div>
              <div style="flex:1;padding-left:28px;display:flex;flex-direction:column;justify-content:center;">
                <div class="fx-body" style="margin-bottom:16px;">Share this if you think Congress should answer to the people. Not the other way around.</div>
                <div class="fx-accent" style="line-height:2.2;">#HoldThemAccountable<br>#WeThePeople<br>#CongressFailed</div>
              </div>
            </div>
            <div class="fx-bottom">
              <span class="fx-label">Whose Side Are They On — Congressional Accountability</span>
            </div>
          </div>
        </div>

      </div><!-- /frames -->
    </div><!-- /viewer -->

    <!-- NAV -->
    <div class="nav">
      <button class="nav-btn" id="prevBtn" onclick="navigate(-1)" disabled>← Prev</button>
      <div class="nav-dots" id="dots"></div>
      <button class="nav-btn" id="nextBtn" onclick="navigate(1)">Next →</button>
    </div>

    <div class="dl-note">Screenshot each frame at full resolution for export &nbsp;|&nbsp; Toggle format above to switch between TikTok 9:16 and X 16:9</div>
  </div>
</div>

<script>
  let current = 0;
  const total = 10;
  let fmt = 'tiktok';

  const viewer = document.getElementById('viewer');
  const framesEl = document.getElementById('frames');
  const dotsEl = document.getElementById('dots');

  // Build dots
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => goTo(i);
    dotsEl.appendChild(d);
  }

  function goTo(n) {
    current = Math.max(0, Math.min(total - 1, n));
    const w = fmt === 'tiktok' ? 390 : 720;
    framesEl.style.transform = `translateX(-${current * w}px)`;
    document.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
    document.getElementById('prevBtn').disabled = current === 0;
    document.getElementById('nextBtn').disabled = current === total - 1;
  }

  function navigate(dir) { goTo(current + dir); }

  function setFormat(f) {
    fmt = f;
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    if (f === 'tiktok') {
      viewer.className = 'viewer tiktok';
    } else {
      viewer.className = 'viewer xformat';
    }

    // Reset and reposition
    framesEl.style.transition = 'none';
    framesEl.style.transform = 'translateX(0)';
    current = 0;
    setTimeout(() => {
      framesEl.style.transition = 'transform 0.45s cubic-bezier(0.77,0,0.18,1)';
    }, 50);

    document.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === 0);
    });
    document.getElementById('prevBtn').disabled = true;
    document.getElementById('nextBtn').disabled = false;
  }

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'ArrowLeft') navigate(-1);
  });
</script>
</body>
</html>
