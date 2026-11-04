import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import BookingModuleService from "../../../modules/booking/service"
import { createReservationWorkflow } from "../../../workflows/create-reservation"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const bookingService: BookingModuleService = req.scope.resolve("booking")

  const { status, customer_id } = req.query as Record<string, string>
  const filters: Record<string, any> = { is_deleted: false }
  if (status) filters.status = status
  if (customer_id) filters.customer_id = customer_id

  const [bookings, count] = await bookingService.listAndCountBookings(filters, {
    relations: ["allocations", "payments"],
    order: { check_in_date: "DESC" },
  })

  res.json({ bookings, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { result } = await createReservationWorkflow(req.scope).run({
    input: req.body as any,
  })

  res.status(201).json({ booking: result })
}

