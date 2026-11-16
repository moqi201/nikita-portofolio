
import {
  ArrowUpRight,
  BookOpen,
  PenLine,
} from 'lucide-react'

import SectionTitle from '../components/SectionTitle'

import {
  articles,
  researchPublications,
  profile,
} from '../data/portfolio'

export default function ArticlesSection() {
  return (
    <section
      id="writing"
      className="page-section writing-section"
    >
      <SectionTitle
        eyebrow="WRITING & PUBLICATIONS"
        title="Ideas beyond"
        accent="the screen."
        description="Academic research and personal perspectives on technology, society, and everyday life."
      />

      {/* JOURNAL PUBLICATIONS */}

      <div className="journals-grid">
        {researchPublications.map((publication) => (
          <article
            className="journal-card reveal"
            key={publication.number}
          >
            <div className="journal-card-icon">
              <BookOpen size={25} />
            </div>

            <div className="journal-content">
              <span className="writing-label">
                RESEARCH PUBLICATION / JATI
              </span>

              <h3>{publication.title}</h3>

              <p>{publication.description}</p>

              <div className="writing-tags">
                {publication.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="journal-meta">
                {publication.volume}
                <span>·</span>
                {publication.date}
              </div>

              <a
                href={publication.url}
                target="_blank"
                rel="noreferrer"
                className="writing-link writing-link-primary"
              >
                Read Publication
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* KUMPARAN ARTICLES */}

      <div className="articles-heading">
        <div>
          <p className="section-eyebrow">
            <span className="eyebrow-dot" />
            PERSONAL WRITING
          </p>

          <h3>
            Articles & <em>Opinions.</em>
          </h3>
        </div>

        <span className="article-count">
          {articles.length} PUBLISHED ARTICLES
        </span>
      </div>

      <div className="articles-grid">
        {articles.map((article) => (
          <article
            key={article.number}
            className="article-card reveal"
          >
            <div className="article-card-top">
              <span className="article-number">
                {article.number}
              </span>

              <PenLine size={17} />
            </div>

            <span className="article-category">
              {article.category}
            </span>

            <h4>{article.title}</h4>

            <p>{article.description}</p>

            <div className="article-card-footer">
              <span>{article.date}</span>

              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Read ${article.title}`}
              >
                <ArrowUpRight size={19} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <a
        href={profile.kumparan}
        target="_blank"
        rel="noreferrer"
        className="all-articles-link"
      >
        Explore all my writings on Kumparan
        <ArrowUpRight size={16} />
      </a>
    </section>
  )
}
