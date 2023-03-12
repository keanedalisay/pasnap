(() => {
  const go_down_btn = document.querySelector("[data-bannermain=go_down_btn]");
  go_down_btn.addEventListener("click", () => {
    window.scrollTo(0, window.visualViewport.height);
  });
})();

(() => {
  const ptry_ctgrs_cont = document.querySelector(
    "[data-slctr=pastry_ctgrs_cont]"
  );
  const ptry_btn = ptry_ctgrs_cont.querySelector("a");
  const ptry_btn_dim = ptry_btn.getBoundingClientRect();

  const ptry_ctgrs_left_btn = document.querySelector(
    "[data-slctr=pastry_ctgrs_left_btn]"
  );
  const ptry_ctgrs_right_btn = document.querySelector(
    "[data-slctr=pastry_ctgrs_right_btn]"
  );

  if (typeof ptry_ctgrs_cont.scrollBy === "function") {
    ptry_ctgrs_right_btn.addEventListener("click", () => {
      ptry_ctgrs_cont.scrollBy({
        left: ptry_btn_dim.width + 20,
        behavior: "smooth",
      });
    });

    ptry_ctgrs_left_btn.addEventListener("click", () => {
      ptry_ctgrs_cont.scrollBy({
        left: -ptry_btn_dim.width - 20,
        behavior: "smooth",
      });
    });

    return;
  }

  ptry_ctgrs_left_btn.remove();
  ptry_ctgrs_right_btn.remove();
})();
