;(function () {
  'use strict'

  let carousels = function () {
    jQuery('.owl-carousel1').owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: true,
          loop: false
        }
      }
    })

    jQuery('.owl-carousel2').owlCarousel({
      loop: true,
      center: true,
      margin: 30,
      responsiveClass: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: true,
          margin: 10,
          center: false
        },
        1000: {
          items: 3,
          nav: true,
          loop: true
        }
      }
    })
  }

  let isotope = function () {
    let $container = $('.portfolioContainer')
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    })

    $('.portfolioFilter a').click(function () {
      $('.portfolioFilter .active').removeClass('active')
      $(this).addClass('active')

      let selector = $(this).attr('data-filter')
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      })
      return false
    })
  }

  let navbar = function () {
    $(window).scroll(function () {
      $('nav.navbar').offset().top > -70
        ? $('.navbar-fixed-top').addClass('top-nav-collapse')
        : $('.navbar-fixed-top').removeClass('top-nav-collapse')
    }),
      $(function () {
        $('a.page-scroll').bind('click', function (a) {
          let o = $(this)
          $('html, body')
            .stop()
            .animate({ scrollTop: $(o.attr('href')).offset().top - 58 }, 1e3),
            a.preventDefault()
        })
      })
  }

  ;(function ($) {
    carousels()
    isotope()
    navbar()
  })(jQuery)
})()

// experiencia

const btn = document.getElementById('toggleExperienceBtn')
const section = document.getElementById('experienceSection')

btn.addEventListener('click', () => {
  if (section.style.display === 'none') {
    section.style.display = 'block'
    btn.textContent = 'Ocultar experiencia'
  } else {
    section.style.display = 'none'
    btn.textContent = 'Mostrar experiencia'
  }
})

// envio de email
;(function () {
  emailjs.init('1kan6LiMjGFsjywo3') // tu publicKey
})()

document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault()

    emailjs.sendForm('service_ev8eo2k', 'template_4fe1wps', this).then(
      function () {
        Swal.fire({
          title: 'Tu mensaje ha sido enviado con éxito',
          icon: 'success',
          draggable: true
        })
      },
      function (error) {
        Swal.fire({
          title: 'TError al enviar: ' + JSON.stringify(error),
          icon: 'error',
          draggable: true
        })
      }
    )
  })
