import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import RestaurantModuleService from "../../../modules/restaurant/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const restaurantService: RestaurantModuleService = req.scope.resolve("restaurant")
  const { status, order_type } = req.query as Record<string, string>

  const filters: Record<string, any> = {}
  if (status) filters.status = status
  if (order_type) filters.order_type = order_type

  const [orders, count] = await restaurantService.listAndCountFoodOrders(filters)

  res.json({ orders, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const restaurantService: RestaurantModuleService = req.scope.resolve("restaurant")
  const body = req.body as any

  const orderCode = `ORD-${Date.now().toString().slice(-6)}`

  const order = await restaurantService.createFoodOrders({
    order_code: orderCode,
    order_type: body.order_type || "DineIn",
    table_id: body.table_id,
    room_id: body.room_id,
    guest_name: body.guest_name,
    total_amount: body.total_amount || 0,
    status: "Placed",
    payment_status: "Unpaid",
  })

  res.status(201).json({ order })
}
