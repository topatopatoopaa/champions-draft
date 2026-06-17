const POS = {
  GK: "POR",
  CB: "DFC",
  LB: "LI",
  RB: "LD",
  DM: "MCD",
  CM: "MC",
  AM: "MCO",
  LM: "MI",
  RM: "MD",
  LW: "EI",
  RW: "ED",
  ST: "DC"
};

const POS_EN = {
  GK: "GK",
  CB: "CB",
  LB: "LB",
  RB: "RB",
  DM: "DM",
  CM: "CM",
  AM: "AM",
  LM: "LM",
  RM: "RM",
  LW: "LW",
  RW: "RW",
  ST: "ST"
};

const POS_PT = {
  GK: "GOL",
  CB: "ZAG",
  LB: "LE",
  RB: "LD",
  DM: "VOL",
  CM: "MC",
  AM: "MEI",
  LM: "ME",
  RM: "MD",
  LW: "PE",
  RW: "PD",
  ST: "CA"
};

const formations = {
  "4-3-3": [["LW", "ST", "RW"], ["CM", "CM", "CM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "4-3-3 (2)": [["LW", "ST", "RW"], ["CM", "DM", "CM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "4-4-2": [["ST", "ST"], ["LM", "CM", "CM", "RM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "4-2-3-1": [["ST"], ["LW", "AM", "RW"], ["DM", "DM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "4-1-4-1": [["ST"], ["LM", "CM", "CM", "RM"], ["DM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "4-3-1-2": [["ST", "ST"], ["AM"], ["CM", "DM", "CM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "4-2-2-2": [["ST", "ST"], ["AM", "AM"], ["DM", "DM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "3-5-2": [["ST", "ST"], ["LM", "CM", "DM", "CM", "RM"], ["CB", "CB", "CB"], ["GK"]],
  "3-4-3": [["LW", "ST", "RW"], ["LM", "CM", "CM", "RM"], ["CB", "CB", "CB"], ["GK"]],
  "3-4-2-1": [["ST"], ["AM", "AM"], ["LM", "CM", "CM", "RM"], ["CB", "CB", "CB"], ["GK"]],
  "5-3-2": [["ST", "ST"], ["CM", "DM", "CM"], ["LB", "CB", "CB", "CB", "RB"], ["GK"]]
};

const teamPool = [
  team(2817, "Barcelona", "2014/15", "Campeon con MSN", 96, [
    p("Marc-Andre ter Stegen", 90, ["GK"]), p("Dani Alves", 91, ["RB", "RM"]), p("Gerard Pique", 91, ["CB"]),
    p("Javier Mascherano", 88, ["CB", "DM"]), p("Jordi Alba", 90, ["LB", "LM"]), p("Sergio Busquets", 92, ["DM", "CM"]),
    p("Andres Iniesta", 91, ["CM", "AM", "LM"]), p("Ivan Rakitic", 89, ["CM", "RM"]), p("Xavi", 87, ["CM"]),
    p("Lionel Messi", 99, ["RW", "ST", "AM"]), p("Luis Suarez", 95, ["ST"]), p("Neymar", 94, ["LW", "RW"]), p("Pedro", 84, ["LW", "RW"])
  ]),
  team(2829, "Real Madrid", "2016/17", "Bicampeon de Zidane", 97, [
    p("Keylor Navas", 89, ["GK"]), p("Dani Carvajal", 90, ["RB"]), p("Sergio Ramos", 93, ["CB"]),
    p("Raphael Varane", 88, ["CB"]), p("Marcelo", 92, ["LB", "LM"]), p("Casemiro", 90, ["DM"]),
    p("Toni Kroos", 93, ["CM", "DM"]), p("Luka Modric", 94, ["CM", "AM"]), p("Isco", 90, ["AM", "CM"]),
    p("Cristiano Ronaldo", 99, ["LW", "ST"]), p("Karim Benzema", 90, ["ST"]), p("Gareth Bale", 89, ["RW", "LW"]), p("Marco Asensio", 85, ["RW", "AM"])
  ]),
  team(2697, "Inter", "2009/10", "Triplete de Mourinho", 94, [
    p("Julio Cesar", 92, ["GK"]), p("Maicon", 93, ["RB", "RM"]), p("Lucio", 91, ["CB"]), p("Walter Samuel", 90, ["CB"]),
    p("Cristian Chivu", 84, ["LB", "CB"]), p("Javier Zanetti", 92, ["RB", "CM", "DM"]), p("Esteban Cambiasso", 90, ["DM", "CM"]),
    p("Wesley Sneijder", 94, ["AM", "CM"]), p("Dejan Stankovic", 86, ["CM", "RM"]), p("Samuel Eto'o", 91, ["LW", "ST"]),
    p("Diego Milito", 94, ["ST"]), p("Goran Pandev", 84, ["RW", "ST"])
  ]),
  team(2697, "Inter", "1998/99", "Cuartofinalista con Ronaldo y Baggio", 88, [
    p("Gianluca Pagliuca", 87, ["GK"]), p("Javier Zanetti", 91, ["RB", "RM", "CM"]), p("Giuseppe Bergomi", 84, ["CB", "RB"]),
    p("Taribo West", 82, ["CB"]), p("Francesco Colonnese", 80, ["CB", "LB"]), p("Mikael Silvestre", 79, ["LB", "CB"]),
    p("Diego Simeone", 88, ["DM", "CM"]), p("Paulo Sousa", 84, ["CM", "DM"]), p("Ze Elias", 79, ["DM", "CM"]),
    p("Youri Djorkaeff", 88, ["AM", "ST"]), p("Roberto Baggio", 90, ["AM", "ST"]), p("Ronaldo", 97, ["ST"]),
    p("Ivan Zamorano", 86, ["ST"]), p("Nicola Ventola", 81, ["ST"])
  ]),
  team(44, "Liverpool", "2018/19", "Campeon en Madrid", 94, [
    p("Alisson", 93, ["GK"]), p("Trent Alexander-Arnold", 90, ["RB", "RM"]), p("Virgil van Dijk", 96, ["CB"]),
    p("Joel Matip", 87, ["CB"]), p("Andy Robertson", 91, ["LB", "LM"]), p("Fabinho", 90, ["DM", "CB"]),
    p("Jordan Henderson", 87, ["CM", "DM"]), p("Georginio Wijnaldum", 88, ["CM", "AM"]), p("James Milner", 84, ["CM", "LB"]),
    p("Mohamed Salah", 94, ["RW", "ST"]), p("Sadio Mane", 93, ["LW", "ST"]), p("Roberto Firmino", 91, ["ST", "AM"]), p("Divock Origi", 84, ["ST", "LW"])
  ]),
  team(17, "Man City", "2022/23", "Primer titulo europeo del City", 96, [
    p("Ederson", 90, ["GK"]), p("Kyle Walker", 89, ["RB", "CB"]), p("Ruben Dias", 92, ["CB"]), p("John Stones", 91, ["CB", "DM"]),
    p("Nathan Ake", 87, ["LB", "CB"]), p("Rodri", 95, ["DM", "CM"]), p("Kevin De Bruyne", 95, ["CM", "AM"]),
    p("Ilkay Gundogan", 91, ["CM", "AM"]), p("Bernardo Silva", 92, ["RW", "CM", "AM"]), p("Erling Haaland", 97, ["ST"]),
    p("Jack Grealish", 88, ["LW"]), p("Phil Foden", 89, ["LW", "RW", "AM"]), p("Julian Alvarez", 86, ["ST", "AM"])
  ]),
  team(2672, "Bayern", "2019/20", "Campeon invicto", 97, [
    p("Manuel Neuer", 94, ["GK"]), p("Joshua Kimmich", 92, ["RB", "DM", "CM"]), p("Jerome Boateng", 87, ["CB"]),
    p("David Alaba", 91, ["CB", "LB"]), p("Alphonso Davies", 90, ["LB", "LM"]), p("Thiago Alcantara", 93, ["CM", "DM"]),
    p("Leon Goretzka", 90, ["CM", "DM"]), p("Thomas Muller", 92, ["AM", "ST"]), p("Serge Gnabry", 92, ["RW", "LW"]),
    p("Robert Lewandowski", 98, ["ST"]), p("Kingsley Coman", 89, ["LW", "RW"]), p("Ivan Perisic", 86, ["LW", "LM"])
  ]),
  team(1644, "PSG", "2019/20", "Finalista en Lisboa", 91, [
    p("Keylor Navas", 90, ["GK"]), p("Thilo Kehrer", 84, ["RB", "CB"]), p("Marquinhos", 91, ["CB", "DM"]),
    p("Presnel Kimpembe", 87, ["CB"]), p("Juan Bernat", 86, ["LB", "LM"]), p("Marco Verratti", 91, ["CM", "DM"]),
    p("Leandro Paredes", 85, ["DM", "CM"]), p("Angel Di Maria", 90, ["RW", "AM"]), p("Ander Herrera", 84, ["CM"]),
    p("Neymar", 96, ["LW", "AM"]), p("Kylian Mbappe", 95, ["ST", "RW", "LW"]), p("Mauro Icardi", 86, ["ST"])
  ]),
  team(2673, "Dortmund", "2012/13", "Finalista con Klopp", 91, [
    p("Roman Weidenfeller", 88, ["GK"]), p("Lukasz Piszczek", 89, ["RB"]), p("Mats Hummels", 92, ["CB"]),
    p("Neven Subotic", 88, ["CB"]), p("Marcel Schmelzer", 86, ["LB"]), p("Ilkay Gundogan", 91, ["CM", "DM"]),
    p("Sven Bender", 86, ["DM"]), p("Mario Gotze", 91, ["AM", "RW"]), p("Marco Reus", 92, ["LW", "AM"]),
    p("Robert Lewandowski", 94, ["ST"]), p("Jakub Blaszczykowski", 88, ["RW", "RM"]), p("Kevin Grosskreutz", 83, ["LM", "LW"])
  ]),
  team(38, "Chelsea", "2011/12", "Campeon en Munich", 90, [
    p("Petr Cech", 93, ["GK"]), p("Branislav Ivanovic", 88, ["RB", "CB"]), p("John Terry", 90, ["CB"]),
    p("David Luiz", 87, ["CB", "DM"]), p("Ashley Cole", 91, ["LB"]), p("Frank Lampard", 91, ["CM", "AM"]),
    p("Michael Essien", 85, ["DM", "CM"]), p("Ramires", 88, ["CM", "RM"]), p("Juan Mata", 89, ["AM", "RW"]),
    p("Didier Drogba", 93, ["ST"]), p("Fernando Torres", 84, ["ST"]), p("Daniel Sturridge", 82, ["ST", "RW"])
  ]),
  team(2836, "Atletico Madrid", "2015/16", "Finalista de Simeone", 91, [
    p("Jan Oblak", 92, ["GK"]), p("Juanfran", 88, ["RB"]), p("Diego Godin", 93, ["CB"]), p("Jose Gimenez", 88, ["CB"]),
    p("Filipe Luis", 89, ["LB"]), p("Gabi", 88, ["DM", "CM"]), p("Koke", 90, ["CM", "LM"]), p("Saul Niguez", 89, ["CM", "LM"]),
    p("Yannick Carrasco", 86, ["LM", "LW"]), p("Antoine Griezmann", 93, ["ST", "AM"]), p("Fernando Torres", 86, ["ST"]), p("Angel Correa", 82, ["ST", "RW"])
  ]),
  team(2032, "Olympiacos", "2019/20", "Equipo duro de fase eliminatoria", 78, [
    p("Jose Sa", 81, ["GK"]), p("Omar Elabdellaoui", 78, ["RB"]), p("Ruben Semedo", 79, ["CB"]), p("Ousseynou Ba", 76, ["CB"]),
    p("Kostas Tsimikas", 80, ["LB", "LM"]), p("Mady Camara", 79, ["CM", "DM"]), p("Guilherme", 78, ["DM"]),
    p("Mathieu Valbuena", 80, ["AM", "RW"]), p("Giorgos Masouras", 77, ["LW", "RM"]), p("Youssef El-Arabi", 82, ["ST"]), p("Lazar Randjelovic", 74, ["RW"])
  ]),
  team(2999, "Club Brugge", "2021/22", "Sorpresa belga", 76, [
    p("Simon Mignolet", 80, ["GK"]), p("Clinton Mata", 77, ["RB", "CB"]), p("Brandon Mechele", 76, ["CB"]), p("Stanley Nsoki", 75, ["CB", "LB"]),
    p("Eduard Sobol", 75, ["LB"]), p("Hans Vanaken", 82, ["AM", "CM"]), p("Mats Rits", 76, ["DM", "CM"]), p("Ruud Vormer", 75, ["CM"]),
    p("Noa Lang", 80, ["LW", "RW"]), p("Charles De Ketelaere", 81, ["ST", "AM"]), p("Bas Dost", 76, ["ST"])
  ]),
  team(5893, "Qarabag", "2017/18", "Cenicienta de grupos", 68, [
    p("Ibrahim Sehic", 72, ["GK"]), p("Maksim Medvedev", 70, ["RB", "CB"]), p("Rashad Sadygov", 70, ["CB"]), p("Badavi Huseynov", 69, ["CB"]),
    p("Ansi Agolli", 69, ["LB"]), p("Qara Qarayev", 70, ["DM", "CM"]), p("Michel", 71, ["CM"]), p("Richard Almeida", 72, ["AM", "CM"]),
    p("Dino Ndlovu", 73, ["ST"]), p("Pedro Henrique", 71, ["LW", "RW"]), p("Mahir Emreli", 69, ["ST", "RW"])
  ]),
  team(5150, "Pafos", "2025/26", "Debutante incomodo", 67, [
    p("Ivica Ivusic", 71, ["GK"]), p("Bruno", 69, ["RB", "RM"]), p("David Goldar", 70, ["CB"]), p("Josef Kvida", 68, ["CB"]),
    p("Jonathan Silva", 69, ["LB"]), p("Pepe", 71, ["DM", "CM"]), p("Vlad Dragomir", 72, ["CM", "AM"]), p("Muamer Tankovic", 71, ["AM", "LW"]),
    p("Jairo", 72, ["ST", "LW"]), p("Anderson Silva", 70, ["ST"]), p("Jaja", 68, ["RW", "LW"])
  ]),
  team(3158, "Kairat", "2025/26", "Viaje largo y plantel modesto", 64, [
    p("Aleksandr Zarutskiy", 68, ["GK"]), p("Yan Vorogovskiy", 68, ["LB", "LM"]), p("Aleksandr Martynovich", 69, ["CB"]), p("Egor Sorokin", 67, ["CB"]),
    p("Ofri Arad", 66, ["CB"]), p("Valeri Gromyko", 69, ["CM", "AM"]), p("Bauyrzhan Islamkhan", 70, ["AM", "CM"]), p("Jorginho", 69, ["LW", "RW"]),
    p("Ricardinho", 68, ["RW", "AM"]), p("Elder Santana", 68, ["ST"]), p("Artur Shushenachev", 67, ["ST"])
  ]),
  team(3006, "Benfica", "2022/23", "Cuartofinalista atrevido", 82, [
    p("Odysseas Vlachodimos", 80, ["GK"]), p("Alexander Bah", 78, ["RB"]), p("Nicolas Otamendi", 84, ["CB"]), p("Antonio Silva", 81, ["CB"]),
    p("Alex Grimaldo", 85, ["LB", "LM"]), p("Florentino Luis", 82, ["DM"]), p("Enzo Fernandez", 87, ["CM", "DM"]), p("Joao Mario", 82, ["AM", "RM"]),
    p("Rafa Silva", 83, ["AM", "LW"]), p("Goncalo Ramos", 84, ["ST"]), p("David Neres", 82, ["RW", "LW"])
  ]),
  team(2952, "PSV", "2023/24", "Ataque fuerte, defensa irregular", 79, [
    p("Walter Benitez", 79, ["GK"]), p("Sergino Dest", 78, ["RB", "LB"]), p("Olivier Boscagli", 80, ["CB", "LB"]), p("Andre Ramalho", 76, ["CB"]),
    p("Mauro Junior", 77, ["LB", "LM"]), p("Jerdy Schouten", 82, ["DM", "CM"]), p("Joey Veerman", 83, ["CM"]), p("Malik Tillman", 81, ["AM", "CM"]),
    p("Johan Bakayoko", 82, ["RW"]), p("Luuk de Jong", 83, ["ST"]), p("Noa Lang", 81, ["LW"])
  ]),
  team(2997, "Union SG", "2025/26", "Mucho orden y poco brillo", 70, [
    p("Anthony Moris", 72, ["GK"]), p("Kevin Mac Allister", 72, ["CB", "RB"]), p("Christian Burgess", 73, ["CB"]), p("Ross Sykes", 70, ["CB"]),
    p("Fedde Leysen", 69, ["LB", "CB"]), p("Charles Vanhoutte", 72, ["DM", "CM"]), p("Noah Sadiki", 71, ["CM", "DM"]), p("Lazare Amani", 70, ["CM", "AM"]),
    p("Mohammed Fuseini", 72, ["RW", "ST"]), p("Promise David", 73, ["ST"]), p("Franjo Ivanovic", 71, ["ST", "LW"])
  ]),
  team(2905, "Kobenhavn", "2023/24", "Equipo fisico de Parken", 72, [
    p("Kamil Grabara", 76, ["GK"]), p("Elias Jelert", 73, ["RB", "LB"]), p("Denis Vavro", 75, ["CB"]), p("Kevin Diks", 74, ["CB", "RB"]),
    p("Birger Meling", 72, ["LB", "LM"]), p("Thomas Delaney", 75, ["DM", "CM"]), p("Lukas Lerager", 74, ["CM"]), p("William Clem", 71, ["CM", "DM"]),
    p("Mohamed Elyounoussi", 76, ["LW", "RW"]), p("Jordan Larsson", 73, ["ST", "RW"]), p("Roony Bardghji", 74, ["RW"])
  ]),
  team(2953, "Ajax", "2018/19", "Semifinalista joven", 88, [
    p("Andre Onana", 86, ["GK"]), p("Noussair Mazraoui", 84, ["RB"]), p("Matthijs de Ligt", 91, ["CB"]), p("Daley Blind", 86, ["CB", "LB"]),
    p("Nicolas Tagliafico", 85, ["LB"]), p("Frenkie de Jong", 92, ["CM", "DM"]), p("Lasse Schone", 83, ["DM", "CM"]), p("Donny van de Beek", 86, ["AM", "CM"]),
    p("Hakim Ziyech", 88, ["RW", "AM"]), p("Dusan Tadic", 89, ["ST", "LW"]), p("David Neres", 85, ["LW", "RW"])
  ]),
  team(3061, "Galatasaray", "2023/24", "Bombazo turco", 78, [
    p("Fernando Muslera", 80, ["GK"]), p("Sacha Boey", 80, ["RB"]), p("Davinson Sanchez", 80, ["CB"]), p("Abdulkerim Bardakci", 77, ["CB"]),
    p("Angelino", 77, ["LB", "LM"]), p("Lucas Torreira", 82, ["DM", "CM"]), p("Kerem Demirbay", 78, ["CM"]), p("Dries Mertens", 80, ["AM"]),
    p("Hakim Ziyech", 81, ["RW", "AM"]), p("Mauro Icardi", 83, ["ST"]), p("Wilfried Zaha", 79, ["LW"])
  ]),
  team(1653, "Monaco", "2016/17", "Semifinalista explosivo", 86, [
    p("Danijel Subasic", 84, ["GK"]), p("Djibril Sidibe", 83, ["RB"]), p("Kamil Glik", 84, ["CB"]), p("Jemerson", 82, ["CB"]),
    p("Benjamin Mendy", 84, ["LB", "LM"]), p("Fabinho", 87, ["DM", "CM"]), p("Tiemoue Bakayoko", 84, ["CM", "DM"]), p("Bernardo Silva", 88, ["RM", "AM", "RW"]),
    p("Thomas Lemar", 86, ["LM", "LW"]), p("Kylian Mbappe", 90, ["ST", "RW"]), p("Radamel Falcao", 88, ["ST"])
  ]),
  team(2686, "Atalanta", "2019/20", "Caos ofensivo de Gasperini", 81, [
    p("Pierluigi Gollini", 78, ["GK"]), p("Rafael Toloi", 80, ["CB", "RB"]), p("Jose Palomino", 79, ["CB"]), p("Berat Djimsiti", 78, ["CB"]),
    p("Robin Gosens", 84, ["LM", "LB"]), p("Hans Hateboer", 81, ["RM", "RB"]), p("Marten de Roon", 81, ["DM", "CM"]), p("Remo Freuler", 80, ["CM"]),
    p("Alejandro Gomez", 88, ["AM", "LW"]), p("Josip Ilicic", 87, ["ST", "RW", "AM"]), p("Duvan Zapata", 85, ["ST"])
  ]),
  team(2819, "Villarreal", "2021/22", "Especialista en eliminatorias", 80, [
    p("Geronimo Rulli", 78, ["GK"]), p("Juan Foyth", 80, ["RB", "CB"]), p("Raul Albiol", 81, ["CB"]), p("Pau Torres", 84, ["CB"]),
    p("Pervis Estupinan", 80, ["LB", "LM"]), p("Etienne Capoue", 80, ["DM", "CM"]), p("Dani Parejo", 83, ["CM"]), p("Francis Coquelin", 78, ["CM", "DM"]),
    p("Giovani Lo Celso", 81, ["AM", "RM"]), p("Arnaut Danjuma", 82, ["LW", "ST"]), p("Gerard Moreno", 84, ["ST", "RW"])
  ]),
  team(3002, "Porto", "2018/19", "Cuartos con oficio europeo", 80, [
    p("Iker Casillas", 82, ["GK"]), p("Eder Militao", 84, ["RB", "CB"]), p("Pepe", 83, ["CB"]), p("Felipe", 81, ["CB"]),
    p("Alex Telles", 83, ["LB", "LM"]), p("Danilo Pereira", 82, ["DM", "CM"]), p("Hector Herrera", 81, ["CM"]), p("Otavio", 79, ["AM", "RM"]),
    p("Jesus Corona", 81, ["RW", "RM"]), p("Moussa Marega", 80, ["ST", "RW"]), p("Tiquinho Soares", 79, ["ST"])
  ]),
  team(36360, "RB Leipzig", "2019/20", "Semifinalista veloz", 82, [
    p("Peter Gulacsi", 83, ["GK"]), p("Lukas Klostermann", 81, ["RB", "CB"]), p("Dayot Upamecano", 85, ["CB"]), p("Marcel Halstenberg", 80, ["CB", "LB"]),
    p("Angelino", 82, ["LB", "LM"]), p("Konrad Laimer", 82, ["DM", "CM", "RM"]), p("Marcel Sabitzer", 84, ["CM", "AM"]), p("Kevin Kampl", 80, ["CM"]),
    p("Emil Forsberg", 82, ["AM", "LW"]), p("Timo Werner", 86, ["ST", "LW"]), p("Christopher Nkunku", 81, ["AM", "RW"])
  ]),
  team(2702, "Roma", "2017/18", "Semifinalista tras remontar al Barca", 83, [
    p("Alisson", 88, ["GK"]), p("Alessandro Florenzi", 81, ["RB", "RM"]), p("Kostas Manolas", 84, ["CB"]), p("Federico Fazio", 80, ["CB"]),
    p("Aleksandar Kolarov", 83, ["LB", "LM"]), p("Daniele De Rossi", 84, ["DM", "CM"]), p("Radja Nainggolan", 86, ["CM", "AM"]), p("Kevin Strootman", 82, ["CM"]),
    p("Cengiz Under", 80, ["RW"]), p("Edin Dzeko", 86, ["ST"]), p("Stephan El Shaarawy", 81, ["LW"])
  ]),
  team(1649, "Lyon", "2019/20", "Semifinalista sorpresa", 80, [
    p("Anthony Lopes", 82, ["GK"]), p("Leo Dubois", 79, ["RB"]), p("Jason Denayer", 80, ["CB"]), p("Marcelo", 78, ["CB"]),
    p("Marcal", 77, ["LB", "CB"]), p("Bruno Guimaraes", 82, ["DM", "CM"]), p("Houssem Aouar", 84, ["CM", "AM"]), p("Maxence Caqueret", 79, ["CM"]),
    p("Memphis Depay", 86, ["LW", "ST", "AM"]), p("Moussa Dembele", 82, ["ST"]), p("Karl Toko Ekambi", 79, ["RW", "LW"])
  ]),
  team(3448, "Shakhtar", "2010/11", "Brasileros y contragolpe", 79, [
    p("Andriy Pyatov", 79, ["GK"]), p("Darijo Srna", 84, ["RB", "RM"]), p("Dmytro Chygrynskiy", 78, ["CB"]), p("Yaroslav Rakitskiy", 79, ["CB"]),
    p("Razvan Rat", 78, ["LB"]), p("Fernandinho", 84, ["DM", "CM"]), p("Henrikh Mkhitaryan", 82, ["AM", "CM"]), p("Jadson", 81, ["AM", "CM"]),
    p("Douglas Costa", 82, ["RW", "LW"]), p("Luiz Adriano", 80, ["ST"]), p("Willian", 83, ["LW", "RW"])
  ])
];

teamPool.push(
  team(2817, "Barcelona", "2008/09", "Triplete de Guardiola", 95, [
    p("Victor Valdes", 87, ["GK"]), p("Dani Alves", 91, ["RB", "RM"]), p("Carles Puyol", 91, ["CB", "RB"]), p("Gerard Pique", 88, ["CB"]),
    p("Eric Abidal", 86, ["LB", "CB"]), p("Yaya Toure", 88, ["DM", "CM"]), p("Xavi", 96, ["CM"]), p("Andres Iniesta", 95, ["CM", "AM", "LW"]),
    p("Lionel Messi", 99, ["RW", "ST", "AM"]), p("Samuel Eto'o", 93, ["ST"]), p("Thierry Henry", 90, ["LW", "ST"]), p("Seydou Keita", 83, ["CM", "LM"])
  ]),
  team(2829, "Real Madrid", "2013/14", "La Decima de Ancelotti", 94, [
    p("Iker Casillas", 88, ["GK"]), p("Dani Carvajal", 85, ["RB"]), p("Sergio Ramos", 93, ["CB"]), p("Pepe", 88, ["CB"]),
    p("Fabio Coentrao", 83, ["LB"]), p("Xabi Alonso", 90, ["DM", "CM"]), p("Luka Modric", 91, ["CM"]), p("Angel Di Maria", 91, ["CM", "LM", "RM"]),
    p("Cristiano Ronaldo", 99, ["LW", "ST"]), p("Karim Benzema", 89, ["ST"]), p("Gareth Bale", 91, ["RW", "LW"]), p("Isco", 86, ["AM", "CM"])
  ]),
  team(2672, "Bayern", "2012/13", "Triplete de Heynckes", 94, [
    p("Manuel Neuer", 92, ["GK"]), p("Philipp Lahm", 93, ["RB", "DM"]), p("Dante", 86, ["CB"]), p("Jerome Boateng", 86, ["CB"]),
    p("David Alaba", 88, ["LB", "CM"]), p("Javi Martinez", 89, ["DM", "CB"]), p("Bastian Schweinsteiger", 93, ["CM", "DM"]), p("Toni Kroos", 88, ["CM", "AM"]),
    p("Arjen Robben", 92, ["RW"]), p("Mario Mandzukic", 88, ["ST"]), p("Franck Ribery", 93, ["LW"]), p("Thomas Muller", 90, ["AM", "ST", "RM"])
  ]),
  team(44, "Liverpool", "2004/05", "Milagro de Estambul", 87, [
    p("Jerzy Dudek", 84, ["GK"]), p("Steve Finnan", 80, ["RB"]), p("Jamie Carragher", 88, ["CB"]), p("Sami Hyypia", 86, ["CB"]),
    p("Djimi Traore", 76, ["LB"]), p("Xabi Alonso", 88, ["CM", "DM"]), p("Steven Gerrard", 93, ["CM", "AM", "RM"]), p("Dietmar Hamann", 82, ["DM", "CM"]),
    p("Luis Garcia", 84, ["RW", "AM"]), p("Milan Baros", 82, ["ST"]), p("Harry Kewell", 82, ["LW", "LM"]), p("Vladimir Smicer", 80, ["AM", "RM"])
  ]),
  team(38, "Chelsea", "2020/21", "Campeon de Tuchel", 90, [
    p("Edouard Mendy", 88, ["GK"]), p("Reece James", 87, ["RB", "RM"]), p("Thiago Silva", 89, ["CB"]), p("Antonio Rudiger", 88, ["CB"]),
    p("Ben Chilwell", 84, ["LB", "LM"]), p("N'Golo Kante", 93, ["CM", "DM"]), p("Jorginho", 87, ["DM", "CM"]), p("Mason Mount", 87, ["AM", "CM"]),
    p("Kai Havertz", 86, ["AM", "ST"]), p("Timo Werner", 84, ["ST", "LW"]), p("Christian Pulisic", 84, ["LW", "RW"]), p("Hakim Ziyech", 84, ["RW", "AM"])
  ]),
  team(2692, "Milan", "2004/05", "Finalista de Estambul", 94, [
    p("Dida", 89, ["GK"]), p("Cafu", 88, ["RB"]), p("Alessandro Nesta", 94, ["CB"]), p("Jaap Stam", 89, ["CB"]),
    p("Paolo Maldini", 93, ["LB", "CB"]), p("Andrea Pirlo", 94, ["DM", "CM"]), p("Gennaro Gattuso", 90, ["DM", "CM"]), p("Clarence Seedorf", 91, ["CM", "AM"]),
    p("Kaka", 96, ["AM"]), p("Andriy Shevchenko", 94, ["ST"]), p("Hernan Crespo", 89, ["ST"]), p("Serginho", 82, ["LM", "LB"])
  ]),
  team(2697, "Inter", "2022/23", "Finalista de Inzaghi", 87, [
    p("Andre Onana", 86, ["GK"]), p("Matteo Darmian", 82, ["CB", "RB"]), p("Francesco Acerbi", 84, ["CB"]), p("Alessandro Bastoni", 86, ["CB", "LB"]),
    p("Denzel Dumfries", 83, ["RM", "RB"]), p("Hakan Calhanoglu", 86, ["DM", "CM"]), p("Nicolo Barella", 88, ["CM"]), p("Federico Dimarco", 84, ["LM", "LB"]),
    p("Lautaro Martinez", 90, ["ST"]), p("Edin Dzeko", 84, ["ST"]), p("Romelu Lukaku", 84, ["ST"]), p("Henrikh Mkhitaryan", 83, ["CM", "AM"])
  ]),
  team(35, "Man United", "1998/99", "Final inolvidable en Barcelona", 93, [
    p("Peter Schmeichel", 92, ["GK"]), p("Gary Neville", 86, ["RB"]), p("Jaap Stam", 91, ["CB"]), p("Ronny Johnsen", 84, ["CB"]),
    p("Denis Irwin", 87, ["LB"]), p("Roy Keane", 93, ["CM", "DM"]), p("Paul Scholes", 91, ["CM", "AM"]), p("David Beckham", 92, ["RM", "CM"]),
    p("Ryan Giggs", 91, ["LM", "LW"]), p("Dwight Yorke", 89, ["ST"]), p("Andy Cole", 88, ["ST"]), p("Ole Gunnar Solskjaer", 84, ["ST"])
  ]),
  team(3002, "Porto", "2003/04", "Campeon de Mourinho", 86, [
    p("Vitor Baia", 85, ["GK"]), p("Paulo Ferreira", 84, ["RB"]), p("Ricardo Carvalho", 90, ["CB"]), p("Jorge Costa", 84, ["CB"]),
    p("Nuno Valente", 82, ["LB"]), p("Costinha", 85, ["DM", "CM"]), p("Maniche", 87, ["CM"]), p("Deco", 91, ["AM", "CM"]),
    p("Carlos Alberto", 83, ["RW", "AM"]), p("Benni McCarthy", 84, ["ST"]), p("Derlei", 83, ["ST", "LW"]), p("Dmitri Alenichev", 81, ["AM", "RM"])
  ]),
  team(2953, "Ajax", "1994/95", "Campeon joven de Van Gaal", 92, [
    p("Edwin van der Sar", 89, ["GK"]), p("Michael Reiziger", 85, ["RB"]), p("Frank Rijkaard", 91, ["CB", "DM"]), p("Frank de Boer", 90, ["CB", "LB"]),
    p("Danny Blind", 87, ["CB", "LB"]), p("Edgar Davids", 89, ["CM", "DM"]), p("Clarence Seedorf", 88, ["CM", "AM"]), p("Jari Litmanen", 92, ["AM", "ST"]),
    p("Finidi George", 86, ["RW", "RM"]), p("Patrick Kluivert", 87, ["ST"]), p("Marc Overmars", 88, ["LW", "LM"]), p("Nwankwo Kanu", 84, ["ST"])
  ]),
  team(2829, "Real Madrid", "2001/02", "Golazo de Zidane en Glasgow", 93, [
    p("Iker Casillas", 88, ["GK"]), p("Michel Salgado", 85, ["RB"]), p("Fernando Hierro", 88, ["CB"]), p("Ivan Helguera", 85, ["CB", "DM"]),
    p("Roberto Carlos", 93, ["LB", "LM"]), p("Claude Makelele", 89, ["DM", "CM"]), p("Luis Figo", 93, ["RW", "RM"]), p("Zinedine Zidane", 96, ["AM", "CM"]),
    p("Santiago Solari", 84, ["LM", "CM"]), p("Raul", 92, ["ST", "AM"]), p("Fernando Morientes", 87, ["ST"]), p("Guti", 84, ["AM", "CM"])
  ]),
  team(2829, "Real Madrid", "2002/03", "Semifinalista galactico con Ronaldo", 92, [
    p("Iker Casillas", 89, ["GK"]), p("Michel Salgado", 84, ["RB"]), p("Fernando Hierro", 86, ["CB"]), p("Ivan Helguera", 86, ["CB", "DM"]),
    p("Roberto Carlos", 95, ["LB", "LM"]), p("Claude Makelele", 91, ["DM", "CM"]), p("Luis Figo", 94, ["RW", "RM"]), p("Zinedine Zidane", 96, ["AM", "CM"]),
    p("Steve McManaman", 82, ["RM", "CM", "AM"]), p("Guti", 85, ["AM", "CM", "ST"]), p("Raul", 92, ["ST", "AM"]), p("Ronaldo", 97, ["ST"]),
    p("Fernando Morientes", 86, ["ST"])
  ]),
  team(2672, "Bayern", "2000/01", "Campeon por penales en Milan", 90, [
    p("Oliver Kahn", 94, ["GK"]), p("Willy Sagnol", 84, ["RB"]), p("Samuel Kuffour", 86, ["CB"]), p("Thomas Linke", 84, ["CB"]),
    p("Bixente Lizarazu", 87, ["LB"]), p("Owen Hargreaves", 83, ["DM", "CM"]), p("Stefan Effenberg", 90, ["CM", "DM"]), p("Mehmet Scholl", 88, ["AM", "LM"]),
    p("Hasan Salihamidzic", 84, ["RM", "RB"]), p("Giovane Elber", 88, ["ST"]), p("Carsten Jancker", 82, ["ST"]), p("Paulo Sergio", 82, ["ST", "LW"])
  ]),
  team(2817, "Barcelona", "2010/11", "Final de Wembley", 97, [
    p("Victor Valdes", 88, ["GK"]), p("Dani Alves", 92, ["RB", "RM"]), p("Gerard Pique", 91, ["CB"]), p("Carles Puyol", 90, ["CB", "RB"]),
    p("Eric Abidal", 87, ["LB", "CB"]), p("Sergio Busquets", 92, ["DM", "CM"]), p("Xavi", 97, ["CM"]), p("Andres Iniesta", 96, ["CM", "AM"]),
    p("Lionel Messi", 99, ["ST", "RW", "AM"]), p("David Villa", 91, ["LW", "ST"]), p("Pedro", 87, ["RW", "LW"]), p("Javier Mascherano", 84, ["CB", "DM"])
  ]),
  team(44, "Liverpool", "2021/22", "Finalista de Paris", 92, [
    p("Alisson", 92, ["GK"]), p("Trent Alexander-Arnold", 90, ["RB", "RM"]), p("Ibrahima Konate", 85, ["CB"]), p("Virgil van Dijk", 94, ["CB"]),
    p("Andy Robertson", 90, ["LB", "LM"]), p("Fabinho", 89, ["DM", "CB"]), p("Thiago Alcantara", 89, ["CM"]), p("Jordan Henderson", 84, ["CM", "RM"]),
    p("Mohamed Salah", 94, ["RW", "ST"]), p("Sadio Mane", 91, ["LW", "ST"]), p("Luis Diaz", 86, ["LW", "RW"]), p("Diogo Jota", 85, ["ST", "LW"])
  ]),
  team(38, "Chelsea", "2007/08", "Finalista en Moscu", 91, [
    p("Petr Cech", 92, ["GK"]), p("Michael Essien", 88, ["RB", "DM", "CM"]), p("Ricardo Carvalho", 89, ["CB"]), p("John Terry", 91, ["CB"]),
    p("Ashley Cole", 90, ["LB"]), p("Claude Makelele", 87, ["DM"]), p("Frank Lampard", 92, ["CM", "AM"]), p("Michael Ballack", 89, ["CM", "AM"]),
    p("Joe Cole", 87, ["RW", "AM"]), p("Didier Drogba", 92, ["ST"]), p("Florent Malouda", 84, ["LW", "LM"]), p("Nicolas Anelka", 84, ["ST", "RW"])
  ]),
  team(2673, "Dortmund", "1996/97", "Campeon contra Juventus", 88, [
    p("Stefan Klos", 85, ["GK"]), p("Stefan Reuter", 85, ["RB"]), p("Jurgen Kohler", 90, ["CB"]), p("Matthias Sammer", 92, ["CB", "DM"]),
    p("Jorg Heinrich", 84, ["LB", "LM"]), p("Paulo Sousa", 87, ["CM", "DM"]), p("Andreas Moller", 90, ["AM", "CM"]), p("Paul Lambert", 84, ["DM", "CM"]),
    p("Lars Ricken", 82, ["AM", "RM"]), p("Karl-Heinz Riedle", 86, ["ST"]), p("Stephane Chapuisat", 87, ["ST"]), p("Heiko Herrlich", 82, ["ST"])
  ]),
  team(9885, "Juventus", "1995/96", "Campeon con Lippi", 91, [
    p("Angelo Peruzzi", 90, ["GK"]), p("Moreno Torricelli", 84, ["RB", "LB"]), p("Ciro Ferrara", 90, ["CB"]), p("Pietro Vierchowod", 86, ["CB"]),
    p("Gianluca Pessotto", 83, ["LB", "RB", "LM"]), p("Didier Deschamps", 89, ["DM", "CM"]), p("Paulo Sousa", 88, ["CM", "DM"]), p("Antonio Conte", 87, ["CM", "RM", "DM"]),
    p("Vladimir Jugovic", 88, ["CM", "RM", "AM"]), p("Alessandro Del Piero", 93, ["ST", "LW", "AM"]), p("Gianluca Vialli", 91, ["ST"]), p("Fabrizio Ravanelli", 88, ["ST", "LW"])
  ]),
  team(9885, "Juventus", "2002/03", "Finalista en Old Trafford", 92, [
    p("Gianluigi Buffon", 94, ["GK"]), p("Lilian Thuram", 91, ["RB", "CB"]), p("Ciro Ferrara", 87, ["CB"]), p("Paolo Montero", 86, ["CB"]),
    p("Gianluca Zambrotta", 90, ["LB", "LM", "RB", "RM"]), p("Alessandro Birindelli", 80, ["LB", "RB"]), p("Alessio Tacchinardi", 85, ["DM", "CM"]), p("Edgar Davids", 91, ["CM", "DM"]),
    p("Mauro Camoranesi", 87, ["RM", "RW", "CM"]), p("Pavel Nedved", 94, ["AM", "LM", "CM"]), p("Alessandro Del Piero", 92, ["ST", "AM"]), p("David Trezeguet", 90, ["ST"])
  ]),
  team(33, "Tottenham", "2018/19", "Finalista de Pochettino", 86, [
    p("Hugo Lloris", 88, ["GK"]), p("Kieran Trippier", 82, ["RB", "RM"]), p("Toby Alderweireld", 88, ["CB"]), p("Jan Vertonghen", 87, ["CB", "LB"]),
    p("Danny Rose", 81, ["LB", "LM"]), p("Moussa Sissoko", 84, ["CM", "RM", "DM"]), p("Harry Winks", 80, ["CM", "DM"]), p("Christian Eriksen", 89, ["AM", "CM", "RM"]),
    p("Dele Alli", 85, ["AM", "CM"]), p("Son Heung-min", 90, ["LW", "ST", "RW"]), p("Harry Kane", 92, ["ST"]), p("Lucas Moura", 84, ["RW", "ST", "LW"])
  ]),
  team(3321, "Leverkusen", "2001/02", "Finalista del Neverkusen", 88, [
    p("Hans-Jorg Butt", 84, ["GK"]), p("Zoltan Sebescen", 79, ["RB"]), p("Lucio", 91, ["CB"]), p("Jens Nowotny", 88, ["CB"]),
    p("Diego Placente", 83, ["LB"]), p("Carsten Ramelow", 86, ["DM", "CB"]), p("Michael Ballack", 93, ["CM", "AM"]), p("Bernd Schneider", 88, ["RM", "CM", "AM"]),
    p("Yildiray Basturk", 86, ["AM", "CM"]), p("Ze Roberto", 89, ["LM", "LW", "LB"]), p("Oliver Neuville", 86, ["ST", "RW"]), p("Dimitar Berbatov", 82, ["ST"])
  ]),
  team(2699, "Lazio", "1999/00", "Campeon italiano y potencia europea", 89, [
    p("Luca Marchegiani", 86, ["GK"]), p("Paolo Negro", 83, ["RB", "CB"]), p("Alessandro Nesta", 94, ["CB"]), p("Sinisa Mihajlovic", 88, ["CB", "LB"]),
    p("Giuseppe Pancaro", 83, ["LB"]), p("Diego Simeone", 88, ["DM", "CM"]), p("Matias Almeyda", 87, ["DM", "CM"]), p("Juan Sebastian Veron", 93, ["CM", "AM"]),
    p("Pavel Nedved", 91, ["LM", "AM", "CM"]), p("Sergio Conceicao", 86, ["RM", "RW"]), p("Marcelo Salas", 89, ["ST"]), p("Simone Inzaghi", 83, ["ST"])
  ]),
  team(35, "Man United", "2007/08", "Campeon en Moscu", 94, [
    p("Edwin van der Sar", 91, ["GK"]), p("Wes Brown", 82, ["RB", "CB"]), p("Rio Ferdinand", 92, ["CB"]), p("Nemanja Vidic", 92, ["CB"]),
    p("Patrice Evra", 90, ["LB", "LM"]), p("Michael Carrick", 87, ["DM", "CM"]), p("Paul Scholes", 89, ["CM"]), p("Owen Hargreaves", 86, ["CM", "RM"]),
    p("Cristiano Ronaldo", 99, ["RW", "LW", "ST"]), p("Wayne Rooney", 92, ["ST", "LW"]), p("Carlos Tevez", 90, ["ST"]), p("Ryan Giggs", 86, ["LM", "LW"]),
    p("Nani", 83, ["LW", "RW"])
  ]),
  team(2692, "Milan", "2006/07", "Campeon en Atenas", 93, [
    p("Dida", 87, ["GK"]), p("Massimo Oddo", 82, ["RB"]), p("Alessandro Nesta", 93, ["CB"]), p("Paolo Maldini", 91, ["CB", "LB"]),
    p("Marek Jankulovski", 82, ["LB", "LM"]), p("Andrea Pirlo", 94, ["DM", "CM"]), p("Gennaro Gattuso", 89, ["DM", "CM"]), p("Clarence Seedorf", 91, ["CM", "AM"]),
    p("Kaka", 97, ["AM", "ST"]), p("Filippo Inzaghi", 90, ["ST"]), p("Alberto Gilardino", 83, ["ST"]), p("Massimo Ambrosini", 84, ["CM", "DM"])
  ]),
  team(42, "Arsenal", "2005/06", "Finalista de Paris", 87, [
    p("Jens Lehmann", 86, ["GK"]), p("Emmanuel Eboue", 82, ["RB"]), p("Kolo Toure", 88, ["CB"]), p("Sol Campbell", 85, ["CB"]),
    p("Ashley Cole", 88, ["LB"]), p("Gilberto Silva", 86, ["DM", "CM"]), p("Cesc Fabregas", 87, ["CM", "AM"]), p("Freddie Ljungberg", 84, ["RM", "RW"]),
    p("Robert Pires", 85, ["LM", "LW"]), p("Thierry Henry", 96, ["ST", "LW"]), p("Jose Antonio Reyes", 83, ["LW", "ST"]), p("Alexander Hleb", 83, ["RM", "AM"])
  ]),
  team(2714, "Napoli", "2022/23", "Cuartos con futbol brillante", 85, [
    p("Alex Meret", 81, ["GK"]), p("Giovanni Di Lorenzo", 84, ["RB"]), p("Kim Min-jae", 87, ["CB"]), p("Amir Rrahmani", 81, ["CB"]),
    p("Mario Rui", 80, ["LB"]), p("Stanislav Lobotka", 86, ["DM", "CM"]), p("Andre-Frank Zambo Anguissa", 84, ["CM"]), p("Piotr Zielinski", 84, ["CM", "AM"]),
    p("Khvicha Kvaratskhelia", 90, ["LW"]), p("Victor Osimhen", 91, ["ST"]), p("Hirving Lozano", 81, ["RW"]), p("Matteo Politano", 80, ["RW"])
  ]),
  team(2816, "Valencia", "2000/01", "Finalista por segundo año seguido", 86, [
    p("Santiago Canizares", 88, ["GK"]), p("Curro Torres", 80, ["RB"]), p("Roberto Ayala", 89, ["CB"]), p("Mauricio Pellegrino", 83, ["CB"]),
    p("Amedeo Carboni", 82, ["LB"]), p("David Albelda", 85, ["DM", "CM"]), p("Ruben Baraja", 86, ["CM"]), p("Pablo Aimar", 88, ["AM"]),
    p("Kily Gonzalez", 84, ["LM", "LW"]), p("John Carew", 83, ["ST"]), p("Gaizka Mendieta", 89, ["RM", "CM"])
  ]),
  team(2832, "Deportivo", "2003/04", "Eliminó al Milan con una remontada historica", 84, [
    p("Molina", 83, ["GK"]), p("Manuel Pablo", 82, ["RB"]), p("Jorge Andrade", 85, ["CB"]), p("Cesar", 80, ["CB"]),
    p("Joan Capdevila", 82, ["LB"]), p("Mauro Silva", 86, ["DM"]), p("Sergio", 82, ["CM"]), p("Juan Carlos Valeron", 88, ["AM"]),
    p("Albert Luque", 84, ["LW", "ST"]), p("Diego Tristan", 85, ["ST"]), p("Walter Pandiani", 81, ["ST"])
  ]),
  team(34, "Leeds", "2000/01", "Semifinalista joven y caotico", 80, [
    p("Nigel Martyn", 82, ["GK"]), p("Danny Mills", 78, ["RB"]), p("Rio Ferdinand", 87, ["CB"]), p("Lucas Radebe", 81, ["CB"]),
    p("Ian Harte", 80, ["LB"]), p("David Batty", 79, ["DM", "CM"]), p("Olivier Dacourt", 81, ["CM"]), p("Harry Kewell", 84, ["LM", "LW"]),
    p("Lee Bowyer", 82, ["RM", "CM"]), p("Mark Viduka", 84, ["ST"]), p("Alan Smith", 80, ["ST", "RM"])
  ]),
  team(3141, "Celtic", "2012/13", "Noche inolvidable contra Barcelona", 75, [
    p("Fraser Forster", 81, ["GK"]), p("Mikael Lustig", 76, ["RB"]), p("Efe Ambrose", 74, ["CB"]), p("Kelvin Wilson", 74, ["CB"]),
    p("Emilio Izaguirre", 75, ["LB"]), p("Victor Wanyama", 80, ["DM", "CM"]), p("Scott Brown", 78, ["CM"]), p("Kris Commons", 77, ["AM", "RM"]),
    p("James Forrest", 76, ["RW"]), p("Georgios Samaras", 78, ["ST", "LW"]), p("Gary Hooper", 77, ["ST"])
  ]),
  team(2414, "Basel", "2011/12", "Sorpresa suiza que eliminó al United", 74, [
    p("Yann Sommer", 80, ["GK"]), p("Markus Steinhofer", 74, ["RB"]), p("Aleksandar Dragovic", 78, ["CB"]), p("David Abraham", 75, ["CB"]),
    p("Joo-Ho Park", 73, ["LB"]), p("Granit Xhaka", 80, ["CM", "DM"]), p("Benjamin Huggel", 74, ["DM"]), p("Fabian Frei", 76, ["CM", "RM"]),
    p("Xherdan Shaqiri", 83, ["RW", "AM"]), p("Marco Streller", 77, ["ST"]), p("Alexander Frei", 78, ["ST"])
  ]),
  team(2446, "Zenit", "2011/12", "Equipo ruso intenso y tecnico", 78, [
    p("Vyacheslav Malafeev", 78, ["GK"]), p("Aleksandr Anyukov", 79, ["RB"]), p("Nicolas Lombaerts", 78, ["CB"]), p("Bruno Alves", 80, ["CB"]),
    p("Domenico Criscito", 80, ["LB"]), p("Igor Denisov", 80, ["DM", "CM"]), p("Roman Shirokov", 81, ["CM", "AM"]), p("Konstantin Zyryanov", 78, ["CM"]),
    p("Danny", 83, ["AM", "LW"]), p("Aleksandr Kerzhakov", 81, ["ST"]), p("Hulk", 84, ["RW", "ST"])
  ]),
  team(2325, "CSKA Moscow", "2009/10", "Cuartos con talento sudamericano", 76, [
    p("Igor Akinfeev", 82, ["GK"]), p("Vasili Berezutski", 76, ["CB", "RB"]), p("Sergei Ignashevich", 78, ["CB"]), p("Aleksei Berezutski", 75, ["CB"]),
    p("Georgi Schennikov", 74, ["LB"]), p("Evgeni Aldonin", 75, ["DM", "CM"]), p("Keisuke Honda", 81, ["AM", "CM"]), p("Alan Dzagoev", 80, ["AM", "RM"]),
    p("Milos Krasic", 81, ["RW", "RM"]), p("Tomas Necid", 76, ["ST"]), p("Seydou Doumbia", 79, ["ST"])
  ]),
  team(2817, "Barcelona", "2008/09", "Primer triplete de Guardiola", 94, [
    p("Victor Valdes", 86, ["GK"]), p("Dani Alves", 90, ["RB", "RM"]), p("Carles Puyol", 90, ["CB", "RB"]), p("Gerard Pique", 86, ["CB"]),
    p("Eric Abidal", 84, ["LB", "CB"]), p("Sergio Busquets", 85, ["DM", "CM"]), p("Xavi", 94, ["CM"]), p("Andres Iniesta", 93, ["CM", "AM", "LW"]),
    p("Lionel Messi", 97, ["RW", "ST"]), p("Samuel Eto'o", 91, ["ST"]), p("Thierry Henry", 90, ["LW", "ST"]), p("Yaya Toure", 86, ["DM", "CB"])
  ]),
  team(2829, "Real Madrid", "2013/14", "La Decima de Ancelotti", 94, [
    p("Iker Casillas", 88, ["GK"]), p("Dani Carvajal", 84, ["RB"]), p("Sergio Ramos", 92, ["CB"]), p("Pepe", 88, ["CB"]),
    p("Fabio Coentrao", 82, ["LB"]), p("Xabi Alonso", 90, ["DM", "CM"]), p("Luka Modric", 90, ["CM"]), p("Angel Di Maria", 91, ["CM", "RM", "LW"]),
    p("Cristiano Ronaldo", 99, ["LW", "ST"]), p("Karim Benzema", 88, ["ST"]), p("Gareth Bale", 90, ["RW", "LW"]), p("Isco", 84, ["AM", "CM"])
  ]),
  team(2672, "Bayern", "2012/13", "Triplete con Heynckes", 94, [
    p("Manuel Neuer", 91, ["GK"]), p("Philipp Lahm", 92, ["RB", "DM"]), p("Dante", 85, ["CB"]), p("Jerome Boateng", 85, ["CB"]),
    p("David Alaba", 88, ["LB", "CM"]), p("Javi Martinez", 88, ["DM", "CB"]), p("Bastian Schweinsteiger", 91, ["CM", "DM"]), p("Toni Kroos", 87, ["CM", "AM"]),
    p("Arjen Robben", 91, ["RW"]), p("Franck Ribery", 92, ["LW"]), p("Thomas Muller", 89, ["AM", "ST", "RM"]), p("Mario Mandzukic", 87, ["ST"])
  ]),
  team(44, "Liverpool", "2004/05", "Milagro de Estambul", 86, [
    p("Jerzy Dudek", 84, ["GK"]), p("Steve Finnan", 80, ["RB"]), p("Jamie Carragher", 87, ["CB"]), p("Sami Hyypia", 85, ["CB"]),
    p("Djimi Traore", 75, ["LB"]), p("Xabi Alonso", 87, ["CM", "DM"]), p("Steven Gerrard", 92, ["CM", "AM", "RM"]), p("Dietmar Hamann", 82, ["DM"]),
    p("Luis Garcia", 84, ["AM", "RW"]), p("Harry Kewell", 81, ["LW", "LM"]), p("Milan Baros", 81, ["ST"]), p("Djibril Cisse", 80, ["ST", "RW"])
  ]),
  team(38, "Chelsea", "2020/21", "Campeon de Tuchel", 89, [
    p("Edouard Mendy", 86, ["GK"]), p("Reece James", 85, ["RB", "RM"]), p("Thiago Silva", 88, ["CB"]), p("Antonio Rudiger", 86, ["CB"]),
    p("Ben Chilwell", 84, ["LB", "LM"]), p("N'Golo Kante", 92, ["CM", "DM"]), p("Jorginho", 86, ["DM", "CM"]), p("Mason Mount", 86, ["AM", "CM"]),
    p("Kai Havertz", 85, ["AM", "ST"]), p("Christian Pulisic", 82, ["LW", "RW"]), p("Timo Werner", 82, ["ST", "LW"]), p("Cesar Azpilicueta", 84, ["CB", "RB"])
  ]),
  team(35, "Man United", "1998/99", "Triplete con Ferguson", 91, [
    p("Peter Schmeichel", 91, ["GK"]), p("Gary Neville", 84, ["RB"]), p("Jaap Stam", 91, ["CB"]), p("Ronny Johnsen", 82, ["CB"]),
    p("Denis Irwin", 85, ["LB", "RB"]), p("Roy Keane", 92, ["CM", "DM"]), p("Paul Scholes", 89, ["CM", "AM"]), p("David Beckham", 90, ["RM", "CM"]),
    p("Ryan Giggs", 89, ["LM", "LW"]), p("Dwight Yorke", 88, ["ST"]), p("Andy Cole", 87, ["ST"]), p("Ole Gunnar Solskjaer", 84, ["ST", "RW"])
  ]),
  team(2697, "Inter", "2022/23", "Finalista compacto de Inzaghi", 87, [
    p("Andre Onana", 84, ["GK"]), p("Matteo Darmian", 81, ["CB", "RB"]), p("Francesco Acerbi", 82, ["CB"]), p("Alessandro Bastoni", 86, ["CB", "LB"]),
    p("Denzel Dumfries", 83, ["RM", "RB"]), p("Federico Dimarco", 84, ["LM", "LB"]), p("Hakan Calhanoglu", 86, ["DM", "CM"]), p("Nicolo Barella", 88, ["CM"]),
    p("Henrikh Mkhitaryan", 82, ["CM", "AM"]), p("Lautaro Martinez", 90, ["ST"]), p("Edin Dzeko", 83, ["ST"]), p("Romelu Lukaku", 82, ["ST"])
  ]),
  team(1644, "PSG", "2020/21", "Semifinalista de Pochettino", 89, [
    p("Keylor Navas", 88, ["GK"]), p("Alessandro Florenzi", 81, ["RB", "RM"]), p("Marquinhos", 90, ["CB", "DM"]), p("Presnel Kimpembe", 84, ["CB"]),
    p("Abdou Diallo", 80, ["LB", "CB"]), p("Leandro Paredes", 83, ["DM", "CM"]), p("Idrissa Gueye", 82, ["DM", "CM"]), p("Marco Verratti", 90, ["CM"]),
    p("Angel Di Maria", 88, ["RW", "AM"]), p("Neymar", 93, ["LW", "AM"]), p("Kylian Mbappe", 94, ["ST", "LW", "RW"]), p("Moise Kean", 80, ["ST"])
  ]),
  team(17, "Man City", "2020/21", "Finalista con falso nueve", 91, [
    p("Ederson", 88, ["GK"]), p("Kyle Walker", 86, ["RB", "CB"]), p("Ruben Dias", 90, ["CB"]), p("John Stones", 86, ["CB"]),
    p("Oleksandr Zinchenko", 82, ["LB", "CM"]), p("Rodri", 88, ["DM", "CM"]), p("Ilkay Gundogan", 89, ["CM", "AM"]), p("Kevin De Bruyne", 93, ["AM", "CM"]),
    p("Riyad Mahrez", 88, ["RW"]), p("Phil Foden", 86, ["LW", "AM"]), p("Bernardo Silva", 88, ["RM", "AM", "CM"]), p("Raheem Sterling", 86, ["LW", "RW"])
  ]),
  team(2836, "Atletico Madrid", "2013/14", "Finalista y campeon de Liga", 88, [
    p("Thibaut Courtois", 88, ["GK"]), p("Juanfran", 84, ["RB"]), p("Diego Godin", 90, ["CB"]), p("Miranda", 86, ["CB"]),
    p("Filipe Luis", 86, ["LB"]), p("Gabi", 86, ["DM", "CM"]), p("Tiago", 82, ["CM", "DM"]), p("Koke", 86, ["CM", "LM"]),
    p("Arda Turan", 85, ["RM", "AM"]), p("David Villa", 84, ["ST", "LW"]), p("Diego Costa", 90, ["ST"]), p("Raul Garcia", 82, ["AM", "ST"])
  ])
);

teamPool.push(
  team(2829, "Real Madrid", "1997/98", "La Septima de Heynckes", 90, [
    p("Bodo Illgner", 86, ["GK"]), p("Christian Panucci", 85, ["RB", "CB"]), p("Manolo Sanchis", 86, ["CB"]), p("Fernando Hierro", 90, ["CB", "DM"]),
    p("Roberto Carlos", 92, ["LB", "LM"]), p("Christian Karembeu", 85, ["DM", "CM"]), p("Fernando Redondo", 92, ["DM", "CM"]), p("Clarence Seedorf", 90, ["CM", "AM"]),
    p("Predrag Mijatovic", 90, ["ST", "AM"]), p("Raul", 91, ["ST", "AM"]), p("Fernando Morientes", 86, ["ST"]), p("Davor Suker", 87, ["ST"]),
    p("Savio", 84, ["LW", "LM"]), p("Jose Amavisca", 81, ["LM", "LW"])
  ]),
  team(9885, "Juventus", "1997/98", "Finalista con Zidane y Del Piero", 91, [
    p("Angelo Peruzzi", 90, ["GK"]), p("Moreno Torricelli", 84, ["RB", "LB"]), p("Ciro Ferrara", 90, ["CB"]), p("Paolo Montero", 88, ["CB"]),
    p("Mark Iuliano", 84, ["CB"]), p("Didier Deschamps", 88, ["DM", "CM"]), p("Edgar Davids", 91, ["CM", "DM"]), p("Zinedine Zidane", 96, ["AM", "CM"]),
    p("Angelo Di Livio", 84, ["RM", "RB"]), p("Alessandro Del Piero", 94, ["ST", "AM", "LW"]), p("Filippo Inzaghi", 90, ["ST"]), p("Antonio Conte", 86, ["CM", "DM"]),
    p("Alessio Tacchinardi", 84, ["DM", "CM"]), p("Daniel Fonseca", 81, ["ST"])
  ]),
  team(2672, "Bayern", "1998/99", "Finalista dramatico del Camp Nou", 90, [
    p("Oliver Kahn", 94, ["GK"]), p("Markus Babbel", 86, ["RB", "CB"]), p("Lothar Matthaus", 88, ["CB", "DM"]), p("Samuel Kuffour", 86, ["CB"]),
    p("Thomas Linke", 84, ["CB"]), p("Bixente Lizarazu", 88, ["LB"]), p("Stefan Effenberg", 91, ["CM", "DM"]), p("Jens Jeremies", 86, ["DM", "CM"]),
    p("Mario Basler", 87, ["RM", "RW"]), p("Mehmet Scholl", 88, ["AM", "LM"]), p("Carsten Jancker", 84, ["ST"]), p("Alexander Zickler", 82, ["ST", "RW"]),
    p("Hasan Salihamidzic", 83, ["RM", "RB"]), p("Giovane Elber", 88, ["ST"])
  ]),
  team(2829, "Real Madrid", "1999/00", "Campeon del Stade de France", 90, [
    p("Iker Casillas", 86, ["GK"]), p("Michel Salgado", 85, ["RB"]), p("Fernando Hierro", 88, ["CB"]), p("Ivan Helguera", 86, ["CB", "DM"]),
    p("Roberto Carlos", 92, ["LB", "LM"]), p("Fernando Redondo", 93, ["DM", "CM"]), p("Steve McManaman", 86, ["RM", "CM"]), p("Savio", 84, ["LW", "LM"]),
    p("Raul", 92, ["ST", "AM"]), p("Nicolas Anelka", 85, ["ST"]), p("Fernando Morientes", 86, ["ST"]), p("Guti", 84, ["AM", "CM"]),
    p("Aitor Karanka", 81, ["CB"]), p("Geremi", 81, ["RM", "RB", "DM"])
  ]),
  team(2816, "Valencia", "1999/00", "Finalista de Cuper", 86, [
    p("Santiago Canizares", 88, ["GK"]), p("Jocelyn Angloma", 84, ["RB"]), p("Mauricio Pellegrino", 84, ["CB"]), p("Miroslav Djukic", 84, ["CB"]),
    p("Amedeo Carboni", 84, ["LB"]), p("David Albelda", 84, ["DM", "CM"]), p("Gerard Lopez", 85, ["CM", "AM"]), p("Gaizka Mendieta", 89, ["RM", "CM"]),
    p("Kily Gonzalez", 86, ["LM", "LW"]), p("Claudio Lopez", 88, ["ST", "LW"]), p("John Carew", 82, ["ST"]), p("Miguel Angel Angulo", 83, ["RW", "ST"]),
    p("Javier Farinos", 82, ["CM", "DM"]), p("Adrian Ilie", 83, ["ST", "LW"])
  ]),
  team(2692, "Milan", "2002/03", "Campeon en Old Trafford", 93, [
    p("Dida", 89, ["GK"]), p("Alessandro Costacurta", 86, ["RB", "CB"]), p("Alessandro Nesta", 94, ["CB"]), p("Paolo Maldini", 93, ["CB", "LB"]),
    p("Kakha Kaladze", 84, ["LB", "CB"]), p("Andrea Pirlo", 91, ["DM", "CM"]), p("Gennaro Gattuso", 88, ["DM", "CM"]), p("Clarence Seedorf", 90, ["CM", "AM"]),
    p("Rui Costa", 90, ["AM"]), p("Andriy Shevchenko", 94, ["ST"]), p("Filippo Inzaghi", 90, ["ST"]), p("Rivaldo", 90, ["AM", "LW"]),
    p("Serginho", 85, ["LM", "LB"]), p("Jon Dahl Tomasson", 82, ["ST"])
  ]),
  team(1653, "Monaco", "2003/04", "Finalista sorpresa de Deschamps", 83, [
    p("Flavio Roma", 81, ["GK"]), p("Hugo Ibarra", 82, ["RB"]), p("Julien Rodriguez", 80, ["CB"]), p("Sebastien Squillaci", 82, ["CB"]),
    p("Patrice Evra", 84, ["LB", "LM"]), p("Lucas Bernardi", 82, ["DM", "CM"]), p("Edouard Cisse", 80, ["DM", "CM"]), p("Andreas Zikos", 81, ["DM", "CM"]),
    p("Jerome Rothen", 85, ["LM", "LW"]), p("Ludovic Giuly", 88, ["AM", "RW", "ST"]), p("Fernando Morientes", 88, ["ST"]), p("Dado Prso", 84, ["ST"]),
    p("Shabani Nonda", 82, ["ST"]), p("Emmanuel Adebayor", 78, ["ST"])
  ]),
  team(2817, "Barcelona", "2005/06", "Campeon de Paris con Ronaldinho", 93, [
    p("Victor Valdes", 86, ["GK"]), p("Juliano Belletti", 82, ["RB"]), p("Rafael Marquez", 88, ["CB", "DM"]), p("Carles Puyol", 92, ["CB", "RB"]),
    p("Giovanni van Bronckhorst", 85, ["LB", "DM"]), p("Edmilson", 84, ["DM", "CB"]), p("Deco", 92, ["CM", "AM"]), p("Xavi", 91, ["CM"]),
    p("Ronaldinho", 96, ["LW", "AM"]), p("Samuel Eto'o", 93, ["ST"]), p("Ludovic Giuly", 86, ["RW"]), p("Andres Iniesta", 84, ["CM", "AM"]),
    p("Henrik Larsson", 85, ["ST"]), p("Lionel Messi", 82, ["RW", "ST"])
  ]),
  team(44, "Liverpool", "2006/07", "Finalista de Atenas", 86, [
    p("Pepe Reina", 86, ["GK"]), p("Steve Finnan", 82, ["RB"]), p("Jamie Carragher", 88, ["CB"]), p("Daniel Agger", 83, ["CB"]),
    p("John Arne Riise", 83, ["LB", "LM"]), p("Javier Mascherano", 86, ["DM", "CM"]), p("Xabi Alonso", 89, ["CM", "DM"]), p("Steven Gerrard", 92, ["CM", "RM", "AM"]),
    p("Jermaine Pennant", 80, ["RW", "RM"]), p("Dirk Kuyt", 84, ["ST", "RW"]), p("Peter Crouch", 83, ["ST"]), p("Craig Bellamy", 81, ["ST"]),
    p("Harry Kewell", 82, ["LW", "LM"]), p("Alvaro Arbeloa", 81, ["RB", "LB"])
  ]),
  team(35, "Man United", "2008/09", "Finalista de Roma", 93, [
    p("Edwin van der Sar", 91, ["GK"]), p("John O'Shea", 82, ["RB", "CB"]), p("Rio Ferdinand", 92, ["CB"]), p("Nemanja Vidic", 93, ["CB"]),
    p("Patrice Evra", 90, ["LB"]), p("Michael Carrick", 87, ["CM", "DM"]), p("Darren Fletcher", 85, ["CM", "RM"]), p("Ryan Giggs", 88, ["CM", "LM"]),
    p("Cristiano Ronaldo", 99, ["RW", "ST", "LW"]), p("Wayne Rooney", 92, ["ST", "LW"]), p("Carlos Tevez", 88, ["ST"]), p("Dimitar Berbatov", 86, ["ST"]),
    p("Park Ji-sung", 84, ["LM", "RM", "CM"]), p("Nani", 84, ["LW", "RW"])
  ]),
  team(2672, "Bayern", "2009/10", "Finalista de Van Gaal", 88, [
    p("Hans-Jorg Butt", 82, ["GK"]), p("Philipp Lahm", 91, ["RB", "LB"]), p("Daniel Van Buyten", 84, ["CB"]), p("Martin Demichelis", 83, ["CB"]),
    p("Holger Badstuber", 81, ["CB", "LB"]), p("Mark van Bommel", 86, ["DM", "CM"]), p("Bastian Schweinsteiger", 89, ["CM", "DM"]), p("Arjen Robben", 92, ["RW"]),
    p("Franck Ribery", 90, ["LW"]), p("Thomas Muller", 86, ["AM", "ST", "RM"]), p("Ivica Olic", 84, ["ST", "LW"]), p("Mario Gomez", 85, ["ST"]),
    p("Miroslav Klose", 84, ["ST"]), p("Hamit Altintop", 82, ["RM", "CM"])
  ]),
  team(35, "Man United", "2010/11", "Finalista de Wembley", 90, [
    p("Edwin van der Sar", 91, ["GK"]), p("Fabio", 81, ["RB", "LB"]), p("Rio Ferdinand", 90, ["CB"]), p("Nemanja Vidic", 93, ["CB"]),
    p("Patrice Evra", 89, ["LB"]), p("Michael Carrick", 86, ["CM", "DM"]), p("Ryan Giggs", 88, ["CM", "LM"]), p("Antonio Valencia", 86, ["RM", "RW"]),
    p("Park Ji-sung", 84, ["LM", "RM", "CM"]), p("Wayne Rooney", 92, ["ST", "AM"]), p("Javier Hernandez", 85, ["ST"]), p("Nani", 87, ["RW", "LW"]),
    p("Dimitar Berbatov", 84, ["ST"]), p("Paul Scholes", 86, ["CM"])
  ]),
  team(2672, "Bayern", "2011/12", "Finalista en su estadio", 91, [
    p("Manuel Neuer", 92, ["GK"]), p("Philipp Lahm", 92, ["RB", "LB"]), p("Jerome Boateng", 86, ["CB", "RB"]), p("Holger Badstuber", 84, ["CB"]),
    p("David Alaba", 86, ["LB", "CM"]), p("Luiz Gustavo", 84, ["DM", "CM"]), p("Bastian Schweinsteiger", 91, ["CM", "DM"]), p("Toni Kroos", 88, ["CM", "AM"]),
    p("Arjen Robben", 92, ["RW"]), p("Franck Ribery", 91, ["LW"]), p("Mario Gomez", 88, ["ST"]), p("Thomas Muller", 87, ["AM", "ST", "RM"]),
    p("Anatoliy Tymoshchuk", 82, ["DM", "CB"]), p("Ivica Olic", 82, ["ST", "LW"])
  ]),
  team(9885, "Juventus", "2014/15", "Finalista de Berlin", 91, [
    p("Gianluigi Buffon", 94, ["GK"]), p("Stephan Lichtsteiner", 86, ["RB", "RM"]), p("Leonardo Bonucci", 90, ["CB"]), p("Andrea Barzagli", 89, ["CB"]),
    p("Giorgio Chiellini", 91, ["CB", "LB"]), p("Patrice Evra", 84, ["LB"]), p("Andrea Pirlo", 91, ["DM", "CM"]), p("Claudio Marchisio", 88, ["CM", "DM"]),
    p("Arturo Vidal", 90, ["CM", "AM"]), p("Paul Pogba", 89, ["CM", "LM"]), p("Carlos Tevez", 90, ["ST", "AM"]), p("Alvaro Morata", 86, ["ST"]),
    p("Roberto Pereyra", 82, ["AM", "CM"]), p("Fernando Llorente", 82, ["ST"])
  ]),
  team(2829, "Real Madrid", "2015/16", "Undecima de Zidane", 94, [
    p("Keylor Navas", 89, ["GK"]), p("Dani Carvajal", 88, ["RB"]), p("Sergio Ramos", 92, ["CB"]), p("Pepe", 88, ["CB"]),
    p("Marcelo", 91, ["LB", "LM"]), p("Casemiro", 87, ["DM"]), p("Toni Kroos", 91, ["CM", "DM"]), p("Luka Modric", 92, ["CM"]),
    p("Isco", 87, ["AM", "CM"]), p("Cristiano Ronaldo", 99, ["LW", "ST"]), p("Karim Benzema", 91, ["ST"]), p("Gareth Bale", 91, ["RW", "LW"]),
    p("James Rodriguez", 86, ["AM", "RM"]), p("Lucas Vazquez", 82, ["RW", "RM"])
  ]),
  team(9885, "Juventus", "2016/17", "Finalista de Cardiff", 92, [
    p("Gianluigi Buffon", 94, ["GK"]), p("Dani Alves", 89, ["RB", "RM"]), p("Leonardo Bonucci", 91, ["CB"]), p("Andrea Barzagli", 88, ["CB"]),
    p("Giorgio Chiellini", 91, ["CB", "LB"]), p("Alex Sandro", 87, ["LB", "LM"]), p("Miralem Pjanic", 88, ["CM", "DM"]), p("Sami Khedira", 86, ["CM", "DM"]),
    p("Paulo Dybala", 91, ["AM", "ST"]), p("Mario Mandzukic", 87, ["LW", "ST"]), p("Gonzalo Higuain", 90, ["ST"]), p("Juan Cuadrado", 86, ["RW", "RM"]),
    p("Claudio Marchisio", 86, ["CM", "DM"]), p("Stephan Lichtsteiner", 83, ["RB", "RM"])
  ]),
  team(2829, "Real Madrid", "2017/18", "Tercera Champions seguida", 94, [
    p("Keylor Navas", 88, ["GK"]), p("Dani Carvajal", 88, ["RB"]), p("Raphael Varane", 90, ["CB"]), p("Sergio Ramos", 92, ["CB"]),
    p("Marcelo", 91, ["LB", "LM"]), p("Casemiro", 89, ["DM"]), p("Toni Kroos", 92, ["CM", "DM"]), p("Luka Modric", 94, ["CM", "AM"]),
    p("Isco", 88, ["AM", "CM"]), p("Cristiano Ronaldo", 99, ["ST", "LW"]), p("Karim Benzema", 89, ["ST"]), p("Gareth Bale", 88, ["RW", "LW"]),
    p("Marco Asensio", 84, ["LW", "RW", "AM"]), p("Lucas Vazquez", 82, ["RW", "RM"])
  ]),
  team(44, "Liverpool", "2017/18", "Finalista de Kiev", 89, [
    p("Loris Karius", 78, ["GK"]), p("Trent Alexander-Arnold", 84, ["RB", "RM"]), p("Dejan Lovren", 82, ["CB"]), p("Virgil van Dijk", 90, ["CB"]),
    p("Andrew Robertson", 86, ["LB", "LM"]), p("Jordan Henderson", 85, ["DM", "CM"]), p("James Milner", 84, ["CM", "LB"]), p("Georginio Wijnaldum", 85, ["CM", "AM"]),
    p("Mohamed Salah", 93, ["RW", "ST"]), p("Roberto Firmino", 89, ["ST", "AM"]), p("Sadio Mane", 90, ["LW", "ST"]), p("Alex Oxlade-Chamberlain", 82, ["CM", "RW"]),
    p("Emre Can", 82, ["DM", "CM"]), p("Adam Lallana", 81, ["AM", "CM"])
  ]),
  team(2829, "Real Madrid", "2021/22", "Campeon de Paris con remontadas", 93, [
    p("Thibaut Courtois", 94, ["GK"]), p("Dani Carvajal", 86, ["RB"]), p("Eder Militao", 88, ["CB"]), p("David Alaba", 88, ["CB", "LB"]),
    p("Ferland Mendy", 84, ["LB"]), p("Casemiro", 89, ["DM"]), p("Toni Kroos", 90, ["CM", "DM"]), p("Luka Modric", 92, ["CM", "AM"]),
    p("Federico Valverde", 87, ["RM", "CM", "RW"]), p("Vinicius Junior", 91, ["LW"]), p("Karim Benzema", 96, ["ST"]), p("Rodrygo", 85, ["RW", "LW"]),
    p("Eduardo Camavinga", 83, ["CM", "DM"]), p("Marco Asensio", 82, ["RW", "AM"])
  ]),
  team(2829, "Real Madrid", "2023/24", "Campeon de Wembley", 94, [
    p("Thibaut Courtois", 91, ["GK"]), p("Dani Carvajal", 88, ["RB"]), p("Antonio Rudiger", 90, ["CB"]), p("Nacho", 84, ["CB", "RB"]),
    p("Ferland Mendy", 84, ["LB"]), p("Aurelien Tchouameni", 88, ["DM", "CB"]), p("Toni Kroos", 91, ["CM", "DM"]), p("Federico Valverde", 90, ["CM", "RM"]),
    p("Jude Bellingham", 93, ["AM", "CM"]), p("Vinicius Junior", 94, ["LW", "ST"]), p("Rodrygo", 88, ["RW", "ST", "LW"]), p("Eduardo Camavinga", 87, ["CM", "DM", "LB"]),
    p("Luka Modric", 87, ["CM", "AM"]), p("Joselu", 82, ["ST"])
  ]),
  team(2673, "Dortmund", "2023/24", "Finalista de Terzic", 87, [
    p("Gregor Kobel", 88, ["GK"]), p("Julian Ryerson", 82, ["RB", "LB"]), p("Mats Hummels", 88, ["CB"]), p("Nico Schlotterbeck", 86, ["CB"]),
    p("Ian Maatsen", 83, ["LB", "LM"]), p("Emre Can", 84, ["DM", "CB"]), p("Marcel Sabitzer", 85, ["CM", "AM"]), p("Julian Brandt", 86, ["AM", "RM"]),
    p("Jadon Sancho", 84, ["RW", "LW"]), p("Karim Adeyemi", 82, ["LW", "ST"]), p("Niclas Fullkrug", 84, ["ST"]), p("Marco Reus", 83, ["AM", "LW"]),
    p("Donyell Malen", 83, ["RW", "ST"]), p("Jamie Bynoe-Gittens", 79, ["LW", "RW"])
  ]),
  team(1644, "PSG", "2024/25", "Primer titulo parisino", 93, [
    p("Gianluigi Donnarumma", 90, ["GK"]), p("Achraf Hakimi", 90, ["RB", "RM"]), p("Marquinhos", 89, ["CB"]), p("Willian Pacho", 85, ["CB"]),
    p("Nuno Mendes", 89, ["LB", "LM"]), p("Vitinha", 90, ["CM", "DM"]), p("Joao Neves", 87, ["CM", "DM"]), p("Fabian Ruiz", 86, ["CM"]),
    p("Desire Doue", 87, ["RW", "AM", "LW"]), p("Khvicha Kvaratskhelia", 91, ["LW"]), p("Ousmane Dembele", 91, ["ST", "RW"]), p("Bradley Barcola", 86, ["LW", "RW"]),
    p("Goncalo Ramos", 83, ["ST"]), p("Warren Zaire-Emery", 85, ["CM", "RM"])
  ]),
  team(2697, "Inter", "2024/25", "Finalista de Munich", 88, [
    p("Yann Sommer", 86, ["GK"]), p("Benjamin Pavard", 85, ["CB", "RB"]), p("Francesco Acerbi", 84, ["CB"]), p("Alessandro Bastoni", 88, ["CB", "LB"]),
    p("Denzel Dumfries", 84, ["RM", "RB"]), p("Federico Dimarco", 86, ["LM", "LB"]), p("Hakan Calhanoglu", 88, ["DM", "CM"]), p("Nicolo Barella", 89, ["CM"]),
    p("Henrikh Mkhitaryan", 83, ["CM", "AM"]), p("Lautaro Martinez", 90, ["ST"]), p("Marcus Thuram", 86, ["ST", "LW"]), p("Mehdi Taremi", 81, ["ST"]),
    p("Piotr Zielinski", 83, ["CM", "AM"]), p("Davide Frattesi", 82, ["CM"])
  ]),
  team(1644, "PSG", "2025/26", "Bicampeon de Luis Enrique", 94, [
    p("Matvey Safonov", 85, ["GK"]), p("Lucas Chevalier", 84, ["GK"]), p("Achraf Hakimi", 90, ["RB", "RM"]), p("Marquinhos", 90, ["CB"]),
    p("Willian Pacho", 86, ["CB"]), p("Nuno Mendes", 89, ["LB", "LM"]), p("Lucas Beraldo", 83, ["CB", "LB"]), p("Illia Zabarnyi", 85, ["CB"]),
    p("Vitinha", 92, ["CM", "DM"]), p("Joao Neves", 88, ["CM", "RM", "DM"]), p("Fabian Ruiz", 86, ["CM", "LM"]), p("Desire Doue", 88, ["AM", "RW", "LW"]),
    p("Ousmane Dembele", 92, ["ST", "RW"]), p("Khvicha Kvaratskhelia", 91, ["LW"]), p("Warren Zaire-Emery", 86, ["CM", "RM"]), p("Goncalo Ramos", 84, ["ST"]),
    p("Bradley Barcola", 87, ["LW", "RW"]), p("Lee Kang-in", 83, ["AM", "RM", "CM"]), p("Lucas Hernandez", 84, ["CB", "LB"])
  ]),
  team(42, "Arsenal", "2025/26", "Finalista de Budapest", 92, [
    p("David Raya", 88, ["GK"]), p("Kepa Arrizabalaga", 82, ["GK"]), p("Cristhian Mosquera", 83, ["RB", "CB"]), p("William Saliba", 92, ["CB"]),
    p("Gabriel Magalhaes", 90, ["CB"]), p("Piero Hincapie", 86, ["LB", "CB"]), p("Jurrien Timber", 86, ["RB", "CB"]), p("Riccardo Calafiori", 85, ["LB", "CB"]),
    p("Declan Rice", 91, ["DM", "CM"]), p("Myles Lewis-Skelly", 83, ["CM", "LB"]), p("Martin Odegaard", 90, ["AM", "CM"]), p("Bukayo Saka", 92, ["RW"]),
    p("Leandro Trossard", 84, ["LW", "ST"]), p("Kai Havertz", 86, ["ST", "AM"]), p("Eberechi Eze", 87, ["AM", "LW"]), p("Christian Norgaard", 81, ["DM", "CM"]),
    p("Noni Madueke", 84, ["RW", "LW"]), p("Mikel Merino", 84, ["CM", "DM"]), p("Martin Zubimendi", 87, ["DM", "CM"]), p("Max Dowman", 76, ["AM", "RW"]),
    p("Gabriel Jesus", 84, ["ST", "RW"]), p("Gabriel Martinelli", 86, ["LW", "ST"]), p("Viktor Gyokeres", 89, ["ST"])
  ])
);

teamPool.push(
  team(2719, "Marseille", "1992/93", "Primer campeon frances de Champions", 90, [
    p("Fabien Barthez", 86, ["GK"]), p("Jocelyn Angloma", 86, ["RB", "RM"]), p("Basile Boli", 88, ["CB"]), p("Marcel Desailly", 91, ["CB", "DM"]),
    p("Eric Di Meco", 85, ["LB", "CB"]), p("Didier Deschamps", 90, ["DM", "CM"]), p("Franck Sauzee", 88, ["CM", "DM"]), p("Jean-Jacques Eydelie", 82, ["CM", "RM"]),
    p("Abedi Pele", 92, ["AM", "LW", "RW"]), p("Alen Boksic", 90, ["ST"]), p("Rudi Voller", 88, ["ST"]), p("Jean-Christophe Thomas", 80, ["LM", "CM"]),
    p("Bernard Casoni", 81, ["CB", "RB"]), p("Jean-Philippe Durand", 80, ["CM", "DM"]), p("Jean-Marc Ferreri", 80, ["AM", "ST"]), p("Pascal Olmeta", 80, ["GK"])
  ]),
  team(2692, "Milan", "1992/93", "Finalista con los holandeses", 92, [
    p("Sebastiano Rossi", 88, ["GK"]), p("Mauro Tassotti", 88, ["RB"]), p("Alessandro Costacurta", 91, ["CB"]), p("Franco Baresi", 94, ["CB"]),
    p("Paolo Maldini", 94, ["LB", "CB"]), p("Gianluigi Lentini", 88, ["RM", "LM"]), p("Demetrio Albertini", 88, ["CM", "DM"]), p("Frank Rijkaard", 91, ["DM", "CM", "CB"]),
    p("Roberto Donadoni", 90, ["LM", "RM"]), p("Marco van Basten", 96, ["ST"]), p("Daniele Massaro", 86, ["ST", "LW"]), p("Jean-Pierre Papin", 90, ["ST"]),
    p("Dejan Savicevic", 89, ["AM", "RW"]), p("Zvonimir Boban", 86, ["AM", "CM", "RM"]), p("Alberico Evani", 84, ["LM", "CM"]), p("Stefano Eranio", 82, ["RM", "CM"]),
    p("Stefano Nava", 80, ["CB"]), p("Carlo Cudicini", 78, ["GK"])
  ]),
  team(2692, "Milan", "1993/94", "Baile de Atenas", 92, [
    p("Sebastiano Rossi", 88, ["GK"]), p("Mauro Tassotti", 87, ["RB"]), p("Filippo Galli", 84, ["CB"]), p("Paolo Maldini", 94, ["CB", "LB"]),
    p("Christian Panucci", 86, ["LB", "RB"]), p("Franco Baresi", 93, ["CB"]), p("Alessandro Costacurta", 91, ["CB"]), p("Demetrio Albertini", 89, ["CM", "DM"]),
    p("Marcel Desailly", 91, ["DM", "CB", "CM"]), p("Zvonimir Boban", 88, ["RM", "CM", "AM"]), p("Roberto Donadoni", 89, ["LM", "RM"]), p("Dejan Savicevic", 91, ["AM", "RW"]),
    p("Daniele Massaro", 88, ["ST", "LW"]), p("Marco Simone", 84, ["ST", "LW"]), p("Gianluigi Lentini", 84, ["RM", "LM"]), p("Angelo Carbone", 79, ["RM", "CM"]),
    p("Stefano Nava", 79, ["CB"]), p("Mario Ielpo", 78, ["GK"])
  ]),
  team(2817, "Barcelona", "1993/94", "Dream Team de Cruyff", 91, [
    p("Andoni Zubizarreta", 88, ["GK"]), p("Albert Ferrer", 85, ["RB"]), p("Ronald Koeman", 91, ["CB", "DM"]), p("Miguel Angel Nadal", 87, ["CB", "DM"]),
    p("Sergi Barjuan", 84, ["LB", "LM"]), p("Pep Guardiola", 88, ["DM", "CM"]), p("Jose Mari Bakero", 87, ["CM", "AM"]), p("Guillermo Amor", 85, ["CM"]),
    p("Hristo Stoichkov", 94, ["LW", "ST", "RW"]), p("Romario", 95, ["ST"]), p("Txiki Begiristain", 85, ["LW", "ST"]), p("Michael Laudrup", 91, ["AM", "ST", "RW"]),
    p("Juan Carlos", 80, ["LB", "CB"]), p("Carles Busquets", 78, ["GK"]), p("Eusebio Sacristan", 82, ["CM", "DM"]), p("Jon Andoni Goikoetxea", 83, ["RM", "RW", "RB"]),
    p("Quique Estebaranz", 80, ["LM", "RM"]), p("Julio Salinas", 83, ["ST"])
  ]),
  team(2692, "Milan", "1994/95", "Finalista de Viena", 90, [
    p("Sebastiano Rossi", 87, ["GK"]), p("Christian Panucci", 86, ["RB", "LB"]), p("Alessandro Costacurta", 91, ["CB"]), p("Franco Baresi", 92, ["CB"]),
    p("Paolo Maldini", 94, ["LB", "CB"]), p("Demetrio Albertini", 88, ["DM", "CM"]), p("Marcel Desailly", 90, ["DM", "CB", "CM"]), p("Roberto Donadoni", 88, ["RM", "LM"]),
    p("Zvonimir Boban", 88, ["LM", "CM", "AM"]), p("Marco Simone", 85, ["ST", "LW"]), p("Daniele Massaro", 86, ["ST", "LW"]), p("Dejan Savicevic", 88, ["AM", "RW"]),
    p("Filippo Galli", 83, ["CB"]), p("Stefano Eranio", 82, ["RM", "CM"]), p("Gianluigi Lentini", 82, ["RM", "LM"]), p("Giovanni Stroppa", 80, ["CM", "AM"]),
    p("Mario Ielpo", 78, ["GK"])
  ]),
  team(2953, "Ajax", "1995/96", "Defensor del titulo", 90, [
    p("Edwin van der Sar", 90, ["GK"]), p("Sonny Silooy", 83, ["RB", "CB"]), p("Danny Blind", 88, ["CB", "DM"]), p("Frank de Boer", 89, ["CB", "DM", "LB"]),
    p("Winston Bogarde", 84, ["LB", "CB"]), p("Michael Reiziger", 85, ["RB", "CB"]), p("Ronald de Boer", 88, ["RM", "AM", "ST"]), p("Finidi George", 87, ["RW", "RM"]),
    p("Edgar Davids", 90, ["CM", "LM", "DM"]), p("Nwankwo Kanu", 86, ["ST"]), p("Jari Litmanen", 92, ["AM", "ST"]), p("Kiki Musampa", 82, ["LW", "LM"]),
    p("Marc Overmars", 88, ["LW", "RW"]), p("Patrick Kluivert", 87, ["ST"]), p("Arnold Scholten", 80, ["CM", "DM"]), p("Dave van den Bergh", 78, ["LM", "LW"]),
    p("Nordin Wooter", 78, ["RW", "RM"]), p("Fred Grim", 78, ["GK"])
  ]),
  team(9885, "Juventus", "1996/97", "Campeon defensor finalista", 91, [
    p("Angelo Peruzzi", 91, ["GK"]), p("Sergio Porrini", 82, ["RB", "CB"]), p("Ciro Ferrara", 89, ["CB"]), p("Paolo Montero", 87, ["CB"]),
    p("Mark Iuliano", 83, ["CB", "LB"]), p("Gianluca Pessotto", 84, ["LB", "RB"]), p("Didier Deschamps", 88, ["DM", "CM"]), p("Angelo Di Livio", 84, ["RM", "RB"]),
    p("Vladimir Jugovic", 87, ["LM", "CM", "RM"]), p("Zinedine Zidane", 93, ["AM", "CM"]), p("Christian Vieri", 88, ["ST"]), p("Alen Boksic", 88, ["ST"]),
    p("Alessandro Del Piero", 92, ["ST", "AM", "LW"]), p("Alessio Tacchinardi", 83, ["DM", "CM"]), p("Nicola Amoruso", 81, ["ST"]), p("Michelangelo Rampulla", 78, ["GK"]),
    p("Moreno Torricelli", 83, ["RB", "LB"]), p("Antonio Conte", 84, ["CM", "DM"])
  ])
);

configureTeamPool();

const state = {
  phase: "setup",
  lang: "es",
  formationName: "4-3-3",
  slots: [],
  selected: [],
  usedTeamKeys: [],
  currentTeam: null,
  rollsLeft: 3,
  pendingPick: null,
  simRunning: false,
  simMode: "manual",
  competitionMode: "groups",
  difficulty: "normal",
  rolling: false,
  needsThrow: true,
  tournamentStarted: false,
  lastFinalCard: null,
  standingsTables: []
};

let teamDrawBag = [];

const i18n = {
  es: {
    subtitle: "Draft historico de Champions",
    setupKicker: "Draft de leyendas de europa",
    setupTitle: "Ruta de Estrellas",
    setupLead: "Arma un XI historico equipo por equipo y llevalo hasta la copa.",
    templatesStat: "plantillas",
    playersStat: "jugadores",
    contactLine: "contacto: elcocsape12@gmail.com",
    sampleLabel: "Ejemplo visual",
    viewCard: "Ver tarjeta",
    pickOnField: "Elegí un recuadro marcado en el campo.",
    teamStatsTitle: "Estadísticas del equipo",
    teamStatsSubtitle: "Proyección previa según tu XI y el formato elegido.",
    winChance: "Prob. de ganar",
    expectedPosition: "Instancia esperada",
    expectedLeagueRank: "Puesto {rank}/36",
    expectedGroupRank: "{rank}/4 en grupo",
    stageChampion: "Campeón",
    stageFinal: "Final",
    stageSemifinal: "Semifinal",
    stageQuarterfinal: "Cuartos",
    stageRoundOf16: "Octavos",
    stagePlayoff: "Play-off",
    stageGroupOut: "Eliminado en grupos",
    stageLeagueOut: "Eliminado en liga",
    overallPower: "Media global",
    groupTable: "Tabla final del grupo",
    formatGroups: "Fácil: grupos",
    formatLeague: "Difícil: liga",
    groupsHelp: "Fácil: fase de grupos de tres partidos y cruces ida/vuelta.",
    leagueHelp: "Difícil: fase de liga con 8 partidos, tabla de 36 y cruces actuales.",
    leagueTable: "Tabla final de la liga",
    viewStandings: "Ver tabla completa",
    directZone: "Clasifica directo",
    playoffZone: "Play-off",
    eliminatedZone: "Eliminado",
    leagueMatch: "Liga partido {n}",
    playLeague: "Jugar liga {n}",
    leagueBye: "Top 8: pasas directo a octavos",
    leaguePlayoff: "Puesto {rank}: vas al play-off",
    leagueEliminated: "Puesto {rank}: eliminado en fase de liga",
    knockoutPlayoff: "Play-off",
    twoLegMatch: "{round} partido {n}",
    aggregateResult: "Global: {team} {user} - {rival} {opponent}",
    played: "PJ",
    goalDiff: "DG",
    points: "Pts",
    winsShort: "V",
    drawsShort: "E",
    lossesShort: "D",
    teamHeader: "Equipo",
    scorers: "Goleadores",
    assists: "Asistidores",
    assist: "Asistencia",
    noStats: "Sin datos",
    preGame: "Antes de empezar",
    chooseFormation: "Elegí tu formación",
    startDraft: "Empezar draft",
    squad: "Tu plantilla",
    xi: "XI titular",
    round: "Ronda",
    players: "Jugadores",
    avg: "Media",
    playChampions: "Jugar Champions",
    restart: "Reiniciar",
    rolledTeam: "Equipo rolado",
    choosePlayer: "Elegí un jugador",
    otherTeam: "Otro equipo",
    changes: "Cambios extra",
    throw: "Tirar",
    waitingThrow: "Tocá Tirar para revelar un equipo.",
    simulation: "Simulación",
    road: "Camino a la copa",
    back: "Volver",
    data: "Datos",
    normal: "Normal",
    hard: "Difícil",
    fast: "Rápido",
    startMatches: "Comenzar partidos",
    champion: "Campeon",
    eliminated: "Eliminado",
    won: "Ganaste la Champions",
    lostGroups: "Perdiste en fase de grupos",
    lostLeague: "Perdiste en fase de liga",
    lostAgainst: "Perdiste contra",
    playAgain: "Jugar de nuevo",
    shareLink: "Compartir link",
    shareImage: "Compartir imagen",
    shareCopied: "Link copiado",
    shareTitle: "Mi carta de Ruta de Estrellas",
    buildYours: "Arma el tuyo",
    imageCta: "https://champions-draft-iota.vercel.app/ - arma el tuyo",
    preparingImage: "Preparando imagen...",
    imageDownloaded: "Imagen lista",
    imageError: "No se pudo generar la imagen",
    attackAvg: "Media ataque",
    defenseAvg: "Media defensa",
    wins: "Victorias",
    draws: "Empates",
    losses: "Derrotas",
    goalsFor: "Goles a favor",
    goalsAgainst: "Goles en contra",
    setupState: "Previa",
    finalState: "Final",
    draftState: "Draft",
    preMatchEmpty: "Completa tu once para jugar la Champions.",
    setupTeamNote: "Cuando empiece la partida aparece un equipo random.",
    teamPower: "{season} · {power} media",
    teamNoteGeneric: "Plantel de Champions {season}",
    pointsShort: "pts",
    canPlay: "puede jugar",
    manualHelp: "Normal pausa entre partidos. Tocás el botón para jugar el siguiente.",
    fastHelp: "Rápido juega todos los partidos seguidos con la misma animación de goles.",
    groupMatch: "Grupo partido {n}",
    playGroup: "Jugar grupo {n}",
    roundOf16: "Octavos",
    quarterfinal: "Cuartos",
    semifinal: "Semifinal",
    finalRound: "Final",
    playRound: "Jugar {round}",
    yourXI: "Tu XI",
    versus: "vs",
    goalBy: "Gol de {scorer}",
    ownGoalBy: "Gol en contra de {scorer}",
    finalWhistle: "Final: {team} {userGoals} - {rivalGoals} {opponent}",
    penalties: "Penales",
    penaltiesResult: "Penales: {team} {user} - {rival} {opponent}",
    penaltyShort: "pen",
    scored: "Gol",
    missed: "Err",
    qualified: "Clasificaste: {points} puntos ({wins}V, {draws}E)",
    eliminatedGroupsVerdict: "Eliminado en grupos: {points} puntos ({wins}V, {draws}E)",
    dataTitle: "Datos usados",
    dataBody: "Dataset local inspirado en temporadas de UEFA Champions League y paginas publicas de SofaScore. Incluye equipos campeones, finalistas y clubes de menor nivel para que el draft tenga riesgo.",
    dataLi1: "Planteles historicos con puntaje aproximado del momento.",
    dataLi2: "Posiciones especificas: POR, DFC, LI, LD, MCD, MC, MCO, MI, MD, EI, ED, DC.",
    dataLi3: "Partidos con animacion, goleadores y penales en eliminatorias empatadas.",
    choosePosition: "Elegir posición",
    close: "Cerrar"
  },
  en: {
    subtitle: "Historic Champions draft",
    setupKicker: "European legends draft",
    setupTitle: "Ruta de Estrellas",
    setupLead: "Build a historic XI team by team and take it all the way to the cup.",
    templatesStat: "squads",
    playersStat: "players",
    contactLine: "contact: elcocsape12@gmail.com",
    sampleLabel: "Visual example",
    viewCard: "View card",
    pickOnField: "Choose a highlighted slot on the pitch.",
    teamStatsTitle: "Team stats",
    teamStatsSubtitle: "Pre-tournament projection based on your XI and selected format.",
    winChance: "Win chance",
    expectedPosition: "Expected stage",
    expectedLeagueRank: "Rank {rank}/36",
    expectedGroupRank: "{rank}/4 in group",
    stageChampion: "Champion",
    stageFinal: "Final",
    stageSemifinal: "Semifinal",
    stageQuarterfinal: "Quarterfinals",
    stageRoundOf16: "Round of 16",
    stagePlayoff: "Play-off",
    stageGroupOut: "Out in groups",
    stageLeagueOut: "Out in league phase",
    overallPower: "Overall average",
    groupTable: "Final group table",
    formatGroups: "Easy: groups",
    formatLeague: "Hard: league",
    groupsHelp: "Easy: three-match group stage plus two-leg knockouts.",
    leagueHelp: "Hard: league phase with 8 matches, a 36-team table and current knockouts.",
    leagueTable: "Final league table",
    viewStandings: "View full table",
    directZone: "Direct qualification",
    playoffZone: "Play-off",
    eliminatedZone: "Eliminated",
    leagueMatch: "League match {n}",
    playLeague: "Play league match {n}",
    leagueBye: "Top 8: straight into the round of 16",
    leaguePlayoff: "Rank {rank}: into the play-off",
    leagueEliminated: "Rank {rank}: eliminated in the league phase",
    knockoutPlayoff: "Play-off",
    twoLegMatch: "{round} leg {n}",
    aggregateResult: "Aggregate: {team} {user} - {rival} {opponent}",
    played: "P",
    goalDiff: "GD",
    points: "Pts",
    winsShort: "W",
    drawsShort: "D",
    lossesShort: "L",
    teamHeader: "Team",
    scorers: "Scorers",
    assists: "Assists",
    assist: "Assist",
    noStats: "No data",
    preGame: "Before you start",
    chooseFormation: "Choose your formation",
    startDraft: "Start draft",
    squad: "Your squad",
    xi: "Starting XI",
    round: "Round",
    players: "Players",
    avg: "Average",
    playChampions: "Play Champions",
    restart: "Restart",
    rolledTeam: "Rolled team",
    choosePlayer: "Choose one player",
    otherTeam: "Other team",
    changes: "Extra swaps",
    throw: "Roll",
    waitingThrow: "Press Roll to reveal a team.",
    simulation: "Simulation",
    road: "Road to the cup",
    back: "Back",
    data: "Data",
    normal: "Normal",
    hard: "Hard",
    fast: "Fast",
    startMatches: "Start matches",
    champion: "Champion",
    eliminated: "Eliminated",
    won: "You won the Champions League",
    lostGroups: "You lost in the group stage",
    lostLeague: "You lost in the league phase",
    lostAgainst: "You lost against",
    playAgain: "Play again",
    shareLink: "Share link",
    shareImage: "Share image",
    shareCopied: "Link copied",
    shareTitle: "My Ruta de Estrellas card",
    buildYours: "Build yours",
    imageCta: "https://champions-draft-iota.vercel.app/ - build yours",
    preparingImage: "Preparing image...",
    imageDownloaded: "Image ready",
    imageError: "Could not generate image",
    attackAvg: "Attack average",
    defenseAvg: "Defense average",
    wins: "Wins",
    draws: "Draws",
    losses: "Losses",
    goalsFor: "Goals for",
    goalsAgainst: "Goals against",
    setupState: "Setup",
    finalState: "Final",
    draftState: "Draft",
    preMatchEmpty: "Complete your XI to play the Champions League.",
    setupTeamNote: "A random team appears once the game starts.",
    teamPower: "{season} · {power} average",
    teamNoteGeneric: "{season} Champions League squad",
    pointsShort: "pts",
    canPlay: "can play",
    manualHelp: "Normal pauses between matches. Press the button to play the next one.",
    fastHelp: "Fast plays every match in a row with the same goal animation.",
    groupMatch: "Group match {n}",
    playGroup: "Play group match {n}",
    roundOf16: "Round of 16",
    quarterfinal: "Quarterfinal",
    semifinal: "Semifinal",
    finalRound: "Final",
    playRound: "Play {round}",
    yourXI: "Your XI",
    versus: "vs",
    goalBy: "Goal by {scorer}",
    finalWhistle: "Full time: {team} {userGoals} - {rivalGoals} {opponent}",
    penalties: "Penalties",
    penaltiesResult: "Penalties: {team} {user} - {rival} {opponent}",
    penaltyShort: "pens",
    scored: "Goal",
    missed: "Miss",
    qualified: "Qualified: {points} points ({wins}W, {draws}D)",
    eliminatedGroupsVerdict: "Eliminated in the group stage: {points} points ({wins}W, {draws}D)",
    dataTitle: "Data used",
    dataBody: "Local dataset inspired by UEFA Champions League seasons and public SofaScore pages. It includes champions, finalists and lower-level clubs so the draft has risk.",
    dataLi1: "Historic squads with approximate ratings for that moment.",
    dataLi2: "Specific positions: GK, CB, LB, RB, DM, CM, AM, LM, RM, LW, RW, ST.",
    dataLi3: "Animated matches with scorers and penalties for tied knockout games.",
    choosePosition: "Choose position",
    close: "Close",
    ownGoalBy: "Own goal by {scorer}"
  },
  pt: {
    subtitle: "Draft historico da Champions",
    setupKicker: "Draft de lendas europeias",
    setupTitle: "Ruta de Estrellas",
    setupLead: "Monte um XI historico time por time e leve-o ate a taca.",
    templatesStat: "elencos",
    playersStat: "jogadores",
    contactLine: "contato: elcocsape12@gmail.com",
    sampleLabel: "Exemplo visual",
    viewCard: "Ver cartao",
    pickOnField: "Escolha um espaco marcado no campo.",
    teamStatsTitle: "Estatísticas do time",
    teamStatsSubtitle: "Projecao previa segundo seu XI e o formato escolhido.",
    winChance: "Chance de ganhar",
    expectedPosition: "Fase esperada",
    expectedLeagueRank: "Posicao {rank}/36",
    expectedGroupRank: "{rank}/4 no grupo",
    stageChampion: "Campeao",
    stageFinal: "Final",
    stageSemifinal: "Semifinal",
    stageQuarterfinal: "Quartas",
    stageRoundOf16: "Oitavas",
    stagePlayoff: "Play-off",
    stageGroupOut: "Eliminado nos grupos",
    stageLeagueOut: "Eliminado na liga",
    overallPower: "Media geral",
    groupTable: "Tabela final do grupo",
    formatGroups: "Facil: grupos",
    formatLeague: "Dificil: liga",
    groupsHelp: "Facil: fase de grupos de tres partidas e mata-mata ida/volta.",
    leagueHelp: "Dificil: fase de liga com 8 partidas, tabela de 36 e mata-mata atual.",
    leagueTable: "Tabela final da liga",
    viewStandings: "Ver tabela completa",
    directZone: "Classifica direto",
    playoffZone: "Play-off",
    eliminatedZone: "Eliminado",
    leagueMatch: "Liga partida {n}",
    playLeague: "Jogar liga {n}",
    leagueBye: "Top 8: voce vai direto para as oitavas",
    leaguePlayoff: "Posicao {rank}: voce vai para o play-off",
    leagueEliminated: "Posicao {rank}: eliminado na fase de liga",
    knockoutPlayoff: "Play-off",
    twoLegMatch: "{round} jogo {n}",
    aggregateResult: "Agregado: {team} {user} - {rival} {opponent}",
    played: "J",
    goalDiff: "SG",
    points: "Pts",
    winsShort: "V",
    drawsShort: "E",
    lossesShort: "D",
    teamHeader: "Time",
    scorers: "Artilheiros",
    assists: "Assistencias",
    assist: "Assistencia",
    noStats: "Sem dados",
    preGame: "Antes de comecar",
    chooseFormation: "Escolha sua formacao",
    startDraft: "Comecar draft",
    squad: "Seu elenco",
    xi: "XI titular",
    round: "Rodada",
    players: "Jogadores",
    avg: "Media",
    playChampions: "Jogar Champions",
    restart: "Reiniciar",
    rolledTeam: "Time sorteado",
    choosePlayer: "Escolha um jogador",
    otherTeam: "Outro time",
    changes: "Trocas extras",
    throw: "Sortear",
    waitingThrow: "Toque em Sortear para revelar um time.",
    simulation: "Simulacao",
    road: "Caminho ate a taca",
    back: "Voltar",
    data: "Dados",
    normal: "Normal",
    hard: "Dificil",
    fast: "Rapido",
    startMatches: "Comecar partidas",
    champion: "Campeao",
    eliminated: "Eliminado",
    won: "Voce ganhou a Champions",
    lostGroups: "Voce perdeu na fase de grupos",
    lostLeague: "Voce perdeu na fase de liga",
    lostAgainst: "Voce perdeu contra",
    playAgain: "Jogar de novo",
    shareLink: "Compartilhar link",
    shareImage: "Compartilhar imagem",
    shareCopied: "Link copiado",
    shareTitle: "Meu cartao Ruta de Estrellas",
    buildYours: "Monte o seu",
    imageCta: "https://champions-draft-iota.vercel.app/ - monte o seu",
    preparingImage: "Preparando imagem...",
    imageDownloaded: "Imagem pronta",
    imageError: "Nao foi possivel gerar a imagem",
    attackAvg: "Media ataque",
    defenseAvg: "Media defesa",
    wins: "Vitorias",
    draws: "Empates",
    losses: "Derrotas",
    goalsFor: "Gols a favor",
    goalsAgainst: "Gols contra",
    setupState: "Previa",
    finalState: "Final",
    draftState: "Draft",
    preMatchEmpty: "Complete seu XI para jogar a Champions.",
    setupTeamNote: "Um time aleatorio aparece quando o jogo comeca.",
    teamPower: "{season} · {power} media",
    teamNoteGeneric: "Elenco de Champions {season}",
    pointsShort: "pts",
    canPlay: "pode jogar",
    manualHelp: "Normal pausa entre partidas. Toque no botao para jogar a proxima.",
    fastHelp: "Rapido joga todas as partidas seguidas com a mesma animacao de gols.",
    groupMatch: "Grupo partida {n}",
    playGroup: "Jogar grupo {n}",
    roundOf16: "Oitavas",
    quarterfinal: "Quartas",
    semifinal: "Semifinal",
    finalRound: "Final",
    playRound: "Jogar {round}",
    yourXI: "Seu XI",
    versus: "vs",
    goalBy: "Gol de {scorer}",
    ownGoalBy: "Gol contra de {scorer}",
    finalWhistle: "Fim de jogo: {team} {userGoals} - {rivalGoals} {opponent}",
    penalties: "Penaltis",
    penaltiesResult: "Penaltis: {team} {user} - {rival} {opponent}",
    penaltyShort: "pen",
    scored: "Gol",
    missed: "Errou",
    qualified: "Classificado: {points} pontos ({wins}V, {draws}E)",
    eliminatedGroupsVerdict: "Eliminado nos grupos: {points} pontos ({wins}V, {draws}E)",
    dataTitle: "Dados usados",
    dataBody: "Dataset local inspirado em temporadas da UEFA Champions League e paginas publicas do SofaScore. Inclui campeoes, finalistas e clubes de nivel menor para que o draft tenha risco.",
    dataLi1: "Elencos historicos com notas aproximadas daquele momento.",
    dataLi2: "Posicoes especificas: GOL, ZAG, LE, LD, VOL, MC, MEI, ME, MD, PE, PD, CA.",
    dataLi3: "Partidas com animacao, artilheiros e penaltis em mata-matas empatados.",
    choosePosition: "Escolher posicao",
    close: "Fechar"
  }
};

function tr(key) {
  return i18n[state.lang]?.[key] || i18n.es[key] || key;
}

function fmt(key, values = {}) {
  return tr(key).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function posLabel(position) {
  if (state.lang === "pt") return POS_PT[position];
  return state.lang === "en" ? POS_EN[position] : POS[position];
}

function localizedTeamNote(teamItem) {
  return state.lang === "es" ? teamItem.note : fmt("teamNoteGeneric", { season: teamItem.season });
}

function team(id, name, season, note, power, roster) {
  return { id, name, season, note, power, roster };
}

function p(name, rating, positions) {
  return { name, rating: calibrateRating(name, rating), positions };
}

function calibrateRating(name, rating) {
  if ((name === "Lionel Messi" || name === "Cristiano Ronaldo") && rating >= 99) return 99;
  if (rating >= 97) return rating - 4;
  if (rating >= 94) return rating - 3;
  if (rating >= 90) return rating - 3;
  if (rating >= 86) return rating - 2;
  return rating;
}

function configureTeamPool() {
  ["Kairat-2025/26", "Pafos-2025/26"].forEach((key) => {
    const index = teamPool.findIndex((item) => teamKey(item) === key);
    if (index >= 0) teamPool.splice(index, 1);
  });
  const seen = new Set();
  for (let index = teamPool.length - 1; index >= 0; index -= 1) {
    const key = teamKey(teamPool[index]);
    if (seen.has(key)) teamPool.splice(index, 1);
    seen.add(key);
  }
  addBenchPlayers();
}

function addBenchPlayers() {
  const benches = {
    "Barcelona-2014/15": [p("Claudio Bravo", 84, ["GK"]), p("Rafinha", 80, ["CM", "AM"])],
    "Real Madrid-2016/17": [p("Pepe", 86, ["CB"]), p("Lucas Vazquez", 80, ["RW", "RM"])],
    "Inter-2009/10": [p("Thiago Motta", 84, ["DM", "CM"]), p("Davide Santon", 78, ["LB", "RB"])],
    "Inter-1998/99": [p("Aron Winter", 80, ["CM", "DM"]), p("Benoit Cauet", 79, ["CM", "RM"])],
    "Liverpool-2018/19": [p("Joe Gomez", 82, ["CB", "RB"]), p("Naby Keita", 80, ["CM"])],
    "Man City-2022/23": [p("Riyad Mahrez", 87, ["RW"]), p("Manuel Akanji", 82, ["CB", "RB"])],
    "Bayern-2019/20": [p("Philippe Coutinho", 86, ["AM", "LW"]), p("Benjamin Pavard", 82, ["RB", "CB"])],
    "PSG-2019/20": [p("Pablo Sarabia", 80, ["RW", "AM"]), p("Idrissa Gueye", 81, ["DM", "CM"])],
    "Dortmund-2012/13": [p("Nuri Sahin", 82, ["CM", "DM"]), p("Felipe Santana", 78, ["CB"])],
    "Chelsea-2011/12": [p("Gary Cahill", 82, ["CB"]), p("Salomon Kalou", 79, ["LW", "ST"])],
    "Benfica-2022/23": [p("Fredrik Aursnes", 80, ["CM", "LM"]), p("Petar Musa", 76, ["ST"])],
    "Ajax-2018/19": [p("Joel Veltman", 80, ["CB", "RB"]), p("Kasper Dolberg", 79, ["ST"])],
    "Porto-2018/19": [p("Oliver Torres", 78, ["CM", "AM"]), p("Yacine Brahimi", 81, ["LW", "AM"])],
    "Roma-2017/18": [p("Diego Perotti", 80, ["LW", "AM"]), p("Lorenzo Pellegrini", 80, ["CM", "AM"])],
    "Lyon-2019/20": [p("Lucas Tousart", 78, ["DM", "CM"]), p("Bertrand Traore", 78, ["RW", "ST"])],
    "Shakhtar-2010/11": [p("Alex Teixeira", 80, ["AM", "LW"]), p("Eduardo", 78, ["ST"])],
    "Atletico Madrid-2015/16": [p("Stefan Savic", 80, ["CB"]), p("Oliver Torres", 78, ["CM", "AM"])],
    "Olympiacos-2019/20": [p("Daniel Podence", 78, ["LW", "RW"]), p("Andreas Bouchalakis", 76, ["CM", "DM"])],
    "Club Brugge-2021/22": [p("Kamal Sowah", 75, ["RW", "LW"]), p("Eder Balanta", 75, ["DM", "CB"])],
    "Qarabag-2017/18": [p("Afran Ismayilov", 68, ["RW", "AM"]), p("Donald Guerrier", 69, ["LB", "LM"])],
    "PSV-2023/24": [p("Guus Til", 78, ["AM", "CM"]), p("Andre Ramalho", 76, ["CB"])],
    "Union SG-2025/26": [p("Promise David", 73, ["ST"]), p("Loic Lapoussin", 72, ["LM", "LW"])],
    "Kobenhavn-2023/24": [p("Viktor Claesson", 75, ["AM", "ST"]), p("Rasmus Falk", 74, ["CM", "RM"])],
    "Galatasaray-2023/24": [p("Kerem Akturkoglu", 80, ["LW", "RW"]), p("Kaan Ayhan", 77, ["CB", "RB"])],
    "Monaco-2016/17": [p("Joao Moutinho", 84, ["CM"]), p("Valere Germain", 79, ["ST"])],
    "Atalanta-2019/20": [p("Mario Pasalic", 79, ["CM", "AM"]), p("Luis Muriel", 82, ["ST"])],
    "Villarreal-2021/22": [p("Yeremy Pino", 80, ["RW", "LW"]), p("Samuel Chukwueze", 79, ["RW"])],
    "Man United-2007/08": [p("Darren Fletcher", 83, ["CM", "RM"]), p("Park Ji-sung", 84, ["LM", "RM", "CM"])],
    "Milan-2006/07": [p("Cafu", 83, ["RB"]), p("Serginho", 80, ["LM", "LB"])],
    "Arsenal-2005/06": [p("Mathieu Flamini", 80, ["DM", "CM", "LB"]), p("Robin van Persie", 83, ["ST", "RW"])],
    "Napoli-2022/23": [p("Giovanni Simeone", 79, ["ST"]), p("Eljif Elmas", 79, ["CM", "AM", "LW"])]
  };
  Object.assign(benches, {
    "Juventus-1995/96": [p("Angelo Di Livio", 84, ["RM", "RB", "CM"]), p("Michele Padovano", 80, ["ST"])],
    "Juventus-2002/03": [p("Marco Di Vaio", 83, ["ST", "LW"]), p("Antonio Conte", 82, ["CM", "DM"])],
    "Tottenham-2018/19": [p("Eric Dier", 82, ["DM", "CB"]), p("Erik Lamela", 81, ["RW", "AM"])],
    "Leverkusen-2001/02": [p("Ulf Kirsten", 83, ["ST"]), p("Thomas Brdaric", 78, ["ST", "LW"])],
    "Lazio-1999/00": [p("Alen Boksic", 84, ["ST"]), p("Roberto Mancini", 82, ["ST", "AM"])],
    "Barcelona-2010/11": [p("Seydou Keita", 82, ["CM", "DM", "LM"]), p("Bojan Krkic", 78, ["ST", "LW"])],
    "Real Madrid-2001/02": [p("Steve McManaman", 82, ["RM", "CM", "AM"]), p("Flavio Conceicao", 81, ["DM", "CM"])],
    "Real Madrid-2002/03": [p("Javier Portillo", 79, ["ST"]), p("Santiago Solari", 82, ["LM", "CM"])],
    "Bayern-2000/01": [p("Alexander Zickler", 80, ["ST", "RW"]), p("Patrik Andersson", 83, ["CB"])],
    "Liverpool-2021/22": [p("Roberto Firmino", 85, ["ST", "AM"]), p("Naby Keita", 80, ["CM"])],
    "Chelsea-2007/08": [p("Salomon Kalou", 80, ["LW", "ST"]), p("Juliano Belletti", 80, ["RB", "CM"])]
  });
  teamPool.forEach((item) => {
    (benches[teamKey(item)] || []).forEach((player) => {
      if (!item.roster.some((existing) => existing.name === player.name)) item.roster.push(player);
    });
  });
}

const crestFiles = {
  "Ajax": "Ajax-Logo-500x313.png",
  "Arsenal": "Arsenal-Logo-500x313.png",
  "Atalanta": "Atalanta-Logo-500x281.png",
  "Atletico Madrid": "Atletico-Madrid-Logo-500x313.png",
  "Basel": "basel.png",
  "Barcelona": "Barcelona-Logo-500x313.png",
  "Bayern": "Bayern-Munchen-Logo-500x281.png",
  "Benfica": "Benfica-logo-500x313.png",
  "Chelsea": "Chelsea-Logo-500x313.png",
  "Celtic": "celtic.png",
  "Club Brugge": "Brugge.png",
  "CSKA Moscow": "cska moscow.png",
  "Deportivo": "deportivo.png",
  "Dortmund": "BVB-Logo-500x423.png",
  "Galatasaray": "Galatasaray-logo-500x281.png",
  "Inter": "Inter-Milan-logo-500x281.png",
  "Juventus": "juventus.png",
  "Kobenhavn": "Kobenhavn-logo-500x313.png",
  "Lazio": "lazio.png",
  "Leeds": "leeds.png",
  "Leverkusen": "leverkusen.png",
  "Liverpool": "Logo-Liverpool-500x313.png",
  "Lyon": "Olympique-Lyonnais-logo-500x281.png",
  "Man City": "Manchester-City-Logo-500x313.png",
  "Man United": "Manchester-United-Logo-493x500.png",
  "Marseille": "Marsella.png",
  "Milan": "AC-Milan-Logo-500x281.png",
  "Monaco": "monaco.png",
  "Napoli": "Napoli-Logo-500x281.png",
  "Olympiacos": "Olympiacos-Logo-500x281.png",
  "Pafos": "pafos.png",
  "Porto": "Porto-logo-500x281.png",
  "PSG": "PSG-Logo-500x313.png",
  "PSV": "Eindhoven-logo-500x408.png",
  "Qarabag": "Qarabag-logo-500x313.png",
  "RB Leipzig": "RB-Leipzig-Logo-500x281.png",
  "Real Madrid": "Real-Madrid-logo-500x333.png",
  "Roma": "Roma-Logo-500x313.png",
  "Shakhtar": "Shakhtar-Donetsk-logo-500x316.png",
  "Tottenham": "Tottenham-Hotspur-Logo-500x281.png",
  "Union SG": "Union-SG.png",
  "Valencia": "valencia.png",
  "Zenit": "zenit.png",
  "Villarreal": "villarreal.png"
};

function crestUrl(teamItem) {
  const name = typeof teamItem === "string" ? teamItem : teamItem?.name;
  const file = crestFiles[name];
  if (file) return encodeURI(`assets/crests/${file}`);
  return fallbackCrest(name);
}

function fallbackCrest(name) {
  const initials = (name || "FC").split(/\s+/).map((part) => part[0]).join("").slice(0, 3).toUpperCase();
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" rx="14" fill="#071b47"/><text x="40" y="48" text-anchor="middle" font-size="24" font-family="Arial" font-weight="700" fill="#d7b56d">${initials}</text></svg>`)}`;
}

function teamKey(teamItem) {
  return `${teamItem.name}-${teamItem.season}`;
}

function init() {
  renderFormationOptions();
  renderDifficultyOptions();
  renderLanguageOptions();
  resetToSetup();
  bindEvents();
  applyLanguage();
  renderSharedCardFromUrl();
}

function bindEvents() {
  document.addEventListener("error", (event) => {
    if (event.target?.tagName !== "IMG" || event.target.dataset.fallbackApplied) return;
    event.target.dataset.fallbackApplied = "true";
    event.target.src = fallbackCrest(event.target.alt || "FC");
  }, true);
  document.querySelector("#startGame").addEventListener("click", startGame);
  document.querySelector("#newRun").addEventListener("click", resetToSetup);
  document.querySelector("#clearTeam").addEventListener("click", resetToSetup);
  document.querySelector("#rollTeam").addEventListener("click", rollTeam);
  document.querySelector("#throwTeam").addEventListener("click", throwTeam);
  document.querySelector("#simulate").addEventListener("click", openChampionsPage);
  document.querySelector("#startTournament").addEventListener("click", playTournament);
  document.querySelector("#backToDraft").addEventListener("click", backToDraft);
  document.querySelectorAll(".sim-mode-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.simRunning) return;
      state.simMode = button.dataset.simMode;
      renderSimMode();
    });
  });
  document.querySelectorAll(".format-mode-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.simRunning || state.tournamentStarted) return;
      state.competitionMode = button.dataset.formatMode;
      renderFormatMode();
    });
  });
  document.querySelector("#closePick").addEventListener("click", () => document.querySelector("#positionDialog").close());
  document.querySelector("#closeStandings").addEventListener("click", () => document.querySelector("#standingsDialog").close());
  document.querySelector("#showData").addEventListener("click", () => document.querySelector("#dataDialog").showModal());
  document.querySelector("#closeData").addEventListener("click", () => document.querySelector("#dataDialog").close());
}

function renderLanguageOptions() {
  document.querySelectorAll(".language-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
    button.onclick = () => {
      state.lang = button.dataset.lang;
      document.documentElement.lang = state.lang;
      renderLanguageOptions();
      applyLanguage();
      render();
    };
  });
}

function applyLanguage() {
  document.querySelector(".brand p").textContent = tr("subtitle");
  document.querySelector("#setupKicker").textContent = tr("setupKicker");
  document.querySelector("#setupTitle").textContent = tr("setupTitle");
  document.querySelector("#setupLead").textContent = tr("setupLead");
  document.querySelectorAll("[data-contact-note]").forEach((item) => {
    item.textContent = tr("contactLine");
  });
  document.querySelector("#templatesCount").textContent = teamPool.length;
  document.querySelector("#playersCount").textContent = teamPool.reduce((sum, teamItem) => sum + teamItem.roster.length, 0);
  document.querySelector("#templatesStat").textContent = tr("templatesStat");
  document.querySelector("#playersStat").textContent = tr("playersStat");
  document.querySelector("#sampleLabel").textContent = tr("sampleLabel");
  document.querySelector("#setupPanel > .section-head .eyebrow").textContent = tr("preGame");
  document.querySelector("#setupPanel > .section-head h2").textContent = tr("chooseFormation");
  document.querySelector("#startGame").textContent = tr("startDraft");
  document.querySelector(".manager-panel .eyebrow").textContent = tr("squad");
  document.querySelector(".manager-panel h2").textContent = tr("xi");
  document.querySelectorAll(".squad-meta span")[0].textContent = tr("round");
  document.querySelectorAll(".squad-meta span")[1].textContent = tr("players");
  document.querySelectorAll(".squad-meta span")[2].textContent = tr("avg");
  document.querySelector("#simulate").textContent = tr("playChampions");
  document.querySelector("#clearTeam").textContent = tr("restart");
  document.querySelector(".draft-panel .eyebrow").textContent = tr("rolledTeam");
  document.querySelector(".draft-panel h2").textContent = tr("choosePlayer");
  document.querySelector(".roll-meter span").textContent = tr("changes");
  document.querySelector("#throwTeam span").textContent = tr("throw");
  document.querySelector("#championsPage .eyebrow").textContent = tr("simulation");
  document.querySelector("#championsPage h2").textContent = tr("road");
  document.querySelector("#backToDraft").textContent = tr("back");
  document.querySelector("#showData").textContent = tr("data");
  document.querySelector('[data-sim-mode="manual"]').textContent = tr("normal");
  document.querySelector('[data-sim-mode="auto"]').textContent = tr("fast");
  document.querySelector('[data-format-mode="groups"]').textContent = tr("formatGroups");
  document.querySelector('[data-format-mode="league"]').textContent = tr("formatLeague");
  document.querySelector("#startTournament").textContent = tr("startMatches");
  document.querySelector('[data-difficulty="normal"]').textContent = tr("normal");
  document.querySelector('[data-difficulty="hard"]').textContent = tr("hard");
  renderFormatMode();
  document.querySelector("#simModeHelp").textContent = state.simMode === "manual" ? tr("manualHelp") : tr("fastHelp");
  document.querySelector("#positionDialog #pickTitle").textContent = tr("choosePosition");
  document.querySelector("#closePick").setAttribute("aria-label", tr("close"));
  document.querySelector("#closeStandings").setAttribute("aria-label", tr("close"));
  document.querySelector("#dataDialog h2").textContent = tr("dataTitle");
  document.querySelector("#dataDialog p").textContent = tr("dataBody");
  const dataItems = document.querySelectorAll("#dataDialog li");
  dataItems[0].textContent = tr("dataLi1");
  dataItems[1].textContent = tr("dataLi2");
  dataItems[2].textContent = tr("dataLi3");
  document.querySelector("#closeData").setAttribute("aria-label", tr("close"));
  renderTeamProjection();
}

function renderDifficultyOptions() {
  document.querySelectorAll(".difficulty-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.difficulty === state.difficulty);
    button.onclick = () => {
      state.difficulty = button.dataset.difficulty;
      renderDifficultyOptions();
      renderCurrentTeam();
      renderMeta();
    };
  });
}

function renderFormationOptions() {
  const root = document.querySelector("#formationOptions");
  root.innerHTML = "";
  Object.keys(formations).forEach((name) => {
    const button = document.createElement("button");
    button.className = `formation-option ${name === state.formationName ? "active" : ""}`;
    button.textContent = name;
    button.addEventListener("click", () => {
      state.formationName = name;
      state.slots = buildSlots(state.formationName);
      renderFormationOptions();
      document.querySelector("#formationLabel").textContent = name;
      renderSamplePitch();
      renderPitch();
      renderNeeds();
    });
    root.append(button);
  });
  renderSamplePitch();
}

function renderSamplePitch() {
  const root = document.querySelector("#samplePitch");
  if (!root) return;
  const used = {};
  document.querySelector("#sampleFormationLabel").textContent = state.formationName;
  root.innerHTML = formations[state.formationName].map((line) => `
    <div class="sample-line sample-line-${line.length}">
      ${line.map((position) => {
        const name = sampleName(position, used);
        return `<span>${name}<em>${posLabel(position)}</em></span>`;
      }).join("")}
    </div>
  `).join("");
}

function sampleName(position, used) {
  const samples = {
    GK: ["Neuer"],
    CB: ["Van Dijk", "Ramos", "Nesta"],
    LB: ["Maldini"],
    RB: ["Lahm"],
    DM: ["Busquets", "Makelele"],
    CM: ["Iniesta", "Modric", "Xavi"],
    AM: ["Zidane", "Kaka"],
    LM: ["Nedved"],
    RM: ["Beckham"],
    LW: ["Henry", "Cristiano"],
    RW: ["Messi", "Robben"],
    ST: ["Lewandowski", "Ronaldo", "Drogba"]
  };
  const list = samples[position] || [posLabel(position)];
  const index = used[position] || 0;
  used[position] = index + 1;
  return list[index % list.length];
}

function resetToSetup() {
  state.phase = "setup";
  state.slots = buildSlots(state.formationName);
  state.selected = [];
  state.usedTeamKeys = [];
  state.currentTeam = null;
  state.rollsLeft = 3;
  state.pendingPick = null;
  state.simRunning = false;
  state.competitionMode = "groups";
  state.rolling = false;
  state.needsThrow = true;
  state.tournamentStarted = false;
  state.lastFinalCard = null;
  state.standingsTables = [];
  backToDraft(false);
  document.querySelector(".app-shell").classList.remove("draft-mode");
  document.querySelector("#setupPanel").classList.remove("hidden");
  document.querySelector(".manager-panel").classList.add("hidden");
  document.querySelector(".draft-panel").classList.add("hidden");
  document.querySelector("#matchStage").innerHTML = `<p class="empty-state">${tr("preMatchEmpty")}</p>`;
  document.querySelector("#bracket").innerHTML = "";
  render();
}

function startGame() {
  state.phase = "draft";
  state.slots = buildSlots(state.formationName);
  state.selected = [];
  state.usedTeamKeys = [];
  state.currentTeam = null;
  state.needsThrow = true;
  state.rollsLeft = 3;
  state.tournamentStarted = false;
  state.competitionMode = "groups";
  state.lastFinalCard = null;
  state.standingsTables = [];
  document.querySelector("#setupPanel").classList.add("hidden");
  document.querySelector(".manager-panel").classList.remove("hidden");
  document.querySelector(".draft-panel").classList.remove("hidden");
  document.querySelector(".app-shell").classList.add("draft-mode");
  render();
  scrollMobileTo("#throwTeam", "center");
}

function buildSlots(name) {
  return formations[name].flatMap((line, lineIndex) => line.map((position, lineSlot) => ({
    id: `${lineIndex}-${lineSlot}-${position}`,
    position,
    lineIndex,
    player: null
  })));
}

function pickNextTeam(consumeRoll) {
  const next = selectNextTeam(consumeRoll);
  if (!next) return;
  state.pendingPick = null;
  state.currentTeam = next;
  animateRoll();
}

function selectNextTeam(consumeRoll) {
  if (consumeRoll) {
    if (state.rollsLeft <= 0) return null;
    state.rollsLeft -= 1;
  }
  const open = openSlotPositions();
  let pool = teamPool.filter((item) => !state.usedTeamKeys.includes(teamKey(item)));
  if (!pool.length) {
    state.usedTeamKeys = [];
    pool = [...teamPool];
  }
  let viable = pool.filter((item) => item.roster.some((player) => player.positions.some((position) => open.includes(position))));
  if (!viable.length) {
    state.usedTeamKeys = [];
    viable = teamPool.filter((item) => item.roster.some((player) => player.positions.some((position) => open.includes(position))));
  }
  const source = viable.length ? viable : teamPool;
  const next = drawTeamFromBag(source);
  if (!state.usedTeamKeys.includes(teamKey(next))) {
    state.usedTeamKeys.push(teamKey(next));
  }
  return next;
}

function drawTeamFromBag(candidates) {
  if (!candidates.length) return null;
  const candidateKeys = new Set(candidates.map(teamKey));
  let index = teamDrawBag.findIndex((item) => candidateKeys.has(teamKey(item)));
  if (index < 0) {
    const bagKeys = new Set(teamDrawBag.map(teamKey));
    const missing = candidates.filter((item) => !bagKeys.has(teamKey(item)));
    teamDrawBag.push(...shuffle(missing.length ? missing : candidates));
    index = teamDrawBag.findIndex((item) => candidateKeys.has(teamKey(item)));
  }
  if (index < 0) return candidates[Math.floor(Math.random() * candidates.length)];
  const [next] = teamDrawBag.splice(index, 1);
  return next;
}

async function rollTeam() {
  if (state.phase !== "draft" || selectedCount() >= 11 || state.rollsLeft <= 0 || state.rolling || !state.currentTeam) return;
  state.pendingPick = null;
  state.rolling = true;
  renderPitch();
  renderCurrentTeam();
  const button = document.querySelector("#rollTeam");
  button.classList.remove("rolling-button");
  void button.offsetWidth;
  button.classList.add("rolling-button");
  const next = selectNextTeam(true);
  if (!next) {
    state.rolling = false;
    render();
    return;
  }
  renderMeta();
  await animateTeamRoulette(next);
  state.currentTeam = next;
  state.needsThrow = false;
  state.rolling = false;
  render();
}

async function throwTeam() {
  if (state.phase !== "draft" || selectedCount() >= 11 || state.rolling || !state.needsThrow) return;
  state.pendingPick = null;
  state.rolling = true;
  renderMeta();
  const next = selectNextTeam(false);
  if (!next) {
    state.rolling = false;
    renderMeta();
    return;
  }
  await animateTeamRoulette(next);
  state.currentTeam = next;
  state.needsThrow = false;
  state.rolling = false;
  render();
}

function animateTeamRoulette(finalTeam) {
  return new Promise((resolve) => {
    const track = document.querySelector("#rouletteTrack");
    const open = openSlotPositions();
    const viable = teamPool.filter((item) => item.roster.some((player) => player.positions.some((position) => open.includes(position))));
    const source = viable.length ? viable : teamPool;
    let ticks = 0;
    const maxTicks = 24;
    track.classList.add("active");
    const interval = setInterval(() => {
      ticks += 1;
      const teamItem = ticks >= maxTicks ? finalTeam : source[(ticks + Math.floor(Math.random() * source.length)) % source.length];
      track.innerHTML = `<div><img src="${crestUrl(teamItem)}" alt="${teamItem.name}"><span>${teamItem.name}</span><strong>${teamItem.season}</strong></div>`;
      if (ticks >= maxTicks) {
        clearInterval(interval);
        setTimeout(() => {
          track.classList.remove("active");
          resolve();
        }, 240);
      }
    }, 82);
  });
}

function animateRoll() {
  const card = document.querySelector("#teamCard");
  card.classList.remove("rolling");
  void card.offsetWidth;
  card.classList.add("rolling");
}

function render() {
  renderMeta();
  renderSamplePitch();
  renderPitch();
  renderCurrentTeam();
  renderNeeds();
  renderLeague();
  renderFormatMode();
  renderSimMode();
}

function renderMeta() {
  document.querySelector("#gameStateLabel").textContent = state.phase === "setup" ? tr("setupState") : state.phase === "done" ? tr("finalState") : tr("draftState");
  document.querySelector("#formationLabel").textContent = state.formationName;
  document.querySelector("#roundLabel").textContent = state.phase === "setup" ? "0" : Math.min(11, selectedCount() + 1);
  document.querySelector("#countLabel").textContent = `${selectedCount()}/11`;
  document.querySelector("#ratingLabel").textContent = ratingLabel(averageRating());
  document.querySelector("#rollsLabel").textContent = state.rollsLeft;
  document.querySelector("#simulate").disabled = selectedCount() !== 11 || state.simRunning;
  document.querySelector("#rollTeam").classList.toggle("hidden", state.difficulty === "hard");
  document.querySelector(".roll-meter").classList.toggle("hidden", state.difficulty === "hard");
  document.querySelector("#rollTeam").disabled = state.difficulty === "hard" || state.phase !== "draft" || state.rollsLeft <= 0 || selectedCount() >= 11 || state.rolling || !state.currentTeam;
  document.querySelector("#rollTeam span").textContent = `${tr("otherTeam")} (${state.rollsLeft})`;
  document.querySelector("#throwTeam").disabled = state.phase !== "draft" || selectedCount() >= 11 || state.rolling || !state.needsThrow;
  document.querySelector("#startTournament").disabled = state.simRunning || selectedCount() !== 11;
  document.querySelector("#backToDraft").classList.toggle("hidden", state.tournamentStarted);
  document.querySelector("#backToDraft").disabled = state.tournamentStarted;
  renderFormatMode();
  renderSimMode();
}

function renderFormatMode() {
  document.querySelectorAll(".format-mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.formatMode === state.competitionMode);
    button.disabled = state.simRunning || state.tournamentStarted;
  });
  const help = document.querySelector("#formatModeHelp");
  if (help) {
    help.textContent = state.competitionMode === "league" ? tr("leagueHelp") : tr("groupsHelp");
  }
  renderTeamProjection();
}

