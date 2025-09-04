// src/data/cars.js
import bmw1 from "../assets/bmwm42022.avif";
import audi1 from "../assets/audia62021.jpg";
import tesla1 from "../assets/teslamodel32023.png";

const CARS = [
  // BMW
  { id: 1, brand: "BMW", model: "X5", type: "SUV", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 80, locations: ["Prishtina","Podujeva","Prizren"], image: "https://picsum.photos/seed/bmw-x5/600/400" },
  { id: 2, brand: "BMW", model: "3 Series", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 70, locations: ["Prishtina"], image: "https://picsum.photos/seed/bmw-3series/600/400" },
  { id: 3, brand: "BMW", model: "7 Series", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 120, locations: ["Prishtina"], image: "https://picsum.photos/seed/bmw-7series/600/400" },
  { id: 4, brand: "BMW", model: "i8", type: "EV", fuel: "Electric", seats: 2, transmission: "Automatic", pricePerDay: 150, locations: ["Prishtina"], image: "https://picsum.photos/seed/bmw-i8/600/400" },
  { id: 5, brand: "BMW", model: "M4", type: "Coupe", fuel: "Petrol", seats: 4, transmission: "Manual", pricePerDay: 100, locations: ["Prishtina"], image: bmw1 },

  // Audi
  { id: 6, brand: "Audi", model: "A3", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 60, locations: ["Prishtina","Peja","Gjakova"], image: "https://picsum.photos/seed/audi-a3/600/400" },
  { id: 7, brand: "Audi", model: "A4", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 75, locations: ["Prishtina"], image: "https://picsum.photos/seed/audi-a4/600/400" },
  { id: 8, brand: "Audi", model: "A6", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 90, locations: ["Prishtina"], image: audi1 },
  { id: 9, brand: "Audi", model: "Q7", type: "SUV", fuel: "Diesel", seats: 7, transmission: "Automatic", pricePerDay: 110, locations: ["Prishtina"], image: "https://picsum.photos/seed/audi-q7/600/400" },
  { id: 10, brand: "Audi", model: "RS7", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 130, locations: ["Prishtina"], image: "https://picsum.photos/seed/audi-rs7/600/400" },

  // Mercedes
  { id: 11, brand: "Mercedes", model: "C-Class", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 85, locations: ["Prishtina","Ferizaj","Podujeva"], image: "https://picsum.photos/seed/mercedes-c/600/400" },
  { id: 12, brand: "Mercedes", model: "E-Class", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 100, locations: ["Prishtina"], image: "https://picsum.photos/seed/mercedes-e/600/400" },
  { id: 13, brand: "Mercedes", model: "S-Class", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 140, locations: ["Prishtina"], image: "https://picsum.photos/seed/mercedes-s/600/400" },
  { id: 14, brand: "Mercedes", model: "GLA", type: "SUV", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 95, locations: ["Prishtina"], image: "https://picsum.photos/seed/mercedes-gla/600/400" },
  { id: 15, brand: "Mercedes", model: "GLE", type: "SUV", fuel: "Diesel", seats: 7, transmission: "Automatic", pricePerDay: 120, locations: ["Prishtina"], image: "https://picsum.photos/seed/mercedes-gle/600/400" },

  // Tesla
  { id: 16, brand: "Tesla", model: "Model 3", type: "EV", fuel: "Electric", seats: 5, transmission: "Automatic", pricePerDay: 100, locations: ["Prishtina","Mitrovica"], image: tesla1 },
  { id: 17, brand: "Tesla", model: "Model S", type: "EV", fuel: "Electric", seats: 5, transmission: "Automatic", pricePerDay: 140, locations: ["Prishtina"], image: "https://picsum.photos/seed/tesla-s/600/400" },
  { id: 18, brand: "Tesla", model: "Model X", type: "EV", fuel: "Electric", seats: 7, transmission: "Automatic", pricePerDay: 160, locations: ["Prishtina"], image: "https://picsum.photos/seed/tesla-x/600/400" },
  { id: 19, brand: "Tesla", model: "Model Y", type: "EV", fuel: "Electric", seats: 5, transmission: "Automatic", pricePerDay: 120, locations: ["Prishtina"], image: "https://picsum.photos/seed/tesla-y/600/400" },
  { id: 20, brand: "Tesla", model: "Roadster", type: "Coupe", fuel: "Electric", seats: 2, transmission: "Automatic", pricePerDay: 200, locations: ["Prishtina"], image: "https://picsum.photos/seed/tesla-roadster/600/400" },

  // Toyota
  { id: 21, brand: "Toyota", model: "Corolla", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 55, locations: ["Prishtina","Gjilan"], image: "https://picsum.photos/seed/toyota-corolla/600/400" },
  { id: 22, brand: "Toyota", model: "Camry", type: "Sedan", fuel: "Hybrid", seats: 5, transmission: "Automatic", pricePerDay: 75, locations: ["Prishtina"], image: "https://picsum.photos/seed/toyota-camry/600/400" },
  { id: 23, brand: "Toyota", model: "RAV4", type: "SUV", fuel: "Hybrid", seats: 5, transmission: "Automatic", pricePerDay: 85, locations: ["Prishtina"], image: "https://picsum.photos/seed/toyota-rav4/600/400" },
  { id: 24, brand: "Toyota", model: "Prius", type: "Hatchback", fuel: "Hybrid", seats: 5, transmission: "Automatic", pricePerDay: 65, locations: ["Prishtina"], image: "https://picsum.photos/seed/toyota-prius/600/400" },
  { id: 25, brand: "Toyota", model: "Hilux", type: "Pickup", fuel: "Diesel", seats: 5, transmission: "Manual", pricePerDay: 90, locations: ["Prishtina"], image: "https://picsum.photos/seed/toyota-hilux/600/400" },

  // Volkswagen
  { id: 26, brand: "Volkswagen", model: "Golf", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 60, locations: ["Prishtina","Podujeva"], image: "https://picsum.photos/seed/vw-golf/600/400" },
  { id: 27, brand: "Volkswagen", model: "Passat", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 75, locations: ["Prishtina"], image: "https://picsum.photos/seed/vw-passat/600/400" },
  { id: 28, brand: "Volkswagen", model: "Tiguan", type: "SUV", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 85, locations: ["Prishtina"], image: "https://picsum.photos/seed/vw-tiguan/600/400" },
  { id: 29, brand: "Volkswagen", model: "Polo", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 55, locations: ["Prishtina"], image: "https://picsum.photos/seed/vw-polo/600/400" },
  { id: 30, brand: "Volkswagen", model: "Touareg", type: "SUV", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 110, locations: ["Prishtina"], image: "https://picsum.photos/seed/vw-touareg/600/400" },

  // Porsche
  { id: 31, brand: "Porsche", model: "Cayenne", type: "SUV", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 180, locations: ["Prishtina","Prizren","Gjakova"], image: "https://picsum.photos/seed/porsche-cayenne/600/400" },
  { id: 32, brand: "Porsche", model: "Macan", type: "SUV", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 160, locations: ["Prishtina"], image: "https://picsum.photos/seed/porsche-macan/600/400" },
  { id: 33, brand: "Porsche", model: "Panamera", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 200, locations: ["Prishtina"], image: "https://picsum.photos/seed/porsche-panamera/600/400" },
  { id: 34, brand: "Porsche", model: "911", type: "Coupe", fuel: "Petrol", seats: 2, transmission: "Automatic", pricePerDay: 220, locations: ["Prishtina"], image: "https://picsum.photos/seed/porsche-911/600/400" },
  { id: 35, brand: "Porsche", model: "Taycan", type: "EV", fuel: "Electric", seats: 5, transmission: "Automatic", pricePerDay: 230, locations: ["Prishtina"], image: "https://picsum.photos/seed/porsche-taycan/600/400" },

  // Ford
  { id: 36, brand: "Ford", model: "Focus", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 55, locations: ["Prishtina","Podujeva","Peja"], image: "https://picsum.photos/seed/ford-focus/600/400" },
  { id: 37, brand: "Ford", model: "Mondeo", type: "Sedan", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 70, locations: ["Prishtina"], image: "https://picsum.photos/seed/ford-mondeo/600/400" },
  { id: 38, brand: "Ford", model: "Kuga", type: "SUV", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 80, locations: ["Prishtina"], image: "https://picsum.photos/seed/ford-kuga/600/400" },
  { id: 39, brand: "Ford", model: "Mustang", type: "Coupe", fuel: "Petrol", seats: 4, transmission: "Manual", pricePerDay: 150, locations: ["Prishtina"], image: "https://picsum.photos/seed/ford-mustang/600/400" },
  { id: 40, brand: "Ford", model: "Explorer", type: "SUV", fuel: "Petrol", seats: 7, transmission: "Automatic", pricePerDay: 130, locations: ["Prishtina"], image: "https://picsum.photos/seed/ford-explorer/600/400" },

  // Honda
  { id: 41, brand: "Honda", model: "Civic", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 60, locations: ["Prishtina"], image: "https://picsum.photos/seed/honda-civic/600/400" },
  { id: 42, brand: "Honda", model: "Accord", type: "Sedan", fuel: "Hybrid", seats: 5, transmission: "Automatic", pricePerDay: 80, locations: ["Prishtina"], image: "https://picsum.photos/seed/honda-accord/600/400" },
  { id: 43, brand: "Honda", model: "CR-V", type: "SUV", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 90, locations: ["Prishtina"], image: "https://picsum.photos/seed/honda-crv/600/400" },
  { id: 44, brand: "Honda", model: "Jazz", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 55, locations: ["Prishtina"], image: "https://picsum.photos/seed/honda-jazz/600/400" },
  { id: 45, brand: "Honda", model: "HR-V", type: "SUV", fuel: "Hybrid", seats: 5, transmission: "Automatic", pricePerDay: 85, locations: ["Prishtina"], image: "https://picsum.photos/seed/honda-hrv/600/400" },

  // Hyundai
  { id: 46, brand: "Hyundai", model: "i30", type: "Hatchback", fuel: "Petrol", seats: 5, transmission: "Manual", pricePerDay: 55, locations: ["Prishtina"], image: "https://picsum.photos/seed/hyundai-i30/600/400" },
  { id: 47, brand: "Hyundai", model: "Elantra", type: "Sedan", fuel: "Petrol", seats: 5, transmission: "Automatic", pricePerDay: 65, locations: ["Prishtina"], image: "https://picsum.photos/seed/hyundai-elantra/600/400" },
  { id: 48, brand: "Hyundai", model: "Tucson", type: "SUV", fuel: "Diesel", seats: 5, transmission: "Automatic", pricePerDay: 80, locations: ["Prishtina"], image: "https://picsum.photos/seed/hyundai-tucson/600/400" },
  { id: 49, brand: "Hyundai", model: "Santa Fe", type: "SUV", fuel: "Diesel", seats: 7, transmission: "Automatic", pricePerDay: 100, locations: ["Prishtina"], image: "https://picsum.photos/seed/hyundai-santafe/600/400" },
  { id: 50, brand: "Hyundai", model: "Kona", type: "EV", fuel: "Electric", seats: 5, transmission: "Automatic", pricePerDay: 90, locations: ["Prishtina"], image: "https://picsum.photos/seed/hyundai-kona/600/400" }
]
export default CARS;