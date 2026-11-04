import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import RestaurantModuleService from "../../../modules/restaurant/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const restaurantService: RestaurantModuleService = req.scope.resolve("restaurant")

  const [items, count] = await restaurantService.listAndCountMenuItems(
    { is_available: true },
    { relations: ["category"] }
  )

  res.json({ items, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const restaurantService: RestaurantModuleService = req.scope.resolve("restaurant")
  const body = req.body as any

  const item = await restaurantService.createMenuItems({
    name: body.name,
    description: body.description,
    price: body.price,
    image_url: body.image_url,
    category_id: body.category_id,
  })

  res.status(201).json({ item })
}

