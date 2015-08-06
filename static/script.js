(function($) {


    // jquery -> DOM Manipulation + Event handling
    function onFormSubmit(event) {
        // get all field values
        var data = $(event.target).serializeArray();


        // transform field values array to student object
        var student = {};
        for (var i = 0; i < data.length; i++) {
            var key = data[i].name;
            var value = data[i].value;
            student[key] = value
        }

        //create new li node
        var list_element = $('<li id = "item"' + ' class="' + student.first_name + student.last_name + '" >');
       
        // set li content
        list_element.html(student.first_name + ' ' + student.last_name + ' - ' + student.age + '<button>Edit</button>    <button onclick = \"myDelete()\">Delete</button>');

        if($('ul.student-list li').hasClass(student.first_name + student.last_name)){
            alert("Existing");
        }
        else {
        // append to DOM
        $('.student-list').prepend(list_element);
        $('.clear').val('');
        }
        return false;
    }
    $('.create-form').submit(onFormSubmit)
    


})(jQuery)
function myDelete(){

        confirm("Are you sure you want to delete account?"); 
        $('ul').on('click', 'li', function() 
        {
            $(this).remove();
            return false;
        });   
}