/**
 * SAFAR TOURS & TRAVELS — CLIENT APPLICATION LOGIC
 * Tailored for Indian Globetrotters | Editorial Minimalist Design
 */

// ============================================================================
// 1. DATASET: HANDCRAFTED TOUR PACKAGES
// ============================================================================
const TOURS_DATA = [
  {
    id: "dubai-luxury",
    name: "Dubai Dunes & Burj Royal Escape",
    category: "middle-east",
    location: "Dubai, UAE",
    badge: "Dubai",
    duration: "5 Days / 4 Nights",
    priceINR: 59999,
    rating: 4.95,
    reviewCount: 510,
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    highlights: "Burj Khalifa 124th Floor • VIP Red Dune Desert Safari • Museum of the Future • Marina Luxury Yacht Cruise",
    inclusions: [
      "Return Flights (Direct from Mumbai/Delhi/BLR on Emirates / IndiGo)",
      "4 Nights at 5-Star Centrally Located Dubai Luxury Hotel",
      "Daily Buffet Breakfast and 4 Indian / Jain Dinners",
      "Dubai Express E-Visa & Travel Insurance included",
      "Burj Khalifa At The Top Prime Slot Tickets",
      "Museum of the Future Priority Entry Ticket",
      "4x4 Land Cruiser Red Dune Desert Safari with Camel Ride",
      "Private 2-Hour Luxury Yacht Cruise at Dubai Marina"
    ],
    exclusions: [
      "Tourism Dirham Fee (~AED 15-20/night payable at hotel)",
      "Personal shopping and discretionary gratuities"
    ],
    hotels: [
      { name: "Grand Millennium Hotel Business Bay (Dubai)", detail: "5-Star Luxury • Overlooking Dubai Water Canal" },
      { name: "JW Marriott Marquis Hotel (Downtown Dubai)", detail: "5-Star Icon • Minutes from Dubai Mall & Burj Khalifa" }
    ],
    visaGuide: {
      type: "UAE Tourist E-Visa (Single Entry)",
      processingTime: "48 to 72 Hours (Guaranteed)",
      checklist: [
        "Clear Passport front & back color scan copy",
        "White background passport-style photo",
        "Confirmed return flight booking (Safar provided)"
      ]
    },
    itinerary: [
      { day: 1, title: "Welcome to Dubai & Marina Cruise", desc: "Arrival at DXB. Private chauffeured transfer to hotel. Evening Marina cruise with international and Indian buffet.", meals: "Dinner" },
      { day: 2, title: "Modern Dubai & Burj Khalifa 124th Floor", desc: "Visit Dubai Frame and Palm Jumeirah. Afternoon ascent to 124th floor of Burj Khalifa followed by Dubai Mall fountain show.", meals: "Breakfast & Indian Dinner" },
      { day: 3, title: "Museum of the Future & Red Dunes Safari", desc: "Visit Museum of the Future. Afternoon 4x4 Land Cruiser desert dune bashing, camel rides, and starlit BBQ.", meals: "Breakfast & Desert BBQ Dinner" },
      { day: 4, title: "Abu Dhabi Day Tour & BAPS Hindu Mandir", desc: "Day trip to Abu Dhabi: visit Sheikh Zayed Grand Mosque, Ferrari World photo stop, and historic BAPS Hindu Mandir.", meals: "Breakfast & Indian Dinner" },
      { day: 5, title: "Farewell Dubai & Flight Home", desc: "Morning shopping at Gold Souk and Meena Bazaar. Chauffeur transfer to Dubai airport for flight home.", meals: "Breakfast" }
    ]
  },
  {
    id: "bali-paradise",
    name: "Bali Island Dream & Nusa Penida",
    category: "islands",
    location: "Bali, Indonesia",
    badge: "Bali",
    duration: "7 Days / 6 Nights",
    priceINR: 64999,
    rating: 4.9,
    reviewCount: 380,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    highlights: "Private Pool Villa in Seminyak • Nusa Penida Island Speedboat • Kelingking T-Rex Cliff • Ubud Jungle Swing • Uluwatu Sunset Fire Dance",
    inclusions: [
      "Return Flights (Mumbai / Delhi to Denpasar Bali)",
      "4 Nights in 5★ Seminyak Luxury Villa with Private Pool + 2 Nights Ubud Rainforest Resort",
      "Daily Floating Breakfast / Indian Breakfast + 5 Indian Dinners",
      "Fast Speedboat to Nusa Penida with Private Island Guide",
      "Kelingking Beach, Broken Beach, and Angel's Billabong Excursion",
      "Ubud Aloha Jungle Swing and Tegalalang Rice Terrace Trek",
      "Uluwatu Cliff Temple with Kecak Fire Dance Show",
      "Complimentary Balinese 60-min Couple Spa Massage"
    ],
    exclusions: [
      "Indonesia Visa on Arrival (~$35 USD payable at airport counter or e-VOA)",
      "Personal water sports at Tanjung Benoa"
    ],
    hotels: [
      { name: "Berry Amour Romantic Villas (Seminyak)", detail: "5-Star Luxury Private Pool Villa" },
      { name: "Maya Ubud Resort & Spa", detail: "5-Star Rainforest Luxury" }
    ],
    visaGuide: {
      type: "Indonesia Electronic Visa on Arrival (e-VOA) / On Arrival",
      processingTime: "Instant Online or 10 Minutes at Airport",
      checklist: [
        "Passport valid for at least 6 months",
        "Online Indonesia Customs Declaration QR code",
        "Proof of return ticket (Safar provided)"
      ]
    },
    itinerary: [
      { day: 1, title: "Arrival in Bali & Villa Check-In", desc: "Warm Balinese flower welcome at Denpasar Airport. Check into your private pool villa in Seminyak. Rest and candlelight dinner.", meals: "Indian Dinner" },
      { day: 2, title: "South Bali Beaches & Uluwatu Sunset", desc: "Visit Melasti Beach. In the evening, witness Uluwatu cliff temple overlooking roaring waves and the Kecak fire dance.", meals: "Breakfast & Indian Dinner" },
      { day: 3, title: "Nusa Penida Island Speedboat Tour", desc: "Morning speedboat to Nusa Penida. Visit the famous Kelingking T-Rex cliff, Angel's Billabong, and Broken Beach.", meals: "Breakfast & Lunch & Indian Dinner" },
      { day: 4, title: "Ubud Rainforest & Famous Jungle Swing", desc: "Head into the cultural heart of Bali. Experience the famous Bali Jungle Swing overlooking emerald rice terraces.", meals: "Breakfast & Indian Dinner" },
      { day: 5, title: "Mount Batur Volcano & Coffee Plantation", desc: "Enjoy panoramic views of active volcano Mt Batur and Lake Batur. Taste local spices and coffee at an agro-farm.", meals: "Breakfast & Indian Dinner" },
      { day: 6, title: "Balinese Spa & Jimbaran Bay Sunset Dinner", desc: "Indulge in a 60-minute traditional massage. Evening sunset dinner right on Jimbaran beach.", meals: "Breakfast & Beach Dinner" },
      { day: 7, title: "Departure to India", desc: "Souvenir shopping at Krishna Oleh Oleh. Transfer to Denpasar airport for journey home.", meals: "Breakfast" }
    ]
  },
  {
    id: "swiss-paris",
    name: "Swiss Alps & Paris Highlights",
    category: "europe",
    location: "Switzerland & France",
    badge: "Switzerland",
    duration: "9 Days / 8 Nights",
    priceINR: 179999,
    rating: 4.9,
    reviewCount: 420,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    highlights: "Eiffel Tower 2nd Level • Mount Titlis Rotair Cable Car • Jungfraujoch Top of Europe • Scenic Seine River Cruise • Lucerne Lion Monument",
    inclusions: [
      "Return International Flights (Mumbai / Delhi to Paris / Zurich)",
      "8 Nights in 4-Star Centrally Located Hotels with Daily Buffet Breakfast",
      "Daily Authentic Indian Vegetarian & Jain Dinners at Top Rated Restaurants",
      "100% Schengen Visa Assistance & Embassy Biometrics Guidance",
      "Swiss Travel Pass (Unlimited Trains, Buses, and Lake Boats)",
      "Eiffel Tower Level 2 & Seine River Cruise Tickets Included",
      "Mount Titlis Revolving Cable Car & Ice Flyer Excursion",
      "Dedicated Hindi & English Speaking Tour Manager"
    ],
    exclusions: [
      "Mandatory Euro 5/day driver tips",
      "Personal laundry and extra beverages"
    ],
    hotels: [
      { name: "Novotel Paris Centre Tour Eiffel (Paris)", detail: "4-Star • Walking distance to Eiffel Tower" },
      { name: "Metropole Swiss Quality Hotel (Interlaken)", detail: "4-Star • Views of Jungfrau mountain range" }
    ],
    visaGuide: {
      type: "Schengen Visa (France / Switzerland)",
      processingTime: "12 to 18 Working Days",
      checklist: [
        "Passport with minimum 6 months validity & 2 blank pages",
        "Last 6 months Bank Statements stamped by bank (₹2.5L+ balance)",
        "Last 3 years Income Tax Returns (ITR-V)",
        "Safar provides flight tickets, hotel vouchers, and travel insurance"
      ]
    },
    itinerary: [
      { day: 1, title: "Bonjour Paris! Arrival & Seine Cruise", desc: "Arrival in Paris. Meet Safar tour manager. Evening Seine river cruise seeing illuminated monuments, followed by Indian dinner.", meals: "Indian Dinner" },
      { day: 2, title: "Eiffel Tower & Paris City Landmarks", desc: "Guided city tour covering Arc de Triomphe, Champs-Élysées, and 2nd-level Eiffel Tower ascent for panoramic vistas.", meals: "Breakfast & Indian Dinner" },
      { day: 3, title: "High-Speed TGV Train to Interlaken", desc: "Board the French TGV bullet train to Basel and onward to Interlaken between Lake Thun & Brienz. Rest and explore Hoheweg.", meals: "Breakfast & Indian Dinner" },
      { day: 4, title: "Jungfraujoch: Top of Europe", desc: "Take the Eiger Express gondola to Jungfraujoch (3,454m). Visit the Ice Palace and enjoy hot masala chai in the snow.", meals: "Breakfast & Indian Dinner" },
      { day: 5, title: "Mount Titlis Rotair Cable Car & Lucerne", desc: "Ride the revolving cable car to Mt Titlis. Walk the suspension bridge. Later, explore Lucerne Chapel Bridge and Lion Monument.", meals: "Breakfast & Indian Dinner" },
      { day: 6, title: "Zurich Highlights & Roaring Rhine Falls", desc: "Visit Rhine Falls in Schaffhausen with a boat ride into the falls. Time for Swiss watch shopping on Bahnhofstrasse.", meals: "Breakfast & Indian Dinner" },
      { day: 7, title: "Scenic Swiss Villages: Lauterbrunnen", desc: "Explore the postcard-perfect Lauterbrunnen valley of 72 waterfalls and Grindelwald First.", meals: "Breakfast & Indian Dinner" },
      { day: 8, title: "Lindt Chocolate Factory & Farewell Gala", desc: "Visit Lindt Home of Chocolate in Kilchberg. Farewell gala Indian dinner.", meals: "Breakfast & Gala Dinner" },
      { day: 9, title: "Departure to India", desc: "Private coach transfer to Zurich International Airport for return flight home.", meals: "Breakfast" }
    ]
  },
  {
    id: "kashmir-paradise",
    name: "Heaven on Earth: Kashmir & Gulmarg",
    category: "india",
    location: "Jammu & Kashmir, India",
    badge: "Kashmir",
    duration: "6 Days / 5 Nights",
    priceINR: 38500,
    rating: 4.96,
    reviewCount: 740,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    highlights: "Luxury Houseboat Stay on Dal Lake • Shikara Ride • Gulmarg Gondola Cable Car Phase 1 • Pahalgam Betaab Valley",
    inclusions: [
      "Return Flights (From Mumbai / Delhi / BLR to Srinagar)",
      "1 Night in Luxury Dal Lake Cedar Houseboat + 4 Nights in 4★ Resort (Pahalgam & Srinagar)",
      "Daily Breakfast & Authentic Vegetarian/Jain Dinners",
      "1-Hour Sunset Shikara Boat Ride on Dal Lake",
      "Gulmarg Gondola Phase 1 Cable Car Tickets Included",
      "Dedicated Private AC Sedan / SUV with experienced local Kashmiri chauffeur"
    ],
    exclusions: [
      "Local pony ride / sledge rides in Gulmarg & Pahalgam",
      "Union cab for Betaab Valley local visit in Pahalgam"
    ],
    hotels: [
      { name: "Mascot Luxury Heritage Houseboats (Dal Lake)", detail: "5-Star Heritage Hand-carved Walnut Wood Houseboat" },
      { name: "The Chinar Resort & Spa (Pahalgam)", detail: "4-Star • Riverfront Lidder River resort" }
    ],
    visaGuide: {
      type: "Domestic India (No Visa Required)",
      processingTime: "Zero",
      checklist: [
        "Government ID Proof (Aadhaar / Passport / Voter ID) for all travelers",
        "Warm woolens, jackets, gloves, and snow boots"
      ]
    },
    itinerary: [
      { day: 1, title: "Arrival in Srinagar & Dal Lake Shikara", desc: "Arrive at Srinagar Sheikh-ul-Alam Airport. Check into your heritage houseboat. Enjoy a sunset Shikara ride across Dal Lake.", meals: "Dinner" },
      { day: 2, title: "Srinagar to Gulmarg: Meadow of Flowers", desc: "Drive through pine valleys to Gulmarg. Board the famous Gulmarg Gondola taking you to high alpine snow peaks of Kongdoori.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Pahalgam: Valley of Shepherds", desc: "Drive to scenic Pahalgam via saffron fields of Pampore. Relax along the roaring crystal-clear Lidder River.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Betaab Valley & Chandanwari", desc: "Explore Betaab Valley and Chandanwari snow point. Evening bonfire and Kashmiri kahwa.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Mughal Gardens in Srinagar", desc: "Return to Srinagar. Visit famous Mughal heritage gardens: Nishat Bagh and Shalimar Bagh.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Shopping & Flight Back Home", desc: "Shop for genuine Kashmiri saffron, dry fruits, and pashmina shawls. Transfer to airport for flight home.", meals: "Breakfast" }
    ]
  },
  {
    id: "turkey-cappadocia",
    name: "Cappadocia Balloons & Istanbul",
    category: "middle-east",
    location: "Turkey",
    badge: "Cappadocia",
    duration: "7 Days / 6 Nights",
    priceINR: 119999,
    rating: 4.93,
    reviewCount: 395,
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    highlights: "Sunrise Hot Air Balloon Flight over Cappadocia Fairy Chimneys • Hagia Sophia & Blue Mosque • Bosphorus Sunset Cruise",
    inclusions: [
      "Return Flights (Turkish Airlines / IndiGo from Mumbai / Delhi)",
      "Domestic Flights in Turkey (Istanbul to Cappadocia roundtrip)",
      "2 Nights in Authentic Cappadocia Cave Hotel + 4 Nights in 5★ Istanbul Hotel",
      "Hot Air Balloon Flight in Cappadocia (Weather permitting)",
      "Daily Buffet Breakfast and 5 Indian / Turkish Dinners",
      "Turkey E-Visa / Sticker Visa Support",
      "Bosphorus Luxury Cruise with Turkish Night Show"
    ],
    exclusions: [
      "ATV Quad bike safari (optional add-on)",
      "Personal souvenirs"
    ],
    hotels: [
      { name: "Sultan Cave Suites (Cappadocia)", detail: "Authentic Luxury Cave Suite with rooftop balloon viewing terrace" },
      { name: "Crowne Plaza Istanbul Old City", detail: "5-Star • Walking distance to Grand Bazaar" }
    ],
    visaGuide: {
      type: "Turkey E-Visa (with valid US/UK/Schengen) or Sticker Visa",
      processingTime: "Instant Online for E-Visa, 10 Days for Sticker Visa",
      checklist: [
        "Passport valid for at least 6 months",
        "Valid US/UK/Schengen visa allows instant E-Visa",
        "Regular visa processed via Gateway Globe in India"
      ]
    },
    itinerary: [
      { day: 1, title: "Welcome to Istanbul", desc: "Arrival in Istanbul. Check into hotel and enjoy an evening stroll around Sultanahmet square.", meals: "Dinner" },
      { day: 2, title: "Hagia Sophia & Grand Bazaar", desc: "Guided tour inside Hagia Sophia, Blue Mosque with 20,000 blue tiles, and shopping in the Grand Bazaar.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Flight to Cappadocia", desc: "Fly to Cappadocia. Check into your unique cave suite hotel carved into volcanic tuff stone. Explore Devrent Valley.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Sunrise Hot Air Balloon Flight", desc: "Early morning hot air balloon flight watching hundreds of balloons float over fairytale valleys at sunrise.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Goreme Valley & Return to Istanbul", desc: "Visit Goreme Open Air Museum rock-cut churches with ancient frescoes. Return flight to Istanbul.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Bosphorus Strait Cruise", desc: "Sail between Europe and Asia on a private Bosphorus cruise with sweeping views of Istanbul.", meals: "Breakfast & Gala Dinner" },
      { day: 7, title: "Departure to India", desc: "Transfer to Istanbul Airport for return flight.", meals: "Breakfast" }
    ]
  },
  {
    id: "maldives-luxury",
    name: "Maldives Overwater Lagoon Retreat",
    category: "islands",
    location: "Maldives",
    badge: "Maldives",
    duration: "5 Days / 4 Nights",
    priceINR: 115000,
    rating: 4.97,
    reviewCount: 310,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    highlights: "2 Nights Beach Villa + 2 Nights Overwater Lagoon Villa • Speedboat / Seaplane Transfers • All-Inclusive Dine Around • Sunset Dolphin Cruise",
    inclusions: [
      "Return Direct Flights (Mumbai / Delhi / Bengaluru to Male)",
      "Roundtrip Scenic Speedboat or Seaplane transfers across the atoll",
      "2 Nights in Beach Sunrise Villa + 2 Nights in Water Villa with direct ocean access",
      "All-Inclusive Meal Plan: Unlimited Breakfast, Lunch, Dinner, & Snacks",
      "Special Indian & Jain Kitchen with dedicated curry counters",
      "Free 30-Day Tourist Visa on Arrival for Indian passport holders",
      "Sunset Dolphin Cruise with champagne/mocktails"
    ],
    exclusions: [
      "Motorized water sports (jet ski, flyboard)",
      "Spa treatments"
    ],
    hotels: [
      { name: "Adaaran Select Hudhuranfushi / Sun Siyam Olhuveli", detail: "5-Star Resort • Premium All-Inclusive island" }
    ],
    visaGuide: {
      type: "Maldives 30-Day Visa on Arrival (Free)",
      processingTime: "Instant at Male International Airport",
      checklist: [
        "Passport with at least 1 month validity",
        "Online IMUGA Traveler Health Declaration filled within 96 hours",
        "Pre-paid hotel resort voucher (Safar provided)"
      ]
    },
    itinerary: [
      { day: 1, title: "Arrival in Male & Lagoon Transfer", desc: "Land at Velana Airport in Male. Speedboat transfer skimming over turquoise lagoons. Check in to your Beach Villa.", meals: "Lunch & Dinner" },
      { day: 2, title: "Lagoon Snorkeling & Beach Relaxation", desc: "Explore the house reef with colorful clownfish and sea turtles. Relax on powder-white sand beaches.", meals: "All Inclusive" },
      { day: 3, title: "Overwater Villa & Sunset Dolphin Safari", desc: "Move into your iconic Overwater Villa with steps leading straight into the lagoon. Evening dolphin cruise.", meals: "All Inclusive" },
      { day: 4, title: "Floating Breakfast & Romantic Candlelight Dinner", desc: "Enjoy an Instagrammable floating breakfast. Evening private candlelight dinner setup on the beach.", meals: "All Inclusive" },
      { day: 5, title: "Farewell Maldives", desc: "Breakfast overlooking the Indian Ocean. Speedboat transfer to Male airport for flight back home.", meals: "Breakfast" }
    ]
  },
  {
    id: "japan-cherry",
    name: "Tokyo & Kyoto Sakura Blossom",
    category: "east-asia",
    location: "Japan",
    badge: "Japan",
    duration: "8 Days / 7 Nights",
    priceINR: 195000,
    rating: 4.98,
    reviewCount: 290,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    highlights: "Shinkansen Bullet Train Experience • Mount Fuji 5th Station • Fushimi Inari 10,000 Torii Gates • Arashiyama Bamboo Grove • Shibuya Crossing",
    inclusions: [
      "Return Flights (Direct Air India / ANA from Delhi / Mumbai to Tokyo)",
      "7 Nights in 4-Star Centrally Located Hotels (Tokyo & Kyoto)",
      "Daily Japanese/Western Buffet Breakfast and 6 Indian Dinners",
      "Japan E-Visa / Tourist Visa Paperwork Support",
      "Shinkansen High Speed Bullet Train Ticket (Tokyo to Kyoto)",
      "Mount Fuji 5th Station & Hakone Ropeway Gondola Tour",
      "Kyoto Golden Pavilion & Fushimi Inari Shrine Excursion",
      "Tokyo TeamLab Planets Digital Art Museum Tickets"
    ],
    exclusions: [
      "Personal luggage courier service",
      "Disneyland Tokyo entry tickets"
    ],
    hotels: [
      { name: "Keio Plaza Hotel Tokyo (Shinjuku)", detail: "4.5-Star • Prime Shinjuku location near train station" },
      { name: "Miyako Hotel Kyoto Hachijo", detail: "4-Star • Directly opposite Kyoto Shinkansen Station" }
    ],
    visaGuide: {
      type: "Japan Single Entry Tourist Visa / eVisa",
      processingTime: "7 to 10 Working Days",
      checklist: [
        "Passport with 6 months validity",
        "Recent 2x2 inch photograph on white background",
        "Income Tax Returns for last 2 years",
        "Bank statement showing sufficient funds (₹3L+ balance)"
      ]
    },
    itinerary: [
      { day: 1, title: "Arrival in Tokyo", desc: "Arrival at Haneda/Narita. Hotel check in. Experience neon-lit Shinjuku and welcome Indian dinner.", meals: "Indian Dinner" },
      { day: 2, title: "Tokyo City Landmarks & TeamLab", desc: "Visit historic Asakusa Sensoji Temple and Nakamise shopping street. Immerse in TeamLab Planets sensory art.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Mount Fuji & Lake Ashi Cruise", desc: "Drive to Mt Fuji 5th Station. Take the Hakone Ropeway cable car and cruise picturesque Lake Ashi.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Bullet Train to Ancient Kyoto", desc: "Board the high-speed Shinkansen bullet train reaching 320 km/h to Kyoto. Visit Golden Pavilion.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Fushimi Inari Torii Gates & Arashiyama", desc: "Walk through thousands of vermilion Torii gates at Fushimi Inari and the ethereal Arashiyama Bamboo Forest.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Nara Deer Park & Great Buddha", desc: "Excursion to Nara. Feed friendly wild sika deer and gaze at the bronze Great Buddha statue at Todai-ji.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Return to Tokyo & Shibuya Sky", desc: "Cross the famous Shibuya crossing and view the 360-degree cityscape from Shibuya Sky.", meals: "Breakfast & Dinner" },
      { day: 8, title: "Departure to India", desc: "Free morning for electronics shopping in Akihabara. Transfer to airport for flight back.", meals: "Breakfast" }
    ]
  },
  {
    id: "amalfi-rome",
    name: "Amalfi Coast & Eternal Rome",
    category: "europe",
    location: "Italy",
    badge: "Italy",
    duration: "8 Days / 7 Nights",
    priceINR: 189999,
    rating: 4.92,
    reviewCount: 275,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    highlights: "Private Amalfi & Positano Coastal Drive • Capri Island Speedboat Excursion • VIP Fast-Track Colosseum & Vatican Museums",
    inclusions: [
      "Return Flights to Rome from Mumbai / Delhi",
      "7 Nights in 4-Star Centrally Located Boutique Italian Hotels",
      "Daily Italian Breakfast & 6 Handpicked Indian / Italian Dinners",
      "Full Schengen Visa Concierge & Document Appointment Booking",
      "High Speed Frecciarossa Train Tickets between Rome and Florence",
      "Private Panoramic Minivan Tour along the Amalfi Coast",
      "Skip-the-Line Tickets to Colosseum, Roman Forum, & Vatican",
      "Capri Island Hydrofoil Roundtrip Tickets"
    ],
    exclusions: [
      "City Tourist Tax in Rome/Florence (approx 6-7 Euro/night)",
      "Personal purchases"
    ],
    hotels: [
      { name: "Starhotels Metropole (Rome)", detail: "4-Star • Near Termini Station" },
      { name: "Grand Hotel Ambasciatori (Sorrento / Amalfi)", detail: "4-Star • Cliffside views of Bay of Naples" }
    ],
    visaGuide: {
      type: "Italy Schengen Visa",
      processingTime: "15 Working Days",
      checklist: [
        "Valid passport with at least 6 months validity",
        "Financial proof: 6 months bank statement",
        "ITR receipts for 3 years"
      ]
    },
    itinerary: [
      { day: 1, title: "Welcome to Rome", desc: "Arrival in Rome. Evening stroll through Trevi Fountain and Spanish Steps with creamy gelato.", meals: "Indian Dinner" },
      { day: 2, title: "Colosseum & Vatican City", desc: "Skip the queues at Colosseum and Roman Forum. Afternoon visit to Vatican City and St. Peter's Basilica.", meals: "Breakfast & Dinner" },
      { day: 3, title: "High-Speed Train to Florence", desc: "Take the 300 km/h train to Florence. Guided walking tour past Duomo and Ponte Vecchio.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Leaning Tower of Pisa", desc: "Afternoon drive through Tuscan hills to Pisa. Classic photo stop holding up the Leaning Tower.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Sorrento & Bay of Naples", desc: "Travel south toward the dramatic cliff coast of Sorrento overlooking Mt. Vesuvius.", meals: "Breakfast & Dinner" },
      { day: 6, title: "Positano & Amalfi Coast Drive", desc: "Drive along the cliff-hugging Amalfi road. Explore pastel-colored houses of Positano.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Capri Island Cruise", desc: "Speedboat to Capri Island. Ride the funicular up to Capri town and view the Faraglioni rocks.", meals: "Breakfast & Dinner" },
      { day: 8, title: "Flight Back to India", desc: "Transfer to airport for flight home.", meals: "Breakfast" }
    ]
  },
  {
    id: "singapore-malaysia",
    name: "Singapore & Sentosa Island Cruise",
    category: "southeast-asia",
    location: "Singapore & Malaysia",
    badge: "Singapore",
    duration: "7 Days / 6 Nights",
    priceINR: 78500,
    rating: 4.88,
    reviewCount: 460,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    highlights: "Gardens by the Bay Cloud Forest • Sentosa Cable Car & Universal Studios • Kuala Lumpur Petronas Twin Towers • Batu Caves",
    inclusions: [
      "Return Flights (Mumbai / Delhi / Bengaluru to Singapore, Return from KL)",
      "3 Nights in 4★ Singapore Hotel + 3 Nights in 4★ Kuala Lumpur Hotel",
      "Daily Breakfasts and 6 Delicious Indian Dinners",
      "Singapore E-Visa & Malaysia Visa Waiver Registration",
      "Universal Studios Singapore 1-Day Pass Included",
      "Batu Caves Temple Visit & Genting Skyway Cable Car"
    ],
    exclusions: [
      "Malaysia Tourism Tax (~MYR 10/night per room)",
      "Personal snacks"
    ],
    hotels: [
      { name: "V Hotel Lavender (Singapore)", detail: "4-Star • Directly atop MRT station" },
      { name: "Furama Bukit Bintang (Kuala Lumpur)", detail: "4-Star • Prime Golden Triangle location" }
    ],
    visaGuide: {
      type: "Singapore E-Visa & Malaysia MDAC",
      processingTime: "3 to 4 Working Days",
      checklist: [
        "Passport valid for minimum 6 months",
        "Form 14A filled and signed",
        "Last 3 months bank statements"
      ]
    },
    itinerary: [
      { day: 1, title: "Arrival in Singapore & Night Safari", desc: "Arrival at Changi Airport. Experience the famous Night Safari with tram ride.", meals: "Dinner" },
      { day: 2, title: "City Tour & Gardens by the Bay", desc: "Visit Merlion Park, Little India, and Gardens by the Bay with indoor waterfall and Supertree light show.", meals: "Breakfast & Dinner" },
      { day: 3, title: "Universal Studios & Sentosa", desc: "Cable car ride to Sentosa. Transformers 3D and rollercoasters at Universal Studios.", meals: "Breakfast & Dinner" },
      { day: 4, title: "Coach to Kuala Lumpur", desc: "Deluxe coach across Johor border into Malaysia. Photo stop at Petronas Twin Towers.", meals: "Breakfast & Dinner" },
      { day: 5, title: "Batu Caves & Genting Highlands", desc: "Climb the 272 steps at Batu Caves temple. Ride Genting Skyway cable car into the cool mountain clouds.", meals: "Breakfast & Dinner" },
      { day: 6, title: "KL City Tour & Shopping", desc: "Visit King's Palace, Independence Square, and shopping at Pavilion Mall.", meals: "Breakfast & Dinner" },
      { day: 7, title: "Departure to India", desc: "Transfer to KLIA for return flight home.", meals: "Breakfast" }
    ]
  }
];

