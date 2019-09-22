This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Googlon Language Challenge React

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##The Googlon language
Archaeologists found a scroll containing texts in the ancient and mysterious Googlon language.
After many years of study, linguists have learned some of the fundamental characteristics of this language.


##Letter Classification
Googlon letters are classified in two groups: the letters u, d, x, s, m, p, f are called "foo letters" while the other
letters are called "bar letters". 

##Prepositions
The linguists have discovered that in the Googlon language, the prepositions are the words of exactly 6 letters which end in a foo letter and do not contain the letter u.


##Verbs
Another interesting fact discovered by linguists is that, in the Googlon language, verbs are words of 6 letters or more that end in a bar letter. Furthermore, if a verb starts in a bar letter, then the verb is inflected in its subjunctive form.


##Lexicographical Order
In Googlon, like in our system, words are always ordered lexicographically, but the challenge is that the order of the letters in the Googlon alphabet is different from ours. Their alphabet, in order, is: sxocqnmwpfyheljrdgui.


##Numbers
Not that words aren't fun, but one could ask: how do Googlons represent the numbers? Well, in Googlon, words also represent numbers given in base 20, where each letter is a digit. The digits are ordered from the least significant to the most significant, which is the opposite of our system. That is, the leftmost digit is the unit, the second digit is worth 20, the third one is worth 400, and so on and so forth. The values of the letters are given by the order they appear in the Googlon alphabet (which, as we saw, is ordered differently from our alphabet). That is, the first letter of the Googlon alphabet represents the digit 0, the second letter represents the digit 1, and the last one represents the digit 19.
As an example, the Googlon word gxjrc represents the number 605637.

Googlons consider a number to be pretty if it satisfies all of the following properties:
it is greater than or equal to 81827 it is divisible by 3

#The Challenge

1) How many prepositions are there in the text?
2) How many verbs are there in the text?
3) How many of those verbs in the text are in the subjunctive form?
4) Generate a vocabulary list with distinct words ordered Googlon's alphabetical order. 5) How many distinct pretty numbers are in the text?
Use the test cases to validate your algorithm.


##Test Cases
Text A Input

shoce pq podciy nfwh phfer epgdc dgsloqe do rhfl qhmoixw cmfur qdrulxogji whc ermjdhsx py en yco ienqm wjuln dwuch qinhmjul mjxdqfrnlg iygsex qihmu grewyluhfs ucf us xclpedqmi yrx qinexwo qx rqw wxflpdn rsogxd cpqmxj lgchqdin fdw nwcrus coj nj qplfjnwidg fwdmslqn cwj hysucxdqm ms hdmwpe igxweo sqflo ycqlinro ghu hgecdfj mw xrpmyenq fgixsr fpwcnguieh fclgj ghepqyd jxhwe cejfugn ujxqh ihncrl mlceo udr fm ocxfsjdng sfoqmd pdoymnwxei spqinedf ql ncsepfl icmqsdj chwjlg yiq ifl syejrqd lwnepmcg xlmnfqry ghlyopuncw qx iw sionpux cop dmqpchuyf ojxfqhernm ignpeyf rseoyl emjocsild rfimdy mwd oewgjfr uo irmcunfgx ylduwpsnh xrdng gcxr ng prfmjicud srdueqhgiy nmodwsqijh dcnql

