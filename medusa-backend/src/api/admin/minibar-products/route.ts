import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import HousekeepingModuleService from "../../../modules/housekeeping/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const housekeepingService: HousekeepingModuleService = req.scope.resolve("housekeeping")

  const [products, count] = await housekeepingService.listAndCountMinibarProducts({
    status: "Active",
  })

  res.json({ products, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const housekeepingService: HousekeepingModuleService = req.scope.resolve("housekeeping")
  const body = req.body as any

  const product = await housekeepingService.createMinibarProducts({
    name: body.name,
    category: body.category || "Drink",
    price: body.price,
    stock: body.stock || 0,
    unit: body.unit || "lon",
  })

  res.status(201).json({ product })
}
