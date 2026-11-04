import { MedusaService } from "@medusajs/framework/utils"
import { RoomInspectionReport, LinenInventory, LaundryBatch } from "./models/inspection_and_linen"

class InspectionAndLinenModuleService extends MedusaService({
  RoomInspectionReport,
  LinenInventory,
  LaundryBatch,
}) {}

export default InspectionAndLinenModuleService
