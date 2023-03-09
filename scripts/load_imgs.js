import createFigure from "./helpers.js";

const mn_imgs = document.querySelector("[data-slctr=mn_imgs]");
mn_imgs.innerHTML = " ";

const ctg = document.body.dataset.ctg;
const imgs = [
  {
    path_name: "one",
    desc: "I love baking pastries and watching their golden brown crust emerge from the oven.",
  },
  {
    path_name: "two",
    desc: "Nothing says love like a freshly baked pastry filled with your favorite seasonal ingredients.",
  },
  {
    path_name: "three",
    desc: "The crust has the perfect balance of sweetness and saltiness, making it an ideal base for a wide range of savory and sweet fillings. I'm so pleased with how it turned out.",
  },
  {
    path_name: "four",
    desc: "While it may not have been perfect, I still enjoyed my short crust pastry. It may not have been what I was hoping for, but it was still a tasty treat. I'll just have to keep working at it and hope that my next attempt is even better.",
  },
  {
    path_name: "five",
    desc: "I just baked some short crust pastry and I have mixed feelings about it. On one hand, I think I did my best with the recipe and the ingredients that I had, but on the other hand, the end result wasn't exactly what I was hoping for.",
  },
  {
    path_name: "six",
    desc: "I love indulging in a nice, delicious pastry every once in a while.",
  },
  {
    path_name: "seven",
    desc: "The crust was perfectly flaky and buttery, and it was the perfect base for my delicious quiche filling. I loved how easy it was to make the pastry dough, and the process of rolling it out and fitting it into the pie dish was so satisfying.",
  },
  {
    path_name: "eight",
    desc: "Baking delicious pastries is an act of love that brings people together.",
  },
  {
    path_name: "nine",
    desc: "Despite its imperfections, I actually quite like it. The filling I made is delicious, and the pastry provides a nice, buttery base for it. Plus, there's something satisfying about making something from scratch, even if it doesn't turn out exactly as planned.",
  },
  {
    path_name: "ten",
    desc: "The pastry was perfectly crisp on the outside and soft and buttery on the inside. The filling was sweet and creamy, just the right amount of sweetness to balance out the pastry.",
  },
  {
    path_name: "elvn",
    desc: "The taste of the short crust pastry was actually quite good. Despite the texture issue, the buttery flavor was there and it complemented the filling of the pie I made. I'm sure with a bit more practice and some tweaking of the recipe, I can achieve the texture I'm looking for.",
  },
  {
    path_name: "twlv",
    desc: "Oh my goodness, you won't believe the amazing pastry I just baked! The aroma is simply heavenly - it's a combination of buttery, flaky pastry and the sweet scent of cinnamon and sugar.",
  },
  {
    path_name: "thrtn",
    desc: "I can't wait to make more short crust pastry in the future. It's such a versatile pastry that can be used for both savory and sweet dishes, and I can already imagine all the different possibilities for fillings. I think I might try making a fruit tart next, using a sweetened pastry dough and some fresh berries on top.",
  },
  {
    path_name: "frtn",
    desc: "I'm so proud of myself for making these delicious pastries. I put so much effort and care into each step of the baking process, from mixing the dough to filling the pastries. And it was all worth it to see the smiles on everyone's faces as they enjoyed them.",
  },
  {
    path_name: "fftn",
    desc: "The texture of the pastry turned out a bit crumbly and dry, which I wasn't expecting. I was aiming for a more buttery and flaky texture, but I guess I must have missed something in the recipe or overworked the dough.",
  },
];

imgs.forEach((img) => {
  mn_imgs.appendChild(createFigure(ctg, img.path_name, img.desc));
});
