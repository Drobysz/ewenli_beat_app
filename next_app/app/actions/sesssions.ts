"use server"

import { cookies } from 'next/headers';
import { UserSession } from '@/interfaces/UserData.interface';

// Encryption
import { encrypt, decrypt } from './encrypt';

export async function createSession(token: string, name: string, email: string) {
    const expiresAt = new Date(Date.now() + 1000 * 4 * 60 * 60);
    const session = await encrypt({token, name, email});
    const sessionStore = await cookies();

    sessionStore.set("session", session, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        expires: expiresAt,
        path: "/"
    });
};

export async function getSessionData() {
    const sesstionStore = await cookies();
    
    if (sesstionStore.get('session')?.value) {
        const userData = await decrypt(sesstionStore.get('session')!.value);
        return userData;
    } else {
        return undefined;
    }
};

export async function updateSession(sessionData: UserSession) {
    const sessionStore = await cookies();
    const session = await encrypt(sessionData);
    const expiresAt = new Date(Date.now() + 1000 * 4 * 60 * 60);

    sessionStore.set("session", session, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        expires: expiresAt,
        path: "/"
    });
};

export async function deleteSession() {
    const sessionStore = await cookies();
    sessionStore.delete('session');
};