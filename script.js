const timeline = {
  1: "Em uma hora, quase nada parece mudar… mas os atrasos já começam a existir em cadeia.",
  6: "Depois de algumas horas, o impacto aparece nos bastidores: transporte, logística e armazenamento começam a sentir.",
  12: "Meio dia sem produção já é suficiente para pressionar estoques e atrasar exportações.",
  24: "Depois de um dia inteiro, o sistema inteiro sente: não é só comida, é economia, trabalho e circulação."
};

document.querySelectorAll("[data-time]").forEach(btn=>{
  btn.onclick = ()=>{
    document.getElementById("timelineText").innerText =
      timeline[btn.dataset.time];
  };
});

window.addEventListener("scroll", ()=>{
  const btn = document.getElementById("topBtn");
  btn.style.display = window.scrollY > 500 ? "block" : "none";
});

document.getElementById("topBtn").onclick = ()=>{
  window.scrollTo({top:0, behavior:"smooth"});
};
