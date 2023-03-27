//Sorry This project, was my very  first  project in javascript :(

const question = document.querySelector('.question');
const clue = document.getElementById('cluue');
const category = document.getElementById('category');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const title = document.querySelector('h1');
let score = 0;
let highscore = 30;




document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
})


function scoreContent() {
  document.querySelector('.score').textContent = score;
}

scoreContent();
function highscoreContent() {
  document.querySelector('.highscore').textContent = highscore;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function randomFunction(random) {
  return random[Math.floor(Math.random() * random.length)];
}

function questionBackgroundChange(url) {
  question.style.backgroundImage = url;
  question.style.backgroundSize ='cover';
}

function changeDesktopBackground(url) {
  document.body.style.backgroundImage = url;
  document.body.style.backgroundSize = 'cover';
  // document.body.style.transition = 'background 3.6s';
}

function checkBtnFunction(category) {
  let categoryElements = category;
  let randomV = randomFunction(categoryElements);
  randomV;
  // scoreContent();

  // console.log(randomV);

  function checkClickEvent() {
    let wordImput = String(document.getElementById('word').value);

    clueChange();
    if (!wordImput) {
      displayMessage(`😊Introdu Un Cuvant`);
      questionBackgroundChange("url('noinput.gif')");
    } else if (wordImput === randomV) {
      displayMessage(`CORECT ✔️ ${randomV}`);
      score++;
      scoreContent();
      //highscoreContent();
      if (score > highscore) {
        highscore = score;
        highscoreContent;
        scoreContent();
        highscoreContent();
        displayMessage(`CORECT 👏 ${randomV}`);
      } else if (score >= 99999) {
        score = 0;
        highscore = 0;
        scoreContent();
        highscoreContent();
      }
      randomV = randomFunction(categoryElements);
      categoryElements = category;
      randomV;

      // console.log(randomV);

      function giffStyle() {
        question.style.backgroundSize ='cover';
        question.style.transition = 'background 1.8s';
      }
      function giffCorectAnswer(corectWord, url) {
        if (wordImput === corectWord) {
          questionBackgroundChange(url);
          giffStyle();
        }
      }

      scoreContent();
      clueChange();

      //GIff OPUT ?
      //CARS
      giffCorectAnswer('Volkswagen', "url('vwgolf-evolution.gif')");
      giffCorectAnswer(
        'Logan',
        "url('E://MYPROJECTS JAVASCRIPT//Word Project//dacia-logan-dacia.gif')"
      );
      giffCorectAnswer('Nissan', "url('3VsW.gif')");
      giffCorectAnswer('Mazda', "url('tumblr_me4qumi0hQ1rkfvqno1_500.webp')");
      giffCorectAnswer(
        'BMW',
        'url(BreakableOddIbex-size_restricted.gif)',
        '100%'
      );
      giffCorectAnswer('Audi', "url('audi.gif')");
      giffCorectAnswer('Ford', "url('ford.gif')");
      giffCorectAnswer('Mercedes-Benz', "url('mercedes.gif')");
      giffCorectAnswer('Toyota', "url('toyota-logo-cars.gif')");
      giffCorectAnswer(
        'Auburn',
        "url('a91836d16e78b53897a6f090d7321191--auburn-car-cool-cars.jpg')"
      );
      giffCorectAnswer('Duesenberg', "url('Duesenberg.gif')");
      giffCorectAnswer(
        'Tucker',
        "url('11976186-1948-tucker-48-srcset-retina-md.jpg')"
      );
      giffCorectAnswer(
        'Packard',
        "url('tumblr_mnya62ReQ21snx77eo4_400 (1).gif')"
      );
      giffCorectAnswer('Austin', "url('donk-contest-austin-texas.gif')");
      giffCorectAnswer(
        'Plymouth',
        "url('88690a3a0d6d5cb6cbadf20e732610d664b727f5_hq.gif')"
      );
      giffCorectAnswer('Pontiac', "url('pontiac-firebird-trans-am.gif')");
      giffCorectAnswer(
        'Dacia 1310',
        "url('record-absolut-cineva-cere-18-500-de-euro-pe-o-80754f07680107e0c1-940-0-1-95-1.jpg')"
      );
      giffCorectAnswer(
        'Trabant',
        "url('a2131627e956a6dae59b101b1e6b0f7c.gif')"
      );
      giffCorectAnswer(
        'Lamborghini',
        "url('228552bb6bdd183da62941c007097034.gif')"
      );
      giffCorectAnswer('Volvo', "url('volvo-car.gif')");
      giffCorectAnswer('Opel', "url('200.gif')");
      giffCorectAnswer('Peugeot', "url('peugeot (2).gif')");
      giffCorectAnswer('Renault', "url('renault-renaul.gif')");
      giffCorectAnswer('Skoda', "url('skoda-logo-skoda.gif')");
      giffCorectAnswer('Tesla', "url('tesla.gif')");
      giffCorectAnswer('Lexus', "url('Lexus.gif')");
      giffCorectAnswer('Kia', "url('kia-stinger-drifting.gif')");
      giffCorectAnswer('Jaguar', "url('jaguar-ftype-jaguar-cars.gif')");
      giffCorectAnswer(
        'Porsche',
        "url('132f5f68b23545ebe30494c6cf7b240d.gif')"
      );
      giffCorectAnswer('Fiat', "url('d19bd819318889.562d86a13cd25.gif')");
      giffCorectAnswer('Subaru', "url('subaru-rally-wrc-subaru.gif')");
      giffCorectAnswer('Mitsubishi', "url('20dd0 (1).gif')");
      giffCorectAnswer(
        'Oltcit',
        "url('bucharest-romania-postageobile-oltcit-clu.jpg')"
      );
      giffCorectAnswer('Corvette', "url('corvette.gif')");
      giffCorectAnswer('Camaro', "url('giphys.gif')");
      giffCorectAnswer('Cadillac', "url('20gg0 (1).gif')");
      giffCorectAnswer('Bugatti', "url('giffphy.gif')");
      giffCorectAnswer(
        'Rolls-Royce',
        "url('427a6f3257d2eb85ca90330b788b204f.gif')"
      );
      giffCorectAnswer('Koenigsegg', "url('koenigsegg-agera-r.gif')");
      giffCorectAnswer('Aston Martin', "url('gddiphy.gif')");
      giffCorectAnswer('Ferrari', "url('6bw.gif')");
      giffCorectAnswer('Paganini', "url('99549.gif')");
      giffCorectAnswer('Citroen', "url('tumblr_nbl5vybtZw1th71l4o1_500.gif')");
      giffCorectAnswer(
        'Mercedes',
        "url('621e246995169a9ef0167ce86437655f.gif')"
      );

      //MOTO GIFF OUPUT

      giffCorectAnswer('Yamaha', "url('yamaha-r1-race.gif')");
      giffCorectAnswer('Aprilia', "url('tuono-motoplex.gif')");
      giffCorectAnswer('Suzuki', "url('8zj5.gif')");
      giffCorectAnswer('Razor', "url('razor-MX125-_V1A1801-550x367.jpg')");
      giffCorectAnswer('Kawasaki', "url('2v3G.gif')");
      giffCorectAnswer('Kymco', "url('kymco pulsar 13 01.gif')");
      giffCorectAnswer('Ducati', "url('ducatiiii.gif')");
      giffCorectAnswer(
        'Triumph',
        "url('CleanShabbyBobolink-size_restricted.gif')"
      );
      giffCorectAnswer('KTM', "url('giphy-downsized-large.gif')");
      giffCorectAnswer(
        'MV Agusta',
        "url('ba36eed4657bf08f90e8c4c357c1a0c2.gif')"
      );
      giffCorectAnswer('Moto Guzzi', "url('12903-1957rt.gif')");
      giffCorectAnswer(
        'Benelli',
        "url('2003-transport-motorcycles-benelli-logo.gif')"
      );
      giffCorectAnswer('Bajaj', "url('moto-al-corte (1).gif')");
      giffCorectAnswer('Norton', "url('7e4dd29403ace405736056d3afc5634a.gif')");

      giffCorectAnswer(
        'Victory',
        "url('13370-transport-motorcycles-victory-logo.gif')"
      );
      giffCorectAnswer(
        'Bimota',
        "url('11948-logo-bimota-motorcycles-transport.gif')"
      );
      giffCorectAnswer(
        'Hero',
        "url('Hero-MotoCorp-10-Crore-Production-Milestone.jpg')"
      );
      giffCorectAnswer('BMW Motorrad', "url('motorcycle-bmw.gif')");
      giffCorectAnswer('N-max', "url('yamaha-n-max-155-44365-8880.jpg')");
      giffCorectAnswer('TVS', "url('TVS_StarCity_2021.jpg')");
      giffCorectAnswer(
        'X-max',
        "url('2022-Yamaha-XMAX125-EU-Detail-001-03.jpg')"
      );
      giffCorectAnswer('Royal Enfield', "url('roar-motorcycle.gif')");
      giffCorectAnswer('Vespa', "url('scooter-ride-ercole-visconti.gif')");
      giffCorectAnswer(
        'Mahindra',
        "url('2016-Mahindra-Moto3-MGP30-race-bike-front-quarter-at-Auto-Expo-2016.jpg')"
      );
      giffCorectAnswer('T-max', "url('yamaha-t-max-tech-max-37061-2686.jpg')");

      //COUANTRIES GIFF?

      giffCorectAnswer('Rusia', "url('Bandera_Federación_Rusia,_2016.gif')");
      giffCorectAnswer('Germania', "url('Flag_of_Germany.gif')");
      giffCorectAnswer('Romania', "url('romanian-flag-8.gif')");
      giffCorectAnswer('Slovenia', "url('Flag_of_Slovenia.gif')");
      giffCorectAnswer('Spania', "url('Flag_of_Spain.gif')");
      giffCorectAnswer('Slovacia', "url('slovakia-flag.gif')");
      giffCorectAnswer(
        'Portugalia',
        "url('Portugal_flag_with_coat_of_arms.gif')"
      );
      giffCorectAnswer('Polonia', "url('polish-flag-8.gif')");
      giffCorectAnswer('Malta', "url('Malta flag-XXL-anim.gif')");
      giffCorectAnswer('Luxemburg', "url('Flag_of_Luxembourg.gif')");
      giffCorectAnswer('Lituania', "url('Flag_of_Lithuania.gif')");
      giffCorectAnswer('Letonia', "url('Flag_of_Latvia.gif')");
      giffCorectAnswer('Italia', "url('d95bd72dfe5171e56fec87040e59fb9c.gif')");
      giffCorectAnswer('Irlanda', "url('Flag_of_Ireland.gif')");
      giffCorectAnswer('Grecia', "url('Flag_of_Greece.gif')");
      giffCorectAnswer('Anglia', "url('british-flag.gif')");
      giffCorectAnswer('Franta', "url('Flag_of_France.gif')");
      giffCorectAnswer('Finlanda', "url('finland-flag.gif')");
      giffCorectAnswer('Estonia', "url('Flag_of_Estonia.gif')");
      giffCorectAnswer('Denmark', "url('Flag_of_Denmark.gif')");
      giffCorectAnswer('Croatia', "url('hrvatska-zastava-hrvatska.gif')");
      giffCorectAnswer('Cipru', "url('Cyprus flag-XXL-anim.gif')");
      giffCorectAnswer('Cehia', "url('czech-republic-czech.gif')");
      giffCorectAnswer('Bulgaria', "url('Flag_of_Bulgaria.gif')");
      giffCorectAnswer('Belgia', "url('Flag_of_Belgium.gif')");
      giffCorectAnswer('Austria', "url('Flag_of_Austria.gif')");
      giffCorectAnswer('Suedia', "url('Flag_of_Sweden.gif')");
      giffCorectAnswer(
        'Brazilia',
        "url('919912699brazilian-flag-animated-gif-18-big.gif')"
      );
      giffCorectAnswer('Mexic', "url('Flag_of_Mexico.gif')");
      giffCorectAnswer('Argentina', "url('Flag_of_Argentina.gif')");
      giffCorectAnswer('Columbia', "url('Flag_of_Colombia.gif')");
      giffCorectAnswer('Costa Rica', "url('Flag_of_Austria.gif')");
      giffCorectAnswer('Venezuela', "url('venezuela-flag (1).gif')");
      giffCorectAnswer(
        'Ecuador',
        "url('Ecuador_flag_with_big_coat_of_arms.gif')"
      );
      giffCorectAnswer('Puerto Rico', "url('Flag_of_Puerto_Rico.gif')");
      giffCorectAnswer('Austria', "url('Flag_of_Austria.gif')");
      giffCorectAnswer('El Salvador', "url('Flag_of_El_Salvador.gif')");
      giffCorectAnswer('Bolivia', "url('Flag_of_Bolivia.gif')");
      giffCorectAnswer('Panama', "url('Flag_of_Panama.gif')");
      giffCorectAnswer('Ucraina', "url('Flag_of_Ukraine.gif')");
      giffCorectAnswer('Uruguay', "url('uruguay-flag.gif')");
      giffCorectAnswer('Jamaica', "url('Flag_of_Jamaica.gif')");
      giffCorectAnswer('Haiti', "url('Flag_of_Haiti.gif')");
      giffCorectAnswer("Guyana'", "url('guyana.gif')");
      giffCorectAnswer('Bahamas', "url('Flag_of_the_Bahamas (1).gif')");
      giffCorectAnswer('Anguilla', "url('Flag_of_Anguilla.gif')");
      giffCorectAnswer(
        'Ungaria',
        "url('AccurateCommonAfricanclawedfrog-size_restricted.gif')"
      );
      giffCorectAnswer('SUA', "url('Flag_of_the_United_States.gif')");
      giffCorectAnswer('Canada', "url('Flag_of_Canada.gif')");

      //GIFF.Orase?
      giffCorectAnswer('Paris', "url('14397.gif')");
      giffCorectAnswer('Atena', "url('sd.gif')");
      giffCorectAnswer('Madrid', "url('88fd386c78cef39643044fab973e906b.gif')");
      giffCorectAnswer('Cluj', "url('cj.gif')");
      giffCorectAnswer('Bucuresti', "url('index.gif')");
      giffCorectAnswer('Brasov', "url('1Oqxt.jpg')");
      giffCorectAnswer('Suceava', "url('download (15).jpg')");
      giffCorectAnswer('Oradea', "url('Piata_Unirii_Oradea.jpg')");
      giffCorectAnswer('Roma', "url('colosseum-rome.gif')");
      giffCorectAnswer('Helsinki', "url('feliz-helsinki.gif')");
      giffCorectAnswer('Napoli', "url('napoli-italy (1).gif')");
      giffCorectAnswer(
        'Copenhaga',
        "url('IdealisticAgreeableBighornsheep-max-1mb.gif')"
      );
      giffCorectAnswer('Sofia', "url('index (1).gif')");
      giffCorectAnswer('Kiev', "url('162a3bfd24701eb459e796c78cc3e7f8.gif')");
      giffCorectAnswer(
        'Varsovia',
        "url('QuarterlyUncomfortableBaleenwhale-size_restricted.gif')"
      );
      giffCorectAnswer(
        'Leipzig',
        "url('e54b8d608c2fdf93b376e39048501cf3.gif')"
      );
      giffCorectAnswer('Praga', "url('f7016ed14dff80dfbee4f16939311e54.gif')");
      giffCorectAnswer('Dublin', "url('E20t.gif')");
      giffCorectAnswer('Budapesta', "url('451e9516731057.562b070144cc2.gif')");
      giffCorectAnswer('Zagreb', "url('6cMvJ9Q.gif')");
      giffCorectAnswer('Munchen', "url('GB0I (1).gif')");
      giffCorectAnswer(
        'Barcelona',
        "url('tumblr_inline_p9n01xpfdz1qa7lan_500.gif')"
      );

      giffCorectAnswer('Lisabona', "url('hippotrip-lisbon.gif')");
      giffCorectAnswer('Chicago', "url('giphy (35).gif')");
      giffCorectAnswer('Washington DC', "url('wDC.gif')");
      giffCorectAnswer('San Diego', "url('GrimyRaggedChickadee-max-1mb.gif')");
      giffCorectAnswer('Los Angeles', "url('la-los-angeles.gif')");
      giffCorectAnswer(
        'San Francisco',
        "url('4221d26174d8fa48ccef7df8fddb3a5f.gif')"
      );
      giffCorectAnswer('Las Vegas', "url('vegas.gif')");
      giffCorectAnswer(
        'New York',
        "url('somewhere-in-new-york-city-jerry-seinfeld23hours-to-kill.gif')"
      );
      giffCorectAnswer('Nurnberg', "url('nürnberg-in-nürnberg.gif')");
      giffCorectAnswer('Genova', "url('a-j9ij.gif')");
      giffCorectAnswer('Bremen', "url('ssa.gif')");
      giffCorectAnswer('Essen', "url('1ba3ca96d90ed73078b745d5ac031792.gif')");
      giffCorectAnswer(
        'Dortmund',
        "url('ImpeccableLimpFlyingsquirrel-size_restricted.gif')"
      );
      giffCorectAnswer('Sevilla', "url('LTNhF6.gif')");
      giffCorectAnswer('Valencia', "url('valencia-spain.gif')");
      giffCorectAnswer(
        'Cracovia',
        "url('ReadyPolishedBream-size_restricted.gif')"
      );
      giffCorectAnswer('Hamburg', "url('hamburg-hamburg-city.gif')");
      giffCorectAnswer('Viena', "url('Df8T.gif')");
      giffCorectAnswer('Riga', "url('original.gif')");
      giffCorectAnswer(
        'Vilnius',
        "url('CreamyInfatuatedBlacknorwegianelkhound-size_restricted.gif')"
      );
      giffCorectAnswer('Amsterdam', "url('amsterdam-vacation.gif')");
      giffCorectAnswer('Baia-Mare', "url('baia-mare-romania.jpg')");
      giffCorectAnswer('Constanta', "url('sSYw3V.gif')");
      giffCorectAnswer('Satu-Mare', "url('satu-mare-1.gif')");
      giffCorectAnswer('Wuhan', "url('railway-1.gif')");
      giffCorectAnswer(
        'Hangzhou',
        "url('qianjiang-new-town-light-show-768-2.gif')"
      );
      giffCorectAnswer('Sinaia', "url('Treasure-hunt-Sinaia-regala.jpg')");
      giffCorectAnswer('Timisoara', "url('30186f21354511.562ffcbe07121.gif')");
      giffCorectAnswer(
        'Nanjing',
        "url('lovepik-nanjing-city-picture_501204922.jpg')"
      );
      giffCorectAnswer('Canton', "url('ny7p5SFSK2_uYutD.jpg')");
      giffCorectAnswer('Shanghai', "url('AngelicIllBlackfish-max-1mb.gif')");
      giffCorectAnswer('Beijing', "url('Beijing.gif')");
      giffCorectAnswer('Dallas', "url('dallas.gif')");
      giffCorectAnswer('Detroit', "url('detroit-waterfront.gif')");
      giffCorectAnswer('Charlotte', "url('fz7W.gif')");
      giffCorectAnswer('Phoenix', "url('ph.gif')");
      giffCorectAnswer('San Antonio', "url('s.antonio.gif')");
      giffCorectAnswer('Austin', "url('as.gif')");
      giffCorectAnswer('Seattle', "url('seattle-space.gif')");
      giffCorectAnswer('Houston', "url('houston-city.gif')");
      giffCorectAnswer('Boston', "url('boston-city.gif')");
      giffCorectAnswer(
        'Philadelphia',
        "url('9864029d3d105423f29f6f1032bc6f45.gif')"
      );
      //GIFF ROMANIA.PLACE
      giffCorectAnswer('Cazanele Mici', "url('cazaneleMIci.jpg')");
      giffCorectAnswer('Cascada Cailor', "url('CascadaCailor.gif')");
      giffCorectAnswer('Voronet', "url('Voronet.jpg')");
      giffCorectAnswer('Dunarea', "url('Dunarea.jpg')");
      giffCorectAnswer('Peles', "url('Peles.jpg')");
      giffCorectAnswer('Marea Neagra', "url('MareaNeagra.gif')");
      giffCorectAnswer('Baile Felix', "url('Baile Felix.jpg')");
      giffCorectAnswer('Bigar', "url('Bigar.gif')");
      giffCorectAnswer('Salina Turda', "url('Salina Turda.jpg')");
      giffCorectAnswer('Sovata', "url('sovata2.jpg')");
      giffCorectAnswer('Pasul Buzau', "url('PasulBuzau.jpg')");
      giffCorectAnswer('Bran', "url('Bran.gif')");
      giffCorectAnswer('Rapa Rosie', "url('Rapa Rosie.jpg')");
      giffCorectAnswer('300 de scarii', "url('300 de scarii.jpg')");
      giffCorectAnswer('Cascada Evantai', "url('cascada-evantai.jpg')");
      giffCorectAnswer('Colibita', "url('colibita.jpg')");
      giffCorectAnswer('Pestera Ialomitei', "url('PesteraIalomitei.jpg')");
      giffCorectAnswer('Pestera Muierilor', "url('PesteraMuierilor.jpg')");
      giffCorectAnswer('Lacul Bucura', "url('LaculBucura.jpg')");
      giffCorectAnswer('Satul Rohia', "url('Satul Rohia.jpg')");
      giffCorectAnswer('Gradina Romei', "url('GradinaRomei.jpg')");

      //TV SHOWS GIFF?
      giffCorectAnswer('Gomorra', "url('Gomorra.gif')");
      giffCorectAnswer('Perla Negra', "url('Perla Negra.jpg')");
      giffCorectAnswer('RickAndMorty', "url('RickAndMorty.gif')");
      giffCorectAnswer('Cosmos', "url(''Cosmos.gif)");
      giffCorectAnswer('Sherlock', "url('Sherlock.gif')");
      giffCorectAnswer('Mr.Bean', "url('Mr.Bean.gif')");
      giffCorectAnswer('Euphoria', "url('Euphoria.gif')");
      giffCorectAnswer('Mostenirea', "url('mostenirea.jpg')");
      giffCorectAnswer('Breaking Bad', "url('Breaking Bad.gif')");
      giffCorectAnswer('MASH', "url('MASH.gif')");
      giffCorectAnswer('Game of Thrones', "url('GameofThrones.gif')");
      giffCorectAnswer('Criminal Minds', "url('Criminal Minds.gif')");
      giffCorectAnswer('Gangaa', "url('Gangaa.jpeg')");
      giffCorectAnswer('Pistruiatul', "url('Pistruiatul.webp')");
      giffCorectAnswer('Luck', "url('Luck.jpg')");
      giffCorectAnswer('Valea Muta', "url('valeaMuta.jpg')");
      giffCorectAnswer('ER', "url('ER.gif')");
      giffCorectAnswer('The X Files', "url('The X Files.gif')");
      giffCorectAnswer('Lost', "url('Lost.gif')");
      giffCorectAnswer('Rome', "url('Rome.gif')");
      giffCorectAnswer('Justified', "url('Justified.gif')");
      giffCorectAnswer('Hackerville', "url('Hackerville.gif')");
      giffCorectAnswer('Hannibal', "url('Hannibal.gif')");
      giffCorectAnswer('Fargo', "url('fargoo.gif')");
      giffCorectAnswer('Firefly', "url('Firefly.gif')");
      giffCorectAnswer('Narcos', "url('narcos.gif')");
      giffCorectAnswer('Life', "url('life.jpg')");
      giffCorectAnswer('The Office', "url('TheOffice.gif')");
      giffCorectAnswer('Lois&Clark', "url('LoisClark.gif')");
      giffCorectAnswer('The Nanny', "url('TheNanny.gif')");
      giffCorectAnswer('Friends', "url('Friends.gif')");
      giffCorectAnswer('What If', "url('whatIf.gif')");
      giffCorectAnswer('Arcane', "url('Arcane.gif')");
      giffCorectAnswer('House MD', "url('House.gif')");
      giffCorectAnswer('Castle', "url('Castle.gif')");
      giffCorectAnswer('Supernatural', "url('Supernatural.gif')");
      giffCorectAnswer('Dong Yi', "url('dongYi.gif')");
      giffCorectAnswer('Walking Dead', "url('walkingDead.gif')");
      giffCorectAnswer('The Pacific', "url('ThePacific.gif')");
      giffCorectAnswer('Mr.Robot', "url('Mr.Robot.gif')");
      giffCorectAnswer('The Originals', "url('TheOriginals.gif')");
      giffCorectAnswer('Top Gear', "url('TopGear.gif')");
      giffCorectAnswer('Arrow', "url('Arrow.gif')");
      giffCorectAnswer('The Flash', "url('theFlash.gif')");
      giffCorectAnswer('The Crown', "url('The Crown.gif')");
      giffCorectAnswer('Dragon Ball', "url('DragonBall.gif')");
      giffCorectAnswer('Umbre', "url('Umbre.gif')");
      giffCorectAnswer('Squid Game', "url('Squid Game.gif')");
      giffCorectAnswer('The Great', "url('The Great.gif')");
      giffCorectAnswer('Chernobyl', "url('Chernobyl.gif')");
      giffCorectAnswer('Casa de papel', "url('CasadpapelR.gif')");
      giffCorectAnswer('Dexter', "url('dexter-dexter-morgan.gif')");

      //Movies
      giffCorectAnswer('Up', "url('up.gif')");
      giffCorectAnswer('Iron Man', "url('iron-man.gif')");
      giffCorectAnswer('Hulk', "url('hulkk.gif')");
      giffCorectAnswer('Thor', "url('thor-avengers.gif')");
      giffCorectAnswer('Daredevil', "url('dare-devil-come-at-me-bro.gif')");
      giffCorectAnswer('Captain America', "url('ca.gif')");
      giffCorectAnswer('Black Panther', "url('bPanter.gif')");
      giffCorectAnswer('The Punisher', "url('punisher.gif')");
      giffCorectAnswer('Hawkeye', "url('hawkeye-clint-barton.gif')");
      giffCorectAnswer('Blade', "url('blade-throw.gif')");
      giffCorectAnswer('Die Hard', "url('Ev0G.gif')");
      giffCorectAnswer('Heat', "url('download.jpg')");
      giffCorectAnswer('Scarface', "url('scar.gif')");
      giffCorectAnswer('M', "url('m.gif')");
      giffCorectAnswer('Coco', "url('coo.gif')");
      giffCorectAnswer('Joker', "url('joker-movie.gif')");
      giffCorectAnswer('The Shining', "url('jhony.gif')");
      giffCorectAnswer('Avengers', "url('thanos.gif')");
      giffCorectAnswer('The Batman', "url('bat.gif')");
      giffCorectAnswer('WALL·E', "url('wall.gif')");
      giffCorectAnswer('Memento', "url('8hVS.gif')");
      giffCorectAnswer('Parasite', "url('20d853887.gif')");
      giffCorectAnswer('Gladiator', "url('gladiator.gif')");
      giffCorectAnswer(
        'Spider-Man',
        "url('no-way-home-spideman-no-way-home.gif')"
      );
      giffCorectAnswer('The Prestige', "url('1RoO.gif')");
      giffCorectAnswer('Whiplash', "url('giphy-downsized-large (1).gif')");
      giffCorectAnswer('Alien', "url('200 (1).gif')");
      giffCorectAnswer('Snatch', "url('200 (2).gif')");
      giffCorectAnswer('Ikiru', "url('tumblr_miyrqqGeEB1qiz3j8o1_500.webp')");
      giffCorectAnswer('Ant-Man', "url('ant.gif')");
      giffCorectAnswer('Godzilla', "url('gozzila.gif')");
      giffCorectAnswer('D.Strange', "url('strange.gif')");
      giffCorectAnswer('The Matrix', "url('2tsa.gif')");
      giffCorectAnswer('Inception', "url('inception.gif')");
      giffCorectAnswer('Se7en', "url('tenor.gif')");
      giffCorectAnswer('Star Wars', "url('star.gif')");
      giffCorectAnswer('Terminator', "url('tesr.gif')");
      giffCorectAnswer('300', "url('300.gif')");
      giffCorectAnswer(
        'Pulp Fiction',
        "url('pulp-fiction-missed-gunshot.gif')"
      );
      giffCorectAnswer('The Godfather', "url('nasu.gif')");
      giffCorectAnswer('Superman', "url('superman.gif')");
      giffCorectAnswer('WandaVision', "url('wanda-maximoff-wandavision.gif')");
      //song Gif???
      //SONGS

      giffCorectAnswer('Fluturi', "url('fluturii.gif')");
      giffCorectAnswer('Human Touch', "url('human.gif')");
      giffCorectAnswer(
        'The Last Dancer',
        "url('armin-van-buuren-ultra-miami2018.gif')"
      );
      giffCorectAnswer(
        'Our Origin',
        "url('armin-van-buuren-ultra-miami2018 (1).gif')"
      );
      giffCorectAnswer('Beat It', "url('MJ.gif')", '');
      giffCorectAnswer('Dirty Diana', "url('original (1).gif')", '');
      giffCorectAnswer('Leul', "url('dani-mocanu.gif')", '');
      giffCorectAnswer(
        'Bate Tarabana',
        "url('jador-stii-ce-zic-stii-ce-zic.gif')"
      );
      giffCorectAnswer('JALE', "url('jador-jador-adevarat.gif')", '');
      giffCorectAnswer('Dau Moda', "url('Jador.jpg')", '');
      giffCorectAnswer('Arde-ma Baby', "url('wz4yoH.gif')", '');
      giffCorectAnswer('Sexy Thing', "url('david deejay perfect 2.jpg')", '');
      giffCorectAnswer('Toate Domnisorele', "url('maxresdefault.jpg')", '');
      giffCorectAnswer('Miami Bici', "url('killa-fonic-killafonic-cosy.gif')");
      giffCorectAnswer('3SudEst', "url('GcqYGS.gif')");
      giffCorectAnswer(
        'Amintirile',
        "url('OccasionalPerkyAustraliancattledog-max-1mb.gif')"
      );
      giffCorectAnswer(
        'Te Plac',
        "url('FavorableAltruisticDeermouse-max-1mb.gif')"
      );
      giffCorectAnswer('Clandestina', "url('clandestina.gif')", '');
      giffCorectAnswer(
        'Turn It Up',
        "url('armin-van-buuren-ultra-miami2018 (2).gif')"
      );
      giffCorectAnswer('Redrum', "url('pZFaDKr.gif')");
      giffCorectAnswer('Modern Love', "url('david-bowie-modern-love.gif')");
      giffCorectAnswer('O dorinta', "url('36383662303.gif')");
      giffCorectAnswer(
        'Zeu',
        "url('AmusedPortlyGuernseycow-size_restricted.gif')"
      );
      giffCorectAnswer('Dupa Blocuri', "url('AptThatGibbon-max-1mb.gif')");
      giffCorectAnswer('Focri', "url('focuri.gif')");
      giffCorectAnswer('Taragot', "url('maxresdefault (1).jpg')");
      giffCorectAnswer('One Dance', "url('dance.gif')");
      giffCorectAnswer('Te astept', "url('mr-bean-waiting.gif')");
      giffCorectAnswer(
        'Acele',
        "url('MadOddballIndianskimmer-size_restricted.gif')"
      );
      giffCorectAnswer(
        'Revolution',
        "url('BlondMatureCoqui-size_restricted.gif')"
      );
      giffCorectAnswer(
        'Mr. Navigator',
        "url('AgileMedicalAlaskankleekai-size_restricted.gif')"
      );
      giffCorectAnswer('Ochii Tai', "url('watching-eyes.gif')", '');
      giffCorectAnswer(
        'Intense',
        "url('LongIncompatibleGalapagossealion-size_restricted.gif')"
      );
      giffCorectAnswer('Orbion', "url('MediumAridCottontail-max-1mb.gif')");
      giffCorectAnswer('Just Be', "url('tiesto.gif')");
      giffCorectAnswer('Nu te dau', "url('sandu-ciorba-manele.gif')");
      giffCorectAnswer('Milioanele', "url('guta.gif')");
      giffCorectAnswer('Save Your Tears', "url('200 (3).gif')");
      giffCorectAnswer('Billie Jean', "url('200 (4).gif')");
      giffCorectAnswer(
        'Smooth Criminal',
        "url('smooth-criminal-michael-jackson.gif')"
      );
      giffCorectAnswer('Sfaritu Lumi', "url('end.gif')");
      giffCorectAnswer('Cerul Rosu', "url('red-sky.gif')");
      giffCorectAnswer('Heat Waves', "url('heatr.gif')");
      giffCorectAnswer('Doua Inimi', "url('heartd.gif')");
      giffCorectAnswer('My Heart Goes', "url('heart.gif')");
      giffCorectAnswer('Love Again', "url('lov.gif')");
      giffCorectAnswer('The Next Episode', "url('doctorDree.gif')");
      giffCorectAnswer(
        'Rmexico',
        "url('bc9a2d06f2d1c7c1d7cdbc3aaab646f1.gif')"
      );
      giffCorectAnswer(
        'Ramsterdam',
        "url('BlondMatureCoqui-size_restricted (1).gif')"
      );
      giffCorectAnswer('Starboy', "url('starboy-the-weeknd.gif')");
      giffCorectAnswer('Pentru Cine', "url('nicolae-guta.gif')");
      giffCorectAnswer(
        'Fac Orice',
        "url('SelfassuredHairyIndianpalmsquirrel-size_restricted.gif')"
      );
      //Artist
      giffCorectAnswer(
        'The Weeknd',
        "url('0c77b17836644990398a2066dae7ace9.gif')"
      );
      giffCorectAnswer(
        'Marie Claire',
        "url('tumblr_bac124afdcd4bb2df29026fc0d918ff4_fa548df8_400.gif')"
      );
      giffCorectAnswer(
        'Cheloo',
        "url('AbleCarefulFieldspaniel-size_restricted.gif')"
      );
      giffCorectAnswer('Parazitii', "url('parazitii-i-love-you.gif')");
      giffCorectAnswer('BUG Mafia', "url('bug-mafia-singing.gif')");
      giffCorectAnswer('LaFamilia', "url('portretdepolitician-portret.gif')");
      giffCorectAnswer(
        '3SudEst',
        "url('FavorableAltruisticDeermouse-size_restricted.gif')"
      );
      giffCorectAnswer(
        'Madonna',
        "url('574e180ae7567e759eabda55fa49a25d.gif')"
      );
      giffCorectAnswer('Elton John', "url('elton-john-playing-piano.gif')");
      giffCorectAnswer('Michael Jackson', "url('miiiii.gif')");
      giffCorectAnswer('Taylor Swift', "url('tylor.gif')");
      giffCorectAnswer('Elvis', "url('elvis.gif')");
      giffCorectAnswer('Rihanna', "url('crown-rihanna.gif')");
      giffCorectAnswer('Prince', "url('prr.gif')");
      giffCorectAnswer('Drake', "url('drake_what.0.0.gif')");
      giffCorectAnswer('Ariana Grande', "url('GRANDE.gif')");
      giffCorectAnswer('Justin Bieber', "url('BEBE.gif')");
      giffCorectAnswer('Alessia', "url('maxresdefault (2).jpg')");
      giffCorectAnswer(
        'Antonia',
        "url('InconsequentialSlushyAlbertosaurus-size_restricted.gif')"
      );
      giffCorectAnswer(
        '5Gang',
        "url('DescriptiveLivelyIberianmole-size_restricted.gif')"
      );
      giffCorectAnswer('Puya', "url('oHpqEi.gif')");
      giffCorectAnswer(
        'Ruby',
        "url('ruby-mesaj-disperat-catre-fanii-ei-de-pe-instagram-nu-mai-pot_5_size24.jpg')"
      );
      giffCorectAnswer('Roxen', "url('romania-roxen.gif')");
      giffCorectAnswer(
        'Smiley',
        "url('Josephine-prima-vacanță-din-viața-ei.-Unde-au-dus-o-Smiley-și-Gina-Pistol-de-fapt-.jpeg')"
      );
      giffCorectAnswer('Paula Seling', "url('gif-paula-seling.gif')");
      giffCorectAnswer('Dorian Popa', "url('dorian-popa-hatz.gif')");
      giffCorectAnswer('Nico', "url('maxresdefault (3).jpg')");
      giffCorectAnswer('Moga', "url('marius-moga-playtech.jpg')");
      giffCorectAnswer('Jador', "url('jador-stii-ce-zic-stii-ce-zic (1).gif')");
      giffCorectAnswer(
        'Miki',
        "url('ZTA2M2U3NmE5OTJhZjhjYTBlYTMzNGNiZjA0NTNlYjk=.thumb.jpg')"
      );
      giffCorectAnswer(
        'Anna Lesko',
        "url('tumblr_oxf3hhdfAk1untqm5o1_500.webp')"
      );
      giffCorectAnswer(
        'Lora',
        "url('Lora-a-plâns-la-Pro-TV.-Ce-s-a-întâmplat-în-direct-la-Vorbește-lumea.jpg')"
      );
      giffCorectAnswer('Alex Velea', "url('alex.gif')");
      giffCorectAnswer(
        'Keo',
        "url('In-ce-stare-se-afla-Keo-dupa-3-interventii-chirurgicale.-Ce-a-patit-cantaretul-de-a-ajuns-in-situatia-asta-840x500.jpg')"
      );
      giffCorectAnswer('Hrusca', "url('Mr3hHU.gif')");
      giffCorectAnswer(
        'Loredana',
        "url('loredana-groza-a-reunoscut-ce-schimbari-si-a-facut-1.jpeg')"
      );
      giffCorectAnswer('Ionut Fulea', "url('maxresdefault (4).jpg')");
      giffCorectAnswer('Adrian Enache', "url('4Tsa8D.gif')");
      giffCorectAnswer(
        'Gil Dobrica',
        "url('sa-ne-amintim-de-ei-horia-caciulescu-sunt-solid-ca-un-biscuit-privit-din-profil-46618.jpg')"
      );
      giffCorectAnswer('Despot', "url('adi-despot-3in-pula-mea.gif')");
      giffCorectAnswer('Delia', "url('maxresdefault (5).jpg')");
      giffCorectAnswer('The Snuts', "url('snuts-number-one.jpg')");
      giffCorectAnswer('Blondie', "url('85110.jpg')");
      giffCorectAnswer(
        'Snoop Dogg',
        "url('4e890495fe217276a0a2759ed35bae7d.gif')"
      );
      giffCorectAnswer('Charlie Puth', "url('charlie-puth.gif')");
      giffCorectAnswer('Travis Scott', "url('travis.gif')");
      giffCorectAnswer('Bruno Mars', "url('bruno.gif')");
      giffCorectAnswer('Maroon 5', "url('5.gif')");
      giffCorectAnswer('AC/DC', "url('200 (5).gif')");
      giffCorectAnswer('Alina Eremia', "url('N3vJwo.gif')");
      giffCorectAnswer('Activ', "url('oana-activ.jpg')");
      giffCorectAnswer('Irina Rimes', "url('irina-rimes-dancing.gif')");
      giffCorectAnswer('INNA', "url('inna-inna-caliente.gif')");
      giffCorectAnswer('Kings of Leon', "url('200 (6).gif')");
      giffCorectAnswer('ABBA', "url('abba.gif')");
      giffCorectAnswer('Vladuta Lupau', "url('vladutalupau.gif')");
      //DJ

      giffCorectAnswer('Pink Panda', "url('panda-dj.gif')");
      giffCorectAnswer('Beauz', "url('maxresdefault (6).jpg')");
      giffCorectAnswer('Adam Beyer', "url('adam-beyer-ultra-miami2018.gif')");
      giffCorectAnswer('Morten', "url('download (1).jpg')");
      giffCorectAnswer('Rezz', "url('rex.gif')");
      giffCorectAnswer('Alesso', "url('alesso-dj.gif')");
      giffCorectAnswer('Chicane', "url('giphy.gif')");
      giffCorectAnswer('Darude', "url('r0_17_1640_944_w1200_h678_fmax.jpg')");
      giffCorectAnswer(
        'Alex MORPH',
        "url('tumblr_4286be9e7e448964cd665ad1ed812ee7_64c66b5d_540.jpg')"
      );
      giffCorectAnswer(
        'Sander van Doorn',
        "url('45833792a51cbc16467cf52e192e16e4.gif')"
      );
      giffCorectAnswer('Alexo', "url('b4513a393743bd32233731c162e7ccdd.gif')");
      giffCorectAnswer(
        'Nicky Romero',
        "url('9a1a335ae4ff45bee6fb9368f3cd6cb7.gif')"
      );
      giffCorectAnswer('Skrillex', "url('skrillex-dubstep.gif')");
      giffCorectAnswer('Tiesto', "url('giphy (1).gif')");
      giffCorectAnswer('Steve Aoki', "url('giphy (2ss).gif')");
      giffCorectAnswer('Nervo', "url('nervo-dance.gif')");
      giffCorectAnswer('W&W', "url('200w (1).gif')");
      giffCorectAnswer(
        'Oliver Heldens',
        "url('AcademicEthicalAfricanmolesnake-size_restricted.gif')"
      );
      giffCorectAnswer(
        'Don Diablo',
        "url('BlankDefinitiveIsabellinewheatear-size_restricted.gif')"
      );
      giffCorectAnswer('Afrojack', "url('AYen.gif')");
      giffCorectAnswer(
        'Armin van Buuren',
        "url('armin-van-buuren-ultra-miami2018 (3).gif')"
      );
      giffCorectAnswer('Alok', "url('200 (7).gif')");
      giffCorectAnswer(
        'Martin Garrix',
        "url('92ced5bdced47441f9bfbb1deaadbc25.gif')"
      );
      giffCorectAnswer('Richard Durand', "url('Richard-Durand.webp')");
      giffCorectAnswer('Ayla', "url('4077a3129cac05ef7874ab92a0b2332a.gif')");
      giffCorectAnswer('Christina Novelli', "url('9QlZ2D.gif')");
      giffCorectAnswer(
        'Orjan Nilsen',
        "url('JointImpartialBronco-size_restricted.gif')"
      );
      giffCorectAnswer(
        'Solarstone',
        "url('solarstone-island-trance-dj-music.gif')"
      );
      giffCorectAnswer('Arty', "url('arty-dj.gif')");
      giffCorectAnswer('ATB', "url('tumblr_mea524y6uW1r2xonvo1_500.gif')");
      giffCorectAnswer('Markus Schulz', "url('download (2).jpg')");
      giffCorectAnswer('Giuseppe', "url('645FA9UfOX-SGaUt.jpg')");
      giffCorectAnswer('Zedd', "url('coachella19-feeling-it.gif')");
      giffCorectAnswer('Paul van Dyk', "url('IDxz7k.gif')");
      giffCorectAnswer('Gareth Emery', "url('200 (8).gif')");
      giffCorectAnswer('Ferry Corsten', "url('download (3).jpg')");
      giffCorectAnswer('Boris Brejcha', "url('TinyWellwornAsp-max-1mb.gif')");
      giffCorectAnswer(
        'Nina Kraviz',
        "url('tumblr_mn5ie1MR0a1qkzoe2o1_500.webp')"
      );
      giffCorectAnswer('Carl Cox', "url('carl-cox-oh-yes.gif')");
      giffCorectAnswer('MATTN', "url('1kOrPb.gif')");
      giffCorectAnswer(
        'Dimitri Vegas',
        "url('tumblr_ms5rsxm7WD1r9771lo1_500.gif')"
      );
      giffCorectAnswer(
        'Like Mike',
        "url('tumblr_nh24rzzX7X1t615syo1_1280.gif')"
      );
      giffCorectAnswer('Deadmau5', "url('crazy-deadmau5.gif')");
      giffCorectAnswer('DJ Snake', "url('djsnake-dj.gif')");
      giffCorectAnswer('Quintino', "url('wxbV7auZ4b0F.gif')");
      giffCorectAnswer('R3hab', "url('1abb69036fa376473d7bfa8fdf871b4b.gif')");
      giffCorectAnswer('Bassjackers', "url('TX5oEp.gif')");
      giffCorectAnswer('Kygo', "url('kygo-put-your-hands-up.gif')");
      giffCorectAnswer('Will Sparks', "url('download (4).jpg')");

      //ACTORES
      giffCorectAnswer(
        'Eva Green',
        "url('0f3dedfaff998bcfa0dcd1af0838182e.gif')"
      );
      giffCorectAnswer('Gerard Butler', "url('ger.gif')");
      giffCorectAnswer(
        'Robert Downey Jr',
        "url('robert-downey-jr-eye-roll.gif')"
      );
      giffCorectAnswer('Jason Clarke', "url('4mpH (1).gif')");
      giffCorectAnswer('Arnold', "url('200 (9).gif')");
      giffCorectAnswer('Jessica Alba', "url('giphy (2).gif')");
      giffCorectAnswer('Colin Firth', "url('download (5).jpg')");
      giffCorectAnswer(
        'Andrew Garfield',
        "url('peter-parker-andrew-garfield.gif')"
      );
      giffCorectAnswer('Emma Stone', "url('200 (10).gif')");
      giffCorectAnswer('Russell Crowe', "url('giphy (3).gif')");
      giffCorectAnswer('Shailene Woodley', "url('shailene-woodley-stare.gif')");
      giffCorectAnswer(
        'Keira Knightley',
        "url('MYJZ.gif')"
      );
      giffCorectAnswer('Johnny Depp', "url('jd.gif')");
      giffCorectAnswer('Rose Byrne', "url('giphy (4).gif')");
      giffCorectAnswer('Tobey Maguire', "url('spiderman-tobey.gif')");
      giffCorectAnswer('Willem Dafoe', "url('giphy (5).gif')");
      giffCorectAnswer('James Franco', "url('james-franco-wink.gif')");
      giffCorectAnswer('Bruce Willis', "url('bruce-willis-awkward.gif')");
      giffCorectAnswer(
        'Mihai Bendeac',
        "url('CreativeUnnaturalCod-max-1mb.gif')"
      );
      giffCorectAnswer('Nicolas Cage', "url('200 (10).gif')");
      giffCorectAnswer('Mel Gibson', "url('mel-gibson.gif')");
      giffCorectAnswer('Liam Neeson', "url('giphy (6).gif')");
      giffCorectAnswer(
        'Joe Cole',
        "url('f57e4ec2fcb586ca3ea1f0e1773c4b97.gif')"
      );
      giffCorectAnswer('Van Damme', "url('200 (11).gif')");
      giffCorectAnswer('Halle Berry', "url('SameIdleAuk-max-1mb.gif')");
      giffCorectAnswer('Robert Pattinson', "url('giphy (7).gif')");
      giffCorectAnswer(
        'Angelina Jolie',
        "url('ed659fbbc85cf0095b7c1bf12bdcab6d.gif')"
      );
      giffCorectAnswer('Vin Diesel', "url('giphy (8).gif')");
      giffCorectAnswer('Melissa McCarthy', "url('spy-melissa-mccarthy.gif')");
      giffCorectAnswer('Brad Pitt', "url('200 (12).gif')");
      giffCorectAnswer('Tom Cruise', "url('giphy (9).gif')");
      giffCorectAnswer('Paul Walker', "url('200 (13).gif')");
      giffCorectAnswer('Vanessa Kirby', "url('200 (14).gif')");
      giffCorectAnswer(
        'Dwayne Johnson',
        "url('9a4d3d81fd8e7b3385ad48e0b264acc3.gif')"
      );
      giffCorectAnswer('Jason Statham', "url('200 (15).gif')");
      giffCorectAnswer('Florin Piersic', "url('download (6).jpg')");
      giffCorectAnswer(
        'Dragos Bucur',
        "url('FormalAgonizingElephantseal-size_restricted.gif')"
      );
      giffCorectAnswer('Daniel Craig', "url('6Stq.gif')");
      giffCorectAnswer('Marisa Tomei', "url('giphy (10).gif')");
      giffCorectAnswer(
        'Zendaya',
        "url('c6fdeee450bb8002e0f5e2b670eaa838.gif')"
      );
      giffCorectAnswer('Michael Keaton', "url('impressed-michael-keaton.gif')");
      giffCorectAnswer('Tom Holland', "url('66343565326.gif')");
      giffCorectAnswer('Alfred Molina', "url('spiderman2-alfred-molina.gif')");
      giffCorectAnswer('Elizabeth Banks', "url('elizabeth-banks.gif')");
      giffCorectAnswer('Kirsten Dunst', "url('UrFJ.gif')");
      giffCorectAnswer('Doru Ana', "url('200w (2).gif')");
      giffCorectAnswer(
        'Andreea Vasile',
        "url('MV5BYzA0NjgyZDEtNDczZC00ZTUwLWE3MTYtZDc0YTFlMzQwNGY1XkEyXkFqcGdeQXVyOTA0OTM2ODg@._V1_.jpg')"
      );
      giffCorectAnswer('Serban Pavlu', "url('download (7).jpg')");
      giffCorectAnswer('Dan Bordeianu', "url('img.jpg')");
      giffCorectAnswer('Horațiu Malaele', "url('maxresdefault (7).jpg')");
      giffCorectAnswer('Gheorghe Visu', "url('download (8).jpg')");
      giffCorectAnswer(
        'Claudiu Bleont',
        "url('Claudiu-Bleont-Photography-Simion-Buia-Tel-0763654920-1543.jpg')"
      );
      giffCorectAnswer(
        'Oana Pellea',
        "url('aD00NDAmaGFzaD01MzJmYjdkNjcwNDVjOTVmZWIzMmUwMzU2ZDA2Y2NiNg==.thumb.jpg')"
      );
      giffCorectAnswer('Maia Morgenstern', "url('57035739_303.jpg')");
      giffCorectAnswer('Amza Pellea', "url('download (9).jpg')");
      giffCorectAnswer('Stefan Velniciuc', "url('646x404.jpg')");
      giffCorectAnswer('Maria Obretin', "url('Maria Obretin 2.jpg')");
      giffCorectAnswer(
        'Madalina Craiu',
        "url('MV5BMjU5ODk2OGUtMDYwMC00OTY1LTlmMzQtNDA0YTY0MmI2ZTA3XkEyXkFqcGdeQXVyNTA5Mzg3ODY@._V1_.jpg')"
      );
      giffCorectAnswer(
        'Horatiu Malaele',
        "url('horatiu-malaele-1280x720.jpg')"
      );

      //animales giff?

      giffCorectAnswer('pisica', "url('84c98e60b5391c0bf80a3aabba22bd83.gif')");
      giffCorectAnswer('soricel', "url('SSixt_.gif')");
      giffCorectAnswer('caine', "url('DJ_Dog.gif')");
      giffCorectAnswer('iepure', "url('giphy (11).gif')");
      giffCorectAnswer('urs', "url('excited-funny.gif')");
      giffCorectAnswer('strut', "url('giphy (12).gif')");
      giffCorectAnswer('veverita', "url('6851553_1a496.gif')");
      giffCorectAnswer('porc', "url('200 (16).gif')");
      giffCorectAnswer('paunul', "url('4663093_242c2.gif')");
      giffCorectAnswer('lama', "url('happy-lama-sad-lama.gif')");
      giffCorectAnswer('tigru', "url('3e4ad11a0336d7be4ff4b69744b8bd30.gif')");
      giffCorectAnswer('leu', "url('200 (17).gif')");
      giffCorectAnswer(
        'magar',
        "url('ZanyInferiorDungbeetle-size_restricted.gif')"
      );
      giffCorectAnswer('capra', "url('lick-silly.gif')");
      giffCorectAnswer('bivol', "url('658x0_scris-2.jpg')");
      giffCorectAnswer('vaca', "url('giphy (13).gif')");
      giffCorectAnswer('vultur', "url('vulture-looking.gif')");
      giffCorectAnswer(
        'omida',
        "url('shutterstock_1057769777_poza-principala.jpg')"
      );
      giffCorectAnswer('cal', "url('giphy (14).gif')");
      giffCorectAnswer('rata', "url('Rata-domestica1.jpg')");
      giffCorectAnswer('gaina', "url('gaina.1.gif')");
      giffCorectAnswer('bibilica', "url('bibilica.jpg')");
      giffCorectAnswer('arici', "url('giphy (15).gif')");
      giffCorectAnswer(
        'rinocer',
        "url('collection-cartoon-rhino-pictures-3.gif')"
      );
      giffCorectAnswer('camila', "url('Camila.jpg')");
      giffCorectAnswer('lup', "url('wolf-ice-wolf.gif')");
      giffCorectAnswer('zebra', "url('200 (22).gif')");
      giffCorectAnswer(
        'elefant',
        "url('a7597f0db79302ae9506f1d557dfd318.gif')"
      );
      giffCorectAnswer('lepard', "url('DIRL.gif')");
      giffCorectAnswer('hiena', "url('hyena-animal.gif')");
      giffCorectAnswer('sarpe', "url('200 (21).gif')");
      giffCorectAnswer('ponei', "url('200 (20).gif')");
      giffCorectAnswer(
        'dinozaur',
        "url('pui-dinozaur-conservat-perfect-descoperit-ou-742011.webp')"
      );
      giffCorectAnswer('curcan', "url('Turkey_Lopez04.jpg')");
      giffCorectAnswer(
        'sobolan',
        "url('planse-desene-de-colorat-sobolan-1.gif')"
      );
      giffCorectAnswer('panda', "url('200 (19).gif')");
      giffCorectAnswer('cartita', "url('cartita.jpg')");
      giffCorectAnswer('aye', "url('giphy (16).gif')");
      giffCorectAnswer('gandac', "url('IMG_5344.gif')");
      giffCorectAnswer('lorisul', "url('200 (18).gif')");
      giffCorectAnswer('oaie', "url('ciobanesc-german.jpg')");
      giffCorectAnswer('caine-lup', "url('lup.webp')");
      giffCorectAnswer('ornitorinc', "url('platypus-poison-128242283.jpg')");
      giffCorectAnswer(
        'pinguin',
        "url('8d7b79660d0347c010f99348434205f3.gif')"
      );

      //Games GIF?

      giffCorectAnswer(
        'Vanquish',
        "url('AdventurousDecimalJenny-size_restricted.gif')"
      );
      giffCorectAnswer(
        'Superhot',
        "url('AchingSentimentalGermanshorthairedpointer-size_restricted.gif')"
      );
      giffCorectAnswer('Prey', "url('200 (23).gif')");
      giffCorectAnswer('Overwatch', "url('overwatch-genji.gif')");
      giffCorectAnswer('Halo 3', "url('12846.gif')");
      giffCorectAnswer('Gears 5', "url('giphy (17).gif')");
      giffCorectAnswer(
        'Far Cry 4',
        "url('d8hhc9f-36be260a-62d5-41d7-817c-f3ccc500dc08.gif')"
      );
      giffCorectAnswer('Doom Eternal', "url('giphy (18).gif')");
      giffCorectAnswer('Counter-Strike', "url('giphy (19).gif')");
      giffCorectAnswer('Doom', "url('doom-pain.gif')");
      giffCorectAnswer('BioShock Infinite', "url('giphy (20).gif')");
      giffCorectAnswer(
        'Battlefield V',
        "url('battlefield5-battlefield-v.gif')"
      );
      giffCorectAnswer('Battlefield 4', "url('15338.gif')");
      giffCorectAnswer(
        'Mushihimesama',
        "url('tumblr_nxefq5aUA01udnn9ko1_400.webp')"
      );
      giffCorectAnswer(
        'Ikaruga',
        "url('WelloffTediousIndianhare-size_restricted.gif')"
      );
      giffCorectAnswer('Xanadu Next', "url('capsule_616x353.jpg')");
      giffCorectAnswer(
        'Wasteland 2',
        "url('FrankUnderstatedIbex-size_restricted.gif')"
      );
      giffCorectAnswer('Tales of Arise', "url('tales-of-arise-jrpg.gif')");
      giffCorectAnswer('Nfs Underground', "url('giphy (21).gif')");
      giffCorectAnswer('Dirt 5', "url('ice.gif')");
      giffCorectAnswer('Ridge Racer', "url('download (10).jpg')");
      giffCorectAnswer(
        'Cyberpunk 2077',
        "url('8bbd300c6ce8e7cef45f107de46a7fdc.gif')"
      );
      giffCorectAnswer('Dark Souls II', "url('dark-souls-collapse.gif')");
      giffCorectAnswer('Dark Souls III', "url('6RRkRO.gif')");
      giffCorectAnswer('Hades', "url('hades-hercules.gif')");
      giffCorectAnswer(
        'Legend of Mana',
        "url('a78180d43a3a0235bb8b8fe486645e00.gif')"
      );
      giffCorectAnswer('Mass Effect 2', "url('download (11).jpg')");
      giffCorectAnswer('Nioh', "url('nioh-attack.gif')");
      giffCorectAnswer('Nioh 2', "url('nioh-nioh2.gif')");
      giffCorectAnswer(
        'RymdResa',
        "url('DevotedVioletAsianconstablebutterfly-size_restricted.gif')"
      );
      giffCorectAnswer('Nfs Shift', "url('the-nfs-shift.gif')");
      giffCorectAnswer('Need for Speed', "url('12938.gif')");
      giffCorectAnswer('Nfs No Limits', "url('download (12).jpg')");
      giffCorectAnswer('Nfs Most Wanted', "url('nfsmw-nfs.gif')");
      giffCorectAnswer('The Swapper', "url('community_image_1387592455.gif')");
      giffCorectAnswer('Portal 2', "url('giphy (22).gif')");
      giffCorectAnswer('Inside', "url('inside-game (1).gif')");
      giffCorectAnswer('Smite', "url('games-smite.gif')");
      giffCorectAnswer(
        'Tomb Raider',
        "url('4e475e226c7bc11c0457f8af9ebed59b.gif')"
      );
      giffCorectAnswer(
        'God of War',
        "url('38d4fd78fb2b3341e51a78fdd95866a7.gif')"
      );
      giffCorectAnswer('GTA V', "url('200 (24).gif')");
      giffCorectAnswer(
        'Ghostrunner',
        "url('tumblr_9ce0a9db058231b6ec2df5a1e25d94cd_dd65d11e_640.webp')"
      );
      giffCorectAnswer(
        'Devil May Cry',
        "url('ScarceOilyLeafhopper-max-1mb.gif')"
      );
      giffCorectAnswer('Darksiders', "url('war-darksiders.gif')");
      giffCorectAnswer('Arkham City', "url('batman-arkham-city.gif')");
      giffCorectAnswer("Assassin's Creed", "url('giphy (23).gif')");
      giffCorectAnswer('Warzone', "url('double-kill-warzone.gif')");
      giffCorectAnswer('The Wolf Among Us', "url('giphy (24).gif')");
      giffCorectAnswer(
        'Myst',
        "url('GenuineFlusteredCollardlizard-max-1mb.gif')"
      );
      giffCorectAnswer('Heavy Rain', "url('heavy-rain-ethan-mars.gif')");
      giffCorectAnswer('Gta2', "url('PihM.gif')");
      giffCorectAnswer('Gta Vice City', "url('giphy (25).gif')");
      giffCorectAnswer('Gta 3', "url('27f.gif')");
      giffCorectAnswer(
        'Gta IV',
        "url('DefiniteEnchantingHeterodontosaurus-size_restricted.gif')"
      );
      giffCorectAnswer('Gta San Andreas', "url('200 (25).gif')");
      giffCorectAnswer('Bugsnax', "url('giphy (27).gif')");
      giffCorectAnswer(
        'Warframe',
        "url('FickleAngelicBarnswallow-size_restricted.gif')"
      );
      giffCorectAnswer(
        'Samurai Shodown',
        "url('samurai-shodown-character-select.gif')"
      );
      giffCorectAnswer('Mortal Kombat 11', "url('209473.gif')");
      giffCorectAnswer(
        'Mortal Kombat XL',
        "url('fb13f88236edeee00d1c46945af59f71.gif')"
      );
      giffCorectAnswer(
        'The Last Blade',
        "url('Awakened-Kaede-Character-in-The-Last-Blade-2-Intro-Opening.gif')"
      );
      giffCorectAnswer(
        'Killer Instinct',
        "url('AgedRemarkableIndianrockpython-size_restricted.gif')"
      );
      giffCorectAnswer(
        'Divekick',
        "url('FavoriteComposedFallowdeer-size_restricted.gif')"
      );
      giffCorectAnswer('Brawlhalla', "url('brawlhalla-game.gif')");
      giffCorectAnswer(
        'Sifu',
        "url('tumblr_966ff2defa4f4d2944a58964be294017_4b262185_540.webp')"
      );
      giffCorectAnswer("Fight'N Rage", "url('1558376394_Gal.gif')");
      giffCorectAnswer('Spellbreak', "url('giphy (29).gif')");
      giffCorectAnswer('Fortnite', "url('fortnite-game.gif')");
      giffCorectAnswer('Dota 2', "url('giphy (28).gif')");
      giffCorectAnswer('World of Warcraft', "url('world-of-warcraft-wow.gif')");
      giffCorectAnswer('Onigiri', "url('download (13).jpg')");
      giffCorectAnswer(
        'Final Fantasy XIV',
        "url('euphoria-final-fantasy-xiv.gif')"
      );
      giffCorectAnswer('Blade & Soul', "url('wS9P3e.gif')");
      giffCorectAnswer(
        'Resident Evil',
        "url('14d66db9ef0f3ff1996e6dad0dab6392.gif')"
      );
      giffCorectAnswer('Narcosis', "url('WY1SGK.gif')");
      giffCorectAnswer('Dead Island', "url('BYDi.gif')");
      giffCorectAnswer('Tekken 7', "url('giphy (26).gif')");
      giffCorectAnswer(
        'League of Legends',
        "url('league-of-legend-gameplay.gif')"
      );
      giffCorectAnswer('Gta', "url('gta.webp')");

      //Programing Gif?

      giffCorectAnswer('Axum', "url('giphy (30).gif')");
      giffCorectAnswer('GoLang', "url('golang.gif')");
      giffCorectAnswer('.NET', "url('download (14).jpg')");
      giffCorectAnswer('React', "url('source.gif')");
      giffCorectAnswer('Node.js', "url('nodejs.gif')");
      giffCorectAnswer('Ruby', "url('Ruby-Diamond-88757.gif')");
      giffCorectAnswer('Swift', "url('programming.gif')");
      giffCorectAnswer('Rust', "url('37751162cba905651c93d8e9674e35a3.gif')");
      giffCorectAnswer('Kotlin', "url('3Eqa.gif')");
      giffCorectAnswer('PHP', "url('ExcitableBleakElephant-max-1mb.gif')");
      giffCorectAnswer('C', "url('h9DQyZO.gif')");
      giffCorectAnswer('Python', "url('giphy (31).gif')");
      giffCorectAnswer('C++', "url('download.png')");
      giffCorectAnswer('JavaScript', "url('0_VmBFD8rTvLmG-HSq.gif')");
      giffCorectAnswer('Java', "url('java-1.gif')");
      giffCorectAnswer('Css', "url('hero-section-animation.gif')");
      giffCorectAnswer('Html', "url('giphy (32).gif')");
      giffCorectAnswer('UNITY', "url('unity-engine.gif')");
      giffCorectAnswer('PostScript', "url('coding.gif')");
      giffCorectAnswer('Pizza', "url('programmer.gif')");
      giffCorectAnswer(
        'Pascal',
        "url('68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966.gif')"
      );
      giffCorectAnswer('Zeno', "url('9dcb36579d4518b31451906466dc735d.gif')");
      giffCorectAnswer('Whiley', "url('writer.gif')");
      giffCorectAnswer('Rapira', "url('ExemplaryFairFeline-max-1mb.gif')");
      giffCorectAnswer('Net.Data', "url('giphy (33).gif')");
      giffCorectAnswer('MSL', "url('reginald.gif')");
      giffCorectAnswer('Kodu', "url('giphy (34).gif')");
      giffCorectAnswer('Darwin', "url('programmer-programming.gif')");
      giffCorectAnswer(
        'Cobra',
        "url('medinsana-cobra.gif')"
      );
      giffCorectAnswer('Delphi', "url('coding-kira.gif')");
      giffCorectAnswer('Boomerang', "url('5eKX.gif')");



      clueChange();
    } else {
      // randomV = randomFunction(categoryElements);
      // randomV = randomFunction(categoryElements);
      //   categoryElements = category
     
    
      // randomV;
      displayMessage(`Gresit 😢 ${wordImput}`);
      questionBackgroundChange("url('wrong.gif')");
    }
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      checkClickEvent();
    }
  });

  function clueChange() {
    function clueCorrectAnswer(corectAnswer, clueChagne, backgroundUrl, backgroundSize) {
      if (randomV === corectAnswer) {
        clue.textContent = clueChagne;
        changeDesktopBackground(backgroundUrl, backgroundSize);
      }
    }
    // clue.style.tranition = 'background 3s';
    clueCorrectAnswer('armin893GuTizaVilge698', 'INDICIU', "url('pexels-photo-356079-c-1210x680 (1).webp')", "100%")
    //CARS
    clueCorrectAnswer('Logan', 'L...n', "url('6053357.webp')", '100%');
    clueCorrectAnswer('Volkswagen', 'V..k.w...n', "url('jBdEbs.webp')", '100%');
    clueCorrectAnswer(
      'Nissan',
      'N...s..',
      "url('3b5249a40e0f3a8c78eee6b7063a43bb.jpg')",
      '100%'
    );
    clueCorrectAnswer('BMW', '.M.', "url('2182418.webp')", '100%');
    clueCorrectAnswer(
      'Audi',
      'A...',
      "url('Audi-R8-Desktop-Wallpapers-1920x1080.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Duesenberg',
      'D........g',
      "url('coupe-black-background-coupe-convertible-wallpaper-preview.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Auburn',
      'A....n',
      "url('b5e41b0a03f3717097b67ed85ab6239d.jpg')",
      '100%'
    );
    clueCorrectAnswer('Toyota', 'T.....a', "url('10809166.jpg')", '');
    clueCorrectAnswer(
      'Mercedes-Benz',
      'M.......-B...',
      "url('cls-mercedes-benz-wallpaper-preview.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Mercedes',
      'M......s',
      "url('cls-mercedes-benz-wallpaper-preview.jpg')",
      '100%'
    );
    clueCorrectAnswer('Ford', '.. r .', "url('3762156.webp')", '100%');
    clueCorrectAnswer('Volvo', 'V...o', "url('wp3708432.jpg')", '100%');
    clueCorrectAnswer(
      'Lamborghini',
      'L.........i',
      "url('27991.webp')",
      '100%'
    );
    clueCorrectAnswer('Trabant', 'T.....t', "url('wp3610295.webp')", '100%');
    clueCorrectAnswer(
      'Dacia 1310',
      'D...a 1...',
      "url('andrei-dila-front-2.jpg')",
      '100%'
    );
    clueCorrectAnswer('Pontiac', 'P.....c', "url('F50RI3L.webp')", '100%');
    clueCorrectAnswer('Plymouth', 'P..m...h', "url('1792405.webp')", '100%');
    clueCorrectAnswer(
      'Austin',
      'A....n',
      "url('162-1626987_black-classic-car-wallpapers-4-cool-hd-wallpaper.jpg')",
      '100%'
    );
    clueCorrectAnswer('Packard', 'P..k..d', "url('XuLstP.jpg')", '100%');
    clueCorrectAnswer(
      'Tucker',
      'T....r',
      "url('thumb-1920-348798.jpg')",
      '100%'
    );
    clueCorrectAnswer('Skoda', 'S...a', "url('1268141.webp')", '100%');
    clueCorrectAnswer('Porsche', 'P.....e', "url('1480299.webp')", '100%');
    clueCorrectAnswer(
      'Fiat',
      'F..t',
      "url('fiat-sedici-black-fiat-5-door-hatchback-wallpaper-preview.jpg')",
      '100%'
    );
    clueCorrectAnswer('Citroen', 'C.....n', "url('1641121.webp')", '100%');
    clueCorrectAnswer('Subaru', 'S....u', "url('wp4081075.jpg')", '100%');
    clueCorrectAnswer(
      'Mitsubishi',
      'M........i',
      "url('1607098.webp')",
      '100%'
    );
    clueCorrectAnswer('Renault', 'R.....t', "url('1271157.webp')", '100%');
    clueCorrectAnswer('Oltcit', 'O....t', "url('oltcit-club-39.jpg')", '100%');
    clueCorrectAnswer('Corvette', 'C..v...e', "url('3481344.png')", '100%');
    clueCorrectAnswer(
      'Rolls-Royce',
      'R...s-R...e',
      "url('wp7449172.webp')",
      '100%'
    );
    clueCorrectAnswer(
      'Camaro',
      'C....o',
      "url('ws_Black_Chevrolet_Camaro_Side_1920x1080.jpg')",
      '100%'
    );
    clueCorrectAnswer('Cadillac', 'C......c', "url('wp1817169.webp')", '100%');
    clueCorrectAnswer(
      'Bugatti',
      'B.....i',
      "url('20f85e006ec8e56a0cd6bfbd5995f870.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Koenigsegg',
      'K...i.s..g',
      "url('screen-1.webp')",
      '100%'
    );
    clueCorrectAnswer(
      'Aston Martin',
      'A.... M.....',
      "url('aston-martin-1-2000x939.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Ferrari',
      'F.....i',
      "url('3125bfa12ff1ee62716b82c59ea2f580.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Paganini',
      'P......i',
      "url('pagani-wallpaper-46905-48376-hd-wallpapers.jpg')",
      '100%'
    );
    clueCorrectAnswer('Opel', 'O...', "url('opel-astra-2021.jpg')", '100%');
    clueCorrectAnswer('Peugeot', 'P.....t', "url('6705764.webp')", '100%');
    clueCorrectAnswer('Tesla', 'T...a', "url('5485698.jpg')", '100%');
    clueCorrectAnswer(
      'Lexus',
      'L...s',
      "url('black-machine-lexus-desktop-wallpaper-preview.jpg')",
      '100%'
    );
    clueCorrectAnswer('Kia', 'K..', "url('wp4650339 (1).webp')", '100%');
    clueCorrectAnswer('Jaguar', 'J....r', "url('244116.webp')", '100%');
    clueCorrectAnswer('Mazda', 'M...a', "url('4264807.webp')", '100%');

    //MOTO

    clueCorrectAnswer('Bajaj', 'B.j..', "url('2127839.webp')", '1980px 1200px');
    clueCorrectAnswer('Benelli', 'B.n...i', "url('7075.jpg')", '1980px 1200px');
    clueCorrectAnswer(
      'Moto Guzzi',
      'Mo.o Gu..i',
      "url('wp6959118.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'MV Agusta',
      'MV A.u..a',
      "url('wp5327610.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer('KTM', '.T.', "url('w6FL5D.webp')", '1980px 1200px');
    clueCorrectAnswer(
      'Triumph',
      'T.i...h',
      "url('20411204.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Ducati',
      'D....i',
      "url('5925423.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Kymco',
      'K..c.',
      "url('d3683da4a887a64933ce938f774a28fd.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Kawasaki',
      'K..a...i',
      "url('kawasaki-01.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('Razor', 'R...r', "url('1812878.webp')", '1980px 1200px');
    clueCorrectAnswer(
      'Suzuki',
      'S....i',
      "url('kMEeLT.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Aprilia',
      'A.....a',
      "url('1707849.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Yamaha',
      'Y.m..a',
      "url('10838349.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Vespa',
      'V...a',
      "url('Red_Vespa_Scooter.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Royal Enfield',
      'R...l E..i..d',
      "url('2475273.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('X-max', 'X-m..', "url('wp3119450.webp')", '100%');
    clueCorrectAnswer(
      'TVS',
      '.V.',
      "url('wp3073279.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer('N-max', 'N-m.x', "url('6382200.webp')", '100%');
    clueCorrectAnswer(
      'BMW Motorrad',
      'BMW M......d',
      "url('63646-vilner-custom-bike-bmw-f800-r-predator-bmw-motorcycle-bike-tuning-tuning-wheel-light.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Hero',
      'H..o',
      "url('Hero+handing+Desktop+1920x800_v2 (1).webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Bimota',
      'B....a',
      "url('bimota-db6-r-11674-1920x1200.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('Victory', 'V..t..y', "url('3675089.webp')", '120%');
    clueCorrectAnswer('Norton', 'N....n', "url('2475734.webp')", '120%');
    clueCorrectAnswer(
      'Mahindra',
      'M..i.d.a',
      "url('d237513b7e53c8b9a6e9a874f516f7ed.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('T-max', 'T-m.x', "url('4566127.webp')", '1980px 1200px');

    //Trari

    clueCorrectAnswer('Rusia', 'R...a', "url('2472.webp')", '115%');
    clueCorrectAnswer('Germania', 'G......a', "url('wp3395379.jpg')", '115%');
    clueCorrectAnswer('Romania', 'R.....a', "url('3756144.jpg')", '115%');
    clueCorrectAnswer('Austria', 'A.....a', "url('1093806.jpg')", '115%');
    clueCorrectAnswer('Bulgaria', 'B......a', "url('191345.webp')", '115%');
    clueCorrectAnswer('Belgia', 'B.l..a', "url('wp1868349.jpg')", '115%');
    clueCorrectAnswer('Cehia', 'C...a', "url('97955.jpg')", '115%');
    clueCorrectAnswer('Cipru', 'C...u', "url('1427775.jpg')", '115%');
    clueCorrectAnswer('Croatia', 'C.....a', "url('wp1823648.jpg')", '115%');
    clueCorrectAnswer('Denmark', 'D..m..k', "url('1093924.jpg')", '115%');
    clueCorrectAnswer('Estonia', 'E.....a', "url('1619648.jpg')", '115%');
    clueCorrectAnswer('Finlanda', 'F..l...a', "url('1093941.webp')", '115%');
    clueCorrectAnswer('Franta', 'F....a', "url('1137473.jpg')", '115%');
    clueCorrectAnswer('Anglia', 'A....a', "url('wp1997852 (1).jpg')", '115%');
    clueCorrectAnswer('Grecia', 'G....a', "url('42003 (1).webp')", '115%');
    clueCorrectAnswer('Irlanda', 'I.l...a', "url('459463 (1).jpg')", '115%');
    clueCorrectAnswer('Italia', 'I..l.a', "url('10702100 (1).jpg')", '115%');

    clueCorrectAnswer('Irlanda', 'I..a..a', "url('459463.jpg')", '115%');
    clueCorrectAnswer('Argentina', 'A..e....a', "url('196900.jpg')", '115%');
    clueCorrectAnswer(
      'Portugalia',
      'Po..u....a',
      "url('wp2242910.jpg')",
      '115%'
    );
    clueCorrectAnswer('Polonia', 'P..o..a', "url('wp1835261.jpg')", '115%');
    clueCorrectAnswer('Malta', 'M...a', "url('wp2038457.jpg')", '115%');
    clueCorrectAnswer('Mexic', 'M...c', "url('5489887.jpg')", '115%');
    clueCorrectAnswer(
      'Luxemburg',
      'L.x.m...g',
      "url('2072562 (1).jpg')",
      '115%'
    );
    clueCorrectAnswer('Lituania', 'L..u...a', "url('wp2181781.jpg')", '115%');
    clueCorrectAnswer('Letonia', 'Le....a', "url('wp2168820.webp')", '115%');
    clueCorrectAnswer('Brazilia', 'B......a', "url('213258.jpg')", '115%');
    clueCorrectAnswer('Canada', 'C....a', "url('511445.jpg')", '115%');
    clueCorrectAnswer('Bolivia', 'B.l...a', "url('1890131.jpg')", '115%');
    clueCorrectAnswer('Panama', 'P.n..a', "url('458272.webp')", '115%');
    clueCorrectAnswer('Ucraina', 'U..a..a', "url('1439925.jpg')", '115%');
    clueCorrectAnswer('Uruguay', 'U..g..y', "url('10740014.jpg')", '115%');
    clueCorrectAnswer('Jamaica', 'J..a..a', "url('537319.jpg')", '115%');
    clueCorrectAnswer('Slovacia', 'S..v...a', "url('4nNT4Nw.jpg')", '115%');
    clueCorrectAnswer('Spania', 'S.a..a', "url('348428.jpg')", '115%');
    clueCorrectAnswer('Slovenia', 'S..v...a', "url('733205.webp')", '115%');
    clueCorrectAnswer('Suedia', 'S.e..a', "url('sweden-01.jpg')", '115%');
    clueCorrectAnswer('Ungaria', 'U.g...a', "url('1282884.jpg')", '115%');
    clueCorrectAnswer('SUA', '.U.', "url('52910.jpg')", '115%');
    clueCorrectAnswer(
      'Bahamas',
      'B..a..s',
      "url('World_Bahamas_Travel_to_the_Bahamas_029100_.jpg')",
      '115%'
    );
    clueCorrectAnswer('Guyana', 'G.y..a', "url('wp2201438.jpg')", '115%');
    clueCorrectAnswer('Haiti', 'H...i', "url('wp2203120.jpg')", '115%');
    clueCorrectAnswer('Columbia', 'C..u...a', "url('wp2468658.jpg')", '115%');
    clueCorrectAnswer(
      'Costa Rica',
      'C.s.a R..a',
      "url('b1e96767570da8f9355197f67b88dd86.jpg')",
      '115%'
    );
    clueCorrectAnswer('Venezuela', 'V...z...a', "url('2074800.jpg')", '115%');
    clueCorrectAnswer('Ecuador', 'E..a..r', "url('363805.jpg')", '115%');
    clueCorrectAnswer(
      'Puerto Rico',
      'P.e..o R..o',
      "url('oJ4TXh3.jpg')",
      '115%'
    );
    clueCorrectAnswer(
      'El Salvador',
      'El S...a..r',
      "url('2073760.jpg')",
      '115%'
    );
    clueCorrectAnswer('Anguilla', 'A..u...a', "url('5253299.jpg')", '115%');

    // ORASE

    clueCorrectAnswer('Genova', 'G....a', "url('6183166.jpg')", '100%');
    clueCorrectAnswer('Dortmund', 'D..t...d', "url('wp1987528.jpg')", '100%');
    clueCorrectAnswer('Essen', 'E.s.n', "url('new-york-city.jpg')", '100%');
    clueCorrectAnswer(
      'Bremen',
      'B.e..n',
      "url('Bremen-rathaus-dom-buergerschaft.jpg')",
      '120%'
    );
    clueCorrectAnswer('Roma', 'R..a', "url('Roma-22.jpg')", '100%');
    clueCorrectAnswer('Helsinki', 'H..s...i', "url('256270.jpg')", '100%');
    clueCorrectAnswer('Napoli', 'N.p..i', "url('538405.jpg')", '100%');
    clueCorrectAnswer(
      'Copenhaga',
      'C...n...a',
      "url('photo-1513622470522-26c3c8a854bc.jpg')",
      '100%'
    );
    clueCorrectAnswer('Lisabona', 'L..a...a', "url('1423584.jpg')", '100%');
    clueCorrectAnswer('Barcelona', 'B...e...a', "url('wp1825719.jpg')", '100%');
    clueCorrectAnswer('Munchen', 'M.....n', "url('wp1858356.jpg')", '100%');
    clueCorrectAnswer('Zagreb', 'Z....b', "url('2028873.jpg')", '100%');
    clueCorrectAnswer(
      'Budapesta',
      'B...p...a',
      "url('thumb-1920-488146 (1).jpg')",
      '100%'
    );
    clueCorrectAnswer('Dublin', 'D....n', "url('760496.jpg')", '100%');
    clueCorrectAnswer('Praga', 'P...a', "url('10719404.jpg')", '100%');
    clueCorrectAnswer('Leipzig', 'L..p..g', "url('2922886.webp')", '100%');
    clueCorrectAnswer('Varsovia', 'V..s...a', "url('1150538.jpg')", '100%');
    clueCorrectAnswer('Kiev', 'K..v', "url('wp3710137.jpg')", '100%');
    clueCorrectAnswer('Sofia', 'S...a', "url('wp1922510.jpg')", '100%');
    clueCorrectAnswer('Paris', 'P....', "url('316663.jpg')", '100%');
    clueCorrectAnswer('Atena', 'A...a', "url('wp4164677.jpg')", '100%');
    clueCorrectAnswer('Madrid', 'M....d', "url('1149949.jpg')", '100%');
    clueCorrectAnswer(
      'Cluj',
      'C..j',
      "url('high-rise-buildings-during-night-time (1).jpg')",
      '120%'
    );
    clueCorrectAnswer('Bucuresti', 'B..u....i', "url('wp4127164.jpg')", '100%');
    clueCorrectAnswer(
      'Suceava',
      'S.....a',
      "url('maxresdefault (12).jpg')",
      '120%'
    );
    clueCorrectAnswer(
      'Oradea',
      'O....a',
      "url('aquapark-nymphaea.mp4.jpg')",
      '100%'
    );
    clueCorrectAnswer('Phoenix', 'P.o..ix', "url('wp2024060.jpg')", '100%');
    clueCorrectAnswer('Charlotte', 'C...l...e', "url('3828771.webp')", '100%');
    clueCorrectAnswer('Detroit', 'D...o..', "url('3054863.webp')", '100%');
    clueCorrectAnswer('Dallas', 'D.l..s', "url('wp2306605.jpg')", '100%');
    clueCorrectAnswer('Nurnberg', 'N..n...g', "url('2729869.webp')", '100%');
    clueCorrectAnswer(
      'New York',
      'N.. Y...',
      "url('new-york-city.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Las Vegas',
      'L.. V....',
      "url('thumb-1920-458532.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'San Francisco',
      'S.. F........',
      "url('0053.jpg')",
      '150%'
    );
    clueCorrectAnswer(
      'Los Angeles',
      'L.S A.....s',
      "url('photo-1597982087634-9884f03198ce.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'San Diego',
      'S.n D...o',
      "url('photo-1505245208761-ba872912fac0.jpg')",
      '100%'
    );
    clueCorrectAnswer('Chicago', 'C.i...o', "url('xdUZ80.webp')", '100%');
    clueCorrectAnswer(
      'Washington DC',
      'W..h.....n DC',
      "url('459037.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Philadelphia',
      'P...a......a',
      "url('philadelphia-01.jpg')",
      '100%'
    );
    clueCorrectAnswer('Amsterdam', 'A..t....m', "url('1088051.jpg')", '100%');
    clueCorrectAnswer('Vilnius', 'V..n..s', "url('2072702.jpg')", '100%');
    clueCorrectAnswer(
      'Riga',
      'R..a',
      "url('riga-old-town-latvia.jpg')",
      '100%'
    );
    clueCorrectAnswer('Viena', 'V...a', "url('viena.jpg')", '100%');
    clueCorrectAnswer('Hamburg', 'H..b..g', "url('1179995.jpg')", '100%');
    clueCorrectAnswer(
      'Cracovia',
      'C.a....a',
      "url('thumb-1920-864632.jpg')",
      '100%'
    );
    clueCorrectAnswer('Valencia', 'V..e...a', "url('1612470.webp')", '100%');
    clueCorrectAnswer('Sevilla', 'S.v...a', "url('1664865.jpg')", '100%');
    clueCorrectAnswer('Wuhan', 'W...n', "url('2019790.jpg')", '100%');
    clueCorrectAnswer('Satu-Mare', 'S..u-M..e', "url('3942.jpg')", '100%');
    clueCorrectAnswer(
      'Constanta',
      'C...t...a',
      "url('obi-1-1024x576.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Baia-Mare',
      'B..a-M..e',
      "url('aerial-view-baia-mare-romania-1831258.jpg')",
      '120%'
    );
    clueCorrectAnswer('Boston', 'B.s..n', "url('wp3982246.jpg')", '100%');
    clueCorrectAnswer('Houston', 'H..s..n', "url('1275690.jpg')", '100%');
    clueCorrectAnswer(
      'Seattle',
      'S..t..e',
      "url('f6d246da27b0b1459af965cbef3da53c.jpg')",
      '100%'
    );
    clueCorrectAnswer('Austin', 'A.s..n', "url('827620.webp')", '100%');
    clueCorrectAnswer(
      'San Antonio',
      'S.n A.....o',
      "url('wp2071229.jpg')",
      '100%'
    );
    clueCorrectAnswer('Nanjing', 'N..j..g', "url('4674808.webp')", '100%');
    clueCorrectAnswer(
      'Timisoara',
      'T..i....a',
      "url('union-square-timisoara-wallpaper-preview.jpg')",
      '120%'
    );
    clueCorrectAnswer(
      'Sinaia',
      'S....a',
      "url('peles-castle-sinaia-romania-wallpaper.jpg')",
      '100%'
    );
    clueCorrectAnswer('Hangzhou', 'H..g...u', "url('3281681.jpg')", '100%');
    clueCorrectAnswer(
      'Beijing',
      'B.i...g',
      "url('14599692716_33be9944ed_b.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Shanghai',
      'S.a.g...',
      "url('thumb-1920-435639.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Canton',
      'C.n..n',
      "url('zurich-canton-of-zurich-switzerland.jpg')",
      '100%'
    );
    clueCorrectAnswer('Brasov', 'B.a..v', "url('4716729.webp')", '100%');

    //Romania Place
    clueCorrectAnswer(
      'Cazanele Mici',
      'C.za...e M..i',
      "url('Pe-traseele-din-Muntii-Almajului-6.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Cascada Cailor',
      'C.s...a C.i..r',
      "url('HD-wallpaper-cascada-de-saseta-waterfall-stones-green-moss-beautiful-waterfall-burgos-spain.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Voronet',
      'V.....t',
      "url('E-SJ_uBUYAM_hfj.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Dunarea',
      'D.....a',
      "url('romania-tulcea-delta-dunarii-bridge.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Peles',
      'P...s',
      "url('thumb-1920-561079.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Marea Neagra',
      'M...a N....a',
      "url('Marea-Neagra-fotografiata-din-drona-1.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Baile Felix',
      'B...e F...x',
      "url('aquapark-Oradea-2-1024x727.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Bigar',
      'B...r',
      "url('bigar-cascade-falls-beautiful-waterfall-in-caras-severin-romania-desktop-wallpaper-hd-for-mobile-phones-and-laptops-2560×1600-wallpaper-preview.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Salina Turda',
      'S.l..a T...a',
      "url('Salina_Turda_1.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Sovata',
      'S....a',
      "url('gGWBdJO.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Pasul Buzau',
      'P...l B...u',
      "url('1200x630.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Bran',
      'B..n',
      "url('Bran-Castle-Wallpaper.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Rapa Rosie',
      'R..a R...e',
      "url('gGWBdJO.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      '300 de scarii',
      '3.0 d. s....i',
      "url('2710848.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Cascada Evantai',
      'C.s...a E.a...i',
      "url('Cascada-Evantai (1).jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Colibita',
      'C......a',
      "url('gGWBdJO.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Pestera Ialomitei',
      'P.....a I.l..i..i',
      "url('16290470Master.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Pestera Muierilor',
      'P.s...a M..e....r',
      'url(pestera-muierilor-baia-de-fier__9_.jpg)',
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Lacul Bucura',
      'L...l B....a',
      'url(x4a9693fb-89f8217e.jpg)',
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Satul Rohia',
      'S...l R...a',
      "url('gGWBdJO.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Gradina Romei',
      'G.a...a R...i',
      "url('357352.jpg')",
      '100%'
    );

    // //TV SHOWS
    clueCorrectAnswer(
      'Hannibal',
      'H.n....l',
      "url('5IiA7S.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Hackerville',
      'H...e..i..e',
      "url('218-2186101_hackerville-z-nation-hackerville.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Justified',
      'J..t.f..d',
      "url('JlxIvS.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Rome',
      'R..e',
      "url('wallpapersden.com_rome-2005-series_1365x1024.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('Lost', 'L..t', "url('wp9479129.webp')", '1980px 1200px');
    clueCorrectAnswer(
      'The X Files',
      'T.e X F...s',
      "url('the-xfiles-3.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('ER', '.R', "url('er-wallpaper-7.jpg')", '1980px 1200px');
    clueCorrectAnswer(
      'Valea Muta',
      'V.l.a M..a',
      "url('1ed798c1-0ae6-45b1-8909-d39d49317ae1.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Luck',
      'L...',
      "url('luck-s1-1920x1080.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Pistruiatul',
      'P.s...i...l',
      "url('maxresdefault (8).jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('Gangaa', 'G...a.', "url('437188.jpg')", '1980px 1200px');
    clueCorrectAnswer(
      'Criminal Minds',
      'C..m...l M.n.s',
      "url('249712.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Game of Thrones',
      'G..e o. T..o..s',
      "url('25484.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer('MASH', 'M.S.', "url('wp2665421.jpg')", '1980px 1200px');
    clueCorrectAnswer(
      'Breaking Bad',
      'B..ak..g B.d',
      "url('8ad7632fdf71bc7dd1243e79be4ca281.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Mostenirea',
      'M..t..i..a',
      "url('uncharted-mostenirea-pierduta-tapet-2400x1350_50.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Euphoria',
      'E..h...a',
      "url('1663368.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Mr.Bean',
      'Mr.B..n',
      "url('1277590.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Sherlock',
      'S..r...k',
      "url('627006.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Cosmos',
      'C....s',
      "url('322464.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'RickAndMorty',
      'R..kAndM...Y',
      "url('9088bc12b7f73ab9e69930486c3324f5.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Perla Negra',
      'P...a N...a',
      "url('33161496411_442ab7fee4_b.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Gomorra',
      'G.m...a',
      "url('4674842.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Dong Yi',
      'D..g Y.',
      "url('4726759.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Supernatural',
      'S..........l',
      "url('thumb-1920-496644.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Castle',
      'C....e',
      "url('189121-Castle_TV_series-Stana_Katić-Nathan_Fillion.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'House MD',
      'H...e .D',
      "url('dr-gregory-house-31577-1920x1080.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Arcane',
      'A....e',
      "url('jinx-arcane-series-4k-wallpaper-3840x2160-78.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'What If',
      'W..t I.',
      "url('HD-wallpaper-what-if-vision-what-if-vision-tv-shows-animated-shows-marvel.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Friends',
      'F..e..s',
      "url('yXmbxhx.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Nanny',
      'The N...y',
      "url('thumb-1920-900143.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Lois&Clark',
      'L..S&C...k',
      "url('wallpapersden.com_superman-and-lois-2020_1920x1085.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Office',
      'T.e O....e',
      "url('wallpapersden.com_the-office-tv-series-steve-carell_1920x1200.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('Life', 'L..e', "url('513192.jpg')", '1980px 1200px');
    clueCorrectAnswer(
      'Narcos',
      'N....s',
      "url('1097130.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Firefly',
      'F.....y',
      "url('96530.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Fargo',
      'F...o',
      "url('wp1900411.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Umbre',
      'U...e',
      "url('bedc1ced-fae4-4911-b2cb-34b90f67919c_627415608368958.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Dragon Ball',
      'D.a..n B..l',
      "url('maxresdefault (9).jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Dexter',
      'D....r',
      "url('wallpapersden.com_dexter-new-blood-2021_1920x1080.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Crown',
      'T.e C...n',
      "url('wp2416943.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Flash',
      'T.e F...h',
      "url('the-flash-movie-concept-art-social-featured.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer('Arrow', 'A...w', "url('304819.webp')", '1980px 1200px');
    clueCorrectAnswer(
      'Top Gear',
      'T.p G..r',
      "url('2c9f833edab4465f35eda269aa52378d.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Originals',
      'T.e O..gi...s',
      "url('4025237.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Mr.Robot',
      'Mr.R...t',
      "url('8j2w1K.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Pacific',
      'T.e P..i..c',
      "url('the-pacific-3.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Walking Dead',
      'W..k..g D..d',
      "url('481127.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Casa de papel',
      'C..a de p...l',
      "url('wp5152993.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Chernobyl',
      'C...n...l',
      "url('161856-gas_masks-Chernobyl.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Great',
      'T.e G...t',
      "url('wallpapersden.com_the-great-movie_3840x2160.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Squid Game',
      'S...d G..e',
      "url('wallpapersden.com_squid-game-worker-digital_3840x2160.jpg')",
      '1980px 1200px'
    );

    //MOVIES

    clueCorrectAnswer(
      'Memento',
      'M.m...o',
      "url('thumb-1920-340608.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'WALL·E',
      'W..L.E',
      "url('thumb-1920-60852.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Batman',
      'The B....n',
      "url('robert-pattinson-as-batman-bruce-wayne-in-the-batman-1645186686.jpeg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Avengers',
      'A.e....s',
      "url('Marvels-Avengers-full-roster-2022.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'The Shining',
      'T.e S..n..g',
      "url('Shining-Freezer.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Joker',
      'J...r',
      "url('fbe143965719b7c51ce8d5c4879df4fa.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Coco',
      'C..o',
      "url('sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('M', '.', "url('288737.jpg')", '1980px 1200px');
    clueCorrectAnswer(
      'Scarface',
      'S..r...e',
      "url('Scarface_Tony_Montana_gangster_HDR_1917_movie-1919183.jpg!d')",
      '1980px 1200px'
    );
    clueCorrectAnswer('Heat', 'H..t', "url('wp5348362.webp')", '100%');
    clueCorrectAnswer(
      'Die Hard',
      'D.e H..d',
      "url('1531733669-bruce-die-hard-2.jpg')",
      '100%'
    );
    clueCorrectAnswer('Blade', 'B...e', "url('727742.webp')", '1980px 1200px');
    clueCorrectAnswer(
      'Hawkeye',
      'H.....e',
      "url('sn8xmG.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Punisher',
      'T.e P......r',
      "url('525204.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Black Panther',
      'B...k P.....r',
      "url('thumb-1920-900361.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Captain America',
      'C.p...n A..r..a',
      "url('66100ea7be880efd96959ac2f9f0970b.png')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Daredevil',
      'D.......l',
      "url('801012.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Thor',
      'T..r',
      "url('High_resolution_wallpaper_background_ID_77701084258-1024x576.jpg')",
      '100%'
    );
    clueCorrectAnswer('Hulk', 'H..k', "url('487754.webp')", '100%');
    clueCorrectAnswer('Iron Man', 'I..n M.n', "url('hGHHs3o.webp')", '100%');
    clueCorrectAnswer(
      'Up',
      'U.',
      "url('up-movie-background-33387-34144-hd-wallpapers.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'D.Strange',
      'D.S..a..e',
      "url('621125.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Godzilla',
      'G......a',
      "url('thumb-1920-497521.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Ant-Man',
      'A.t-M.n',
      "url('marvel-ant-man-movie-wallpaper-51415-53113-hd-wallpapers.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Ikiru',
      'I...u',
      "url('5qtOVAcBFogwktkseoZSfZVq6bx.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Snatch',
      'S....h',
      "url('thumb-1920-614130.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Alien',
      'A...n',
      "url('alien-movie-background-full-hd-1920x1080-25289.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Whiplash',
      'W..p.a.h',
      "url('thumb-1920-676243.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Prestige',
      'T.e P..s...e',
      "url('1613716.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Spider-Man',
      'S.....-M..',
      "url('spider-man-movie-2019-far-from-home.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('Gladiator', 'G.......r', "url('1435149.webp')", '100%');
    clueCorrectAnswer(
      'Parasite',
      'P...s..e',
      "url('wallpapersden.com_parasite-movie-poster_1920x1080 (1).jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer('300', '3..', "url('1442846.jpg')", '100%');
    clueCorrectAnswer(
      'Terminator',
      'T........r',
      "url('B9MA3I.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Star Wars',
      'S..r W..s',
      "url('star-wars-wallpaper-1.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Se7en',
      '..7..',
      "url('se7en-wallpaper-1080p-105410.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Inception',
      'I..e..i.n',
      "url('6896486.webp')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Matrix',
      'T.e M.t..x',
      "url('thumb-1920-77840.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Pulp Fiction',
      'P..p F..t..n',
      "url('4219a056a2743f1e24cd84bdd95ecf97.png')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'The Godfather',
      'T.e G..f....e',
      "url('the-godfather-4.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'WandaVision',
      'W..d.V..i.n',
      "url('thumb-1920-1065270.jpg')",
      '1980px 1200px'
    );
    clueCorrectAnswer(
      'Superman',
      'S...r..n',
      "url('10731287.jpg')",
      '1980px 1200px'
    );

    //Melodi
    clueCorrectAnswer('Taragot', 'T.r...t', "url('__-1_1_____.gif')", '100%');
    clueCorrectAnswer('Focri', 'F...i', "url('__-1_1_____.gif')", '100%');
    clueCorrectAnswer(
      'Dupa Blocuri',
      'D..a B.....i',
      "url('SgPL_T.gif')",
      '100%'
    );
    clueCorrectAnswer('Zeu', 'Z..', "url('zeus-god.gif')", '100%');
    clueCorrectAnswer(
      'O dorinta',
      'O d...n.a',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Modern Love',
      'M.d..n L..e',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer('Redrum', 'R....m', "url('__-1_1_____.gif')", '100%');
    clueCorrectAnswer(
      'Turn It Up',
      'T..n I. U.',
      "url('AgileMedicalAlaskankleekai-size_restricted (2).gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Clandestina',
      'C...d..t..a',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer('Te Plac', 'T. P..c', "url('ds(1).gif')", '100%');
    clueCorrectAnswer(
      'Amintirile',
      'A..n.....e',
      "url('RemoteBlindGemsbok-size_restricted.gif')",
      '100%'
    );
    clueCorrectAnswer('3SudEst', '3S.dE.t', "url('__-1_1_____.gif')", '100%');
    clueCorrectAnswer(
      'Miami Bici',
      'M...i B..i',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Toate Domnisorele',
      'T...e D..n......e',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Sexy Thing',
      'S..y T...g',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Arde-ma Baby',
      'A..e-m. B..y',
      "url('jador-jador-adevarat (1).gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Dau Moda',
      'D.u M..a',
      "url('jador-jador-adevarat (1).gif')",
      '100%'
    );
    clueCorrectAnswer(
      'JALE',
      'J..E',
      "url('jador-jador-adevarat (1).gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Bate Tarabana',
      'B..e T..a...a',
      "url('jador-jador-adevarat (1).gif')",
      '100%'
    );
    clueCorrectAnswer('Leul', 'L..l', "url('__-1_1_____.gif')", '100%');
    clueCorrectAnswer(
      'Dirty Diana',
      'D.r.y D...a',
      "url('Michael-Jackson-Gif-michael-jackson-29034073-500-327.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Beat It',
      'B..t I.',
      'D.r.y D...a',
      "url('Michael-Jackson-Gif-michael-jackson-29034073-500-327.gif'),'100%'"
    );
    clueCorrectAnswer(
      'Our Origin',
      'O.r O....n',
      "url('45833792a51cbc16467cf52e192e16e4 (1).gif'),'100%'",
      '100%'
    );
    clueCorrectAnswer(
      'The Last Dancer',
      'T.e L..t D....r',
      "url('45833792a51cbc16467cf52e192e16e4 (1).gif'),'100%'",
      '100%'
    );
    clueCorrectAnswer(
      'Human Touch',
      'H...n T.u.h',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer('Fluturi', 'F..t..i', "url('__-1_1_____.gif')", '100%');
    clueCorrectAnswer(
      'Love Again',
      'L..e A...n',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'My Heart Goes',
      'My H...t G..s',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Doua Inimi',
      'D..a I...i',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Heat Waves',
      'H..t W.v.s',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer('Cerul Rosu', 'C...l R..s', "url('sky-red.gif')", '100%');
    clueCorrectAnswer(
      'Sfaritu Lumi',
      'S..r..u L..i',
      "url('sfârşitul-lumii (1).gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Smooth Criminal',
      'S.o..h C..m...l',
      "url('0e97100057b1f7ab2b88711cb61d0ff8.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Billie Jean',
      'B.l..e J..n',
      "url('michael-jackson.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Save Your Tears',
      'S..e Y..r T..r.',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Milioanele',
      'M..i..n..e',
      "url('9970f85c8b89fba6a6735263caf04d10.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Nu te dau',
      'N. t. d..',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Just Be',
      'J..t B.',
      "url('armin-van-buuren-asot.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Orbion',
      'O.b..n',
      "url('armin-van-buuren-asot.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Intense',
      'I.t.n.e',
      "url('armin-van-buuren-asot.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Ochii Tai',
      'O...i T.i',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Mr. Navigator',
      'Mr. N.v..a..r',
      "url('armin-van-buuren-asot.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Revolution',
      'R...l....n',
      "url('armin-van-buuren-asot.gif')",
      '100%'
    );
    clueCorrectAnswer('Acele', 'A...e', "url('__-1_1_____.gif')", '100%');
    clueCorrectAnswer(
      'Te astept',
      'T. a....t',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer('One Dance', 'O.e D...e', "url('gifff.gif'),'100%'");
    clueCorrectAnswer(
      'The Next Episode',
      'T.e N..t E.i...e',
      "url('4e890495fe217276a0a2759ed35bae7d (1).gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Rmexico',
      'Rme...o',
      "url('armin-van-buuren-asot.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Ramsterdam',
      'Ram......m',
      "url('armin-van-buuren-asot.gif')",
      '100%'
    );
    clueCorrectAnswer('Starboy', 'S...b.y', "url('__-1_1_____.gif')", '100%');
    clueCorrectAnswer(
      'Pentru Cine',
      'P.n..u C..e',
      "url('__-1_1_____.gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Fac Orice',
      'F.c O...e',
      "url('__-1_1_____.gif')",
      '100%'
    );

    //Artist
    clueCorrectAnswer(
      'The Weeknd',
      'T.e W....d',
      "url('the-weeknd.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Marie Claire',
      'M...e C....e',
      "url('charlize-th (1).jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Cheloo',
      'C....o',
      "url('af73b540269b092a6c3491c2904c88de.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Parazitii',
      'P.......i',
      "url('Parazitii-1.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'BUG Mafia',
      'B.G M...a',
      "url('19495_414672938612734_1106352561_n_80360000.webp')",
      '100%'
    );
    clueCorrectAnswer('LaFamilia', 'L.F.....a'),
      "url('maxresdefault (18).jpg')",
      '100%';
    clueCorrectAnswer(
      '3SudEst',
      '3S..E.t',
      "url('Filmari 3rei Sud Est - Emotii(UrbanRo) (28).jpg')",
      '100%'
    );
    clueCorrectAnswer('Madonna', 'M.....a', "url('1246040 (1).webp')", '100%');
    clueCorrectAnswer(
      'Elton John',
      'E...n J..n',
      "url('1702371.webp')",
      '100%'
    );
    clueCorrectAnswer(
      'Michael Jackson',
      'M.....l J.....n',
      "url('Michael-Jackson-Black-White-Wallpaper.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Taylor Swift',
      'T....r S...t',
      "url('B0QDUo.webp')",
      '100%'
    );
    clueCorrectAnswer('Elvis', 'E...s', "url('36vXQRV (1).webp')", '100%');
    clueCorrectAnswer(
      'Rihanna',
      'R.....a',
      "url('rihanna-16.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Prince',
      'P....e',
      "url('wp2003764.webp')",
      '100%'
    );
    clueCorrectAnswer('Drake', 'D...e', "url('3803594.webp')", '100%');
    clueCorrectAnswer(
      'Ariana Grande',
      'A....a G....e',
      "url('ariana-grande-devushka-makiiazh-guby.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Justin Bieber',
      'J....n B....r',
      "url('ad828485ffaa109e95dbb8fb6f0cdccf.jpg')",
      '100%'
    );
    clueCorrectAnswer('Alessia', 'A.....a', "url('wp2008534.jpg')", '100%');
    clueCorrectAnswer('Antonia', 'A.....a', "url('antonia-antonia-iacobescu.jpg')", '100%');
    clueCorrectAnswer('5Gang', '.G..g', "url('unnamed.jpg')", '100%');
    clueCorrectAnswer('Puya', 'P..a', "url('220-2202610_rap-wallpapers-hd-rap-background-hd.jpg')", '100%');
    clueCorrectAnswer('Ruby', 'R..y', "url('8 (1).webp')", '100%');
    clueCorrectAnswer('Roxen', 'R...n', "url('Roxen-1.jpg')", '100%');
    clueCorrectAnswer('Smiley', 'S....y', "url('maxresdefault (13).jpg')", '100%');
    clueCorrectAnswer(
      'Paula Seling',
      'P...a S....g',
      "url('seling-paula-53baba4f36205.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Dorian Popa',
      'D....n P..a',
      "url('dore24.jpg')",
      '100%'
    );
    clueCorrectAnswer('Nico', 'N..o', "url('Nicoleta_Matei.png')", '100%');
    clueCorrectAnswer('Moga', 'M..a', "url('Marius-Moga-nu-a-mai-rezistat-si-a-dezva40x500.jpg')", '100%');
    clueCorrectAnswer('Jador', 'J...r', "url('img (1).jpg')", '100%');
    clueCorrectAnswer('Miki', 'M..i', "url('vK1YfJG.webp')", '100%');
    clueCorrectAnswer(
      'Anna Lesko',
      'A..a L.s.o',
      "url('maxresdefault (14).jpg')",
      '100%'
    );
    clueCorrectAnswer('Lora', 'L..a', "url('393741.webp')", '100%');
    clueCorrectAnswer(
      'Alex Velea',
      'A..x V...a',
      "url('94121226_10156750757041431_7569252510506942464_n.jpg')",
      '100%'
    );
    clueCorrectAnswer('Keo', 'K.o', "url('In-ce-stare-s00 (1).jpg')", '100%');
    clueCorrectAnswer('Hrusca', 'H....a', "url('hrusca.jpg')", '100%');
    clueCorrectAnswer(
      'Loredana',
      'L......a',
      "url('Loredana-Groza-a-.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Ionut Fulea',
      'I...t F...a',
      "url('maxresdefault (15).jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Adrian Enache',
      'A....n E....e',
      "url('iuliana-marciuc-si-adrian-enache.webp')",
      '100%'
    );
    clueCorrectAnswer(
      'Gil Dobrica',
      'G.l D.....a',
      "url('maxresdefault (16).jpg')",
      '100%'
    );
    clueCorrectAnswer('Despot', 'D....t', "url('site-cover-despot.jpg')", '100%');
    clueCorrectAnswer(
      'Delia',
      'D...a',
      "url('whatsapp-image-2021-12-10-at-180919-14.webp')",
      '100%'
    );
    clueCorrectAnswer(
      'The Snuts',
      'T.e S...s',
      "url('snuts-number-one (1).jpg')",
      '100%'
    );
    clueCorrectAnswer('Blondie', 'B.....e', "url('maxresdefault (17).jpg')", '100%');
    clueCorrectAnswer(
      'Snoop Dogg',
      'S...p D..g',
      "url('4e890495fe217276a0a2759ed35bae7d (2).gif')",
      '100%'
    );
    clueCorrectAnswer(
      'Charlie Puth',
      'C.....e P..h',
      "url('puth-charlie-5cd792d131aef.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Travis Scott',
      'T....s S...t',
      "url('Travis-Scott-ap-1200by667.jpeg')",
      '100%'
    );
    clueCorrectAnswer('Bruno Mars', 'B...o M..s', "url('309969.webp')", '100%');
    clueCorrectAnswer(
      'Maroon 5',
      'M....n 5',
      "url('thumb-1920-308935 (1).jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'AC/DC',
      'A./.C',
      "url('10025-01E-JC-white_group_4559_sRGB.jpg')",
      '100%'
    );
    clueCorrectAnswer(
      'Alina Eremia',
      'A...a E....a',
      "url('alina-eremia-romanian-singer-blonde-beautiful-pose-model-hai.jpg')",
      '100%'
    );
    clueCorrectAnswer('Activ', 'A....', "url('activ_band_by_medianrg_d14lc2w-fullview.jpg')", '100%');
    clueCorrectAnswer(
      'Irina Rimes',
      'I...a R...s',
      "url('irina-rimes-inainte-de-primul-ei-c4.jpg')",
      '100%'
    );
    clueCorrectAnswer('INNA', 'I.N.', "url('thumb-1920-482512.jpg')", '100%');
    clueCorrectAnswer(
      'Kings of Leon',
      'K...s of L..n',
      "url('7131992.webp')",
      '100%'
    );
    clueCorrectAnswer('ABBA', '.BB.', "url('wp10167475.webp')", '100%');
    clueCorrectAnswer(
      'Vladuta Lupau',
      'V.....a L...u',
      "url('maxresdefault-1.jpg')",
      '100%'
    );

    //DJ
    clueCorrectAnswer('David Guetta', 'D...d G....a', "url('4GDN.gif')", '100%');
    clueCorrectAnswer('Pink Panda', 'P..k P.n.a', "url('AliveCraftyIndianjackal-max-1mb.gif')", '100%');
    clueCorrectAnswer('Ben Nicky', 'B.n N.c.y', "url('giphy (37).gif')", '100%');
    clueCorrectAnswer('Beauz', 'B.a.z', "url('3500017490.jpg')", '100%');
    clueCorrectAnswer('Adam Beyer', 'A..m B...r', "url('adam-beyer-ultra-miami2018 (1).gif')", '100%');
    clueCorrectAnswer('Morten', 'M.r..n', "url('main-972x597.jpg')", '100%');
    clueCorrectAnswer('Rezz', 'R..z', "url('LWCaVJx7OZBLmCwYGroe55EDJFa8FWOk3mecIeMN.jpeg')", '100%');
    clueCorrectAnswer('Alesso', 'A..s.o', "url('alesso-dj (1).gif')", '100%');
    clueCorrectAnswer('Chicane', 'C..c..e', "url('53382576_101.jpg')", '100%');
    clueCorrectAnswer('Darude', 'D..u.e', "url('Darude-1360x765.jpg')", '');
    clueCorrectAnswer('Alex MORPH', 'A..x M.R.H', "url('maxresdefault (19).jpg')", '100%');
    clueCorrectAnswer('Sander van Doorn', 'S..d.r v.. D.o.n', "url('sander-van-door7.jpg')", '100%');
    clueCorrectAnswer('Alexo', 'A...o', "url('84fbdac0f75c9293a5b1cf58361d88f6.jpg')", '100%');
    clueCorrectAnswer('Nicky Romero', 'N...y R....o', "url('9a1a335ae4ff45bee6fb9368f3cd6cb7 (1).gif')", '100%');
    clueCorrectAnswer('Skrillex', 'S...l..x', "url('skrillex-killex (1).gif')", '100%');
    clueCorrectAnswer('Tiesto', 'T....o', "url('source (1).gif')", '100%');
    clueCorrectAnswer('Steve Aoki', 'S...e A..i', "url('giphy (39).gif')", '100%');
    clueCorrectAnswer('Nervo', 'N...o', "url('staring-nervo.gif')", '100%');
    clueCorrectAnswer('W&W', '.&.', "url('w&w-wallpapers-60015-642245-4628415.png')", '100%');
    clueCorrectAnswer('Oliver Heldens', 'O....r H.....s', "url('wp1956504.jpg')", '100%');
    clueCorrectAnswer('Don Diablo', 'D.n D....o', "url('don-diablo-hexagon-label-music-dj-producer-edm.jpg')", '100%');
    clueCorrectAnswer('Afrojack', 'A......k', "url('AYen (1).gif')", '100%');
    clueCorrectAnswer('Armin van Buuren', 'A...n v.. B....n', "url('untold-20190803_013152_0481_RK.jpg')", '100%');
    clueCorrectAnswer('Alok', 'A..k', "url('free-fire-dj-alok-y7cwacio49lvdbbu.jpg')", '100%');
    clueCorrectAnswer('Martin Garrix', 'M....n G....x', "url('42b57e3c1b5b5c60954483931fbe5bcf.gif')", '100%');
    clueCorrectAnswer('Richard Durand', 'R.c...d D.r..d', "url('durand-richard-506875f1de00c.jpg')", '100%');
    clueCorrectAnswer('Ayla', 'A..a', "url('Et5ZPzcVoAEEzyh.jpg')", '100%');
    clueCorrectAnswer('Christina Novelli', 'C.......a N.....i', "url('christina_novelli-1920x1080.jpg')", '100%');
    clueCorrectAnswer('Orjan Nilsen', 'O...n N....n', "url('Orjan-Nilsen11687-copy.jpg')", '100%');
    clueCorrectAnswer('Solarstone', 'S...r..o.e', "url('solarstone-delta-code-australia-2019-melbourne-sydney-trance-oz-edm.webp')", '100%');
    clueCorrectAnswer('Arty', 'A..y', "url('maxresdefault (20).jpg')", '100%');
    clueCorrectAnswer('ATB', 'A.B', "url('Jmhhc2g9MjNiYTlmYTgwYTcyOTI0MjFmMzJmZmI2MWMzMjcwMzE=.thumb.jpg')", '100%');
    clueCorrectAnswer('Markus Schulz', 'M.r..s S.h..z', "url('tumblr_mrroyqiMT81rdb2tlo1_500.gif')", '100%');
    clueCorrectAnswer('Giuseppe', 'G..s...e', "url('giuseppeottavaini-giuseppe.gif')", '100%');
    clueCorrectAnswer('Zedd', 'Z..d', "url('ImperturbableInbornDarwinsfox-max-1mb.gif')", "100%");
    clueCorrectAnswer('Paul van Dyk', 'P..l v.. D..', "url('wp4032899.webp')", '100%');
    clueCorrectAnswer('Gareth Emery', 'G.r..h E.r.y', "url('cnganaheim3_022-scaled.jpg')", '100%');
    clueCorrectAnswer('Ferry Corsten', 'F...y C.r...n', "url('tumblr_mrroyqiMT81rdb2tlo1_500 (1).gif')", '100%');
    clueCorrectAnswer('Boris Brejcha', 'B.r.s B..j..a', "url('boris-brejcha.gif')", '100%');
    clueCorrectAnswer('Nina Kraviz', 'N..a K..v.z', "url('tumblr_nxkkjtDxJ91t1j0cto1_500.webp')", '100%');
    clueCorrectAnswer('Carl Cox', 'C..l C.x', "url('MatureVelvetyItalianbrownbear-size_restricted.gif')", '100%');
    clueCorrectAnswer('MATTN', 'M..T.', "url('42606045655_7e98edb2d8_b.jpg')", '100%');
    clueCorrectAnswer('Dimitri Vegas', 'D.m...i V.g.s', "url('7133046.jpg')", '100%');
    clueCorrectAnswer('Like Mike', 'L..e M..e', "url('Dimitri-Vegas-Like-Mike-2018-cr-Boy-Kortekaas-billboard-1548.webp')", '100%');
    clueCorrectAnswer('Deadmau5', 'D......5', "url('712620.webp')", '100%');
    clueCorrectAnswer('DJ Snake', 'DJ S....', "url('680797.webp')", '100%');
    clueCorrectAnswer('Quintino', 'Q..n...o', "url('main.jpg')", '100%');
    clueCorrectAnswer('R3hab', 'R3..b', "url('EnergeticThickHedgehog-max-1mb.gif')", '100%');
    clueCorrectAnswer('Bassjackers', 'B...j..k..s', "url('LsID6kWDmbBJfBgwG2QxO1qe3ZmJvpxlNYaoxekm-972x597.jpeg')", '100%');
    clueCorrectAnswer('Kygo', 'K..o', "url('kygo-piano.gif')", '100%');
    clueCorrectAnswer('Will Sparks', 'W... S....s', "url('will-sparks-ravejungle.jpg')", '100%');

    //Actores
    clueCorrectAnswer('Eva Green', 'E.a G...n', "url('eva-green-807733l.jpg')", '100%');
    clueCorrectAnswer('Gerard Butler', 'G....d B....r', "url('thumb-1920-186185.jpg')", '100%');
    clueCorrectAnswer('Robert Downey Jr', 'R....t D....y J.', "url('100683-robert-downey-jr-iron-man.jpg')", '100%');
    clueCorrectAnswer('Jason Clarke', 'J...n C....e', "url('1554078353672.jpg')", '100%');
    clueCorrectAnswer('Arnold', 'A....d', "url('arnold.jpeg')", '100%');
    clueCorrectAnswer('Jessica Alba', 'J.s...a A..a', "url('Jessica-Alba-jessica-alba-34704_1024_768.jpg')", '100%');
    clueCorrectAnswer('Colin Firth', 'C...n F...h', "url('5760979.jpg')", '100%');
    clueCorrectAnswer('Andrew Garfield', 'A.d..w G..f...d', "url('Andrew-Garfield-Found-Loyable.jpeg')", '100%');
    clueCorrectAnswer('Emma Stone', 'E..a S...e', "url('1072545.jpg')", '100%');
    clueCorrectAnswer('Russell Crowe', 'R.....l C...e', "url('1640831.jpg')", '100%');
    clueCorrectAnswer('Shailene Woodley',
      'S..i.e.e W..d..y', "url('831599.jpg')", '100%');
    clueCorrectAnswer('Keira Knightley',
      'K...a K..g....y', "url('45574-Keira_Knighund.jpg')", '100%');
    clueCorrectAnswer('Johnny Depp',
      'J....y D..p', "url('2918909.webp')", '100%');
    clueCorrectAnswer('Rose Byrne',
      'R..e B...e', "url('173043-celebrity-Rose_Byrne-eyes.jpg')", '100%');
    clueCorrectAnswer('Tobey Maguire',
      'T...y M.....e', "url('Tobey-Maguire-as-Spider-Man-in-Spider-Man-3.webp')", '100%');
    clueCorrectAnswer('Willem Dafoe', 'W....m D...e', "url('3443043.webp')", '100%');
    clueCorrectAnswer('James Franco', 'J...s F....o', "url('dzheyms-franko-james-franco-7682.jpg')", '100%');
    clueCorrectAnswer('Bruce Willis', 'B...e W.l..s', "url('thumb-1920-85500.jpg')", '100%');
    clueCorrectAnswer('Mihai Bendeac', 'M...i B.....c', "url('bendeac.webp')", '100%');
    clueCorrectAnswer('Nicolas Cage', 'N.....s C..e', "url('nicolas-cage-background-full-hd-1920x1080-80867.jpg')", '100%');
    clueCorrectAnswer('Mel Gibson', 'M.l G....n', "url('3066037.jpg')", '100%');
    clueCorrectAnswer('Liam Neeson', 'L..m N....n', "url('2372450.jpg')", '100%');
    clueCorrectAnswer('Joe Cole', 'J.e C..e', "url('6390621.webp')", '100%');
    clueCorrectAnswer('Van Damme', 'V.n D...e', "url('2347395.jpg')", '100%');
    clueCorrectAnswer('Halle Berry', 'H...e B...y', "url('15_Halle-Berry.jpg')", '100%');
    clueCorrectAnswer('Robert Pattinson', 'R.b..t P..t.n..n', "url('Robert-Pattinson-happy.jpg')", '100%');
    clueCorrectAnswer('Angelina Jolie', 'A......a J...e', "url('2531446.webp')", '100%');
    clueCorrectAnswer('Vin Diesel', 'V.n D....l', "url('vin-diesel-vin-dizel-aktior-kinoprodiuser-kinorezhissior-sts.jpg')", '100%');
    clueCorrectAnswer('Melissa McCarthy', 'M..i..a M.c....y', "url('wp2376679.jpg')", '100%');
    clueCorrectAnswer('Brad Pitt', 'B..d P..t', "url('brad-pitt-vrea-sa-faca-pace-cu-angelina-jolie-ce-dezvaluiri-a-facut-un-apropiat-al-actorului_13_size24.jpg')", '100%');
    clueCorrectAnswer('Tom Cruise', 'T.m C....e', "url('ws_Tom_Cruise_2_1024x768.jpg')", '100%');
    clueCorrectAnswer('Paul Walker', 'P..l W....r', "url('d8pfeb1-3fab8f40-4c12-413a-9d66-c404dbe3c8e4.jpg')", '100%');
    clueCorrectAnswer('Vanessa Kirby',
      'V.....a K...y', "url('vanessa-kirby.jpeg')", '100%');
    clueCorrectAnswer('Dwayne Johnson',
      'D....e J.....n', "url('wp1990689.jpg')", '100%');
    clueCorrectAnswer('Jason Statham',
      'J...n S.....m', "url('wp2054659.webp')", '100%');
    clueCorrectAnswer('Florin Piersic',
      'F....n P.....c', "url('fp.jpg')", '100%');
    clueCorrectAnswer('Dragos Bucur',
      'D....s B...r', "url('Dragos-Bucur-scos-dinta.jpg')", '100%');
    clueCorrectAnswer('Daniel Craig',
      'D....l C...g', "url('4cd640235ff72e30f7aa48b849014d1a.jpg')", '100%');
    clueCorrectAnswer('Marisa Tomei', 'M.r..a T...i', "url('wp3590777.webp')", '100%');
    clueCorrectAnswer('Zendaya', 'Z..d..a', "url('wallpapersden.com_zendaya-face-2019_2200x1238.jpg')", '100%');
    clueCorrectAnswer('Michael Keaton',
      'M.....l K....n', "url('wp4198262.webp')", '100%');
    clueCorrectAnswer('Tom Holland',
      'T.m H.....d', "url('1087833.webp')", '100%');
    clueCorrectAnswer('Alfred Molina', 'A....d M....a', "url('6264180.webp')", '100%');
    clueCorrectAnswer('Elizabeth Banks', 'E..z....h B...s', "url('20_Elizabeth-Banks.jpg')", '100%');
    clueCorrectAnswer('Kirsten Dunst', 'K.....n D...t', "url('thumb-1920-84282.jpg')", '100%');
    clueCorrectAnswer('Doru Ana', 'D..u A.a', "url('maxresdefault (21).jpg')", '100%');
    clueCorrectAnswer('Andreea Vasile',
      'A.....a V....e', "url('f4188430-jurnal.jpg')", '100%');
    clueCorrectAnswer('Serban Pavlu',
      'S....n P...u', "url('Serban-Pavlu-in-rolul-Relu-din-serialul-Umbre.jpg')", '100%');
    clueCorrectAnswer('Dan Bordeianu',
      'D.n B..d....u', "url('o-noua-schimbare-pentru-dan-bordeianu-actorul-si-a-lasat-mustata_2.jpg')", '100%');
    clueCorrectAnswer('Horatiu Malaele',
      'H.....u M.....e'), "url('horatiu-malaele--crop-1650030572.jpg')", '100%';
    clueCorrectAnswer('Gheorghe Visu',
      'G......e V..u', "url('gheorghe-visu-inima-de-tigan-1024x646.jpg')", '100%');
    clueCorrectAnswer('Claudiu Bleont',
      'C.....u B....t', "url('Claudiu-Bleont-Photography-Simion-Buia-Tel-0763654920-1543 (1).jpg')", '100%');
    clueCorrectAnswer('Oana Pellea', 'O..a P....a', "url('astazi-este-ziua-ta-oana-pellea-45601.jpg')", '100%');
    clueCorrectAnswer('Maia Morgenstern',
      'M..a M.........n', "url('Cine-a-amenințat-o-peăptaș.jpg')", '100%');
    clueCorrectAnswer('Amza Pellea',
      'A..a P....a', "url('amza-pellea-cel-fermecat9075.jpg')", '100%');
    clueCorrectAnswer('Stefan Velniciuc', 'S.e..n V.l.i...c', "url('maxresdefault (22).jpg')", '100%');
    clueCorrectAnswer('Maria Obretin', 'M...a O.r...n', "url('10264140_604529122984746_6043211264608999311_o-1024x681.jpg')", '100%');
    clueCorrectAnswer('Madalina Craiu',
      'M.....n. C...u', "url('V1_ (1).jpg')", '100%');

    //Animales

    clueCorrectAnswer('pisica', 'p....a', "url('6264484.jpg')", '100%');
    clueCorrectAnswer('soricel', 's.....l', "url('gyJATI.webp')", '100%');
    clueCorrectAnswer('caine', '.....', "url('527062.webp')", '100%');
    clueCorrectAnswer('iepure', 'i....e', "url('ws_Jungle_Animals_Six_1600x1200.jpg')", '100%');
    clueCorrectAnswer('urs', '.r.', "url('7172645.webp')", '100%');
    clueCorrectAnswer('strut', 's....', "url('6435099.jpg')", '100%');
    clueCorrectAnswer('veverita', 'v..e...a', "url('1737015.webp')", '100%');
    clueCorrectAnswer('porc', 'p..c', "url('63-633244_jungle-animals-free-to-copy-png-jungle-png.png')", '100%');
    clueCorrectAnswer('paunul', 'p....l', "url('paun (1 of 1).jpg')", '100%');
    clueCorrectAnswer('lama', 'l..a', "url('lama-priroda-fon-1.jpg')", '100%');
    clueCorrectAnswer('tigru', '.....', "url('2012776.webp')", '100%');
    clueCorrectAnswer('leu', '.e.', "url('1156131.webp')", '100%');
    clueCorrectAnswer('magar', 'm..a.', "url('6264484.jpg')", '100%');
    clueCorrectAnswer('capra', 'c..r.', "url('wp7507345.jpg')", '100%');
    clueCorrectAnswer('bivol', 'b...l', "url('3979395.webp')", '100%');
    clueCorrectAnswer('vaca', 'v..a', "url('3979390.webp')", '100%');
    clueCorrectAnswer('vultur', 'v....r', "url('6264484 (1).jpg')", '100%');
    clueCorrectAnswer('omida', 'o...a', "url('High_resolution_wallpaper_background_ID_77700042259.jpg')", '100%');
    clueCorrectAnswer('cal', 'c.l', "url('759408.jpg')", '100%');
    clueCorrectAnswer('rata', 'r..a', "url('105-1056302_jungle-with-animals-background.jpg')", '100%');
    clueCorrectAnswer('gaina', 'g...a', "url('2979671.webp')", '100%');
    clueCorrectAnswer('bibilica', 'b...l..a', "url('3476248.jpg')", '100%');
    clueCorrectAnswer('arici', 'a...i', "url('1000_F_186094852_eLTyNtNwGBAHxRs3txG2JsXPPB7QWU31.jpg')", '100%');
    clueCorrectAnswer('rinocer', 'r.....r', "url('233-2333803_cartoon-animals-wallpaper-hd.jpg')", '100%');
    clueCorrectAnswer('camila', 'c....a', "url('wp2016068.jpg')", '100%');
    clueCorrectAnswer('lup', '...', "url('39bad67718290469938c369c5c6f3459.jpg')", '100%');
    clueCorrectAnswer('zebra', 'z...a', "url('uhyZ2c.jpg')", '100%');
    clueCorrectAnswer('elefant', '.......', "url('7838097c4db2c3a1814ca260c3e670a2.jpg')", '100%');
    clueCorrectAnswer('lepard', 'l....d', "url('6264484.jpg')", '100%');
    clueCorrectAnswer('hiena', 'h...a', "url('6264484.jpg')", '100%');
    clueCorrectAnswer('sarpe', 's...e', "url('1862893.png')", '100%');
    clueCorrectAnswer('ponei', '.....', "url('1499033.webp')", '100%');
    clueCorrectAnswer('dinozaur', 'd......r', "url('xbdQYM.jpg')", '100%');
    clueCorrectAnswer('curcan', 'c.r..n', "url('3d-photo-wallpaper-custom-3dund.jpg')", '100%');
    clueCorrectAnswer('sobolan', 's.....n', "url('6264484.jpg')", '100%');
    clueCorrectAnswer('panda', '.....', "url('5gdcIW.webp')", '100%');
    clueCorrectAnswer('cartita', 'c..t..a', "url('6264484.jpg')", '100%');
    clueCorrectAnswer('aye', '.y.', "url('Aye-aye-Widescreen.jpg')", '100%');
    clueCorrectAnswer('gandac', 'g....c', "url('6264484.jpg')", '100%');
    clueCorrectAnswer('lorisul', 'l.r.s.l', "url('wp2693195.jpg')", '100%');
    clueCorrectAnswer('oaie', 'o..e', "url('6264484.jpg')", '100%');
    clueCorrectAnswer('caine-lup', 'c...e-l.p', "url('6120.jpg')", '100%');
    clueCorrectAnswer('ornitorinc',
      'o........c', "url('Ce-este-si-cuTO.jpg')", '100%');
    clueCorrectAnswer('pinguin', 'p.....n', "url('1238680.jpg')", '100%');

    //GAMES

    clueCorrectAnswer('Vanquish', 'V......h', "url('291400.jpg')", "100%");
    clueCorrectAnswer('Superhot', 'S......t', "url('74d105df4807126fa435bfa5b7916e8db051619b.jpg')", "100%");
    clueCorrectAnswer('Prey', 'P..y', "url('thumb-1920-709757.jpg')", "100%");
    clueCorrectAnswer('Overwatch', 'O.e.w.t.h', "url('856992.webp')", "100%");
    clueCorrectAnswer('Halo 3', 'H..o 3', "url('1470705.webp')", "100%");
    clueCorrectAnswer('Gears 5', 'G...s 5', "url('wallpapersden.com_gears-5-game-2020_3840x2160.jpg')", "100%");
    clueCorrectAnswer('Far Cry 4', 'F.r C.. 4', "url('1115043.jpg')", "100%");
    clueCorrectAnswer('Doom Eternal', 'D..m E.....l', "url('thumb-1920-1025036.jpg')", "100%");
    clueCorrectAnswer('Counter-Strike', 'C.....r-S....e', "url('578e8cf476d6d.jpg')", "100%");
    clueCorrectAnswer('Doom', 'D..m', "url('thumb-1920-686773.jpg')", "100%");
    clueCorrectAnswer('BioShock Infinite', 'B..S...k I.f..i.e', "url('thumb-1920-438934.jpg')", "100%");
    clueCorrectAnswer('Battlefield V', 'B.........d V', "url('737107.webp')", "100%");
    clueCorrectAnswer('Battlefield 4', 'B.........d 4', "url('1368837.jpg')", "100%");
    clueCorrectAnswer('Mushihimesama', 'M....h..e...a', "url('78492-mushihimesama-futari.jpg')", "100%");
    clueCorrectAnswer('Ikaruga', 'I..r..a', "url('520200.jpg')", "100%");
    clueCorrectAnswer('Xanadu Next', 'X.n..u N..t', "url('XANADU-NEXT-Background.jpg')", "100%");
    clueCorrectAnswer('Wasteland 2', 'W..t....d 2', "url('thumb-1920-238279.jpg')", "100%");
    clueCorrectAnswer('Tales of Arise', 'T...s of A...e', "url('tales-of-arise-04.jpg')", "100%");
    clueCorrectAnswer('Nfs Underground', 'N.s U.........d', "url('2656087.jpg')", "100%");
    clueCorrectAnswer('Dirt 5', 'D..t 5', "url('thumb-1920-1078310.jpg')", "100%");
    clueCorrectAnswer('Ridge Racer', 'R...e R...r', "url('thumb-1920-678109.jpg')", "100%");
    clueCorrectAnswer('Cyberpunk 2077', 'C.b..p..k 2..7', "url('4k-Cyberpunk-2077-Wallpaper-2021.jpg')", "100%");
    clueCorrectAnswer('Dark Souls II', 'D..k S...s II', "url('thumb-1920-528418.jpg')", "100%");
    clueCorrectAnswer('Dark Souls III', 'D..k S...s III', "url('thumb-1920-609173.jpg')", "100%");
    clueCorrectAnswer('Hades', 'H...s', "url('8e4a8f1d89b3bcf8cb313231c9e758750ded29e8.jpg')", "100%");
    clueCorrectAnswer('Legend of Mana', 'L....d of M..a ', "url('sv9Bmvzmrnq8eJMgMZHezA.jpg')", "100%");
    clueCorrectAnswer('Mass Effect 2', 'M..s E....t 2', "url('280738.jpg')", "100%");
    clueCorrectAnswer('Nioh', 'N..h', "url('thumb-1920-720466.jpg')", "100%");
    clueCorrectAnswer('Nioh 2', 'N..h 2', "url('2335847.webp')", "100%");
    clueCorrectAnswer('RymdResa', 'R..dR..a', "url('the-best-pc-games-for-2020_fkfb.1920.webp')", "100%");
    clueCorrectAnswer('Nfs Shift', 'N.s S...t', "url('thumb-1920-80756.jpg')", "100%");
    clueCorrectAnswer('Need for Speed', 'N..d f.r S...d', "url('need-for-speed-shift-background-hd-1920x1200-208522.jpg')", "100%");
    clueCorrectAnswer('Nfs No Limits', 'N.s N. L....s', "url('video-games-rally-cars-racer-need-for-speed-no-limits-fantasy-art-artwork-wallpaper-preview.jpg')", "100%");
    clueCorrectAnswer('Nfs Most Wanted', 'N.s M..t W....d', "url('thumb-1920-319578.jpg')", "100%");
    clueCorrectAnswer('The Swapper', 'T.e S.....r', "url('the-swapper-wallpaper-19.jpg')", "100%");
    clueCorrectAnswer('Portal 2', 'P....l 2', "url('442246.png')", "100%");
    clueCorrectAnswer('Inside', 'I....e', "url('wp8543964.webp')", "100%");
    clueCorrectAnswer('Smite', 'S...e', "url('1505556.jpg')", "100%");
    clueCorrectAnswer('Tomb Raider', 'T..b R....r', "url('thumb-1920-337943.jpg')", "100%");
    clueCorrectAnswer('God of War', 'G.d of W.r', "url('wp2514479.webp')", "100%");
    clueCorrectAnswer('GTA V', 'G.. V', "url('1281083216.webp')", "100%");
    clueCorrectAnswer('Ghostrunner', 'G...t..n..r', "url('Ghostrunner-DLC.jpg')", "100%");
    clueCorrectAnswer('Devil May Cry', 'D...l M.. C.y', "url('wp2610279.webp')", "100%");
    clueCorrectAnswer('Darksiders', 'D..k.....s', "url('wp4242947.jpg')", "100%");
    clueCorrectAnswer('Arkham City', 'A....m C..y', "url('thumb-1920-206868.jpg')", "100%");
    clueCorrectAnswer("Assassin's Creed", "A.s..s..'s C...d", "url('2261156.webp')", "100%");
    clueCorrectAnswer('Warzone', 'W.....e', "url('wallpapersden.com_77192-1920x1080.jpg')", "100%");
    clueCorrectAnswer('The Wolf Among Us', 'T.e W..f A...g U.', "url('The-Wolf-Among-Us-2-Trailer-News.jpg')", "100%");
    clueCorrectAnswer('Myst', 'M..t', "url('thumb-1920-578420.jpg')", "100%");
    clueCorrectAnswer('Heavy Rain', 'H...y R..n', "url('B5ANYXiNwfTMSLkjWUAq5J-1200-80.jpg')", "100%");
    clueCorrectAnswer('Gta2', 'G..2', "url('5121132 (1).webp')", "100%");
    clueCorrectAnswer('Gta Vice City', 'G.a V..e C..y', "url('a8ba61da7d3ff790f5ac4bf62aff615b.jpg')", "100%");
    clueCorrectAnswer('Gta 3', 'G.. 3', "url('thumb-1920-1074973.png')", "100%");
    clueCorrectAnswer('Gta IV', 'G.. I.', "url('20397269.jpg')", "100%");
    clueCorrectAnswer('Gta San Andreas', 'G.. S.. A.....s', "url('175045 (1).jpg')", "100%");
    clueCorrectAnswer('Bugsnax', 'B..s..x', "url('Bugsnax-PS4-PS5-Wallpapers-03-1024x576 (1).jpg')", "100%");
    clueCorrectAnswer('Warframe', 'W......e', "url('wp1848287.webp')", "100%");
    clueCorrectAnswer('Samurai Shodown', 'S..u..i S..d..n', "url('thumb-1920-522554.jpg')", "100%");
    clueCorrectAnswer('Mortal Kombat 11', 'M....l K....t 1.', "url('mortal-kombat-11-2019-qa.jpg')", "100%");
    clueCorrectAnswer('Mortal Kombat XL', 'M....l K....t X.', "url('wp1909303.webp')", "100%");
    clueCorrectAnswer('The Last Blade', 'T.e L..t B...e', "url('wallpaper-zmwg9j-936926-Preview.jpg')", "100%");
    clueCorrectAnswer('Killer Instinct', 'K....r I......t', "url('thumb-1920-434772.jpg')", "100%");
    clueCorrectAnswer('Divekick', 'D...k..k', "url('ss_b8e37d450375530364b09ff034026a4f692af728.1920x1080.jpg')", "100%");
    clueCorrectAnswer('Brawlhalla', 'B..w..a..a', "url('1467449.jpg')", "100%");
    clueCorrectAnswer('Sifu', 'S..u', "url('thumb-1920-1211756.jpg')", "100%");
    clueCorrectAnswer("Fight'N Rage", "F...t'N R.g.", "url('ss_f20b9c48b62bbc3cb4604161a2f8816ffb98c251.1920x1080.jpg')", "100%");
    clueCorrectAnswer('Spellbreak', 'S..l.b...k', "url('3837932.webp')", "100%");
    clueCorrectAnswer('Fortnite', 'F......e', "url('fortnite-background-151 (1).jpg')", "100%");
    clueCorrectAnswer('Dota 2', 'D... 2', "url('dota-2-pudge-wallpaper_.jpg')", "100%");
    clueCorrectAnswer('World of Warcraft', 'W...d of W......t', "url('wp2659758.jpg')", "100%");
    clueCorrectAnswer('Onigiri', 'O...i.i', "url('3XPsH6.webp')", "100%");
    clueCorrectAnswer('Final Fantasy XIV', 'F...l F.....y XIV', "url('thumb-1920-424221.jpg')", "100%");
    clueCorrectAnswer('Blade & Soul', 'B...e & S..l', "url('blade-soul-bns-igra-1.jpg')", "100%");
    clueCorrectAnswer('Resident Evil', 'R......t E..l', "url('1256035.webp')", "100%");
    clueCorrectAnswer('Narcosis', 'N..c...s', "url('590f6d405bafe3478406b0aa.jpg')", "100%");
    clueCorrectAnswer('Dead Island', 'D..d I....d', "url('wallpaper_dead_island_04_1920x1080.jpg')", "100%");
    clueCorrectAnswer('Tekken 7', 'T.k..n 7', "url('thumb-1920-694711.jpg')", "100%");
    clueCorrectAnswer('League of Legends', 'L....e of L.....s',
      "url('League-of-Legends-Pc-game-buff-league-of-legends-champs-Download-all-4k-wallpaper-images-for-your-desktop-background.jpg')", "100%");
    clueCorrectAnswer('Gta', '.T.', "url('957573.webp')", "100%");

    //PROGRAMING

    clueCorrectAnswer('Axum', 'A..m', "url('5557995.jpg')", "100%");
    clueCorrectAnswer('GoLang', 'G.L..g', "url('5d2e7f3bab992bde80c9cb9e6f6cc520.jpg')", "100%");
    clueCorrectAnswer('.NET', '.N..', "url('Programing-2019 (1).jpg')", "100%");
    clueCorrectAnswer('React', 'R...t', "url('react.jpg')", "100%");
    clueCorrectAnswer('Node.js', 'N..e.js', "url('maxresdefault (23).jpg')", "100%");
    clueCorrectAnswer('Ruby', 'R..y', "url('rubin-1200x900.png')", "100%");
    clueCorrectAnswer('Swift', 'S...t', "url('programming-evolution.jpg')", "100%");
    clueCorrectAnswer('Rust', 'R..t', "url('maxresdefault (24).jpg')", '100%');
    clueCorrectAnswer('Kotlin', 'K.t..n', "url('1_nCrl3O_a5jccxdmYHsGfLw (1).png')", '100%');
    clueCorrectAnswer('PHP', 'P..', "url('install-php.png')", '100%');
    clueCorrectAnswer('C', '.', "url('5557995.jpg')", '100%');
    clueCorrectAnswer('Python', 'P....n', "url('V1.jpg')", '100%');
    clueCorrectAnswer('C++', '.++', "url('retina_1708x683_cover-0325-LearnCfa1cc613ff4523a2.png')", '100%');
    clueCorrectAnswer('JavaScript', 'J...S....t', "url('javascript-1.jpg')", '100%');
    clueCorrectAnswer('Java', 'J..a', "url('javaworld_jvm_jdk_jre_explainer_java_development_kit_write_3x-large.webp')", '100%');
    clueCorrectAnswer('Css', 'C..', "url('computer-programming.webp')", '100%');
    clueCorrectAnswer('Html', 'H..l', "url('-programming-wallpaper.png')", "100^");
    clueCorrectAnswer('UNITY', 'U.I.Y', "url('ScriptingIntroPic.jpg')", '100%');
    clueCorrectAnswer('PostScript', 'Po..S....t', "url('ProgrammingIllustration.png')", '100%');
    clueCorrectAnswer('Pizza', 'P.z.a', "url('code.png')", '100%');
    clueCorrectAnswer('Pascal', 'P....l', "url('screen-4 (1).webp')", '100%');
    clueCorrectAnswer('Zeno', 'Z..o', "url('26294879.jpg')", '100%');
    clueCorrectAnswer('Whiley', 'W.i..y', "url('5557995.jpg')", '100%');
    clueCorrectAnswer('Rapira', 'R.p..a', "url('5557995.jpg')", '100%');
    clueCorrectAnswer('Net.Data', 'N.t.D..a', "url('5557995.jpg')", '100%');
    clueCorrectAnswer('MSL', '.S.', "url('Top-7-Programing-Languages-for-Web-Development.jpg')", '100%');
    clueCorrectAnswer('Kodu', 'K..u', "url('Top-7-Programing-Languages-for-Web-Development.jpg')", '100%');
    clueCorrectAnswer('Darwin', 'D.r..n', "url('5557995.jpg')", '100%');
    clueCorrectAnswer('Cobra', 'C.b.a', "url('d1ykuh3-673f702e-1de3-4598-8016-168aedb068a9.jpg')", '100%');
    clueCorrectAnswer('Delphi', 'D....i', "url('Delphi-Helmet-Circle.webp')", '100%');
    clueCorrectAnswer('Boomerang', 'B..m.r..g', "url('5557995.jpg'')", '100%');
  }

  clueChange();

  check.addEventListener('click', checkClickEvent);
  return categoryElements;
}
//console.log(score);
function questionStyle(opacity) {
  question.style.opacity = opacity;
  question.style.backgroundImage = "url('download.webp')";
}

function categoryChange() {
  if (this.value === 'select') {
    changeDesktopBackground(
      "url('pexels-photo-356079-c-1210x680 (1).webp')",
      '100%'
    );

    clue.textContent = 'INDICIU';
    questionStyle('1')
    question.style.backgroundImage = "url('download.webp')";
    const selct = [
      'armin893GuTizaVilge698'
    ]
    checkBtnFunction(selct);
  } else if (this.value === 'cars') {
    questionStyle('0.85');

    const cars = [
      'Volkswagen',
      'Nissan',
      'Mazda',
      'BMW',
      'Audi',
      'Ford',
      'Mercedes',
      'Toyota',
      'Auburn',
      'Duesenberg',
      'Tucker',
      'Packard',
      'Logan',
      'Plymouth',
      'Pontiac',
      'Dacia 1310',
      'Trabant',
      'Lamborghini',
      'Volvo',
      'Opel',
      'Peugeot',
      'Renault',
      'Skoda',
      'Tesla',
      'Renault',
      'Lexus',
      'Kia',
      'Jaguar',
      'Porsche',
      'Fiat',
      'Citroen',
      'Subaru',
      'Mitsubishi',
      'Oltcit',
      'Corvette',
      'Camaro',
      'Cadillac',
      'Bugatti',
      'Rolls-Royce',
      'Koenigsegg',
      'Aston Martin',
      'Ferrari',
      'Paganini',
    ];

    checkBtnFunction(cars);

    // console.log(randomFunction(cars));
  } else if (this.value === 'motorcycle') {
    questionStyle('0.87');
    const motorcycle = [
      'Yamaha',
      'Aprilia',
      'Suzuki',
      'Razor',
      'Kawasaki',
      'Kymco',
      'Ducati',
      'Triumph',
      'KTM',
      'MV Agusta',
      'Moto Guzzi',
      'Benelli',
      'Bajaj',
      'Norton',
      'Victory',
      'Bimota',
      'Hero',
      'BMW Motorrad',
      'N-max',
      'TVS',
      'X-max',
      'Royal Enfield',
      'Vespa',
      'Mahindra',
      'T-max',
    ];

    checkBtnFunction(motorcycle);
  } else if (this.value === 'countries') {
    questionStyle('0.9');

    const countries = [
      'Rusia',
      'Germania',
      'Romania',
      'Austria',
      'Belgia',
      'Bulgaria',
      'Cehia',
      'Cipru',
      'Croatia',
      'Denmark',
      'Estonia',
      'Finlanda',
      'Franta',
      'Anglia',
      'Grecia',
      'Irlanda',
      'Italia',
      'Letonia',
      'Lituania',
      'Luxemburg',
      'Malta',
      'Polonia',
      'Portugalia',
      'Slovacia',
      'Spania',
      'Slovenia',
      'Suedia',
      'Ungaria',
      'SUA',
      'Canada',
      'Brazilia',
      'Mexic',
      'Argentina',
      'Columbia',
      'Costa Rica',
      'Venezuela',
      'Ecuador',
      'Puerto Rico',
      'El Salvador',
      'Bolivia',
      'Panama',
      'Ucraina',
      'Uruguay',
      'Jamaica',
      'Haiti',
      'Guyana',
      'Bahamas',
      'Anguilla',
    ];
    checkBtnFunction(countries);
  } else if (this.value === 'citys') {
    questionStyle('0.8');

    const citys = [
      'Paris',
      'Atena',
      'Madrid',
      'Cluj',
      'Bucuresti',
      'Brasov',
      'Suceava',
      'Oradea',
      'Roma',
      'Helsinki',
      'Napoli',
      'Copenhaga',
      'Lisabona',
      'Barcelona',
      'Munchen',
      'Zagreb',
      'Budapesta',
      'Dublin',
      'Praga',
      'Leipzig',
      'Varsovia',
      'Kiev',
      'Sofia',
      'Amsterdam',
      'Vilnius',
      'Riga',
      'Viena',
      'Hamburg',
      'Cracovia',
      'Valencia',
      'Sevilla',
      'Dortmund',
      'Essen',
      'Bremen',
      'Genova',
      'Nurnberg',
      'New York',
      'Las Vegas',
      'San Francisco',
      'Los Angeles',
      'San Diego',
      'Chicago',
      'Washington DC',
      'Philadelphia',
      'Boston',
      'Houston',
      'Seattle',
      'Austin',
      'San Antonio',
      'Phoenix',
      'Charlotte',
      'Detroit',
      'Dallas',
      'Beijing',
      'Shanghai',
      'Canton',
      'Nanjing',
      'Timisoara',
      'Sinaia',
      'Hangzhou',
      'Wuhan',
      'Satu-Mare',
      'Constanta',
      'Baia-Mare',
    ];
    checkBtnFunction(citys);
  } else if (this.value === 'romania') {
    questionStyle('1');
    const romania = [
      'Cascada Cailor',
      'Voronet',
      'Dunarea',
      'Peles',
      'Marea Neagra',
      'Baile Felix',
      'Bigar',
      'Salina Turda',
      'Sovata',
      'Pasul Buzau',
      'Bran',
      'Rapa Rosie',
      '300 de scarii',
      'Cascada Evantai',
      'Colibita ',
      'Pestera Ialomitei',
      'Pestera Muierilor',
      'Lacul Bucura',
      'Satul Rohia',
      'Cazanele Mici',
      'Gradina Romei',
    ];

    checkBtnFunction(romania);
  } else if (this.value === 'shows') {
    questionStyle('0.8');

    const seriale = [
      'Chernobyl',
      'Friends',
      'The Nanny',
      'Hannibal',
      'Hackerville',
      'Justified',
      'Rome',
      'Lost',
      'The X Files',
      'ER',
      'Valea Muta',
      'Luck',
      'Pistruiatul',
      'Gangaa',
      'Criminal Minds',
      'Game of Thrones',
      'MASH',
      'Breaking Bad',
      'Mostenirea',
      'Euphoria',
      'Mr.Bean',
      'Sherlock',
      'Cosmos',
      'RickAndMorty',
      'Perla Negra',
      'Gomorra',
      'Dong Yi',
      'Supernatural',
      'Castle',
      'House MD',
      'Arcane',
      'What If',
      'Lois&Clark',
      'The Office',
      'Life',
      'Narcos',
      'Firefly',
      'Fargo',
      'Umbre',
      'Dragon Ball',
      'Dexter',
      'The Crown',
      'The Flash',
      'Arrow',
      'Top Gear',
      'The Originals',
      'Mr.Robot',
      'The Pacific',
      'Walking Dead',
      'Casa de papel',
      'The Great',
      'Squid Game',
    ];

    checkBtnFunction(seriale);
  } else if (this.value === 'movies') {
    questionStyle('0.8');

    const movies = [
      'The Godfather',
      'Pulp Fiction',
      'The Matrix',
      'Inception',
      'Se7en',
      'Star Wars',
      'Terminator',
      '300',
      'Parasite',
      'Gladiator',
      'Spider-Man',
      'The Prestige',
      'Whiplash',
      'Alien',
      'Snatch',
      'Ikiru',
      'Superman',
      'Heat',
      'Ant-Man',
      'Godzilla',
      'D.Strange',
      'Up',
      'Iron Man',
      'Hulk',
      'Thor',
      'Daredevil',
      'Captain America',
      'Black Panther',
      'The Punisher',
      'WandaVision',
      'Hawkeye',
      'Blade',
      'Die Hard',
      'Heat',
      'Scarface',
      'M',
      'Coco',
      'Joker',
      'The Shining',
      'Avengers',
      'The Batman',
      'WALL·E',
      'Memento',
    ];
    checkBtnFunction(movies);
  } else if (this.value === 'songs') {
    questionStyle('0.7');
    const songs = [
      'Save Your Tears',
      'Billie Jean',
      'Smooth Criminal',
      'Sfaritu Lumi',
      'Cerul Rosu',
      'Heat Waves',
      'Doua Inimi',
      'My Heart Goes',
      'Love Again',
      'Fluturi',
      'Human Touch',
      'The Last Dancer',
      'Our Origin',
      'Beat It',
      'Dirty Diana',
      'Leul',
      'Bate Tarabana',
      'JALE',
      'Dau Moda',
      'Redrum',
      'Modern Love',
      'O dorinta',
      'Zeu',
      'Dupa Blocuri',
      'Focri',
      'Taragot',
      'Arde-ma Baby',
      'Sexy Thing',
      'Toate Domnisorele',
      'Miami Bici',
      '3SudEst',
      'Amintirile',
      'Te Plac',
      'Clandestina',
      'Turn It Up',
      'Revolution',
      'Mr. Navigator',
      'Ochii Tai',
      'Intense',
      'Orbion',
      'Just Be',
      'Nu te dau',
      'Milioanele',
      'Ramsterdam',
      'Rmexico',
      'The Next Episode',
      'One Dance',
      'Te astept',
      'Acele',
      'Starboy',
      'Pentru Cine',
      'Fac Orice',
    ];
    checkBtnFunction(songs);
  } else if (this.value === 'songArt') {

    questionStyle('0.70')

    const art = [
      'Delia',
      'Despot',
      'Gil Dobrica',
      'Adrian Enache',
      'Ionut Fulea',
      'Loredana',
      'Hrusca',
      'Keo',
      'Lora',
      'Anna Lesko',
      'Miki',
      'Jador',
      'Moga',
      'Nico',
      'Dorian Popa',
      '5Gang',
      'Puya',
      'Ruby',
      'Roxen',
      'Smiley',
      'Paula Seling',
      'Alex Velea',
      'Antonia',
      'Alessia',
      'Justin Bieber',
      'Ariana Grande',
      'Drake',
      'Prince',
      'Rihanna',
      'Elvis',
      'Taylor Swift',
      'Michael Jackson',
      'Elton John',
      'Madonna',
      '3SudEst',
      'LaFamilia',
      'BUG Mafia',
      'Parazitii',
      'Cheloo',
      'Marie Claire',
      'The Weeknd',
      'AC/DC',
      'Maroon 5',
      'Bruno Mars',
      'Travis Scott',
      'Charlie Puth',
      'Snoop Dogg',
      'Blondie',
      'The Snuts',
      'ABBA',
      'Kings of Leon',
      'INNA',
      'Irina Rimes',
      'Activ',
      'Alina Eremia',
      'Vladuta Lupau',
    ];
    checkBtnFunction(art);
  } else if (this.value === 'DJ') {
    questionStyle('0.83')

    const dj = [
      'David Guetta',
      'Martin Garrix',
      'Alok',
      'Armin van Buuren',
      'Afrojack',
      'Don Diablo',
      'Oliver Heldens',
      'W&W',
      'Nervo',
      'Steve Aoki',
      'Tiesto',
      'Skrillex',
      'Nicky Romero',
      'Alexo',
      'Sander van Doorn',
      'Alex MORPH',
      'Darude',
      'Chicane',
      'Alesso',
      'Rezz',
      'Morten',
      'Adam Beyer',
      'Beauz',
      'Pink Panda',
      'Deadmau5',
      'Like Mike',
      'Dimitri Vegas',
      'MATTN',
      'Carl Cox',
      'Nina Kraviz',
      'Boris Brejcha',
      'Ferry Corsten',
      'Gareth Emery',
      'Ben Nicky',
      'Christina Novelli',
      'Ayla',
      'Richard Durand',
      'Orjan Nilsen',
      'Solarstone',
      'Arty',
      'ATB',
      'Markus Schulz',
      'Giuseppe',
      'Zedd',
      'Paul van Dyk',
      'DJ Snake',
      'Will Sparks',
      'Kygo',
      'Bassjackers',
      'R3hab',
      'Quintino',
    ];
    checkBtnFunction(dj);
  } else if (this.value === 'actores') {

    questionStyle('0.82');


    const actors = [
      'Jason Statham',
      'Dwayne Johnson',
      'Vanessa Kirby',
      'Paul Walker',
      'Tom Cruise',
      'Brad Pitt',
      'Melissa McCarthy',
      'Vin Diesel',
      'Angelina Jolie',
      'Robert Pattinson',
      'Halle Berry',
      'Van Damme',
      'Joe Cole',
      'Liam Neeson',
      'Mel Gibson',
      'Nicolas Cage',
      'Mihai Bendeac',
      'Bruce Willis',
      'Johnny Depp',
      'Keira Knightley',
      'Shailene Woodley',
      'Russell Crowe',
      'Emma Stone',
      'Andrew Garfield',
      'Colin Firth',
      'Jessica Alba',
      'Arnold',
      'Jason Clarke',
      'Robert Downey Jr',
      'Gerard Butler',
      'Eva Green',
      'Rose Byrne',
      'Tobey Maguire',
      'Willem Dafoe',
      'James Franco',
      'Kirsten Dunst',
      'Elizabeth Banks',
      'Alfred Molina',
      'Tom Holland',
      'Michael Keaton',
      'Zendaya',
      'Marisa Tomei',
      'Daniel Craig',
      'Dragos Bucur',
      'Florin Piersic',
      'Amza Pellea',
      'Maia Morgenstern',
      'Oana Pellea',
      'Claudiu Bleont',
      'Gheorghe Visu',
      'Horatiu Malaele',
      'Dan Bordeianu',
      'Serban Pavlu',
      'Andreea Vasile',
      'Doru Ana',
      'Stefan Velniciuc',
      'Maria Obretin',
      'Madalina Craiu',
    ];
    checkBtnFunction(actors);
  } else if (this.value === 'animales') {
    questionStyle('0.89');

    const animales = [
      'arici',
      'bibilica',
      'gaina',
      'rata',
      'cal',
      'omida',
      'vultur',
      'vaca',
      'bivol',
      'capra',
      'magar',
      'leu',
      'tigru',
      'lama',
      'paunul',
      'porc',
      'veverita',
      'strut',
      'urs',
      'iepure',
      'caine',
      'pisica',
      'soricel',
      'sobolan',
      'curcan',
      'dinozaur',
      'ponei',
      'sarpe',
      'hiena',
      'lepard',
      'elefant',
      'zebra',
      'lup',
      'camila',
      'rinocer',
      'oaie',
      'lorisul',
      'gandac',
      'aye',
      'cartita',
      'panda',
      'caine-lup',
      'ornitorinc',
      'pinguin',
    ];
    checkBtnFunction(animales);
  } else if (this.value === 'games') {
    questionStyle('0.8');


    const games = [
      "Assassin's Creed",
      'Arkham City',
      'Darksiders',
      'Devil May Cry',
      'Ghostrunner',
      'GTA V',
      'God of War',
      'Tomb Raider',
      'Warframe',
      'Bugsnax',
      'Gta San Andreas',
      'Gta IV',
      'Gta 3',
      'Gta Vice City',
      'Gta2',
      'Gta',
      'Heavy Rain',
      'Myst',
      'The Wolf Among Us',
      'Warzone',
      'Fortnite',
      'Spellbreak',
      "Fight'N Rage",
      'Sifu',
      'Brawlhalla',
      'Divekick',
      'Killer Instinct',
      'The Last Blade',
      'Mortal Kombat XL',
      'Mortal Kombat 11',
      'Samurai Shodown',
      'Tekken 7',
      'Dead Island',
      'Narcosis',
      'Resident Evil',
      'Blade & Soul',
      'Final Fantasy XIV',
      'Onigiri',
      'World of Warcraft',
      'Dota 2',
      'League of Legends',
      'Smite',
      'Inside',
      'Portal 2',
      'The Swapper',
      'Nfs Most Wanted',
      'Nfs No Limits',
      'Need for Speed',
      'Nfs Shift',
      'Nfs Underground',
      'Dirt 5',
      'Ridge Racer',
      'Cyberpunk 2077',
      'Dark Souls II',
      'Dark Souls III',
      'Hades',
      'Legend of Mana',
      'Mass Effect 2',
      'Nioh',
      'Nioh 2',
      'RymdResa',
      'Tales of Arise',
      'Wasteland 2',
      'Xanadu Next',
      'Ikaruga',
      'Mushihimesama',
      'Battlefield 4',
      'Battlefield V',
      'BioShock Infinite',
      'Counter-Strike',
      'Doom',
      'Doom Eternal',
      'Far Cry 4',
      'Gears 5',
      'Halo 3',
      'Overwatch',
      'Prey',
      'Superhot',
      'Vanquish',
    ];
    checkBtnFunction(games);
  } else if (this.value === 'programing') {
    questionStyle('0.87');
    const programing = [
      'Html',
      'Css',
      'Java',
      'JavaScript',
      'C++',
      'Python',
      'C',
      'PHP',
      'Kotlin',
      'Rust',
      'Swift',
      'Ruby',
      'Node.js',
      'React',
      '.NET',
      'GoLang',
      'Axum',
      'Boomerang',
      'Delphi',
      'Cobra',
      'Darwin',
      'Kodu',
      'MSL',
      'Net.Data',
      'Rapira',
      'Whiley',
      'Zeno',
      'Pascal',
      'Pizza',
      'PostScript',
      'UNITY',
    ];
    checkBtnFunction(programing);
  } else if (this.value === 'random') {
    questionStyle('0.77');

    const random = [
      'The Nanny',
      'Hannibal',
      'Hackerville',
      'Justified',
      'Rome',
      'Lost',
      'The X Files',
      'Game of Thrones',
      'MASH',
      'Breaking Bad',
      'Mostenirea',
      'Euphoria',
      'Mr.Bean',
      'Sherlock',
      'Cosmos',
      'Lois&Clark',
      'The Office',
      'Life',
      'Narcos',
      'Firefly',
      'The Originals',
      'Mr.Robot',
      'The Pacific',
      'Walking Dead',
      'Armin van Buuren',
      'Afrojack',
      'Don Diablo',
      'Oliver Heldens',
      'W&W',
      'Nervo',
      'Steve Aoki',
      'Tiesto',
      'Darude',
      'Chicane',
      'Alesso',
      'Rezz',
      'Morten',
      'Adam Beyer',
      'Beauz',
      'Pink Panda',
      'Deadmau5',
      'Like Mike',
      'Dimitri Vegas',
      'Net.Data',
      'Rapira',
      'Whiley',
      'Zeno',
      'Pascal',
      'Html',
      'Css',
      'Java',
      'JavaScript',
      'C++',
      'Python',
      'C',
      'PHP',
      "Assassin's Creed",
      'Arkham City',
      'Darksiders',
      'Devil May Cry',
      'Ghostrunner',
      'GTA V',
      'God of War',
      'Tomb Raider',
      'Gta San Andreas',
      'Gta IV',
      'Gta 3',
      'Gta Vice City',
      'Gta2',
      'Gta',
      'Heavy Rain',
      'Myst',
      'The Wolf Among Us',
      'cal',
      'omida',
      'vultur',
      'vaca',
      'bivol',
      'capra',
      'porc',
      'veverita',
      'strut',
      'urs',
      'iepure',
      'caine',
      'pisica',
      'soricel',
      'sobolan',
      'Vanessa Kirby',
      'Paul Walker',
      'Tom Cruise',
      'Brad Pitt',
      'Melissa McCarthy',
      'Vin Diesel',
      'Angelina Jolie',
      'Robert Pattinson',
      'Halle Berry',
      'Van Damme',
      'Joe Cole',
      'Gerard Butler',
      'Eva Green',
      'Rose Byrne',
      'Tobey Maguire',
      'Willem Dafoe',
      'James Franco',
      'Kirsten Dunst',
      'Elizabeth Banks',
      'Alfred Molina',
      'Ionut Fulea',
      'Loredana',
      'Hrusca',
      'Keo',
      'Lora',
      'Anna Lesko',
      'Miki',
      'Jador',
      'Moga',
      'Nico',
      'Dorian Popa',
      '5Gang',
      'Puya',
      'Ruby',
      'Roxen',
      'Smiley',
      'Paula Seling',
      'Alex Velea',
      'LaFamilia',
      'BUG Mafia',
      'Parazitii',
      'Cheloo',
      'Marie Claire',
      'The Weeknd',
      'Pulp Fiction',
      'The Matrix',
      'Inception',
      'Se7en',
      'Star Wars',
      'Terminator',
      '300',
      'Parasite',
      'Gladiator',
      'Spider-Man',
      'The Prestige',
      'Whiplash',
      'Ikiru',
      'Superman',
      'Heat',
      'Ant-Man',
      'Godzilla',
      'D.Strange',
      'Up',
      'Iron Man',
      'WandaVision',
      'Hawkeye',
      'Blade',
      'Die Hard',
      'Heat',
      'Scarface',
      'M',
      'Avengers',
      'Pasul Buzau',
      'Bran',
      'Rapa Rosie',
      '300 de scarii',
      'Cascada Evantai',
      'Colibita ',
      'Pestera Ialomitei',
      'Pestera Muierilor',
      'Lacul Bucura',
      'Satul Rohia',
      'Cazanele Mici',
      'Gradina Romei',
      'Rusia',
      'Germania',
      'Romania',
      'Austria',
      'Belgia',
      'Bulgaria',
      'Cehia',
      'Cipru',
      'Croatia',
      'Denmark',
      'Estonia',
      'Finlanda',
      'Franta',
      'Argentina',
      'Columbia',
      'Costa Rica',
      'Venezuela',
      'Ecuador',
      'Puerto Rico',
      'El Salvador',
      'Bolivia',
      'Panama',
      'Ucraina',
      'Uruguay',
      'Jamaica',
      'Paris',
      'Atena',
      'Madrid',
      'Cluj',
      'Bucuresti',
      'Brasov',
      'Suceava',
      'Oradea',
      'Roma',
      'Helsinki',
      'Napoli',
      'Dublin',
      'Praga',
      'Leipzig',
      'Varsovia',
      'Kiev',
      'Sofia',
      'Amsterdam',
      'Vilnius',
      'Riga',
      'Viena',
      'Hamburg',
      'Cracovia',
      'San Francisco',
      'Los Angeles',
      'San Diego',
      'Chicago',
      'Washington DC',
      'Philadelphia',
      'Boston',
      'Houston',
      'Seattle',
      'Austin',
      'San Antonio',
      'Shanghai',
      'Canton',
      'Nanjing',
      'Timisoara',
      'Sinaia',
      'Hangzhou',
      'Wuhan',
      'Volkswagen',
      'Nissan',
      'Mazda',
      'BMW',
      'Audi',
      'Toyota',
      'Auburn',
      'Duesenberg',
      'Tucker',
      'Packard',
      'Austin',
      'Logan',
      'Plymouth',
      'Pontiac',
      'Dacia 1310',
      'Trabant',
      'Lamborghini',
      'Skoda',
      'Tesla',
      'Renault',
      'Lexus',
      'Kia',
      'Jaguar',
      'Porsche',
      'Fiat',
      'Citroen',
      'Subaru',
      'Mitsubishi',
      'Oltcit',
      'Corvette',
      'Camaro',
      'Cadillac',
      'Bugatti',
      'Rolls-Royce',
      'Koenigsegg',
      'Aston Martin',
      'KTM',
      'MV Agusta',
      'Moto Guzzi',
      'Benelli',
      'Bajaj ',
      'Norton',
      'Victory',
      'Bimota',
      'Hero',
      'BMW Motorrad',
    ];
    checkBtnFunction(random);
  }
}

function againBtn() {

location.reload()
}

category.addEventListener('change', categoryChange);
again.addEventListener('click', againBtn);

highscore;
highscoreContent();
