function setCookie(key, value, date) {                                    //cookie setter

    if(!date){
        document.cookie = key + "=" + value;
      }
    document.cookie = key + "=" + value + ";expires=" + date;
  }

 // setCookie("fname", "omniah", new Date("2/1/2023"));
  // setCookie("lname", "mahmoud", new Date("2/1/2023"));
  // setCookie("location", "ismailia", new Date("2/1/2023"));              // lw shlnaha w rnait hla2eha 3adi lsa m4 expired
  // setCookie("name", "hamada");                                        //hna lw shlnaha w rnena el code tani ht5tfi ,session expired

  function getCookie(key) {                                                  //cookie getter
  
    if(!key){
          throw("you have to enter a key");
      }
    var res = "not found";
    var data = document.cookie;
    var arr = data.split("; ");
    arr.forEach(function (el) {
      var keyAndValue = el.split("=");
      if (keyAndValue[0] === key) {
        res = keyAndValue[1];
      }
    });
    return res;
  }

  function deleteCookie(key) {
      if(!key){
          throw("your have to enter a key");
      }
    var res = false;
    if(hasCookie(key)){
      var date = new Date(01/12/1234);
      setCookie(key,"aa",date);
        res = true;
    }
    return res;
    
  }

  
 function allCookieList(){
  
    var data = document.cookie;
    var arr = data.split("; ");

    return arr
  }


  function hasCookie(key){
  res=false;
  var data = document.cookie;
    var arr = data.split("; ");
    arr.forEach(function (el) {
      var keyAndValue = el.split("=");
      if (keyAndValue[0] === key) {
     
        res = true;
      }
    });
    return res;
  }

