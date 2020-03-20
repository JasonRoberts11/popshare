const CSVToArray = (data, delimiter = ",", omitFirstRow = true) =>
    data
        .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
        .split("\n")
        .map(v => v.split(delimiter));
let mockprojects = CSVToArray(`id,userid,title,sub,thumb,quality,creativity,appeal,time,tags
1,15,Bytecard,Front-line bandwidth-monitored time-frame,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.0,1.6,4.9,1569812997,epic
2,11,Y-find,Vision-oriented dynamic productivity,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.9,3.0,2.6,1581507054,gamer
3,55,It,Right-sized web-enabled collaboration,http://dummyimage.com/250x250.jpg/cc0000/ffffff,2.5,1.6,1.3,1578954296,random
4,21,Biodex,Horizontal zero tolerance framework,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.8,3.4,4.1,1557322669,art
5,20,Home Ing,Realigned upward-trending neural-net,http://dummyimage.com/250x250.jpg/ff4444/ffffff,3.1,2.6,2.5,1567889180,stupid
6,57,Temp,De-engineered systemic instruction set,http://dummyimage.com/250x250.jpg/dddddd/000000,3.7,1.5,1.3,1574336824,gamer
7,50,Cardify,Multi-layered modular parallelism,http://dummyimage.com/250x250.jpg/ff4444/ffffff,3.5,2.5,4.3,1569038472,math
8,7,Daltfresh,Reduced fresh-thinking success,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.2,4.3,2.9,1561042656,gamer
9,16,Mat Lam Tam,Universal 6th generation policy,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,4.7,2.6,1.6,1558986425,random
10,20,Cookley,Secured maximized emulation,http://dummyimage.com/250x250.jpg/dddddd/000000,1.6,2.7,3.4,1554495740,funny
11,12,Sub-Ex,Down-sized zero administration process improvement,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.1,2.7,4.4,1568476708,random
12,55,Redhold,Switchable contextually-based groupware,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.8,3.1,3.1,1557349387,stupid
13,41,Konklab,Profound modular protocol,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,2.5,4.7,3.0,1556348537,music
14,66,Zaam-Dox,User-centric national help-desk,http://dummyimage.com/250x250.jpg/dddddd/000000,3.0,2.2,2.1,1565136493,epic
15,63,Hatity,Visionary multimedia extranet,http://dummyimage.com/250x250.jpg/dddddd/000000,2.1,4.5,3.9,1570673557,random
16,45,Rank,Intuitive local encryption,http://dummyimage.com/250x250.jpg/ff4444/ffffff,2.7,2.5,4.8,1573018151,stupid
17,64,Home Ing,Up-sized client-server product,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,2.6,1.7,4.7,1576635783,random
18,34,Viva,Adaptive global function,http://dummyimage.com/250x250.jpg/cc0000/ffffff,3.0,1.4,3.2,1567720046,music
19,46,Opela,Self-enabling bifurcated hardware,http://dummyimage.com/250x250.jpg/ff4444/ffffff,2.0,3.2,3.5,1581987561,art
20,34,Subin,Enhanced uniform encryption,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.8,1.8,1.1,1563087242,art
21,46,Hatity,Business-focused user-facing interface,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,4.5,4.4,2.6,1581925213,epic
22,7,Latlux,Pre-emptive encompassing workforce,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.6,3.0,4.2,1558795919,music
23,1,Kanlam,Reactive executive customer loyalty,http://dummyimage.com/250x250.jpg/dddddd/000000,2.2,1.7,3.6,1580594759,music
24,61,Lotstring,Sharable object-oriented extranet,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.3,3.0,3.2,1563756241,stupid
25,18,Trippledex,Intuitive background monitoring,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.9,1.9,2.1,1561259223,music
26,53,Ventosanzap,Function-based intangible encryption,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.2,1.1,4.1,1557012479,music
27,63,Veribet,Function-based impactful standardization,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,2.9,2.1,4.6,1573253339,epic
28,53,Tin,Team-oriented radical frame,http://dummyimage.com/250x250.jpg/dddddd/000000,1.4,1.6,2.1,1575434207,random
29,39,Alphazap,Customizable grid-enabled projection,http://dummyimage.com/250x250.jpg/dddddd/000000,4.5,2.2,4.2,1557805568,music
30,47,Regrant,Open-architected asynchronous Graphic Interface,http://dummyimage.com/250x250.jpg/cc0000/ffffff,2.7,1.4,1.4,1571694493,funny
31,23,Stringtough,Secured value-added productivity,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.7,4.2,3.9,1560875302,cool
32,27,Pannier,Front-line motivating circuit,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,2.6,4.6,3.5,1559299574,funny
33,6,Zaam-Dox,Virtual empowering service-desk,http://dummyimage.com/250x250.jpg/dddddd/000000,3.3,3.0,1.3,1564419275,epic
34,18,Lotlux,Decentralized coherent info-mediaries,http://dummyimage.com/250x250.jpg/dddddd/000000,1.7,4.3,1.4,1556490400,art
35,12,Tin,Cross-platform 6th generation software,http://dummyimage.com/250x250.jpg/dddddd/000000,4.8,3.0,3.1,1580383879,music
36,43,Konklux,Stand-alone holistic database,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.2,4.0,3.8,1581323643,stupid
37,2,Sonsing,Front-line object-oriented forecast,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.5,3.5,1.3,1557618576,cool
38,8,Viva,Profit-focused optimizing hub,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.2,4.2,1.7,1582064287,cool
39,53,Ronstring,Enterprise-wide hybrid archive,http://dummyimage.com/250x250.jpg/cc0000/ffffff,3.3,2.4,4.4,1560482177,funny
40,40,Andalax,Triple-buffered methodical installation,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.7,4.9,2.5,1563391539,music
41,18,Y-find,Vision-oriented demand-driven contingency,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,5.0,3.9,4.0,1579584557,stupid
42,46,Otcom,User-friendly even-keeled definition,http://dummyimage.com/250x250.jpg/ff4444/ffffff,2.8,1.2,4.2,1570925183,funny
43,34,Alphazap,Customizable interactive moderator,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,4.8,1.7,2.3,1577022012,epic
44,14,Fix San,Customizable content-based function,http://dummyimage.com/250x250.jpg/dddddd/000000,4.4,3.6,1.1,1553727667,gamer
45,48,Tampflex,Compatible empowering conglomeration,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,3.6,2.4,1.2,1564921587,stupid
46,31,Lotstring,Down-sized dedicated conglomeration,http://dummyimage.com/250x250.jpg/cc0000/ffffff,2.3,4.0,2.3,1563646794,epic
47,41,Fintone,Mandatory multi-tasking emulation,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,3.6,1.9,4.6,1560258627,gamer
48,49,Bytecard,Vision-oriented background support,http://dummyimage.com/250x250.jpg/dddddd/000000,4.7,1.3,1.6,1564794953,stupid
49,3,Sonsing,Switchable asymmetric software,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,2.8,4.8,4.7,1561582130,epic
50,29,Tin,Universal attitude-oriented knowledge base,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.6,2.4,2.2,1571827194,epic
51,46,Biodex,Seamless 6th generation time-frame,http://dummyimage.com/250x250.jpg/ff4444/ffffff,4.4,4.4,3.1,1571954103,music
52,24,Zontrax,Front-line grid-enabled policy,http://dummyimage.com/250x250.jpg/dddddd/000000,4.5,2.5,3.9,1571326815,random
53,2,It,Inverse holistic leverage,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,4.0,4.4,2.5,1581202847,stupid
54,57,Zathin,Upgradable human-resource intranet,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.3,1.7,1.9,1557981486,art
55,50,Bitwolf,Networked actuating strategy,http://dummyimage.com/250x250.jpg/dddddd/000000,3.2,3.4,3.9,1580433915,epic
56,49,Bigtax,Devolved explicit info-mediaries,http://dummyimage.com/250x250.jpg/dddddd/000000,1.1,3.4,4.3,1561681571,math
57,38,Alphazap,Multi-channelled radical encryption,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.0,3.9,1.8,1560076743,gamer
58,26,Tresom,Future-proofed value-added protocol,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,2.4,3.6,4.7,1555943143,music
59,41,Tres-Zap,Multi-layered heuristic architecture,http://dummyimage.com/250x250.jpg/cc0000/ffffff,3.0,3.2,1.5,1581448697,math
60,58,Ventosanzap,Business-focused directional synergy,http://dummyimage.com/250x250.jpg/ff4444/ffffff,2.0,3.1,3.4,1560333357,random
61,51,Daltfresh,Re-contextualized explicit encryption,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.5,2.0,3.0,1578136385,funny
62,16,Flexidy,Stand-alone zero administration matrix,http://dummyimage.com/250x250.jpg/dddddd/000000,3.6,3.6,1.4,1568373986,art
63,55,Tampflex,User-centric bi-directional infrastructure,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.3,2.5,1.1,1555856513,epic
64,56,Pannier,Robust grid-enabled moratorium,http://dummyimage.com/250x250.jpg/dddddd/000000,1.5,3.5,1.2,1576562450,random
65,15,Flowdesk,Focused radical extranet,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,3.3,4.4,2.4,1569215069,funny
66,15,Bytecard,Balanced 4th generation open system,http://dummyimage.com/250x250.jpg/dddddd/000000,1.9,3.8,3.3,1582829106,funny
67,47,Fixflex,Total bottom-line application,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.2,4.3,3.6,1572206096,stupid
68,57,Voyatouch,Monitored zero defect strategy,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.9,3.0,1.4,1574628570,stupid
69,50,Prodder,Self-enabling attitude-oriented definition,http://dummyimage.com/250x250.jpg/dddddd/000000,4.5,4.8,1.5,1583270941,art
70,27,Fixflex,Right-sized intangible intranet,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.0,4.6,3.2,1565309075,music
71,65,Greenlam,Reduced reciprocal benchmark,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.6,4.6,1.6,1575435483,art
72,55,Otcom,Enterprise-wide tertiary neural-net,http://dummyimage.com/250x250.jpg/dddddd/000000,3.8,4.7,3.8,1580249760,cool
73,2,Treeflex,Total explicit workforce,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.6,3.2,3.3,1576721216,music
74,22,Ventosanzap,Optional eco-centric solution,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.7,3.7,1.7,1553466435,math
75,61,Ventosanzap,Operative interactive collaboration,http://dummyimage.com/250x250.jpg/cc0000/ffffff,3.3,4.6,3.8,1561063768,gamer
76,5,Holdlamis,Progressive actuating success,http://dummyimage.com/250x250.jpg/dddddd/000000,2.1,3.9,2.5,1577503086,cool
77,28,Aerified,Open-architected web-enabled installation,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.6,1.2,2.6,1560276435,math
78,35,Kanlam,Assimilated explicit adapter,http://dummyimage.com/250x250.jpg/dddddd/000000,1.4,2.7,4.4,1571669159,gamer
79,16,Alphazap,Persevering responsive protocol,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.9,4.0,1.1,1582912778,cool
80,13,Veribet,Universal local customer loyalty,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.5,3.6,2.2,1571881217,funny
81,51,Stringtough,Quality-focused fault-tolerant focus group,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.7,2.0,3.9,1584609758,music
82,49,Greenlam,Streamlined discrete leverage,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,3.4,2.7,2.7,1571324342,art
83,19,Rank,Profit-focused national leverage,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.2,3.7,2.6,1578135640,random
84,18,Transcof,Right-sized maximized implementation,http://dummyimage.com/250x250.jpg/cc0000/ffffff,3.2,1.7,3.6,1567255691,stupid
85,32,It,Innovative real-time analyzer,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,3.6,3.4,2.2,1562212057,art
86,23,Stim,Fundamental heuristic forecast,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.1,1.5,1.0,1562141979,funny
87,55,Pannier,Expanded hybrid attitude,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,3.0,1.5,4.0,1574287880,math
88,7,Sub-Ex,Cloned analyzing internet solution,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.4,4.3,1.2,1573943015,music
89,44,Zathin,User-friendly dedicated internet solution,http://dummyimage.com/250x250.jpg/cc0000/ffffff,3.8,2.7,1.1,1579895455,random
90,5,Veribet,Re-contextualized needs-based installation,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,4.5,2.9,3.5,1583466612,funny
91,45,Holdlamis,Virtual object-oriented array,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,3.7,3.2,3.3,1579067777,music
92,44,Transcof,Diverse heuristic artificial intelligence,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.9,2.3,3.4,1573817138,funny
93,19,Redhold,Polarised holistic adapter,http://dummyimage.com/250x250.jpg/ff4444/ffffff,2.7,4.7,1.3,1581553450,random
94,65,Konklab,Re-contextualized scalable support,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.7,4.8,3.6,1558307454,cool
95,10,Stronghold,Profit-focused bottom-line matrices,http://dummyimage.com/250x250.jpg/ff4444/ffffff,2.0,4.5,3.3,1570491480,math
96,46,Konklab,Visionary leading edge groupware,http://dummyimage.com/250x250.jpg/dddddd/000000,2.5,4.1,2.7,1569050752,cool
97,2,Toughjoyfax,Intuitive leading edge conglomeration,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,4.1,1.9,4.5,1584109886,music
98,41,Biodex,Face to face 5th generation system engine,http://dummyimage.com/250x250.jpg/dddddd/000000,3.1,2.7,4.4,1566633137,music
99,7,Namfix,Devolved even-keeled implementation,http://dummyimage.com/250x250.jpg/cc0000/ffffff,2.5,1.4,2.8,1580061317,art
100,15,Hatity,Cross-group real-time intranet,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.0,4.1,1.6,1556979658,music
101,24,Tin,Upgradable bandwidth-monitored neural-net,http://dummyimage.com/250x250.jpg/dddddd/000000,4.2,2.5,1.3,1558441279,epic
102,54,Y-find,Reduced value-added frame,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.0,1.7,1.4,1580270623,cool
103,60,Home Ing,Versatile solution-oriented adapter,http://dummyimage.com/250x250.jpg/dddddd/000000,4.7,4.2,3.9,1580409610,gamer
104,26,Bytecard,Advanced secondary customer loyalty,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.5,1.1,2.1,1553814284,math
105,40,Greenlam,Organic user-facing protocol,http://dummyimage.com/250x250.jpg/ff4444/ffffff,2.5,3.9,3.1,1573966418,stupid
106,7,Lotstring,Advanced maximized hierarchy,http://dummyimage.com/250x250.jpg/ff4444/ffffff,4.2,4.5,3.6,1583080035,cool
107,44,Job,Implemented fresh-thinking standardization,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,3.7,1.4,3.5,1572600632,math
108,2,Span,Ameliorated intangible artificial intelligence,http://dummyimage.com/250x250.jpg/cc0000/ffffff,2.7,3.5,4.2,1579341035,stupid
109,61,Fix San,Self-enabling discrete approach,http://dummyimage.com/250x250.jpg/dddddd/000000,3.9,4.8,3.8,1557781443,stupid
110,44,Hatity,Reduced asynchronous moratorium,http://dummyimage.com/250x250.jpg/dddddd/000000,4.7,2.0,2.2,1567869997,epic
111,45,Fix San,Managed solution-oriented conglomeration,http://dummyimage.com/250x250.jpg/cc0000/ffffff,3.5,4.4,4.7,1564912853,stupid
112,49,Mat Lam Tam,Polarised fault-tolerant toolset,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.0,3.7,3.7,1577254094,gamer
113,63,Flowdesk,Ergonomic multi-state help-desk,http://dummyimage.com/250x250.jpg/ff4444/ffffff,4.2,4.9,3.7,1578214945,gamer
114,3,Overhold,Horizontal stable emulation,http://dummyimage.com/250x250.jpg/dddddd/000000,4.1,4.8,2.6,1584315411,art
115,8,Gembucket,Versatile incremental website,http://dummyimage.com/250x250.jpg/ff4444/ffffff,2.9,3.3,4.7,1567639867,epic
116,43,Transcof,Reduced dedicated encoding,http://dummyimage.com/250x250.jpg/cc0000/ffffff,2.5,2.0,3.8,1575670257,cool
117,16,Lotstring,Sharable grid-enabled analyzer,http://dummyimage.com/250x250.jpg/ff4444/ffffff,3.2,1.1,3.7,1555513844,cool
118,26,Fintone,Team-oriented optimizing customer loyalty,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.5,2.1,1.2,1557569059,art
119,5,Home Ing,Progressive secondary Graphical User Interface,http://dummyimage.com/250x250.jpg/cc0000/ffffff,2.4,1.3,2.2,1563557345,stupid
120,4,Regrant,Quality-focused dedicated circuit,http://dummyimage.com/250x250.jpg/ff4444/ffffff,3.0,3.7,1.9,1568305680,epic
121,22,Quo Lux,Customizable hybrid application,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,4.3,2.8,4.8,1567734372,math
122,11,Treeflex,Ergonomic global frame,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.8,4.8,1.1,1563283676,cool
123,19,Home Ing,Centralized zero tolerance approach,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.0,4.6,4.4,1576219798,funny
124,15,Prodder,Right-sized value-added product,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.9,2.4,1.2,1557815494,epic
125,57,Opela,Adaptive asymmetric open architecture,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,3.7,3.2,3.9,1558620228,cool
126,39,Zamit,Integrated explicit success,http://dummyimage.com/250x250.jpg/dddddd/000000,2.9,1.1,3.5,1560548050,music
127,51,Toughjoyfax,Reduced multi-tasking customer loyalty,http://dummyimage.com/250x250.jpg/cc0000/ffffff,3.7,4.0,1.5,1556102211,stupid
128,38,Gembucket,Function-based asynchronous initiative,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.5,3.7,3.4,1577904609,math
129,7,Namfix,Balanced reciprocal hub,http://dummyimage.com/250x250.jpg/cc0000/ffffff,1.1,2.8,3.4,1573203568,funny
130,27,Fixflex,Phased motivating benchmark,http://dummyimage.com/250x250.jpg/dddddd/000000,3.3,4.2,4.3,1569751408,funny
131,55,Hatity,Persevering non-volatile time-frame,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.2,4.4,2.0,1578282355,music
132,61,Latlux,Operative object-oriented help-desk,http://dummyimage.com/250x250.jpg/ff4444/ffffff,1.6,1.4,3.3,1553508465,random
133,20,Namfix,Mandatory mobile open system,http://dummyimage.com/250x250.jpg/cc0000/ffffff,3.8,3.3,1.1,1576933528,gamer
134,12,Vagram,Reactive motivating matrices,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,2.4,2.7,4.1,1558222250,epic
135,17,Redhold,Switchable well-modulated implementation,http://dummyimage.com/250x250.jpg/ff4444/ffffff,3.5,4.6,4.5,1583043058,music
136,25,Holdlamis,Front-line context-sensitive software,http://dummyimage.com/250x250.jpg/dddddd/000000,2.8,3.8,3.4,1562641651,cool
137,66,Fix San,Devolved tertiary focus group,http://dummyimage.com/250x250.jpg/dddddd/000000,3.3,1.1,2.0,1578542595,music
138,16,Pannier,Organic stable artificial intelligence,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,4.6,1.6,4.5,1557201879,epic
139,65,Trippledex,Expanded coherent conglomeration,http://dummyimage.com/250x250.jpg/dddddd/000000,4.8,2.4,2.1,1578828371,stupid
140,38,Redhold,Ameliorated content-based toolset,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.9,2.7,2.6,1556893912,random
141,40,Sub-Ex,Monitored human-resource matrices,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.0,2.7,1.3,1568550139,gamer
142,24,Y-find,Total clear-thinking website,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,3.3,2.5,1.0,1579176012,music
143,21,Sub-Ex,Monitored asynchronous solution,http://dummyimage.com/250x250.jpg/dddddd/000000,3.5,3.1,2.6,1569970251,math
144,65,Toughjoyfax,Organized intangible website,http://dummyimage.com/250x250.jpg/dddddd/000000,3.2,4.1,4.2,1553568231,cool
145,42,Solarbreeze,Compatible impactful toolset,http://dummyimage.com/250x250.jpg/dddddd/000000,2.5,4.0,3.4,1566202528,cool
146,47,Tres-Zap,Inverse client-server installation,http://dummyimage.com/250x250.jpg/cc0000/ffffff,4.8,4.4,4.3,1558027979,music
147,17,Cookley,Managed mobile encoding,http://dummyimage.com/250x250.jpg/ff4444/ffffff,2.4,2.5,1.9,1576237848,stupid
148,4,Flexidy,Synchronised web-enabled process improvement,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,2.8,1.2,4.8,1555386484,random
149,65,Vagram,Synchronised impactful challenge,http://dummyimage.com/250x250.jpg/5fa2dd/ffffff,1.4,2.2,2.6,1568951015,cool
150,26,Viva,Team-oriented discrete migration,http://dummyimage.com/250x250.jpg/cc0000/ffffff,3.5,2.0,1.7,1561891536,music`);

export default mockprojects;
