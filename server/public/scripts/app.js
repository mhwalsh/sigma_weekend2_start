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
        createTracker();
        moveTracker();
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
      moveTracker();
    });

    //decrement currentIndex and re-display student
    $("#prevStudent").on('click', function() {
      console.log('test prev button');
      currentIndex--;
      if(currentIndex < 0){
        currentIndex = students.length - 1;
      }
      display();
      moveTracker();
    });

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
});
