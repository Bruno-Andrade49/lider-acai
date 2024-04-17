import type { DefaultUser, User } from "next-auth"
type UserId = string;
import "next-auth/jwt"

export enum Role {
    user = "USER",
    admin = "ADMIN",
}

interface IUser extends DefaultUser {
    role?: Role
    id?: UserId
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string
        role: string
    }
}

declare module 'next-auth' {
    interface User extends IUser { }

    interface Session {
        user?: User;
    }
}


