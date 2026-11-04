import HotelModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const HOTEL_MODULE = "hotel"

export default Module(HOTEL_MODULE, {
  service: HotelModuleService,
})
