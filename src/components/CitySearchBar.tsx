import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { AVAILABLE_CITIES, CityItinerary } from '../data/itineraries';

interface CitySearchBarProps {
  queryValue: string;
  activeSlug: CityItinerary['slug'] | null;
  validationMessage: string | null;
  onSubmitCity: (cityName: string) => void;
  onSelectBuiltInCity: (slug: CityItinerary['slug']) => void;
}

export const CitySearchBar: React.FC<CitySearchBarProps> = ({
  queryValue,
  activeSlug,
  validationMessage,
  onSubmitCity,
  onSelectBuiltInCity,
}) => {
  const [inputValue, setInputValue] = useState(queryValue);

  useEffect(() => {
    setInputValue(queryValue);
  }, [queryValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitCity(inputValue);
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <section aria-label="City itinerary search" className="no-print border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
              Offline Editorial Travel Planner
            </p>
            <h1 className="mt-2 font-serif text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              Generate a structured 3-day city itinerary
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl"
            role="search"
            aria-label="Search for a city itinerary"
          >
            <label htmlFor="city-input" className="sr-only">
              Enter city name
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400"
                  aria-hidden="true"
                />
                <input
                  id="city-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter a city (e.g., Rome, Paris, Tokyo, New York)"
                  autoComplete="off"
                  className="h-11 w-full rounded-lg border border-zinc-300 bg-white pr-10 pl-10 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-blue-800 focus:ring-2 focus:ring-blue-800/15 focus:outline-none"
                />
                {inputValue.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClear}
                    aria-label="Clear city input"
                    className="absolute top-1/2 right-2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:outline-none"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-900 px-5 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-800 focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span>Generate Plan</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {validationMessage && (
              <p role="alert" className="mt-2 text-xs font-medium text-amber-700">
                {validationMessage}
              </p>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-zinc-500">
              <span>Built-in editions:</span>
              {AVAILABLE_CITIES.map((item, idx) => {
                const isSelected = activeSlug === item.slug;
                return (
                  <React.Fragment key={item.slug}>
                    <button
                      type="button"
                      onClick={() => onSelectBuiltInCity(item.slug)}
                      className={`px-1.5 py-0.5 font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:outline-none ${
                        isSelected
                          ? 'text-blue-900 underline decoration-blue-900 decoration-2 underline-offset-4'
                          : 'text-zinc-700 hover:text-blue-900 hover:underline hover:underline-offset-4'
                      }`}
                    >
                      {item.city}
                    </button>
                    {idx < AVAILABLE_CITIES.length - 1 && (
                      <span aria-hidden="true" className="text-zinc-300">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
