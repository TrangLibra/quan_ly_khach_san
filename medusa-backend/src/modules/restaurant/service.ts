import { MedusaService } from "@medusajs/framework/utils"
import {
  RestaurantTable,
  MenuCategory,
  MenuItem,
  FoodOrder,
} from "./models/restaurant"

class RestaurantModuleService extends MedusaService({
  RestaurantTable,
  MenuCategory,
  MenuItem,
  FoodOrder,
}) {}

export default RestaurantModuleService
