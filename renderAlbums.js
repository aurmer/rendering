function renderSong(song) {
  return `<div class="song">
      <img src="play-button.svg">
      <span class="song-title">${song.title}</span>
      <span class="song-length">${song.length}</span>
    </div>
  `
}

function renderAlbum(album) {
  var songsHTML = album.songs.map(renderSong).join('')

  return `<div class="album">
      <img src="${album.albumCover}">
      <h2 class="album">${album.title}</h2>
      <div class="songs">
        ${songsHTML}
      </div>
    </div>
  `
}

function renderArtist(artist) {
  var albumsHTML = artist.albums.map(renderAlbum).join('')

  return `<div class="artist">
    <h1>${artist.artist}</h1>
    ${albumsHTML}
    </div>
  `
}

function renderArtists(artists) {

  var finalHTML = artists.map(renderArtist).join('')

  return `
    <div class="mt-5">
      ${finalHTML}
    </div>
  `
}

function albums() {
    var content = document.getElementById('content');

    var artistsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderArtists(artistsAbstraction);

}
