const apiBaseUrl = 'https://api.tvmaze.com'

const fetchShows = async <T>(
  url: string,
  params: Record<string, string | number | undefined> = {}
) => {
  const data = (await $fetch(url, {
    baseURL: `${apiBaseUrl}`,
    params,
  })) as T
  return { data }
}

const fetchSearchedShows = async <T>(
  url: string,
  params: Record<string, string | number | undefined> = {}
) => {
  const data = (await $fetch(url, {
    baseURL: `${apiBaseUrl}`,
    params,
  })) as T
  return { data }
}

export { fetchShows, fetchSearchedShows }
