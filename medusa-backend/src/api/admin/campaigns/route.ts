import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import MarketingModuleService from "../../../modules/marketing/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const marketingService: MarketingModuleService = req.scope.resolve("marketing")
  const { status } = req.query as Record<string, string>

  const filters: Record<string, any> = {}
  if (status) filters.status = status

  const [campaigns, count] = await marketingService.listAndCountMarketingCampaigns(filters, {
    order: { revenue_generated: "DESC" },
  })

  res.json({ campaigns, count })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const marketingService: MarketingModuleService = req.scope.resolve("marketing")
  const body = req.body as any

  const campaignCode = `CAMP-${Date.now().toString().slice(-4)}`

  const campaign = await marketingService.createMarketingCampaigns({
    campaign_code: campaignCode,
    campaign_name: body.campaign_name,
    goal: body.goal,
    target_audience: body.target_audience,
    target_count: body.target_count || 0,
    channels: body.channels || "Email, SMS",
    content: body.content,
    banner_url: body.banner_url,
    status: body.status || "Draft",
  })

  res.status(201).json({ campaign })
}
