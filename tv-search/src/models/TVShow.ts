type TVShow = {
  id: number
  name: string
  type: string
  language: string
  genres: string[]
  isRunning: boolean
  premieredDate?: Date
  imageUrl?: string
  channel: string
}

export const getTvShow = (objJson: any): TVShow => {
  const {
    id,
    name,
    type,
    language,
    genres,
    status,
    premiered,
    network,
    webChannel,
    image,
  } = objJson

  let year = 0
  let month = 0
  let day = 0

  if (premiered) {
    const slicedData = premiered.split('-')
    year = parseInt(slicedData[0])
    month = parseInt(slicedData[1]) - 1
    day = parseInt(slicedData[2])
  }

  const tvShow: TVShow = {
    id,
    name,
    type,
    language,
    genres,
    isRunning: status == 'Running' ? true : false,
    channel: network ? network.name : webChannel.name,
  }

  if (premiered) {
    tvShow.premieredDate = new Date(year, month, day)
  }

  if (image) {
    tvShow.imageUrl = image.medium
  }

  return tvShow
}

export default TVShow
