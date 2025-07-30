"use client";
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
//small hydration error but it should be fine; get back to it if it causes problems in deployment
const quotesData = {
  All: [
    { quote: "“Be yourself; everyone else is already taken.” - Oscar Wilde", category: "Life" },
    { quote: "“I am being sincere. The Tortise ate the Hare. ” - Wistful", category: "Life"},
    { quote: "“What's broken can't always be fixed. But we still try. Why?” - Wisftul", category: "Life" },
    { quote: "“All that we are is the result of what we have thought.” - Buddha", category: "Life" },
    { quote: "“If you judge people, you have no time to love them.” - Mother Teresa", category: "Life" },
    { quote: "“The greatest wealth is to live content with little” - Plato", category: "Life" },
    { quote: "“The future belongs to those who prepare for it today” - Malcom X", category: "Life" },
    { quote: "“I have no special talent. I am only passionately curious.” - Albert Einstein", category: "Life" },
    { quote: "“A great man is always willing to be litte.” - Ralph Waldo Emerson", category: "Life" },
    { quote: "“The root of suffering is attatchement.” - Buddha", category: "Life" },
    { quote: "“Whenever you find yourself on the side of the majority, it is time to pause and reflect.” - Mark Twain", category: "Life" },
    { quote: "“Go confidently in the direction of your dreams. Live the life you have imagined.” - Henry David Thoreau", category: "Life" },
    { quote: "“Nonviolence is a weapon of the strong.” - Mahatma Ghandi", category: "Life" },
    { quote: "“Peace begins with a smile.” - Mother Teresa", category: "Life" },
    { quote: "“Better to die standing than to live on your knees.” - Ernesto 'Che' Guevara", category: "Life" },
    { quote: "“The weak can never forgive. Forgiveness is the attribute of the strong.” - Mahatma Ghandi", category: "Life" },
    { quote: "“The unexamined life is not worth living.” - Socrates", category: "Life" },
    { quote: "“Believe you can and you're halfway there.” - Theodore Roosevelt", category: "Motivational" },
    { quote: "“Do something. If it works, do more of it. If it doesn't, do something else.”  - F.D.R", category: "Motivational"},
    { quote: "“Climb back up the mountatin, where I slipped.” - Wistful", category: "Motivational" },
    { quote: "“Fallen doesn't mean you can't get up. It just means you need a little more time to adjust.” - Wisftul", category: "Motivational" },
    { quote: "“The successful warrior is the average man, with laser-like focus.” - Bruce Lee", category: "Motivational" },
    { quote: "“Encouragement is like oxygen to the soul.” - John Maxwell", category: "Motivational" },
    { quote: "“I'm so happy for you. And soon, I'll be happy for me too” - Wistful", category: "Motivational"},
    { quote: "“The most courageous act is still to think for yourself. Aloud.” - Coco Chanel", category: "Motivational" },
    { quote: "“Those who dare to fail misreably can achieve greatly.” - John F. Kennedy", category: "Motivational" },
    { quote: "“Wisely, and slow. They stumble that run fast.” - William Shakespeare", category: "Motivational" },
    { quote: "“Keep calm and carry on.” - Winston Churchill", category: "Motivational" },
    { quote: "“The journey of a thousand miles begins with one step.” - Lao Tzu", category: "Motivational" },
    { quote: "“I've failed over and over again in my life and that is why I succeed.” - Michael Jordan", category: "Motivational" },
    { quote: "“It does not matter how slowly you go so long as you do not stop.” - Confucius", category: "Motivational" },
    { quote: "“It's not whether you get knocked down, it's whether you get up.” - Vince Lombardi", category: "Motivational" },
    { quote: "“You miss 100% of the shots you don't take.” - Wayne Gretzky", category: "Motivational" },
    { quote: "“Genuis is 1% inspiration, 99% perspiration.” - Thomas A. Edison", category: "Motivational" },
    { quote: "“If you think you can do a thing or think you can't do a thing, you're right.” - Henry Ford", category: "Motivational" },
    { quote: "“It always seems impossible until it's done.” - Nelson Mandela", category: "Motivational" },
    { quote: "“Insanity: doing the same thing over and over again and expecting different results.” - Albert Einstein", category: "Motivational" },
    { quote: "“Well done is better than well said.” - Benjamin Franklin", category: "Motivational" },
    { quote: "“The first time you caught my eye, it was not love at first sight. Instead, a quiet curiosity was planted in my chest and I knew it was only a matter of time before you sunk beneath my bones and nurtured this deep-seated familiarity into a love so fierce that I would question if I had ever been in love before.” - Lyra", category: "Love" },
    { quote: "“At the touch of love, everyone becomes a poet” - Plato", category: "Love"},
    { quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best” - Marilyn Monroe", category: "Love"},
    { quote: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", category: "Love"},
    { quote: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” - Martin Luther King Jr.", category: "Love"},
    { quote: "“We accept the love we think we deserve.” - Stephen Chbosky, The Perks of Being a Wallflower", category: "Love"},
    { quote: "“It is better to be hated for what you are than to be loved for what you are not.” - Andre Gide", category: "Love"},
    { quote: "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.” - John Green, The Fault in Our Stars", category: "Love"},
    { quote: "“Love all, trust a few, Do wrong to none: be able for thine enemy. Rather in power than use; and keep thy friend Under thy own life's key: be check'd for silence, But never tax'd for speech.” - William Shakespeare", category: "Love"},
    { quote: "“Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.” - Neil Gaiman", category: "Love"},
    { quote: "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.” - Lao Tzu", category: "Love"},
    { quote: "“This life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up. Girls will be your friends - they'll act like it anyway. But just remember, some come, some go. The ones that stay with you through everything - they're your true best friends. Don't let go of them. Also remember, sisters make the best friends in the world. As for lovers, well, they'll come and go too. And baby, I hate to say it, most of them - actually pretty much all of them are going to break your heart, but you can't give up because if you give up, you'll never find your soulmate. You'll never find that half who makes you whole and that goes for everything. Just because you fail once, doesn't mean you're gonna fail at everything. Keep trying, hold on, and always, always, always believe in yourself, because if you don't, then who will, sweetie? So keep your head high, keep your chin up, and most importantly, keep smiling, because life's a beautiful thing and there's so much to smile about.” - Marilyn Monroe", category: "Love"},
    { quote: "“There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.” - Sarah Dessen", category: "Love"},
    { quote: "“There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.” - Jane Austen", category: "Love"},
    { quote: "“Love is like the wind, you can't see it but you can feel it.” - Nicholas Sparks", category: "Love"},
    { quote: "“You don't love someone because they're perfect, you love them in spite of the fact that they're not.” - Jodi Picoult", category: "Love"},
    { quote: "“If I had a flower for every time I thought of you...I could walk through my garden forever.” - Alfred Tennyson", category: "Love"},
    { quote: "“We’re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness—and call it love—true love.” - Robert Fulghum", category: "Love"},

  ],
  Life: [
    { quote: "“Be yourself; everyone else is already taken.” - Oscar Wilde", category: "Life" },
    { quote: "“I am being sincere. The Tortise ate the Hare. ” - Wistful", category: "Life"},
    { quote: "“What's broken can't always be fixed. But we still try. Why?” - Wisftul", category: "Life" },
    { quote: "“All that we are is the result of what we have thought.” - Buddha", category: "Life" },
    { quote: "“If you judge people, you have no time to love them.” - Mother Teresa", category: "Life" },
    { quote: "“The greatest wealth is to live content with little” - Plato", category: "Life" },
    { quote: "“The future belongs to those who prepare for it today” - Malcom X", category: "Life" },
    { quote: "“I have no special talent. I am only passionately curious.” - Albert Einstein", category: "Life" },
    { quote: "“A great man is always willing to be litte.” - Ralph Waldo Emerson", category: "Life" },
    { quote: "“The root of suffering is attatchement.” - Buddha", category: "Life" },
    { quote: "“Whenever you find yourself on the side of the majority, it is time to pause and reflect.” - Mark Twain", category: "Life" },
    { quote: "“Go confidently in the direction of your dreams. Live the life you have imagined.” - Henry David Thoreau", category: "Life" },
    { quote: "“Nonviolence is a weapon of the strong.” - Mahatma Ghandi", category: "Life" },
    { quote: "“Peace begins with a smile.” - Mother Teresa", category: "Life" },
    { quote: "“Better to die standing than to live on your knees.” - Ernesto 'Che' Guevara", category: "Life" },
    { quote: "“The weak can never forgive. Forgiveness is the attribute of the strong.” - Mahatma Ghandi", category: "Life" },
    { quote: "“The unexamined life is not worth living.” - Socrates", category: "Life" },

  ],
  Motivational: [
    { quote: "“Believe you can and you're halfway there.” - Theodore Roosevelt", category: "Motivational" },
    { quote: "“Do something. If it works, do more of it. If it doesn't, do something else.”  - F.D.R", category: "Motivational"},
    { quote: "“Climb back up the mountatin, where I slipped.” - Wistful", category: "Motivational" },
    { quote: "“Fallen doesn't mean you can't get up. It just means you need a little more time to adjust.” - Wisftul", category: "Motivational" },
    { quote: "“The successful warrior is the average man, with laser-like focus.” - Bruce Lee", category: "Motivational" },
    { quote: "“Encouragement is like oxygen to the soul.” - John Maxwell", category: "Motivational" },
    { quote: "“I'm so happy for you. And soon, I'll be happy for me too” - Wistful", category: "Motivational"},
    { quote: "“The most courageous act is still to think for yourself. Aloud.” - Coco Chanel", category: "Motivational" },
    { quote: "“Those who dare to fail misreably can achieve greatly.” - John F. Kennedy", category: "Motivational" },
    { quote: "“Wisely, and slow. They stumble that run fast.” - William Shakespeare", category: "Motivational" },
    { quote: "“Keep calm and carry on.” - Winston Churchill", category: "Motivational" },
    { quote: "“The journey of a thousand miles begins with one step.” - Lao Tzu", category: "Motivational" },
    { quote: "“I've failed over and over again in my life and that is why I succeed.” - Michael Jordan", category: "Motivational" },
    { quote: "“It does not matter how slowly you go so long as you do not stop.” - Confucius", category: "Motivational" },
    { quote: "“It's not whether you get knocked down, it's whether you get up.” - Vince Lombardi", category: "Motivational" },
    { quote: "“You miss 100% of the shots you don't take.” - Wayne Gretzky", category: "Motivational" },
    { quote: "“Genuis is 1% inspiration, 99% perspiration.” - Thomas A. Edison", category: "Motivational" },
    { quote: "“If you think you can do a thing or think you can't do a thing, you're right.” - Henry Ford", category: "Motivational" },
    { quote: "“It always seems impossible until it's done.” - Nelson Mandela", category: "Motivational" },
    { quote: "“Insanity: doing the same thing over and over again and expecting different results.” - Albert Einstein", category: "Motivational" },
    { quote: "“Well done is better than well said.” - Benjamin Franklin", category: "Motivational" },

],
  Love: [
    { quote: "“The first time you caught my eye, it was not love at first sight. Instead, a quiet curiosity was planted in my chest and I knew it was only a matter of time before you sunk beneath my bones and nurtured this deep-seated familiarity into a love so fierce that I would question if I had ever been in love before.” - Lyra", category: "Love" },
    { quote: "“At the touch of love, everyone becomes a poet” - Plato", category: "Love"},
    { quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best” - Marilyn Monroe", category: "Love"},
    { quote: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", category: "Love"},
    { quote: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” - Martin Luther King Jr.", category: "Love"},
    { quote: "“We accept the love we think we deserve.” - Stephen Chbosky, The Perks of Being a Wallflower", category: "Love"},
    { quote: "“It is better to be hated for what you are than to be loved for what you are not.” - Andre Gide", category: "Love"},
    { quote: "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.” - John Green, The Fault in Our Stars", category: "Love"},
    { quote: "“Love all, trust a few, Do wrong to none: be able for thine enemy. Rather in power than use; and keep thy friend Under thy own life's key: be check'd for silence, But never tax'd for speech.” - William Shakespeare", category: "Love"},
    { quote: "“Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.” - Neil Gaiman", category: "Love"},
    { quote: "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.” - Lao Tzu", category: "Love"},
    { quote: "“There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.” - Sarah Dessen", category: "Love"},
    { quote: "“There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.” - Jane Austen", category: "Love"},
    { quote: "“Love is like the wind, you can't see it but you can feel it.” - Nicholas Sparks", category: "Love"},
    { quote: "“You don't love someone because they're perfect, you love them in spite of the fact that they're not.” - Jodi Picoult", category: "Love"},
    { quote: "“If I had a flower for every time I thought of you...I could walk through my garden forever.” - Alfred Tennyson", category: "Love"},
    { quote: "“We’re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness—and call it love—true love.” - Robert Fulghum", category: "Love"},
  ],

};

function shuffleQuotes(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function page() {
  const [category, setCategory] = useState("All");
  const [shuffledQuotes, setShuffledQuotes] = useState(shuffleQuotes(quotesData["All"]));
  const [index, setIndex] = useState(0);

useEffect(() => {
  const quotes = quotesData[category] || quotesData["All"] || [];
  const shuffled = [...quotes].sort(() => Math.random() - 0.5);
  setShuffledQuotes(shuffled);
  setIndex(0);
}, [category]);

  
const quote = shuffledQuotes?.[index] ?? { quote: "No quote available." };
  

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % shuffledQuotes.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? shuffledQuotes.length - 1 : prevIndex - 1
    );
  };

  const handleCategoryChange = (newCat) => {
    setCategory(newCat);
    setShuffledQuotes(shuffleQuotes(quotesData[newCat]));
    setIndex(0);
  };

  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="font-bold text-3xl mb-2 font-serif">Random Quote Generator</h1>
      <h2 className="text-xl italic mb-4">Categories</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.keys(quotesData).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-3 py-1 rounded-full border ${
              cat === category
                ? "bg-[#a44b08] text-white"
                : "bg-[#f5e7dc] hover:bg-[#faa96b] text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button onClick={handlePrev} className="hover:scale-110 transition">
          <ChevronLeft size={36} color="#a44b08" />
        </button>

        <div
          className="w-[350px] h-[350px] bg-[#D8C9A7] text-center p-8 rounded-xl shadow-md flex items-center justify-center font-serif text-lg"
          style={{ boxShadow: "3px 4px 0 black" }}
        >
          <p className="italic">{quote.quote}</p>
        </div>

        <button onClick={handleNext} className="hover:scale-110 transition">
          <ChevronRight size={36} color="#a44b08" />
        </button>
      </div>
    </main>
  );
}