function renderSimMode() {
  document.querySelectorAll(".sim-mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.simMode === state.simMode);
    button.disabled = state.simRunning;
  });
  const help = document.querySelector("#simModeHelp");
  if (help) {
    help.textContent = state.simMode === "manual" ? tr("manualHelp") : tr("fastHelp");
  }
}

function renderTeamProjection() {
  const root = document.querySelector("#teamProjection");
  if (!root) return;
  if (selectedCount() !== 11) {
    root.innerHTML = "";
    root.classList.add("hidden");
    return;
  }
  const averages = teamAverages();
  const projection = teamProjection(averages);
  root.classList.remove("hidden");
  root.innerHTML = `
    <div>
      <p class="eyebrow">${tr("teamStatsTitle")}</p>
      <h3>${projection.formatLabel}</h3>
      <span>${tr("teamStatsSubtitle")}</span>
    </div>
    <div class="projection-grid">
      ${projectionStatHtml(tr("overallPower"), averages.overall, "primary")}
      ${projectionStatHtml(tr("attackAvg"), averages.attack)}
      ${projectionStatHtml(tr("defenseAvg"), averages.defense)}
      ${projectionStatHtml(tr("winChance"), `${projection.winChance}%`, "accent")}
      ${projectionStatHtml(tr("expectedPosition"), projection.expectedPosition)}
    </div>
  `;
}

