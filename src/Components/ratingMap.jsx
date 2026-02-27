export function mapRating(vote) {
    if (vote >= 7.5) return "PG-13"
    if (vote >= 6) return "PG"
    if (vote >= 4) return "R"
    return "G"
}