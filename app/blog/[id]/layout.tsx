import { Metadata } from "next"
import Link from "next/link";


type Props = {
    params: {
        id: string;
    }
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    return {
        title: 'Post ' + id
    }
}

export default function BlogPostLayout({children} : {children: React.ReactNode}) {

    return (
        <div>
            <Link href="/blog">Back to blog</Link>
            {children}
        </div>
    )
}