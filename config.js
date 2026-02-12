// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Rachel Tan",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💙",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me? 😳",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I’m crazy about you ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next "                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine?", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "Are you sure?"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WACHAO RELAX SISTER I LOVE YOU ALOT MANY MUCH ALSO",  // Shows when they go past 5000%
        high: "That’s the kind of love I’ll treasure forever 🩵",              // Shows when they go past 1000%
        normal: "Not bad… but I know you can go higher"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "LET'S GOOOOO LAAA 💙🦫💐",
        message: "You're officially locked in with me. No refunds. No returns.",
        emojis: "🦫💙🪻🩵💋🎉"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#061E29",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#1D546D",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#1B3C53",     // Button color (should stand out against the background)
        buttonHover: "#456882",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#222831"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dakb7zafa/video/upload/v1770927378/%E4%BA%B2%E7%88%B1%E7%9A%84-H3R3-_cover_%E5%91%86%E5%91%86%E7%A0%B4_tyqez1.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
