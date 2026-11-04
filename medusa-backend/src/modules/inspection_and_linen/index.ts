import InspectionAndLinenModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const INSPECTION_AND_LINEN_MODULE = "inspection_and_linen"

export default Module(INSPECTION_AND_LINEN_MODULE, {
  service: InspectionAndLinenModuleService,
})
