function strReplace()
{
    var str1 = document.getElementById("aera1").value;
    var str2 = document.getElementById("aera2").value;
    // Je remplace les espaces par des virgules
        str1 = str1.replace(/ /g, ",");

    // Je vais modifier la valeur de area1
    str1 = str1.replace(/_/g, " ");
   


   
    document.getElementById("aera2").innerHTML = str1;
}