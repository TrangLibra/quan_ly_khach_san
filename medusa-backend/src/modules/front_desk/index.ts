import FrontDeskModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const FRONT_DESK_MODULE = "front_desk"

export default Module(FRONT_DESK_MODULE, {
  service: FrontDeskModuleService,
})
