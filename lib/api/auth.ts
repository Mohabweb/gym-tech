// ponytail: auth adapter stub. Existing gymtech.sa auth endpoints/fields are UNVERIFIED (no network access in Phase 1).
// Replace bodies with real calls once the HAR/API docs are available; forms and validation stay as they are.
export class NotConfigured extends Error {}
export async function login(_: { identifier: string; password: string }): Promise<void> { throw new NotConfigured() }
export async function register(_: { name: string; email: string; phone: string; password: string }): Promise<void> { throw new NotConfigured() }
