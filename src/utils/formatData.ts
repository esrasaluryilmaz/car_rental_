import { ICar } from "../types";

const formatData = (car: ICar) => {
  //nesne icerisinde ekrana basilacak olanl alanlari belirle
  const accepted = [
    "make",
    "model",
    "cylinders",
    "drive",
    "fueltype",
    "trtany",
    "vclass",
    "year",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  //nesneyi diziye cevirip ardindan filtreleme
  const arr = Object.entries(car).filter((i) => accepted.includes(i[0]));
  //object.entries methodu, bir nesneyi diziye cevirmemizi sagliyor. sonrasinda maplayip kolayca ekrana basabiliyoruz.

  // diziyi dondur
  return arr;
};

export default formatData;