function projectionStatHtml(label, value, tone = "") {
  return `<span class="${tone}"><em>${label}</em><strong>${value}</strong></span>`;
}

function teamProjection(averages = teamAverages()) {
  const strength = averages.overall * 0.68 + averages.attack * 0.17 + averages.defense * 0.15;
  const isLeague = state.competitionMode === "league";
  const chanceBase = isLeague
    ? (strength - 74) * 1.85 - 9
    : (strength - 73) * 2.25 + 4;
  const winChance = clamp(2, isLeague ? 58 : 74, Math.round(chanceBase));
  const leagueRank = clamp(1, 36, Math.round(34 - (strength - 72) * 1.35));
  const groupRank = clamp(1, 4, Math.round(5 - (strength - 72) / 5.5));
  return {
    winChance,
    expectedPosition: expectedTournamentStage(strength, isLeague, leagueRank, groupRank),
    formatLabel: state.competitionMode === "league" ? tr("formatLeague") : tr("formatGroups")
  };
}

function expectedTournamentStage(strength, isLeague, leagueRank, groupRank) {
  if (isLeague) {
    if (leagueRank > 24 || strength < 77) return tr("stageLeagueOut");
    if (leagueRank > 8 || strength < 81) return tr("stagePlayoff");
    if (strength < 84) return tr("stageRoundOf16");
    if (strength < 87) return tr("stageQuarterfinal");
    if (strength < 90) return tr("stageSemifinal");
    if (strength < 93) return tr("stageFinal");
    return tr("stageChampion");
  }
  if (groupRank > 2 || strength < 76) return tr("stageGroupOut");
  if (strength < 81) return tr("stageRoundOf16");
  if (strength < 85) return tr("stageQuarterfinal");
  if (strength < 89) return tr("stageSemifinal");
  if (strength < 92) return tr("stageFinal");
  return tr("stageChampion");
}

