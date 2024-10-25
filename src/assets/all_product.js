import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";
let all_product = [
  {
    id: 1,
    name: "Specialized StumpJumper FSR",
    category: "bikes",
    image: p1_img,
    new_price: 2000,
    old_price: 3000,
  },
  {
    id: 2,
    name: "Rockhoppper 29",
    category: "bikes",
    image: p2_img,
    new_price: 700,
    old_price: 1100,
  },
  {
    id: 3,
    name: "Cannondale Synapse carbon 4",
    category: "bikes",
    image: p3_img,
    new_price: 2000,
    old_price: 2600,
  },
  {
    id: 4,
    name: "Scott Addict 40",
    category: "bikes",
    image: p4_img,
    new_price: 3250,
    old_price: 4000,
  },
  {
    id: 5,
    name: "Racing Helmet AeroMax",
    category: "apparel",
    image: p5_img,
    new_price: 180.0,
    old_price: 250.0,
  },
  {
    id: 6,
    name: "Cycling Gloves Thermal",
    category: "apparel",
    image: p6_img,
    new_price: 50.0,
    old_price: 75.0,
  },
  {
    id: 7,
    name: "Wireless Cycling Computer",
    category: "parts",
    image: p7_img,
    new_price: 120.0,
    old_price: 160.0,
  },
  {
    id: 8,
    name: "Shimano S-Phyre SH-RC903",
    category: "apparel",
    image: p8_img,
    new_price: 250,
    old_price: 400,
  },
  {
    id: 9,
    name: "Bike Lights Front & Rear Set",
    category: "parts",
    image: p9_img,
    new_price: 30.0,
    old_price: 50.0,
  },
  {
    id: 10,
    name: "Cycling Jersey Pro Team",
    category: "apparel",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.0,
  },
  {
    id: 11,
    name: "Cycling Bib Shorts",
    category: "apparel",
    image: p11_img,
    new_price: 90.0,
    old_price: 150.0,
  },
  {
    id: 12,
    name: "Specialized centro LED helmet",
    category: "apparel",
    image: p12_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 13,
    name: "Hydration Backpack",
    category: "parts",
    image: p13_img,
    new_price: 60.0,
    old_price: 90.0,
  },
  {
    id: 14,
    name: "Shimano Ultegra R8100-p dual-sided power meter",
    category: "parts",
    image: p14_img,
    new_price: 900,
    old_price: 1350,
  },
  {
    id: 15,
    name: "Shimano 105 Di2 R7100 Group Set",
    category: "parts",
    image: p15_img,
    new_price: 1100,
    old_price: 1500,
  },
  {
    id: 16,
    name: "Mountain Bike Pedals",
    category: "parts",
    image: p16_img,
    new_price: 55.0,
    old_price: 80.0,
  },
  {
    id: 17,
    name: "Shimano Road Shoes - RC903 - White",
    category: "apparel",
    image: p17_img,
    new_price: 300,
    old_price: 550,
  },
  {
    id: 18,
    name: "Disc Brakes Set",
    category: "parts",
    image: p18_img,
    new_price: 200.0,
    old_price: 280.0,
  },
  {
    id: 19,
    name: "Bike Saddle Gel Padded",
    category: "parts",
    image: p19_img,
    new_price: 75.0,
    old_price: 100.0,
  },
  {
    id: 20,
    name: "Cycling Shoes Road Race",
    category: "apparel",
    image: p20_img,
    new_price: 180.0,
    old_price: 220.0,
  },
  {
    id: 21,
    name: "Bike Tool Kit 20-in-1",
    category: "parts",
    image: p21_img,
    new_price: 45.0,
    old_price: 60.0,
  },
  {
    id: 22,
    name: "Bike Chain Cleaner",
    category: "parts",
    image: p22_img,
    new_price: 25.0,
    old_price: 35.0,
  },
  {
    id: 23,
    name: "Bike Stand Foldable",
    category: "parts",
    image: p23_img,
    new_price: 60.0,
    old_price: 85.0,
  },
  {
    id: 24,
    name: "Cycling Sunglasses UV400",
    category: "apparel",
    image: p24_img,
    new_price: 40.0,
    old_price: 70.0,
  },
  {
    id: 25,
    name: "Bike Helmet Lightweight",
    category: "apparel",
    image: p25_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 26,
    name: "Cycling Water Bottle",
    category: "parts",
    image: p26_img,
    new_price: 20.0,
    old_price: 30.0,
  },
  {
    id: 27,
    name: "Bike Bell Classic",
    category: "parts",
    image: p27_img,
    new_price: 10.0,
    old_price: 15.0,
  },
  {
    id: 28,
    name: "Cannondale",
    category: "bikes",
    image: p28_img,
    new_price: 5000,
    old_price: 7500,
  },
  {
    id: 29,
    name: "Bike Headlight Rechargeable",
    category: "parts",
    image: p29_img,
    new_price: 40.0,
    old_price: 60.0,
  },
  {
    id: 30,
    name: "Cycling Cap Windproof",
    category: "apparel",
    image: p30_img,
    new_price: 15.0,
    old_price: 25.0,
  },
  {
    id: 31,
    name: "Cycling Socks Breathable",
    category: "apparel",
    image: p31_img,
    new_price: 10.0,
    old_price: 15.0,
  },
  {
    id: 32,
    name: "Bike Repair Stand",
    category: "parts",
    image: p32_img,
    new_price: 120.0,
    old_price: 180.0,
  },
  {
    id: 33,
    name: "Bike Frame Bag",
    category: "parts",
    image: p33_img,
    new_price: 35.0,
    old_price: 50.0,
  },
  {
    id: 34,
    name: "Foam Roller for Muscle Recovery",
    category: "apparel",
    image: p34_img,
    new_price: 30.0,
    old_price: 45.0,
  },
  {
    id: 35,
    name: "Bike Seat Post Dropper",
    category: "parts",
    image: p35_img,
    new_price: 200.0,
    old_price: 300.0,
  },
  {
    id: 36,
    name: "High Visibility Jacket",
    category: "apparel",
    image: p36_img,
    new_price: 100.0,
    old_price: 150.0,
  },
];

export default all_product;