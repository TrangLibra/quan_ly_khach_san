import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { HOTEL_MODULE } from "../../../modules/hotel"
import HotelModuleService from "../../../modules/hotel/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const hotelService: HotelModuleService = req.scope.resolve(HOTEL_MODULE)

  const [branches] = await hotelService.listAndCountBranches({ status: "Active" })

  res.json({
    branches,
  })
}
