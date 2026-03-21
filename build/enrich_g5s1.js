/**
 * Enrich textbook_g5s1.js with vocabWords + grammarPoints
 * Run: node build/enrich_g5s1.js
 * SECURITY NOTE: Build-time enrichment on trusted local files.
 */
const fs = require('fs');
const { enrichByEn, saveAndValidate } = require('./enrich_lib');
let code = fs.readFileSync('textbook_g5s1.js', 'utf8');
const En = (t, v, g) => { code = enrichByEn(code, t, v, g); };

// Unit 1
En('White Egret', [
  ['白鹭','bái lù','white egret','白鹭是一首精巧的诗。','The white egret is an exquisite poem.'],
  ['精巧','jīng qiǎo','exquisite','色素的配合，身段的大小，一切都很适宜。','The blend of colors, the proportion — everything is fitting.'],
  ['嵌','qiàn','set; inlay','田里嵌着一只白鹭。','A white egret is set in the field.'],
  ['悠然','yōu rán','leisurely','它悠然地站着。','It stands leisurely.'],
  ['韵味','yùn wèi','charm','别有一番韵味。','Has a special charm.']
], [
  ['借物抒情','jiè wù shū qíng','express feelings through things','白鹭实在是一首诗，一首韵在骨子里的散文诗。','The egret is truly a poem, a prose poem.','通过描写白鹭表达对美的感悟','Express appreciation of beauty through describing the egret']
]);

En('Peanuts', [
  ['花生','huā shēng','peanut','花生的好处很多。','Peanuts have many benefits.'],
  ['收获','shōu huò','harvest','今晚我们过一个收获节。','Tonight we celebrate a harvest festival.'],
  ['体面','tǐ miàn','dignified','花生虽然不好看，但很有用。','Peanuts may not look good, but they are useful.'],
  ['爱慕','ài mù','admire','不要只做外表好看让人爱慕的人。','Do not only be someone admired for looks.'],
  ['有用','yǒu yòng','useful','做有用的人。','Be a useful person.']
], [
  ['借物喻人','jiè wù yù rén','use things to describe people','做有用的人，不要只讲体面。','Be useful, not just dignified.','通过花生说明做人的道理','Use peanuts to illustrate life lessons']
]);

En('Osmanthus Rain', [
  ['桂花','guì huā','osmanthus','中秋前后桂花盛开。','Osmanthus blooms around Mid-Autumn.'],
  ['沉浸','chén jìn','immerse','沉浸在桂花的香气里。','Immersed in the fragrance of osmanthus.'],
  ['摇花','yáo huā','shake flowers down','摇桂花是件大事。','Shaking osmanthus is a big event.'],
  ['故乡','gù xiāng','hometown','这里的桂花比不上家乡的。','The osmanthus here cannot compare to hometown.'],
  ['怀念','huái niàn','miss; nostalgia','怀念故乡的桂花。','Missing hometown osmanthus.']
], null);

En('Pearl Bird', [
  ['珍珠鸟','zhēn zhū niǎo','pearl bird','朋友送我一对珍珠鸟。','A friend gave me a pair of pearl birds.'],
  ['信赖','xìn lài','trust','信赖创造了美好的境界。','Trust creates a beautiful realm.'],
  ['巢','cháo','nest','它们在笼子里筑了巢。','They built a nest in the cage.'],
  ['肩膀','jiān bǎng','shoulder','小鸟落在我的肩膀上。','The little bird landed on my shoulder.'],
  ['渐渐','jiàn jiàn','gradually','小鸟渐渐胆大了。','The little bird gradually became bolder.']
], [
  ['以小见大','yǐ xiǎo jiàn dà','see the big through the small','信赖，往往创造出美好的境界。','Trust often creates a beautiful realm.','从小事中感悟大道理','Understand big truths from small things']
]);

// Unit 2
En('Stepping Stones', [
  ['搭石','dā shí','stepping stones','人们摆搭石过小溪。','People placed stepping stones to cross the brook.'],
  ['协调','xié tiáo','coordinated','走搭石动作要协调。','Walking on stepping stones requires coordination.'],
  ['俗语','sú yǔ','folk saying','紧走搭石慢过桥。','Quick on stepping stones, slow on bridges.'],
  ['谦让','qiān ràng','yield; courteous','人们互相谦让。','People yield to each other courteously.'],
  ['风景','fēng jǐng','scenery','这是家乡一道美丽的风景。','This is a beautiful scene of the hometown.']
], null);

En('The General and the Prime Minister', [
  ['将相','jiàng xiàng','general and minister','将相和的故事。','The story of the General and the Prime Minister.'],
  ['廉颇','lián pō','Lian Po','廉颇是赵国大将。','Lian Po was a great general of Zhao.'],
  ['蔺相如','lìn xiāng rú','Lin Xiangru','蔺相如是赵国丞相。','Lin Xiangru was the prime minister of Zhao.'],
  ['完璧归赵','wán bì guī zhào','return the jade intact','蔺相如完璧归赵。','Lin Xiangru returned the jade intact to Zhao.'],
  ['负荆请罪','fù jīng qǐng zuì','offer humble apology','廉颇负荆请罪。','Lian Po humbly apologized.']
], [
  ['因果关系','yīn guǒ guān xì','cause and effect','因为蔺相如顾全大局，所以廉颇负荆请罪。','Because Lin put the big picture first, Lian Po apologized.','原因和结果之间的逻辑关系','Logical relationship between cause and result']
]);

