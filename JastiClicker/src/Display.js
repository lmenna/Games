
Display = function (displayData){
    //jastis
    console.log("displayData:", displayData);
    if (jastiData.jastiData <= jastiCost){
        document.getElementById("Jasti").disabled = true;
    }
    else{
        document.getElementById("Jasti").disabled = false;
    }
}
