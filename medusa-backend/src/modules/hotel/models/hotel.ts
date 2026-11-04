import { model } from "@medusajs/framework/utils"

export const Branch = model.define("branch", {
  id: model.id().primaryKey(),
  name: model.text(),
  address: model.text().nullable(),
  phone: model.text().nullable(),
  status: model.enum(["Active", "Inactive"]).default("Active"),
})

export const Amenity = model.define("amenity", {
  id: model.id().primaryKey(),
  name: model.text(),
  icon: model.text().nullable(),
  description: model.text().nullable(),
})

export const RoomType = model.define("room_type", {
  id: model.id().primaryKey(),
  name: model.text(),
  description: model.text().nullable(),
  base_price: model.bigInt(),
  max_occupancy: model.number().default(2),
  adult_capacity: model.number().default(2),
  child_capacity: model.number().default(1),
  image_url: model.text().nullable(),
  status: model.enum(["Active", "Inactive"]).default("Active"),
  is_deleted: model.boolean().default(false),
  amenities: model.manyToMany(() => Amenity),
})

export const Room = model.define("room", {
  id: model.id().primaryKey(),
  room_number: model.text(),
  floor: model.number(),
  status: model.enum([
    "CleanAvailable",
    "DirtyOccupied",
    "DirtyVacant",
    "Inspected",
    "Maintenance",
    "OutofOrder"
  ]).default("CleanAvailable"),
  description: model.text().nullable(),
  is_deleted: model.boolean().default(false),
  branch: model.belongsTo(() => Branch, {
    mappedBy: "rooms",
  }),
  room_type: model.belongsTo(() => RoomType, {
    mappedBy: "rooms",
  }),
})

export const PricingRule = model.define("pricing_rule", {
  id: model.id().primaryKey(),
  rule_name: model.text(),
  start_date: model.dateTime(),
  end_date: model.dateTime(),
  min_price: model.bigInt().nullable(),
  max_price: model.bigInt().nullable(),
  price_multiplier: model.float().default(1.0),
  conditions: model.text().nullable(),
  priority: model.number().default(0),
  status: model.enum(["Active", "Inactive"]).default("Active"),
  room_type: model.belongsTo(() => RoomType, {
    mappedBy: "pricing_rules",
  }),
})

