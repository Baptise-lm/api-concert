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
  static Status = {
      TO_CONFIRM: "to_confirm",
      CANCELED: "canceled",
      CONFIRMED: "confirmed"
  };

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
  {
      id: "1",
      date: "2023-11-15 19:00:00",
      location: "Tokyo",
      artist: "Hatsune Miku",
      description: "Concert holographique de Hatsune Miku, l'idol virtuelle emblématique du Japon.",
      seats: 25000
  },
  {
      id: "2",
      date: "2023-12-05 18:30:00",
      location: "Séoul",
      artist: "K/DA",
      description: "Performance live de K/DA, le groupe de K-pop virtuel inspiré de League of Legends.",
      seats: 40000
  },
  {
      id: "3",
      date: "2024-01-15 20:00:00",
      location: "Los Angeles",
      artist: "A-SOUL",
      description: "Concert virtuel du célèbre groupe chinois de virtual idols, A-SOUL.",
      seats: 30000
  },
  {
      id: "4",
      date: "2024-02-20 21:00:00",
      location: "New York",
      artist: "Evelynn",
      description: "Spectacle immersif avec Evelynn, l'idol virtuelle de K/DA.",
      seats: 18000
  },
  {
      id: "4",
      date: "2024-03-18 19:45:00",
      location: "Londres",
      artist: "Vocaloid All Stars",
      description: "Une collaboration unique d'idols Vocaloid pour un concert à Londres.",
      seats: 22000
  },
  {
      id: "5",
      date: "2024-04-12 20:30:00",
      location: "Paris",
      artist: "Lil Miquela",
      description: "Lil Miquela, influenceuse virtuelle, en live à Paris.",
      seats: 15000
  },
  {
      id: "6",
      date: "2024-05-20 19:15:00",
      location: "Berlin",
      artist: "Kizuna AI",
      description: "La pionnière des YouTubeurs virtuels, Kizuna AI, en concert pour ses fans européens.",
      seats: 27000
  },
  {
      id: "7",
      date: "2024-06-25 20:00:00",
      location: "Shanghai",
      artist: "Luo Tianyi",
      description: "Concert en hologramme de Luo Tianyi, l'idol virtuelle populaire en Chine.",
      seats: 35000
  },
  {
      id: "8",
      date: "2024-07-30 21:00:00",
      location: "Bangkok",
      artist: "Yukari Yuzuki",
      description: "Yukari Yuzuki, la vocaloid japonaise, en performance live en Thaïlande.",
      seats: 20000
  },
  {
      id: "9",
      date: "2024-08-15 18:00:00",
      location: "San Francisco",
      artist: "Projekt Melody",
      description: "Projekt Melody, la star virtuelle de Twitch, en concert pour ses fans américains.",
      seats: 10000
  }
];

const users = [
  { id: 1, pseudo: "WolfieTailuWu", isAdmin: false },
  { id: 2, pseudo: "FoxPawsOwO", isAdmin: true },
  { id: 3, pseudo: "TigerStripe >w<", isAdmin: false },
  { id: 4, pseudo: "DragonClaw~nya", isAdmin: true },
  { id: 5, pseudo: "CoyoteWhisperuwu~", isAdmin: false },
  { id: 6, pseudo: "BunnyEars-.-", isAdmin: false },
  { id: 7, pseudo: "LionRoar~baka!", isAdmin: false },
  { id: 8, pseudo: "PantherShadowOwO", isAdmin: true },
  { id: 9, pseudo: "BearHugs>_<", isAdmin: false },
  { id: 10, pseudo: "OtterSplashuwu", isAdmin: false }
];


const reservations = [
  { id: 1, status: 'to_confirm', dateReservation: '2023-11-15 10:00:00', idConcert: 1 },
  { id: 2, status: 'confirmed', dateReservation: '2023-11-16 14:30:00', idConcert: 2 },
  { id: 3, status: 'canceled', dateReservation: '2023-11-17 18:45:00', idConcert: 1 },
  { id: 4, status: 'to_confirm', dateReservation: '2023-11-18 20:15:00', idConcert: 3 },
  { id: 5, status: 'confirmed', dateReservation: '2023-11-19 13:00:00', idConcert: 2 },
  { id: 6, status: 'to_confirm', dateReservation: '2023-11-20 16:30:00', idConcert: 4 },
  { id: 7, status: 'confirmed', dateReservation: '2023-11-21 19:45:00', idConcert: 3 },
  { id: 8, status: 'canceled', dateReservation: '2023-11-22 11:00:00', idConcert: 4 },
  { id: 9, status: 'to_confirm', dateReservation: '2023-11-23 15:30:00', idConcert: 1 },
  { id: 10, status: 'confirmed', dateReservation: '2023-11-24 17:15:00', idConcert: 2 }
];