(function($){

  $(function(){



    $('.sidenav').sidenav();



  }); // end of document ready

})(jQuery); // end of jQuery name space





document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.datepicker');

    var instances = M.Datepicker.init(elems, options);

  });



  // Or with jQuery



  $(document).ready(function(){

    $('.datepicker').datepicker();

  });



  document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.parallax');

    var instances = M.Parallax.init(elems, options);

  });



  // Or with jQuery



  $(document).ready(function(){

    $('.parallax').parallax();

  });





  document.addEventListener('DOMContentLoaded', function() {

      var elems = document.querySelectorAll('.dropdown-trigger');

      var instances = M.Dropdown.init(elems, options);

    });



    // Or with jQuery



    $('.dropdown-trigger').dropdown()




















(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
function demoFromHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#customers')[0];

    // we support special element handlers. Register them with jQuery-style
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
    },

    function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        pdf.save('Test.pdf');
    }, margins);
}
