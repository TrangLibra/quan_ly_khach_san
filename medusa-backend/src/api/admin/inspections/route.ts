import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import InspectionAndLinenModuleService from "../../../modules/inspection_and_linen/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const service: InspectionAndLinenModuleService = req.scope.resolve("inspection_and_linen")
  const { room_number, status } = req.query as Record<string, string>

  const filters: Record<string, any> = {}
  if (room_number) filters.room_number = room_number
  if (status) filters.status = status

  const [reports, count] = await service.listAndCountRoomInspectionReports(filters, {
    order: { inspection_time: "DESC" },
  })

  res.json({ reports, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const service: InspectionAndLinenModuleService = req.scope.resolve("inspection_and_linen")
  const body = req.body as any

  const report = await service.createRoomInspectionReports({
    stay_id: body.stay_id,
    room_id: body.room_id,
    room_number: body.room_number,
    inspector_name: body.inspector_name || "Housekeeping Staff",
    inspection_time: new Date(),
    status: body.status || "Submitted",
    keycards_issued: body.keycards_issued || 2,
    keycards_returned: body.keycards_returned || 2,
    keycard_loss_penalty: body.keycard_loss_penalty || 0,
    room_condition: body.room_condition || "Nominal",
    damage_fee: body.damage_fee || 0,
    supervisor_notes: body.supervisor_notes,
    proof_image_url: body.proof_image_url,
  })

  res.status(201).json({ report })
}
