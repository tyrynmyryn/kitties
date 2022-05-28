export const removeLikedCat = (id) => {
    let likedData = JSON.parse(window.localStorage.getItem('liked'))
    likedData = likedData.filter(item => item.id !== id)
    window.localStorage.setItem('liked', JSON.stringify(likedData))
}

export const addLikedCat = (cat) => {
    const likedData = JSON.parse(window.localStorage.getItem('liked'))
    likedData.push(cat)
    window.localStorage.setItem('liked', JSON.stringify(likedData))
}