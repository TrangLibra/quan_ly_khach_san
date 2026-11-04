import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import HousekeepingModuleService from "../../../modules/housekeeping/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const housekeepingService: HousekeepingModuleService = req.scope.resolve("housekeeping")
  const { status } = req.query as Record<string, string>

  const filters: Record<string, any> = {}
  if (status) filters.status = status

  const [items, count] = await housekeepingService.listAndCountLostAndFoundItems(filters, {
    order: { found_date: "DESC" },
  })

  res.json({ items, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const housekeepingService: HousekeepingModuleService = req.scope.resolve("housekeeping")
  const body = req.body as any

  const itemCode = `LF-${Date.now().toString().slice(-6)}`

  const item = await housekeepingService.createLostAndFoundItems({
    item_code: itemCode,
    item_name: body.item_name,
    room_id: body.room_id,
    finder_id: body.finder_id,
    found_location: body.found_location,
    found_date: new Date(),
    category: body.category || "Normal",
    storage_location: body.storage_location || "Kho Housekeeping",
    status: "Reported",
  })

  res.status(201).json({ item })
}

