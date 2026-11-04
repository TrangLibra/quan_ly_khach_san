import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import StaffAndGuestModuleService from "../../../modules/staff_and_guest/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const service: StaffAndGuestModuleService = req.scope.resolve("staff_and_guest")
  const { status, email } = req.query as Record<string, string>

  const filters: Record<string, any> = {}
  if (status) filters.status = status
  if (email) filters.email = email

  const [guests, count] = await service.listAndCountGuestProfiles(filters, {
    relations: ["tier"],
    order: { total_spent: "DESC" },
  })

  res.json({ guests, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const service: StaffAndGuestModuleService = req.scope.resolve("staff_and_guest")
  const body = req.body as any

  const guest = await service.createGuestProfiles({
    full_name: body.full_name,
    email: body.email,
    phone: body.phone,
    id_number: body.id_number,
    id_type: body.id_type || "NationalId",
    gender: body.gender || "Male",
    loyalty_points: 0,
    total_stays: 0,
    total_spent: 0,
    status: "Active",
  })

  res.status(201).json({ guest })
}
