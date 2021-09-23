function toggleMenu() {
    const toggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    const main = document.querySelector(".main");
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }

  const userData = JSON.parse(localStorage.getItem("userInfo"))

  if(!userData.isAdmin)
  {
    window.location="/"
  }
 