import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import FrontDeskModuleService from "../../../modules/front_desk/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const frontDeskService: FrontDeskModuleService = req.scope.resolve("front_desk")
  const { status, room_number } = req.query as Record<string, string>

  const filters: Record<string, any> = {}
  if (status) filters.status = status
  if (room_number) filters.room_number = room_number

  const [stays, count] = await frontDeskService.listAndCountGuestStays(filters, {
    relations: ["room_moves", "extensions"],
    order: { actual_check_in: "DESC" },
  })

  res.json({ stays, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const frontDeskService: FrontDeskModuleService = req.scope.resolve("front_desk")
  const body = req.body as any

  const stayCode = `STY-${body.room_number}-${Date.now().toString().slice(-4)}`

  const stay = await frontDeskService.createGuestStays({
    stay_code: stayCode,
    booking_id: body.booking_id,
    room_id: body.room_id,
    room_number: body.room_number,
    guest_name: body.guest_name,
    guest_phone: body.guest_phone,
    guest_id_card: body.guest_id_card,
    actual_check_in: new Date(),
    expected_check_out: new Date(body.expected_check_out),
    deposit_collected: body.deposit_collected || 0,
    key_cards_issued: body.key_cards_issued || 1,
    status: "CheckedIn",
    notes: body.notes,
  })

  res.status(201).json({ stay })
}
