import { model } from "@medusajs/framework/utils"

export const ServiceCategory = model.define("service_category", {
  id: model.id().primaryKey(),
  category_name: model.text(),
  description: model.text().nullable(),
  icon: model.text().nullable(),
  display_order: model.number().default(0),
})

export const HotelService = model.define("hotel_service", {
  id: model.id().primaryKey(),
  service_code: model.text(),
  service_name: model.text(),
  price: model.number(),
  unit: model.text().default("/lượt"),
  description: model.text().nullable(),
  status: model.enum(["Active", "Inactive"]).default("Active"),
  category: model.belongsTo(() => ServiceCategory, {
    mappedBy: "services",
  }),
})

export const GuestServiceOrder = model.define("guest_service_order", {
  id: model.id().primaryKey(),
  order_code: model.text(),
  stay_id: model.text(),
  room_number: model.text(),
  guest_name: model.text(),
  quantity: model.number().default(1),
  unit_price: model.number(),
  total_price: model.number(),
  status: model.enum(["Received", "Processing", "Completed", "Cancelled"]).default("Received"),
  notes: model.text().nullable(),
  ordered_at: model.dateTime(),
  hotel_service: model.belongsTo(() => HotelService, {
    mappedBy: "orders",
  }),
})
