import prisma from "./prisma";

export type UserNeed = {
  budget: number;
  genre: string;
  purpose: string;
  hasAmp: boolean;
  hasSub: boolean;
  carModel?: string;
};

function scoreProduct(p: any, need: UserNeed): number {
  let score = 0;

  if (p.musicTags?.includes(need.genre)) score += 30;
  if (p.purpose?.includes(need.purpose)) score += 25;

  const ratio = p.price / need.budget;
  if (ratio <= 1 && ratio >= 0.4) score += 20;
  else if (ratio < 0.4) score += 10;
  else score -= 100;

  if (need.purpose === "SPL" && p.rmsPower && p.rmsPower > 300) score += 15;
  if (need.purpose === "SQ" && p.sensitivity && p.sensitivity > 88) score += 15;

  const catSlug = p.category?.slug;
  if (need.hasSub && catSlug === "subwoofer") score -= 50;
  if (need.hasAmp && catSlug === "amplifier") score -= 50;

  return score;
}

export async function recommend(need: UserNeed) {
  const products = await prisma.product.findMany({
    include: { category: true },
  });

  if (products.length === 0) {
    return { items: [], totalPrice: 0, remaining: need.budget, empty: true };
  }

  const scored = products
    .map((p) => ({ ...p, score: scoreProduct(p, need) }))
    .filter((p) => p.score > 0 && p.price <= need.budget)
    .sort((a, b) => b.score - a.score);

  const byCategory: Record<string, any> = {};
  for (const p of scored) {
    if (!byCategory[p.category.slug]) byCategory[p.category.slug] = p;
  }

  const selected = Object.values(byCategory);
  const total = selected.reduce((sum, p) => sum + p.price, 0);

  return {
    items: selected.map((p: any) => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
      price: p.price,
      category: p.category.name,
      rmsPower: p.rmsPower,
    })),
    totalPrice: total,
    remaining: need.budget - total,
    empty: false,
  };
}