
$(document).ready(function () {
    "use strict";

    /* ---------------------------------------------
     Loader Screen
    --------------------------------------------- */

    $(window).load(function () {
        $("body").css('overflow-y', 'auto');
        $('.loader0').fadeOut(1000);
    });

});
(function ($) {
    "use strict";

    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/ 
    function navbarFixed() {
        if ($('header').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll) {
                    $("header").addClass("navbar_fixed");
                } else {
                    $("header").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    $('.dropdown').hover(function () {
        $(this).find('.main-drop').stop(true, true).slideDown(500);
    }, function () {
        $(this).find('.main-drop').stop(true, true).slideUp(500);
    });
    $('.sub-dropdown').hover(function () {
        $(this).find('.sup-drop').stop(true, true).slideUp(500);
    }, function () {
        $(this).find('.sup-drop').stop(true, true).slideDown(500);
    });

! function (n, e, i, a) {
    n.navigation = function (t, s) {
        var o = {
                responsive: !0,
                mobileBreakpoint: 991,
                showDuration: 300,
                hideDuration: 300,
                showDelayDuration: 0,
                hideDelayDuration: 0,
                submenuTrigger: "click",
                effect: "fade",
                submenuIndicator: !0,
                hideSubWhenGoOut: !0,
                visibleSubmenusOnMobile: !1,
                fixed: !1,
                overlay: !0,
                overlayColor: "rgba(0, 0, 0, 0.5)",
                hidden: !1,
                offCanvasSide: "left",
                onInit: function () {},
                onShowOffCanvas: function () {},
                onHideOffCanvas: function () {}
            },
            u = this,
            r = Number.MAX_VALUE,
            d = 1,
            f = "click.nav touchstart.nav",
            l = "mouseenter.nav",
            c = "mouseleave.nav";
        u.settings = {};
        var t = (n(t), t);
        n(t).find(".nav-menus-wrapper").prepend("<span class='nav-menus-wrapper-close-button'>✕</span>  "), n(t).find(".nav-search").length > 0 && n(t).find(".nav-search").find("form").prepend("<span class='nav-search-close-button'>✕</span>"), u.init = function () {
            u.settings = n.extend({}, o, s), "right" == u.settings.offCanvasSide && n(t).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right"), u.settings.hidden && (n(t).addClass("navigation-hidden"), u.settings.mobileBreakpoint = 99999), v(), u.settings.fixed && n(t).addClass("navigation-fixed"), n(t).find(".nav-toggle").on("click touchstart", function (n) {
                n.stopPropagation(), n.preventDefault(), u.showOffcanvas(), s !== a && u.callback("onShowOffCanvas")
            }), n(t).find(".nav-menus-wrapper-close-button").on("click touchstart", function () {
                u.hideOffcanvas(), s !== a && u.callback("onHideOffCanvas")
            }), n(t).find(".nav-search-button").on("click touchstart", function (n) {
                n.stopPropagation(), n.preventDefault(), u.toggleSearch()
            }), n(t).find(".nav-search-close-button").on("click touchstart", function () {
                u.toggleSearch()
            }), n(t).find(".megamenu-tabs").length > 0 && y(), n(e).resize(function () {
                m(), C()
            }), m(), s !== a && u.callback("onInit")
        };
        var v = function () {
            n(t).find("li").each(function () {
                n(this).children(".nav-dropdown,.megamenu-panel").length > 0 && (n(this).children(".nav-dropdown,.megamenu-panel").addClass("nav-submenu"), u.settings.submenuIndicator && n(this).children("a").append("<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"))
            })
        };
        u.showSubmenu = function (e, i) {
            g() > u.settings.mobileBreakpoint && n(t).find(".nav-search").find("form").slideUp(), "fade" == i ? n(e).children(".nav-submenu").stop(!0, !0).delay(u.settings.showDelayDuration).fadeIn(u.settings.showDuration) : n(e).children(".nav-submenu").stop(!0, !0).delay(u.settings.showDelayDuration).slideDown(u.settings.showDuration), n(e).addClass("nav-submenu-open")
        }, u.hideSubmenu = function (e, i) {
            "fade" == i ? n(e).find(".nav-submenu").stop(!0, !0).delay(u.settings.hideDelayDuration).fadeOut(u.settings.hideDuration) : n(e).find(".nav-submenu").stop(!0, !0).delay(u.settings.hideDelayDuration).slideUp(u.settings.hideDuration), n(e).removeClass("nav-submenu-open").find(".nav-submenu-open").removeClass("nav-submenu-open")
        };
        var h = function () {
                n("body").addClass("no-scroll"), u.settings.overlay && (n(t).append("<div class='nav-overlay-panel'></div>"), n(t).find(".nav-overlay-panel").css("background-color", u.settings.overlayColor).fadeIn(300).on("click touchstart", function (n) {
                    u.hideOffcanvas()
                }))
            },
            p = function () {
                n("body").removeClass("no-scroll"), u.settings.overlay && n(t).find(".nav-overlay-panel").fadeOut(400, function () {
                    n(this).remove()
                })
            };
        u.showOffcanvas = function () {
            h(), "left" == u.settings.offCanvasSide ? n(t).find(".nav-menus-wrapper").css("transition-property", "right").addClass("nav-menus-wrapper-open") : n(t).find(".nav-menus-wrapper").css("transition-property", "right").addClass("nav-menus-wrapper-open")
        }, u.hideOffcanvas = function () {
            n(t).find(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open").on("webkitTransitionEnd moztransitionend transitionend oTransitionEnd", function () {
                n(t).find(".nav-menus-wrapper").css("transition-property", "none").off()
            }), p()
        }, u.toggleOffcanvas = function () {
            g() <= u.settings.mobileBreakpoint && (n(t).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open") ? (u.hideOffcanvas(), s !== a && u.callback("onHideOffCanvas")) : (u.showOffcanvas(), s !== a && u.callback("onShowOffCanvas")))
        }, u.toggleSearch = function () {
            "none" == n(t).find(".nav-search").find("form").css("display") ? (n(t).find(".nav-search").find("form").slideDown(), n(t).find(".nav-submenu").fadeOut(200)) : n(t).find(".nav-search").find("form").slideUp()
        };
        var m = function () {
                u.settings.responsive ? (g() <= u.settings.mobileBreakpoint && r > u.settings.mobileBreakpoint && (n(t).addClass("navigation-portrait").removeClass("navigation-landscape"), D()), g() > u.settings.mobileBreakpoint && d <= u.settings.mobileBreakpoint && (n(t).addClass("navigation-landscape").removeClass("navigation-portrait"), k(), p(), u.hideOffcanvas()), r = g(), d = g()) : k()
            },
            b = function () {
                n("body").on("click.body touchstart.body", function (e) {
                    0 === n(e.target).closest(".navigation").length && (n(t).find(".nav-submenu").fadeOut(), n(t).find(".nav-submenu-open").removeClass("nav-submenu-open"), n(t).find(".nav-search").find("form").slideUp())
                })
            },
            g = function () {
                return e.innerWidth || i.documentElement.clientWidth || i.body.clientWidth
            },
            w = function () {
                n(t).find(".nav-menu").find("li, a").off(f).off(l).off(c)
            },
            C = function () {
                if (g() > u.settings.mobileBreakpoint) {
                    var e = n(t).outerWidth(!0);
                    n(t).find(".nav-menu").children("li").children(".nav-submenu").each(function () {
                        n(this).parent().position().left + n(this).outerWidth() > e ? n(this).css("right", 0) : n(this).css("right", "auto")
                    })
                }
            },
            y = function () {
                function e(e) {
                    var i = n(e).children(".megamenu-tabs-nav").children("li"),
                        a = n(e).children(".megamenu-tabs-pane");
                    n(i).on("click.tabs touchstart.tabs", function (e) {
                        e.stopPropagation(), e.preventDefault(), n(i).removeClass("active"), n(this).addClass("active"), n(a).hide(0).removeClass("active"), n(a[n(this).index()]).show(0).addClass("active")
                    })
                }
                if (n(t).find(".megamenu-tabs").length > 0)
                    for (var i = n(t).find(".megamenu-tabs"), a = 0; a < i.length; a++) e(i[a])
            },
            k = function () {
                w(), n(t).find(".nav-submenu").hide(0), navigator.userAgent.match(/Mobi/i) || navigator.maxTouchPoints > 0 || "click" == u.settings.submenuTrigger ? n(t).find(".nav-menu, .nav-dropdown").children("li").children("a").on(f, function (i) {
                    if (u.hideSubmenu(n(this).parent("li").siblings("li"), u.settings.effect), n(this).closest(".nav-menu").siblings(".nav-menu").find(".nav-submenu").fadeOut(u.settings.hideDuration), n(this).siblings(".nav-submenu").length > 0) {
                        if (i.stopPropagation(), i.preventDefault(), "none" == n(this).siblings(".nav-submenu").css("display")) return u.showSubmenu(n(this).parent("li"), u.settings.effect), C(), !1;
                        if (u.hideSubmenu(n(this).parent("li"), u.settings.effect), "_blank" == n(this).attr("target") || "blank" == n(this).attr("target")) e.open(n(this).attr("href"));
                        else {
                            if ("#" == n(this).attr("href") || "" == n(this).attr("href")) return !1;
                            e.location.href = n(this).attr("href")
                        }
                    }
                }) : n(t).find(".nav-menu").find("li").on(l, function () {
                    u.showSubmenu(this, u.settings.effect), C()
                }).on(c, function () {
                    u.hideSubmenu(this, u.settings.effect)
                }), u.settings.hideSubWhenGoOut && b()
            },
            D = function () {
                w(), n(t).find(".nav-submenu").hide(0), u.settings.visibleSubmenusOnMobile ? n(t).find(".nav-submenu").show(0) : (n(t).find(".nav-submenu").hide(0), n(t).find(".submenu-indicator").removeClass("submenu-indicator-up"), u.settings.submenuIndicator ? n(t).find(".submenu-indicator").on(f, function (e) {
                    return e.stopPropagation(), e.preventDefault(), u.hideSubmenu(n(this).parent("a").parent("li").siblings("li"), "slide"), u.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide"), "none" == n(this).parent("a").siblings(".nav-submenu").css("display") ? (n(this).addClass("submenu-indicator-up"), n(this).parent("a").parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"), u.showSubmenu(n(this).parent("a").parent("li"), "slide"), !1) : (n(this).parent("a").parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), void u.hideSubmenu(n(this).parent("a").parent("li"), "slide"))
                }) : k())
            };
        u.callback = function (n) {
            s[n] !== a && s[n].call(t)
        }, u.init()
    }, n.fn.navigation = function (e) {
        return this.each(function () {
            if (a === n(this).data("navigation")) {
                var i = new n.navigation(this, e);
                n(this).data("navigation", i)
            }
        })
    }
}(jQuery, window, document), $(document).ready(function () {
    $("#navigation").navigation()
});

    /*-------------------------------------------------------------------------------
	  mCustomScrollbar js
	-------------------------------------------------------------------------------*/
    $(window).on("load", function () {
        if ($('.mega_menu_two .scroll').length) {
            $(".mega_menu_two .scroll").mCustomScrollbar({
                mouseWheelPixels: 50,
                scrollInertia: 0,
            });
        }
    });

    /*-------------------------------------------------------------------------------
	  WOW js
	-------------------------------------------------------------------------------*/
    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init();
    }
    wowAnimation();
    /*-------------------------------------------------------------------------------
	  main slider js
	-------------------------------------------------------------------------------*/
    var mydir= $("html").css("direction");
    var  rtlVal;
    if (mydir == 'rtl') {rtlVal = true;} else {rtlVal = false}
    function mainSlider() {
        var main_slider = $(".main_carousel");
        if (main_slider.length) {
            main_slider.owlCarousel({
                loop: true,
                rtl:rtlVal,
                margin: 0,
                items: 1,
                autoplay: true,
                smartSpeed: 2000,
                autoplayTimeout: 5000,
                animateOut: "fadeOut",
                // animateIn: "slideInDown",  
                responsiveClass: true,
                nav: true,
                dots: false,
                navText: ['<i class="ti-arrow-right"></i>', '<i class="ti-arrow-left"></i>'],
                
            })
        }
    }
    wowAnimation();
    mainSlider();
    function serviceSlider() {
        var service_slider = $(".services_carousel");
        if (service_slider.length) {
            service_slider.owlCarousel({
                loop: true,
                rtl:rtlVal,
                margin: 15,
                items: 3,
                autoplay: true,
                smartSpeed: 2000,
                responsiveClass: true,
                nav: true,
                dots: false,
                navText: ['<i class="fa-solid fa-chevron-right"></i>', '<i class="fa-solid fa-chevron-left"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                },
            })
        }
    }
    serviceSlider();
    
    $('.doctors_carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        rtl: rtlVal,
        dots: false,
        autoplayTimeout: 3500,
        autoplay: true,
        navText: ['<i class="fa-solid fa-chevron-right"></i>', '<i class="fa-solid fa-chevron-left"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        },
    
    });
    
   
    $('.reviews_carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        rtl: rtlVal,
        dots: true,
        autoplayTimeout: 3500,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        },
    
    });
    $('.clients_carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        rtl: rtlVal,
        dots: true,
        autoplayTimeout: 3500,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        },
    
    });
    /*-------------------------------------------------------------------------------
	  product isotope js
	-------------------------------------------------------------------------------*/
    function productMasonry(){
        var product = $("#work-product");
        if( product.length ){
            product.imagesLoaded( function() {
              // images have loaded
                // Activate isotope in container
                product.isotope({
                    isOriginLeft:false,
                    itemSelector: ".product_item",
                    layoutMode: 'masonry',
                    filter:"*",
                    animationOptions :{
                        duration:1000
                    },
                    hiddenStyle: {
                        opacity: 0,
                        transform: 'scale(.4)rotate(60deg)',
                    },
                    visibleStyle: {
                        opacity: 1,
                        transform: 'scale(1)rotate(0deg)',
                    },
                    stagger: 0,
                    transitionDuration: '0.9s',
                    masonry: {
                       
                    }
                });

                // Add isotope click function
                
                var $filtersSelect = $('#product_filter');

                // init Isotope
                var $grid = $('.product_gallery').isotope({
                itemSelector: '.product_item',
                layoutMode: 'fitRows',
                filter: $filtersSelect.val(),
                });
                // bind filter on select change
                $filtersSelect.on( 'change', function() {
                // get filter value from option value
                $grid.isotope({ filter: this.value });
                });

            })
        }
    }
    productMasonry();

    /*-------------------------------------------------------------------------------
	  hamberger menu
	-------------------------------------------------------------------------------*/
    function hamberger_menu() {
        if ($('.burger_menu').length) {
            $('.burger_menu').on('click', function () {
                $(this).toggleClass('open')
                $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
            });
            $('.close, .click-capture').on('click', function () {
                $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
            });
        }
    }
    hamberger_menu();

   // Search width increase
		$('.open_search .search_form .form-control').click(function(e) { 
			$('.open_search .search_form').removeClass('active');
			$(e.target).closest('.open_search .search_form').addClass('active');
		});
		$(document).click(function(e){ 
			if($(e.target).closest('.open_search .search_form').length==0) { 
				$('.open_search .search_form').removeClass('active');  
			}
		});
