function Song(name,isFavorite){
	this.name=name;
	this.isFavorite=isFavorite;

}

Song.prototype.setFavorite=function(isFavorite){
	this.isFavorite=isFavorite;
}

function Album(name,songList,artist,isFavorite){
	this.name=name;
	this.artist=artist;
	this.isFavorite=isFavorite;
	this.songList=new Array();
	for(var i=0;i<songList.length;i++){
		this.songList[i]=songList[i];
	}
}
Album.prototype.setFavorite=function(isFavorite){
	this.isFavorite=isFavorite;
}

Album.prototype.getName=function(){
	return this.name;
}
Album.prototype.getArtist=function(){
	return this.artist;
}

Album.prototype.getSongList=function(){
	return this.songList;
}
var redAlbumSongList = new Array();
redAlbumSongList[0] = new Song("State of Grace",false);
redAlbumSongList[1] = new Song("Red",false);
redAlbumSongList[2] = new Song("Treacherous",true);

var myEverythingAlbumSongList = new Array();
myEverythingAlbumSongList[0] = new Song("Problem",true);
myEverythingAlbumSongList[1] = new Song("One Last",false);
myEverythingAlbumSongList[2] = new Song("The Weekend",true);


var aHeadFullOfDreamsAlbumSongList = new Array();
aHeadFullOfDreamsAlbumSongList[0] = new Song("A head full of dreams",false);
aHeadFullOfDreamsAlbumSongList[1] = new Song("Birds",true);
aHeadFullOfDreamsAlbumSongList[2] = new Song("Hymn for weekend",false);


var redAlbum = new Album("Red",
	redAlbumSongList,
	"Taylor Swift",false);
var myEverythingAlbum = new Album("My Everything",
	myEverythingAlbumSongList,"Ariana Grande",false);
var aHeadFullOfDreamsAlbum = new Album("A head full of dreams",
	aHeadFullOfDreamsAlbumSongList,"Coldplay",true);

function printAlbumList(albumName){
	var songs="<ul>";
	if(albumName=="Red"){
		for(var i=0;i<redAlbum.songList.length;i++){
				songs+=("<li>"+redAlbum.songList[i].name+"</li>");
			}
	}
	else if(albumName=="My Everything"){
		for(var i=0;i<myEverythingAlbum.songList.length;i++){
				songs+=("<li>"+myEverythingAlbum.songList[i].name+"</li>");
			}

	}
	else if(albumName=="A head full of dreams"){
		for(var i=0;i<aHeadFullOfDreamsAlbum.songList.length;i++){
				songs+=("<li>"+aHeadFullOfDreamsAlbum.songList[i].name+"</li>");
			}

	}
	else
		songs="no such album";
	songs+="</ul>";
	return songs;
}
//event handling
document.addEventListener("DOMContentLoaded",
	function(event){
		var songLine;
		function printAlbumListRed(event){
			
			songLine=printAlbumList("Red");

			document.getElementById("album-content").innerHTML=songLine;
			
		}
		function printAlbumListMyEverything(event){
			songLine=printAlbumList("My Everything");

			document.getElementById("album-content").innerHTML=songLine;
		}
		function printAlbumListAheadFullOfDreams(event){
			songLine=printAlbumList("A head full of dreams");

			document.getElementById("album-content").innerHTML=songLine;
		}
		if(document.querySelector("#red")){
			document.querySelector("#red").
			addEventListener("click", printAlbumListRed);

		}
		if(document.querySelector("#myEverything")){
			document.querySelector("#myEverything")
      .addEventListener("click", printAlbumListMyEverything);

		}
		if(document.querySelector("#aHeadFullOfDreams")){
			document.querySelector("#aHeadFullOfDreams")
      .addEventListener("click", printAlbumListAheadFullOfDreams);

		}


	}
);

