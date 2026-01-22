'use client';

import { useState, useMemo } from 'react';

// Types
interface ClassSession {
  id: string;
  name: string;
  time: string;
  duration: string;
  price: number;
  spotsLeft: number;
  maxSpots: number;
  description: string;
  includes: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'All Levels';
}

interface DaySchedule {
  date: Date;
  dayName: string;
  dayNumber: number;
  classes: ClassSession[];
}

const generateId = (prefix: string, index: number) => `${prefix}-${index}`;

// Rotating class variations
const puddingVariations = ['Banana Pudding', 'Tiramisu'];
const wednesdayDessertVariations = ['Cupcake Baking', 'Brownie Baking'];
const decoratingVariations = ['Cookie Decorating', 'Cake Decorating', 'Buttercream Piping'];
const pieVariations = ['Apple Crumble Pie', 'Pecan Bourbon Pie', 'Pumpkin Spice Pie', 'Cherry Lattice Pie', 'Key Lime Pie'];
const saturdayCookieVariations = ['Chocolate Chip Cookies', 'Brown Butter Chocolate Chip', 'Snickerdoodle Cookies'];
const sundayDecoratingVariations = ['Cake Decorating', 'Buttercream Decorating'];
const seasonalDessertVariations = ['Holiday Sugar Cookies', 'Tres Leches Cake', 'Lemon Bars', 'Viral Biscoff Cake', 'Red Velvet Cupcakes'];
const seasonalCakeVariations = ['Carrot Cake', 'Strawberry Cake', 'Lemon Cake', 'Red Velvet Cake'];

const classTemplates: Record<string, Omit<ClassSession, 'id' | 'name' | 'time' | 'spotsLeft'>> = {
  'Artisan Bread': { duration: '2.5 hours', price: 125, maxSpots: 16, description: 'Master the art of artisan bread making with time-honored techniques.', includes: ['All ingredients', '2 loaves', 'Bread bag', 'Recipe'], difficulty: 'Intermediate' },
  'Pizza': { duration: '2 hours', price: 100, maxSpots: 16, description: 'Craft authentic pizza from scratch in our wood-fired tradition.', includes: ['All ingredients', 'Personal pizza', 'Dough', 'Wine/beer'], difficulty: 'All Levels' },
  'Chocolate Chip Cookie': { duration: '2 hours', price: 100, maxSpots: 20, description: 'Perfect the classic chocolate chip cookie with our refined recipe.', includes: ['All ingredients', '24 cookies', 'Dough', 'Recipe'], difficulty: 'Beginner' },
  'Focaccia Bread': { duration: '2.5 hours', price: 125, maxSpots: 18, description: 'Create stunning focaccia with artful vegetable arrangements.', includes: ['All ingredients', '2 loaves', 'Olive oil', 'Recipe'], difficulty: 'All Levels' },
  'Banana Pudding': { duration: '1.5 hours', price: 75, maxSpots: 20, description: 'Classic Southern banana pudding made from scratch.', includes: ['All ingredients', 'Full pudding', 'Container', 'Recipe'], difficulty: 'Beginner' },
  'Tiramisu': { duration: '1.5 hours', price: 75, maxSpots: 18, description: 'Authentic Italian tiramisu with the finest espresso.', includes: ['All ingredients', 'Full tiramisu', 'Container', 'Recipe'], difficulty: 'Beginner' },
  'Cupcake Baking': { duration: '2 hours', price: 100, maxSpots: 18, description: 'Bake and elegantly decorate gourmet cupcakes.', includes: ['All ingredients', '12 cupcakes', 'Box', 'Guide'], difficulty: 'Beginner' },
  'Brownie Baking': { duration: '2 hours', price: 100, maxSpots: 20, description: 'Rich, fudgy brownies with artisan chocolate.', includes: ['All ingredients', '12 brownies', 'Packaging', 'Recipe'], difficulty: 'Beginner' },
  'Cookie Decorating': { duration: '1.5 hours', price: 75, maxSpots: 20, description: 'Learn royal icing techniques for exquisite cookie art.', includes: ['All ingredients', '6 cookies', 'Supplies', 'Recipes'], difficulty: 'Beginner' },
  'Cake Decorating': { duration: '1.5 hours', price: 75, maxSpots: 16, description: 'Transform cakes with professional decorating skills.', includes: ['Pre-baked layers', 'Supplies', 'Cake box', 'Guide'], difficulty: 'Beginner' },
  'Buttercream Piping': { duration: '1.5 hours', price: 75, maxSpots: 16, description: 'Master buttercream roses and elegant piping designs.', includes: ['Buttercream', 'Piping tips', 'Practice boards', 'Guide'], difficulty: 'Intermediate' },
  'Chocolate Ganache Cake': { duration: '2 hours', price: 100, maxSpots: 14, description: 'Create a showstopping chocolate ganache layer cake.', includes: ['All ingredients', 'Full cake', 'Cake box', 'Booklet'], difficulty: 'Intermediate' },
  'Seasonal Cake': { duration: '2 hours', price: 100, maxSpots: 16, description: 'This season\'s featured cake with elegant presentation.', includes: ['All ingredients', 'Full cake', 'Cake box', 'Recipe'], difficulty: 'All Levels' },
  'Cinnamon Rolls': { duration: '2.5 hours', price: 125, maxSpots: 18, description: 'Fluffy cinnamon rolls with cream cheese frosting.', includes: ['All ingredients', '6 rolls', 'Frosting', 'Recipe'], difficulty: 'All Levels' },
  'Bread Baking': { duration: '2.5 hours', price: 125, maxSpots: 16, description: 'Classic bread baking with traditional techniques.', includes: ['All ingredients', '2 loaves', 'Bread bag', 'Recipes'], difficulty: 'Intermediate' },
  'Seasonal Dessert': { duration: '2 hours', price: 100, maxSpots: 18, description: 'This season\'s signature dessert creation.', includes: ['All ingredients', 'Full dessert', 'Packaging', 'Recipe'], difficulty: 'All Levels' },
};

