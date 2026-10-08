// Supplied client data (fixture). Runtime API wins once endpoints are known (lib/api).
export type Gender = 'ladies' | 'men'
export type City = 'riyadh' | 'jeddah'
export interface Branch { id: string; gender: Gender; city: City; ar: string; en: string; map: string }

export const branches: Branch[] = [
  { id: 'l-narjis-mashareq', gender: 'ladies', city: 'riyadh', ar: 'النرجس - مشارف هيلز', en: 'Al Narjis – Mashareq Hills', map: 'https://maps.app.goo.gl/S2gHTgKE4WmByBjW8' },
  { id: 'l-narjis-south', gender: 'ladies', city: 'riyadh', ar: 'النرجس جنوب', en: 'Al Narjis South', map: 'https://maps.app.goo.gl/WiV2uxnaLpv9RLNZ9' },
  { id: 'l-narjis-view', gender: 'ladies', city: 'riyadh', ar: 'النرجس فيو', en: 'Al Narjis View', map: 'https://maps.app.goo.gl/yFQtKpSSbKiDa5fQ7' },
  { id: 'm-narjis-mashareq', gender: 'men', city: 'riyadh', ar: 'النرجس - مشارف هيلز', en: 'Al Narjis – Mashareq Hills', map: 'https://goo.gl/maps/92CZZmDFkRdHu9Ue6' },
  { id: 'm-qairawan', gender: 'men', city: 'riyadh', ar: 'القيروان', en: 'Al Qairawan', map: 'https://goo.gl/maps/zLuvpo25Z7QYaA1e6' },
  { id: 'm-boulevard-2030', gender: 'men', city: 'riyadh', ar: 'بوليفارد 2030', en: 'Boulevard 2030', map: 'https://maps.app.goo.gl/2fRtL6XLkYqfGhnG7?g_st=ic' },
  { id: 'm-arid', gender: 'men', city: 'riyadh', ar: 'العارض', en: 'Al Arid', map: 'https://maps.app.goo.gl/tzjQio776G7w2x5e9' },
  { id: 'm-narjis-south', gender: 'men', city: 'riyadh', ar: 'النرجس جنوب', en: 'Al Narjis South', map: 'https://maps.app.goo.gl/aqSQozjRo1Fyk9g58' },
  { id: 'm-narjis-view', gender: 'men', city: 'riyadh', ar: 'النرجس فيو', en: 'Al Narjis View', map: 'https://maps.app.goo.gl/pSXrwFKBNt9ggfnB9' },
  { id: 'm-riyadh-district', gender: 'men', city: 'jeddah', ar: 'حي الرياض', en: 'Al Riyadh District', map: 'https://maps.app.goo.gl/MJ4aoCPuPiU8vn7W7?g_st=com.google.maps.preview.copy' },
]

// City-level centers only. Exact branch coordinates were not supplied (see plan §9.6).
export const cityCoords: Record<City, [number, number]> = { riyadh: [24.7136, 46.6753], jeddah: [21.4858, 39.1925] }
