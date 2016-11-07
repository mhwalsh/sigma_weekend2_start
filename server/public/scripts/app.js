$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data.sigmanauts);
        // get something on the dom
        var students = data.sigmanauts;
        for (var i = 0; i < students.length; i++) {
          $("#outputDiv").append(students[i].name);
        }
      }
    });
});
