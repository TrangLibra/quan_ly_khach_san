import {
  createStep,
  createWorkflow,
  StepResponse,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { HOTEL_MODULE } from "../modules/hotel"
import HotelModuleService from "../modules/hotel/service"

export type CreateRoomInput = {
  room_number: string
  floor: number
  branch_id: string
  room_type_id: string
  description?: string
  status?: "CleanAvailable" | "DirtyOccupied" | "DirtyVacant" | "Inspected" | "Maintenance" | "OutofOrder"
}

export const createRoomStep = createStep(
  "create-room-step",
  async (input: CreateRoomInput, { container }) => {
    const hotelService: HotelModuleService = container.resolve(HOTEL_MODULE)

    const room = await hotelService.createRooms({
      room_number: input.room_number,
      floor: input.floor,
      branch_id: input.branch_id,
      room_type_id: input.room_type_id,
      description: input.description,
      status: input.status || "CleanAvailable",
    })

    return new StepResponse(room, room.id)
  },
  async (roomId: string, { container }) => {
    const hotelService: HotelModuleService = container.resolve(HOTEL_MODULE)
    await hotelService.deleteRooms(roomId)
  }
)

export const createRoomWorkflow = createWorkflow(
  "create-room",
  (input: CreateRoomInput) => {
    const room = createRoomStep(input)
    return new WorkflowResponse(room)
  }
)

