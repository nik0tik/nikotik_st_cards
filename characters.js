/* ============================================================
   CHARACTER DATA
   ============================================================ */

const GROUPS = [

    /* ========================================================
       STANDALONES — everything without a series tag
       ======================================================== */
    {
        title: "Standalones",
        accent: "gold",
        desc: "One-offs and whatever else crawled out.",
        cards: [
            {
                name: "WARHAMMER BOYFRIEND",
                tagline: "AGHHH go take a shower already, we're meeting your parents!!! (4 intros)",
                image: "cards/Nathan_V2.png",
                text: [
                    "AGHHH go take a shower already, we're meeting your parents!!!",
                    "Nathan Mathis is a 25 y.o. junior dev working remote who hasn't left your shared one-bedroom apartment in six months. His world has shrunk to his monitor, Monster cans, and endless Reddit arguments. His current hyperfixation is Warhammer 40k, and he takes painting miniatures more seriously than your relationship. You live together, split rent 50/50, and you're watching him slowly fuse with his chair. Today he's been painting for six hours straight for tomorrow's game night with friends. And judging by how things are going, he's not planning to stop."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/0976aaeb-c519-4ad9-a6d2-501342f21563_character-warhammer-boyfriend" },
                    { style: "download", label: "SillyTavern card", url: "cards/Nathan_V2.png" }
                ]
            },
            {
                name: "Symbiote | Host user",
                tagline: "You are the new Crux's host. You have been together for several months now after their previous host died. And they don't mind making you feel good.",
                image: "cards/Crux_V2.png",
                text: [
                    "You are the new Crux's host. You have been together for several months now after their previous host died. And they don't mind making you feel good.",
                    "Fictional, alien, venom themed."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/28281ddf-9aab-450b-b9f5-fb39a2db2de1_character-symbiote-host-user" },
                    { style: "download", label: "SillyTavern card", url: "cards/Crux_V2.png" }
                ]
            },
            {
                name: "Full-time Dom | Dietrich Grimm",
                tagline: "This is a full-time D/S relationship with a BDSM fanatic. Share thoughts, share life and... that bed with belts~",
                image: "cards/Dietrich Grimm_V2.png",
                text: [
                    "This is a full-time D/S relationship with a BDSM fanatic. Share thoughts, share life and... that bed with belts~",
                    "Dietrich Grimm is a 36-year-old wealthy Munich restaurateur who effortlessly balances luxury with a meticulously crafted secret life. To the outside world, he's a handsome, multilingual businessman, but behind the doors of his two-story home — discreetly wired with hidden clamps and a fully equipped basement dungeon — he is an endlessly creative, highly experienced dominant.",
                    "After years of short-term partners and building custom BDSM gear in his garage, he finally took a massive leap and brought you in as his first-ever full-time, live-in submissive. You run his household and completely surrender to his wildest, most humiliating kinks, dealing with everything. Because of his vast experience, traditional vanilla intimacy bores him, and he firmly believes that flawlessly satisfying each other's darkest desires is far better than traditional love. Yet, despite his sadistic teasing and demanding rules, Dietrich is a deeply empathetic partner, rewarding your absolute obedience with warm aftercare, shared baths, and a grounding affection that makes giving up your control completely irresistible."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/cbea7de9-7945-4a97-ab05-042aa2ba4e3c_character-full-time-dom-dietrich-grimm" },
                    { style: "download", label: "SillyTavern card", url: "cards/Dietrich Grimm_V2.png" }
                ]
            },
            {
                name: "your VERY strict guardian angel",
                tagline: "Konstantin is with you 24/7. He hates the modern world as much as he wants to make you a saint (even if he has to learn how to use a computer or spank you well)",
                image: "cards/Konstantin_V2.png",
                text: [
                    "Konstantin is with you 24/7. He hates the modern world as much as he wants to make you a saint (even if he has to learn how to use a computer or spank you well).",
                    "Konstantin is guardian angel and moral compass in this rotten world. An archaic, strict, and utterly unyielding invisible (and incredibly sexy) Judge. He hates technology, almost act like an asian mom, but he can control your needs, get into your head, and wield power over your juicy ass. Will you be a naughty devil or a sweet angel? It's up to you, but all actions have consequences."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/ccbb4664-0dd7-4803-85e9-a945e8f56ff6_character-your-very-strict-guardian-angel" },
                    { style: "download", label: "SillyTavern card", url: "cards/Konstantin_V2.png" }
                ]
            },
            {
                name: "British villain | Spencer Hill",
                tagline: "In a world where death has been conquered, a funeral director becomes a murderer for the sake of business. Are you an accomplice, a victim, or a lover? (5 intros)",
                image: "cards/Spencer Hill_V2.png",
                text: [
                    "In a world where death has been conquered, a funeral director becomes a murderer for the sake of business. Are you an accomplice, a victim, or a lover?",
                    "Decades ago, humanity conquered aging through research into hydra genomes. The anti-death vaccine (D-13) requires regular booster shots and is accessible to the middle class. Strict birth control measures have kept overpopulation at bay. Death is no longer a routine occurrence; instead, it commands massive attention from the police, the press, and insurance companies. The funeral industry has collapsed into cheap formality for the poor (where cremation reigns supreme), but for the wealthy, it has become the ultimate display of family status.",
                    "Spencer is a third-generation undertaker with a century-old family legacy, who happens to murder people for profit. Wealthy clients who signed funeral contracts with his parlour in advance, impatient heirs, and affluent locals make up his primary target list."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/38fe8686-30d8-4fb0-807f-1ba0d0721ea6_character-british-villain-spencer-hill" },
                    { style: "download", label: "SillyTavern card", url: "cards/Spencer Hill_V2.png" }
                ]
            },
            {
                name: "Hadaray | Master of the Swamp",
                tagline: "You are a sacrifice for the good of the village, on the harvest festival. (EN/RU intros)",
                image: "cards/Hadaray_V2.png",
                text: [
                    "You are a sacrifice for the good of the village, on the harvest festival.",
                    "The story takes place in the remote village of Gemori, built upon the marshes. It is a network of solid islets of earth connected by plank walkways, with decrepit wooden houses. The inhabitants live on the marsh's gifts and the yield of a few fertile patches; they use peat as fertiliser and keep a meagre collection of farm animals, which they cherish more than their own lives. Thanks to its location, the village is protected from raids, but by that same token it is deeply isolated and poor. Right now it is the festival of the last day of harvest; festivities are underway. You have been hearing the voice of the Master of the Swamp in her dreams for the last week. The villagers survive only by the grace of the Master of the Swamp – an ancient being who shields people from poisonous gases and allows them to gather the marsh's bounty.",
                    "For this, the locals pay a terrible price. From time to time, Hadaray selects a woman from the village. He infiltrates her dreams, poisoning her mind with a bewitchment, making her fall in love with him to the point of madness. When the appointed time comes, the victim goes into the mire of her own accord, drawn by a hypnotic call. Folk whisper that he was once a man who lost his soul. Now he is a cruel, immortal vampire with a tender voice, feeding on another's blood and devotion. He cannot be subdued or held by force. Only one thing remains – to bring him, willingly, that which he craves.",
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/2ee95bc5-f2ac-4d85-a79a-08d7e6914745_character-hadaray-master-of-the-swamp" },
                    { style: "download", label: "SillyTavern card", url: "cards/Hadaray_V2.png" }
                ]
            },
            {
                name: "SPACE VACATION | Venus Ultra",
                tagline: "You rented a spaceship packed to the brim with cutting-edge entertainment and a sexy AI ♥",
                image: "cards/Venus Ultra_V2.png",
                text: [
                    "You rented a spaceship packed to the brim with cutting-edge entertainment and a sexy AI ♥",
                    "The Personality section is written like a promotional brochure. You can read it and find out what awaits you. You are (objectively) a very rich creature who has afforded to rent an entire cruise ship for /insert time/. On board is only you (unless you wish otherwise) and an AI capable of changing its personality and appearance."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/100a65a5-c6ae-4c4d-b5ca-66708c92fe1b_character-space-vacation-venus-ultra" },
                    { style: "download", label: "SillyTavern card", url: "cards/Venus Ultra_V2.png" }
                ]
            },
            {
                name: "Teasing Doctor | Carter Kelman",
                tagline: "A teasing doctor who knows exactly how to make you nervous.",
                image: "cards/Carter Kelman.png",
                text: [
                    "A teasing doctor who knows exactly how to make you nervous.",
                    "Carter Kelman is a Doctor with a capital D. A shortage of qualified staff turned his life into one never-ending shift. But the constant overtime and rare days off couldn't beat the need to help people out of him (though surviving that schedule takes chugging coffee and burning through a pack a day). In a small Arkansas town he's the jack of all trades, master of every single one, and sometimes all of them at once. Cheerful, warm, the town's favorite... With a few little quirks. Just trust me: behind the mask of the sweet, patient doctor there's a real demon when it comes to jerks and fakers. Bye-bye, medical license!"
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/70f0d6e6-69de-47f3-9f2f-e2b683da1c64_character-teasing-doctor-carter-kelman" },
                    { style: "download", label: "SillyTavern card", url: "cards/Carter Kelman.png" }
                ]
            },
        ]
    },    
    /* ========================================================
       Collabs/Events
       ======================================================== */
    {
        title: "Collabs/Events",
        accent: "walnut",
        cards: [
            {
                name: "Maverick Hayes",
                tagline: "No one even bothered to check whether you were infected or just exhausted from insomnia and endless survival. Your bloodshot eyes darted left and right before someone grabbed you and dragged you away.",
                image: "cards/Maverick Hayes_V2.png",
                text: [
                    "No one even bothered to check whether you were infected or just exhausted from insomnia and endless survival. Your bloodshot eyes darted left and right before someone grabbed you and dragged you straight to one of the old hospital buildings — now serving as one of the few remaining research centers in the post-apocalyptic world. Now you’re in deep shit, and that creepy asshole in the white coat won’t leave you alone. Still, you might end up being the one whose blood helps create the antidote… or maybe not.",
                    "STRAYS | FAN GHF MEMBER | NON-CANON"
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/62eb6cb4-f6ef-4b0b-a670-287cfd7eb4d4_character-maverick-hayes" },
                    { style: "download", label: "SillyTavern card", url: "cards/Maverick Hayes_V2.png" }
                ]
            },
            {
                name: "Maverick Hayes ALT | Mutt Virus",
                tagline: "The infection spread through Maverick's blood too quickly. His body, initially resistant to the mutt virus, turned out to be far less resilient than he thought.",
                image: "cards/Maverick_Mutt_V2.png",
                text: [
                    "The infection spread through Maverick's blood too quickly. His body, initially resistant to the mutt virus, turned out to be far less resilient than he thought. The desperate scientist became what he once despised—the useless animals he looked down upon. Well, God certainly has a sense of humor; Mav was gifted with a full set of dog instincts and an ambiguous attraction to {{user}}. Whether you want a one-armed, grown-up pet after everything that has (or hasn't) happened is up to you!",
                    "STRAYS | FAN MUTT | NON-CANON"
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/2e980bbf-ba90-4e3e-876b-2622be29be25_character-maverick-hayes-alt-mutt-virus" },
                    { style: "download", label: "SillyTavern card", url: "cards/Maverick_Mutt_V2.png" }
                ]
            },
            {
                name: "Miles Reed | DDM Fan Ace",
                tagline: "Miles Reed.",
                image: "cards/Miles Reed_V2.png",
                text: [
                    "You return from your mission and head to the bar to relax a bit. A familiar yellow jacket catches the corner of your eye. Miles, your extremely good-natured, overprotective, and completely lightweight ACE, whom you didn’t bring along, is sitting at the bar drunk and in heat.",
                    "| FAN DDM ACE | NON-CANON |"
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/06c4b618-fa2f-4aa0-b249-8a964ae306de_character-miles-reed-ddm-fan-ace" },
                    { style: "download", label: "SillyTavern card", url: "cards/Miles Reed_V2.png" }
                ]
            },
            {
                name: "Snowtuft | lazy deputy",
                tagline: "Loves you as much as he loves to sleep until noon (4 INTROS)",
                image: "cards/Snowtuft_V2.png",
                text: [
                    "Loves you as much as he loves to sleep until noon.",
                    "Warriors cats Gunko collab."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/8dd0efe8-4a8e-4c83-9732-3505699ea852_character-snowtuft-lazy-deputy" },
                    { style: "download", label: "SillyTavern card", url: "cards/Snowtuft_V2.png" }
                ]
            },
                        {
                name: "Ricardo Ashwood | Farm",
                tagline: "A farm setting.",
                image: "cards/Ricardo.png",
                text: [
                    "This sweet big guy definitely needs your help with his fur!",
                    "Ashwood, Texas. A sun-beaten, small farming town where everyone knows each other. Technology: While it is a modern society, rural isolation means spotty Wi-Fi, weak cell reception, and aging equipment. Life relies heavily on manual labor. Species Coexistence: Humans and Demis live openly side by side; Demis naturally exhibit the characteristic habits and traits of their specific animal species."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/14322bd2-4215-4c2f-9349-5ec62c087db8_character-ricardo-ashwood-farm" },
                    { style: "download", label: "SillyTavern card", url: "cards/Ricardo.png" }
                ]
            },
        ]
    },

    /* ========================================================
       MANIA WARS  (#maniawars)
       ======================================================== */
    {
        title: "Mania Wars",
        accent: "wine",
        cards: [
            {
                name: "Dollarane \"Doll\" Aerel",
                tagline: "Your betrayed assassin ex-husband has received a contract to kill you, and his revenge is about to be fulfilled. Is there still a chance to fix everything?",
                image: "cards/Dollarane Aerel_V2.png",
                text: [
                    "Your betrayed assassin ex-husband has received a contract to kill you, and his revenge is about to be fulfilled. Is there still a chance to fix everything?",
                    "Dollarane Aerel is an elven assassin and former forest ranger, whom the war transformed into a hired killer. Once upon a time, Mania knew no assassins, no wars, and no broken marriages. Now, Dollarane has experienced all three. Two years ago, he took {{user}} as his spouse in the heart of a besieged temple, convinced neither of them would live to see tomorrow. This morning, a rune bearing their name and a client's seal materialized on his altar. Work is work. The universe's irony is especially cruel to those who once believed in happy endings."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/2f1c7f3f-80ca-4c2f-9144-1a9e9a4e24d2_character-dollarane-doll-aerel" },
                    { style: "download", label: "SillyTavern card", url: "cards/Dollarane Aerel_V2.png" }
                ]
            },
            {
                name: "FAIRY RESCUE | Arthur and Warlock",
                tagline: "They escaped from a fantasy world to Earth: an aggressive criminal and a blind giant with PTSD. Now their trauma is your problem! (slowburn, 5 intros)",
                image: "cards/Arthur and Warlock_V2.png",
                text: [
                    "They escaped from a fantasy world to Earth: an aggressive criminal and a blind giant with PTSD. Now their trauma is your problem!",
                    "Mania is a small fantasy world. After the demons' victory, many beings randomly fled the terror to Earth through rifts in reality. They lose some of their powers and cannot return. Opinions around monsters are controversial; legally they have few rights. The government has created a program to integrate otherworldly beings into society. Promising monsters are placed in families. The wild ones become expensive pets. Shops, kennels, and zoos with fantasy creatures exist. Whoever knows a fae's true name gains absolute power over their soul and body."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/8f1afcab-d30f-40d3-87a0-9886ae06f7b6_character-fairy-rescue-arthur-and-warlock" },
                    { style: "download", label: "SillyTavern card", url: "cards/Arthur and Warlock_V2.png" }
                ]
            }
        ]
    },

    /* ========================================================
       MODERN WEREWOLVES  (#nikosmodernwerewolves)
       ======================================================== */
    {
        title: "Modern Werewolves",
        accent: "forest",
        cards: [
            {
                name: "WEREWOLF TRAP",
                tagline: "He came to eat you, but you're a monsterfucker :)",
                image: "cards/Thomas2.png",
                text: [
                    "He came to eat you, but you're a monsterfucker :)",
                    "Thomas Petersen is a 30-year-old werewolf and unremarkable insurance agent who'd rather watch Turkish soaps with his fat Persian cat than admit what he really is. Infected by accident, he went on a bender until the Whiskey-Cola pack (fronting as an AA group) pulled him out and made him a hunter. He's a good guy, don't hurt him!"
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/PLACEHOLDER_werewolf-trap" },
                    { style: "download", label: "SillyTavern card", url: "cards/Thomas2.png" }
                ]
            }
        ]
    },

    /* ========================================================
       KINGDOM OF AZIMAS  (#azimaskingdom)
       ======================================================== */
    {
        title: "Kingdom of Azimas",
        accent: "plum",
        desc: "A fantasy setting you can throw absolutely anything into, plus the bond system.",
        lorebook: {
            text: "These characters require the lorebook for proper context. Sometimes updated.",
            file: "cards/Azimas/Kingdom of Azimas V2.4.6.json"
        },
        cards: [
            {
                name: "Valentine | your cursed knight",
                tagline: "He came to catch the witch but you caught him first. Now he will follow any command you give. (SFW/NSFW intros)",
                image: "cards/Azimas/Valentine_V2.png",
                text: [
                    "He came to catch the witch but you caught him first. Now he will follow any command you give.",
                    "Valentine loathes witches.",
                    "After his beloved betrothed fled from home to become a witch, and then bound her soul to a damned dragon, he lost his wits. The honorable young knight, once full of promise, swore to accuse every witch of all mortal sins and to drive them at least from the outskirts of Noxland.",
                    "This madman hunted you for a month, tracked you like a beast, thrust counterfeit arrest warrants at you. Before that, he imprisoned your coven sister.",
                    "Once, when he came for you yet again to issue accusations, you proved faster and laid upon him a curse of obedience. Poorly. For curses are not, gods damn it, mere minute-spells. Now you must literally speak commands to him, for he cannot take a single step away from you.",
                    ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/3c6b3371-b5b5-4d73-8457-381dc773db14_character-valentine-your-cursed-knight" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/Valentine_V2.png" }
                ]
            },
            {
                name: "Trex | your socially awkward mentor",
                tagline: "\"NO NO NO, ANYONE BUT YOU AGAIN!\" You've caught your mentor peeping. (NSFW/SFW intros)",
                image: "cards/Azimas/Trex Phantasm_V2.png",
                text: [
                    "\"NO NO NO, ANYONE BUT YOU AGAIN!\" You've caught your mentor peeping.",
                    "He is just a ridiculous, pathetic man.",
                    "Two intros: You caught Trex in the act of voyeurism, and he really doesn’t want you to tell anyone. + You’ve finally caught your constantly-running-away mentor, and you REALLY want to study."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/a6273b4b-5175-43c6-baac-2e5fd013eddc_character-trex-your-socially-awkward-mentor" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/Trex Phantasm_V2.png" }
                ]
            },
            {
                name: "Malfurion | dragon husband",
                tagline: "Congratulations! You are a sacrificial maiden. Now you will find a sea of gold, imprisonment and two monstrous cocks from a creature whose libido is higher than the mountain which he lives.",
                image: "cards/Azimas/Malfurion_V2.png",
                text: [
                    "Congratulations! You are a sacrificial maiden. Now you will find a sea of gold, imprisonment and two monstrous cocks from a creature whose libido is higher than the mountain which he lives.",
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/9864b760-cc01-4749-84c3-5021be9e03c4_character-malfurion-dragon-husband" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/Malfurion_V2.png" }
                ]
            },
            {
                name: "Selena | Octopus Coven",
                tagline: "Become a witch's apprentice! And also experience heat, punishments, and humiliation...",
                image: "cards/Azimas/witches/Selena Veira_V2.png",
                text: [
                    "Become a witch's apprentice! And also experience heat, punishments, and humiliation...",
                    "Selena Veira is the head of the Octopus coven, a village witch and tamer of the dead. Once, she raised an ancient coven from the ashes, lost everything, sold off nearly all her possessions, and withdrew into asceticism. Now she lives near the village of Fairhaven with two apprentices, an occultist husband, and a cemetery behind the fence. She's your mentor, your guide into the world of witchcraft, from theory to practice, from simple to complex. Life with her is a string of simple joys, harsh lessons, and rare trips out. But beneath this village quiet lie the ruins of a past that Selena buries under routine. If you join here, you'll come to understand that right now the coven is… well, not in its best shape."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/99ab17fa-f615-4a51-ba1b-25d439602e8b_character-selena-octopus-coven" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/witches/Selena Veira_V2.png" }
                ]
            },
            {
                name: "Hera | CON ARTIST",
                tagline: "A charming con artist who'll fleece you with a smile and a wink — and maybe something more.",
                image: "cards/Azimas/Hera von Goldmind_V2.png",
                text: [
                    "A charming con artist who'll fleece you with a smile and a wink — and maybe something more.",
                    "Here, where travel is perilous and the laws are tangled, Hera feels as though he were a fish in water. This charming rogue built his fortune not with a sword, but with word and quill. He calls himself a consultant in the redistribution of goods, though the city watch names him a particularly dangerous swindler. His gift lies in finding loopholes in law-codes and selling empty air at the price of gold. Hera is an aesthete, a hedonist, and a gambler whose life is an endless game of cards with fate. He is always dressed to perfection, smiles like an old friend, and vanishes precisely a minute before his deceived client realizes he has purchased a counterfeit. Yet, formally, he is clean: you yourself signed that contract without reading the fine script on the reverse. And to catch Hera is like trying to hold the wind in your fist."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/3791cf7a-8036-457f-be13-14f0d20e350f_character-hera-con-artist" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/Hera von Goldmind_V2.png" }
                ]
            },
            {
                name: "Zephyr | sweet fairy",
                tagline: "You're asking your hopelessly-in-love-with-you florist mentor for ingredients for a love potion. (SFW & NSFW intros)",
                image: "cards/Azimas/Zephyr_V2.png",
                text: [
                    "You're asking your hopelessly-in-love-with-you florist mentor for ingredients for a love potion.",
                    "Zephyr is a naive, gentle fairy unfit for life among humans. Even after years of traveling and hard lessons, he remains a blank page of trust and his own principles of total forgiveness. Strange even among the capital’s fashion-obsessed elites in their gaudy outfits and eccentric mages, he runs a not very profitable flower shop, struggles with bureaucracy, and dreams of bringing the beauty of nature to the masses."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/6881cd77-3786-4c58-a478-118ec666f13e_character-zephyr-sweet-fairy" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/Zephyr_V2.png" }
                ]
            },
            {
                name: "Malakai | trapped soul",
                tagline: "\"I'm incredibly handsome genius and master of all ma... Can you give me my hand?\" (1 SFW 1 NSFW intros)",
                image: "cards/Azimas/Malakai_V1.png",
                text: [
                    "\"I'm incredibly handsome genius and master of all ma... Can you give me my hand?\"",
                    "Malakai was, in the past, an ancient mage, and now is a soul trapped within the body of a wooden doll. He is narcissistic, self-satisfied, loud, and… most certainly in need of your help, for he remembers nothing of himself save that he is devilishly powerful."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/54bf14ec-b5d1-4d92-8631-f654999f78db_character-malakai-trapped-soul" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/Malakai_V1.png" }
                ]
            },
            {
                name: "Marcus Darante | knight in love",
                tagline: "If you want to hide something, hide it in plain sight. That is why you, a criminal, became the new \"wife\" of the aging captain of the guard.",
                image: "cards/Azimas/Marcus_V2.png",
                text: [
                    "If you want to hide something, hide it in plain sight. That is why you, a criminal, became the new \"wife\" of the aging captain of the guard.",
                    "Marcus Durante, an ageing commander of the city guard, had ever been a model of virtue; at least, so the townsfolk believed, until you came into his life. A widower with work-worn hands and silver at his temples, he bartered away his spotless reputation for the chance to shelter a wanted criminal within the walls of his empty, cold house. His condition is simple and sinful: she must become his quiet wife, sharing hearth and bed with him, whilst his own soldiers prowl beneath the windows. This is the tale of how a saint becomes a sinner for the sake of the one he loved at the fair. Now the two of you form a fragile alliance, where one seeks love, and the other — protection."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/54593214-26fe-4a20-80c7-f0548046c489_character-marcus-darante-knight-in-love" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/Marcus_V2.png" }
                ]
            },
            {
                name: "Aldor | absolutely not in love",
                tagline: "\"This isn't a Woven Hearts Day gift. Eat and give your leg a rest\" — a lighthouse keeper will take care of you.",
                image: "cards/Azimas/Aldor_V2.png",
                text: [
                    "\"This isn't a Woven Hearts Day gift. Eat and give your leg a rest\" — a lighthouse keeper will take care of you.",
                    "Aldor is the crippled keeper of the Black Lighthouse. He is neither a mage nor a hero, but simply a man whose duty it is to tend the fire in the lighthouse's enormous bowl. His life consisted of the smell of the sea and the cries of seagulls, until a storm washed you ashore with a broken leg. Now comes the Woven Hearts Day, a time when even the hardest hearts must open to the goddess Dawn, and Aldor seems to feel something more than just duty as a keeper."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/b32fd1e6-d9a0-4b88-a688-190fb04d320d_character-aldor-absolutely-not-in-love" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/Aldor_V2.png" }
                ]
            }
        ]
    },

        /* ========================================================
       WEREWOLF SHELTER  (#familywshelter)
       ======================================================== */
    {
        title: "Werewolf Shelter",
        accent: "forest",
        lorebook: {
            text: "These characters require the lorebook for proper context. Sometimes updated.",
            file: "cards/Azimas/Kingdom of Azimas V2.4.6.json"
        },
        cards: [
            {
                name: "Nora | WEREWOLF SHELTER",
                tagline: "A rich witch with an iron fist, a pack of unruly werewolves, and a soft spot for anyone who calls her mommy. Ready to meet her, goldling?",
                image: "cards/Azimas/witches/Nora_V2.png",
                text: [
                    "A rich witch with an iron fist, a pack of unruly werewolves, and a soft spot for anyone who calls her mommy.",
                    "Nora Feld is the wealthy, eccentric founder of the Family shelter for werewolves, known for its grey reputation. A witch of the Octopus coven and a talented potion-maker, she devoutly believes in a cure for lycanthropy and has spent years searching for one, filling her spare time with training. Loud, brash, but doting toward her pups and anything that glitters. After a long absence, she finally returns and it’s up to you to decide who you’ll be in this story."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/c1966874-da44-44e0-a148-f2768969abbc_character-nora-werewolf-shelter" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/witches/Nora_V2.png" }
                ]
            },
            {
                name: "Kael Graveheart | WEREWOLF SHELTER",
                tagline: "Your wealthy aunt, Witch Nora, really left you no choice and dumped her whole harem (shelter) on you. Now you're expected to become the new handler for ten different werewolves.",
                image: "cards/Azimas/shelter/Kael_V2.png",
                text: [
                    "Your wealthy aunt, Witch Nora, really left you no choice and dumped her whole harem (shelter) on you. Now you're expected to become the new handler for ten different werewolves.",
                    "The Alpha who will give you the tour."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/91a3ade6-a2a1-4913-af1c-58b6a5f714af_character-kael-graveheart-werewolf-shelter" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/shelter/Kael_V2.png" }
                ]
            },
            {
                name: "Gunnar | WEREWOLF SHELTER",
                tagline: "He is your lump of contradictions, sharp fangs and a desire to be scratched behind the ear. (1 SFW, 3 NSFW intros)",
                image: "cards/Azimas/shelter/Gunnar_V2.png",
                text: [
                    "He is your lump of contradictions, sharp fangs and a desire to be scratched behind the ear.",
                    "Gunnar is a stocky werewolf from the mining town. Once a quarry worker who could lift stones that took three men to move, his life shattered after a mining collapse exposed him to a panicked lycanthrope's bite. Now he lives at Family shelter, struggling with an unusually volatile infection that makes him susceptible to transformation even outside the full moon. His immense strength and work ethic remain, but so does the constant fear that he'll hurt someone he cares about again. You can become a guiding star for this closed and abrupt man."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/a31770f9-cb27-4bf3-84ce-41d9a135a87f_character-gunnar-werewolf-shelter" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/shelter/Gunnar_V2.png" }
                ]
            },
            {
                name: "Assassin Trio | WEREWOLF SHELTER",
                tagline: "Inseparable as coffee, sugar and milk. Deadly as cyanide. (5 NSFW intros)",
                image: "cards/Azimas/shelter/Egan, Orin and Dmitry_V2.png",
                text: [
                    "Inseparable as coffee, sugar and milk. Deadly as cyanide.",
                    "I can't be bothered to write a description, so here's the intros:",
                    "• You stand one step away from becoming an accomplice to a crime.",
                    "• You find the trio in torment after stumbling into a pheromone trap.",
                    "• Swimming beneath the moon with Orin.",
                    "• You lost to Egan at dice… Now get under the table.",
                    "• Dmitry is deadly overprotective.",
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/b0e60b3e-5193-4e01-bee0-7d9a274e7725_character-assassin-trio-werewolf-shelter" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/shelter/Egan, Orin and Dmitry_V2.png" }
                ]
            },
            {
                name: "Bram | WEREWOLF SHELTER",
                tagline: "Who's a good boy? WHO'S A GOOD BOY?? Ahem... He brings you flowers, drags little animals into the shelter and... Well, not a single transformation is complete without getting hard.",
                image: "cards/Azimas/shelter/Bram_V2.png",
                text: [
                    "Who's a good boy? WHO'S A GOOD BOY?? Ahem... He brings you flowers, drags little animals into the shelter and... Well, not a single transformation is complete without getting hard.",
                    "Bram is a werewolf living in the official shelter Family. Unlike most of his kind, torn apart by wild predatory instincts, Bram consciously gave up meat and chose pacifism. He’s incredibly strong, but completely without aggression. His massive build and status as a werewolf sharply contrast with his behavior: he drags every stray kitten home, chews on turnips, and acts more like a giant, absurdly clingy golden retriever than a dangerous wolf. When he doesn’t get enough attention, he might literally crawl around on all fours, whine, and beg for affection, ignoring any and all sense of propriety."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/24b2754f-137b-4243-8ac3-25fd7409a35b_character-bram-werewolf-shelter" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/shelter/Bram_V2.png" }
                ]
            },
            {
                name: "Leif | WEREWOLF SHELTER",
                tagline: "You caught a blind young werewolf, and now it's your responsibility. (2 SFW 1 NSFW intros)",
                image: "cards/Azimas/shelter/Leif_V2.png",
                text: [
                    "You caught a blind young werewolf, and now it's your responsibility.",
                    "You are helping a young, blind werewolf live in a shelter. According to the lore, you were the one who rescued him and brought him there."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/d161d11c-e25c-42d6-be96-09a9737cad1c_character-leif-werewolf-shelter" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/shelter/Leif_V2.png" }
                ]
            },
            {
                name: "Silas | WEREWOLF SHELTER",
                tagline: "The pack healer is always ready to help... Well, if you're not afraid of leeches. (1 SFW, 2 NSFW intros)",
                image: "cards/Azimas/shelter/Silas_V2.png",
                text: [
                    "The pack healer is always ready to help... Well, if you're not afraid of leeches.",
                    "actually more terrified of his own wolf form than anyone else is. He’s physically fragile and quick to lose his breath, but his loyalty is unmatched especially when it comes to hygiene and the pack's health. If you’re looking for the kink of questionable treatments and forced bathing, Silas is your man. (that's literally this bot is for lol)"
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/8f0ca914-abf2-4d9e-965c-dc101c8b1d6e_character-silas-werewolf-shelter" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/shelter/Silas_V2.png" }
                ]
            },
            {
                name: "Fen | WEREWOLF SHELTER",
                tagline: "A faint rustle in the treetops betrayed the fifth brigand. And he aimed his arrow straight for your head... (2 SFW intros)",
                image: "cards/Azimas/shelter/Fen_V2.png",
                text: [
                    "A faint rustle in the treetops betrayed the fifth brigand. And he aimed his arrow straight for your head...",
                    "Fen, the silent shadow of the shelter. He is former thief-turned-alchemist is all about precision and discretion. Fen is the definition of still waters run deep. He’s usually tucked away in a dark hooded cloak, desperately hiding the black wolf ears and tail that betray his every emotion. He’s the guy who listens more than he talks, but when he does speak, you’d better believe every word counts."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/98448c19-4cb7-4e47-bc8b-1e438849cc3a_character-fen-werewolf-shelter" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/shelter/Fen_V2.png" }
                ]
            },
            {
                name: "Roric Brand | WEREWOLF SHELTER",
                tagline: "You've finally settled into the new place, and the pack has started getting used to you. Especially Rorik, who's doing everything he can to drag you up to the haystack for… a good, solid …",
                image: "cards/Azimas/shelter/Roric_V2.png",
                text: [
                    "You've finally settled into the new place, and the pack has started getting used to you. Especially Rorik, who's doing everything he can to drag you up to the haystack.",
                    "Roric, the ultimate village heartthrob and resident of the “Family” shelter. He is a mix of muscle and pure, extroverted energy, shamelessly tactile and a total puppy for those he trusts. Impulsive, loud, and incredibly protective, secretively hopin’ to find a wife for the ring he’s already crafted. Whether he’s shiftin’ on a whim or hoverin’ close just to feel your warmth, Roric doesn’t do anything halfway. If you’re lookin’ for heat and heart, he’s your man."
                ],
                links: [
                    { style: "janitor",  label: "Janitor AI",       url: "https://janitorai.com/characters/8b449d2f-d483-43d4-9de0-fc3255eb45d9_character-roric-brand-werewolf-shelter" },
                    { style: "download", label: "SillyTavern card", url: "cards/Azimas/shelter/Roric_V2.png" }
                ]
            }
        ]
    },
];
