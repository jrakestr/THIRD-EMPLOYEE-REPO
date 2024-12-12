// NFL game data in CSV format
export const rawData = `gameid,date,time,away_team,home_team,by_pts,away_pred,home_pred,won_sims,avg_margin,actual_win_team,away_actual,home_actual,result_fav_num,result_fav,pred_total,week
1,2024-09-05,20:20:00,Baltimore Ravens,Kansas City Chiefs,3,15.9,21.7,0.6578,5.8,Kansas City Chiefs,20,27,1,Y,47,1
2,2024-09-06,20:15:00,Green Bay Packers,Philadelphia Eagles,1.5,17.1,22.4,0.64,5.3,Philadelphia Eagles,29,34,1,Y,63,1
3,2024-09-08,13:00:00,Pittsburgh Steelers,Atlanta Falcons,2.5,14.5,20.8,0.6711,6.3,Pittsburgh Steelers,18,10,0,N,28,1
4,2024-09-08,13:00:00,Arizona Cardinals,Buffalo Bills,7,15.1,24.7,0.7478,9.6,Buffalo Bills,28,34,1,Y,62,1
5,2024-09-08,13:00:00,Tennessee Titans,Chicago Bears,4.5,14.5,21,0.7022,6.5,Chicago Bears,17,24,1,Y,41,1
6,2024-09-08,13:00:00,New England Patriots,Cincinnati Bengals,9.5,14.5,19.4,0.6389,4.9,New England Patriots,16,10,0,N,26,1
7,2024-09-08,13:00:00,Houston Texans,Indianapolis Colts,2.5,18,21.2,0.58,3.2,Houston Texans,29,27,0,N,56,1
8,2024-09-08,13:00:00,Jacksonville Jaguars,Miami Dolphins,3.5,14,27.8,0.8267,13.8,Miami Dolphins,17,20,1,Y,37,1
9,2024-09-08,13:00:00,Carolina Panthers,New Orleans Saints,5,13.7,19.4,0.6622,5.7,New Orleans Saints,10,47,1,Y,57,1
10,2024-09-08,13:00:00,Minnesota Vikings,New York Giants,1,16,22.3,0.6578,6.3,Minnesota Vikings,28,6,0,N,34,1
11,2024-09-08,16:05:00,Las Vegas Raiders,Los Angeles Chargers,3.5,14.6,23,0.7278,8.4,Los Angeles Chargers,10,22,1,Y,32,1
12,2024-09-08,16:05:00,Denver Broncos,Seattle Seahawks,4.5,15.8,22.7,0.6844,6.9,Seattle Seahawks,20,26,1,Y,46,1
13,2024-09-08,16:25:00,Dallas Cowboys,Cleveland Browns,1.5,13.6,19.2,0.6544,5.6,Dallas Cowboys,33,17,0,N,50,1
14,2024-09-08,16:25:00,Washington Commanders,Tampa Bay Buccaneers,4,14.2,22.6,0.74,8.4,Tampa Bay Buccaneers,20,37,1,Y,57,1
15,2024-09-08,20:20:00,Los Angeles Rams,Detroit Lions,3.5,15.8,25,0.7522,9.2,Detroit Lions,20,26,1,Y,46,1
16,2024-09-08,20:15:00,New York Jets,San Francisco 49ers,5.5,12.9,23.2,0.76,10.2,San Francisco 49ers,19,32,1,Y,51,1
17,2024-09-12,20:15:00,Buffalo Bills,Miami Dolphins,2.5,14.1,24.8,0.7674,10.7,Buffalo Bills,31,10,0,N,41,2
18,2024-09-15,13:00:00,Los Angeles Chargers,Carolina Panthers,6.5,19.4,16.2,0.5944,3.2,Los Angeles Chargers,26,3,1,Y,29,2
19,2024-09-15,13:00:00,New Orleans Saints,Dallas Cowboys,6.5,13.3,15.6,0.5689,2.3,New Orleans Saints,44,19,0,N,63,2
20,2024-09-15,13:00:00,Tampa Bay Buccaneers,Detroit Lions,7,15,23.9,0.7333,8.9,Tampa Bay Buccaneers,20,16,0,N,36,2
21,2024-09-15,13:00:00,Indianapolis Colts,Green Bay Packers,3.5,17.7,24,0.6567,6.3,Green Bay Packers,10,16,1,Y,26,2
22,2024-09-15,13:00:00,Cleveland Browns,Jacksonville Jaguars,3,18,16.8,0.5122,1.3,Cleveland Browns,18,13,1,Y,31,2
23,2024-09-15,13:00:00,San Francisco 49ers,Minnesota Vikings,6,13.8,16.9,0.5678,3,Minnesota Vikings,17,23,0,N,40,2
24,2024-09-15,13:00:00,Seattle Seahawks,New England Patriots,3.5,12.2,13.6,0.5611,1.4,Seattle Seahawks,23,20,0,N,43,2
25,2024-09-15,13:00:00,New York Jets,Tennessee Titans,3.5,9.9,21.3,0.8067,11.4,New York Jets,24,17,0,N,41,2
26,2024-09-15,13:00:00,Las Vegas Raiders,Baltimore Ravens,9.5,13,24.7,0.8033,11.7,Las Vegas Raiders,26,23,0,N,49,2
27,2024-09-15,13:00:00,New York Giants,Washington Commanders,1.5,20.7,19.9,0.5389,0.8,Washington Commanders,18,21,1,Y,39,2
28,2024-09-15,16:05:00,Los Angeles Rams,Arizona Cardinals,1.5,19.8,22.2,0.5622,2.4,Arizona Cardinals,10,41,1,Y,51,2
29,2024-09-15,16:25:00,Pittsburgh Steelers,Denver Broncos,3,16.3,12.9,0.6156,3.5,Pittsburgh Steelers,13,6,1,Y,19,2
30,2024-09-15,16:25:00,Cincinnati Bengals,Kansas City Chiefs,5.5,20,23.5,0.5989,3.5,Kansas City Chiefs,25,26,1,Y,51,2
31,2024-09-15,20:20:00,Chicago Bears,Houston Texans,6,13.2,20,0.6856,6.8,Houston Texans,13,19,1,Y,32,2
32,2024-09-16,20:15:00,Atlanta Falcons,Philadelphia Eagles,6.5,17.6,21.2,0.6108,3.7,Atlanta Falcons,22,21,0,N,43,2
33,2024-09-19,20:15:00,New England Patriots,New York Jets,6.5,13.3,29.1,0.87,15.9,New York Jets,3,24,1,Y,42.4,3
34,2024-09-22,13:00:00,New York Giants,Cleveland Browns,6.5,14.2,29.8,0.85,15.6,New York Giants,21,15,0,N,44,3
35,2024-09-22,13:00:00,Chicago Bears,Indianapolis Colts,1.5,12.7,22.8,0.75,10.2,Indianapolis Colts,16,21,1,Y,35.5,3
36,2024-09-22,13:00:00,Houston Texans,Minnesota Vikings,2,29.2,24.9,0.61,4.4,Minnesota Vikings,7,34,0,N,54.1,3
37,2024-09-22,13:00:00,Philadelphia Eagles,New Orleans Saints,2.5,15,41.3,0.95,25.7,New Orleans Saints,15,41,1,Y,56.3,3
38,2024-09-22,13:00:00,Green Bay Packers,Tennessee Titans,2,30,27.6,0.79,11.1,Green Bay Packers,30,14,1,Y,57.6,3
39,2024-09-22,13:00:00,Los Angeles Chargers,Pittsburgh Steelers,1.5,15,20.3,0.65,5.3,Pittsburgh Steelers,10,20,1,Y,35.3,3
40,2024-09-22,13:00:00,Denver Broncos,Tampa Bay Buccaneers,6.5,26,12,0.8,12.4,Denver Broncos,26,7,1,Y,38,3
41,2024-09-22,16:05:00,Carolina Panthers,Las Vegas Raiders,5,36,8.7,0.96,27.9,Carolina Panthers,36,22,1,Y,44.7,3
42,2024-09-22,16:05:00,Miami Dolphins,Seattle Seahawks,4.5,18.1,36.5,0.88,18.4,Seattle Seahawks,3,24,1,Y,54.6,3
43,2024-09-22,16:25:00,Detroit Lions,Arizona Cardinals,3,23.4,38.3,0.84,14.9,Detroit Lions,20,13,0,N,61.7,3
44,2024-09-22,16:25:00,Baltimore Ravens,Dallas Cowboys,1,29,46.4,0.82,17.4,Baltimore Ravens,28,25,0,N,75.4,3
45,2024-09-22,16:25:00,San Francisco 49ers,Los Angeles Rams,7,31.7,35.9,0.6,4.2,Los Angeles Rams,24,27,1,Y,67.6,3
46,2024-09-22,20:20:00,Kansas City Chiefs,Atlanta Falcons,3.5,28.7,34.5,0.64,5.8,Kansas City Chiefs,22,17,0,N,63.2,3
47,2024-09-23,19:30:00,Jacksonville Jaguars,Buffalo Bills,5,21.2,31.5,0.74,10.3,Buffalo Bills,10,47,1,Y,52.7,3
48,2024-09-23,20:15:00,Washington Commanders,Cincinnati Bengals,7.5,38,27.8,0.7,8.1,Washington Commanders,38,33,0,N,65.8,3
49,2024-09-26,20:15:00,Dallas Cowboys,New York Giants,5.5,23.3,17.2,0.66,6,Dallas Cowboys,20,15,1,Y,40.5,4
50,2024-09-29,13:00:00,New Orleans Saints,Atlanta Falcons,1.5,32.5,27.4,0.61,5.1,Atlanta Falcons,24,26,0,N,59.9,4
51,2024-09-29,13:00:00,Cincinnati Bengals,Carolina Panthers,4.5,38.7,30.9,0.69,7.9,Cincinnati Bengals,34,24,1,Y,69.6,4
52,2024-09-29,13:00:00,Los Angeles Rams,Chicago Bears,3,33.7,26,0.67,7.7,Chicago Bears,18,24,0,N,59.7,4
53,2024-09-29,13:00:00,Pittsburgh Steelers,Indianapolis Colts,1.5,26.8,15.3,0.78,11.5,Indianapolis Colts,24,27,0,N,42.1,4
54,2024-09-29,13:00:00,Minnesota Vikings,Green Bay Packers,2.5,23.8,21.4,0.58,2.4,Minnesota Vikings,31,29,1,Y,45.2,4
55,2024-09-29,13:00:00,Jacksonville Jaguars,Houston Texans,7,45.2,18.3,0.96,26.9,Houston Texans,20,24,1,Y,63.5,4
56,2024-09-29,13:00:00,Denver Broncos,New York Jets,7.5,13.9,39.6,0.94,25.8,Denver Broncos,10,9,0,N,53.5,4
57,2024-09-29,13:00:00,Philadelphia Eagles,Tampa Bay Buccaneers,2.5,39.6,35.9,0.57,3.7,Tampa Bay Buccaneers,16,33,0,N,75.5,4
58,2024-09-29,16:05:00,Washington Commanders,Arizona Cardinals,3.5,44.4,34.9,0.72,9.6,Washington Commanders,42,14,1,Y,79.3,4
59,2024-09-29,16:05:00,New England Patriots,San Francisco 49ers,10,15.5,48.1,0.98,32.6,San Francisco 49ers,13,30,1,Y,63.6,4
60,2024-09-29,16:25:00,Cleveland Browns,Las Vegas Raiders,1,19.1,36.1,0.85,17,Las Vegas Raiders,16,20,1,Y,55.2,4
61,2024-09-29,16:25:00,Kansas City Chiefs,Los Angeles Chargers,8.5,22.8,30.8,0.69,8.1,Kansas City Chiefs,17,10,1,Y,53.6,4
62,2024-09-29,20:20:00,Buffalo Bills,Baltimore Ravens,2.5,36.4,36.2,0.5,0.2,Baltimore Ravens,10,35,0,N,72.6,4
63,2024-09-30,19:30:00,Tennessee Titans,Miami Dolphins,1,12.7,11.6,0.53,1.1,Tennessee Titans,31,12,1,Y,24.3,4
64,2024-09-30,20:15:00,Seattle Seahawks,Detroit Lions,3.5,22.4,19,0.58,3.4,Detroit Lions,29,42,0,N,41.4,5
65,2024-10-03,20:15:00,Tampa Bay Buccaneers,Atlanta Falcons,1.5,19.4,23.2,0.6,3.8,Atlanta Falcons,30,36,1,Y,42.6,5
66,2024-10-06,9:30:00,New York Jets,Minnesota Vikings,2.5,13.4,22.7,0.77,9.3,Minnesota Vikings,17,23,1,Y,36.1,5
67,2024-10-06,13:00:00,Carolina Panthers,Chicago Bears,3.5,15.2,17.3,0.55,2.1,Chicago Bears,10,36,1,Y,32.5,5
68,2024-10-06,13:00:00,Baltimore Ravens,Cincinnati Bengals,2.5,21.8,26.1,0.61,4.3,Baltimore Ravens,41,38,0,N,47.9,5
69,2024-10-06,13:00:00,Buffalo Bills,Houston Texans,1,12.6,22.7,0.78,10.1,Houston Texans,20,23,1,Y,35.3,5
70,2024-10-06,13:00:00,Indianapolis Colts,Jacksonville Jaguars,3,15.5,26.1,0.78,10.6,Jacksonville Jaguars,34,37,1,Y,41.6,5
71,2024-10-06,13:00:00,Miami Dolphins,New England Patriots,1,11.6,13.7,0.57,2,Miami Dolphins,15,10,0,N,25.3,5
72,2024-10-06,13:00:00,Cleveland Browns,Washington Commanders,3,12.2,25.3,0.86,13,Washington Commanders,13,34,1,Y,37.5,5
73,2024-10-06,16:05:00,Las Vegas Raiders,Denver Broncos,3,13.3,15.4,0.57,2.1,Denver Broncos,34,18,0,N,28.7,5
74,2024-10-06,16:05:00,Arizona Cardinals,San Francisco 49ers,7.5,17.1,28.2,0.78,11.1,Arizona Cardinals,24,23,0,N,45.3,5
75,2024-10-06,16:25:00,Green Bay Packers,Los Angeles Rams,3.5,19.8,24.5,0.63,4.7,Green Bay Packers,24,19,0,N,44.3,5
76,2024-10-06,16:25:00,New York Giants,Seattle Seahawks,6,9.6,32.1,1,22.4,New York Giants,29,20,0,N,41.7,5
77,2024-10-06,20:20:00,Dallas Cowboys,Pittsburgh Steelers,2.5,15.5,20.3,0.64,4.9,Dallas Cowboys,20,17,0,N,35.8,5
78,2024-10-07,20:15:00,New Orleans Saints,Kansas City Chiefs,5,19.7,20.2,0.51,0.5,Kansas City Chiefs,13,26,1,Y,39.9,5
79,2024-10-10,20:15:00,San Francisco 49ers,Seattle Seahawks,3.5,21.4,28.3,0.66,6.9,San Francisco 49ers,36,24,0,N,49.7,6
80,2024-10-13,9:30:00,Jacksonville Jaguars,Chicago Bears,2,18.4,19.4,0.52,1,Chicago Bears,16,35,1,Y,37.8,6
81,2024-10-13,13:00:00,Arizona Cardinals,Green Bay Packers,5,20.4,26.2,1,5.8,Green Bay Packers,13,34,1,Y,46.6,6
82,2024-10-13,13:00:00,Tampa Bay Buccaneers,New Orleans Saints,1.5,18.9,16.9,0.58,2,Tampa Bay Buccaneers,51,27,1,Y,35.8,6
83,2024-10-13,13:00:00,Houston Texans,New England Patriots,7,22.4,10.5,0.84,11.9,Houston Texans,41,21,1,Y,32.9,6
84,2024-10-13,13:00:00,Indianapolis Colts,Tennessee Titans,1,10.6,25.5,0.87,14.9,Indianapolis Colts,20,17,0,N,36.1,6
85,2024-10-13,13:00:00,Cleveland Browns,Philadelphia Eagles,8.5,9.6,24.4,0.89,14.8,Philadelphia Eagles,16,20,1,Y,34,6
86,2024-10-13,13:00:00,Washington Commanders,Baltimore Ravens,6.5,26.4,31.9,0.65,5.5,Baltimore Ravens,23,30,1,Y,58.3,6
87,2024-10-13,16:05:00,Los Angeles Chargers,Denver Broncos,3,12.8,14,0.55,1.2,Los Angeles Chargers,23,16,0,N,26.8,6
88,2024-10-13,16:05:00,Pittsburgh Steelers,Las Vegas Raiders,3,16.1,16.6,1,0.5,Pittsburgh Steelers,32,13,0,N,32.7,6
89,2024-10-13,16:25:00,Atlanta Falcons,Carolina Panthers,6,20.7,25.7,0.64,5,Atlanta Falcons,38,20,1,Y,46.4,6
90,2024-10-13,16:25:00,Detroit Lions,Dallas Cowboys,3,20.9,28.1,0.68,7.2,Detroit Lions,47,9,0,N,49,6
91,2024-10-13,20:20:00,Cincinnati Bengals,New York Giants,3.5,17.6,24.1,0.69,6.6,Cincinnati Bengals,17,7,1,Y,41.7,6
92,2024-10-14,20:15:00,Buffalo Bills,New York Jets,2.5,12.2,16.9,0.65,4.8,Buffalo Bills,23,20,0,N,29.1,6
93,2024-10-17,20:15:00,Denver Broncos,New Orleans Saints,1.5,14.2,18.6,0.63,4.5,Denver Broncos,33,10,0,N,32.8,7
94,2024-10-20,9:30:00,New England Patriots,Jacksonville Jaguars,5.5,13.7,29.8,0.89,16,Jacksonville Jaguars,16,32,1,Y,43.5,7
95,2024-10-20,13:00:00,Seattle Seahawks,Atlanta Falcons,2.5,23.3,25.7,0.57,2.3,Seattle Seahawks,34,14,0,N,49,7
96,2024-10-20,13:00:00,Tennessee Titans,Buffalo Bills,8.5,14.3,15.3,0.52,1,Buffalo Bills,10,34,1,Y,29.6,7
97,2024-10-20,13:00:00,Cincinnati Bengals,Cleveland Browns,4.5,13.6,20.7,0.72,7.1,Cincinnati Bengals,21,14,1,Y,34.3,7
98,2024-10-20,13:00:00,Miami Dolphins,Indianapolis Colts,3.5,15.6,19,0.6,3.5,Indianapolis Colts,10,16,0,N,34.6,7
99,2024-10-20,13:00:00,Houston Texans,Green Bay Packers,2.5,20,23.9,0.59,3.9,Green Bay Packers,22,24,0,N,43.9,7
100,2024-10-20,13:00:00,Detroit Lions,Minnesota Vikings,2.5,22.5,25.6,0.59,3.1,Detroit Lions,31,29,0,N,48.1,7
101,2024-10-20,13:00:00,Philadelphia Eagles,New York Giants,3.5,16.2,22,0.67,5.8,Philadelphia Eagles,28,3,1,Y,38.2,7
102,2024-10-20,16:05:00,Las Vegas Raiders,Los Angeles Rams,5.5,13.1,21.9,0.76,8.8,Los Angeles Rams,15,20,1,Y,35,7
103,2024-10-20,16:05:00,Carolina Panthers,Washington Commanders,7.5,17.5,34.5,0.89,17,Washington Commanders,7,40,1,Y,52,7
104,2024-10-20,16:25:00,Kansas City Chiefs,San Francisco 49ers,1.5,17.3,29.4,0.8,12,Kansas City Chiefs,28,18,0,N,46.7,7
105,2024-10-20,20:20:00,New York Jets,Pittsburgh Steelers,1.5,12.2,19.2,0.72,7,Pittsburgh Steelers,15,37,1,Y,31.4,7
106,2024-10-21,20:15:00,Baltimore Ravens,Tampa Bay Buccaneers,3.5,30.3,30.8,0.51,0.4,Baltimore Ravens,41,31,0,N,61.1,7
107,2024-10-21,21:00:00,Los Angeles Chargers,Arizona Cardinals,2.5,15.6,22.5,0.71,6.8,Arizona Cardinals,15,17,1,Y,38.1,8
108,2024-10-24,20:15:00,Minnesota Vikings,Los Angeles Rams,3,24.5,19.7,0.6339,4.8,Los Angeles Rams,30,20,0,N,44.2,8
109,2024-10-27,13:00:00,Baltimore Ravens,Cleveland Browns,9,30,13.9,0.8776,16.1,Cleveland Browns,29,24,0,N,43.9,8
110,2024-10-27,13:00:00,Tennessee Titans,Detroit Lions,11,25.6,13.4,0.799,12.2,Detroit Lions,52,14,1,Y,39,8
111,2024-10-27,13:00:00,Indianapolis Colts,Houston Texans,6,33.1,9.4,0.9551,23.8,Houston Texans,23,20,1,Y,42.5,8
112,2024-10-27,13:00:00,Green Bay Packers,Jacksonville Jaguars,4.5,25.6,21.4,0.6061,4.2,Green Bay Packers,30,27,1,Y,47,8
113,2024-10-27,13:00:00,Arizona Cardinals,Miami Dolphins,3,19.3,17.9,0.5357,1.4,Arizona Cardinals,28,27,0,N,37.2,8
114,2024-10-27,13:00:00,New York Jets,New England Patriots,7,18.1,17.2,0.5398,0.9,New England Patriots,25,22,0,N,35.3,8
115,2024-10-27,13:00:00,Atlanta Falcons,Tampa Bay Buccaneers,2.5,32.7,26.2,0.6531,6.4,Atlanta Falcons,31,26,1,Y,58.9,8
116,2024-10-27,13:00:00,Chicago Bears,Washington Commanders,2.5,27,15.9,0.7908,11.1,Washington Commanders,18,15,0,N,42.9,8
117,2024-10-27,16:05:00,New Orleans Saints,Los Angeles Chargers,7.5,21,16.8,0.6245,4.2,Los Angeles Chargers,26,8,1,Y,37.8,8
118,2024-10-27,16:05:00,Buffalo Bills,Seattle Seahawks,3,27.2,17.5,0.7571,9.7,Buffalo Bills,31,10,1,Y,44.7,8
119,2024-10-27,16:25:00,Philadelphia Eagles,Cincinnati Bengals,2.5,21.1,20.2,0.5122,0.9,Philadelphia Eagles,37,17,0,N,41.3,8
120,2024-10-27,16:25:00,Carolina Panthers,Denver Broncos,8.5,26.2,9.3,0.9092,16.8,Denver Broncos,28,14,1,Y,35.5,8
121,2024-10-27,16:25:00,Kansas City Chiefs,Las Vegas Raiders,10,19.9,17.7,0.5724,2.2,Kansas City Chiefs,27,20,1,Y,37.6,8
122,2024-10-27,20:20:00,Dallas Cowboys,San Francisco 49ers,4.5,30.3,19.1,0.7735,11.2,San Francisco 49ers,30,24,1,Y,49.4,8
123,2024-10-28,20:15:00,New York Giants,Pittsburgh Steelers,6.5,25.7,12.1,0.8328,13.6,Pittsburgh Steelers,26,18,1,Y,37.8,9
124,2024-10-31,20:15:00,Houston Texans,New York Jets,2,17.8,11.8,0.3055,5.9,New York Jets,21,13,0,N,29.6,9
125,2024-11-03,13:00:00,Dallas Cowboys,Atlanta Falcons,2.5,25.8,21.8,0.6284,4.1,Atlanta Falcons,27,21,1,Y,47.6,9
126,2024-11-03,13:00:00,Miami Dolphins,Buffalo Bills,6.5,22.1,17.1,0.6333,5,Buffalo Bills,30,27,1,Y,39.2,9
127,2024-11-03,13:00:00,New Orleans Saints,Carolina Panthers,7,29.2,13.1,0.8657,16.1,Carolina Panthers,23,22,0,N,42.3,9
128,2024-11-03,13:00:00,Las Vegas Raiders,Cincinnati Bengals,7.5,24.6,15.3,0.7784,9.3,Cincinnati Bengals,41,24,1,Y,39.9,9
129,2024-11-03,13:00:00,Los Angeles Chargers,Cleveland Browns,2,21.5,16.7,0.6392,4.8,Los Angeles Chargers,27,10,0,N,38.2,9
130,2024-11-03,13:00:00,Washington Commanders,New York Giants,3.5,27.7,20.7,0.6833,7,Washington Commanders,27,22,1,Y,48.4,9
131,2024-11-03,13:00:00,New England Patriots,Tennessee Titans,3,23.4,10.6,0.8451,12.8,Tennessee Titans,20,17,1,Y,34,9
132,2024-11-03,13:00:00,Denver Broncos,Baltimore Ravens,9,33.5,16.5,0.8716,17,Baltimore Ravens,41,10,1,Y,50,9
133,2024-11-03,16:05:00,Chicago Bears,Arizona Cardinals,1,23.6,17.5,0.6755,6.1,Arizona Cardinals,29,9,1,Y,41.1,9
134,2024-11-03,16:20:00,Jacksonville Jaguars,Philadelphia Eagles,7.5,28.5,15.4,0.8196,13.1,Philadelphia Eagles,28,23,1,Y,43.9,9
135,2024-11-03,16:25:00,Detroit Lions,Green Bay Packers,3.5,26.5,24.7,0.5471,1.8,Detroit Lions,24,14,0,N,51.2,9
136,2024-11-03,16:25:00,Los Angeles Rams,Seattle Seahawks,1,28.2,16.1,0.8137,12.1,Seattle Seahawks,26,20,0,N,44.3,9
137,2024-11-03,20:20:00,Indianapolis Colts,Minnesota Vikings,6,27.4,19,0.7373,8.4,Minnesota Vikings,21,13,1,Y,46.4,9
138,2024-11-04,20:15:00,Tampa Bay Buccaneers,Kansas City Chiefs,9,27.5,21.4,0.6509,6.2,Kansas City Chiefs,30,24,1,Y,48.9,10
139,2024-11-07,20:15:00,Cincinnati Bengals,Baltimore Ravens,6.5,20.7,30.8,0.7531,10.1,Baltimore Ravens,34,35,1,Y,51.5,10
140,2024-11-10,9:30:00,New York Giants,Carolina Panthers,5,20.5,18.2,0.5592,2.3,Carolina Panthers,17,20,0,N,38.7,10
141,2024-11-10,13:00:00,New England Patriots,Chicago Bears,6.5,14.7,22.2,0.7198,7.5,New England Patriots,19,3,0,N,36.9,10
142,2024-11-10,13:00:00,Buffalo Bills,Indianapolis Colts,4,19.7,23.5,0.6035,3.8,Buffalo Bills,30,20,1,Y,43.2,10
143,2024-11-10,13:00:00,Minnesota Vikings,Jacksonville Jaguars,4,18.4,23.2,0.6453,4.8,Minnesota Vikings,12,7,0,N,41.6,10
144,2024-11-10,13:00:00,Denver Broncos,Kansas City Chiefs,9.5,15.9,20.6,0.6337,4.7,Kansas City Chiefs,14,16,1,Y,36.5,10
145,2024-11-10,13:00:00,Atlanta Falcons,New Orleans Saints,3.5,26.3,24,0.564,2.3,New Orleans Saints,17,20,1,Y,50.3,10
146,2024-11-10,13:00:00,San Francisco 49ers,Tampa Bay Buccaneers,6.5,28.4,26.6,0.5337,1.8,San Francisco 49ers,23,20,1,Y,55,10
147,2024-11-10,13:00:00,Pittsburgh Steelers,Washington Commanders,2.5,21,28.6,0.6895,7.6,Pittsburgh Steelers,28,27,0,N,49.6,10
148,2024-11-10,16:05:00,Tennessee Titans,Los Angeles Chargers,7.5,13.2,23.2,0.7674,10.1,Los Angeles Chargers,17,27,1,Y,36.4,10
149,2024-11-10,16:25:00,New York Jets,Arizona Cardinals,1,13.7,21.7,0.7151,8,Arizona Cardinals,6,31,1,Y,35.4,10
150,2024-11-10,16:25:00,Philadelphia Eagles,Dallas Cowboys,7.5,26.4,13,0.8453,13.4,Philadelphia Eagles,34,6,1,Y,39.4,11
151,2024-11-10,20:20:00,Detroit Lions,Houston Texans,3,19.8,22.9,0.5907,3.1,Detroit Lions,26,23,1,Y,42.7,11
152,2024-11-11,20:15:00,Miami Dolphins,Los Angeles Rams,2.5,22.2,22.5,0.5058,0.3,Miami Dolphins,23,15,1,Y,44.7,11
153,2024-11-14,20:15:00,Washington Commanders,Philadelphia Eagles,3.5,19,26.7,0.6856,7.7,Philadelphia Eagles,18,26,1,Y,45.7,11
154,2024-11-17,13:00:00,Green Bay Packers,Chicago Bears,6,23.5,21.6,0.5567,1.9,Green Bay Packers,20,19,1,Y,45.1,11
155,2024-11-17,13:00:00,Jacksonville Jaguars,Detroit Lions,13,15.4,29.4,0.8378,14,Detroit Lions,6,52,1,Y,44.8,11
156,2024-11-17,13:00:00,Las Vegas Raiders,Miami Dolphins,7.5,16.4,24,0.7133,7.6,Miami Dolphins,19,34,1,Y,40.4,11
157,2024-11-17,13:00:00,Cleveland Browns,New Orleans Saints,1,14.8,26.3,0.7978,11.5,New Orleans Saints,14,35,1,Y,41.1,11
158,2024-11-17,13:00:00,Los Angeles Rams,New England Patriots,4.5,18.7,22,0.5878,3.4,Los Angeles Rams,28,22,0,N,40.7,11
159,2024-11-17,13:00:00,Minnesota Vikings,Tennessee Titans,6,19.2,20.6,0.5433,1.4,Minnesota Vikings,23,13,0,N,39.8,11
160,2024-11-17,13:00:00,Baltimore Ravens,Pittsburgh Steelers,3.5,25.4,22,0.5822,3.4,Pittsburgh Steelers,16,18,0,N,47.4,11
161,2024-11-17,16:05:00,Atlanta Falcons,Denver Broncos,2.5,20.8,21.1,0.5111,0.3,Denver Broncos,6,38,1,Y,41.9,11
162,2024-11-17,16:05:00,Seattle Seahawks,San Francisco 49ers,6.5,19.3,32.1,0.7944,12.8,Seattle Seahawks,20,17,0,N,51.4,11
163,2024-11-17,16:25:00,Kansas City Chiefs,Buffalo Bills,2.5,14.1,23.7,0.7422,9.6,Buffalo Bills,21,30,1,Y,37.8,11
164,2024-11-17,16:25:00,Cincinnati Bengals,Los Angeles Chargers,1.5,20.4,22,0.5333,1.6,Los Angeles Chargers,27,34,1,Y,42.4,11
165,2024-11-17,20:20:00,Indianapolis Colts,New York Jets,3.5,13.1,25.6,0.8244,12.5,Indianapolis Colts,28,27,0,N,38.7,11
166,2024-11-18,20:15:00,Houston Texans,Dallas Cowboys,7.5,26,10.8,0.8767,15.2,Houston Texans,34,10,1,Y,36.8,11`;