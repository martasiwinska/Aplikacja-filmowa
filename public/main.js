
let counter = 1;

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
    $('#exampleModal').modal('hide'); // zamykaie okna modala
    $('form').trigger('reset'); // zresetowanie formularza
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

    const currentName = self.parent().parent().children().eq(1);
    const currentAuthor = currentName.next();
    const currentYear = currentAuthor.next();

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

    const currentName = self.parent().parent().children().eq(1);
    const currentAuthor = currentName.next();
    const currentYear = currentAuthor.next();

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

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":7},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
