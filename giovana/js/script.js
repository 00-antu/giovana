const envelope = document.getElementById("envelope");
const preview = document.getElementById("preview");
const letterSection = document.getElementById("letterSection");
 
let heartsActive = true;
 
const letterText = `
Meu amor,
 
Hoje, com muita felicidade, venho te desejar um Feliz Dia dos Namorados. ❤️
 
Sei que passamos por muitos momentos difíceis, desafios, tristezas e também muitas alegrias. Passamos por tantas coisas que nos fizeram crescer, amadurecer e fortalecer ainda mais o nosso amor. Mesmo diante de tudo, seguimos firmes, confiando em Deus e procurando melhorar a cada dia.
 
Fico muito feliz em saber que em breve completaremos quatro anos juntos. Nossa segunda Copa do Mundo juntos. Quando paro para pensar em tudo o que já vivemos, em tudo o que enfrentamos para chegar até aqui, meu coração se enche de gratidão.
 
Sei que ainda teremos muitos desafios pela frente, mas também sei que não estaremos sozinhos. Tenho muita fé de que, se Deus quiser, no próximo ano estaremos realizando mais um dos nossos sonhos: comprando nosso apartamento, mobiliando nossa casa e finalmente morando juntos. Estamos esperando por isso há tanto tempo, e sinto que este ano Deus amadureceu essa ideia em nossos corações. Depois de muitas conversas, dificuldades e aprendizados, estamos entendendo cada vez mais o propósito que Ele tem para nós.
 
Também sei que precisamos continuar buscando mais a Deus, participando da missa, fortalecendo nossa fé e entregando o nosso relacionamento completamente nas mãos d'Ele. Mesmo quando falhamos, mesmo quando erramos, Deus continua caminhando ao nosso lado, nos guiando e nos abençoando.
 
Eu agradeço todos os dias por Ele cuidar tão bem de nós e por abençoar tanto o nosso relacionamento.
 
Quero que você saiba o quanto eu amo você e o quanto sou grata pelo homem que você se tornou e continua se tornando. Eu admiro sua força, seu esforço, sua dedicação e o seu coração. Confio a minha vida em você porque sei do seu desejo de me proteger, cuidar de mim e construir uma família ao meu lado.
 
Sei que você tem suas falhas, assim como eu tenho as minhas. Sei que existem coisas que precisamos melhorar, mas também sei que estamos dispostos a crescer juntos. Eu acredito em você, acredito no nosso amor e acredito em tudo o que ainda vamos construir.
 
Da mesma forma, eu também erro muito e sou falha em diversas situações. Mas quero que você nunca esqueça que eu te amo profundamente e que estarei aqui ao seu lado.
 
Você foi meu primeiro namorado, é o meu único noivo, será meu esposo, o pai dos meus filhos e o amor da minha vida.
 
Obrigada por tudo o que vivemos até aqui e por tudo o que ainda viveremos.
 
Eu te amo hoje, amanhã e para sempre. ❤️
 
`;
 
envelope.addEventListener("click", () => {
 
    envelope.classList.add("open");
 
    setTimeout(() => {
 
        document.querySelector(".hero").style.display = "none";
 
        preview.classList.remove("hidden");
 
    }, 1400);
 
});
 
preview.addEventListener("click", () => {
 
    preview.classList.add("hidden");
 
    letterSection.classList.remove("hidden");
 
    heartsActive = false;
 
    typeWriter();
 
    setTimeout(() => {
        heartsActive = true;
    }, 12000);
 
});
 
let i = 0;
 
function typeWriter() {
 
    const target = document.getElementById("typingText");
 
    if (i < letterText.length) {
 
        target.innerHTML += letterText.charAt(i);
 
        i++;
 
        setTimeout(typeWriter, 35);
 
    }
 
}
 
/* CORAÇÕES */
 
function createHeart() {
 
    if (!heartsActive) return;
 
    const heart = document.createElement("div");
 
    heart.classList.add("heart");
 
    heart.innerHTML = "❤️";
 
    heart.style.left = Math.random() * 100 + "vw";
 
    heart.style.animationDuration =
        Math.random() * 4 + 3 + "s";
 
    document.body.appendChild(heart);
 
    setTimeout(() => {
        heart.remove();
    }, 7000);
 
}
 
setInterval(createHeart, 300);
 
/* TEMPO JUNTOS */
 
function updateTogether() {
 
    const start = new Date("2022-10-22T00:00:00");
 
    const now = new Date();
 
    const diff = now - start;
 
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
 
    const hours = Math.floor(diff / (1000 * 60 * 60));
 
    const minutes = Math.floor(diff / (1000 * 60));
 
    document.getElementById("daysTogether").textContent =
        days.toLocaleString();
 
    document.getElementById("hoursTogether").textContent =
        hours.toLocaleString();
 
    document.getElementById("minutesTogether").textContent =
        minutes.toLocaleString();
 
}
 
setInterval(updateTogether, 1000);
updateTogether();
 
/* CONTAGEM PARA 4 ANOS */
 
function updateCountdown() {
 
    const target = new Date("2026-10-22T00:00:00");
 
    const now = new Date();
 
    const diff = target - now;
 
    const days =
        Math.floor(diff / (1000 * 60 * 60 * 24));
 
    const hours =
        Math.floor(diff / (1000 * 60 * 60)) % 24;
 
    const minutes =
        Math.floor(diff / (1000 * 60)) % 60;
 
    const seconds =
        Math.floor(diff / 1000) % 60;
 
    document.getElementById("days").textContent =
        days;
 
    document.getElementById("hours").textContent =
        hours;
 
    document.getElementById("minutes").textContent =
        minutes;
 
    document.getElementById("seconds").textContent =
        seconds;
 
}
 
setInterval(updateCountdown, 1000);
updateCountdown();
 
/* GALERIA */
 
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
 
document.querySelectorAll(".polaroids img")
.forEach(img => {
 
    img.addEventListener("click", () => {
 
        modal.style.display = "flex";
 
        modalImg.src = img.src;
 
    });
 
});
 
modal.addEventListener("click", () => {
 
    modal.style.display = "none";
 
});