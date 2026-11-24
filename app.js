const Q0=[
{id:'n1',t:"آیا امروز با نیروی برتر رابطه داشتم؟ آیا دعا کردم؟",d:"ارتباط با نیروی برتر",k:'y',b:0,h:"رابطه با نیروی برتر و بهبودی"},
{id:'n2',t:"آیا امروز به عجزم اقرار کردم؟",d:"اقرار به عجز",k:'y',b:0},
{id:'n3',t:"امروز کدام یک از قدم‌ها را آگاهانه کار کردم؟ کدام یک از اصول روحانی را در زندگی به کار گرفتم؟",d:"قدم‌ها و اصول روحانی",k:'r',b:0},
{id:'n4',t:"آیا امروز پاک هستم؟",d:"پاکی",k:'y',b:0},
{id:'n5',t:"آیا امروز دروغ گفتم، چیزی را پنهان کردم یا واقعیت را کوچک جلوه دادم؟",d:"ناصادقی",k:'y',b:1,h:"رفتار امروز"},
{id:'n6',t:"آیا امروز با رفتارم به کسی خسارت زدم یا باعث صدمه به خودم یا دیگران شدم؟ این کار چه تأثیری بر من و دیگران گذاشت؟",d:"آسیب به خود و دیگران",k:'y',b:1},
{id:'n7',t:"رفتار سالم چه بود؟ دفعهٔ بعد چگونه می‌توانم رفتار کنم؟",d:"رفتار سالم",k:'x',b:0},
{id:'n8',t:"به چه کسی بدهکارم؟ اقرار یا عذرخواهی را کِی و چگونه انجام می‌دهم؟ (هر جا اشتباه کردم، سریع به آن اقرار کردم؟)",d:"جبران و عذرخواهی",k:'x',b:0},
{id:'n9',t:"کدام یک از نواقصم امروز در زندگی‌ام نقش داشت؟ انگیزه‌ام چه بود؟",d:"نواقص امروز",k:'g',b:0,h:"احساسات و نواقص"},
{id:'n11',t:"آیا امروز از کسی دلخور شدم یا کینه‌ای نگه داشتم؟ ریشه‌اش چه بود؟",d:"کینه",k:'y',b:1},
{id:'n12',t:"احساساتی که امروز داشتم چه بودند؟ چگونه از آن‌ها برای انتخاب عملی بر محور اصول استفاده کردم؟",d:"احساسات",k:'e',b:0},
{id:'n13',t:"آیا امروز ترسی داشتم؟",d:"ترس",k:'y',b:1},
{id:'n14',t:"آیا به خودم اجازه دادم در مورد چیزی وسوسه شوم؟",d:"وسوسه",k:'y',b:1},
{id:'n15',t:"امروز چه کاری نکردم که آرزو می‌کردم انجام داده بودم؟",d:"انجام‌نشده‌ها",k:'x',b:0,h:"کارهای انجام‌شده و انجام‌نشده"},
{id:'n16',t:"چه کاری کردم که دوست دارم باز هم انجام دهم؟",d:"کارهای ارزشمند",k:'x',b:0},
{id:'n17',t:"آیا امروز خدمتی بدون انتظار جبران داشته‌ام؟",d:"خدمت",k:'y',b:0},
// معنای سؤال ۱۸ برعکس شد («بله» حالا نقطه‌ضعف است)، پس کد تازه گرفت تا جواب‌های قدیمی اشتباه خوانده نشوند
{id:'n23',t:"آیا امروز موردی بوده که با راهنمای خود در میان نگذاشته باشم؟",d:"در میان نگذاشتن با راهنما",k:'y',b:1},
{id:'n21',t:"امروز در مورد خودم چه چیزی یاد گرفتم؟",d:"شناخت خود",k:'x',b:0},
{id:'n19',t:"داشته‌های امروز من چه هستند؟ امروز بابت چه چیزهایی سپاسگزارم؟",d:"سپاسگزاری",k:'x',b:0},
{id:'n20',t:"آیا برنامه‌ی امروزم را انجام داده‌ام؟ اگر نه، چرا؟",d:"انجام برنامه",k:'y',b:0},
{id:'n24',t:"امروز برای کدام هدف‌هایم کاری کردم؟",d:"اهداف امروز",k:'p',b:0}];
const DEF0=["کینه", "خشم", "ترس", "خودخواهی", "حسادت", "غرور", "اهمال‌کاری", "ناصادقی", "طمع", "شهوت", "تنبلی", "قضاوت دیگران"];
const PRI0=["صداقت", "روشن‌بینی", "تمایل", "پذیرش", "شهامت", "اعتماد", "فروتنی", "تسلیم", "بخشش", "خدمت", "گمنامی"];
const EMO0=["شادی", "آرامش", "امید", "سپاسگزاری", "عشق", "غم", "خشم", "ترس", "اضطراب", "تنهایی", "شرم", "احساس گناه", "دلخوری", "ناامیدی", "خستگی", "بی‌حوصلگی"];
// اپ اندروید پل «Step10» را تزریق می‌کند؛ در مرورگر معمولی null است
const AN=window.Step10||null;
// نسخه‌ی وب (آیفون): از مرورگر می‌خواهیم داده‌ها را موقع کمبود حافظه پاک نکند
const isIOS=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform=='MacIntel'&&navigator.maxTouchPoints>1);
const isSA=()=>navigator.standalone===true||(window.matchMedia&&matchMedia('(display-mode: standalone)').matches);
if(!AN)try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist().catch(()=>{})}catch(e){}
let Q=Q0,DEF=DEF0,EMO=EMO0,PRI=PRI0;
const syncQ=()=>{Q=S.qs&&S.qs.length?S.qs:Q0;DEF=S.def||DEF0;EMO=S.emo||EMO0;PRI=S.pri||PRI0;if(!S.ui)S.ui={};applyTheme()};
// پالت‌های رنگی؛ هر کدام یک رنگ برای تم روشن و یکی برای تیره
const PAL={
g:['سبز',['#2f6f5e','#e6f1ed'],['#6fc0a8','#27403a']],
b:['آبی',['#2f5f8f','#e4edf6'],['#7fb0e0','#24364a']],
t:['فیروزه‌ای',['#1f7a80','#e0f2f2'],['#5cc5cb','#1f3d40']],
p:['بنفش',['#5e4a8c','#ece8f5'],['#b4a2e6','#352d4a']],
r:['شرابی',['#6b1d33','#f3e2e7'],['#c97a90','#3d1e28']],
k:['قرمز',['#b0281f','#f8e2e0'],['#f08b82','#4a2523']],
o:['کهربایی',['#9a5b1e','#f5ebdf'],['#e0a565','#45331f']],
s:['خاکستری',['#4a5560','#e8ebee'],['#a8b4bf','#2e3439']]};
const MQ=window.matchMedia?matchMedia('(prefers-color-scheme: dark)'):null;
const isDark=()=>S.ui.th=='dark'||(S.ui.th!='light'&&!!(MQ&&MQ.matches));
// پیام کوتاه بالای صفحه (مثلاً اینکه دکمه‌ی تم الان روی کدام حالت است)؛ بیرون از #app است تا با draw() پاک نشود
function tst(m){let e=document.getElementById('tst');if(!e){e=document.createElement('div');e.id='tst';document.body.appendChild(e)}e.textContent=LG=='en'?trS(m):m;e.className='on';clearTimeout(tst.t);tst.t=setTimeout(()=>e.className='',1600)}
const acc=()=>(PAL[S.ui.pal]||PAL.g)[isDark()?2:1];
function applyTheme(){const r=document.documentElement,th=S.ui&&S.ui.th;if(th=='dark'||th=='light')r.dataset.theme=th;else delete r.dataset.theme;const a=acc();r.style.setProperty('--ac',a[0]);r.style.setProperty('--ac2',a[1]);r.style.setProperty('--on',isDark()?'#141614':'#fff');
try{AN&&AN.setBars(isDark()?'#000000':'#f2f2f7',isDark())}catch(e){}}
if(MQ)(MQ.addEventListener?MQ.addEventListener('change',()=>{applyTheme()}):MQ.addListener(()=>applyTheme()));
// برای رعایت گمنامی فقط نام (یا نام مستعار) نگه داشته و نمایش داده می‌شود
const uname=()=>S.user?String(S.user.fn||'').trim():'';
const qEd=()=>{if(!S.qs)S.qs=JSON.parse(JSON.stringify(Q0));Q=S.qs;return S.qs};
const dEd=()=>{if(!S.def)S.def=DEF0.slice();DEF=S.def;return S.def};
const eEd=()=>{if(!S.emo)S.emo=EMO0.slice();EMO=S.emo;return S.emo};
const pEd=()=>{if(!S.pri)S.pri=PRI0.slice();PRI=S.pri;return S.pri};
const CHIPS=k=>k=='g'?DEF:k=='e'?EMO:k=='r'?PRI:null;
function dfs(d){const o=[],m={},add=(l,n)=>{if(m[l]){if(n&&!m[l].n)m[l].n=n;return}m[l]={l,n:n||''};o.push(m[l])};Q.forEach(q=>{const a=d.a[q.id];if(!a)return;if(q.k=='y'&&q.b&&a.v===1)add(q.d,a.n);if(q.k=='g')(a.g||[]).forEach(l=>add(l,''))});return o}
function defStats(ks){const A=ks.filter(k=>hasA(S.days[k])),c={};A.forEach(k=>new Set(dfs(S.days[k]).map(x=>x.l)).forEach(l=>c[l]=(c[l]||0)+1));return Object.keys(c).map(l=>({q:{d:l},r:c[l]/A.length})).sort((a,b)=>b.r-a.r)}
let S={days:{},tasks:[],goals:[],time:'21:30',ui:{}},tab='inv',cur='',range=90;
try{const r=localStorage.getItem('s10');if(r)S=Object.assign(S,JSON.parse(r))}catch(e){}
let ABT=null;
const save=()=>{try{localStorage.setItem('s10',JSON.stringify(S))}catch(e){}clearTimeout(ABT);ABT=setTimeout(abk,4000);wsync()};
// ویجت صفحه‌ی اصلی (اندروید ۳.۹): فقط تاریخ پاکی و ظاهر ویجت فرستاده می‌شود؛ ویجت خودش هر شب سال/ماه/روز را حساب می‌کند. فقط وقتی چیزی عوض شد
let WSV='';
function wsync(){if(!AN||!AN.setWidget)return;const o=JSON.stringify({c:S.clean||'',f:S.ui.wf||'w',b:S.ui.wb||'n',a:(PAL[S.ui.pal]||PAL.g)[1][0]});if(o==WSV)return;WSV=o;try{AN.setWidget(o)}catch(e){}}
// بک‌آپ خودکار: اپ اندروید فایل روزانه را در Download/Step10 می‌نویسد (با حذف اپ پاک نمی‌شود)
function abk(){clearTimeout(ABT);if(!AN||S.ab===0||!Object.keys(S.days).length)return;try{if(AN.autoBackup(JSON.stringify(S)))localStorage.setItem('s10abt',Date.now())}catch(e){}}
const dk=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today=()=>dk(new Date());cur=today();let LT=cur;
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
// تاریخ کامل به شکل «دوشنبه ۱۱ آبان ۱۴۰۵» (خودمان می‌سازیم تا ترتیب راست‌به‌چپ به‌هم نریزد)
const WD=['یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه'];
const fd=k=>{const d=new Date(k+'T12:00');return (LG=='en'?d.toLocaleDateString('en-US',{weekday:'long'}):WD[d.getDay()])+' '+fdj(k)};
// فلش‌ها SVG هستند چون نویسه‌های › و ‹ در متن راست‌به‌چپ برعکس نمایش داده می‌شوند
const chev=prev=>svg((LG=='en')===!!prev?'cl':'cr');
const nf=n=>Number(n).toLocaleString(LG=='en'?'en-US':'fa-IR');
const day=k=>S.days[k]||(S.days[k]={a:{},p:{}});
const hasP=d=>Object.keys(d.p||{}).some(id=>d.p[id].d!==undefined);
// امتیازدهی حذف شده؛ «روز ثبت‌شده» یعنی روزی که دست‌کم به یک سؤال جواب داده شده
const hasA=d=>(d.s&&d.s.length>0)||(d.gd&&d.gd.length>0)||Q.some(q=>{const a=d.a&&d.a[q.id];return a&&(a.v!==undefined||(a.g&&a.g.length)||a.n)});
function dnav(){return `<div class="row"><button class="b nv" data-sh="-1" aria-label="previous day">${chev(1)}</button><button class="b" data-pick style="flex:1;font-weight:600;text-align:center">${fd(cur)}</button><button class="b nv" data-sh="1" aria-label="next day" ${cur>=today()?'disabled':''}>${chev(0)}</button></div>`}
// تبدیل گفتار به متن با امکان خود گوشی: در اپ اندروید پنجره‌ی تشخیص گفتار سیستم، در مرورگر Web Speech
const canDict=()=>!!(AN||window.SpeechRecognition||window.webkitSpeechRecognition);
const ta=(t,k)=>canDict()?`<div class="ta">${t}<button class="mic" data-mic="${k}" aria-label="voice typing">${svg('mic')}</button></div>`:t;
function dictate(k){const lang=LG=='en'?'en-US':'fa-IR';if(AN){try{AN.dictate(k,lang)}catch(e){}return}
const R=window.SpeechRecognition||window.webkitSpeechRecognition,r=new R();r.lang=lang;r.onresult=e=>S10dict(k,e.results[0][0].transcript);r.start()}
window.S10dict=(k,txt)=>{txt=String(txt||'').trim();if(!txt)return;const[f,id]=k.split(':'),t=document.querySelector(f=='dn'?'[data-dn]':`[data-${f}="${id}"]`);if(!t)return;
t.value=(t.value.trim()?t.value.replace(/\s+$/,'')+' ':'')+txt;t.dispatchEvent(new Event('input',{bubbles:true}))};
// سؤال اهداف در ترازنامه: هر هدف در جریان یک تیک «امروز انجامش دادم» برای روزی که باز است (همان days[k].gd)
function gq(k){const en=LG=='en',A=S.goals.filter(g=>(g.st||'a')=='a'||gOn(g.id,k));
const o=A.map(g=>{const on=gOn(g.id,k),P=GPR[g.per||'w'];return `<div class="gstep ${on?'dn':''}"><button class="gck" data-gq="${g.id}" aria-pressed="${on}" aria-label="${en?'Done':'انجام شد'}">${on?svg('chk'):''}</button><div data-u><div>${esc(g.t)}</div><div class="mu">${en?P[1]+' · '+gCnt(g,k)+' of '+gN(g):P[0]+' · '+nf(gCnt(g,k))+' از '+nf(gN(g))}</div></div></div>`}).join('');
return o?`<div class="gq">${o}</div>`:`<div class="row" style="margin:8px 0" data-u><span class="mu" style="flex:1">${en?'You have no goals in progress yet.':'هنوز هدفی در جریان نداری.'}</span><button class="b gal" data-tab="goal">${en?'Goals':'اهداف'}</button></div>`}
function stepSet(gid,sid,k){const g=gOf(gid),s=g&&(g.steps||[]).find(x=>x.id==sid),rm=kk=>{const D=S.days[kk];if(D&&D.s){D.s=D.s.filter(r=>!(r.g==gid&&r.s==sid));if(!D.s.length)delete D.s}};
if(!s)return rm(k);if(s.d){s.d=0;if(s.on)rm(s.on);delete s.on}else{s.d=1;s.on=k;const D=day(k);(D.s||(D.s=[])).push({g:g.id,s:s.id,t:s.t,gt:g.t})}}
// بعد از ورود Excel، ثبت‌های روزانه دوباره به قدم‌ها وصل می‌شوند (کد قدم‌ها در ورود عوض می‌شود)
function relink(){Object.keys(S.days).forEach(k=>(S.days[k].s||[]).forEach(r=>{const g=gOf(r.g),s=g&&(g.steps||[]).find(x=>x.t==r.t);if(s){r.s=s.id;s.d=1;s.on=k}}))}
// ترازنامه‌ی ساده‌تر: یک کارت بالا (حلقه‌ی پیشرفت، تاریخ، کلید «همه / یکی‌یکی»)، سؤال‌ها در بخش‌ها با شمارنده،
// کادر توضیح سؤال‌های بله/خیر و چندگزینه‌ای پنهان است تا «+ افزودن توضیح» زده شود (اگر توضیحی نوشته شده باشد باز می‌ماند)
let IDX=0,NOP={};
const opn=d=>S.goals.some(g=>(g.st||'a')=='a')||!!(d.gd&&d.gd.length);
const qDone=(q,d)=>{const a=d.a[q.id]||{};return q.k=='y'?a.v!==undefined:CHIPS(q.k)?!!((a.g&&a.g.length)||String(a.n||'').trim()):q.k=='p'?!!(d.gd&&d.gd.length):!!String(a.n||'').trim()};
// سؤال قدم اهداف وقتی هدف بازی نیست در پیشرفت شمرده نمی‌شود
const qCnt=d=>Q.filter(q=>q.k!='p'||opn(d));
function qcard(q,i,d,big){const a=d.a[q.id]||{},ok=qDone(q,d),en=LG=='en',nt=q.k!='x',op=!nt||NOP[q.id]||String(a.n||'').trim();
let c=`<div class="c qc ${ok?'ans':''} ${big?'stp':''} ${big&&(q.t.length>85||(CHIPS(q.k)||[]).length>10)?'lng':''}" id="qc-${q.id}">${big?`<div class="mu stk" data-u>${en?'Question '+(i+1)+' of '+Q.length:'سؤال '+nf(i+1)+' از '+nf(Q.length)}</div>`:''}<span class="ok">${svg('chk')}</span><div class="q">${big?'':nf(i+1)+'. '}${esc(q.t)}</div>`;
if(q.k=='y')c+=`<div class="r"><button class="b ${a.v===1?(q.b?'n':'y'):''}" data-q="${q.id}" data-v="1">بله</button><button class="b ${a.v===0?(q.b?'y':'n'):''}" data-q="${q.id}" data-v="0">خیر</button></div>`;
if(CHIPS(q.k))c+='<div class="r cps">'+CHIPS(q.k).map(x=>`<button class="b ${(a.g||[]).includes(x)?(q.k=='g'?'n':'y'):''}" data-g="${q.id}" data-gv="${esc(x)}">${esc(x)}</button>`).join('')+'</div>';
if(q.k=='p')c+=gq(cur);
const tx=ta(`<textarea placeholder="${q.k=='y'?'توضیحات (چه شد؟ چه کسی؟ چه حسی داشتم؟)':'پاسخ و توضیحات...'}" data-qn="${q.id}">${esc(a.n)}</textarea>`,'qn:'+q.id);
if(nt)c+=`<button class="adn" data-nto="${q.id}"><span>${op?'−':'+'}</span> افزودن توضیح</button><div class="nt ${op?'on':''}"><div>${tx}</div></div>`;else c+=tx;
return c+'</div>'}
// نسخه‌ی وب روی آیفون: تا وقتی به صفحه‌ی اصلی اضافه نشده، راه نصب را نشان بده (در اندروید و برنامه‌ی نصب‌شده نمی‌آید)
function iosHint(){if(AN||!isIOS()||isSA())return '';try{if(localStorage.getItem('s10pwah'))return ''}catch(e){}const en=LG=='en';
return `<div class="c" data-u><div class="row" style="align-items:flex-start;gap:10px"><div style="flex:1;min-width:0"><b>${en?'Install on your iPhone':'نصب روی آیفون'}</b><div class="mu">${en?'In Safari, tap the Share button (a square with an up arrow), then “Add to Home Screen”. Taraz then opens like an app and works offline.':'در سافاری دکمه‌ی اشتراک‌گذاری (مربع با فلش رو به بالا) را بزنید، بعد «Add to Home Screen». از آن به بعد تراز مثل یک برنامه باز می‌شود و بدون اینترنت هم کار می‌کند.'}</div></div><button class="b" data-ih>${en?'OK':'باشه'}</button></div></div>`}
function inv(){const d=day(cur),en=LG=='en',C=qCnt(d),n=C.filter(q=>qDone(q,d)).length,L=C.length||1,st=S.ui.im=='s';
// حالت یکی‌یکی باید بدون پیمایش در یک صفحه جا شود: کارت پاکی، یادداشت صوتی و جمله‌ی راهنما حذف و همه‌چیز فشرده‌تر می‌شود
let h=(st?'':iosHint()+congr())+`<div class="c ihd ${st?'cmp':''}"><div class="row"><div class="ring" id="ring" data-p="${n/L}"><svg viewBox="0 0 58 58"><circle class="rb" cx="29" cy="29" r="25"/><circle class="rf" cx="29" cy="29" r="25" pathLength="100" stroke-dasharray="100" stroke-dashoffset="${100-n/L*100}"/></svg><span>${nf(n)}/${nf(C.length)}</span></div>
<div style="flex:1;min-width:0"><button class="dtb" data-pick>${fd(cur)}</button><div class="mu">صادقانه و بدون قضاوت؛ هدف دیدن الگوهاست، نه تنبیه خود.</div></div>
<button class="b nv" data-sh="-1" aria-label="previous day">${chev(1)}</button><button class="b nv" data-sh="1" aria-label="next day" ${cur>=today()?'disabled':''}>${chev(0)}</button></div>
<div class="seg" id="sg-im"><span class="sk"></span><button class="${st?'':'on'}" data-im="l">همه‌ی سؤال‌ها</button><button class="${st?'on':''}" data-im="s">تک‌سؤالی</button></div></div>`;
if(st){IDX=Math.min(IDX,Q.length-1);const q=Q[IDX];h+=`<div class="row sth2"><h2 style="flex:1">ترازنامه‌ی روزانه</h2>${svb(1)}</div><div class="bar"><i style="width:${(IDX+1)/Q.length*100}%"></i></div><div id="stw">${qcard(q,IDX,d,1)}</div><div class="row"><button class="b" data-stp="-1" style="flex:1" ${IDX?'':'disabled'}>قبلی</button><button class="b p" data-stp="1" style="flex:1">${IDX<Q.length-1?'بعدی':'پایان'}</button></div>`;return h}
h+=recCard()+'<h2>ترازنامه‌ی روزانه</h2>';
// بخش‌ها از روی عنوان سؤال‌ها ساخته می‌شوند تا با فهرست ویرایش‌شده‌ی کاربر هم کار کند
const G=[];Q.forEach((q,i)=>{if(q.h||!G.length)G.push({h:q.h||'',L:[]});G[G.length-1].L.push(i)});
G.forEach((g,gi)=>{const c=g.L.filter(i=>Q[i].k!='p'||opn(d)),k=c.filter(i=>qDone(Q[i],d)).length,f=c.length&&k==c.length;
if(g.h||G.length>1)h+=`<div class="sech"><h3>${esc(g.h)}</h3>${c.length?`<span class="cnt ${f?'f':''}">${f?'✓ ':''}${nf(k)}/${nf(c.length)}</span>`:''}</div>`;h+=g.L.map(i=>qcard(Q[i],i,d)).join('')});
h+=`<h2 id="sum">جمع‌بندی شب</h2><div class="c">${ta(`<textarea data-dn placeholder="برداشت کلی، تصمیم برای فردا، عذرخواهی لازم...">${esc(d.note)}</textarea>`,'dn:')}</div><div class="svsp"></div>`;return h}
// دکمه‌ی ثبت شناور پایین سمت چپ: هنگام پیمایش یا تایپ دایره‌ای با آیکون ذخیره می‌شود و وقتی صفحه ایستاد دوباره باز می‌شود.
// بیرون از .pg ساخته می‌شود تا لغزیدن صفحه جایش را تکان ندهد
function svb(inl){const d=day(cur),C=qCnt(d),n=C.filter(q=>qDone(q,d)).length;return `<button class="svb ${inl?'inl':''} ${n>=C.length?'full':''} ${d.sv?'dn':''}" data-sv aria-label="${LG=='en'?'Record daily inventory':'ثبت تراز روزانه'}">${svg(d.sv?'chk':'save')}<span>${d.sv?'ثبت شد':'ثبت تراز'}</span></button>`}
let SVT=0;window.addEventListener('scroll',()=>{const b=document.querySelector('.svb:not(.inl)');if(!b)return;b.classList.add('mini');clearTimeout(SVT);SVT=setTimeout(()=>b.classList.remove('mini'),420)},{passive:true});
let NEWT=0,PLT='h';
function plan(){const d=day(cur);const nowT=new Date().toTimeString().slice(0,5);
let h=dnav();
// ساعت یادآوری فقط در تنظیمات است؛ بالای برنامه جمله‌ی «فقط برای امروز» آمده
h+=`<div class="c jft"><div class="k">فقط برای امروز</div><div class="t">برنامه‌ای خواهم داشت و سعی خواهم کرد آن را به بهترین شکل ممکن انجام دهم.</div></div>`;
// دو دسته: «عادت‌های روزانه» (کار بدون day، هر روز تکرار می‌شود) و «کارهای امروز» (کار با day = همان روز، فقط مال همان روز).
// وضعیت هر روز مثل قبل در d.p است؛ هر کار یک سطر: ✓ سبز، ✕ قرمز (با کادر اختیاری «چرا؟») و سطل زباله
const HB=S.tasks.filter(t=>!t.x&&!t.day),TD=S.tasks.filter(t=>!t.x&&t.day==cur),cnt=L=>nf(L.filter(t=>(d.p[t.id]||{}).d===1).length)+'/'+nf(L.length),pt=PLT=='t',TL=pt?TD:HB;
h+=`<div class="seg" id="sg-pt"><span class="sk"></span><button class="${pt?'':'on'}" data-pt="h">عادت‌های روزانه <small data-u>${cnt(HB)}</small></button><button class="${pt?'on':''}" data-pt="t">کارهای امروز <small data-u>${cnt(TD)}</small></button></div>`;
h+=`<div class="mu" style="margin:0 8px">${pt?'فقط برای همین روز؛ فردا فهرست تازه است.':'هر روز تکرار می‌شوند؛ تیک هر روز فقط مال همان روز است.'}</div>`;
h+='<div class="c tkl">'+(TL.length?TL.map(t=>{const p=d.p[t.id]||{};return `<div class="tk ${p.d===1?'ok':''} ${t.id==NEWT?'pop':''}"><div class="row"><span class="tt" data-u>${esc(t.t)}</span><button class="rb y ${p.d===1?'on':''}" data-t="${t.id}" data-v="1" aria-label="انجام شد">${svg('chk')}</button><button class="rb n ${p.d===0?'on':''}" data-t="${t.id}" data-v="0" aria-label="انجام نشد">${svg('xx')}</button><button class="del" data-dt="${t.id}" aria-label="حذف">${svg('trash')}</button></div>${p.d===0?`<textarea class="why" placeholder="چرا انجام نشد؟ (اختیاری)" data-tw="${t.id}">${esc(p.w)}</textarea>`:''}</div>`}).join(''):`<div class="mu" style="text-align:center;padding:10px">${pt?'برای این روز کاری ننوشته‌ای.':'هنوز عادتی اضافه نکرده‌ای.'}</div>`)+'</div>';
h+=`<div class="c addt"><input id="nt" maxlength="200" placeholder="${pt?'یک کار برای امروز…':'یک عادت روزانه‌ی تازه…'}"><button class="b p" data-addt aria-label="add">${svg('plus')}</button></div>`;NEWT=0;
h+=`<button class="b p" data-done style="width:100%">${d.done?'✓ ثبت شد':'ثبت'}</button>`;return h}
// اهداف (نسخه‌ی ۳.۶): هر هدف هفتگی یا ماهانه است با «چند روز در این دوره». هر روز «امروز انجامش دادم» تیک می‌خورد
// و تیک فقط مال همان روز است (days[k].gd = فهرست کد هدف‌ها)؛ فردا دوباره خالی است. نوار پیشرفت روزهای تیک‌خورده‌ی دوره را می‌شمارد.
// st: a در جریان، d به سرانجام رسید، x کنار گذاشته شد. قدم‌های قدیمی (steps) و ثبت‌های d.s دست نمی‌خورند ولی دیگر نمایش داده نمی‌شوند
let GM=null;
const GST={a:'در جریان',d:'به سرانجام رسید',x:'کنار گذاشته شد'},GSE={a:'In progress',d:'Achieved',x:'Set aside'};
const GPR={w:['هفتگی','Weekly','این هفته','this week','در هفته','a week'],m:['ماهانه','Monthly','این ماه','this month','در ماه','a month']};
const gOf=id=>S.goals.find(g=>g.id==id);
const addD=(k,n)=>{const d=new Date(k+'T12:00');d.setDate(d.getDate()+n);return dk(d)};
// دوره‌ی هفتگی از شنبه شروع می‌شود؛ ماهانه همان ماه شمسی است
function prd(per,k){if(per=='m'){const j=g2j(k);let s=k,e=k;while(g2j(addD(s,-1))[1]==j[1])s=addD(s,-1);while(g2j(addD(e,1))[1]==j[1])e=addD(e,1);return[s,e]}const w=(new Date(k+'T12:00').getDay()+1)%7,s=addD(k,-w);return[s,addD(s,6)]}
const gOn=(gid,k)=>!!((S.days[k]||{}).gd||[]).some(x=>x==gid);
function gCnt(g,k){const[s,e]=prd(g.per||'w',k);let c=0;for(let x=s;x<=e;x=addD(x,1))if(gOn(g.id,x))c++;return c}
function gTick(gid,k){const d=day(k),L=d.gd||(d.gd=[]),i=L.findIndex(x=>x==gid);if(i<0)L.push(gid);else L.splice(i,1);if(!L.length)delete d.gd}
const gN=g=>Math.max(1,+g.dn||(g.per=='m'?12:3));
function gcard(g){const en=LG=='en',st=g.st||'a',act=st=='a',open=GM==g.id,D=(a,b)=>en?b:a,P=GPR[g.per||'w'],k=today(),c=gCnt(g,k),n=gN(g),on=gOn(g.id,k);
let h=`<div class="c goal"><div class="row"><b style="flex:1">${esc(g.t)}</b><span class="gper">${D(P[0],P[1])}</span><button class="b gear gmr ${open?'on':''}" data-gm="${g.id}" aria-label="${D('گزینه‌ها','Options')}">${svg('more')}</button></div>`;
if(!act)h+=`<div class="mu">${D(GST[st],GSE[st])}</div>`;
h+=`<div class="bar" style="margin-top:8px"><i style="width:${Math.min(100,c/n*100)}%"></i></div><div class="mu">${c>=n?'✓ ':''}${en?c+' of '+n+' days '+P[3]:nf(c)+' از '+nf(n)+' روز '+P[2]}</div>`;
// هفتگی: هفت دایره‌ی روزهای هفته؛ ماهانه: نوار کوچک روزهای ماه
const[s,e]=prd(g.per||'w',k);let dots='';for(let x=s;x<=e;x=addD(x,1))dots+=`<i class="${gOn(g.id,x)?'on':''} ${x==k?'td':''} ${x>k?'ft':''}">${(g.per||'w')=='w'?(en?'SSMTWTF':'شیدسچپج')[(new Date(x+'T12:00').getDay()+1)%7]:''}</i>`;
h+=`<div class="gdots ${(g.per||'w')=='m'?'m':''}">${dots}</div>`;
if(act)h+=`<button class="gtd ${on?'on':''}" data-gtk="${g.id}"><span class="gck">${on?svg('chk'):''}</span><span>${D('امروز انجامش دادم','I did it today')}</span></button>`;
if(open){h+=`<div class="gmn"><div class="mu">${D('عنوان هدف','Goal title')}</div><input data-gtt="${g.id}" value="${esc(g.t)}" maxlength="200"><div class="mu" style="margin-top:10px">${D('شمارش','Counted')}</div><div class="seg" id="sg-gp${g.id}"><span class="sk"></span><button class="${(g.per||'w')=='w'?'on':''}" data-gper="${g.id}:w">${D('هفتگی','Weekly')}</button><button class="${g.per=='m'?'on':''}" data-gper="${g.id}:m">${D('ماهانه','Monthly')}</button></div>
<div class="row"><span class="mu" style="flex:1">${D('چند روز '+P[4]+'؟','How many days '+P[5]+'?')}</span><button class="b nv" data-gnd="${g.id}:-1">−</button><b style="min-width:30px;text-align:center">${en?n:nf(n)}</b><button class="b nv" data-gnd="${g.id}:1">+</button></div>
<div class="mu" style="margin-top:10px">${D('یادداشت','Notes')}</div><textarea data-gn="${g.id}" placeholder="${D('موانع، فکرها، یادداشت‌ها','Obstacles, thoughts, notes')}">${esc(g.n)}</textarea><div class="r" style="margin-top:10px">`;
if(act)h+=`<button class="b" data-gst="${g.id}:d">${D('به سرانجام رسید','Achieved')}</button><button class="b" data-gst="${g.id}:x">${D('کنار گذاشتن','Set aside')}</button>`;else h+=`<button class="b" data-gst="${g.id}:a">${D('برگرداندن به در جریان','Back to in progress')}</button>`;
h+=`<button class="b n" data-dg="${g.id}">${D('حذف هدف','Delete goal')}</button></div></div>`}
return h+'</div>'}
function goals(){const en=LG=='en',A=S.goals.filter(g=>(g.st||'a')=='a'),F=S.goals.filter(g=>(g.st||'a')!='a');let h=`<div data-u><h2>${en?'Goals':'اهداف'}</h2>`;
if(!A.length)h+=`<div class="mu" style="margin:0 4px">${en?'No goals in progress. Add one and choose whether it is counted weekly or monthly.':'هدفی در جریان نیست. یک هدف اضافه کن و انتخاب کن هفتگی شمرده شود یا ماهانه.'}</div>`;h+=A.map(gcard).join('');
h+=`<div class="c addt"><input id="gt" maxlength="200" placeholder="${en?'New goal…':'هدف تازه…'}"><button class="b p" data-addg aria-label="add">${svg('plus')}</button></div>`;
if(F.length)h+=`<details class="gdone" data-sec="gd" ${OPEN.gd?'open':''}><summary>${en?'Achieved and set aside':'به سرانجام رسیده و کنار گذاشته'} (${nf(F.length)})</summary>${F.map(gcard).join('')}</details>`;
return h+'</div>'}
// افزودن هدف: پنجره‌ای می‌پرسد شمارش هفتگی باشد یا ماهانه و چند روز
function goalDlg(t){const en=LG=='en',o=document.createElement('div');let per='w',n=3;o.className='ov';
const body=()=>`<div class="c" style="width:100%;max-width:360px" data-u><h2 style="margin:4px 2px 4px">${esc(t)}</h2><div class="mu">${en?'How should this goal be counted?':'شمارش این هدف چطور باشد؟'}</div>
<div class="gpk"><button class="${per=='w'?'on':''}" data-p="w"><b>${en?'Weekly':'هفتگی'}</b><span>${en?'Counts start again every Saturday':'هر شنبه از نو شمرده می‌شود'}</span></button><button class="${per=='m'?'on':''}" data-p="m"><b>${en?'Monthly':'ماهانه'}</b><span>${en?'Counts start again each Persian month':'اول هر ماه از نو شمرده می‌شود'}</span></button></div>
<div class="row" style="margin:12px 2px"><span style="flex:1">${en?'How many days '+(per=='w'?'a week':'a month')+'?':'چند روز '+(per=='w'?'در هفته':'در ماه')+'؟'}</span><button class="b nv" data-n="-1">−</button><b style="min-width:30px;text-align:center">${en?n:nf(n)}</b><button class="b nv" data-n="1">+</button></div>
<div class="r"><button class="b p" data-ok style="flex:1">${en?'Add goal':'افزودن هدف'}</button><button class="b" data-cx style="flex:1">${en?'Cancel':'انصراف'}</button></div></div>`;
const r=()=>{o.innerHTML=body()};r();
o.addEventListener('click',e=>{e.stopPropagation();const b=e.target.closest('button');if(e.target===o||(b&&b.dataset.cx!==undefined))return o.remove();if(!b)return;buzz();
if(b.dataset.p){per=b.dataset.p;n=per=='w'?3:12;r()}else if(b.dataset.n){n=Math.max(1,Math.min(per=='w'?7:31,n+ +b.dataset.n));r()}
else if(b.dataset.ok!==undefined){const id=Date.now();S.goals.push({id,t,st:'a',per,dn:n,steps:[]});o.remove();const i=document.getElementById('gt');if(i)i.value='';save();draw()}});document.body.appendChild(o)}
// نمودار دایره‌ای گزارش: با دکمه‌ی کنار عنوان باز و بسته می‌شود. رنگ‌ها با validate_palette روی رنگ کارت‌ها بررسی شده‌اند
let CH={};
const PIEC=[['#2a78d6','#3987e5'],['#eb6834','#d95926'],['#1baf7a','#199e70'],['#eda100','#c98500'],['#e87ba4','#d55181'],['#008300','#008300'],['#6250d6','#9085e9'],['#e34948','#e66767']];
const PNOTE='اندازه‌ی هر برش سهم آن از همه‌ی موارد است. درصدها همان درصد روزهای گزارش‌اند و جمعشان می‌تواند از ۱۰۰ بیشتر شود.';
const hch=(t,k)=>`<div class="row hch"><h2 style="flex:1">${t}</h2><button class="b chb ${CH[k]?'on':''}" data-chart="${k}" aria-pressed="${!!CH[k]}">${svg('pie')}<span>نمودار</span></button></div>`;
// حداکثر ۸ برش؛ بقیه در «سایر» جمع می‌شوند (درصد روزهای جمع‌شده معنی ندارد، پس فقط سهم نوشته می‌شود)
function pie(L0,note){L0=L0.filter(x=>x.v>0);if(!L0.length)return'';let L=L0;if(L0.length>8){const R=L0.slice(7);L=L0.slice(0,7).concat({l:'سایر',v:R.reduce((a,x)=>a+x.v,0),p:null,c:'#8a8a8e'})}
const tot=L.reduce((a,x)=>a+x.v,0),dk=isDark()?1:0,T=s=>LG=='en'?trS(s):s,pc=n=>nf(Math.round(n))+(LG=='en'?'%':'٪');let a=-Math.PI/2,sl='',lg='';
L.forEach((x,i)=>{const col=x.c||PIEC[i][dk],sh=x.v/tot*100,b=a+x.v/tot*2*Math.PI,P=t=>(100+96*Math.cos(t)).toFixed(2)+' '+(100+96*Math.sin(t)).toFixed(2),nm=esc(T(x.l)),det=nm+': '+(x.p===null?'':pc(x.p)+' · ')+(LG=='en'?'slice ':'سهم برش ')+pc(sh);
sl+=L.length==1?`<circle class="psl" cx="100" cy="100" r="96" fill="${col}" data-t="${det}"><title>${det}</title></circle>`:`<path class="psl" d="M100 100L${P(a)}A96 96 0 ${x.v/tot>.5?1:0} 1 ${P(b)}Z" fill="${col}" data-t="${det}"><title>${det}</title></path>`;
lg+=`<div class="plg"><i style="background:${col}"></i><span style="flex:1">${nm}${x.p===null?(LG=='en'?' (slice share)':' (سهم برش)'):''}</span><b>${x.p===null?pc(sh):pc(x.p)}</b></div>`;a=b});
return `<div class="pie" data-u><svg viewBox="0 0 200 200" role="img" aria-label="${LG=='en'?'Pie chart':'نمودار دایره‌ای'}">${sl}</svg><div class="pdet" aria-live="polite"></div><div class="plgs">${lg}</div>${note?`<div class="mu">${T(note)}</div>`:''}</div>`}
document.addEventListener('click',e=>{const s=e.target.closest&&e.target.closest('.psl');if(!s)return;const f=s.closest('.pie');f.querySelectorAll('.psl.on').forEach(x=>x.classList.remove('on'));s.classList.add('on');f.querySelector('.pdet').textContent=s.dataset.t});
// گزارش (نسخه‌ی ۳.۶): سه تب «ترازنامه | برنامه | اهداف»، همیشه از اولین روز ثبت تا امروز (بدون انتخاب بازه).
// روی میله‌ها، حلقه‌ها و ستون‌ها بزنی، عدد دقیق در یک برچسب کوچک نشان داده می‌شود (data-tt)
let RTB='i';
const pcf=n=>LG=='en'?Math.round(n)+'%':nf(Math.round(n))+'٪';
const rring=(p,sz,lab)=>{const r=sz/2-6,C=2*Math.PI*r;p=Math.max(0,Math.min(1,p||0));return `<svg class="rgx" viewBox="0 0 ${sz} ${sz}" width="${sz}" height="${sz}" data-tt="${esc(lab)}" role="img" aria-label="${esc(lab)}"><circle class="rgb" cx="${sz/2}" cy="${sz/2}" r="${r}"/><circle class="rgf" cx="${sz/2}" cy="${sz/2}" r="${r}" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-p)}" transform="rotate(-90 ${sz/2} ${sz/2})"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-size="${sz/4.6}" font-weight="700">${pcf(p*100)}</text></svg>`};
const rbar=(l,p,tt)=>`<div class="rhb" data-tt="${esc(tt||l+': '+pcf(p*100))}"><div class="hl"><span>${esc(l)}</span><b>${pcf(p*100)}</b></div><div class="trk"><i style="width:${Math.max(2,p*100)}%"></i></div></div>`;
const rcols=(L,lab0,lab1)=>`<div class="cols">${L.map((x,i)=>`<i style="height:${Math.max(2,x[0]*100)}%;animation-delay:${i*.03}s" data-tt="${esc(x[1])}"></i>`).join('')}</div><div class="xl"><span>${lab0}</span><span>${lab1}</span></div>`;
const allDays=()=>{const ks=Object.keys(S.days).sort();if(!ks.length)return[];const L=[];for(let x=ks[0];x<=today();x=addD(x,1))L.push(x);return L};
const wkOf=L=>{const W=[];let c=[];L.forEach(k=>{if((new Date(k+'T12:00').getDay()+1)%7==0&&c.length){W.push(c);c=[]}c.push(k)});if(c.length)W.push(c);return W};
// پوشه‌ی ماه‌ها (۳.۹): وقتی داده‌ها بیش از یک ماه شمسی است، ردیف «همه» + یک دکمه برای هر ماه (جدیدترین اول) بالای گزارش می‌آید
// و هر سه تب فقط همان ماه را حساب می‌کنند. RM خالی = همه؛ وگرنه «سال-ماه» شمسی
// اگر داده‌ها بیش از یک سال شمسی باشد، یک ردیف سال هم جدا بالای ماه‌ها می‌آید (RY)؛ ماه‌ها فقط مال سالِ انتخاب‌شده‌اند
let RM='',RY='';
const mKey=k=>{const j=g2j(k);return j[0]+'-'+j[1]};
const rin=k=>RM?mKey(k)==RM:RY?mKey(k).split('-')[0]==RY:true;
const rDays=()=>allDays().filter(rin);
function mrow(){const en=LG=='en',M=[],Y=[];allDays().forEach(k=>{const m=mKey(k),y=m.split('-')[0];if(M[M.length-1]!=m)M.push(m);if(Y[Y.length-1]!=y)Y.push(y)});
if(RY&&!Y.includes(RY))RY='';if(Y.length<2)RY='';const MS=M.filter(m=>!RY||m.split('-')[0]==RY);if(RM&&!MS.includes(RM))RM='';
const yr=Y.length<2?'':`<div class="mrow" data-u><button class="b ${RY?'':'on'}" data-ry="">${en?'All years':'همه‌ی سال‌ها'}</button>${Y.slice().reverse().map(y=>`<button class="b ${RY==y?'on':''}" data-ry="${y}">${svg('fold')}${en?'Year ':'سال '}${dg(y)}</button>`).join('')}</div>`;
const mr=M.length<2||(Y.length>1&&!RY)?'':`<div class="mrow" data-u><button class="b ${RM?'':'on'}" data-rm="">${RY?(en?'Whole year':'کل سال'):(en?'All':'همه')}</button>${MS.slice().reverse().map(m=>{const[y,mo]=m.split('-');return `<button class="b ${RM==m?'on':''}" data-rm="${m}">${svg('fold')}${(en?MNE:MN)[mo-1]} ${dg(y)}</button>`}).join('')}</div>`;
if(M.length<2){RM='';RY=''}return yr+mr}
function rep(){const en=LG=='en';let h=`<h2>${en?'Report':'گزارش'}</h2>${mrow()}<div class="seg" id="sg-rt" data-u><span class="sk"></span>${[['i',en?'Inventory':'ترازنامه'],['p',en?'Plan':'برنامه'],['g',en?'Goals':'اهداف']].map(x=>`<button class="${RTB==x[0]?'on':''}" data-rt="${x[0]}">${x[1]}</button>`).join('')}</div>`;
return h+'<div class="rfd">'+(RTB=='p'?repP():RTB=='g'?repG():repI())+'</div>'}
// ---------- ترازنامه: سه عدد خلاصه، نقاط ضعف، احساسات، اصول، تحلیل و آخرین توضیحات
function repI(){const ks=Object.keys(S.days).filter(k=>k<=today()&&rin(k)&&hasA(S.days[k])).sort();
if(ks.length<3)return '<div class="c mu">برای گزارش حداقل چند روز مرور ثبت کن. هرچه داده بیشتر، الگوها دقیق‌تر.</div>';
const span=rDays().length,set=new Set(ks);let st=0,b=0;rDays().forEach(k=>{if(set.has(k)){b++;st=Math.max(st,b)}else b=0});
const clean=ks.filter(k=>!dfs(S.days[k]).length).length;
let h='';
const bad=defStats(ks),good=Q.filter(q=>q.k=='y'&&!q.b).map(q=>{let y=0,n=0;ks.forEach(k=>{const a=S.days[k].a[q.id];if(a&&a.v!==undefined){n++;if(a.v==1)y++}});return{q,r:n?y/n:0,n}}).filter(x=>x.n);
h+=hch('نواقص','bad')+'<div class="c">'+(CH.bad?pie(bad.map(x=>({l:x.q.d,v:x.r,p:x.r*100})),PNOTE):'')+'<div class="mu">درصد روزهایی که دیده شده</div>'+(bad.length?bad.map(x=>rbar(x.q.d,x.r,x.q.d+': '+nf(Math.round(x.r*ks.length))+' روز')).join(''):'<div class="mu">موردی ثبت نشده.</div>')+'</div>';
[['e','احساسات پرتکرار','emo'],['r','اصول روحانی به‌کاررفته','pri']].forEach(([kd,ttl,ck])=>{const em={};let ed=0;ks.forEach(k=>{const s=new Set();Q.forEach(q=>{if(q.k==kd){const a=S.days[k].a[q.id];(a&&a.g||[]).forEach(x=>s.add(x))}});if(s.size)ed++;s.forEach(x=>em[x]=(em[x]||0)+1)});
const el=Object.keys(em).sort((a,b)=>em[b]-em[a]);if(el.length)h+=hch(ttl,ck)+'<div class="c">'+(CH[ck]?pie(el.map(x=>({l:x,v:em[x],p:em[x]/ed*100})),PNOTE):'')+el.slice(0,8).map(x=>rbar(x,em[x]/ed,x+': '+nf(em[x])+' روز')).join('')+'</div>'});
// جمله‌ها به زبان انجمن و بدون قضاوت: پیشنهادها فقط در حد اصول دوازده قدم (راهنما، قدم‌های ششم و هفتم، نیروی برتر، فقط برای امروز)
const top=bad.filter(x=>x.r>=.25).slice(0,3);h+='<h2>مرور کلی</h2><div class="c">';
h+=top.length?`<p>نواقصی که بیشتر تکرار شده‌اند: <b>${top.map(x=>esc(x.q.d)).join('، ')}</b>. این‌ها دست‌کم در یک‌چهارم روزها دیده شده‌اند. می‌توانی درباره‌شان با راهنمایت صحبت کنی و در قدم‌های ششم و هفتم، با فروتنی برطرف شدنشان را از نیروی برتر بخواهی.</p>`:'<p>هیچ نقصی در بیش از یک‌چهارم روزها تکرار نشده است. فقط برای امروز، قدم به قدم ادامه بده.</p>';
if(good.length){const w=good.sort((a,b)=>a.r-b.r)[0];h+=`<p>بخشی از برنامه که کمتر به آن پرداخته‌ای: <b>${esc(w.q.d)}</b> (${nf(Math.round(w.r*100))}٪ روزها). می‌توانی درباره‌اش با راهنمایت مشورت کنی.</p>`}h+='</div>';
const notes=[];ks.forEach(k=>dfs(S.days[k]).forEach(x=>{if(x.n)notes.push([k,x.l,x.n])}));
if(notes.length)h+='<h2>آخرین توضیحات درباره‌ی نواقص</h2><div class="c">'+notes.slice(-6).reverse().map(n=>`<div class="mu">${fd(n[0])} — ${esc(n[1])}</div><div data-u>${esc(n[2])}</div><hr style="border:0;border-top:1px solid var(--bd)">`).join('')+'</div>';
return h}
// ---------- برنامه: درصد کل، حلقه‌ی هر عادت، ستون‌های هفتگی و دلیل‌های «انجام نشد»
function repP(){const L=rDays(),HB=S.tasks.filter(t=>!t.x&&!t.day),st=id=>{let y=0,n=0;L.forEach(k=>{const p=((S.days[k]||{}).p||{})[id];if(p&&p.d===1)y++;else if(p&&p.d===0)n++});return{y,n}};
let Y=0,N=0,TY=0,TN=0;const why={};L.forEach(k=>{const p=(S.days[k]||{}).p||{};Object.keys(p).forEach(id=>{const t=S.tasks.find(x=>x.id==id),td=t&&t.day;if(p[id].d===1){if(td)TY++;else Y++}else if(p[id].d===0){if(td)TN++;else N++;const w=String(p[id].w||'').trim();if(w)why[w]=(why[w]||0)+1}})});
if(!Y&&!N&&!TY&&!TN)return '<div class="c mu">هنوز برای برنامه‌ی روزانه چیزی ثبت نکرده‌ای. در تب «برنامه» کارها را با ✓ یا ✕ علامت بزن.</div>';
let h=`<div class="c bigr">${rring(Y/Math.max(1,Y+N),110,'عادت‌ها: '+nf(Y)+' بار انجام شد، '+nf(N)+' بار انجام نشد')}<div><b style="font-size:16px">انجام عادت‌ها</b><div class="mu">${nf(Y)} ✓ · ${nf(N)} ✕ از روزهایی که علامت زده‌ای</div>${TY+TN?`<div class="mu" style="margin-top:4px">کارهای امروز: ${nf(TY)} از ${nf(TY+TN)} انجام شد</div>`:''}</div></div>`;
if(HB.length)h+=`<div class="rings">${HB.map(t=>{const s=st(t.id);return `<div class="rgc">${rring(s.y/Math.max(1,s.y+s.n),84,t.t+': '+nf(s.y)+' انجام شد، '+nf(s.n)+' انجام نشد')}<div class="t" data-u>${esc(t.t)}</div><div class="s">${nf(s.y)} ✓ · ${nf(s.n)} ✕</div></div>`}).join('')}</div>`;
const W=wkOf(L).slice(-12);h+=`<div class="c"><h3>هفته به هفته</h3><div class="mu">${RM?'درصد کارهای انجام‌شده در هر هفته‌ی این ماه':'درصد کارهای انجام‌شده در هر هفته (۱۲ هفته‌ی اخیر)'}</div>${rcols(W.map((w,i)=>{let y=0,a=0;w.forEach(k=>{const p=(S.days[k]||{}).p||{};Object.keys(p).forEach(id=>{if(p[id].d===1){y++;a++}else if(p[id].d===0)a++})});return[a?y/a:0,'هفته‌ی '+fdj(w[0])+': '+(a?pcf(y/a*100):'ثبت نشده')]}),fdj(W[0][0]),fdj(W.at(-1)[0]))}</div>`;
const wk=Object.keys(why).sort((a,b)=>why[b]-why[a]).slice(0,5);if(wk.length)h+=`<div class="c"><h3>دلیل‌های پرتکرار «انجام نشد»</h3>${wk.map(x=>`<div class="rk"><span style="flex:1" data-u>${esc(x)}</span><b>${nf(why[x])} بار</b></div>`).join('')}</div>`;
return h}
// ---------- اهداف: موفقیت کل، هفتگی/ماهانه، رتبه‌بندی و بهترین زنجیره. هر دوره (هفته از شنبه، ماه شمسی) که به تعداد روز هدف رسید «کامل» است
// با پوشه‌ی ماه: فقط دوره‌هایی که در همان ماه تمام شده‌اند و روزهای تیک‌خورده‌ی همان ماه شمرده می‌شوند
function gStat(g){const ka=Object.keys(S.days).filter(k=>gOn(g.id,k)).sort(),ks=ka.filter(rin),c0=dk(new Date(+g.id||Date.now())),s0=ka.length&&ka[0]<c0?ka[0]:c0,T=today(),n=gN(g);let full=0,past=0,x=prd(g.per||'w',s0>T?T:s0)[0];
while(x<=T){const[s,e]=prd(g.per||'w',x);let c=0;for(let y=s;y<=e;y=addD(y,1))if(gOn(g.id,y))c++;if(e<T&&rin(e)){past++;if(c>=n)full++}x=addD(e,1)}
let bs=0,b=0,pv=null;ks.forEach(k=>{b=pv&&addD(pv,1)==k?b+1:1;bs=Math.max(bs,b);pv=k});return{g,full,past,rate:past?full/past:0,bs,cur:gCnt(g,T),n,tot:ks.length}}
function repG(){const G=S.goals.filter(g=>(g.st||'a')!='x'||S.days&&Object.keys(S.days).some(k=>gOn(g.id,k))).map(gStat);
if(!G.length)return '<div class="c mu">هنوز هدفی نداری. در تب «اهداف» یک هدف هفتگی یا ماهانه اضافه کن.</div>';
const F=G.reduce((a,x)=>a+x.full,0),P=G.reduce((a,x)=>a+x.past,0),sub=pp=>{const L=G.filter(x=>(x.g.per||'w')==pp),f=L.reduce((a,x)=>a+x.full,0),p=L.reduce((a,x)=>a+x.past,0);return L.length?(p?pcf(f/p*100):'—'):null},w=sub('w'),m=sub('m');
let h=`<div class="c bigr">${rring(P?F/P:0,110,nf(F)+' دوره از '+nf(P)+' دوره‌ی تمام‌شده به هدف رسید')}<div><b style="font-size:16px">پیشرفت اهداف</b><div class="mu" data-u>${LG=='en'?(P?'Goal reached in '+F+' of '+P+' finished weeks/months':'No week or month has finished yet; the percentage appears after the first one.'):(P?'در '+nf(F)+' از '+nf(P)+' هفته/ماهِ تمام‌شده، هدف کامل شد':'هنوز هیچ هفته یا ماهی تمام نشده؛ درصد بعد از اولین دوره نمایش داده می‌شود.')}</div></div></div>`;
if(w||m)h+=`<div class="tiles" style="grid-template-columns:repeat(${w&&m?2:1},1fr)">${w?`<div class="tile"><b>${w}</b><span>هدف‌های هفتگی</span></div>`:''}${m?`<div class="tile"><b>${m}</b><span>هدف‌های ماهانه</span></div>`:''}</div>`;
h+=`<div class="c"><h3>هدف‌ها به ترتیب پیشرفت</h3>${G.slice().sort((a,b)=>b.rate-a.rate||b.tot-a.tot).map((x,i)=>{const P2=GPR[x.g.per||'w'];return `<div class="rk" data-tt="${esc(x.g.t)}: ${nf(x.full)} از ${nf(x.past)} دوره · روی هم ${nf(x.tot)} روز"><span class="no">${nf(i+1)}</span><div style="flex:1;min-width:0"><div class="row" style="gap:6px"><span style="flex:1;min-width:0" data-u>${esc(x.g.t)}</span><span class="gper">${P2[0]}</span><b>${x.past?pcf(x.rate*100):'—'}</b></div><div class="trk"><i style="width:${Math.max(2,x.rate*100)}%"></i></div><div class="mu" data-u>${LG=='en'?P2[3][0].toUpperCase()+P2[3].slice(1)+': '+x.cur+' of '+x.n+' days · longest run: '+x.bs+' days in a row'+((x.g.st||'a')!='a'?' · '+GSE[x.g.st]:''):P2[2]+': '+nf(x.cur)+' از '+nf(x.n)+' روز · بیشترین روزهای پشت‌سرهم: '+nf(x.bs)+((x.g.st||'a')!='a'?' · '+GST[x.g.st]:'')}</div></div></div>`}).join('')}</div>`;
return h}
// برچسب کوچک عدد دقیق روی نمودارهای گزارش
document.addEventListener('click',e=>{let t=document.getElementById('rtip');const el=e.target.closest&&e.target.closest('[data-tt]');if(!el){if(t)t.remove();return}if(!t){t=document.createElement('div');t.id='rtip';document.body.appendChild(t)}t.textContent=el.dataset.tt;const r=el.getBoundingClientRect(),w=t.offsetWidth;t.style.left=Math.max(8,Math.min(innerWidth-w-8,r.left+r.width/2-w/2))+'px';t.style.top=Math.max(8,r.top-t.offsetHeight-8)+'px';clearTimeout(t._h);t._h=setTimeout(()=>t.remove(),2600)});
function his(){const ks=Object.keys(S.days).filter(k=>{const d=S.days[k];return hasA(d)||d.note||hasP(d)}).sort().reverse();if(!ks.length)return '<div class="c mu">هنوز تراز ثبت‌شده‌ای نیست.</div>';return '<h2>تاریخچه‌ی ترازها</h2>'+ks.map(k=>{const d=S.days[k],df=dfs(d).map(x=>x.l).join('، ');return `<div class="c"><div class="row"><b style="flex:1">${fd(k)}</b></div><div class="mu">${d.sv?'✓ ثبت‌شده':'ثبت‌نشده (پیش‌نویس)'}${df?' — موارد: '+esc(df):''}${d.gd&&d.gd.length?' — '+nf(d.gd.length)+' هدف انجام شد':''}</div><button class="b" data-open="${k}" style="margin-top:6px">باز کردن و ویرایش</button></div>`}).join('')}
let PR=null;
function bak(){const pr=PR?`<div class="ban">این پشتیبان ${nf(Object.keys(PR.days).length)} روز دارد. با تأیید، همه‌ی داده‌های فعلی (به جز صداها) جایگزین می‌شوند.<div class="r"><button class="b n" data-pro>تأیید و جایگزینی</button><button class="b" data-prn>لغو</button></div></div>`:'';
return `<h2>پشتیبان‌گیری</h2>${pr}<div class="c"><div class="mu">${AN?'داده‌ها فقط روی همین گوشی ذخیره می‌شوند. فایل بک‌آپ را جایی امن (مثلاً ایمیل خودت) نگه دار.':'داده‌ها فقط روی همین مرورگر ذخیره می‌شوند. این متن را کپی و جایی امن نگه دار؛ برای بازگردانی در همین کادر بچسبان.'}</div><div class="r"><button class="b p" data-dl>ذخیره‌ی فایل بک‌آپ روی گوشی</button></div><div class="mu" style="margin-top:8px">بازگردانی از فایل بک‌آپ (JSON):</div><input type="file" accept=".json,application/json" data-imj><details style="margin-top:8px"><summary class="mu">بازگردانی با چسباندن متن</summary><textarea id="bk">${esc(JSON.stringify(S))}</textarea><div class="r"><button class="b" data-imp>بازگردانی</button></div></details></div>`}
// ---------- روزشمار پاکی: تاریخ شروع (S.clean، میلادی YYYY-MM-DD) با تقویم شمسی وارد و محاسبه می‌شود
const mlen=(y,m)=>m<=6?31:m<=11?30:(j2g(y,12,30)?30:29);
const dayN=(a,b)=>Math.round((Date.parse(b+'T12:00:00Z')-Date.parse(a+'T12:00:00Z'))/864e5);
function cleanDiff(k){const s=g2j(k),t=g2j(today());let y=t[0]-s[0],m=t[1]-s[1],d=t[2]-s[2];
if(d<0){m--;const pm=t[1]==1?12:t[1]-1;d+=mlen(t[1]==1?t[0]-1:t[0],pm)}if(m<0){y--;m+=12}return{y,m,d,n:dayN(k,today())}}
function addJm(k,mo){const s=g2j(k),y=s[0]+Math.floor((s[1]-1+mo)/12),m=(s[1]-1+mo)%12+1;return j2g(y,m,Math.min(s[2],mlen(y,m)))}
// جشن بعدی: ۳۰، ۶۰ و ۹۰ روز، ۶ و ۹ و ۱۸ ماه، و هر سالگرد
function nextMs(k){const T=today(),L=[],add=(g,t,n)=>{if(g&&g>T)L.push({g,t,n})};
[30,60,90].forEach(n=>add(iso(Date.parse(k+'T12:00:00Z')+n*864e5),'d',n));[6,9,18].forEach(n=>add(addJm(k,n),'m',n));
for(let y=1;y<=cleanDiff(k).y+1;y++)add(addJm(k,12*y),'y',y);L.sort((a,b)=>a.g<b.g?-1:1);return L[0]?Object.assign(L[0],{left:dayN(T,L[0].g)}):null}
const fmtMs=x=>LG=='en'?x.n+' '+(x.t=='d'?'days':x.t=='m'?'months':x.n==1?'year':'years'):nf(x.n)+' '+(x.t=='d'?'روز':x.t=='m'?'ماه':'سال');
const dur=c=>{const en=LG=='en',p=[];if(c.y)p.push(en?c.y+(c.y==1?' year':' years'):nf(c.y)+' سال');if(c.m)p.push(en?c.m+(c.m==1?' month':' months'):nf(c.m)+' ماه');if(c.d||!p.length)p.push(en?c.d+(c.d==1?' day':' days'):nf(c.d)+' روز');return p.join(en?', ':' و ')};
let CE=0,CMSG='';
function cleanv(){const en=LG=='en';let h=`<div data-u>`;
if(S.clean&&!CE){const c=cleanDiff(S.clean),ms=nextMs(S.clean);
h+=`<div class="c cln"><div class="cg-n">${nf(c.n)}</div><div class="cg-s">${en?'days clean':'روز پاکی'}</div><div class="cg-b">${dur(c)}</div><div class="cg-s">${en?'since ':'از '}${fd(S.clean)}</div></div>`;
if(ms)h+=`<div class="c row"><div style="flex:1"><div class="q" style="font-weight:700">${en?'Next milestone: ':'جشن بعدی: '}${fmtMs(ms)}</div><div class="mu">${fd(ms.g)}</div></div><div style="text-align:center"><div class="sc" style="font-size:26px;line-height:1.3">${nf(ms.left)}</div><div class="mu">${en?'days left':'روز مانده'}</div></div></div>`;
return h+`<div class="r"><button class="b" data-cle>${en?'Change date':'تغییر تاریخ'}</button></div></div>`}
const j=g2j(S.clean||today()),y0=g2j(today())[0];let ys='',ds='';for(let y=y0;y>=y0-80;y--)ys+=`<option value="${y}" ${y==j[0]?'selected':''}>${dg(y)}</option>`;for(let d=1;d<=31;d++)ds+=`<option value="${d}" ${d==j[2]?'selected':''}>${dg(d)}</option>`;
h+=`<div class="c"><div class="mu">${en?'Enter the date your clean time began (Persian calendar).':'تاریخ شروع پاکی‌ات را وارد کن (تقویم شمسی).'}</div>${CMSG?'<div class="ban">'+CMSG+'</div>':''}<div class="row" style="margin-top:10px"><select id="cd" aria-label="day">${ds}</select><select id="cm" aria-label="month">${MNL().map((n,i)=>`<option value="${i+1}" ${i+1==j[1]?'selected':''}>${n}</option>`).join('')}</select><select id="cy" aria-label="year">${ys}</select></div><div class="r"><button class="b p" data-cls>${en?'Save':'ذخیره'}</button>${S.clean?`<button class="b" data-clx>${en?'Cancel':'انصراف'}</button><button class="b n" data-cldel>${en?'Delete':'حذف'}</button>`:''}</div></div>`;
return h+'</div>'}
function cleanSave(){const v=id=>+document.getElementById(id).value,g=j2g(v('cy'),v('cm'),v('cd')),en=LG=='en';
if(!g)CMSG=en?'This date does not exist in the calendar.':'این تاریخ در تقویم وجود ندارد.';else if(g>today())CMSG=en?'The date cannot be in the future.':'تاریخ نمی‌تواند در آینده باشد.';else{S.clean=g;CE=0;CMSG='';annInit();setTimeout(annCheck,50)}}
// لایه‌ی جشن پشت کارت: نور چرخان آرام و کاغذرنگی‌های ریز که آهسته بالا می‌روند
const CFX='<div class="cfx" aria-hidden="true">'+'<i></i>'.repeat(12)+'</div>';
// کارت تبریک بالای ترازنامه: هر بار که برنامه باز (یا قفلش باز) می‌شود با یک جمله و حرکت متفاوت، مثل اسلاید، ظاهر می‌شود
const ANIMS=['sl-fade','sl-up','sl-zoom','sl-side','sl-flip','sl-drop'];let CST='sl-wait',CV=0;
function playCong(){CV=Math.floor(Math.random()*4);CST=ANIMS[Math.floor(Math.random()*ANIMS.length)];if(tab=='inv')draw();setTimeout(()=>{CST=''},1600);annCheck()}
// تبریک سالگرد پاکی: اولین ورود در سالگرد شمسی یا بعد از آن، هر سال یک بار. S.ann آخرین سالی است که تبریک گفته شده
// با ثبت تاریخ قدیمی، سالگردهای گذشته تبریک نمی‌آورند؛ مگر اینکه همان روز سالگرد باشد
function annInit(){const c=cleanDiff(S.clean);S.ann=c.y>=1&&c.m==0&&c.d==0?c.y-1:c.y}
function annCheck(){if(!S.clean||!S.user||LOCKED)return;if(S.ann===undefined){annInit();save()}const y=cleanDiff(S.clean).y;if(y>=1&&y>S.ann){S.ann=y;save();annShow(y)}}
function annShow(y){const en=LG=='en',nm=esc(uname()),o=document.createElement('div');o.className='ov ann';
o.innerHTML=`<div class="c anc">${CFX}<div class="cgc" data-u><div class="cg-s">${en?'Congratulations'+(nm?', '+nm:'')+'!':'تبریک'+(nm?' '+nm+' عزیز':'')+'!'}</div><div class="cg-n">${nf(y)}</div><div class="cg-b">${en?(y==1?'year clean':'years clean'):'سال پاکی'}</div><div class="cg-s">${en?'Happy clean-time anniversary. Keep going, just for today.':'سالگرد پاکی‌ات مبارک. قدم به قدم، فقط برای امروز.'}</div><button class="b" data-ax>${en?'Thank you':'ممنونم'}</button></div></div>`;
o.onclick=e=>{e.stopPropagation();if(e.target===o||e.target.closest('[data-ax]'))o.remove()};document.body.appendChild(o)}
function congr(){const en=LG=='en',nm=esc(uname());if(!S.clean)return `<button class="c cong" data-goclean>${CFX}<div class="cgc cg-s" data-u>${en?'Set your clean date to see your clean time here.':'تاریخ پاکی‌ات را ثبت کن تا روزشمار پاکی اینجا نمایش داده شود.'}</div></button>`;
// کارت جمع‌وجور: عدد روزهای پاکی سمت راست و دو سطر نوشته‌ی متغیر کنارش
const c=cleanDiff(S.clean),ms=nextMs(S.clean),V=[
()=>[en?'Congratulations'+(nm?', '+nm:'')+'!':(nm?nm+' عزیز، ':'')+'تبریک!',dur(c)+(en?' clean':' پاکی')],
()=>[en?'Just for today':'فقط برای امروز',''],
()=>ms?[en?'Until your '+fmtMs(ms)+' milestone':'تا جشن '+fmtMs(ms),en?ms.left+' days to go':nf(ms.left)+' روز مانده']:V[1](),
()=>[(en?'Since ':'از ')+fd(S.clean),en?'Keep going, step by step.':'قدم به قدم ادامه بده.']],t=V[CV]();
return `<button class="c cong cgk ${CST}" data-goclean>${CFX}<div class="cgc cgr" data-u><div class="cgn"><b>${nf(c.n)}</b><small>${en?'days':'روز'}</small></div><div class="cgt"><div class="cg-l1">${t[0]}</div>${t[1]?`<div class="cg-l2">${t[1]}</div>`:''}</div></div></button>`}
let LG='fa';try{LG=localStorage.getItem('lg')||'fa'}catch(e){}
I18N.forEach(x=>x[0]=x[0].replace(/\u200c/g,''));
const FRs=I18N.filter(x=>x[2]).sort((a,b)=>b[0].length-a[0].length),EXs={};I18N.forEach(x=>{if(!x[2])EXs[x[0]]=x[1]});
const cm=s=>s.replace(/[۰-۹]/g,c=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(c)).replace(/٪/g,'%').replace(/،/g,',').replace(/؟/g,'?').replace(/؛/g,';').replace(/[›‹]/g,c=>c=='›'?'‹':'›');
function trS(s){let z=String(s).replace(/\u200c/g,''),k=z.trim();if(EXs[k]!==undefined)return cm(z.replace(k,EXs[k]));FRs.forEach(f=>{z=z.split(f[0]).join(f[1])});return cm(z)}
function tr(r){const w=document.createTreeWalker(r,NodeFilter.SHOW_TEXT),L=[];let n;while(n=w.nextNode())L.push(n);L.forEach(n=>{const p=n.parentElement;if(!p||p.closest('[data-u],textarea,script,style'))return;const v=trS(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v});r.querySelectorAll('[placeholder]').forEach(e=>e.placeholder=trS(e.placeholder))}
const MN=['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
const jf=new Intl.DateTimeFormat('en-u-ca-persian-nu-latn',{year:'numeric',month:'numeric',day:'numeric',timeZone:'UTC'});
const iso=t=>new Date(t).toISOString().slice(0,10);
function g2j(k){const o={};jf.formatToParts(new Date(k+'T12:00:00Z')).forEach(x=>o[x.type]=+x.value);return[o.year||o.relatedYear,o.month,o.day]}
function j2g(y,m,d){let s=null;for(let i=0;i<8;i++){const t=Date.UTC(y+621,2,17+i,12),j=g2j(iso(t));if(j[0]==y&&j[1]==1&&j[2]==1){s=t;break}}if(s===null)return null;const r=iso(s+((m<=7?(m-1)*31:186+(m-7)*30)+d-1)*864e5),j=g2j(r);return j[1]==m&&j[2]==d?r:null}
const MNE=['Farvardin','Ordibehesht','Khordad','Tir','Mordad','Shahrivar','Mehr','Aban','Azar','Dey','Bahman','Esfand'],MNL=()=>LG=='en'?MNE:MN;
const dg=(n,f)=>LG=='en'&&!f?String(n):String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const fdj=(k,f)=>{const j=g2j(k),M=LG=='en'&&!f?MNE:MN;return dg(j[2],f)+' '+M[j[1]-1]+' '+dg(j[0],f)};
// انتخابگر تاریخ شمسی؛ روزهای آینده غیرفعال‌اند
function pick(k,cb,fu){let[y,m]=g2j(k);const sel=g2j(k).join(),td=g2j(today()).join(),y0=g2j(today())[0],T=today(),o=document.createElement('div');o.className='ov';document.body.appendChild(o);
function R(){const ml=m<=6?31:m<=11?30:(j2g(y,12,30)?30:29),g1=Date.parse(j2g(y,m,1)+'T12:00:00Z'),lead=(new Date(g1).getUTCDay()+1)%7;let c='';for(let i=0;i<lead;i++)c+='<i></i>';for(let d=1;d<=ml;d++){const s=[y,m,d].join(),fut=!fu&&iso(g1+(d-1)*864e5)>T;c+=`<button class="dd ${s==sel?'p':''} ${s==td?'tdy':''}" data-d="${d}" ${fut?'disabled':''}>${nf(d)}</button>`}
let ys='';for(let i=fu?Math.min(y0-1,y):y0-12;i<=(fu?y0+30:y0);i++)ys+=`<option value="${i}" ${i==y?'selected':''}>${dg(i)}</option>`;
o.innerHTML=`<div class="c" style="width:100%;max-width:340px;margin:0"><div class="row"><button class="b nv" data-m="-1">${chev(1)}</button><select data-sm>${MNL().map((n,i)=>`<option value="${i+1}" ${i+1==m?'selected':''}>${n}</option>`).join('')}</select><select data-sy>${ys}</select><button class="b nv" data-m="1" ${!fu&&y==y0&&m>=g2j(T)[1]?'disabled':''}>${chev(0)}</button></div><div class="cal mu">${(LG=='en'?'SSMTWTF':'شیدسچپج').split('').map(x=>'<span>'+x+'</span>').join('')}</div><div class="cal">${c}</div><div class="r" style="margin-top:10px"><button class="b" data-td>امروز</button><button class="b" data-x>بستن</button></div></div>`;if(LG=='en')tr(o)}
o.onclick=e=>{e.stopPropagation();const t=e.target.closest('button')||e.target,D=t.dataset;if(t===o||D.x!==undefined)return o.remove();if(D.d){const r=j2g(y,m,+D.d);o.remove();cb(r)}else if(D.m){m+=+D.m;if(m<1){m=12;y--}if(m>12){m=1;y++}R()}else if(D.td!==undefined){o.remove();cb(today())}};
o.onchange=e=>{e.stopPropagation();const D=e.target.dataset;if(D.sm!==undefined)m=+e.target.value;if(D.sy!==undefined)y=+e.target.value;R()};o.oninput=e=>e.stopPropagation();R()}
const b64=blob=>new Promise((res,rej)=>{const f=new FileReader();f.onload=()=>res(String(f.result).split(',')[1]||'');f.onerror=rej;f.readAsDataURL(blob)});
async function sv(blob,fn){if(AN){AN.saveFile(fn,blob.type||'application/octet-stream',await b64(blob));return true}
// آیفون: دانلود در برنامه‌ی نصب‌شده روی صفحه‌ی اصلی راه برگشت ندارد؛ با منوی اشتراک‌گذاری در Files یا تلگرام ذخیره می‌شود. لغو = ذخیره نشد
if(isIOS()&&navigator.canShare)try{const f=new File([blob],fn,{type:blob.type||'application/octet-stream'});if(navigator.canShare({files:[f]})){await navigator.share({files:[f]});return true}}catch(e){if(e&&e.name=='AbortError')return false}
const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=fn;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);return true}
// اثر انگشت اطلاعات کاربر، برای فهمیدن اینکه بعد از آخرین بک‌آپ دستی چیزی عوض شده یا نه (روزهای خالی و ظاهر برنامه حساب نمی‌شوند)
function bkSnap(){const o=Object.assign({},S),D={};delete o.lb;delete o.ui;delete o.ann;Object.keys(S.days).sort().forEach(k=>{const d=S.days[k];if(hasA(d)||d.note||hasP(d)||d.sv||d.done)D[k]=d});o.days=D;const s=JSON.stringify(o);let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return s.length+':'+h}
const hasData=()=>S.tasks.length>0||S.goals.length>0||!!S.clean||Object.keys(S.days).some(k=>{const d=S.days[k];return hasA(d)||d.note||hasP(d)});
const isBacked=()=>{try{return localStorage.getItem('s10bkh')===bkSnap()}catch(e){return false}};
async function bkSave(){const b=new Blob([JSON.stringify(S)],{type:'application/json'}),fn='step10-backup-'+today()+'.json';let ok=true;
if(AN)ok=!!AN.saveNow(fn,'application/json',await b64(b));else ok=await sv(b,fn)!==false;
if(ok){S.lb=Date.now();save();try{localStorage.setItem('s10bkh',bkSnap())}catch(e){}}return ok}
async function dl(){await bkSave();draw()}
let X={from:'',to:today(),f:'xlsx'},MSG='',PI=null;{const d0=new Date();d0.setDate(d0.getDate()-29);X.from=dk(d0)}
function xr(){return Object.keys(S.days).sort().filter(k=>{const d=S.days[k];return k>=X.from&&k<=X.to&&(hasA(d)||d.note||hasP(d))})}
function xp(){const n=xr().length;return `${MSG?'<div class="ban">'+MSG+'</div>':''}<h2>خروجی گرفتن</h2><div class="c"><div class="mu">بازه‌ی تاریخ (برای تغییر، روی تاریخ بزن)</div><div class="row"><button class="b" data-pk="from" style="flex:1">از: ${fdj(X.from)}</button><button class="b" data-pk="to" style="flex:1">تا: ${fdj(X.to)}</button></div><div class="r">${[[30,'۳۰ روز'],[90,'۳ ماه'],[180,'۶ ماه'],[365,'یک سال'],[0,'همه']].map(a=>`<button class="b" data-qr="${a[0]}">${a[1]}</button>`).join('')}</div><div class="mu" style="margin-top:8px">${nf(n)} روز در این بازه ثبت شده است. خروجی یک فایل Excel است؛ همین فایل را (حتی بعد از ویرایش) می‌توانی در «ورود از Excel» دوباره وارد کنی. برای پشتیبان کامل «همه» را بزن.</div><button class="b p" data-go style="width:100%;margin-top:8px">دریافت فایل Excel</button>${AN?'<div class="mu">فایل‌ها در پوشه‌ی Download/Step10 گوشی ذخیره می‌شوند.</div>':''}</div><h2>ورود از Excel</h2><div class="c">${PI?`<div>${nf(Object.keys(PI.N).length)} روز از فایل وارد می‌شود و جایگزین همان روزها می‌شود.${PI.sk?' ('+nf(PI.sk)+' ردیف نامعتبر نادیده گرفته شد)':''}</div><div class="r"><button class="b p" data-ok>تأیید ورود</button><button class="b" data-no>لغو</button></div>`:`<div class="mu">فایل Excel خروجی همین برنامه را (حتی بعد از ویرایش) انتخاب کن. روزهای موجود در فایل جایگزین همان روزها می‌شوند و بقیه‌ی روزها دست‌نخورده می‌مانند.</div><input type="file" accept=".xlsx" data-imx style="margin-top:8px">`}</div>`+bak()+abv()}
// بک‌آپ خودکار روزانه (فقط در اپ اندروید)
function abv(){if(!AN)return '';const at=+(localStorage.getItem('s10abt')||0);return `<h2>بک‌آپ خودکار</h2><div class="c"><label class="ck"><input type="checkbox" data-ab ${S.ab!==0?'checked':''}> بک‌آپ خودکار روشن باشد</label><div class="mu">هر روز یک فایل در پوشه‌ی Download/Step10 گوشی ذخیره می‌شود (۷ روز آخر نگه داشته می‌شود). این فایل‌ها با حذف برنامه پاک نمی‌شوند. صداها داخل بک‌آپ نیستند.${at?'<br>آخرین بک‌آپ خودکار: '+new Date(at).toLocaleString(LG=='en'?'en-GB':'fa-IR'):''}</div><div class="r"><button class="b" data-abn>بک‌آپ همین الان</button></div></div>`}
// نام نوع سؤال‌ها در فایل Excel (ورود هم کد خام را می‌پذیرد)
const QK={y:'بله / خیر',x:'متنی',g:'انتخاب نقص',e:'انتخاب احساس',r:'انتخاب اصل روحانی',p:'اهداف امروز'};
function mkX(ks){const W=XLSX.utils,tm={},A=[['تاریخ میلادی','تاریخ شمسی','کد سؤال','سؤال','پاسخ','توضیح']],B=[['تاریخ میلادی','تاریخ شمسی','ثبت‌شده','یادداشت روز','مرور شب']],P=[['تاریخ میلادی','تاریخ شمسی','کد کار','کار','وضعیت','دلیل']],GS=[['تاریخ میلادی','تاریخ شمسی','کد هدف','هدف','قدم']],GD=[['تاریخ میلادی','تاریخ شمسی','کد هدف','هدف']];S.tasks.forEach(t=>tm[t.id]=t.t);
ks.forEach(k=>{const d=S.days[k],f=fdj(k,1);(d.s||[]).forEach(r=>GS.push([k,f,String(r.g),r.gt,r.t]));(d.gd||[]).forEach(x=>{const g=gOf(x);GD.push([k,f,String(x),g?g.t:''])});B.push([k,f,d.sv?'بله':'',d.note||'',d.done?'بله':'']);Q.forEach(q=>{const a=d.a[q.id];if(a&&(a.v!==undefined||a.n||(a.g&&a.g.length)))A.push([k,f,q.id,q.t,a.g&&a.g.length?a.g.join('، '):a.v===1?'بله':a.v===0?'خیر':'',a.n||''])});Object.keys(d.p||{}).forEach(id=>{const p=d.p[id];if(p.d!==undefined||p.w)P.push([k,f,id,tm[id]||'',p.d===1?'انجام شد':p.d===0?'انجام نشد':'',p.w||''])})});
const wb=W.book_new();[['تراز',A,[12,16,8,50,8,40]],['روزها',B,[12,16,8,50,8]],['برنامه',P,[12,16,10,30,12,40]],['قدم‌ها',GS,[12,16,14,30,40]],['اهداف روزانه',GD,[12,16,14,40]],['کارها',[['کد','کار','حذف‌شده','فقط برای روز']].concat(S.tasks.map(t=>[String(t.id),t.t,t.x?'بله':'',t.day||''])),[14,40,10,12]],['اهداف',[['کد','هدف','وضعیت','تاریخ هدف','نوع','یادداشت','قدم‌ها','شمارش','تعداد روز']].concat(S.goals.map(g=>[String(g.id),g.t,GST[g.st||'a'],g.due||'',g.ty||'',g.n||'',(g.steps||[]).map(s=>(s.d?'✓ ':'○ ')+s.t).join('\n'),g.per=='m'?'ماهانه':'هفتگی',gN(g)])),[14,40,14,12,10,40,50,10,10]],['سؤال‌ها',[['کد','متن سؤال','عنوان کوتاه','نوع','«بله» یعنی نقطه‌ضعف','عنوان بخش']].concat(Q.map(q=>[q.id,q.t,q.d||'',QK[q.k]||q.k,q.b?'بله':'',q.h||''])),[8,60,24,16,10,24]],['فهرست‌ها',[['نواقص','احساسات','اصول روحانی']].concat(Array.from({length:Math.max(DEF.length,EMO.length,PRI.length)},(_,i)=>[DEF[i]||'',EMO[i]||'',PRI[i]||''])),[20,20,20]],['تنظیمات',[['ساعت یادآوری',S.time],['تاریخ پاکی',S.clean||'']],[16,12]]].forEach(s=>{const ws=W.aoa_to_sheet(s[1]);ws['!cols']=s[2].map(w=>({wch:w}));W.book_append_sheet(wb,ws,s[0])});
wb.Workbook={Views:[{RTL:true}]};return new Blob([XLSX.write(wb,{bookType:'xlsx',type:'array'})],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})}
async function impX(f){if(!f)return;MSG='';try{const wb=XLSX.read(await f.arrayBuffer(),{type:'array'}),R=n=>wb.Sheets[n]?XLSX.utils.sheet_to_json(wb.Sheets[n],{header:1,raw:true,defval:''}).slice(1):[],nd=s=>String(s==null?'':s).replace(/[۰-۹]/g,c=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(c)).trim();
const pd=(a,b)=>{if(typeof a=='number'&&a>20000)return iso(Math.round((a-25569)*864e5)+432e5);let v=nd(a),m;if(/^\d{4}-\d\d-\d\d/.test(v))return +v.slice(0,4)>1700?v.slice(0,10):j2g(+v.slice(0,4),+v.slice(5,7),+v.slice(8,10));v=nd(b);if(m=v.match(/^(\d{4})[\/-](\d{1,2})[\/-](\d{1,2})$/))return j2g(+m[1],+m[2],+m[3]);if((m=v.match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/))&&MN.includes(m[2]))return j2g(+m[3],MN.indexOf(m[2])+1,+m[1]);return null};
const N={},en=k=>N[k]||(N[k]={a:{},p:{}}),id=x=>isNaN(+x)?String(x):+x;let sk=0;
// سؤال‌ها و فهرست‌های فایل (اگر هست) اول خوانده می‌شوند تا جواب‌ها با همان سؤال‌ها جور شوند
const FQ=R('سؤال‌ها').filter(r=>r[0]!==''&&r[1]!=='').map(r=>{const q={id:String(r[0]),t:String(r[1]),d:String(r[2]||r[1]),k:Object.keys(QK).find(k=>QK[k]==nd(r[3]))||(QK[nd(r[3])]?nd(r[3]):'y'),b:nd(r[4])=='بله'?1:0};if(r[5])q.h=String(r[5]);return q}),FL=R('فهرست‌ها'),col=i=>FL.map(r=>String(r[i]||'').trim()).filter(Boolean),QQ=FQ.length?FQ:Q;
R('تراز').forEach(r=>{const k=pd(r[0],r[1]),q=QQ.find(x=>x.id==r[2])||QQ.find(x=>x.t==r[3]);if(!k||!q)return sk++;const a=en(k).a[q.id]={},v=nd(r[4]);if(v=='بله')a.v=1;else if(v=='خیر')a.v=0;if(r[5])a.n=String(r[5]);if(CHIPS(q.k)&&v)a.g=v.split(/[،,]/).map(x=>x.trim()).filter(Boolean)});
// فایل‌های نسخه‌های قبل ستون «امتیاز» هم داشتند
const ro=wb.Sheets['روزها']&&String((XLSX.utils.sheet_to_json(wb.Sheets['روزها'],{header:1})[0]||[])[2]||'')=='امتیاز'?1:0;
R('روزها').forEach(r=>{const k=pd(r[0],r[1]);if(!k)return;const d=en(k);if(nd(r[2+ro]))d.sv=Date.now();if(r[3+ro])d.note=String(r[3+ro]);if(nd(r[4+ro]))d.done=1});
R('قدم‌ها').forEach(r=>{const k=pd(r[0],r[1]);if(!k||r[2]==='')return sk++;const d=en(k);(d.s||(d.s=[])).push({g:id(r[2]),s:0,gt:String(r[3]),t:String(r[4])})});
R('اهداف روزانه').forEach(r=>{const k=pd(r[0],r[1]);if(!k||r[2]==='')return sk++;const d=en(k);(d.gd||(d.gd=[])).push(id(r[2]))});R('برنامه').forEach(r=>{const k=pd(r[0],r[1]);if(!k||r[2]==='')return sk++;const p=en(k).p[String(r[2])]={},v=nd(r[4]);if(v=='انجام شد')p.d=1;else if(v=='انجام نشد')p.d=0;if(r[5])p.w=String(r[5])});
const T=R('کارها').filter(r=>r[0]!=='').map(r=>{const t={id:id(r[0]),t:String(r[1])};if(nd(r[2])=='بله')t.x=1;const dy=r[3]!==undefined&&r[3]!==''?pd(r[3],''):null;if(dy)t.day=dy;return t}),gOld=wb.Sheets['اهداف']&&String((XLSX.utils.sheet_to_json(wb.Sheets['اهداف'],{header:1})[0]||[])[2]||'')=='نوع',
// فایل‌های نسخه‌های قبل ستون «پیشرفت» داشتند و قدم نداشتند
G=R('اهداف').filter(r=>r[0]!=='').map((r,gi)=>{if(gOld)return{id:id(r[0]),t:String(r[1]),ty:r[2]=='بلندمدت'?'بلندمدت':'سالانه',pr:+r[3]||0,n:String(r[4]||'')};const g={id:id(r[0]),t:String(r[1]),st:Object.keys(GST).find(k=>GST[k]==nd(r[2]))||'a',n:String(r[5]||''),steps:String(r[6]||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean).map((x,i)=>({id:Date.now()+gi*1000+i,t:x.replace(/^[✓○]\s*/,''),d:x[0]=='✓'?1:0}))},du=r[3]!==''?pd(r[3],''):null;if(du)g.due=du;if(r[4])g.ty=String(r[4]);if(r[7]!==undefined&&r[7]!==''){g.per=nd(r[7])=='ماهانه'?'m':'w';g.dn=+nd(r[8])||(g.per=='m'?12:3)}if(!g.n)delete g.n;return g}),ts=R('تنظیمات')[0];
if(!Object.keys(N).length&&!T.length&&!G.length)throw 0;const SR={};R('تنظیمات').forEach(r=>SR[nd(r[0])]=r[1]);const cl=SR['تاریخ پاکی']?pd(SR['تاریخ پاکی'],''):null;PI={N,sk,T,G,hs:!!wb.Sheets['قدم‌ها'],hg:!!wb.Sheets['اهداف روزانه'],ts:ts&&/^\d\d:\d\d$/.test(nd(ts[1]))?nd(ts[1]):null,FQ,FL:FL.length?[col(0),col(1),col(2)]:null,cl};draw()}catch(e){MSG='فایل معتبر نیست؛ باید Excel خروجی همین برنامه باشد.';draw()}}
// کارها و اهداف فایل با همان کد جایگزین و موارد جدید اضافه می‌شوند؛ بقیه دست نمی‌خورند
const mrg=(L,N)=>N.forEach(x=>{const i=L.findIndex(y=>y.id==x.id);if(i<0)L.push(x);else L[i]=x});
function applyX(){const p=PI;PI=null;Object.keys(p.N).forEach(k=>{const o=S.days[k];if(!p.hs&&o&&o.s)p.N[k].s=o.s;if(!p.hg&&o&&o.gd)p.N[k].gd=o.gd;S.days[k]=p.N[k]});mrg(S.tasks,p.T);mrg(S.goals,p.G);if(p.ts)S.time=p.ts;if(p.cl)S.clean=p.cl;
// سؤال‌ها و فهرست‌ها: اگر با پیش‌فرض یکی بود، نسخه‌ی ویرایش‌شده نگه داشته نمی‌شود
const same=(a,b)=>JSON.stringify(a)==JSON.stringify(b);if(p.FQ&&p.FQ.length){if(same(p.FQ.map(q=>[q.id,q.t,q.d,q.k,q.b,q.h||'']),Q0.map(q=>[q.id,q.t,q.d,q.k,q.b,q.h||''])))delete S.qs;else S.qs=p.FQ}if(p.FL){[['def',DEF0],['emo',EMO0],['pri',PRI0]].forEach(([n,d],i)=>{const L=p.FL[i];if(!L.length)return;if(same(L,d))delete S[n];else S[n]=L})}syncQ();migrate();mig8();syncQ();relink();save();remSync();MSG='ورود انجام شد.';draw()}
async function impJ(f){if(!f)return;MSG='';try{const o=JSON.parse(await f.text());if(!o||typeof o.days!='object')throw 0;PR=o}catch(e){MSG='فایل پشتیبان معتبر نیست.'}draw()}
async function pages(ks,from,to){await document.fonts.load('400 20px YekanX');await document.fonts.load('700 20px YekanX');
const W=1240,H=1754,M=80,out=[],cv=document.createElement('canvas'),cx=cv.getContext('2d');cv.width=W;cv.height=H;let y,pn=0;
const np=()=>{cx.fillStyle='#fff';cx.fillRect(0,0,W,H);cx.direction=LG=='en'?'ltr':'rtl';cx.textAlign=LG=='en'?'left':'right';cx.textBaseline='top';y=M;pn++},
fin=()=>{cx.font='400 20px YekanX,Vazirmatn,Tahoma,sans-serif';cx.fillStyle='#888';cx.textAlign='center';cx.fillText(nf(pn),W/2,H-60);cx.textAlign=LG=='en'?'left':'right';const b=atob(cv.toDataURL('image/jpeg',.85).split(',')[1]),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);out.push(u)};
const L=(t,sz,b,col,ind,gap,raw)=>{const f=(b?'700 ':'400 ')+sz+'px YekanX,Vazirmatn,Tahoma,sans-serif',mw=W-2*M-(ind||0),ln=[];let c='';cx.font=f;(LG=='en'&&!raw?trS(String(t)):String(t)).split(/\s+/).forEach(w=>{const tt=c?c+' '+w:w;if(cx.measureText(tt).width>mw&&c){ln.push(c);c=w}else c=tt});if(c)ln.push(c);ln.forEach(l=>{if(y+sz*1.7>H-M-30){fin();np()}cx.font=f;cx.fillStyle=col||'#222';cx.fillText(l,LG=='en'?M+(ind||0):W-M-(ind||0),y);y+=sz*1.7});y+=gap||0};
np();L('تراز‌نامه‌ی قدم دهم',46,1,'#2f6f5e',0,6);if(uname())L(uname(),30,1,'#333',0,4,1);L('بازه: '+fdj(from)+(LG=='en'?' to ':' تا ')+fdj(to),26,0,'#555',0,14);
const na=ks.filter(k=>hasA(S.days[k])).length;
if(na){L('روزهای دارای پاسخ: '+nf(na),28,1,'#222',0,8);
const bd=defStats(ks).map(x=>[x.q.d,x.r]);
if(bd.length)L('نواقص پرتکرار: '+bd.slice(0,6).map(x=>x[0]+' '+nf(Math.round(x[1]*100))+'٪').join('، '),24,0,'#b5483a',0,8)}
ks.forEach(k=>{const d=S.days[k];y+=12;cx.fillStyle='#e3e0d8';cx.fillRect(M,y,W-2*M,2);y+=14;
L(fd(k),28,1,'#2f6f5e',0,4);
dfs(d).forEach(x=>L('• '+x.l+(x.n?': '+x.n:''),24,0,'#b5483a',20));
const ps=Q.filter(q=>q.k=='y'&&!q.b&&d.a[q.id]&&d.a[q.id].v===1).map(q=>q.d);if(ps.length)L('نقاط قوت: '+ps.join('، '),24,0,'#2f6f5e',20);
if(d.gd&&d.gd.length)L('اهداف انجام‌شده: '+d.gd.map(x=>{const g=gOf(x);return g?g.t:''}).filter(Boolean).join('، '),24,0,'#2f6f5e',20);
const es=[];Q.forEach(q=>{if(q.k=='e'){const a=d.a[q.id];(a&&a.g||[]).forEach(x=>es.push(x))}});if(es.length)L('احساسات: '+es.join('، '),24,0,'#555',20);
const rs=[];Q.forEach(q=>{if(q.k=='r'){const a=d.a[q.id];(a&&a.g||[]).forEach(x=>rs.push(x))}});if(rs.length)L('اصول روحانی: '+rs.join('، '),24,0,'#2f6f5e',20);
Q.filter(q=>q.k!='y'&&d.a[q.id]&&d.a[q.id].n).forEach(q=>L(q.d+': '+d.a[q.id].n,24,0,'#222',20));
if(d.note)L('یادداشت: '+d.note,24,0,'#222',20);
Object.keys(d.p||{}).forEach(id=>{const p=d.p[id];if(p.d===undefined)return;const t=S.tasks.find(x=>x.id==id);L((p.d?'انجام شد: ':'انجام نشد: ')+(t?t.t:'کار حذف‌شده')+(p.w?' — '+p.w:''),24,0,p.d?'#555':'#b5483a',20)})});
fin();return out}
function mkPDF(js,w,h){const e=new TextEncoder(),ps=[];let off=0;const xr=[],P=u=>{ps.push(u);off+=u.length},T=s=>P(e.encode(s)),O=(n,f)=>{xr[n]=off;T(n+' 0 obj\n');f();T('\nendobj\n')},N=js.length;T('%PDF-1.4\n');
O(1,()=>T('<< /Type /Catalog /Pages 2 0 R >>'));O(2,()=>T('<< /Type /Pages /Count '+N+' /Kids ['+js.map((_,i)=>(5+i*3)+' 0 R').join(' ')+'] >>'));
js.forEach((j,i)=>{const a=3+i*3,c='q 595 0 0 842 0 0 cm /I Do Q';O(a,()=>{T('<< /Type /XObject /Subtype /Image /Width '+w+' /Height '+h+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+j.length+' >>\nstream\n');P(j);T('\nendstream')});O(a+1,()=>T('<< /Length '+c.length+' >>\nstream\n'+c+'\nendstream'));O(a+2,()=>T('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /XObject << /I '+a+' 0 R >> >> /Contents '+(a+1)+' 0 R >>'))});
const xo=off,M=3+3*N;T('xref\n0 '+M+'\n0000000000 65535 f \n');for(let i=1;i<M;i++)T(String(xr[i]).padStart(10,'0')+' 00000 n \n');T('trailer\n<< /Size '+M+' /Root 1 0 R >>\nstartxref\n'+xo+'\n%%EOF');return new Blob(ps,{type:'application/pdf'})}
async function doExport(){MSG='';const ks=xr();if(!ks.length){MSG='در این بازه چیزی ثبت نشده است.';return draw()}const tag=X.from+'_'+X.to;
// خروجی فقط Excel است (PDF و JPG برداشته شد) تا همان فایل دوباره قابل ورود باشد
try{{await sv(mkX(ks),'step10-'+tag+'.xlsx');S.lb=Date.now();save();return draw()}const P=await pages(ks,X.from,X.to);
if(X.f=='jpg'){for(let i=0;i<P.length;i++)await sv(new Blob([P[i]],{type:'image/jpeg'}),'step10-'+tag+(P.length>1?'-p'+(i+1):'')+'.jpg')}else await sv(mkPDF(P,1240,1754),'step10-'+tag+'.pdf')}catch(e){MSG='ساخت خروجی ممکن نشد.';draw()}}

