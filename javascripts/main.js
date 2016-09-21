


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

var redAlbum = new Album("Red",["State of Grace","Red","Treacherous"],"Taylor Swift".0);
var myEverythingAlbum = new Album("My Everything",["Problem","One Last","The Weekend"],"Ariana Grande",0);
var aHeadFullOfDreamsAlbum = new Album("A head full of dreams",["A head full of dreams","Birds","Hymn for weekend"],"Coldplay",1
	);

//event handling
document.addEventListener("DOMContentLoaded",function(event){
		function printAlbumList(event){
			//create a list
			//bind it to the main content classfor display
			//the event will be load
			function printSongs(event){
				var songLine = "<h2>state of red</h2>";
				document.getElementById("album-content").innerHTML=songLine;
			}
			document.querySelector("#red").addEventListener("click",printSongs);
		}

	}
);

