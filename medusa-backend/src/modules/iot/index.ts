import IotModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const IOT_MODULE = "iot"

export default Module(IOT_MODULE, {
  service: IotModuleService,
})
