import { Metadata } from "next";
import FavoriteArtists from "@/components/pages/FavoriteArtists/FavoriteArtists";

export const metadata: Metadata = {
    title: 'Favorite artists | Supplemetify',
    description: 'View Spotify stats of the most streamed artists on your account over time',
    openGraph: {
        title: 'Favorite artists',
        description: 'View Spotify stats of the most streamed artists on your account over time',
    }
}

export default function FavoriteArtistsPage() {
    return (
        <main>
            <h1 className="pageTitle">Favorite artists</h1>
            <FavoriteArtists />
        </main>
    )
}