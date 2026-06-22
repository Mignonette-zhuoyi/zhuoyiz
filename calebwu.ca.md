# Design Map

## Spacing Scale
- `8px` — base unit (radius stepping, button gap)
- `12px` — component radius
- `16px` — primary radius (image containers), button internal gap
- `~80px` — inter-section vertical gap (visual estimate; DOM reports 0 on semantic elements)
- `128px` — pill button horizontal padding
- `9999px` — pill/full-radius (breadcrumb dot, tags)

## Font Hierarchy
| Role | Size | Weight | Line Height | Notes |
|---|---|---|---|---|
| Heading | 20.8px | 500 | 29.12px | SF Pro Display |
| Body | 17.6px | 400 | 26.4px | SF Pro Display |
| Label | 16px | 400 | 22.4px | 0.12px letter-spacing |

Single family: **SF Pro Display** throughout. No display/body split.

## Color Palette
| Role | Hex | Notes |
|---|---|---|
| Page background | `#FFFFFF` | Content column |
| Gutter background | `#F8F8F8` | ~352px flanking gutters |
| Text primary | `#171717` | All headings + body |
| Text secondary | `#808080` | Pure gray; labels ("Projects:", "Team") |
| Text tertiary | `#58534D` | Warm-tinted gray; supporting copy |
| Accent (punctuation) | `#F54900` | Breadcrumb dot only — one instance per page |

## Image Ratios
| Usage | Ratio |
|---|---|
| Full-width feature | 16:9 |
| Horizontal carousel strip | 10.3:1 |
| Split-pair landscape | ~1.64:1 |
| Split-pair square | 1:1 |

## Component Tokens
- **Border radius**: `8px` / `12px` / `16px` (image containers) / `9999px` (pill)
- **Shadows**: none
- **Grid**: 1-column, `735px` max content width, centered in 1440px with `#F8F8F8` gutters
- **Motion (layout)**: `0.7s cubic-bezier(0.62, 0.61, 0.02, 1)` — heavily decelerated
- **Motion (color/state)**: `0.3s cubic-bezier(0.4, 0, 0.2, 1)` — Tailwind default

---

# Taste DNA

### The Reader's Column
- **Trigger**: When designing case study pages for a 1440px viewport where most portfolio sites stretch content to 900–1100px
- **Decision**: Chose a **735px column** (51% of viewport) centered in `#F8F8F8` gutters over a wider content area that would fill more of the canvas
- **Reason**: Because a narrow column forces vertical reading motion — the eye moves down a page like turning pages, not left-right like scanning a spreadsheet. The gutters read as document margins, not wasted space.
- **Evidence**: `containerWidth: 736px / 734px` [system, both pages]; 17.6px body with no ch-unit max-width — the column itself controls line length; `#F8F8F8` confirmed as dominant background in DOM data

### Flat Surfaces
- **Trigger**: When creating visual separation between images, text sections, and metadata — where the standard tool is box-shadow to lift elements
- **Decision**: Chose **zero box-shadows** everywhere over card shadows, section lift, or any depth signal
- **Reason**: Because shadows imply altitude — some things float, others sit. Removing all shadow makes everything co-planar: text, images, and metadata exist on the same surface, so hierarchy comes only from whitespace and reading order, not from UI layering.
- **Evidence**: `shadows: []` confirmed [system, both pages]; screenshot confirms no perceivable depth between image containers and white background

### Authority Without Scale
- **Trigger**: When establishing hierarchy between project title, description body, and metadata labels
- **Decision**: Chose a **5px total type size range** (16px–20.8px, weights 400–500 only) over a dramatic headline scale (48px+ h1, bold weight contrasts) used by most design portfolios
- **Reason**: Because a compressed scale forces reading rather than scanning. When there is no giant headline, the images carry emotional weight — the text becomes a guide, not the spectacle.
- **Evidence**: Three sizes: 20.8px / 17.6px / 16px. Ratio 20.8÷16 = 1.3×. No weight above 500 anywhere on either page.

### The Orange Dot as Punctuation
- **Trigger**: When choosing where to deploy the one vivid color (`#F54900`) across a portfolio with interactive links and navigation
- **Decision**: Chose to restrict `#F54900` to a **single breadcrumb dot per page** over using it on hover states, links, section accents, or buttons
- **Reason**: Because a color used in twelve places becomes ambient. Used once per page, it becomes a landmark — there is exactly one orange thing, and it always means "home." The color earns its meaning through scarcity.
- **Evidence**: Screenshot confirms `#F54900` in breadcrumb dot only; `accentCandidates: ["rgb(23,23,23)"]` — orange never computed on any interactive element; confirmed [system, both pages]
