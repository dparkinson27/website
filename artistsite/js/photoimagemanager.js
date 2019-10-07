/* 
 * See drawingimagemanager for documentation
 */
function artPiece (source, width, height, desc) {
    var figure = document.createElement("div");
    var image = document.createElement("img");
    image.src = source;
    image.width = width;
    image.height = height;
    image.alt = desc;
    image.className = "Imagelist";
    var caption = document.createElement("div");
    caption.textContent = desc;
    caption.className = "label";
    figure.appendChild(image);
    figure.appendChild(caption);
    this.showImage = function(id) {
        var add = document.getElementById(id);
        add.appendChild(figure); 
    };
}

var db = new XMLHttpRequest();
db.onload = function() {
    if(db.status === 200) {
        pieces = JSON.parse(db.responseText);
        
        for(var i = 0; i < pieces.artPiece.length; i++){
            var tba = new artPiece(pieces.artPiece[i].source, pieces.artPiece[i].width, pieces.artPiece[i].height, pieces.artPiece[i].description);
            tba.showImage("photorow");
        }
        
    }
};
db.open('GET', "photo.json", true);
db.send(null);

