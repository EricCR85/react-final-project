export default function Pagination({ page, onPrev, onNext }) {
    return (
        <div className="pagination">
            <button
                className="page-btn"
                onClick={onPrev}
                disabled={page === 1}
                >
                    Prev
                </button>
                <span className="page-number">Page {page}</span>

                <button
                className="page-btn"
                onClick={onNext}
                >
                    Next
                </button>
        </div>
    )
}