const apiKey = "98dfa909429d0726e50fd9096e8211e2";

// DOM Elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const suggestions = document.getElementById("suggestions");
const weatherDetails = document.getElementById("weatherDetails");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const weatherMain = document.getElementById("weatherMain");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const toggleDarkMode = document.getElementById("toggleDarkMode");
const darkModeIcon = document.getElementById("darkModeIcon");

// City List
const cities = [
    "Abidjan", "Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Ahmedabad", "Aleppo", "Alexandria", "Algiers", "Almaty", "Amman", "Amsterdam", "Anchorage", "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Arnold", "Ashgabat", "Asmara", "Asuncion", "Athens", "Auckland", "Avarua", "Baghdad", "Baku", "Bamako", "Banda Aceh", "Bandar Seri Begawan", "Bandung", "Bangkok", "Bangui", "Banjul", "Barcelona", "Barranquilla", "Basrah", "Basse-Terre", "Basseterre", "Beijing", "Beirut", "Bekasi", "Belem", "Belgrade", "Belmopan", "Belo Horizonte", "Bengaluru", "Berlin", "Bern", "Bishkek", "Bissau", "Bogota", "Brasilia", "Bratislava", "Brazzaville", "Bridgetown", "Brisbane", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Bujumbura", "Bursa", "Busan", "Cairo", "Cali", "Caloocan", "Camayenne", "Canberra", "Cape Town", "Caracas", "Casablanca", "Castries", "Cayenne", "Charlotte Amalie", "Chengdu", "Chennai", "Chicago", "Chisinau", "Chittagong", "Chongqing", "Colombo", "Conakry", "Copenhagen", "Cordoba", "Curitiba", "Daegu", "Daejeon", "Dakar", "Dallas", "Damascus", "Dar es Salaam", "Delhi", "Denver", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Dongguan", "Douala", "Douglas", "Dubai", "Dublin", "Durban", "Dushanbe", "Faisalabad", "Fort-de-France", "Fortaleza", "Freetown", "Fukuoka", "Funafuti", "Gaborone", "George Town", "Georgetown", "Gibraltar", "Gitega", "Giza", "Guadalajara", "Guangzhou", "Guatemala City", "Guayaquil", "Gujranwala", "Gustavia", "Gwangju", "Hamburg", "Hanoi", "Harare", "Havana", "Helsinki", "Ho Chi Minh City", "Hong Kong", "Honiara", "Honolulu", "Houston", "Hyderabad", "Ibadan", "Incheon", "Isfahan", "Islamabad", "Istanbul", "Izmir", "Jaipur", "Jakarta", "Jeddah", "Jerusalem", "Johannesburg", "Juarez", "Juba", "Kabul", "Kaduna", "Kampala", "Kano", "Kanpur", "Kaohsiung", "Karachi", "Karaj", "Kathmandu", "Kawasaki", "Kharkiv", "Khartoum", "Khulna", "Kigali", "Kingsburg", "Kingston", "Kingstown", "Kinshasa", "Kobe", "Kolkata", "Kota Bharu", "Kowloon", "Kuala Lumpur", "Kumasi", "Kuwait", "Kyiv", "Kyoto", "La Paz", "Lagos", "Lahore", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lome", "London", "Los Angeles", "Luanda", "Lubumbashi", "Lusaka", "Luxembourg", "Macau", "Madrid", "Majuro", "Makassar", "Malabo", "Male", "Mamoudzou", "Managua", "Manama", "Manaus", "Manila", "Maputo", "Maracaibo", "Maracay", "Mariehamn", "Marigot", "Maseru", "Mashhad", "Mbabane", "Mecca", "Medan", "Medellin", "Medina", "Melbourne", "Mexico City", "Miami", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Montreal", "Moroni", "Moscow", "Mosul", "Multan", "Mumbai", "Muscat", "N'Djamena", "Nagoya", "Nairobi", "Nanchong", "Nanjing", "Nassau", "Nay Pyi Taw", "New York", "Niamey", "Nicosia", "Nouakchott", "Noumea", "Novosibirsk", "Nuku'alofa", "Nur-Sultan", "Nuuk", "Oranjestad", "Osaka", "Oslo", "Ottawa", "Ouagadougou", "Pago Pago", "Palembang", "Palo Alto", "Panama", "Papeete", "Paramaribo", "Paris", "Perth", "Philadelphia", "Phnom Penh", "Phoenix", "Podgorica", "Port Louis", "Port Moresby", "Port of Spain", "Port-Vila", "Port-au-Prince", "Porto Alegre", "Porto-Novo", "Prague", "Praia", "Pretoria", "Pristina", "Puebla", "Pune", "Pyongyang", "Quezon City", "Quito", "Rabat", "Rawalpindi", "Recife", "Reykjavik", "Riga", "Rio de Janeiro", "Riyadh", "Road Town", "Rome", "Roseau", "Saint George's", "Saint Helier", "Saint John's", "Saint Peter Port", "Saint Petersburg", "Saint-Denis", "Saint-Pierre", "Saipan", "Salvador", "San Antonio", "San Diego", "San Francisco", "San Jose", "San Juan", "San Marino", "San Salvador", "Sanaa", "Santa Cruz de la Sierra", "Santiago", "Santo Domingo", "Sao Paulo", "Sao Tome", "Sapporo", "Sarajevo", "Seattle", "Semarang", "Seoul", "Shanghai", "Sharjah", "Shenzhen", "Singapore", "Skopje", "Sofia", "South Tangerang", "Soweto", "Stockholm", "Sucre", "Surabaya", "Surat", "Suva", "Sydney", "Tabriz", "Taipei", "Tallinn", "Tangerang", "Tarawa", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran", "Tel Aviv", "Thimphu", "Tianjin", "Tijuana", "Tirana", "Tokyo", "Toronto", "Torshavn", "Tripoli", "Tunis", "Ulan Bator", "Vaduz", "Valencia", "Valletta", "Vancouver", "Victoria", "Vienna", "Vientiane", "Vilnius", "Warsaw", "Washington", "Wellington", "Willemstad", "Windhoek", "Wuhan", "Xi'an", "Yamoussoukro", "Yangon", "Yaounde", "Yekaterinburg", "Yerevan", "Yokohama", "Zagreb", "Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli", "Erode", "Tirunelveli", "Vellore", "Tiruppur", "Dindigul", "Ramanathapuram", "Tiruvannamalai", "Thanjavur", "Nagercoil", "Villupuram", "Cuddalore", "Karur", "Nagapattinam", "Theni", "Virudhunagar"
];