// ============================================================================
// 2. STATE & MULTI-CURRENCY CONVERSION
// ============================================================================
const STATE = {
  activeCurrency: "INR",
  currencyRates: {
    INR: { rate: 1, symbol: "₹" },
    USD: { rate: 0.012, symbol: "$" },
    EUR: { rate: 0.011, symbol: "€" },
    AED: { rate: 0.044, symbol: "AED " }
  },
  activeCategory: "all",
  wishlist: JSON.parse(localStorage.getItem("safar_wishlist") || "[]"),
  activeTour: TOURS_DATA[0],
  bookingCalc: {
    adults: 2,
    children: 0,
    flightOption: "included"
  }
};

function formatCurrency(amountINR) {
  const conf = STATE.currencyRates[STATE.activeCurrency];
  const converted = Math.round(amountINR * conf.rate);

  if (STATE.activeCurrency === "INR") {
    return "₹" + converted.toLocaleString("en-IN");
  } else if (STATE.activeCurrency === "USD") {
    return "$" + converted.toLocaleString("en-US");
  } else if (STATE.activeCurrency === "EUR") {
    return "€" + converted.toLocaleString("de-DE");
  } else {
    return "AED " + converted.toLocaleString("en-US");
  }
}

// ============================================================================
// 3. CATALOG RENDERING (Direct Reference Match)
// ============================================================================
function renderDestinationsGrid() {
  const grid = document.getElementById("destinationsCleanGrid");
  if (!grid) return;

  const filtered = TOURS_DATA.filter(tour => {
    return (STATE.activeCategory === "all") || (tour.category === STATE.activeCategory);
  });

  // Reference shows 6 cards in a 2-row x 3-col format
  const displayItems = filtered.slice(0, 6);

  grid.innerHTML = displayItems.map(tour => {
    const isSaved = STATE.wishlist.includes(tour.id);
    const priceDisplay = formatCurrency(tour.priceINR);

    return `
      <article class="clean-dest-card" onclick="window.openTourModal('${tour.id}')">
        <div class="clean-card-img-wrap">
          <img src="${tour.image}" alt="${tour.name}" class="clean-card-img" loading="lazy">
          <span class="clean-card-badge">${tour.badge}</span>
          <button class="clean-card-wishlist ${isSaved ? 'active' : ''}" 
                  onclick="event.stopPropagation(); window.toggleWishlist('${tour.id}')" 
                  title="${isSaved ? 'Saved' : 'Save to wishlist'}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>

        <div class="clean-card-body">
          <div class="clean-card-meta">
            <span class="clean-card-loc">${tour.location}</span>
            <span class="clean-card-duration">${tour.duration}</span>
          </div>

          <h3 class="clean-card-title">${tour.name}</h3>

          <div class="clean-card-footer">
            <span class="clean-card-price">${priceDisplay}</span>
            <span class="editorial-link" style="font-size: 0.825rem;">View Plan &rarr;</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

window.filterByCategory = function(category) {
  STATE.activeCategory = category;

  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.category === category);
  });

  renderDestinationsGrid();
};

// ============================================================================
// 4. WISHLIST MANAGEMENT
// ============================================================================
function updateWishlistBadge() {
  const countEl = document.getElementById("wishlistCount");
  if (countEl) countEl.textContent = STATE.wishlist.length;
}

window.toggleWishlist = function(tourId) {
  const idx = STATE.wishlist.indexOf(tourId);
  if (idx > -1) {
    STATE.wishlist.splice(idx, 1);
    showToast("Removed from saved tours");
  } else {
    STATE.wishlist.push(tourId);
    showToast("Saved to your wishlist! ❤️");
  }

  localStorage.setItem("safar_wishlist", JSON.stringify(STATE.wishlist));
  updateWishlistBadge();
  renderDestinationsGrid();
};

// ============================================================================
// 5. ITINERARY MODAL VIEWER
// ============================================================================
window.openTourModal = function(tourId) {
  const tour = TOURS_DATA.find(t => t.id === tourId);
  if (!tour) return;

  STATE.activeTour = tour;

  document.getElementById("modalTourHeroImg").src = tour.image;
  document.getElementById("modalTourBadge").textContent = tour.badge;
  document.getElementById("modalTourTitle").textContent = tour.name;
  document.getElementById("modalTourRoute").textContent = tour.highlights;
  document.getElementById("modalSidebarPrice").textContent = formatCurrency(tour.priceINR);

  // Tab 1: Timeline
  const timelineEl = document.getElementById("modalTimeline");
  timelineEl.innerHTML = tour.itinerary.map(item => `
    <div class="t-item">
      <div class="t-dot"></div>
      <span class="t-day">Day ${item.day} &bull; ${item.meals}</span>
      <h4 class="t-title">${item.title}</h4>
      <p class="t-desc">${item.desc}</p>
    </div>
  `).join("");

  // Tab 2: Inclusions
  const incList = document.getElementById("modalInclusionsList");
  incList.innerHTML = tour.inclusions.map(inc => `<li>${inc}</li>`).join("");

  const excList = document.getElementById("modalExclusionsList");
  excList.innerHTML = tour.exclusions.map(exc => `<li>${exc}</li>`).join("");

  // Tab 3: Hotels
  const hotelsList = document.getElementById("modalHotelsList");
  hotelsList.innerHTML = tour.hotels.map(h => `
    <div style="background: var(--sand-50); border: 1px solid var(--ink-200); padding: 1rem; border-radius: 8px; margin-bottom: 0.75rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--ink-900); margin-bottom: 0.25rem;">${h.name}</h4>
      <p style="font-size: 0.85rem; color: var(--ink-600);">${h.detail}</p>
    </div>
  `).join("");

  // Tab 4: Visa
  const visaPanel = document.getElementById("modalVisaGuide");
  visaPanel.innerHTML = `
    <div style="background: var(--sand-50); border: 1px solid var(--ink-200); padding: 1.25rem; border-radius: 8px;">
      <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem;">${tour.visaGuide.type}</h4>
      <p style="font-size: 0.85rem; color: var(--ink-600); margin-bottom: 0.75rem;"><strong>Processing Time:</strong> ${tour.visaGuide.processingTime}</p>
      <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: var(--ink-700);">
        ${tour.visaGuide.checklist.map(chk => `<li style="margin-bottom: 0.35rem;">${chk}</li>`).join("")}
      </ul>
    </div>
  `;

  // Set first tab active
  document.querySelectorAll(".t-btn").forEach((b, idx) => b.classList.toggle("active", idx === 0));
  document.querySelectorAll(".tab-content").forEach((c, idx) => c.classList.toggle("active", idx === 0));

  const modal = document.getElementById("itineraryModal");
  if (modal) modal.classList.add("active");
};

function closeItineraryModal() {
  const modal = document.getElementById("itineraryModal");
  if (modal) modal.classList.remove("active");
}

// ============================================================================
// 6. BOOKING CALCULATOR & QUOTE MODAL
// ============================================================================
window.openBookingModal = function() {
  const tour = STATE.activeTour || TOURS_DATA[0];
  document.getElementById("calcModalTourName").textContent = `Selected Tour: ${tour.name} (${tour.duration})`;

  const dateInput = document.getElementById("bookDate");
  if (dateInput) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30);
    dateInput.value = futureDate.toISOString().split("T")[0];
    dateInput.min = new Date().toISOString().split("T")[0];
  }

  closeItineraryModal();
  window.recalcBookingTotal();

  const calcModal = document.getElementById("bookingCalculatorModal");
  if (calcModal) calcModal.classList.add("active");
};

function closeCalcModal() {
  const calcModal = document.getElementById("bookingCalculatorModal");
  if (calcModal) calcModal.classList.remove("active");
}

window.updateCounter = function(type, delta) {
  if (type === "adults") {
    STATE.bookingCalc.adults = Math.max(1, STATE.bookingCalc.adults + delta);
    document.getElementById("cntAdults").textContent = STATE.bookingCalc.adults;
  } else if (type === "children") {
    STATE.bookingCalc.children = Math.max(0, STATE.bookingCalc.children + delta);
    document.getElementById("cntChildren").textContent = STATE.bookingCalc.children;
  }
  window.recalcBookingTotal();
};

window.recalcBookingTotal = function() {
  const tour = STATE.activeTour || TOURS_DATA[0];
  const flightSelect = document.getElementById("bookFlightsOption");
  const flightOption = flightSelect ? flightSelect.value : "included";

  let perAdult = tour.priceINR;
  if (flightOption === "landOnly") {
    perAdult = Math.round(perAdult * 0.75);
  }

  const perChild = Math.round(perAdult * 0.65);
  const adultsTotal = perAdult * STATE.bookingCalc.adults;
  const childrenTotal = perChild * STATE.bookingCalc.children;
  const subtotal = adultsTotal + childrenTotal;

  const taxes = Math.round(subtotal * 0.10); // 5% GST + 5% TCS
  const grandTotal = subtotal + taxes;
  const emiPerMonth = Math.round(grandTotal / 12);

  document.getElementById("pbBaseLabel").textContent = `Base Fare (${STATE.bookingCalc.adults} Adults${STATE.bookingCalc.children > 0 ? `, ${STATE.bookingCalc.children} Kids` : ''})`;
  document.getElementById("pbBaseVal").textContent = formatCurrency(subtotal);
  document.getElementById("pbGstVal").textContent = formatCurrency(taxes);
  document.getElementById("pbTotalVal").textContent = formatCurrency(grandTotal);
  document.getElementById("pbEmiVal").innerHTML = `Or Pay as low as <strong>${formatCurrency(emiPerMonth)}/month</strong> with 0% EMI`;
};

window.submitBookingInquiry = async function() {
  const leadName = document.getElementById("leadName").value;
  const leadPhone = document.getElementById("leadPhone").value;
  const leadEmail = document.getElementById("leadEmail").value;
  const city = document.getElementById("bookCity").value;
  const date = document.getElementById("bookDate").value;
  const mealsSelect = document.getElementById("bookMeals");
  const meals = mealsSelect ? mealsSelect.value : "veg";
  const flightSelect = document.getElementById("bookFlightsOption");
  const flightOption = flightSelect ? flightSelect.value : "included";

  const tour = STATE.activeTour || TOURS_DATA[0];
  const refNum = "SFR-2026-" + Math.floor(1000 + Math.random() * 9000);

  // Calculate estimated total
  let perAdult = tour.priceINR;
  if (flightOption === "landOnly") perAdult = Math.round(perAdult * 0.75);
  const perChild = Math.round(perAdult * 0.65);
  const subtotal = (perAdult * STATE.bookingCalc.adults) + (perChild * STATE.bookingCalc.children);
  const estimatedTotal = Math.round(subtotal * 1.10);

  // 1. Send data to Supabase backend
  if (window.SafarDB && window.SafarDB.saveTourInquiry) {
    window.SafarDB.saveTourInquiry({
      bookingReference: refNum,
      tourId: tour.id,
      tourName: tour.name,
      departureCity: city,
      departureDate: date,
      adultsCount: STATE.bookingCalc.adults,
      childrenCount: STATE.bookingCalc.children,
      mealPreference: meals,
      flightOption: flightOption,
      estimatedTotal: estimatedTotal,
      currency: STATE.activeCurrency || "INR",
      leadName: leadName,
      leadPhone: leadPhone,
      leadEmail: leadEmail
    }).then(res => {
      console.log("[Safar Backend] Supabase sync completed:", res);
    }).catch(err => {
      console.warn("[Safar Backend] Sync warning:", err);
    });
  }

  closeCalcModal();

  document.getElementById("successBookingDetails").innerHTML = `
    Booking Reference <strong>#${refNum}</strong> for <strong>${tour.name}</strong>.<br>
    Departure from <strong>${city}</strong> on <strong>${date}</strong> (${STATE.bookingCalc.adults} Adults, ${STATE.bookingCalc.children} Children).
  `;

  const waMsg = encodeURIComponent(
    `Hello Safar India! I just requested a quote #${refNum} for ${tour.name} departing from ${city} on ${date}. My name is ${leadName} (${leadPhone}). Please share the day-wise itinerary PDF.`
  );
  const waBtn = document.getElementById("directWhatsAppBtn");
  if (waBtn) waBtn.href = `https://wa.me/919876543210?text=${waMsg}`;

  const successModal = document.getElementById("successModal");
  if (successModal) successModal.classList.add("active");
};

window.submitNewsletter = async function() {
  const emailInput = document.getElementById("nlEmail");
  if (!emailInput || !emailInput.value) return;

  const email = emailInput.value.trim();
  if (window.SafarDB && window.SafarDB.saveNewsletterSubscriber) {
    try {
      await window.SafarDB.saveNewsletterSubscriber(email);
      showToast("Thank you for subscribing! Secret travel drops will arrive in your inbox. ✈️");
      emailInput.value = "";
    } catch (e) {
      showToast("Subscribed successfully!");
      emailInput.value = "";
    }
  } else {
    showToast("Subscribed successfully!");
    emailInput.value = "";
  }
};

function closeSuccessModal() {
  const successModal = document.getElementById("successModal");
  if (successModal) successModal.classList.remove("active");
}

// ============================================================================
// 7. EXPERIENCE IN MOTION SWITCHER
// ============================================================================
const EXPERIENCE_DATA = {
  bali: {
    photo: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85",
    hotelTitle: "Safe & Luxury Accommodation",
    hotelDesc: "Handpicked 5-star Seminyak private pool villas and Ubud rainforest resorts with daily floating Indian breakfasts.",
    transferTitle: "Comfortable Private Transport",
    transferDesc: "Dedicated private air-conditioned SUV with English-speaking chauffeur for temple tours and speedboat transfers.",
    guideTitle: "Verified Tour Guides & Fast-Track Passes",
    guideDesc: "Skip-the-line passes for Uluwatu Kecak dance, Kelingking T-Rex cliff, and Bali jungle swing.",
    tourId: "bali-paradise"
  },
  swiss: {
    photo: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=85",
    hotelTitle: "Alpine Chalets & Lakefront Resorts",
    hotelDesc: "Centrally situated 4-star hotels in Interlaken and Lucerne facing snowcapped peaks with hot Jain/Veg dinners.",
    transferTitle: "Swiss Travel Rail Pass Included",
    transferDesc: "First-class panoramic trains, cogwheels, and lake steamers across Zurich, Interlaken, and Lucerne.",
    guideTitle: "Jungfraujoch & Titlis Excursion",
    guideDesc: "Includes Eiger Express tricable gondola to Top of Europe and Titlis revolving Rotair cable car.",
    tourId: "swiss-paris"
  },
  dubai: {
    photo: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=85",
    hotelTitle: "5-Star Downtown Luxury Hotel",
    hotelDesc: "Grand Millennium / JW Marquis staying minutes from Dubai Mall, Burj Khalifa, and Museum of the Future.",
    transferTitle: "Private 4x4 Land Cruiser & Marina Yacht",
    transferDesc: "Thrilling dune bashing with private driver, followed by a sunset yacht cruise with refreshments.",
    guideTitle: "Burj Khalifa Prime Slot & Future Museum",
    guideDesc: "Observation deck 124th floor at sunset, plus priority tickets for the architectural marvel Museum of the Future.",
    tourId: "dubai-luxury"
  },
  japan: {
    photo: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85",
    hotelTitle: "4.5-Star Modern Japanese Hotel",
    hotelDesc: "Located beside major Shinkansen railway stations in Tokyo Shinjuku and Kyoto with full breakfast.",
    transferTitle: "Shinkansen Bullet Train Experience",
    transferDesc: "High speed 320 km/h rail journey connecting Tokyo, Mount Fuji, and ancient Kyoto seamlessly.",
    guideTitle: "Fushimi Inari & TeamLab Planets",
    guideDesc: "Walk the 10,000 orange Torii gates, Arashiyama Bamboo forest, and Tokyo's sensory digital museum.",
    tourId: "japan-cherry"
  }
};

function initExperienceSwitcher() {
  const pills = document.querySelectorAll(".exp-sel-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const key = pill.dataset.exp;
      const data = EXPERIENCE_DATA[key];
      if (!data) return;

      const img = document.getElementById("expHeroImg");
      img.style.opacity = "0.3";
      setTimeout(() => {
        img.src = data.photo;
        img.style.opacity = "1";
      }, 150);

      document.getElementById("expTitleHotel").textContent = data.hotelTitle;
      document.getElementById("expDescHotel").textContent = data.hotelDesc;
      document.getElementById("expTitleTransfer").textContent = data.transferTitle;
      document.getElementById("expDescTransfer").textContent = data.transferDesc;
      document.getElementById("expTitleGuide").textContent = data.guideTitle;
      document.getElementById("expDescGuide").textContent = data.guideDesc;
    });
  });

  const playBtn = document.getElementById("expPlayBtn");
  if (playBtn) {
    let currentIdx = 0;
    const keys = ["bali", "swiss", "dubai", "japan"];
    playBtn.addEventListener("click", () => {
      currentIdx = (currentIdx + 1) % keys.length;
      const activePill = document.querySelector(`.exp-sel-pill[data-exp="${keys[currentIdx]}"]`);
      if (activePill) activePill.click();
    });
  }
}

