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

const formations = {
  "4-3-3": [["LW", "ST", "RW"], ["CM", "DM", "CM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "4-4-2": [["ST", "ST"], ["LM", "CM", "CM", "RM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "4-2-3-1": [["ST"], ["LW", "AM", "RW"], ["DM", "DM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "3-5-2": [["ST", "ST"], ["LM", "CM", "DM", "CM", "RM"], ["CB", "CB", "CB"], ["GK"]],
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
  difficulty: "normal",
  rolling: false,
  needsThrow: true
};

const i18n = {
  es: {
    subtitle: "Draft historico de Champions",
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
    lostAgainst: "Perdiste contra",
    playAgain: "Jugar de nuevo",
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
    lostAgainst: "You lost against",
    playAgain: "Play again",
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
    close: "Close"
  }
};

function tr(key) {
  return i18n[state.lang][key] || i18n.es[key] || key;
}

function fmt(key, values = {}) {
  return tr(key).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function posLabel(position) {
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
  if (rating >= 97) return rating - 3;
  if (rating >= 94) return rating - 2;
  if (rating >= 90) return rating - 2;
  if (rating >= 86) return rating - 1;
  return rating;
}

function configureTeamPool() {
  ["Kairat-2025/26", "Pafos-2025/26"].forEach((key) => {
    const index = teamPool.findIndex((item) => teamKey(item) === key);
    if (index >= 0) teamPool.splice(index, 1);
  });
  addBenchPlayers();
}

function addBenchPlayers() {
  const benches = {
    Barcelona: [p("Claudio Bravo", 84, ["GK"]), p("Rafinha", 80, ["CM", "AM"])],
    "Real Madrid": [p("Pepe", 86, ["CB"]), p("Lucas Vazquez", 80, ["RW", "RM"])],
    Inter: [p("Thiago Motta", 84, ["DM", "CM"]), p("Davide Santon", 78, ["LB", "RB"])],
    Liverpool: [p("Joe Gomez", 82, ["CB", "RB"]), p("Naby Keita", 80, ["CM"])],
    "Man City": [p("Riyad Mahrez", 87, ["RW"]), p("Manuel Akanji", 82, ["CB", "RB"])],
    Bayern: [p("Philippe Coutinho", 86, ["AM", "LW"]), p("Benjamin Pavard", 82, ["RB", "CB"])],
    PSG: [p("Pablo Sarabia", 80, ["RW", "AM"]), p("Idrissa Gueye", 81, ["DM", "CM"])],
    Dortmund: [p("Nuri Sahin", 82, ["CM", "DM"]), p("Felipe Santana", 78, ["CB"])],
    Chelsea: [p("Gary Cahill", 82, ["CB"]), p("Salomon Kalou", 79, ["LW", "ST"])],
    Benfica: [p("Fredrik Aursnes", 80, ["CM", "LM"]), p("Petar Musa", 76, ["ST"])],
    Ajax: [p("Joel Veltman", 80, ["CB", "RB"]), p("Kasper Dolberg", 79, ["ST"])],
    Porto: [p("Oliver Torres", 78, ["CM", "AM"]), p("Yacine Brahimi", 81, ["LW", "AM"])],
    Roma: [p("Diego Perotti", 80, ["LW", "AM"]), p("Lorenzo Pellegrini", 80, ["CM", "AM"])],
    Lyon: [p("Lucas Tousart", 78, ["DM", "CM"]), p("Bertrand Traore", 78, ["RW", "ST"])],
    Shakhtar: [p("Alex Teixeira", 80, ["AM", "LW"]), p("Eduardo", 78, ["ST"])],
    "Atletico Madrid": [p("Stefan Savic", 80, ["CB"]), p("Oliver Torres", 78, ["CM", "AM"])],
    Olympiacos: [p("Daniel Podence", 78, ["LW", "RW"]), p("Andreas Bouchalakis", 76, ["CM", "DM"])],
    "Club Brugge": [p("Krepin Diatta", 77, ["RW", "RM"]), p("Eder Balanta", 75, ["DM", "CB"])],
    Qarabag: [p("Afran Ismayilov", 68, ["RW", "AM"]), p("Donald Guerrier", 69, ["LB", "LM"])],
    PSV: [p("Guus Til", 78, ["AM", "CM"]), p("Andre Ramalho", 76, ["CB"])],
    "Union SG": [p("Gustaf Nilsson", 72, ["ST"]), p("Loic Lapoussin", 72, ["LM", "LW"])],
    Kobenhavn: [p("Viktor Claesson", 75, ["AM", "ST"]), p("Rasmus Falk", 74, ["CM", "RM"])],
    Galatasaray: [p("Kerem Akturkoglu", 80, ["LW", "RW"]), p("Kaan Ayhan", 77, ["CB", "RB"])],
    Monaco: [p("Joao Moutinho", 84, ["CM"]), p("Valere Germain", 79, ["ST"])],
    Atalanta: [p("Mario Pasalic", 79, ["CM", "AM"]), p("Luis Muriel", 82, ["ST"])],
    Villarreal: [p("Yeremy Pino", 80, ["RW", "LW"]), p("Samuel Chukwueze", 79, ["RW"])],
    "Man United": [p("Darren Fletcher", 83, ["CM", "RM"]), p("Park Ji-sung", 84, ["LM", "RM", "CM"])],
    Milan: [p("Cafu", 83, ["RB"]), p("Serginho", 80, ["LM", "LB"])],
    Arsenal: [p("Mathieu Flamini", 80, ["DM", "CM", "LB"]), p("Robin van Persie", 83, ["ST", "RW"])],
    Napoli: [p("Giovanni Simeone", 79, ["ST"]), p("Eljif Elmas", 79, ["CM", "AM", "LW"])]
  };
  teamPool.forEach((item) => {
    (benches[item.name] || []).forEach((player) => {
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
  "Kobenhavn": "Kobenhavn-logo-500x313.png",
  "Leeds": "leeds.png",
  "Liverpool": "Logo-Liverpool-500x313.png",
  "Lyon": "Olympique-Lyonnais-logo-500x281.png",
  "Man City": "Manchester-City-Logo-500x313.png",
  "Man United": "Manchester-United-Logo-493x500.png",
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
}

function bindEvents() {
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
  document.querySelector("#closePick").addEventListener("click", () => document.querySelector("#positionDialog").close());
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
  document.querySelector("#setupPanel .eyebrow").textContent = tr("preGame");
  document.querySelector("#setupPanel h2").textContent = tr("chooseFormation");
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
  document.querySelector("#startTournament").textContent = tr("startMatches");
  document.querySelector('[data-difficulty="normal"]').textContent = tr("normal");
  document.querySelector('[data-difficulty="hard"]').textContent = tr("hard");
  document.querySelector("#simModeHelp").textContent = state.simMode === "manual" ? tr("manualHelp") : tr("fastHelp");
  document.querySelector("#positionDialog #pickTitle").textContent = tr("choosePosition");
  document.querySelector("#closePick").setAttribute("aria-label", tr("close"));
  document.querySelector("#dataDialog h2").textContent = tr("dataTitle");
  document.querySelector("#dataDialog p").textContent = tr("dataBody");
  const dataItems = document.querySelectorAll("#dataDialog li");
  dataItems[0].textContent = tr("dataLi1");
  dataItems[1].textContent = tr("dataLi2");
  dataItems[2].textContent = tr("dataLi3");
  document.querySelector("#closeData").setAttribute("aria-label", tr("close"));
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
      renderPitch();
      renderNeeds();
    });
    root.append(button);
  });
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
  state.rolling = false;
  state.needsThrow = true;
  backToDraft(false);
  document.querySelector("#setupPanel").classList.remove("hidden");
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
  document.querySelector("#setupPanel").classList.add("hidden");
  render();
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
  const next = source[Math.floor(Math.random() * source.length)];
  if (!state.usedTeamKeys.includes(teamKey(next))) {
    state.usedTeamKeys.push(teamKey(next));
  }
  return next;
}

async function rollTeam() {
  if (state.phase !== "draft" || selectedCount() >= 11 || state.rollsLeft <= 0 || state.rolling || !state.currentTeam) return;
  const button = document.querySelector("#rollTeam");
  button.classList.remove("rolling-button");
  void button.offsetWidth;
  button.classList.add("rolling-button");
  const next = selectNextTeam(true);
  if (!next) return;
  state.rolling = true;
  renderMeta();
  await animateTeamRoulette(next);
  state.currentTeam = next;
  state.needsThrow = false;
  state.rolling = false;
  render();
}

async function throwTeam() {
  if (state.phase !== "draft" || selectedCount() >= 11 || state.rolling || !state.needsThrow) return;
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
      track.innerHTML = `<div><img src="${crestUrl(teamItem)}" alt=""><span>${teamItem.name}</span><strong>${teamItem.season}</strong></div>`;
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
  renderPitch();
  renderCurrentTeam();
  renderNeeds();
  renderLeague();
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
  document.querySelector("#rollTeam").disabled = state.phase !== "draft" || state.rollsLeft <= 0 || selectedCount() >= 11 || state.rolling || !state.currentTeam;
  document.querySelector("#rollTeam span").textContent = `${tr("otherTeam")} (${state.rollsLeft})`;
  document.querySelector("#throwTeam").disabled = state.phase !== "draft" || selectedCount() >= 11 || state.rolling || !state.needsThrow;
  document.querySelector("#startTournament").disabled = state.simRunning || selectedCount() !== 11;
  renderSimMode();
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

function renderPitch() {
  const root = document.querySelector("#formation");
  root.innerHTML = "";
  formations[state.formationName].forEach((line, lineIndex) => {
    const row = document.createElement("div");
    row.className = `line line-${line.length}`;
    line.forEach((position, lineSlot) => {
      const slot = state.slots.find((item) => item.lineIndex === lineIndex && item.position === position && item.id.includes(`-${lineSlot}-`));
      const card = document.createElement("div");
      card.className = `slot ${slot?.player ? "" : "empty"}`;
      card.innerHTML = slot?.player
        ? `<strong>${slot.player.name}</strong><span>${posLabel(slot.position)} · ${slot.player.team}</span><b>${ratingLabel(slot.player.rating)}</b>`
        : `<span>${posLabel(position)}</span>`;
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
    document.querySelector("#teamName").textContent = tr("throw");
    document.querySelector("#teamEra").textContent = state.phase === "draft" ? tr("round") : tr("setupState");
    document.querySelector("#teamNote").textContent = state.phase === "draft" ? tr("waitingThrow") : tr("setupTeamNote");
    document.querySelector("#teamCrest").removeAttribute("src");
    document.querySelector("#teamCrest").classList.add("hidden");
    return;
  }
  document.querySelector("#teamCrest").src = crestUrl(teamItem);
  document.querySelector("#teamCrest").classList.remove("hidden");
  document.querySelector("#teamCrest").alt = `${teamItem.name} ${teamItem.season}`;
  document.querySelector("#teamEra").textContent = fmt("teamPower", { season: teamItem.season, power: teamItem.power });
  document.querySelector("#teamName").innerHTML = `<img src="${crestUrl(teamItem)}" alt=""> <span>${teamItem.name}</span>`;
  document.querySelector("#teamNote").textContent = localizedTeamNote(teamItem);
  teamItem.roster
    .slice()
    .sort((a, b) => positionRank(a) - positionRank(b) || b.rating - a.rating)
    .forEach((player) => {
      const choices = eligibleSlotsFor(player);
      const card = document.createElement("button");
      card.className = `player-card ${choices.length ? "" : "blocked"}`;
      card.disabled = !choices.length || state.phase !== "draft";
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
  const needed = {};
  state.slots.filter((slot) => !slot.player).forEach((slot) => {
    needed[slot.position] = (needed[slot.position] || 0) + 1;
  });
  const items = state.slots.map((slot) => slot.position).filter((position, index, list) => list.indexOf(position) === index);
  document.querySelector("#needStrip").innerHTML = items.map((position) => `<span>${posLabel(position)} ${needed[position] || 0}</span>`).join("");
}

function renderLeague() {
  document.querySelector("#bracket").dataset.ready = selectedCount() === 11 ? "true" : "false";
}

function openPositionPicker(teamItem, player) {
  const choices = eligibleSlotsFor(player);
  if (!choices.length) return;
  state.pendingPick = { teamItem, player };
  document.querySelector("#pickTitle").textContent = player.name;
  document.querySelector("#pickMeta").textContent = `${teamItem.name} ${teamItem.season} · ${ratingLabel(player.rating)} ${tr("pointsShort")} · ${tr("canPlay")} ${player.positions.map((position) => posLabel(position)).join(", ")}`;
  const root = document.querySelector("#positionChoices");
  root.innerHTML = "";
  choices.forEach((slot) => {
    const button = document.createElement("button");
    button.className = "position-choice";
    button.textContent = posLabel(slot.position);
    button.addEventListener("click", () => chooseSlot(slot.id));
    root.append(button);
  });
  document.querySelector("#positionDialog").showModal();
}

function chooseSlot(slotId) {
  const slot = state.slots.find((item) => item.id === slotId);
  if (!slot || !state.pendingPick) return;
  const { teamItem, player } = state.pendingPick;
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
  document.querySelector("#positionDialog").close();
  state.currentTeam = null;
  state.needsThrow = selectedCount() < 11;
  render();
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
  state.simRunning = true;
  renderMeta();
  const userPower = averageRating() - 1;
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
  alive = points >= 4 || wins >= 2;
  addGroupVerdict(alive, wins, draws, points);
  await wait(1200);
  if (alive) {
    const rounds = [
      { label: tr("roundOf16"), stage: "knockout", opponent: opponents[3], knockout: true },
      { label: tr("quarterfinal"), stage: "knockout", opponent: opponents[4], knockout: true },
      { label: tr("semifinal"), stage: "knockout", opponent: opponents[5], knockout: true },
      { label: tr("finalRound"), stage: "knockout", opponent: opponents[6], knockout: true }
    ];
    for (let i = 0; i < rounds.length; i += 1) {
      const round = rounds[i];
      if (state.simMode === "manual") await waitForNextMatch(fmt("playRound", { round: round.label }));
      const result = await playMatch(round, userPower);
      log.push(result);
      renderBracketLog(log);
      if (!result.userWon) {
        alive = false;
        break;
      }
    }
  }
  state.phase = "done";
  state.simRunning = false;
  renderMeta();
  showFinal(alive, log);
}

function weightedOpponents() {
  const strong = teamPool.filter((teamItem) => teamItem.power >= 78);
  return [...strong, ...teamPool.filter((teamItem) => teamItem.power >= 88)]
    .sort(() => Math.random() - 0.5)
    .slice(0, 7);
}

async function playMatch(round, userPower) {
  const stage = document.querySelector("#matchStage");
  const opponent = round.opponent;
  const events = createEvents(userPower, opponent.power);
  let userGoals = 0;
  let rivalGoals = 0;
  let currentMinute = 0;
  stage.innerHTML = `
    <div class="live-card">
      <p class="eyebrow">${round.label}</p>
      <h3><span>${tr("yourXI")}</span><b>${tr("versus")}</b><img src="${crestUrl(opponent)}" alt="${opponent.name}"><span>${opponent.name} ${opponent.season}</span></h3>
      <div class="match-clock"><span id="matchMinute">0'</span><div><i id="clockFill"></i></div></div>
      <div class="live-score"><span id="liveUser">0</span><b>-</b><span id="liveRival">0</span></div>
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
    if (event.side === "user") userGoals += 1;
    if (event.side === "rival") rivalGoals += 1;
    liveUserEl.textContent = userGoals;
    liveRivalEl.textContent = rivalGoals;
    addTimeline(`${event.minute}' ${fmt("goalBy", { scorer: event.side === "user" ? event.scorer : opponent.name })}`, timelineEl);
  }
  currentMinute = await tickToMinute(90, { currentMinute, minuteEl, fillEl });
  liveUserEl.textContent = userGoals;
  liveRivalEl.textContent = rivalGoals;
  let penalties = null;
  let userWon = userGoals > rivalGoals;
  if (round.knockout && userGoals === rivalGoals) {
    penalties = await playPenalties(opponent, timelineEl);
    userWon = penalties.user > penalties.rival;
  }
  addTimeline(fmt("finalWhistle", { team: tr("yourXI"), userGoals, rivalGoals, opponent: opponent.name }), timelineEl);
  await wait(650);
  return { label: round.label, stage: round.stage, opponent, userGoals, rivalGoals, penalties, userWon };
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

function createEvents(userPower, rivalPower) {
  const userExpected = Math.max(0.35, 1.05 + (userPower - rivalPower) / 24);
  const rivalExpected = Math.max(0.35, 1.12 + (rivalPower - userPower) / 21);
  const shock = shockScore(userPower, rivalPower);
  const userGoals = shock ? shock.user : sampleGoals(userExpected);
  const rivalGoals = shock ? shock.rival : sampleGoals(rivalExpected);
  const events = [];
  for (let i = 0; i < userGoals; i += 1) events.push({ side: "user", minute: randomMinute(), scorer: randomScorer() });
  for (let i = 0; i < rivalGoals; i += 1) events.push({ side: "rival", minute: randomMinute() });
  return events.sort((a, b) => a.minute - b.minute);
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

async function playPenalties(opponent, timelineEl = document.querySelector("#timeline")) {
  const board = document.createElement("div");
  board.className = "penalty-board";
  board.innerHTML = `<h4>${tr("penalties")}</h4><div id="penaltyUser" class="penalty-row"><strong>${tr("yourXI")}</strong></div><div id="penaltyRival" class="penalty-row"><strong>${opponent.name}</strong></div>`;
  timelineEl.append(board);
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
  document.querySelector(`#${rowId}`).append(mark);
}

function addGroupVerdict(alive, wins, draws, points) {
  addTimeline(alive ? fmt("qualified", { points, wins, draws }) : fmt("eliminatedGroupsVerdict", { points, wins, draws }));
}

function openChampionsPage() {
  document.querySelector(".app-shell").classList.add("hidden");
  document.querySelector("#championsPage").classList.remove("hidden");
  document.querySelector("#championsStart").classList.toggle("hidden", state.simRunning);
  window.location.hash = "champions";
}

function backToDraft(clearHash = true) {
  document.querySelector(".app-shell").classList.remove("hidden");
  document.querySelector("#championsPage").classList.add("hidden");
  if (clearHash) history.replaceState(null, "", window.location.pathname);
}

function addTimeline(text, timelineEl = document.querySelector("#timeline")) {
  const item = document.createElement("div");
  item.className = "timeline-event";
  item.textContent = text;
  timelineEl.append(item);
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
}

function showFinal(won, log) {
  const last = log[log.length - 1];
  const lostInGroups = !won && last?.stage === "group";
  const stats = tournamentStats(log);
  const averages = teamAverages();
  const root = document.querySelector("#resultModal");
  root.innerHTML = `
    <p class="eyebrow">${won ? tr("champion") : tr("eliminated")}</p>
    <h2>${won ? tr("won") : lostInGroups ? tr("lostGroups") : `${tr("lostAgainst")} ${last.opponent.name}`}</h2>
    <div class="final-stats">
      <span>${tr("avg")} <strong>${ratingLabel(averages.overall)}</strong></span>
      <span>${tr("attackAvg")} <strong>${ratingLabel(averages.attack)}</strong></span>
      <span>${tr("defenseAvg")} <strong>${ratingLabel(averages.defense)}</strong></span>
      <span>${tr("wins")} <strong>${stats.wins}</strong></span>
      <span>${tr("draws")} <strong>${stats.draws}</strong></span>
      <span>${tr("losses")} <strong>${stats.losses}</strong></span>
      <span>${tr("goalsFor")} <strong>${stats.goalsFor}</strong></span>
      <span>${tr("goalsAgainst")} <strong>${stats.goalsAgainst}</strong></span>
    </div>
    <div class="final-pitch">${finalPitchHtml()}</div>
    <button id="playAgain" class="primary-button">${tr("playAgain")}</button>
  `;
  document.querySelector("#playAgain").addEventListener("click", () => {
    document.querySelector("#resultDialog").close();
    resetToSetup();
  });
  document.querySelector("#resultDialog").showModal();
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
        return `<span>${slot?.player ? `<img src="${crestUrl(slot.player.teamName)}" alt="${slot.player.teamName}">` : ""}<strong>${slot?.player?.name || posLabel(position)}</strong><em>${posLabel(position)}</em></span>`;
      }).join("")}
    </div>
  `).join("");
}

function randomScorer() {
  const attackers = selectedPlayers().filter((player) => ["ST", "LW", "RW", "AM", "LM", "RM"].includes(player.chosenPosition));
  const pool = attackers.length ? attackers : selectedPlayers();
  return pool[Math.floor(Math.random() * pool.length)].name;
}

function randomMinute() {
  return Math.floor(4 + Math.random() * 88);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

init();
