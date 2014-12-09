'use strict';
/* Add javascript code here */

/* Code wrapped in document.ready will run on dom load */
$(document).ready(function () {

/* Show the edit icon on hover using default bootstrap class hide*/
  $("#headingNameAccordion").on({
   /* On mouse enter show the element */
    mouseenter: function () {
      $('.fa-edit').removeClass('hide');
    },
    /* On mouse leave hide the element */
    mouseleave: function () {
      $('.fa-edit').addClass('hide');
    }
  });

  /* dropdown change*/
  $(".dropdown-user-assignee > .dropdown-menu > li > a").click(function () {
    /* Find the closest parent */
    var assignedto = $(this).closest(".dropdown-user-assignee");
    /* add a class so as to change the text */
    assignedto.find("#text-change").addClass("selected");
    var assigneename = $(this).text();
    $(".selected").text(assigneename);
    /* Remove the class so text change doesn't propagate up the DOM */
    assignedto.find("#text-change").removeClass("selected");
  });
  /* Show an alert and hide the row on clicking close icon */

  // $(".fa-close").click(function () {
  //   $(this).closest("tr").replaceWith('');
  // });
});

var popupShare = function () {
  this.modal('show');
};