document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body
  const toggleText = document.querySelector(".toggle-text")

  // Check for saved theme preference or use default
  const currentTheme = localStorage.getItem("theme") || "light-mode"
  body.className = currentTheme

  // Update toggle button text based on current theme
  updateToggleText()

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode")
      body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark-mode")
    } else {
      body.classList.remove("dark-mode")
      body.classList.add("light-mode")
      localStorage.setItem("theme", "light-mode")
    }
    updateToggleText()
  })

  function updateToggleText() {
    if (body.classList.contains("light-mode")) {
      toggleText.textContent = "Mode Sombre"
    } else {
      toggleText.textContent = "Mode Clair"
    }
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  // Animation for cards on scroll
  const cards = document.querySelectorAll(".card")

  function checkCards() {
    const triggerBottom = window.innerHeight * 0.8

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top

      if (cardTop < triggerBottom) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for cards
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Check cards on load and scroll
  window.addEventListener("load", checkCards)
  window.addEventListener("scroll", checkCards)

  // Add emoji animations
  const emojis = document.querySelectorAll("h2 > span, h3 > span")

  emojis.forEach((emoji) => {
    emoji.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.3) rotate(10deg)"
    })

    emoji.addEventListener("mouseout", function () {
      this.style.transform = "scale(1) rotate(0)"
    })

    emoji.style.display = "inline-block"
    emoji.style.transition = "transform 0.3s ease"
  })
})

