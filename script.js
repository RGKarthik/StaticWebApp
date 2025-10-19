// Trivia database with facts about various topics
const triviaDatabase = {
    'honey bee': [
        'Honey bees can track sunlight using special photoreceptors in their eyes, even on cloudy days!',
        'A honey bee visits about 2 million flowers to make just one pound of honey.',
        'Honey bees communicate through dance! They perform a "waggle dance" to tell other bees where to find flowers.'
    ],
    'honeybee': [
        'Honey bees can track sunlight using special photoreceptors in their eyes, even on cloudy days!',
        'A honey bee visits about 2 million flowers to make just one pound of honey.'
    ],
    'bee': [
        'Bees are essential pollinators that help produce about one-third of the food we eat!',
        'A bee\'s wings beat 200 times per second, creating their distinctive buzzing sound.'
    ],
    'dolphin': [
        'Dolphins are intelligent creatures that can communicate with each other using sonar (echolocation)!',
        'Dolphins sleep with only half of their brain at a time, keeping one eye open to watch for predators.',
        'A group of dolphins is called a pod, and they can have up to 1,000 members!'
    ],
    'space': [
        'Space is completely silent because there is no air for sound waves to travel through.',
        'One day on Venus is longer than one year on Venus! It takes 243 Earth days to rotate once.',
        'There are more stars in the universe than grains of sand on all the beaches on Earth.'
    ],
    'ocean': [
        'The ocean covers about 71% of Earth\'s surface and contains 97% of Earth\'s water.',
        'More than 80% of the ocean remains unexplored and unmapped by humans.',
        'The ocean produces more than half of the world\'s oxygen through phytoplankton.'
    ],
    'mountain': [
        'Mount Everest, the tallest mountain, grows about 4 millimeters every year due to tectonic plate movement.',
        'Mountains cover about 22% of Earth\'s land surface.',
        'The longest mountain range is actually underwater - the Mid-Ocean Ridge spans 40,000 miles!'
    ],
    'coffee': [
        'Coffee is the second most traded commodity in the world, after crude oil.',
        'Coffee beans are actually the seeds of coffee cherries, which are technically fruits.',
        'The world consumes over 2.25 billion cups of coffee every single day!'
    ],
    'chocolate': [
        'Chocolate comes from cacao beans, which were once used as currency by the ancient Aztecs.',
        'Dark chocolate contains antioxidants that can be beneficial for heart health.',
        'It takes about 400 cacao beans to make just one pound of chocolate!'
    ],
    'cat': [
        'Cats spend about 70% of their lives sleeping, which means a 9-year-old cat has been awake for only 3 years!',
        'A group of cats is called a "clowder" and a group of kittens is called a "kindle".',
        'Cats have 32 muscles in each ear, allowing them to rotate their ears 180 degrees!'
    ],
    'dog': [
        'Dogs have a sense of smell that is 10,000 to 100,000 times more acute than humans.',
        'A dog\'s nose print is unique, just like a human\'s fingerprint.',
        'Dogs can understand up to 250 words and gestures, making them as smart as a 2-year-old child!'
    ],
    'elephant': [
        'Elephants are the largest land animals and can weigh up to 14,000 pounds!',
        'Elephants have excellent memory and can recognize and remember other elephants for decades.',
        'An elephant\'s trunk contains over 40,000 muscles and can lift up to 770 pounds!'
    ],
    'sun': [
        'The Sun is so large that about 1.3 million Earths could fit inside it.',
        'Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.',
        'The Sun has been burning for about 4.5 billion years and will continue for another 5 billion years.'
    ],
    'moon': [
        'The Moon is slowly moving away from Earth at a rate of about 1.5 inches per year.',
        'The same side of the Moon always faces Earth due to a phenomenon called tidal locking.',
        'The Moon has no atmosphere, which means there is no weather and footprints left by astronauts will remain for millions of years.'
    ],
    'earth': [
        'Earth is the only planet in our solar system not named after a god.',
        'Earth\'s core is as hot as the surface of the Sun, reaching temperatures of 10,800°F (6,000°C).',
        'Earth is the densest planet in our solar system.'
    ],
    'tiger': [
        'Tigers are the largest wild cats in the world and can weigh up to 660 pounds.',
        'Each tiger has a unique pattern of stripes, like human fingerprints.',
        'Tigers are excellent swimmers and actually enjoy spending time in water!'
    ],
    'lion': [
        'Lions are the only cats that live in groups, called prides.',
        'A lion\'s roar can be heard from up to 5 miles away!',
        'Male lions sleep up to 20 hours a day, while females do most of the hunting.'
    ],
    'shark': [
        'Sharks have been around for more than 400 million years, longer than trees!',
        'Most sharks have multiple rows of teeth that are constantly being replaced throughout their lives.',
        'Sharks can detect electrical fields produced by other animals, helping them hunt in complete darkness.'
    ],
    'tree': [
        'Trees can communicate with each other through an underground network of fungi called the "Wood Wide Web".',
        'The oldest known tree is over 5,000 years old!',
        'A single large tree can provide a day\'s oxygen supply for up to four people.'
    ],
    'pizza': [
        'Pizza was invented in Naples, Italy, and the Margherita pizza was created to honor Queen Margherita in 1889.',
        'Americans eat approximately 350 slices of pizza per second!',
        'The world\'s most expensive pizza costs $12,000 and takes 72 hours to make.'
    ]
};

// Get references to DOM elements
const topicInput = document.getElementById('topicInput');
const getTriviaBtn = document.getElementById('getTrivia');
const triviaDisplay = document.getElementById('triviaDisplay');
const topicTitle = document.getElementById('topicTitle');
const triviaText = document.getElementById('triviaText');
const noTriviaDiv = document.getElementById('noTrivia');
const tryAnotherBtn = document.getElementById('tryAnother');
const tryAgainBtn = document.getElementById('tryAgain');

// Function to get random trivia for a topic
function getTrivia(topic) {
    const normalizedTopic = topic.toLowerCase().trim();
    
    if (triviaDatabase[normalizedTopic]) {
        const triviaArray = triviaDatabase[normalizedTopic];
        const randomIndex = Math.floor(Math.random() * triviaArray.length);
        return {
            found: true,
            topic: topic,
            trivia: triviaArray[randomIndex]
        };
    }
    
    return { found: false };
}

// Function to display trivia
function displayTrivia() {
    const topic = topicInput.value.trim();
    
    if (!topic) {
        topicInput.focus();
        return;
    }
    
    const result = getTrivia(topic);
    
    if (result.found) {
        // Show trivia
        topicTitle.textContent = result.topic;
        triviaText.textContent = result.trivia;
        triviaDisplay.classList.remove('hidden');
        noTriviaDiv.classList.add('hidden');
    } else {
        // Show no trivia message
        triviaDisplay.classList.add('hidden');
        noTriviaDiv.classList.remove('hidden');
    }
}

// Function to reset and try another topic
function resetForm() {
    topicInput.value = '';
    triviaDisplay.classList.add('hidden');
    noTriviaDiv.classList.add('hidden');
    topicInput.focus();
}

// Event listeners
getTriviaBtn.addEventListener('click', displayTrivia);
tryAnotherBtn.addEventListener('click', resetForm);
tryAgainBtn.addEventListener('click', resetForm);

// Allow Enter key to submit
topicInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        displayTrivia();
    }
});

// Focus on input when page loads
window.addEventListener('load', () => {
    topicInput.focus();
});