function renderPitch() {
  const root = document.querySelector("#formation");
  root.innerHTML = "";
  formations[state.formationName].forEach((line, lineIndex) => {
    const row = document.createElement("div");
    row.className = `line line-${line.length}`;
    line.forEach((position, lineSlot) => {
      const slot = state.slots.find((item) => item.lineIndex === lineIndex && item.position === position && item.id.includes(`-${lineSlot}-`));
      const card = document.createElement("div");
      const selectable = slot && state.pendingPick && eligibleSlotsFor(state.pendingPick.player).some((choice) => choice.id === slot.id);
      card.className = `slot ${slot?.player ? "" : "empty"} ${selectable ? "selectable pending-target" : ""}`;
      if (slot) card.dataset.slotId = slot.id;
      card.innerHTML = slot?.player
        ? `<strong>${shortPlayerName(slot.player.name)}</strong><span>${posLabel(slot.position)}</span><b>${ratingLabel(slot.player.rating)}</b>`
        : `<span>${posLabel(position)}</span>`;
      if (selectable) card.addEventListener("click", () => chooseSlot(slot.id));
      row.append(card);
    });
    root.append(row);
  });
}

function renderCurrentTeam() {
  const teamItem = state.currentTeam;
  const root = document.querySelector("#rosterList");
  root.innerHTML = "";
  if (!teamItem) {
    document.querySelector("#teamCard").classList.add("no-team");
    document.querySelector("#teamName").textContent = tr("throw");
    document.querySelector("#teamEra").textContent = state.phase === "draft" ? tr("round") : tr("setupState");
    document.querySelector("#teamNote").textContent = state.phase === "draft" ? tr("waitingThrow") : tr("setupTeamNote");
    document.querySelector("#teamCrest").removeAttribute("src");
    document.querySelector("#teamCrest").classList.add("hidden");
    return;
  }
  document.querySelector("#teamCard").classList.remove("no-team");
  document.querySelector("#teamCrest").src = crestUrl(teamItem);
  document.querySelector("#teamCrest").classList.remove("hidden");
  document.querySelector("#teamCrest").alt = `${teamItem.name} ${teamItem.season}`;
  document.querySelector("#teamEra").textContent = fmt("teamPower", { season: teamItem.season, power: teamItem.power });
  document.querySelector("#teamName").innerHTML = `<img src="${crestUrl(teamItem)}" alt="${teamItem.name}"> <span>${teamItem.name}</span>`;
  document.querySelector("#teamNote").textContent = localizedTeamNote(teamItem);
  teamItem.roster
    .slice()
    .sort((a, b) => positionRank(a) - positionRank(b) || b.rating - a.rating)
    .forEach((player) => {
      const choices = eligibleSlotsFor(player);
      const card = document.createElement("button");
      const isPending = state.pendingPick?.player.name === player.name && state.pendingPick?.teamItem.id === teamItem.id;
      card.className = `player-card ${choices.length ? "" : "blocked"} ${isPending ? "selected" : ""}`;
      card.disabled = !choices.length || state.phase !== "draft" || state.rolling;
      card.innerHTML = `
        <span>
          <span class="player-name">${player.name}</span>
          <span class="player-meta">${player.positions.map((position) => posLabel(position)).join(" / ")} · ${teamItem.name} ${teamItem.season}</span>
        </span>
        <span class="price">${ratingLabel(player.rating)}</span>
      `;
      card.addEventListener("click", () => openPositionPicker(teamItem, player));
      root.append(card);
    });
}

