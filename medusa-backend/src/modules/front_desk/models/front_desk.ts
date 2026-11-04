import { model } from "@medusajs/framework/utils"

export const GuestStay = model.define("guest_stay", {
  id: model.id().primaryKey(),
  stay_code: model.text(),
  booking_id: model.text(),
  room_id: model.text(),
  room_number: model.text(),
  guest_name: model.text(),
  guest_phone: model.text().nullable(),
  guest_id_card: model.text().nullable(),
  actual_check_in: model.dateTime(),
  expected_check_out: model.dateTime(),
  actual_check_out: model.dateTime().nullable(),
  deposit_collected: model.number().default(0),
  key_cards_issued: model.number().default(1),
  status: model.enum(["CheckedIn", "CheckedOut", "Extended", "NoShow"]).default("CheckedIn"),
  notes: model.text().nullable(),
})

export const RoomMoveLog = model.define("room_move_log", {
  id: model.id().primaryKey(),
  stay: model.belongsTo(() => GuestStay, {
    mappedBy: "room_moves",
  }),
  from_room_id: model.text(),
  from_room_number: model.text(),
  to_room_id: model.text(),
  to_room_number: model.text(),
  reason: model.text(),
  moved_by: model.text(),
  moved_at: model.dateTime(),
})

export const StayExtensionLog = model.define("stay_extension_log", {
  id: model.id().primaryKey(),
  stay: model.belongsTo(() => GuestStay, {
    mappedBy: "extensions",
  }),
  previous_check_out: model.dateTime(),
  new_check_out: model.dateTime(),
  additional_charge: model.number().default(0),
  extended_by: model.text(),
  extended_at: model.dateTime(),
})
