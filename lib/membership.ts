import { plans, type Access, type Duration, type Plan } from '../data/plans.ts'

export const durations: Duration[] = [12, 6, 3, 1]
export const accesses: Access[] = ['multi', 'one', 'offpeak']

export const accessAvailable = (a: Access, d: Duration) => d !== 1 || a === 'one'
export const needsBranch = (a: Access) => a === 'one'
export const findPlan = (a: Access, d: Duration): Plan | undefined => plans.find(p => p.access === a && p.duration === d)
export const plansFor = (d: Duration) => accesses.filter(a => accessAvailable(a, d)).map(a => findPlan(a, d)!)
/** One Club with no branch chosen is ambiguous: caller must show "choose your branch". */
export const isAmbiguous = (a: Access, branch: string) => needsBranch(a) && !branch
/** Switching to 1 month forces One Club (only valid access). */
export const normalize = (a: Access, d: Duration): Access => (accessAvailable(a, d) ? a : 'one')
