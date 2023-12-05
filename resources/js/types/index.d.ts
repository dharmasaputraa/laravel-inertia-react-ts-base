export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    avatar: string;
    acronym: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

interface CommandPaletteState {
    openCommandPalette: boolean;
    setOpenCommandPalette: (openCommandPalette: boolean) => void;
}
