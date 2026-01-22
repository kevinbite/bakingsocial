'use client';

import { useState, useMemo } from 'react';

interface ClassSession {
  id: string;
  name: string;
  time: string;
  price: number;
  spotsLeft: number;
}

interface DaySchedule {
  date: Date;
  dayName: string;
  dayNumber: number;
  month: string;
  classes: ClassSession[];
}

const seededRandom = (seed: number): number => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const getSpots = (weekIndex: number, dayIndex: number, classIndex: number): number => {
  const seed = weekIndex * 1000 + dayIndex * 100 + classIndex * 10;
  return Math.floor(seededRandom(seed) * 12) + 2;
};

const generateSchedule = (weekOffset: number): DaySchedule[] => {
  const schedule: DaySchedule[] = [];
  const baseDate = new Date(2025, 11, 17);
  baseDate.setDate(baseDate.getDate() - baseDate.getDay() + (weekOffset * 7));

  const classNames = [
    ['Bread Class', 'Stuffed Bread or Pretzels', 'Seasonal or Banana Bread'],
    ['Senior Baking Class', 'Cast Iron Pizza', 'Chocolate Chip'],
    ['Bread Class', 'Eclairs or Seasonal', 'Focaccia Pizza'],
    ['Bread Class or Lunch & Learn', 'Buttermilk Biscuits', 'Cookie Decorating or Seasonal', 'NY Style Chocolate Chip', 'Late Night Baking'],
    ['Cinnamon Roll or Breakfast', 'Kids Class', 'Seasonal Baking', 'Stuffed Bread', 'Seasonal Cookie'],
    ['Cinnamon Roll or Breakfast', 'Bread Class', 'Cake Decorating', 'Seasonal Baking'],
  ];

  const dayNames = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const times = [
    ['10:30 AM', '5:00 PM', '8:00 PM'],
    ['10:30 AM', '5:00 PM', '8:00 PM'],
    ['10:30 AM', '5:00 PM', '8:00 PM'],
    ['10:30 AM', '3:00 PM', '5:30 PM', '8:00 PM', '10:30 PM'],
    ['9:30 AM', '1:00 PM', '3:30 PM', '6:30 PM', '9:30 PM'],
    ['9:30 AM', '1:00 PM', '4:30 PM', '7:00 PM'],
  ];
  const prices = [125, 125, 125, 125, 125, 125];

  for (let i = 0; i < 6; i++) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + i + 2);
    
    schedule.push({
      date,
      dayName: dayNames[i],
      dayNumber: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      classes: classNames[i].map((name, j) => ({
        id: `${weekOffset}-${i}-${j}`,
        name,
        time: times[i][j],
        price: prices[j % prices.length],
        spotsLeft: getSpots(weekOffset, i, j),
      })),
    });
  }

  return schedule;
};

