// // const banan = "żółty owoc z Afryki"; // komentarz od tego momentu do końca linii; const zawsze poza wtedy kiedyy konieczny jest let
// //        const koniecWojny = 1918;
// //        const obecnyRok = 2018;
// //        const wiśnia = "czerwony owoc z Azji";
// //        //  alert(banan); // alert jest funkcją wbudowaną, możemy tez budować funkcję własną
// //       // const wiek = prompt("Ile masz lat?");
// //       // alert(`mam ${wiek} lat`); // syntax jezyka = składnia jezyka
// //       // prompt(``) // jest funkcją z zapytaniem
// //       // const prawda = 5000 > 3000; // true
// //       // const fałsz = 5000 == 3000; // jeden = to przypisanie, a == porównanie, przy === dodatkowo sprawdza typ
// //       // alert(fałsz); // false

// //       //  alert(`koniec wojny był w 1918 roku`) // jak masz zdanie z cyfrą nie stosujemy klasycznego cudzysłowu tylko tem z baktikami
// //       //  alert(`koniec wojny był w ${koniecWojny} roku`);
// //       // alert(`w tym roku obchodzimy 100 rocznicę odzyskania niepodległości`)
// //       // alert(`w tym roku obchodzimy ${obecnyRok - koniecWojny} rocznicę odzyskania niepodległości`)
// //       // alert(`${banan}, ${wiśnia}`);

// //       // LOSOWANIE LICZBY PRZEZ KOMPUTER
// //       const random = Math.random() * 10; // random liczba od 0 do 1 jełsi chcemy powyżej 1 mnożymy
// //       Math.round(); // zaokrągla liczbę
// //       const zaokraglonaLiczba = Math.round(random); // js działa z góry w doł i OD PRAWEJ DO LEWEJ!!!
// //       // alert(zaokraglonaLiczba);

// //       // WPISYWANIE LICZBY PRZEZ UŻYTKOWNIKA
// //       const mojWynik = prompt('Zgadnij Liczbę od 1 do 10'); // bez znaczenia czy to jest pojedynczy czy podwójy cudzysłów

// //       // KONSTRUKCJE WARUNKOWE IF/ELSE
// //       // if (zaokraglonaLiczba == mojWynik) {
// //       //   alert ('Zgałeś/aś liczbę');
// //       // } else {
// //       //   alert ('Nie zgadłeś/aś liczby. Próbuj dalej');
// //       // }

// // // DOM czyli kopia HTML w JS, żeby łapać elementy w jQuery i zmieniać  go


// // DODAWANIE TEKSTU DO ISTNIEJĄCYCH ELEMENTÓW
// const wartoscTekstu = prompt("Co chcesz, żeby było w tytule?");

// // $() // zapisy jQuery
// $('h1') // złapanie elementu ze strony

// // $('h1').text(wartoscTekstu); // zlap element h1 i wypełnij go wartoscia zmiannej wartoscTekstu, przed kropka jest to na czym wywołujemy funkcję
// // // selektor w css to id i klasy czyi to po czym łapiesz:
// // // - znacznik: p, h1 td itd
// // // - id #
// // // - klasa .


// // $('h1').text(wartoscTekstu);
// // zamieni nawet całą zawartość body jeśli go złapiemy w $ nie tylko tekst
// // $('.container').text(wartoscTekstu);

// // TWORZENIE NOWYCH ELEMENTÓW
// // 1. stworzyć element od zera
// // 2. dodać do istiejącego elementu

// // ad1.

// const newEl = $(`
//         <div>
//            <h1> ${wartoscTekstu} </h1>
//             <p>Nowy test</p>
//         </div>
// `);

// // ad2.$

// $('.container').append(newEl);  // funkcja append dodaje nowe elementy na samym dole



    // // stworzenie zmiennej, którą możemy zmienić
    // let imie = 'damian';

    // // modyfikowanie zmiennej
    // imie = 'pawel';

    // alert(imie);



// td to komórka czyli kolumna rzędzi
    // TO DO LIST
    // FORMULARZ gdzie wpisuje i ma przycisk dodaj
    // LISTA poniżej gdzie wklejają się dane z formularza

// co zrobić żeby dodac film
// 1. klikam w dodaj
// 2. pobieram wartosc inputów
// 3. wstaw nowy element w tabeli






//TABLICA zbiór elementów jednego rodzaju - Array

// const fruitsBox = ['jabłko', 'gruszka', "sliwka", 'mandarynki'];

// //ODCZYT

// alert(fruitsBox[2]); // wywołujemy elementy tablicy po indeksie
// // 0 w amerykańskim systemie liczenia to nasze 1

// //ZAPIS

// fruitsBox.push('banany'); // dodawanie elementu na sam koniec

// //PETLE

// for (let fruit of fruitsBox) { // zamiasrt starego i=0, length i tak dalej czego nie lubiłas :)
//     alert(fruit);
// }

//OBIEKTY - Objects

// const person = {
//     name: 'Damian', // 3 właściwości obiektu // key: value, klucz: wartośc,
//     age: 26,
//     city: "Warsaw"
// };

// const person2 = {
//     name: 'Paweł', // 3 właściwości obiektu // key: value, klucz: wartośc,
//     age: 32,
//     city: "Kraków"
// };

// ODCZYT
//nazwaObiektu.nazwaKlucza

// alert(person.city);
// alert(person2.age);

