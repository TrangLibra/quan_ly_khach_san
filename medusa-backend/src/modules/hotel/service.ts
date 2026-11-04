import { MedusaService } from "@medusajs/framework/utils"
import { Branch, Amenity, RoomType, Room, PricingRule } from "./models/hotel"

class HotelModuleService extends MedusaService({
  Branch,
  Amenity,
  RoomType,
  Room,
  PricingRule,
}) {}

export default HotelModuleService

