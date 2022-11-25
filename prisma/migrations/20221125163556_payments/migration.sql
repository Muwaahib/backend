-- CreateTable
CREATE TABLE "payments" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "modelPayment" TEXT,
    "Amount" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymId" INTEGER NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_paymId_fkey" FOREIGN KEY ("paymId") REFERENCES "products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;
