const urlExists = async (url) => {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch {
    throw new Error("URL cannot be fetched. Did you pass in a non-URL path?");
  }
};

const img_extns = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
const getImgSrc = async (ptry_ctg, img_name) => {
  const src_path = "../assets/imgs/" + ptry_ctg + "/" + img_name;
  for (let i = 0; i < img_extns.length; i++) {
    const status = await urlExists(src_path + img_extns[i]);
    if (status) return src_path + img_extns[i];
    continue;
  }
  return null;
};

const createFigure = (ptry_ctg, img_name, img_desc) => {
  const fig = document.createElement("button");
  fig.classList.add("fig");

  const fig_img = new Image();
  fig_img.classList.add("fig-img");

  getImgSrc(ptry_ctg, img_name).then((src_path) => {
    fig_img.src = src_path;
    fig_img.alt = img_desc;
    fig.appendChild(fig_img);

    const fig_txt = document.createElement("p");
    fig_txt.classList.add("fig-txt");
    fig_txt.textContent = img_desc.slice(0, 40).concat("...");
    fig.appendChild(fig_txt);

    const fig_dialog = document.createElement("div");
    fig_dialog.classList.add("fig_dialog");

    const fig_dialog_txt = document.createElement("p");
    fig_dialog_txt.classList.add("fig_dialog-txt");
    fig_dialog_txt.textContent = "Open";
    fig_dialog.appendChild(fig_dialog_txt);
    fig.appendChild(fig_dialog);
  });

  return fig;
};

export default createFigure;
