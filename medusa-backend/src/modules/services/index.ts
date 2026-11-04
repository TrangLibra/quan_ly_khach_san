import HotelServicesModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const SERVICES_MODULE = "hotel_services"

export default Module(SERVICES_MODULE, {
  service: HotelServicesModuleService,
})
