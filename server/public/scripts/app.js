// global var of students arr
var students;
var currentIndex = 0;

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data.sigmanauts);
        // get something on the dom
        students = data.sigmanauts;
        display();
      }
    });

    // a function that will display one student
    var display = function() {
      var currStudent = students[currentIndex];
      $("#studentName").text(currStudent.name);
      $("#shoutout").text(currStudent.shoutout);

      var githubUrl = "https://github.com/" + currStudent.git_username;
      $("#github").attr("href", githubUrl);
    };
});
