import { MedusaService } from "@medusajs/framework/utils"
import { MarketingCampaign, GuestReview } from "./models/marketing"

class MarketingModuleService extends MedusaService({
  MarketingCampaign,
  GuestReview,
}) {}

export default MarketingModuleService
