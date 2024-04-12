# README

This repository aims to unify several disparate JavaScript projects, envisioning them as different programs on an imaginary (haunted) alternate history computing device. Each sketch utilizes the 'Libuše' tileset in unique ways.

The repository contains several HTML documents, each loading a different script. In the final version, a Node.js application will use input from Raspberry Pi GPIO pins to switch between the scripts: `dungeon.js` is my roguelike game experiment; `abyss.js` and `knit.js` are pattern generators; `saltwave.js` is an animated cellular automaton. Currently, to view them, use a local server (for instance, in VS Code).

___

**Background:**

The manner in which text is read influences our perception of how time flows in relation to space (Bergen and Chan Lau, 2012; Yang and Sun, 2018; Park, Gagné, and Spalding, 2024). A Mandarin writer may describe moving 'downward' into tomorrow, reflecting the direction in which they write—starting at the top of a page and moving downward (the Mandarin word xià means both “next” and “down” (Park, Gagné, and Spalding, 2024, p.02)). On a surface level we may say that time itself has no spatial aspect, and these metaphors that ascribe a directional axis to time begin with language and writing, but there are powerful precedents to consider. Falling downward can feel like being swept along by the relentless flow of time, whereas walking forward suggests moving at one’s own volition or marching in sync with others through time. Benjamin describes the Angel of History as being propelled backwards into the future, with wings like sails that cannot be closed. While it's a stretch to say that these bodily sensations of moving through time inform writing systems directly, there is a connection between the phenomenology of bodily movement through time and the structuring of thought through writing.

Early computer games utilized character-based graphics on a grid to create dynamic, map-like images for players to explore. These designs blurred the distinctions between image and text, as well as orientation. Characters in an interface might be read from left to right, or might be interpreted as viewing a map from above, but are animated through time.

My angel of history is the mythological Czech prophetess Libuše, a pagan witch who, in stories, foretells the founding of Prague. In my own allegory, Libuše descends into the past, as depicted in her prophecy about the Ore Mountains, initially mined for silver and later for uranium (Veselovský, Ondruš, and Komínek, 1997). With each shift in power, rulers altered her prophecy. The prophetess knows the future because she is compelled to utter the words of future writers. Her words resonate not in the past, crowded with the unresponsive dead, but with us in the future.

Libuše's identity might stem from a mistranslation. Kosmas of Prague first mentioned her in the Chronica Boemorum in 1125, but his enumeration of the names of the Přemyslov family (Libuše’s lineage, mythical chieftains of an early Czech tribe) closely resembles what could be a Latin transcription of Old Slavic words intended to deter Frankish aggressors. Thus, the prophetess herself is a construct of language.

In 1817, a forged medieval manuscript attempted to place Libuše further back in history than Kosmas had indicated. This is not an isolated incident—myths often forcefully insert themselves into history through forgery and strategic archival placements. The future she predicts is continually changing.

In this project, the grid holds a confused time and space. The glyphs function both as components of larger images and as maps, as letterforms that can be written in four directions or animated, and as symbols with intrinsic meanings. The generated text is sourced from various corpuses, including *De Re Metallica*, a medieval mining text that bridged alchemy and modern metallurgy. This text dates back to the initial period of mining in the Ore Mountains, then part of Bohemia. This area was where coinage was standardized in Europe (the “thaler”, the etymological root of the modern word “dollar”), and later where radioactive pitchblende was first employed in fluorescent glazes for glasswork, and subsequently used by the Curies to isolate radium. *De Re Metallica* was initially translated into English from Latin by Lou Henry and Herbert Hoover—the former a mining engineer before his political career, and the latter, his wife, a geologist proficient in both Latin and Mandarin.

---

Bergen, Benjamin K., and Ting Ting Chan Lau. 2012. “Writing Direction Affects How People Map Space Onto Time.” Frontiers in Psychology 3 (April): 109. <https://doi.org/10.3389/fpsyg.2012.00109>.
Park, Juana, Christina L. Gagné, and Thomas L. Spalding. 2024. “Writing Direction and Language Activation Affect How Arabic-English Bilingual Speakers Map Time onto Space.” Frontiers in Psychology 14 (January): 1356039. <https://doi.org/10.3389/fpsyg.2023.1356039>.
Veselovský, František, Petr Ondruš, and Í Komínek. 1997. “History of the Jáchymov (Joachimsthal) Ore District.” Journal of the Czech Geological Society.
Yang, Wenxing, and Ying Sun. 2018. “Do Writing Directions Influence How People Map Space onto Time?: Evidence from Japanese and Taiwanese Speakers.” Swiss Journal of Psychology 77 (4): 173–84. <https://doi.org/10.1024/1421-0185/a000215>.
