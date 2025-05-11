// Set title dynamically
document.getElementById("grammar-title").textContent = "语法：(វេយ្យាករណ៍)";

// Define the explanation and examples in JavaScript with Khmer translations
const grammarExplanation = `
  <h2>ការប្រើប្រាស់ 了 (le)</h2>
  <p><strong>1. 了 ជាសញ្ញានៃការផ្លាស់ប្តូរប្រភេទ:</strong> វាបង្ហាញពីការផ្លាស់ប្តូរនៅក្នុងស្ថានភាពឬស្ថានការណ៍។</p>
  <p>ឧទាហរណ៍ 1: <span class="example">他累了。</span>  
  <span class="pinyin">Tā lèi le.</span>  
  <span class="khmer">គាត់ធ្លាប់មកទល់ពេលនេះគឺថាខ្លួនគាត់ធ្ងន់។</span></p>
  <p>បកប្រែ៖ គាត់ឥឡូវនេះធ្លាប់អស់កម្លាំង។</p>

  <p>ឧទាហរណ៍ 2: <span class="example">我有钱了。</span>  
  <span class="pinyin">Wǒ yǒu qián le.</span>  
  <span class="khmer">ខ្ញុំមានប្រាក់ហើយ។</span></p>
  <p>បកប្រែ៖ ខ្ញុំមានប្រាក់ហើយ។</p>

  <p><strong>2. 了 ជាសញ្ញាអំពីការបញ្ចប់សកម្មភាព:</strong> វាបង្ហាញថាសកម្មភាពបានបញ្ចប់ហើយ។</p>
  <p>ឧទាហរណ៍ 1: <span class="example">我吃了饭。</span>  
  <span class="pinyin">Wǒ chī le fàn.</span>  
  <span class="khmer">ខ្ញុំបរិភោគអាហារហើយ។</span></p>
  <p>បកប្រែ៖ ខ្ញុំបានបរិភោគអាហារ។</p>

  <p>ឧទាហរណ៍ 2: <span class="example">他买了一辆车。</span>  
  <span class="pinyin">Tā mǎi le yí liàng chē.</span>  
  <span class="khmer">គាត់ទិញរថយន្តមួយហើយ។</span></p>
  <p>បកប្រែ៖ គាត់បានទិញរថយន្តមួយ។</p>

  <p><strong>3. ការប្រើ 了 ពីរដងសម្រាប់ការលើកទឹកចិត្ត:</strong> ការប្រើ 了 ពីរដងផ្តល់អារម្មណ៍ថាការបញ្ចប់និងស្ថានភាពថ្មីត្រូវបានផ្តល់អាទិភាព។</p>
  <p>ឧទាហរណ៍ 1: <span class="example">我吃了饭了。</span>  
  <span class="pinyin">Wǒ chī le fàn le.</span>  
  <span class="khmer">ខ្ញុំបរិភោគអាហារហើយ។</span></p>
  <p>បកប្រែ៖ ខ្ញុំបានបរិភោគអាហារហើយ (និងវាបានបញ្ចប់)។</p>


<h2>រចនាសម្ព័ន្ធប្រយោគ</h2>

<p>ប្រយោគភាគច្រើនមានរចនាសម្ព័ន្ធដូចខាងក្រោម:</p>
<p><strong>ប្រធាន + អត្ថបទ + សកម្មភាព + ពេញលេញ</strong></p>

<p>ភាសាចិនគ្មានភេទ ហើយគ្មានចំនួនតែមួយឬច្រើន ស្រាប់តែមានតែពាក្យប្រើក្នុងអត្ថបទ។ សកម្មភាពគ្មានការកែប្រែការបញ្ជាក់។ អ្នកអាចបង្ហាញពេលវេលាតាមការបន្ថែមនៃក្រុមពាក្យសកម្មភាពដែលមានមួយឬពីរពាក្យ។ បរិបទធ្វើឲ្យអាចកំណត់អត្ថន័យបាន។ ប្រសិនបើចាំបាច់ការត្រឹមត្រូវអាចអនុវត្តបាន។</p>

<h3>ពាក្យសម្គាល់ផ្ទាល់ខ្លួន</h3>
<table border="1">
  <tr>
    <th>ហន្សី</th>
    <th>ពិនយ៉ិន</th>
    <th>អត្ថន័យ</th>
  </tr>
  <tr>
    <td>我</td>
    <td>Wǒ</td>
    <td>ខ្ញុំ</td>
  </tr>
  <tr>
    <td>你</td>
    <td>Nǐ</td>
    <td>អ្នក</td>
  </tr>
  <tr>
    <td>他／她</td>
    <td>Tā</td>
    <td>គាត់/នាង</td>
  </tr>
  <tr>
    <td>我们</td>
    <td>Wǒmen</td>
    <td>ពួកយើង</td>
  </tr>
  <tr>
    <td>你们</td>
    <td>nǐmen</td>
    <td>អ្នកទាំងអស់</td>
  </tr>
  <tr>
    <td>他们／她们</td>
    <td>tāmen／tāmen</td>
    <td>ពួកគេ (ប្រុស) / ពួកគេ (ស្រី)</td>
  </tr>
</table>


<h2>មុខសញ្ញាដូចគ្នា</h2>

<p>ក្នុងភាសាចិន មិនអាចនិយាយអំពីវត្ថុដោយប្រើតែអត្ថបទដូចជា "មួយ (ដើមឈើ)", "កុមារី (ស្រី)", "កុមារ (ប្រុស)" ដោយគ្មានមុខសញ្ញាដែលត្រូវបន្ថែមចូលរួមចំណែក។ អ្នកត្រូវការបន្ថែមមុខសញ្ញាដោយមានវានៅចន្លោះអត្ថបទនិងវត្ថុ។ មុខសញ្ញានេះកំណត់ប្រភេទនៃវត្ថុ (ដូចជា តែង, ទទួល, ប្រវែង, មនុស្ស, សត្វ...)។ វាជាប្រភេទដែលត្រូវបានប្រើប្រាស់ជាភាសា តែវាផ្តល់ប្រយោជន៍នៃការសន្សំពាក្យ ដោយវាបានពិពណ៌នាអំពីវត្ថុពីរបៀបសម្បត្តិ ឬ សមត្ថភាព។</p>

<h3>ឧទាហរណ៍</h3>
<table border="1">
  <tr>
    <th>ជម្រើស</th>
    <th>ពិនយ៉ិន</th>
    <th>អត្ថន័យ</th>
  </tr>
  <tr>
    <td>一杯茶</td>
    <td>Yī bēi chá</td>
    <td>កែវតែមួយ</td>
  </tr>
  <tr>
    <td>三本书</td>
    <td>Sān běn shū</td>
    <td>សៀវភៅបីប្រភេទ</td>
  </tr>
  <tr>
    <td>两个人</td>
    <td>Liǎng gè rén</td>
    <td>មនុស្សពីរនាក់</td>
  </tr>
</table>


<h2>លេខ (Numbers)</h2>

<table border="1">
  <tr>
    <th>汉字</th>
    <th>拼音</th>
    <th>English</th>
    <th>Khmer</th>
  </tr>
  <tr>
    <td>零</td>
    <td>líng</td>
    <td>zero</td>
    <td>សូន្យ</td>
  </tr>
  <tr>
    <td>一</td>
    <td>yī</td>
    <td>one</td>
    <td>មួយ</td>
  </tr>
  <tr>
    <td>二／两</td>
    <td>èr／liǎng</td>
    <td>two (number)／two (quantity)</td>
    <td>ពីរ (លេខ)／ពីរ (បរិមាណ)</td>
  </tr>
  <tr>
    <td>三</td>
    <td>sān</td>
    <td>three</td>
    <td>បី</td>
  </tr>
  <tr>
    <td>四</td>
    <td>sì</td>
    <td>four</td>
    <td>បួន</td>
  </tr>
  <tr>
    <td>五</td>
    <td>wǔ</td>
    <td>five</td>
    <td>ប្រាំ</td>
  </tr>
  <tr>
    <td>六</td>
    <td>liù</td>
    <td>six</td>
    <td>ប្រាំមួយ</td>
  </tr>
  <tr>
    <td>七</td>
    <td>qī</td>
    <td>seven</td>
    <td>ប្រាំពីរ</td>
  </tr>
  <tr>
    <td>八</td>
    <td>bā</td>
    <td>eight</td>
    <td>ប្រាំបី</td>
  </tr>
  <tr>
    <td>九</td>
    <td>jiǔ</td>
    <td>nine</td>
    <td>ប្រាំបួន</td>
  </tr>
  <tr>
    <td>十</td>
    <td>shí</td>
    <td>ten</td>
    <td>ដប់</td>
  </tr>
  <tr>
    <td>百</td>
    <td>bǎi</td>
    <td>a hundred</td>
    <td>រយ</td>
  </tr>
  <tr>
    <td>千</td>
    <td>qiān</td>
    <td>a thousand</td>
    <td>ពាន់</td>
  </tr>
  <tr>
    <td>万</td>
    <td>wàn</td>
    <td>ten thousand</td>
    <td>ម៉ឺន</td>
  </tr>
  <tr>
    <td>亿</td>
    <td>yì</td>
    <td>a hundred million</td>
    <td>លាន</td>
  </tr>
</table>


<h2>ការប្រើប្រាស់លេខក្នុងចន្លោះ 11 ទៅ 19</h2>
<p>នៅក្នុងចន្លោះលេខ 11 ទៅ 19 នៅក្នុងភាសាចិន យើងនិយាយថា 10 បន្ទាប់ពីលេខ។</p>
<p>ឧទាហរណ៍: 17 = 十七 (Shíqī) = 10 និង 7</p>

<h2>លេខពី 101 ទៅ 999</h2>
<p>ចាប់ពី 101 ទៅ 999 នៅក្នុងភាសាចិន យើងនិយាយលេខទីមួយ (ក្រៅពី 1) បន្ទាប់ពីវាក៏ជាទាំង 100, បន្ទាប់ពីនោះជាលេខទីពីរបានត្រូវចេញជាលេខ 10 ហើយនៅចុងក្រោយត្រូវមានលេខចុងក្រោយ។</p>
<p>ឧទាហរណ៍: 561 = 五百六十一 (Wǔbǎi liùshí yī) = 5, 100, 6, 10, 1 ដែលមានន័យថា 5*100 + 6*10 + 1</p>

<h2>លេខពី 1000 ទៅ 9999</h2>
<p>ចាប់ពី 1000 ទៅ 9999 នៅក្នុងភាសាចិន យើងនិយាយលេខទីមួយ (ក្រៅពី 1) បន្ទាប់ពីវា 1000, បន្ទាប់ពីនោះជាលេខទីពីរបានត្រូវចេញជាលេខ 100 ហើយ 3 ទីបីជាលេខ 10 ហើយនៅចុងក្រោយគឺលេខចុងក្រោយ។</p>
<p>ឧទាហរណ៍: 4561 = 四千五百六十一 (Sìqiān wǔbǎi liùshí yī) = 4, 1000, 5, 100, 6, 10, 1 ដែលមានន័យថា 4*1000 + 5*100 + 6*10 + 1</p>

<h2>អ្នកត្រូវប្រុងប្រយ័ត្ននូវប្រើប្រាស់គិតចំពោះលេខទាំងនេះ</h2>
<p>នៅលើបន្ទាប់ផងពីនេះភាសាចិនមានអាគារសម្រាប់បន្តចំនួនពាន់ហើយ៖ 万 (wàn)។ នេះបណ្តាលអោយមានការច្រឡំច្រើននៅពេលធ្វើអាជីវកម្ម។</p>
<p>ឧទាហរណ៍: 34002 = 三万零二 (Sān wàn líng èr) = 3*10000 + 2 ។</p>


<h2>កំណត់ចំណាំ៖ លេខសូន្យត្រូវបានប្រើប្រាស់តែម្ដងប៉ុណ្ណោះនៅពេលមានស្រទាប់ក្នុងលេខ។</h2>

<h2>ឧបរិយាធិការ</h2>
<table>
  <tr>
    <th>Hanzi</th>
    <th>Pinyin</th>
    <th>ភាសាខ្មែរ</th>
  </tr>
  <tr>
    <td>很</td>
    <td>Hěn</td>
    <td>ណាស់</td>
  </tr>
  <tr>
    <td>好</td>
    <td>Hǎo</td>
    <td>ល្អ</td>
  </tr>
  <tr>
    <td>非常</td>
    <td>Fēicháng</td>
    <td>ណាស់, មិនធម្មតា</td>
  </tr>
  <tr>
    <td>太</td>
    <td>Tài</td>
    <td>ណាស់, យ៉ាងលើស</td>
  </tr>
</table>


<h2>ពាក្យឧបរិយាធិការសម្រាប់សំណួរ</h2>
<table>
  <tr>
    <th>Hanzi</th>
    <th>Pinyin</th>
    <th>ភាសាខ្មែរ</th>
  </tr>
  <tr>
    <td>谁</td>
    <td>Shuí</td>
    <td>អ្នកណា</td>
  </tr>
  <tr>
    <td>什么</td>
    <td>Shénme</td>
    <td>អ្វី (ចំណុចក្រៅពីជម្រើស)</td>
  </tr>
  <tr>
    <td>什么时候</td>
    <td>Shénme shíhou</td>
    <td>ពេលណា</td>
  </tr>
  <tr>
    <td>多少</td>
    <td>Duōshǎo</td>
    <td>ប៉ុន្មាន</td>
  </tr>
  <tr>
    <td>多长时间</td>
    <td>Duō cháng shíjiān</td>
    <td>ពេលវេលាប៉ុន្មាន</td>
  </tr>
  <tr>
    <td>多久</td>
    <td>Duōjiǔ</td>
    <td>រយៈពេលប៉ុន្មាន</td>
  </tr>
  <tr>
    <td>多大</td>
    <td>Duōdà</td>
    <td>ប៉ុន្មាន (អាយុ, មុខជួរ)</td>
  </tr>
  <tr>
    <td>几</td>
    <td>Jǐ</td>
    <td>ប៉ុន្មាន</td>
  </tr>
  <tr>
    <td>哪</td>
    <td>Nǎ</td>
    <td>ជម្រើសណា</td>
  </tr>
  <tr>
    <td>哪儿／哪里</td>
    <td>Nǎ'er/nǎlǐ</td>
    <td>ឯណា</td>
  </tr>
  <tr>
    <td>怎么</td>
    <td>Zěnme</td>
    <td>យ៉ាងដូចម្តេច (ជាមួយវិធីណា)</td>
  </tr>
  <tr>
    <td>怎么样</td>
    <td>Zěnme yàng</td>
    <td>យ៉ាងដូចម្តេច (វិធីធ្វើ)</td>
  </tr>
  <tr>
    <td>为什么</td>
    <td>Wèishéme</td>
    <td>ហេតុអ្វី?</td>
  </tr>
</table>

<p><strong>Example:</strong> <span class="example">你什么时候来？</span><br>
  <span class="pinyin">Nǐ shénme shíhòu lái?</span><br>
  <span class="khmer">ពេលណាអ្នកត្រូវមក?</span></p>

<h2>ការបដិសេធ</h2>
<table>
  <tr>
    <th>Hanzi</th>
    <th>Pinyin</th>
    <th>ភាសាខ្មែរ</th>
  </tr>
  <tr>
    <td>不</td>
    <td>Bù</td>
    <td>មិន</td>
  </tr>
  <tr>
    <td>没(有)</td>
    <td>Méiyǒu</td>
    <td>មិន (អតីតកាល)</td>
  </tr>
</table>

<p><strong>Example:</strong> <span class="example">她不是法国人。</span><br>
  <span class="pinyin">Tā bùshì fàguó rén.</span><br>
  <span class="khmer">គាត់មិនមែនជាជនជាតិប្រទេសបារាំងទេ។</span></p>

<p><strong>Example:</strong> <span class="example">我没去。</span><br>
  <span class="pinyin">Wǒ méi qù.</span><br>
  <span class="khmer">ខ្ញុំមិនបានទៅ។</span></p>




  <h2>ការប្រើប្រាស់ "没（有）+ កិរិយា"</h2>
<p><strong>1. "没（有）+ Verb" ជាសំណាងប្រើសម្រាប់បដិសេធសកម្មភាពក្នុងអតីតកាល:</strong> វាបង្ហាញថាសកម្មភាពមិនបានកើតឡើងនៅអតីតកាលទេ។</p>

<p>ឧទាហរណ៍ 1: <span class="example">我昨天没去饭馆。</span><br>
<span class="pinyin">Wǒ zuótiān méi qù fànguǎn.</span><br>
<span class="khmer">ខ្ញុំម្សិលមិញមិនបានទៅភោជនីយដ្ឋានទេ។</span></p>
<p>បកប្រែ៖ ខ្ញុំមិនបានទៅភោជនីយដ្ឋានកាលពីម្សិលមិញទេ។</p>

<p>ឧទាហរណ៍ 2: <span class="example">他没买东西。</span><br>
<span class="pinyin">Tā méi mǎi dōngxi.</span><br>
<span class="khmer">គាត់មិនបានទិញអ្វីទេ។</span></p>
<p>បកប្រែ៖ គាត់មិនបានទិញអីវ៉ាន់ទេ។</p>

<p>ឧទាហរណ៍ 3: <span class="example">我们没看电影。</span><br>
<span class="pinyin">Wǒmen méi kàn diànyǐng.</span><br>
<span class="khmer">ពួកយើងមិនបានមើលភាពយន្តទេ។</span></p>
<p>បកប្រែ៖ ពួកយើងមិនបានទៅមើលភាពយន្តទេ។</p>



<h2>ការប្រើប្រាស់ "Verb + 过"</h2>
<p><strong>1. "过" បន្ថែមនៅបន្ទាប់កិរិយាសម្រាប់បង្ហាញបទពិសោធន៍:</strong> វាបង្ហាញថាអ្នកធ្លាប់បានធ្វើអ្វីមួយម្តង ឬច្រើនដងនៅអតីតកាល។</p>

<p>ឧទាហរណ៍ 1: <span class="example">我去过中国。</span><br>
<span class="pinyin">Wǒ qùguò Zhōngguó.</span><br>
<span class="khmer">ខ្ញុំធ្លាប់បានទៅប្រទេសចិន។</span></p>
<p>បកប្រែ៖ ខ្ញុំធ្លាប់បានទៅប្រទេសចិន។</p>

<p>ឧទាហរណ៍ 2: <span class="example">他吃过北京烤鸭。</span><br>
<span class="pinyin">Tā chīguò Běijīng kǎoyā.</span><br>
<span class="khmer">គាត់ធ្លាប់បានញុំាបាតឆ្អឹងអាំងបែបប៉េកាំង។</span></p>
<p>បកប្រែ៖ គាត់ធ្លាប់បានញុំាបាតអាំងប៉េកាំង។</p>

<p>ឧទាហរណ៍ 3: <span class="example">我们看过那部电影了。</span><br>
<span class="pinyin">Wǒmen kànguò nà bù diànyǐng le.</span><br>
<span class="khmer">ពួកយើងធ្លាប់បានមើលភាពយន្តនោះហើយ។</span></p>
<p>បកប្រែ៖ ពួកយើងបានធ្លាប់មើលភាពយន្តនោះ។</p>


<h2>ការប្រើប្រាស់ "没（有）+ V + 过"</h2>
<p><strong>1. "没（有）+ Verb + 过" បង្ហាញថាសកម្មភាពមួយមិនទាន់ធ្លាប់កើតឡើងនៅក្នុងអតីតកាលទេ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">她没去过中国。</span><br>
<span class="pinyin">Tā méi qùguò Zhōngguó.</span><br>
<span class="khmer">នាងមិនទាន់ធ្លាប់ទៅប្រទេសចិនទេ។</span></p>
<p>បកប្រែ៖ នាងមិនទាន់ធ្លាប់បានទៅប្រទេសចិនទេ។</p>

<p>ឧទាហរណ៍ 2: <span class="example">我没有吃过寿司。</span><br>
<span class="pinyin">Wǒ méiyǒu chīguò shòusī.</span><br>
<span class="khmer">ខ្ញុំមិនទាន់ធ្លាប់ញុំាបាយសូស៊ីទេ។</span></p>
<p>បកប្រែ៖ ខ្ញុំមិនទាន់បានញុំាបាយសូស៊ីទេ។</p>

<p>ឧទាហរណ៍ 3: <span class="example">他们没看过那本书。</span><br>
<span class="pinyin">Tāmen méi kànguò nà běn shū.</span><br>
<span class="khmer">ពួកគេមិនទាន់បានអានសៀវភៅនោះទេ។</span></p>
<p>បកប្រែ៖ ពួកគេមិនទាន់បានអានសៀវភៅនោះទេ។</p>


<h2>ការប្រើប្រាស់ "要 + V"</h2>
<p><strong>1. "要 + កិរិយាសព្ទ" សម្រាប់បង្ហាញអំពីសកម្មភាពនាពេលអនាគត ឬបំណងចង់ធ្វើអ្វីមួយ។</strong></p>

<p>ឧទាហរណ៍ 1: <span class="example">他要去饭店。</span><br>
<span class="pinyin">Tā yào qù fàndiàn.</span><br>
<span class="khmer">គាត់ចង់ទៅភោជនីយដ្ឋាន។</span></p>
<p>បកប្រែ៖ គាត់នឹងទៅភោជនីយដ្ឋាន។</p>

<p>ឧទាហរណ៍ 2: <span class="example">我们明天要上课。</span><br>
<span class="pinyin">Wǒmen míngtiān yào shàngkè.</span><br>
<span class="khmer">ស្អែកពួកយើងត្រូវរៀន។</span></p>
<p>បកប្រែ៖ ស្អែកពួកយើងនឹងចូលថ្នាក់។</p>

<p>ឧទាហរណ៍ 3: <span class="example">她要买一本书。</span><br>
<span class="pinyin">Tā yào mǎi yì běn shū.</span><br>
<span class="khmer">នាងចង់ទិញសៀវភៅមួយក្បាល។</span></p>
<p>បកប្រែ៖ នាងនឹងទិញសៀវភៅមួយ។</p>


<h2>ការប្រើប្រាស់ពាក្យសម្គាល់ភាពញឹកញាប់ (Repetition/Frequency)</h2>
<p><strong>1. 常常 (cháng cháng) – ញឹកញាប់:</strong> ប្រើសម្រាប់សកម្មភាពដែលកើតឡើងជាញឹកញាប់។</p>
<p>ឧទាហរណ៍: <span class="example">我常常去图书馆。</span><br>
<span class="pinyin">Wǒ cháng cháng qù túshūguǎn.</span><br>
<span class="khmer">ខ្ញុំទៅបណ្ណាល័យញឹកញាប់។</span></p>
<p>បកប្រែ៖ I often go to the library.</p>

<p><strong>2. 不常 (bù cháng) – មិនញឹកញាប់ទេ:</strong> ប្រើសម្រាប់សកម្មភាពដែលកើតឡើងមិនញឹកញាប់។</p>
<p>ឧទាហរណ៍: <span class="example">他不常运动。</span><br>
<span class="pinyin">Tā bù cháng yùndòng.</span><br>
<span class="khmer">គាត់មិនហាត់ប្រាណញឹកញាប់ទេ។</span></p>
<p>បកប្រែ៖ He does not exercise often.</p>

<p><strong>3. 经常 (jīng cháng) – ជាញឹកញាប់ (ពាក្យសម្គាល់សកម្មភាពទូទៅ):</strong> ប្រើដូចនឹង "常常" ប៉ុន្តែច្រើនប្រើនៅក្នុងប្រធានបទជារូបភាពធំ។</p>
<p>ឧទាហរណ៍: <span class="example">我们经常联系。</span><br>
<span class="pinyin">Wǒmen jīng cháng liánxì.</span><br>
<span class="khmer">ពួកយើងទាក់ទងគ្នាជាញឹកញាប់។</span></p>
<p>បកប្រែ៖ We often keep in touch.</p>

<p><strong>4. 往往 (wǎng wǎng) – ជាធម្មតា (ប្រើពាក់ពន្ធ័នឹងអ្នកណាម្នាក់ឬស្ថានភាពជាក់លាក់):</strong> សម្រាប់សកម្មភាពដែលជាប្រភពនៃទម្លាប់។</p>
<p>ឧទាហរណ៍: <span class="example">他往往迟到。</span><br>
<span class="pinyin">Tā wǎng wǎng chídào.</span><br>
<span class="khmer">គាត់ជាធម្មតាមកយឺត។</span></p>
<p>បកប្រែ៖ He is usually late.</p>



<h2>ការប្រើប្រាស់ពាក្យ “again” (ការធ្វើអ្វីម្តងទៀត)</h2>

<p><strong>1. 还 (hái) – ទៀត (បន្តបន្ទាប់):</strong> ប្រើសម្រាប់សកម្មភាពបន្តដែលនៅកំពុងដើរឡើង។</p>
<p>ឧទាហរណ៍: <span class="example">他还在睡觉。</span><br>
<span class="pinyin">Tā hái zài shuìjiào.</span><br>
<span class="khmer">គាត់នៅតែគេង។</span></p>
<p>បកប្រែ៖ He is still sleeping.</p>

<p><strong>2. 还是 (háishì) – ទៀត/ស្របគ្នា (ជាជម្រើសបន្ទាប់ពីការវិភាគ):</strong> ប្រើពេលជ្រើសរើសឬពេលសម្រេចចិត្តបន្ទាប់ពីគិត។</p>
<p>ឧទាហរណ៍: <span class="example">我还是去吧。</span><br>
<span class="pinyin">Wǒ háishì qù ba.</span><br>
<span class="khmer">ខ្ញុំនៅតែចូលចិត្តទៅ។</span></p>
<p>បកប្រែ៖ I’d better go. (Having considered it, I’ll go.)</p>

<p><strong>3. 又 (yòu) – វិញទៀត (សកម្មភាពកើតឡើងវិញនៅអតីតកាល):</strong> ប្រើពេលអ្វីមួយកើតឡើងម្តងទៀតបន្ទាប់ពីឈប់។</p>
<p>ឧទាហរណ៍: <span class="example">他又迟到了。</span><br>
<span class="pinyin">Tā yòu chídào le.</span><br>
<span class="khmer">គាត់មកយឺតវិញហើយ។</span></p>
<p>បកប្រែ៖ He was late again.</p>

<p><strong>4. 再 (zài) – វិញទៀត (អនាគត):</strong> ប្រើពេលនិយាយអំពីអ្វីមួយដែលនឹងកើតឡើងម្ដងទៀត។</p>
<p>ឧទាហរណ៍: <span class="example">请再说一遍。</span><br>
<span class="pinyin">Qǐng zài shuō yí biàn.</span><br>
<span class="khmer">សូមនិយាយម្តងទៀត។</span></p>
<p>បកប្រែ៖ Please say it again.</p>

<p><strong>5. 没再 (méi zài) – មិនបានធ្វើវិញទេ (អតីតកាល):</strong> សកម្មភាពមិនបានកើតឡើងជាថ្មីក្នុងអតីតកាល។</p>
<p>ឧទាហរណ៍: <span class="example">他昨天生气了，但今天没再说什么。</span><br>
<span class="pinyin">Tā zuótiān shēngqì le, dàn jīntiān méi zài shuō shénme.</span><br>
<span class="khmer">គាត់ខឹងម្សិលមិញ ប៉ុន្តែថ្ងៃនេះគាត់មិនបាននិយាយអ្វីទៀតឡើយ។</span></p>
<p>បកប្រែ៖ He was angry yesterday, but didn’t say anything more today.</p>

<p><strong>6. 不再 (bù zài) – មិនធ្វើវិញទៀត (អនាគត):</strong> សំដៅទៅលើការបញ្ឈប់បន្តរបស់សកម្មភាព។</p>
<p>ឧទាហរណ៍: <span class="example">我不再相信他了。</span><br>
<span class="pinyin">Wǒ bù zài xiāngxìn tā le.</span><br>
<span class="khmer">ខ្ញុំមិនជឿគាត់ទៀតឡើយ។</span></p>
<p>បកប្រែ៖ I will not believe him again.</p>


<h2>កិរិយាសព្ទសំដៅលើ “Will” (បំណងចង់ធ្វើអ្វីមួយ)</h2>

<p><strong>1. 打算 (dǎsuàn) – គ្រោង/ផែនការធ្វើអ្វីមួយ:</strong></p>
<p>ឧទាហរណ៍: <span class="example">我打算明天去看电影。</span><br>
<span class="pinyin">Wǒ dǎsuàn míngtiān qù kàn diànyǐng.</span><br>
<span class="khmer">ខ្ញុំគ្រោងថានឹងទៅមើលភាពយន្តថ្ងៃស្អែក។</span></p>

<p><strong>2. 肯 (kěn) – យល់ព្រម/ព្រមព្រៀងធ្វើអ្វីមួយ:</strong></p>
<p>ឧទាហរណ៍: <span class="example">他不肯帮忙。</span><br>
<span class="pinyin">Tā bù kěn bāngmáng.</span><br>
<span class="khmer">គាត់មិនព្រមជួយទេ។</span></p>

<p><strong>3. 要 (yào) – ចង់ (មានបំណងធ្វើអ្វីមួយ):</strong></p>
<p>ឧទាហរណ៍: <span class="example">我要去旅游。</span><br>
<span class="pinyin">Wǒ yào qù lǚyóu.</span><br>
<span class="khmer">ខ្ញុំចង់ទៅទស្សនកិច្ច។</span></p>

<p><strong>4. 敢 (gǎn) – ហ៊ាន/កាន់តែមានកម្លាំងចិត្តធ្វើអ្វីមួយ:</strong></p>
<p>ឧទាហរណ៍: <span class="example">他不敢说实话。</span><br>
<span class="pinyin">Tā bù gǎn shuō shíhuà.</span><br>
<span class="khmer">គាត់មិនហ៊ាននិយាយពិតទេ។</span></p>

<p><strong>5. 想 (xiǎng) – ចង់/បំណងធ្វើអ្វីមួយ:</strong></p>
<p>ឧទាហរណ៍: <span class="example">我想学习中文。</span><br>
<span class="pinyin">Wǒ xiǎng xuéxí Zhōngwén.</span><br>
<span class="khmer">ខ្ញុំចង់សិក្សាភាសាចិន។</span></p>

<p><strong>6. 愿意 (yuànyì) – ស្រឡាញ់ចង់/មានចិត្តយល់ព្រមធ្វើអ្វីមួយ:</strong></p>
<p>ឧទាហរណ៍: <span class="example">我愿意帮你。</span><br>
<span class="pinyin">Wǒ yuànyì bāng nǐ.</span><br>
<span class="khmer">ខ្ញុំស្រឡាញ់ចង់ជួយអ្នក។</span></p>


<h2>សមត្ថភាព និងភាពអាចកើតមាន (Ability & Likelihood)</h2>

<p><strong>1. 会 (huì) – ចេះ/ដឹងធ្វើអ្វីមួយ:</strong></p>
<p>ឧទាហរណ៍: <span class="example">我会说中文。</span><br>
<span class="pinyin">Wǒ huì shuō Zhōngwén.</span><br>
<span class="khmer">ខ្ញុំចេះនិយាយភាសាចិន។</span></p>

<p><strong>2. 可能 (kěnéng) – អាច/ស្ថិតនៅក្នុងសភាពអាចកើតមាន:</strong></p>
<p>ឧទាហរណ៍: <span class="example">他可能是老师。</span><br>
<span class="pinyin">Tā kěnéng shì lǎoshī.</span><br>
<span class="khmer">គាត់ប្រហែលជាគ្រូបង្រៀន។</span></p>

<p><strong>3. 能够 (nénggòu) – អាចធ្វើអ្វីមួយបាន (ការសម្របសម្រួល):</strong></p>
<p>ឧទាហរណ៍: <span class="example">我能够完成这个任务。</span><br>
<span class="pinyin">Wǒ nénggòu wánchéng zhège rènwù.</span><br>
<span class="khmer">ខ្ញុំអាចបញ្ចប់ភារកិច្ចនេះបាន។</span></p>

<p><strong>4. 可以 (kěyǐ) – អាច (ការអនុញ្ញាត ឬសិទ្ធិ):</strong></p>
<p>ឧទាហរណ៍: <span class="example">你可以走了。</span><br>
<span class="pinyin">Nǐ kěyǐ zǒu le.</span><br>
<span class="khmer">អ្នកអាចទៅបានហើយ។</span></p>

<p><strong>5. 能 (néng) – អាច (សមត្ថភាព ឬលក្ខណៈបច្ចុប្បន្ន):</strong></p>
<p>ឧទាហរណ៍: <span class="example">我能帮你。</span><br>
<span class="pinyin">Wǒ néng bāng nǐ.</span><br>
<span class="khmer">ខ្ញុំអាចជួយអ្នកបាន។</span></p>


<h2>ភារកិច្ច (Obligation)</h2>

<p><strong>1. 必须 (bìxū) – ត្រូវតែ/បញ្ជាក់ថាចាំបាច់:</strong></p>
<p>ឧទាហរណ៍: <span class="example">你必须做作业。</span><br>
<span class="pinyin">Nǐ bìxū zuò zuòyè.</span><br>
<span class="khmer">អ្នកត្រូវតែធ្វើការងារ។</span></p>

<p><strong>2. 要 (yào) – ត្រូវតែ/តម្រូវ:</strong></p>
<p>ឧទាហរណ៍: <span class="example">我们要努力学习。</span><br>
<span class="pinyin">Wǒmen yào nǔlì xuéxí.</span><br>
<span class="khmer">ពួកយើងត្រូវតែព្យាយាមសិក្សា។</span></p>

<p><strong>3. 不想 (bùxiǎng) – មិនចង់ (កំរិតមធ្យមនៃការបដិសេធភារកិច្ច):</strong></p>
<p>ឧទាហរណ៍: <span class="example">我不想去上班。</span><br>
<span class="pinyin">Wǒ bùxiǎng qù shàngbān.</span><br>
<span class="khmer">ខ្ញុំមិនចង់ទៅធ្វើការ។</span></p>

<p><strong>4. 不用 (bùyòng) – មិនចាំបាច់/មិនត្រូវការ:</strong></p>
<p>ឧទាហរណ៍: <span class="example">你不用来了。</span><br>
<span class="pinyin">Nǐ bùyòng lái le.</span><br>
<span class="khmer">អ្នកមិនចាំបាច់មកទេ។</span></p>

<p><strong>5. 应该 (yīnggāi) – គួរតែ/គួរធ្វើ:</strong></p>
<p>ឧទាហរណ៍: <span class="example">你应该休息一下。</span><br>
<span class="pinyin">Nǐ yīnggāi xiūxi yíxià.</span><br>
<span class="khmer">អ្នកគួរតែសម្រាកបន្តិច។</span></p>

<p><strong>6. 应 (yīng) – ត្រូវតែ/គួរតែ (ខ្លីនៃ 应该):</strong></p>
<p>ឧទាហរណ៍: <span class="example">他应来参加会议。</span><br>
<span class="pinyin">Tā yīng lái cānjiā huìyì.</span><br>
<span class="khmer">គាត់គួរតែចូលរួមប្រជុំ។</span></p>

<p><strong>7. 该 (gāi) – ត្រូវតែ/គួរតែ (សំឡេងសាមញ្ញ):</strong></p>
<p>ឧទាហរណ៍: <span class="example">该你了！</span><br>
<span class="pinyin">Gāi nǐ le!</span><br>
<span class="khmer">ដល់វេនអ្នកហើយ!</span></p>

<p><strong>8. 应当 (yīngdāng) – ត្រូវតែ/គួរតែ (ខាងផ្លូវការជាង 应该):</strong></p>
<p>ឧទាហរណ៍: <span class="example">我们应当保护环境。</span><br>
<span class="pinyin">Wǒmen yīngdāng bǎohù huánjìng.</span><br>
<span class="khmer">ពួកយើងត្រូវតែថែរក្សាបរិស្ថាន។</span></p>

<p><strong>9. 得 (děi) – ត្រូវតែ (បញ្ជាក់ការតម្រូវ):</strong></p>
<p>ឧទាហរណ៍: <span class="example">我得走了。</span><br>
<span class="pinyin">Wǒ děi zǒu le.</span><br>
<span class="khmer">ខ្ញុំត្រូវតែទៅហើយ។</span></p>

`;

// Insert the explanation into the HTML element
document.getElementById("grammar-explanation").innerHTML = grammarExplanation;
