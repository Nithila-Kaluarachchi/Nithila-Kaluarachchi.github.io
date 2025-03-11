document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content")
    const profileImage = document.querySelector(".profile-image")
  
    // Add a slight fade-in effect
    if (heroContent && profileImage) {
      heroContent.style.opacity = "0"
      profileImage.style.opacity = "0"
  
      setTimeout(() => {
        heroContent.style.transition = "opacity 1s ease"
        profileImage.style.transition = "opacity 1s ease"
  
        heroContent.style.opacity = "1"
        profileImage.style.opacity = "1"
      }, 300)
    }
  
    // Add subtle background animation
    const body = document.body
    let position = 0
  
    function animateBackground() {
      position += 0.1
      body.style.backgroundPosition = `${position}px ${position}px`
      requestAnimationFrame(animateBackground)
    }
  
    // Uncomment the line below if you want the grid background to slowly move
    // requestAnimationFrame(animateBackground);
  })
  
  document.addEventListener("DOMContentLoaded", () => {
    // Add animations to elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        ".hero-content, .profile-image, .section-header, .card, .aboutme-image, .bio-text",
      )
  
      elements.forEach((element) => {
        // Check if element is already animated
        if (element.classList.contains("animated")) return
  
        const elementPosition = element.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.2
  
        if (elementPosition < screenPosition) {
          element.classList.add("animated")
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial state for animations
    const setupAnimations = () => {
      const elements = document.querySelectorAll(
        ".hero-content, .profile-image, .section-header, .card, .aboutme-image, .bio-text",
      )
  
      elements.forEach((element) => {
        // Don't re-setup elements that are already animated
        if (element.classList.contains("animation-setup")) return
  
        element.classList.add("animation-setup")
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease"
      })
  
      // Animate elements that are already in view on page load
      setTimeout(animateOnScroll, 100)
    }
  
    // Add scroll indicator
    const addScrollIndicator = () => {
      const scrollIndicator = document.createElement("div")
      scrollIndicator.className = "scroll-indicator"
      scrollIndicator.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>'
      document.body.appendChild(scrollIndicator)
  
      // Hide indicator initially
      scrollIndicator.style.opacity = "0"
      scrollIndicator.style.pointerEvents = "none"
  
      // Show indicator when scrolling down
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          scrollIndicator.style.opacity = "1"
          scrollIndicator.style.pointerEvents = "auto"
        } else {
          scrollIndicator.style.opacity = "0"
          scrollIndicator.style.pointerEvents = "none"
        }
      })
  
      // Scroll to top when clicked
      scrollIndicator.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  
    // Add subtle background animation
    const animateBackground = () => {
      const body = document.body
      let position = 0
  
      function animate() {
        position += 0.05
        body.style.backgroundPosition = `${position}px ${position}px`
        requestAnimationFrame(animate)
      }
  
      // Uncomment the line below if you want the grid background to slowly move
      // requestAnimationFrame(animate);
    }
  
    // Initialize
    setupAnimations()
    addScrollIndicator()
    animateBackground()
  
    // Listen for scroll events
    window.addEventListener("scroll", animateOnScroll)
  
    // Update animations on window resize
    window.addEventListener("resize", animateOnScroll)
  })
  
  