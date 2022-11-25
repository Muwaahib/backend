-- CreateTable
CREATE TABLE "products" (
    "productId" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "Description" TEXT,
    "qty" TEXT NOT NULL,
    "Amount" TEXT NOT NULL,
    "prodId" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("productId")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "costumers"("costumerId") ON DELETE RESTRICT ON UPDATE CASCADE;
