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


// conditioners vs recuperators
$(".conditioner").click(function (e) {
	e.preventDefault();
	$(".air-conditioners").css("display", "block");
	$(".recuperators").css("display", "none");
});
$(".recuperator").click(function (e) {
	e.preventDefault();
	$(".recuperators").css("display", "block");
	$(".air-conditioners").css("display", "none");
});


// conditioners square
$(".to-21-c").click(function (e) {
	e.preventDefault();
	$(".cond21").css("display", "flex");
	$(".cond25, .cond35").css("display", "none");
});
$(".to-25-c").click(function (e) {
	e.preventDefault();
	$(".cond25").css("display", "flex");
	$(".cond21, .cond35").css("display", "none");
});
$(".to-35-c").click(function (e) {
	e.preventDefault();
	$(".cond35").css("display", "flex");
	$(".cond21, .cond25").css("display", "none");
});

// conditioners square
$(".to-21-r").click(function (e) {
	e.preventDefault();
	$(".rec21").css("display", "flex");
	$(".rec25, .rec35").css("display", "none");
});
$(".to-25-r").click(function (e) {
	e.preventDefault();
	$(".rec25").css("display", "flex");
	$(".rec21, .rec35").css("display", "none");
});
$(".to-35-r").click(function (e) {
	e.preventDefault();
	$(".rec35").css("display", "flex");
	$(".rec21, .rec25").css("display", "none");
});