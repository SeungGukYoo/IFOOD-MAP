import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedData() {
  // data?.["DATA"]?.forEach(async (store) => {
  //   const storeData = {
  //     phone: store?.tel_no,
  //     address: store?.rdn_code_nm,
  //     lat: store?.y_dnts,
  //     lng: store?.x_cnts,
  //     name: store?.upso_nm,
  //     category: store?.bizcnd_code_nm,
  //     storeType: store?.cob_code_nm,
  //     foodCertifyName: store?.crtfc_gbn_nm,
  //   };
  //   const res = await prisma.store.create({
  //     data: storeData,
  //   });
  //   console.log(res);
  // });
}
async function main() {
  // await seedData();
}

main()
  .catch((e) => {
    console.error("ERROR=>", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
