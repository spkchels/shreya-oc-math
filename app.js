(function () {
  const KEYS = ["A", "B", "C", "D", "E"];
  const qs = window.OC_QUESTIONS;
  const minutes = window.OC_META.minutes;
  const n = qs.length;

  const state = {
    i: 0,
    answers: Array(n).fill(null),
    flags: Array(n).fill(false),
    start: Date.now(),
    left: minutes * 60,
    done: false
  };

  const saved = localStorage.getItem("oc-t1-state");
  if (saved) {
    try {
      const s = JSON.parse(saved);
      if (!s.done && s.answers && s.answers.length === n) {
        Object.assign(state, s);
        state.left = Math.max(0, minutes * 60 - Math.floor((Date.now() - s.start) / 1000));
      }
    } catch (e) { /* ignore */ }
  }

  const el = (id) => document.getElementById(id);

  function persist() {
    localStorage.setItem("oc-t1-state", JSON.stringify({
      i: state.i,
      answers: state.answers,
      flags: state.flags,
      start: state.start,
      done: state.done
    }));
  }

  function fmt(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function renderMap() {
    const map = el("qmap");
    map.innerHTML = "";
    qs.forEach((q, idx) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = String(idx + 1);
      b.className = "";
      if (idx === state.i) b.classList.add("on");
      if (state.answers[idx] !== null) b.classList.add("ans");
      if (state.flags[idx]) b.classList.add("flag");
      if (state.done) {
        b.classList.toggle("ok", state.answers[idx] === q.answer);
        b.classList.toggle("bad", state.answers[idx] !== q.answer);
      }
      b.addEventListener("click", () => { state.i = idx; draw(); });
      map.appendChild(b);
    });
  }

  function draw() {
    const q = qs[state.i];
    el("qnum").textContent = "Question " + q.id + " of " + n;
    el("stem").innerHTML = q.stem + (q.fig ? '<div class="fig">' + q.fig + "</div>" : "");
    const box = el("options");
    box.innerHTML = "";
    q.options.forEach((opt, j) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "opt";
      if (state.answers[state.i] === j) b.classList.add("sel");
      if (state.done) {
        if (j === q.answer) b.classList.add("ok");
        else if (state.answers[state.i] === j) b.classList.add("bad");
      }
      b.innerHTML = '<span class="key">' + KEYS[j] + "</span><span>" + opt + "</span>";
      b.addEventListener("click", () => {
        if (state.done) return;
        state.answers[state.i] = j;
        persist();
        draw();
      });
      box.appendChild(b);
    });
    el("flag").textContent = state.flags[state.i] ? "Unflag" : "Flag for review";
    el("prev").disabled = state.i === 0;
    el("next").disabled = state.i === n - 1;
    el("topic").textContent = state.done ? q.topic : "Mathematical reasoning";
    renderMap();
    persist();
    if (state.done) showScore();
  }

  function showScore() {
    let c = 0;
    qs.forEach((q, i) => { if (state.answers[i] === q.answer) c += 1; });
    const panel = el("result");
    panel.hidden = false;
    el("score").textContent = c + " / " + n;
    const pct = c / n;
    const banner = el("banner");
    banner.className = "banner " + (pct >= 0.8 ? "ok" : pct >= 0.5 ? "mid" : "low");
    banner.textContent = pct >= 0.8
      ? "Strong paper. Open Solutions and drill any you missed."
      : pct >= 0.5
        ? "Solid start. Read the foundation box for every miss before you retry."
        : "Treat this as a teaching paper. Go to Solutions and work one topic at a time.";
    el("submit").hidden = true;
    el("flag").hidden = true;
  }

  function tick() {
    if (state.done) return;
    const used = Math.floor((Date.now() - state.start) / 1000);
    state.left = Math.max(0, minutes * 60 - used);
    const t = el("timer");
    t.textContent = fmt(state.left);
    t.classList.toggle("warn", state.left <= 300);
    if (state.left === 0) finish();
  }

  function finish() {
    state.done = true;
    persist();
    localStorage.setItem("oc-t1-answers", JSON.stringify(state.answers));
    draw();
  }

  el("prev").addEventListener("click", () => { if (state.i > 0) { state.i -= 1; draw(); } });
  el("next").addEventListener("click", () => { if (state.i < n - 1) { state.i += 1; draw(); } });
  el("flag").addEventListener("click", () => {
    state.flags[state.i] = !state.flags[state.i];
    draw();
  });
  el("submit").addEventListener("click", () => {
    const blank = state.answers.filter((a) => a === null).length;
    const msg = blank
      ? "You have " + blank + " unanswered question" + (blank === 1 ? "" : "s") + ". Submit anyway?"
      : "Submit your paper? You cannot change answers after this.";
    if (confirm(msg)) finish();
  });
  el("retry").addEventListener("click", () => {
    localStorage.removeItem("oc-t1-state");
    localStorage.removeItem("oc-t1-answers");
    location.reload();
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    const k = e.key.toUpperCase();
    const idx = KEYS.indexOf(k);
    if (idx >= 0 && !state.done) {
      state.answers[state.i] = idx;
      draw();
    } else if (e.key === "ArrowRight" && state.i < n - 1) {
      state.i += 1; draw();
    } else if (e.key === "ArrowLeft" && state.i > 0) {
      state.i -= 1; draw();
    }
  });

  draw();
  tick();
  setInterval(tick, 1000);
})();