function renderNeeds() {
  document.querySelector("#needStrip").innerHTML = "";
}

function isMobileDraftView() {
  return state.phase === "draft" && window.matchMedia("(max-width: 760px)").matches;
}

function scrollMobileTo(selector, block = "center") {
  if (!isMobileDraftView()) return;
  window.requestAnimationFrame(() => {
    document.querySelector(selector)?.scrollIntoView({
      behavior: "smooth",
      block,
      inline: "nearest"
    });
  });
}

function renderLeague() {
  document.querySelector("#bracket").dataset.ready = selectedCount() === 11 ? "true" : "false";
}

function openPositionPicker(teamItem, player) {
  if (state.rolling) return;
  const choices = eligibleSlotsFor(player);
  if (!choices.length) return;
  state.pendingPick = { teamItem, player };
  document.querySelector("#teamNote").textContent = `${player.name}: ${tr("pickOnField")}`;
  renderPitch();
  renderCurrentTeam();
  scrollMobileTo("#formation", "center");
}

function chooseSlot(slotId) {
  if (state.rolling) return;
  const slot = state.slots.find((item) => item.id === slotId);
  if (!slot || !state.pendingPick) return;
  const { teamItem, player } = state.pendingPick;
  if (!state.currentTeam || state.currentTeam.id !== teamItem.id) {
    state.pendingPick = null;
    render();
    return;
  }
  if (isPlayerAlreadySelected(player.name)) return;
  slot.player = {
    name: player.name,
    rating: player.rating,
    positions: player.positions,
    chosenPosition: slot.position,
    team: `${teamItem.name} ${teamItem.season}`,
    teamName: teamItem.name
  };
  state.selected = state.slots.filter((item) => item.player).map((item) => item.player);
  state.pendingPick = null;
  if (document.querySelector("#positionDialog").open) document.querySelector("#positionDialog").close();
  state.currentTeam = null;
  state.needsThrow = selectedCount() < 11;
  render();
  if (state.needsThrow) scrollMobileTo("#throwTeam", "center");
}

