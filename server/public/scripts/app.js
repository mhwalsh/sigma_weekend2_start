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
        console.log('student.length', students.length);
        display();
      }
    });

    //increment currentIndex and re-display student
    $("#nextStudent").on('click', function functionName() {
      console.log('test next button');
      currentIndex++;
      //when we hit the end, cycle back to currentIndex = 0
      if(currentIndex >= students.length){
        currentIndex = 0;
      }
      display();
    });

    //decrement currentIndex and re-display student
    $("#prevStudent").on('click', function() {
      console.log('test prev button');
      currentIndex--;
      if(currentIndex < 0){
        currentIndex = students.length - 1;
      }
      display();
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
