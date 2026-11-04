import { MedusaService } from "@medusajs/framework/utils"
import { ServiceCategory, HotelService, GuestServiceOrder } from "./models/services"

class HotelServicesModuleService extends MedusaService({
  ServiceCategory,
  HotelService,
  GuestServiceOrder,
}) {}

export default HotelServicesModuleService
