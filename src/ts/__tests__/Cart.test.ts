import Cart from "../Cart";
import Movie from "../Movie";
import Book from "../Book";

test('addInCart', () => {
    const cart = new Cart();
    const movie = new Movie(
        1,
        "'Мстители'",
        1000,
        2012,
        'США',
        "'Avengers Assemble'",
        'фантастика, боевик, фэнтези',
        '137 мин. / 02:17'
    );
    cart.add(movie);
    const result = cart.items;
    const expected = [
        {
          id: 1,
          name: "'Мстители'",
          price: 1000,
          year: 2012,
          country: 'США',
          tagline: "'Avengers Assemble'",
          genre: 'фантастика, боевик, фэнтези',
          time: '137 мин. / 02:17'
        }
    ];
    expect(result).toEqual(expected);
});

test('totalPriceCount', () => {
    const cart = new Cart();
    const movie = new Movie(
        1,
        "'Мстители'",
        1000,
        2012,
        'США',
        "'Avengers Assemble'",
        'фантастика, боевик, фэнтези',
        '137 мин. / 02:17'
    );
    const book = new Book(
        2,
        "'Война и мир'",
        'Лев Толстой',
        2000,
        3465
    );
    cart.add(movie);
    cart.add(book);
    const result = cart.totalPrice();
    const expected = 3000;
    expect(result).toEqual(expected);
});

test('discountPriceCount', () => {
    const cart = new Cart();
    const movie = new Movie(
        1,
        "'Мстители'",
        1000,
        2012,
        'США',
        "'Avengers Assemble'",
        'фантастика, боевик, фэнтези',
        '137 мин. / 02:17'
    );
    const book = new Book(
        2,
        "'Война и мир'",
        'Лев Толстой',
        2000,
        3465
    );
    cart.add(movie);
    cart.add(book);
    const result = cart.discountPrice(10);
    const expected = 2700;
    expect(result).toEqual(expected);
});

test('removeItemTest', () => {
    const cart = new Cart();
    const movie = new Movie(
        1,
        "'Мстители'",
        1000,
        2012,
        'США',
        "'Avengers Assemble'",
        'фантастика, боевик, фэнтези',
        '137 мин. / 02:17'
    );
    const book = new Book(
        2,
        "'Война и мир'",
        'Лев Толстой',
        2000,
        3465
    );
    cart.add(movie);
    cart.add(book);
    cart.removeItem(2);
    const result = cart.items;
    const expected = [
        {
          id: 1,
          name: "'Мстители'",
          price: 1000,
          year: 2012,
          country: 'США',
          tagline: "'Avengers Assemble'",
          genre: 'фантастика, боевик, фэнтези',
          time: '137 мин. / 02:17'
        }
    ];
    expect(result).toEqual(expected);
});