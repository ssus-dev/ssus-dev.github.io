(function ($) {

	let types = ['DOMMouseScroll', 'mousewheel'];

	if ($.event.fixHooks) {
		for (let i = types.length; i;) {
			$.event.fixHooks[types[--i]] = $.event.mouseHooks;
		}
	}

	$.event.special.mousewheel = {
		setup: function () {
			if (this.addEventListener) {
				for (let i = types.length; i;) {
					this.addEventListener(types[--i], handler, false);
				}
			} else {
				this.onmousewheel = handler;
			}
		},

		teardown: function () {
			if (this.removeEventListener) {
				for (let i = types.length; i;) {
					this.removeEventListener(types[--i], handler, false);
				}
			} else {
				this.onmousewheel = null;
			}
		}
	};

	$.fn.extend({
		mousewheel: function (fn) {
			return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
		},

		unmousewheel: function (fn) {
			return this.unbind("mousewheel", fn);
		}
	});


	function handler(event) {
		let orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
		event = $.event.fix(orgEvent);
		event.type = "mousewheel";

		// Old school scrollwheel delta
		if (orgEvent.wheelDelta) { delta = orgEvent.wheelDelta / 120; }
		if (orgEvent.detail) { delta = -orgEvent.detail / 3; }

		// New school multidimensional scroll (touchpads) deltas
		deltaY = delta;

		// Gecko
		if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
			deltaY = 0;
			deltaX = -1 * delta;
		}

		// Webkit
		if (orgEvent.wheelDeltaY !== undefined) { deltaY = orgEvent.wheelDeltaY / 120; }
		if (orgEvent.wheelDeltaX !== undefined) { deltaX = -1 * orgEvent.wheelDeltaX / 120; }

		// Add event and delta to the front of the arguments
		args.unshift(event, delta, deltaX, deltaY);

		return ($.event.dispatch || $.event.handle).apply(this, args);
	}

})(jQuery);

// EXTEND jQuery
$.js = function (el) {
	return $('[data-js=' + el + ']')
};

let mainWrapper = $.js('item_list');
// let sectionWrapper = $.js('sections-wrapper');

let vW = $(window).width();

mainWrapper.mousewheel(function (event, delta) {
	this.scrollLeft -= (delta * 1000);

	event.preventDefault();
});

Draggable.create(mainWrapper, {
	type: 'scrollLeft',
	throwProps: true,
	cursor: false
});

function setWidth() {
	let section = $.js('item');
	let totalWidth = 0;

	section.each(function () {
		totalWidth += parseInt($(this).width(), 10);
	});

	// sectionWrapper.css('width', '' + (totalWidth + 1) + 'px');
}

setWidth();

$(window).on('resize', function () {
	setWidth();

});