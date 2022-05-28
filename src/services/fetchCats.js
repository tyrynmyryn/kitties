const _baseUrl = 'https://api.thecatapi.com/v1/images/search'

export const fetchCats = async (limit = 10) => {
    const response = await fetch(`${_baseUrl}?limit=${limit}`)
    return await response.json()
}