/**
 * Enrich G6S1 — all 28 lessons with vocabWords and grammarPoints
 * Run: node build/enrich_g6s1.js
 *
 * SECURITY NOTE: Build-time data enrichment script operating on trusted local files.
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g6s1.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// ═══════════════════════════════════════════
// UNIT 1 — 触摸山川湖海
// ═══════════════════════════════════════════

En('The Grassland', [
  ['一碧千里','yī bì qiān lǐ','a boundless stretch of green','在天底下，一碧千里，而并不茫茫。','Beneath the sky, a boundless green stretched in every direction.'],
  ['渲染','xuàn rǎn','to render; to wash (in painting)','就像只用绿色渲染，不用墨线勾勒的中国画那样。','Like a Chinese painting done only in green wash without ink outlines.'],
  ['襟飘带舞','jīn piāo dài wǔ','sashes and ribbons fluttering','群马疾驰，襟飘带舞，像一条彩虹向我们飞过来。','Galloping horses with sashes fluttering, like a rainbow flying toward us.'],
  ['拘束','jū shù','restrained; constrained','谁都有礼貌，谁都又那么亲热，一点儿不拘束。','Everyone was polite yet warm, completely at ease.'],
  ['洒脱','sǎ tuō','carefree; unrestrained','草原上行车十分洒脱，只要方向不错，怎么走都可以。','Driving on the grassland was carefree — any direction would do.']
], [
  ['情景交融','qíng jǐng jiāo róng','blending scenery with emotion','这种境界，既使人惊叹，又叫人舒服。','This scene both amazed and soothed.','将作者的感受融入景物描写中','Blend the author\u2019s feelings into scenery descriptions'],
  ['比喻','bǐ yù','metaphor','羊群一会儿上了小丘，一会儿又下来，走在哪里都像给无边的绿毯绣上了白色的大花。','Sheep went up and down the hills, like white flowers embroidered on an endless green carpet.','用比喻使描写更加生动','Use metaphor to make descriptions more vivid']
]);

En('Lilac Knots', [
  ['幽雅','yōu yǎ','quiet and elegant','还有淡淡的幽雅的甜香。','There was a faint, refined sweetness.'],
  ['朦胧','méng lóng','hazy; dim','月光下白的潇洒，紫的朦胧。','Under moonlight the white ones looked elegant, the purple ones hazy.'],
  ['愁怨','chóu yuàn','sorrow and resentment','真觉得它们负担着解不开的愁怨了。','One truly feels they carry unsolvable sorrows.'],
  ['妩媚','wǔ mèi','charming','着了水滴的丁香格外妩媚。','Water-touched lilacs are especially charming.'],
  ['恍然','huǎng rán','suddenly (realize)','我才恍然，果然是丁香结。','Then it dawned on me: indeed, a lilac knot.']
], [
  ['借物喻理','jiè wù yù lǐ','using an object to convey a truth','丁香结，年年都有。结，是解不完的。','Lilac knots appear year after year. Knots can never be fully untied.','借丁香结象征人生的愁绪与问题','Use lilac knots to symbolize life\u2019s sorrows and problems']
]);

En('Three Ancient Poems', [
  ['烟渚','yān zhǔ','misty islet','移舟泊烟渚，日暮客愁新。','Moving the boat to moor by a misty islet, at dusk new sorrows stir.'],
  ['野旷','yě kuàng','vast wilderness','野旷天低树，江清月近人。','The wilderness stretches, sky lower than the trees; the river clear, moon near.'],
  ['丰年','fēng nián','bountiful year','稻花香里说丰年，听取蛙声一片。','In the fragrance of rice flowers they speak of harvest; listen to the chorus of frogs.'],
  ['翻墨','fān mò','overturned ink','黑云翻墨未遮山，白雨跳珠乱入船。','Black clouds like overturned ink, not yet hiding the hills; white rain like jumping pearls.'],
  ['茅店','máo diàn','thatched inn','旧时茅店社林边，路转溪桥忽见。','By the old thatched inn near the village shrine, the path turns and there it appears.']
], null);

En('Song of the Flower', [
  ['大自然','dà zì rán','nature','我是大自然的话语。','I am the words of Nature.'],
  ['苍穹','cāng qióng','the blue dome of heaven','我是星星，从苍穹坠落在绿茵中。','I am a star, fallen from the blue dome into a green meadow.'],
  ['孕育','yùn yù','to nurture; to conceive','冬将我孕育，春使我开放。','Winter conceives me, Spring unfolds me.'],
  ['冠冕','guān miǎn','crown','我是婚礼的冠冕。','I am the crown of weddings.'],
  ['心驰神往','xīn chí shén wǎng','filled with longing','我总是仰望高空，对光明心驰神往。','I always look upward, yearning for the light.']
], null);

// ═══════════════════════════════════════════
// UNIT 2 — 革命岁月
// ═══════════════════════════════════════════

En('Seven-Character Regulated Verse: The Long March', [
  ['等闲','děng xián','trivial; ordinary','万水千山只等闲。','Ten thousand waters and a thousand mountains are but trifles.'],
  ['逶迤','wēi yí','winding; meandering','五岭逶迤腾细浪。','The Five Ridges wind like gentle ripples.'],
  ['磅礴','páng bó','majestic; boundless','乌蒙磅礴走泥丸。','The vast Wumeng range rolls by like mud balls.'],
  ['铁索','tiě suǒ','iron chains','大渡桥横铁索寒。','Cold are the iron chains spanning the Dadu Bridge.'],
  ['开颜','kāi yán','to beam with delight','三军过后尽开颜。','After crossing, every face beams with delight.']
], [
  ['夸张','kuā zhāng','hyperbole','五岭逶迤腾细浪，乌蒙磅礴走泥丸。','The Five Ridges wind like gentle ripples, the vast Wumeng rolls by like mud balls.','用夸张手法表现红军的英雄气概','Use hyperbole to express the heroic spirit of the Red Army']
]);

En('Five Heroes of Mount Langya', [
  ['斩钉截铁','zhǎn dīng jié tiě','resolute; decisive','班长马宝玉斩钉截铁地说了一声："走！"','Squad Leader Ma Baoyu said resolutely: "Go!"'],
  ['居高临下','jū gāo lín xià','to command from a height','五位壮士居高临下，继续向敌人射击。','The five heroes fired down at the enemy from the heights.'],
  ['豪迈','háo mài','bold and heroic','狼牙山上响起了他们壮烈豪迈的口号声。','Their heroic battle cries echoed across Langya Mountain.'],
  ['全神贯注','quán shén guàn zhù','fully concentrated','全神贯注地瞄准敌人射击。','They aimed at the enemy with intense concentration.'],
  ['掩护','yǎn hù','to cover; to provide cover','把掩护群众和连队转移的任务交给了六班。','The task of covering the retreat was assigned to the Sixth Squad.']
], [
  ['点面结合','diǎn miàn jié hé','combining individual focus with group overview','班长马宝玉沉着地指挥战斗……副班长葛振林打一枪就大吼一声。','Squad Leader Ma calmly directed; Deputy Squad Leader Ge roared with each shot.','先写群体再写个人，使场面更生动','Describe the group first, then individuals, to make scenes more vivid']
]);

En('The Founding Ceremony', [
  ['典礼','diǎn lǐ','ceremony','在首都北京举行典礼。','A ceremony was held in the capital, Beijing.'],
  ['排山倒海','pái shān dǎo hǎi','overwhelming; earth-shattering','会场上爆发出一阵排山倒海的掌声。','Thunderous, earth-shattering applause erupted.'],
  ['瞻仰','zhān yǎng','to gaze up with reverence','三十万人一齐抬起头，瞻仰这鲜红的国旗。','Three hundred thousand people gazed up at the bright red flag.'],
  ['宣布','xuān bù','to proclaim','毛泽东主席宣布："中华人民共和国中央人民政府今天成立了！"','Chairman Mao proclaimed the founding of the government.'],
  ['肃立','sù lì','to stand solemnly','三十万人一齐脱帽肃立。','Three hundred thousand people stood at attention.']
], [
  ['场面描写','chǎng jǐng miáo xiě','scene description','开头是海军两个排，雪白的帽子，跟海洋一个颜色的蓝制服。','First came two platoons of the Navy in snow-white caps and ocean-blue uniforms.','按顺序描写阅兵式各兵种，层次分明','Describe each military branch in order for a clear, layered scene']
]);

En('The Light', [
  ['璀璨','cuǐ càn','brilliant; dazzling','在天安门前璀璨的华灯下面。','Beneath the brilliant lights of Tiananmen.'],
  ['赞叹','zàn tàn','to exclaim with admiration','忽然背后传来一声赞叹："多好啊！"','A voice behind exclaimed: "How wonderful!"'],
  ['微弱','wēi ruò','faint; feeble','他借着微弱的亮光看一本书上的插图。','By firelight he studied a book illustration.'],
  ['牺牲','xī shēng','to sacrifice','他自己却没有来得及见一见电灯。','He himself never got to see an electric light.'],
  ['沉入','chén rù','to sink into','于是，我沉入了深深的回忆。','I sank into deep memory.']
], null);

En('My Comrade Qiu Shaoyun', [
  ['潜伏','qián fú','to lie hidden','我们在391高地的山坳里潜伏起来。','We lay hidden in a gully on Hill 391.'],
  ['僵卧','jiāng wò','to lie rigidly still','我们必须僵卧着一动不动。','We had to lie absolutely still.'],
  ['燃烧弹','rán shāo dàn','incendiary bomb','敌人用燃烧弹进行搜索。','The enemy launched a search with incendiary bombs.'],
  ['纹丝不动','wén sī bù dòng','motionless; perfectly still','像千斤巨石，伏在那儿纹丝不动。','He lay motionless like a thousand-jin boulder.'],
  ['严守纪律','yán shǒu jì lǜ','to strictly observe discipline','直到牺牲前的最后一息，都没发出哪怕是极轻微的一声呻吟。','Until his very last breath, he did not utter even the faintest moan.']
], null);

// ═══════════════════════════════════════════
// UNIT 3 — 有目的地阅读
// ═══════════════════════════════════════════

En('Bamboo Joint Figurines', [
  ['风靡','fēng mǐ','to sweep through; to become wildly popular','很快就能风靡全班，以至全校。','It would sweep through the entire class and even the whole school.'],
  ['威风凛凛','wēi fēng lǐn lǐn','awe-inspiring; imposing','叉腿张胳膊，威风凛凛。','Legs apart, arms spread, imposing and impressive.'],
  ['别出心裁','bié chū xīn cái','to come up with something original','竹节人手上系上一根冰棍棒，就成了孙悟空。','Tie an ice-pop stick to its hand and it becomes Sun Wukong.'],
  ['心满意足','xīn mǎn yì zú','content and satisfied','虽两手空空，但心满意足。','Empty-handed but content.'],
  ['全神贯注','quán shén guàn zhù','fully absorbed','全神贯注，忘乎所以。','Completely absorbed, oblivious to everything else.']
], [
  ['有目的地阅读','yǒu mù dì de yuè dú','reading with purpose','同一篇文章，阅读目的不同，关注的内容和方法也不同。','The same article can be read differently depending on your purpose.','根据阅读目的选择阅读方法','Choose reading methods based on your reading purpose']
]);

En('The Mystery of Life in the Universe', [
  ['猜测','cāi cè','to speculate','可以猜测，地球绝不是有生命存在的唯一天体。','We can surmise that Earth is not the only body harboring life.'],
  ['枯竭','kū jié','to be exhausted; depleted','在地球资源枯竭的时候。','When Earth\u2019s resources are exhausted.'],
  ['抵御','dǐ yù','to resist; to defend against','火星上没有磁场，因而不能抵御紫外线的照射。','Mars has no magnetic field and therefore cannot block ultraviolet radiation.'],
  ['探测器','tàn cè qì','probe; detector','科学家们利用探测器对火星作近距离的观测。','Scientists used probes for close-range observation of Mars.'],
  ['适合','shì hé','suitable','适合生物生存的温度。','Temperature suitable for biological survival.']
], null);

En('The Palace Museum', [
  ['矗立','chù lì','to stand tall','三座大殿矗立在七米多高的白石台基上。','Three great halls stand on a seven-meter-high white stone platform.'],
  ['宏伟','hóng wěi','grand; magnificent','这样宏伟的建筑群。','Such a grand architectural complex.'],
  ['井然有序','jǐng rán yǒu xù','orderly and well-arranged','错综相连而又井然有序。','Intricately connected yet orderly.'],
  ['中轴线','zhōng zhóu xiàn','central axis','三大殿建在紫禁城的中轴线上。','The Three Great Halls stand on the central axis.'],
  ['俗称','sú chēng','commonly known as','太和殿俗称金銮殿。','The Hall of Supreme Harmony is commonly known as the Golden Throne Hall.']
], null);

// ═══════════════════════════════════════════
// UNIT 4 — 小说
// ═══════════════════════════════════════════

En('The Bridge', [
  ['咆哮','páo xiào','to roar','山洪咆哮着，像一群受惊的野马。','Floodwaters roared like a stampede of wild horses.'],
  ['狞笑','níng xiào','fierce grin (of the flood)','木桥开始发抖，开始痛苦地呻吟。','The bridge began to tremble and groan painfully.'],
  ['拥戴','yōng dài','to support and trust','那个全村人都拥戴的老汉。','The old man everyone in the village trusted.'],
  ['沙哑','shā yǎ','hoarse','老汉沙哑地喝话。','The old man spoke in a hoarse voice.'],
  ['祭奠','jì diàn','to hold a memorial','一个老太太，被人搀扶着，来这里祭奠。','An old woman, supported by others, came to pay her respects.']
], [
  ['短句营造紧张','duǎn jù yíng zào jǐn zhāng','short sentences create tension','雨突然大了。像泼。像倒。','The rain suddenly intensified. Pouring. Dumping.','用极短的句子营造紧迫的气氛','Use extremely short sentences to create a sense of urgency'],
  ['结尾反转','jié wěi fǎn zhuǎn','surprise ending','她来祭奠两个人。她丈夫和她儿子。','She came to mourn two people. Her husband and her son.','结尾揭示人物关系，出人意料','Reveal the character relationship at the end for a surprise effect']
]);

En('The Poor', [
  ['汹涌澎湃','xiōng yǒng péng pài','surging and turbulent','汹涌澎湃的海浪拍击着海岸。','Surging waves crashed against the shore.'],
  ['忐忑不安','tǎn tè bù ān','anxious and uneasy','桑娜忐忑不安地想。','Sanna thought anxiously.'],
  ['自作自受','zì zuò zì shòu','to suffer the consequences of one\u2019s own actions','那也活该，我自作自受。','Well, I deserve it — I brought this upon myself.'],
  ['熬过去','áo guò qù','to endure; to get through','我们总能熬过去的！','We will manage somehow!'],
  ['勉强','miǎn qiǎng','barely; with difficulty','还只能勉强填饱肚子。','They could barely feed themselves.']
], [
  ['心理描写','xīn lǐ miáo xiě','psychological description','他会说什么呢？……他会揍我的！那也活该。','What will he say? He will beat me! Well, I deserve it.','通过内心独白展现桑娜善良而矛盾的心理','Show Sanna\u2019s kind yet conflicted nature through inner monologue']
]);

En('The Golden Fishhook', [
  ['老班长','lǎo bān zhǎng','old squad leader','大伙都叫他"老班长"。','Everyone called him Old Squad Leader.'],
  ['严峻','yán jùn','severe; grim','草地的环境十分严峻。','The grassland environment was extremely harsh.'],
  ['奄奄一息','yǎn yǎn yī xī','on the verge of death','老班长已经奄奄一息了。','Old Squad Leader was barely breathing.'],
  ['闪烁','shǎn shuò','to gleam; to glitter','在这个长满了红锈的鱼钩上，闪烁着灿烂的金色的光芒！','On that rust-covered hook gleamed a brilliant golden light!'],
  ['缝衣针','féng yī zhēn','sewing needle','老班长用缝衣针弯成个钓鱼钩。','Old Squad Leader bent a sewing needle into a fishhook.']
], null);

// ═══════════════════════════════════════════
// UNIT 5 — 围绕中心意思写
// ═══════════════════════════════════════════

En('Growing in Summer', [
  ['飞快','fēi kuài','extremely fast','夏天的长是飞快的长，跳跃的长。','Summer growth is rapid, leaping growth.'],
  ['苔藓','tái xiǎn','moss','一块白石头，几天不见，就长满了苔藓。','A white stone gets covered with moss in days.'],
  ['谚语','yàn yǔ','proverb','北方农家的谚语说："六月六，看谷秀。"','A farmer\u2019s proverb says: On the sixth of the sixth month, check the grain.'],
  ['威力','wēi lì','power; might','随着太阳威力的增加，什么都在生长。','As the sun\u2019s power increases, everything grows.'],
  ['收成','shōu chéng','harvest','农作物到了该长的时候不长，就没有收成的希望。','Crops that do not grow when they should have no hope of harvest.']
], [
  ['围绕中心句','wéi rào zhōng xīn jù','writing around a central sentence','夏天是万物迅速生长的季节。','Summer is the season of rapid growth for all things.','从不同角度围绕中心句展开论述','Develop the argument around a central sentence from different angles']
]);

En('Longing', [
  ['盼望','pàn wàng','to long for; to yearn','我开始盼着变天。','I began wishing for a change in the weather.'],
  ['斗篷','dǒu péng','poncho; cape','穿上这件情况就不同了，管你下雨不下雨。','With this on, rain or not, you could do anything.'],
  ['嚷','rǎng','to yell; to shout','妈妈！我嚷着奔进厨房。','Mom! I burst into the kitchen shouting.'],
  ['理直气壮','lǐ zhí qì zhuàng','with full confidence','理直气壮地打开柜门，拿出雨衣。','I triumphantly opened the closet and grabbed my raincoat.'],
  ['甩','shuǎi','to swing; to fling','我走在街上，甩着两只透明的绿袖子。','I walked down the street, swinging my transparent green sleeves.']
], null);

// ═══════════════════════════════════════════
// UNIT 6 — 保护环境
// ═══════════════════════════════════════════

En('Three Classical Poems', [
  ['浪淘沙','làng táo shā','waves washing sand','九曲黄河万里沙，浪淘风簸自天涯。','The Yellow River winds through sand, waves tossing from the edge of the sky.'],
  ['莺啼','yīng tí','orioles sing','千里莺啼绿映红。','For a thousand li orioles sing amid red and green.'],
  ['排闼','pái tà','to push open the gate','两山排闼送青来。','Two hills push open the gate, sending blue-green in.'],
  ['酒旗','jiǔ qí','wine flag; tavern banner','水村山郭酒旗风。','Water villages, mountain towns, wine flags in the breeze.'],
  ['茅檐','máo yán','thatched eaves','茅檐长扫净无苔。','The thatched eaves, long swept, are free of moss.']
], null);

En('Only One Earth', [
  ['晶莹','jīng yíng','crystal-clear','映入眼帘的是一个晶莹的球体。','What meets their eyes is a crystal-clear sphere.'],
  ['渺小','miǎo xiǎo','tiny; insignificant','同茫茫宇宙相比，地球是渺小的。','Compared to the vast universe, Earth is tiny.'],
  ['慷慨','kāng kǎi','generous','地球是无私的，它向人类慷慨地提供矿产资源。','Earth generously provides mineral resources to humanity.'],
  ['枯竭','kū jié','to be depleted','必将加速地球上矿产资源的枯竭。','This will accelerate the depletion of mineral reserves.'],
  ['生态','shēng tài','ecology; ecological','我们要精心地保护地球，保护地球的生态环境。','We must carefully protect Earth and its ecological environment.']
], [
  ['层层论证','céng céng lùn zhèng','step-by-step argumentation','地球渺小→资源有限→不能移居→必须保护','Earth is tiny, resources limited, cannot move, must protect.','用层层递进的方式论证观点','Use progressive argumentation to build the case step by step']
]);

En('The Green Mountains Never Grow Old', [
  ['肆虐','sì nüè','to ravage; to wreak havoc','西伯利亚大风常来肆虐的地方。','A place frequently ravaged by Siberian winds.'],
  ['盘踞','pán jù','to occupy; to entrench','干旱、霜冻、沙尘暴等怪物盘踞之地。','Where drought, frost, and sandstorms hold dominion.'],
  ['绿洲','lǜ zhōu','oasis','竟创造了这块绿洲。','He had created this green oasis.'],
  ['治理','zhì lǐ','to manage; to reclaim','六十五岁那年，他组织了七位老汉开始治理这条沟。','At sixty-five, he organized seven old men to start reclaiming this gully.'],
  ['归宿','guī sù','final resting place; destination','屋后的青山就是生命的归宿。','The green mountains behind the house were his final resting place.']
], null);

En('Sanhei and the Land', [
  ['翻身','fān shēn','to be liberated; to turn over','翻身的人儿心里真甜。','A liberated man\u2019s heart is truly sweet.'],
  ['耙地','bà dì','to harrow the land','地翻好，又耙了几遍，耙得又平又顺溜。','The land was turned, then harrowed several times, smooth and even.'],
  ['土疙瘩','tǔ gē da','clump of earth','每一块土疙瘩都给细细打碎。','Every clump of earth was finely crumbled.'],
  ['荞麦','qiáo mài','buckwheat','看见自己种的荞麦已经开花，白霎霎的像一片雪。','His buckwheat had bloomed, white as a blanket of snow.'],
  ['蝈蝈','guō guō','katydid','荞麦地里还有两个蝈蝈儿在叫唤。','Two katydids were calling in the buckwheat field.']
], null);

// ═══════════════════════════════════════════
// UNIT 7 — 艺术之美
// ═══════════════════════════════════════════

En('Two Classical Chinese Texts', [
  ['鼓琴','gǔ qín','to play the qin','伯牙鼓琴，锺子期听之。','Boya played the qin, and Zhong Ziqi listened.'],
  ['巍巍','wēi wēi','towering; lofty','巍巍乎若太山。','Grand and towering like a great mountain.'],
  ['汤汤','shāng shāng','vast and sweeping (of water)','汤汤乎若流水。','Vast and sweeping like flowing water.'],
  ['知音','zhī yīn','a true friend who understands','以为世无足复为鼓琴者。','He believed there was no one left in the world worthy of his music.'],
  ['拊掌','fǔ zhǎng','to clap hands','有一牧童见之，拊掌大笑。','A shepherd boy saw it and clapped his hands laughing.']
], [
  ['文言文阅读','wén yán wén yuè dú','classical Chinese reading','伯牙破琴绝弦，终身不复鼓琴。','Boya broke his qin and severed its strings, never playing again.','借助注释理解文言文大意','Use annotations to understand classical Chinese meaning'],
  ['实践出真知','shí jiàn chū zhēn zhī','practice yields true knowledge','耕当问奴，织当问婢。','Ask the farmhand about plowing, ask the maid about weaving.','实际经验比书本知识更可靠','Practical experience is more reliable than book knowledge']
]);

En('Moonlight Sonata', [
  ['纯熟','chún shú','skillful; proficient','弹得多纯熟哇！感情多深哪！','Such mastery! Such deep feeling!'],
  ['清幽','qīng yōu','serene; tranquil','月光照进窗子，显得格外清幽。','Moonlight streamed in, making it extraordinarily serene.'],
  ['微波粼粼','wēi bō lín lín','rippling gently','微波粼粼的海面上，霎时间洒满了银光。','Silver light scattered across the rippling surface.'],
  ['陶醉','táo zuì','intoxicated; enchanted','兄妹俩被美妙的琴声陶醉了。','The brother and sister were intoxicated by the beautiful music.'],
  ['恬静','tián jìng','tranquil; peaceful','月光正照在她那恬静的脸上。','Moonlight fell on her tranquil face.']
], [
  ['联想和想象','lián xiǎng hé xiǎng xiàng','association and imagination','他好像面对着大海，月亮正从水天相接的地方升起来。','It was as if he were facing the sea, with the moon rising where water met sky.','用联想和想象将音乐转化为画面','Use association and imagination to transform music into visual scenes']
]);

En('Fun Facts About Peking Opera', [
  ['马鞭','mǎ biān','horse whip; riding crop','用一根小小的马鞭就彻底解决了。','A simple riding crop solved the problem brilliantly.'],
  ['虚拟','xū nǐ','virtual; imaginary','京剧还有一些虚拟的道具。','Peking opera also has virtual props.'],
  ['亮相','liàng xiàng','to strike a pose','双方脸对着脸，眼睛对着眼睛，一切都像被定身术给制服了。','Face to face, eyes locked, as if some spell had immobilized them all.'],
  ['戛然而止','jiá rán ér zhǐ','to stop abruptly','那紧张而又整齐的锣鼓声忽然一停，人物的动作也戛然而止。','The drumbeats suddenly stopped, and the actors froze.'],
  ['约定俗成','yuē dìng sú chéng','established by convention','不同人物在使用马鞭时，形成了一套约定俗成的方法。','Different characters have developed their own established ways of using the whip.']
], null);

// ═══════════════════════════════════════════
// UNIT 8 — 走近鲁迅
// ═══════════════════════════════════════════

En('Young Runtu', [
  ['一望无际','yī wàng wú jì','stretching endlessly','下面是海边的沙地，都种着一望无际的碧绿的西瓜。','Below was the sandy shore planted with endless jade-green watermelons.'],
  ['素不知道','sù bù zhī dào','never knew; had no idea','我素不知道天下有这许多新鲜事。','I had never known the world held such wonders.'],
  ['无穷无尽','wú qióng wú jìn','infinite; endless','闰土的心里有无穷无尽的希奇的事。','Runtu\u2019s mind held infinite marvels.'],
  ['郑重','zhèng zhòng','solemn; serious','这祭祀说是三十多年才能轮到一回，所以很郑重。','The sacrifice came around only once in thirty years, so it was very solemn.'],
  ['如许','rú xǔ','so many; such','海边有如许五色的贝壳。','The seashore had so many colorful shells.']
], [
  ['对比手法','duì bǐ shǒu fǎ','the technique of contrast','他们都和我一样只看见院子里高墙上的四角的天空。','They, like me, could see only the small square of sky above the high walls.','用闰土丰富的生活经验与"我"狭窄的世界形成对比','Contrast Runtu\u2019s rich experience with the narrator\u2019s confined world']
]);

En('A Good Story', [
  ['蒙胧','méng lóng','hazy; dim','我在蒙胧中，看见一个好的故事。','In a haze, I saw a good story.'],
  ['错综','cuò zōng','intricate; interwoven','许多美的人和美的事，错综起来像一天云锦。','Many beautiful people and things interwove like a tapestry of clouds.'],
  ['澄碧','chéng bì','crystal-clear and green','都倒影在澄碧的小河中。','All reflected in the crystal-clear river.'],
  ['凝视','níng shì','to gaze intently','我就要凝视他们。','I was about to gaze at them.'],
  ['皱蹙','zhòu cù','crumpled; furrowed','云锦也已皱蹙，凌乱。','The cloud tapestry was already crumpled and disordered.']
], null);

En('My Uncle Mr. Lu Xun', [
  ['囫囵吞枣','hú lún tūn zǎo','to swallow dates whole (read without understanding)','我读《水浒传》不过囫囵吞枣地看一遍。','I had only gulped through Water Margin once.'],
  ['张冠李戴','zhāng guān lǐ dài','to attribute to the wrong person','伯父问我的时候，我就张冠李戴地乱说一气。','When Uncle asked me questions, I got everything jumbled.'],
  ['饱经风霜','bǎo jīng fēng shuāng','to have weathered many hardships','饱经风霜的脸上现出难以忍受的痛苦。','His weather-beaten face showed unbearable pain.'],
  ['碰壁','pèng bì','to hit a wall (to be blocked or persecuted)','可是到了后来，碰了几次壁，把鼻子碰扁了。','But later, I bumped into walls a few times and flattened my nose.'],
  ['追悼','zhuī dào','to mourn; to pay tribute','许多人都来追悼他，向他致敬。','Many people came to mourn him and pay respects.']
], [
  ['用事写人','yòng shì xiě rén','revealing character through events','伯父就是这样的一个人，他为自己想得少，为别人想得多。','That was the kind of person my uncle was — he thought little of himself and much of others.','通过多件具体事例展现人物品质','Reveal character qualities through multiple specific events']
]);

En("Some People \u2014 In Memory of Lu Xun", [
  ['俯下身子','fǔ xià shēn zi','to bend down','有的人俯下身子给人民当牛马。','Some people bend down to serve the people as ox and horse.'],
  ['不朽','bù xiǔ','immortal; everlasting','把名字刻入石头，想"不朽"。','They carve their names into stone, seeking immortality.'],
  ['野草','yě cǎo','wild grass','有的人情愿作野草，等着地下的火烧。','Some would rather be wild grass, waiting for underground fire to burn.'],
  ['抬举','tái jǔ','to raise high; to hold in esteem','群众把他抬举得很高，很高。','The masses raise them high, so high.'],
  ['摔垮','shuāi kuǎ','to topple; to overthrow','骑在人民头上的，人民把他摔垮。','Those who ride on the people — the people topple them.']
], [
  ['对比手法','duì bǐ shǒu fǎ','the technique of contrast','有的人活着，他已经死了；有的人死了，他还活着。','Some are alive but already dead; some are dead but still live.','用鲜明对比揭示两种截然不同的人生价值','Use sharp contrast to reveal two completely different life values']
]);

saveAndValidate('textbook_g6s1.js', code, 'TB_G6S1');
