import CarCard from "./CarCard";

const cars = [
  { name: "BMW M4", type: "Sport", price: 120, image: "/cars/bmw.jpg" },
  { name: "Audi A6", type: "Luxury", price: 90, image: "/cars/audi.jpg" },
  { name: "Tesla Model 3", type: "Electric", price: 110, image: "/cars/tesla.jpg" },
];

export default function CarList() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Available Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </section>
  );
}
