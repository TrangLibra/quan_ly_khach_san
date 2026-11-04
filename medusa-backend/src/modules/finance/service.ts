import { MedusaService } from "@medusajs/framework/utils"
import { Invoice, InvoiceLineItem, PaymentTransaction } from "./models/finance"

class FinanceModuleService extends MedusaService({
  Invoice,
  InvoiceLineItem,
  PaymentTransaction,
}) {}

export default FinanceModuleService