const seededRandom = (seed: number): number => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const getSpots = (weekIndex: number, dayIndex: number, classIndex: number, min: number, range: number): number => {
  const seed = weekIndex * 1000 + dayIndex * 100 + classIndex * 10;
  return Math.floor(seededRandom(seed) * range) + min;
};

const generateWeekSchedule = (weekStartDate: Date, weekIndex: number): DaySchedule[] => {
  const schedule: DaySchedule[] = [];
  const absWeek = Math.abs(weekIndex);
  const weekKey = `w${weekIndex}`;

  const puddingClass = puddingVariations[absWeek % puddingVariations.length];
  const wednesdayDessert = wednesdayDessertVariations[absWeek % wednesdayDessertVariations.length];
  const decoratingClass = decoratingVariations[absWeek % decoratingVariations.length];
  const pieClass = pieVariations[absWeek % pieVariations.length];
  const saturdayCookie = saturdayCookieVariations[absWeek % saturdayCookieVariations.length];
  const sundayDecorating = sundayDecoratingVariations[absWeek % sundayDecoratingVariations.length];
  const seasonalDessert = seasonalDessertVariations[absWeek % seasonalDessertVariations.length];
  const seasonalCake = seasonalCakeVariations[absWeek % seasonalCakeVariations.length];

  const tue = new Date(weekStartDate); tue.setDate(tue.getDate() + 2);
  schedule.push({ date: tue, dayName: 'Tuesday', dayNumber: tue.getDate(), classes: [
    { id: generateId(`${weekKey}-tue`, 0), name: 'Artisan Bread', time: '11:00 AM', spotsLeft: getSpots(weekIndex, 0, 0, 3, 10), ...classTemplates['Artisan Bread'] },
    { id: generateId(`${weekKey}-tue`, 1), name: 'Pizza Class', time: '5:00 PM', spotsLeft: getSpots(weekIndex, 0, 1, 2, 8), ...classTemplates['Pizza'] },
    { id: generateId(`${weekKey}-tue`, 2), name: 'Cookie Class', time: '8:00 PM', spotsLeft: getSpots(weekIndex, 0, 2, 1, 10), ...classTemplates['Chocolate Chip Cookie'] },
  ]});

  const wed = new Date(weekStartDate); wed.setDate(wed.getDate() + 3);
  schedule.push({ date: wed, dayName: 'Wednesday', dayNumber: wed.getDate(), classes: [
    { id: generateId(`${weekKey}-wed`, 0), name: 'Focaccia Bread', time: '11:00 AM', spotsLeft: getSpots(weekIndex, 1, 0, 3, 10), ...classTemplates['Focaccia Bread'] },
    { id: generateId(`${weekKey}-wed`, 1), name: puddingClass, time: '5:00 PM', spotsLeft: getSpots(weekIndex, 1, 1, 4, 12), ...(puddingClass === 'Banana Pudding' ? classTemplates['Banana Pudding'] : classTemplates['Tiramisu']) },
    { id: generateId(`${weekKey}-wed`, 2), name: wednesdayDessert, time: '7:30 PM', spotsLeft: getSpots(weekIndex, 1, 2, 2, 10), ...(wednesdayDessert === 'Cupcake Baking' ? classTemplates['Cupcake Baking'] : classTemplates['Brownie Baking']) },
  ]});

  const thu = new Date(weekStartDate); thu.setDate(thu.getDate() + 4);
  schedule.push({ date: thu, dayName: 'Thursday', dayNumber: thu.getDate(), classes: [
    { id: generateId(`${weekKey}-thu`, 0), name: decoratingClass, time: '11:00 AM', spotsLeft: getSpots(weekIndex, 2, 0, 4, 10), ...(decoratingClass === 'Cookie Decorating' ? classTemplates['Cookie Decorating'] : decoratingClass === 'Cake Decorating' ? classTemplates['Cake Decorating'] : classTemplates['Buttercream Piping']) },
    { id: generateId(`${weekKey}-thu`, 1), name: 'Cookie Class', time: '5:00 PM', spotsLeft: getSpots(weekIndex, 2, 1, 3, 12), ...classTemplates['Chocolate Chip Cookie'] },
    { id: generateId(`${weekKey}-thu`, 2), name: 'Ganache Cake', time: '8:00 PM', spotsLeft: getSpots(weekIndex, 2, 2, 2, 8), ...classTemplates['Chocolate Ganache Cake'] },
  ]});

  const fri = new Date(weekStartDate); fri.setDate(fri.getDate() + 5);
  schedule.push({ date: fri, dayName: 'Friday', dayNumber: fri.getDate(), classes: [
    { id: generateId(`${weekKey}-fri`, 0), name: 'Pizza Class', time: '11:00 AM', spotsLeft: getSpots(weekIndex, 3, 0, 2, 8), ...classTemplates['Pizza'] },
    { id: generateId(`${weekKey}-fri`, 1), name: `${seasonalCake}`, time: '5:00 PM', spotsLeft: getSpots(weekIndex, 3, 1, 3, 10), ...classTemplates['Seasonal Cake'] },
    { id: generateId(`${weekKey}-fri`, 2), name: pieClass, time: '8:00 PM', spotsLeft: getSpots(weekIndex, 3, 2, 2, 6), duration: '2.5 hours', price: 125, maxSpots: 14, description: `${pieClass} with flaky, buttery crust.`, includes: ['All ingredients', 'Full pie', 'Pie box', 'Recipe'], difficulty: 'Intermediate' },
  ]});

  const sat = new Date(weekStartDate); sat.setDate(sat.getDate() + 6);
  schedule.push({ date: sat, dayName: 'Saturday', dayNumber: sat.getDate(), classes: [
    { id: generateId(`${weekKey}-sat`, 0), name: 'Cinnamon Rolls', time: '9:00 AM', spotsLeft: getSpots(weekIndex, 4, 0, 2, 10), ...classTemplates['Cinnamon Rolls'] },
    { id: generateId(`${weekKey}-sat`, 1), name: 'Cookie Decorating', time: '12:30 PM', spotsLeft: getSpots(weekIndex, 4, 1, 4, 12), ...classTemplates['Cookie Decorating'] },
    { id: generateId(`${weekKey}-sat`, 2), name: 'Buttercream Piping', time: '3:00 PM', spotsLeft: getSpots(weekIndex, 4, 2, 3, 10), ...classTemplates['Buttercream Piping'] },
    { id: generateId(`${weekKey}-sat`, 3), name: 'Pizza Class', time: '5:30 PM', spotsLeft: getSpots(weekIndex, 4, 3, 1, 6), ...classTemplates['Pizza'] },
    { id: generateId(`${weekKey}-sat`, 4), name: saturdayCookie, time: '8:30 PM', spotsLeft: getSpots(weekIndex, 4, 4, 2, 8), ...classTemplates['Chocolate Chip Cookie'] },
  ]});

  const sun = new Date(weekStartDate); sun.setDate(sun.getDate() + 7);
  schedule.push({ date: sun, dayName: 'Sunday', dayNumber: sun.getDate(), classes: [
    { id: generateId(`${weekKey}-sun`, 0), name: 'Cinnamon Rolls', time: '9:00 AM', spotsLeft: getSpots(weekIndex, 5, 0, 4, 10), ...classTemplates['Cinnamon Rolls'] },
    { id: generateId(`${weekKey}-sun`, 1), name: sundayDecorating, time: '12:30 PM', spotsLeft: getSpots(weekIndex, 5, 1, 3, 10), ...(sundayDecorating === 'Cake Decorating' ? classTemplates['Cake Decorating'] : classTemplates['Buttercream Piping']) },
    { id: generateId(`${weekKey}-sun`, 2), name: 'Bread Baking', time: '3:00 PM', spotsLeft: getSpots(weekIndex, 5, 2, 2, 8), ...classTemplates['Bread Baking'] },
    { id: generateId(`${weekKey}-sun`, 3), name: seasonalDessert, time: '6:30 PM', spotsLeft: getSpots(weekIndex, 5, 3, 3, 10), ...classTemplates['Seasonal Dessert'] },
  ]});

  return schedule;
};

