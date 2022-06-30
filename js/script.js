// active butt-s
$(".order-type .type").click(function (e) {
	e.preventDefault();
	if (!$(this).hasClass("active")) {
		$(".type").removeClass("active");
		$(this).addClass("active");
	}
});
$(".room-size").click(function (e) {
	e.preventDefault();
	if (!$(this).hasClass("active")) {
		$(".room-size").removeClass("active");
		$(this).addClass("active");
	}
});

// input "square"
const rangeInputs = document.querySelectorAll(".range-input");
const numberInput = document.querySelector(".square-input");

function handleInputChange(e) {
	let target = e.target;
	if (e.target.type !== "range") {
		target = document.getElementById("range");
	}
	const min = target.min;
	const max = target.max;
	const val = target.value;

	target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
	input.addEventListener("input", handleInputChange);
});

numberInput.addEventListener("input", handleInputChange);

// slider
let swiper = new Swiper(".mySwiper", {
	allowTouchMove: false,
	spaceBetween: 30,

	navigation: {
		prevEl: ".swiper-prev",
		nextEl: ".swiper-next",
	},
	pagination: {
		el: ".swiper-pagination",
	},
});

// remove touch event from slider
$(".mySwiper").bind("touchmove", false);

// change slider title
let count = 0;

$(".swiper-prev, .swiper-next").on("click", function (e) {
	$(".swiper-next, .swiper-prev").css("pointer-events", "none");
	console.log(count);
	if (e.target.classList.contains("swiper-next")) {
		if (count < $(".rhomb-green").length - 1) {
			++count;
			$(".rhomb-grey")[count].classList.add("form__element-hide");
			$(".rhomb-green")[count].classList.remove("form__element-hide");
			$(".form__title").addClass("form__element-hide");
			$(".form__title")[count].classList.remove("form__element-hide");
		}
	}

	if (e.target.classList.contains("swiper-prev")) {
		if (count !== 0) {
			$(".rhomb-grey")[count].classList.remove("form__element-hide");
			$(".rhomb-green")[count].classList.add("form__element-hide");
			$(".form__title").addClass("form__element-hide");

			count--;
			$(".form__title")[count].classList.remove("form__element-hide");
		}
	}

	setTimeout(() => {
		$(".swiper-next, .swiper-prev").css("pointer-events", "auto");
	}, 600);
});

// fixed right buttons
$(window).on("scroll", function () {
	if ($(document).scrollTop() < $(window).height()) {
		$(".fixed-butts-wrapper").hide();
	} else {
		$(".fixed-butts-wrapper").show();
	}
});

// дивись і вчись =)
$(".pop-up-back, .close-pop-up, .call-pop-up-phone").click(function (e) {
	e.preventDefault();
	$(".pop-up-phone").fadeToggle(200);
	$(".pop-up-back").fadeToggle(200);
});
