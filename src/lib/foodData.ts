// Define Food type
export interface Food {
  id: number;
  name: string;
  category: "protein" | "vegetable" | "fruit" | "carb" | "fat" | string;
  description: string;
  calories?: number;
}

// Sample food data
export const foodData: Food[] = [
  {
    id: 1,
    name: "Chicken Breast",
    category: "protein",
    description: "Lean and high in protein, great for muscle building.",
    calories: 165,
  },
  {
    id: 2,
    name: "Broccoli",
    category: "vegetable",
    description: "Rich in vitamins and fiber, helps digestion.",
    calories: 55,
  },
  {
    id: 3,
    name: "Apple",
    category: "fruit",
    description: "Sweet and refreshing, high in fiber and antioxidants.",
    calories: 95,
  },
  {
    id: 4,
    name: "Brown Rice",
    category: "carb",
    description: "Good source of complex carbohydrates and fiber.",
    calories: 216,
  },
  {
    id: 5,
    name: "Almonds",
    category: "fat",
    description: "Healthy fats, good for heart health.",
    calories: 575,
  },
];
