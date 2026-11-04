import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { HOTEL_MODULE } from "../../../modules/hotel"
import HotelModuleService from "../../../modules/hotel/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const hotelService: HotelModuleService = req.scope.resolve(HOTEL_MODULE)

  const [roomTypes, count] = await hotelService.listAndCountRoomTypes(
    { is_deleted: false, status: "Active" },
    { relations: ["amenities"] }
  )

  res.json({
    room_types: roomTypes,
    count,
  })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const hotelService: HotelModuleService = req.scope.resolve(HOTEL_MODULE)
  const body = req.body as any

  const roomType = await hotelService.createRoomTypes({
    name: body.name,
    description: body.description,
    base_price: body.base_price,
    max_occupancy: body.max_occupancy || 2,
    adult_capacity: body.adult_capacity || 2,
    child_capacity: body.child_capacity || 1,
    image_url: body.image_url,
  })

  res.status(201).json({ room_type: roomType })
}

