// Set title dynamically
document.getElementById("grammar-title").textContent = "语法：(វេយ្យាករណ៍)";

// Define the explanation and examples in JavaScript with Khmer translations
const grammarExplanation = `
  <h2>ការប្រើប្រាស់ "正在 + Verb"</h2>
<p><strong>1. "(正) 在 + កិរិយាសព្ទ" សម្រាប់បង្ហាញសកម្មភាពដែលកំពុងធ្វើនៅពេលបច្ចុប្បន្ន។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我们正在吃饭。</span><br>
<span class="pinyin">Wǒ men zhèng zài chī fàn.</span><br>
<span class="khmer">យើងកំពុងញុំាហិរ៉ាន។</span></p>
<p>បកប្រែ៖ យើងកំពុងញុំាហិរ៉ាន។</p>

<h2>ការប្រើប្រាស់ "没 + 有"</h2>
<p><strong>2. "没 + 有" សម្រាប់ការបញ្ជាក់ពីអ្វីមួយដែលមិនមាន។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我没有钱。</span><br>
<span class="pinyin">Wǒ méi yǒu qián.</span><br>
<span class="khmer">ខ្ញុំមិនមានប្រាក់ទេ។</span></p>
<p>បកប្រែ៖ ខ្ញុំមិនមានប្រាក់ទេ។</p>

<h2>ការប្រើប្រាស់ "不 + Verb / Adj."</h2>
<p><strong>3. "不 + កិរិយាសព្ទ / គុណនាម" សម្រាប់ការប្រែប្រួលមិនយល់យ៉ាងម៉ត់ចត់។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">他们不是坏孩子。</span><br>
<span class="pinyin">Tā men bù shì huài hái zi.</span><br>
<span class="khmer">ពួកគេមិនមែនជាក្មេងអាក្រក់ទេ។</span></p>
<p>បកប្រែ៖ ពួកគេមិនមែនជាក្មេងអាក្រក់ទេ។</p>

<h2>ការប្រើប្រាស់ "都 + Verb / Adj."</h2>
<p><strong>4. "都 + កិរិយាសព្ទ / គុណនាម" សម្រាប់ការបង្ហាញពីអ្វីដែលអនុវត្តទៅទាំងអស់។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我们都住在上海。</span><br>
<span class="pinyin">Wǒ men dōu zhù zài Shànghǎi.</span><br>
<span class="khmer">យើងទាំងអស់គ្នាស្នាក់នៅសាហាងហៃ។</span></p>
<p>បកប្រែ៖ យើងទាំងអស់គ្នាស្នាក់នៅសាហាងហៃ។</p>

<h2>ការប្រើប្រាស់ "也 + Verb / Adj."</h2>
<p><strong>5. "也 + កិរិយាសព្ទ / គុណនាម" សម្រាប់ការបញ្ជាក់ពីការធ្វើអ្វីមួយដែលទំនាក់ទំនង ឬស្រដៀងគ្នា។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">昨天很冷，今天也很冷。</span><br>
<span class="pinyin">Zuó tiān hěn lěng, jīn tiān yě hěn lěng.</span><br>
<span class="khmer">ម្សិលមិញត្រជាក់ណាស់ ថ្ងៃនេះក៏ត្រជាក់ដែរ។</span></p>
<p>បកប្រែ៖ ម្សិលមិញត្រជាក់ណាស់ ថ្ងៃនេះក៏ត្រជាក់ដែរ។</p>


<h2>ការប្រើប្រាស់ "多 + គុណនាម"</h2>
<p><strong>1. "多 + គុណនាម" សម្រាប់សួរអំពីកម្រិត ឬប៉ាន់ស្មានអ្វីមួយ (ទំហំ, កម្ពស់, ភាពរីករាយជាដើម)។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">他多高？</span><br>
<span class="pinyin">Tā duō gāo?</span><br>
<span class="khmer">គាត់មានកម្ពស់ប៉ុន្មាន?</span></p>
<p>បកប្រែ៖ គាត់ខ្ពស់ប៉ុន្មាន?</p>

<h2>ការប្រើប្រាស់ "不太 + គុណនាម"</h2>
<p><strong>2. "不太 + គុណនាម" សម្រាប់បង្ហាញពីអ្វីមួយដែលមិនខ្លាំង ឬមិនច្រើន។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">他不太高兴。</span><br>
<span class="pinyin">Tā bù tài gāo xìng.</span><br>
<span class="khmer">គាត់មិនសប្បាយចិត្តច្រើនទេ។</span></p>
<p>បកប្រែ៖ គាត់មិនសប្បាយចិត្តច្រើនទេ។</p>

<p>ឧទាហរណ៍ 2: <span class="example">我不太喜欢。</span><br>
<span class="pinyin">Wǒ bù tài xǐ huān.</span><br>
<span class="khmer">ខ្ញុំមិនសូវចូលចិត្តទេ។</span></p>
<p>បកប្រែ៖ ខ្ញុំមិនសូវចូលចិត្តទេ។</p>

<h2>ការប្រើប្រាស់ "和" សម្រាប់បញ្ជាក់ "និង"</h2>
<p><strong>1. "和" ប្រើសម្រាប់ភ្ជាប់នាមពីរ ឬច្រើន ដើម្បីបង្ហាញថាវាទាក់ទងគ្នាដូចជា "និង"។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我和他都不去。</span><br>
<span class="pinyin">Wǒ hé tā dōu bù qù.</span><br>
<span class="khmer">ខ្ញុំ និង គាត់ ក៏មិនទៅដែរ។</span></p>
<p>បកប្រែ៖ ខ្ញុំ និងគាត់ ក៏មិនទៅដែរ។</p>


<h2>ការប្រើប្រាស់ពាក្យពេលនិងរបៀបរៀបចំពាក្យ</h2>

<p><strong>1. "以后" សម្រាប់បញ្ជាក់អំពីពេលក្រោយ</strong></p>
<p>ឧទាហរណ៍ 1: <span class="example">10点以后，我不在家。</span><br>
<span class="pinyin">Shí diǎn yǐhòu, wǒ bú zài jiā.</span><br>
<span class="khmer">ក្រោយម៉ោង ១០ ខ្ញុំមិនស្ថិតនៅផ្ទះទេ។</span></p>
<p>បកប្រែ៖ បន្ទាប់ពីម៉ោង ១០ ខ្ញុំមិននៅផ្ទះទេ។</p>

<p><strong>2. "以前" សម្រាប់បញ្ជាក់អំពីពេលមុន</strong></p>
<p>ឧទាហរណ៍ 2: <span class="example">十点以前，我在家。</span><br>
<span class="pinyin">Shí diǎn yǐqián, wǒ zài jiā.</span><br>
<span class="khmer">មុនម៉ោង ១០ ខ្ញុំស្ថិតនៅផ្ទះ។</span></p>
<p>បកប្រែ៖ មុនម៉ោង ១០ ខ្ញុំនៅផ្ទះ។</p>

<p><strong>3. របៀបរៀបចំពេលវេលាក្នុងប្រយោគ</strong></p>
<p>ឧទាហរណ៍ 3: <span class="example">我明天有空。</span><br>
<span class="pinyin">Wǒ míngtiān yǒu kòng.</span><br>
<span class="khmer">ខ្ញុំមានពេលទំនេរថ្ងៃស្អែក។</span></p>

<p>ឧទាហរណ៍ 4: <span class="example">明天我有空。</span><br>
<span class="pinyin">Míngtiān wǒ yǒu kòng.</span><br>
<span class="khmer">ថ្ងៃស្អែកខ្ញុំមានពេលទំនេរ។</span></p>

<p>បកប្រែ៖ ទាំងពីរប្រយោគមានអត្ថន័យដូចគ្នា តែអាចផ្លាស់ប្តូររបៀបរៀបចំពាក្យ។</p>



<h2>ការប្រើប្រាស់លេខក្នុងប្រយោគ</h2>

<p><strong>1. ការប្រើ "岁" ដើម្បីបង្ហាញអាយុ</strong></p>
<p>ឧទាហរណ៍ 1: <span class="example">我 20 岁。</span><br>
<span class="pinyin">Wǒ èrshí suì.</span><br>
<span class="khmer">ខ្ញុំអាយុ ២០ ឆ្នាំ។</span></p>

<p><strong>2. ការប្រើ "个" ជាពាក្យវាស់</strong></p>
<p>ឧទាហរណ៍ 2: <span class="example">一个人。</span><br>
<span class="pinyin">Yí gè rén.</span><br>
<span class="khmer">មនុស្សម្នាក់។</span></p>

<p><strong>3. រចនាសម្ព័ន្ធកាលបរិច្ឆេទ</strong></p>
<p>ឧទាហរណ៍ 3: <span class="example">今天是2011年11月11日。</span><br>
<span class="pinyin">Jīntiān shì èr líng yī yī nián shí yī yuè shí yī rì.</span><br>
<span class="khmer">ថ្ងៃនេះជាថ្ងៃទី ១១ ខែ ១១ ឆ្នាំ ២០១១។</span></p>

<p><strong>4. រចនាសម្ព័ន្ធថ្ងៃសប្តាហ៍</strong></p>
<p>ឧទាហរណ៍ 4: <span class="example">今天星期三。</span><br>
<span class="pinyin">Jīntiān xīngqīsān.</span><br>
<span class="khmer">ថ្ងៃនេះថ្ងៃពុធ។</span></p>

<p><strong>5. រចនាសម្ព័ន្ធលេខធំៗ</strong></p>
<p>ឧទាហរណ៍ 5: <span class="example">三百五十九。</span><br>
<span class="pinyin">Sān bǎi wǔ shí jiǔ.</span><br>
<span class="khmer">៣៥៩។</span></p>

<p><strong>6. រចនាសម្ព័ន្ធម៉ោង (កម្រិតខ្ពស់)</strong></p>
<p>ឧទាហរណ៍ 6: <span class="example">现在十一点十八分。</span><br>
<span class="pinyin">Xiànzài shí yī diǎn shí bā fēn.</span><br>
<span class="khmer">ឥឡូវម៉ោង ១១ និង ១៨ នាទី។</span></p>

<p><strong>7. រចនាសម្ព័ន្ធម៉ោង (មូលដ្ឋាន)</strong></p>
<p>ឧទាហរណ៍ 7: <span class="example">现在十一点。</span><br>
<span class="pinyin">Xiànzài shí yī diǎn.</span><br>
<span class="khmer">ឥឡូវម៉ោង ១១។</span></p>





<h2>ការប្រើប្រាស់ពាក្យបន្ថែម (Particles)</h2>

<p><strong>1. ការបង្ហាញការកាន់កាប់ដោយគ្មាន "的"</strong></p>
<p>ឧទាហរណ៍ 1: <span class="example">她是我的女朋友。</span><br>
<span class="pinyin">Wǒ nǚ péngyǒu</span><br>
<span class="khmer">នាងជាមិត្តស្រីរបស់ខ្ញុំ។/នាងជាសង្សារបស់ខ្ញុំ។</span></p>

<p><strong>2. បញ្ចប់សកម្មភាពជាមួយ "了"</strong></p>
<p>ឧទាហរណ៍ 2: <span class="example">我吃了两个苹果。</span><br>
<span class="pinyin">Wǒ chī le liǎng gè píngguǒ.</span><br>
<span class="khmer">ខ្ញុំបានញាំផ្លែប៉ោមពីរផ្លែ។</span></p>

<p><strong>3. បង្ហាញថាមិនចង់ ឬ មិនមានទៀតជាមួយ "了"</strong></p>
<p>ឧទាហរណ៍ 3: <span class="example">我不想吃了。</span><br>
<span class="pinyin">Wǒ bù xiǎng chī le.</span><br>
<span class="khmer">ខ្ញុំមិនចង់ញ៉ាំទៀតទេ។</span></p>

<p><strong>4. បង្ហាញអ្វីថ្មីៗ (New situation) ជាមួយ "了"</strong></p>
<p>ឧទាហរណ៍ 4: <span class="example">吃饭了！</span><br>
<span class="pinyin">Chīfàn le!</span><br>
<span class="khmer">ញាំបាយ​ហើយ!</span></p>

<p><strong>5. ការប្រើ "的" ដើម្បីបង្ហាញការកាន់កាប់</strong></p>
<p>ឧទាហរណ៍ 5: <span class="example">我的老师</span><br>
<span class="pinyin">Wǒ de lǎoshī</span><br>
<span class="khmer">គ្រូរបស់ខ្ញុំ</span></p>

<p><strong>6. សំនួរជាមួយ "呢"</strong></p>
<p>ឧទាហរណ៍ 6: <span class="example">我很好。你呢？</span><br>
<span class="pinyin">Wǒ hěn hǎo. Nǐ ne?</span><br>
<span class="khmer">ខ្ញុំសុខសប្បាយ។ ចុះអ្នកវិញ?</span></p>

<p><strong>7. ពាក្យសំដីចុងប្រយោគ "啊"</strong></p>
<p>ឧទាហរណ៍ 7: <span class="example">是啊！谁啊？</span><br>
<span class="pinyin">Shì a! Shéi a?</span><br>
<span class="khmer">បាទ/ចាស! អ្នកណា?</span></p>

<p><strong>8. បន្ថែមភាពទន់ភ្លន់ក្នុងសុន្ទរកថាជាមួយ "吧"</strong></p>
<p>ឧទាហរណ៍ 8: <span class="example">这样不太好吧。</span><br>
<span class="pinyin">Zhèyàng bù tài hǎo ba.</span><br>
<span class="khmer">បែបនេះមិនសូវល្អទេ។</span></p>

<p><strong>9. សំណើជាមួយ "吧"</strong></p>
<p>ឧទាហរណ៍ 9: <span class="example">我们走吧。</span><br>
<span class="pinyin">Wǒmen zǒu ba.</span><br>
<span class="khmer">តោះពួកយើងទៅ។</span></p>




<h2>ការប្រើប្រាស់កិរិយាសព្ទ (Verbs)</h2>

<p><strong>1. កិរិយាសទិស "来" និង "去"</strong></p>
<p>ឧទាហរណ៍ 1: <span class="example">我来上海一年了。</span><br>
<span class="pinyin">Wǒ lái Shànghǎi yī nián le.</span><br>
<span class="khmer">ខ្ញុំបានមកទីក្រុងសៀងហៃរយៈពេលមួយឆ្នាំហើយ។</span></p>

<p><strong>2. បង្ហាញអវកាសជាមួយ "在"</strong></p>
<p>ឧទាហរណ៍ 2: <span class="example">老师在上海。</span><br>
<span class="pinyin">Lǎoshī zài Shànghǎi.</span><br>
<span class="khmer">គ្រូនៅទីក្រុងសៀងហៃ។</span></p>

<p><strong>3. បង្ហាញអវត្តមាន/ការរស់នៅជាមួយ "有"</strong></p>
<p>ឧទាហរណ៍ 3: <span class="example">我们学校有很多学生。</span><br>
<span class="pinyin">Wǒmen xuéxiào yǒu hěn duō xuéshēng.</span><br>
<span class="khmer">សាលារបស់យើងមានសិស្សច្រើន។</span></p>

<p><strong>4. បង្ហាញការកាន់កាប់ជាមួយ "有"</strong></p>
<p>ឧទាហរណ៍ 4: <span class="example">我有钱。</span><br>
<span class="pinyin">Wǒ yǒu qián.</span><br>
<span class="khmer">ខ្ញុំមានលុយ។</span></p>

<p><strong>5. ស្នើសុំព្រមទាំងការសូមរបស់រាប់អានជាមួយ "请"</strong></p>
<p>ឧទាហរណ៍ 5: <span class="example">请坐。</span><br>
<span class="pinyin">Qǐng zuò.</span><br>
<span class="khmer">សូមអញ្ចើញអង្គុយ។</span></p>

<p><strong>6. កិរិយាសព្ទ "叫" សម្រាប់ឈ្មោះ</strong></p>
<p>ឧទាហរណ៍ 6: <span class="example">你叫什么名字？</span><br>
<span class="pinyin">Nǐ jiào shénme míngzi?</span><br>
<span class="khmer">អ្នកឈ្មោះអ្វី?</span></p>

<p><strong>7. កិរិយាសព្ទ "去" សម្រាប់បញ្ជាក់ទីកន្លែង</strong></p>
<p>ឧទាហរណ៍ 7: <span class="example">我去学校。</span><br>
<span class="pinyin">Wǒ qù xuéxiào.</span><br>
<span class="khmer">ខ្ញុំទៅសាលា។</span></p>





<h2>ការប្រើប្រាស់កិរិយាសហបញ្ញាគិត (Auxiliary Verbs)</h2>

<p><strong>1. បង្ហាញសមត្ថភាព ឬលទ្ធភាពជាមួយ "能"</strong></p>
<p>ឧទាហរណ៍ 1: <span class="example">中文这么难，你能学好吗？</span><br>
<span class="pinyin">Zhōngwén zhème nán, nǐ néng xué hǎo ma?</span><br>
<span class="khmer">ភាសាចិនពិបាកប៉ុណ្ណេះ អ្នកអាចរៀនឲ្យល្អបានទេ?</span></p>

<p><strong>2. បង្ហាញជំនាញដែលរៀនបានជាមួយ "会"</strong></p>
<p>ឧទាហរណ៍ 2: <span class="example">他会说中文。</span><br>
<span class="pinyin">Tā huì shuō Zhōngwén.</span><br>
<span class="khmer">គាត់អាចនិយាយភាសាចិនបាន។</span></p>

<p><strong>3. បង្ហាញអំពីអនាគតជាមួយ "会"</strong></p>
<p>ឧទាហរណ៍ 3: <span class="example">明天你会来吗？</span><br>
<span class="pinyin">Míngtiān nǐ huì lái ma?</span><br>
<span class="khmer">ថ្ងៃស្អែកអ្នកនឹងមកទេ?</span></p>

<p><strong>4. បង្ហាញបំណងចង់ធ្វើអ្វីមួយជាមួយ "想"</strong></p>
<p>ឧទាហរណ៍ 4: <span class="example">我想去。</span><br>
<span class="pinyin">Wǒ xiǎng qù.</span><br>
<span class="khmer">ខ្ញុំចង់ទៅ។</span></p>



<h2>ការប្រើប្រាស់ឃ្លាកិរិយាសព្ទ (Verb Phrases)</h2>

<p><strong>1. សួររបៀបធ្វើអ្វីមួយដោយប្រើ "怎么"</strong></p>
<p>ឧទាហរណ៍ 1: <span class="example">怎么走？</span><br>
<span class="pinyin">Zěnme zǒu?</span><br>
<span class="khmer">ទៅដូចម្តេច?</span></p>

<p><strong>2. បង្ហាញទីតាំងនៃសកម្មភាពជាមួយ "在" មុនកិរិយាសព្ទ</strong></p>
<p>ឧទាហរណ៍ 2: <span class="example">我在上海工作。</span><br>
<span class="pinyin">Wǒ zài Shànghǎi gōngzuò.</span><br>
<span class="khmer">ខ្ញុំធ្វើការនៅទីក្រុងស៊ាងហៃ។</span></p>

<p><strong>3. បដិសេធសកម្មភាពដែលកើតឡើងមុននេះជាមួយ "没有"</strong></p>
<p>ឧទាហរណ៍ 3: <span class="example">我没有去酒吧。</span><br>
<span class="pinyin">Wǒ méiyǒu qù jiǔbā.</span><br>
<span class="khmer">ខ្ញុំមិនបានទៅបារឡើយ។</span></p>




<h2>រចនាសម្ព័ន្ធវេយ្យាករណ៍ (Grammatical Structures)</h2>

<p><strong>1. រចនាបថសម្រង់មូលដ្ឋាន</strong></p>
<p>ឧទាហរណ៍ 1: <span class="example">我爱你。</span><br>
<span class="pinyin">Wǒ ài nǐ.</span><br>
<span class="khmer">ខ្ញុំស្រឡាញ់អ្នក។</span></p>

<p><strong>2. ផ្ដល់ការតភ្ជាប់នាមជាមួយ "是"</strong></p>
<p>ឧទាហរណ៍ 2: <span class="example">我是学生。</span><br>
<span class="pinyin">Wǒ shì xuéshēng.</span><br>
<span class="khmer">ខ្ញុំជាសិស្ស។</span></p>

<p><strong>3. បង្ហាញអ្វីមួយពេក ដោយប្រើ "太...了"</strong></p>
<p>ឧទាហរណ៍ 3: <span class="example">太好了！</span><br>
<span class="pinyin">Tài hǎo le!</span><br>
<span class="khmer">ល្អពេកហើយ!</span></p>

<p><strong>4. ប្រើ "很" ក្នុងប្រយោគនាម + គុណនាម</strong></p>
<p>ឧទាហរណ៍ 4: <span class="example">我很好。</span><br>
<span class="pinyin">Wǒ hěn hǎo.</span><br>
<span class="khmer">ខ្ញុំសុខសប្បាយជាទេ។</span></p>



<h2>ឃ្លានាម (Noun Phrases)</h2>

<p><strong>1. បង្ហាញអំពី “ខ្លះ” ដោយប្រើ "一些"</strong></p>
<p>ឧទាហរណ៍: <span class="example">这里有一些咖啡。</span><br>
<span class="pinyin">Zhèlǐ yǒu yīxiē kāfēi.</span><br>
<span class="khmer">ទីនេះមានកាហ្វេចំនួនខ្លះដែរ។</span></p>

<h2>លេខ និង ពាក្យវាស់ (Numbers and Measure Words)</h2>

<p><strong>1. ការរាប់ប្រាក់</strong></p>
<p>ឧទាហរណ៍: <span class="example">给你五块三毛。</span><br>
<span class="pinyin">Gěi nǐ wǔ kuài sān máo.</span><br>
<span class="khmer">ឲ្យអ្នក5.20$សេន។</span></p>

<p><strong>2. ពាក្យវាស់ក្នុងសំនួរចំនួន</strong></p>
<p>ឧទាហរណ៍: <span class="example">几个人？</span><br>
<span class="pinyin">Jǐ gè rén?</span><br>
<span class="khmer">មនុស្សប៉ុន្មាននាក់?</span></p>



<h2>ទំរង់សំនួរ (Question Forms)</h2>

<p><strong>1. សំនួរអំពីរបៀបនៃអ្វីមួយដោយប្រើ "怎么样"</strong></p>
<p>ឧទាហរណ៍: <span class="example">你最近怎么样？</span><br>
<span class="pinyin">Nǐ zuìjìn zěnme yàng?</span><br>
<span class="khmer">អ្នកមានការអភិវឌ្ឍយ៉ាងដូចម្តេចប៉ុននេះ?</span></p>

<p><strong>2. ការបង្ហាញទីតាំងនៃពាក្យសំនួរ</strong></p>
<p>ឧទាហរណ៍: <span class="example">你是谁？你在哪儿？</span><br>
<span class="pinyin">Nǐ shì shuí? Nǐ zài nǎr?</span><br>
<span class="khmer">អ្នកជាអ្នកណា? អ្នកនៅទីណា?</span></p>

<p><strong>3. សំនួរដោយប្រើ "了 吗"</strong></p>
<p>ឧទាហរណ៍: <span class="example">你吃饭了吗？</span><br>
<span class="pinyin">Nǐ chīfàn le ma?</span><br>
<span class="khmer">អ្នកបានញុំាអាហារប្រែប៉ុនេះទេ?</span></p>

<p><strong>4. សំនួរយស-មិនយសដោយប្រើ "吗"</strong></p>
<p>ឧទាហរណ៍: <span class="example">他是老板吗？</span><br>
<span class="pinyin">Tā shì lǎobǎn ma?</span><br>
<span class="khmer">គាត់ជាអ្នកគ្រប់គ្រងដែរឬទេ?</span></p>





<h2>ទំរង់ប្រយោគ (Sentence Patterns)</h2>

<p><strong>1. ការប្រើ "是... 的" ដើម្បីផ្តោតលើព័ត៌មានលម្អិត</strong></p>
<p>ឧទាហរណ៍: <span class="example">你是怎么来的？</span><br>
<span class="pinyin">Nǐ shì zěnme lái de?</span><br>
<span class="khmer">អ្នកបានមកយ៉ាងដូចម្តេច?</span></p>

<h2>Comparisons of Similar Grammar Points</h2>
<p><strong>Comparing "不" និង "没"</strong></p>
<p>ឧទាហរណ៍: <span class="example">我今天晚上不吃饭。昨天晚上我没吃饭。</span><br>
<span class="pinyin">Wǒ jīntiān wǎnshàng bù chīfàn. Zuótiān wǎnshàng wǒ méi chīfàn.</span><br>
<span class="khmer">យប់នេះខ្ញុំមិនញុំាអាហារទេ។ ម្សិលមិញយប់ខ្ញុំមិនបានញុំាអាហារទេ។</span></p>


`;

// Insert the explanation into the HTML element
document.getElementById("grammar-explanation").innerHTML = grammarExplanation;
