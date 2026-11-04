import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { HOTEL_MODULE } from "../../../../modules/hotel"
import HotelModuleService from "../../../../modules/hotel/service"
import { updateRoomStatusWorkflow } from "../../../../workflows/update-room-status"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const hotelService: HotelModuleService = req.scope.resolve(HOTEL_MODULE)
  const { id } = req.params

  const room = await hotelService.retrieveRoom(id, {
    relations: ["room_type", "branch"],
  })

  res.json({ room })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { id } = req.params
  const { status } = req.body as { status: any }

  const { result } = await updateRoomStatusWorkflow(req.scope).run({
    input: {
      id,
      status,
    },
  })

  res.json({ room: result })
}

export async function DELETE(req: MedusaRequest, res: MedusaResponse) {
  const hotelService: HotelModuleService = req.scope.resolve(HOTEL_MODULE)
  const { id } = req.params

  await hotelService.updateRooms({
    id,
    is_deleted: true,
  })

  res.json({ message: "Room marked as deleted successfully", id })
}

