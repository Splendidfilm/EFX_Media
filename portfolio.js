document.addEventListener('DOMContentLoaded', () => {
  const hamMenu = document.querySelector('.hamburger-menu');
  const offScreenMenu = document.querySelector('.off-screenmenu');
  const spans = hamMenu.querySelectorAll('span');
  const alerts = document.querySelectorAll('.alert');
  const inactives = document.querySelectorAll('.inactive')
  const offlinks =document.querySelectorAll('.offlink')
  
  hamMenu.addEventListener('click', () => {
    spans.forEach(span => span.classList.toggle('active'));
    offScreenMenu.classList.toggle('active');
    offlinks.forEach(offlink => offlink.classList.add('show'))


})
  inactives.forEach(inactive => {
    inactive.addEventListener('click', () => {
      alerts.forEach(alert => alert.classList.add('click'))
      setTimeout(() => {
        alerts.forEach(alert => alert.classList.remove('click'))
      },4500)
    })
  })
  
});


function createTypewriterEffect(containerId, texts, typingSpeed = 80, delayBetweenTexts = 2000) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Element with ID '${containerId}' not found.`);
    return;
  }


  let textIndex = 0;

  function typeText(text, callback) {
    let charIndex = 0;
    container.innerHTML = "";

    function typeChar() {
      if (charIndex < text.length) {
        container.innerHTML += text[charIndex];
        charIndex++;
        setTimeout(typeChar, typingSpeed);
      } else if (callback) {
        setTimeout(callback, delayBetweenTexts);
      }
    }
    typeChar();
  }

  function showNextText() {
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    const currentText = texts[textIndex];
    container.classList.add("fade-out");

    setTimeout(() => {
      container.classList.remove("fade-out");
      typeText(currentText, showNextText);

      textIndex++;
    }, 1000);
  }

  showNextText();
}

createTypewriterEffect("typewriter-container", [
  "Welcome to  EFX Media!",
  "Let's bring your imagination to life. Reach out to us now!",
  // "Stay connected! Follow us on social media for updates and inspiration.",
  "Have a project in mind? We’d love to hear from you!"
  
]);
// createTypewriterEffect("another-container", [
//   "Ready to elevate your brand? Contact us today!",
// "Let's bring your imagination to life. Reach out to us now!",
// "Stay connected! Follow us on social media for updates and inspiration.",
// "Have a project in mind? We’d love to hear from you!"
// ]);
// createTypewriterEffect("EFX",[
//   "EFX!",
//   "Let's help grow your business.",
//   "Just a call or DM away!"
// ]);
createTypewriterEffect("WhyChooseEFX",[
  "Design beyond limits. Creativity without boundaries.",
"Every pixel counts. Every idea matters.",
"Turning ideas into visual masterpieces, one design at a time.",
"Great designs tell great stories. Let’s craft yours!"
]);


// document.addEventListener('DOMContentLoaded', function () {
//   const offlinks = document.querySelectorAll('.offlinks')

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry)=>{
//         if (entry.intersectionRatio >= 0.5) {
//           entry.target.classList.add('show')
//         } else {
//           entry.target.classList.remove('show')
//         }
//       })
//     },
//     {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.5
//     }
//   )
//   offlinks.forEach((element) => observer.observe(element))
// })



document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('#animationElement')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry)=>{
        if (entry.intersectionRatio >= 0.5) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
  )
  elements.forEach((element) => observer.observe(element))
})

document.addEventListener('DOMContentLoaded', function (){
  const heads = document.querySelectorAll('.head')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 1) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    },
    {
      root:null,
      rootMargin:'0px',
      threshold: 1
    }
  )
  heads.forEach((head) => observer.observe(head)) 
})

document.addEventListener('DOMContentLoaded', function (){
  const AboutEFX = document.querySelectorAll('.AboutEFX ')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.1) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    },
    {
      root:null,
      rootMargin:'0px',
      threshold: 0.1
    }
  )
  AboutEFX.forEach((About) => observer.observe(About)) 
})

document.addEventListener('DOMContentLoaded', function () {
  const Testimonials = document.querySelectorAll('.testimony')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 1) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    },{
      root:null,
      rootMargin:'0px',
      threshold: 1
    }
  )
  Testimonials.forEach((testimony) => observer.observe(testimony))
})

document.addEventListener('DOMContentLoaded', function(){
const images =document.querySelectorAll('.image')

  const observer = new IntersectionObserver((entries) =>{
      entries.forEach(entry =>{
              if (entry.intersectionRatio >= 0.5) {
              entry.target.classList.add('show')
          } else {
              entry.target.classList.remove('show')
          }
      })
  }, {
      root: null,
      rootMargin:'0px',
      threshold: 0.5
  })

  images.forEach(image => observer.observe(image) )
})

const  navLinks = document.querySelectorAll('.navlink')

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'))
    link.classList.add('active')
  })
});
document.addEventListener('DOMContentLoaded', function () {
 const Cards = document.querySelectorAll('.card2')
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry=>{
      if (entry.intersectionRatio >= 1) {
        entry.target.classList.add('seen')
      } else {
        entry.target.classList.remove('seen')
      }
    })
  },{
    root: null,
    rootMargin: '0px',
    threshold: 1
  })
  Cards.forEach(card => observer.observe(card))
});

document.addEventListener('DOMContentLoaded', function () {
const UHs = document.querySelectorAll('.UH')
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
      if (entry.intersectionRatio >= 0.5) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  },{
    root:null,
    rootMargin:'0px',
    threshold: 0.5
  })
  UHs.forEach(UH => observer.observe(UH))
})



document.addEventListener('DOMContentLoaded',function () {
 const Designs = document.querySelectorAll('.designs ')

 const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) =>{
    if (entry.intersectionRatio >= 0.5) {
      entry.target.classList.add('active')
    } else {
      entry.target.classList.remove('active')
    }
  })
 },{
  root:null,
  rootMargin:'0px',
  threshold:0.5
 })
 Designs.forEach(design => observer.observe(design))

})

const backs = document.querySelectorAll('.return-but')

backs.forEach(back => {
  back.addEventListener('click', () =>{
    window.history.back()
    setInterval(back.classList.toggle('clicked'),100)
  })
})



document.addEventListener('DOMContentLoaded', () => {

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const darkModeIcon = document.getElementById('darkModeIcon')
  darkModeToggle.addEventListener('click', () => {
    darkModeIcon.onclick
    darkModeToggle.classList.toggle('show')
      document.body.classList.toggle('dark-mode');
  });

  // const 

  // Gallery Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const designItems = document.querySelectorAll('.design-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const category = button.getAttribute('data-category');
          designItems.forEach(item => {
              if (category === 'all' || item.getAttribute('data-category') === category) {
                  item.style.display = 'flex';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  // Lightbox Effect for Gallery
  designItems.forEach(item => {
      item.addEventListener('click', () => {
          const lightbox = document.createElement('div');
          lightbox.classList.add('lightbox');
          // document.body.appendChild(lightbox);
          // console.log(item)
          if(!lightbox){
            console.error("Item not found.")
          }
          const img = document.createElement('img');
          img.src = item.src;
          // lightbox.appendChild(img);

          lightbox.addEventListener('click', () => {
              lightbox.remove(lightbox);
          });
      });
  });

  
});
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});



 let isScrolling;
 const elements = document.querySelectorAll('.scroll'); 

    window.addEventListener('scroll',() =>{
      elements.forEach(element =>{
        element.style.opacity = '0';
        element.style.transition ='opacity ease 0.5s';
      })

      clearTimeout(isScrolling)

      isScrolling = setTimeout(() => {
        elements.forEach(element=>{
          element.style.opacity ='1'
        })
      },300)
    })

// let isScrolling;
// const element = document.querySelector('.extras'); // Replace with your element's class or ID

// window.addEventListener('scroll', () => {
//   // Hide the element when scrolling
//   element.style.opacity = '0';
//   element.style.transition = 'opacity 0.5s ease';

//   // Clear the timeout if it's already set
//   clearTimeout(isScrolling);

//   // Set a timeout to make the element visible after scrolling stops
//   isScrolling = setTimeout(() => {
//     element.style.opacity = '1';
//   }, 300); // Adjust the delay as needed
// });


// LOADER

// document.addEventListener('DOMContentLoaded', function () {
//   const LoadModeToggle = document.querySelectorAll('.loader')
//   const DesignItemToggle = document.querySelectorAll('.design-item')
  
// setTimeout(() => {
//   const observer = new IntersectionObserver((entries) =>
//     entries.forEach(entry => {
//       if (entry.intersectionRatio = 1) {
//         entry.target.classList.add('visible')
//       }
//     },{
//       threshold: 1, 
//     }))
// }, 3000);

// })



// document.addEventListener('DOMContentLoaded', function () {
//   const designItems = document.querySelectorAll('.design-item')
  
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const item = entry.target
//         const loader = item.previousElementSibling
//         // loader.classList.remove('hidden')
//         setTimeout(() => {
//           loader.classList.add('hidden')
//           item.classList.add('show')
//         },2000)
//         observer.unobserve(item)
//       }
//     })
//   },{
//     root:null,
//     rootMargin: '0px',
//     threshold: 0.3
//   })
//   designItems.forEach((item) => observer.observe(item))
// })

// document.addEventListener('DOMContentLoaded', function (){
//   const designItems = document.querySelectorAll('.design-item')

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show')
//       } else {
//         entry.target.classList.remove('show')
//       }
//     })
//   },{
//     root: null,
//     rootMargin :'0px',
//     threshold: 1
//   })
//   designItems.forEach(item => observer.observe(item) )
// })









































// document.querySelectorAll('.design-item')(img =>{
//   const loader = img.previousElementSibling

//   img.onload = () => {
//     loader.style.display = 'none'

    
//     setTimeout(img.style.display = 'flex',7000)
//   }
// })


// document.addEventListener('DOMContentLoaded', function () {
//   const loader = document.querySelectorAll('.loader')

//   const observer = new IntersectionObserver ((entries) => {entries.forEach(entry => {
//     if (entry.intersectionRatio = 1) {
//       setTimeout(entry.target.classList.add('visible'),3000)
//     } else {
//       entry.target.classList.remove('visible')
//     }
//   })
// },{
//   root: null,
//   rootMargin: '0px',
//   threshold: 1
// })
//   loader.forEach(load => observer.observe(load))
// })






// const items =[
//   {title:"HTML", unicode:"U+F433"},
//   {title:"CSS", unicode:"U+F40B"},
//   {title:"JavaScript", unicode:"U+1F42C"},
//   {title:"React JS", unicode:"U+1F41F"},
//   {title:"nODE jS", unicode:"U+1F420"}
// ]
// const carousel = document.getElementById('carousel')
// items.forEach((item, index) => {
//   const carouselItem = document.createElement('div')
//   carouselItem.classList.add('item')
//   carouselItem.style.setProperty('--index', index + 1)
//   carouselItem.innerHTML = 
//   <div class="item-body">
//     <p>${item.title}</p>
//     <p>Unicode:${item.unicode}</p>
//   </div>
//   carousel.appendChild(carouselItem
//   )
// })


// document.querySelectorAll("details").forEach(detail) => {
//   const content = detail.querySelectorAll('.deatails-content')
  
//   detail.add
// }





  const testimonialsSlider = document.querySelector('.testimonials-slider');
if (testimonialsSlider) {
  
let isDown = false;
let startX;
let scrollLeft;



  testimonialsSlider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - testimonialsSlider.offsetLeft;
      scrollLeft = testimonialsSlider.scrollLeft;
  });

  testimonialsSlider.addEventListener('mouseleave', () => {
      isDown = false;
  });

  testimonialsSlider.addEventListener('mouseup', () => {
      isDown = false;
  });

  testimonialsSlider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - testimonialsSlider.offsetLeft;
      const walk = (x - startX) * 2;
      testimonialsSlider.scrollLeft = scrollLeft - walk;
  });

  // Contact Form Submission (Basic Validation & Alert)
}