import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import StaffAndGuestModuleService from "../../../modules/staff_and_guest/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const service: StaffAndGuestModuleService = req.scope.resolve("staff_and_guest")
  const { role, department, status } = req.query as Record<string, string>

  const filters: Record<string, any> = {}
  if (role) filters.role = role
  if (department) filters.department = department
  if (status) filters.status = status

  const [staffList, count] = await service.listAndCountStaffs(filters, {
    order: { joined_date: "DESC" },
  })

  res.json({ staff: staffList, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const service: StaffAndGuestModuleService = req.scope.resolve("staff_and_guest")
  const body = req.body as any

  const staffCode = `STF-${Date.now().toString().slice(-4)}`

  const staff = await service.createStaffs({
    staff_code: staffCode,
    full_name: body.full_name,
    email: body.email,
    phone: body.phone,
    role: body.role || "Receptionist",
    department: body.department || "FrontOffice",
    shift: body.shift || "Morning",
    status: "Active",
    joined_date: new Date(),
  })

  res.status(201).json({ staff })
}
