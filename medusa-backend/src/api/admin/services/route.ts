import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import HotelServicesModuleService from "../../../modules/services/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const servicesService: HotelServicesModuleService = req.scope.resolve("hotel_services")

  const [services, count] = await servicesService.listAndCountHotelServices(
    { status: "Active" },
    { relations: ["category"], order: { service_name: "ASC" } }
  )

  res.json({ services, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const servicesService: HotelServicesModuleService = req.scope.resolve("hotel_services")
  const body = req.body as any

  const serviceCode = `SVC-${Date.now().toString().slice(-4)}`

  const service = await servicesService.createHotelServices({
    service_code: serviceCode,
    service_name: body.service_name,
    price: body.price,
    unit: body.unit || "/lượt",
    description: body.description,
    status: "Active",
    category_id: body.category_id,
  })

  res.status(201).json({ service })
}
