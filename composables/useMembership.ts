import type { Access, Duration } from '~/data/plans'
import type { Gender } from '~/data/branches'
// Shared selection: survives language switches and page changes (useState is app-global).
export const useMembership = () => useState('mem', () => ({ gender: 'men' as Gender, branch: '', access: 'multi' as Access, duration: 12 as Duration }))