// Modal Component - Luxury Styling
function ClassModal({ classSession, selectedDate, onClose }: { classSession: ClassSession; selectedDate: Date; onClose: () => void; }) {
  const [guestCount, setGuestCount] = useState(1);
  const maxGuests = Math.min(classSession.spotsLeft, 10);
  const formattedDate = selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-tbs-charcoal/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-lg overflow-hidden bg-tbs-ivory">
        {/* Decorative top border */}
        <div className="h-px bg-gradient-to-r from-transparent via-tbs-gold to-transparent" />
        
        {/* Header */}
        <div className="bg-tbs-burgundy px-6 py-6 text-tbs-cream relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-tbs-cream/60 hover:text-tbs-cream transition-colors">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-tbs-gold">{classSession.difficulty}</span>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-wide">{classSession.name}</h3>
          <p className="mt-2 text-sm text-tbs-cream/70">{formattedDate} at {classSession.time}</p>
        </div>

        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="border border-tbs-taupe/30 px-4 py-1.5 text-xs tracking-wider text-tbs-taupe">{classSession.duration}</span>
            <span className={`px-4 py-1.5 text-xs tracking-wider ${classSession.spotsLeft <= 3 ? 'bg-tbs-burgundy/10 text-tbs-burgundy' : 'bg-tbs-navy/10 text-tbs-navy'}`}>
              {classSession.spotsLeft} spots remaining
            </span>
          </div>

          <p className="mt-5 text-sm text-tbs-taupe leading-relaxed">{classSession.description}</p>

          {/* What's Included */}
          <div className="mt-6">
            <h4 className="text-xs uppercase tracking-[0.15em] text-tbs-charcoal font-medium mb-3">What&apos;s Included</h4>
            <ul className="grid grid-cols-2 gap-2">
              {classSession.includes.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-tbs-taupe">
                  <span className="text-tbs-gold">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Guest selector */}
          <div className="mt-6 flex items-center justify-between border border-tbs-gold/20 bg-tbs-cream p-4">
            <div>
              <p className="text-sm font-medium text-tbs-charcoal">Number of Guests</p>
              <p className="text-xs text-tbs-taupe">${classSession.price} per guest</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))} 
                disabled={guestCount <= 1} 
                className="flex h-10 w-10 items-center justify-center border border-tbs-charcoal/20 text-tbs-charcoal transition-colors hover:border-tbs-burgundy hover:text-tbs-burgundy disabled:opacity-40"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>
              </button>
              <span className="w-8 text-center text-lg font-display font-medium text-tbs-charcoal">{guestCount}</span>
              <button 
                onClick={() => setGuestCount(Math.min(maxGuests, guestCount + 1))} 
                disabled={guestCount >= maxGuests} 
                className="flex h-10 w-10 items-center justify-center border border-tbs-charcoal/20 text-tbs-charcoal transition-colors hover:border-tbs-burgundy hover:text-tbs-burgundy disabled:opacity-40"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Total & Book */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-tbs-taupe uppercase tracking-wider">Total</p>
              <p className="text-2xl font-display font-semibold text-tbs-charcoal">${classSession.price * guestCount}</p>
            </div>
            <button className="btn-luxury">
              <span>Reserve Now</span>
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Decorative bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-tbs-gold to-transparent" />
      </div>
    </div>
  );
}

