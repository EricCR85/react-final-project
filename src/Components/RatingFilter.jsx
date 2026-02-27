export default function RatingFilter({ rating, onchange }) {
    return (
        <div className="rating-filter">
            <select
                className="rating-select"
                value={rating}
                onchange={(e) => onchange(e.targert.value)}
        >
            <option value="">ALL RATINGS</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            </select>
            </div>
    )
}