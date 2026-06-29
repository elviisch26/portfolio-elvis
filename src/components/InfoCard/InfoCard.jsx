import { Link } from "react-router-dom"
import './InfoCard.css'

const isExternalUrl = (to) => typeof to === "string" && /^https?:\/\//i.test(to)

export const InfoCard = ({ title, url, urlTitle, description, img, LinkTo }) => {

    const titleSlot = !LinkTo ? (
        <span className="card-title d-inline-block">{title}</span>
    ) : isExternalUrl(LinkTo) ? (
        <a
            className="card-title"
            href={LinkTo}
            target="_blank"
            rel="noopener noreferrer"
        >
            {title}
        </a>
    ) : (
        <Link className="card-title" to={LinkTo}>
            {title}
        </Link>
    )

    return (
        <div className="mt-5 card-style container">
            <div className="d-flex align-items-start gap-2">
                {img && (
                <div className="card-img-back">
                    <img className="card-img rounded-circle" src={img} />
                </div>
                )}
                <div className="d-flex flex-column card-top-block-info">
                    <p className="card-url-title">{urlTitle}</p>
                    <div className="d-flex">
                        <p className="card-url pe-2">{url}</p>

                        <div>
                            <span className="material-symbols-outlined text-secondary icon-more-vert">
                                more_vert
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {titleSlot}
            <p className="card-description">{description}</p>
        </div>
    )
}
