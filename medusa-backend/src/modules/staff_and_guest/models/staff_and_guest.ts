import { model } from "@medusajs/framework/utils"

export const Staff = model.define("hotel_staff", {
  id: model.id().primaryKey(),
  staff_code: model.text(),
  full_name: model.text(),
  email: model.text(),
  phone: model.text().nullable(),
  role: model.enum(["Admin", "Receptionist", "Housekeeper", "Technician", "Chef", "Security"]).default("Receptionist"),
  department: model.text().default("FrontOffice"),
  shift: model.enum(["Morning", "Afternoon", "Night", "Rotating"]).default("Morning"),
  status: model.enum(["Active", "OnLeave", "Inactive"]).default("Active"),
  joined_date: model.dateTime(),
})

export const MembershipTier = model.define("membership_tier", {
  id: model.id().primaryKey(),
  tier_name: model.text(),
  min_points: model.number().default(0),
  discount_rate: model.float().default(0.0),
  point_multiplier: model.float().default(1.0),
  benefits: model.text().nullable(),
  is_active: model.boolean().default(true),
})

export const GuestProfile = model.define("guest_profile", {
  id: model.id().primaryKey(),
  full_name: model.text(),
  email: model.text(),
  phone: model.text().nullable(),
  id_number: model.text().nullable(),
  id_type: model.enum(["Passport", "NationalId", "DriverLicense"]).default("NationalId"),
  gender: model.enum(["Male", "Female", "Other"]).default("Male"),
  loyalty_points: model.number().default(0),
  total_stays: model.number().default(0),
  total_spent: model.number().default(0),
  status: model.enum(["Active", "Blacklisted"]).default("Active"),
  tier: model.belongsTo(() => MembershipTier, {
    mappedBy: "guests",
  }),
})

export const AuditLog = model.define("user_audit_log", {
  id: model.id().primaryKey(),
  action: model.text(),
  module_name: model.text(),
  performed_by: model.text(),
  ip_address: model.text().nullable(),
  details: model.text().nullable(),
  timestamp: model.dateTime(),
})
