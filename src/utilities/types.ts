export type CategoryType = {
  uri: string;
  name: string;
};

export type PrductCategory = {
  id: number;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductType = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: PrductCategory;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

/*
{
    "id": 268,
    "title": "Sleek Wireless Headphone & Inked Earbud Set",
    "slug": "sleek-wireless-headphone-inked-earbud-set",
    "price": 44,
    "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
    "category": {
      "id": 74,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-09-25T20:31:07.000Z",
      "updatedAt": "2025-09-25T20:31:07.000Z"
    },
    "images": [
      "https://i.imgur.com/yVeIeDa.jpeg",
      "https://i.imgur.com/jByJ4ih.jpeg",
      "https://i.imgur.com/KXj6Tpb.jpeg"
    ],
    "creationAt": "2025-09-25T20:31:13.000Z",
    "updatedAt": "2025-09-25T20:31:13.000Z"
  },

*/
