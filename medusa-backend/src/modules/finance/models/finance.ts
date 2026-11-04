import { model } from "@medusajs/framework/utils"

export const Invoice = model.define("invoice", {
  id: model.id().primaryKey(),
  invoice_number: model.text(),
  booking_id: model.text(),
  stay_id: model.text().nullable(),
  customer_id: model.text().nullable(),
  subtotal: model.number().default(0),
  vat_rate: model.float().default(10.0),
  vat_amount: model.number().default(0),
  surcharge_amount: model.number().default(0),
  discount_amount: model.number().default(0),
  total_amount: model.number().default(0),
  paid_amount: model.number().default(0),
  status: model.enum(["Draft", "Unpaid", "PartiallyPaid", "Paid", "Cancelled", "Refunded"]).default("Unpaid"),
  payment_method: model.enum(["MoMo", "VNPay", "BankTransfer", "CreditCard", "Cash"]).nullable(),
  pdf_url: model.text().nullable(),
  issued_at: model.dateTime(),
  due_date: model.dateTime().nullable(),
})

export const InvoiceLineItem = model.define("invoice_line_item", {
  id: model.id().primaryKey(),
  item_type: model.enum(["RoomCharge", "FnbCharge", "MinibarCharge", "LaundryCharge", "ServiceCharge", "LateFee", "DamageFee"]),
  item_id: model.text().nullable(),
  description: model.text(),
  quantity: model.number().default(1),
  unit_price: model.number().default(0),
  total_price: model.number().default(0),
  invoice: model.belongsTo(() => Invoice, {
    mappedBy: "line_items",
  }),
})

export const PaymentTransaction = model.define("payment_transaction", {
  id: model.id().primaryKey(),
  transaction_code: model.text(),
  amount: model.number(),
  currency: model.text().default("vnd"),
  payment_gateway: model.enum(["MoMo", "VNPay", "Stripe", "CashDesk"]),
  gateway_transaction_id: model.text().nullable(),
  status: model.enum(["Pending", "Success", "Failed", "Cancelled"]).default("Pending"),
  processed_at: model.dateTime().nullable(),
  invoice: model.belongsTo(() => Invoice, {
    mappedBy: "transactions",
  }),
})
