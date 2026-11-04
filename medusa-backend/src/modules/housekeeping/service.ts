import { MedusaService } from "@medusajs/framework/utils"
import {
  MinibarProduct,
  MinibarInspection,
  LostAndFoundItem,
  MaintenanceTicket,
} from "./models/housekeeping"

class HousekeepingModuleService extends MedusaService({
  MinibarProduct,
  MinibarInspection,
  LostAndFoundItem,
  MaintenanceTicket,
}) {}

export default HousekeepingModuleService

