import { MedusaService } from "@medusajs/framework/utils"
import { Staff, MembershipTier, GuestProfile, AuditLog } from "./models/staff_and_guest"

class StaffAndGuestModuleService extends MedusaService({
  Staff,
  MembershipTier,
  GuestProfile,
  AuditLog,
}) {}

export default StaffAndGuestModuleService
