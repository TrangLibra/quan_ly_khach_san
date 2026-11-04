import { MedusaService } from "@medusajs/framework/utils"
import { SmartLockKey, AccessLog } from "./models/iot"

class IotModuleService extends MedusaService({
  SmartLockKey,
  AccessLog,
}) {}

export default IotModuleService
