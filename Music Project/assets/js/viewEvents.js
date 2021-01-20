const viewEventInit = () => {
    $("#search_btn").on("click",() => {
      let searchQ = $("#id_input").val();
      let myUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q="+searchQ;
      doApi(myUrl)
    })
  
    $("#select_sort").on("change", () => {
      sortMusicBy($("#select_sort").val());  
    })
  }