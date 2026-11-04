import {
  createStep,
  createWorkflow,
  StepResponse,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { BOOKING_MODULE } from "../modules/booking"
import BookingModuleService from "../modules/booking/service"

export type CreateReservationInput = {
  customer_id: string
  room_type_id: string
  check_in_date: Date
  check_out_date: Date
  room_quantity: number
  adults: number
  children: number
  total_amount: number
  deposit_amount: number
  special_requests?: string
}

export const createReservationStep = createStep(
  "create-reservation-step",
  async (input: CreateReservationInput, { container }) => {
    const bookingService: BookingModuleService = container.resolve(BOOKING_MODULE)

    const bookingCode = `BK-${Date.now().toString().slice(-6)}`

    const booking = await bookingService.createBookings({
      code: bookingCode,
      customer_id: input.customer_id,
      room_type_id: input.room_type_id,
      check_in_date: input.check_in_date,
      check_out_date: input.check_out_date,
      room_quantity: input.room_quantity,
      adults: input.adults,
      children: input.children,
      total_amount: input.total_amount,
      deposit_amount: input.deposit_amount,
      status: "Pending",
      special_requests: input.special_requests,
    })

    return new StepResponse(booking, booking.id)
  },
  async (bookingId: string, { container }) => {
    const bookingService: BookingModuleService = container.resolve(BOOKING_MODULE)
    await bookingService.deleteBookings(bookingId)
  }
)

export const createReservationWorkflow = createWorkflow(
  "create-reservation",
  (input: CreateReservationInput) => {
    const reservation = createReservationStep(input)
    return new WorkflowResponse(reservation)
  }
)
