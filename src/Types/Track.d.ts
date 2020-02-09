interface Track {
    artist: string,
    track: string | null,
    featuredArtists?: string[] | never[] | undefined 
}
