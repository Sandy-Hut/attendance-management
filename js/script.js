$(document).ready(function() {
        $('<div class="info"/>').load('dashboard.html #body_content', function() {
            $(this).hide().appendTo('.col-xs-9').fadeIn(1000);

        });

    $('a.clickable_class').click(function() {

        var page_id = $(this).attr('id'),
            click_value = $(this).text();
        if ($('#bottom_notify_btn').hasClass('notify_click')) {
            $('.popover-example').fadeIn(20, function() {}).delay(4000).fadeOut();
            $('p#tooltip_text').text(click_value + " " + 'selected');
        } else {

        }

        $(".info").remove();
        $('<div class="info"/>').load(page_id + '.html #body_content', function() {
            $(this).hide().appendTo('.col-xs-9').fadeIn(1000);
            $('table.manage-table tbody tr:odd').css('background-color', '#fff');
            $('table.manage-table tbody tr:odd td').css('color', 'green');

            // form validation

            $('#btn_submit').on('click', function(e) {
                Submit_Student();
            });
            $('#emp_btn_submit').on('click', function(e) {
                Submit_Employee();
            });

            //==============================================datepicker==================================================
            $(function() {
                $("#dateField, #ToDateField").datepicker({
                    changeMonth: true,
                    changeYear: true
                });
            });

            //===========================================datepicker ends================================================
            // custom scroll

            // custom scroll ends
            //===========================================eventcalendar starts================================================
            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                defaultDate: '2015-03-30',
                editable: true,
                eventLimit: true,
            });

            // ==========================event calendar ends==================================================
            $('#btn_scheduled_alert').on('click', function() {
                scrollWin();
                $('.container_popup,.modal').slideDown(400);
                $('.event_popup,.event_modal_popup').hide();
                $('a.close').click(function() {
                    $('.container_popup,.modal').slideUp(200);
                    $('.form-sub-type, .form-mobile, .form-email').hide();

                });
            });
            $(document).on('change','#selectType', function(){
                //alert('hi');
                if($(this).val() == 2)
                {
                    $('.form-sub-type, .form-email, .form-mobile').show();
                }
                if($(this).val() == 3)
                {
                    $('.form-email').show();
                    $('.form-sub-type, .form-mobile').hide();
                }
                if($(this).val() == 0 || $(this).val() == 1 )
                {
                    $('.form-sub-type, .form-mobile, .form-email').hide();
                }
            });


            $('#calendar').on('click', '.fc-day, .fc-day-number, .fc-content-skeleton', function() {
                var event_popup_date = $(this).attr('data-date');
                //alert(event_popup_date);
                $('.event_popup,.event_modal_popup').slideDown(400, function() {
                    $('#date_on_event_popup').text(event_popup_date);
                });

                $('a.close_popup').click(function() {
                    $('.event_popup,.event_modal_popup').slideUp(200);

                });
            });


        });
    });

});

function scrollWin() {
        window.scrollTo(0, 0);
    }
    // form validation
function Submit_Student() {
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var name = document.getElementById('name_field').value,
        rfid = document.getElementById('rfid_field').value,
        contact = document.getElementById('contact_field').value,
        email = document.getElementById('email_field').value,
        icard = document.getElementById('icard_field').value,
        gr = document.getElementById('gr_field').value;

    if (name == "") {
        document.getElementById('name_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter student name";
        return false;
    }
    if (rfid == "") {
        document.getElementById('rfid_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter RFID";
        return false;
    }

    if (contact == "") {
        document.getElementById('contact_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter student contact no.";
        return false;
    } else if (isNaN(contact)) {
        document.getElementById('contact_field').focus();
        document.getElementById("errorBox").innerHTML = "Contact is not valid";
        return false;
    }
    if (email == "") {
        document.getElementById('email_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter student email address";
        return false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email_field').focus();
        document.getElementById("errorBox").innerHTML = "Email is not valid";
        return false;
    }
    if (icard == "") {
        document.getElementById('icard_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter icard no. ";
        return false;
    }
    if (gr == "") {
        document.getElementById('gr_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter GR no.";
        return false;
    }


    if (name != '' && rfid != '' && email != '' && contact != '' && icard != '' && gr != '') {
        document.getElementById("errorBox").innerHTML = "Form submitted successfully";
        return true;
    }

}

function Submit_Employee() {
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var name = document.getElementById('emp_name_field').value,
        designation = document.getElementById('designation_field').value,
        salary = document.getElementById('salary_field').value,
        rfid = document.getElementById('emp_rfid_field').value,
        emp_type = document.getElementById('emp_field').value,
        contact = document.getElementById('emp_contact_field').value;
    email = document.getElementById('emp_email_field').value,
        entry_time = document.getElementById('entry_timing_field').value,
        exit_time = document.getElementById('exit_timing_field').value,
        alert = document.getElementById('alert_field').value;

    if (name == "") {
        document.getElementById('emp_name_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter Employee name";
        return false;
    }
    if (designation == "") {
        document.getElementById('designation_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter Designation";
        return false;
    }

    if (salary == "") {
        document.getElementById('salary_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter salary";
        return false;
    }

    if (rfid == "") {
        document.getElementById('emp_rfid_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter RFID no. ";
        return false;
    }
    if (emp_type == "") {
        document.getElementById('emp_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter Employee type";
        return false;
    }
    if (contact == "") {
        document.getElementById('emp_contact_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter Employee contact no.";
        return false;
    } else if (isNaN(contact)) {
        document.getElementById('emp_contact_field').focus();
        document.getElementById("errorBox").innerHTML = "Contact is not valid";
        return false;
    }

    if (email == "") {
        document.getElementById('emp_email_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter Employee email address";
        return false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emp_email_field').focus();
        document.getElementById("errorBox").innerHTML = "Email is not valid";
        return false;
    }
    if (entry_time == "") {
        document.getElementById('entry_timing_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter entry time";
        return false;
    }
    if (exit_time == "") {
        document.getElementById('exit_timing_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter exit time";
        return false;
    }
    if (alert == "") {
        document.getElementById('alert_field').focus();
        document.getElementById("errorBox").innerHTML = "Enter alert no.";
        return false;
    }

    if (name != '' && rfid != '' && email != '' && contact != '' && designation != '' && salary != '' && emp_type != '' && entry_time != '' && exit_time != '' && alert != '') {
        document.getElementById("errorBox").innerHTML = "Form submitted successfully";
        return true;
    }

}
