window.onload = () => {
  const navigation = document.getElementById("navigation");
  const navbarForum = document.querySelector(".navbar-forum-main-wrapper");
  const backNavbar = document.querySelector(".navbar-back-main-wrapper");
  const dashboardNavbar = document.querySelector(
    ".dashboard-navbar-main-wrapper"
  );
  const navbarProfile = document.querySelector(".profile-navbar-main-wrapper");
  window.onscroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 50) {
      navigation.classList.add("scrolling");
      navbarForum.classList.add("scrolling");
      backNavbar.classList.add("scrolling");
      dashboardNavbar.classList.add("scrolling");
      navbarProfile.classList.add("scrolling");
    } else {
      navigation.classList.remove("scrolling");
      navbarForum.classList.remove("scrolling");
      backNavbar.classList.remove("scrolling");
      dashboardNavbar.classList.remove("scrolling");
      navbarProfile.classList.remove("scrolling");
    }
  };
};
