import StaffAndGuestModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const STAFF_AND_GUEST_MODULE = "staff_and_guest"

export default Module(STAFF_AND_GUEST_MODULE, {
  service: StaffAndGuestModuleService,
})
