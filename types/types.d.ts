interface SearchedShowType {
  score: number
  show: ShowsTypes
}
interface ShowsTypes {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  ended: string
  officialSite: string
  schedule: Schedule
  rating: Rating
  weight: number
  network: Network
  webChannel?: any
  dvdCountry?: any
  externals: External
  image: Image | null
  summary: string
  updated: number
  _links: _link
}

interface Schedule {
  time: string
  days: string[]
}

interface Rating {
  average: number
}

interface Country {
  name: string
  code: string
  timezone: string
}

interface Network {
  id: number
  name: string
  country: Country
  officialSite: string
}

interface External {
  tvrage: number
  thetvdb: number
  imdb: string
}

interface Image {
  medium: string
  original: string
}

interface Self {
  href: string
}

interface Previousepisode {
  href: string
}

interface _link {
  self: Self
  previousepisode: Previousepisode
}

type Genres =
  | 'Drama'
  | 'Science-Fiction'
  | 'Thriller'
  | 'Action'
  | 'Crime'
  | 'Horror'
  | 'Romance'
  | 'Adventure'
  | 'Espionage'
  | 'Music'
  | 'Mystery'
  | 'Supernatural'
  | 'Fantasy'
  | 'Family'
  | 'Anime'
  | 'Comedy'
  | 'History'
  | 'Medical'
  | 'Legal'
  | 'Western'
  | 'War'
  | 'Sports'

export { ShowsTypes, Genres, SearchedShowType }
