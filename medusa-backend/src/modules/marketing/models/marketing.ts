import { model } from "@medusajs/framework/utils"

export const MarketingCampaign = model.define("marketing_campaign", {
  id: model.id().primaryKey(),
  campaign_code: model.text(),
  campaign_name: model.text(),
  goal: model.text().nullable(),
  target_audience: model.text().nullable(),
  target_count: model.number().default(0),
  channels: model.text().default("Email, SMS"),
  content: model.text().nullable(),
  banner_url: model.text().nullable(),
  open_rate: model.float().default(0.0),
  converted_bookings: model.number().default(0),
  revenue_generated: model.number().default(0),
  status: model.enum(["Draft", "Scheduled", "Running", "Completed", "Cancelled"]).default("Draft"),
  start_date: model.dateTime().nullable(),
  end_date: model.dateTime().nullable(),
})

export const GuestReview = model.define("guest_review", {
  id: model.id().primaryKey(),
  stay_id: model.text().nullable(),
  guest_name: model.text(),
  rating: model.number().default(5),
  title: model.text().nullable(),
  comment: model.text(),
  review_date: model.dateTime(),
  status: model.enum(["Pending", "Approved", "Hidden"]).default("Approved"),
})