export function SchedulePreview() {
  const currentDate = useMemo(() => new Date(2025, 11, 17), []);
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedClass, setSelectedClass] = useState<{ session: ClassSession; date: Date } | null>(null);

  const weekStart = useMemo(() => {
    const start = new Date(currentDate);
    start.setDate(start.getDate() - start.getDay() + (weekOffset * 7));
    return start;
  }, [currentDate, weekOffset]);

  const weekSchedule = useMemo(() => generateWeekSchedule(weekStart, weekOffset), [weekStart, weekOffset]);

  const weekRangeText = useMemo(() => {
    const endDate = new Date(weekStart);
    endDate.setDate(endDate.getDate() + 6);
    const startMonth = weekStart.toLocaleDateString('en-US', { month: 'long' });
    const endMonth = endDate.toLocaleDateString('en-US', { month: 'long' });
    if (startMonth === endMonth) return `${startMonth} ${weekStart.getDate()} – ${endDate.getDate()}, ${weekStart.getFullYear()}`;
    return `${startMonth} ${weekStart.getDate()} – ${endMonth} ${endDate.getDate()}`;
  }, [weekStart]);

  const isToday = (date: Date) => date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear();

  return (
    <section id="schedule" className="relative overflow-hidden bg-tbs-cream py-20 sm:py-28 lg:py-36">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-art-deco opacity-20" />
      
      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tbs-gold/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-8 text-center sm:mb-16 lg:flex-row lg:justify-between lg:text-left">
          <div>
            {/* Decorative Element */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <span className="h-px w-8 bg-tbs-gold/50" />
              <span className="text-tbs-gold text-xs">✦</span>
              <span className="h-px w-8 bg-tbs-gold/50" />
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-tbs-charcoal sm:text-4xl lg:text-5xl">
              Class Schedule
            </h2>
            <p className="mt-3 text-base text-tbs-taupe">Reserve your place at the table</p>
          </div>

          {/* Week Navigation - Elegant */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setWeekOffset(w => w - 1)} 
              className="flex h-12 w-12 items-center justify-center border border-tbs-charcoal/20 text-tbs-charcoal transition-all hover:border-tbs-burgundy hover:text-tbs-burgundy"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="min-w-[200px] text-center font-display text-lg text-tbs-charcoal">{weekRangeText}</span>
            <button 
              onClick={() => setWeekOffset(w => w + 1)} 
              className="flex h-12 w-12 items-center justify-center border border-tbs-charcoal/20 text-tbs-charcoal transition-all hover:border-tbs-burgundy hover:text-tbs-burgundy"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Schedule Grid - Horizontal scroll on mobile */}
        <div className="-mx-6 px-6 sm:mx-0 sm:px-0">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-6">
            {weekSchedule.map((day) => (
              <div 
                key={day.dayName} 
                className={`flex-shrink-0 w-[260px] snap-start bg-tbs-ivory sm:w-auto transition-shadow ${
                  isToday(day.date) 
                    ? 'ring-1 ring-tbs-gold shadow-lg' 
                    : 'border border-tbs-gold/10'
                }`}
              >
                {/* Day Header */}
                <div className="border-b border-tbs-gold/10 p-4 text-center">
                  <p className={`text-[10px] font-medium tracking-[0.2em] uppercase ${isToday(day.date) ? 'text-tbs-gold' : 'text-tbs-taupe'}`}>
                    {day.dayName}
                  </p>
                  <span className={`mt-1 inline-block font-display text-3xl font-light ${isToday(day.date) ? 'text-tbs-burgundy' : 'text-tbs-charcoal'}`}>
                    {day.dayNumber}
                  </span>
                  {isToday(day.date) && (
                    <span className="mt-1 block text-[9px] font-medium tracking-[0.15em] uppercase text-tbs-gold">Today</span>
                  )}
                </div>

                {/* Classes */}
                <div className="p-3 space-y-2">
                  {day.classes.map((classSession) => (
                    <button
                      key={classSession.id}
                      onClick={() => setSelectedClass({ session: classSession, date: day.date })}
                      disabled={classSession.spotsLeft === 0}
                      className={`group w-full p-3 text-left transition-all ${
                        classSession.spotsLeft === 0 
                          ? 'opacity-50 cursor-not-allowed bg-tbs-taupe/5' 
                          : 'bg-tbs-cream hover:bg-tbs-burgundy/5 border border-transparent hover:border-tbs-gold/20'
                      }`}
                    >
                      <p className="text-[10px] font-medium tracking-wider text-tbs-taupe uppercase">{classSession.time}</p>
                      <p className="mt-1 text-sm font-medium text-tbs-charcoal group-hover:text-tbs-burgundy transition-colors">{classSession.name}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm text-tbs-charcoal">${classSession.price}</span>
                        <span className={`text-[10px] font-medium tracking-wider ${
                          classSession.spotsLeft === 0 
                            ? 'text-tbs-taupe' 
                            : classSession.spotsLeft <= 3 
                              ? 'text-tbs-burgundy' 
                              : 'text-tbs-navy'
                        }`}>
                          {classSession.spotsLeft === 0 ? 'Sold Out' : `${classSession.spotsLeft} left`}
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
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-tbs-navy" />
            <span className="text-xs text-tbs-taupe tracking-wide">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-tbs-burgundy" />
            <span className="text-xs text-tbs-taupe tracking-wide">Limited Availability</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tbs-gold/40 to-transparent" />

      {selectedClass && <ClassModal classSession={selectedClass.session} selectedDate={selectedClass.date} onClose={() => setSelectedClass(null)} />}
    </section>
  );
}
