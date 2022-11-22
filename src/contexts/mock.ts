import { v4 as uuidv4 } from 'uuid'

import imageExpressoTrad from '../assets/images/expresso.png'
import imageExpressoAmer from '../assets/images/americano.png'
import imageExpressoCremo from '../assets/images/expresso-cremoso.png'
import imageCafeGelado from '../assets/images/cafe-gelado.png'
import imageCafeComLeite from '../assets/images/cafe-com-leite.png'
import imageLatte from '../assets/images/latte.png'
import imageCappucino from '../assets/images/capuccino.png'
import imageMacchiato from '../assets/images/macchiato.png'
import imageMochaccino from '../assets/images/mochaccino.png'
import imageChocolateQuente from '../assets/images/chocolate-quente.png'
import imageCubano from '../assets/images/cubano.png'
import imageHavaiano from '../assets/images/havaiano.png'
import imageArabe from '../assets/images/arabe.png'
import imageIrlandes from '../assets/images/irlandes.png'

export const data = [
  {
    id: uuidv4(),
    cover: imageExpressoTrad,
    categories: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageExpressoAmer,
    categories: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageExpressoCremo,
    categories: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageCafeGelado,
    categories: ['Tradicional'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageCafeComLeite,
    categories: ['Tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageLatte,
    categories: ['Tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageCappucino,
    categories: ['Tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageMacchiato,
    categories: ['Tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageMochaccino,
    categories: ['Tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageChocolateQuente,
    categories: ['Tradicional', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageCubano,
    categories: ['Tradicional', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageHavaiano,
    categories: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageArabe,
    categories: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    cover: imageIrlandes,
    categories: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
]
