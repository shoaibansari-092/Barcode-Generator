JsBarcode("#barcode","Hello!",{
    background:"#161748",
    lineColor:"#ffffff"
});
function generate(){
    let val = document.querySelector("Input").value
    if (val==""){
        val = "Hello!"
    }
    JsBarcode("#barcode", val,{
        background: "#161748",
        lineColor: "#ffffff"
    });
}