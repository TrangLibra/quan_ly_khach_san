import { model } from "@medusajs/framework/utils"

export const SmartLockKey = model.define("smart_lock_key", {
  id: model.id().primaryKey(),
  key_code: model.text(),
  booking_id: model.text().nullable(),
  room_number: model.text(),
  guest_name: model.text(),
  guest_phone: model.text().nullable(),
  lock_type: model.enum(["MobileBle", "NfcCard", "PasscodePin", "MasterKey"]).default("MobileBle"),
  passcode_pin: model.text().nullable(),
  rfid_card_uid: model.text().nullable(),
  provider: model.enum(["Visionline", "Salto", "TTLock", "Tuya"]).default("TTLock"),
  battery_level: model.number().default(100),
  status: model.enum(["Active", "Revoked", "Expired", "PendingActivation"]).default("Active"),
  valid_from: model.dateTime(),
  valid_to: model.dateTime(),
})

export const AccessLog = model.define("smart_lock_access_log", {
  id: model.id().primaryKey(),
  room_number: model.text(),
  actor_name: model.text(),
  access_method: model.enum(["MobileApp", "CardTap", "PinCode", "MechanicalKey"]),
  is_granted: model.boolean().default(true),
  unlocked_at: model.dateTime(),
  smart_key: model.belongsTo(() => SmartLockKey, {
    mappedBy: "access_logs",
  }),
})
