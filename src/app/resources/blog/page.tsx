// app/blog/page.tsx

"use client";

import PageBanner from '@/components/PageBanner';
import React, { useState } from 'react';
import styles from './Blog.module.css';

/* ─────────────────────────── TYPES ─────────────────────────── */
interface Post {
    id: number;
    date: string;
    title: string;
    slug: string;
    author: string;
    excerpt: string;
    body: string;
    image?: string;
}

/* ─────────────────────────── DATA WITH IMAGES ─────────────────────────── */
const posts: Post[] = [
    {
        id: 1,
        date: '03 March 2026',
        title: 'The Top Advantages of Franchising Your Business',
        slug: 'the-top-advantages-of-franchising-your-business',
        author: 'Editorial Team',
        excerpt: 'Franchising your business is one of the most powerful strategies for rapid, capital-efficient growth.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
        body: `<p>Franchising your business is one of the most powerful strategies for rapid, capital-efficient growth. When you franchise, you essentially license your business model, brand, and systems to independent operators — called franchisees — who invest their own capital to open new locations.</p>
    <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=450&fit=crop" alt="Franchise Business Meeting" class="blog-image" />
    <h2>Brand Recognition at Scale</h2>
    <p>One of the greatest advantages of franchising is the ability to build national or even global brand recognition without bearing the full financial burden yourself. Each franchisee becomes a brand ambassador in their local market.</p>
    <h2>Reduced Capital Requirements</h2>
    <p>Unlike company-owned expansion, franchising allows you to grow your footprint without tying up your own capital. Franchisees fund the real estate, equipment, and working capital for each new location.</p>
    <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop" alt="Franchise Growth Chart" class="blog-image" />
    <h2>Motivated Owner-Operators</h2>
    <p>Franchisees have skin in the game. Because they have invested their own money and are building their own business under your brand, franchisees tend to be more motivated, attentive, and customer-focused than hired managers.</p>`,
    },
    {
        id: 2,
        date: '03 March 2026',
        title: 'Top Franchise Opportunities: A Complete Guide',
        slug: 'top-franchise-opportunities-a-complete-guide',
        author: 'Editorial Team',
        excerpt: 'The franchise market in 2026 offers an extraordinary range of opportunities across virtually every industry.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop',
        body: `<p>Whether you're a first-time entrepreneur or a seasoned investor looking to diversify, the franchise market in 2026 offers an extraordinary range of opportunities across virtually every industry.</p>
    <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&h=450&fit=crop" alt="Franchise Opportunities" class="blog-image" />
    <h2>What Makes a Great Franchise Opportunity?</h2>
    <p>The best franchise opportunities combine proven unit economics, a differentiated brand, strong franchisor support, and a growth market.</p>
    <h2>Food & Beverage Franchises</h2>
    <p>Food and beverage remains the largest franchise category. Fast casual concepts have shown particular resilience and growth, driven by consumer demand for quality ingredients and convenience.</p>
    <h2>Home Services Franchises</h2>
    <p>As homeownership rates remain high and the skilled trades face a labor shortage, home services franchises have become among the most in-demand opportunities.</p>`,
    },
    {
        id: 3,
        date: '20 February 2026',
        title: "Can I Get a Loan to Buy a Franchise? Yes, Here's How",
        slug: 'can-i-get-a-loan-to-buy-a-franchise',
        author: 'Editorial Team',
        excerpt: 'Franchise financing is well-established, with multiple programs specifically designed to help entrepreneurs.',
        image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=450&fit=crop',
        body: `<p>One of the most common questions prospective franchisees ask is whether they can finance their investment rather than paying cash. The good news is that franchise financing is well-established, with multiple programs specifically designed to help entrepreneurs get into business.</p>
    <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop" alt="Franchise Loan Approval" class="blog-image" />
    <h2>SBA Loans</h2>
    <p>The U.S. Small Business Administration (SBA) offers two primary loan programs: the SBA 7(a) loan and the SBA 504 loan. The SBA 7(a) is the most flexible, allowing borrowers to finance franchise fees, equipment, real estate, and working capital up to $5 million.</p>
    <h2>Franchisor Financing</h2>
    <p>Some franchisors offer in-house financing programs or have preferred lender relationships designed to remove barriers to entry for qualified candidates.</p>`,
    },
    {
        id: 4,
        date: '19 February 2026',
        title: '5 Top Franchise Investment Opportunities to Consider',
        slug: 'franchise-investment-opportunities',
        author: 'Editorial Team',
        excerpt: 'Five categories of franchise investment opportunities that have demonstrated particular strength.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
        body: `<p>With thousands of franchise brands competing for your investment, narrowing the field can feel overwhelming. Here are five categories of franchise investment opportunities that have demonstrated particular strength in recent years.</p>
    <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=450&fit=crop" alt="Investment Portfolio" class="blog-image" />
    <h2>1. Senior Care & In-Home Services</h2>
    <p>America's aging population is driving enormous demand for senior care services, from in-home companions to specialized memory care.</p>
    <h2>2. Mobile & Van-Based Service Franchises</h2>
    <p>Eliminating the cost of commercial real estate, mobile and van-based franchise concepts in pet grooming, auto detailing, and home repair have attractive margins and low overhead.</p>`,
    },
    {
        id: 5,
        date: '18 February 2026',
        title: "9 Steps to Becoming a Franchisee: A Beginner's Guide",
        slug: 'becoming-a-franchisee-guide',
        author: 'Editorial Team',
        excerpt: 'Becoming a franchisee is an exciting but complex process that requires careful research and planning.',
        image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=450&fit=crop',
        body: `<p>Becoming a franchisee is an exciting but complex process that requires careful research, financial planning, and due diligence.</p>
    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop" alt="Franchise Steps" class="blog-image" />
    <h2>Step 1: Self-Assessment</h2>
    <p>Before exploring brands, honestly assess your financial situation, operational preferences, risk tolerance, and personal goals.</p>
    <h2>Step 2: Explore the Market</h2>
    <p>Research franchise categories that interest you. Attend franchise expos, browse franchise portals, and read industry publications.</p>
    <h2>Step 3: Build a Target List</h2>
    <p>Narrow your focus to 5–10 franchise brands that meet your investment parameters and align with your interests.</p>`,
    },
    {
        id: 6,
        date: '17 February 2026',
        title: '15 Promising New Franchise Opportunities to Watch',
        slug: 'new-franchise-opportunities',
        author: 'Editorial Team',
        excerpt: 'Categories and concepts generating significant excitement among investors and franchise developers in 2026.',
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=450&fit=crop',
        body: `<p>The franchise industry constantly evolves as consumer trends shift, technology advances, and new service categories emerge.</p>
    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=450&fit=crop" alt="New Franchise Trends" class="blog-image" />
    <h2>Emerging Categories</h2>
    <p>Coworking and flex office franchises have found new demand as remote and hybrid work becomes permanent. Mental health and counseling service franchises are growing rapidly.</p>
    <h2>Sustainability-Focused Concepts</h2>
    <p>Resale and consignment franchises, EV charging networks, and sustainable home services are attracting investment from eco-conscious entrepreneurs.</p>`,
    },
    {
        id: 7,
        date: '16 February 2026',
        title: "How to Buy a Franchise: A Beginner's Guide",
        slug: 'buy-a-franchise-guide',
        author: 'Editorial Team',
        excerpt: "A franchise provides you with a proven business model, established brand, training, and ongoing support.",
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=450&fit=crop',
        body: `<p>Buying a franchise is one of the most structured paths to business ownership available. Unlike starting a business from scratch, a franchise provides you with a proven business model, established brand, training, and ongoing support.</p>
    <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=450&fit=crop" alt="Buying a Franchise" class="blog-image" />
    <h2>Define Your Investment Budget</h2>
    <p>Total investment in a franchise includes the franchise fee, real estate or leasehold improvements, equipment, inventory, working capital, and training costs.</p>
    <h2>Evaluate the Franchise Agreement</h2>
    <p>The franchise agreement is a legally binding document that governs your relationship with the franchisor for the duration of the term, typically 10 years.</p>`,
    },
    {
        id: 8,
        date: '10 February 2026',
        title: 'Essential Franchise Rules and Regulations',
        slug: 'essential-franchise-rules-and-regulations',
        author: 'Editorial Team',
        excerpt: 'Understanding the key regulatory framework is essential for both franchisors and franchisees.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop',
        body: `<p>Franchising in the United States is governed by a combination of federal law and state regulations designed to protect prospective franchisees.</p>
    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop" alt="Legal Documents" class="blog-image" />
    <h2>The FTC Franchise Rule</h2>
    <p>The Federal Trade Commission's Franchise Rule requires franchisors to provide prospective franchisees with a Franchise Disclosure Document (FDD) at least 14 calendar days before any franchise agreement is signed.</p>
    <h2>State Registration Requirements</h2>
    <p>Approximately 15 states are "registration states" that require franchisors to register their FDD with the state before offering franchises.</p>`,
    },
    {
        id: 9,
        date: '09 February 2026',
        title: 'Franchise Lead Generation: A Complete Guide',
        slug: 'franchise-lead-generation-a-complete-guide',
        author: 'Editorial Team',
        excerpt: 'The ability to consistently generate high-quality franchise leads is the lifeblood of system growth.',
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=450&fit=crop',
        body: `<p>For franchisors, the ability to consistently generate high-quality franchise leads is the lifeblood of system growth.</p>
    <img src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=450&fit=crop" alt="Lead Generation" class="blog-image" />
    <h2>Define Your Ideal Franchisee Profile</h2>
    <p>Before investing in lead generation, clearly define what your ideal franchisee looks like: net worth requirements, liquid capital, management experience, and personality traits.</p>
    <h2>Franchise Expos and Trade Shows</h2>
    <p>Face-to-face events like the International Franchise Expo provide unmatched lead quality. Candidates who attend expos are often further along in their research and more financially qualified.</p>`,
    },
    {
        id: 10,
        date: '04 February 2026',
        title: 'Best Franchises to Own: A Guide for Every Budget',
        slug: 'best-franchises-to-own-a-guide-for-every-budget',
        author: 'Editorial Team',
        excerpt: 'From under $50K to multi-million dollar investments, there is a franchise model for every budget.',
        image: 'https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_127_110.jpg?e3e586d105142b2d0118798799ba7941',
        body: `<p>One of the most common misconceptions about franchising is that it requires enormous capital. In reality, there are excellent franchise opportunities at virtually every investment level.</p>
    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop" alt="Budget Planning" class="blog-image" />
    <h2>Under $50,000</h2>
    <p>Home-based and van-based service franchises, tutoring, and some cleaning concepts can be launched for under $50,000 in total investment.</p>
    <h2>$50,000–$250,000</h2>
    <p>This range opens up a broad market including many fitness studios, food kiosks, personal services, and B2B concepts with proven unit economics.</p>`,
    },
    {
        id: 11,
        date: '05 January 2026',
        title: 'How to Open a Franchise with No Money (A Real Plan)',
        slug: 'open-franchise-no-money',
        author: 'Editorial Team',
        excerpt: 'Opening a franchise with limited capital is challenging but genuinely achievable with the right approach.',
        image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=450&fit=crop',
        body: `<p>Opening a franchise with limited personal capital is challenging but genuinely achievable with the right combination of financing strategies and brand selection.</p>
    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop" alt="No Money Down" class="blog-image" />
    <h2>ROBS — Rollover for Business Startups</h2>
    <p>If you have a retirement account with $50,000 or more, a ROBS arrangement lets you invest those funds into your franchise without paying early withdrawal taxes or penalties.</p>
    <h2>SBA Loans with Minimal Down Payment</h2>
    <p>Some SBA lenders work with borrowers who have strong credit and relevant experience but limited liquid capital, particularly for franchise brands on the SBA's approved list.</p>`,
    },
    {
        id: 12,
        date: '02 January 2026',
        title: '15 Best Food Franchises to Own (For Any Budget)',
        slug: 'best-food-franchises-to-own',
        author: 'Editorial Team',
        excerpt: 'Food franchises remain the most popular category, offering options from pizza to smoothies to fine dining.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=450&fit=crop',
        body: `<p>Food franchises remain the most popular and diverse category in franchising, offering investment options that range from a few thousand dollars for a home-based catering concept to multi-million dollar investments in full-service restaurant chains.</p>
    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=450&fit=crop" alt="Food Franchise" class="blog-image" />
    <h2>Quick Service Restaurants (QSR)</h2>
    <p>QSR franchises offer speed, consistency, and brand recognition. Strong drive-through performance and digital ordering capabilities have made the best QSR brands resilient to economic fluctuations.</p>
    <h2>Fast Casual</h2>
    <p>The fast casual segment — characterized by higher quality ingredients, customization, and a better guest experience — has captured significant market share from traditional fast food.</p>`,
    },
];

