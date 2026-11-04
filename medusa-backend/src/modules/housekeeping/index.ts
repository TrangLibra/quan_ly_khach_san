import HousekeepingModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const HOUSEKEEPING_MODULE = "housekeeping"

export default Module(HOUSEKEEPING_MODULE, {
  service: HousekeepingModuleService,
})

