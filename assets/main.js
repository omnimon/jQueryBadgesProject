$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Aleksandras.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
    }
  });

  //Function to fetch json array and display course details with its help
  function displayCourses(courses) {
  	var badges = $('#badges');
  	courses.forEach(function(course) {

  		var div = $('<div />', {
  			'class': 'course'
  		}).appendTo($badges);

  		$('<h3 />', {
  			src: course.title
  		}).appendTo($div);
  		
  		$('<img />', {
  			src: course.badge
  		}).appendTo($div);

  		$('<a />', {
  			'class': 'btn btn-primary',
  			target: '_blank',
  			href: course.url,
  			text: 'Go to Course'
  		})appendTo($div);
  	});
  }
});