function eligibleSlotsFor(player) {
  if (isPlayerAlreadySelected(player.name)) return [];
  return state.slots.filter((slot) => !slot.player && player.positions.includes(slot.position));
}

function isPlayerAlreadySelected(name) {
  const key = playerKey(name);
  return selectedPlayers().some((player) => playerKey(player.name) === key);
}

function playerKey(name) {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]/g, "");
}

function positionRank(player) {
  const ranks = { GK: 0, CB: 1, LB: 1, RB: 1, DM: 2, CM: 2, AM: 2, LM: 2, RM: 2, LW: 3, RW: 3, ST: 3 };
  return ranks[player.positions[0]] ?? 9;
}

function openSlotPositions() {
  return state.slots.filter((slot) => !slot.player).map((slot) => slot.position);
}

function selectedCount() {
  return state.slots.filter((slot) => slot.player).length;
}

function selectedPlayers() {
  return state.slots.filter((slot) => slot.player).map((slot) => slot.player);
}

function shortPlayerName(name) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length <= 2) return name;
  return `${parts[0]} ${parts[parts.length - 1]}`;
}

function averageRating() {
  const players = selectedPlayers();
  if (!players.length) return 0;
  return Math.round(players.reduce((sum, player) => sum + player.rating, 0) / players.length);
}

