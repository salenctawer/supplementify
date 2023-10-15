import { Metadata } from "next";
import FavoriteTracks from "@/components/pages/FavoriteTracks/FavoriteTracks";

export const metadata: Metadata = {
    title: 'Favorite tracks | Supplemetify',
    description: 'View Spotify stats of the most played tracks on your account over a period of time',
    openGraph: {
        title: 'Favorite tracks',
        description: 'View Spotify stats of the most played tracks on your account over a period of time',
    }
}


export default function FavoriteTracksPage() {
    return (
        <main>
            <h1 className="pageTitle">Favorite tracks</h1>
            <FavoriteTracks />
        </main>
    )
}