/* ─────────────────────────── BLOG LISTING PAGE ─────────────────────────── */
function BlogListingPage({ onCardClick }: { onCardClick: (post: Post) => void }) {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div>
            <PageBanner title="Blog" />

            <main className={styles.main}>
                <div className={styles.blogGrid}>
                    {posts.map((post, i) => (
                        <article
                            key={post.id}
                            className={`${styles.card} ${hoveredId === post.id ? styles.cardHovered : ''}`}
                            onClick={() => onCardClick(post)}
                            onMouseEnter={() => setHoveredId(post.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className={styles.cardImgWrap}>
                                {post.image ? (
                                    <img src={post.image} alt={post.title} className={styles.cardImage} />
                                ) : (
                                    <div className={styles.cardImgPlaceholder}>
                                        <span className={styles.cardImgText}>{post.title}</span>
                                    </div>
                                )}
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.cardDate}>{post.date}</div>
                                <h2 className={styles.cardTitle}>{post.title}</h2>
                                <button className={styles.cardLink}>
                                    Read More
                                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}

/* ─────────────────────────── ARTICLE PAGE ─────────────────────────── */
function ArticlePage({ post, onBack }: { post: Post; onBack: () => void }) {
    // Inject styles for blog images
    const enhancedBody = post.body.replace(
        /<img /g,
        '<img class="' + styles.blogImage + '" '
    );

    return (
        <div>
            <PageBanner title="Blog" />

            <main className={styles.main}>
                <div className={styles.articleLayout}>
                    {/* Main content */}
                    <div>
                        {/* Hero Image */}
                        <div className={styles.articleHero}>
                            {post.image ? (
                                <img src={post.image} alt={post.title} className={styles.heroImage} />
                            ) : (
                                <span className={styles.articleHeroText}>{post.title}</span>
                            )}
                        </div>

                        {/* Meta */}
                        <div className={styles.articleMeta}>
                            <span className={styles.metaText}>Published: {post.date}</span>
                            <span className={styles.metaSep}>|</span>
                            <span className={styles.metaText}>{post.author}</span>
                        </div>

                        {/* Title */}
                        <h1 className={styles.articleTitle}>{post.title}</h1>

                        {/* Body */}
                        <div
                            className={styles.articleBody}
                            dangerouslySetInnerHTML={{ __html: enhancedBody }}
                        />

                        {/* Back button */}
                        <button className={styles.backBtn} onClick={onBack}>
                            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path d="M19 12H5M12 5l-7 7 7 7" />
                            </svg>
                            Back to Blog
                        </button>
                    </div>

                    {/* Sidebar */}
                    <aside>
                        <div className={styles.sidebarCard}>
                            <div className={styles.sidebarTitle}>Recent Posts</div>
                            {posts.slice(0, 5).map((p, i) => (
                                <div key={p.id} className={styles.recentPost}>
                                    <div className={styles.recentThumb}>
                                        {p.image && <img src={p.image} alt={p.title} className={styles.recentThumbImage} />}
                                    </div>
                                    <div>
                                        <div className={styles.recentDate}>{p.date}</div>
                                        <div className={styles.recentTitle}>{p.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.ctaCard}>
                            <h3 className={styles.ctaH3}>Find Franchisees at Our Expos</h3>
                            <p className={styles.ctaP}>Connect with qualified candidates at the International Franchise Expo and other MFV events.</p>
                            <button className={styles.ctaBtn}>Request Exhibiting Info</button>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}

/* ─────────────────────────── ROOT PAGE ─────────────────────────── */
export default function BlogPage() {
    const [activePage, setActivePage] = useState<'listing' | 'article'>('listing');
    const [activePost, setActivePost] = useState<Post | null>(null);

    const openArticle = (post: Post) => {
        setActivePost(post);
        setActivePage('article');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goBack = () => {
        setActivePage('listing');
        setActivePost(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.pageWrapper}>
            {activePage === 'listing' && (
                <BlogListingPage onCardClick={openArticle} />
            )}

            {activePage === 'article' && activePost && (
                <ArticlePage post={activePost} onBack={goBack} />
            )}
        </div>
    );
}