// ============================================================================
// 8. FAQ ACCORDION
// ============================================================================
function initFaqAccordion() {
  const rows = document.querySelectorAll(".faq-row");
  rows.forEach(row => {
    const btn = row.querySelector(".faq-question-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isOpen = row.classList.contains("active");

      rows.forEach(r => {
        r.classList.remove("active");
        r.querySelector(".faq-question-btn").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        row.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// ============================================================================
// 9. TOAST UTILITY
// ============================================================================
function showToast(msg) {
  const shelf = document.getElementById("toastContainer");
  if (!shelf) return;

  const toast = document.createElement("div");
  toast.className = "clean-toast";
  toast.textContent = msg;

  shelf.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================================
// 10. INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderDestinationsGrid();
  updateWishlistBadge();
  initExperienceSwitcher();
  initFaqAccordion();

  // Mobile navigation toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Currency select
  const currSelect = document.getElementById("currencySelect");
  if (currSelect) {
    currSelect.addEventListener("change", (e) => {
      STATE.activeCurrency = e.target.value;
      renderDestinationsGrid();

      if (STATE.activeTour) {
        const sb = document.getElementById("modalSidebarPrice");
        if (sb) sb.textContent = formatCurrency(STATE.activeTour.priceINR);
      }

      document.querySelectorAll(".dark-card-price").forEach(el => {
        const p = parseInt(el.dataset.price, 10);
        if (p) el.textContent = formatCurrency(p);
      });

      showToast(`Currency changed to ${STATE.activeCurrency}`);
    });
  }

  // Modal tabs
  document.querySelectorAll(".t-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll(".t-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      if (tab === "itinerary") document.getElementById("tabItinerary").classList.add("active");
      if (tab === "inclusions") document.getElementById("tabInclusions").classList.add("active");
      if (tab === "hotels") document.getElementById("tabHotels").classList.add("active");
      if (tab === "visa") document.getElementById("tabVisa").classList.add("active");
    });
  });

  // Modal close handlers
  const closeItineraryBtn = document.getElementById("closeItineraryModal");
  if (closeItineraryBtn) closeItineraryBtn.addEventListener("click", closeItineraryModal);

  const closeCalcBtn = document.getElementById("closeCalcModal");
  if (closeCalcBtn) closeCalcBtn.addEventListener("click", closeCalcModal);

  const closeSuccessBtn = document.getElementById("closeSuccessBtn");
  if (closeSuccessBtn) closeSuccessBtn.addEventListener("click", closeSuccessModal);

  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.classList.remove("active");
    });
  });

  const modalProceedBtn = document.getElementById("modalProceedBookingBtn");
  if (modalProceedBtn) {
    modalProceedBtn.addEventListener("click", () => {
      window.openBookingModal();
    });
  }

  const modalWaBtn = document.getElementById("modalWhatsappEnquiryBtn");
  if (modalWaBtn) {
    modalWaBtn.addEventListener("click", () => {
      const tour = STATE.activeTour || TOURS_DATA[0];
      const msg = encodeURIComponent(`Hello Safar India! I am interested in ${tour.name} (${tour.duration}). Please share dates and details.`);
      window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
    });
  }

  const wishlistBtn = document.getElementById("headerWishlistBtn");
  if (wishlistBtn) {
    wishlistBtn.addEventListener("click", () => {
      if (STATE.wishlist.length === 0) {
        showToast("Your wishlist is empty. Tap the heart icon on any card!");
      } else {
        showToast(`You have ${STATE.wishlist.length} saved tours.`);
        document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
