 $('#homes tbody').on('click', 'tr', function () {
        alert('You are about to delete this row.');
        $(this).fadeOut(50, function() {
            $(this).remove();



