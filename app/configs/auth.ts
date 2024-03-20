import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

//hardcode users
import {users} from "@/app/data/users";

export const authConfig: AuthOptions = {
    providers: [
        
        Credentials({
            credentials: {
                email: {label: 'email', type: 'email', required: true},
                password: {label: 'password', type: 'password', required: true},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;

                const currentUser = users.find(user => user.email === credentials.email);

                if (currentUser && currentUser.password === credentials.password) {
                    const {password, ...userWithoutPassword} = currentUser
                    return userWithoutPassword as User;
                }
              

                return null
            }
        })

    ]

}
export default NextAuth(authConfig);