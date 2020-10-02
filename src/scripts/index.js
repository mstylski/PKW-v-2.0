import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}


const menuElement = document.querySelector('.nav-list');
const topHeaderElement = document.querySelector('#top-header');
const cookiesAcceptBtn = document.querySelector('#cookie-btn');
const cookiesBoxElement = document.querySelector('.cookie-box');
const menuBtn = document.querySelector('#menu-btn');
const cookiesLocalStorageKey = 'cookies_accepted';

const closeMenu = () => {
  document.querySelector('.nav-list').style.display = 'none';
}

const toggleMenu = () => {
  const menuDisplay = menuElement.style.display;
  if (menuDisplay === 'block') {
    menuElement.style.display = 'none';
  } else {
    menuElement.style.display = 'block'
  }
}

const animateTopHeader = () => {
  if (window.scrollY > 200) {
    topHeaderElement.classList.add('animate-header');
  } else {
    topHeaderElement.classList.remove('animate-header');
  }
}

const closeCookies = () => {
  cookiesBoxElement.style.display = 'none';
  localStorage.setItem(cookiesLocalStorageKey, 'yes');
}

const verifyCookie = () => {
  if (!localStorage.getItem(cookiesLocalStorageKey)) {
    cookiesBoxElement.style.display = 'block';
  }
}

