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

    //increment currentIndex and re-display
    $("#nextStudent").on('click', function functionName() {
      console.log('test next button');
      currentIndex++;
      //when we hit the end, cycle back to currentIndex = 0
      console.log('next, currentIndex = ', currentIndex);
      if(currentIndex >= students.length){
        console.log('next - cycled to zero');
        currentIndex = 0;
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
