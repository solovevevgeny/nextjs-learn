import React, { Suspense } from "react";
import Loading from "./[id]/loading";

export default function BlogLayout({children} : {children: React.ReactNode}) {
    return (
        <Suspense fallback={ <Loading />} >
            {children}
        </Suspense>
    )
}