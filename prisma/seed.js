const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 شروع seed...");

  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const amp = await prisma.category.create({ data: { name: "آمپلی‌فایر", slug: "amplifier" } });
  const sub = await prisma.category.create({ data: { name: "ساب‌ووفر", slug: "subwoofer" } });
  const spk = await prisma.category.create({ data: { name: "اسپیکر", slug: "speaker" } });
  const hu = await prisma.category.create({ data: { name: "هدیونیت", slug: "headunit" } });

  const products = [
    { name: "Pioneer GM-A3702", brand: "Pioneer", categoryId: amp.id, price: 8500000, rmsPower: 60, musicTags: ["pop","rock"], purpose: ["SQ"], description: "آمپلی‌فایر ۲ کانال اقتصادی" },
    { name: "Pioneer GM-A5702", brand: "Pioneer", categoryId: amp.id, price: 12500000, rmsPower: 75, musicTags: ["pop","rock","electronic"], purpose: ["SQ","SPL"], description: "آمپ ۴ کانال پرفروش" },
    { name: "Pioneer GM-DX874", brand: "Pioneer", categoryId: amp.id, price: 38000000, rmsPower: 100, musicTags: ["pop","classic","rock"], purpose: ["SQ"], description: "آمپ حرفه‌ای ۴ کانال" },
    { name: "Pioneer GM-DX975", brand: "Pioneer", categoryId: amp.id, price: 55000000, rmsPower: 350, musicTags: ["pop","rock","electronic"], purpose: ["SPL","SQ"], description: "آمپ ۵ کانال" },
    { name: "Pioneer GM-DX871", brand: "Pioneer", categoryId: amp.id, price: 24000000, rmsPower: 800, musicTags: ["rap","electronic"], purpose: ["SPL"], description: "آمپ مونو قدرتمند" },
    { name: "Kenwood KAC-PS802EX", brand: "Kenwood", categoryId: amp.id, price: 9800000, rmsPower: 60, musicTags: ["pop","classic"], purpose: ["SQ"], description: "آمپ ۲ کانال کنوود" },
    { name: "Kenwood KAC-M1814", brand: "Kenwood", categoryId: amp.id, price: 14500000, rmsPower: 50, musicTags: ["pop","rock"], purpose: ["SQ"], description: "آمپ جمع‌وجور ۴ کانال" },
    { name: "Sony XM-N502", brand: "Sony", categoryId: amp.id, price: 7800000, rmsPower: 65, musicTags: ["pop","rock"], purpose: ["SQ"], description: "آمپ اقتصادی سونی" },
    { name: "Sony XM-GS4", brand: "Sony", categoryId: amp.id, price: 22000000, rmsPower: 100, musicTags: ["pop","rock","electronic"], purpose: ["SQ","SPL"], description: "آمپ ۴ کانال سونی" },
    { name: "LS Audio LS-6000", brand: "LS Audio", categoryId: amp.id, price: 16500000, rmsPower: 80, musicTags: ["pop","rap","electronic"], purpose: ["SQ","SPL"], description: "آمپ ۴ کانال" },
    { name: "Boschmann PCH-888X", brand: "Boschmann", categoryId: amp.id, price: 11200000, rmsPower: 75, musicTags: ["pop","rap"], purpose: ["SQ","SPL"], description: "آمپ ۴ کانال اقتصادی" },
    { name: "Hertz HCP 4D", brand: "Hertz", categoryId: amp.id, price: 26400000, rmsPower: 100, musicTags: ["pop","classic"], purpose: ["SQ"], description: "آمپ کیفیتی هرتز" },

    { name: "Kenwood KFC-MW3000", brand: "Kenwood", categoryId: sub.id, price: 8900000, rmsPower: 300, sizeInch: 12, musicTags: ["rap","pop","electronic"], purpose: ["SPL","SQ"], description: "ساب ۱۲ اینچ پرفروش" },
    { name: "Pioneer TS-W312D4", brand: "Pioneer", categoryId: sub.id, price: 12200000, rmsPower: 400, sizeInch: 12, musicTags: ["rap","electronic","rock"], purpose: ["SPL"], description: "ساب قدرتمند" },
    { name: "Pioneer TS-WX400DA", brand: "Pioneer", categoryId: sub.id, price: 18500000, rmsPower: 250, sizeInch: 8, musicTags: ["pop","rap"], purpose: ["SQ","SPL"], description: "ساب اکتیو زیر صندلی" },
    { name: "JBL Stage 102", brand: "JBL", categoryId: sub.id, price: 10980000, rmsPower: 225, sizeInch: 10, sensitivity: 89, musicTags: ["rap","pop","electronic"], purpose: ["SPL","SQ"], description: "ساب ۱۰ اینچ" },
    { name: "JBL GT-X1500THI", brand: "JBL", categoryId: sub.id, price: 22200000, rmsPower: 325, sizeInch: 12, sensitivity: 90, musicTags: ["rap","electronic","rock"], purpose: ["SPL"], description: "ساب با باکس" },
    { name: "JBL 1214", brand: "JBL", categoryId: sub.id, price: 6490000, rmsPower: 250, sizeInch: 12, sensitivity: 89, musicTags: ["rap","pop","electronic"], purpose: ["SPL","SQ"], description: "ساب اقتصادی JBL" },
    { name: "Infinity Alpha 121W", brand: "Infinity", categoryId: sub.id, price: 12800000, rmsPower: 250, sizeInch: 12, musicTags: ["pop","rap"], purpose: ["SQ","SPL"], description: "ساب کم‌عمق" },
    { name: "Gladen Alpha 10", brand: "Gladen", categoryId: sub.id, price: 18500000, rmsPower: 300, sizeInch: 10, musicTags: ["classic","pop","rock"], purpose: ["SQ"], description: "ساب کیفیتی آلمانی" },
    { name: "Nakamichi 1203 S4", brand: "Nakamichi", categoryId: sub.id, price: 7200000, rmsPower: 250, sizeInch: 12, musicTags: ["rap","pop"], purpose: ["SPL"], description: "ساب اقتصادی" },

    { name: "Pioneer TS-A1696S", brand: "Pioneer", categoryId: spk.id, price: 10410000, rmsPower: 80, sizeInch: 6.5, musicTags: ["pop","rock"], purpose: ["SQ"], description: "باند گرد پرطرفدار" },
    { name: "Pioneer TS-A1680F", brand: "Pioneer", categoryId: spk.id, price: 15000000, rmsPower: 80, sizeInch: 6.5, musicTags: ["pop","rock"], purpose: ["SQ"], description: "باند کواکسیال" },
    { name: "Pioneer TS-Z65F", brand: "Pioneer", categoryId: spk.id, price: 20000000, rmsPower: 110, sizeInch: 6.5, musicTags: ["pop","classic","rock","electronic"], purpose: ["SQ"], description: "باند کیفیتی Pioneer" },
    { name: "Pioneer TS-F651C", brand: "Pioneer", categoryId: spk.id, price: 9470000, rmsPower: 90, sizeInch: 6.5, musicTags: ["pop","rock","electronic"], purpose: ["SQ"], description: "کامپوننت اقتصادی" },
    { name: "Kenwood KFC-HQ718", brand: "Kenwood", categoryId: spk.id, price: 16800000, rmsPower: 100, sizeInch: 6, musicTags: ["pop","rock"], purpose: ["SQ"], description: "باند بیضی کنوود" },
    { name: "Hertz MPK 165.3 PRO", brand: "Hertz", categoryId: spk.id, price: 60000000, rmsPower: 110, sizeInch: 6.5, musicTags: ["classic","pop","rock"], purpose: ["SQ"], description: "کامپوننت حرفه‌ای هرتز" },
    { name: "Hertz CPK 690", brand: "Hertz", categoryId: spk.id, price: 27189000, rmsPower: 100, sizeInch: 6, musicTags: ["pop","classic","rock"], purpose: ["SQ"], description: "کامپوننت بیضی کیفیتی" },
    { name: "JBL Stage3 507CF", brand: "JBL", categoryId: spk.id, price: 11700000, rmsPower: 90, sizeInch: 5, musicTags: ["pop","rock"], purpose: ["SQ"], description: "کامپوننت JBL" },
    { name: "Maxider PL6917", brand: "Maxider", categoryId: spk.id, price: 6800000, rmsPower: 80, sizeInch: 6, musicTags: ["pop","rap"], purpose: ["SQ"], description: "باند بیضی اقتصادی" },
    { name: "Alpine R-S69", brand: "Alpine", categoryId: spk.id, price: 24500000, rmsPower: 100, sizeInch: 6, musicTags: ["pop","rock","electronic"], purpose: ["SQ"], description: "باند بیضی آلپاین" },
    { name: "Nakamichi NSG6929", brand: "Nakamichi", categoryId: spk.id, price: 8900000, rmsPower: 90, sizeInch: 6, musicTags: ["pop","rock"], purpose: ["SQ"], description: "باند بیضی ناکامیچی" },
    { name: "Audio System AS-165 FL EVO", brand: "Audio System", categoryId: spk.id, price: 18500000, rmsPower: 130, sizeInch: 6.5, musicTags: ["classic","pop","rock"], purpose: ["SQ"], description: "ووفر حرفه‌ای" },

    { name: "Pioneer DEH-S5250BT", brand: "Pioneer", categoryId: hu.id, price: 18700000, musicTags: ["pop","rap","electronic","rock","classic"], purpose: ["SQ","SPL"], description: "هدیونیت بلوتوثی ۱ DIN" },
    { name: "Pioneer DEH-X9650BT", brand: "Pioneer", categoryId: hu.id, price: 29500000, musicTags: ["pop","rap","electronic","rock","classic"], purpose: ["SQ","SPL"], description: "هدیونیت حرفه‌ای با پنل برقی" },
    { name: "Pioneer MVH-S315BT", brand: "Pioneer", categoryId: hu.id, price: 12800000, musicTags: ["pop","rock"], purpose: ["SQ"], description: "هدیونیت دیجیتال" },
    { name: "Pioneer DMH-Z6350BT", brand: "Pioneer", categoryId: hu.id, price: 119000000, musicTags: ["pop","rap","electronic","rock","classic"], purpose: ["SQ","SPL"], description: "هدیونیت ۲ DIN لمسی" },
    { name: "Kenwood KDC-BT640U", brand: "Kenwood", categoryId: hu.id, price: 16800000, musicTags: ["pop","rock"], purpose: ["SQ"], description: "هدیونیت بلوتوثی کنوود" },
    { name: "Kenwood DMX 9021S", brand: "Kenwood", categoryId: hu.id, price: 70000000, musicTags: ["pop","rap","electronic"], purpose: ["SQ","SPL"], description: "هدیونیت تصویری" },
    { name: "Sony MEX-N5300BT", brand: "Sony", categoryId: hu.id, price: 14500000, musicTags: ["pop","rock"], purpose: ["SQ"], description: "هدیونیت بلوتوثی سونی" },
    { name: "Sony XAV-AX5650D", brand: "Sony", categoryId: hu.id, price: 35000000, musicTags: ["pop","rap","electronic"], purpose: ["SQ","SPL"], description: "هدیونیت لمسی" },
    { name: "JVC X 368", brand: "JVC", categoryId: hu.id, price: 11200000, musicTags: ["pop","rock"], purpose: ["SQ"], description: "هدیونیت اقتصادی JVC" },
  ];

  for (const p of products) {
    await prisma.product.create({ data: p });
  }

  console.log(`✅ ${products.length} محصول اضافه شد!`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
