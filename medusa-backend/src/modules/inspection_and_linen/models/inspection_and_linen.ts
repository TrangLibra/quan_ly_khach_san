import { model } from "@medusajs/framework/utils"

export const RoomInspectionReport = model.define("room_inspection_report", {
  id: model.id().primaryKey(),
  stay_id: model.text(),
  room_id: model.text(),
  room_number: model.text(),
  inspector_name: model.text(),
  inspection_time: model.dateTime(),
  status: model.enum(["NotStarted", "InProgress", "Submitted", "Approved", "Disputed"]).default("Submitted"),
  keycards_issued: model.number().default(2),
  keycards_returned: model.number().default(2),
  keycard_loss_penalty: model.number().default(0),
  room_condition: model.enum(["Nominal", "LinenDamage", "DamageReported"]).default("Nominal"),
  damage_fee: model.number().default(0),
  supervisor_notes: model.text().nullable(),
  proof_image_url: model.text().nullable(),
})

export const LinenInventory = model.define("linen_inventory", {
  id: model.id().primaryKey(),
  sku: model.text(),
  item_name: model.text(),
  total_stock: model.number().default(0),
  clean_stock: model.number().default(0),
  in_use_stock: model.number().default(0),
  laundry_stock: model.number().default(0),
  damaged_stock: model.number().default(0),
  par_level: model.float().default(3.0),
  status: model.enum(["Optimal", "LowStock", "Critical"]).default("Optimal"),
})

export const LaundryBatch = model.define("laundry_batch", {
  id: model.id().primaryKey(),
  batch_code: model.text(),
  vendor_name: model.text().default("Internal Laundry"),
  sent_date: model.dateTime(),
  expected_return: model.dateTime(),
  actual_return: model.dateTime().nullable(),
  total_pieces: model.number().default(0),
  total_cost: model.number().default(0),
  status: model.enum(["Sent", "Washing", "Received", "Inspected"]).default("Sent"),
})
