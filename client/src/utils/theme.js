/**
 * ダークモードのクラスを切り替える。色が一瞬で変わらず、なめらかに移り変わる。
 */
let timer = null;

export function applyDarkClass(isDark) {
  const root = document.documentElement;
  const already = root.classList.contains('dark-mode') === !!isDark;
  if (already) return;

  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    root.classList.add('theme-switching');
    clearTimeout(timer);
    timer = setTimeout(() => root.classList.remove('theme-switching'), 450);
  }
  root.classList.toggle('dark-mode', !!isDark);
}
