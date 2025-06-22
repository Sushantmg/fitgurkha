import type { UserData } from "@/context/UserDataContext";
import { foodData } from "@/lib/foodData";

export function getFoodRecommendations(userData: UserData) {
  if (
    userData.exerciseFrequency === "daily" ||
    userData.exerciseFrequency === "regularly"
  ) {
    return foodData.filter((food) => food.category === "protein");
  }
  return foodData.filter(
    (food) =>
      food.category === "protein" ||
      food.category === "vegetable" ||
      food.category === "fruit"
  );
}
