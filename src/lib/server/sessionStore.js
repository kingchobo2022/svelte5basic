export const sessions = new Map();

export function createSession(username) {
    const sessionId = crypto.randomUUID();
    sessions.set(sessionId, { username, createdAt: new Date() });
    return sessionId;
}