function teamAverages() {
  const players = selectedPlayers();
  if (!players.length) return { overall: 0, attack: 0, defense: 0 };
  const attackPositions = ["ST", "LW", "RW", "AM", "LM", "RM", "CM"];
  const defensePositions = ["GK", "CB", "LB", "RB", "DM", "CM"];
  const attack = weightedAverage(players, (player) => attackPositions.includes(player.chosenPosition) ? (player.chosenPosition === "CM" ? 0.45 : 1) : 0);
  const defense = weightedAverage(players, (player) => defensePositions.includes(player.chosenPosition) ? (player.chosenPosition === "CM" ? 0.55 : 1) : 0);
  return { overall: averageRating(), attack, defense };
}

function weightedAverage(players, weightFn) {
  let total = 0;
  let weight = 0;
  players.forEach((player) => {
    const current = weightFn(player);
    total += player.rating * current;
    weight += current;
  });
  return weight ? Math.round(total / weight) : 0;
}

function ratingLabel(value) {
  return state.difficulty === "hard" ? "?" : value;
}

async function playTournament() {
  if (state.simRunning || selectedCount() !== 11) return;
  document.querySelector("#championsStart").classList.add("hidden");
  state.tournamentStarted = true;
  state.simRunning = true;
  state.standingsTables = [];
  renderMeta();
  const result = state.competitionMode === "league"
    ? await playLeagueTournament()
    : await playGroupTournament();
  state.phase = "done";
  state.simRunning = false;
  renderMeta();
  renderEndReview(result.alive, result.log);
}

async function playGroupTournament() {
  const userPower = averageRating();
  const opponents = weightedOpponents();
  const log = [];
  const groupResults = [];
  let alive = true;
  for (let i = 0; i < 3; i += 1) {
    const result = await playMatch({ label: fmt("groupMatch", { n: i + 1 }), stage: "group", opponent: opponents[i], knockout: false }, userPower);
    log.push(result);
    groupResults.push(result);
    renderBracketLog(log);
    if (state.simMode === "manual" && i < 2) await waitForNextMatch(fmt("playGroup", { n: i + 2 }));
  }
  const wins = groupResults.filter((item) => item.userGoals > item.rivalGoals).length;
  const draws = groupResults.filter((item) => item.userGoals === item.rivalGoals).length;
  const points = wins * 3 + draws;
  const groupRows = groupTableRows(groupResults);
  const userRow = groupRows.find((row) => row.isUser);
  alive = userRow?.rank <= 2;
  addGroupVerdict(alive, wins, draws, points);
  addGroupTable(groupRows);
  await wait(1200);
  if (alive) {
    const rounds = [
      { label: tr("roundOf16"), opponent: opponents[3] },
      { label: tr("quarterfinal"), opponent: opponents[4] },
      { label: tr("semifinal"), opponent: opponents[5] },
      { label: tr("finalRound"), stage: "knockout", opponent: opponents[6], knockout: true }
    ];
    for (let i = 0; i < rounds.length; i += 1) {
      const round = rounds[i];
      if (state.simMode === "manual") await waitForNextMatch(fmt("playRound", { round: round.label }));
      if (round.knockout) {
        const result = await playMatch(round, userPower);
        log.push(result);
        renderBracketLog(log);
        alive = result.userWon;
      } else {
        alive = await playTwoLegTie(round.label, round.opponent, userPower, log);
      }
      if (!alive) break;
    }
  }
  return { alive, log };
}

async function playLeagueTournament() {
  const userPower = averageRating();
  const league = buildLeaguePhase(userPower);
  const log = [];
  for (let i = 0; i < league.rounds.length; i += 1) {
    if (state.simMode === "manual" && i > 0) await waitForNextMatch(fmt("playLeague", { n: i + 1 }));
    await playLeagueRound(league, i, userPower, log);
  }
  const table = rankedLeagueTable(league.teams);
  addLeagueTable(table);
  const userRow = table.find((row) => row.isUser);
  let alive = userRow.rank <= 24;
  const timeline = document.querySelector("#timeline");
  if (userRow.rank <= 8) addTimeline(tr("leagueBye"), timeline, "user-goal");
  else if (userRow.rank <= 24) addTimeline(fmt("leaguePlayoff", { rank: userRow.rank }), timeline, "user-goal");
  else addTimeline(fmt("leagueEliminated", { rank: userRow.rank }), timeline, "rival-goal");
  await wait(1200);
  if (alive) {
    const opponents = leagueKnockoutOpponents(table, userRow.rank);
    if (userRow.rank > 8) {
      if (state.simMode === "manual") await waitForNextMatch(fmt("playRound", { round: tr("knockoutPlayoff") }));
      alive = await playTwoLegTie(tr("knockoutPlayoff"), opponents.playoff, userPower, log);
    }
    const twoLegRounds = [
      { label: tr("roundOf16"), opponent: opponents.roundOf16 },
      { label: tr("quarterfinal"), opponent: opponents.quarterfinal },
      { label: tr("semifinal"), opponent: opponents.semifinal }
    ];
    for (const round of twoLegRounds) {
      if (!alive) break;
      if (state.simMode === "manual") await waitForNextMatch(fmt("playRound", { round: round.label }));
      alive = await playTwoLegTie(round.label, round.opponent, userPower, log);
    }
    if (alive) {
      if (state.simMode === "manual") await waitForNextMatch(fmt("playRound", { round: tr("finalRound") }));
      const finalResult = await playMatch({ label: tr("finalRound"), stage: "knockout", opponent: opponents.final, knockout: true }, userPower);
      log.push(finalResult);
      renderBracketLog(log);
      alive = finalResult.userWon;
    }
  }
  return { alive, log };
}

function buildLeaguePhase(userPower) {
  const pickedTeams = shuffle(teamPool).slice(0, 35);
  const teams = [
    leagueTeam("user-xi", tr("yourXI"), "", userPower, null, true),
    ...pickedTeams.map((teamItem, index) => leagueTeam(`club-${index}`, teamItem.name, teamItem.season, teamItem.power, teamItem, false))
  ];
  return { teams, rounds: createLeagueRounds(teams) };
}

function leagueTeam(id, name, season, power, source, isUser) {
  return { id, name, season, power, source, isUser, played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 };
}

function createLeagueRounds(teams) {
  const rounds = [];
  const usedPairs = new Set();
  for (let roundIndex = 0; roundIndex < 8; roundIndex += 1) {
    let pairs = [];
    for (let attempt = 0; attempt < 80; attempt += 1) {
      const shuffled = shuffle(teams);
      const currentPairs = [];
      let valid = true;
      for (let i = 0; i < shuffled.length; i += 2) {
        const a = shuffled[i];
        const b = shuffled[i + 1];
        const key = pairKey(a, b);
        if (usedPairs.has(key)) {
          valid = false;
          break;
        }
        currentPairs.push([a, b]);
      }
      if (valid) {
        pairs = currentPairs;
        break;
      }
      if (attempt === 79) {
        pairs = shuffled.reduce((list, _, index) => {
          if (index % 2 === 0) list.push([shuffled[index], shuffled[index + 1]]);
          return list;
        }, []);
        break;
      }
    }
    pairs.forEach(([a, b]) => usedPairs.add(pairKey(a, b)));
    rounds.push(pairs);
  }
  return rounds;
}

function pairKey(a, b) {
  return [a.id, b.id].sort().join("|");
}

async function playLeagueRound(league, roundIndex, userPower, log) {
  const pairs = league.rounds[roundIndex];
  for (const [a, b] of pairs) {
    if (a.isUser || b.isUser) continue;
    const score = neutralScore(a.power, b.power);
    applyLeagueResult(a, b, score.a, score.b);
  }
  const userPair = pairs.find(([a, b]) => a.isUser || b.isUser);
  const opponentRow = userPair[0].isUser ? userPair[1] : userPair[0];
  const result = await playMatch({ label: fmt("leagueMatch", { n: roundIndex + 1 }), stage: "league", opponent: opponentRow.source, knockout: false }, userPower);
  applyLeagueResult(league.teams.find((team) => team.isUser), opponentRow, result.userGoals, result.rivalGoals);
  log.push(result);
  renderBracketLog(log);
}

function neutralScore(aPower, bPower) {
  const shock = shockScore(aPower, bPower);
  if (shock) return { a: shock.user, b: shock.rival };
  const diff = aPower - bPower;
  return {
    a: sampleGoals(clamp(0.25, 3.1, 1.15 + diff / 15)),
    b: sampleGoals(clamp(0.25, 3.1, 1.08 - diff / 15))
  };
}

function applyLeagueResult(a, b, aGoals, bGoals) {
  a.played += 1;
  b.played += 1;
  a.goalsFor += aGoals;
  a.goalsAgainst += bGoals;
  b.goalsFor += bGoals;
  b.goalsAgainst += aGoals;
  if (aGoals > bGoals) {
    a.wins += 1;
    b.losses += 1;
    a.points += 3;
  } else if (bGoals > aGoals) {
    b.wins += 1;
    a.losses += 1;
    b.points += 3;
  } else {
    a.draws += 1;
    b.draws += 1;
    a.points += 1;
    b.points += 1;
  }
}

function rankedLeagueTable(teams) {
  return teams
    .slice()
    .sort((a, b) => b.points - a.points || (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) || b.goalsFor - a.goalsFor || b.wins - a.wins || b.power - a.power)
    .map((teamItem, index) => ({ ...teamItem, rank: index + 1 }));
}

function addLeagueTable(rows) {
  addStandingsButton(rows, tr("leagueTable"), "league");
}

function leagueKnockoutOpponents(table, userRank) {
  const used = new Set();
  const rows = table.filter((row) => !row.isUser && row.source);
  const pick = (minRank, maxRank) => {
    const candidates = rows.filter((row) => row.rank >= minRank && row.rank <= maxRank && !used.has(teamKey(row.source)));
    const fallback = rows.filter((row) => !used.has(teamKey(row.source)));
    const chosen = shuffle(candidates.length ? candidates : fallback)[0];
    if (chosen) used.add(teamKey(chosen.source));
    return chosen?.source || weightedOpponents()[0];
  };
  return {
    playoff: userRank <= 16 ? pick(17, 24) : pick(9, 16),
    roundOf16: pick(1, 16),
    quarterfinal: pick(1, 12),
    semifinal: pick(1, 8),
    final: pick(1, 6)
  };
}

async function playTwoLegTie(label, opponent, userPower, log) {
  const first = await playMatch({ label: fmt("twoLegMatch", { round: label, n: 1 }), stage: "knockout", opponent, knockout: false }, userPower);
  log.push(first);
  renderBracketLog(log);
  if (state.simMode === "manual") await waitForNextMatch(fmt("twoLegMatch", { round: label, n: 2 }));
  const second = await playMatch({ label: fmt("twoLegMatch", { round: label, n: 2 }), stage: "knockout", opponent, knockout: false }, userPower);
  const userAggregate = first.userGoals + second.userGoals;
  const rivalAggregate = first.rivalGoals + second.rivalGoals;
  second.userWon = userAggregate > rivalAggregate;
  if (userAggregate === rivalAggregate) {
    second.penalties = await playPenalties(opponent);
    second.userWon = second.penalties.user > second.penalties.rival;
  }
  addTimeline(fmt("aggregateResult", { team: tr("yourXI"), user: userAggregate, rival: rivalAggregate, opponent: opponent.name }));
  log.push(second);
  renderBracketLog(log);
  await wait(650);
  return second.userWon;
}

function weightedOpponents() {
  const used = new Set();
  const draw = (min, max) => {
    const candidates = shuffle(teamPool.filter((teamItem) => teamItem.power >= min && teamItem.power <= max && !used.has(teamKey(teamItem))));
    const fallback = shuffle(teamPool.filter((teamItem) => !used.has(teamKey(teamItem))));
    const picked = candidates[0] || fallback[0];
    used.add(teamKey(picked));
    return picked;
  };
  return [
    draw(76, 90),
    draw(78, 91),
    draw(80, 92),
    draw(84, 94),
    draw(88, 96),
    draw(91, 98),
    draw(93, 99)
  ];
}

async function playMatch(round, userPower) {
  const stage = document.querySelector("#matchStage");
  const opponent = round.opponent;
  const events = createEvents(userPower, opponent);
  let userGoals = 0;
  let rivalGoals = 0;
  let currentMinute = 0;
  stage.innerHTML = `
    <div class="live-card">
      <p class="eyebrow">${round.label}</p>
      <h3><span>${tr("yourXI")}</span><b>${tr("versus")}</b><img src="${crestUrl(opponent)}" alt="${opponent.name}"><span>${opponent.name} ${opponent.season}</span></h3>
      <div class="match-clock"><span id="matchMinute">0'</span><div><i id="clockFill"></i></div></div>
      <div class="live-score"><span id="liveUser">0</span><b>-</b><span id="liveRival">0</span></div>
      <div class="penalty-stage" id="penaltyStage"></div>
      <div class="timeline" id="timeline"></div>
    </div>
  `;
  const liveUserEl = stage.querySelector("#liveUser");
  const liveRivalEl = stage.querySelector("#liveRival");
  const timelineEl = stage.querySelector("#timeline");
  const minuteEl = stage.querySelector("#matchMinute");
  const fillEl = stage.querySelector("#clockFill");
  await tickToMinute(4, { currentMinute, minuteEl, fillEl }).then((minute) => {
    currentMinute = minute;
  });
  for (const event of events) {
    currentMinute = await tickToMinute(event.minute, { currentMinute, minuteEl, fillEl });
    if (event.side === "user" || event.side === "rivalOwnGoal") userGoals += 1;
    if (event.side === "rival" || event.side === "userOwnGoal") rivalGoals += 1;
    liveUserEl.textContent = userGoals;
    liveRivalEl.textContent = rivalGoals;
    const detail = event.assist ? ` (${tr("assist")}: ${event.assist})` : "";
    addTimeline(`${event.minute}' ${fmt(event.ownGoal ? "ownGoalBy" : "goalBy", { scorer: event.scorer })}${detail}`, timelineEl, event.side === "rival" || event.side === "userOwnGoal" ? "rival-goal" : "user-goal");
  }
  currentMinute = await tickToMinute(90, { currentMinute, minuteEl, fillEl });
  liveUserEl.textContent = userGoals;
  liveRivalEl.textContent = rivalGoals;
  let penalties = null;
  let userWon = userGoals > rivalGoals;
  if (round.knockout && userGoals === rivalGoals) {
    penalties = await playPenalties(opponent, stage.querySelector("#penaltyStage"));
    userWon = penalties.user > penalties.rival;
  }
  addTimeline(fmt("finalWhistle", { team: tr("yourXI"), userGoals, rivalGoals, opponent: opponent.name }), timelineEl);
  await wait(650);
  return { label: round.label, stage: round.stage, opponent, userGoals, rivalGoals, penalties, userWon, events };
}

async function tickToMinute(targetMinute, refs) {
  let minute = refs.currentMinute;
  while (minute < targetMinute) {
    minute += 1;
    refs.minuteEl.textContent = `${minute}'`;
    refs.fillEl.style.width = `${Math.min(100, (minute / 90) * 100)}%`;
    await wait(35);
  }
  return minute;
}

function createEvents(userPower, opponent) {
  const rivalPower = opponent.power;
  const diff = userPower - rivalPower;
  const userExpected = clamp(0.25, 3.2, 1.18 + diff / 10);
  const rivalExpected = clamp(0.25, 3.2, 1.05 - diff / 11);
  const shock = shockScore(userPower, rivalPower);
  const userGoals = shock ? shock.user : sampleGoals(userExpected);
  const rivalGoals = shock ? shock.rival : sampleGoals(rivalExpected);
  const events = [];
  for (let i = 0; i < userGoals; i += 1) {
    const scorer = randomScorer();
    events.push({ side: "user", minute: randomMinute(), scorer, assist: randomAssister(scorer) });
  }
  for (let i = 0; i < rivalGoals; i += 1) events.push({ side: "rival", minute: randomMinute(), scorer: randomOpponentScorer(opponent) });
  if (Math.random() < 0.016) events.push({ side: "rivalOwnGoal", minute: randomMinute(), scorer: randomOpponentDefender(opponent), ownGoal: true });
  if (Math.random() < 0.014) events.push({ side: "userOwnGoal", minute: randomMinute(), scorer: randomUserDefender(), ownGoal: true });
  return events.sort((a, b) => a.minute - b.minute);
}

function clamp(min, max, value) {
  return Math.max(min, Math.min(max, value));
}

function shockScore(userPower, rivalPower) {
  if (Math.random() > 0.012) return null;
  const userFavored = userPower + (Math.random() * 10 - 5) >= rivalPower;
  const winnerGoals = 6 + Math.floor(Math.random() * 3);
  const loserGoals = Math.random() > 0.7 ? 1 : 0;
  return userFavored
    ? { user: winnerGoals, rival: loserGoals }
    : { user: loserGoals, rival: winnerGoals };
}

function sampleGoals(expected) {
  const roll = Math.random();
  const shifted = expected + (Math.random() - 0.5) * 0.8;
  let goals = Math.max(0, Math.round(shifted));
  if (roll > 0.82) goals += 1;
  if (roll > 0.95) goals += 1;
  if (roll < 0.18) goals = Math.max(0, goals - 1);
  return Math.min(5, goals);
}

async function playPenalties(opponent, penaltyHost = document.querySelector("#penaltyStage") || document.querySelector("#timeline")) {
  const timelineEl = document.querySelector("#timeline");
  const host = penaltyHost || timelineEl || document.querySelector("#matchStage");
  const board = document.createElement("div");
  board.className = "penalty-board";
  board.innerHTML = `<h4>${tr("penalties")}</h4><div id="penaltyUser" class="penalty-row"><strong>${tr("yourXI")}</strong></div><div id="penaltyRival" class="penalty-row"><strong>${opponent.name}</strong></div>`;
  host.append(board);
  let user = 0;
  let rival = 0;
  for (let i = 0; i < 5; i += 1) {
    await wait(800);
    const userScores = Math.random() > 0.24;
    if (userScores) user += 1;
    addPenaltyMark("penaltyUser", userScores);
    await wait(800);
    const rivalScores = Math.random() > 0.27;
    if (rivalScores) rival += 1;
    addPenaltyMark("penaltyRival", rivalScores);
  }
  while (user === rival) {
    await wait(800);
    const userScores = Math.random() > 0.24;
    const rivalScores = Math.random() > 0.27;
    if (userScores) user += 1;
    if (rivalScores) rival += 1;
    addPenaltyMark("penaltyUser", userScores);
    await wait(800);
    addPenaltyMark("penaltyRival", rivalScores);
  }
  addTimeline(fmt("penaltiesResult", { team: tr("yourXI"), user, rival, opponent: opponent.name }), timelineEl);
  return { user, rival };
}

function waitForNextMatch(label) {
  return new Promise((resolve) => {
    const stage = document.querySelector("#matchStage");
    const button = document.createElement("button");
    button.className = "next-match-button";
    button.textContent = label;
    button.addEventListener("click", () => {
      button.remove();
      resolve();
    });
    stage.append(button);
  });
}

function addPenaltyMark(rowId, scored) {
  const mark = document.createElement("span");
  mark.className = `penalty-mark ${scored ? "scored" : "missed"}`;
  mark.textContent = scored ? tr("scored") : tr("missed");
  const row = document.querySelector(`#${rowId}`);
  if (!row) return;
  row.append(mark);
  row.scrollLeft = row.scrollWidth;
}

function addGroupVerdict(alive, wins, draws, points) {
  addTimeline(alive ? fmt("qualified", { points, wins, draws }) : fmt("eliminatedGroupsVerdict", { points, wins, draws }));
}

function groupTableRows(groupResults) {
  const rivalRows = groupResults.map((item) => ({
    name: item.opponent.name,
    season: item.opponent.season,
    source: item.opponent,
    isUser: false,
    played: 1,
    wins: item.rivalGoals > item.userGoals ? 1 : 0,
    draws: item.rivalGoals === item.userGoals ? 1 : 0,
    losses: item.rivalGoals < item.userGoals ? 1 : 0,
    goalsFor: item.rivalGoals,
    goalsAgainst: item.userGoals,
    points: item.rivalGoals > item.userGoals ? 3 : item.rivalGoals === item.userGoals ? 1 : 0
  }));
  for (let i = 0; i < rivalRows.length; i += 1) {
    for (let j = i + 1; j < rivalRows.length; j += 1) {
      const aPower = groupResults[i].opponent.power;
      const bPower = groupResults[j].opponent.power;
      const aGoals = sampleGoals(clamp(0.35, 2.7, 1.02 + (aPower - bPower) / 18));
      const bGoals = sampleGoals(clamp(0.35, 2.7, 1.02 + (bPower - aPower) / 18));
      applyTableMatch(rivalRows[i], rivalRows[j], aGoals, bGoals);
    }
  }
  const rows = [
    {
      name: tr("yourXI"),
      season: "",
      source: null,
      isUser: true,
      played: 3,
      wins: groupResults.filter((item) => item.userGoals > item.rivalGoals).length,
      draws: groupResults.filter((item) => item.userGoals === item.rivalGoals).length,
      losses: groupResults.filter((item) => item.userGoals < item.rivalGoals).length,
      goalsFor: groupResults.reduce((sum, item) => sum + item.userGoals, 0),
      goalsAgainst: groupResults.reduce((sum, item) => sum + item.rivalGoals, 0),
      points: groupResults.reduce((sum, item) => sum + (item.userGoals > item.rivalGoals ? 3 : item.userGoals === item.rivalGoals ? 1 : 0), 0)
    },
    ...rivalRows
  ].sort((a, b) => b.points - a.points || (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) || b.goalsFor - a.goalsFor)
    .map((row, index) => ({ ...row, rank: index + 1 }));
  return rows;
}

function addGroupTable(rows) {
  addStandingsButton(rows, tr("groupTable"), "group");
}

function applyTableMatch(a, b, aGoals, bGoals) {
  a.played += 1;
  b.played += 1;
  a.goalsFor += aGoals;
  a.goalsAgainst += bGoals;
  b.goalsFor += bGoals;
  b.goalsAgainst += aGoals;
  if (aGoals > bGoals) {
    a.wins += 1;
    b.losses += 1;
    a.points += 3;
  } else if (bGoals > aGoals) {
    b.wins += 1;
    a.losses += 1;
    b.points += 3;
  } else {
    a.draws += 1;
    b.draws += 1;
    a.points += 1;
    b.points += 1;
  }
}

function addStandingsButton(rows, title, mode) {
  state.standingsTables.push({ rows, title, mode });
  renderStandingsButtons();
}

function renderStandingsButtons() {
  const bracket = document.querySelector("#bracket");
  if (!bracket || !state.standingsTables.length) return;
  bracket.querySelectorAll(".standings-card").forEach((item) => item.remove());
  state.standingsTables.forEach((table, index) => {
    const holder = document.createElement("div");
    holder.className = "round-card standings-card";
    holder.innerHTML = `<h3>${table.title}</h3><button class="standings-button">${tr("viewStandings")}</button>`;
    holder.querySelector("button").addEventListener("click", () => openStandingsModal(table.rows, table.title, table.mode));
    bracket.prepend(holder);
  });
}

function openStandingsModal(rows, title, mode) {
  document.querySelector("#standingsTitle").textContent = title;
  document.querySelector("#standingsBody").innerHTML = standingsTableHtml(rows, mode);
  document.querySelector("#standingsDialog").showModal();
}

