import { model } from "@medusajs/framework/utils"

export const MinibarProduct = model.define("minibar_product", {
  id: model.id().primaryKey(),
  name: model.text(),
  category: model.enum(["Drink", "Snack", "Amenity", "Other"]).default("Drink"),
  price: model.number(),
  stock: model.number().default(0),
  unit: model.text().default("lon"),
  status: model.enum(["Active", "Inactive"]).default("Active"),
})

export const MinibarInspection = model.define("minibar_inspection", {
  id: model.id().primaryKey(),
  room_id: model.text(),
  inspector_id: model.text(),
  stay_id: model.text().nullable(),
  inspection_time: model.dateTime(),
  total_charge: model.number().default(0),
  status: model.enum(["Draft", "Submitted", "PostedToFolio"]).default("Draft"),
})

export const LostAndFoundItem = model.define("lost_and_found_item", {
  id: model.id().primaryKey(),
  item_code: model.text(),
  item_name: model.text(),
  room_id: model.text().nullable(),
  finder_id: model.text(),
  found_location: model.text(),
  found_date: model.dateTime(),
  category: model.enum(["Valuable", "Normal", "Perishable"]),
  storage_location: model.text(),
  status: model.enum(["Reported", "Stored", "Claimed", "Disposed"]).default("Reported"),
  claimant_name: model.text().nullable(),
  claimed_date: model.dateTime().nullable(),
})

export const MaintenanceTicket = model.define("maintenance_ticket", {
  id: model.id().primaryKey(),
  ticket_code: model.text(),
  room_id: model.text().nullable(),
  reporter_id: model.text(),
  assigned_technician_id: model.text().nullable(),
  issue_category: model.text(),
  description: model.text(),
  priority: model.enum(["Low", "Medium", "High", "Critical"]).default("Medium"),
  status: model.enum(["Open", "InProgress", "Resolved", "Closed"]).default("Open"),
  resolved_at: model.dateTime().nullable(),
})
