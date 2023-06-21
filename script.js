function convertFunction()
{
   var strtext = document.getElementById("inputstring").value;

   if(strtext.length<=3)
   {
      var outtext = strtext.toUpperCase();
      document.getElementById("outputarea").innerHTML =  outtext;
   }
   else
   {
      var a = strtext.substring(0,3).toLowerCase();
      var b = strtext.substring(3)
      var c = a + b
      document.getElementById("outputarea").innerHTML =  c;
   }

}