let REC=null,RT=null;
const VDB=()=>new Promise((res,rej)=>{const r=indexedDB.open('s10v',1);r.onupgradeneeded=()=>r.result.createObjectStore('v',{keyPath:'id'});r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
async function vAll(day){const db=await VDB();return new Promise(res=>{const q=db.transaction('v').objectStore('v').getAll();q.onsuccess=()=>res(q.result.filter(x=>!day||x.day==day).sort((a,b)=>a.ts-b.ts));q.onerror=()=>res([])})}
async function vPut(o){const db=await VDB();return new Promise((res,rej)=>{const t=db.transaction('v','readwrite');t.objectStore('v').put(o);t.oncomplete=res;t.onerror=rej})}
async function vDel(id){const db=await VDB();return new Promise(res=>{const t=db.transaction('v','readwrite');t.objectStore('v').delete(id);t.oncomplete=res;t.onerror=res})}
// ذخیره‌ی یادداشت صوتی: اول نام فایل پرسیده می‌شود، بعد صدا به MP3 تبدیل می‌شود (کتابخانه‌ی lamejs فقط همین موقع بار می‌شود)
async function toMp3(blob){if(!window.lamejs)await new Promise((res,rej)=>{const s=document.createElement('script');s.src='lib/lame.min.js';s.onload=res;s.onerror=rej;document.head.appendChild(s)});
const ac=new(window.AudioContext||window.webkitAudioContext)(),buf=await ac.decodeAudioData(await blob.arrayBuffer());try{ac.close()}catch(e){}
const n=buf.length,nc=buf.numberOfChannels,pcm=new Int16Array(n);for(let c=0;c<nc;c++){const d=buf.getChannelData(c);for(let i=0;i<n;i++)pcm[i]+=Math.max(-1,Math.min(1,d[i]/nc))*32767}
const enc=new lamejs.Mp3Encoder(1,buf.sampleRate,96),out=[],push=b=>{if(b.length)out.push(new Uint8Array(b.buffer,b.byteOffset,b.length))};
for(let i=0;i<n;i+=1152)push(enc.encodeBuffer(pcm.subarray(i,i+1152)));push(enc.flush());return new Blob(out,{type:'audio/mpeg'})}
async function vSave(id){const v=(await vAll()).find(x=>x.id==id);if(!v)return;const t=new Date(v.ts),def='voice-'+v.day+'-'+String(t.getHours()).padStart(2,'0')+String(t.getMinutes()).padStart(2,'0');
const o=document.createElement('div');o.className='ov';document.body.appendChild(o);
o.innerHTML=`<div class="c" style="width:100%;max-width:360px;margin:0"><div class="q" style="font-weight:700">ذخیره‌ی یادداشت صوتی</div><div class="mu">یک نام برای فایل بنویس؛ با فرمت MP3 در پوشه‌ی Download/Step10 ذخیره می‌شود.</div><input id="vn" maxlength="60" value="${esc(def)}" style="margin-top:8px"><div class="mu" id="vmsg"></div><div class="r"><button class="b p" data-vok>ذخیره</button><button class="b" data-vx>انصراف</button></div></div>`;
if(LG=='en')tr(o);const inp=o.querySelector('#vn');inp.focus();inp.select();
const go=async()=>{const nm=(inp.value.trim()||def).replace(/[\\/:*?"<>|]/g,'_').replace(/\.mp3$/i,'');o.querySelectorAll('button,input').forEach(b=>b.disabled=true);o.querySelector('#vmsg').textContent=trS('در حال تبدیل به MP3...');await new Promise(r=>setTimeout(r,30));
try{await sv(await toMp3(v.blob),nm+'.mp3')}catch(e){const ty=v.blob.type||'';await sv(v.blob,nm+'.'+(ty.includes('mp4')?'m4a':ty.includes('ogg')?'ogg':'webm'))}o.remove()};
inp.onkeydown=e=>{if(e.key=='Enter'){e.preventDefault();go()}};
o.onclick=e=>{e.stopPropagation();const b=e.target.closest('button');if(e.target===o||(b&&b.dataset.vx!==undefined))return o.remove();if(b&&b.dataset.vok!==undefined)go()}}
function recCard(){return `<div class="c"><button class="b bi ${REC?'n':'p'}" data-rec style="width:100%">${svg(REC?'stop':'mic')}<span>${REC?'توقف و ذخیره':'یادداشت صوتی'}</span>${REC?'<span id="rt">0:00</span>':''}</button><div id="vl"></div></div>`}
async function recToggle(){if(REC){REC.stop();return}
// صدا به روزی وصل می‌شود که هنگام شروع ضبط باز بوده
const dd=cur;
try{const st=await navigator.mediaDevices.getUserMedia({audio:true}),ch=[],mr=new MediaRecorder(st),t0=Date.now();REC=mr;
mr.ondataavailable=e=>{if(e.data.size)ch.push(e.data)};
mr.onstop=async()=>{st.getTracks().forEach(t=>t.stop());clearInterval(RT);REC=null;const n=new Date();try{await vPut({id:n.getTime(),day:dd,ts:n.getTime(),dur:Math.round((n.getTime()-t0)/1000),blob:new Blob(ch,{type:mr.mimeType||'audio/webm'})})}catch(e){MSG='ذخیره‌ی صدا ممکن نشد.'}draw()};
mr.start();RT=setInterval(()=>{const e=document.getElementById('rt'),s=Math.round((Date.now()-t0)/1000);if(e)e.textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0')},500);draw()}
catch(e){REC=null;alert(trS('دسترسی به میکروفون ممکن نشد. اجازه‌ی میکروفون را در تنظیمات مرورگر یا اپ فعال کن.'))}}
async function vRender(){const el=document.getElementById('vl');if(!el)return;let L=[];try{L=await vAll(cur)}catch(e){}
if(!L.length){el.innerHTML='';return}
el.innerHTML=L.map(v=>{const u=URL.createObjectURL(v.blob),t=new Date(v.ts).toLocaleTimeString(LG=='en'?'en-GB':'fa-IR',{hour:'2-digit',minute:'2-digit'});return `<div class="row" style="margin-top:8px;flex-wrap:wrap"><span class="mu">${t} · ${Math.floor(v.dur/60)}:${String(v.dur%60).padStart(2,'0')}</span><audio controls src="${u}" style="flex:1;min-width:170px;height:36px"></audio><button class="b" data-vs="${v.id}">ذخیره</button><button class="b" data-vd="${v.id}">حذف</button></div>`}).join('');if(LG=='en')tr(el)}

// ---------- قفل برنامه (رمز عددی + اثر انگشت). رمز جدا از داده‌ها نگه داشته می‌شود تا داخل فایل بک‌آپ نرود
const LK=()=>{try{return JSON.parse(localStorage.getItem('s10lock')||'null')}catch(e){return null}};
const setLK=o=>{try{o?localStorage.setItem('s10lock',JSON.stringify(o)):localStorage.removeItem('s10lock')}catch(e){}};
async function hp(pin,salt){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(salt+':'+pin));return Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('')}
const bioOk=()=>{try{return !!(AN&&AN.bioAvailable())}catch(e){return false}};
let LOCKED=!!LK(),PIN='',LMSG='',LF=0,LW=0,FORGOT=0,PT=0,SMSG='';
function lockDraw(){const el=document.getElementById('lock');document.body.classList.toggle('lk',LOCKED);if(!LOCKED){el.hidden=true;el.innerHTML='';return}
const L=LK(),bio=L&&L.bio&&bioOk();el.hidden=false;
el.innerHTML=FORGOT?`<div class="lkb"><div class="lkt">رمز را فراموش کرده‌ای؟</div><div class="c" style="text-align:start">بدون رمز یا اثر انگشت، تنها راه پاک کردن همه‌ی داده‌های برنامه روی این گوشی است. فایل‌های بک‌آپ خودکار در پوشه‌ی Download/Step10 باقی می‌مانند و بعداً از تنظیمات ← «خروجی و پشتیبان» قابل بازگردانی‌اند.</div><button class="b n" data-wipe style="width:100%">پاک کردن همه‌ی داده‌ها</button><button class="b" data-fback style="width:100%;margin-top:8px">بازگشت</button></div>`
:`<div class="lkb"><div class="lkt">🔒 ${uname()?'<span data-u>'+esc(uname())+'</span>':'تراز‌نامه‌ی قدم دهم'}</div><div class="mu">${LMSG||'رمز را وارد کن'}</div><div class="dots">${PIN?'●'.repeat(PIN.length):'&nbsp;'}</div><div class="pad">${[1,2,3,4,5,6,7,8,9].map(n=>`<button data-pn="${n}">${dg(n)}</button>`).join('')}<span></span><button data-pn="0">${dg(0)}</button><button data-pb>⌫</button></div>${bio?'<button class="b p" data-bio style="width:100%">☝ ورود با اثر انگشت</button>':''}<button class="b" data-forgot style="width:100%;margin-top:8px;font-size:12px">رمز را فراموش کرده‌ام</button></div>`;
if(LG=='en')tr(el)}
function unlock(){LOCKED=false;PIN='';LMSG='';LF=0;FORGOT=0;draw();playCong()}
function bioAsk(){if(!bioOk())return;try{AN.bioAuth(trS('تراز‌نامه‌ی قدم دهم'),trS('برای ورود انگشتت را روی حسگر بگذار'),trS('ورود با رمز'))}catch(e){}}
window.S10bio=(ok,msg)=>{if(!LOCKED)return;if(ok)unlock();else if(msg){LMSG=msg;lockDraw()}};
async function pinTry(){const L=LK();if(!L)return unlock();if(await hp(PIN,L.s)===L.h)return unlock();LF++;PIN='';if(LF>=5){LW=Date.now()+30e3;LF=0;LMSG='چند بار اشتباه زدی؛ ۳۰ ثانیه صبر کن.'}else LMSG='رمز اشتباه است';lockDraw()}
async function lockClick(D){if(D.pn!==undefined){if(Date.now()<LW)return;if(PIN.length<8)PIN+=D.pn;LMSG='';const L=LK();lockDraw();if(L&&PIN.length>=L.n)await pinTry()}
else if(D.pb!==undefined){PIN=PIN.slice(0,-1);lockDraw()}
else if(D.bio!==undefined)bioAsk();
else if(D.forgot!==undefined){FORGOT=1;lockDraw()}
else if(D.fback!==undefined){FORGOT=0;lockDraw()}
else if(D.wipe!==undefined)await wipe()}
// خروج: همه‌ی داده‌های این گوشی پاک می‌شود و برنامه به صفحه‌ی ورود برمی‌گردد؛ پیش از آن گرفتن بک‌آپ پیشنهاد می‌شود
function outAsk(){const o=document.createElement('div');o.className='ov';document.body.appendChild(o);
// سه حالت: اطلاعاتی نیست، از آخرین تغییرات بک‌آپ گرفته شده، یا بک‌آپ نگرفته (اخطار پاک شدن)
const has=hasData(),backed=isBacked(),B=(c,d,x)=>`<button class="b ${c}" ${d} style="width:100%;margin-top:8px">${x}</button>`;
o.innerHTML=`<div class="c" style="width:100%;max-width:360px;margin:0"><div class="q" style="font-weight:700">خروج از برنامه</div>`+(!has?`<p class="mu" style="font-size:13px;margin:6px 0 10px">برنامه به صفحه‌ی ورود برمی‌گردد.</p>`+B('n','data-on data-arm="1"','خارج شو'):backed?`<p class="mu" style="font-size:13px;margin:6px 0 10px">از آخرین اطلاعاتت بک‌آپ گرفته‌ای. با خروج، همه‌ی اطلاعات این برنامه از روی این گوشی پاک می‌شود و برنامه به صفحه‌ی ورود برمی‌گردد. صداها داخل بک‌آپ نیستند.</p>`+B('n','data-on','خارج شو'):`<div class="ban wrn"><b>هنوز از اطلاعاتت بک‌آپ نگرفته‌ای!</b><br>با خروج، کلیه‌ی اطلاعاتت (ترازها، برنامه، اهداف، صداها، رمز و تنظیمات) از این گوشی پاک می‌شود و بدون فایل بک‌آپ قابل برگرداندن نیست. صداها داخل بک‌آپ نیستند.</div>`+B('p','data-ob','بک‌آپ بگیر و خارج شو')+B('n','data-on','بدون بک‌آپ خارج شو'))+`<div class="mu" id="omsg"></div>`+B('','data-ox','انصراف')+`</div>`;
if(LG=='en')tr(o);
o.onclick=async e=>{e.stopPropagation();const t=e.target.closest('button');if(e.target===o||(t&&t.dataset.ox!==undefined))return o.remove();if(!t)return;
// اطلاعات فقط وقتی پاک می‌شود که ذخیره‌ی فایل واقعاً موفق بوده باشد
if(t.dataset.ob!==undefined){const bs=o.querySelectorAll('button');bs.forEach(b=>b.disabled=true);if(await bkSave())setTimeout(wipe,1500);else{bs.forEach(b=>b.disabled=false);o.querySelector('#omsg').textContent=trS('بک‌آپ ذخیره نشد و چیزی پاک نشد. دوباره امتحان کن.')}}
else if(t.dataset.on!==undefined){if(arm(t))wipe()}}}
async function wipe(){try{localStorage.clear()}catch(e){}try{indexedDB.deleteDatabase('s10b');indexedDB.deleteDatabase('s10v');indexedDB.deleteDatabase('s10a')}catch(e){}try{AN&&AN.setReminder('21:30',false,'','')}catch(e){}try{AN&&AN.setWidget&&AN.setWidget('{}')}catch(e){}location.reload()}
// اپ اندروید موقع رفتن به پس‌زمینه/برگشتن این‌ها را صدا می‌زند؛ بعد از ۳۰ ثانیه دوری، دوباره قفل می‌شود
window.S10pause=()=>{PT=Date.now();abk()};
window.S10resume=()=>{const t=today();if(LT!==t){if(cur==LT)cur=t;LT=t}if(LK()&&!LOCKED&&PT&&Date.now()-PT>30e3){LOCKED=true;PIN='';LMSG='';FORGOT=0;draw();bioAsk()}else{draw();annCheck()}};
if(!AN)document.addEventListener('visibilitychange',()=>document.hidden?S10pause():S10resume());
window.S10back=()=>{const o=document.querySelector('.ov');if(o){o.remove();return true}if(LOCKED)return false;if(tab!='inv'){tab='inv';MSG='';draw();return true}return false};
const remSync=()=>{try{AN&&AN.setReminder(S.time,S.rem!==0,trS('🌙 وقت مرور شبانه است'),trS('تراز امروزت را ثبت کن.'))}catch(e){}};
const markDone=k=>{try{if(AN&&k==today())AN.markDone(k)}catch(e){}};
async function pinSet(){const L=LK(),v=id=>(document.getElementById(id)||{}).value||'',p0=v('p0'),p1=v('p1'),p2=v('p2');SMSG='';
if(L&&await hp(p0,L.s)!==L.h)SMSG='رمز فعلی درست نیست.';else if(!/^\d{4,8}$/.test(p1))SMSG='رمز باید ۴ تا ۸ رقم باشد.';else if(p1!==p2)SMSG='تکرار رمز یکسان نیست.';
else{const s=Array.from(crypto.getRandomValues(new Uint8Array(8)),x=>x.toString(16)).join('');setLK({s,h:await hp(p1,s),n:p1.length,bio:L?L.bio:bioOk()?1:0});SMSG='رمز ذخیره شد.'}draw()}
async function pinDel(){const L=LK(),p0=(document.getElementById('p0')||{}).value||'';if(L&&await hp(p0,L.s)!==L.h)SMSG='رمز فعلی درست نیست.';else{setLK(null);SMSG='قفل برداشته شد.'}draw()}
let OPEN={},NMSG='';
// ثبت‌نام: بار اول (یا بعد از پاک کردن داده‌ها) فقط نام پرسیده می‌شود (اصل گمنامی)
function regv(){return `<div class="lkb regw"><div style="text-align:end;margin-top:-6vh;margin-bottom:5vh"><button class="b" data-lgs="${LG=='en'?'fa':'en'}">${LG=='en'?'فارسی':'English'}</button></div><div class="lkt">🌱 خوش آمدی</div><div class="mu">برای شروع، فقط نامت (یا یک نام مستعار) را وارد کن؛ برای رعایت گمنامی نام خانوادگی لازم نیست. این نام فقط روی همین گوشی می‌ماند.</div>${NMSG?'<div class="ban">'+NMSG+'</div>':''}<div class="c" style="text-align:start"><input id="ufn" placeholder="نام یا نام مستعار" maxlength="40"><button class="b p" data-reg style="width:100%;margin-top:10px">ثبت نام و شروع</button></div><div class="mu">داده‌های قبلی داری؟ بعد از ورود، از تنظیمات ← «خروجی و پشتیبان» فایل بک‌آپ را بازگردانی کن.</div><div class="regf">ترازنامه قدم دهم<br>ابزار شخصی برای مرور روزانه</div></div>`}
// ویرایش نام در پنجره‌ی کوچک (با مداد کنار نام بالای صفحه)
function nameDlg(){const en=LG=='en',o=document.createElement('div');o.className='ov';o.innerHTML=`<div class="c" style="width:100%;max-width:360px" data-u><h2 style="margin:4px 2px 10px">${en?'My name':'نام من'}</h2><input id="ufn" maxlength="40" placeholder="${en?'Name or nickname':'نام یا نام مستعار'}" value="${esc(uname())}"><div class="mu" style="margin-top:6px">${en?'First name or a nickname only; it stays on this phone.':'فقط نام یا نام مستعار؛ فقط روی همین گوشی می‌ماند.'}</div><div class="r" style="margin-top:12px"><button class="b p" data-nok style="flex:1">${en?'Save':'ذخیره'}</button><button class="b" data-ncx style="flex:1">${en?'Cancel':'انصراف'}</button></div></div>`;
const close=()=>o.remove();o.addEventListener('click',e=>{e.stopPropagation();const b=e.target.closest('button');if(e.target===o||(b&&b.dataset.ncx!==undefined))return close();if(b&&b.dataset.nok!==undefined){const i=o.querySelector('#ufn');if(nameSave()){save();close();draw()}else{i.classList.remove('shk');i.offsetWidth;i.classList.add('shk');i.focus()}}});
o.querySelector('#ufn').addEventListener('keydown',e=>{if(e.key=='Enter'){e.preventDefault();o.querySelector('[data-nok]').click()}});document.body.appendChild(o);setTimeout(()=>{const i=o.querySelector('#ufn');i.focus();i.select()},50)}
function nameSave(){const fn=((document.getElementById('ufn')||{}).value||'').trim().replace(/\s+/g,' ');
if(!fn){NMSG='نام را وارد کن.';return false}S.user={fn};NMSG='';return true}
// تنظیمات: یک صفحه با بخش‌های آکاردئونی؛ با باز شدن هر بخش بقیه بسته می‌شوند. پیام (SMSG) در همان بخش باز نشان داده می‌شود
const sec=(id,ic,title,body)=>`<details class="c acc" data-sec="${id}" ${OPEN[id]?'open':''}><summary>${svg(ic)}<span>${title}</span></summary><div class="accb">${OPEN[id]&&SMSG?'<div class="ban">'+SMSG+'</div>':''}${body}</div></details>`;
// تنظیم ویجت صفحه‌ی اصلی (فقط در اپ اندروید): رنگ نوشته و زمینه، با پیش‌نمایش روی یک «کاغذدیواری» ساختگی
// ساعت با رنگ‌های لوگو، مثل ویجت واقعی: صفحه‌ی سبزآبی تیره، ۱۲ نشانه‌ی زرد، عقربه‌های سفید (ساعت ۱۰:۱۰)
const WCLK='<svg viewBox="0 0 64 64" class="wck" aria-hidden="true"><circle cx="32" cy="32" r="28.5" fill="#24506B" stroke="#9FC3D9" stroke-width="1.6"/><path d="'+Array.from({length:12},(_,i)=>{const a=Math.PI*i/6,r=i%3?20.5:17.5;return `M${(32+r*Math.sin(a)).toFixed(2)},${(32-r*Math.cos(a)).toFixed(2)}L${(32+25.5*Math.sin(a)).toFixed(2)},${(32-25.5*Math.cos(a)).toFixed(2)}`}).join('')+'" stroke="#F2C14E" stroke-width="2.4" stroke-linecap="round"/><path d="M32 32L21.6 26" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/><path d="M32 32L45.5 18.5" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><circle cx="32" cy="32" r="3" fill="#F2C14E"/></svg>';
const WLOGO='<svg viewBox="0 0 48 48" class="wlg" aria-hidden="true"><path fill="#F2C14E" d="M14,32a10,10 0 0 1 20,0z"/><path stroke="#F2C14E" stroke-width="2.6" stroke-linecap="round" d="M36.35,30.04L41.78,29.18 M32.84,23.16L36.73,19.27 M25.96,19.65L26.82,14.22 M22.04,19.65L21.18,14.22 M15.16,23.16L11.27,19.27 M11.65,30.04L6.22,29.18"/><path stroke="currentColor" stroke-width="3" stroke-linecap="round" d="M7,34h34"/></svg>';
function wdv(){const en=LG=='en',f=S.ui.wf||'w',b=S.ui.wb||'n',c=S.clean?cleanDiff(S.clean):null,n=x=>c?String(x):'–',bc=b=='w'?'#fff':b=='k'?'#111':b=='a'?(PAL[S.ui.pal]||PAL.g)[1][0]:'transparent';
const sg=(id,k,L)=>`<div class="seg" id="sg-${id}"><span class="sk"></span>${L.map(x=>`<button class="${k==x[0]?'on':''}" data-${id}="${x[0]}">${x[1]}</button>`).join('')}</div>`;
return `<div data-u><div class="wpv" style="background:${f=='k'?'#d9d3c7':'#2c4a5c'}"><div class="wdg" style="color:${f=='k'?'#111':'#fff'};background:${bc}">${WCLK}<div class="wc"><b>JUST</b><span>${n(c&&c.y)}</span></div><div class="wc"><b>FOR</b><span>${n(c&&c.m)}</span></div><div class="wc"><b>TODAY</b><span>${n(c&&c.d)}</span></div>${WLOGO}</div></div>
<div class="mu">${en?'Text color':'رنگ نوشته'}</div>${sg('wf',f,[['w',en?'White':'سفید'],['k',en?'Black':'مشکی']])}
<div class="mu" style="margin-top:8px">${en?'Background':'زمینه'}</div>${sg('wb',b,[['n',en?'None':'بی‌زمینه'],['w',en?'White':'سفید'],['k',en?'Black':'مشکی'],['a',en?'App color':'رنگ برنامه']])}
<div class="mu" style="margin-top:10px">${en?'Years, months and days clean appear under JUST, FOR and TODAY. To add it: touch and hold an empty spot on the home screen → Widgets → Taraz. Tapping the widget opens the app (with your lock, if it is on).':'زیر JUST و FOR و TODAY به ترتیب سال، ماه و روز پاکی می‌آید. برای گذاشتن ویجت: انگشتت را روی جای خالی صفحه‌ی اصلی گوشی نگه دار ← «ویجت‌ها» ← «تراز». با زدن روی ویجت برنامه باز می‌شود (اگر قفل روشن باشد، اول رمز یا اثر انگشت).'}</div></div>`}
function setv(){const L=LK(),bio=bioOk(),at=+(localStorage.getItem('s10abt')||0),th=S.ui.th||'auto';let ver='';try{ver=AN?AN.version():''}catch(e){}
// زبان با دو دکمه‌ی کوچک کنار عنوان؛ نام از دکمه‌ی مداد کنار نام بالای صفحه عوض می‌شود
let h=`<div class="row sth"><h2 style="flex:1">تنظیمات</h2><div class="seg lgsw" id="sg-lg" data-u><span class="sk"></span><button class="${LG!='en'?'on':''}" data-lgs="fa" aria-label="فارسی">فا</button><button class="${LG=='en'?'on':''}" data-lgs="en" aria-label="English">EN</button></div></div>`;
// ترتیب: پاکی، خروجی و پشتیبان، ظاهر، مقدمه، بعد بقیه
h+=sec('cl','clean',LG=='en'?'Clean time':'روزشمار پاکی',cleanv());
h+=sec('x','bak','خروجی و پشتیبان',xp());
h+=sec('a','pal','ظاهر برنامه',`<div class="mu">رنگ برنامه (تم با دکمه‌ی بالای صفحه: پیش‌فرض گوشی، روشن یا تیره)</div><div class="pal">${Object.keys(PAL).map(k=>{const c=PAL[k][isDark()?2:1][0];return `<button class="sw ${(S.ui.pal||'g')==k?'on':''}" data-pal="${k}" style="--c:${c}" aria-label="${PAL[k][0]}" title="${PAL[k][0]}"></button>`}).join('')}</div>`);
if(AN)h+=sec('w','wid',LG=='en'?'Home-screen widget':'ویجت صفحه‌ی اصلی',wdv());
h+=sec('i','play','مقدمه‌ی ورود',`<label class="ck"><input type="checkbox" data-intro ${S.ui.intro!==0?'checked':''}> نمایش مقدمه هنگام باز شدن برنامه</label><label class="ck"><input type="checkbox" data-isnd ${S.ui.isnd!==0?'checked':''}> پخش صدا</label><label class="ck"><input type="checkbox" data-itxt ${S.ui.itxt!==0?'checked':''}> نمایش جمله</label><div class="mu" style="margin-top:8px">جمله‌ی دلخواه (اگر خالی بماند، جمله‌ی پیش‌فرض نمایش داده می‌شود):</div><textarea data-isent maxlength="200" placeholder="یک لحظه صبر کن؛ با خودت روبرو شو.">${esc(S.ui.itext)}</textarea><div class="mu" style="margin-top:10px">صدای مقدمه: ${S.ui.iaud?'فایل انتخابی تو':'صدای پیش‌فرض برنامه'}</div><input type="file" accept="audio/*" data-iaud style="margin-top:6px">${S.ui.iaud?'<div class="r"><button class="b" data-iar>بازگشت به صدای پیش‌فرض</button></div>':''}<div class="r"><button class="b p" data-ipv>پیش‌نمایش مقدمه</button></div>`);
h+=sec('l','lock','قفل برنامه',`<div class="mu">${L?'قفل روشن است. برای تغییر یا برداشتن، اول رمز فعلی را وارد کن.':'با رمز، هر بار که برنامه باز می‌شود رمز یا اثر انگشت خواسته می‌شود.'}</div>${L?'<input type="password" inputmode="numeric" maxlength="8" id="p0" placeholder="رمز فعلی">':''}<input type="password" inputmode="numeric" maxlength="8" id="p1" placeholder="رمز جدید (۴ تا ۸ رقم)"><input type="password" inputmode="numeric" maxlength="8" id="p2" placeholder="تکرار رمز جدید"><div class="r"><button class="b p" data-pset>${L?'تغییر رمز':'تنظیم رمز'}</button>${L?'<button class="b" data-pdel>برداشتن قفل</button>':''}</div>${L&&bio?`<label class="ck"><input type="checkbox" data-pbio ${L.bio?'checked':''}> ورود با اثر انگشت</label>`:L&&AN?'<div class="mu">اثر انگشت روی این گوشی در دسترس نیست (یا هنوز در تنظیمات گوشی ثبت نشده).</div>':''}`);
h+=sec('r','bell','یادآوری شب',`<label class="ck"><input type="checkbox" data-rem ${S.rem!==0?'checked':''}> یادآوری روشن باشد</label><div class="row"><span class="mu" style="white-space:nowrap">ساعت یادآوری شب</span><input type="time" value="${S.time}" data-time style="width:130px"></div><div class="mu">${AN?'هر شب سر این ساعت نوتیفیکیشن می‌آید، مگر اینکه تراز آن روز را ثبت کرده باشی.':'یادآوری فقط وقتی اپ باز است نمایش داده می‌شود؛ برای هشدار واقعی یک آلارم گوشی هم بگذار.'}</div>`);
// بک‌آپ خودکار به بخش «خروجی و پشتیبان» رفت (abv)
h+=sec('q','list',`سؤال‌های ترازنامه (${nf(Q.length)})`,`<div class="mu">تغییر سؤال‌ها روی پاسخ‌های قبلی اثری ندارد؛ پاسخ سؤال حذف‌شده پاک نمی‌شود ولی دیگر نمایش داده نمی‌شود.</div>`+Q.map((q,i)=>`<div class="qe"><div class="row"><b style="flex:1">${nf(i+1)}</b><button class="b" data-qm="${q.id}" data-dir="-1" ${i?'':'disabled'}>↑</button><button class="b" data-qm="${q.id}" data-dir="1" ${i<Q.length-1?'':'disabled'}>↓</button><button class="x" data-qx="${q.id}">✕</button></div><textarea data-qe="${q.id}" data-f="t" placeholder="متن سؤال">${esc(q.t)}</textarea><input data-qe="${q.id}" data-f="d" value="${esc(q.d)}" placeholder="عنوان کوتاه (برای گزارش)"><div class="row" style="margin-top:6px"><select data-qe="${q.id}" data-f="k" style="width:auto;flex:none">${[['y','بله / خیر'],['x','متنی'],['g','انتخاب نقص'],['e','انتخاب احساس'],['r','انتخاب اصل روحانی'],['p','اهداف امروز']].map(o=>`<option value="${o[0]}" ${q.k==o[0]?'selected':''}>${o[1]}</option>`).join('')}</select>${q.k=='y'?`<label class="ck"><input type="checkbox" data-qe="${q.id}" data-f="b" ${q.b?'checked':''}> «بله» یعنی نقص</label>`:''}</div><input data-qe="${q.id}" data-f="h" value="${esc(q.h||'')}" placeholder="عنوان بخش قبل از این سؤال (اختیاری)" style="margin-top:6px"></div>`).join('')+`<div class="r"><button class="b p" data-qa>+ سؤال جدید</button>${S.qs?'<button class="b" data-qr0>بازگشت به سؤال‌های پیش‌فرض</button>':''}</div>`);
h+=sec('d','warn',`لیست نواقص (${nf(DEF.length)})`,`<div class="r">${DEF.map((x,i)=>`<span class="chip">${esc(x)}<button class="x" data-dx="${i}">✕</button></span>`).join('')}</div><div class="row"><input id="nd" placeholder="نقص جدید..."><button class="b p" data-da>افزودن</button></div>${S.def?'<div class="r"><button class="b" data-dr0>بازگشت به لیست پیش‌فرض</button></div>':''}`);
h+=sec('e','heart',`لیست احساسات (${nf(EMO.length)})`,`<div class="mu">گزینه‌های سؤالی که نوعش «انتخاب احساس» است.</div><div class="r">${EMO.map((x,i)=>`<span class="chip">${esc(x)}<button class="x" data-ex="${i}">✕</button></span>`).join('')}</div><div class="row"><input id="ne" placeholder="احساس جدید..."><button class="b p" data-ea>افزودن</button></div>${S.emo?'<div class="r"><button class="b" data-er0>بازگشت به لیست پیش‌فرض</button></div>':''}`);
h+=sec('pr','star',`لیست اصول روحانی (${nf(PRI.length)})`,`<div class="mu">گزینه‌های سؤالی که نوعش «انتخاب اصل روحانی» است.</div><div class="r">${PRI.map((x,i)=>`<span class="chip">${esc(x)}<button class="x" data-ppx="${i}">✕</button></span>`).join('')}</div><div class="row"><input id="npp" placeholder="اصل جدید..."><button class="b p" data-ppa>افزودن</button></div>${S.pri?'<div class="r"><button class="b" data-ppr0>بازگشت به لیست پیش‌فرض</button></div>':''}`);
// «انتقال سؤال‌ها به گوشی‌های دیگر» حذف شد؛ سؤال‌ها و فهرست‌ها حالا داخل فایل Excel هستند
h+=sec('h','help','راهنمای برنامه',helpb());
h+=sec('c','mail','ارتباط با ما',`<div class="mu">کانال برنامه در تلگرام:</div><a class="b p tg" href="https://t.me/Taraz10_app" target="_blank" rel="noopener" dir="ltr">Telegram: @Taraz10_app</a><div class="mu" style="margin-top:14px">پشتیبانی برنامه و کانال؛ برای سؤال، انتقاد یا پیشنهاد پیام بده:</div><a class="b tg" href="https://t.me/Taraz10_acc" target="_blank" rel="noopener" dir="ltr">Telegram: @Taraz10_acc</a>`);
// خروج از بالای صفحه به آخرین بخش تنظیمات آمد
h+=sec('o','out','خروج از برنامه',`<div class="mu">با خروج، همه‌ی داده‌های این گوشی پاک می‌شود و برنامه به صفحه‌ی خوش‌آمد برمی‌گردد. قبلش پیشنهاد گرفتن فایل پشتیبان داده می‌شود.</div><div class="r"><button class="b n" data-out style="width:100%">خروج از برنامه</button></div>`);
return h+`<div class="mu" style="text-align:center;margin:14px 8px 4px">ابزار شخصی برای مرور روزانه؛ وابسته به NA یا تأییدشده‌ی آن نیست. داده‌های هر نفر فقط روی گوشی خودش ذخیره می‌شود و برای هیچ‌کس ارسال نمی‌شود.</div>`+(ver?`<div class="mu" style="text-align:center">نسخه ${ver}</div>`:'')}
async function cfImp(f){if(!f)return;SMSG='';try{const o=JSON.parse(await f.text());if(!o||o.type!='step10-questions'||!Array.isArray(o.qs)||!o.qs.every(q=>q&&q.id&&q.t&&'yxgepr'.includes(q.k)))throw 0;S.qs=o.qs;if(Array.isArray(o.def))S.def=o.def;if(Array.isArray(o.emo))S.emo=o.emo;if(Array.isArray(o.pri))S.pri=o.pri;syncQ();save();SMSG='سؤال‌ها از فایل وارد شد.'}catch(e){SMSG='فایل تنظیمات سؤال‌ها معتبر نیست.'}draw()}
// ---------- راهنما (فارسی و انگلیسی جدا نوشته شده، نه با جایگزینی عبارت)
function helpb(){const en=LG=='en',ql='<ol>'+Q.map(q=>`<li>${esc(en?trS(q.t):q.t)}</li>`).join('')+'</ol>';return '<div data-u>'+HELP.map(x=>`<details class="hs"><summary>${en?x[1]:x[0]}</summary><div class="hb">${(en?x[3]:x[2]).replace('{{Q}}',ql)}</div></details>`).join('')+'</div>'}

// آیکون‌های تک‌رنگ منوی پایین (رنگ از متن می‌آید)
const IC={xx:'<path d="M6 6l12 12M18 6L6 18"/>',trash:'<path d="M4 7h16M9 7V4.5h6V7M6.5 7l1 13h9l1-13M10 11v6M14 11v6"/>',plus:'<path d="M12 5v14M5 12h14"/>',save:'<path d="M5 4h11l3 3v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>',pen:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',cl:'<path d="M15 6l-6 6 6 6"/>',cr:'<path d="M9 6l6 6-6 6"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
moon:'<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',auto:'<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor"/>',wid:'<rect x="3" y="6.5" width="18" height="11" rx="3"/><circle cx="8.3" cy="12" r="2.6"/><path d="M13 10.5h5M13 13.5h3.5"/>',fold:'<path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>',
mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/>',
pal:'<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10.5" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
lock:'<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0"/>',
bkp:'<path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 8a4 4 0 0 1-.5 10zM12 11v6M9.5 14.5L12 17l2.5-2.5"/>',
list:'<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
warn:'<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>',
heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6l8.5 7 8.5-7"/>',
stop:'<rect x="7" y="7" width="10" height="10" rx="2"/>',
star:'<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z"/>',
chk:'<path d="M6 12.5l4 4 8-9"/>',more:'<path d="M5 12h.01M12 12h.01M19 12h.01" stroke-width="3"/>',
pie:'<path d="M11 4a8.5 8.5 0 1 0 9 9h-9z"/><path d="M15 3.5a6 6 0 0 1 5.5 5.5H15z"/>',
play:'<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5.5 3.5-5.5 3.5z"/>',
clean:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9s1.3-6.4 3.8-9z"/>',
out:'<path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M10 8l-4 4 4 4M6 12h10"/>',inv:'<path d="M12 4v16M8 20h8M5 7h14M5 7l-2.5 6h5zM19 7l-2.5 6h5z"/><path d="M2.5 13a2.5 2.5 0 0 0 5 0M16.5 13a2.5 2.5 0 0 0 5 0"/>',read:'<path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5zM12 6.5v13"/>',plan:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',goal:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',his:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',rep:'<path d="M5 20V12M10 20V6M15 20v-9M20 20V9M3 20h18"/>',bak:'<path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 20h14"/>',set:'<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>'};
const svg=k=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
// «خروجی» از نوار پایین به تنظیمات رفت تا جا برای «پاکی» باز شود
const NAV=[['inv','ترازنامه'],['plan','برنامه'],['goal','اهداف'],['his','تاریخچه'],['rep','گزارش']];
const grow=t=>{t.style.height='auto';t.style.height=t.scrollHeight+2+'px'};
function draw(){lockDraw();if(LOCKED)return;draw0();if(tab=='inv')vRender();document.documentElement.dir=LG=='en'?'ltr':'rtl';document.documentElement.lang=LG=='en'?'en':'fa';if(LG=='en'){tr(document.getElementById('app'));tr(document.getElementById('nav'))}document.querySelectorAll('#app textarea:not(#bk)').forEach(grow);fx()}
// ---------- انیمیشن‌ها. صفحه با هر لمس از نو ساخته می‌شود، پس حالت قبلی (جای کپسول‌ها، پیشرفت حلقه، تب قبلی) نگه داشته می‌شود
// تا حرکت از همان‌جا شروع شود؛ فقط دکمه‌ای که همین الان لمس شده «می‌پرد»
let TAP='',SLD='',PTAB=null;const CAP={};let RINGP=null;
const buzz=()=>{try{navigator.vibrate&&navigator.vibrate(8)}catch(e){}};
const selOf=t=>{const k=Object.keys(t.dataset||{});return k.length?'button'+k.map(x=>`[data-${x.replace(/[A-Z]/g,m=>'-'+m.toLowerCase())}="${CSS.escape(t.dataset[x])}"]`).join(''):''};
const ti=t=>{const i=NAV.findIndex(x=>x[0]==t);return i<0?NAV.length:i};
let CAPT=0;function capFix(){document.querySelectorAll('#nav,.seg[id]').forEach(s=>{const k=s.querySelector(':scope>.sk'),b=s.querySelector(':scope>button.on');if(!k||!b||!s.offsetWidth)return;const x=b.offsetLeft,w=b.offsetWidth;k.style.transform=`translateX(${x}px)`;k.style.width=w+'px';CAP[s.id||'x']={x,w,o:1}})}
window.addEventListener('resize',()=>{clearTimeout(CAPT);CAPT=setTimeout(capFix,80)});
// سوایپ بین تب‌ها: کشیدن افقی روی صفحه (نه روی کادر نوشتن یا کلیدها). صفحه کمی با انگشت همراهی می‌کند؛
// اگر بیش از ۷۰ پیکسل و بیشتر افقی تا عمودی بود تب عوض می‌شود. در راست‌به‌چپ کشیدن به راست یعنی تب بعدی
(function(){let x0=0,y0=0,dx=0,on=0,lk=null;const pg=()=>document.querySelector('#app .pg'),idx=()=>NAV.findIndex(x=>x[0]==tab),dir=d=>(d>0)===(LG!='en')?1:-1;
document.addEventListener('touchstart',e=>{const t=e.target;on=0;if(e.touches.length>1||LOCKED||!S.user||idx()<0||document.querySelector('.ov,#intro:not([hidden])')||t.closest('input,textarea,select,.seg,.pie,.mrow,nav'))return;x0=e.touches[0].clientX;y0=e.touches[0].clientY;dx=0;lk=null;on=1},{passive:true});
document.addEventListener('touchmove',e=>{if(!on)return;dx=e.touches[0].clientX-x0;const dy=e.touches[0].clientY-y0;if(lk===null&&(Math.abs(dx)>12||Math.abs(dy)>12))lk=Math.abs(dx)>Math.abs(dy)*1.4?'h':'v';if(lk!='h')return;if(e.cancelable)e.preventDefault();const j=idx()+dir(dx),p=pg();if(p){p.style.transition='none';p.style.transform=`translateX(${dx*(j>=0&&j<NAV.length?.3:.08)}px)`}},{passive:false});
const end=()=>{if(!on)return;on=0;const p=pg();if(lk=='h'&&Math.abs(dx)>70){const j=idx()+dir(dx);if(j>=0&&j<NAV.length){if(p)p.style.transform='';tab=NAV[j][0];MSG='';SMSG='';NMSG='';window.scrollTo(0,0);buzz();draw();return}}if(p){p.style.transition='transform .25s';p.style.transform=''}};
document.addEventListener('touchend',end);document.addEventListener('touchcancel',end)})();
try{new ResizeObserver(()=>{const n=document.querySelector('#nav');if(n)n.classList.remove('go');capFix()}).observe(document.getElementById('nav'))}catch(e){}
function fx(){const app=document.getElementById('app');
// کپسول فنری: نوار پایین و همه‌ی کلیدهای چندگزینه‌ای
document.querySelectorAll('#nav,.seg[id]').forEach(s=>{const k=s.querySelector(':scope>.sk'),b=s.querySelector(':scope>button.on');if(!k)return;const id=s.id||'x',p=CAP[id];if(!b){k.style.opacity=0;return}
// نوار پنهان (صفحه‌کلید باز) اندازه ندارد؛ وقتی دوباره دیده شد ResizeObserver سر جایش می‌گذارد
if(!s.offsetWidth){delete CAP[id];return}
// اول بدون حرکت روی جای قبلی گذاشته می‌شود (go برداشته می‌شود)، بعد با فنر به جای تازه می‌رود؛ وگرنه از لبه‌ی نوار شروع می‌کرد
const x=b.offsetLeft,w=b.offsetWidth;s.classList.remove('go');if(p){k.style.transform=`translateX(${p.x}px)`;k.style.width=p.w+'px';k.style.opacity=p.o;k.offsetWidth;s.classList.add('go')}k.style.transform=`translateX(${x}px)`;k.style.width=w+'px';k.style.opacity=1;CAP[id]={x,w,o:1}});
const nb=document.querySelector('#nav>.sk');if(nb&&!document.querySelector('#nav>button.on'))CAP.nav={...(CAP.nav||{x:0,w:0}),o:0};
// اگر عرض صفحه کمی بعد عوض شد (نوار پیمایش، چرخش گوشی) کپسول‌ها سر جایشان بمانند
clearTimeout(CAPT);CAPT=setTimeout(capFix,80);
// حلقه‌ی پیشرفت از مقدار قبلی پر می‌شود
const r=document.getElementById('ring');if(r){const f=r.querySelector('.rf'),p=+r.dataset.p;if(RINGP&&RINGP.k==cur&&RINGP.p!=p){f.style.strokeDashoffset=100-RINGP.p*100;f.getBoundingClientRect();r.classList.add('go');f.style.strokeDashoffset=100-p*100}RINGP={k:cur,p}}
// صفحه از سمت تب تازه وارد می‌شود
const pg=app.querySelector('.pg');if(pg&&PTAB!==null&&PTAB!=tab){const f=ti(tab)>ti(PTAB);pg.classList.add((f!==(LG=='en'))?'fromL':'fromR')}PTAB=tab;
if(SLD){const s=document.getElementById('stw');if(s)s.classList.add(SLD);SLD=''}
if(TAP){const n=document.querySelector(TAP);if(n){n.classList.add('pp');const q=n.closest('.qc');if(q)q.classList.add('jst')}TAP=''}}
function draw0(){document.body.classList.toggle('reg',!S.user);document.body.classList.toggle('stpm',tab=='inv'&&S.ui.im=='s');if(!S.user){document.getElementById('nav').innerHTML='';document.getElementById('app').innerHTML=regv();return}
document.getElementById('nav').innerHTML='<span class="sk"></span>'+NAV.map(t=>`<button class="${tab==t[0]?'on':''}" data-tab="${t[0]}"><span class="ni">${svg(t[0])}</span>${t[1]}</button>`).join('');
document.getElementById('app').innerHTML='<div class="row hdr"><div style="flex:1;min-width:0"><div class="nmr"><h1 data-u>'+esc(uname())+'</h1>'+(tab=='set'?'<button class="nme" data-nme aria-label="edit name">'+svg('pen')+'</button>':'')+'</div><div class="mu hsub">تراز‌نامه‌ی قدم دهم</div></div><button class="b gear" data-tg aria-label="theme">'+svg(S.ui.th=='light'?'sun':S.ui.th=='dark'?'moon':'auto')+'</button><button class="b gear '+(tab=='set'||tab=='help'?'on':'')+'" data-tab="set" aria-label="settings">'+svg('set')+'</button></div><div class="pg">'+({inv,plan,goal:goals,his,rep,set:setv}[tab])()+'</div>'+(tab=='inv'&&S.ui.im!='s'?svb():'')}
const arm=t=>{if(t.dataset.arm)return true;t.dataset.arm=1;t.textContent=LG=='en'?'Sure?':'مطمئنی؟';return false};
document.addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;const D=t.dataset;
if(LOCKED){lockClick(D);return}
TAP=selOf(t);buzz();
// باز و بسته شدن کادر توضیح بدون ساختن دوباره‌ی صفحه، تا حرکت نرمش دیده شود
if(D.nto){const w=t.nextElementSibling,o=!w.classList.contains('on');w.classList.toggle('on',o);NOP[D.nto]=o;t.firstElementChild.textContent=o?'−':'+';if(o){const x=w.querySelector('textarea');if(x){grow(x);setTimeout(()=>x.focus(),250)}}TAP='';return}
if(D.im){S.ui.im=D.im=='s'?'s':'';IDX=0;save();draw();return}
if(D.stp){const s=+D.stp;if(s>0&&IDX>=Q.length-1){S.ui.im='';save();draw();const m=document.getElementById('sum');if(m)m.scrollIntoView({block:'start',behavior:'smooth'});return}IDX=Math.max(0,IDX+s);SLD=s>0?'sF':'sB';draw();return}
if(D.tab){const n=tab==D.tab&&D.tab=='set'?'inv':D.tab;if(tab!=n){MSG='';SMSG='';NMSG=''}tab=n;window.scrollTo(0,0)}else if(D.sh!==undefined){const d=new Date(cur+'T12:00');d.setDate(d.getDate()+ +D.sh);const k=dk(d);cur=k>today()?today():k}
// زدن دوباره روی گزینه‌ی انتخاب‌شده، جواب را برمی‌دارد
else if(D.q){const a=day(cur).a[D.q]||(day(cur).a[D.q]={});if(a.v===+D.v)delete a.v;else a.v=+D.v;
// در حالت یکی‌یکی بعد از جواب بله/خیر خودش به سؤال بعد می‌رود
if(tab=='inv'&&S.ui.im=='s'&&a.v!==undefined&&IDX<Q.length-1){const k=cur,i=IDX;setTimeout(()=>{if(tab=='inv'&&S.ui.im=='s'&&cur==k&&IDX==i){IDX++;SLD='sF';draw()}},480)}}
else if(D.t){const p=day(cur).p[D.t]||(day(cur).p[D.t]={});if(p.d===+D.v)delete p.d;else p.d=+D.v}
else if(D.dt){const x=S.tasks.find(x=>x.id==D.dt);if(x)x.x=1}
else if(D.pt){PLT=D.pt=='t'?'t':'h'}
else if(D.ih!==undefined){try{localStorage.setItem('s10pwah','1')}catch(e){}}
else if(D.rt){RTB=D.rt}
else if(D.rm!==undefined){RM=D.rm}
else if(D.ry!==undefined){RY=D.ry;RM=''}
else if(D.wf){S.ui.wf=D.wf}
else if(D.wb){S.ui.wb=D.wb}
else if(D.dg){if(!arm(t))return;S.goals=S.goals.filter(x=>x.id!=D.dg);GM=null}
else if(D.gm){GM=GM==D.gm?null:D.gm}
else if(D.gsc){const[a,b]=D.gsc.split(':');stepSet(a,b,today())}
else if(D.gq){gTick(D.gq,cur)}
else if(D.gsa){const i=document.getElementById('gs-'+D.gsa),v=i?i.value.trim():'',g=gOf(D.gsa);if(g&&v){g.steps.push({id:Date.now(),t:v,d:0});save();draw();const n=document.getElementById('gs-'+D.gsa);if(n)n.focus()}return}
else if(D.gsx){const[a,b]=D.gsx.split(':'),g=gOf(a);if(g)g.steps=g.steps.filter(x=>x.id!=b)}
else if(D.gst){const[a,b]=D.gst.split(':'),g=gOf(a);if(g){g.st=b;GM=null;if(b!='a')OPEN.gd=1}}
else if(D.gdue){const g=gOf(D.gdue);if(g)pick(g.due||today(),k=>{g.due=k;save();draw()},1);return}
else if(D.gdc){const g=gOf(D.gdc);if(g)delete g.due}
else if(D.addt!==undefined){const e=document.getElementById('nt'),v=e.value.trim();if(!v){e.classList.remove('shk');e.offsetWidth;e.classList.add('shk');e.focus();return}NEWT=Date.now();S.tasks.push(PLT=='t'?{id:NEWT,t:v,day:cur}:{id:NEWT,t:v});save();draw();const n=document.getElementById('nt');if(n)n.focus();return}
else if(D.addg!==undefined){const e=document.getElementById('gt'),v=e.value.trim();if(!v){e.classList.remove('shk');e.offsetWidth;e.classList.add('shk');e.focus();return}goalDlg(v);return}
else if(D.gtk){gTick(D.gtk,today())}
else if(D.gper){const[a,b]=D.gper.split(':'),g=gOf(a);if(g&&(g.per||'w')!=b){g.per=b;g.dn=b=='w'?Math.min(gN(g),7):Math.max(gN(g),4)}}
else if(D.gnd){const[a,b]=D.gnd.split(':'),g=gOf(a);if(g)g.dn=Math.max(1,Math.min((g.per||'w')=='w'?7:31,gN(g)+ +b))}
else if(D.done!==undefined){day(cur).done=1;markDone(cur)}
else if(D.rg){range=+D.rg}
else if(D.chart){CH[D.chart]=!CH[D.chart]}
else if(D.sv!==undefined){day(cur).sv=Date.now();markDone(cur);closing()}
else if(D.open){cur=D.open;tab='inv'}
else if(D.dl!==undefined){dl();return}
else if(D.out!==undefined){outAsk();return}
else if(D.ipv!==undefined){intro(()=>{},true);return}
else if(D.iar!==undefined){if(!arm(t))return;auDel();return}
else if(D.goclean!==undefined){tab='set';OPEN={cl:true};setTimeout(()=>{const s=document.querySelector('[data-sec=cl]');if(s)s.scrollIntoView({block:'start'})},30)}
else if(D.cls!==undefined){cleanSave()}
else if(D.cle!==undefined){CE=1;CMSG=''}
else if(D.clx!==undefined){CE=0;CMSG=''}
else if(D.cldel!==undefined){if(!arm(t))return;delete S.clean;delete S.ann;CE=0}
else if(D.mic){dictate(D.mic);return}
else if(D.lg!==undefined){LG=LG=='en'?'fa':'en';try{localStorage.setItem('lg',LG)}catch(e){}remSync()}
else if(D.pick!==undefined){pick(cur,k=>{cur=k;draw()});return}
else if(D.pk){pick(X[D.pk],k=>{X[D.pk]=k;if(X.from>X.to){const t=X.from;X.from=X.to;X.to=t}draw()});return}
else if(D.qr!==undefined){X.to=today();if(+D.qr){const d0=new Date();d0.setDate(d0.getDate()-(+D.qr-1));X.from=dk(d0)}else X.from=Object.keys(S.days).sort()[0]||today()}
else if(D.rec!==undefined){recToggle();return}
else if(D.g){const a=day(cur).a[D.g]||(day(cur).a[D.g]={}),L=a.g||(a.g=[]),i=L.indexOf(D.gv);if(i<0)L.push(D.gv);else L.splice(i,1)}
else if(D.vs){vSave(D.vs);return}
else if(D.vd){if(!arm(t))return;vDel(+D.vd).then(vRender);return}
else if(D.xf){X.f=D.xf}
else if(D.go!==undefined){doExport();return}
else if(D.ok!==undefined){applyX();return}
else if(D.no!==undefined){PI=null}
else if(D.imp!==undefined){try{const o=JSON.parse(document.getElementById('bk').value);if(!o||typeof o.days!='object')throw 0;PR=o}catch(x){MSG=trS('متن پشتیبان معتبر نیست')}draw();return}
else if(D.pro!==undefined){S=Object.assign({days:{},tasks:[],goals:[],time:'21:30',ui:S.ui,user:S.user},PR);PR=null;migrate();syncQ();MSG='بازگردانی انجام شد.';save();remSync()}
else if(D.prn!==undefined){PR=null}
else if(D.reg!==undefined){if(nameSave()){tab='inv';cur=today()}}
else if(D.nmsv!==undefined){if(nameSave())NMSG='نام ذخیره شد.'}
// سه حالت: پیش‌فرض گوشی ← روشن ← تیره ← پیش‌فرض گوشی (بدون th یعنی پیروی از گوشی)
else if(D.tg!==undefined){const th=S.ui.th;if(th=='light')S.ui.th='dark';else if(th=='dark')delete S.ui.th;else S.ui.th='light';applyTheme();tst(S.ui.th=='light'?'تم روشن':S.ui.th=='dark'?'تم تیره':'تم: پیش‌فرض گوشی')}
else if(D.pal){S.ui.pal=D.pal;applyTheme()}
else if(D.lgs){if(LG==D.lgs)return;LG=D.lgs;try{localStorage.setItem('lg',LG)}catch(e){}for(const k in CAP)delete CAP[k];remSync()}
else if(D.nme!==undefined){nameDlg();return}
else if(D.cfx!==undefined){sv(new Blob([JSON.stringify({type:'step10-questions',qs:Q,def:DEF,emo:EMO,pri:PRI},null,1)],{type:'application/json'}),'step10-questions-'+today()+'.json');return}
else if(D.pset!==undefined){pinSet();return}
else if(D.pdel!==undefined){pinDel();return}
else if(D.abn!==undefined){abk();draw();return}
else if(D.qm){const L=qEd(),i=L.findIndex(q=>q.id==D.qm),j=i+ +D.dir;if(i>=0&&j>=0&&j<L.length)[L[i],L[j]]=[L[j],L[i]]}
else if(D.qx){if(!arm(t))return;const L=qEd();L.splice(L.findIndex(q=>q.id==D.qx),1)}
else if(D.qa!==undefined){qEd().push({id:'c'+Date.now(),t:'سؤال جدید',d:'سؤال جدید',k:'y',b:0});OPEN.q=1}
else if(D.qr0!==undefined){if(!arm(t))return;delete S.qs;syncQ()}
else if(D.dx){dEd().splice(+D.dx,1)}
else if(D.da!==undefined){const v=document.getElementById('nd').value.trim();if(v&&!dEd().includes(v))DEF.push(v)}
else if(D.dr0!==undefined){if(!arm(t))return;delete S.def;syncQ()}
else if(D.ex){eEd().splice(+D.ex,1)}
else if(D.ea!==undefined){const v=document.getElementById('ne').value.trim();if(v&&!eEd().includes(v))EMO.push(v)}
else if(D.er0!==undefined){if(!arm(t))return;delete S.emo;syncQ()}
else if(D.ppx){pEd().splice(+D.ppx,1)}
else if(D.ppa!==undefined){const v=document.getElementById('npp').value.trim();if(v&&!pEd().includes(v))PRI.push(v)}
else if(D.ppr0!==undefined){if(!arm(t))return;delete S.pri;syncQ()}
else return;save();draw()});
const onCh=e=>{const t=e.target,D=t.dataset,ch=e.type=='change';if(!D)return;
if(t.tagName=='TEXTAREA'&&t.id!='bk')grow(t);
if(D.imx!==undefined){if(ch){impX(t.files[0]);t.value=''}return}
if(D.imj!==undefined){if(ch){impJ(t.files[0]);t.value=''}return}
if(D.cfi!==undefined){if(ch){cfImp(t.files[0]);t.value=''}return}
if(D.iaud!==undefined){if(ch){auImport(t.files[0]);t.value=''}return}
if(D.qn){const a=day(cur).a[D.qn]||(day(cur).a[D.qn]={});a.n=t.value}
else if(D.tw){const p=day(cur).p[D.tw]||(day(cur).p[D.tw]={});p.w=t.value}
else if(D.dn!==undefined){day(cur).note=t.value}
else if(D.time!==undefined){if(!ch||!t.value)return;S.time=t.value;save();remSync();return}
else if(D.rem!==undefined){if(!ch)return;S.rem=t.checked?1:0;save();remSync();draw();return}
else if(D.intro!==undefined){if(!ch)return;S.ui.intro=t.checked?1:0;save();return}
else if(D.isnd!==undefined){if(!ch)return;S.ui.isnd=t.checked?1:0;save();return}
else if(D.itxt!==undefined){if(!ch)return;S.ui.itxt=t.checked?1:0;save();return}
else if(D.isent!==undefined){S.ui.itext=t.value}
else if(D.ab!==undefined){if(!ch)return;S.ab=t.checked?1:0;save();draw();return}
else if(D.pbio!==undefined){if(!ch)return;const L=LK();if(L){L.bio=t.checked?1:0;setLK(L)}return}
else if(D.gn){const g=S.goals.find(g=>g.id==D.gn);if(g)g.n=t.value}
else if(D.gtt){const g=gOf(D.gtt);if(g&&t.value.trim())g.t=t.value}
else if(D.gse){const[a,b]=D.gse.split(':'),g=gOf(a),s=g&&g.steps.find(x=>x.id==b);if(s&&t.value.trim()){s.t=t.value;const r=s.on&&S.days[s.on]&&(S.days[s.on].s||[]).find(x=>x.g==g.id&&x.s==s.id);if(r)r.t=s.t}}
else if(D.qe){const q=qEd().find(x=>x.id==D.qe);if(!q)return;const f=D.f;if(f=='k'||f=='b'){if(!ch)return;if(f=='k')q.k=t.value;else q.b=t.checked?1:0;save();draw();return}if(f=='h'&&!t.value)delete q.h;else q[f]=t.value}
else return;
save()};
// وقتی صفحه‌کلید باز است نوار پایین پنهان می‌شود تا بالای صفحه‌کلید نیاید
const isTxt=e=>e&&e.matches&&e.matches('textarea,input:not([type=checkbox]):not([type=range]):not([type=file]):not([type=time])');
document.addEventListener('focusin',e=>{if(isTxt(e.target))document.body.classList.add('kb')});
document.addEventListener('focusout',()=>setTimeout(()=>{if(!isTxt(document.activeElement))document.body.classList.remove('kb')},60));
// Enter در کادرهای «افزودن» همان دکمه‌ی کنارش را می‌زند
document.addEventListener('keydown',e=>{const t=e.target;if(e.key=='Enter'&&(['nt','nd','ne','npp','gt'].includes(t.id)||String(t.id).startsWith('gs-'))){const b=t.parentElement.querySelector('.b.p');if(b){e.preventDefault();b.click()}}});
document.addEventListener('change',onCh);document.addEventListener('input',onCh);
document.addEventListener('toggle',e=>{const t=e.target,s=t.dataset&&t.dataset.sec;if(!s)return;OPEN[s]=t.open;
if(t.open&&t.classList.contains('acc')){SMSG='';NMSG='';t.querySelectorAll('textarea:not(#bk)').forEach(grow);document.querySelectorAll('details.acc[open]').forEach(x=>{if(x!==t)x.open=false});setTimeout(()=>t.scrollIntoView({block:'start',behavior:'smooth'}),30)}},true);
// نسخه‌ی ساختار داده‌ها: اگر در نسخه‌های بعدی شکل داده‌ها عوض شد، تبدیل داده‌های قدیمی اینجا اضافه می‌شود (هیچ‌وقت پاک نمی‌شوند)
// نسخه‌ی ۳: سؤال قدم اهداف یک بار به فهرست ویرایش‌شده‌ی کاربر هم اضافه می‌شود. نسخه‌ی ۲: اهداف قدم و وضعیت گرفتند؛ هدف ۱۰۰٪ قبلی «به سرانجام رسید» حساب می‌شود و بقیه‌ی فیلدها دست نمی‌خورند
// نسخه‌ی ۴: عنوان «مرور روزانه» به بخش «رابطه با نیروی برتر و بهبودی» تبدیل شد و دو بخش تازه سر سؤال‌های ۵ و ۹ آمد (در فهرست ویرایش‌شده فقط اگر عنوانی نداشتند)
// نسخه‌ی ۵: اهداف هفتگی/ماهانه با شمارش روز شدند. هدف قدیمی «هفتگی، ۳ روز» می‌شود و هر روزی که قدمی از آن تیک خورده بود، یک روز انجام‌شده حساب می‌شود (d.s و steps پاک نمی‌شوند)
function mig5(){(S.goals||[]).forEach(g=>{if(!g.per){g.per='w';if(!g.dn)g.dn=3}});Object.keys(S.days||{}).forEach(k=>{const d=S.days[k];(d.s||[]).forEach(r=>{const L=d.gd||(d.gd=[]);if(!L.some(x=>x==r.g))L.push(r.g)})});
if(S.qs)S.qs.forEach(q=>{if(q.id=='n24'&&q.t=='قدم امروز برای هدف‌هایم'){q.t=Q0.find(x=>x.id=='n24').t;q.d=Q0.find(x=>x.id=='n24').d}})}
// نسخه‌ی ۶: «بی‌صداقتی» شد «ناصادقی» (در فهرست نواقص، عنوان سؤال ۵ و انتخاب‌های روزهای قبل) و «گمنامی» به اصول روحانی اضافه شد
function mig6(){const o='بی‌صداقتی',n='ناصادقی';if(S.def){const i=S.def.indexOf(o);if(i>=0){if(S.def.includes(n))S.def.splice(i,1);else S.def[i]=n}}if(S.pri&&!S.pri.includes('گمنامی'))S.pri.push('گمنامی');if(S.qs)S.qs.forEach(q=>{if(q.d==o)q.d=n});Object.keys(S.days||{}).forEach(k=>{const a=(S.days[k]||{}).a||{};Object.keys(a).forEach(q=>{const g=a[q]&&a[q].g;if(g){const i=g.indexOf(o);if(i>=0){if(g.includes(n))g.splice(i,1);else g[i]=n}}})})}
// نسخه‌ی ۷ (۳.۸): «سپاسگزاری» به فهرست احساسات کسانی که فهرست را ویرایش کرده‌اند هم اضافه شد (فهرست پیش‌فرض خودش دارد)
function mig7(){if(S.emo&&!S.emo.includes('سپاسگزاری')){const i=S.emo.indexOf('قدردانی');S.emo.splice(i>=0?i+1:S.emo.length,0,'سپاسگزاری')}}
// نسخه‌ی ۸ (۳.۹): «قدردانی» و «سپاسگزاری» یک احساس‌اند؛ «قدردانی» از فهرست حذف و انتخاب‌های قبلی‌اش «سپاسگزاری» می‌شود تا در گزارش گم نشود
function mig8(){const o='قدردانی',n='سپاسگزاری';if(S.emo){const i=S.emo.indexOf(o);if(i>=0){if(S.emo.includes(n))S.emo.splice(i,1);else S.emo[i]=n}}Object.keys(S.days||{}).forEach(k=>{const a=(S.days[k]||{}).a||{};Object.keys(a).forEach(q=>{const g=a[q]&&a[q].g;if(g){const i=g.indexOf(o);if(i>=0){if(g.includes(n))g.splice(i,1);else g[i]=n}}})})}
const SV=8;function migrate(){if((S.v||0)<3&&S.qs&&!S.qs.some(q=>q.id=='n24'))S.qs.push(Object.assign({},Q0.find(q=>q.id=='n24')));
if((S.v||0)<4&&S.qs)S.qs.forEach(q=>{if(q.h=='مرور روزانه')q.h=Q0[0].h;else if(!q.h&&(q.id=='n5'||q.id=='n9'))q.h=Q0.find(x=>x.id==q.id).h});(S.goals||[]).forEach(g=>{if(!Array.isArray(g.steps))g.steps=[];if(!g.st)g.st=(g.pr||0)>=100?'d':'a';if(!g.per){g.per='w';if(!g.dn)g.dn=3}});if((S.v||0)<5)mig5();if((S.v||0)<6)mig6();if((S.v||0)<7)mig7();if((S.v||0)<8)mig8();S.v=SV}
// اولین اجرای هر نسخه‌ی جدید: پیش از هر کاری یک بک‌آپ جدا از داده‌های نسخه‌ی قبلی گرفته می‌شود
try{const v=AN&&AN.version(),pv=localStorage.getItem('s10ver');if(v&&pv!==v){if(pv&&Object.keys(S.days).length)AN.backupNamed('step10-before-v'+v+'.json',JSON.stringify(S));localStorage.setItem('s10ver',v)}}catch(e){}
migrate();wsync();
// تب مطالعه حذف شد؛ کتابی که قبلاً کاربر انتخاب کرده بود جای گوشی را نگیرد
try{indexedDB.deleteDatabase('s10b')}catch(e){}
// ---------- مقدمه‌ی ورود: صفحه از تاریکی شروع می‌شود، صدای کوتاه پخش می‌شود، نور آرام پخش می‌شود و جمله ظاهر می‌شود.
// پیش‌فرض روشن است، همیشه قابل رد کردن است و از تنظیمات خاموش می‌شود
// صدای دلخواه مقدمه جدا در IndexedDB می‌ماند (داخل بک‌آپ نیست؛ اگر نبود، صدای پیش‌فرض پخش می‌شود)
const ADB=()=>new Promise((res,rej)=>{const r=indexedDB.open('s10a',1);r.onupgradeneeded=()=>r.result.createObjectStore('f');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
async function auGet(){const db=await ADB();return new Promise(res=>{const q=db.transaction('f').objectStore('f').get('intro');q.onsuccess=()=>res(q.result||null);q.onerror=()=>res(null)})}
async function auPut(b){const db=await ADB();return new Promise((res,rej)=>{const t=db.transaction('f','readwrite');t.objectStore('f').put(b,'intro');t.oncomplete=res;t.onerror=rej})}
async function auDel(){try{const db=await ADB();await new Promise(res=>{const t=db.transaction('f','readwrite');t.objectStore('f').delete('intro');t.oncomplete=res;t.onerror=res})}catch(e){}delete S.ui.iaud;save();SMSG='';draw()}
async function auImport(f){if(!f)return;SMSG='';try{if(f.size>15e6)throw 0;await new Promise((res,rej)=>{const u=URL.createObjectURL(f),a=new Audio();setTimeout(rej,6000);a.onloadedmetadata=()=>{URL.revokeObjectURL(u);res()};a.onerror=()=>{URL.revokeObjectURL(u);rej()};a.src=u});await auPut(f);S.ui.iaud=1;save();SMSG='صدای مقدمه ذخیره شد.'}catch(e){SMSG='این فایل صوتی قابل پخش نیست (حداکثر ۱۵ مگابایت).'}draw()}
function intro(done,force){if(!force&&S.ui&&S.ui.intro===0)return done();const o=document.getElementById('intro');let a=null,fin=false,tm=0;
const end=()=>{if(fin)return;fin=true;clearTimeout(tm);try{a&&a.pause()}catch(e){}o.classList.add('out');setTimeout(()=>{o.hidden=true;o.className='';o.innerHTML='';done()},700)};
const own=String(S.ui.itext||'').trim(),txt=S.ui.itxt===0?'':own?`<p class="itx" data-u>${esc(own).replace(/\n/g,'<br>')}</p>`:'<p class="itx">یک لحظه صبر کن؛<br>با خودت روبرو شو.</p>';
o.innerHTML='<div class="glow"></div><div class="bsm">به نام خدا</div>'+txt+'<button class="iskip" type="button">رد کردن</button>';if(LG=='en')tr(o);o.hidden=false;
o.querySelector('.iskip').onclick=e=>{e.stopPropagation();end()};
// صدای بلندتر، مقدمه را تا سقف ۱۵ ثانیه طولانی‌تر می‌کند
const play=s=>{try{a=new Audio(s);a.onloadedmetadata=()=>{if(!fin&&isFinite(a.duration)&&a.duration>4.8){clearTimeout(tm);tm=setTimeout(end,Math.min(a.duration,15)*1000+800)}};const p=a.play();if(p&&p.catch)p.catch(()=>{})}catch(e){}};
if(S.ui.isnd!==0){if(S.ui.iaud)auGet().then(b=>{if(!fin)play(b?URL.createObjectURL(b):'audio/intro.wav')}).catch(()=>{if(!fin)play('audio/intro.wav')});else play('audio/intro.wav')}
setTimeout(()=>o.classList.add('go'),40);tm=setTimeout(end,5600)}
// جمله‌ی پایانی بعد از ثبت تراز روزانه
function closing(){const o=document.createElement('div');o.className='ov cls';o.innerHTML='<p>امروز را همان‌طور که بود، می‌پذیرم.<br>و فردا فرصتی تازه است.</p>';
// کاغذرنگی آرام پشت جمله
const CC=['var(--ac)','#f2c14e','#e87ba4','#6fc0a8','#7fb0e0'];for(let i=0;i<40;i++){const c=document.createElement('i');c.className='cf';c.style.left=Math.random()*100+'%';c.style.background=CC[i%5];c.style.setProperty('--dx',(Math.random()*120-60)+'px');c.style.setProperty('--r',(Math.random()*720-360)+'deg');c.style.animationDelay=Math.random()*.6+'s';o.appendChild(c)}if(LG=='en')tr(o);document.body.appendChild(o);
const close=()=>{o.classList.remove('on');setTimeout(()=>o.remove(),500)};o.onclick=e=>{e.stopPropagation();close()};setTimeout(()=>o.classList.add('on'),20);setTimeout(close,4200)}
syncQ();draw();remSync();if(S.days[today()]&&(S.days[today()].sv||S.days[today()].done))markDone(today());intro(()=>{if(LOCKED)bioAsk();else playCong()});
