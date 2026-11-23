export type ActivityCategory = 'Culture' | 'Dining' | 'Walks';

export type TimeOfDay = 'Morning' | 'Midday' | 'Afternoon' | 'Evening';

export interface ItineraryActivity {
  id: string;
  time: string;
  period: TimeOfDay;
  title: string;
  neighborhood: string;
  duration: string;
  category: ActivityCategory;
  description: string;
  tip: string;
}

export interface ItineraryDay {
  dayNumber: 1 | 2 | 3;
  title: string;
  focusArea: string;
  walkingEstimate: string;
  summary: string;
  activities: ItineraryActivity[];
}

export interface PackingItem {
  id: string;
  item: string;
  category: string;
  reason: string;
}

export interface CityItinerary {
  slug: 'rome' | 'paris' | 'tokyo' | 'new-york';
  city: string;
  country: string;
  region: string;
  tagline: string;
  overview: string;
  imageUrl: string;
  imageCaption: string;
  practicalInfo: {
    transit: string;
    bestMonths: string;
    currency: string;
    localPace: string;
  };
  days: [ItineraryDay, ItineraryDay, ItineraryDay];
  packingList: [PackingItem, PackingItem, PackingItem, PackingItem, PackingItem];
}

export const BUILT_IN_ITINERARIES: Record<CityItinerary['slug'], CityItinerary> = {
  rome: {
    slug: 'rome',
    city: 'Rome',
    country: 'Italy',
    region: 'Lazio',
    tagline: 'Travertine ruins, Baroque piazzas, and neighborhood trattorias across seven hills.',
    overview:
      'Three days in Rome rewards an early start and a steady walking pace. This sequence groups Ancient Rome, the Vatican and Prati, and the historic Baroque center into walkable daily loops so you spend less time in transit and more time in sunlit piazzas.',
    imageUrl: '/src/assets/images/rome_editorial_view_1795425686449.jpg',
    imageCaption: 'Fig. 1 — Morning light across the Roman Forum, travertine arches, and terracotta rooftops.',
    practicalInfo: {
      transit: 'Metro A & B · Walkable Core',
      bestMonths: 'April–June · September–October',
      currency: 'Euro (€)',
      localPace: 'Dinner starts after 20:00',
    },
    days: [
      {
        dayNumber: 1,
        title: 'Imperial Foundations & Monti',
        focusArea: 'Colosseum · Roman Forum · Monti',
        walkingEstimate: '8.5 km walking',
        summary: 'Start in ancient Rome before the midday heat, then wind down through artisan streets in Rione Monti.',
        activities: [
          {
            id: 'rome-d1-1',
            time: '08:30',
            period: 'Morning',
            title: 'Colosseum Arena & Upper Tiers',
            neighborhood: 'Celio',
            duration: '1h 45m',
            category: 'Culture',
            description:
              'Enter with the first morning slot to see the travertine amphitheater in clear low-angle sunlight before tour buses arrive.',
            tip: 'Book timed entry directly via the official Parco Archeologico site and bring photo ID.',
          },
          {
            id: 'rome-d1-2',
            time: '10:30',
            period: 'Morning',
            title: 'Roman Forum & Palatine Hill',
            neighborhood: 'Campitelli',
            duration: '2h 00m',
            category: 'Culture',
            description:
              'Walk the Via Sacra past the Temple of Saturn and climb Palatine Hill for sweeping views over the Circus Maximus.',
            tip: 'Refill water bottles at the stone nasone fountains along the main Forum path.',
          },
          {
            id: 'rome-d1-3',
            time: '13:00',
            period: 'Midday',
            title: 'Roman Pasta Lunch in Rione Monti',
            neighborhood: 'Monti',
            duration: '1h 15m',
            category: 'Dining',
            description:
              'Step north into Monti for rigatoni alla carbonara or tonnarelli cacio e pepe at a quiet side-street osteria.',
            tip: 'Look for Via del Boschetto and Via Urbana for local dining away from main thoroughfares.',
          },
          {
            id: 'rome-d1-4',
            time: '15:00',
            period: 'Afternoon',
            title: 'Capitoline Museums & Piazza del Campidoglio',
            neighborhood: 'Campidoglio',
            duration: '2h 00m',
            category: 'Culture',
            description:
              'Explore Michelangelo’s geometric piazza and the hilltop galleries housing the Capitoline Wolf and Bernini sculptures.',
            tip: 'Take the indoor Tabularium corridor for a framed overlook of the Forum.',
          },
          {
            id: 'rome-d1-5',
            time: '18:00',
            period: 'Evening',
            title: 'Aperitivo & Stroll Through Piazza della Madonna dei Monti',
            neighborhood: 'Monti',
            duration: '1h 30m',
            category: 'Walks',
            description:
              'Join locals around the Renaissance fountain as cafés set out evening tables and independent boutiques stay open late.',
            tip: 'Order a classic Negroni Sbagliato or crisp Frascati white wine.',
          },
          {
            id: 'rome-d1-6',
            time: '20:15',
            period: 'Evening',
            title: 'Roman-Style Artichokes & Wood-Fired Dinner',
            neighborhood: 'Monti',
            duration: '1h 45m',
            category: 'Dining',
            description:
              'Finish day one with seasonal carciofi alla romana, thin-crust Roman pizza, and house Montepulciano.',
            tip: 'Reserve a table a day ahead if dining on Friday or Saturday.',
          },
        ],
      },
      {
        dayNumber: 2,
        title: 'Vatican Treasures & Trastevere Dusk',
        focusArea: 'Vatican City · Castel Sant’Angelo · Trastevere',
        walkingEstimate: '9.2 km walking',
        summary: 'Cross the Tiber for Renaissance masterpieces in the morning, followed by riverside walks and lively evening dining.',
        activities: [
          {
            id: 'rome-d2-1',
            time: '08:00',
            period: 'Morning',
            title: 'St. Peter’s Basilica & Dome Climb',
            neighborhood: 'Vatican City',
            duration: '1h 45m',
            category: 'Culture',
            description:
              'Arrive at opening hour to walk quietly beneath Bernini’s bronze baldachin and climb the 551 steps to the cupola lantern.',
            tip: 'Shoulders and knees must be covered; security lines move fastest before 08:30.',
          },
          {
            id: 'rome-d2-2',
            time: '10:30',
            period: 'Morning',
            title: 'Vatican Museums & Sistine Chapel',
            neighborhood: 'Vatican City',
            duration: '2h 45m',
            category: 'Culture',
            description:
              'Follow the Gallery of Maps and Raphael Rooms straight through to Michelangelo’s Sistine Chapel frescoes.',
            tip: 'Use the Museum’s Pinacoteca courtyard café for a quick espresso before entering the main wing.',
          },
          {
            id: 'rome-d2-3',
            time: '13:30',
            period: 'Midday',
            title: 'Supplì & Seasonal Pizza al Taglio in Prati',
            neighborhood: 'Prati',
            duration: '1h 00m',
            category: 'Dining',
            description:
              'Sample crisp fried rice supplì and Roman-style square pizza slices sold by weight in the tree-lined Prati grid.',
            tip: 'Ask for potato-rosemary or zucchini blossom slices straight from the oven.',
          },
          {
            id: 'rome-d2-4',
            time: '15:15',
            period: 'Afternoon',
            title: 'Castel Sant’Angelo & Ponte Sant’Angelo Walk',
            neighborhood: 'Borgo',
            duration: '1h 45m',
            category: 'Walks',
            description:
              'Ascend Hadrian’s cylindrical mausoleum to its riverside ramparts, then cross Bernini’s angel-lined pedestrian bridge.',
            tip: 'The upper terrace café offers one of the clearest unobstructed views of St. Peter’s dome.',
          },
          {
            id: 'rome-d2-5',
            time: '17:30',
            period: 'Afternoon',
            title: 'Janiculum Hill Panorama & Trastevere Lanes',
            neighborhood: 'Trastevere',
            duration: '1h 45m',
            category: 'Walks',
            description:
              'Climb through Gianicolo park for golden-hour light over the city, then descend into ivy-draped Trastevere alleyways.',
            tip: 'Stop by Santa Maria in Trastevere to see the twelfth-century gold apse mosaics.',
          },
          {
            id: 'rome-d2-6',
            time: '20:30',
            period: 'Evening',
            title: 'Traditional Trattoria Dinner in Trastevere',
            neighborhood: 'Trastevere',
            duration: '1h 45m',
            category: 'Dining',
            description:
              'Settle onto a cobblestone terrace for bucatini all’amatriciana and saltimbocca alla romana, followed by pistachio gelato.',
            tip: 'Choose side streets west of Viale di Trastevere for calmer tables.',
          },
        ],
      },
      {
        dayNumber: 3,
        title: 'Baroque Squares & Borghese Gardens',
        focusArea: 'Pantheon · Centro Storico · Villa Borghese',
        walkingEstimate: '8.0 km walking',
        summary: 'Combine Rome’s finest Baroque landmarks, espresso institutions, and a tranquil afternoon in the Borghese parklands.',
        activities: [
          {
            id: 'rome-d3-1',
            time: '08:45',
            period: 'Morning',
            title: 'Espresso at Sant’Eustachio & Pantheon Visit',
            neighborhood: 'Pigna',
            duration: '1h 15m',
            category: 'Culture',
            description:
              'Stand at the marble coffee bar for a morning espresso before stepping under the Pantheon’s unreinforced concrete oculus.',
            tip: 'Early morning inside the Pantheon lets you watch sunlight cut cleanly across the marble floor.',
          },
          {
            id: 'rome-d3-2',
            time: '10:30',
            period: 'Morning',
            title: 'Piazza Navona, Trevi Fountain & Spanish Steps Walk',
            neighborhood: 'Campo Marzio',
            duration: '2h 00m',
            category: 'Walks',
            description:
              'Connect Bernini’s Fountain of the Four Rivers, the Trevi basin, and the travertine curves of the Spanish Steps via quiet backstreets.',
            tip: 'Duck into San Luigi dei Francesi along the route to view Caravaggio’s three St. Matthew canvases for free.',
          },
          {
            id: 'rome-d3-3',
            time: '13:00',
            period: 'Midday',
            title: 'Field Market Tasting near Campo de’ Fiori',
            neighborhood: 'Parione',
            duration: '1h 15m',
            category: 'Dining',
            description:
              'Pick up fresh mortadella on warm pizza bianca from an historic wood-fired bakery near the market square.',
            tip: 'Walk two blocks onto Via dei Cappellari for quiet artisanal workshops.',
          },
          {
            id: 'rome-d3-4',
            time: '15:00',
            period: 'Afternoon',
            title: 'Galleria Borghese & Pincio Terrace',
            neighborhood: 'Pinciano',
            duration: '2h 30m',
            category: 'Culture',
            description:
              'Spend two timed hours with Bernini’s marble sculptures and Canova’s Pauline Bonaparte inside Villa Borghese.',
            tip: 'Tickets sell out weeks in advance; reserve the 15:00 slot early and stroll to the Pincio overlook at sunset.',
          },
          {
            id: 'rome-d3-5',
            time: '18:30',
            period: 'Evening',
            title: 'Sunset Walk Down to Piazza del Popolo',
            neighborhood: 'Flaminio',
            duration: '1h 00m',
            category: 'Walks',
            description:
              'Descend the Pincio ramps overlooking Piazza del Popolo’s twin churches and Egyptian obelisk as streetlamps turn on.',
            tip: 'Continue along Via Margutta, Rome’s quiet gallery and ivy-lined street.',
          },
          {
            id: 'rome-d3-6',
            time: '20:00',
            period: 'Evening',
            title: 'Farewell Roman Tasting Menu in Centro Storico',
            neighborhood: 'Regola',
            duration: '2h 00m',
            category: 'Dining',
            description:
              'Close your trip near Via Giulia with braised oxtail, seasonal puntarelle salad, and tiramisu.',
            tip: 'Take a post-dinner walk across Ponte Sisto while the Tiber reflections settle.',
          },
        ],
      },
    ],
    packingList: [
      {
        id: 'rome-pack-1',
        item: 'Cushioned Walking Sneakers',
        category: 'Footwear',
        reason: 'Essential for uneven sampietrini cobblestones and 8+ km daily walks through historic hills.',
      },
      {
        id: 'rome-pack-2',
        item: 'Refillable Water Bottle',
        category: 'Essentials',
        reason: 'Fill up for free with cold drinking water at Rome’s street-side stone nasone fountains.',
      },
      {
        id: 'rome-pack-3',
        item: 'Light Scarf or Shawl',
        category: 'Attire',
        reason: 'Needed to cover shoulders when entering St. Peter’s Basilica, the Pantheon, and neighborhood churches.',
      },
      {
        id: 'rome-pack-4',
        item: 'Type L / Type F Power Adapter',
        category: 'Electronics',
        reason: 'Compatible with Italian three-prong and European two-pin wall outlets for overnight charging.',
      },
      {
        id: 'rome-pack-5',
        item: 'Sunglasses & Sun Hat',
        category: 'Weather',
        reason: 'Provides shade during unshaded morning hours in the Roman Forum and on Palatine Hill.',
      },
    ],
  },

  paris: {
    slug: 'paris',
    city: 'Paris',
    country: 'France',
    region: 'Île-de-France',
    tagline: 'Limestone boulevards, river islands, museum wings, and neighborhood patisseries.',
    overview:
      'Designed around the geography of the Seine, this three-day route pairs Right Bank museums and covered passages with Left Bank bookshops, Montmartre staircases, and classic corner bistros.',
    imageUrl: '/src/assets/images/paris_editorial_view_1795425686965.jpg',
    imageCaption: 'Fig. 1 — Haussmann limestone facades and stone bridges along the Seine at morning light.',
    practicalInfo: {
      transit: 'Metro & RER · Navigo Easy',
      bestMonths: 'May–June · September–October',
      currency: 'Euro (€)',
      localPace: 'Bistros serve lunch 12:00–14:00',
    },
    days: [
      {
        dayNumber: 1,
        title: 'Île de la Cité & Le Marais',
        focusArea: 'Île de la Cité · Marais · Place des Vosges',
        walkingEstimate: '8.4 km walking',
        summary: 'Trace the medieval origins of Paris on the river islands before spending the afternoon in the historic Marais.',
        activities: [
          {
            id: 'paris-d1-1',
            time: '08:30',
            period: 'Morning',
            title: 'Croissant & Café Crème by the Seine',
            neighborhood: 'Île Saint-Louis',
            duration: '45m',
            category: 'Dining',
            description:
              'Begin on quiet Île Saint-Louis with flaky butter croissants and strong espresso before the city wakes up.',
            tip: 'Walk Rue Saint-Louis en l’Île from end to end to admire 17th-century stone townhomes.',
          },
          {
            id: 'paris-d1-2',
            time: '09:30',
            period: 'Morning',
            title: 'Sainte-Chapelle & Notre-Dame Exterior Forecourt',
            neighborhood: 'Île de la Cité',
            duration: '1h 45m',
            category: 'Culture',
            description:
              'Step inside Sainte-Chapelle’s upper chapel to stand surrounded by 15-meter walls of thirteenth-century stained glass.',
            tip: 'Clear mornings produce the richest ruby and cobalt light inside the chapel.',
          },
          {
            id: 'paris-d1-3',
            time: '12:00',
            period: 'Midday',
            title: 'Marché des Enfants Rouges Lunch',
            neighborhood: 'Haut-Marais',
            duration: '1h 15m',
            category: 'Dining',
            description:
              'Browse Paris’s oldest covered market for buckwheat galettes, fresh oysters, or warm Moroccan tagine at shared wooden counters.',
            tip: 'Arrive right around noon to find counter seats before the office rush.',
          },
          {
            id: 'paris-d1-4',
            time: '13:45',
            period: 'Afternoon',
            title: 'Musée Carnavalet & Place des Vosges',
            neighborhood: 'Le Marais',
            duration: '2h 15m',
            category: 'Culture',
            description:
              'Explore the free museum of Parisian history in twin Renaissance mansions, then rest beneath the arcades of Place des Vosges.',
            tip: 'Visit Victor Hugo’s apartment on the southeast corner of the square.',
          },
          {
            id: 'paris-d1-5',
            time: '16:30',
            period: 'Afternoon',
            title: 'Rue des Francs-Bourgeois & Seine Quayside Walk',
            neighborhood: 'Le Marais',
            duration: '1h 30m',
            category: 'Walks',
            description:
              'Browse design bookshops, independent perfumeries, and quiet courtyard gardens leading down toward Hôtel de Ville.',
            tip: 'Look for the historic stone courtyard of Hôtel de Sully just off Place des Vosges.',
          },
          {
            id: 'paris-d1-6',
            time: '19:45',
            period: 'Evening',
            title: 'Classic Zinc-Counter Bistro Dinner',
            neighborhood: '11th / Marais',
            duration: '1h 45m',
            category: 'Dining',
            description:
              'Enjoy roasted duck confit, seasonal green beans, and a carafe of Côte du Rhône at a neighborhood bistro.',
            tip: 'Ask for the daily chalk-board plats du jour rather than standard tourist menus.',
          },
        ],
      },
      {
        dayNumber: 2,
        title: 'The Grand Axis & Left Bank Gardens',
        focusArea: 'Louvre · Tuileries · Saint-Germain-des-Prés',
        walkingEstimate: '9.0 km walking',
        summary: 'Focus on two curated museum wings without museum fatigue, then cross the Passerelle Léopold-Sédar-Senghor to the Left Bank.',
        activities: [
          {
            id: 'paris-d2-1',
            time: '09:00',
            period: 'Morning',
            title: 'The Louvre — Denon & Richelieu Highlights',
            neighborhood: '1st Arrondissement',
            duration: '2h 45m',
            category: 'Culture',
            description:
              'Focus intentionally on the Italian Renaissance galleries, French sculpture courts, and Apollo Gallery rather than trying to see every room.',
            tip: 'Enter via the Carrousel du Louvre underground entrance to bypass Pyramid queues.',
          },
          {
            id: 'paris-d2-2',
            time: '12:15',
            period: 'Midday',
            title: 'Jardin des Tuileries & Musée de l’Orangerie',
            neighborhood: 'Tuileries',
            duration: '1h 45m',
            category: 'Culture',
            description:
              'Stroll past the chestnut alleys and octagonal pond to sit inside Monet’s oval Water Lilies rooms at the western end of the garden.',
            tip: 'Grab a crusty jambon-beurre baguette on Rue Saint-Honoré before entering the garden.',
          },
          {
            id: 'paris-d2-3',
            time: '14:30',
            period: 'Afternoon',
            title: 'Musée d’Orsay Impressionist Nave',
            neighborhood: '7th Arrondissement',
            duration: '2h 15m',
            category: 'Culture',
            description:
              'Cross the Seine into the Beaux-Arts former railway station to see Degas, Van Gogh, and Manet under the vaulted glass roof.',
            tip: 'Head directly to the 5th floor Impressionist gallery first, then work downward.',
          },
          {
            id: 'paris-d2-4',
            time: '17:15',
            period: 'Afternoon',
            title: 'Saint-Germain-des-Prés & Jardin du Luxembourg',
            neighborhood: '6th Arrondissement',
            duration: '1h 45m',
            category: 'Walks',
            description:
              'Wander antique print shops along Rue Jacob and Rue Bonaparte before relaxing in green steel chairs around the Medici Fountain.',
            tip: 'Stop into Poilâne on Rue du Cherche-Midi for a warm apple tartlet.',
          },
          {
            id: 'paris-d2-5',
            time: '20:00',
            period: 'Evening',
            title: 'Brasserie Dinner & Late Seine Illumination Walk',
            neighborhood: 'Saint-Germain',
            duration: '2h 00m',
            category: 'Dining',
            description:
              'Dine on steak frites or sole meunière in a classic mirrored brasserie, then walk Pont des Arts as the Eiffel Tower sparkles on the hour.',
            tip: 'Evening sparkles run for 5 minutes at the top of every hour after dusk.',
          },
        ],
      },
      {
        dayNumber: 3,
        title: 'Covered Passages & Montmartre Hilltop',
        focusArea: 'Palais-Royal · 9th Passages · Montmartre',
        walkingEstimate: '8.7 km walking',
        summary: 'Discover 19th-century glass-roofed arcades in the morning and climb the quiet back slopes of Montmartre by afternoon.',
        activities: [
          {
            id: 'paris-d3-1',
            time: '09:00',
            period: 'Morning',
            title: 'Palais-Royal Gardens & Galerie Vivienne',
            neighborhood: '2nd Arrondissement',
            duration: '1h 45m',
            category: 'Walks',
            description:
              'Walk beneath the manicured linden colonnades of Palais-Royal, then explore mosaic-floored Passage Vivienne and Passage des Panoramas.',
            tip: 'Morning coffee at Café Kitsuné overlooking the Palais-Royal fountain is quietest before 10:00.',
          },
          {
            id: 'paris-d3-2',
            time: '11:15',
            period: 'Morning',
            title: 'Palais Garnier Opera House Interior',
            neighborhood: 'Opéra',
            duration: '1h 30m',
            category: 'Culture',
            description:
              'Inspect the polychrome marble Grand Staircase, gilded foyer, and Chagall-painted auditorium ceiling.',
            tip: 'Check auditorium rehearsal schedules before visiting so the main hall is open.',
          },
          {
            id: 'paris-d3-3',
            time: '13:00',
            period: 'Midday',
            title: 'Rue des Martyrs Market Street Lunch',
            neighborhood: 'South Pigalle',
            duration: '1h 15m',
            category: 'Dining',
            description:
              'Walk up Rue des Martyrs tasting artisan cheeses, warm madeleines, and seasonal bistro plates along one of Paris’s liveliest food streets.',
            tip: 'Save room for chocolate éclairs or fresh choux pastry from a neighborhood patisserie.',
          },
          {
            id: 'paris-d3-4',
            time: '15:00',
            period: 'Afternoon',
            title: 'Montmartre Backstreets & Musée de Montmartre',
            neighborhood: '18th Arrondissement',
            duration: '2h 15m',
            category: 'Culture',
            description:
              'Approach the hilltop via quiet Rue Lepic and Rue Cortot, passing the last remaining Montmartre vineyard and Renoir’s former garden studio.',
            tip: 'Avoid the crowded Place du Tertre stalls by looping behind Sacré-Cœur via Rue Saint-Vincent.',
          },
          {
            id: 'paris-d3-5',
            time: '17:45',
            period: 'Evening',
            title: 'Sacré-Cœur Steps Sunset Overlook',
            neighborhood: 'Montmartre',
            duration: '1h 00m',
            category: 'Walks',
            description:
              'Watch dusk settle across the zinc rooftops of Paris from the limestone steps beneath the white travertine basilica domes.',
            tip: 'Bring a light layer—there is nearly always a breeze on top of the Butte.',
          },
          {
            id: 'paris-d3-6',
            time: '19:45',
            period: 'Evening',
            title: 'Abbesses Wine Bar & Farewell Tasting',
            neighborhood: 'Abbesses',
            duration: '1h 45m',
            category: 'Dining',
            description:
              'Celebrate your final evening over natural Loire wines, aged Comté, and slow-cooked French comfort dishes.',
            tip: 'Metro Line 12 from Abbesses takes you straight back to central Paris in 15 minutes.',
          },
        ],
      },
    ],
    packingList: [
      {
        id: 'paris-pack-1',
        item: 'Broken-In Walking Shoes',
        category: 'Footwear',
        reason: 'Built for gravel paths in the Tuileries, museum marble floors, and long stretches along the Seine.',
      },
      {
        id: 'paris-pack-2',
        item: 'Compact Foldable Umbrella',
        category: 'Weather',
        reason: 'Passing showers are common in any season; a pocket umbrella tucks easily into a day bag.',
      },
      {
        id: 'paris-pack-3',
        item: 'Layered Trench or Light Jacket',
        category: 'Attire',
        reason: 'Adapts cleanly from cool riverside mornings to warm afternoon museum wings and evening terraces.',
      },
      {
        id: 'paris-pack-4',
        item: 'Zippered Crossbody Bag',
        category: 'Essentials',
        reason: 'Keeps transit cards, museum tickets, and valuables close on busy Metro lines.',
      },
      {
        id: 'paris-pack-5',
        item: 'Type E European Plug Adapter',
        category: 'Electronics',
        reason: 'Fits standard French recessed-ground wall sockets in hotels and cafés.',
      },
    ],
  },

  tokyo: {
    slug: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    region: 'Kanto',
    tagline: 'Cedar shrines, precision rail networks, quiet side alleys, and late-night izakayas.',
    overview:
      'Tokyo rewards neighborhood clustering by rail line. This three-day itinerary pairs historic Asakusa and Yanaka in the east, forested Meiji Shrine and design-led Omotesando in the west, and Tsukiji, Ginza, and contemporary bayside art.',
    imageUrl: '/src/assets/images/tokyo_editorial_view_1795425687576.jpg',
    imageCaption: 'Fig. 1 — Lantern-lit wooden shopfronts in Yanaka framed against Tokyo’s twilight skyline.',
    practicalInfo: {
      transit: 'JR Yamanote & Tokyo Metro · Suica/PASMO',
      bestMonths: 'March–May · October–November',
      currency: 'Japanese Yen (¥)',
      localPace: 'Carry small cash for shrines & markets',
    },
    days: [
      {
        dayNumber: 1,
        title: 'Old Edo Shitamachi & Ueno Parks',
        focusArea: 'Asakusa · Kappabashi · Yanaka',
        walkingEstimate: '9.5 km walking',
        summary: 'Experience Tokyo’s oldest temple precinct at dawn, browse culinary craft streets, and wander preserved wooden lanes in Yanaka.',
        activities: [
          {
            id: 'tokyo-d1-1',
            time: '07:45',
            period: 'Morning',
            title: 'Senso-ji Temple & Nakamise-dori Early Walk',
            neighborhood: 'Asakusa',
            duration: '1h 30m',
            category: 'Culture',
            description:
              'Walk beneath the Kaminarimon lantern before shops open, hearing morning temple chants in peaceful cedar incense air.',
            tip: 'Step next door to Asakusa Shrine and walk along the Sumida River promenade afterward.',
          },
          {
            id: 'tokyo-d1-2',
            time: '09:45',
            period: 'Morning',
            title: 'Kappabashi Kitchen Town',
            neighborhood: 'Taito',
            duration: '1h 15m',
            category: 'Walks',
            description:
              'Explore chef-grade Japanese carbon-steel knives, hand-thrown Mino ceramics, and precision cast-iron cookware along a mile-long trade street.',
            tip: 'Many knife shops offer complimentary hand-engraving in kanji.',
          },
          {
            id: 'tokyo-d1-3',
            time: '11:30',
            period: 'Midday',
            title: 'Handmade Soba & Tempura Lunch',
            neighborhood: 'Asakusa / Ueno',
            duration: '1h 00m',
            category: 'Dining',
            description:
              'Sit at a traditional Edo-style soba house for chilled buckwheat noodles with crisp shrimp and seasonal vegetable tempura.',
            tip: 'Pour the hot sobayu noodle broth into your leftover dipping sauce at the end of the meal.',
          },
          {
            id: 'tokyo-d1-4',
            time: '13:15',
            period: 'Afternoon',
            title: 'Tokyo National Museum & Ueno Park',
            neighborhood: 'Ueno',
            duration: '2h 15m',
            category: 'Culture',
            description:
              'Inspect samurai armor, woodblock prints, and ceramics inside the Honkan gallery surrounded by Ueno’s temple gardens.',
            tip: 'Visit the Horyuji Treasures Gallery for quiet architecture and reflective water courts.',
          },
          {
            id: 'tokyo-d1-5',
            time: '16:00',
            period: 'Afternoon',
            title: 'Yanaka Ginza & Nezu Shrine Walk',
            neighborhood: 'Yanaka',
            duration: '2h 00m',
            category: 'Walks',
            description:
              'Stroll Tokyo’s preserved shitamachi quarter of wooden machiya houses, neighborhood tea shops, and Nezu Shrine’s vermilion torii tunnel.',
            tip: 'Try warm roasted hojicha green tea from a local leaf roaster on Yanaka Ginza.',
          },
          {
            id: 'tokyo-d1-6',
            time: '19:00',
            period: 'Evening',
            title: 'Charcoal Yakitori & Izakaya Counter',
            neighborhood: 'Ueno / Shinbashi',
            duration: '1h 45m',
            category: 'Dining',
            description:
              'Dine beneath brick railway arches on binchotan-grilled chicken skewers, chilled tofu, and draft pilsner or dry junmai sake.',
            tip: 'Order a small otsumami dish per round and pace your skewers across the evening.',
          },
        ],
      },
      {
        dayNumber: 2,
        title: 'Forested Shrines & West Tokyo Design',
        focusArea: 'Meiji Jingu · Omotesando · Shibuya',
        walkingEstimate: '8.8 km walking',
        summary: 'Contrast serene cedar woodland with Tokyo’s sharpest contemporary architecture, vinyl cafés, and evening skyline decks.',
        activities: [
          {
            id: 'tokyo-d2-1',
            time: '08:30',
            period: 'Morning',
            title: 'Meiji Jingu Shrine Forest Walk',
            neighborhood: 'Harajuku',
            duration: '1h 30m',
            category: 'Culture',
            description:
              'Enter through massive hinoki cypress torii gates into 170 acres of tranquil urban forest dedicated to Emperor Meiji.',
            tip: 'Arrive before 09:00 to hear gravel footsteps without tour crowds.',
          },
          {
            id: 'tokyo-d2-2',
            time: '10:30',
            period: 'Morning',
            title: 'Omotesando Architecture & Nezu Museum Garden',
            neighborhood: 'Minami-Aoyama',
            duration: '2h 15m',
            category: 'Culture',
            description:
              'Walk Kengo Kuma’s bamboo-lined entryway into the Nezu Museum, followed by its moss-carpeted tea house garden.',
            tip: 'Notice flagship buildings by Tadao Ando, Toyo Ito, and SANAA along Omotesando avenue.',
          },
          {
            id: 'tokyo-d2-3',
            time: '13:15',
            period: 'Midday',
            title: 'Tonkatsu or Hand-Pulled Ramen in Aoyama',
            neighborhood: 'Aoyama',
            duration: '1h 00m',
            category: 'Dining',
            description:
              'Enjoy crisp panko-breaded pork cutlet with shredded cabbage and sesame sauce or clear yuzu-shio ramen.',
            tip: 'Weekday lunch sets often include miso soup, pickles, and rice at great value.',
          },
          {
            id: 'tokyo-d2-4',
            time: '15:00',
            period: 'Afternoon',
            title: 'Daikanyama T-Site Bookshop & Meguro River Walk',
            neighborhood: 'Daikanyama / Nakameguro',
            duration: '2h 00m',
            category: 'Walks',
            description:
              'Browse curated architecture and photography books at Daikanyama T-Site before walking down to the tree-lined Meguro canal.',
            tip: 'Stop at a specialty pour-over coffee roaster along the Nakameguro canal path.',
          },
          {
            id: 'tokyo-d2-5',
            time: '17:45',
            period: 'Evening',
            title: 'Shibuya Sky Sunset Overlook & Crossing',
            neighborhood: 'Shibuya',
            duration: '1h 30m',
            category: 'Walks',
            description:
              'Ascend to the open-air 229-meter rooftop deck for 360-degree twilight views toward Mount Fuji and Tokyo Tower.',
            tip: 'Reserve sunset timed entry tickets online several weeks ahead.',
          },
          {
            id: 'tokyo-d2-6',
            time: '19:45',
            period: 'Evening',
            title: 'Okonomiyaki & Late Jazz Listening Bar',
            neighborhood: 'Shibuya / Nonbei Yokocho',
            duration: '2h 00m',
            category: 'Dining',
            description:
              'Cook savory cabbage pancakes on a tabletop teppan grill, then cap the night at an intimate Tokyo jazz kissa.',
            tip: 'Keep voices soft in classic vinyl listening bars—music is the centerpiece.',
          },
        ],
      },
      {
        dayNumber: 3,
        title: 'Morning Markets, Ginza Craft & Imperial Gardens',
        focusArea: 'Tsukiji · Ginza · Imperial Palace',
        walkingEstimate: '8.2 km walking',
        summary: 'Sample fresh market seafood at breakfast, browse century-old stationery shops in Ginza, and close in calm garden grounds.',
        activities: [
          {
            id: 'tokyo-d3-1',
            time: '08:00',
            period: 'Morning',
            title: 'Tsukiji Outer Market Breakfast',
            neighborhood: 'Tsukiji',
            duration: '1h 30m',
            category: 'Dining',
            description:
              'Start with warm tamagoyaki folded omelet, grilled scallops, and fresh tuna donburi along the lively outer market lanes.',
            tip: 'Eat standing near the stalls rather than walking with food in crowded aisles.',
          },
          {
            id: 'tokyo-d3-2',
            time: '10:00',
            period: 'Morning',
            title: 'Hamarikyu Gardens & Matcha Tea House',
            neighborhood: 'Shiodome',
            duration: '1h 30m',
            category: 'Walks',
            description:
              'Walk a short block from Tsukiji into a tidal Edo-period garden surrounded by gleaming glass skyscrapers.',
            tip: 'Order whipped ceremonial matcha and seasonal wagashi sweet at Nakajima-no-Ochaya over the pond.',
          },
          {
            id: 'tokyo-d3-3',
            time: '12:00',
            period: 'Midday',
            title: 'Ginza Depachika Food Hall & Sushi Counter',
            neighborhood: 'Ginza',
            duration: '1h 30m',
            category: 'Dining',
            description:
              'Sit at a neighborhood Edomae sushi counter for seasonal nigiri lunch, then explore basement depachika food halls.',
            tip: 'Lunch omakase in Ginza offers world-class sushi at a fraction of dinner pricing.',
          },
          {
            id: 'tokyo-d3-4',
            time: '14:00',
            period: 'Afternoon',
            title: 'Ginza Stationery, Craft & Gallery Walk',
            neighborhood: 'Ginza',
            duration: '2h 00m',
            category: 'Culture',
            description:
              'Browse 12 floors of fountain pens and Japanese paper at Itoya, plus contemporary architectural galleries along Chuo-dori.',
            tip: 'Check the top-floor exhibition spaces at Ginza Graphic Gallery and Ginza Six.',
          },
          {
            id: 'tokyo-d3-5',
            time: '16:30',
            period: 'Afternoon',
            title: 'Imperial Palace East Gardens & Tokyo Station Brick Hall',
            neighborhood: 'Marunouchi',
            duration: '1h 45m',
            category: 'Walks',
            description:
              'Walk the stone moat walls and Edo Castle foundations before admiring the restored 1914 red-brick facade of Tokyo Station.',
            tip: 'Note the East Gardens close on Mondays and Fridays; Chidorigafuchi moat is an alternative walk.',
          },
          {
            id: 'tokyo-d3-6',
            time: '19:15',
            period: 'Evening',
            title: 'Farewell Kaiseki or Shabu-Shabu in Nihonbashi',
            neighborhood: 'Nihonbashi',
            duration: '2h 00m',
            category: 'Dining',
            description:
              'End your Tokyo stay in historic Nihonbashi over seasonal multi-course kaiseki or delicate dashi hotpot.',
            tip: 'Walk across the stone Nihonbashi Bridge—zero-kilometer marker of Japan’s historic highways.',
          },
        ],
      },
    ],
    packingList: [
      {
        id: 'tokyo-pack-1',
        item: 'Slip-On Walking Sneakers',
        category: 'Footwear',
        reason: 'Easy to remove quickly when stepping into historic temple halls, tatami rooms, and traditional dining rooms.',
      },
      {
        id: 'tokyo-pack-2',
        item: 'Small Zippered Coin Pouch',
        category: 'Essentials',
        reason: 'Organizes ¥100 and ¥500 coins for shrine offerings, vending machines, and cash-only noodle counters.',
      },
      {
        id: 'tokyo-pack-3',
        item: 'Portable USB Power Bank',
        category: 'Electronics',
        reason: 'Keeps mobile rail maps, digital Suica transit cards, and camera batteries charged all day.',
      },
      {
        id: 'tokyo-pack-4',
        item: 'Compact Pocket Towel or Handkerchief',
        category: 'Essentials',
        reason: 'Many train station and public park restrooms do not supply paper towels.',
      },
      {
        id: 'tokyo-pack-5',
        item: 'Packable Light Rain Shell',
        category: 'Weather',
        reason: 'Stays breathable on packed trains while shielding against sudden coastal mist or evening drizzle.',
      },
    ],
  },

  'new-york': {
    slug: 'new-york',
    city: 'New York',
    country: 'United States',
    region: 'New York State',
    tagline: 'Cast-iron loft blocks, world-class museums, riverfront parks, and late-night boroughs.',
    overview:
      'Structured north-to-south across Manhattan and across the East River to Brooklyn, this three-day plan balances iconic skyline landmarks with quieter neighborhood streets, museum rooms, and standout local dining.',
    imageUrl: '/src/assets/images/new_york_view_1795425686605.jpg',
    imageCaption: 'Fig. 1 — Late afternoon shadows across SoHo cast-iron facades looking north toward Midtown.',
    practicalInfo: {
      transit: 'NYC Subway & Ferry · OMNY Tap',
      bestMonths: 'May–June · September–November',
      currency: 'US Dollar ($)',
      localPace: 'Walk avenues north–south, streets east–west',
    },
    days: [
      {
        dayNumber: 1,
        title: 'Lower Manhattan, SoHo & Brooklyn Bridge',
        focusArea: 'Downtown · Brooklyn Bridge · DUMBO · SoHo',
        walkingEstimate: '9.8 km walking',
        summary: 'Cross the East River early for skyline views, explore cobblestone DUMBO, and spend late afternoon in SoHo’s cast-iron historic district.',
        activities: [
          {
            id: 'nyc-d1-1',
            time: '08:15',
            period: 'Morning',
            title: 'Brooklyn Bridge Pedestrian Walkway to DUMBO',
            neighborhood: 'Financial District → Brooklyn',
            duration: '1h 15m',
            category: 'Walks',
            description:
              'Walk east across the Neo-Gothic stone towers as morning sun illuminates Lower Manhattan behind you.',
            tip: 'Start before 09:00 for clear bridge views without heavy afternoon foot traffic.',
          },
          {
            id: 'nyc-d1-2',
            time: '09:45',
            period: 'Morning',
            title: 'Brooklyn Bridge Park & Bagel Breakfast',
            neighborhood: 'DUMBO / Brooklyn Heights',
            duration: '1h 30m',
            category: 'Dining',
            description:
              'Grab a hand-rolled everything bagel with scallion cream cheese and walk the waterfront piers and Brooklyn Heights Promenade.',
            tip: 'Stroll one block up to Willow and Cranberry Streets for 19th-century carriage houses.',
          },
          {
            id: 'nyc-d1-3',
            time: '11:45',
            period: 'Midday',
            title: 'NYC Ferry Back to Wall Street & Trinity Church',
            neighborhood: 'Financial District',
            duration: '1h 30m',
            category: 'Culture',
            description:
              'Take the East River Ferry back to Pier 11, then visit the 9/11 Memorial pools and historic Federal Hall.',
            tip: 'Use the standard NYC Ferry app or ticket kiosk ($4) for open-deck harbor views.',
          },
          {
            id: 'nyc-d1-4',
            time: '13:30',
            period: 'Midday',
            title: 'Dim Sum or Hand-Pulled Noodles in Chinatown',
            neighborhood: 'Chinatown',
            duration: '1h 15m',
            category: 'Dining',
            description:
              'Head up Doyers and Pell Streets for steamed soup dumplings, roast duck, or hand-pulled Lanzhou beef noodles.',
            tip: 'Bring small bills—several classic Chinatown bakeries and noodle counters remain cash-preferred.',
          },
          {
            id: 'nyc-d1-5',
            time: '15:15',
            period: 'Afternoon',
            title: 'SoHo Cast-Iron Architecture & Gallery Walk',
            neighborhood: 'SoHo / Nolita',
            duration: '2h 15m',
            category: 'Walks',
            description:
              'Walk Greene and Mercer Streets to admire 1870s cast-iron facades, independent bookshops, and small loft galleries.',
            tip: 'Look up above street level to spot Corinthian columns and ornate pressed-metal cornices.',
          },
          {
            id: 'nyc-d1-6',
            time: '19:30',
            period: 'Evening',
            title: 'West Village Tavern Dinner & Jazz Set',
            neighborhood: 'West Village',
            duration: '2h 15m',
            category: 'Dining',
            description:
              'Dine on seasonal American fare along Bleecker or Grove Street, followed by a late set at a classic cellar jazz club.',
            tip: 'Book jazz club seats a week ahead; walk-in bar standing is sometimes available for the late set.',
          },
        ],
      },
      {
        dayNumber: 2,
        title: 'Central Park, Museum Mile & Midtown',
        focusArea: 'Upper East Side · Central Park · Midtown',
        walkingEstimate: '9.0 km walking',
        summary: 'Spend a full morning inside the Metropolitan Museum of Art, cross Central Park’s wooded paths, and step inside Midtown’s Art Deco landmarks.',
        activities: [
          {
            id: 'nyc-d2-1',
            time: '09:00',
            period: 'Morning',
            title: 'Central Park Conservatory Garden & Ramble Walk',
            neighborhood: 'Upper East Side / Central Park',
            duration: '1h 15m',
            category: 'Walks',
            description:
              'Grab coffee on Madison Avenue and enter Central Park at the Reservoir path, walking south past Bow Bridge and Bethesda Terrace.',
            tip: 'Bethesda Arcade’s Minton ceramic ceiling tiles are best seen in morning light.',
          },
          {
            id: 'nyc-d2-2',
            time: '10:30',
            period: 'Morning',
            title: 'The Metropolitan Museum of Art',
            neighborhood: 'Upper East Side',
            duration: '3h 00m',
            category: 'Culture',
            description:
              'Explore the Temple of Dendur, American Wing courtyard, and European Paintings galleries inside New York’s flagship encyclopedic museum.',
            tip: 'Head up to the Cantor Roof Garden (seasonal May–October) for skyline views over the trees.',
          },
          {
            id: 'nyc-d2-3',
            time: '13:45',
            period: 'Midday',
            title: 'Upper East Side Deli or Café Lunch',
            neighborhood: 'Lenox Hill',
            duration: '1h 00m',
            category: 'Dining',
            description:
              'Step onto Lexington Avenue for a classic hot pastrami on rye or seasonal café soup and salad.',
            tip: 'Split a classic deli sandwich if you want room for an afternoon bakery stop.',
          },
          {
            id: 'nyc-d2-4',
            time: '15:15',
            period: 'Afternoon',
            title: 'New York Public Library & Grand Central Terminal',
            neighborhood: 'Midtown East',
            duration: '1h 45m',
            category: 'Culture',
            description:
              'See the Rose Main Reading Room at Stephen A. Schwarzman Building, then inspect Grand Central’s celestial zodiac ceiling and Whispering Gallery.',
            tip: 'Stop by the Chrysler Building’s Art Deco lobby just one block east on Lexington.',
          },
          {
            id: 'nyc-d2-5',
            time: '17:30',
            period: 'Evening',
            title: 'Top of the Rock Twilight Skyline View',
            neighborhood: 'Midtown',
            duration: '1h 15m',
            category: 'Walks',
            description:
              'Watch Manhattan’s office towers light up at blue hour with direct unobstructed views of the Empire State Building.',
            tip: 'Arrive 30 minutes before sunset so you see daylight, dusk, and night lights in one visit.',
          },
          {
            id: 'nyc-d2-6',
            time: '19:45',
            period: 'Evening',
            title: 'Classic New York Pizza or Theater District Bistro',
            neighborhood: 'Hell’s Kitchen / Midtown',
            duration: '1h 45m',
            category: 'Dining',
            description:
              'Choose between a crisp coal-oven Margherita pie or pre-theater French brasserie service along Ninth Avenue.',
            tip: 'Ninth Avenue between 44th and 52nd Streets has dozens of relaxed neighborhood kitchens.',
          },
        ],
      },
      {
        dayNumber: 3,
        title: 'Chelsea Galleries, High Line & Greenwich Village',
        focusArea: 'Chelsea · Meatpacking · Greenwich Village',
        walkingEstimate: '8.3 km walking',
        summary: 'Close your trip on Manhattan’s west side with elevated parks, contemporary art, river sunsets, and tree-lined Village streets.',
        activities: [
          {
            id: 'nyc-d3-1',
            time: '09:30',
            period: 'Morning',
            title: 'The High Line Elevated Park Walk',
            neighborhood: 'Hudson Yards → Chelsea',
            duration: '1h 15m',
            category: 'Walks',
            description:
              'Start at 34th Street and walk south along the planted freight rail viaduct framing views down Tenth Avenue toward the Hudson.',
            tip: 'Step into the Vessel plaza or Little Island pier at the southern end for river breezes.',
          },
          {
            id: 'nyc-d3-2',
            time: '11:00',
            period: 'Morning',
            title: 'Whitney Museum of American Art',
            neighborhood: 'Meatpacking District',
            duration: '2h 00m',
            category: 'Culture',
            description:
              'Explore 20th- and 21st-century American art in Renzo Piano’s stepped building with outdoor sculpture terraces overlooking the river.',
            tip: 'Take the elevator to the 8th floor first and work down via the exterior staircases.',
          },
          {
            id: 'nyc-d3-3',
            time: '13:15',
            period: 'Midday',
            title: 'Chelsea Market Tacos, Seafood & Bakery',
            neighborhood: 'Chelsea',
            duration: '1h 15m',
            category: 'Dining',
            description:
              'Walk inside the former Nabisco biscuit factory for handmade corn tortillas, fresh oysters, or wood-fired Italian sandwiches.',
            tip: 'Take your food upstairs to the High Line overlook benches if weather is mild.',
          },
          {
            id: 'nyc-d3-4',
            time: '15:00',
            period: 'Afternoon',
            title: 'West Chelsea Contemporary Art Galleries',
            neighborhood: 'Chelsea',
            duration: '1h 30m',
            category: 'Culture',
            description:
              'Hop between free street-level contemporary galleries clustered along West 21st, 22nd, and 24th Streets.',
            tip: 'Note that most Chelsea galleries are open Tuesday–Saturday and closed Sunday–Monday.',
          },
          {
            id: 'nyc-d3-5',
            time: '17:00',
            period: 'Afternoon',
            title: 'Washington Square Park & MacDougal Street Walk',
            neighborhood: 'Greenwich Village',
            duration: '1h 30m',
            category: 'Walks',
            description:
              'Wander Washington Mews’ cobbled carriage alley, chess tables at Washington Square, and historic brownstones around Bedford Street.',
            tip: 'Pause for a Sicilian espresso or cannoli on Bleecker Street.',
          },
          {
            id: 'nyc-d3-6',
            time: '19:30',
            period: 'Evening',
            title: 'Farewell Dinner in Greenwich Village',
            neighborhood: 'Greenwich Village',
            duration: '2h 00m',
            category: 'Dining',
            description:
              'Celebrate your final night in a candlelit neighborhood dining room featuring seasonal local produce, handmade pasta, or dry-aged steak.',
            tip: 'Walk back along the Hudson River Greenway after dinner to see the harbor lights.',
          },
        ],
      },
    ],
    packingList: [
      {
        id: 'nyc-pack-1',
        item: 'Supportive All-Day Sneakers',
        category: 'Footwear',
        reason: 'Essential for 9+ km days across concrete avenues, the Brooklyn Bridge, and elevated parks.',
      },
      {
        id: 'nyc-pack-2',
        item: 'Portable Phone Charger',
        category: 'Electronics',
        reason: 'Ensures OMNY tap-to-pay subway access, digital museum passes, and maps never run dry.',
      },
      {
        id: 'nyc-pack-3',
        item: 'Refillable Insulated Bottle',
        category: 'Essentials',
        reason: 'Convenient for long walks through Central Park, the High Line, and Hudson River piers.',
      },
      {
        id: 'nyc-pack-4',
        item: 'Versatile Mid-Weight Jacket',
        category: 'Attire',
        reason: 'Handles brisk East River winds on bridges and ferries as well as crisp museum air conditioning.',
      },
      {
        id: 'nyc-pack-5',
        item: 'Lightweight Daypack or Canvas Tote',
        category: 'Essentials',
        reason: 'Carries an extra layer, Chelsea gallery booklets, and bakery or market finds comfortably.',
      },
    ],
  },
};

