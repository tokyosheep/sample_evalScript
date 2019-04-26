(function(){
    
    var Layer = function(){
        this.name = activeDocument.activeLayer.name;//レイヤーの名前取得
        this.opacity = activeDocument.activeLayer.opacity;//レイヤー透明度取得
    } 
    var layer = new Layer();
    return JSON.stringify(layer);
})();