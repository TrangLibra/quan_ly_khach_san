import { model } from "@medusajs/framework/utils"

export const Booking = model.define("booking", {
  id: model.id().primaryKey(),
  code: model.text(),
  customer_id: model.text(),
  room_type_id: model.text(),
  voucher_id: model.text().nullable(),
  check_in_date: model.dateTime(),
  check_out_date: model.dateTime(),
  number_of_nights: model.number().default(1),
  adults: model.number().default(1),
  children: model.number().default(0),
  room_quantity: model.number().default(1),
  room_subtotal: model.bigInt().default(0),
  surcharge_amount: model.bigInt().default(0),
  discount_amount: model.bigInt().default(0),
  total_amount: model.bigInt().default(0),
  deposit_amount: model.bigInt().default(0),
  status: model.enum([
    "Pending",
    "Confirmed",
    "Deposited",
    "CheckedIn",
    "CheckedOut",
    "Cancelled"
  ]).default("Pending"),
  source: model.enum(["Direct", "OTA", "Phone", "WalkIn"]).default("Direct"),
  special_requests: model.text().nullable(),
  is_deleted: model.boolean().default(false),
})

export const BookingRoomAllocation = model.define("booking_room_allocation", {
  id: model.id().primaryKey(),
  room_id: model.text(),
  allocated_at: model.dateTime(),
  status: model.enum(["Active", "Moved", "Released"]).default("Active"),
  booking: model.belongsTo(() => Booking, {
    mappedBy: "allocations",
  }),
})

export const Payment = model.define("payment", {
  id: model.id().primaryKey(),
  amount: model.bigInt(),
  currency_code: model.text().default("vnd"),
  payment_method: model.enum(["MoMo", "VNPay", "BankTransfer", "CreditCard", "Cash"]),
  status: model.enum(["Pending", "Completed", "Failed", "Refunded"]).default("Pending"),
  transaction_ref: model.text().nullable(),
  booking: model.belongsTo(() => Booking, {
    mappedBy: "payments",
  }),
})

export const Voucher = model.define("voucher", {
  id: model.id().primaryKey(),
  code: model.text(),
  discount_type: model.enum(["Percentage", "FixedAmount"]),
  discount_value: model.bigInt(),
  min_spend: model.bigInt().default(0),
  max_discount: model.bigInt().nullable(),
  valid_from: model.dateTime(),
  valid_until: model.dateTime(),
  usage_limit: model.number().default(100),
  times_used: model.number().default(0),
  status: model.enum(["Active", "Expired", "Disabled"]).default("Active"),
})
