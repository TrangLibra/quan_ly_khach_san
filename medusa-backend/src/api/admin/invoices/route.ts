import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import FinanceModuleService from "../../../modules/finance/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const financeService: FinanceModuleService = req.scope.resolve("finance")
  const { status, booking_id } = req.query as Record<string, string>

  const filters: Record<string, any> = {}
  if (status) filters.status = status
  if (booking_id) filters.booking_id = booking_id

  const [invoices, count] = await financeService.listAndCountInvoices(filters, {
    relations: ["line_items", "transactions"],
    order: { issued_at: "DESC" },
  })

  res.json({ invoices, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const financeService: FinanceModuleService = req.scope.resolve("finance")
  const body = req.body as any

  const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`
  const subtotal = body.subtotal || 0
  const vatRate = body.vat_rate !== undefined ? body.vat_rate : 10.0
  const vatAmount = (subtotal * vatRate) / 100
  const totalAmount = subtotal + vatAmount + (body.surcharge_amount || 0) - (body.discount_amount || 0)

  const invoice = await financeService.createInvoices({
    invoice_number: invoiceNumber,
    booking_id: body.booking_id,
    stay_id: body.stay_id,
    customer_id: body.customer_id,
    subtotal,
    vat_rate: vatRate,
    vat_amount: vatAmount,
    surcharge_amount: body.surcharge_amount || 0,
    discount_amount: body.discount_amount || 0,
    total_amount: totalAmount,
    paid_amount: 0,
    status: "Unpaid",
    issued_at: new Date(),
  })

  res.status(201).json({ invoice })
}