En('What\\u2019s Faster Than a Cheetah?', [
  ['猎豹','liè bào','cheetah','猎豹的速度很快。','The cheetah is very fast.'],
  ['光速','guāng sù','speed of light','光的速度最快。','The speed of light is the fastest.'],
  ['声速','shēng sù','speed of sound','声音每秒传播340米。','Sound travels 340 meters per second.'],
  ['比较','bǐ jiào','compare','通过比较了解速度。','Understand speed through comparison.'],
  ['宇宙','yǔ zhòu','universe','宇宙中的速度。','Speeds in the universe.']
], null);

En('Tunnel Warfare in Central Hebei', [
  ['地道','dì dào','tunnel','冀中的地道战。','Tunnel warfare in central Hebei.'],
  ['抗日','kàng rì','anti-Japanese','抗日战争时期。','During the anti-Japanese war.'],
  ['隐蔽','yǐn bì','concealed','地道隐蔽巧妙。','The tunnels were cleverly concealed.'],
  ['设计','shè jì','design','地道设计精巧。','The tunnels were ingeniously designed.'],
  ['防御','fáng yù','defense','有效的防御方式。','An effective method of defense.']
], null);

// Unit 3
En('The Hunter Hailib', [
  ['猎人','liè rén','hunter','海力布是一位猎人。','Hailib was a hunter.'],
  ['宝石','bǎo shí','gem','他得到一颗宝石。','He obtained a gem.'],
  ['牺牲','xī shēng','sacrifice','海力布牺牲自己救了乡亲。','Hailib sacrificed himself to save his neighbors.'],
  ['变成','biàn chéng','turn into','他变成了石头。','He turned into stone.'],
  ['善良','shàn liáng','kind','海力布很善良。','Hailib was very kind.']
], null);

En('The Cowherd and the Weaving Maid (Part 1)', [
  ['牛郎','niú láng','cowherd','牛郎从小父母双亡。','The Cowherd lost both parents young.'],
  ['织女','zhī nǚ','weaving maid','织女是天上的仙女。','The Weaving Maid is a fairy in heaven.'],
  ['老牛','lǎo niú','old ox','老牛会说话。','The old ox could speak.'],
  ['勤劳','qín láo','hardworking','牛郎很勤劳。','The Cowherd was very hardworking.'],
  ['嫂子','sǎo zi','sister-in-law','嫂子对他很不好。','His sister-in-law treated him badly.']
], null);

En('The Cowherd and the Weaving Maid (Part 2)', [
  ['银河','yín hé','Milky Way','王母娘娘划出一条银河。','The Queen Mother drew the Milky Way.'],
  ['喜鹊','xǐ què','magpie','喜鹊搭成鹊桥。','Magpies formed a bridge.'],
  ['七夕','qī xī','Qixi Festival','每年七月七日相会。','They meet every July 7th.'],
  ['思念','sī niàn','miss','他们非常思念对方。','They missed each other deeply.'],
  ['团圆','tuán yuán','reunion','一年一次的团圆。','A once-a-year reunion.']
], null);

// Unit 4
En('Three Ancient Poems', [
  ['示儿','shì ér','Showing to My Sons','死去元知万事空。','In death I know all things are void.'],
  ['题临安邸','tí lín ān dǐ','Written at an Inn in Lin an','暖风熏得游人醉。','Warm wind intoxicates the tourists.'],
  ['己亥杂诗','jǐ hài zá shī','Poems of 1839','我劝天公重抖擞。','I urge the Heavenly Lord to rouse himself.'],
  ['爱国','ài guó','patriotic','这些诗都表达了爱国情感。','These poems all express patriotic feelings.'],
  ['忧国忧民','yōu guó yōu mín','worry about the country and people','诗人忧国忧民。','The poet worried about country and people.']
], null);

En('Young China \\u2014 Excerpt', [
  ['少年','shào nián','youth','少年强则国强。','When youth are strong, the nation is strong.'],
  ['中国','zhōng guó','China','少年中国说。','On Young China.'],
  ['前途','qián tú','future','前途似海，来日方长。','Future like the sea, days ahead are long.'],
  ['崛起','jué qǐ','rise','中国崛起。','China rises.'],
  ['壮丽','zhuàng lì','magnificent','壮丽的未来。','A magnificent future.']
], [
  ['排比','pái bǐ','parallelism','少年智则国智，少年富则国富，少年强则国强。','When youth are wise, the nation is wise...','用结构相同的句子加强气势','Using parallel sentences to strengthen momentum']
]);

En('The Destruction of Yuanmingyuan', [
  ['圆明园','yuán míng yuán','Yuanmingyuan (Old Summer Palace)','圆明园是皇家园林。','Yuanmingyuan was a royal garden.'],
  ['瑰宝','guī bǎo','treasure','园中有无数珍贵的瑰宝。','The garden held countless treasures.'],
  ['毁灭','huǐ miè','destroy','圆明园被毁灭了。','Yuanmingyuan was destroyed.'],
  ['侵略','qīn lüè','invade','英法联军侵入北京。','Anglo-French forces invaded Beijing.'],
  ['不可估量','bù kě gū liáng','incalculable','这是不可估量的损失。','This is an incalculable loss.']
], null);

En('The Small Island', [
  ['小岛','xiǎo dǎo','small island','一座小小的海岛。','A tiny sea island.'],
  ['战士','zhàn shì','soldier','守岛战士。','Island-guarding soldiers.'],
  ['蔬菜','shū cài','vegetables','在岛上种蔬菜。','Growing vegetables on the island.'],
  ['坚守','jiān shǒu','hold firm','战士们坚守岗位。','Soldiers hold firm at their posts.'],
  ['奉献','fèng xiàn','dedicate','默默奉献。','Silently dedicated.']
], null);

// Unit 5+ - get remaining lesson titles
En('Toad\\u2019s Story', [], null);  // skip if not found

saveAndValidate('textbook_g5s1.js', code, 'TB_G5S1');
