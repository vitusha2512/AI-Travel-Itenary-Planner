import { useState } from 'react';
import { Printer } from 'lucide-react';
import {
  AVAILABLE_CITIES,
  BUILT_IN_ITINERARIES,
  CityItinerary,
  findCityItinerary,
} from './data/itineraries';
import { CitySearchBar } from './components/CitySearchBar';
import { ItineraryView } from './components/ItineraryView';

export default function App() {
  const [queryValue, setQueryValue] = useState<string>('Rome');
  const [activeItinerary, setActiveItinerary] = useState<CityItinerary | null>(
    BUILT_IN_ITINERARIES.rome
  );
  const [unsupportedCityName, setUnsupportedCityName] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});
  const [packedIds, setPackedIds] = useState<Record<string, boolean>>({});

  const handleSubmitCity = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) {
      setValidationMessage('Please enter a city name or choose one of the built-in guides.');
      return;
    }

    setValidationMessage(null);
    const matched = findCityItinerary(trimmed);
    if (matched) {
      setActiveItinerary(matched);
      setQueryValue(matched.city);
      setUnsupportedCityName('');
    } else {
      setActiveItinerary(null);
      setQueryValue(trimmed);
      setUnsupportedCityName(trimmed);
    }
  };

  const handleSelectBuiltInCity = (slug: CityItinerary['slug']) => {
    const city = BUILT_IN_ITINERARIES[slug];
    setValidationMessage(null);
    setActiveItinerary(city);
    setQueryValue(city.city);
    setUnsupportedCityName('');
  };

  const handleToggleActivity = (activityId: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [activityId]: !prev[activityId],
    }));
  };

  const handleResetChecked = () => {
    setCheckedIds({});
  };

  const handleTogglePackedItem = (itemId: string) => {
    setPackedIds((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleResetPacked = () => {
    setPackedIds({});
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-zinc-900">
      {/* Three-Zone Top Bar */}
      <header className="no-print border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
          {/* Zone 1: Single-line Wordmark */}
          <button
            type="button"
            onClick={() => handleSelectBuiltInCity('rome')}
            className="font-serif text-xl font-medium tracking-tight whitespace-nowrap shrink-0 text-zinc-900 focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none"
          >
            Three Days In
          </button>

          {/* Zone 2: Concise City Navigation Links */}
          <nav
            aria-label="Featured cities"
            className="hidden items-center gap-6 text-sm font-medium md:flex"
          >
            {AVAILABLE_CITIES.map((cityItem) => {
              const isCurrent = activeItinerary?.slug === cityItem.slug;
              return (
                <button
                  key={cityItem.slug}
                  type="button"
                  onClick={() => handleSelectBuiltInCity(cityItem.slug)}
                  className={`whitespace-nowrap shrink-0 transition-colors focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none ${
                    isCurrent
                      ? 'text-blue-900 underline decoration-blue-900 decoration-2 underline-offset-8'
                      : 'text-zinc-600 hover:text-zinc-900 hover:underline hover:underline-offset-8'
                  }`}
                >
                  {cityItem.city}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handlePrint}
              disabled={!activeItinerary}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 text-zinc-900 transition-colors hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Print Plan</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <CitySearchBar
          queryValue={queryValue}
          activeSlug={activeItinerary?.slug ?? null}
          validationMessage={validationMessage}
          onSubmitCity={handleSubmitCity}
          onSelectBuiltInCity={handleSelectBuiltInCity}
        />

        <ItineraryView
          key={activeItinerary?.slug ?? 'unsupported'}
          itinerary={activeItinerary}
          searchedCity={unsupportedCityName}
          checkedIds={checkedIds}
          packedIds={packedIds}
          onToggleActivity={handleToggleActivity}
          onResetChecked={handleResetChecked}
          onTogglePackedItem={handleTogglePackedItem}
          onResetPacked={handleResetPacked}
          onSelectBuiltInCity={handleSelectBuiltInCity}
        />
      </main>

      <footer className="no-print border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Three Days In · Built-in 3-day travel guides for Rome, Paris, Tokyo, and New York.</p>
          <p>Self-contained offline edition — no API keys or external requests required.</p>
        </div>
      </footer>
    </div>
  );
}
