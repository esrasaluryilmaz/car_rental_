import { IFetchCarsReturn } from "../types";

//Asenkron fonksiyonlarin return tipinde dogrudan fonksiyonun return ettigi verinin tipini yazdigimiz zaman hata aliriz.
// Asenkron fonksiyonlarin return tipi her zaman promise interface'i araciligi ile tanimlanir
// Promise interface asenkron islemler yapan fonksyonun return tipini ifade eder.
//apiden verileri cekip donduren fonk.
export const fetchCars = async (
  make: string,
  model: string,
  year: string,
  page: string
): Promise<IFetchCarsReturn> => {
  let url = `${import.meta.env.VITE_API_URL}/all-vehicles-model/records?`;

  // eğer marka filtresi varsa, istek atılan url'e ekle
  if (make) {
    url += `refine=make:"${make}"`;
  }

  // eğer model filtresi varsa, istek atılan url'e ekle
  if (model) {
    url += `&refine=model:"${model}"`;
  }

  // eğer yil filtresi varsa, istek atılan url'e ekle
  if (year) {
    url += `&refine=year:"${year}"`;
  }

  // page   1    2   3   4    5
  // limit  10   10  10  10   10
  // offset 0    10  20  30   40
  const limit = 10;
  const offset = (Number(page) - 1) * limit;

  url += `&limit=${limit}`;
  url += `&offset=${offset}`;

  const res = await fetch(url);

  const data = await res.json();
  return data;
};