##Expected Output
1) There are 3 prepositions in the text
2) There are 36 verbs in the text
3) There are 25 subjunctive verbs in the text
4) Vocabulary list: sqflo spqinedf sfoqmd syejrqd shoce srdueqhgiy sionpux xclpedqmi xlmnfqry xrpmyenq xrdng ocxfsjdng oewgjfr ojxfqhernm cop coj cmfur cwj cpqmxj chwjlg cejfugn qx qplfjnwidg qhmoixw ql qdrulxogji qinhmjul qinexwo qihmu ncsepfl nmodwsqijh nwcrus nfwh nj ng ms mw mwd mlceo mjxdqfrnlg wxflpdn whc wjuln podciy pq py phfer prfmjicud pdoymnwxei fclgj fm fwdmslqn fpwcnguieh fdw fgixsr yco ycqlinro ylduwpsnh yrx yiq hysucxdqm hdmwpe hgecdfj en emjocsild epgdc ermjdhsx lwnepmcg lgchqdin jxhwe rsogxd rseoyl rqw rfimdy rhfl do dcnql dmqpchuyf dwuch dgsloqe gcxr ghepqyd ghlyopuncw ghu grewyluhfs us uo ucf ujxqh udr icmqsdj iw ifl iygsex ihncrl ienqm irmcunfgx igxweo ignpeyf
5) There are 22 distinct pretty numbers in the text

##Text B Input

dufqwh ndis eqclrnguo ceqrugs meod eofxlrd uqpwmni xrhm qgro hlwgimn fjnomcledi silruxh efwh uxfrpsnqd fyejhi fxdn swfruc eopq hcgeox lhimoynsr rwjxecpmfl gimqxwuyr eujh rfs qncuyiel hwuiqlne umyldn uwflpqc gywlc oxmegsdi sqemywlg cnfimrgows hnxyfd exmdnos djpsogiy xyp myngercj yeujqcoih sgljco xy lruneodc frqog hqsgcy wmi hyfgqj iecusqjp ugnmqfypsd yp rxoew lqeshijndg umynehjsci rnc xhrjyocde mnefpj rcyihwxq oihjwrup gquscxhw ucrfdsoeq drg nqhodjsm snp cwoen ehyldsnmf pmrs cghuwpfxly ifwpnx wqdgrl xocpjedsfm oegli url rylnsph ijucmxw jwispgefdo heixgmcy gm sdhfnoxg hc jqwpdo eo hmypjfu xuedl nqpge cnyosu dniefl lf xcdupho wixmhcuynj poy ous jwroheqm xchm jnufdshiqe liyrexhmu cjlxoiquef fwqrijemcd csxpy eqxghfry fhnwomgyuq yj euhxmosc

Expected Output
1) There are 3 prepositions in the text
2) There are 46 verbs in the text
3) There are 26 subjunctive verbs in the text
4) Vocabulary list: sqemywlg snp swfruc sdhfnoxg sgljco silruxh xocpjedsfm xchm xcdupho xy xyp xhrjyocde xrhm xuedl oxmegsdi oegli ous oihjwrup csxpy cnfimrgows cnyosu cwoen ceqrugs cjlxoiquef cghuwpfxly qncuyiel qgro nqpge nqhodjsm ndis mnefpj myngercj meod wqdgrl wmi wixmhcuynj poy pmrs fxdn fwqrijemcd fyejhi fhnwomgyuq fjnomcledi frqog yp yeujqcoih yj hc hcgeox hqsgcy hnxyfd hmypjfu hwuiqlne hyfgqj heixgmcy hlwgimn exmdnos eo eopq eofxlrd eqxghfry eqclrnguo efwh ehyldsnmf euhxmosc eujh lqeshijndg lf lhimoynsr lruneodc liyrexhmu jqwpdo jnufdshiqe jwroheqm jwispgefdo rxoew rcyihwxq rnc rwjxecpmfl rfs rylnsph dniefl djpsogiy drg dufqwh gquscxhw gm gywlc gimqxwuyr uxfrpsnqd ucrfdsoeq uqpwmni umynehjsci umyldn uwflpqc url ugnmqfypsd ifwpnx iecusqjp ijucmxw
5) There are 21 distinct pretty numbers in the text
     
##Text C Input

