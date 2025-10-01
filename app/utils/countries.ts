// EU Countries
export const euCountries = [
  { flag: "🇦🇹", name: "Austria", capital: "Viena" },
  { flag: "🇧🇪", name: "Bélgica", capital: "Bruselas" },
  { flag: "🇧🇬", name: "Bulgaria", capital: "Sofía" },
  { flag: "🇭🇷", name: "Croacia", capital: "Zagreb" },
  { flag: "🇨🇾", name: "Chipre", capital: "Nicosia" },
  { flag: "🇨🇿", name: "República Checa", capital: "Praga" },
  { flag: "🇩🇰", name: "Dinamarca", capital: "Copenhague" },
  { flag: "🇪🇪", name: "Estonia", capital: "Tallin" },
  { flag: "🇫🇮", name: "Finlandia", capital: "Helsinki" },
  { flag: "🇫🇷", name: "Francia", capital: "París" },
  { flag: "🇩🇪", name: "Alemania", capital: "Berlín" },
  { flag: "🇬🇷", name: "Grecia", capital: "Atenas" },
  { flag: "🇭🇺", name: "Hungría", capital: "Budapest" },
  { flag: "🇮🇪", name: "Irlanda", capital: "Dublín" },
  { flag: "🇮🇹", name: "Italia", capital: "Roma" },
  { flag: "🇱🇻", name: "Letonia", capital: "Riga" },
  { flag: "🇱🇹", name: "Lituania", capital: "Vilna" },
  { flag: "🇱🇺", name: "Luxemburgo", capital: "Luxemburgo" },
  { flag: "🇲🇹", name: "Malta", capital: "La Valeta" },
  { flag: "🇳🇱", name: "Países Bajos", capital: "Ámsterdam" },
  { flag: "🇵🇱", name: "Polonia", capital: "Varsovia" },
  { flag: "🇵🇹", name: "Portugal", capital: "Lisboa" },
  { flag: "🇷🇴", name: "Rumanía", capital: "Bucarest" },
  { flag: "🇸🇰", name: "Eslovaquia", capital: "Bratislava" },
  { flag: "🇸🇮", name: "Eslovenia", capital: "Liubliana" },
  { flag: "🇪🇸", name: "España", capital: "Madrid" },
  { flag: "🇸🇪", name: "Suecia", capital: "Estocolmo" },
];

// All European Countries (including non-EU)
export const allEuropeanCountries = [
  // EU Countries
  ...euCountries,
  
  // Non-EU European Countries
  { flag: "🇦🇱", name: "Albania", capital: "Tirana" },
  { flag: "🇦🇩", name: "Andorra", capital: "Andorra la Vieja" },
  { flag: "🇦🇲", name: "Armenia", capital: "Ereván" },
  { flag: "🇦🇿", name: "Azerbaiyán", capital: "Bakú" },
  { flag: "🇧🇾", name: "Bielorrusia", capital: "Minsk" },
  { flag: "🇧🇦", name: "Bosnia y Herzegovina", capital: "Sarajevo" },
  { flag: "🇬🇪", name: "Georgia", capital: "Tiflis" },
  { flag: "🇮🇸", name: "Islandia", capital: "Reikiavik" },
  { flag: "🇽🇰", name: "Kosovo", capital: "Pristina" },
  { flag: "🇱🇮", name: "Liechtenstein", capital: "Vaduz" },
  { flag: "🇲🇩", name: "Moldavia", capital: "Chisináu" },
  { flag: "🇲🇨", name: "Mónaco", capital: "Mónaco" },
  { flag: "🇲🇪", name: "Montenegro", capital: "Podgorica" },
  { flag: "🇲🇰", name: "Macedonia del Norte", capital: "Skopie" },
  { flag: "🇳🇴", name: "Noruega", capital: "Oslo" },
  { flag: "🇷🇺", name: "Rusia", capital: "Moscú" },
  { flag: "🇸🇲", name: "San Marino", capital: "San Marino" },
  { flag: "🇷🇸", name: "Serbia", capital: "Belgrado" },
  { flag: "🇨🇭", name: "Suiza", capital: "Berna" },
  { flag: "🇹🇷", name: "Turquía", capital: "Ankara" },
  { flag: "🇺🇦", name: "Ucrania", capital: "Kiev" },
  { flag: "🇬🇧", name: "Reino Unido", capital: "Londres" },
  { flag: "🇻🇦", name: "Ciudad del Vaticano", capital: "Ciudad del Vaticano" },
];

// Default export for backward compatibility
export const countries = euCountries;