function standingsTableHtml(rows, mode) {
  return `
    <div class="standings-legend">
      <span class="zone-direct">${tr("directZone")}</span>
      ${mode === "league" ? `<span class="zone-playoff">${tr("playoffZone")}</span>` : ""}
      <span class="zone-out">${tr("eliminatedZone")}</span>
    </div>
    <div class="standings-scroll">
      <table class="standings-table">
        <thead>
          <tr><th>#</th><th></th><th>${tr("teamHeader")}</th><th>${tr("played")}</th><th>${tr("winsShort")}</th><th>${tr("drawsShort")}</th><th>${tr("lossesShort")}</th><th>GF</th><th>GC</th><th>${tr("goalDiff")}</th><th>${tr("points")}</th></tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr class="${row.isUser ? "user-row" : ""} ${standingsZoneClass(row, mode)}">
              <td>${row.rank}</td>
              <td><img src="${row.source ? crestUrl(row.source) : fallbackCrest(row.name)}" alt="${row.name}"></td>
              <td><strong>${row.name}</strong>${row.season ? `<em>${row.season}</em>` : ""}</td>
              <td>${row.played}</td><td>${row.wins}</td><td>${row.draws}</td><td>${row.losses}</td>
              <td>${row.goalsFor}</td><td>${row.goalsAgainst}</td><td>${row.goalsFor - row.goalsAgainst}</td><td>${row.points}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function standingsZoneClass(row, mode) {
  if (mode === "group") return row.rank <= 2 ? "zone-direct" : "zone-out";
  if (row.rank <= 8) return "zone-direct";
  if (row.rank <= 24) return "zone-playoff";
  return "zone-out";
}

function renderEndReview(won, log) {
  const stage = document.querySelector("#matchStage");
  const button = document.createElement("button");
  button.className = `next-match-button ${won ? "gold-button" : ""}`;
  button.textContent = tr("viewCard");
  button.addEventListener("click", () => showFinal(won, log));
  stage.append(button);
}

function openChampionsPage() {
  document.querySelector(".app-shell").classList.add("hidden");
  document.querySelector("#championsPage").classList.remove("hidden");
  document.querySelector("#championsStart").classList.toggle("hidden", state.simRunning);
  renderTeamProjection();
  window.location.hash = "champions";
}

function backToDraft(clearHash = true) {
  if (state.tournamentStarted) return;
  document.querySelector(".app-shell").classList.remove("hidden");
  document.querySelector("#championsPage").classList.add("hidden");
  if (clearHash) history.replaceState(null, "", window.location.pathname);
}

function addTimeline(text, timelineEl = document.querySelector("#timeline"), type = "") {
  if (!timelineEl) return;
  const item = document.createElement("div");
  item.className = `timeline-event ${type}`;
  item.textContent = text;
  timelineEl.append(item);
  timelineEl.scrollTop = timelineEl.scrollHeight;
}

function renderBracketLog(log) {
  document.querySelector("#bracket").innerHTML = log.map((item) => `
    <div class="round-card">
      <h3>${item.label}</h3>
      <div class="match">
        <span class="${item.userGoals > item.rivalGoals || item.penalties?.user > item.penalties?.rival ? "winner" : ""}">${tr("yourXI")}</span>
        <span class="score">${item.userGoals} - ${item.rivalGoals}${item.penalties ? ` (${item.penalties.user}-${item.penalties.rival} ${tr("penaltyShort")})` : ""}</span>
        <span class="opponent-name ${item.rivalGoals > item.userGoals || item.penalties?.rival > item.penalties?.user ? "winner" : ""}"><img src="${crestUrl(item.opponent)}" alt="${item.opponent.name}">${item.opponent.name}</span>
      </div>
    </div>
  `).join("");
  renderStandingsButtons();
}

function showFinal(won, log) {
  const last = log[log.length - 1];
  const lostInGroups = !won && last?.stage === "group";
  const lostInLeague = !won && last?.stage === "league";
  const stats = tournamentStats(log);
  const averages = teamAverages();
  const contribution = contributionStats(log);
  const title = won ? tr("won") : lostInGroups ? tr("lostGroups") : lostInLeague ? tr("lostLeague") : `${tr("lostAgainst")} ${last.opponent.name}`;
  state.lastFinalCard = { won, title, stats, averages, contribution, players: selectedPlayers(), formation: state.formationName };
  const root = document.querySelector("#resultModal");
  root.className = `result-modal ${won ? "champion-modal" : ""}`;
  root.innerHTML = `
    <p class="eyebrow">${won ? tr("champion") : tr("eliminated")}</p>
    <h2>${title}</h2>
    ${finalStatsHtml(averages, stats)}
    <div class="contribution-grid">
      ${contributionTable(tr("scorers"), contribution.scorers)}
      ${contributionTable(tr("assists"), contribution.assists)}
    </div>
    <div class="final-pitch">${finalPitchHtml()}</div>
    <div class="share-actions">
      <button id="shareFinalImage" class="ghost-button">${tr("shareImage")}</button>
    </div>
    <button id="playAgain" class="primary-button">${tr("playAgain")}</button>
  `;
  document.querySelector("#shareFinalImage").addEventListener("click", shareFinalImage);
  document.querySelector("#playAgain").addEventListener("click", () => {
    document.querySelector("#resultDialog").close();
    resetToSetup();
  });
  document.querySelector("#resultDialog").showModal();
}

function finalStatsHtml(averages, stats) {
  return `
    <div class="final-stats final-stats-featured">
      <span class="stat-hero"><em>${tr("avg")}</em><strong>${averages.overall}</strong></span>
      <span><em>${tr("attackAvg")}</em><strong>${averages.attack}</strong></span>
      <span><em>${tr("defenseAvg")}</em><strong>${averages.defense}</strong></span>
    </div>
    <div class="record-strip">
      <span><em>${tr("wins")}</em><strong>${stats.wins}</strong></span>
      <span><em>${tr("draws")}</em><strong>${stats.draws}</strong></span>
      <span><em>${tr("losses")}</em><strong>${stats.losses}</strong></span>
      <span><em>${tr("goalsFor")}</em><strong>${stats.goalsFor}</strong></span>
      <span><em>${tr("goalsAgainst")}</em><strong>${stats.goalsAgainst}</strong></span>
    </div>
  `;
}

async function shareFinalLink() {
  if (!state.lastFinalCard) return;
  const text = finalShareText(state.lastFinalCard);
  const url = finalShareUrl(state.lastFinalCard);
  const copied = await copyShareText(`${text}\n${url}`);
  document.querySelector("#shareFinalLink").textContent = copied ? tr("shareCopied") : tr("shareLink");
  if (!copied) showManualShareBox(url);
}

async function shareFinalImage() {
  if (!state.lastFinalCard) return;
  const button = document.querySelector("#shareFinalImage");
  const originalText = button?.textContent || tr("shareImage");
  if (button) {
    button.disabled = true;
    button.textContent = tr("preparingImage");
  }
  clearShareStatus();
  try {
    let blob;
    try {
      blob = await finalShareImageBlob({ withCrests: true });
    } catch (error) {
      blob = await finalShareImageBlob({ withCrests: false });
    }
    const file = new File([blob], "ruta-de-estrellas.png", { type: "image/png" });
    if (navigator.canShare?.({ files: [file] }) && navigator.share) {
      try {
        await navigator.share({ title: tr("shareTitle"), text: finalShareText(state.lastFinalCard), files: [file] });
        showShareStatus(tr("imageDownloaded"));
        return;
      } catch (error) {
        // Fall through to download.
      }
    }
    downloadBlob(blob, "ruta-de-estrellas.png");
    showShareStatus(tr("imageDownloaded"));
  } catch (error) {
    console.error(error);
    showShareStatus(tr("imageError"), true);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = originalText;
    }
  }
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function clearShareStatus() {
  document.querySelector(".share-status")?.remove();
}

function showShareStatus(text, isError = false) {
  clearShareStatus();
  const status = document.createElement("p");
  status.className = `share-status ${isError ? "error" : ""}`;
  status.textContent = text;
  document.querySelector(".share-actions")?.after(status);
}

function finalShareUrl(card) {
  const payload = {
    r: card.won ? 1 : 0,
    t: card.title,
    f: card.formation,
    a: [card.averages.overall, card.averages.attack, card.averages.defense],
    s: [card.stats.wins, card.stats.draws, card.stats.losses, card.stats.goalsFor, card.stats.goalsAgainst],
    p: card.players.map((player) => [player.name, player.chosenPosition, player.teamName])
  };
  return `https://champions-draft-iota.vercel.app/#card=${encodeSharePayload(payload)}`;
}

function encodeSharePayload(payload) {
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = "";
  for (let i = 0; i < bytes.length; i += 8192) {
    binary += String.fromCharCode(...bytes.slice(i, i + 8192));
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeSharePayload(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

async function copyShareText(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) {
    // Try the older selection-based copy below.
  }
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  } catch (error) {
    return false;
  }
}

function showManualShareBox(url) {
  const existing = document.querySelector(".manual-share");
  if (existing) existing.remove();
  const box = document.createElement("div");
  box.className = "manual-share";
  box.innerHTML = `<input value="${url.replace(/"/g, "&quot;")}" readonly>`;
  document.querySelector(".share-actions").after(box);
  const input = box.querySelector("input");
  input.focus();
  input.select();
}

function finalShareText(card) {
  const record = `${card.stats.wins}V ${card.stats.draws}E ${card.stats.losses}D`;
  return `${tr("shareTitle")} - ${card.title}\n${tr("avg")}: ${card.averages.overall} | ${tr("attackAvg")}: ${card.averages.attack} | ${tr("defenseAvg")}: ${card.averages.defense}\n${record} | ${tr("goalsFor")}: ${card.stats.goalsFor} | ${tr("goalsAgainst")}: ${card.stats.goalsAgainst}`;
}

async function finalShareImageBlob(options = {}) {
  const withCrests = options.withCrests !== false;
  const card = state.lastFinalCard;
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1600;
  const ctx = canvas.getContext("2d");
  const bg = ctx.createLinearGradient(0, 0, 1080, 1600);
  bg.addColorStop(0, card.won ? "#fff2a8" : "#05112e");
  bg.addColorStop(0.44, card.won ? "#d9b45f" : "#123d92");
  bg.addColorStop(1, card.won ? "#6f4b11" : "#061536");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1080, 1600);
  drawShareTexture(ctx, card.won);
  drawRoundRect(ctx, 62, 54, 956, 1492, 34, "rgba(255,255,255,0.95)");
  const header = ctx.createLinearGradient(92, 84, 988, 270);
  header.addColorStop(0, "#061536");
  header.addColorStop(0.62, "#123d92");
  header.addColorStop(1, card.won ? "#d8b76c" : "#0f8fff");
  drawRoundRect(ctx, 92, 84, 896, 220, 24, header);
  ctx.fillStyle = "rgba(255,255,255,0.12)";
  ctx.fillRect(92, 206, 896, 2);
  ctx.fillStyle = card.won ? "#ffe59a" : "#d8b76c";
  ctx.textAlign = "center";
  ctx.font = "900 30px Arial";
  ctx.fillText("RUTA DE ESTRELLAS", 540, 136);
  ctx.fillStyle = "white";
  ctx.font = "900 52px Arial";
  drawWrappedText(ctx, card.title, 540, 206, 790, 54);

  drawShareAverages(ctx, card.averages, 92, 340);
  drawShareRecord(ctx, card.stats, 92, 506);
  drawContributionImageSection(ctx, tr("scorers"), card.contribution.scorers, 92, 625);
  drawContributionImageSection(ctx, tr("assists"), card.contribution.assists, 548, 625);
  await drawPitchImage(ctx, card.players, 128, 855, 824, 540, card.formation, { withCrests });
  drawRoundRect(ctx, 132, 1435, 816, 66, 18, "#1557ff");
  ctx.fillStyle = "white";
  ctx.font = "900 25px Arial";
  ctx.fillText(tr("imageCta"), 540, 1477);
  return canvasToBlob(canvas);
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("No se pudo generar la imagen")), "image/png", 0.95);
    } catch (error) {
      reject(error);
    }
  });
}

function drawShareTexture(ctx, won) {
  ctx.save();
  ctx.globalAlpha = won ? 0.16 : 0.22;
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  for (let i = -240; i < 1160; i += 120) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 420, 1600);
    ctx.stroke();
  }
  ctx.globalAlpha = won ? 0.16 : 0.12;
  ctx.fillStyle = won ? "#ffffff" : "#d8b76c";
  for (let i = 0; i < 34; i += 1) {
    const x = 80 + ((i * 157) % 920);
    const y = 90 + ((i * 223) % 1400);
    ctx.beginPath();
    ctx.arc(x, y, 2.2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawShareAverages(ctx, averages, x, y) {
  drawRoundRect(ctx, x, y, 292, 128, 18, "#071b47");
  ctx.fillStyle = "#d8b76c";
  ctx.textAlign = "left";
  ctx.font = "900 22px Arial";
  ctx.fillText(tr("avg").toUpperCase(), x + 22, y + 38);
  ctx.fillStyle = "white";
  ctx.font = "900 58px Arial";
  ctx.fillText(String(averages.overall), x + 22, y + 98);
  [
    [tr("attackAvg"), averages.attack],
    [tr("defenseAvg"), averages.defense]
  ].forEach(([label, value], index) => {
    const xx = x + 320 + index * 258;
    drawRoundRect(ctx, xx, y, 236, 128, 18, "#f3f7ff");
    ctx.fillStyle = "#60718f";
    ctx.font = "900 19px Arial";
    ctx.fillText(label.toUpperCase(), xx + 20, y + 39);
    ctx.fillStyle = "#071b47";
    ctx.font = "900 46px Arial";
    ctx.fillText(String(value), xx + 20, y + 98);
  });
  ctx.textAlign = "center";
}

function drawShareRecord(ctx, stats, x, y) {
  const items = [
    [tr("wins"), stats.wins, "#11a36a"],
    [tr("draws"), stats.draws, "#d8b76c"],
    [tr("losses"), stats.losses, "#d94b5a"],
    [tr("goalsFor"), stats.goalsFor, "#1557ff"],
    [tr("goalsAgainst"), stats.goalsAgainst, "#071b47"]
  ];
  items.forEach(([label, value, color], index) => {
    const xx = x + index * 180;
    drawRoundRect(ctx, xx, y, 164, 80, 16, "#ffffff");
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.font = "900 30px Arial";
    ctx.fillText(String(value), xx + 82, y + 36);
    ctx.fillStyle = "#60718f";
    ctx.font = "900 15px Arial";
    ctx.fillText(label.toUpperCase(), xx + 82, y + 62);
  });
}

function drawContributionImageSection(ctx, title, rows, x, y) {
  drawRoundRect(ctx, x, y, 400, 178, 12, "rgba(255,255,255,0.82)");
  ctx.fillStyle = "#071b47";
  ctx.textAlign = "left";
  ctx.font = "900 22px Arial";
  ctx.fillText(title, x + 18, y + 34);
  ctx.font = "700 18px Arial";
  const list = rows.length ? rows.slice(0, 4) : [[tr("noStats"), 0]];
  list.forEach(([name, total], index) => {
    const yy = y + 68 + index * 25;
    ctx.fillStyle = "#071b47";
    ctx.fillText(trimCanvasText(ctx, name, 285), x + 18, yy);
    ctx.textAlign = "right";
    ctx.fillText(String(total), x + 372, yy);
    ctx.textAlign = "left";
  });
  ctx.textAlign = "center";
}

async function drawPitchImage(ctx, players, x, y, w, h, formationName, options = {}) {
  const withCrests = options.withCrests !== false;
  const pitchGradient = ctx.createLinearGradient(x, y, x, y + h);
  pitchGradient.addColorStop(0, "#1ca361");
  pitchGradient.addColorStop(0.5, "#147d4d");
  pitchGradient.addColorStop(1, "#0f5f3e");
  drawRoundRect(ctx, x, y, w, h, 18, pitchGradient);
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  for (let stripe = 0; stripe < 6; stripe += 1) {
    if (stripe % 2 === 0) ctx.fillRect(x + 10, y + 10 + stripe * ((h - 20) / 6), w - 20, (h - 20) / 6);
  }
  ctx.strokeStyle = "rgba(255,255,255,0.74)";
  ctx.lineWidth = 3;
  ctx.strokeRect(x + 10, y + 10, w - 20, h - 20);
  ctx.beginPath();
  ctx.moveTo(x + 10, y + h / 2);
  ctx.lineTo(x + w - 10, y + h / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + w / 2, y + h / 2, 58, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeRect(x + w * 0.28, y + 10, w * 0.44, h * 0.15);
  ctx.strokeRect(x + w * 0.28, y + h - 10 - h * 0.15, w * 0.44, h * 0.15);
  const rows = shareFormationRows(players, formationName);
  const gap = (h - 92) / Math.max(1, rows.length - 1);
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex];
    const yy = y + 46 + rowIndex * gap;
    for (let index = 0; index < row.length; index += 1) {
      const player = row[index];
      const xx = x + (w / (row.length + 1)) * (index + 1);
      drawRoundRect(ctx, xx - 74, yy - 26, 148, 54, 13, "rgba(255,255,255,0.94)");
      const crest = withCrests ? await loadCanvasImage(crestUrl(player.teamName)) : null;
      if (crest) ctx.drawImage(crest, xx - 62, yy - 15, 28, 28);
      ctx.fillStyle = "#071b47";
      ctx.font = "900 13px Arial";
      ctx.textAlign = crest ? "left" : "center";
      ctx.fillText(trimCanvasText(ctx, shortPlayerName(player.name), crest ? 92 : 124), crest ? xx - 26 : xx, yy - 3);
      ctx.fillStyle = "#4c5f86";
      ctx.font = "800 12px Arial";
      ctx.fillText(posLabel(player.chosenPosition), crest ? xx - 26 : xx, yy + 15);
      ctx.textAlign = "center";
    }
  }
}

function loadCanvasImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;
    const done = (value) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };
    const timer = setTimeout(() => done(null), 1400);
    image.onload = () => {
      clearTimeout(timer);
      done(image);
    };
    image.onerror = () => {
      clearTimeout(timer);
      done(null);
    };
    image.src = src;
  });
}

function shareFormationRows(players, formationName) {
  const available = [...players];
  const shape = formations[formationName] || formations[state.formationName] || [["LW", "ST", "RW"], ["CM", "CM", "CM"], ["LB", "CB", "CB", "RB"], ["GK"]];
  return shape.map((line) => line.map((position) => {
    const index = available.findIndex((player) => player.chosenPosition === position);
    const player = index >= 0 ? available.splice(index, 1)[0] : available.shift();
    return player;
  }).filter(Boolean));
}

function positionShareRank(position) {
  return { GK: 0, CB: 1, LB: 1, RB: 1, DM: 2, CM: 2, LM: 2, RM: 2, AM: 2, LW: 3, RW: 3, ST: 3 }[position] ?? 2;
}

function drawRoundRect(ctx, x, y, width, height, radius, fillStyle) {
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  ctx.fill();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = test;
    }
  });
  if (line) ctx.fillText(line, x, y);
}

function trimCanvasText(ctx, text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let trimmed = text;
  while (trimmed.length > 3 && ctx.measureText(`${trimmed}...`).width > maxWidth) {
    trimmed = trimmed.slice(0, -1);
  }
  return `${trimmed}...`;
}

function renderSharedCardFromUrl() {
  if (!window.location.hash.startsWith("#card=")) return;
  try {
    const payload = decodeSharePayload(window.location.hash.slice(6));
    const averages = { overall: payload.a?.[0] ?? "-", attack: payload.a?.[1] ?? "-", defense: payload.a?.[2] ?? "-" };
    const stats = { wins: payload.s?.[0] ?? 0, draws: payload.s?.[1] ?? 0, losses: payload.s?.[2] ?? 0, goalsFor: payload.s?.[3] ?? 0, goalsAgainst: payload.s?.[4] ?? 0 };
    const safe = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
    const root = document.querySelector("#resultModal");
    root.className = `result-modal ${payload.r === 1 ? "champion-modal" : ""}`;
    root.innerHTML = `
      <p class="eyebrow">${payload.r === 1 ? tr("champion") : tr("eliminated")}</p>
      <h2>${safe(payload.t)}</h2>
      ${finalStatsHtml(averages, stats)}
      <div class="shared-team">
        ${(payload.p || []).map(([name, position, teamName]) => `<p><strong>${safe(posLabel(position))}</strong><span>${safe(name)}</span><em>${safe(teamName)}</em></p>`).join("")}
      </div>
      <a class="primary-button shared-play-link" href="https://7a0.com.br/r/5R4YPW">${tr("buildYours")}</a>
    `;
    document.querySelector("#resultDialog").showModal();
  } catch (error) {
    history.replaceState(null, "", window.location.pathname);
  }
}

function contributionStats(log) {
  const scorers = {};
  const assists = {};
  log.flatMap((item) => item.events || []).filter((event) => event.side === "user").forEach((event) => {
    scorers[event.scorer] = (scorers[event.scorer] || 0) + 1;
    if (event.assist) assists[event.assist] = (assists[event.assist] || 0) + 1;
  });
  return { scorers: sortContribution(scorers), assists: sortContribution(assists) };
}

function sortContribution(stats) {
  return Object.entries(stats).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function contributionTable(title, rows) {
  return `
    <div class="contribution-card">
      <h3>${title}</h3>
      ${rows.length ? rows.slice(0, 6).map(([name, total]) => `<p><span>${name}</span><strong>${total}</strong></p>`).join("") : `<p><span>${tr("noStats")}</span><strong>0</strong></p>`}
    </div>
  `;
}

function tournamentStats(log) {
  return log.reduce((stats, item) => {
    stats.goalsFor += item.userGoals;
    stats.goalsAgainst += item.rivalGoals;
    const won = item.penalties ? item.penalties.user > item.penalties.rival : item.userGoals > item.rivalGoals;
    const lost = item.penalties ? item.penalties.user < item.penalties.rival : item.userGoals < item.rivalGoals;
    if (won) stats.wins += 1;
    else if (lost) stats.losses += 1;
    else stats.draws += 1;
    return stats;
  }, { wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 });
}

function finalPitchHtml() {
  return formations[state.formationName].map((line, lineIndex) => `
    <div class="final-line final-line-${line.length}">
      ${line.map((position, lineSlot) => {
        const slot = state.slots.find((item) => item.lineIndex === lineIndex && item.position === position && item.id.includes(`-${lineSlot}-`));
        return `<span>${slot?.player ? `<img src="${crestUrl(slot.player.teamName)}" alt="${slot.player.teamName}">` : ""}<strong>${slot?.player ? shortPlayerName(slot.player.name) : posLabel(position)}</strong><em>${posLabel(position)}</em></span>`;
      }).join("")}
    </div>
  `).join("");
}

function randomScorer() {
  const attackers = selectedPlayers().filter((player) => ["ST", "LW", "RW", "AM", "LM", "RM"].includes(player.chosenPosition));
  const pool = attackers.length ? attackers : selectedPlayers();
  return pool[Math.floor(Math.random() * pool.length)].name;
}

function randomAssister(scorer) {
  if (Math.random() < 0.18) return "";
  const creators = selectedPlayers().filter((player) => player.name !== scorer && ["LW", "RW", "AM", "CM", "LM", "RM", "ST"].includes(player.chosenPosition));
  const pool = creators.length ? creators : selectedPlayers().filter((player) => player.name !== scorer);
  if (!pool.length) return "";
  return pool[Math.floor(Math.random() * pool.length)].name;
}

function randomOpponentScorer(opponent) {
  const attackers = opponent.roster.filter((player) => player.positions.some((position) => ["ST", "LW", "RW", "AM", "LM", "RM"].includes(position)));
  const pool = attackers.length ? attackers : opponent.roster;
  return pool[Math.floor(Math.random() * pool.length)].name;
}

function randomOpponentDefender(opponent) {
  const defenders = opponent.roster.filter((player) => player.positions.some((position) => ["GK", "CB", "LB", "RB", "DM"].includes(position)));
  const pool = defenders.length ? defenders : opponent.roster;
  return pool[Math.floor(Math.random() * pool.length)].name;
}

function randomUserDefender() {
  const defenders = selectedPlayers().filter((player) => ["GK", "CB", "LB", "RB", "DM"].includes(player.chosenPosition));
  const pool = defenders.length ? defenders : selectedPlayers();
  return pool[Math.floor(Math.random() * pool.length)].name;
}

function randomMinute() {
  return Math.floor(4 + Math.random() * 88);
}

function shuffle(items) {
  return items
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

init();