xerni hej meofh nowmfjhgur qsixdwp rwgfe xigldpnw nl jgnmqpesy dwh wiergnlpfj unei lgxidjs lyq pde ju merwcxu xqgjeo iqfwyh rq xgdmopqhy qfderyjc lwrjsoynp miwlehxjcr xmry oncfipjg sgd dycjrflsn woyi lx ousryfgcqp sxrhen gucfdpx edyn xngjhweodm xfujp lqyuch mr cjywmpuqns dfcugqws piuerlxhm cjh rgeoj xucq impuhyec uhswgnpfj rl ngmwdeh ionxw uhisd dprhwqun yf gnepqwymuj wiylruxcqg fmnpo wxcjemsuf wsijx nriy usqioe coeslhu ce chdo ydqsgjlhfn rihluydngf fq yrmejs xqcjwsdi prydlnc hxcl ngrxcumijs sunrdwm urflyq jmcsorwglx gelnif esc ymfswnqij ifdn rfegusyj fw uinefd wsuxc lsjyndqgx leginjo jiqwscle gdiusxecqj oufqgmjh dunw eyscgxulwn xfjdiy yodi rfhdclgo sngrmj wc rfd hfnjc yijf yjurqsomp ogmycfqnrh gmuxsijo dqmyeugjlo

Expected Output
1) There are 2 prepositions in the text
2) There are 37 verbs in the text
3) There are 22 subjunctive verbs in the text
4) Vocabulary list: sxrhen sngrmj sgd sunrdwm xqcjwsdi xqgjeo xngjhweodm xmry xfjdiy xfujp xerni xgdmopqhy xucq xigldpnw oncfipjg ogmycfqnrh ousryfgcqp oufqgmjh coeslhu chdo ce cjywmpuqns cjh qsixdwp qfderyjc nowmfjhgur nl nriy ngmwdeh ngrxcumijs meofh merwcxu mr miwlehxjcr wsuxc wsijx wxcjemsuf woyi wc wiylruxcqg wiergnlpfj prydlnc pde piuerlxhm fq fmnpo fw yodi ymfswnqij yf yjurqsomp yrmejs ydqsgjlhfn yijf hxcl hfnjc hej esc eyscgxulwn edyn lsjyndqgx lx lqyuch lwrjsoynp lyq leginjo lgxidjs jmcsorwglx jgnmqpesy ju jiqwscle rq rwgfe rfhdclgo rfegusyj rfd rl rgeoj rihluydngf dqmyeugjlo dwh dprhwqun dfcugqws dycjrflsn dunw gnepqwymuj gmuxsijo gelnif gdiusxecqj gucfdpx usqioe unei uhswgnpfj uhisd urflyq uinefd ionxw iqfwyh impuhyec ifdn
5) There are 27 distinct pretty numbers in the text

##Text D Input

fdmrsl lfro lxng cn jywenuqr mdgr pirfd puisec muf oupmifrn dr xyigmqwp cnomj unowmxiecd odprsxwqge dyuhwxc ihpslwgoqm gwucos jcoer oelyg hmsp qenfdjrhcu csj fd ow jsuh oghqepxjlc jui yupjenqmf jndfyqm qsdmjlf yghuecdj fhsogp hiwn neiwlogrsy ysw lcyehfi qd us oshnxrfpd ohx njdy yqwxn osxjdqf qd somhefcix ofhledm ulrosdm gh dowueprmc pxryc smoxlwfnr pnciyrl us xjomhfe qlw jcfye fcqlpoiu xeohlq mrsylhxwqf mxdplruge yumrfio cnyxdm xchidjpe fn cjupdxnefm ig icwgux qcfopnmey ryshjxdc yricqxhfeo opdlfnhu rcpdlo oclmyr hpjfnlqy lnsdioe ojirm nfcmxjwgl wqphu eunyd eopi feru hgwcms fu dmgxjholu ls owupc iw nxgupwhl udjnylie uewdymsl sypmcelu sup qdlhjmeno nrxu csiex fuqrlid hmie fxgs nsjopuw

