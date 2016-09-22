function Artist(name,albumList,isFavorite){
	this.name=name;
	this.isFavorite=isFavorite;
	this.albumList = new Array();
	for(var i=0;i<albumList.length;i++){
		this.albumList[i]=albumList[i];

	}

}

var taylorSwiftAlbumList = new Array();
taylorSwiftAlbumList[0]=redAlbum;
var arianaGrandeAlbumList = new Array();
arianaGrandeAlbumList[0] = myEverythingAlbum;
var coldPlayAlbumList = new Array();
coldPlayAlbumList[0] = aHeadFullOfDreamsAlbum;

var taylorSwift = new Artist("Tayolr Swift",taylorSwiftAlbumList,false);
var arianaGrande = new Artist("Ariana Grande",arianaGrandeAlbumList,false);
var coldPlay = new Artist("ColdPlay",coldPlayAlbumList,true);

function printAlbums(artistName){
	var albums="<ul>";
	if(artistName=="Tayolr Swift"){
		for(var i=0;i<taylorSwift.albumList.length;i++){
				albums+=("<li>"+taylorSwift.albumList[i].name+"</li>");
			}
	}
	else if(artistName=="Ariana Grande"){
		for(var i=0;i<arianaGrande.albumList.length;i++){
				albums+=("<li>"+arianaGrande.albumList[i].name+"</li>");
			}

	}
	else if(artistName=="ColdPlay"){
		for(var i=0;i<coldPlay.albumList.length;i++){
				albums+=("<li>"+coldPlay.albumList[i].name+"</li>");
			}

	}
	else
		albums="no such album";
	albums+="</ul>";
	return albums;
}

document.addEventListener("DOMContentLoaded",
	function(event){
		var albumLine;
		function printAlbumListTaylor(event){
			
			albumLine=printAlbums("Tayolr Swift");

			document.getElementById("artist-content").innerHTML=albumLine;
			
		}
		function printAlbumListAriana(event){
			albumLine=printAlbums("Ariana Grande");

			document.getElementById("artist-content").innerHTML=albumLine;
		}
		function printAlbumListColdPlay(event){
			albumLine=printAlbums("ColdPlay");

			document.getElementById("artist-content").innerHTML=albumLine;
		}
		if(document.querySelector("#taylor-swift")){
			document.querySelector("#taylor-swift").
			addEventListener("click", printAlbumListTaylor);

		}
		if(document.querySelector("#ariana-grande")){
			document.querySelector("#ariana-grande")
      .addEventListener("click", printAlbumListAriana);

		}
		if(document.querySelector("#coldplay")){
			document.querySelector("#coldplay")
      .addEventListener("click", printAlbumListColdPlay);

		}


	}
);


