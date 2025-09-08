// src/data/cars.js
//BMW
import bmw1 from "../assets/bmwm42022.avif";
import bmwx5 from "../assets/bmwx5.png";
import bmwx5x from "../assets/bmwx5-.png";
import bmwx5xx from "../assets/bmwx5--.png";
import bmwx5xxx from "../assets/bmwx5---.png";
import bmwx5xxxx from "../assets/bmwx5----.png";

import bmw7 from "../assets/bmw/bmw7.png";
import bmw72 from "../assets/bmw/bmw72.png";
import bmw73 from "../assets/bmw/bmw73.png";
import bmw74 from "../assets/bmw/bmw74.png";
import bmw75 from "../assets/bmw/bmw75.png";


//Porsche
import porsche911 from "../assets/porsche911.png";
import porschep from "../assets/porschep.png";

import porschem from "../assets/porsche/porschem.png";
import porschem2 from "../assets/porsche/porschem2.png";
import porschem3 from "../assets/porsche/porschem3.png";
import porschem4 from "../assets/porsche/porschem4.png";
import porschem5 from "../assets/porsche/porschem5.png";



import porschet from "../assets/porsche/porschet.png";
import porschet2 from "../assets/porsche/porschet2.png";
import porschet3 from "../assets/porsche/porschet3.png";
import porschet4 from "../assets/porsche/porschet4.png";
import porschet5 from "../assets/porsche/porschet5.png";


//Mercedes
import mercedess from "../assets/mercedes/mercedess.png";
import mercedess2 from "../assets/mercedes/mercedess2.png";
import mercedess3 from "../assets/mercedes/mercedess3.png";
import mercedess4 from "../assets/mercedes/mercedess4.png";
import mercedess5 from "../assets/mercedes/mercedess5.png";

import mercedesgle from "../assets/mercedes/mercedesgle.png";
import mercedesgle2 from "../assets/mercedes/mercedesgle2.png";
import mercedesgle3 from "../assets/mercedes/mercedesgle3.png";
import mercedesgle4 from "../assets/mercedes/mercedesgle4.png";
import mercedesgle5 from "../assets/mercedes/mercedesgle5.png";



//Porsche



import porschec from "../assets/porsche/porchec.png";
import porschec2 from "../assets/porsche/porchec2.png";
import porschec3 from "../assets/porsche/porchec3.png";
import porschec4 from "../assets/porsche/porschec4.png";
import porscheeng from "../assets/porsche/porscheeng.png";


//Tesla
import tesla1 from "../assets/teslamodel32023.png";
import teslar from "../assets/TeslaR.png";
import teslas from "../assets/teslas.png";

import teslay from "../assets/tesla/teslay.png";
import teslay2 from "../assets/tesla/teslay2.png";
import teslay3 from "../assets/tesla/teslay3.png";
import teslay4 from "../assets/tesla/teslay4.png";
import teslay5 from "../assets/tesla/teslay5.png";

import teslax from "../assets/tesla/teslax.png";
import teslax2 from "../assets/tesla/teslax2.png";
import teslax3 from "../assets/tesla/teslax3.png";
import teslax4 from "../assets/tesla/teslax4.png";
import teslax5 from "../assets/tesla/teslax5.png";


//Audi
import audi1 from "../assets/audia62021.jpg";
import audirs7 from "../assets/audirs7.png";

import audiq7 from "../assets/audi/audiq7.png";
import audiq72 from "../assets/audi/audiq72.png";
import audiq73 from "../assets/audi/audiq73.png";
import audiq74 from "../assets/audi/audiq74.png";
import audiq75 from "../assets/audi/audiq75.png";




import { b, image } from "framer-motion/client";

