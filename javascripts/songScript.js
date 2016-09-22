function printSongList(artist){
	var songList;
	for(var i=0;i<artist.albumList.length;i++){
		if(i==0)
			songList=printAlbumList(artist.albumList[i].name);
		else
			songList+=printAlbumList(artist.albumList[i].name);

	}
	return songList;
	
}

document.addEventListener("DOMContentLoaded",
	function(event){
		var songList = printSongList(taylorSwift);
		songList += printSongList(arianaGrande);
		songList += printSongList(coldPlay);
		document.getElementById("song-content").innerHTML=songList;
		
	}
);