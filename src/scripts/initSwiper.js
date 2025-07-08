// Core de Swiper y estilos
import Swiper from 'swiper';
import 'swiper/css';
// Módulo Navigation de Swiper y estilos
import { Navigation, Pagination, Keyboard} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/scrollbar";

// Configurar Swiper
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Keyboard],
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    }
});