const setGallery = () => {
  jQuery(document).ready(function () {
    jQuery(`#gallery-content`).nanogallery2( {
      thumbnailHeight:  150,
      thumbnailWidth:   150,
      itemsBaseURL:     'public/images/gallery/',
      items: [
        { src: 'black_sago-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-black_sago-kuchnia-azjatycka-gdansk.webp'},
        { src: 'china_con_carne-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-china_con_carne-kuchnia-azjatycka-gdansk.webp'},
        { src: 'burger-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-burger-kuchnia-azjatycka-gdansk.webp'},
        { src: 'china_con_carne2-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-china_con_carne2-kuchnia-azjatycka-gdansk.webp'},
        { src: 'deser3-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-deser3-kuchnia-azjatycka-gdansk.webp'},
        { src: 'kopytka-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-kopytka-kuchnia-azjatycka-gdansk.webp'},
        { src: 'kurczak_sekretarza_kima-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-kurczak_sekretarza_kima-kuchnia-azjatycka-gdansk.webp'},
        { src: 'kurczak_kim1-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-kurczak_kim1-kuchnia-azjatycka-gdansk.webp'},
        { src: 'kurczak_kim2-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-kurczak_kim2-kuchnia-azjatycka-gdansk.webp'},
        { src: 'matcha-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-matcha-kuchnia-azjatycka-gdansk.webp'},
        { src: 'wolowina-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-wolowina-kuchnia-azjatycka-gdansk.webp'},
        { src: 'szarpanina-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-szarpanina-kuchnia-azjatycka-gdansk.webp'},
        { src: 'szparag-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-szparag-kuchnia-azjatycka-gdansk.webp'},
        { src: 'szparagi_w_tempurze-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-szparagi_w_tempurze-kuchnia-azjatycka-gdansk.webp'},
        { src: 'udon orzech-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-udon orzech-kuchnia-azjatycka-gdansk.webp'},
        { src: 'udon_orzech2-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-udon_orzech2-kuchnia-azjatycka-gdansk.webp'},
        { src: 'ryz-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-ryz-kuchnia-azjatycka-gdansk.webp'},
        { src: 'hero2-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-hero2-kuchnia-azjatycka-gdansk.webp'},
        { src: 'zupa-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-zupa-kuchnia-azjatycka-gdansk.webp'},
        { src: 'lemon_thai-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-lemon_thai-kuchnia-azjatycka-gdansk.webp'},
        { src: 'pho-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-pho-kuchnia-azjatycka-gdansk.webp'},
        { src: 'udon3-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-udon3-kuchnia-azjatycka-gdansk.webp'},
        { src: 'wok-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-wok-kuchnia-azjatycka-gdansk.webp'},
        { src: 'china_con_carne-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-china_con_carne-kuchnia-azjatycka-gdansk.webp'},
        { src: 'mix-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-mix-kuchnia-azjatycka-gdansk.webp'},
        { src: 'kimchi-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-kimchi-kuchnia-azjatycka-gdansk.webp'},
        { src: 'Przyganial-Kociol-Kacze-Pho-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-Przyganial-Kociol-Kacze-Pho-kuchnia-azjatycka-gdansk.webp'},
        { src: 'Przyganial-Kociol-Kimchi-Jigae-full-res-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-Przyganial-Kociol-Kimchi-Jigae-full-res-kuchnia-azjatycka-gdansk.webp'},
        { src: 'Przyganial-Kociol-Laksa-z-Penang-full-res-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-Przyganial-Kociol-Laksa-z-Penang-full-res-kuchnia-azjatycka-gdansk.webp'},
        { src: 'miso-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-miso-kuchnia-azjatycka-gdansk.webp'},
        { src: 'Przyganial-Kociol-Pad-Thai-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-Przyganial-Kociol-Pad-Thai-kuchnia-azjatycka-gdansk.webp'},
        { src: 'Przyganial-Kociol-Udon-Kim-Dzong-full-res-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-Przyganial-Kociol-Udon-Kim-Dzong-full-res-kuchnia-azjatycka-gdansk.webp'},
        { src: 'Przyganial-Kociol-Udon-full-res-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-Przyganial-Kociol-Udon-full-res-kuchnia-azjatycka-gdansk.webp'},
        { src: 'Przyganial-Kociol-Zblizenie-1-full-res-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-Przyganial-Kociol-Zblizenie-1-full-res-kuchnia-azjatycka-gdansk.webp'},
        { src: 'Przyganial-Kociol-Zblizenie-3-full-res-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-Przyganial-Kociol-Zblizenie-3-full-res-kuchnia-azjatycka-gdansk.webp'},
        { src: 'Przyganial-Kociol-Zblizenie-5-full-res-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-Przyganial-Kociol-Zblizenie-5-full-res-kuchnia-azjatycka-gdansk.webp'},
        { src: 'ogrodek-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-ogrodek-kuchnia-azjatycka-gdansk.webp'},
        { src: 'ogrodek2-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-ogrodek2-kuchnia-azjatycka-gdansk.webp'},
        { src: 'ogrodek3-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-ogrodek3-kuchnia-azjatycka-gdansk.webp'},
        { src: 'lokal-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-lokal-kuchnia-azjatycka-gdansk.webp'},
        { src: 'lokal2-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-lokal2-kuchnia-azjatycka-gdansk.webp'},
        { src: 'lokal3-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-lokal3-kuchnia-azjatycka-gdansk.webp'},
        { src: 'lokal4-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-lokal4-kuchnia-azjatycka-gdansk.webp'},
        { src: 'lokal5-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-lokal5-kuchnia-azjatycka-gdansk.webp'},
        { src: 'lokal6-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-lokal6-kuchnia-azjatycka-gdansk.webp'},
        { src: 'warzywa-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-warzywa-kuchnia-azjatycka-gdansk.webp'},
        { src: 'ziola-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-ziola-kuchnia-azjatycka-gdansk.webp'},
        { src: 'o-nas-stocznia-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-o-nas-stocznia-kuchnia-azjatycka-gdansk.webp'},
        { src: 'patelnia-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-patelnia-kuchnia-azjatycka-gdansk.webp'},
        { src: 'ramen_cebulowy-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-ramen_cebulowy-kuchnia-azjatycka-gdansk.webp'},
        { src: 'ryż_smazony2-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-ryż_smazony2-kuchnia-azjatycka-gdansk.webp'},
        { src: 'ryż_smażony-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-ryż_smażony-kuchnia-azjatycka-gdansk.webp'},
        { src: 'stocznia-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-stocznia-kuchnia-azjatycka-gdansk.webp'},
        { src: 'stocznia_-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-stocznia_-kuchnia-azjatycka-gdansk.webp'},
        { src: 'stocznia2-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-stocznia2-kuchnia-azjatycka-gdansk.webp'},
        { src: 'stocznia-patelnia-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-stocznia-patelnia-kuchnia-azjatycka-gdansk.webp'},
        { src: 'sushi-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-sushi-kuchnia-azjatycka-gdansk.webp'},
        { src: 'udon_orzech2-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-udon_orzech2-kuchnia-azjatycka-gdansk.webp'},
        { src: 'wok_stocznia-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-wok_stocznia-kuchnia-azjatycka-gdansk.webp'},
        { src: 'wok_stocznia_2-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-wok_stocznia_2-kuchnia-azjatycka-gdansk.webp'},
        { src: 'wok_stocznia3-kuchnia-azjatycka-gdansk.webp', srct: 'ICON-wok_stocznia3-kuchnia-azjatycka-gdansk.webp'},
      ]
    });
  });
}

menuBtn.addEventListener('click', toggleMenu);
menuElement.addEventListener('click', closeMenu);
window.addEventListener('scroll', animateTopHeader);
cookiesAcceptBtn.addEventListener('click', closeCookies);
verifyCookie();
setGallery();


