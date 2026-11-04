import { MedusaService } from "@medusajs/framework/utils"
import { GuestStay, RoomMoveLog, StayExtensionLog } from "./models/front_desk"

class FrontDeskModuleService extends MedusaService({
  GuestStay,
  RoomMoveLog,
  StayExtensionLog,
}) {}

export default FrontDeskModuleService