cityInput.addEventListener("input", () => {
    const query = cityInput.value.toLowerCase();
    suggestions.innerHTML = ""; // Clear old suggestions
    if (query) {
        const matches = cities.filter((city) => city.toLowerCase().startsWith(query));
        matches.forEach((match) => {
            const li = document.createElement("li");
            li.textContent = match;
            li.addEventListener("click", () => {
                cityInput.value = match;
                suggestions.innerHTML = "";
            });
            suggestions.appendChild(li);
        });
    }
});

async function fetchWeather(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    weatherDetails.classList.remove("hidden");
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    weatherIcon.src = `images/weather-icons/${data.weather[0].icon}.png`; // Local weather icon
    weatherIcon.alt = data.weather[0].description;
    weatherMain.textContent = data.weather[0].main;
    description.textContent = data.weather[0].description;
    temperature.textContent = data.main.temp.toFixed(1);
    feelsLike.textContent = data.main.feels_like.toFixed(1);
    humidity.textContent = data.main.humidity;
    wind.textContent = data.wind.speed;
}

// Trigger search with Enter key
cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    }
});

// Trigger search with button click
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    }
});

// Dark mode toggle
toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeIcon.src = document.body.classList.contains("dark-mode")
        ? "images/icons/light_mode.png"
        : "images/icons/dark_mode.png";
});