const CARS = [
  // BMW
  { id: 1, brand: "BMW", model: "X5", type: "SUV", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 80, locations: ["Prishtina","Podujeva","Prizren"], image: bmwx5 , gallery: [bmwx5, bmwx5x, bmwx5xx, bmwx5xxx, bmwx5xxxx], rating: 4.8, popularity: 95, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sunroof"], year: 2022, mileage: 15000, availability: true },
  { id: 2, brand: "BMW", model: "3 Series", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 70, locations: ["Prishtina"], image: "https://picsum.photos/seed/bmw-3series/600/400", rating: 4.6, popularity: 88, features: ["GPS", "Bluetooth", "Cruise Control"], year: 2021, mileage: 22000, availability: true },
  { id: 3, brand: "BMW", model: "7 Series", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 120, locations: ["Prishtina"], image: bmw7, gallery: [bmw7 , bmw72 , bmw73 , bmw74 , bmw75] , rating: 4.9, popularity: 92, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sunroof", "Heated Seats", "Massage Seats"], year: 2023, mileage: 8000, availability: true },
  { id: 4, brand: "BMW", model: "i8", type: "EV", fuel: "Electric", seats: 2, transmission: "Automatic", pricePerDay: 150, locations: ["Prishtina"], image: "https://picsum.photos/seed/bmw-i8/600/400", rating: 4.7, popularity: 85, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sport Mode"], year: 2022, mileage: 12000, availability: false },
  { id: 5, brand: "BMW", model: "M4", type: "Coupe", fuel: "Petrol", seats: 4, transmission: "Manual", pricePerDay: 100, locations: ["Prishtina"], image: bmw1, rating: 4.8, popularity: 90, features: ["GPS", "Bluetooth", "Sport Mode", "Leather Seats", "Carbon Fiber"], year: 2023, mileage: 5000, availability: true },

  // Audi
  { id: 6, brand: "Audi", model: "A3", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 60, locations: ["Prishtina","Peja","Gjakova"], image: "https://picsum.photos/seed/audi-a3/600/400", rating: 4.4, popularity: 82, features: ["GPS", "Bluetooth", "Cruise Control"], year: 2021, mileage: 25000, availability: true },
  { id: 7, brand: "Audi", model: "A4", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 75, locations: ["Prishtina"], image: "https://picsum.photos/seed/audi-a4/600/400", rating: 4.6, popularity: 87, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats"], year: 2022, mileage: 18000, availability: true },
  { id: 8, brand: "Audi", model: "A6", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 90, locations: ["Prishtina"], image: audi1, rating: 4.7, popularity: 89, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sunroof"], year: 2021, mileage: 20000, availability: true },
  { id: 9, brand: "Audi", model: "Q7", type: "SUV", fuel: "Diesel", seats: 7, transmission: "Automatic", pricePerDay: 110, locations: ["Prishtina"], image: audiq7, gallery: [audiq7 , audiq72 , audiq73 , audiq74 , audiq75] , rating: 4.8, popularity: 91, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Third Row", "Sunroof"], year: 2022, mileage: 16000, availability: true },
  { id: 10, brand: "Audi", model: "RS7", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 130, locations: ["Prishtina"], image: audirs7, rating: 4.9, popularity: 94, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sport Mode", "Carbon Fiber"], year: 2023, mileage: 3000, availability: false },

  // Mercedes
  { id: 11, brand: "Mercedes", model: "C-Class", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 85, locations: ["Prishtina","Ferizaj","Podujeva"], image: "https://picsum.photos/seed/mercedes-c/600/400", rating: 4.5, popularity: 86, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats"], year: 2022, mileage: 19000, availability: true },
  { id: 12, brand: "Mercedes", model: "E-Class", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 100, locations: ["Prishtina"], image: "https://picsum.photos/seed/mercedes-e/600/400", rating: 4.7, popularity: 88, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sunroof"], year: 2022, mileage: 17000, availability: true },
  { id: 13, brand: "Mercedes", model: "S-Class", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 140, locations: ["Prishtina"], image: mercedess, gallery: [mercedess , mercedess2 , mercedess3 , mercedess4 , mercedess5] , rating: 4.9, popularity: 93, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sunroof", "Heated Seats", "Massage Seats", "Ambient Lighting"], year: 2023, mileage: 6000, availability: true },
  { id: 14, brand: "Mercedes", model: "GLA", type: "SUV", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 95, locations: ["Prishtina"], image: "https://picsum.photos/seed/mercedes-gla/600/400", rating: 4.6, popularity: 84, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats"], year: 2022, mileage: 14000, availability: true },
  { id: 15, brand: "Mercedes", model: "GLE", type: "SUV", fuel: "Diesel", seats: 7, transmission: "Automatic", pricePerDay: 120, locations: ["Prishtina"], image: mercedesgle, gallery: [mercedesgle , mercedesgle2 , mercedesgle3 , mercedesgle4 , mercedesgle5] , rating: 4.8, popularity: 90, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Third Row", "Sunroof"], year: 2022, mileage: 13000, availability: true },

  // Tesla
  { id: 16, brand: "Tesla", model: "Model 3", type: "EV", fuel: "Electric", seats: 5, transmission: "Automatic", pricePerDay: 100, locations: ["Prishtina","Mitrovica"], image: tesla1, rating: 4.8, popularity: 96, features: ["Autopilot", "Supercharging", "Over-the-Air Updates", "Glass Roof", "Premium Audio"], year: 2023, mileage: 4000, availability: true },
  { id: 17, brand: "Tesla", model: "Model S", type: "EV", fuel: "Electric", seats: 5, transmission: "Automatic", pricePerDay: 140, locations: ["Prishtina"], image: teslas, rating: 4.9, popularity: 94, features: ["Autopilot", "Supercharging", "Over-the-Air Updates", "Glass Roof", "Premium Audio", "Ludicrous Mode"], year: 2023, mileage: 2000, availability: false },
  { id: 18, brand: "Tesla", model: "Model X", type: "EV", fuel: "Electric", seats: 7, transmission: "Automatic", pricePerDay: 160, locations: ["Prishtina"], image: teslax, gallery: [teslax , teslax2 , teslax3 , teslax4 , teslax5] , rating: 4.7, popularity: 89, features: ["Autopilot", "Supercharging", "Over-the-Air Updates", "Falcon Doors", "Premium Audio", "Third Row"], year: 2022, mileage: 8000, availability: true },
  { id: 19, brand: "Tesla", model: "Model Y", type: "EV", fuel: "Electric", seats: 5, transmission: "Automatic", pricePerDay: 120, locations: ["Prishtina"], image: teslay, gallery: [teslay , teslay2 , teslay3 , teslay4 , teslay5] , rating: 4.8, popularity: 92, features: ["Autopilot", "Supercharging", "Over-the-Air Updates", "Glass Roof", "Premium Audio"], year: 2023, mileage: 5000, availability: true },
  { id: 20, brand: "Tesla", model: "Roadster", type: "Coupe", fuel: "Electric", seats: 2, transmission: "Automatic", pricePerDay: 200, locations: ["Prishtina"], image: teslar, rating: 4.9, popularity: 97, features: ["Autopilot", "Supercharging", "Over-the-Air Updates", "Sport Mode", "Carbon Fiber"], year: 2023, mileage: 1000, availability: false },

  // Toyota
  { id: 21, brand: "Toyota", model: "Corolla", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 55, locations: ["Prishtina","Gjilan"], image: "https://picsum.photos/seed/toyota-corolla/600/400", rating: 4.3, popularity: 80, features: ["GPS", "Bluetooth", "Cruise Control"], year: 2021, mileage: 30000, availability: true },
  { id: 22, brand: "Toyota", model: "Camry", type: "Sedan", fuel: "Hybrid", seats: 5, transmission: "Automatic", pricePerDay: 75, locations: ["Prishtina"], image: "https://picsum.photos/seed/toyota-camry/600/400", rating: 4.5, popularity: 83, features: ["GPS", "Bluetooth", "Backup Camera", "Hybrid System"], year: 2022, mileage: 22000, availability: true },
  { id: 23, brand: "Toyota", model: "RAV4", type: "SUV", fuel: "Hybrid", seats: 5, transmission: "Automatic", pricePerDay: 85, locations: ["Prishtina"], image: "https://picsum.photos/seed/toyota-rav4/600/400", rating: 4.6, popularity: 85, features: ["GPS", "Bluetooth", "Backup Camera", "Hybrid System", "AWD"], year: 2022, mileage: 18000, availability: true },
  { id: 24, brand: "Toyota", model: "Prius", type: "Hatchback", fuel: "Hybrid", seats: 5, transmission: "Automatic", pricePerDay: 65, locations: ["Prishtina"], image: "https://picsum.photos/seed/toyota-prius/600/400", rating: 4.4, popularity: 81, features: ["GPS", "Bluetooth", "Hybrid System", "Eco Mode"], year: 2021, mileage: 25000, availability: true },
  { id: 25, brand: "Toyota", model: "Hilux", type: "Pickup", fuel: "Diesel", seats: 5, transmission: "Manual", pricePerDay: 90, locations: ["Prishtina"], image: "https://picsum.photos/seed/toyota-hilux/600/400", rating: 4.7, popularity: 87, features: ["GPS", "Bluetooth", "4WD", "Towing Package"], year: 2022, mileage: 15000, availability: true },

  // Volkswagen
  { id: 26, brand: "Volkswagen", model: "Golf", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 60, locations: ["Prishtina","Podujeva"], image: "https://picsum.photos/seed/vw-golf/600/400", rating: 4.4, popularity: 82, features: ["GPS", "Bluetooth", "Cruise Control"], year: 2021, mileage: 28000, availability: true },
  { id: 27, brand: "Volkswagen", model: "Passat", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 75, locations: ["Prishtina"], image: "https://picsum.photos/seed/vw-passat/600/400", rating: 4.5, popularity: 84, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats"], year: 2022, mileage: 20000, availability: true },
  { id: 28, brand: "Volkswagen", model: "Tiguan", type: "SUV", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 85, locations: ["Prishtina"], image: "https://picsum.photos/seed/vw-tiguan/600/400", rating: 4.6, popularity: 86, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "AWD"], year: 2022, mileage: 16000, availability: true },
  { id: 29, brand: "Volkswagen", model: "Polo", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 55, locations: ["Prishtina"], image: "https://picsum.photos/seed/vw-polo/600/400", rating: 4.2, popularity: 78, features: ["GPS", "Bluetooth"], year: 2021, mileage: 32000, availability: true },
  { id: 30, brand: "Volkswagen", model: "Touareg", type: "SUV", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 110, locations: ["Prishtina"], image: "https://picsum.photos/seed/vw-touareg/600/400", rating: 4.7, popularity: 88, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sunroof", "AWD"], year: 2022, mileage: 12000, availability: true },

  // Porsche
  { id: 31, brand: "Porsche", model: "Cayenne", type: "SUV", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 180, locations: ["Prishtina","Prizren","Gjakova"], image: porschec, gallery:[porschec ,porschec2, porschec3, porschec4, porscheeng] , rating: 4.9, popularity: 95, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sunroof", "Sport Mode", "AWD"], year: 2023, mileage: 5000, availability: true },
  { id: 32, brand: "Porsche", model: "Macan", type: "SUV", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 160, locations: ["Prishtina"], image: porschem, gallery: [porschem , porschem2 , porschem3 , porschem4 , porschem5] , rating: 4.8, popularity: 92, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sport Mode", "AWD"], year: 2023, mileage: 7000, availability: true },
  { id: 33, brand: "Porsche", model: "Panamera", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 200, locations: ["Prishtina"], image: porschep, rating: 4.9, popularity: 94, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sunroof", "Sport Mode", "Carbon Fiber"], year: 2023, mileage: 3000, availability: false },
  { id: 34, brand: "Porsche", model: "911", type: "Coupe", fuel: "Petrol", seats: 2, transmission: "Automatic", pricePerDay: 220, locations: ["Prishtina"], image: porsche911, rating: 4.9, popularity: 96, features: ["GPS", "Bluetooth", "Sport Mode", "Leather Seats", "Carbon Fiber", "Track Mode"], year: 2023, mileage: 2000, availability: false },
  { id: 35, brand: "Porsche", model: "Taycan", type: "EV", fuel: "Electric", seats: 5, transmission: "Automatic", pricePerDay: 230, locations: ["Prishtina"], image: porschet, gallery: [porschet , porschet2 , porschet3 , porschet4 , porschet5] , rating: 4.8, popularity: 93, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Sport Mode", "Fast Charging"], year: 2023, mileage: 4000, availability: true },

  // Ford
  { id: 36, brand: "Ford", model: "Focus", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 55, locations: ["Prishtina","Podujeva","Peja"], image: "https://picsum.photos/seed/ford-focus/600/400", rating: 4.3, popularity: 79, features: ["GPS", "Bluetooth", "Cruise Control"], year: 2021, mileage: 35000, availability: true },
  { id: 37, brand: "Ford", model: "Mondeo", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 70, locations: ["Prishtina"], image: "https://picsum.photos/seed/ford-mondeo/600/400", rating: 4.4, popularity: 81, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats"], year: 2022, mileage: 25000, availability: true },
  { id: 38, brand: "Ford", model: "Kuga", type: "SUV", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 80, locations: ["Prishtina"], image: "https://picsum.photos/seed/ford-kuga/600/400", rating: 4.5, popularity: 83, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "AWD"], year: 2022, mileage: 20000, availability: true },
  { id: 39, brand: "Ford", model: "Mustang", type: "Coupe", fuel: "Petrol", seats: 4, transmission: "Manual", pricePerDay: 150, locations: ["Prishtina"], image: "https://picsum.photos/seed/ford-mustang/600/400", rating: 4.7, popularity: 89, features: ["GPS", "Bluetooth", "Sport Mode", "Leather Seats", "V8 Engine"], year: 2022, mileage: 12000, availability: true },
  { id: 40, brand: "Ford", model: "Explorer", type: "SUV", fuel: "Petrol", seats: 7, transmission: "Automatic", pricePerDay: 130, locations: ["Prishtina"], image: "https://picsum.photos/seed/ford-explorer/600/400", rating: 4.6, popularity: 85, features: ["GPS", "Bluetooth", "Backup Camera", "Leather Seats", "Third Row", "AWD"], year: 2022, mileage: 15000, availability: true },

  // Honda
  { id: 41, brand: "Honda", model: "Civic", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 60, locations: ["Prishtina"], image: "https://picsum.photos/seed/honda-civic/600/400", rating: 4.4, popularity: 82, features: ["GPS", "Bluetooth", "Cruise Control"], year: 2021, mileage: 30000, availability: true },
  { id: 42, brand: "Honda", model: "Accord", type: "Sedan", fuel: "Hybrid", seats: 5, transmission: "Automatic", pricePerDay: 80, locations: ["Prishtina"], image: "https://picsum.photos/seed/honda-accord/600/400", rating: 4.6, popularity: 84, features: ["GPS", "Bluetooth", "Backup Camera", "Hybrid System"], year: 2022, mileage: 22000, availability: true },
  { id: 43, brand: "Honda", model: "CR-V", type: "SUV", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 90, locations: ["Prishtina"], image: "https://picsum.photos/seed/honda-crv/600/400", rating: 4.5, popularity: 83, features: ["GPS", "Bluetooth", "Backup Camera", "AWD"], year: 2022, mileage: 18000, availability: true },
  { id: 44, brand: "Honda", model: "Jazz", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 55, locations: ["Prishtina"], image: "https://picsum.photos/seed/honda-jazz/600/400", rating: 4.2, popularity: 77, features: ["GPS", "Bluetooth"], year: 2021, mileage: 35000, availability: true },
  { id: 45, brand: "Honda", model: "HR-V", type: "SUV", fuel: "Hybrid", seats: 5, transmission: "Automatic", pricePerDay: 85, locations: ["Prishtina"], image: "https://picsum.photos/seed/honda-hrv/600/400", rating: 4.4, popularity: 80, features: ["GPS", "Bluetooth", "Hybrid System", "AWD"], year: 2022, mileage: 20000, availability: true },

  // Hyundai
  { id: 46, brand: "Hyundai", model: "i30", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 55, locations: ["Prishtina"], image: "https://picsum.photos/seed/hyundai-i30/600/400", rating: 4.3, popularity: 79, features: ["GPS", "Bluetooth", "Cruise Control"], year: 2021, mileage: 30000, availability: true },
  { id: 47, brand: "Hyundai", model: "Elantra", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 65, locations: ["Prishtina"], image: "https://picsum.photos/seed/hyundai-elantra/600/400", rating: 4.4, popularity: 81, features: ["GPS", "Bluetooth", "Backup Camera"], year: 2022, mileage: 25000, availability: true },
  { id: 48, brand: "Hyundai", model: "Tucson", type: "SUV", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 80, locations: ["Prishtina"], image: "https://picsum.photos/seed/hyundai-tucson/600/400", rating: 4.5, popularity: 83, features: ["GPS", "Bluetooth", "Backup Camera", "AWD"], year: 2022, mileage: 20000, availability: true },
  { id: 49, brand: "Hyundai", model: "Santa Fe", type: "SUV", fuel: "Diesel", seats: 7, transmission: "Automatic", pricePerDay: 100, locations: ["Prishtina"], image: "https://picsum.photos/seed/hyundai-santafe/600/400", rating: 4.6, popularity: 85, features: ["GPS", "Bluetooth", "Backup Camera", "Third Row", "AWD"], year: 2022, mileage: 15000, availability: true },
  { id: 50, brand: "Hyundai", model: "Kona", type: "EV", fuel: "Electric", seats: 5, transmission: "Automatic", pricePerDay: 90, locations: ["Prishtina"], image: "https://picsum.photos/seed/hyundai-kona/600/400", rating: 4.5, popularity: 82, features: ["GPS", "Bluetooth", "Fast Charging", "Eco Mode"], year: 2022, mileage: 12000, availability: true }
]

export default CARS;