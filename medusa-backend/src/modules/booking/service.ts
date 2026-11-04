import { MedusaService } from "@medusajs/framework/utils"
import { Booking, BookingRoomAllocation, Payment, Voucher } from "./models/booking"

class BookingModuleService extends MedusaService({
  Booking,
  BookingRoomAllocation,
  Payment,
  Voucher,
}) {}

export default BookingModuleService

