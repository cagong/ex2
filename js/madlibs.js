window.onload = function() {
  console.log("reading js");
    
  document.f.onsubmit = processForm;
    
  document.f.onreset = resetPage;

  function processForm() {

    var adj1 = document.f.adj1.value;
    var name1 = document.f.name1.value;
    var adj2 = document.f.adj2.value;
    var feeling = document.f.feeling.value;
    var place = document.f.place.value;
    var verb1 = document.f.verb1.value;
    var noun = document.f.noun.value;
    var number = document.f.number.value;
    var verb2 = document.f.verb2.value;
    var adj3 = document.f.adj3.value;
    var adj4 = document.f.adj4.value;
    var adj5 = document.f.adj5.value;
    var userName = document.f.userName.value;
    var adj6 = document.f.adj6.value;
    var job = document.f.job.value;

    //error detection
    if (adj1 == "" || adj2 == "" || adj3 == "" || adj4 =="" || adj5 == "" || adj6 == "") {
      alert("Missing Adjective!");
    } else if ( name1 == "" || userName == "") {
        alert("Missing Name!");
    } else if ( feeling == "") {
        alert("Missing a Feeling!");
    } else if ( place == "" ) {
        alert("Missing a Place");
    } else if ( verb1 == "" || verb2 == "") {
        alert("Missing Verb!");
    } else if ( noun == "" ) {
        alert("Missing Noun!");
    } else if ( number == "") {
        alert("Missing Place Number!");
    } else if ( job == "") {
        alert("Missing a Job!");
    } else {

      //capture the msg element to change it's text and html
      var letter = document.getElementById("letter");

      letter.innerHTML = "<h1 class=dear>Dear " + adj1 + " " + name1 + ",</h1>" + "<p>You are so " + adj2 + ". Whenever I see you, I feel " + feeling + ". I wish I could give you " + place + " to show you how much I " + verb1 + " for you. You mean " + noun + " to me. </p>" + "<p> I still remember the " + number + " time I " + verb2 + " for you. It was so " + adj3 + " and " + adj4 + "." + "<h2> Hope you have a " + adj5 + " Valentine's Day!</h2>" + "<h1 class=love> Love, </h1><h1 class=userName> "+ userName + ",</h1> <h1 class=job>your " + adj6 + " " + job + "</h1>";
        
      letter.className = "show";
    }

    //prevent page from reloading
    return false;
  }

  //if user chooses "reset"
  function resetPage() {
    //remove any text from myMsg
    letter.innerHTML = "";
    //change the class name
    letter.className = "hide";
    //reset the field
    adj1.value = "";
    name1.value = "";
    adj2.value = "";
    feeling.value = "";
    place.value = "";
    verb1.value = "";
    noun.value = "";
    number.value = "";
    verb2.value = "";
    adj3.value = "";
    adj4.value = "";
    adj5.value = "";
    userName.value = "";
    adj6.value = "";
    job.value = "";
    
    return false;
  }
}