Expected Output
1) There are 3 prepositions in the text
2) There are 31 verbs in the text
3) There are 19 subjunctive verbs in the text
4) Vocabulary list: somhefcix smoxlwfnr sypmcelu sup xchidjpe xyigmqwp xeohlq xjomhfe osxjdqf oshnxrfpd oclmyr ow owupc opdlfnhu ofhledm ohx oelyg ojirm odprsxwqge oghqepxjlc oupmifrn csj csiex cn cnomj cnyxdm cjupdxnefm qsdmjlf qcfopnmey qenfdjrhcu qlw qd qdlhjmeno nsjopuw nxgupwhl nfcmxjwgl neiwlogrsy njdy nrxu mxdplruge mrsylhxwqf mdgr muf wqphu pxryc pnciyrl puisec pirfd fxgs fcqlpoiu fn fhsogp feru fd fdmrsl fu fuqrlid ysw yqwxn yricqxhfeo yghuecdj yumrfio yupjenqmf hmsp hmie hpjfnlqy hgwcms hiwn eopi eunyd ls lxng lcyehfi lnsdioe lfro jsuh jcoer jcfye jndfyqm jywenuqr jui rcpdlo ryshjxdc dowueprmc dmgxjholu dyuhwxc dr gwucos gh us unowmxiecd uewdymsl ulrosdm udjnylie icwgux iw ihpslwgoqm ig
5) There are 27 distinct pretty numbers in the text
    
##Text E Input

mexfjsi yinjs ocmhp ms iyuq pqf qehcmrjpwu eorq gn mgnoqdjh odi nqeduhc cpgyx cjxdl uspxjgdlei jnqul hpngdocxw wisly ndepfswml oux umrocw dje exsij sxwc icy wydjx eq sinprhlwdm hwmjp cndlxuqhfg dimxwofheq phlyf qhiwfyudsp ey xwqmucp ec epqdonschm ipoufr syjqfr isxl mqgwclf ciex pysfieucx oylfmierg hygu ch orl rjoh peqfw ljsf nqc hwsqc yrshie mwrpcg pxiomfqwrd rxsfecil goi ylnxequr jrcdiye ojgelhisc fwerpnxogs gnl up yjgq hsfywx rnpjw lx qljs hjwsqel srhm mfginrqulc wpxgyh qugre mjrliogucs iupdjfnhm muoplcrfi wxmyhipou umwrc hdroml irplxyofsm emnd ncjysiwdh cgr qrj qpngufxjli ufidryq nsdohjim yqmgihus jimlxfsygc phdgqir yedhpws fqexsi xwule hgcmqix edmpwfnsuh fsxcerumow rijpsfgm pmldxecqf ypwocmxni ywcr

Expected Output
1) There are 1 prepositions in the text
2) There are 32 verbs in the text
3) There are 19 subjunctive verbs in the text
4) Vocabulary list: sxwc syjqfr srhm sinprhlwdm xwqmucp xwule ocmhp oylfmierg ojgelhisc orl odi oux cndlxuqhfg cpgyx ch cjxdl cgr ciex qpngufxjli qhiwfyudsp qehcmrjpwu qljs qrj qugre nsdohjim ncjysiwdh nqc nqeduhc ndepfswml ms mqgwclf mwrpcg mfginrqulc mexfjsi mjrliogucs mgnoqdjh muoplcrfi wxmyhipou wpxgyh wydjx wisly pxiomfqwrd pqf pmldxecqf pysfieucx phlyf phdgqir peqfw fsxcerumow fqexsi fwerpnxogs yqmgihus ywcr ypwocmxni yedhpws ylnxequr yjgq yrshie yinjs hsfywx hwsqc hwmjp hpngdocxw hygu hjwsqel hdroml hgcmqix exsij eorq ec eq emnd epqdonschm ey edmpwfnsuh lx ljsf jnqul jrcdiye jimlxfsygc rxsfecil rnpjw rjoh rijpsfgm dje dimxwofheq goi gn gnl uspxjgdlei umwrc umrocw up ufidryq isxl icy ipoufr iyuq irplxyofsm iupdjfnhm
5) There are 26 distinct pretty numbers in the text
  
