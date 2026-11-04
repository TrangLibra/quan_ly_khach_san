import { model } from "@medusajs/framework/utils"

export const RestaurantTable = model.define("restaurant_table", {
  id: model.id().primaryKey(),
  table_number: model.text(),
  capacity: model.number().default(4),
  location: model.text().default("Indoor"),
  status: model.enum(["Available", "Occupied", "Reserved", "OutofService"]).default("Available"),
})

export const MenuCategory = model.define("menu_category", {
  id: model.id().primaryKey(),
  name: model.text(),
  display_order: model.number().default(0),
})

export const MenuItem = model.define("menu_item", {
  id: model.id().primaryKey(),
  name: model.text(),
  description: model.text().nullable(),
  price: model.number(),
  image_url: model.text().nullable(),
  is_available: model.boolean().default(true),
  category: model.belongsTo(() => MenuCategory, {
    mappedBy: "items",
  }),
})

export const FoodOrder = model.define("food_order", {
  id: model.id().primaryKey(),
  order_code: model.text(),
  order_type: model.enum(["DineIn", "RoomService", "TakeAway"]).default("DineIn"),
  table_id: model.text().nullable(),
  room_id: model.text().nullable(),
  guest_name: model.text().nullable(),
  total_amount: model.number().default(0),
  status: model.enum(["Placed", "Preparing", "Ready", "Served", "Cancelled"]).default("Placed"),
  payment_status: model.enum(["Unpaid", "Paid", "ChargedToRoom"]).default("Unpaid"),
})
