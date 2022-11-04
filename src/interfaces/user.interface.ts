export interface User {
    name: string;
    email: string;
    avatar: string;
}

export interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
}

