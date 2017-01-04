$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Aleksandras.json',
    dataType: 'jsonp',
    success: function(response) {
      displayCourses(response.courses.completed);
    }
  });

  //Function to fetch json array and display course details with its help
  function displayCourses(courses) {
  	var $badges = $('#badges');
  	courses.forEach(function(course) {

  		$div = $('<div />', {
  			'class': 'course'
  		}).appendTo($badges);

  		$('<h3 />', {
  			text: course.title
  		}).appendTo($div);
  		
  		// $('<img />', {
  		// 	src: course.badge
  		// }).appendTo($div);

  		// $('<a />', {
  		// 	'class': 'btn btn-primary',
  		// 	target: '_blank',
  		// 	href: course.url,
  		// 	text: 'Go to Course'
  		// })appendTo($div);
  	});
  }
});
