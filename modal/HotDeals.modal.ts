import { ProductItem } from "@INTERFACES/ProductItem.interface";

export const HotDealsData: ProductItem[] = [
  {
    id: 1,
    name: "Fruit Cake",
    price: 500,
    actualPrice: 600,
    image: [
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
    ],
    category: "Cakes",
    countInStock: 10,
    deliveryETA: "30 mins",
    highlights: [
      {
        title: "Weight",
        description: "1kg",
      },
      {
        title: "Flavour",
        description: "Fruit",
      },
    ],
    productDetails: [
      {
        title: "Weight",
        description: "1kg",
      },
      {
        title: "Flavour",
        description: "Fruit",
      },
    ],
    selectionType: "unit",
    unitList: [
      {
        id: 1,
        size: "300g",
        price: 500,
        countInStock: 10,
      },
      {
        id: 2,
        size: "2kg",
        price: 1000,
        countInStock: 5,
      },
    ],
    isFeatured: true,
  },
  {
    id: 2,
    name: "Black Forest Cake",
    price: 600,
    actualPrice: 700,
    image: [
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
    ],
    category: "Cakes",
    countInStock: 10,
    deliveryETA: "10 mins",
    highlights: [
      {
        title: "Weight",
        description: "1kg",
      },
      {
        title: "Flavour",
        description: "Black Forest",
      },
    ],
    productDetails: [
      {
        title: "Weight",
        description: "1kg",
      },
      {
        title: "Flavour",
        description: "Black Forest",
      },
    ],
    selectionType: "size",
    sizeList: [
      {
        id: 1,
        size: "500g",
        price: 600,
        countInStock: 10,
      },
      {
        id: 2,
        size: "1kg",
        price: 1200,
        countInStock: 5,
      },
    ],
    isFeatured: true,
  },
  {
    id: 3,
    name: "Chocolate Cake",
    price: 700,
    actualPrice: 800,
    image: [
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/800x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/800x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x100/png",
    ],
    category: "Cakes",
    countInStock: 10,
    deliveryETA: "3 mins",
    highlights: [
      {
        title: "Weight",
        description: "1kg",
      },
      {
        title: "Flavour",
        description: "Chocolate",
      },
    ],
    productDetails: [
      {
        title: "Weight",
        description: "1kg",
      },
      {
        title: "Flavour",
        description: "Chocolate",
      },
    ],
    selectionType: "size",
    sizeList: [
      {
        id: 1,
        size: "1kg",
        price: 700,
        countInStock: 10,
      },
      {
        id: 2,
        size: "2kg",
        price: 1400,
        countInStock: 5,
      },
    ],
    isFeatured: true,
  },
  {
    id: 4,
    name: "Vanilla Cake",
    price: 800,
    actualPrice: 900,
    image: [
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
    ],
    category: "Cakes",
    countInStock: 10,
    deliveryETA: "6 mins",
    highlights: [
      {
        title: "Weight",
        description: "1kg",
      },
      {
        title: "Flavour",
        description: "Vanilla",
      },
    ],
    productDetails: [
      {
        title: "Weight",
        description: "1kg",
      },
      {
        title: "Flavour",
        description: "Vanilla",
      },
    ],
    selectionType: "size",
    sizeList: [
      {
        id: 1,
        size: "1kg",
        price: 800,
        countInStock: 10,
      },
      {
        id: 2,
        size: "2kg",
        price: 1600,
        countInStock: 5,
      },
    ],
    isFeatured: true,
  },
  {
    id: 5,
    name: "Strawberry Cake",
    price: 900,
    actualPrice: 1000,
    image: [
      "https://placehold.co/400x400/png",

      "https://placehold.co/600x400/png",
    ],
    category: "Cakes",
    countInStock: 10,
    deliveryETA: "9 mins",
    highlights: [
      {
        title: "Weight",
        description: "1g",
      },
      {
        title: "Flavour",
        description: "Strawberry",
      },
    ],
    productDetails: [
      {
        title: "Weight",
        description: "1kg",
      },
      {
        title: "Flavour",
        description: "Strawberry",
      },
    ],
    selectionType: "size",
    sizeList: [
      {
        id: 1,
        size: "1kg",
        price: 900,
        countInStock: 10,
      },
      {
        id: 2,
        size: "2kg",
        price: 1800,
        countInStock: 5,
      },
    ],
    isFeatured: true,
  },
];
