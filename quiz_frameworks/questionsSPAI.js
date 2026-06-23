const allQuestions = [
    {
        "question": "Co będzie wartością stałej `myFunction`?\nconst myFunction = () => ({ value: 'test' })",
        "options": [
            "wartość w formacie JSON",
            "wartość w formacie JSX",
            "wartość 'test' zawarta w zmiennej `value`",
            "obiekt"
        ],
        "correct": [3],
        "explanation": "Gemini tak mówi: Otoczenie klamer nawiasami okrągłymi `({ ... })` w jawny sposób nakazuje silnikowi JavaScript zinterpretowanie zawartości jako literału obiektu, a nie bloku kodu funkcji. Funkcja zwraca obiekt."
    },
    {
        "question": "Silniki szablonów, które można użyć w szkielecie Express:",
        "options": [
            "A) EJS",
            "B) Pug",
            "C) Handlebars",
            "D) żaden z powyższych"
        ],
        "correct": [0, 1, 2],
        "explanation": "Express jest kompatybilny z wieloma popularnymi silnikami szablonów, w tym EJS, Pug (dawniej Jade) oraz Handlebars, które są powszechnie stosowane i integrowane za pomocą `app.set('view engine', ...)`."
    },
    {
        "question": "Oprogramowanie pośredniczące w Express realizuje następujące zadania:",
        "options": [
            "A) może wywoływać kolejne funkcje oprogramowania pośredniczącego",
            "B) może dokonywać zmian w obiektach żądania i odpowiedzi",
            "C) może kończyć cykl żądanie-odpowiedź",
            "D) przekształca kod JavaScript korzystający z najnowszych możliwości języka na kod, który będzie wykonywany w starszych przeglądarkach"
        ],
        "correct": [0, 1, 2],
        "explanation": "Funkcje oprogramowania pośredniczącego (middleware) posiadają dostęp do obiektów żądania (req), odpowiedzi (res) oraz kolejnej funkcji (next). Mogą modyfikować parametry, kończyć cykl wysyłając odpowiedź lub przekazać sterowanie dalej. Punkt D odnosi się do transpilatora Babel, a nie middleware."
    },
    {
        "question": "Wskaż cechy Virtual DOM:",
        "options": [
            "bezpośrednio modyfikuje HTML",
            "szybko się aktualizuje",
            "tworzy nowy DOM, jeśli zostanie zaktualizowany",
            "występuje duże marnotrawstwo pamięci"
        ],
        "correct": [1],
        "explanation": "Slajd 25; Ma sens, nawet jest w prezentacji, ale oczywiście kurwa `wirtualny` a nie `virtual`; \nVirtual DOM to lekka reprezentacja struktury HTML trzymana w pamięci. Zmiany są na nim dokonywane bardzo szybko, a algorytm różnicowy (diffing) aktualizuje w prawdziwym drzewie DOM wyłącznie te elementy, które rzeczywiście uległy zmianie."
    },
    {
        "question": "Czym jest 'useState' w poniższej konstrukcji?\nconst [state, setState] = useState()",
        "options": [
            "A) hookiem",
            "B) propsem",
            "C) stanem",
            "D) konstruktorem"
        ],
        "correct": [0],
        "explanation": "`useState` to podstawowy, wbudowany Hook wprowadzony w React, który pozwala komponentom funkcyjnym na posiadanie i aktualizowanie własnego wewnętrznego stanu."
    },
    {
        "question": "Wskaż nieprawdziwe stwierdzenia opisujące platformę Node:",
        "options": [
            "A) domyślnie jest jednowątkowa",
            "B) jest środowiskiem wykonawczym JavaScript",
            "C) powstała w celu ułatwienia programowania synchronicznego",
            "D) jest środowiskiem wieloplatformowym"
        ],
        "correct": [2],
        "explanation": "Platforma Node.js została zaprojektowana od podstaw z myślą o asynchronicznym, nieblokującym wejściu/wyjściu (I/O) sterowanym zdarzeniami, a nie w celu ułatwienia programowania synchronicznego."
    },
    {
        "question": "Wybierz prawidłowe określenia. Plik `package.json`:",
        "options": [
            "A) jest narzędziem do automatycznego restartowania programu po wprowadzeniu zmian w kodzie",
            "B) można utworzyć samodzielnie lub za pomocą polecenia: `npm init`",
            "C) zawiera szereg zależności niezbędnych do działania aplikacji, które należy pobrać za pomocą polecenia `npm install`",
            "D) zawiera informacje o projekcie: wersja, opis, autorzy"
        ],
        "correct": [1, 2, 3],
        "explanation": "Plik `package.json` stanowi manifest projektu npm. Przechowuje metadane oraz deklaracje zależności pobieranych przez `npm install`. Automatycznym restartem zajmuje się osobne narzędzie (np. nodemon), a nie sam plik konfiguracyjny."
    },
    {
        "question": "Główny komponent w React to:",
        "options": [
            "A) App",
            "B) JSX",
            "C) index",
            "D) Main"
        ],
        "correct": [0],
        "explanation": "W standardowych konfiguracjach i szablonach startowych Reacta (np. Create React App, Vite) domyślnym, głównym komponentem aplikacji spinającym pozostałe komponenty potomne jest komponent `App`."
    },
    {
        "question": "Wskaż polecenie, które uruchomi kod zawarty w pliku hello.js:",
        "options": [
            "A) `npm hello.js`",
            "B) `node hello`",
            "C) `npm hello`",
            "D) `npx hello.js`"
        ],
        "correct": [1],
        "explanation": "Do uruchomienia pliku skryptu za pomocą środowiska Node.js stosuje się polecenie `node` wraz z nazwą pliku. Rozszerzenie `.js` można przy tym opuścić."
    },
    {
        "question": "W instrukcji:\nimport React, { Component } from \"react\"",
        "options": [
            "A) React jest możliwością nazwaną",
            "B) Component jest domyślną możliwością nazwaną",
            "C) React jest domyślną możliwością nazwaną",
            "D) Component jest możliwością nazwaną"
        ],
        "correct": [2, 3],
        "explanation": "W składni modułów ES6 element importowany poza klamrami (`React`) stanowi import domyślny (`export default`), natomiast elementy ujęte w klamry (`{ Component }`) to importy nazwane (`export const/class...`)."
    },
    {
        "question": "Hooki w React:",
        "options": [
            "A) wymagają deklaracji konstruktora",
            "B) muszą być wywoływane na najwyższym poziomie, nie można ich wywoływać winside zagnieżdżonych funkcji, pętli, warunków",
            "C) występują w komponentach klasowych",
            "D) wymagają użycia słowa kluczowego 'this' w deklaracji lub modyfikacji stanu"
        ],
        "correct": [1],
        "explanation": "Zgodnie z oficjalnymi zasadami stosowania Hooków (Rules of Hooks), mogą być one wywoływane wyłącznie na najwyższym poziomie komponentów funkcyjnych. Nie wolno ich umieszczać wewnątrz instrukcji warunkowych, pętli czy funkcji wewnętrznych."
    },
    {
        "question": "Wskaż prawidłowe określenia dla REST:",
        "options": [
            "API utworzone wg zasad REST nazywane jest RESTful API",
            "REST jest protokołem",
            "REST jest standardem",
            "REST jest zbiorem dobrych praktyk tworzenia architektury rozproszonych aplikacji"
        ],
        "correct": [0, 3],
        "explanation": "Slajd 14;REST (Representational State Transfer) nie jest protokołem ani sztywnym standardem technicznym. To styl architektoniczny oraz zbiór reguł i dobrych praktyk projektowania usług sieciowych. Implementujące go interfejsy nazywa się RESTful API."
    },
    {
        "question": "Które fragmenty kodu JSX są prawidłowe?",
        "options": [
            "`return (<div><div>Pierwszy element</div><div>Drugi element</div></div>)`",
            "`return (<div>Pierwszy element</div><div>Drugi element</div>)`",
            "`return (<table><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>)`",
            "`return (<button class=\"btn btn-warning\">Naciśnij</button>)`"
        ],
        "correct": [0, 2],
        "explanation": "Komponent JSX musi zawsze zwracać pojedynczy element nadrzędny (wariant B nie posiada wrappera). Ponadto w JSX słowo `class` jest zarezerwowane, dlatego do definiowania klas CSS poprawnie używa się atrybutu `className` (wariant D jest błędny syntaktycznie)."
    },
    {
        "question": "Wskaż prawidłowe stwierdzenia dotyczące formatu JSON:",
        "options": [
            "odpowiedź w formacie JSON ma znacznie większą liczbę znaków niż XML i w związku z tym powoduje większy ruch sieciowy i dłuższy czas transferu danych",
            "nie sprawdza się w opisie i serializacji danych strukturalnych",
            "obsługuje typy strukturalne 'object' i 'array'",
            "lekki, tekstowy, przyjazny format dla języka JavaScript",
            "używa tagów do budowy struktury"
        ],
        "correct": [2, 3],
        "explanation": "Na logike; Slajd 29; JSON to lekki, czytelny dla człowieka format wymiany danych oparty na podzbiorze notacji obiektowej JavaScriptu. Obsługuje zagnieżdżone obiekty oraz tablice. Jest znacznie bardziej zwięzły od formatu XML i nie korzysta z tagów."
    },
    {
        "question": "Które sformułowania odnośnie MongoDB są nieprawdziwe?",
        "options": [
            "A) MongoDB przechowuje dane w dokumentach i kolekcjach",
            "B) MongoDB to baza nierelacyjna",
            "C) językiem MongoDB jest JavaScript",
            "D) dokumenty w kolekcji nie posiadają unikalnych identyfikatorów",
            "E) MongoDB przechowuje dane w rekordach i tabelach"
        ],
        "correct": [2, 3, 4],
        "explanation": "MongoDB to baza dokumentowa (NoSQL), która operuje na kolekcjach i dokumentach (BSON), a nie tabelach i rekordach. Każdy dokument musi obligatoryjnie posiadać unikalny identyfikator w polu `_id`. Chociaż zapytania i konsola powłoki są zbliżone składniowo do JS i go interpretują, natywnym językiem operacji na bazie jest MQL (MongoDB Query Language)."
    },
    {
        "question": "W skład stosu MERN wchodzą następujące technologie:",
        "options": [
            "A) MongoDB, Express, React, Node",
            "B) Microsoft SQL, Exit, Redux, Node",
            "C) MSSQL, Electron, Ruby on Rails, Node",
            "D) MySQL, Elixir, Router, Node"
        ],
        "correct": [0],
        "explanation": "Akronim MERN odnosi się bezpośrednio do pełnego zestawu technologii JavaScript służącego do budowy aplikacji webowych: M - MongoDB, E - Express.js, R - React.js, N - Node.js."
    },
    {
        "question": "Wskaż wynik działania kodu:\n[2, 3, 4].map(x => x * 2)",
        "options": [
            "A) [4, 6, 8]",
            "B) 18",
            "C) 24",
            "D) [4, 9, 16]"
        ],
        "correct": [0],
        "explanation": "Metoda `map` przechodzi po kolei przez każdy element tablicy i aplikuje do niego funkcję transformującą. Każda wartość zostaje pomnożona przez 2, dając nową tablicę: `[2*2, 3*2, 4*2] = [4, 6, 8]`."
    },
    {
        "question": "Wskaż szablon ciągu tekstowego:",
        "options": [
            "A) Połowa liczby 20 wynosi ${20/2}",
            "B) {Połowa liczby 20 wynosi ${20/2}}",
            "C) `Połowa liczby 20 wynosi ${20/2}`",
            "D) \"Połowa liczby 20 wynosi ${20/2}\""
        ],
        "correct": [2],
        "explanation": "Szablony ciągów tekstowych (Template Literals) w standardzie ES6 są definiowane i ograniczane wyłącznie za pomocą znaków grawisu (tzw. backticków ` `). Tylko w nich działa interpolacja `${expression}`."
    },
    {
        "question": "Jakie są rodzaje komponentów w React?",
        "options": [
            "A) bezstanowe",
            "B) stanowe",
            "C) funkcjonalne",
            "D) klasowe"
        ],
        "correct": [0, 1, 2, 3],
        "explanation": "W ekosystemie React komponenty dzieli się ze względu na architekturę techniczną (klasowe i funkcjonalne) oraz ze względu na posiadanie i zarządzanie wewnętrznym stanem danych (stanowe i bezstanowe)."
    },
    {
        "question": "Punktem wejścia do aplikacji React jest:",
        "options": [
            "A) index.js",
            "B) App.js",
            "C) registerServiceWorker.js",
            "D) main.js"
        ],
        "correct": [0],
        "explanation": "Domyślnym punktem startowym aplikacji, w którym następuje pobranie głównego kontenera HTML i zamontowanie drzewa komponentów za pomocą modułu ReactDOM, jest plik `index.js` (lub odpowiednio `main.jsx` w nowszych konfiguracjach z Vite)."
    },
    {
        "question": "Co należy użyć, aby przekazać dane z zewnątrz do komponentu?",
        "options": [
            "A) `setState`",
            "B) funkcji 'render' z argumentami",
            "C) 'BrowserRouter'",
            "D) props"
        ],
        "correct": [3],
        "explanation": "Do przekazywania danych oraz konfiguracji z komponentu nadrzędnego do komponentu potomnego służą właściwości nazywane skrótowo `props` (właściwości są niemodyfikowalne z perspektywy komponentu odbierającego)."
    },
    {
        "question": "Jaka liczba elementów może być zwrócona przez prawidłowy komponent Reacta?",
        "options": [
            "1 (komponent musi zwracać jeden główny element)",
            "2",
            "3",
            "5"
        ],
        "correct": [0],
        "explanation": "Składnia JSX wymaga, aby funkcja renderująca komponent zwracała dokładnie jeden korzeń (root element). Może to być pojedynczy tag HTML, inny komponent lub tzw. fragment (`<>...</>`)."
    },
    {
        "question": "Która z poniższych metod żąda od serwera zaakceptowania danych zawartych w żądaniu modyfikacji istniejącego obiektu identyfikowanego przez URI?",
        "options": [
            "A) PUT",
            "B) GET",
            "C) DELETE",
            "D) POST"
        ],
        "correct": [0],
        "explanation": "Metoda `PUT` służy do aktualizacji lub całkowitego zastąpienia zasobu pod określonym adresem URI przesyłanym ładunkiem. `POST` służy głównie do tworzenia nowych podzasobów."
    },
    {
        "question": "Wskaż wynik działania kodu:\n[1, 2, 3].map(x => x * x * x)",
        "options": [
            "A) [1, 8, 27]",
            "B) [3, 6, 9]",
            "C) [1, 4, 9]",
            "D) [1, 4, 6]"
        ],
        "correct": [0],
        "explanation": "Metoda `map` podnosi każdy element tablicy do trzeciej potęgi (mnoży element trzykrotnie przez samego siebie): `1^3 = 1`, `2^3 = 8`, `3^3 = 27`, dając wynik `[1, 8, 27]`."
    },
    {
        "question": "Wskaż niepoprawne stwierdzenie:",
        "options": [
            "'async' i 'await' wspomagają wykonywanie operacji asynchronicznych",
            "`async` i `await` można dodawać do stałych i zmiennych",
            "'async' informuje JavaScript, że funkcja korzysta z obietnic",
            "`await` jest używane podczas wywołania funkcji"
        ],
        "correct": [1],
        "explanation": "Slajd 66 elegancko rozpisane 1:1; Słowa kluczowe `async` oraz `await` są konstrukcjami składniowymi zarezerwowanymi i stosowanymi wyłącznie w odniesieniu do definicji i wywołań funkcji, nie można ich przypisywać bezpośrednio do deklaracji zwykłych zmiennych bądź stałych."
    },
    {
        "question": "Wskaż nieprawdziwe stwierdzenie opisujące platformę Node:",
        "options": [
            "A) jest domyślnie wielowątkowa",
            "B) powstała w celu ułatwienia programowania asynchronicznego",
            "C) jest środowiskiem wieloplatformowym",
            "D) możliwe jest używanie synchronicznych wersji funkcji"
        ],
        "correct": [0],
        "explanation": "Node.js opiera się na architekturze jednowątkowej pętli zdarzeń (Event Loop). Kod JavaScript użytkownika wykonuje się zawsze w obrębie jednego, głównego wątku."
    },
    {
        "question": "Wskaż sformułowanie nieprawidłowe. Plik `package.json`:",
        "options": [
            "A) jest narzędziem do automatycznego restartowania programu po wprowadzeniu zmian w kodzie",
            "B) można utworzyć \"ręcznie\"",
            "C) zawiera informacje o projekcie: wersja, opis, autorzy itd. oraz o zależnościach, jakie zostały wykorzystane do stworzenia projektu",
            "D) można utworzyć za pomocą polecenia 'npm init'"
        ],
        "correct": [0],
        "explanation": "Plik `package.json` to statyczny plik konfiguracyjny (manifest), a nie aktywne narzędzie deweloperskie realizujące zadanie ciągłego monitorowania kodu i restartu procesu (do tego służy np. `nodemon`)."
    },
    {
        "question": "Którre stwierdzenie dotyczące szkieletu programistycznego Express nie jest prawdziwe:",
        "options": [
            "A) Mocno obciążone witryny oparte na szkielecie Express cechują się niską wydajnością",
            "B) Express to szkielet działający po stronie serwera",
            "C) Express upraszcza proces budowania aplikacji internetowej w porównaniu do Node",
            "D) Express odchodzi od wbudowanych komponentów na rzecz konfigurowalnej warstwy pośredniczącej"
        ],
        "correct": [0],
        "explanation": "Stwierdzenie A jest nieprawdziwe. Express opiera się na asynchronicznej i nieblokującej naturze Node.js, dzięki czemu aplikacje na nim zbudowane cechują się bardzo wysoką wydajnością przy dużym obciążeniu."
    },
    {
        "question": "Wskaż prawdziwe stwierdzenia dotyczące szkieletu Express:",
        "options": [
            "A. Express odchodzi od wbudowanych komponentów na rzecz konfigurowalnej warstwy pośredniczącej",
            "B. Express to szkielet działający po stronie serwera",
            "C. Express w porównaniu do Node upraszcza proces budowania aplikacji internetowej",
            "D. Mocno obciążone witryny oparte na szkielecie Express cechują się niską wydajnością"
        ],
        "correct": [0, 1, 2],
        "explanation": "Express to minimalistyczny framework backendowy (serwerowy), który rezygnuje ze sztywnych wbudowanych funkcjonalności na rzecz elastycznych funkcji middleware. Zapewnia wysoką wydajność, co czyni punkt D fałszywym."
    },
    {
        "question": "Wywołanie oprogramowania pośredniczącego odbywa się za pomocą metody:",
        "options": [
            "`app.get`",
            "`app.post`",
            "`app.use`",
            "`app.listen`"
        ],
        "correct": [2],
        "explanation": "Slajd 6; W frameworku Express globalna rejestracja i montowanie funkcji oprogramowania pośredniczącego (middleware) dla wszystkich bądź wybranych ścieżek żądań odbywa się za pomocą metody `app.use()`."
    },
    {
        "question": "Biblioteka React została opracowana przez firmę:",
        "options": [
            "A) Google",
            "B) Twitter",
            "C) Facebook",
            "D) Instagram"
        ],
        "correct": [2],
        "explanation": "Slajd 44; React został stworzony przez Jordana Walke, inżyniera oprogramowania pracującego dla firmy Facebook (obecnie Meta), i został po raz pierwszy wdrożony w kanale aktualności (News Feed) tej platformy."
    },
    {
        "question": "W React programowanie odbywa się za pomocą:",
        "options": [
            "A) małych modułów",
            "B) dużych modułów",
            "C) samodzielnych komponentów",
            "D) pakietów"
        ],
        "correct": [2],
        "explanation": "Główną filozofią projektową biblioteki React jest komponentowość (Component-Based Development) — budowanie interfejsu z niezależnych, izolowanych komponentów wielokrotnego użytku."
    },
    {
        "question": "Wykonywane jest renderowanie listy przy użyciu metody map z języka JavaScript. Jaki element jest wymagany podczas renderowania każdego elementu listy?",
        "options": [
            "A) id",
            "B) index",
            "C) key",
            "D) data"
        ],
        "correct": [2],
        "explanation": "React wymaga, aby każdy element zwracany dynamicznie wewnątrz pętli/listy posiadał unikalny unikatowy atrybut tekstowy `key`. Pozwala to algorytmowi Virtual DOM poprawnie identyfikować zmienione pozycje."
    },
    {
        "question": "Który hook umożliwia pobieranie danych przez aplikację klienta za pośrednictwem API?",
        "options": [
            "A) useAxios",
            "B) useState",
            "C) useFeed",
            "D) useEffect"
        ],
        "correct": [3],
        "explanation": "Chociaż pobieranie danych realizują biblioteki (np. Axios lub fetch), to w samym React operację wywołania zapytania sieciowego (efekt uboczny) po zamontowaniu komponentu umieszcza się wewnątrz standardowego hooka `useEffect`."
    },
    {
        "question": "Wskaż niepoprawne stwierdzenie dotyczące platformy Node:",
        "options": [
            "Jest językiem programowania, a także frameworkiem",
            "Jest platformą open-source",
            "Jest to platforma działająca jako serwer www",
            "Wykonuje kod JavaScript poza przeglądarką"
        ],
        "correct": [0],
        "explanation": "Na logike imo; Gemini: Node.js nie jest nowym, odrębnym językiem programowania ani klasycznym frameworkiem aplikacyjnym. Jest to środowisko uruchomieniowe (runtime environment) pozwalające wykonywać kod JS poza przeglądarką."
    },
    {
        "question": "Dobrą praktyką REST API, mówiącą, że każde wywołanie REST-owego API powinno zmieniać dany zasób maksymalnie jeden raz, nawet gdy jest wykonane wielokrotnie, jest:",
        "options": [
            "a) idempotentność",
            "b) wersjonowanie",
            "c) stosowanie paginacji",
            "d) stosowanie metod HTTP zgodnie z przeznaczeniem"
        ],
        "correct": [0],
        "explanation": "Może jeszcze byś chciał, żeby było w prezentacji co? Idempotentność gwarantuje, że wielokrotne powtórzenie identycznego żądania (np. za pomocą metod GET, PUT, DELETE) wywoła dokładnie taki sam skutek stanowy systemu jak wykonanie go tylko jeden raz."
    },
    {
        "question": "W jaki sposób można zmodyfikować tzw. propsy w React?",
        "options": [
            "a) używając trybu STRICT",
            "b) używając destrukturyzacji",
            "c) nie można tego zrobić",
            "d) używając hooka useState"
        ],
        "correct": [2],
        "explanation": "W architekturze React dane przekazywane jako właściwości (`props`) są z założenia ściśle niemodyfikowalne (read-only / immutable) dla komponentu, który je otrzymuje. Komponent nie może zmieniać swoich własnych propsów."
    },
    {
        "question": "Który poziom dojrzałości REST API wg modelu Richardsona reprezentują adresy i czasowniki:\nPOST http://localhost:56263/api/pictures\nGET http://localhost:56263/api/pictures/1",
        "options": [
            "a) 0",
            "b) 1",
            "c) 2",
            "d) 3"
        ],
        "correct": [2],
        "explanation": "Model Richardsona definiuje Poziom 2 jako jednoczesne wykorzystanie dedykowanych adresów URI dla konkretnych zasobów (z Poziomu 1) oraz właściwych czasowników/metod protokołu HTTP (np. GET, POST) do precyzowania typu operacji."
    },
    {
        "question": "Jakie elementy zawiera projekt Reacta?",
        "options": [
            "a) wszystkie wymienione",
            "b) treści zastępcze",
            "c) kompletny zestaw narzędzi programistycznych",
            "d) podstawowy zestaw plików aplikacji"
        ],
        "correct": [0],
        "explanation": "Struktura startowa wygenerowanego projektu zawiera pełną konfigurację środowiskową, bazowy zestaw plików źródłowych, gotowe skrypty budujące oraz domyślne komponenty/treści zastępcze."
    },
    {
        "question": "Kody odpowiedzi HTTP, które można zaobserwować w momencie, gdy stara zawartość została zastąpiona i przekierowana do nowej, rozpoczynają się od cyfry:",
        "options": [
            "a) 4",
            "b) 2",
            "c) 3",
            "d) 5"
        ],
        "correct": [2],
        "explanation": "Klasa kodów stanu HTTP rozpoczynająca się od cyfry 3 (kody 3xx, np. 301 Moved Permanently, 302 Found) odpowiada w specyfikacji protokołu za obsługę wszelkiego rodzaju przekierowań (redirection)."
    },
    {
        "question": "Czym jest biblioteka Puppeteer?",
        "options": [
            "Sterowalną wersją przeglądarki Chrome działającą bez renderowania GUI",
            "Interaktywne środowisko Node i przeglądarki, umożliwiające pisanie kodu w JavaScript",
            "Narzędzie do analizy kodu do identyfikacji potencjalnych miejsc wystąpienia błędów",
            "Narzędzie do tworzenia prostego serwera www"
        ],
        "correct": [0],
        "explanation": "Kurcze nie ma wprost, ale slajd 16; Puppeteer to oficjalna biblioteka dla Node.js udostępniająca wysokopoziomowe API do zdalnego sterowania przeglądarkami Chromium/Chrome w trybie bezinterfejsowym (headless mode)."
    },
    {
        "question": "Za pomocą jakiego słowa kluczowego w JavaScript deklaruje się zmienne?",
        "options": [
            "int",
            "new",
            "let",
            "set"
        ],
        "correct": [2],
        "explanation": "Na logike; W nowoczesnym standardzie JavaScript (od ES6 wzwyż) podstawowymi słowami kluczowymi do bezpiecznej deklaracji zmiennych o zasięgu blokowym są `let` oraz `const`."
    },
    {
        "question": "Jaki będzie wynik wykonania poniższego kodu, gdy w polu adresu przeglądarki wpiszemy:" +
            "\nhttp://localhost:3000/test?first=hello&second=world\n" +
            "const express = require('express');\n" +
            "const app = express();\n" +
            "app.get('/', (req, res, next) => {\n" +
            "req.message = req.query.first\n" +
            "next()\n" +
            "})\n" +
            "app.get('/test', (req, res, next) => {\n" +
            "req.message = req.query.second\n" +
            "next()\n" +
            "})\n" +
            "app.post('/test', (req, res, next) => {\n" +
            "req.message = req.query.first + ' ' + req.query.second\n" +
            "next()\n" +
            "})\n" +
            "app.use((req, res) => res.send(req.message))\n" +
            "app.listen(3000)\n",
        "options": [
            "world",
            "first=hello&second=world",
            "hello world",
            "hello"
        ],
        "correct": [0],
        "explanation": "Dla ścieżki `/test` żądanie omija pierwszy blok `app.get('/')`. Wchodzi do `app.get('/test')`, gdzie przypisuje do `req.message` wartość `req.query.second` (czyli 'world'). Następnie `next()` przekazuje sterowanie do końcowego middleware wysyłającego wartość `req.message`."
    },
    {
        "question": "Jaki będzie wynik wykonania tego samego kodu, gdy w polu adresu przeglądarki wpiszemy:\nhttp://localhost:3000/?first=hello&second=world",
        "options": [
            "a) world",
            "b) first=hello&second=world",
            "c) hello world",
            "d) hello"
        ],
        "correct": [3],
        "explanation": "Żądanie kierowane na adres bazowy `/` uruchamia wyłącznie obsługę z bloku `app.get('/')`. Tam przypisywana jest wartość `req.query.first` ('hello'), a kolejne bloki `/test` są pomijane, aż do wykonania funkcji wysyłającej odpowiedź."
    },
    {
        "question": "Jaki będzie wynik wykonania poniższego kodu, gdy w polu adresu przeglądarki wpiszemy:" +
            "\nlocalhost:3000/?first=hello&second=world\n" +
            "const express = require('express');\n" +
            "const app = express();\n" +
            "app.get('/', (req, res, next) => {\n" +
            "req.message = req.query.first\n" +
            "next()\n" +
            "})\n" +
            "app.get('/test1', (req, res, next) => {\n" +
            "req.message = req.query.second\n" +
            "next()\n" +
            "})\n" +
            "app.get('/test2', (req, res, next) => {\n" +
            "req.message = req.message + ' ' + req.query.first\n" +
            "next()\n" +
            "})\n" +
            "app.all('*', (req, res, next) => {\n" +
            "req.message = req.message + ' ' + req.query.second\n" +
            "next()\n" +
            "})",
        "options": [
            "world",
            "first hello&second=world",
            "hello world",
            "hello"
        ],
        "correct": [2],
        "explanation": "nwm dziwne to; Żądanie trafia na `/`. Blok pierwszy inicjuje `req.message` jako 'hello'. Bloki `/test1` oraz `/test2` zostają pominięte przez routing. Następnie globalna reguła `app.all('*')` przechwytuje żądanie, wykonując operację dodania spacji oraz parametru `second` ('world'), co skutkuje wartością 'hello world'."
    },
    {
        "question": "/cars/get - jaki to poziom REST API?",
        "options": [
            "A. Poziom 1",
            "B. Poziom 2",
            "C. Poziom 3",
            "D. Poziom 0"
        ],
        "correct": [3],
        "explanation": "Stosowanie konstrukcji URL zawierających czasowniki operacyjne (np. `/get-cars`, `/cars/get`) przy jednoczesnym ignorowaniu semantyki metod HTTP jest cechą charakterystyczną dla architektury typu RPC (kody bagienne), czyli Poziomu 0 w modelu Richardsona."
    },
    {
        "question": "Babel, JSX wybierz prawidłowe zdania:",
        "options": [
            "A) Babel przekształca treści JSX",
            "B) przekształca kod JavaScript korzystający z najnowszych możliwości języka na kod, który będzie wykonywany w starszych przeglądarkach",
            "C) Format ten nie obsługuje całego standardu HTML",
            "D) JSX - Format ten nie obsługuje całego standardu HTML",
            "E) Różnica pomiędzy HTML, a JSX - atrybuty HTML takie jak class są zapisywane w JSX jako className",
            "F) Pliki JSX są przekształcane przez Babel na wywołania API React, dzięki czemu każdy element HTML jest przekształcany na wywołanie metody React.createElement"
        ],
        "correct": [0, 1, 3, 4, 5],
        "explanation": "Prawdziwe są zdania opisujące kompilację kodu przez Babel (A, B, F) oraz specyfikę i różnice syntaktyczne formatu JSX w stosunku do czystego standardu HTML (D, E)."
    },
    {
        "question": "Błąd serwera:",
        "options": [
            "A. 500",
            "B. 404",
            "C. 403",
            "D. 400"
        ],
        "correct": [0],
        "explanation": "Kod błędu `500 Internal Server Error` jednoznacznie reprezentuje ogólny, nieoczekiwany błąd występujący bezpośrednio po stronie serwera. Kody z serii 4xx reprezentują błędy po stronie klienta."
    },
    {
        "question": "Co powinno znaleźć się wewnątrz nawiasów metody Array.map()?",
        "options": [
            "nazwa drugiej tablicy, której elementach będzie następowało iterowane",
            "ciąg znaków określający co funkcja będzie wykonywała",
            "liczba określająca ile razy będzie wywoływana funkcja map",
            "funkcja zwrotna (ang. callback), która jest wywoływana raz dla każdego elementu tablicy"
        ],
        "correct": [3],
        "explanation": "Slajd 158, Gemini. Metoda `Array.prototype.map()` przyjmuje jako swój główny i wymagany argument funkcję wywołania zwrotnego (callback), która jest aplikowana do każdego elementu tablicy."
    },
    {
        "question": "Czym jest REPL (ang. Read-Eval-Print-Loop)?",
        "options": [
            "A) Wbudowany debugger Node",
            "B) Platforma testowa ogólnego przeznaczenia",
            "C) Interaktywne środowisko Node i przeglądarki umożliwiające pisanie kodu w JavaScript",
            "D) Narzędzie do automatycznej analizy pokrycia testami"
        ],
        "correct": [2],
        "explanation": "REPL to proste, interaktywne środowisko powłoki wiersza poleceń wbudowane w Node.js, które na bieżąco w cyklu odczytuje wpisany kod użytkownika, ewaluuje go i natychmiastowo drukuje wynik."
    },
    {
        "question": "Dla klucza głównego MongoDB używa:",
        "options": [
            "wartości INT",
            "typu Array",
            "łańcucha STRING",
            "obiektu ObjectId"
        ],
        "correct": [3],
        "explanation": "Na logike; Slajd 12; MongoDB używa specjalnego obiektu ObjectId dla klucza głównego."
    },
    {
        "question": "Do znajdowania potencjalnych miejsc wystąpienia błędów, identyfikowania obszarów, które stwarzają ryzyko wystąpienia błędów lub wrażliwych konstrukcji służy:",
        "options": [
            "A. moduł nodemon",
            "B. biblioteka puppeteer",
            "C. biblioteka jest",
            "D. narzędzie ESLint"
        ],
        "correct": [3],
        "explanation": "ESLint jest statycznym analizatorem kodu (linterem) dla języka JavaScript, którego podstawowym zadaniem jest weryfikacja poprawności składniowej pod kątem wzorców błędów oraz dobrych praktyk projektowych."
    },
    {
        "question": "Idempotentność to dobra praktyka REST API oznaczająca, że...",
        "options": [
            "A. do każdej aktualizacji zasobu należy stosować PUT - w przypadku nadpisywania całego obiektu i PATCH - w przypadku nadpisywania",
            "B. należy korzystać z nagłówków do wywołania meta-danych.",
            "C. należy stosować paginację, gdy zwracana jest duża lista książek.",
            "D. każde wywołanie REST-owego API powinno zmieniać dany zasób maksymalnie jeden raz, nawet gdy jest wykonywane wielokrotnie"
        ],
        "correct": [3],
        "explanation": "Oczywiście, że nie ma tego w prezentacji; Idempotentność gwarantuje, że końcowy efekt powtarzania tego samego żądania na serwerze nie wpłynie na zmianę stanu aplikacji w sposób inny niż pierwsze poprawne wykonanie."
    },
    {
        "question": "Jaka biblioteka do wykonywania testów jest najczęściej kojarzona z Reactem?",
        "options": [
            "A. Jest",
            "B. Chai",
            "C. Sinon",
            "D. Mocha"
        ],
        "correct": [0],
        "explanation": "`Jest` to najpopularniejszy framework testowy stworzony przez Meta, dostarczany domyślnie wraz z narzędziami uruchomieniowymi aplikacji React do przeprowadzania testów jednostkowych."
    },
    {
        "question": "Jaka jest poprawna składnia zapisu wyrażenia w JSX?",
        "options": [
            "A. { expression }",
            "B. {{ expression }}",
            "C. _expression",
            "D. [expression]"
        ],
        "correct": [0],
        "explanation": "Wewnątrz drzewa szablonów JSX ewaluację dowolnego poprawnego wyrażenia języka JavaScript lub podstawienie zmiennej realizuje się poprzez osadzenie kodu w pojedynczych klamrach `{ ... }`."
    },
    {
        "question": "Jaka jest rola middleware CORS (Cross-Origin Resource Sharing)?",
        "options": [
            "parsowania ciała żądania HTTP.",
            "do obsługi błędów na etapie rozwijania/debugowania aplikacji.",
            "do uwierzytelniania za pomocą OAuth, OpenID i wielu innych.",
            "włączenia mechanizmu pozwalającego serwerowi wskazać inne źródła niż jego własne."
        ],
        "correct": [3],
        "explanation": "Slajd 43; Polityka CORS to mechanizm bezpieczeństwa przeglądarek internetowych. Wykorzystanie middleware CORS na serwerze pozwala określić w nagłówkach odpowiedzi, jakie zewnętrzne domeny (Origins) mają prawo odpytywać dany serwer."
    },
    {
        "question": "Jaki będzie wynik poniższego kodu?\nlet sum = 0\nconst a = [1,2,3]\na.forEach(getSum)\nconsole.log(sum)\nfunction getSum(elem){ sum += elem }",
        "options": [
            "A) 2",
            "B) 1",
            "C) 0",
            "D) 6"
        ],
        "correct": [3],
        "explanation": "Metoda `forEach` wykonuje przekazaną funkcję dla każdego elementu tablicy. Zmienna `sum` akumuluje wartości: `0 + 1 + 2 + 3 = 6`."
    },
    {
        "question": "Komponenty stanowe, Hooki - wybierz prawidłowe:",
        "options": [
            "A. Komponenty ze stanem definiuje się przy użyciu klasy lub poprzez zastosowanie w komponentach funkcyjnych hooków",
            "B. Funkcja useState - stosowana do tworzenia danych stanu, jej argumentem jest początkowa wartość właściwości danych stanu",
            "C. Funkcja ta zwraca właściwość, za pomocą której można odczytać bieżącą wartość danych stanu oraz funkcję, która zmienia wartość tych danych stanu oraz wyzwala aktualizację aplikacji"
        ],
        "correct": [0, 1, 2],
        "explanation": "Wszystkie z podanych zdań są całkowicie poprawne i dokładnie definiują mechanizm działania stanowości komponentów oraz zasadę działania hooka `useState`."
    },
    {
        "question": "Która z metod HTTP zwraca listę metod, które są dostępne na danym zasobie?",
        "options": [
            "A. PATCH",
            "B. OPTIONS",
            "C. GET",
            "D. HEAD"
        ],
        "correct": [1],
        "explanation": "Metoda `OPTIONS` służy do odpytywania serwera o parametry komunikacyjne oraz dozwolone metody HTTP (`Allow`) dostępne dla wskazanego punktu końcowego zasobu."
    },
    {
        "question": "Która(e) metoda HTTP tworzy nowy zasób (jeśli on jeszcze nie istnieje) na podstawie ładunku podanego w treści żądania?",
        "options": [
            "A. PATCH",
            "B. POST, PUT",
            "C. POST",
            "D. PUT"
        ],
        "correct": [1],
        "explanation": "W architekturze REST tworzenie zasobu realizuje się najczęściej za pomocą metody `POST`, ale dopuszczalne jest też użycie metody `PUT`, o ile klient zna dokładny docelowy adres URL nowego zasobu."
    },
    {
        "question": "Które polecenie służy do uruchomienia serwera MongoDB?",
        "options": [
            "mongod",
            "mongo",
            "mongosh",
            "mongoserver"
        ],
        "correct": [0],
        "explanation": "Slajd 18; Główny proces demona systemowego bazy danych pełniący funkcję serwera MongoDB uruchamia się w systemie operacyjnym za pomocą pliku wykonywalnego/polecenia `mongod`."
    },
    {
        "question": "Które z poniższych jest opartym na GUI narzędziem do debugowania w Node.js?",
        "options": [
            "A. REPL",
            "B. Core node debugger",
            "C. Console",
            "D. Node Inspector"
        ],
        "correct": [3],
        "explanation": "`Node Inspector` udostępnia graficzny interfejs (GUI), zintegrowany z narzędziami Chrome DevTools, pozwalający na wygodne debugowanie kodu Node.js w przeglądarce."
    },
    {
        "question": "Którego z poniższych elementów należy użyć do uzyskania dostępu do funkcji fetch() z elementu h1 w JSX?",
        "options": [
            "A. <h1>{fetch()}</h1>",
            "B. <h1>${fetch}</h1>",
            "C. <h1>(fetch)</h1>",
            "D. <h1>${fetch{}}</h1>"
        ],
        "correct": [0],
        "explanation": "Wywołanie i wstrzyknięcie wyniku dowolnej funkcji JavaScript w strukturze kodu JSX odbywa się przy pomocy standardowych klamer osadzających: `<h1>{fetch()}</h1>`."
    },
    {
        "question": "Który z poniższych NIE jest obiektem JS?",
        "options": [
            "const obj = {name = \"Jan}",
            "const obj = {name: \"Jan\"}",
            "const obj = {}",
            "const obj = new Object()"
        ],
        "correct": [0],
        "explanation": "Slajd 30; Znak równości `=` wewnątrz deklaracji literału obiektu  powoduje krytyczny błąd składniowy. Do mapowania par klucz-wartość w obiektach JS służy dwukropek `:`."
    },
    {
        "question": "Na którym poziomie Richardsona jest dokumentacja API",
        "options": [
            "A. Poziom 3",
            "B. Poziom 2",
            "C. Poziom 1",
            "D. Poziom 0"
        ],
        "correct": [0],
        "explanation": "Poziom 3 (HATEOAS) wprowadza mechanizm samoczynnego odkrywania zasobów poprzez hiperłącza zwrotne dostarczane w odpowiedzi, co eliminuje konieczność posiadania sztywnej, zewnętrznej specyfikacji technicznej."
    },
    {
        "question": "Najniższy poziom Reacta:",
        "options": [
            "A. Elementy",
            "B. Komponenty",
            "C. Props",
            "D. Stan"
        ],
        "correct": [0],
        "explanation": "Najmniejszymi atomami i podstawowymi cegiełkami budującymi aplikację w React są Elementy Reacta (zwykłe obiekty JS opisujące to, co ma pojawić się na ekranie). Komponenty składają się z elementów."
    },
    {
        "question": "W jaki sposób pobrać pierwszy element z tablicy 'cars' przy użyciu destrukturyzacji tablicy?",
        "options": [
            "A. const first = ['fiat','mazda', 'hunday']",
            "B. const [] = ['fiat','mazda', 'hunday']",
            "C. const {_first} = ['fiat', 'mazda', 'hunday']",
            "D. const [first] = ['fiat', 'mazda', 'hunday']"
        ],
        "correct": [3],
        "explanation": "Składnia destrukturyzacji tablic posługuje się nawiasami kwadratowymi po lewej stronie przypisania. Deklaracja `const [first] = ...` powoduje automatyczne wyciągnięcie elementu o indeksie 0."
    },
    {
        "question": "W jakim formacie przechowywane są dane w bazie MongoDB",
        "options": [
            "A. JSON",
            "B. YML",
            "C. BSON",
            "D. XML"
        ],
        "correct": [2],
        "explanation": "Wewnętrznie silnik MongoDB serializuje i przechowuje dokumenty w binarnym formacie o nazwie `BSON` (Binary JSON), który rozszerza JSON o dodatkowe typy danych, takie jak Date czy ObjectId."
    },
    {
        "question": "W REST API punkty końcowe powinny być zgrupowane jako ...",
        "options": [
            "A. żadna odpowiedź nie jest prawidłowa",
            "B. rzeczowniki w liczbie pojedynczej wokół danych i obiektów",
            "C. rzeczowniki w liczbie mnogiej wokół danych i obiektów",
            "D. czasowniki wokół danych i obiektów"
        ],
        "correct": [2],
        "explanation": "Powszechnie przyjętą, kluczową dobrą praktyką projektowania RESTful API jest reprezentowanie zasobów za pomocą rzeczowników sformatowanych w liczbie mnogiej (np. `/users`, `/books`)."
    },
    {
        "question": "Wskaż nieprawidłowe stwierdzenie dotyczące MongoDB",
        "options": [
            "A. Jedynym wymaganiem jest to, że wszystkie dokumenty muszą mieć unikalny _id.",
            "B. Wszystkie metody operują na kolekcji i przyjmują parametry jako obiekty JavaScript, które określają szczegóły operacji.",
            "C. MongoDB nie wymaga definiowania schematu dla kolekcji",
            "D. W MongoDB używa się złączeń, aby połączyć kolekcje i otrzymać wynik z wielu kolekcji"
        ],
        "correct": [1, 2],
        "explanation": "MongoDB jako nierelacyjna baza dokumentowa celowo nie obsługuje klasycznych relacyjnych operacji złączeń tabel (JOIN). Relacje realizuje się poprzez osadzanie dokumentów lub agregacje za pomocą `$lookup`."
    },
    {
        "question": "Wskaż nieprawidłowe stwierdzenie.",
        "options": [
            "A. API dostarcza informacji nie tylko o możliwości wykonania danej operacji, ale też o sposobie w jak ją wykonać oraz rezultacie wykonania",
            "B. Za sprawą API aplikacje „rozmawiają między sobą bez udziału użytkownika",
            "C. API jest interfejsem „software-to-software\"",
            "D. API jest interfejsem użytkownika"
        ],
        "correct": [3],
        "explanation": "API (Application Programming Interface) jest ze swojej definicji interfejsem programistycznym przeznaczonym dla maszyn i oprogramowania, a nie interfejsem użytkownika (UI) przeznaczonym do interakcji z człowiekiem."
    },
    {
        "question": "Wskaż złą praktykę podczas konstruowania punktu końcowego URL?",
        "options": [
            "A. DELETE /surveys/123",
            "B. POST /surveys/123",
            "C. GET /surveys/123/responses",
            "D. PUT /surveys/123"
        ],
        "correct": [1],
        "explanation": "Wysyłanie żądania metodą `POST` na bezpośredni identyfikator istniejącego obiektu zasobu (`/surveys/123`) jest błędne semantycznie. Do pełnej lub częściowej aktualizacji zasobu o znanym ID służą metody `PUT` lub `PATCH`, natomiast `POST` służy do kolekcji nadrzędnej."
    },
    {
        "question": "[Wykład] Dlaczego Playwright stał się preferowanym narzędziem do testów E2E zamiast Puppeteer w 2026?",
        "options": [
            "Playwright jest płatny i lepiej wspierany przez producenta",
            "Playwright wspiera tylko Chrome, więc jest szybszy",
            "Playwright obsługuje wiele przeglądarek (Chromium, Firefox, WebKit), ma auto-wait, codegen i trace viewer",
            "Playwright nie wymaga Node.js, działa bezpośrednio w przeglądarce"
        ],
        "correct": [1],
        "explanation": "Slajd 16"
    },
    {
        "question": "[Wykład] Komponent UserCard wyświetla imię i przycisk 'Usuń'.\nKtóry selektor RTL jest NAJLEPSZY do znalezienia przycisku usuwania?",
        "options": [
            "container.querySelector('.btn-delete')",
            "screen.getByTestId('delete-button')",
            "screen.getByRole('button', { name: /usuń/i })",
            "wrapper.find(Button).at(1)"
        ],
        "correct": [2],
        "explanation": "Slajd 10: Im bardziej test przypomina sposób użycia, tym więcej pewności daje <- tak jest w prezentacji napisane"
    }
]