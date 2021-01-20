let music_ar;

const doApi = async(_url) => {
  let resp = await fetch(_url);
  let data = await resp.json();
  console.log(data);
  createMusic(data.data)
}

const createMusic = (_ar) => {
  $("#id_row").empty();
  _ar.map(item => {
    createOneMusic("#id_row",item)
  })
  music_ar = _ar;
}

const  createOneMusic = (_parent,item) => {
  let newDiv = $("<div class='col-lg-4 col-sm-12'></div>");
  $(_parent).append(newDiv);
  
  $(newDiv).append(`
  <div class='music-card playing'>

  <img class='image' src='${item.artist.picture_big}' alt='photo'>


  <div class='wave'></div>
  <div class='wave'></div>
  <div class='wave'></div>

  <div class='info'>
    <h2 class='title'>${item.title}</h2>
    <div class='artist'>${item.artist.name}</div>
    <div class="sound">
      <audio controls class="btn">
        <source src="${item.preview}" type="audio/ogg">
        <source src="${item.preview}" type="audio/mpeg">
      </audio>
    </div>
  </div>
</div>
  `)
}

const sortMusicBy = (_sort) => {
  music_ar = _.sortBy(music_ar,_sort);
  music_ar.reverse()
  createMusic(music_ar)
}