import { Metadata } from "next"

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
            {children}
        </div>
    )
}