export function ScheduleSection() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedClass, setSelectedClass] = useState<{ class: ClassSession; day: DaySchedule } | null>(null);

  const schedule = useMemo(() => generateSchedule(weekOffset), [weekOffset]);

  const weekRange = useMemo(() => {
    const start = schedule[0];
    const end = schedule[schedule.length - 1];
    if (start.month === end.month) {
      return `${start.month} ${start.dayNumber} – ${end.dayNumber}`;
    }
    return `${start.month} ${start.dayNumber} – ${end.month} ${end.dayNumber}`;
  }, [schedule]);

  const currentDate = new Date(2025, 11, 17);
  const isToday = (date: Date) => date.toDateString() === currentDate.toDateString();

  return (
    <section id="schedule" className="relative bg-tbs-noir py-16 sm:py-24 lg:py-32 xl:py-40">
      <div className="relative z-10 px-5 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
            <div>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-tbs-gold mb-3 sm:mb-4 block">
                Class Schedule
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-tbs-ivory leading-[1.1]">
                Reserve your
                <br />
                <span className="italic text-tbs-champagne">seat at the table</span>
              </h2>
            </div>

            {/* Week Navigation */}
            <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6">
              <button
                onClick={() => setWeekOffset((w) => w - 1)}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-tbs-gold/30 text-tbs-champagne hover:border-tbs-gold hover:text-tbs-gold transition-colors"
                aria-label="Previous week"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="font-display text-base sm:text-lg lg:text-xl text-tbs-ivory min-w-[120px] sm:min-w-[160px] text-center">
                {weekRange}
              </span>
              <button
                onClick={() => setWeekOffset((w) => w + 1)}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-tbs-gold/30 text-tbs-champagne hover:border-tbs-gold hover:text-tbs-gold transition-colors"
                aria-label="Next week"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Schedule Grid - Horizontal scroll on mobile */}
          <div className="-mx-5 sm:mx-0">
            <div className="flex gap-3 sm:gap-4 overflow-x-auto px-5 sm:px-0 pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 sm:overflow-visible sm:pb-0">
              {schedule.map((day) => (
                <div
                  key={day.dayName}
                  className={`flex-shrink-0 w-[200px] sm:w-auto snap-start p-4 sm:p-5 transition-all ${
                    isToday(day.date)
                      ? 'bg-tbs-gold/10 border border-tbs-gold/30'
                      : 'bg-tbs-noir border border-tbs-champagne/10 hover:border-tbs-champagne/20'
                  }`}
                >
                  {/* Day Header */}
                  <div className="text-center mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-tbs-champagne/10">
                    <p className={`text-[9px] sm:text-[10px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase ${
                      isToday(day.date) ? 'text-tbs-gold' : 'text-tbs-stone'
                    }`}>
                      {day.dayName}
                    </p>
                    <p className={`font-display text-2xl sm:text-3xl mt-1 ${
                      isToday(day.date) ? 'text-tbs-gold' : 'text-tbs-ivory'
                    }`}>
                      {day.dayNumber}
                    </p>
                    {isToday(day.date) && (
                      <span className="text-[8px] sm:text-[9px] tracking-[0.1em] sm:tracking-[0.15em] uppercase text-tbs-gold mt-1 block">
                        Today
                      </span>
                    )}
                  </div>

                  {/* Classes */}
                  <div className="space-y-2">
                    {day.classes.map((cls) => (
                      <button
                        key={cls.id}
                        onClick={() => setSelectedClass({ class: cls, day })}
                        disabled={cls.spotsLeft === 0}
                        className={`w-full p-2.5 sm:p-3 text-left transition-all ${
                          cls.spotsLeft === 0
                            ? 'opacity-40 cursor-not-allowed'
                            : 'hover:bg-tbs-champagne/5 active:bg-tbs-champagne/10'
                        }`}
                      >
                        <p className="text-[9px] sm:text-[10px] text-tbs-stone tracking-wider uppercase">
                          {cls.time}
                        </p>
                        <p className="text-xs sm:text-sm text-tbs-ivory mt-0.5 font-medium">
                          {cls.name}
                        </p>
                        <div className="flex items-center justify-between mt-1.5 sm:mt-2">
                          <span className="text-xs sm:text-sm text-tbs-champagne">${cls.price}</span>
                          <span className={`text-[9px] sm:text-[10px] tracking-wider ${
                            cls.spotsLeft === 0 ? 'text-tbs-stone' :
                            cls.spotsLeft <= 3 ? 'text-tbs-rose' :
                            'text-tbs-emerald'
                          }`}>
                            {cls.spotsLeft === 0 ? 'FULL' : `${cls.spotsLeft} left`}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-[10px] sm:text-xs text-tbs-stone">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-tbs-emerald" />
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-tbs-rose" />
              <span>Limited</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-tbs-noir/90 backdrop-blur-sm" onClick={() => setSelectedClass(null)} />
          <div className="relative w-full sm:max-w-md bg-tbs-noir border-t sm:border border-tbs-gold/20 p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-tbs-stone hover:text-tbs-ivory"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-tbs-gold">
              {selectedClass.day.dayName}, {selectedClass.day.month} {selectedClass.day.dayNumber}
            </span>
            <h3 className="font-display text-xl sm:text-2xl text-tbs-ivory mt-2">
              {selectedClass.class.name}
            </h3>
            <p className="text-tbs-stone text-sm mt-1">{selectedClass.class.time}</p>

            <div className="mt-6 pt-6 border-t border-tbs-champagne/10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-tbs-stone text-sm">Price per person</span>
                <span className="font-display text-xl sm:text-2xl text-tbs-ivory">${selectedClass.class.price}</span>
              </div>
              <button className="btn-filled w-full">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
