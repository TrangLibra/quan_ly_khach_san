import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { HOTEL_MODULE } from "../../../modules/hotel"
import HotelModuleService from "../../../modules/hotel/service"
import { createRoomWorkflow } from "../../../workflows/create-room"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const hotelService: HotelModuleService = req.scope.resolve(HOTEL_MODULE)

  const { status, floor, branch_id, room_type_id } = req.query as Record<string, string>

  const filters: Record<string, any> = {
    is_deleted: false,
  }

  if (status) filters.status = status
  if (floor) filters.floor = parseInt(floor, 10)
  if (branch_id) filters.branch_id = branch_id
  if (room_type_id) filters.room_type_id = room_type_id

  const [rooms, count] = await hotelService.listAndCountRooms(filters, {
    relations: ["room_type", "branch"],
    order: { floor: "ASC", room_number: "ASC" },
  })

  res.json({
    rooms,
    count,
  })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { result } = await createRoomWorkflow(req.scope).run({
    input: req.body as any,
  })

  res.status(201).json({
    room: result,
  })
}
