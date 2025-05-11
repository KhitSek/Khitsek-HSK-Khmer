// Set title dynamically
document.getElementById("grammar-title").textContent = "语法：(វេយ្យាករណ៍)";

// Define the explanation and examples in JavaScript with Khmer translations
const grammarExplanation = `
<h2>ការប្រើប្រាស់ "还"</h2>
<p><strong>1. "还" សម្រាប់បង្ហាញការបន្តអនុវត្តន៍អ្វីមួយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">他还在家。</span><br>
<span class="pinyin"> Tā hái zài jiā.</span><br>
<span class="khmer"> គាត់នៅតែផ្ទះ។</span></p>
<p>បកប្រែ៖ គាត់នៅតែផ្ទះ។</p>

<h2>ការប្រើប្រាស់ "就是"</h2>
<p><strong>2. "就是" សម្រាប់បញ្ជាក់ឬកំណត់អ្វីមួយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我父母就是不让我要一个人去。</span><br>
<span class="pinyin">Wǒ fù mǔ jiù shì bù ràng wǒ yī gè rén qù.</span><br>
<span class="khmer">ឪពុកម្ដាយរបស់ខ្ញុំគឺមិនអនុញ្ញាតឱ្យខ្ញុំទៅម្នាក់ឯងទេ។</span></p>
<p>បកប្រែ៖ ឪពុកម្ដាយរបស់ខ្ញុំគឺមិនអនុញ្ញាតឱ្យខ្ញុំទៅម្នាក់ឯងទេ។</p>

<h2>ការប្រើប្រាស់ "都"</h2>
<p><strong>3. "都" សម្រាប់បញ្ជាក់ពីបរិមាណ ឬការផ្សព្វផ្សាយទូទៅ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">很多地方都有 Wi-Fi。</span><br>
<span class="pinyin">Hěn duō dì fāng dōu yǒu Wi-Fi.</span><br>
<span class="khmer">ទីកន្លែងជាច្រើនមាន Wi-Fi។</span></p>
<p>បកប្រែ៖ នៅក្នុងទីកន្លែងជាច្រើនមាន Wi-Fi។</p>

<h2>ការប្រើប្រាស់ "就要"</h2>
<p><strong>4. "就要" សម្រាប់បង្ហាញពីអ្វីដែលកំពុងនឹងកើតមានក្នុងពេលឆាប់ៗនេះ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">还有五天就要放假了。</span><br>
<span class="pinyin">Hái yǒu wǔ tiān jiù yào fàng jià le.</span><br>
<span class="khmer">នៅសល់៥ថ្ងៃទៀត,នឹងចាប់ផ្ដើមឈប់សម្រាកហើយ។</span></p>
<p>បកប្រែ៖ នៅសល់៥ថ្ងៃទៀត,នឹងចាប់ផ្ដើមឈប់សម្រាកហើយ។</p>

<h2>ការប្រើប្រាស់ "再"</h2>
<p><strong>5. "再" សម្រាប់ការបញ្ជាក់អំពីអ្វីដែលនឹងកើតឡើងម្តងទៀតនៅពេលក្រោយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我下次再来。</span><br>
<span class="pinyin">Wǒ xià cì zài lái.</span><br>
<span class="khmer">ខ្ញុំនឹងមកវិញនៅពេលក្រោយ។</span></p>
<p>បកប្រែ៖ ខ្ញុំនឹងមកវិញនៅពេលក្រោយ។</p>

<h2>ការប្រើប្រាស់ "都" (កិច្ចការដែលបានប្រើ)</h2>
<p><strong>6. "都" សម្រាប់ការបញ្ជាក់ពីអ្វីដែលបានបញ្ចប់ឬបានធ្វើមុនពេលនេះ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">都九点了，快点起床！</span><br>
<span class="pinyin">Dōu jiǔ diǎn le, kuài diǎn qǐ chuáng!</span><br>
<span class="khmer">ដល់ម៉ោង៩ហើយ ក្រោកពីគេងលឿន!</span></p>
<p>បកប្រែ៖ ដល់ម៉ោង៩ហើយ ក្រោកពីគេងលឿន!</p>



<h2>ការប្រើប្រាស់ "多" សម្រាប់សួរអំពីកម្រិត</h2>
<p><strong>1. "多" សម្រាប់សួរអំពីកម្រិតរបស់គុណនាម។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">他多高？</span><br>
<span class="pinyin">Tā duō gāo?</span><br>
<span class="khmer">គាត់ខ្ពស់ប៉ុណ្ណា?</span></p>
<p>បកប្រែ៖ គាត់ខ្ពស់ប៉ុណ្ណា?</p>

<h2>ការប្រើប្រាស់ "有点(儿)" សម្រាប់បង្ហាញការមានភាពមិនគ្រប់គ្រាន់</h2>
<p><strong>2. "有点(儿)" សម្រាប់បង្ហាញភាពតិចមួយនៃគុណនាម។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我有点饿。</span><br>
<span class="pinyin">Wǒ yǒu diǎn è.</span><br>
<span class="khmer">ខ្ញុំមានឃ្លានបន្តិច។</span></p>
<p>បកប្រែ៖ ខ្ញុំមានឃ្លានបន្តិច។</p>

<h2>ការប្រើប្រាស់ "离" សម្រាប់បង្ហាញចម្ងាយ</h2>
<p><strong>3. "离" សម្រាប់បង្ហាញចម្ងាយពីកន្លែងមួយទៅកន្លែងមួយផ្សេងទៀត។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我家离大学很近。</span><br>
<span class="pinyin">Wǒ jiā lí dà xué hěn jìn.</span><br>
<span class="khmer">ផ្ទះរបស់ខ្ញុំឆ្ងាយពីសាកលវិទ្យាល័យណាស់។</span></p>
<p>បកប្រែ៖ ផ្ទះរបស់ខ្ញុំឆ្ងាយពីសាកលវិទ្យាល័យណាស់។</p>

<h2>ការប្រើប្រាស់ "更" សម្រាប់បង្ហាញថា "បើកបង្ហាញថាជាងមុន"</h2>
<p><strong>4. "更" សម្រាប់បង្ហាញថាអ្វីមួយកាន់តែច្រើន។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我想找一个更有钱的男朋友。</span><br>
<span class="pinyin">Wǒ xiǎng zhǎo yī gè gèng yǒu qián de nán péng yǒu.</span><br>
<span class="khmer">ខ្ញុំចង់ស្វែងរកមិត្តប្រុសដែលមានលុយច្រើនជាងមុន។</span></p>
<p>បកប្រែ៖ ខ្ញុំចង់ស្វែងរកមិត្តប្រុសដែលមានលុយច្រើនជាងមុន។</p>

<h2>ការប្រើប្រាស់ "真" សម្រាប់បង្ហាញការពិត</h2>
<p><strong>5. "真" សម្រាប់បង្ហាញថាគុណនាមនេះពិតជាអស្ចារ្យ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">你女朋友真漂亮。</span><br>
<span class="pinyin">Nǐ nǚ péng yǒu zhēn piào liang.</span><br>
<span class="khmer">សង្សាអ្នកពិតជាស្អាត់ណាស់។</span></p>
<p>បកប្រែ៖ សង្សាអ្នកពិតជាស្អាត់ណាស់។</p>

<h2>ការប្រើប្រាស់ "还" សម្រាប់កំណត់គុណនាម</h2>
<p><strong>6. "还" សម្រាប់កំណត់លក្ខណៈឬគុណនាម។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">还可以。</span><br>
<span class="pinyin">Hái kě yǐ.</span><br>
<span class="khmer">ក៏អាច។</span></p>
<p>បកប្រែ៖ ក៏អាច។</p>

<h2>ការប្រើប្រាស់ "的" សម្រាប់កំណត់សំណុំឬគំនិតដែលកើតឡើង</h2>
<p><strong>7. "的" សម្រាប់កំណត់សំណុំឬលក្ខណៈ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">去北京的火车。</span><br>
<span class="pinyin">Qù běi jīng de huǒ chē.</span><br>
<span class="khmer">រថភ្លើងទៅទីក្រុងប៉េកាំង។</span></p>
<p>បកប្រែ៖ ទៅទីក្រុងប៉េកាំងគឺជាដំណើរការជាមួយឧបករណ៍ដែក។</p>

<h2>ការប្រើប្រាស់ "最" សម្រាប់បង្ហាញសភាពអតិទិនន៍</h2>
<p><strong>8. "最" សម្រាប់បង្ហាញអតិបរិមាណខ្ពស់បំផុត។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">谁最有钱？</span><br>
<span class="pinyin">Shéi zuì yǒu qián?</span><br>
<span class="khmer">អ្នកណាមានលុយច្រើនបំផុត?</span></p>
<p>បកប្រែ៖ អ្នកណាមានលុយច្រើនជាងគេ?</p>



<h2>ការប្រើប្រាស់ "那个" សម្រាប់បញ្ចូលវាក្យ</h2>
<p><strong>1. "那个" គឺជាពាក្យប្រើប្រាស់ក្នុងការបញ្ចូលវាក្យនៅពេលដែលអ្នកគ្មានការពិចារណាដែលត្រឹមត្រូវក្នុងការប្រាប់អំពីករណីឬអាកាសកាល។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">你喜欢那个吗？</span><br>
<span class="pinyin">Nǐ xǐ huān nà ge ma?</span><br>
<span class="khmer">តើអ្នកចូលចិត្តមួយនោះទេ។</span></p>
<p>បកប្រែ៖ តើអ្នកចូលចិត្តមួយនោះទេ។</p>

<h2>ការប្រើប្រាស់ "个 个" សម្រាប់កំណត់និមិត្ត</h2>
<p><strong>2. "个个" គឺជាការកំណត់សម្រាប់បង្ហាញអំពីអ្នករាល់គ្នានៃក្រុមតូចៗ ឬអង្គភាពផ្សេងៗ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">个个都很聪明。</span><br>
<span class="pinyin">Gè gè dōu hěn cōngmíng.</span><br>
<span class="khmer">គ្រប់គ្នាអ្នកទាំងអស់ឆ្លាតណាស់។</span></p>
<p>បកប្រែ៖ គ្រប់គ្នាអ្នកទាំងអស់ឆ្លាតណាស់។</p>

<h2>ការប្រើប្រាស់ "的时候" សម្រាប់បង្ហាញពេលវេលា</h2>
<p><strong>3. "的时候" សម្រាប់បង្ហាញពេលដែលមានហេតុការណ៍ជាក់លាក់កើតឡើង។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">你不在的时候，我会想你。</span><br>
<span class="pinyin">Nǐ bù zài de shí hòu, wǒ huì xiǎng nǐ.</span><br>
<span class="khmer">នៅពេលដែលអ្នកមិននៅ ខ្ញុំនឹងនឹកអ្នក។</span></p>
<p>បកប្រែ៖ នៅពេលអ្នកមិននៅ ខ្ញុំនឹងនឹកអ្នក។</p>

<h2>ការប្រើប្រាស់ "三十多" សម្រាប់បង្ហាញចំនួន</h2>
<p><strong>4. "三十多" សម្រាប់បង្ហាញចំនួនលើសពីចំនួនដែលបានសរសេរ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">三十多岁。</span><br>
<span class="pinyin">Sān shí duō suì.</span><br>
<span class="khmer">អាយុចំនួន ៣០ មុខទៅ។</span></p>
<p>បកប្រែ៖ អាយុជាង ៣០ ឆ្នាំ។</p>

<h2>ការប្រើប្រាស់ "几" សម្រាប់បង្ហាញចំនួនមួយចំនួន</h2>
<p><strong>5. "几" សម្រាប់បង្ហាញចំនួនមួយចំនួន ឬ ចំនួនមិនច្បាស់លាស់ដែលត្រូវប្រើជាមួយនឹងពាក្យវិជ្ជាជីវៈ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">桌子上有几本书。</span><br>
<span class="pinyin">Zhuō zi shàng yǒu jǐ běn shū.</span><br>
<span class="khmer">នៅលើតុមានសៀវភៅប៉ុន្មាន។</span></p>
<p>បកប្រែ៖ នៅលើតុមានសៀវភៅប៉ុន្មាន។</p>



<h2>ការប្រើប្រាស់ "着" សម្រាប់បង្ហាញសកម្មភាព</h2>
<p><strong>1. "着" ជាពាក្យសម្រាប់បង្ហាញសកម្មភាពដែលកំពុងបន្ត ឬពិការណិច។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我读，你听着。</span><br>
<span class="pinyin">Wǒ dú, nǐ tīng zhe.</span><br>
<span class="khmer">ខ្ញុំអាន ខ្ញុំសូមអ្នកស្ដាប់។</span></p>
<p>បកប្រែ៖ ខ្ញុំអាន ខ្ញុំសូមអ្នកស្ដាប់។</p>

<h2>ការប្រើប្រាស់ "吧" សម្រាប់ការសន្និដ្ឋាន ឬការអនុញ្ញាត</h2>
<p><strong>2. "吧" គឺជាពាក្យប្រើប្រាស់សម្រាប់ការសន្និដ្ឋាន ឬការអនុញ្ញាតពីបុគ្គលមួយឬជួរដេកក្រុម។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">那好吧。</span><br>
<span class="pinyin">Nà hǎo ba.</span><br>
<span class="khmer">អញ្ចឹងក៏បាន!</span></p>
<p>បកប្រែ៖ អញ្ចឹងក៏បាន!</p>

<h2>ការប្រើប្រាស់ "了" សម្រាប់បង្ហាញថាអំពើបានចប់</h2>
<p><strong>3. "了" សម្រាប់បង្ហាញថាការងារមួយបានបញ្ចប់ឬមានអនុករណ៍។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">你应该问老师。我问了。</span><br>
<span class="pinyin">Nǐ yīng gāi wèn lǎo shī. Wǒ wèn le.</span><br>
<span class="khmer">អ្នកគួរតែសួរអ្នកគ្រូ។ ខ្ញុំបានសួរហើយ។</span></p>
<p>បកប្រែ៖ អ្នកគួរតែសួរអ្នកគ្រូ។ ខ្ញុំបានសួរហើយ។</p>

<h2>ការប្រើប្រាស់ "过" សម្រាប់បង្ហាញបទពិសោធន៍</h2>
<p><strong>4. "过" ជាការបង្ហាញថាបានមានបទពិសោធន៍ក្នុងអំឡុងពេលណាមួយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我去过中国。</span><br>
<span class="pinyin">Wǒ qù guò Zhōng guó.</span><br>
<span class="khmer">ខ្ញុំបានទៅប្រទេសចិន។</span></p>
<p>បកប្រែ៖ ខ្ញុំបានទៅប្រទេសចិន។</p>

<h2>ការប្រើប្រាស់ "呢" សម្រាប់សំណួរ</h2>
<p><strong>5. "呢" ជាពាក្យសម្រាប់ការសួរលើកទឹកចិត្ត និងការស្នើសុំមតិយោបល់ចំពោះការពិចារណា។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我不要回家。还早呢！</span><br>
<span class="pinyin">Wǒ bù yào huí jiā. Hái zǎo ne!</span><br>
<span class="khmer">ខ្ញុំមិនចង់ទៅផ្ទះទេ។ ទាន់ដល់ពេលទេ!</span></p>
<p>បកប្រែ៖ ខ្ញុំមិនចង់ត្រឡប់ទៅផ្ទះទេ។ ទាន់ដល់ពេលទេ!</p>

<h2>ការប្រើប្រាស់ "过了" សម្រាប់បង្ហាញអំពើដែលបានបញ្ចប់</h2>
<p><strong>6. "过了" សម្រាប់បង្ហាញថាអំពើបានបញ្ចប់រួចទៅហើយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">她吃过了。</span><br>
<span class="pinyin">Tā chī guò le.</span><br>
<span class="khmer">នាងបានញុំាហើយ។</span></p>
<p>បកប្រែ៖ នាងបានញុំាហើយ។</p>

<h2>ការប្រើប្រាស់ "比" សម្រាប់ប្រៀបធៀប</h2>
<p><strong>7. "比" សម្រាប់ការប្រៀបធៀបបីអង្គភាពឬអ្នកផ្សេងៗ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">你比我胖。</span><br>
<span class="pinyin">Nǐ bǐ wǒ pàng.</span><br>
<span class="khmer">អ្នកធាត់ជាងខ្ញុំ។</span></p>
<p>បកប្រែ៖ អ្នកធាត់ជាងខ្ញុំ។</p>



<h2>ការប្រើប្រាស់ "要" សម្រាប់បង្ហាញតម្រូវការឬការមានបំណង</h2>
<p><strong>1. "要" ប្រើសម្រាប់បង្ហាញការទាមទារ ឬបំណងរបស់អ្នក។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我要求一杯水。</span><br>
<span class="pinyin">Wǒ yào yī bēi shuǐ.</span><br>
<span class="khmer">ខ្ញុំចង់បានទឹកមួយកែវ។</span></p>
<p>បកប្រែ៖ ខ្ញុំចង់បានទឹកមួយកែវ។</p>

<h2>ការប្រើប្រាស់ "要" សម្រាប់បង្ហាញបំណងនឹងធ្វើអ្វីមួយ</h2>
<p><strong>2. "要" ប្រើសម្រាប់បង្ហាញបំណងនឹងធ្វើអ្វីមួយក្នុងពេលក្រោយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我要去吃饭，你去吗？</span><br>
<span class="pinyin">Wǒ yào qù chī fàn, nǐ qù ma?</span><br>
<span class="khmer">ខ្ញុំចង់ទៅញុំាហិរ៉ាន អ្នកទៅទេ?</span></p>
<p>បកប្រែ៖ ខ្ញុំចង់ទៅញុំាបាយ អ្នកទៅទេ?</p>

<h2>ការប្រើប្រាស់ "可以" សម្រាប់ការអនុញ្ញាត</h2>
<p><strong>3. "可以" ប្រើសម្រាប់ការអនុញ្ញាតឱ្យធ្វើអ្វីមួយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">这里可以吸烟吗？</span><br>
<span class="pinyin">Zhè lǐ kě yǐ xī yān ma?</span><br>
<span class="khmer">តើនៅទីនេះអាចបារីបានទេ?</span></p>
<p>បកប្រែ៖ តើនៅទីនេះអាចបារីបានទេ?</p>

<h2>ការប្រើប្រាស់ "一起" សម្រាប់បង្ហាញការធ្វើអ្វីមួយជាមួយគ្នា</h2>
<p><strong>4. "一起" ប្រើសម្រាប់បង្ហាញការធ្វើអ្វីមួយជាមួយគ្នា។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我们一起去吧！要不要一起吃饭？</span><br>
<span class="pinyin">Wǒ men yī qǐ qù ba! Yào bù yào yī qǐ chī fàn?</span><br>
<span class="khmer">តោះពួកយើងទៅជាមួយគ្នា! តើអ្នកចង់ទៅញុំាជាមួយគ្នាឬអត់?</span></p>
<p>បកប្រែ៖ តោះពួកយើងទៅជាមួយគ្នា! តើអ្នកចង់ទៅញុំាជាមួយគ្នាឬអត់?</p>

<h2>ការប្រើប្រាស់ "不要" សម្រាប់បញ្ជាអត់ឱ្យធ្វើអ្វីមួយ</h2>
<p><strong>5. "不要" ប្រើសម្រាប់បញ្ជាបន្ថែមឲ្យមិនធ្វើអ្វីមួយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">不要说英文！</span><br>
<span class="pinyin">Bù yào shuō yīng wén!</span><br>
<span class="khmer">មិនចង់និយាយភាសាអង់គ្លេសទេ!</span></p>
<p>បកប្រែ៖ មិនចង់និយាយភាសាអង់គ្លេសទេ!</p>

<h2>ការប្រើប្រាស់ "看" សម្រាប់បង្ហាញការត្រួតពិនិត្យឬកំណត់</h2>
<p><strong>6. "看" ជាកិរិយាសព្ទដែលប្រើសម្រាប់ការត្រួតពិនិត្យ ឬប្រើជាការទំនាក់ទំនងជាមួយគ្នា។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">你看看。</span><br>
<span class="pinyin">Nǐ kàn kàn.</span><br>
<span class="khmer">អ្នកមើលមួយភ្លែត។</span></p>
<p>បកប្រែ៖ អ្នកមើលមួយភ្លែត។</p>

<h2>ការប្រើប្រាស់ "给" សម្រាប់បង្ហាញការផ្តល់</h2>
<p><strong>7. "给" ប្រើសម្រាប់បង្ហាញការផ្តល់អ្វីមួយទៅអ្នកផ្សេង។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">他送给我一束花。</span><br>
<span class="pinyin">Tā sòng gěi wǒ yī shù huā.</span><br>
<span class="khmer">គាត់បានជួនផ្កាដល់ខ្ញុំមួយទង។</span></p>
<p>បកប្រែ៖ គាត់បានជួនផ្កាដល់ខ្ញុំមួយទង។</p>



<h2>ការប្រើប្រាស់ "得" សម្រាប់ការបង្ហាញអត្រា</h2>
<p><strong>1. "得" ប្រើសម្រាប់បង្ហាញអត្រានៃការប្រើប្រាស់សកម្មភាព។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">你做得不错。</span><br>
<span class="pinyin">Nǐ zuò de bù cuò.</span><br>
<span class="khmer">អ្នកធ្វើបានល្អ។</span></p>
<p>បកប្រែ៖ អ្នកធ្វើបានល្អ។</p>

<h2>ការប្រើប្រាស់ "不懂" សម្រាប់ការបង្ហាញការមិនយល់</h2>
<p><strong>2. "不懂" ប្រើសម្រាប់បង្ហាញការមិនយល់នូវអ្វីមួយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我听不懂。</span><br>
<span class="pinyin">Wǒ tīng bù dǒng.</span><br>
<span class="khmer">ខ្ញុំស្តាប់មិនយល់ទេ។</span></p>
<p>បកប្រែ៖ ខ្ញុំស្តាប់មិនយល់ទេ។</p>

<h2>ការប្រើប្រាស់ "好" និង "完" សម្រាប់ការបង្ហាញលទ្ធផល</h2>
<p><strong>3. "好" និង "完" ប្រើសម្រាប់បង្ហាញថាសកម្មភាពបានបញ្ចប់ដោយប្រសើរ ឬត្រឹមត្រូវ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我们吃好了。</span><br>
<span class="pinyin">Wǒ men chī hǎo le.</span><br>
<span class="khmer">យើងបានញុំារួចហើយ។</span></p>
<p>បកប្រែ៖ យើងបានញុំារួចហើយ។</p>

<h2>ការប្រើប្រាស់ "到" និង "见" សម្រាប់ការបង្ហាញលទ្ធផល</h2>
<p><strong>4. "到" និង "见" ប្រើសម្រាប់បង្ហាញថាសកម្មភាពបានបញ្ចប់ដោយអោយបង្កើតលទ្ធផល។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">听到了吗？</span><br>
<span class="pinyin">Tīng dào le ma?</span><br>
<span class="khmer">តើអ្នកស្តាប់បានទេ?</span></p>
<p>បកប្រែ៖ តើអ្នកស្តាប់បានទេ?</p>

<h2>ការប្រើប្រាស់ "完" សម្រាប់បង្ហាញការបញ្ចប់</h2>
<p><strong>5. "完" ប្រើសម្រាប់បង្ហាញការបញ្ចប់ដោយការសម្រេចចិត្ត។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我说完了。</span><br>
<span class="pinyin">Wǒ shuō wán le.</span><br>
<span class="khmer">ខ្ញុំបាននិយាយរួចហើយ។</span></p>
<p>បកប្រែ៖ ខ្ញុំបាននិយាយរួចហើយ។</p>

<h2>ការប្រើប្រាស់ "每" សម្រាប់បង្ហាញភាពទូទៅ</h2>
<p><strong>6. "每" ប្រើសម្រាប់បង្ហាញថាអ្វីមួយកើតឡើងដោយប្រកបដោយអត្រាផ្ទាល់ពីរាល់ឬរាល់។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">每个人。</span><br>
<span class="pinyin">Měi gè rén.</span><br>
<span class="khmer">រាល់មនុស្ស។</span></p>
<p>បកប្រែ៖ រាល់មនុស្ស។</p>

<h2>ការប្រើប្រាស់ "第" សម្រាប់បង្ហាញលេខក្រង</h2>
<p><strong>7. "第" ប្រើសម្រាប់បង្ហាញលេខលំដាប់។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">你是我的第一个朋友。</span><br>
<span class="pinyin">Nǐ shì wǒ de dì yī gè péng yǒu.</span><br>
<span class="khmer">អ្នកគឺជាមិត្តទីមួយរបស់ខ្ញុំ។</span></p>
<p>បកប្រែ៖ អ្នកគឺជាមិត្តទីមួយរបស់ខ្ញុំ។</p>

<h2>ការប្រើប្រាស់ "不" សម្រាប់ការទំនាក់ទំនងសំណួរ</h2>
<p><strong>8. "不" ប្រើសម្រាប់បង្ហាញសំណួរដែលត្រូវការការឆ្លើយតបប្រកបដោយការបដិសេធ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">去不去？</span><br>
<span class="pinyin">Qù bù qù?</span><br>
<span class="khmer">តើអ្នកទៅឬអត់?</span></p>
<p>បកប្រែ៖ តើអ្នកទៅឬអត់?</p>

<h2>ការប្រើប្រាស់ "怎么" សម្រាប់សំណួរតែម្ដង</h2>
<p><strong>9. "怎么" ប្រើសម្រាប់សំណួរដែលទាក់ទងនឹងការអធិប្បាយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">你怎么没来？</span><br>
<span class="pinyin">Nǐ zěn me méi lái?</span><br>
<span class="khmer">តើអ្នកមិនមកដែរឬ?</span></p>
<p>បកប្រែ៖ តើអ្នកមិនមកដែរឬ?</p>

<h2>ការប្រើប្រាស់ "吗" សម្រាប់ការសួរសំណួរពីអ្វីមួយ</h2>
<p><strong>10. "吗" ប្រើសម្រាប់សំណួរដែលមានចម្លើយត្រឹមត្រូវបូកថា។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">这样做，对吗？</span><br>
<span class="pinyin">Zhè yàng zuò, duì ma?</span><br>
<span class="khmer">ធ្ធ្វើបែបនេះត្រឹមត្រូវទេ?</span></p>
<p>បកប្រែ៖ ធ្វើបែបនេះត្រឹមត្រូវទេ?</p>




<h2>បញ្ហានៃហេតុផលជាមួយ "因为" និង "所以"</h2>
<p><strong>1. "因为" និង "所以" ប្រើសម្រាប់បង្ហាញហេតុផល និងលទ្ធផល។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">因为饿了，所以吃饭。</span><br>
<span class="pinyin">Yīnwèi è le, suǒyǐ chī fàn.</span><br>
<span class="khmer">ដោយសារតែឃ្លានហើយ ដូច្នេះខ្ញុំញាំបាយ។</span></p>
<p>បកប្រែ៖ ដោយសារតែឃ្លានហើយ ដូច្នេះខ្ញុំញាំបាយ។</p>

<h2>ការបង្ហាញថា "កំពុងកើតមាន" ជាមួយ "了"</h2>
<p><strong>2. "快" ប្រើសម្រាប់បង្ហាញថាកំពុងមានសកម្មភាព ឬជាទីកំពុងកើតឡើង។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">下雨了。</span><br>
<span class="pinyin">xià yǔ le.</span><br>
<span class="khmer">ភ្លៀងហើយ។</span></p>
<p>បកប្រែ៖ ភ្លៀងហើយ។</p>

<h2>ការប្រើប្រាស់ "什么都" សម្រាប់បង្ហាញអ្វីទាំងអស់</h2>
<p><strong>3. "什么都" ប្រើសម្រាប់បង្ហាញថាមានអ្វីគ្រប់យ៉ាង។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">爸爸什么都知道。</span><br>
<span class="pinyin">Bàba shénme dōu zhīdào.</span><br>
<span class="khmer">ប៉ាដឹងគ្រប់អ្វីៗគ្រប់យ៉ាង។</span></p>
<p>បកប្រែ៖ ប៉ាដឹងគ្រប់អ្វីៗគ្រប់យ៉ាង។</p>

<h2>ការបង្ហាញ "停止ធ្វើ" ជាមួយ "别…了"</h2>
<p><strong>4. "别…了" ប្រើសម្រាប់បង្ហាញការអនុញ្ញាតឬការបង្ហាញបំផុតចំពោះការអនុលោមសកម្មភាព។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">别生气了。</span><br>
<span class="pinyin">Bié shēngqì le.</span><br>
<span class="khmer">កុំខឹងទៀតអី។</span></p>
<p>បកប្រែ៖ កុំខឹងទៀតអី។</p>

<h2>ការបង្ហាញគោលបំណងដោយប្រើ "是...的"</h2>
<p><strong>5. "是...的" ប្រើសម្រាប់បង្ហាញគោលបំណង និងន័យសំខាន់។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">这本书是你写的吗？</span><br>
<span class="pinyin">Wǒ lái Shànghǎi lǚyóu de.</span><br>
<span class="khmer">សៀវភៅនេះជាអ្នកសរសេររឺ?</span></p>
<p>បកប្រែ៖ សៀវភៅនេះជាអ្នកសរសេររឺ?</p>

<h2>ការបង្ហាញសំណួរតាមរយៈ "是...的"</h2>
<p><strong>6. "是...的" ប្រើសម្រាប់បង្ហាញថាសំណួរជារឿងទាក់ទងនឹងការអភិវឌ្ឍន៍។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我是昨天来的。</span><br>
<span class="pinyin">Nǐ shì nǎ gè xué xiào de?</span><br>
<span class="khmer">ខ្ញុំមកនៅម្សិលមិញ។</span></p>
<p>បកប្រែ៖ ខ្ញុំមកនៅម្សិលមិញ។</p>

<h2>ការប្រើប្រាស់ "每" និង "都" សម្រាប់បង្ហាញប្រភេទពេលវេលា</h2>
<p><strong>7. "每" និង "都" ប្រើសម្រាប់បង្ហាញថាគ្រប់ពេលការកើតឡើង។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">为什么每次我来他都不在。</span><br>
<span class="pinyin">Wèishéme měi cì wǒ lái tā dōu bù zài?</span><br>
<span class="khmer">ហេតុអ្វីរាល់ពេលខ្ញុំមក គាត់ពេលណាក៏មិននៅទេ?</span></p>
<p>បកប្រែ៖ ហេតុអ្វីរាល់ពេលខ្ញុំមក គាត់ពេលណាក៏មិននៅទេ?</p>

<h2>ការបង្ហាញភាពប្រៀបធៀប "比" + "多了"</h2>
<p><strong>8. ប្រើប្រាស់ "比" + "多了" សម្រាប់បង្ហាញថាបានធ្វើការប្រៀបធៀបជាមួយអ្វីមួយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">拼音比汉字容易多了。</span><br>
<span class="pinyin">Pīnyīn bǐ hànzì róngyì duō le.</span><br>
<span class="khmer">ភីអ៊ីនងាយជាងអក្សរច្រើន។</span></p>
<p>បកប្រែ៖ ភីនអ៊ីនងាយជាងអក្សរច្រើន។</p>

<h2>ការបង្ហាញ "尽管" និង "但是" សម្រាប់ការបង្ហាញប្រភេទនៃប្រយោជន៍</h2>
<p><strong>9. "尽管" និង "但是" ប្រើសម្រាប់បង្ហាញថាអ្វីៗមិនអាចបណ្ដេញបានគ្នា។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">尽管渴了，但是不想喝啤酒。</span><br>
<span class="pinyin">Jǐnguǎn kě le, dànshì bù xiǎng hē píjiǔ.</span><br>
<span class="khmer">ទោះបីតែខ្ញុំឃ្លានទឹក ប៉ុន្តែខ្ញុំមិនចង់ផឹកស្រាបៀរឡើយ។</span></p>
<p>បកប្រែ៖ ទោះបីតែខ្ញុំផឹកទឹកហើយ ប៉ុន្តែខ្ញុំមិនចង់ផឹកស្រាបៀរឡើយ។</p>

<h2>ការប្រៀបធៀប "要" និង "想"</h2>
<p><strong>10. "要" និង "想" ប្រើសម្រាប់បង្ហាញថាអ្វីមួយត្រូវការប្រៀបធៀបនៅពេលអនាគត។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">我要一杯水。</span><br>
<span class="pinyin">Wǒ yào yī bēi shuǐ.</span><br>
<span class="khmer">ខ្ញុំត្រូវការទឹកមួយកែវ។</span></p>
<p>បកប្រែ៖ ខ្ញុំត្រូវការទឹកមួយកែវ។</p>

 
`;

// Insert the explanation into the HTML element
document.getElementById("grammar-explanation").innerHTML = grammarExplanation;
