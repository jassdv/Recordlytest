function printSongList(artist){
	var songList = 0;
	for(var i=0;i<artist.albumList.length;i++){
		songList+=printAlbumList(artist.albumList[i].name);

	}
	return songList;
	
}

document.addEventListener("DOMContentLoaded",
	function(event){
		var songList = printSongList(taylorSwift);
		//document.getElementById("song-content").innerHTML=songList;
		songList += printSongList(arianaGrande);
		//document.getElementById("song-content").innerHTML=songList;
		songList += printSongList(coldPlay);
		document.getElementById("song-content").innerHTML=songList;
	}
);