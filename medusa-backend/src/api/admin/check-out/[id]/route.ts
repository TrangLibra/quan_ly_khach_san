import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import FrontDeskModuleService from "../../../../modules/front_desk/service"

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const frontDeskService: FrontDeskModuleService = req.scope.resolve("front_desk")
  const { id } = req.params
  const body = req.body as any

  const stay = await frontDeskService.updateGuestStays({
    id,
    actual_check_out: new Date(),
    status: "CheckedOut",
    notes: body.notes,
  })

  res.json({
    message: "Guest successfully checked out",
    stay,
  })
}
