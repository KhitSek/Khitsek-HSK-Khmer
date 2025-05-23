document.getElementById("vocab-title").textContent = "生词(HSK4)：ពាក្យថ្មី";

const words = [
    { word: "爱情", pinyin: "ài qíng", khmer: "ក្តីស្រឡាញ់" },
    { word: "安排", pinyin: "ān pái", khmer: "ការរៀបចំ" },
    { word: "安全", pinyin: "ān quán", khmer: "សុវត្ថិភាព" },
    { word: "按时", pinyin: "àn shí", khmer: "ទាន់​ពេលវេលា" },
    { word: "按照", pinyin: "àn zhào", khmer: "យោង​ទៅ​តាម" },
    { word: "百分之", pinyin: "bǎi fēn zhī", khmer: "ភាគរយ" },
    { word: "棒", pinyin: "bàng", khmer: "អស្ចារ្យ/គួរឲ្យសរសើរ" },
    { word: "包子", pinyin: "bāo zi", khmer: "នំប៉ាវ" },
    { word: "保护", pinyin: "bǎo hù", khmer: "ការការពារ" },
    { word: "保证", pinyin: "bǎo zhèng", khmer: "ធានា" },
    { word: "报名", pinyin: "bào míng", khmer: "ចុះ​ឈ្មោះ" },
    { word: "抱", pinyin: "bào", khmer: "ភ្ជាប់, អោប" },
    { word: "抱歉", pinyin: "bào qiàn", khmer: "សុំទោស" },
    { word: "倍", pinyin: "bèi", khmer: "ដង" },
    { word: "本来", pinyin: "běn lái", khmer: "ដំបូងមក" },
    { word: "笨", pinyin: "bèn", khmer: "ឆោតល្ងង់" },
    { word: "比如", pinyin: "bǐ rú", khmer: "ដូចជា/ឧទាហរណ៍" },
    { word: "毕业", pinyin: "bì yè", khmer: "បញ្ចប់ការសិក្សា" },
    { word: "遍", pinyin: "biàn", khmer: "ដង/លើក" },
    { word: "标准", pinyin: "biāo zhǔn", khmer: "ស្តង់ដារ" },
    { word: "表格", pinyin: "biǎo gé", khmer: "សំណុំបែបបទ" },
    { word: "表示", pinyin: "biǎo shì", khmer: "មធ្យោបាយ" },
    { word: "表演", pinyin: "biǎo yǎn", khmer: "ការសម្តែង" },
    { word: "表扬", pinyin: "biǎo yáng", khmer: "សរសើរ" },
    { word: "饼干", pinyin: "bǐng gān", khmer: "នំខូឃី" },
    { word: "并且", pinyin: "bìng qiě", khmer: "និង/ហើយ" },
    { word: "博士", pinyin: "bó shì", khmer: "បណ្ឌិត" },
    { word: "不过", pinyin: "bú guò", khmer: "តែ/ប៉ុន្តែ" },
    { word: "不得不", pinyin: "bù dé bù", khmer: "ត្រូវតែ" },
    { word: "不管", pinyin: "bù guǎn", khmer: "ដោយ​មិន​គិត​ពី" },
    { word: "不仅", pinyin: "bù jǐn", khmer: "មិន​ត្រឹម​តែ" },
    { word: "部分", pinyin: "bù fen", khmer: "ផ្នែក" },
    { word: "擦", pinyin: "cā", khmer: "ជូត" },
    { word: "猜", pinyin: "cāi", khmer: "គោល/សន្មត់" },
    { word: "材料", pinyin: "cái liào", khmer: "សម្ភារៈ" },
    { word: "参观", pinyin: "cān guān", khmer: "ទស្សនា/ចូលរួម" },
    { word: "餐厅", pinyin: "cān tīng", khmer: "ភោជនីយដ្ឋាន" },
    { word: "厕所", pinyin: "cè suǒ", khmer: "បន្ទប់ទឹក" },
    { word: "差不多", pinyin: "chà bu duō", khmer: "ស្ទើរតែ" },
    { word: "尝", pinyin: "cháng", khmer: "សាក / ព្យាយាម" },
    { word: "长城", pinyin: "cháng chéng", khmer: "មហា​កំផែង" },
    { word: "长江", pinyin: "cháng jiāng", khmer: "ទន្លេឈាងហ្សៀង" },
    { word: "场", pinyin: "chǎng", khmer: "វាល" },
    { word: "超过", pinyin: "chāo guò", khmer: "លើស" },
    { word: "乘坐", pinyin: "chéng zuò", khmer: "ជិះ" },
    { word: "成功", pinyin: "chéng gōng", khmer: "ជោគជ័យ" },
    { word: "成为", pinyin: "chéng wéi", khmer: "ក្លាយជា" },
    { word: "诚实", pinyin: "chéng shí", khmer: "ស្មោះត្រង់" },
    { word: "吃惊", pinyin: "chī jīng", khmer: "ភ្ញាក់ផ្អើល" },
    { word: "重新", pinyin: "chóng xīn", khmer: "ឡើងវិញ" },
    { word: "抽烟", pinyin: "chōu yān", khmer: "ជក់បារី" },
    { word: "出差", pinyin: "chū chāi", khmer: "ដំណើរអាជីវកម្ម" },
    { word: "出发", pinyin: "chū fā", khmer: "ចេញដំណើរ / ចាប់ផ្តើមដំណើរ " },
    { word: "出生", pinyin: "chū shēng", khmer: "កើត" },
    { word: "出现", pinyin: "chū xiàn", khmer: "លេចឡើង" },
    { word: "厨房", pinyin: "chú fáng", khmer: "ផ្ទះបាយ" },
    { word: "传真", pinyin: "chuán zhēn", khmer: "ទូរសារ/ការផ្ញើសារតាមម៉ាស៊ីនផ្ញើឯកសារ"},
    { word: "窗户", pinyin: "chuāng hu", khmer: "បង្អួច" },
    { word: "词语", pinyin: "cí yǔ", khmer: "ពាក្យ" },
    { word: "从来", pinyin: "cóng lái", khmer: "ធ្លាប់" },
    { word: "粗心", pinyin: "cū xīn", khmer: "ធ្វេសប្រហែស" },
    { word: "存", pinyin: "cún", khmer: "រក្សាទុក" },
    { word: "错误", pinyin: "cuò wù", khmer: "កំហុស" },
    { word: "答案", pinyin: "dá àn", khmer: "ចម្លើយ" },
    { word: "打扮", pinyin: "dǎ ban", khmer: "តុបតែងខ្លួន" },
    { word: "打扰", pinyin: "dǎ rǎo", khmer: "រំខាន/រារាំង" },
    { word: "打印", pinyin: "dǎ yìn", khmer: "បោះពុម្ព" },
    { word: "打招呼", pinyin: "dǎ zhāo hu", khmer: "ស្វាគមន៍" },
    { word: "打折", pinyin: "dǎ zhé", khmer: "ការបញ្ចុះតម្លៃ" },
    { word: "打针", pinyin: "dǎ zhēn", khmer: "ចាក់ថ្នាំ" },
    { word: "大概", pinyin: "dà gài", khmer: "ប្រហែលជា" },
    { word: "大使馆", pinyin: "dà shǐ guǎn", khmer: "ស្ថានទូត" },
    { word: "大约", pinyin: "dà yuē", khmer: "អំពី" },
    { word: "大夫", pinyin: "dài fu", khmer: "វេជ្ជបណ្ឌិត" },
    { word: "戴", pinyin: "dài", khmer: "ពាក់" },
    { word: "当", pinyin: "dāng", khmer: "ពេលណា​" },
    { word: "当时", pinyin: "dāng shí", khmer: "បន្ទាប់មក" },
    { word: "刀", pinyin: "dāo", khmer: "កាំបិត" },
    { word: "导游", pinyin: "dǎo yóu", khmer: "មគ្គុទេសក៍ទេសចរ" },
    { word: "倒", pinyin: "dào", khmer: "ត្រឡប់/បញ្ចប់"},
    { word: "到处", pinyin: "dào chù", khmer: "នៅគ្រប់ទីកន្លែង" },
    { word: "到底", pinyin: "dào dǐ", khmer: "នៅចុងបញ្ចប់" },
    { word: "道歉", pinyin: "dào qiàn", khmer: "សុំទោស" },
    { word: "得", pinyin: "dé", khmer: "ទទួលបាន (កិរិយាស័ព្ទជំនួយ)" },
    { word: "得意", pinyin: "dé yì", khmer: "មានមោទនភាព" },
    { word: "登机牌", pinyin: "dēng jī pái", khmer: "ប័ណ្ណបើកបរ" },
    { word: "等", pinyin: "děng", khmer: "រងចាំ" },
    { word: "低", pinyin: "dī", khmer: "ទាប" },
    { word: "底", pinyin: "dǐ", khmer: "បាត(សំដៅលើវត្ថុ)" },
    { word: "地点", pinyin: "dì diǎn", khmer: "ទីតាំង" },
    { word: "地球", pinyin: "dì qiú", khmer: "ផែនដី" },
    { word: "地址", pinyin: "dì zhǐ", khmer: "អាសយដ្ឋាន" },
    { word: "掉", pinyin: "diào", khmer: "ទម្លាក់" },
    { word: "调查", pinyin: "diào chá", khmer: "ការស្ទង់មតិ" },
    { word: "丢", pinyin: "diū", khmer: "បោះ" },
    { word: "动作", pinyin: "dòng zuò", khmer: "សកម្មភាព" },
    { word: "堵车", pinyin: "dǔ chē", khmer: "ស្ទះចរាចរណ៍" },
    { word: "肚子", pinyin: "dù zi", khmer: "ពោះ" },
    { word: "短信", pinyin: "duǎn xìn", khmer: "សារ" },
    { word: "对话", pinyin: "duì huà", khmer: "ការសន្ទនា" },
    { word: "对面", pinyin: "duì miàn", khmer: "ផ្នែកមុខ/ខាងមុខ" },
    { word: "对于", pinyin: "duì yú", khmer: "សម្រាប់" },
    { word: "儿童", pinyin: "ér tóng", khmer: "កុមារ" },
    { word: "而", pinyin: "ér", khmer: "ប៉ុន្តែ / ហើយ / តែប៉ុណ្ណោះ" },
    { word: "发生", pinyin: "fā shēng", khmer: "កើតឡើង" },
    { word: "发展", pinyin: "fā zhǎn", khmer: "ការអភិវឌ្ឍន៍" },
    { word: "法律", pinyin: "fǎ lǜ", khmer: "ស្របច្បាប់" },
    { word: "翻译", pinyin: "fān yì", khmer: "ការបកប្រែ" },
    { word: "烦恼", pinyin: "fán nǎo", khmer: "តូចចិត្ត" },
    { word: "反对", pinyin: "fǎn duì", khmer: "ប្រឆាំង" },
    { word: "方法", pinyin: "fāng fǎ", khmer: "វិធីសាស្រ្ត" },
    { word: "方面", pinyin: "fāng miàn", khmer: "ផ្នែក/កំណត់/វិស័យ" },
    { word: "方向", pinyin: "fāng xiàng", khmer: "ទិសដៅ" },
    { word: "房东", pinyin: "fáng dōng", khmer: "ម្ចាស់ផ្ទះ" },
    { word: "放弃", pinyin: "fàng qì", khmer: "បោះបង់" },
    { word: "放暑假", pinyin: "fàng shǔ jià", khmer: "វិស្សមកាលរដូវក្តៅ" },
    { word: "放松", pinyin: "fàng sōng", khmer: "សម្រាក/ត្រួតត្រា" },
    { word: "份", pinyin: "fèn", khmer: "ចំណាត់ថ្នាក់/ផ្នែក" },
    { word: "丰富", pinyin: "fēng fù", khmer: "អ្នកមាន/សម្បូរ" },
    { word: "否则", pinyin: "fǒu zé", khmer: "បើមិនដូច្នេះទេ" },
    { word: "符合", pinyin: "fú hé", khmer: "ត្រូវតាម / ស្របគ្នា " },
    { word: "付款", pinyin: "fù kuǎn", khmer: "ការទូទាត់" },
    { word: "复印", pinyin: "fù yìn", khmer: "ចម្លង" },
    { word: "复杂", pinyin: "fù zá", khmer: "ស្មុគស្មាញ" },
    { word: "富", pinyin: "fù", khmer: "មានទ្រព្យសម្បត្តិ / រីកចម្រើន" },
    { word: "父亲", pinyin: "fù qīn", khmer: "ឪពុក" },
    { word: "负责", pinyin: "fù zé", khmer: "ទទួលខុសត្រូវចំពោះ" },
    { word: "改变", pinyin: "gǎi biàn", khmer: "ផ្លាស់ប្តូរ" },
    { word: "干杯", pinyin: "gān bēi", khmer: "លើកទឹកចិត្ត" },
    { word: "感动", pinyin: "gǎn dòng", khmer: "អារម្មណ៍ចាប់ចិត្ត" },
    { word: "感觉", pinyin: "gǎn jué", khmer: "មានអារម្មណ៍" },
    { word: "感情", pinyin: "gǎn qíng", khmer: "អារម្មណ៍/ចំណង" },
    { word: "感谢", pinyin: "gǎn xiè", khmer: "សូមអរគុណ" },
    { word: "敢", pinyin: "gǎn", khmer: "ហ៊ាន" },
    { word: "赶", pinyin: "gǎn", khmer: "ប្រញាប់" },
    { word: "干", pinyin: "gàn", khmer: "ស្ងួត/ធ្វើ" },
    { word: "刚", pinyin: "gāng", khmer: "គ្រាន់តែ" },
    { word: "高速公路", pinyin: "gāo sù gōng lù", khmer: "ផ្លូវហាយវេ" },
    { word: "胳膊", pinyin: "gē bo", khmer: "ដៃ" },
    { word: "各", pinyin: "gè", khmer: "គ្នា" },
    { word: "公里", pinyin: "gōng lǐ", khmer: "គីឡូម៉ែត្រ" },
    { word: "功夫", pinyin: "gōng fu", khmer: "កុងហ្វូ" },
    { word: "工资", pinyin: "gōng zī", khmer: "ប្រាក់ឈ្នួល" },
    { word: "共同", pinyin: "gòng tóng", khmer: "ធម្មតា" },
    { word: "够", pinyin: "gòu", khmer: "គ្រប់គ្រាន់" },
    { word: "购物", pinyin: "gòu wù", khmer: "ការដើរទិញឥវ៉ាន់" },
    { word: "估计", pinyin: "gū jì", khmer: "ប៉ាន់ស្មាន" },
    { word: "鼓励", pinyin: "gǔ lì", khmer: "លើកទឹកចិត្ត" },
    { word: "故意", pinyin: "gù yì", khmer: "ដោយចេតនា" },
    { word: "顾客", pinyin: "gù kè", khmer: "អតិថិជន" },
    { word: "挂", pinyin: "guà", khmer: "ព្យួរ" },
    { word: "关键", pinyin: "guān jiàn", khmer: "ភាពចាំបាច់" },
    { word: "观众", pinyin: "guān zhòng", khmer: "ទស្សនិកជន" },
    { word: "管理", pinyin: "guǎn lǐ", khmer: "ការគ្រប់គ្រង" },
    { word: "光", pinyin: "guāng", khmer: "ពន្លឺ" },
    { word: "广播", pinyin: "guǎng bō", khmer: "ផ្សាយ" },
    { word: "广告", pinyin: "guǎng gào", khmer: "ផ្សាយពាណិជ្ជកម្ម" },
    { word: "逛", pinyin: "guàng", khmer: "ទស្សនា" },
    { word: "规定", pinyin: "guī dìng", khmer: "លលាដ៍ក្បាល" },
    { word: "国籍", pinyin: "guó jí", khmer: "ប្រទេសសញ្ជាតិ" },
    { word: "国际", pinyin: "guó jì", khmer: "អន្តរជាតិ" },
    { word: "果汁", pinyin: "guǒ zhī", khmer: "ទឹក​ផ្លែឈើ" },
    { word: "过程", pinyin: "guò chéng", khmer: "ដំណើរការ" },
    { word: "海洋", pinyin: "hǎi yáng", khmer: "មហាសមុទ្រ" },
    { word: "害羞", pinyin: "hài xiū", khmer: "ខ្មាស់អៀន" },
    { word: "寒假", pinyin: "hán jià", khmer: "វិស្សមកាលរដូវរងារ" },
    { word: "汗", pinyin: "hàn", khmer: "ញើស" },
    { word: "航班", pinyin: "háng bān", khmer: "ការហោះហើរ" },
    { word: "好处", pinyin: "hǎo chu", khmer: "ទទួលបានអត្ថប្រយោជន៍" },
    { word: "好像", pinyin: "hǎo xiàng", khmer: "ចូលចិត្ត" },
    { word: "号码", pinyin: "hào mǎ", khmer: "ចំនួន" },
    { word: "合格", pinyin: "hé gé", khmer: "មានលក្ខណៈសម្បត្តិគ្រប់គ្រាន់" },
    { word: "合适", pinyin: "hé shì", khmer: "សមរម្យ" },
    { word: "盒子", pinyin: "hé zi", khmer: "ប្រអប់" },
    { word: "厚", pinyin: "hòu", khmer: "ក្រាស់/ធំ" },
    { word: "后悔", pinyin: "hòu huǐ", khmer: "សោកស្តាយ" },
    { word: "互联网", pinyin: "hù lián wǎng", khmer: "អ៊ីនធឺណិត" },
    { word: "互相", pinyin: "hù xiāng", khmer: "ទៅវិញទៅមក" },
    { word: "护士", pinyin: "hù shi", khmer: "គិលានុបដ្ឋាយិកា" },
    { word: "怀疑", pinyin: "huái yí", khmer: "សង្ស័យ" },
    { word: "回忆", pinyin: "huí yì", khmer: "អនុស្សាវរីយ៍" },
    { word: "活动", pinyin: "huó dòng", khmer: "សកម្មភាព" },
    { word: "活泼", pinyin: "huó po", khmer: "រស់រវើក" },
    { word: "火", pinyin: "huǒ", khmer: "ភ្លើង" },
    { word: "获得", pinyin: "huò dé", khmer: "ទទួលបាន" },
    { word: "基础", pinyin: "jī chǔ", khmer: "មូលដ្ឋាន" },
    { word: "激动", pinyin: "jī dòng", khmer: "រំភើប" },
    { word: "积极", pinyin: "jī jí", khmer: "វិជ្ជមាន" },
    { word: "积累", pinyin: "jī lěi", khmer: "បន្សំ " },
    { word: "即使", pinyin: "jí shǐ", khmer: "បើទោះបីជា" },
    { word: "及时", pinyin: "jí shí", khmer: "ទាន់ពេលវេលា" },
    { word: "寄", pinyin: "jì", khmer: "ផ្ញើ" },
    { word: "技术", pinyin: "jì shù", khmer: "បច្ចេកវិទ្យា" },
    { word: "既然", pinyin: "jì rán", khmer: "ចាប់តាំងពី" },
    { word: "继续", pinyin: "jì xù", khmer: "អនុវត្តលើ" },
    { word: "计划", pinyin: "jì huà", khmer: "ផែនការ" },
    { word: "记者", pinyin: "jì zhě", khmer: "អ្នកយកព័ត៌មាន" },
    { word: "加班", pinyin: "jiā bān", khmer: "ថែមម៉ោង" },
    { word: "加油站", pinyin: "jiā yóu zhàn", khmer: "ស្ថានីយ៍ប្រេង" },
    { word: "家具", pinyin: "jiā jù", khmer: "គ្រឿងសង្ហារឹម" },
    { word: "假", pinyin: "jiǎ", khmer: "មិនពិត/ក្លែងក្លាយ" },
    { word: "价格", pinyin: "jià gé", khmer: "តម្លៃ" },
    { word: "坚持", pinyin: "jiān chí", khmer: "តស៊ូ" },
    { word: "减肥", pinyin: "jiǎn féi", khmer: "ស្រក​ទម្ងន់" },
    { word: "减少", pinyin: "jiǎn shǎo", khmer: "កាត់បន្ថយ" },
    { word: "建议", pinyin: "jiàn yì", khmer: "សំណូមពរ" },
    { word: "将来", pinyin: "jiāng lái", khmer: "អនាគត" },
    { word: "奖金", pinyin: "jiǎng jīn", khmer: "ប្រាក់រង្វាន់" },
    { word: "降低", pinyin: "jiàng dī", khmer: "កាត់បន្ថយ" },
    { word: "降落", pinyin: "jiàng luò", khmer: "ចុះចត" },
    { word: "交", pinyin: "jiāo", khmer: "ប្រគល់" },
    { word: "交流", pinyin: "jiāo liú", khmer: "ទំនាក់ទំនង​ជាមួយ" },
    { word: "交通", pinyin: "jiāo tōng", khmer: "ចរាចរណ៍" },
    { word: "郊区", pinyin: "jiāo qū", khmer: "តំបន់ជាយក្រុង" },
    { word: "骄傲", pinyin: "jiāo ào", khmer: "មានមោទនភាព" },
    { word: "饺子", pinyin: "jiǎo zi", khmer: "នំប៉ាវ" },
    { word: "教授", pinyin: "jiào shòu", khmer: "សាស្រ្តាចារ្យ" },
    { word: "教育", pinyin: "jiào yù", khmer: "ការអប់រំ" },
    { word: "接受", pinyin: "jiē shòu", khmer: "ទទួលយក" },
    { word: "接着", pinyin: "jiē zhe", khmer: "បន្ទាប់មក" },
    { word: "结果", pinyin: "jié guǒ", khmer: "លទ្ធផល" },
    { word: "节", pinyin: "jié", khmer: "ពិធីបុណ្យ " },
    { word: "节约", pinyin: "jié yuē", khmer: "សន្សំ" },
    { word: "解释", pinyin: "jiě shì", khmer: "ការពន្យល់" },
    { word: "尽管", pinyin: "jǐn guǎn", khmer: "ទោះជា" },
    { word: "紧张", pinyin: "jǐn zhāng", khmer: "ភាពតានតឹង" },
    { word: "禁止", pinyin: "jìn zhǐ", khmer: "ហាមឃាត់" },
    { word: "进行", pinyin: "jìn xíng", khmer: "អនុវត្ត" },
    { word: "京剧", pinyin: "jīng jù", khmer: "ល្ខោនប៉េកាំង" },
    { word: "精彩", pinyin: "jīng cǎi", khmer: "អស្ចារ្យ" },
    { word: "经济", pinyin: "jīng jì", khmer: "សេដ្ឋកិច្ច" },
    { word: "经历", pinyin: "jīng lì", khmer: "បទពិសោធន៍" },
    { word: "经验", pinyin: "jīng yàn", khmer: "បទពិសោធន៍" },
    { word: "景色", pinyin: "jǐng sè", khmer: "ទេសភាព" },
    { word: "警察", pinyin: "jǐng chá", khmer: "ប៉ូលីស" },
    { word: "竞争", pinyin: "jìng zhēng", khmer: "ការប្រកួតប្រជែង" },
    { word: "竟然", pinyin: "jìng rán", khmer: "ដល់ថ្នាក់នោះ" },
    { word: "镜子", pinyin: "jìng zi", khmer: "កញ្ចក់" },
    { word: "究竟", pinyin: "jiū jìng", khmer: "ដូចម្តេចបានជា" },
    { word: "举", pinyin: "jǔ", khmer: "លើក" },
    { word: "举办", pinyin: "jǔ bàn", khmer: "រៀបចំ" },
    { word: "举行", pinyin: "jǔ xíng", khmer: "ធ្វើឡើង" },
    { word: "拒绝", pinyin: "jù jué", khmer: "បដិសេធ" },
    { word: "聚会", pinyin: "jù huì", khmer: "ការជួបជុំ/កម្មវិធីជប់លៀង" },
    { word: "距离", pinyin: "jù lí", khmer: "ចម្ងាយ" },
    { word: "开玩笑", pinyin: "kāi wán xiào", khmer: "កំប្លែង" },
    { word: "开心", pinyin: "kāi xīn", khmer: "រីករាយ" },
    { word: "看法", pinyin: "kàn fǎ", khmer: "ទស្សនៈ" },
    { word: "烤鸭", pinyin: "kǎo yā", khmer: "ទាអាំង" },
    { word: "考虑", pinyin: "kǎo lǜ", khmer: "ពិចារណា" },
    { word: "棵", pinyin: "kē", khmer: "ដើម (រុក្ខជាតិ)" },
    { word: "科学", pinyin: "kē xué", khmer: "វិទ្យាសាស្ត្រ" },
    { word: "咳嗽", pinyin: "ké sou", khmer: "ក្អក" },
    { word: "可怜", pinyin: "kě lián", khmer: "អាណិតអាសូរ" },
    { word: "可是", pinyin: "kě shì", khmer: "ប៉ុន្តែ" },
    { word: "可惜", pinyin: "kě xī", khmer: "ជាអកុសល" },
    { word: "客厅", pinyin: "kè tīng", khmer: "បន្ទប់ទទួលភ្ញៀវ" },
    { word: "肯定", pinyin: "kěn dìng", khmer: "ប្រាកដ" },
    { word: "空", pinyin: "kōng", khmer: "ទទេ" },
    { word: "空气", pinyin: "kōng qì", khmer: "ខ្យល់" },
    { word: "恐怕", pinyin: "kǒng pà", khmer: "ខ្ញុំ​ខ្លាចថា..." },
    { word: "苦", pinyin: "kǔ", khmer: "ជូរចត់" },
    { word: "矿泉水", pinyin: "kuàng quán shuǐ", khmer: "ទឹករ៉ែ" },
    { word: "困", pinyin: "kùn", khmer: "ងងុយគេង" },
    { word: "困难", pinyin: "kùn nan", khmer: "ការលំបាក" },
    { word: "垃圾桶", pinyin: "lā jī tǒng", khmer: "ធុងសំរាម" },
    { word: "拉", pinyin: "lā", khmer: "ទាញ" },
    { word: "辣", pinyin: "là", khmer: "ហិរ" },
    { word: "来不及", pinyin: "lái bu jí", khmer: "មិនទាន់ទេ" },
    { word: "来得及", pinyin: "lái de jí", khmer: "ទាន់ទេ" },
    { word: "来自", pinyin: "lái zì", khmer: "មកពី" },
    { word: "懒", pinyin: "lǎn", khmer: "ខ្ជិល" },
    { word: "浪费", pinyin: "làng fèi", khmer: "ខ្ជះខ្ជាយ" },
    { word: "浪漫", pinyin: "làng màn", khmer: "មនោសញ្ចេតនា" },
    { word: "老虎", pinyin: "lǎo hǔ", khmer: "ខ្លា" },
    { word: "冷静", pinyin: "lěng jìng", khmer: "ស្ងប់ស្ងាត់" },
    { word: "理发", pinyin: "lǐ fà", khmer: "កាត់សក់" },
    { word: "理解", pinyin: "lǐ jiě", khmer: "ការយល់ដឹង" },
    { word: "理想", pinyin: "lǐ xiǎng", khmer: "ល្អបំផុត" },
    { word: "礼拜天", pinyin: "lǐ bài tiān", khmer: "ថ្ងៃអាទិត្យ" },
    { word: "礼貌", pinyin: "lǐ mào", khmer: "សុភាពរាបសា" },
    { word: "例如", pinyin: "lì rú", khmer: "ឧ" },
    { word: "力气", pinyin: "lì qi", khmer: "កម្លាំង" },
    { word: "厉害", pinyin: "lì hai", khmer: "អស្ចារ្យ" },
    { word: "俩", pinyin: "liǎ", khmer: "ទាំងពីរ" },
    { word: "联系", pinyin: "lián xì", khmer: "ទំនាក់ទំនង" },
    { word: "连", pinyin: "lián", khmer: "សូម្បីតែ" },
    { word: "凉快", pinyin: "liáng kuai", khmer: "ត្រជាក់" },
    { word: "零钱", pinyin: "líng qián", khmer: "ការផ្លាស់ប្តូរតិចតួច" },
    { word: "另外", pinyin: "lìng wài", khmer: "លើស​ពី​នេះ​ទៀត" },
    { word: "流利", pinyin: "liú lì", khmer: "ស្ទាត់" },
    { word: "流行", pinyin: "liú xíng", khmer: "ពេញនិយម" },
    { word: "留", pinyin: "liú", khmer: "ស្នាក់នៅ" },
    { word: "旅行", pinyin: "lǚ xíng", khmer: "ធ្វើដំណើរ" },
    { word: "乱", pinyin: "luàn", khmer: "ភាពវឹកវរ" },
    { word: "律师", pinyin: "lv4 shī", khmer: "មេធាវី" },
    { word: "麻烦", pinyin: "má fan", khmer: "បញ្ហា" },
    { word: "马虎", pinyin: "mǎ hu", khmer: "ធ្វេសប្រហែស" },
    { word: "满", pinyin: "mǎn", khmer: "ពេញ" },
    { word: "毛", pinyin: "máo", khmer: "សក់" },
    { word: "毛巾", pinyin: "máo jīn", khmer: "កន្សែង" },
    { word: "美丽", pinyin: "měi lì", khmer: "ស្រស់ស្អាត" },
    { word: "梦", pinyin: "mèng", khmer: "សុបិន្ត" },
    { word: "迷路", pinyin: "mí lù", khmer: "វង្វេង​ផ្លូវ" },
    { word: "密码", pinyin: "mì mǎ", khmer: "ពាក្យសម្ងាត់" },
    { word: "免费", pinyin: "miǎn fèi", khmer: "ឥតគិតថ្លៃ" },
    { word: "秒", pinyin: "miǎo", khmer: "ទីពីរ" },
    { word: "民族", pinyin: "mín zú", khmer: "ជនជាតិ " },
    { word: "母亲", pinyin: "mǔ qīn", khmer: "ម្តាយ" },
    { word: "目的", pinyin: "mù dì", khmer: "គោលបំណង" },
    { word: "耐心", pinyin: "nài xīn", khmer: "អត់ធ្មត់" },
    { word: "难道", pinyin: "nán dào", khmer: "គឺវា" },
    { word: "难受", pinyin: "nán shòu", khmer: "មិនស្រួល" },
    { word: "内", pinyin: "nèi", khmer: "នៅខាងក្នុង" },
    { word: "内容", pinyin: "nèi róng", khmer: "មាតិកា" },
    { word: "能力", pinyin: "néng lì", khmer: "សមត្ថភាព" },
    { word: "年龄", pinyin: "nián líng", khmer: "អាយុ" },
    { word: "弄", pinyin: "nòng", khmer: "ធ្វើ" },
    { word: "暖和", pinyin: "nuǎn huo", khmer: "កក់ក្តៅ" },
    { word: "偶尔", pinyin: "ǒu ěr", khmer: "ជាពេលក្រោម" },
    { word: "排队", pinyin: "pái duì", khmer: "ជួរ" },
    { word: "排列", pinyin: "pái liè", khmer: "ការរៀបចំ" },
    { word: "判断", pinyin: "pàn duàn", khmer: "ការវិនិច្ឆ័យ" },
    { word: "陪", pinyin: "péi", khmer: "រួមដំណើរជាមួយ" },
    { word: "批评", pinyin: "pī píng", khmer: "ការរិះគន់" },
    { word: "皮肤", pinyin: "pí fū", khmer: "ស្បែក" },
    { word: "脾气", pinyin: "pí qi", khmer: "កំហឹង" },
    { word: "篇", pinyin: "piān", khmer: "អត្ថបទ" },
    { word: "骗", pinyin: "piàn", khmer: "បោក" },
    { word: "乒乓球", pinyin: "pīng pāng qiú", khmer: "ពីងប៉ុង" },
    { word: "平时", pinyin: "píng shí", khmer: "ជាធម្មតា" },
    { word: "破", pinyin: "pò", khmer: "ខូច" },
    { word: "葡萄", pinyin: "pú tao", khmer: "ទំពាំងបាយជូរ" },
    { word: "普遍", pinyin: "pǔ biàn", khmer: "ជាសកល" },
    { word: "普通话", pinyin: "pǔ tōng huà", khmer: "ភាសាចិនកុកងឺ" },
    { word: "其次", pinyin: "qí cì", khmer: "ទីពីរ" },
    { word: "其中", pinyin: "qí zhōng", khmer: "ក្នុងចំណោម​ពួកគេ" },
    { word: "气候", pinyin: "qì hòu", khmer: "អាកាសធាតុ" },
    { word: "千万", pinyin: "qiān wàn", khmer: "ដប់លាន" },
    { word: "签证", pinyin: "qiān zhèng", khmer: "ទិដ្ឋាការ" },
    { word: "敲", pinyin: "qiāo", khmer: "គោះ" },
    { word: "桥", pinyin: "qiáo", khmer: "ស្ពាន" },
    { word: "巧克力", pinyin: "qiǎo kè lì", khmer: "សូកូឡា" },
    { word: "亲戚", pinyin: "qīn qi", khmer: "សាច់ញាតិ" },
    { word: "轻", pinyin: "qīng", khmer: "ពន្លឺ" },
    { word: "轻松", pinyin: "qīng sōng", khmer: "ងាយស្រួល" },
    { word: "情况", pinyin: "qíng kuàng", khmer: "កំពុងកើតឡើង" },
    { word: "穷", pinyin: "qióng", khmer: "ក្រីក្រ" },
    { word: "区别", pinyin: "qū bié", khmer: "ភាពខុសគ្នា" },
    { word: "取", pinyin: "qǔ", khmer: "យក" },
    { word: "全部", pinyin: "quán bù", khmer: "ទាំងអស់" },
    { word: "缺点", pinyin: "quē diǎn", khmer: "គុណវិបត្តិ" },
    { word: "缺少", pinyin: "quē shǎo", khmer: "ខ្វះខាត" },
    { word: "却", pinyin: "què", khmer: "ប៉ុន្តែ" },
    { word: "确实", pinyin: "què shí", khmer: "ជា​ការ​ពិត" },
    { word: "然而", pinyin: "rán ér", khmer: "ទោះយ៉ាងណាក៏ដោយ" },
    { word: "热闹", pinyin: "rè nao", khmer: "រស់រវើក" },
    { word: "任何", pinyin: "rèn hé", khmer: "ណាមួយ" },
    { word: "任务", pinyin: "rèn wu", khmer: "ភារកិច្ច; ការងារ" },
    { word: "扔", pinyin: "rēng", khmer: "បោះ; បោះចោល" },
    { word: "仍然", pinyin: "réng rán", khmer: "នៅតែ; មិនបានផ្លាស់ប្ដូរ" },
    { word: "日记", pinyin: "rì jì", khmer: "កំណត់ហេតុប្រចាំថ្ងៃ" },
    { word: "入口", pinyin: "rù kǒu", khmer: "ច្រកចូល" },
    { word: "散步", pinyin: "sàn bù", khmer: "ដើរលំហែ; ដើរលេង" },
    { word: "森林", pinyin: "sēn lín", khmer: "ព្រៃឈើ" },
    { word: "沙发", pinyin: "shā fā", khmer: "សាឡុង; កៅអីទន់" },
    { word: "伤心", pinyin: "shāng xīn", khmer: "សោកស្តាយ; ប្តេជ្ញាចិត្តបែកបាក់" },
    { word: "商量", pinyin: "shāng liang", khmer: "ពិភាក្សា; ពិចារណារួមគ្នា" },
    { word: "稍微", pinyin: "shāo wēi", khmer: "បន្តិចបន្តួច" },
    { word: "勺子", pinyin: "sháo zi", khmer: "ស្លាបព្រា" },
    { word: "社会", pinyin: "shè huì", khmer: "សង្គម" },
    { word: "深", pinyin: "shēn", khmer: "ជ្រៅ; យឺត; ធ្ងន់ធ្ងរ" },
    { word: "申请", pinyin: "shēn qǐng", khmer: "ដាក់ពាក្យ; ស្នើសុំ" },
    { word: "甚至", pinyin: "shèn zhì", khmer: "សូម្បីតែ" },
    { word: "生活", pinyin: "shēng huó", khmer: "ជីវិត; រស់នៅ" },
    { word: "生命", pinyin: "shēng mìng", khmer: "ជីវិត; ជីវិតរស់" },
    { word: "生意", pinyin: "shēng yì", khmer: "ពាណិជ្ជកម្ម; ការជួញដូរ" },
    { word: "省", pinyin: "shěng", khmer: "ខេត្ត; ប្រមាណប្រមៃ; បន្ថយ" },
    { word: "剩", pinyin: "shèng", khmer: "នៅសល់; នៅជាប់" },
    { word: "失败", pinyin: "shī bài", khmer: "បរាជ័យ; ជំងឺអត់ជោគជ័យ" },
    { word: "失望", pinyin: "shī wàng", khmer: "ខកចិត្ត; បាត់បង់សង្ឃឹម" },
    { word: "师傅", pinyin: "shī fu", khmer: "គ្រូ; ជាង; អ្នកមានជំនាញ" },
    { word: "十分", pinyin: "shí fēn", khmer: "ខ្លាំងណាស់; យ៉ាងហោចណាស់; ដាច់ខាត" },
    { word: "实际", pinyin: "shí jì", khmer: "ជាក់ស្តែង; ជាក់លាក់; ពិតប្រាកដ" },
    { word: "实在", pinyin: "shí zài", khmer: "ពិតជា; ស្មោះត្រង់; ប្រាកដ" },
    { word: "使", pinyin: "shǐ", khmer: "ធ្វើឲ្យ; ប្រើប្រាស់; បញ្ជូន" },
    { word: "使用", pinyin: "shǐ yòng", khmer: "ប្រើ; ប្រើប្រាស់" },
    { word: "世纪", pinyin: "shì jì", khmer: "សតវត្ស" },
    { word: "是否", pinyin: "shì fǒu", khmer: "តើ...ឬអត់; មែនឬទេ" },
    { word: "适合", pinyin: "shì hé", khmer: "សមរម្យ; សម" },
    { word: "适应", pinyin: "shì yìng", khmer: "សមរម្យ; ហួសហេតុ; អាចសម្របខ្លួនបាន" },
    { word: "收", pinyin: "shōu", khmer: "ទទួល; ប្រមូល; ទុកជាកម្មសិទ្ធិ" },
    { word: "收入", pinyin: "shōu rù", khmer: "ប្រាក់ចំណូល; 收入" },
    { word: "收拾", pinyin: "shōu shi", khmer: "ដាក់ជាសណ្តាប់ធ្នាប់; ដាក់ទុក; ជួសជុល" },
    { word: "首都", pinyin: "shǒu dū", khmer: "រាជធានី" },
    { word: "首先", pinyin: "shǒu xiān", khmer: "ជាដំបូង; មុនគេ" },
    { word: "受不了", pinyin: "shòu bù liǎo", khmer: "ទ្រាំមិនបាន; ស៊ូមិនបាន" },
    { word: "受到", pinyin: "shòu dào", khmer: "ទទួលបាន; រងការប៉ះពាល់" },
    { word: "售货员", pinyin: "shòu huò yuán", khmer: "បុគ្គលិកលក់ទំនិញ" },
    { word: "输", pinyin: "shū", khmer: "ចាញ់; ដឹកជញ្ជូន; បញ្ចូល (ពាក្យសម្ងាត់)" },
    { word: "熟悉", pinyin: "shú xī", khmer: "ស្គាល់ល្អ; ជាប់ស្និទ្ធ" },
    { word: "数量", pinyin: "shù liàng", khmer: "បរិមាណ; ចំនួន" },
    { word: "数字", pinyin: "shù zì", khmer: "លេខ; ចំនួន; លេខឌីជីថល" },
    { word: "帅", pinyin: "shuài", khmer: "សង្ហា; កំពស់; មើលទៅល្អ" },
    { word: "顺便", pinyin: "shùn biàn", khmer: "ដោយឡែកផង; ជាប្រយោជន៍បន្ថែម" },
    { word: "顺利", pinyin: "shùn lì", khmer: "ដោយរលូន; ដោយជោគជ័យ" },
    { word: "顺序", pinyin: "shùn xù", khmer: "លំដាប់; សណ្តាប់ធ្នាប់" },
    { word: "说明", pinyin: "shuō míng", khmer: "ពន្យល់; បង្ហាញ; សេចក្ដីជំរាប" },
    { word: "硕士", pinyin: "shuò shì", khmer: "បរិញ្ញាបត្រជាន់ខ្ពស់ (Master)" },
    { word: "死", pinyin: "sǐ", khmer: "ស្លាប់" },
    { word: "塑料袋", pinyin: "sù liào dài", khmer: "ថង់ប្លាស្ទិក" },
    { word: "速度", pinyin: "sù dù", khmer: "ល្បឿន; អត្រា" },
    { word: "酸", pinyin: "suān", khmer: "ជូរ" },
    { word: "随便", pinyin: "suí biàn", khmer: "តាមចិត្ត; ឬសេរី; មិនបានគិតច្បាស់" },
    { word: "随着", pinyin: "suí zhe", khmer: "ជាមួយនឹង; តាម" },
    { word: "孙子", pinyin: "sūn zi", khmer: "ចៅប្រុស (តាមខាងប៉ា)" },
    { word: "所有", pinyin: "suǒ yǒu", khmer: "ទាំងអស់; កាន់កាប់; ជាវិញ្ញាបនបត្រ" },
    { word: "台", pinyin: "tái", khmer: "ឈុត; កន្លែង; ស្ថានីយ៍; តំបន់; 台 (កាត់ពី តៃវ៉ាន់)" },
    { word: "抬", pinyin: "tái", khmer: "លើក; លើកឡើង; ដាក់លើស្មា" },
    { word: "态度", pinyin: "tài du", khmer: "អាកប្បកិរិយា; ទស្សនៈ" },
    { word: "弹钢琴", pinyin: "tán gāng qín", khmer: "លេងភ្លេងព្យាណូ" },
    { word: "谈", pinyin: "tán", khmer: "ពិភាក្សា; និយាយ; សន្ទនា" },
    { word: "汤", pinyin: "tāng", khmer: "ស៊ុប; ទឹកក្តៅ" },
    { word: "糖", pinyin: "táng", khmer: "ស្ករ; ស្ករគ្រាប់; គ្រឿងផ្អែម" },
    { word: "躺", pinyin: "tǎng", khmer: "ដេក; ដេកត្រង់" },
    { word: "趟", pinyin: "tàng", khmer: "ដង (ចំនួនដងនៃការធ្វើដំណើរ)" },
    { word: "讨论", pinyin: "tǎo lùn", khmer: "ពិភាក្សា; ពិចារណា" },
    { word: "讨厌", pinyin: "tǎo yàn", khmer: "ស្អប់; អាចម៍អាធ្មោន; មិនស្រលាញ់" },
    { word: "特点", pinyin: "tè diǎn", khmer: "លក្ខណៈពិសេស; លក្ខណៈសំខាន់" },
    { word: "提", pinyin: "tí", khmer: "លើក; អង្គុយ; បង្ហាញ; និយាយពី" },
    { word: "提供", pinyin: "tí gōng", khmer: "ផ្តល់; ផ្គត់ផ្គង់; ផ្តល់ជូន" },
    { word: "提前", pinyin: "tí qián", khmer: "មកមុន; ពន្លឿនពេល" },
    { word: "提醒", pinyin: "tí xǐng", khmer: "រំលឹក; ដាក់អោយចាប់អារម្មណ៍" },
    { word: "填空", pinyin: "tián kòng", khmer: "បំពេញចន្លោះ; ដាក់ពាក្យនៅចន្លោះទទេ" },
    { word: "条件", pinyin: "tiáo jiàn", khmer: "លក្ខខណ្ឌ; ភាពនានា; លក្ខណៈបរិបទ" },
    { word: "停", pinyin: "tíng", khmer: "ឈប់; បញ្ឈប់; ចត (ឡាន)" },
    { word: "挺", pinyin: "tǐng", khmer: "ពិតជា; ក្រិត; ធូរស្បើយ; ចង្អុលចេញ" },
    { word: "通过", pinyin: "tōng guò", khmer: "ឆ្លងកាត់; តាមរយៈ; អនុម័ត; ទទួល" },
    { word: "通知", pinyin: "tōng zhī", khmer: "ជូនដំណឹង; ដំណឹងជូន" },
    { word: "同情", pinyin: "tóng qíng", khmer: "មានមនោសញ្ចេតនាដល់អ្នកផ្សេង;មេត្តាករុណា" },
    { word: "同时", pinyin: "tóng shí", khmer: "នៅពេលដូចគ្នា; ប្រកបដោយការធ្វើនៅពេលដូចគ្នា" },
    { word: "推", pinyin: "tuī", khmer: "លើក; ផ្ដេក; បដិសេធ; បដិសេធចោល; លើកឡើង" },
    { word: "推迟", pinyin: "tuī chí", khmer: "ពន្យាពេល; ធ្វើការពន្យារពេល" },
    { word: "脱", pinyin: "tuō", khmer: "ចេញ; ដកចេញ; ផ escapes" },
    { word: "袜子", pinyin: "wà zi", khmer: "ស្រោមជើង; ស្រោមជើងខាងក្រោម" },
    { word: "完全", pinyin: "wán quán", khmer: "ពេញលេញ; សព្វត្រង់; ទាំងស្រុង" },
    { word: "往往", pinyin: "wǎng wǎng", khmer: "ជាញឹកញាប់; ប្រហែលជា" },
    { word: "网球", pinyin: "wǎng qiú", khmer: "បាល់ទង់" },
    { word: "网站", pinyin: "wǎng zhàn", khmer: "វេបសាយ; ទីតាំងបណ្ដាញ" },
    { word: "危险", pinyin: "wēi xiǎn", khmer: "ហានិភ័យ; គ្រោះថ្នាក់" },
    { word: "卫生间", pinyin: "wèi shēng jiān", khmer: "បង្គន់; បន្ទប់ទឹក" },
    { word: "味道", pinyin: "wèi dào", khmer: "រសជាតិ; ក្លិន" },
    { word: "温度", pinyin: "wēn dù", khmer: "សីតុណ្ហភាព" },
    { word: "文章", pinyin: "wén zhāng", khmer: "អត្ថបទ; គំនិតស្រាប" },
    { word: "污染", pinyin: "wū rǎn", khmer: "ការបំពុល; ការបញ្ចេញជាតិពុល" },
    { word: "无", pinyin: "wú", khmer: "គ្មាន; គ្មានអ្វី" },
    { word: "无聊", pinyin: "wú liáo", khmer: "គ្មានអ្វីធ្វើ; សង្ឃឹមអត់ខ្ពស់" },
    { word: "无论", pinyin: "wú lùn", khmer: "មិនថា... ឬអត់" },
    { word: "误会", pinyin: "wù huì", khmer: "ច្រឡំ; ការយល់ច្រឡំ" },
    { word: "吸引", pinyin: "xī yǐn", khmer: "ទាក់ទាញ; នាំឱ្យមានចំណាប់អារម្មណ៍" },
    { word: "西红柿", pinyin: "xī hóng shì", khmer: "ប៉េងប៉ោះ" },
    { word: "咸", pinyin: "xián", khmer: "អប់រំ" },
    { word: "现金", pinyin: "xiàn jīn", khmer: "ប្រាក់សន្សំ" },
    { word: "羡慕", pinyin: "xiàn mù", khmer: "ចង់មានអ្វីដែលអ្នកផ្សេងមាន" },
    { word: "相反", pinyin: "xiāng fǎn", khmer: "ប្រឆាំង; ទាំងស្រមោល" },
    { word: "相同", pinyin: "xiāng tóng", khmer: "ស្មើគ្នា; ត្រូវគ្នា" },
    { word: "香", pinyin: "xiāng", khmer: "ក្រអូប " },
    { word: "详细", pinyin: "xiáng xì", khmer: "លម្អិត; លម្អិតទាំងអស់" },
    { word: "响", pinyin: "xiǎng", khmer: "មានសម្លេង; ប្រៀបប្រដៅ" },
    { word: "橡皮", pinyin: "xiàng pí", khmer: "យ៉ូសដុតសរសេរ" },
    { word: "消息", pinyin: "xiāo xi", khmer: "ព័ត៌មាន" },
    { word: "小吃", pinyin: "xiǎo chī", khmer: "សាហ៊ុយ" },
    { word: "小伙子", pinyin: "xiǎo huǒ zi", khmer: "ក្មេងប្រុស" },
    { word: "小说", pinyin: "xiǎo shuō", khmer: "ប្រលោមពិភព" },
    { word: "效果", pinyin: "xiào guǒ", khmer: "ផលប៉ះពាល់" },
    { word: "笑话", pinyin: "xiào huà", khmer: "រឿងកំប្លែង" },
    { word: "心情", pinyin: "xīn qíng", khmer: "អារម្មណ៍; ទីស្នេហ៍" },
    { word: "辛苦", pinyin: "xīn kǔ", khmer: "ដូចជា" },
    { word: "信封", pinyin: "xìn fēng", khmer: "សំបុត្រផ្តល់ព័ត៌មាន" },
    { word: "钥匙", pinyin: "yào shi", khmer: "សោ; គំរូ" },
    { word: "也许", pinyin: "yě xǔ", khmer: "អាចជា; ប្រហែលជា" },
    { word: "叶子", pinyin: "yè zi", khmer: "ស្លឹកឈើ" },
    { word: "页", pinyin: "yè", khmer: "ទំព័រ; សន្លឹក" },
    { word: "一切", pinyin: "yī qiè", khmer: "អ្វីទាំងអស់; ទាំងអស់" },
    { word: "以", pinyin: "yǐ", khmer: "ប្រើជា; យោងតាម" },
    { word: "以为", pinyin: "yǐ wéi", khmer: "គិតថា; សន្និដ្ឋានថា" },
    { word: "意见", pinyin: "yì jiàn", khmer: "មតិ; សំនួរ; ប្រកាស" },
    { word: "艺术", pinyin: "yì shù", khmer: "សិល្បៈ" },
    { word: "因此", pinyin: "yīn cǐ", khmer: "ដោយហេតុផលនេះ" },
    { word: "引起", pinyin: "yǐn qǐ", khmer: "បណ្ដាលឲ្យ; ជំរុញ" },
    { word: "印象", pinyin: "yìn xiàng", khmer: "ភាពច្បាស់លាស់; ទស្សនៈ" },
    { word: "赢", pinyin: "yíng", khmer: "ឈ្នះ" },
    { word: "应聘", pinyin: "yìng pìn", khmer: "ទទួលការផ្តល់ការងារ; អនុម័តកិច្ចសន្យាការងារ" },
    { word: "勇敢", pinyin: "yǒng gǎn", khmer: "មានកម្លាំងចិត្ត; មានសេចក្តីហ្មត់ល្អ" },
    { word: "永远", pinyin: "yǒng yuǎn", khmer: "តែបន្ត; ស្ថិតិរបស់អន្ដរកថាជាប់" },
    { word: "优点", pinyin: "yōu diǎn", khmer: "គុណសម្បត្តិ" },
    { word: "优秀", pinyin: "yōu xiù", khmer: "អស្ចារ្យ; ល្អ" },
    { word: "幽默", pinyin: "yōu mò", khmer: "ការសើចចិត្ត; ពីរោះ" },
    { word: "尤其", pinyin: "yóu qí", khmer: "ជាពិសេស" },
    { word: "由", pinyin: "yóu", khmer: "ដោយ; ពី" },
    { word: "由于", pinyin: "yóu yú", khmer: "ដោយសារតែ; បន្ទាប់ពី" },
    { word: "邮局", pinyin: "yóu jú", khmer: "ការិយាល័យផ្តល់សំបុត្រ" },
    { word: "友好", pinyin: "yǒu hǎo", khmer: "មិត្តភាព; មិត្តត្រឹម" },
    { word: "友谊", pinyin: "yǒu yì", khmer: "មិត្តភាព; សាមគ្គីភាព" },
    { word: "有趣", pinyin: "yǒu qù", khmer: "គួរឱ្យចាប់អារម្មណ៍; មានភាពទាក់ទាញ" },
    { word: "于是", pinyin: "yú shì", khmer: "ដូច្នេះ; បន្ទាប់ពីនេះ" },
    { word: "愉快", pinyin: "yú kuài", khmer: "រីករាយ; សប្បាយ" },
    { word: "与", pinyin: "yǔ", khmer: "ជាមួយ; និង" },
    { word: "羽毛球", pinyin: "yǔ máo qiú", khmer: "វាយសី" },
    { word: "语法", pinyin: "yǔ fǎ", khmer: "រយៈការប្រាប់ភាសា" },
    { word: "语言", pinyin: "yǔ yán", khmer: "ភាសា" },
    { word: "预习", pinyin: "yù xí", khmer: "រៀបចំមុនសម័យការសិក្សា" },
    { word: "原来", pinyin: "yuán lái", khmer: "ដើមត្រូវ; មុននេះ; ឡើយ" },
    { word: "原谅", pinyin: "yuán liàng", khmer: "ទោស; អត្រា" },
    { word: "原因", pinyin: "yuán yīn", khmer: "មូលហេតុ" },
    { word: "约会", pinyin: "yuē huì", khmer: "ការណាត់ជួប; ការអនុញ្ញាត" },
    { word: "阅读", pinyin: "yuè dú", khmer: "ការអាន; ការអានជាច្រើន" },
    { word: "云", pinyin: "yún", khmer: "ពពក" },
    { word: "允许", pinyin: "yǔn xǔ", khmer: "អនុញ្ញាត; អាចធ្វើបាន" },
    { word: "杂志", pinyin: "zá zhì", khmer: "កាសែត; ទស្សនីយភាព" },
    { word: "咱们", pinyin: "zán men", khmer: "យើង; យើងរាល់គ្នា" },
    { word: "暂时", pinyin: "zàn shí", khmer: "បណ្តោះអាសន្ន; សមរម្យ" },
    { word: "脏", pinyin: "zāng", khmer: "កខ្វក់" },
    { word: "责任", pinyin: "zé rèn", khmer: "ការទទួលខុសត្រូវ; ភារៈកិច្ច" },
    { word: "增加", pinyin: "zēng jiā", khmer: "បន្ថែម; ឡើង" },
    { word: "占线", pinyin: "zhàn xiàn", khmer: "ខ្សែទូរស័ព្ទរវល់,ខ្សែកំពុងប្រើប្រាស់" },
    { word: "招聘", pinyin: "zhāo pìn", khmer: "ជ្រើសរើសបុគ្គលិក; ការជ្រើសរើសការងារ" },
    { word: "照", pinyin: "zhào", khmer: "យោងទៅតាម; ថតរូប; បញ្ចាំង; ឆ្លុះបញ្ចាំង" },
    { word: "真正", pinyin: "zhēn zhèng", khmer: "ពិតប្រាកដ; ដូចពិត" },
    { word: "整理", pinyin: "zhěng lǐ", khmer: "រៀបចំ; ដំឡើង; ចាត់ចែង" },
    { word: "正常", pinyin: "zhèng cháng", khmer: "ធម្មតា; ទៀងទាត់" },
    { word: "正好", pinyin: "zhèng hǎo", khmer: "បានត្រឹមត្រូវ; ដំណើរបានត្រឹមពេល" },
    { word: "正确", pinyin: "zhèng què", khmer: "ត្រឹមត្រូវ; ถูกต้อง" },
    { word: "正式", pinyin: "zhèng shì", khmer: "ផ្លូវការ; តាមផ្លូវការណ៍" },
    { word: "证明", pinyin: "zhèng míng", khmer: "បង្ហាញថាពិតប្រាកដ; ភស្ដុតាង; សញ្ញាប័ត្រ" },
    { word: "之", pinyin: "zhī", khmer: "នៃ (ភាសាសាស្រ្តនិពន្ធចិន); របស់គាត់/វា" },
    { word: "支持", pinyin: "zhī chí", khmer: "គាំទ្រ; ជួយគាំទ្រ" },
    { word: "知识", pinyin: "zhī shi", khmer: "ចំណេះដឹង; សេចក្ដីដឹង" },
    { word: "值得", pinyin: "zhí de", khmer: "សមនឹង; គួរឱ្យ" },
    { word: "植物", pinyin: "zhí wù", khmer: "រុក្ខជាតិ; ដើមឈើ" },
    { word: "直接", pinyin: "zhí jiē", khmer: "ដោយផ្ទាល់; ត្រង់ៗ" },
    { word: "职业", pinyin: "zhí yè", khmer: "អាជីព; មុខរបរ" },
    { word: "只好", pinyin: "zhǐ hǎo", khmer: "ចាញ់បង្ខំ; គ្មានជម្រើសទេ" },
    { word: "只要", pinyin: "zhǐ yào", khmer: "តែត្រូវការ...ប៉ុណ្ណោះ; ប្រសិនបើ" },
    { word: "指", pinyin: "zhǐ", khmer: "មេដៃ; ណែនាំ; សំដៅទៅលើ" },
    { word: "至少", pinyin: "zhì shǎo", khmer: "យ៉ាងតិច" },
    { word: "质量", pinyin: "zhì liàng", khmer: "គុណភាព; ទំងន់ (វិទ្យាសាស្ត្រ)" },
    { word: "重", pinyin: "zhòng", khmer: "ធ្ងន់; ធ្ងន់ធ្ងរ" },
    { word: "重点", pinyin: "zhòng diǎn", khmer: "ចំណុចសំខាន់; ចំណុចផ្តោត" },
    { word: "重视", pinyin: "zhòng shì", khmer: "ផ្តល់សារៈសំខាន់; ធ្វើអោយមានតម្លៃ" },
    { word: "周围", pinyin: "zhōu wéi", khmer: "បរិវេណ; ជុំវិញ" },
    { word: "主意", pinyin: "zhǔ yi", khmer: "គំនិត; ផែនការ" },
    { word: "祝贺", pinyin: "zhù hè", khmer: "អបអរសាទរ" },
    { word: "著名", pinyin: "zhù míng", khmer: "ល្បីល្បាញ; ឈ្មោះល្បី" },
    { word: "专门", pinyin: "zhuān mén", khmer: "សមាជិក; ឯកទេស" },
    { word: "专业", pinyin: "zhuān yè", khmer: "វិស័យឯកទេស; មុខវិជ្ជា" },
    { word: "转", pinyin: "zhuǎn", khmer: "បង្វិល; ប្ដូរទិស; ផ្ញើទៅ" },
    { word: "赚", pinyin: "zhuàn", khmer: "រកប្រាក់; ចំណេញ" },
    { word: "准确", pinyin: "zhǔn què", khmer: "ត្រឹមត្រូវ; ពិតប្រាកដ" },
    { word: "准时", pinyin: "zhǔn shí", khmer: "ទាន់ពេល; តាមពេលវេលា" },
    { word: "仔细", pinyin: "zǐ xì", khmer: "ប្រុងប្រយ័ត្ន; ស្រួលចិត្ត; ប្រុងប្រយ័ត្ន" },
    { word: "自然", pinyin: "zì rán", khmer: "ធម្មជាតិ; ដោយធម្មតា; មិនបង្អាក់" },
    { word: "自信", pinyin: "zì xìn", khmer: "ទំនុកចិត្តខ្លួនឯង" },
    { word: "总结", pinyin: "zǒng jié", khmer: "សង្ខេប; ចងក្រងសេចក្ដីសន្និដ្ឋាន" },
    { word: "租", pinyin: "zū", khmer: "ជួល; អោយជួល" },
    { word: "最好", pinyin: "zuì hǎo", khmer: "ល្អបំផុត; ឲ្យកាន់តែប្រសើរ" },
    { word: "尊重", pinyin: "zūn zhòng", khmer: "គោរព; អនុគ្រោះ" },
    { word: "左右", pinyin: "zuǒ yòu", khmer: "ប្រហែល; ស្មើស្តាំឆ្វេង; ជុំវិញ" },
    { word: "作家", pinyin: "zuò jiā", khmer: "ស្នាដៃអ្នកនិពន្ធ; អ្នកនិពន្ធ" },
    { word: "作用", pinyin: "zuò yòng", khmer: "អាទិភាព; តួនាទី; ផលប៉ះពាល់" },
    { word: "作者", pinyin: "zuò zhě", khmer: "អ្នកនិពន្ធ; សាស្រ្តាចារ្យ" },
    { word: "座", pinyin: "zuò", khmer: "កន្លែងអង្គុយ; ជើងស្នូល; ប្រើសម្រាប់ភ្នំ ឬអគារ" },
    { word: "座位", pinyin: "zuò wèi", khmer: "កន្លែងអង្គុយ" }
];

const wordList = document.getElementById("word-list");

words.forEach(({ word, pinyin, khmer }) => {
  const card = document.createElement("div");
  card.className = "word-card";
  card.innerHTML = `
    <div class="word">${word}</div>
    <div class="pinyin">${pinyin}</div>
    <div class="khmer">${khmer}</div>
  `;
  wordList.appendChild(card);
});
