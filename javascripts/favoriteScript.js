
function buildFavoriteAlbums(){
	var favoriteList=getFavoriteAlbums(taylorSwift);
	favoriteList+=getFavoriteAlbums(arianaGrande);
	favoriteList+=getFavoriteAlbums(coldPlay);
	return favoriteList;


}
function getFavoriteAlbums(artist){
	var fAlbumList="<ul>";
	for(var i=0;i<artist.albumList.length;i++){
		if(artist.albumList[i].isFavorite)
			fAlbumList+=("<li>"+artist.albumList[i].name+"</li>");
	}
	fAlbumList+="</ul>";
	return fAlbumList;


}

function buildFavoriteArtists(){
	var fArtistList = "<ul>";
	if(taylorSwift.isFavorite)
		fArtistList+=("<li>Taylor Swift</li>");
	if(arianaGrande.isFavorite)
		fArtistList+=("<li>Ariana Grande</li>");
	if(coldPlay.isFavorite)
		fArtistList+=("<li>ColdPlay</li>");
	fArtistList+="</ul>";
	return fArtistList;
}

function buildFavoriteSongs(){
	var fSongs;
	//going over taylor swift albums
	var i;
	for(i=0;i<taylorSwift.albumList.length;i++){
		if(i==0)
			fSongs=getFavoriteSongs(taylorSwift.albumList[i]);
		else
			fSongs+=getFavoriteSongs(taylorSwift.albumList[i]);

	}

	//going over Arian Grande albums
	for(i=0;i<arianaGrande.albumList.length;i++){
		if(!fSongs){
			fSongs=getFavoriteSongs(arianaGrande.albumList[i]);
		}
		else
			fSongs+=getFavoriteSongs(arianaGrande.albumList[i]);
	}

	//going over ColdPlay albums
	for(i=0;i<coldPlay.albumList.length;i++){
		if(!fSongs){
			fSongs=getFavoriteSongs(coldPlay.albumList[i]);
		}
		else
			fSongs+=getFavoriteSongs(coldPlay.albumList[i]);
	}
	return fSongs;

}


function getFavoriteSongs(album){
	//var fAlbumList="<ul>";
	var fSongeList;
	for(var i=0;i<album.songList.length;i++){
		if(album.songList[i].isFavorite){
			if(!fSongeList)
				fSongeList="<ul>";
			fSongeList+=("<li>"+album.songList[i].name+"</li>");
		}
	}
	if(fSongeList){
		fSongeList+="</ul>";
	}
	return fSongeList;


}

document.addEventListener("DOMContentLoaded",
	function(event){
		var line;
		function printFavoriteAlbums(event){
			
			line=buildFavoriteAlbums();

			document.getElementById("favorites-content").innerHTML=line;
			
		}
		function printFavoriteArtists(event){
			line=buildFavoriteArtists();

			document.getElementById("favorites-content").innerHTML=line;
		}
		function printFavoriteSongs(event){
			line=buildFavoriteSongs();

			document.getElementById("favorites-content").innerHTML=line;
		}
		if(document.querySelector("#albums")){
			document.querySelector("#albums").
			addEventListener("click", printFavoriteAlbums);

		}
		if(document.querySelector("#artists")){
			document.querySelector("#artists")
      .addEventListener("click", printFavoriteArtists);

		}
		if(document.querySelector("#songs")){
			document.querySelector("#songs")
      .addEventListener("click", printFavoriteSongs);

		}


	}
);