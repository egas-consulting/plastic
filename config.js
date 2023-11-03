var config = {
    style: 'mapbox://styles/ed1990/clohjg3ot002401nz1go41801',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsb2hwYjg2NjFmMmcycW1lbGxwdGdoM2sifQ.hFMMUSiY99LxBf0keuLfDA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:Oswald; font-weight:400; padding: 0.1vh; color:#ffffff; font-size:3.5rem;" >Un secol de plastic</span>',
    subtitle: '<span style="font-family: Oswald; font-weight:200; color:#ffffff; font-size:1.6rem;" >Cât din plasticul planetei vine și pleacă în și din România</span>',
    byline: '<p style= "font-family:Oswald; font-weight:200; padding: 0.3vh; color:#ffffff; font-size:1.1rem;"><a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a></p> <p style= "font-family:Oswald; font-weight:200; padding: 0.3vh; color:#ffffff; font-size:1.1rem;">Scroll</p> <p> <img src="button.png" alt="scroll down" width="50" height="60" /></p>',
    footer: '<p style="margin-top:1px; margin-bottom:1px;"><b>14 august 2023 </b></p> <p style="margin-top:1px; margin-bottom:1px;"><b>Sursa datelor:</b> wikipedia.org, britannica.com, blackpast.org, </p>',
    chapters: [
        {
            id: 'empty',
            alignment: 'center',        
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'Intro',
            alignment: 'center',        
            hidden: false,
            title: '',
            image: '',
            description: 'Materialele plastice, obținute din combustibili fosili, <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">au fost inventate cu puțin peste un secol în urmă </span>, iar după cel de-Al Doilea Război Mondial, producția a crescut accelerat revoluționând multe sectoare ale economiei și industrii.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'Intro2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Cu fiecare deceniu care a trecut, cantitatea de plastic produsă pe glob a crescut exponențial și, deși și populația globului a crescut și ea în acest interval, cantitatea de plastic produsă, raportată la populația globului a crescut de la <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 1 kg de plastic </span> produs anual pe cap de locuitor, la <span style="outline-style: solid; outline-width: thin; outline-color:#6CA821; color:#ffffff; font-weight: bold;"> 58 de kg de plastic.</span>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'Intro2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'Folosind proiecțiile Națiunilor Unite referitoare la populație, bazate pe scenariul de fertilitate medie, precum și proiecțiile OCDE referitoare la producția de plastic, bazate pe un scenariu care presupune că politica actuală nu se va schimba în viitorul previzibil, redăm evoluția cantității de plastic produse în următorii 40 de ani.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cincizeci',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'saizeci',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'saptezeci',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'optzeci',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'nouazeci',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'douamii',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'douamiizece',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'douamiidouazeci',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'douamiitreizeci',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'douamiipatruzeci',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'douamiicincizeci',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'douamiisaizeci',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'În următorii 40 ani, cantitatea de plastic produsă pe cap de locuitor la nivel global <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> se va dubla. </span>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'empty1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        

        {
            id: 'text1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> Tot plasticul care s-a produs vreodată se află pe planetă </span>, fie în uz, fie sub formă de deșeuri, plasticuri care și-au atins durata de folosire.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'empty2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Ce înseamnă acest lucru?',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Cantitatea cumulativă a plasticului produs din 1950 până acum (2023) este de <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 11 miliarde de tone </span>. Dacă raportăm întreaga catitate de plastic produsă din anii 50 la populația actuală a planetei. înseamnă că fiecărui locuitor al planetei îi revine în 2023 <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 1,4 tone de plastic</span>.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'empty3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',            
            description: 'Dacă tot acest plastic ar fi disponibil și împărțit fiecărui om,',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text6',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'fiecare ar avea la-ndemână <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 1,4 tone de plastic</span>.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'empty4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text7',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: '<span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 8 miliarde de oameni</span> transportând fiecare aproape o tonă și jumătate de plastice.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'empty5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text8',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',            
            description: 'Și deși din această cantitate se referă la întreaga producție de plastic din care o parte este încă în uz, deșeurile reprezintă o parte importantă. <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">40% din producția anuală de plastic constă din articole de unică folosință</span>. Aceste produse, cum ar fi pungile de plastic sau ambalajele alimentare, servesc scopuri scurte, adesea de numai câteva minute sau ore, dar au capacitatea de a persista în mediul înconjurător timp de sute de ani.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text9',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '', 
            backimage:'yes',          
            description: 'O mare parte din deșeurile de plastic <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">se află în oceane</span>. Râurile mari au un rol important în transportul acestor deșeuri, acționând ca modalitate de transport pe măsură ce curg în aval. După ce ajung în apele deschise ale oceanelor, o parte din deșeuri rămân în apropierea țărmurilor sau, odată prinse în curenții oceanici, sunt purtate în jurul lumii.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        

        {
            id: 'oceania',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',            
            description: 'Din întreaga cantitate de deșeuri de plastic emisă în oceane, Australia și Ocenia dețin cea mai mică pondere.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'europa',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',            
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'americadenord',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',            
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'americadesud',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',            
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'africa',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',            
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'asia',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',            
            description: 'Asia rămâne liderul deșeurilor de plastic emise în ocean. Și deși din această cantitate se referă la întreaga producție de plastic din care o parte este încă în uz, deșeurile reprezintă o parte importantă. <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">Peste 80%</span> din aceste deșeuri pleacă de pe continentul asicatic.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'empty6',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text10',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Cum arată situația deșeurilor de plastic la nivelul Europei?',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text11',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Uniunea Europeană generează anual, în medie, <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">32 de kilograme de deșeuri de plastic</span> pe cap de locuitor.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text12',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Producția accelerată de deșeuri de plastic din ultimii ani a făcut posibilă "globalizarea reciclării". Deși cea mai mare parte a deșeurilor de plastic este gestionată și reciclată la nivel național, exportul de deșeuri de plastic ajută la gestionarea unei părți a emisiilor de plastic într-un mod mai economic și reduce presiunea asupra facilităților de reciclare locale și asupra gropilor de gunoi.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text13',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Importul de plastic are avantaje financiare. Redestinarea materialelor plastice reciclate în produse reprezintă o opțiune mult mai economică pentru industrii care altfel ar trebui să cumpere plastice noi, costisitoare.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text14',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Și deși există avantaje materiale ale comerțului cu deșeuri de plastic, state mai puțin dezvoltate au devenit ținta unor practici de export care au dus la poluarea mediului înconjurător. Așa se face că în 2019, 187 de state au convenit adăugarea plasticului într-un amendament al Conveției de la Basel, care reglementează comerțul internațional cu deșeuri. Amendamentul limitează comerțui internațional cu resturi de plastic, cu excepția situațiilor în care nu există capacitatea adecvată de reciclare.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text15',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'La nivelul Uniunii Europene, deșeurile de plastic ajung în principal în Germania, Țările de Jos și Belgia - țări cu porturi mari.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text16',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: '<iframe src="https://flo.uri.sh/visualisation/15566928/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15566928/?utm_source=embed&utm_campaign=visualisation/15566928" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text17',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Până în 2013 România era, în principal, exportator de deșeuri de plastic. Din 2013, cantitatea de deșeuri de plastic importată a depășit-o pe cea exportată și, mai mult, aceasta <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">s-a triplat </span>până în 2019.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text18',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: '<iframe src="https://flo.uri.sh/visualisation/15566099/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15566099/?utm_source=embed&utm_campaign=visualisation/15566099" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text19',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'în 2022, aproape 20% din deșeurile de plastic importate de România au provenit din Grecia, iar alte 18% din Olanda. de la vecinii Bulgari am importat 10% din totalul deșeurilor de plastic importate.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text20',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: '<iframe src="https://flo.uri.sh/visualisation/15567581/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15567581/?utm_source=embed&utm_campaign=visualisation/15567581" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text21',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Aproape un sfert (24,7%) din deșeurile de plastic pe care le exportăm merg către Turcia, 15% merg către Italia și 10% către Polonia.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text22',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Într-un context în care consumăm mai mult plastic ca oricând, Sistemele de Garanție-Returnare (SGR) au un impact semnificativ în combaterea poluării, deoarece oferă un stimulent financiar consumatorilor pentru a returna ambalajele post-consum pentru reciclare.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'text23',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Începând cu data de 30 noiembrie 2023, consumatorii vor putea returna ambalajele de unică folosință din plastic, sticlă sau metal pentru băuturi în magazine, ceea ce reprezintă un pas semnificativ în promovarea reciclării și reducerea poluării.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        
        {
            id: 'Methodology3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'douamii.png',           
            description: 'Reprezentarea șefilor de stat, și nu a șefilor de guvern oferă o perspectivă relevantă, deoarece, în majoritatea țărilor, șefii de stat sunt aleși prin vot popular direct. E un proces diferit, în cele mai multe cazuri, de numirea șefilor de guvern și oferă o perspectivă asupra opțiunilor cetățenilor. Cu alte cuvinte, pe cine aleg oamenii să îi reprezinte direct în cea mai înaltă funcție în stat, care sunt elementele din profilul candidatului cu care rezonează alegătorii?',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        
        


        
        

    ]
};