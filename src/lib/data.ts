// ── Types ──────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug:     string
  emoji:    string
  tag:      string
  date:     string
  title:    string
  excerpt:  string
  readTime: string
  content?: string
}

export interface NavLink {
  label: string
  href:  string
}

// ── Data ───────────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: 'Home',       href: '#home'       },
  { label: 'About Book', href: '#about-book'  },
  { label: 'Author',     href: '#author'      },
  { label: 'Blog',       href: '#blog'        },
  { label: 'Newsletter', href: '#newsletter'  },
  { label: 'Contact',    href: '#contact'     },
]

export const blogPosts: BlogPost[] = [
  {
    slug:     'why-do-clouds-form',
    emoji:    '🌧️',
    tag:      'Earth & Nature',
    date:     'March 12, 2025',
    title:    'Why Do Clouds Form? A Dreamy Explanation for Kids',
    excerpt:  'Have you ever looked up and wondered if Earth chose those clouds just for you? Let\'s explore the magic behind cloud formation in the most whimsical way possible...',
    readTime: '4 min read',
  },
  {
    slug:     'moon-earths-best-friend',
    emoji:    '🌕',
    tag:      'Bedtime Stories',
    date:     'February 28, 2025',
    title:    'The Moon as Earth\'s Best Friend — A Story of Tides & Dreams',
    excerpt:  'Every night, Earth and the Moon share a secret dance. The tides rise and fall, stars shimmer, and somewhere in between, magic happens. Here\'s the story...',
    readTime: '5 min read',
  },
  {
    slug:     'teach-kids-empathy-earth',
    emoji:    '🌱',
    tag:      'Eco Parenting',
    date:     'February 14, 2025',
    title:    '5 Ways to Teach Kids Empathy for the Earth',
    excerpt:  'Building an emotional connection with nature starts early. These five simple, playful ideas will help your child feel like a true friend of our dreaming planet...',
    readTime: '3 min read',
  },
]
