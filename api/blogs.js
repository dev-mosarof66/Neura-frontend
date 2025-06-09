const blogs = [

    {
        "id": "travelling",
        "title": "Top 7 Wonders Every Traveler Should Visit",
        "description": "Explore the world's most famous wonders and why they're must-sees.",
        "image": "https://via.placeholder.com/600x400?text=Travel+1",
        "content": "From the pyramids of Egypt to the Great Wall of China, these iconic sites offer a window into history and culture."
    },
    {
        "id": "travelling",
        "title": "Backpacking Tips for First-Time Travelers",
        "description": "Essential advice for beginners hitting the road with a backpack.",
        "image": "https://via.placeholder.com/600x400?text=Travel+2",
        "content": "Travel light, stay safe, and connect with locals—this guide helps you navigate your first backpacking trip."
    },
    {
        "id": "travelling",
        "title": "Top 5 Hidden Gems in Southeast Asia",
        "description": "Discover offbeat destinations in Asia that offer unforgettable experiences.",
        "image": "https://via.placeholder.com/600x400?text=Travel+3",
        "content": "Explore places like Pai in Thailand or Ninh Binh in Vietnam to experience natural beauty without the crowds."
    },
    {
        "id": "travelling",
        "title": "Why Solo Travel Changes Your Life",
        "description": "A deep dive into the benefits and lessons of traveling alone.",
        "image": "https://via.placeholder.com/600x400?text=Travel+4",
        "content": "Solo travel boosts confidence, self-awareness, and independence like nothing else can."
    },
    {
        "id": "travelling",
        "title": "How to Travel on a Budget in Europe",
        "description": "Explore Europe without breaking the bank with these smart tips.",
        "image": "https://via.placeholder.com/600x400?text=Travel+5",
        "content": "Use budget airlines, hostels, and free walking tours to experience Europe affordably."
    },
    {
        "id": "travelling",
        "title": "Top 5 Travel Apps You Need in 2025",
        "description": "These mobile apps will make your travel smoother and safer.",
        "image": "https://via.placeholder.com/600x400?text=Travel+6",
        "content": "From Google Maps to Rome2Rio, these apps simplify navigation, bookings, and translation on the go."
    },
    {
        "id": "travelling",
        "title": "Travel Photography Tips for Beginners",
        "description": "Capture your adventures beautifully with these simple tips.",
        "image": "https://via.placeholder.com/600x400?text=Travel+7",
        "content": "Learn how to use natural light, composition, and minimal gear to take amazing travel photos."
    },
    {
        "id": "travelling",
        "title": "Digital Nomad Lifestyle: Work While You Travel",
        "description": "How to make a living while seeing the world.",
        "image": "https://via.placeholder.com/600x400?text=Travel+8",
        "content": "Remote jobs, co-working spaces, and strong Wi-Fi have made it easier than ever to travel while earning."
    },
    {
        "id": "travelling",
        "title": "Top 10 Travel Safety Tips You Must Follow",
        "description": "Protect yourself and your belongings while exploring the world.",
        "image": "https://via.placeholder.com/600x400?text=Travel+9",
        "content": "Use anti-theft bags, research local customs, and always keep emergency contacts handy."
    },
    {
        "id": "travelling",
        "title": "Best Travel Destinations for 2025",
        "description": "Explore the most trending and beautiful places to visit this year.",
        "image": "https://via.placeholder.com/600x400?text=Travel+10",
        "content": "Discover hot destinations like Georgia, Morocco, and Japan for adventure, food, and culture."
    },
    {
        "id": "education",
        "title": "Modern Education Trends in 2025",
        "description": "What the future of education looks like with tech.",
        "image": "https://via.placeholder.com/600x400?text=Education+1",
        "content": "Hybrid learning, AI tutors, and gamification are reshaping how we learn in the 21st century."
    },
    {
        "id": "education",
        "title": "Effective Online Study Tips",
        "description": "Maximize productivity while studying online.",
        "image": "https://via.placeholder.com/600x400?text=Education+2",
        "content": "Set a routine, limit distractions, and take breaks to stay focused during virtual classes."
    },
    {
        "id": "education",
        "title": "Importance of Critical Thinking in Education",
        "description": "Why students must learn to think, not just memorize.",
        "image": "https://via.placeholder.com/600x400?text=Education+3",
        "content": "Critical thinking enhances decision-making and problem-solving—skills vital for real-world success."
    },
    {
        "id": "education",
        "title": "Benefits of Reading for Students",
        "description": "How reading boosts intelligence and imagination.",
        "image": "https://via.placeholder.com/600x400?text=Education+4",
        "content": "Reading daily improves vocabulary, memory, and emotional intelligence in learners of all ages."
    },
    {
        "id": "education",
        "title": "Choosing the Right Career Path",
        "description": "A guide to finding your passion and profession.",
        "image": "https://via.placeholder.com/600x400?text=Education+5",
        "content": "Self-assessment and career counseling are key to picking the right educational and professional path."
    },
    {
        "id": "education",
        "title": "STEM vs Humanities: Which to Choose?",
        "description": "Weighing the pros and cons of each field.",
        "image": "https://via.placeholder.com/600x400?text=Education+6",
        "content": "STEM offers technical careers, while humanities develop creativity and communication—balance matters."
    },
    {
        "id": "education",
        "title": "Power of Group Study",
        "description": "Why studying with friends can be more effective.",
        "image": "https://via.placeholder.com/600x400?text=Education+7",
        "content": "Group study promotes discussion, fills knowledge gaps, and makes learning interactive and fun."
    },
    {
        "id": "education",
        "title": "Using Flashcards for Better Memory",
        "description": "A smart tool to boost your study sessions.",
        "image": "https://via.placeholder.com/600x400?text=Education+8",
        "content": "Flashcards help with active recall, improving memorization and exam performance."
    },
    {
        "id": "education",
        "title": "Time Management for Students",
        "description": "How to manage your time wisely for better grades.",
        "image": "https://via.placeholder.com/600x400?text=Education+9",
        "content": "Use planners, set priorities, and avoid procrastination to stay on top of your academic goals."
    },
    {
        "id": "education",
        "title": "AI in Classrooms: Boon or Bane?",
        "description": "Exploring the pros and cons of AI-assisted education.",
        "image": "https://via.placeholder.com/600x400?text=Education+10",
        "content": "AI personalizes learning, but raises concerns about data privacy and over-dependence on machines."
    },
    {
        "id": "health",
        "title": "Top 10 Daily Habits for Better Health",
        "description": "Simple yet powerful habits that promote a healthy lifestyle.",
        "image": "https://via.placeholder.com/600x400?text=Health+1",
        "content": "Drinking enough water, regular exercise, and quality sleep are key habits for good health."
    },
    {
        "id": "health",
        "title": "Understanding Mental Health",
        "description": "Why mental wellness is just as important as physical health.",
        "image": "https://via.placeholder.com/600x400?text=Health+2",
        "content": "Mental health impacts how we feel, think, and behave. Therapy and mindfulness are helpful tools."
    },
    {
        "id": "health",
        "title": "Foods That Naturally Boost Immunity",
        "description": "Stay healthy with these nutrient-rich foods.",
        "image": "https://via.placeholder.com/600x400?text=Health+3",
        "content": "Ginger, garlic, citrus fruits, and yogurt can strengthen your immune system."
    },
    {
        "id": "health",
        "title": "Beginner’s Guide to Meditation",
        "description": "Start your journey to inner peace and focus.",
        "image": "https://via.placeholder.com/600x400?text=Health+4",
        "content": "Meditation improves concentration, reduces stress, and promotes emotional health."
    },
    {
        "id": "health",
        "title": "How to Improve Sleep Quality",
        "description": "Tips to help you sleep better every night.",
        "image": "https://via.placeholder.com/600x400?text=Health+5",
        "content": "Maintain a consistent schedule, avoid caffeine late in the day, and limit screen time before bed."
    },
    {
        "id": "health",
        "title": "Exercise at Home: No Equipment Needed",
        "description": "Stay fit without going to the gym.",
        "image": "https://via.placeholder.com/600x400?text=Health+6",
        "content": "Bodyweight exercises like push-ups, planks, and squats can help you stay active from home."
    },
    {
        "id": "health",
        "title": "The Importance of Regular Checkups",
        "description": "Why preventive care can save your life.",
        "image": "https://via.placeholder.com/600x400?text=Health+7",
        "content": "Routine medical checkups help detect problems early, leading to better outcomes."
    },
    {
        "id": "health",
        "title": "Understanding Nutrition Labels",
        "description": "Decode food packaging to make healthier choices.",
        "image": "https://via.placeholder.com/600x400?text=Health+8",
        "content": "Learn to read calories, fats, sugars, and ingredients to stay informed and eat better."
    },
    {
        "id": "health",
        "title": "Yoga for Beginners",
        "description": "Simple yoga poses to get started on your wellness journey.",
        "image": "https://via.placeholder.com/600x400?text=Health+9",
        "content": "Start with poses like Child’s Pose, Cat-Cow, and Downward Dog for flexibility and stress relief."
    },
    {
        "id": "health",
        "title": "Benefits of Drinking Herbal Tea",
        "description": "Calm your mind and body with natural herbal teas.",
        "image": "https://via.placeholder.com/600x400?text=Health+10",
        "content": "Herbal teas like chamomile and peppermint aid digestion, improve sleep, and reduce anxiety."
    },
    {
        "id": "coding",
        "title": "Why Learn Programming in 2025?",
        "description": "Coding is now a life skill—here's why you should start.",
        "image": "https://via.placeholder.com/600x400?text=Coding+1",
        "content": "Whether for career growth or automation, coding empowers problem-solving in any field."
    },
    {
        "id": "coding",
        "title": "Top 5 Languages for Beginners",
        "description": "Easy-to-learn programming languages for new coders.",
        "image": "https://via.placeholder.com/600x400?text=Coding+2",
        "content": "Python, JavaScript, HTML, CSS, and Scratch are great for building logic and creativity."
    },
    {
        "id": "coding",
        "title": "What is Full Stack Development?",
        "description": "Understand what full stack really means in web development.",
        "image": "https://via.placeholder.com/600x400?text=Coding+3",
        "content": "It refers to building both frontend (client) and backend (server/database) parts of a website."
    },
    {
        "id": "coding",
        "title": "How to Learn to Code for Free",
        "description": "Free resources that teach programming from scratch.",
        "image": "https://via.placeholder.com/600x400?text=Coding+4",
        "content": "Websites like freeCodeCamp, Codecademy, and The Odin Project offer great learning paths."
    },
    {
        "id": "coding",
        "title": "Debugging Tips for New Programmers",
        "description": "Fix code errors faster with these techniques.",
        "image": "https://via.placeholder.com/600x400?text=Coding+5",
        "content": "Use print statements, console logs, and debuggers to trace bugs in your logic."
    },
    {
        "id": "coding",
        "title": "Object-Oriented Programming Explained",
        "description": "OOP principles for clean and reusable code.",
        "image": "https://via.placeholder.com/600x400?text=Coding+6",
        "content": "Learn about classes, objects, inheritance, and encapsulation in languages like Java or Python."
    },
    {
        "id": "coding",
        "title": "Git and GitHub Basics",
        "description": "Track code changes and collaborate easily.",
        "image": "https://via.placeholder.com/600x400?text=Coding+7",
        "content": "Git is a version control system; GitHub lets you store and share your code online."
    },
    {
        "id": "coding",
        "title": "Frontend vs Backend: What's the Difference?",
        "description": "Learn what separates frontend and backend web development.",
        "image": "https://via.placeholder.com/600x400?text=Coding+8",
        "content": "Frontend is what users see (HTML, CSS, JS); backend is server-side logic and database."
    },
    {
        "id": "coding",
        "title": "Build Your First Website in One Hour",
        "description": "A step-by-step guide to making your first webpage.",
        "image": "https://via.placeholder.com/600x400?text=Coding+9",
        "content": "Use basic HTML, CSS, and JavaScript to create a functional and beautiful website."
    },
    {
        "id": "coding",
        "title": "Data Structures Every Coder Must Know",
        "description": "Master the foundations of efficient coding.",
        "image": "https://via.placeholder.com/600x400?text=Coding+10",
        "content": "Arrays, stacks, queues, and trees are essential tools for organizing and processing data."
    },
    {
        "id": "games and sports",
        "title": "Top 5 Benefits of Playing Sports",
        "description": "Sports improve physical and mental well-being.",
        "image": "https://via.placeholder.com/600x400?text=Sports+1",
        "content": "From fitness to teamwork, playing sports adds value to all areas of life."
    },
    {
        "id": "games and sports",
        "title": "The Rise of eSports",
        "description": "Why online gaming is more than just a hobby.",
        "image": "https://via.placeholder.com/600x400?text=Sports+2",
        "content": "Competitive gaming has become a billion-dollar industry with global fanbases."
    },
    {
        "id": "games and sports",
        "title": "Top 10 Outdoor Games for Kids",
        "description": "Fun and fitness rolled into one.",
        "image": "https://via.placeholder.com/600x400?text=Sports+3",
        "content": "Games like tag, hide-and-seek, and jump rope keep kids active and happy."
    },
    {
        "id": "games and sports",
        "title": "How Sports Teach Discipline",
        "description": "The life lessons gained through consistent practice.",
        "image": "https://via.placeholder.com/600x400?text=Sports+4",
        "content": "Waking up early, following rules, and practicing regularly build strong character."
    },
    {
        "id": "games and sports",
        "title": "Top 5 Strategy Games to Improve Your Brain",
        "description": "Games that are both fun and mentally stimulating.",
        "image": "https://via.placeholder.com/600x400?text=Sports+5",
        "content": "Try chess, Sudoku, or Civilization for brain-boosting gameplay."
    },
    {
        "id": "games and sports",
        "title": "Olympic Sports You Should Try",
        "description": "Discover new sports that challenge and inspire.",
        "image": "https://via.placeholder.com/600x400?text=Sports+6",
        "content": "Fencing, archery, and badminton are great Olympic sports for fitness and skill-building."
    },
    {
        "id": "games and sports",
        "title": "Indoor Games for Rainy Days",
        "description": "Stay entertained indoors with these classic games.",
        "image": "https://via.placeholder.com/600x400?text=Sports+7",
        "content": "Board games like Monopoly or Uno keep the fun going without stepping outside."
    },
    {
        "id": "games and sports",
        "title": "Top 5 Mobile Games of 2025",
        "description": "Play on the go with these trending games.",
        "image": "https://via.placeholder.com/600x400?text=Sports+8",
        "content": "Check out games like Clash Royale, PUBG Mobile, and Among Us for casual fun."
    },
    {
        "id": "games and sports",
        "title": "Why Physical Education is Important in Schools",
        "description": "The impact of sports on academic and social skills.",
        "image": "https://via.placeholder.com/600x400?text=Sports+9",
        "content": "PE develops motor skills, builds teamwork, and encourages a healthy lifestyle in children."
    },
    {
        "id": "games and sports",
        "title": "How to Get Started with Running",
        "description": "Running tips for beginners.",
        "image": "https://via.placeholder.com/600x400?text=Sports+10",
        "content": "Start slow, wear good shoes, and follow a beginner's plan to build endurance safely."
    }
]


export default blogs;