import {
  createStep,
  createWorkflow,
  StepResponse,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { HOTEL_MODULE } from "../modules/hotel"
import HotelModuleService from "../modules/hotel/service"

export type UpdateRoomStatusInput = {
  id: string
  status: "CleanAvailable" | "DirtyOccupied" | "DirtyVacant" | "Inspected" | "Maintenance" | "OutofOrder"
}

export const updateRoomStatusStep = createStep(
  "update-room-status-step",
  async (input: UpdateRoomStatusInput, { container }) => {
    const hotelService: HotelModuleService = container.resolve(HOTEL_MODULE)

    const prevRoom = await hotelService.retrieveRoom(input.id)
    const updated = await hotelService.updateRooms({
      id: input.id,
      status: input.status,
    })

    return new StepResponse(updated, { id: input.id, previousStatus: prevRoom.status })
  },
  async (compensationData: { id: string; previousStatus: any }, { container }) => {
    if (!compensationData) return
    const hotelService: HotelModuleService = container.resolve(HOTEL_MODULE)
    await hotelService.updateRooms({
      id: compensationData.id,
      status: compensationData.previousStatus,
    })
  }
)

export const updateRoomStatusWorkflow = createWorkflow(
  "update-room-status",
  (input: UpdateRoomStatusInput) => {
    const result = updateRoomStatusStep(input)
    return new WorkflowResponse(result)
  }
)
