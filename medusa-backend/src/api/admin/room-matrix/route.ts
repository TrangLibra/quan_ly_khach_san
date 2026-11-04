import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { HOTEL_MODULE } from "../../../modules/hotel"
import HotelModuleService from "../../../modules/hotel/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const hotelService: HotelModuleService = req.scope.resolve(HOTEL_MODULE)

  const [rooms, totalCount] = await hotelService.listAndCountRooms(
    { is_deleted: false },
    {
      relations: ["room_type", "branch"],
      order: { floor: "ASC", room_number: "ASC" },
    }
  )

  // Nhóm phòng theo tầng (Floor Matrix) cho sơ đồ trực quan
  const floorMap: Record<number, any[]> = {}
  const statusStats = {
    CleanAvailable: 0,
    DirtyOccupied: 0,
    DirtyVacant: 0,
    Inspected: 0,
    Maintenance: 0,
    OutofOrder: 0,
  }

  rooms.forEach((room: any) => {
    if (!floorMap[room.floor]) {
      floorMap[room.floor] = []
    }
    floorMap[room.floor].push(room)

    const st = room.status as keyof typeof statusStats
    if (statusStats[st] !== undefined) {
      statusStats[st]++
    }
  })

  const floors = Object.keys(floorMap)
    .map(Number)
    .sort((a, b) => a - b)
    .map((floor) => ({
      floor,
      rooms: floorMap[floor],
      total_rooms: floorMap[floor].length,
    }))

  res.json({
    floors,
    status_summary: statusStats,
    total_rooms: totalCount,
  })
}
