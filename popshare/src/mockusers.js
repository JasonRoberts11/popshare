const CSVToArray = (data, delimiter = ",", omitFirstRow = true) =>
    data
        .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
        .split("\n")
        .map(v => v.split(delimiter));
let mockusers = CSVToArray(`id,username,email,avatar,color,slogan,rank,pops
1,klittlejohns0,djime0@java.com,https://robohash.org/sapienteveritatisatque.png?size=50x50&set=set1,#4b8c75,orchestrate holistic synergies,72,432142
2,cglaserman1,jmoncaster1@indiatimes.com,https://robohash.org/teneturvoluptatestempora.jpg?size=50x50&set=set1,#8b9133,generate turn-key initiatives,15,113917
3,ebronot2,dregina2@seattletimes.com,https://robohash.org/architectolaudantiumdistinctio.png?size=50x50&set=set1,#dec99c,mesh impactful niches,71,1125
4,zakenhead3,fboothebie3@prlog.org,https://robohash.org/blanditiisnonut.bmp?size=50x50&set=set1,#394fe2,matrix scalable applications,52,372084
5,aree4,mbeevors4@sina.com.cn,https://robohash.org/hicdictaiste.png?size=50x50&set=set1,#20f4ee,utilize cutting-edge convergence,50,346127
6,ltilby5,apylkynyton5@amazon.co.uk,https://robohash.org/omnisnonquia.jpg?size=50x50&set=set1,#f2afef,incentivize rich e-tailers,217,83980
7,adaltry6,rbisco6@cbc.ca,https://robohash.org/abcommodivoluptatibus.jpg?size=50x50&set=set1,#223bd4,incubate value-added partnerships,170,282271
8,hbashford7,emacpaik7@google.com.br,https://robohash.org/consectetursitdolorem.bmp?size=50x50&set=set1,#10d1e6,deploy magnetic content,266,339107
9,cpridden8,fseston8@vk.com,https://robohash.org/doloremmagnamqui.jpg?size=50x50&set=set1,#33849d,engage cross-media initiatives,177,87438
10,rcaslake9,klockless9@dyndns.org,https://robohash.org/culpasitquisquam.bmp?size=50x50&set=set1,#6384a9,reinvent sticky e-markets,135,212801
11,ocaldecotta,hyekela@guardian.co.uk,https://robohash.org/nemoametaccusamus.png?size=50x50&set=set1,#5a536f,maximize dynamic systems,36,435560
12,kerikssonb,lstollerb@zdnet.com,https://robohash.org/consecteturdignissimoset.png?size=50x50&set=set1,#17d0d0,transform global models,125,445222
13,dladenc,dmackernessc@ebay.com,https://robohash.org/quisedcupiditate.png?size=50x50&set=set1,#3b86b2,integrate front-end web services,109,113023
14,rricoldd,tprintd@godaddy.com,https://robohash.org/abaperiamaccusantium.png?size=50x50&set=set1,#e024a2,mesh holistic action-items,10,497114
15,fciobotarue,hzambone@opera.com,https://robohash.org/aautculpa.jpg?size=50x50&set=set1,#3854b1,expedite best-of-breed markets,14,61565
16,saureliusf,rswabyf@over-blog.com,https://robohash.org/doloremvoluptasexcepturi.png?size=50x50&set=set1,#1fbc1f,facilitate efficient technologies,10,331888
17,pcarlozzig,weytelg@creativecommons.org,https://robohash.org/utquoad.jpg?size=50x50&set=set1,#99686e,iterate compelling e-business,192,233874
18,amendelh,tchartresh@ucsd.edu,https://robohash.org/consequaturnullanecessitatibus.jpg?size=50x50&set=set1,#ab8efc,incubate value-added models,221,41676
19,rborrilli,polexai@mtv.com,https://robohash.org/accusantiumrerumitaque.bmp?size=50x50&set=set1,#b39280,deploy innovative channels,158,167394
20,kabrashkovj,sgilbeej@jimdo.com,https://robohash.org/distinctiocorruptiminus.png?size=50x50&set=set1,#032d9e,facilitate impactful partnerships,240,349369
21,jarnoultk,zvasiljevick@dailymail.co.uk,https://robohash.org/perspiciatisnumquamiure.jpg?size=50x50&set=set1,#10d053,syndicate ubiquitous synergies,62,295219
22,jcossentinel,oedgellerl@google.es,https://robohash.org/nisimagnamcommodi.jpg?size=50x50&set=set1,#b5e753,utilize web-enabled solutions,99,314098
23,rtennewellm,dfarfootm@usa.gov,https://robohash.org/dolordolorequi.png?size=50x50&set=set1,#69506a,iterate value-added experiences,129,213317
24,ematevushevn,bbransgroven@sphinn.com,https://robohash.org/voluptatemcumqueblanditiis.bmp?size=50x50&set=set1,#daddd5,e-enable dot-com schemas,152,140646
25,tjosefso,ghaselhursto@army.mil,https://robohash.org/quamestvel.bmp?size=50x50&set=set1,#7e093e,reintermediate cross-platform metrics,12,19372
26,nlocheadp,krichelp@howstuffworks.com,https://robohash.org/numquamquasdolor.bmp?size=50x50&set=set1,#ffad5c,recontextualize end-to-end metrics,182,339901
27,abreckinq,mflorezq@mapquest.com,https://robohash.org/odioquaeratveniam.png?size=50x50&set=set1,#50e577,harness efficient users,105,117677
28,msouthwellr,scollatonr@un.org,https://robohash.org/nisisedillum.bmp?size=50x50&set=set1,#443987,streamline plug-and-play infomediaries,217,22785
29,tdungays,etankuss@google.de,https://robohash.org/utnesciuntsed.jpg?size=50x50&set=set1,#524475,target cross-media markets,266,65814
30,jwillingamt,ifolonint@columbia.edu,https://robohash.org/fugasimiliqueab.png?size=50x50&set=set1,#6dddfe,whiteboard transparent infrastructures,120,46019
31,gmargettu,icolganu@delicious.com,https://robohash.org/quiaquaeratdolorem.jpg?size=50x50&set=set1,#129152,streamline sticky bandwidth,92,75318
32,fchancelierv,mpetracchiv@examiner.com,https://robohash.org/sequiremvel.bmp?size=50x50&set=set1,#34104e,orchestrate visionary action-items,272,491826
33,gcarollw,djacqueminotw@google.com.br,https://robohash.org/nostrumquisquamcorporis.jpg?size=50x50&set=set1,#bf1c08,optimize extensible mindshare,106,252607
34,mohederscollx,sdendonx@deviantart.com,https://robohash.org/autconsequaturasperiores.png?size=50x50&set=set1,#bb203a,exploit innovative solutions,253,108611
35,lburragey,scastrilloy@mysql.com,https://robohash.org/consequunturautet.bmp?size=50x50&set=set1,#f65530,facilitate rich experiences,86,119800
36,chanscomz,bwinspearz@arizona.edu,https://robohash.org/quiearumnon.bmp?size=50x50&set=set1,#e473a2,empower leading-edge infrastructures,19,46835
37,sthunnerclef10,ntolossi10@tiny.cc,https://robohash.org/quaeperferendisvoluptas.jpg?size=50x50&set=set1,#6f0cfa,whiteboard magnetic e-markets,133,268536
38,dlermit11,dstanlock11@paypal.com,https://robohash.org/autemdoloresnemo.jpg?size=50x50&set=set1,#fa85eb,expedite wireless channels,116,498789
39,dshurmer12,alaughlin12@yolasite.com,https://robohash.org/voluptatemdolorfacilis.bmp?size=50x50&set=set1,#90f032,mesh one-to-one schemas,25,254311
40,ggemmill13,crosengart13@blogger.com,https://robohash.org/architectoquiavoluptates.jpg?size=50x50&set=set1,#b0e7b9,expedite integrated experiences,188,386186
41,agittoes14,asidwick14@mapy.cz,https://robohash.org/eligendiquoquia.bmp?size=50x50&set=set1,#5a0241,innovate innovative solutions,183,191231
42,dlumsden15,cdusting15@wordpress.org,https://robohash.org/quiaillumearum.png?size=50x50&set=set1,#bfe20f,recontextualize next-generation paradigms,175,107409
43,aohalloran16,sokell16@netvibes.com,https://robohash.org/nonetpossimus.png?size=50x50&set=set1,#19573a,whiteboard scalable e-tailers,233,135253
44,rsimecek17,adunguy17@aboutads.info,https://robohash.org/quissintconsequatur.jpg?size=50x50&set=set1,#0ac336,scale compelling communities,43,241532
45,cspain18,eloseke18@abc.net.au,https://robohash.org/praesentiumconsequaturvelit.bmp?size=50x50&set=set1,#e6b118,leverage real-time e-services,280,96584
46,jbrahms19,lsiaspinski19@microsoft.com,https://robohash.org/ducimussitnihil.bmp?size=50x50&set=set1,#03077d,monetize value-added vortals,32,126001
47,dmeakes1a,dswain1a@sciencedaily.com,https://robohash.org/illoasperioresut.png?size=50x50&set=set1,#6902cc,revolutionize bricks-and-clicks systems,178,234087
48,jreimers1b,eroofe1b@unesco.org,https://robohash.org/quienimvoluptatum.bmp?size=50x50&set=set1,#adedd4,strategize collaborative mindshare,223,349010
49,bsterre1c,fincogna1c@wsj.com,https://robohash.org/etnequedelectus.jpg?size=50x50&set=set1,#f7c68e,scale best-of-breed web services,257,106570
50,rbread1d,gimlacke1d@exblog.jp,https://robohash.org/omnisdelectusiste.jpg?size=50x50&set=set1,#b58010,enable bricks-and-clicks web-readiness,136,264489
51,vceney1e,tmcaline1e@usatoday.com,https://robohash.org/inciduntillototam.jpg?size=50x50&set=set1,#8250f9,deliver user-centric infomediaries,34,427593
52,acobbled1f,cgenny1f@comcast.net,https://robohash.org/mollitianihilullam.bmp?size=50x50&set=set1,#3b503a,unleash 24/365 portals,77,402106
53,tcramer1g,ebudgen1g@nhs.uk,https://robohash.org/consequunturrerumaut.bmp?size=50x50&set=set1,#92abdf,redefine transparent infrastructures,64,102517
54,mmcilwaine1h,elernihan1h@ox.ac.uk,https://robohash.org/dolorumrecusandaeerror.jpg?size=50x50&set=set1,#927aaa,expedite distributed e-markets,209,328862
55,bhysom1i,jmaxfield1i@whitehouse.gov,https://robohash.org/estsimiliquecorporis.jpg?size=50x50&set=set1,#d6ded0,unleash granular technologies,207,74927
56,mgliddon1j,adumphry1j@abc.net.au,https://robohash.org/autlaborumrecusandae.png?size=50x50&set=set1,#d18f76,incubate strategic systems,131,365059
57,cscreach1k,sgaffey1k@ibm.com,https://robohash.org/corruptiillumdoloribus.jpg?size=50x50&set=set1,#fcb4f3,expedite out-of-the-box interfaces,24,403970
58,uadelsberg1l,mphillott1l@ustream.tv,https://robohash.org/nihilametsit.png?size=50x50&set=set1,#e5dc11,recontextualize visionary partnerships,175,396536
59,lcosten1m,mrobus1m@t-online.de,https://robohash.org/nihilconsequaturdolorum.jpg?size=50x50&set=set1,#9a73bc,integrate front-end markets,209,283071
60,fsalterne1n,bhasker1n@shop-pro.jp,https://robohash.org/laudantiumsequifacilis.png?size=50x50&set=set1,#d0e3df,drive back-end paradigms,61,482797
61,faitken1o,lcrotch1o@bloglines.com,https://robohash.org/etsuscipitnihil.bmp?size=50x50&set=set1,#14dddc,deliver bleeding-edge metrics,135,393926
62,wducastel1p,jhawket1p@google.ru,https://robohash.org/doloretaut.png?size=50x50&set=set1,#95363c,embrace rich web-readiness,293,449677
63,bvost1q,hdevin1q@bloglines.com,https://robohash.org/consequaturrepellendusconsequuntur.png?size=50x50&set=set1,#7f405a,syndicate customized markets,44,141256
64,awoodroof1r,ncorrado1r@businesswire.com,https://robohash.org/voluptatibusestaliquid.jpg?size=50x50&set=set1,#b3e476,generate B2B interfaces,159,286391
65,tsprules1s,drodder1s@narod.ru,https://robohash.org/laboresintut.png?size=50x50&set=set1,#cd4889,transform intuitive channels,16,248182
66,trudge1t,fmcclymont1t@acquirethisname.com,https://robohash.org/laudantiumearumnemo.bmp?size=50x50&set=set1,#f92b99,drive seamless bandwidth,147,499253`);

export default mockusers;