const CITY_ALIASES: Record<string, CityItinerary['slug']> = {
  rome: 'rome',
  roma: 'rome',
  'rome italy': 'rome',
  'rome, italy': 'rome',
  paris: 'paris',
  'paris france': 'paris',
  'paris, france': 'paris',
  tokyo: 'tokyo',
  'tokyo japan': 'tokyo',
  'tokyo, japan': 'tokyo',
  'new york': 'new-york',
  'new york city': 'new-york',
  nyc: 'new-york',
  ny: 'new-york',
  manhattan: 'new-york',
  'new york, ny': 'new-york',
  'new york, usa': 'new-york',
  'new york, united states': 'new-york',
};

export const AVAILABLE_CITIES = Object.values(BUILT_IN_ITINERARIES);

export function findCityItinerary(query: string): CityItinerary | null {
  const normalized = query
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');

  if (!normalized) return null;

  const directSlug = CITY_ALIASES[normalized];
  if (directSlug) {
    return BUILT_IN_ITINERARIES[directSlug];
  }

  // Handle "City, Country" style inputs gracefully
  const primaryToken = normalized.split(',')[0].trim();
  const fallbackSlug = CITY_ALIASES[primaryToken];
  if (fallbackSlug) {
    return BUILT_IN_ITINERARIES[fallbackSlug];
  }

  return null;
}
