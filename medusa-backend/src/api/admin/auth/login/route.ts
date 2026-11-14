import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const service = req.scope.resolve("staff_and_guest") as any
  const { email, role } = req.body as { email: string; role?: string }

  if (!email) {
    return res.status(400).json({ message: "Email is required" })
  }

  // Tra cứu thông tin nhân sự trong Staff module
  const listStaffFn = service.listAndCountStaff ? service.listAndCountStaff.bind(service) : service.listAndCountStaffs?.bind(service)
  const createStaffFn = service.createStaff ? service.createStaff.bind(service) : service.createStaffs?.bind(service)

  let staffList = []
  if (listStaffFn) {
    const [result] = await listStaffFn({ email })
    staffList = result || []
  }

  let staff = staffList[0]
  if (!staff && createStaffFn) {
    // Nếu chưa có, hỗ trợ tạo phiên đăng nhập quản trị viên mặc định
    staff = await createStaffFn({
      staff_code: `STF-${Date.now().toString().slice(-4)}`,
      full_name: email.split("@")[0].toUpperCase(),
      email,
      role: (role as any) || "Admin",
      department: "Management",
      shift: "Morning",
      status: "Active",
      joined_date: new Date(),
    })
  }

  res.json({
    message: "Authentication successful",
    token: `gh_jwt_${Date.now()}_${Buffer.from(email).toString("base64")}`,
    user: {
      id: staff.id,
      email: staff.email,
      name: staff.full_name,
      role: staff.role,
      department: staff.department,
    },
  })
}
