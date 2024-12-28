export type Product = {
  id: number;
  sku: string;
  name: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    sku: "03912903",
    name: "Awesome Jacket",
    price: 90.7,
  },
  {
    id: 2,
    sku: "03912904",
    name: "Protection Glasses",
    price: 50.45,
  },
  {
    id: 3,
    sku: "03912905",
    name: "Fabulous Pants",
    price: 80.0,
  },
  {
    id: 4,
    sku: "03912906",
    name: "Nice Boots",
    price: 120.0,
  },
  {
    id: 5,
    sku: "03912907",
    name: "Weatherproof Cap",
    price: 30.0,
  },
];
