const exams = [
  {name:"BPSC Exams", icon:"🏛️", cls:"bpsc", lines:["Prelims & Mains","5 Year PYQ","Practice Set","Mock Test"]},
  {name:"BSSC Exams", icon:"📄", cls:"bssc", lines:["CGL / Inter Level","5 Year PYQ","Practice Set","Mock Test"]},
  {name:"BTSC Exams", icon:"🩺", cls:"btsc", lines:["Technical Posts","Post-wise PYQ","Practice Set","Mock Test"]},
  {name:"Bihar Police / CSBC", icon:"👮", cls:"police", lines:["Constable • SI • Driver","5 Year PYQ","Practice Set","Mock Test"]},
  {name:"Teacher Exams", icon:"👨‍🏫", cls:"teacher", lines:["TRE • STET","Subject-wise PYQ","Practice Set","Mock Test"]},
  {name:"Other Bihar Exams", icon:"🏢", cls:"other", lines:["Cooperative Bank","BPSC Other Posts","Other Recruitments","PYQ • Practice • Mock"]}
];

const tests = [
  ["🏛️","BPSC Prelims PYQ 2025","100 Questions"],
  ["📄","BSSC Inter Level PYQ","100 Questions"],
  ["🩺","BTSC Staff Nurse PYQ","100 Questions"],
  ["👮","Bihar Police Constable PYQ","100 Questions"]
];

function renderExams(list = exams){
  document.getElementById("examGrid").innerHTML = list.map((e,i)=>`
    <article class="exam-card ${e.cls}">
      <h3>${e.icon} ${e.name}</h3>
      ${e.lines.map(x=>`<p>• ${x}</p>`).join("")}
      <button onclick="openExam(${i})" aria-label="${e.name}">→</button>
    </article>
  `).join("");
}

function renderTests(){
  document.getElementById("testGrid").innerHTML = tests.map(t=>`
    <article class="test-card">
      <div style="font-size:28px">${t[0]}</div>
      <h3>${t[1]}</h3>
      <span>${t[2]}</span>
      <button onclick="startTest('${t[1]}')">Start Test →</button>
    </article>
  `).join("");
}

function searchExams(){
  const q = document.getElementById("examSearch").value.trim().toLowerCase();
  if(!q){ renderExams(); return; }
  renderExams(exams.filter(e => (e.name+" "+e.lines.join(" ")).toLowerCase().includes(q)));
}

function openExam(index){
  const exam = exams[index];
  alert(`${exam.name}\n\nअगले चरण में यहाँ Exam Pattern, Syllabus, Notes, PYQ, Practice Sets और Mock Tests खुलेंगे।`);
}

function startTest(name){
  alert(`${name}\n\nयहाँ आपके वास्तविक test page का link लगाया जाएगा।`);
}

function buyPass(){
  alert("₹199 / 3 Months All Bihar Exams Pass\n\nPayment gateway को backend से connect किया जाएगा। Secret key इस frontend file में नहीं रखनी है.");
}

document.getElementById("examSearch").addEventListener("keydown", e => {
  if(e.key === "Enter") searchExams();
});

renderExams();
renderTests();
