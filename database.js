//Modèle de données

class Concert{
  constructor(id, date, location, artist, description, seats) {
    this.id = id;
    this.date = date;
    this.location = location;
    this.artist = artist;
    this.description = description;
    this.seats = seats;
  }
}

class Reservation {
  constructor(id, status, dateReservation, idConcert) {
    this.id = id;
    this.status = status;
    this.dateReservation = dateReservation;
    this.idConcert = idConcert;
  }
}


class User{
  constructor(id, pseudo, isAdmin) {
      this.id = id;
      this.pseudo = pseudo;
      this.isAdmin = isAdmin;
  }
}

// La base de données 

const concerts = [
  new Concert("1", new Date("2023-11-15 19:00:00"), "Tokyo", "Hatsune Miku", "Concert holographique de Hatsune Miku, l'idol virtuelle emblématique du Japon.", 25000),
  new Concert("2", new Date("2023-12-05 18:30:00"), "Séoul", "K/DA", "Performance live de K/DA, le groupe de K-pop virtuel inspiré de League of Legends.", 40000),
  new Concert("3", new Date("2024-01-15 20:00:00"), "Los Angeles", "A-SOUL", "Concert virtuel du célèbre groupe chinois de virtual idols, A-SOUL.", 30000),
  new Concert("4", new Date("2024-02-20 21:00:00"), "New York", "Evelynn", "Spectacle immersif avec Evelynn, l'idol virtuelle de K/DA.", 18000),
  new Concert("5", new Date("2024-03-18 19:45:00"), "Londres", "Vocaloid All Stars", "Une collaboration unique d'idols Vocaloid pour un concert à Londres.", 22000),
  new Concert("6", new Date("2024-04-12 20:30:00"), "Paris", "Lil Miquela", "Lil Miquela, influenceuse virtuelle, en live à Paris.", 15000),
  new Concert("7", new Date("2024-05-20 19:15:00"), "Berlin", "Kizuna AI", "La pionnière des YouTubeurs virtuels, Kizuna AI, en concert pour ses fans européens.", 27000),
  new Concert("8", new Date("2024-06-25 20:00:00"), "Shanghai", "Luo Tianyi", "Concert en hologramme de Luo Tianyi, l'idol virtuelle populaire en Chine.", 35000),
  new Concert("9", new Date("2024-07-30 21:00:00"), "Bangkok", "Yukari Yuzuki", "Yukari Yuzuki, la vocaloid japonaise, en performance live en Thaïlande.", 20000),
  new Concert("10", new Date("2024-08-15 18:00:00"), "San Francisco", "Projekt Melody", "Projekt Melody, la star virtuelle de Twitch, en concert pour ses fans américains.", 10000)
];

const users = [
  new User(1, 'WolfieTailuWu', false),
  new User(2, 'FoxPawsOwO', true),
  new User(3, 'TigerStripe >w<', false),
  new User(4, 'DragonClaw~nya', true),
  new User(5, 'CoyoteWhisperuwu~', false),
  new User(6, 'BunnyEars-.-', false),
  new User(7, 'LionRoar~baka!', false),
  new User(8, 'PantherShadowOwO', true),
  new User(9, 'BearHugs>_<', false),
  new User(10, 'OtterSplashuwu', false)
];


const reservations = [
  new Reservation(1, 'to_confirm', new Date ('2023-11-15 10:00:00'), 1),
  new Reservation(2, 'confirmed', new Date ('2023-11-16 14:30:00'), 2),
  new Reservation(3, 'canceled', new Date ('2022-11-16 14:00:00'), 1),
  new Reservation(4, 'to_confirm', new Date ('2021-11-16 14:10:00'), 3),
  new Reservation(5, 'confirmed', new Date ('2019-11-16 10:30:00'), 2),
  new Reservation(6, 'to_confirm', new Date ('1990-11-16 01:30:00'), 4),
  new Reservation(7, 'confirmed', new Date ('2000-11-16 09:30:00'), 3),
  new Reservation(8, 'canceled', new Date ('2003-11-16 16:30:00'), 4),
  new Reservation(9, 'to_confirm', new Date ('2002-11-16 20:30:00'), 1),
  new Reservation(10, 'confirmed', new Date ('2001-11-16 13:30:00'), 2)
];

mobule.exports = [Concert, User, Reservation, concerts, users, reservations];