// Search width increase
$('.header_search .form-control-submit').click(function(e) { 
    $('.open_search').toggleClass('active');
});

    //Scroll to top
    $(window).on('scroll', function () {
        'use strict';
        if ($(this).scrollTop() != 0) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    $('.ps-products__gallery').lightGallery({
        selector: '.offer-img a',
        thumbnail: false,
        share: false,
        fullScreen: true,
        autoplay: false,
        autoplayControls: false,
        actualSize: false,
    });
var sync1 = $("#sync1");
var sync2 = $("#sync2");
var slidesPerPage = 4; //globaly define number of elements per page
var syncedSecondary = true;

sync1.owlCarousel({
  items : 1,
  rtl: rtlVal,
  slideSpeed : 2000,
  nav: false,
  autoplay: false,
  dots: false,
  loop: false,
  responsiveRefreshRate : 200,
  navText: [],
}).on('changed.owl.carousel', syncPosition);

sync2
  .on('initialized.owl.carousel', function () {
    sync2.find(".owl-item").eq(0).addClass("current");
  })
  .owlCarousel({
  items : slidesPerPage,
  margin:5,
  dots: false,
  rtl: rtlVal,
  nav: false,
  smartSpeed: 200,
  slideSpeed : 500,
  slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
  responsiveRefreshRate : 100
}).on('changed.owl.carousel', syncPosition2);
function syncPosition(el) {
    //if you set loop tfalselse, you have to restore this next line
    //var current = el.item.index;
  
    //if you disable loop yfalseave to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
  
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
  
    //end block
  
    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
  
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});
var $sticky_nav= $('.secondary_nav');
	$sticky_nav.find('a').on('click', function(e) {
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').animate({
			'scrollTop': $target.offset().top - 100
		}, 800, 'swing');
	});
	$sticky_nav.find('ul li a').on('click', function () {
		$sticky_nav.find('ul li a.active').removeClass('active');
		$(this).addClass('active');
	});
    
})(jQuery)