// const people = [
//     {
//         name: 'Damian',
//         age: 26
//     }, {
//         name: 'Paweł',
//         age: 30
//     }, {
//         name: 'Marta',
//         age: 13
//     }
// ];

// let agesSum = 0;

// for (let person of people) {
//     // alert(person.age); //wyswietlamy wiek
//     agesSum = agesSum + person.age;
//     // alert(agesSum);
// }

// // const average = agesSum / 3; // dzielimy na 3 bo wiemy mamy 3 obiekty w tablcy
// const average = agesSum / people.length; // pętla przechodzi przez wszystkie elementy i dzieli na ich liczbę nie musimy ich znać
// alert(average);

let counter = 1;

// działa jak np sms jak przyjdzie przelew na telefon - baza, moje konto, on zaczyna wydarzenie przyszedł przelw, wyslij sms
firebase
    .database() // łaczy się z bazą
    .ref('/films') // odnajduje wybraną referencję czyli folder films i w nim robi zmiany
    .on('child_added', function(data) {
        const filmFromDB = data.val();

        const newEl = $(`
        <tr>
            <td>${counter}</td>
            <td>${filmFromDB.name}</td>
            <td>${filmFromDB.author}</td>
            <td>${filmFromDB.year}</td>
            // wywołujemy funkcję key na elemencie data czyli pobiera z firebase ten klucz
            <td data-key="${data.key}">
                <i class="far fa-trash-alt" id="remove"></i>
                <i class="fas fa-edit" id="edit"></i>
                <i class="far fa-check-circle invisible" id="checked"></i>
            </td>
        </tr>
    `);

    $('tbody').append(newEl);
    counter = counter + 1; // to samo co counter++

    });



// WYWALAMY BO POBIERANY DANE Z BAZY DANCYH
// const films = [
//     {
//         name: 'W pustyni i w puszczy',
//         director: 'Władysław Ślesicki',
//         production: 1973
//     }, {
//         name: 'Krzyżacy',
//         director: 'Aleksander Ford',
//         production: 1976
//     },
// ];

// for (let film of films) {
//     const newEl = $(`
//     <tr>
//         <td>${counter}</td>
//         <td>${film.name}</td>
//         <td>${film.director}</td>
//         <td>${film.production}</td>
//     </tr>
// `);

// $('tbody').append(newEl);

// counter = counter + 1; // to samo co counter++



// };


$('#add').on('click', function() {

    const filmName = $('#filmName').val(); // val pobiera wartość formularza
    const filmAuthor = $('#filmAuthor').val();
    const filmYear = $('#filmYear').val();

// wyżej pobieramy dane i zapisujemy w zmiennych
// ponizej tworzymy obiekt

    const newFilm = {
        name: filmName,
        author: filmAuthor,
        year: filmYear
    }
    // dodajemy baze
    // push dodaje do tabeli, apped do strony WAŻNE
    firebase.database().ref('/films').push(newFilm);

    // const newEl = $(`
    //     <tr>
    //         <td>${counter}</td>
    //         <td>${filmName}</td>
    //         <td>${filmAuthor}</td>
    //         <td>${filmYear}</td>
    //       </tr>
    // `);

    // $('tbody').append(newEl);
    $('#exampleModal').modal('hide'); // zamykaie okna modala
    $('form').trigger('reset'); // zresetowanie formularza

    // counter = counter + 1;
})

// sposób dynamiczny nakładania zdarzen na element
// robimy to inaczej bo nasza ikona jest elementem który pojawia sie nei od razy w html tylkko po otrzymaniu odp z serwera

$('body').on('click','#remove', function() {
    const self = $(this);
    const key = self.parent().data('key'); // parent mówi idź do rodzica

    // usunięcie nie odświeża strony musimy użyć czegoś co nazywa się "a następnie"
    firebase.database()
        .ref(`/films/${key}`).remove()
        .then(function() {
            window.location.reload(); //wbudowana funkcja do odświeżenia strony
        })

})

$('body').on('click','#edit', function() {
    const self = $(this);

    const key = self.parent().data('key');

    const currentName = self.parent().parent().children().eq(1); // grzebanie w dziadku, pierwszy byłby zero
    const currentAuthor = currentName.next(); // metoda na brata
    const currentYear = currentAuthor.next(); // metoda na brata

    currentName.attr('contenteditable',true); //dodajemy możliwosc edycji
    currentAuthor.attr('contenteditable',true);
    currentYear.attr('contenteditable',true);

    // ikonka do edycji znika
    self.addClass('invisible');
    // ikonka do potwierdzenia edycji się pojawia
    self.next().removeClass('invisible');

})

$('body').on('click','#checked', function() {
    const self = $(this);

    const key = self.parent().data('key');

    const currentName = self.parent().parent().children().eq(1); // grzebanie w dziadku, pierwszy byłby zero
    const currentAuthor = currentName.next(); // metoda na brata
    const currentYear = currentAuthor.next(); // metoda na brata

    currentName.attr('contenteditable',false); //dodajemy możliwosc edycji
    currentAuthor.attr('contenteditable',false);
    currentYear.attr('contenteditable',false);

 const editedFilm = {
        name: currentName.text(),
        author: currentAuthor.text(),
        year: currentYear.text()
    }

    firebase.database().ref(`/films/${key}`).set(editedFilm);

    // ikonka do potwierdzenia edycji się pojawia
    self.addClass('invisible');

     // ikonka do edycji znika
    self.prev().removeClass('invisible');

})
