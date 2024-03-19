import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About us',
    'description': 'Page about us'
}

export default function About() {
    return <h3>About page</h3>
}