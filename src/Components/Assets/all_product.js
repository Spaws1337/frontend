// src/Assets/all_product.js

import p1_img1      from "../Assets/product1_view1.png";
import p1_img2      from "../Assets/product1_view2.png";
import p1_img3      from "../Assets/product1_view3.png";
import p1_thumb3d   from "../Assets/product1_3d_thumb.png";
import p1_model     from "../Assets/product1_model.glb";

import p2_img1      from "../Assets/product2_view1.png";
import p2_img2      from "../Assets/product2_view2.png";
import p2_img3      from "../Assets/product2_view3.png";
import p2_thumb3d   from "../Assets/product2_3d_thumb.png";
import p2_model     from "../Assets/product2_model.glb";

import p3_img1      from "../Assets/product3_view1.png";
import p3_img2      from "../Assets/product3_view2.png";
import p3_img3      from "../Assets/product3_view3.png";
import p3_thumb3d   from "../Assets/product3_3d_thumb.png";
import p3_model     from "../Assets/product3_model.glb";

import p4_img1      from "../Assets/product4_view1.png";
import p4_img2      from "../Assets/product4_view2.png";
import p4_img3      from "../Assets/product4_view3.png";
import p4_thumb3d   from "../Assets/product4_3d_thumb.png";
import p4_model     from "../Assets/product4_model.glb";

import p5_img1      from "../Assets/product5_view1.jpg";
import p5_img2      from "../Assets/product5_view2.jpg";
import p5_img3      from "../Assets/product5_view3.jpg";
import p5_thumb3d   from "../Assets/product5_3d_thumb.jpg";
import p5_model     from "../Assets/product5_model.glb";

const all_product = [
  {
    id: 1,
    name: "Модель NFC One",
    price: 24990,
    description: "Технологичная NFC One с встроенной меткой NFC для мгновенной информации о товаре и доступом к эксклюзивному контенту. Выполнена из премиальной кожи с эргономичной подошвой для максимального комфорта.",
    gallery: [
      { type: "image", src: p1_img1,    alt: "NFC One – вид спереди" },
      { type: "image", src: p1_img2,    alt: "NFC One – вид сбоку"   },
      { type: "image", src: p1_img3,    alt: "NFC One – вид сзади"   },
      { type: "3d",    src: p1_thumb3d, alt: "NFC One – 3D модель", model: p1_model }
    ]
  },
  {
    id: 2,
    name: "Модель Future",
    price: 25450,
    description: "Современная Future с ультралёгкими материалами и вентиляцией стопы. Подошва с амортизацией возвращает энергию при каждом шаге, а футуристический дизайн подчёркивает ваш стиль.",
    gallery: [
      { type: "image", src: p2_img1,    alt: "Future – вид спереди" },
      { type: "image", src: p2_img2,    alt: "Future – вид сбоку"   },
      { type: "image", src: p2_img3,    alt: "Future – вид сзади"   },
      { type: "3d",    src: p2_thumb3d, alt: "Future – 3D модель", model: p2_model }
    ]
  },
  {
    id: 3,
    name: "Модель Street Pro",
    price: 24990,
    description: "Универсальная Street Pro для города: усиленная подошва противоскользящая, износостойкий верх и модные цветовые акценты. Идеальна для активных прогулок по урбан-среде.",
    gallery: [
      { type: "image", src: p3_img1,    alt: "Street Pro – вид спереди" },
      { type: "image", src: p3_img2,    alt: "Street Pro – вид сбоку"   },
      { type: "image", src: p3_img3,    alt: "Street Pro – вид сзади"   },
      { type: "3d",    src: p3_thumb3d, alt: "Street Pro – 3D модель", model: p3_model }
    ]
  },
  {
    id: 4,
    name: "Модель Urban",
    price: 25800,
    description: "Стильная Urban с дышащей сеткой и гибкой подошвой. Лёгкая и прочная, она станет идеальным выбором для повседневного комфорта в городе и за его пределами.",
    gallery: [
      { type: "image", src: p4_img1,    alt: "Urban – вид спереди" },
      { type: "image", src: p4_img2,    alt: "Urban – вид сбоку"   },
      { type: "image", src: p4_img3,    alt: "Urban – вид сзади"   },
      { type: "3d",    src: p4_thumb3d, alt: "Urban – 3D модель", model: p4_model }
    ]
  },
  {
    id: 5,
    name: "Модель Vision",
    price: 25300,
    description: "Vision — высокопроизводительная модель с усиленной пяткой для стабильности и светоотражающими элементами для безопасности. Стильный дизайн и максимальное сцепление гарантируют уверенность в каждом шаге.",
    gallery: [
      { type: "image", src: p5_img1,    alt: "Vision – вид спереди" },
      { type: "image", src: p5_img2,    alt: "Vision – вид сбоку"   },
      { type: "image", src: p5_img3,    alt: "Vision – вид сзади"   },
      { type: "3d",    src: p5_thumb3d, alt: "Vision – 3D модель", model: p5_model }
    ]
  }
];

export default all_product;
