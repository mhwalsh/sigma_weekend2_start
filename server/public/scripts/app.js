// global var of students arr
var students;
var currentIndex = 0;
var timerId;

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
        createTracker();
        moveTracker();
        startTimer();
      }
    });

    //increment currentIndex and re-display student
    var nextStudent = function() {
      console.log('test next button');
      currentIndex++;
      //when we hit the end, cycle back to currentIndex = 0
      if(currentIndex >= students.length){
        currentIndex = 0;
      }
      display();
      moveTracker();
      resetTimer();
    };

    //decrement currentIndex and re-display student
    var prevStudent = function() {
      console.log('test prev button');
      currentIndex--;
      if(currentIndex < 0){
        currentIndex = students.length - 1;
      }
      display();
      moveTracker();
      resetTimer();
    };

    // button event listenrs
    $("#nextStudent").on('click', nextStudent);
    $("#prevStudent").on('click', prevStudent);

    // a function that will creat li elements for each student
    var createTracker = function() {
      // javascript loop alternative
      students.forEach(function(student, i) {
        $("#tracker").append("<li></li>");
        $("li").last().data("index", i); // rewrite this?
      });
    };

    // a function iterates through li element and check if currentIndex
    var moveTracker = function() {
      // jquery specific each
      $("#tracker").children().each(function(i, item) {
        // console.log('item = ', item );
        //$(item) or $(this)
        if($(this).data("index") == currentIndex){
          //set css class
          $(this).addClass("currentIndex");
        }else{
          // remove css class
          $(this).removeClass("currentIndex");
        }
      });
    };

    // a function that will display one student
    var display = function() {
      var currStudent = students[currentIndex];
      $("#studentName").text(currStudent.name);
      $("#shoutout").text(currStudent.shoutout);

      var githubUrl = "https://github.com/" + currStudent.git_username;
      $("#github").attr("href", githubUrl);
    };

    var startTimer = function() {
      timerId = setInterval(nextStudent, 5000);
    };

    var resetTimer = function() {
      clearInterval(timerId);
      startTimer();
    };
});
