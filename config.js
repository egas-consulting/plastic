var config = {
    style: 'mapbox://styles/ed1990/clohj58na002601pmcrfceubt',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsb2llZHRyOTFwZjUyam8yZHl6ejNkcDAifQ.tYR2SbODulf8gF529UtQ0g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:Oswald; font-weight:400; padding: 0.1vh; color:#ffffff; font-size:1.5rem;" >Un secol de plastic</span>',
    subtitle: '<span style="font-family:Oswald; font-weight:200; color:#ffffff; font-size:2.5rem;" >INTERACTIV: Circuitul plasticului prin România: de unde vine, unde îl trimitem și cât rămâne aici</span>',
    byline: '<p style= "font-family:Oswald; font-weight:200; padding-bottom: 9vh; color:#ffffff; font-size:1.1rem;"><a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a></p> <p style= "font-family:Oswald; font-weight:200; padding: 0.3vh; color:#ffffff; font-size:1.1rem;">Scroll</p> <p> <img src="button.gif" alt="scroll down" width="70" height="60" /></p>',
    footer: '<p style="margin-top:1px; margin-bottom:1px;"><b>06 noiembrie 2023 </b></p> <p style="margin-top:1px; margin-bottom:1px;"><b>Sursa datelor:</b> Eurostat, Banca Mondială, UN Comtrade Database, Our World in Data <br> Material editat de: <a href="https://panorama.ro/author/alina-matis/" target="_blank">Alina Mărculescu Matiș</a> </p>',
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
            id: 'prim',
            alignment: 'center',        
            hidden: false,
            title: '',
            image: '',
            description: 'Începând cu data de 30 noiembrie 2023, în România va intra în vigoare <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> sistemul garanție-returnare (SGR). </span> De acum, plasticul nu mai e doar sursă de poluare și risipă, ci o resursă, cu un preț concret pentru fiecare consumator: <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 50 de bani, </span> cât e garanția pe recipient, care se adaugă prețului produselor vândute în ambalaje de plastic, sticlă sau metal și care se recuperează când e returnat ambalajul.',
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
            id: 'primpoza',
            alignment: 'center',        
            hidden: true,
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
            id: 'primpoza1',
            alignment: 'center',        
            hidden: true,
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
            id: 'primpoza2',
            alignment: 'center',        
            hidden: true,
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
            id: 'primpoza3',
            alignment: 'center',        
            hidden: true,
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
            id: 'prim2',
            alignment: 'center',        
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'Sistemul reprezintă un pas semnificativ în promovarea reciclării și reducerea poluării. Dintre cele trei tipuri de materiale incluse în SGR, <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> plasticul are de departe cel mai mare impact </span> asupra mediului. Asta și pentru că folosirea lui s-a extins cu viteză amețitoare în ultimul secol.',
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
            description: 'Materialele plastice, obținute din combustibili fosili, <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> au fost inventate acum mai bine de un secol. </span> Însă producția s-a răspândit abia după cel de-al Doilea Război Mondial. Potențialul lui a fost conștientizat foarte repede, iar plasticul a ajuns să transforme industrii și economia globală.',
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
            description: 'Cu fiecare deceniu care s-a scurs de atunci, cantitatea de plastic <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> produsă </span> pe glob a crescut exponențial. Chiar dacă o raportăm la creșterea populației planetei, tot am ajuns, în 70 de ani, de la <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 0,8 kg de plastic </span>produs anual pe cap de locuitor, la <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 57,9 kg de plastic. </span> Aici suntem acum.',
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
            description: 'Dacă, însă, situația nu se schimbă în viitorul apropiat, cantitatea de plastic produsă la nivel global și raportată la populație se va dubla, în următorii 40 ani. E un scenariu care rezultă din suprapunerea proiecțiilor ONU privind evoluția populației și a prognozelor Organizației de Cooperare și Dezvoltare Economică (OCDE) referitoare la producția de plastic.',
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'În următorii 40 ani, cantitatea de plastic produsă, raportată la populația globului <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> se va dubla. </span>',
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
            description: 'Problematic nu e doar că se produce tot mai mult plastic. Odată produs, el nu mai pleacă nicăieri sute de ani. <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> Cea mai mare parte a plasticului care s-a produs vreodată încă se află pe planetă.</span> Îl regăsim fie încă în uz, fie sub formă de deșeuri sau de plastic care și-a încheiat durata de folosire.',
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
            id: 'textgrafic',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/15620481/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15620481/?utm_source=embed&utm_campaign=visualisation/15620481" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            description: 'La nivel global, în 2019, <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 71,6% </span> din deșeurile de plastic erau gestionate necorespunzător sau aruncate la groapa de gunoi, <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 19,5% </span> erau incinerate și doar <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 9,3% </span> erau reciclate. Ce înseamnă acest lucru?',
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
            description: 'Din 1950 și până în 2023, s-au produs în total <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 11 miliarde de tone de plastic.</span>',
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
            id: 'text3chart',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/15620655/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15620655/?utm_source=embed&utm_campaign=visualisation/15620655" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            description: 'În acest moment, raportăm întreaga cantitate de plastic produsă din anii ‘50 și până în prezent la populația actuală a planetei - de 8 miliarde de oameni -, fără să ținem cont de metodele de eliminare ale plasticului, precum incinerarea. ',
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
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'Ipotetic, ar însemna <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 1,4 tone de plastic</span> pentru fiecare om. Sigur că o parte din această cantitate, așa cum am văzut mai sus, a fost eliminată deja, dar chiar dacă scădem această valoare cu 20% (cât ar putea reprezenta incinerarea), tot rămâne o cantitate impresionantă de plastic cumulat pe planetă/cap de locuitor.',
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
            description: 'Dar într-un scenariu în care producția de plastic crește exponențial, cantitatea de plastic care îi revine fiecărui om crește și ea.',
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
            description: 'Imaginați-vă 8 miliarde de oameni care transportă fiecare peste o tonă de plastic anul acesta. Anul viitor, la această cantitate se va mai adăuga creșterea aferentă fiecărei persoane.',
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
            description: 'Pe măsură ce producția de plastic crește, cantitatea de deșeuri de plastic crește și ea. Dacă ne uităm la deșeurile din plastic, ambalajele reprezintă o parte importantă. <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> Peste 30% din deșeurile de plastic produse anual </span> sunt date de producția de ambalaje. Aceste articole, cum ar fi pungile de plastic sau ambalajele alimentare, au un scop foarte lung, adesea de numai câteva minute sau ore, dar au capacitatea de a „bântui” mediul înconjurător timp de sute de ani după ce le aruncăm.',
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
            id: 'text8grafic',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',            
            description: '<iframe src="https://flo.uri.sh/visualisation/15620911/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:850px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15620911/?utm_source=embed&utm_campaign=visualisation/15620911" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            description: 'O mare parte din deșeurile de plastic <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> se află în oceane, </span> ceea ce are consecințe majore. Râurile mari au un rol important în transportul acestor deșeuri. După ce ajung în apele deschise ale mărilor și oceanelor, o parte din deșeuri rămân în apropierea țărmurilor sau, odată prinse în curenții oceanici, sunt purtate în jurul lumii.',
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
            description: 'Din întreaga cantitate de deșeuri de plastic emisă în oceane, Australia și Oceania dețin cea mai mică pondere.',
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
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
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',            
            description: 'În Asia, în schimb, e cea mai gravă situație. Continentul e liderul deșeurilor de plastic emise în ocean. <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> 80% din aceste deșeuri </span> pleacă din Asia.',
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
            description: 'Uniunea Europeană generează anual, în medie, <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">35,9 de kilograme de deșeuri de plastic din ambalaje</span> pe cap de locuitor.',
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
            id: 'text11grafic2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: '<iframe src="https://flo.uri.sh/visualisation/15621985/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15621985/?utm_source=embed&utm_campaign=visualisation/15621985" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 3,
                pitch: 0,
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
            description: 'Producția accelerată de deșeuri de plastic din ultimii ani a făcut posibilă „globalizarea reciclării”. Deși cea mai mare parte a deșeurilor de plastic este gestionată și reciclată la nivel național, exportul de deșeuri de plastic ajută la gestionarea unei părți a emisiilor de plastic într-un mod mai economic. De asemenea, reduce presiunea pe facilitățile locale de reciclare și cea pusă pe gropile de gunoi.',
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
            description: 'Importul de plastic are și avantaje financiare. Folosirea materialelor plastice reciclate în noi produse reprezintă o opțiune mult mai economică pentru industrii care, altfel, ar trebui să cumpere plastice noi, tot mai costisitoare, din cauza politicilor de combatere a poluării.',
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
            description: 'Cu toate că există avantaje ale comerțului cu deșeuri de plastic, efectul advers e că state mai puțin dezvoltate au devenit ținta unor practici de export care au dus la poluarea mediului înconjurător. Așa se face că în 2019, 187 de state au convenit adăugarea plasticului într-un amendament al Convenției de la Basel, care reglementează comerțul internațional cu deșeuri. Amendamentul limitează comerțul internațional cu resturi de plastic, cu excepția situațiilor în care nu există capacitatea adecvată de reciclare.',
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
            description: 'La nivelul Uniunii Europene, deșeurile de plastic ajung în principal în Germania, Țările de Jos și Belgia - țări cu porturi mari și cu capacitate de reciclare.',
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
            description: 'Până în 2013, România era preponderent exportator de deșeuri de plastic. Din 2013, însă, cantitatea de deșeuri de plastic importată a depășit-o pe cea pe care am trimis-o la export. Ba chiar <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> s-a triplat </span> în numai șase ani, adică până în 2019.',
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
            description: 'În 2022, <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">aproape 20% </span> din deșeurile de plastic importate de România au provenit din Grecia, iar alte 18%, din Olanda. De la vecinii bulgari, am importat 10% din totalul deșeurilor de plastic importate în anul respectiv.',
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
            description: '<iframe src="https://flo.uri.sh/visualisation/15599915/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15599915/?utm_source=embed&utm_campaign=visualisation/15599915" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            description: '<iframe src="https://flo.uri.sh/visualisation/15605231/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15605231/?utm_source=embed&utm_campaign=visualisation/15605231" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            description: '<span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;"> Aproape un sfert (24,7%) </span> din deșeurile de plastic pe care le exportăm merg către Turcia, 15% ajung în Italia și 10% se duc în Polonia.',
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
            description: 'Într-un context în care consumăm mai mult plastic ca oricând, sistemul de garanție-returnare (SGR) are un impact semnificativ în combaterea poluării, deoarece oferă un stimulent financiar consumatorilor, pentru a returna ambalajele post-consum pentru reciclare și a scădea, astfel, folosirea de plastic nou produs.',
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
        

        

        
        

        
        


        
        

    ]
};