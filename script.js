const data = {
  greetings: [
    ["Hello", "Namaste", "नमस्ते"],
    ["Good morning", "Shubha prabhat", "शुभ प्रभात"],
    ["Good evening", "Shubha saanjh", "शुभ साँझ"],
    ["How are you?", "Tapaai kasto hunuhunchha?", "तपाईं कस्तो हुनुहुन्छ?"],
    ["I'm fine", "Ma sanchai chhu", "म सन्चै छु"],
    ["Nice to meet you", "Tapaailaai bhetera khushi lagyo", "तपाईंलाई भेटेर खुशी लाग्यो"],
    ["Goodbye", "Albida / Namaste", "अल्विदा / नमस्ते"],
    ["See you soon", "Chittai bhetaulaa", "छिट्टै भेटौंला"],
    ["See you again", "Feri bhetaulaa", "फेरि भेटौंला"],
    ["Take care", "Dhyān rakhnu hos", "ध्यान राख्नुहोस्"],
    ["Thank you", "Dhanyabaad", "धन्यवाद"]
  ],
  introductions: [
    ["What is your name?", "Tapaaiko naam ke ho?", "तपाईंको नाम के हो?"],
    ["My name is...", "Mero naam ... ho", "मेरो नाम ... हो"],
    ["Where are you from?", "Tapain kahaa baata hunuhunchha?", "तपाईं कहाँबाट हुनुहुन्छ?"],
    ["I am from...", "Ma ... baata ho", "म ... बाट हो"],
    ["How old are you?", "Tapain kati barsa hunu bhayo?", "तपाईं कति वर्ष हुनुभयो?"],
    ["I am ... years old", "Ma ... barsa bhae", "म ... वर्ष भएँ"],
    ["I am a student", "Ma ek chhatra ho", "म एक छात्र हुँ"],
    ["What work do you do?", "Tapaai ke kaam garnuhunchha?", "तपाईं के काम गर्नुहुन्छ?"],
    ["I am ...", "Ma ... ho", "म ... हुँ"],
    ["This is my friend", "Yo mero saathi ho", "यो मेरो साथी हो"],
    ["I live in...", "Ma ... maa baschhu", "म ... मा बस्छु"]
  ],
  routine: [
    ["I wake up at 6", "Ma 6 baje uthchhu", "म छ बजे उठ्छु"],
    ["I brush my teeth", "Ma mero daat majhchhu", "म मेरो दाँत माझ्छु"],
    ["I eat food", "Ma khaanaa khaanchhu", "म खाना खान्छु"],
    ["I go to work", "Ma kaam maa jaanchhu", "म काममा जान्छु"],
    ["I study in the evening", "Ma beluka padhchhu", "म बेलुका पढ्छु"],
    ["I cook food", "Ma khana pakaunchhu", "म खाना पकाउँछु"],
    ["I bathe", "Ma nuhanchhu", "म नुहाउँछु"],
    ["I sleep at 10", "Ma 10 baje sutchhu", "म दस बजे सुत्छु"],
    ["I relax at home", "Ma ghar maa aaram garchhu", "म घरमा आराम गर्छु"],
    ["I read books", "Ma kitaabharu padchhu", "म किताबहरू पढ्छु"]
  ],
  food: [
    ["I'm hungry", "Malai bhok laagyo", "मलाई भोक लाग्यो"],
    ["I'm thirsty", "Malai tirkhaa laagyo", "मलाई तिर्खा लाग्यो"],
    ["I want water", "Malai paani chahinchha", "मलाई पानी चाहिन्छ"],
    ["Do you have tea?", "Tapaai sanga chiya chha?", "तपाईं संग चिया छ?"],
    ["This is delicious", "Yo mitho chha", "यो मिठो छ"],
    ["I like spicy food", "Malai piro khana manparchha", "मलाई पिरो खाना मनपर्छ"],
    ["Vegetarian", "Shaakahari", "शाकाहारी"],
    ["Meat", "Maasu", "मासु"],
    ["Breakfast", "Bihanko khaja", "बिहानको खाजा"],
    ["Dinner", "Raatko khana", "रातको खाना"]
  ],
  travel: [
    ["Where is the bus station?", "Bus station kaha chha?", "बस स्टेशन कहाँ छ?"],
    ["How much is the ticket?", "Ticket kati ko ho?", "टिकट कतिको हो?"],
    ["I need a taxi", "Malai taxi chahinchha", "मलाई ट्याक्सी चाहिन्छ"],
    ["I want to go to...", "Ma ... jaana chaahanchhu", "म ... जान चाहन्छु"],
    ["Is it far?", "Yo taadha chha?", "यो टाढा छ?"],
    ["Please stop here", "Kripaya yahaa roknu hos", "कृपया यहाँ रोक्नुहोस्"],
    ["How long will it take?", "Kati samaya lagchha?", "कति समय लाग्छ?"],
    ["I am lost", "Ma haraye", "म हराएँ"],
    ["Can you help me?", "Tapaai malai madat garna saknuhunchha?", "तपाईं मलाई मद्दत गर्न सक्नुहुन्छ?"],
    ["I didn’t understand", "Maile bujhina", "मैले बुझिन"]
    ["I understood", "Maile bujhe", "मैले बुझें"]
  ],
  shopping: [
    ["How much is this?", "Yesko kati parchha?", "यसको कति पर्छ?"],
    ["It's too expensive", "Yo dherai mahango chha", "यो धेरै महँगो छ"],
    ["Lower the price", "Mulya ghataunus", "मूल्य घटाउनुहोस्"],
    ["I will take it", "Ma yo linchhu", "म यो लिन्छु"],
    ["I'm just looking", "Ma herdaimaatra chhu", "म हेर्दैमात्र छु"],
    ["Do you have another color?", "Ke tapaaisanga arko rang chha?", "के तपाईंसँग अर्को रंग छ?"],
    ["Where can I pay?", "Ma kaha tirna sakchhu?", "म कहाँ तिर्न सक्छु?"]
  ],
  numbers: [
    ["One", "Ek", "एक"],
    ["Two", "Dui", "दुई"],
    ["Three", "Tin", "तीन"],
    ["Four", "Chaar", "चार"],
    ["Five", "Paanch", "पाँच"],
    ["Six", "Chha", "छ"],
    ["Seven", "Saat", "सात"],
    ["Eight", "Aath", "आठ"],
    ["Nine", "Nau", "नौ"],
    ["Ten", "Das", "दस"],
    ["One Hundred", "Ek Saye", "एक सय"]
  ],
  family: [
    // --- Original Vocabulary ---
    ["Family", "Pariwaar", "परिवार"],
    ["Father", "Buva", "बुवा"],
    ["Mother", "Aama", "आमा"],
    ["Brother (elder/younger)", "Daai / Bhaai", "दाइ / भाइ"],
    ["Sister (elder/younger)", "Didi / Bahini", "दिदी / बहिनी"],
    ["Husband", "Shrimaan", "श्रीमान्"],
    ["Wife", "Shrimati", "श्रीमती"],
    ["Son", "Chhora", "छोरा"],
    ["Daughter", "Chhori", "छोरी"],
    // --- New Phrases ---
    ["This is my father.", "Yo mero buva hunuhunchha.", "यो मेरो बुवा हुनुहुन्छ।"],
    ["This is my mother.", "Yo mero aama hunuhunchha.", "यो मेरो आमा हुनुहुन्छ।"],
    ["I have one brother.", "Mero ekjana bhaai chha.", "मेरो एकजना भाइ छ।"],
    ["I have two sisters.", "Mero dui jana didi/bahini chhan.", "मेरो दुई जना दिदी/बहिनी छन्।"],
    ["Do you have siblings?", "Tapainko daaju-bhaai, didi-bahini chhan?", "तपाईंको दाजु-भाइ, दिदी-बहिनी छन्?"],
    ["I live with my family.", "Ma mero pariwaar sanga baschhu.", "म मेरो परिवारसँग बस्छु।"],
    ["My family is small.", "Mero pariwaar saano chha.", "मेरो परिवार सानो छ।"],
    ["What is your father's name?", "Tapainko buva ko naam ke ho?", "तपाईंको बुवाको नाम के हो?"],
    ["My mother's name is...", "Mero aama ko naam ... ho.", "मेरी आमाको नाम ... हो।"]
  ],

  health: [
    ["I feel sick", "Malai sancho chhaina", "मलाई सन्चो छैन"],
    ["I need a doctor", "Malai doctor chahiyo", "मलाई डाक्टर चाहियो"],
    ["Where is the hospital?", "Aspatal kaha chha?", "अस्पताल कहाँ छ?"],
    ["Help!", "Madat garnus!", "मदत गर्नुस!"],
    ["Call the police", "Prahari lai bolaunus", "प्रहरीलाई बोलाउनुस्"],
    ["It hurts here", "Yaha dukchha", "यहाँ दुख्छ"],
    ["I have a headache", "Mero tauko dukhyo", "मेरो टाउको दुख्यो"]
  ],
  daysAndTime: [
    ["What time is it?", "Ahile kati bajyo?", "अहिले कति बज्यो?"],
    ["What day is it today?", "Aaja ke baar ho?", "आज के बार हो?"],
    ["Sunday", "Aaitabaar", "आइतबार"],
    ["Monday", "Sombaar", "सोमबार"],
    ["Tuesday", "Mangalbaar", "मंगलबार"],
    ["Wednesday", "Budhabaar", "बुधबार"],
    ["Thursday", "Bihibaar", "बिहिबार"],
    ["Friday", "Shukrabaar", "शुक्रबार"],
    ["Saturday", "Shanibaar", "शनिबार"],
    ["Yesterday", "Hijo", "हिजो"],
    ["Today", "Aaja", "आज"],
    ["Tomorrow", "Bholi", "भोलि"]
  ],
  weather: [
    ["How's the weather?", "Aaja ko mausam kasto chha?", "आजको मौसम कस्तो छ?"],
    ["It is sunny", "Gham laageko chha", "घाम लागेको छ"],
    ["It is raining", "Paani pariraheko chha", "पानी परिरहेको छ"],
    ["It is cold", "Jado chha", "जाडो छ"],
    ["It is hot", "Garmi chha", "गर्मी छ"],
    ["It is cloudy", "Baadal laageko chha", "बादल लागेको छ"]
  ],

  hobbies: [
    ["What are your hobbies?", "Tapaaiko shauk ke ke ho?", "तपाईंको शौक के के हो?"],
    ["I like reading", "Malai padhna man parchha", "मलाई पढ्न मन पर्छ"],
    ["I like music", "Malai sangeet man parchha", "मलाई संगीत मन पर्छ"],
    ["I enjoy traveling", "Malai ghumna man parchha", "मलाई घुम्न मन पर्छ"],
    ["I play football", "Ma football khelchhu", "म फुटबल खेल्छु"]
  ],

  work: [
    ["Where do you work?", "Tapai kahaan kaam garnuhunchha?", "तपाईं कहाँ काम गर्नुहुन्छ?"],
    ["I work in office", "Ma office maa kaam garchhu", "म अफिसमा काम गर्छु"],
    ["I am a teacher", "Ma shikshak ho", "म शिक्षक हुँ"],
    ["I am a doctor", "Ma chikitsak ho", "म चिकित्सक हुँ"],
    ["Do you like your job?", "Tapai lai tapaaiko kaam man parchha?", "तपाईंलाई तपाईंको काम मन पर्छ?"]
  ],

  opinions: [
  ["What do you think?", "Tapaailaai ke laagchha?", "तपाईलाई के लाग्छ?"],
  ["I think it's good", "Malai laagchha yo ramro chha", "मलाई लाग्छ यो राम्रो छ"],
  ["I don't like it", "Malai yo man pardaina", "मलाई यो मन पर्दैन"],
  ["That's interesting", "Yo chaakhlaagdo chha", "यो चाखलाग्दो छ"],
  ["I agree", "Ma sahamat chhu", "म सहमत छु"],
  ["I disagree", "Ma asahamat chhu", "म असहमत छु"],
  ["In my opinion...", "Mero bichaar maa...", "मेरो विचारमा..."]
  ],

  relationships: [
  ["Are you married?", "Ke tapaai vivahit hunuhuncha?", "के तपाईं विवाहित हुनुहुन्छ?"],
  ["I am single", "Ma eklo chhu", "म एक्लो छु"],
  ["I have a partner", "Mero sathi chha", "मेरो साथी छ"],
  ["This is my wife", "Yo mero shrimati ho", "यो मेरी श्रीमती हो"],
  ["This is my husband", "Yo mero srimaan ho", "यो मेरा श्रीमान् हुन्"],
  ["We are friends", "Haami saathi hau", "हामी साथी हौं"],
  ["I love you", "Ma timilai maya garchhu", "म तिमीलाई माया गर्छु"]
],

technology: [
  ["Do you use a smartphone?", "Tapai smartphone prayog garnuhunchha?", "तपाईं स्मार्टफोन प्रयोग गर्नुहुन्छ?"],
  ["I use the internet a lot", "Ma dherai internet prayog garchhu", "म धेरै इन्टरनेट प्रयोग गर्छु"],
  ["Do you use social media?", "Tapai social media chalaunuhunchha?", "तपाईं सोसियल मिडिया चलाउनुहुन्छ?"],
  ["I like new technology", "Malai nyaa technology man parchha", "मलाई नयाँ technology मन पर्छ"],
  ["I work with computers", "Ma computer sanga kaam garchhu", "म कम्प्युटरसँग काम गर्छु"],
  ["What apps do you use?", "Tapai kun apps haru chalaunuhunchha?", "तपाईं कुन एप्सहरू चलाउनुहुन्छ?"]
],

  entertainment: [
    ["Do you watch movies?", "Tapai film hernuhunchha?", "तपाईं फिल्म हेर्नुहुन्छ?"],
    ["I like comedy movies", "Malai comedy film man parchha", "मलाई comedy फिल्म मन पर्छ"],
    ["Who is your favorite actor?", "Tapaaiko manparne abhineta ko ho?", "तपाईंको मनपर्ने अभिनेता को हो?"],
    ["I listen to music", "Ma sangeet sunchhu", "म संगीत सुन्छु"],
    ["I like dancing", "Malai nachna man parchha", "मलाई नाच्न मन पर्छ"]
  ],

  emotions: [
    ["How are you feeling?", "Tapai lai kasto lagiraheko chha?", "तपाईंलाई कस्तो लागिरहेको छ?"],
    ["I am happy", "Ma khushi chhu", "म खुसी छु"],
    ["I am sad", "Ma dukhi chhu", "म दुखी छु"],
    ["I am tired", "Ma thakeko chhu", "म थाकेको छु"],
    ["I am excited", "Ma utshahit chhu", "म उत्साहित छु"]
  ],

  dreams: [
    ["What is your dream?", "Tapaaiko sapana ke ho?", "तपाईंको सपना के हो?"],
    ["I want to travel the world", "Ma sansar ghumna chaahanchhu", "म संसार घुम्न चाहन्छु"],
    ["I want to be a doctor", "Ma doctor banna chaahanchhu", "म डाक्टर बन्न चाहन्छु"],
    ["I want to help others", "Ma arulai madat garna chaahanchhu", "म अरुलाई मद्दत गर्न चाहन्छु"],
    ["I want to start a business", "Ma ek byapaar suru garna chaahanchhu", "म एक व्यापार सुरु गर्न चाहन्छु"]
  ]
};

function showTopic(topic) {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  flashcardContainer.innerHTML = "";
  topicSelection.style.display = "none";
  backButton.style.display = "block";

  data[topic].forEach(([eng, roman, devanagari]) => {
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <strong>${eng}</strong>
        </div>
        <div class="card-back">
          <span class="devanagari-script">${devanagari}</span>
          <span class="romanized-script">${roman}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      // We target the inner card for the flip animation
      card.classList.toggle("flipped");
    });
    flashcardContainer.appendChild(card);
  });
}

function goBackToTopics() {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  flashcardContainer.innerHTML = "";
  topicSelection.style.display = "flex";
  backButton.style.display = "none";
}
