import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const service = req.scope.resolve("staff_and_guest") as any
  const { role, department, status } = req.query as Record<string, string>

  const filters: Record<string, any> = {}
  if (role) filters.role = role
  if (department) filters.department = department
  if (status) filters.status = status

  const listStaffFn = service.listAndCountStaff ? service.listAndCountStaff.bind(service) : service.listAndCountStaffs?.bind(service)
  const [staffList, count] = listStaffFn
    ? await listStaffFn(filters, { order: { joined_date: "DESC" } })
    : [[], 0]

  res.json({ staff: staffList, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const service = req.scope.resolve("staff_and_guest") as any
  const body = req.body as any

  const staffCode = `STF-${Date.now().toString().slice(-4)}`

  const createStaffFn = service.createStaff ? service.createStaff.bind(service) : service.createStaffs?.bind(service)
  const staff = createStaffFn ? await createStaffFn({
    staff_code: staffCode,
    full_name: body.full_name,
    email: body.email,
    phone: body.phone,
    role: body.role || "Receptionist",
    department: body.department || "FrontOffice",
    shift: body.shift || "Morning",
    status: "Active",
    joined_date: new Date(),
  }) : null

  res.status(201).json({ staff })
}
