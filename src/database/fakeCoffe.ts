import Arabe from "../assets/Arabe.svg";
import CafecomLeite from "../assets/Cafe com Leite.svg";
import CafeGelado from "../assets/Cafe Gelado.svg";
import Capuccino from "../assets/Capuccino.svg";
import ChocolateQuente from "../assets/Chocolate Quente.svg";
import Cuabano from "../assets/Cubano.svg";
import ExpressoCremoso from "../assets/Expresso Cremoso.svg";
import ExpressoAmericano from "../assets/Expresso Americano.svg";
import Expresso from "../assets/Expresso.svg";
import Havaiano from "../assets/Havaiano.svg";
import Irlandes from "../assets/Irlandes.svg";
import Latte from "../assets/Latte.svg";
import Macchiato from "../assets/Macchiato.svg";
import Mochaccino from "../assets/Mochaccino.svg";

export const dataFake = [
  {
    id: 1,
    image: Expresso,
    tag: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },

  {
    id: 2,
    image: ExpressoAmericano,
    tag: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional ",
    price: 9.9,
  },

  {
    id: 3,
    image: ExpressoCremoso,
    tag: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },

  {
    id: 4,
    image: CafeGelado,
    tag: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },

  {
    id: 5,
    image: CafecomLeite,
    tag: ["Tradicional", "Com Leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: 6,
    image: Latte,
    tag: ["Tradicional", "Com Leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: 7,
    image: Capuccino,
    tag: ["Tradicional", "Com Leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: 8,
    image: Macchiato,
    tag: ["Tradicional", "Com Leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pocuo de leite quente e espuma",
    price: 9.9,
  },
  {
    id: 9,
    image: Mochaccino,
    tag: ["Tradicional", "Com Leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: 10,
    image: ChocolateQuente,
    tag: ["Especial", "Com Leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },

  {
    id: 11,
    image: Cuabano,
    tag: ["Especial", "Alcoólico", "Gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },

  {
    id: 12,
    image: Havaiano,
    tag: ["Especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
  },

  {
    id: 13,
    image: Arabe,
    tag: ["Especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },

  {
    id: 14,
    image: Irlandes,
    tag: ["Especial", "Alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
];
