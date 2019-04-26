/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/
    
window.onload = function(){
    `use strict`;
    const csInterface = new CSInterface();
    themeManager.init();
    const extensionId = csInterface.getExtensionID(); 
    const filePath = csInterface.getSystemPath(SystemPath.EXTENSION) +`/js/`;
    const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
    const jsxName = `call.jsx`;

    const call_jsx = document.getElementById(`call_jsx`);
    const btn_test = document.getElementById(`btn_test`);
    const list = document.getElementById(`list`); 
    const direct = document.getElementById(`direct`);
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み

    call_jsx.addEventListener(`click`,()=>{
        csInterface.evalScript(`$.evalFile("${extensionRoot}${jsxName}")`,(o)=>{
            const layerData = JSON.parse(o);
            while(list.firstChild){
                list.removeChild(list.firstChild);
            }
            for(prop in layerData){
                const li = document.createElement(`li`);
                li.textContent = `Layer ${prop}:${layerData[prop]}`;
                list.appendChild(li);
            }
        });
    });

    btn_test.addEventListener(`click`,()=>{
        csInterface.evalScript(`sayHello()`);//メインjsxの関数を呼び出す
    });

    direct.addEventListener(`click`,()=>{
        csInterface.evalScript(`activeDocument.artLayers.add()`);//evalScriptから直接PSにメソッドを送る
    });



}
