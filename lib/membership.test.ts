import assert from 'node:assert'
import { plans } from '../data/plans.ts'
import { branches } from '../data/branches.ts'
import { findPlan, plansFor, normalize, isAmbiguous } from './membership.ts'
assert.equal(plans.length, 10)
assert.equal(findPlan('multi', 12)!.price, 2675)
assert.equal(findPlan('offpeak', 3)!.price, 878)
assert.equal(findPlan('one', 1)!.price, 450)
assert.equal(findPlan('multi', 1), undefined)
assert.equal(plansFor(1).length, 1)
assert.equal(plansFor(6).length, 3)
assert.equal(normalize('multi', 1), 'one')
assert.equal(isAmbiguous('one', ''), true)
assert.equal(isAmbiguous('multi', ''), false)
const c = (p: (b: any) => boolean) => branches.filter(p).length
assert.equal(branches.length, 10)
assert.equal(c(b => b.gender === 'ladies'), 3); assert.equal(c(b => b.gender === 'men'), 7)
assert.equal(c(b => b.city === 'riyadh'), 9); assert.equal(c(b => b.city === 'jeddah'), 1)
assert.equal(c(b => b.gender === 'ladies' && b.city === 'jeddah'), 0)
assert.equal(new Set(branches.map(b => b.id)).size, 10)
console.log('ok')
