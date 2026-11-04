import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import IotModuleService from "../../../modules/iot/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const iotService: IotModuleService = req.scope.resolve("iot")
  const { room_number, status } = req.query as Record<string, string>

  const filters: Record<string, any> = {}
  if (room_number) filters.room_number = room_number
  if (status) filters.status = status

  const [keys, count] = await iotService.listAndCountSmartLockKeys(filters, {
    relations: ["access_logs"],
    order: { valid_from: "DESC" },
  })

  res.json({ keys, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const iotService: IotModuleService = req.scope.resolve("iot")
  const body = req.body as any

  const keyCode = `EK-${body.room_number}-${Date.now().toString().slice(-4)}`
  const pin = Math.floor(100000 + Math.random() * 900000).toString()

  const key = await iotService.createSmartLockKeys({
    key_code: keyCode,
    booking_id: body.booking_id,
    room_number: body.room_number,
    guest_name: body.guest_name,
    guest_phone: body.guest_phone,
    lock_type: body.lock_type || "MobileBle",
    passcode_pin: pin,
    provider: body.provider || "TTLock",
    battery_level: 95,
    status: "Active",
    valid_from: new Date(body.valid_from || Date.now()),
    valid_to: new Date(body.valid_to || Date.now() + 86400000 * 2),
  })

  res.status(201).json({ key })
}

