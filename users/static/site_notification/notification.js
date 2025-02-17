let get_notification = "";
let seen_notification = "";


function build_table() {
	const id = "#notification-table";

	$.get(get_notification, {}, function(data, status) {
		
		$(id).empty();

		let length = data.length;
		if (length === 0) {
			length = "";

			line =  "<div class='list-item noti'>";
			line += "<div class='text fl'> There are no new notifications </div>";
			line += "</div>";
			$(id).append(line);
		}

		$("#notification-badge").text(length);  // change the icon to the amount of notification

		data.forEach((element, index) => {
			let line =  "<div class='list-item noti' id=row" + String(element.id) + ">";
				line += "<div class='image fl'><i class='fa fa-user' aria-hidden='true' style='color: #0575E6;'></i></div>";
				line += "<div class='text fl'>" + element.message + "</div>";
				line += "				<div class='cls' onclick=remove_from_list('" + String(element.id) + "')><i class='fa fa-times-circle' style='color: red;'></i></div>";
				line += "		</div>";

			$(id).append(line);
		});
	})
}

function open_notification_bar() {
	if (!$("#dropdown").hasClass('dd')) {
		$("#dropdown").removeClass('dropdown-transition').addClass('dd')
        $("#dropdown").find('.list-item').addClass('background-white')
	}
	else {
		$('.notification-dropdown').removeClass('dd').addClass('dropdown-transition');
	}
}

function remove_from_list(id) {
	let notification_counter = $("#notification-badge").text() - 1;

	if (notification_counter === 0) {
		notification_counter = "";
	}

	$("#notification-badge").text(notification_counter);  // remove a notification counter
	$("#row" + id).remove();

	$.get(seen_notification.slice(0, -1) + id, {});       // send a seen notification to django
}
