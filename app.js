(function () {
  const KEYS = ["A", "B", "C", "D", "E"];
  const papers = window.OC_PAPERS || {};
  const params = new URLSearchParams(location.search);
  const requested = params.get("paper");
  const paper = papers[requested];

  const el = (id) => document.getElementById(id);
  const picker = el("picker");
  const exam = el("exam");

  function fillPicker() {
    const box = el("paper-choices");
    if (!box) return;
    box.innerHTML = "";
    Object.keys(papers).sort().forEach((id) => {
      const p = papers[id];
      const a = document.createElement("a");
      a.className = "paper-choice";
      a.href = "test.html?paper=" + encodeURIComponent(id);
      a.innerHTML =
        '<span class="stamp">' + p.stamp + "</span>" +
        "<h2>" + p.title + "</h2>" +
        "<p>" + p.blurb + "</p>" +
        "<p class='note'>" + p.questions.length + " questions, " + p.minutes + " minutes</p>";
      box.appendChild(a);
    });
  }

  if (!paper) {
    if (exam) exam.hidden = true;
    if (picker) picker.hidden = false;
    fillPicker();
    const t = el("timer");
    if (t) t.hidden = true;
    const lab = document.querySelector(".paper-label");
    if (lab) lab.hidden = true;
    const topic = el("topic");
    if (topic) topic.hidden = true;
    return;
  }

  if (picker) picker.hidden = true;
  if (exam) exam.hidden = false;

  const qs = paper.questions;
  const minutes = paper.minutes;
  const n = qs.length;
  const storeState = "oc-" + paper.id + "-state";
  const storeAns = "oc-" + paper.id + "-answers";

  const sel = el("paperSel");
  if (sel) {
    Object.keys(papers).sort().forEach((id) => {
      const o = document.createElement("option");
      o.value = id;
      o.textContent = papers[id].stamp.replace(" Mathematical reasoning", "");
      if (id === paper.id) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener("change", () => {
      location.href = "test.html?paper=" + encodeURIComponent(sel.value);
    });
  }

  const state = {
    i: 0,
    answers: Array(n).fill(null),
    flags: Array(n).fill(false),
    start: Date.now(),
    left: minutes * 60,
    done: false
  };

  const saved = localStorage.getItem(storeState);
  if (saved) {
    try {
      const s = JSON.parse(saved);
      if (!s.done && s.answers && s.answers.length === n) {
        Object.assign(state, s);
        state.left = Math.max(0, minutes * 60 - Math.floor((Date.now() - s.start) / 1000));
      }
    } catch (e) { /* ignore */ }
  }

  function persist() {
    localStorage.setItem(storeState, JSON.stringify({
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
    el("topic").textContent = state.done ? q.topic : paper.stamp;
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
    el("openSol").href = "solutions.html?paper=" + encodeURIComponent(paper.id);
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
    localStorage.setItem(storeAns, JSON.stringify(state.answers));
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
    localStorage.removeItem(storeState);
    localStorage.removeItem(storeAns);
    location.reload();
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea, select")) return;
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

  const t0 = el("timer");
  if (t0) t0.textContent = fmt(minutes * 60);
  draw();
  tick();
  setInterval(tick, 1000);
})();
