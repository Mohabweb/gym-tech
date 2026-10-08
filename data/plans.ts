// Supplied client data (fixture). Feature text lives in locales (plans.f.*) keyed here.
export type Access = 'multi' | 'one' | 'offpeak'
export type Duration = 12 | 6 | 3 | 1
export interface Plan { duration: Duration; access: Access; price: number; currency: 'SAR'; features: string[]; freezeDays?: number }

const f = (...k: string[]) => k
export const plans: Plan[] = [
  { duration: 12, access: 'multi', price: 2675, currency: 'SAR', freezeDays: 60, features: f('allBranches', 'consultSchedule', 'freeze60x4') },
  { duration: 12, access: 'one', price: 2140, currency: 'SAR', freezeDays: 60, features: f('oneBranch', 'consultSchedule', 'freeze60x4') },
  { duration: 12, access: 'offpeak', price: 2015, currency: 'SAR', freezeDays: 60, features: f('offHours', 'allBranches', 'consultSchedule', 'freeze60') },
  { duration: 6, access: 'multi', price: 1625, currency: 'SAR', freezeDays: 45, features: f('allBranches', 'consultSchedule', 'freeze45x3') },
  { duration: 6, access: 'one', price: 1300, currency: 'SAR', freezeDays: 45, features: f('oneBranch', 'consultSchedule', 'freeze45x3') },
  { duration: 6, access: 'offpeak', price: 1223, currency: 'SAR', freezeDays: 45, features: f('offHours', 'allBranches', 'consultSchedule', 'freeze45') },
  { duration: 3, access: 'multi', price: 996, currency: 'SAR', freezeDays: 30, features: f('allBranches', 'consultSchedule', 'freeze30x2') },
  { duration: 3, access: 'one', price: 740, currency: 'SAR', freezeDays: 30, features: f('oneBranch', 'consultSchedule', 'freeze30') },
  { duration: 3, access: 'offpeak', price: 878, currency: 'SAR', freezeDays: 30, features: f('offHours', 'allBranches', 'consultSchedule', 'freeze30') },
  { duration: 1, access: 'one', price: 450, currency: 'SAR', features: f('oneBranchMonth', 'consult', 'workoutPlan') },
]
