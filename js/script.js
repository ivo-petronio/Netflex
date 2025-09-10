var player = document.querySelector(".trailer")
var video = document.querySelector(".video")
var trailerButton = document.querySelector(".play")
var bgm = new Audio();
var isBgm = false;

const FUTURAMA = {
    background: "images/futurama_banner.jpg",
    title: "images/futurama.png",
    sinopse: "Cansado de trabalhar como entregador e de inúmeros fracassos na vida, Fry vai parar por acidente no ano 3000, onde tudo e todos que conhecia já não existem mais. Agora Fry terá uma nova chance de recomeçar, cercado de muita tecnologia e de criaturas estranhas vindas de outras galáxias.",
    video: "https://www.youtube.com/embed/xDO3wrzJ82g?si=AQjG2kfb6ei37kdf",
    bgm: "sounds/futurama_bgm.mp3"
}

const LILO_STITCH = {
    background: "images/lilo_stitch_background.webp",
    title: "images/lilo_stitch_title.jpg",
    sinopse: "lilo&Stitchlilo&Stitchlilo&Stitchlilo&Stitchlilo&Stitchlilo&St itchlilo&Stitc hlilo&Stitc hlilo&Stitchlilo&Stitchlilo&Stitchlilo&Stitchl ilo&Stitchlilo&S titchlilo&Stit chli lo& Stitc hlilo &Stitchl ilo&Stitc hlilo&Sti tchlilo&Sti tchlilo&St it chl il o&Sti tchli lo&St itchl ilo&S titc hl ilo&S titch lilo &Stit chlilo &Stit ch.",
    video: "https://www.youtube.com/embed/oLnS1Ij9-Kk?si=SHJTsWd2edU49fwl",
    bgm: ""
}

const THERING = {
    background: "images/o_chamado_background.jpg",
    title: "images/o_chamado_title.jpg",
    sinopse: "Samara é uma menina assustadora que sai de dentro de um poço e depois de dentro de uma TV.",
    video: "https://www.youtube.com/embed/-xG3jTTNc7s?si=VEVivp7esYoYI69V",
    bgm: "sounds/the_ring_bgm.mp3"
}

const THIRTEEN = {
    background: "images/thirteen_ghosts_background.jpg",
    title: "images/thirteen_title.webp",
    sinopse: "Uma família herda a casa perfeita, ou melhor, perfeitamente mal assombrada. Cuidado para não se perder neste labirinto de vidro: pode ser que um fantasmas acabe o encontrando...",
    video: "https://www.youtube.com/embed/g4-IAugpy4I?si=KE500_MYBT11g5qH",
    bgm: ""
}

const PESADELO = {
    background: "images/hora_pesadelo_background.jpg",
    title: "images/hora_pesadelo_title.webp",
    sinopse: "Prepare-se para conhecer o homem dos seus sonhos, literalmente...",
    video: "https://www.youtube.com/embed/HHNMjwYPlvY?si=f5ROdQ4n09dIvrhU",
    bgm: "sounds/pesadelo_bgm.mp3"
}

const GHOST = {
    background: "images/ghost_vida_background.jpg",
    title: "images/ghost_vida_title.jpg",
    sinopse: "Filme meloso pra quem sonha em fazer um vaso de barro tendo um fantasma como professor.",
    video: "https://www.youtube.com/embed/Svorm23zipw?si=lpC9uQDxdpMmEMz0",
    bgm: "sounds/ghost_vida_bgm.mp3"
}

const SCOOBY_DOO = {
    background: "images/scooby_doo_background.webp",
    sinopse: "Enfrentar monstros, bruxas, vampiros e fantasmas já é divertido. Mas com seu amigo peludo de quatro patas é melhor ainda.",
    bgm: "sounds/scooby_doo_bgm.mp3",
    video: "https://www.youtube.com/embed/9mxz3Ma2DLk?si=ZmwwDccYIEnleWfU"
}

const TEMPLATES = [FUTURAMA, LILO_STITCH, THERING, THIRTEEN, PESADELO, GHOST, SCOOBY_DOO]

var template = {
    background: document.querySelector(".banner"),
    title: document.querySelector(".movie-title"),
    sinopse: document.querySelector(".sinopse")
}

function toggleTemplate(element) {
    if (isBgm) {
        bgm.pause();
        bgm = null;
        !isBgm;
    }
    bgm = new Audio();
    let index = parseInt(element.getAttribute("position"));
    console.log(index);
    template.background.style.backgroundImage = "url(" + TEMPLATES[index].background + ")";
    template.title.src = TEMPLATES[index].title;
    template.sinopse.innerHTML = TEMPLATES[index].sinopse;
    bgm.setAttribute("src", TEMPLATES[index].bgm);
    bgm.play();
    isBgm = true;
    trailerButton.setAttribute("position", index);
}

function playVideo(element) {
    bgm.pause();
    player.classList.toggle("active");
    let itemTemplate = parseInt(element.getAttribute("position"));
    video.src = TEMPLATES[itemTemplate].video;
}

function closeVideo() {
    player.classList.toggle("active");
    video.src = "";
}