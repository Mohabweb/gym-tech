import { branches, type Branch } from '~/data/branches'
// ponytail: fixture adapter. Swap body for the real branches endpoint once the HAR is available; keep the signature.
export async function getBranches(): Promise<Branch[]> { return branches }
