import { MedusaService } from "@medusajs/framework/utils"
import { Booking, BookingRoomAllocation, BookingPayment, Voucher } from "./models/booking"

class BookingModuleService extends MedusaService({
  Booking,
  BookingRoomAllocation,
  BookingPayment,
  Voucher,
}) {}

export default BookingModuleService

