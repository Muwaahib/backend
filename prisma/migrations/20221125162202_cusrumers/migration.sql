-- CreateTable
CREATE TABLE "costumers" (
    "costumerId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "costumerPhone" TEXT NOT NULL,
    "costumerEmail" TEXT NOT NULL,
    "costumerAddress" TEXT,

    CONSTRAINT "costumers_pkey" PRIMARY KEY ("costumerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "costumers_costumerPhone_key" ON "costumers"("costumerPhone");

-- CreateIndex
CREATE UNIQUE INDEX "costumers_costumerEmail_key" ON "costumers"("costumerEmail");
