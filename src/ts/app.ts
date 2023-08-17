import Cart from "./Cart";
import Movie from "./Movie";

const cart = new Cart();
const movie = new Movie(
    1,
    "'Мстители'",
    1000,
    2012,
    'США',
    'Avengers Assemble',
    'фантастика, боевик, фэнтези',
    '137 мин. / 02:17'
);
cart.add(movie);
