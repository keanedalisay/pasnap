(() => {
  const go_down_btn = document.querySelector("[data-bannermain=go_down_btn]");
  go_down_btn.addEventListener("click", () => {
    window.scrollTo(0, window.visualViewport.height);
  });
})();

(() => {
  const banner_ctgrs_cont = document.querySelector("[data-bannerctgrs=cont]");
  const pastry_link = banner_ctgrs_cont.querySelector("a");
  const pastry_link_dim = pastry_link.getBoundingClientRect();

  const crsel_left_btn = document.querySelector(
    "[data-bannerctgrs=crsel_left_btn]"
  );
  const crsel_right_btn = document.querySelector(
    "[data-bannerctgrs=crsel_right_btn]"
  );

  if (typeof banner_ctgrs_cont.scrollBy === "function") {
    crsel_right_btn.addEventListener("click", () => {
      banner_ctgrs_cont.scrollBy({
        left: pastry_link_dim.width + 20,
        behavior: "smooth",
      });
    });

    crsel_left_btn.addEventListener("click", () => {
      banner_ctgrs_cont.scrollBy({
        left: -pastry_link_dim.width - 20,
        behavior: "smooth",
      });
    });

    return;
  }

  crsel_left_btn.remove();
  crsel_right_btn.remove();
})();
