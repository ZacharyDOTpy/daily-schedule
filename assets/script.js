// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// Local storage set item function
$(document).ready(function () {
  $('.saveBtn').on('click', function() {
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(description, time);
  })
  // variables to get data from local storage
  $('#hour-9 .description').val(localStorage.getItem('hour9'));
  $('#hour-10 .description').val(localStorage.getItem('hour10'));
  $('#hour-11 .description').val(localStorage.getItem('hour11'));
  $('#hour-12 .description').val(localStorage.getItem('hour12'));
  $('#hour-13 .description').val(localStorage.getItem('hour13'));
  $('#hour-14 .description').val(localStorage.getItem('hour14'));
  $('#hour-15 .description').val(localStorage.getItem('hour15'));
  $('#hour-16 .description').val(localStorage.getItem('hour16'));
  $('#hour-17 .description').val(localStorage.getItem('hour17'));
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // past|present|future class swap function
  function timeKeeper() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function() {
      var hourBlock = parseInt($(this).attr('id').split('hour')[1]);

      if (hourBlock === currentHour) {
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
      }
      else if (hourBlock < currentHour) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
      }
      else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
      }
    })
  }

  timeKeeper();

  // TODO: Add code to display the current date in the header of the page.
  // Current day variable
  $('#currentDay').text(dayjs().format('[Date: ] dddd MMM DD, YYYY [Time: ] h:mm a'));
});
