import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { authConfig } from "@/app/configs/auth";


// export const authOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: '1',
//             clientSecret: '2'
//         })
//     ]
// }

const handlers = NextAuth(authConfig);
export {handlers as GET, handlers as POST}