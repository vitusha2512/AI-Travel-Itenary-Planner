import React, { useState } from 'react';
import { Check, MapPin, RotateCcw, Compass } from 'lucide-react';
import {
  AVAILABLE_CITIES,
  ActivityCategory,
  CityItinerary,
} from '../data/itineraries';

interface ItineraryViewProps {
  itinerary: CityItinerary | null;
  searchedCity: string;
  checkedIds: Record<string, boolean>;
  packedIds: Record<string, boolean>;
  onToggleActivity: (activityId: string) => void;
  onResetChecked: () => void;
  onTogglePackedItem: (itemId: string) => void;
  onResetPacked: () => void;
  onSelectBuiltInCity: (slug: CityItinerary['slug']) => void;
}

type DayFilter = 'all' | 1 | 2 | 3;
type CategoryFilter = 'All' | ActivityCategory;

export const ItineraryView: React.FC<ItineraryViewProps> = ({
  itinerary,
  searchedCity,
  checkedIds,
  packedIds,
  onToggleActivity,
  onResetChecked,
  onTogglePackedItem,
  onResetPacked,
  onSelectBuiltInCity,
}) => {
  const [dayFilter, setDayFilter] = useState<DayFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  if (!itinerary) {
    return (
      <section
        aria-label="Unsupported city notice"
        className="mx-auto max-w-4xl px-6 py-16 md:py-24"
      >
        <div className="border border-zinc-200 bg-white p-8 sm:p-12">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-zinc-500 uppercase">
            <Compass className="h-4 w-4 text-blue-900" aria-hidden="true" />
            <span>City Not Included Yet</span>
          </div>

          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-900">
            We don&apos;t have a built-in itinerary for &ldquo;{searchedCity}&rdquo; yet.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
            This planner runs completely offline without any API keys or external network requests,
            so it includes four deeply researched 3-day guides prepared in advance. Select any of
            the curated cities below to inspect its hour-by-hour schedule.
          </p>

          <div className="mt-8 border-t border-zinc-200 pt-8">
            <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
              Available 3-Day City Guides
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AVAILABLE_CITIES.map((cityItem) => (
                <button
                  key={cityItem.slug}
                  type="button"
                  onClick={() => onSelectBuiltInCity(cityItem.slug)}
                  className="group flex flex-col justify-between border border-zinc-200 bg-neutral-50 p-4 text-left transition-colors hover:border-blue-900 hover:bg-white focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none"
                >
                  <div>
                    <span className="text-xs text-zinc-500">{cityItem.country}</span>
                    <div className="mt-1 font-serif text-xl font-medium text-zinc-900 group-hover:text-blue-900">
                      {cityItem.city}
                    </div>
                  </div>
                  <div className="mt-4 text-xs font-medium text-blue-900">
                    Open 3-day schedule →
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const allActivities = itinerary.days.flatMap((d) => d.activities);
  const completedCount = allActivities.filter((a) => checkedIds[a.id]).length;
  const totalCount = allActivities.length;

  const visibleDays = itinerary.days.filter(
    (d) => dayFilter === 'all' || d.dayNumber === dayFilter
  );

  const imageFailed = failedImages[itinerary.slug] === true;

  return (
    <article className="mx-auto max-w-6xl px-6 py-10 md:py-12">
      {/* City Masthead */}
      <header className="grid grid-cols-1 items-stretch gap-8 border-b border-zinc-200 pb-10 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-between lg:col-span-7">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-widest text-zinc-500 uppercase">
              <span>{itinerary.country}</span>
              <span aria-hidden="true">·</span>
              <span>{itinerary.region}</span>
              <span aria-hidden="true">·</span>
              <span>3-Day Guide</span>
            </div>

            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
              {itinerary.city}
            </h2>

            <p className="mt-3 font-serif text-lg text-zinc-700 italic">
              {itinerary.tagline}
            </p>

            <p className="mt-4 max-w-prose text-sm leading-relaxed text-zinc-600 sm:text-base">
              {itinerary.overview}
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-zinc-200 pt-6 sm:grid-cols-4">
            <div>
              <dt className="text-xs text-zinc-500">Transit</dt>
              <dd className="mt-1 text-xs font-medium text-zinc-900">
                {itinerary.practicalInfo.transit}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Best Season</dt>
              <dd className="mt-1 text-xs font-medium text-zinc-900">
                {itinerary.practicalInfo.bestMonths}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Currency</dt>
              <dd className="mt-1 text-xs font-medium text-zinc-900">
                {itinerary.practicalInfo.currency}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Local Rhythm</dt>
              <dd className="mt-1 text-xs font-medium text-zinc-900">
                {itinerary.practicalInfo.localPace}
              </dd>
            </div>
          </dl>
        </div>

        <figure className="flex flex-col justify-between lg:col-span-5">
          <div className="relative aspect-16/9 w-full overflow-hidden border border-zinc-200 bg-zinc-100 lg:h-full lg:min-h-[260px]">
            {!imageFailed ? (
              <img
                src={itinerary.imageUrl}
                alt={`Editorial street and architectural view of ${itinerary.city}`}
                referrerPolicy="no-referrer"
                onError={() =>
                  setFailedImages((prev) => ({ ...prev, [itinerary.slug]: true }))
                }
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-100 via-neutral-100 to-zinc-200 p-6 text-center">
                <MapPin className="h-6 w-6 text-zinc-400" aria-hidden="true" />
                <span className="mt-2 font-serif text-lg font-medium text-zinc-700">
                  {itinerary.city}
                </span>
              </div>
            )}
          </div>
          <figcaption className="mt-2.5 font-serif text-xs text-zinc-500 italic">
            {itinerary.imageCaption}
          </figcaption>
        </figure>
      </header>

      {/* Filter & Progress Controls */}
      <div className="no-print flex flex-col gap-4 border-b border-zinc-200 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          {/* Day Filter Segmented Control */}
          <div
            role="group"
            aria-label="Filter by day"
            className="inline-flex items-center gap-1 rounded-lg bg-zinc-100 p-1"
          >
            {(['all', 1, 2, 3] as DayFilter[]).map((option) => {
              const isActive = dayFilter === option;
              const label = option === 'all' ? 'All 3 Days' : `Day ${option}`;
              return (
                <button
                  key={String(option)}
                  type="button"
                  onClick={() => setDayFilter(option)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none ${
                    isActive
                      ? 'bg-white text-zinc-900 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Category Filter Segmented Control */}
          <div
            role="group"
            aria-label="Filter by activity category"
            className="inline-flex items-center gap-1 rounded-lg bg-zinc-100 p-1"
          >
            {(['All', 'Culture', 'Dining', 'Walks'] as CategoryFilter[]).map((cat) => {
              const isActive = categoryFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategoryFilter(cat)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none ${
                    isActive
                      ? 'bg-white text-zinc-900 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Checklist Progress */}
        <div className="flex items-center gap-4 text-xs text-zinc-600">
          <span className="font-mono tabular-nums">
            {completedCount} / {totalCount} stops checked
          </span>
          {completedCount > 0 && (
            <button
              type="button"
              onClick={onResetChecked}
              className="inline-flex items-center gap-1.5 font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Structured Daily Schedules */}
      <div className="mt-10 space-y-14">
        {visibleDays.map((day) => {
          const filteredActivities = day.activities.filter(
            (act) => categoryFilter === 'All' || act.category === categoryFilter
          );

          return (
            <section
              key={day.dayNumber}
              aria-labelledby={`day-${day.dayNumber}-heading`}
              className="print-break-inside-avoid"
            >
              <div className="flex flex-col gap-2 pb-4 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                    <span className="font-mono font-medium text-blue-900 tabular-nums">
                      DAY 0{day.dayNumber}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{day.focusArea}</span>
                  </div>
                  <h3
                    id={`day-${day.dayNumber}-heading`}
                    className="mt-1 font-serif text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl"
                  >
                    {day.title}
                  </h3>
                </div>

                <div className="text-xs font-medium text-zinc-500 tabular-nums">
                  {day.walkingEstimate}
                </div>
              </div>

              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-zinc-600">
                {day.summary}
              </p>

              {filteredActivities.length === 0 ? (
                <div className="border-y border-zinc-200 py-8 text-sm text-zinc-500">
                  No {categoryFilter.toLowerCase()} activities scheduled for Day {day.dayNumber}.{' '}
                  <button
                    type="button"
                    onClick={() => setCategoryFilter('All')}
                    className="font-medium text-blue-900 underline underline-offset-4"
                  >
                    Show all activities
                  </button>
                  .
                </div>
              ) : (
                <ol className="divide-y divide-zinc-200 border-y border-zinc-200 bg-white">
                  {filteredActivities.map((activity) => {
                    const isChecked = Boolean(checkedIds[activity.id]);

                    return (
                      <li
                        key={activity.id}
                        className={`grid grid-cols-1 gap-4 px-4 py-5 transition-colors sm:grid-cols-12 sm:items-start sm:gap-6 sm:px-6 ${
                          isChecked ? 'bg-neutral-50/80' : 'hover:bg-neutral-50/50'
                        }`}
                      >
                        {/* Time & Period Column */}
                        <div className="flex items-baseline gap-3 sm:col-span-3 sm:flex-col sm:gap-0.5 md:col-span-2">
                          <span className="font-mono text-base font-medium text-zinc-900 tabular-nums">
                            {activity.time}
                          </span>
                          <span className="text-xs text-zinc-500">{activity.period}</span>
                        </div>

                        {/* Activity Details Column */}
                        <div className="sm:col-span-8 md:col-span-9">
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs text-zinc-500">
                            <span>{activity.neighborhood}</span>
                            <span aria-hidden="true">·</span>
                            <span className="tabular-nums">{activity.duration}</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-medium text-zinc-700">{activity.category}</span>
                          </div>

                          <h4
                            className={`mt-1 text-base font-semibold tracking-tight sm:text-lg ${
                              isChecked ? 'text-zinc-400 line-through' : 'text-zinc-900'
                            }`}
                          >
                            {activity.title}
                          </h4>

                          <p
                            className={`mt-1.5 max-w-prose text-sm leading-relaxed ${
                              isChecked ? 'text-zinc-400' : 'text-zinc-600'
                            }`}
                          >
                            {activity.description}
                          </p>

                          <p className="mt-2.5 text-xs leading-relaxed text-zinc-500">
                            <span className="font-medium text-zinc-700">Practical note: </span>
                            {activity.tip}
                          </p>
                        </div>

                        {/* Interactive Check-Off Action */}
                        <div className="no-print flex justify-start sm:col-span-1 sm:justify-end">
                          <button
                            type="button"
                            onClick={() => onToggleActivity(activity.id)}
                            aria-pressed={isChecked}
                            aria-label={
                              isChecked
                                ? `Mark ${activity.title} as not visited`
                                : `Mark ${activity.title} as visited`
                            }
                            className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none ${
                              isChecked
                                ? 'border-blue-900 bg-blue-900 text-white'
                                : 'border-zinc-300 bg-white text-zinc-400 hover:border-zinc-400 hover:text-zinc-700'
                            }`}
                          >
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
            </section>
          );
        })}
      </div>

      {/* Suggested Packing List */}
      <section
        aria-labelledby="packing-list-heading"
        className="print-break-inside-avoid mt-16 border-t border-zinc-200 pt-12"
      >
        <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="font-mono font-medium text-blue-900 tabular-nums">
                5 ESSENTIALS
              </span>
              <span aria-hidden="true">·</span>
              <span>Tailored for {itinerary.city}</span>
            </div>
            <h3
              id="packing-list-heading"
              className="mt-1 font-serif text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl"
            >
              Suggested Packing List
            </h3>
          </div>

          <div className="no-print flex items-center gap-4 text-xs text-zinc-600">
            <span className="font-mono tabular-nums">
              {itinerary.packingList.filter((item) => packedIds[item.id]).length} /{' '}
              {itinerary.packingList.length} packed
            </span>
            {itinerary.packingList.some((item) => packedIds[item.id]) && (
              <button
                type="button"
                onClick={onResetPacked}
                className="inline-flex items-center gap-1.5 font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        <ol className="divide-y divide-zinc-200 border-y border-zinc-200 bg-white">
          {itinerary.packingList.map((entry, idx) => {
            const isPacked = Boolean(packedIds[entry.id]);

            return (
              <li
                key={entry.id}
                className={`grid grid-cols-1 gap-4 px-4 py-4 transition-colors sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-6 ${
                  isPacked ? 'bg-neutral-50/80' : 'hover:bg-neutral-50/50'
                }`}
              >
                <div className="flex items-baseline gap-3 sm:col-span-3 md:col-span-2">
                  <span className="font-mono text-sm font-medium text-zinc-500 tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-medium text-zinc-600">{entry.category}</span>
                </div>

                <div className="sm:col-span-8 md:col-span-9">
                  <h4
                    className={`text-sm font-semibold tracking-tight sm:text-base ${
                      isPacked ? 'text-zinc-400 line-through' : 'text-zinc-900'
                    }`}
                  >
                    {entry.item}
                  </h4>
                  <p
                    className={`mt-1 max-w-prose text-sm leading-relaxed ${
                      isPacked ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                  >
                    {entry.reason}
                  </p>
                </div>

                <div className="no-print flex justify-start sm:col-span-1 sm:justify-end">
                  <button
                    type="button"
                    onClick={() => onTogglePackedItem(entry.id)}
                    aria-pressed={isPacked}
                    aria-label={
                      isPacked
                        ? `Unmark ${entry.item} as packed`
                        : `Mark ${entry.item} as packed`
                    }
                    className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none ${
                      isPacked
                        ? 'border-blue-900 bg-blue-900 text-white'
                        : 'border-zinc-300 bg-white text-zinc-400 hover:border-zinc-400 hover:text-zinc-700'
                    }`}
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </article>
  );
};
