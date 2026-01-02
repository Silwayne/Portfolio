import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  currentLang: 'de' | 'en' = 'de';

  translations = {
    de: {
      'nav.logo': 'Ronny Pollmer',
      'nav.about': 'Über mich',
      'nav.skills': 'Fähigkeiten',
      'nav.projects': 'Projekte',
      'nav.contact': 'Kontakt',

      'header.name': 'Ronny Pollmer',
      'header.title': 'Frontend Developer',
      'header.projectsBtn': 'Meine Projekte',
      'header.contactBtn': 'Kontakt aufnehmen',

      'about.title': 'Über mich',
      'about.name': 'Ronny Pollmer',
      'about.location': 'Geisenfeld, Deutschland',
      'about.availability': 'Verfügbar für Remote & Vor-Ort Positionen',
      'about.relocation': 'Offen für Relocation',
      'about.languages':
        'Deutsch (Muttersprache), Englisch (Kommunikationssicher)',
      'about.description':
        "Mein Name ist Ronny Pollmer – ein leidenschaftlicher Frontend Developer mit einem Auge für Design und einem Händchen für Problemlösungen. Meine IT-Karriere begann mit einem Kindheitstraum, den ich nach Jahren endlich verwirkliche. Inspiriert von der Magie des Programmierens wagte ich den Schritt in die Webentwicklung und entdeckte meine Leidenschaft für sauberen Code und ansprechendes Design. Mit einer soliden Basis in Hardware-Diagnose und ersten Programmiererfahrungen meisterte ich die Herausforderungen der Weiterbildung – immer im Balanceakt zwischen Arbeit, Familie und Lernen. Diese Erfahrung schärfte mein Durchhaltevermögen und meine Stressresistenz, die ich heute in jedes Projekt einbringe. Meine Stärken liegen in HTML, CSS und der Kunst, komplexe Probleme in elegante Lösungen zu verwandeln. Projekte wie 'El Pollo Loco' lehrten mich, wie viel Detailarbeit in guter Software steckt und wie erfüllend es ist, solche Herausforderungen zu meistern. In Teamprojekten erlebte ich, wie produktive Zusammenarbeit zu großartigen Ergebnissen führt. Ich suche ein Team, das Wert auf Transparenz und gutes Miteinander legt, und möchte Apps entwickeln, die Nutzer*innen sowohl funktional als auch visuell begeistern. Neben meinen technischen Skills verbessere ich stetig meine Englischkenntnisse – denn lebenslanges Lernen gehört für mich dazu. Mit meiner Begeisterung für cleanen Code und durchdachte Benutzererfahrungen freue ich mich auf spannende Projekte!",

      'skills.title': 'Technische Fähigkeiten',
      'skills.coreCompetencies': 'Meine Kernkompetenzen',
      'skills.currentlyLearning': 'Derzeit lerne ich:',

      'projects.title': 'Meine Projekte',
      'projects.pokedex.title': 'Pokédex',
      'projects.pokedex.description':
        'Ein interaktives Verzeichnis aller Pokémon mit detaillierten Informationen und Suchfunktion.',
      'projects.elPolloLoco.title': 'El Pollo Loco',
      'projects.elPolloLoco.description':
        'Ein Jump and Run Spiel, bei dem der Spieler Münzen und Flaschen Sammeln muss, um einen Endgegner zu besiegen.',
      'projects.join.title': 'Join',
      'projects.join.description':
        'Eine Business Application für die Verwaltung von Projekten und Teams.',
      'projects.portfolio.title': 'Dieses Portfolio',
      'projects.portfolio.description':
        'Der Quellcode dieses Portfolio-Projekts ist auf GitHub verfügbar. Schau dir den Code an und erfahre mehr über die Implementierung.',
      'projects.liveDemo': 'Live Demo',
      'projects.githubRepo': 'GitHub Repository',

      'contact.title': 'Kontakt',
      'contact.letsWorkTogether': 'Lass uns zusammenarbeiten',
      'contact.description':
        'Lust auf eine Zusammenarbeit? Ich bin offen für neue berufliche Chancen und freue mich darauf, von Ihnen zu hören. Lassen Sie uns gemeinsam herausfinden, wie ich Ihr Team unterstützen kann!',
      'contact.form.name': 'Dein Name *',
      'contact.form.email': 'Deine E-Mail *',
      'contact.form.message': 'Deine Nachricht *',
      'contact.form.privacy.prefix':
        'Ich stimme zu, dass meine Daten gemäß der ',
      'contact.form.privacy.link': 'Datenschutzerklärung',
      'contact.form.privacy.suffix': ' verarbeitet werden dürfen. ',
      'contact.form.submit': 'Nachricht senden',
      'contact.successMessage': 'Vielen Dank! Deine Nachricht wurde gesendet.',

      'footer.name': 'Ronny Pollmer',
      'footer.title': 'Frontend Developer',
      'footer.about': 'Über mich',
      'footer.skills': 'Fähigkeiten',
      'footer.projects': 'Projekte',
      'footer.contact': 'Kontakt',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',

      'imprint.title': 'Impressum',
      'imprint.heading': 'Angaben gemäß § 5 TMG',
      'imprint.contact': 'Kontakt',
      'imprint.profession': 'Berufsbezeichnung',
      'imprint.disputeResolution': 'Streitbeilegung',
      'imprint.disputeResolution.text':
        'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
      'imprint.disputeResolution.participation':
        'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      'imprint.liabilityContent': 'Haftung für Inhalte',
      'imprint.liabilityContent.text1':
        'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      'imprint.liabilityContent.text2':
        'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
      'imprint.liabilityLinks': 'Haftung für Links',
      'imprint.liabilityLinks.text1':
        'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
      'imprint.liabilityLinks.text2':
        'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
      'imprint.copyright': 'Urheberrecht',
      'imprint.copyright.text1':
        'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
      'imprint.copyright.text2':
        'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
      'imprint.imageCredits': 'Bildnachweise',
      'imprint.imageCredits.list':
        '• Eigene Screenshots und Grafiken<br>• Icons: Boxicons<br>• Technologie-Logos: Eigene Erstellung',
      'imprint.backButton': 'Zurück zur Startseite',

      'privacy.title': 'Datenschutzerklärung',
      'privacy.overview': 'Datenschutz auf einen Blick',
      'privacy.general': 'Allgemeine Hinweise',
      'privacy.general.text':
        'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
      'privacy.dataCollection': 'Datenerfassung auf dieser Website',
      'privacy.dataCollection.responsible':
        'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
      'privacy.dataCollection.how': 'Wie erfassen wir Ihre Daten?',
      'privacy.dataCollection.how.text1':
        'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in das Kontaktformular eingeben.',
      'privacy.dataCollection.how.text2':
        'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
      'privacy.dataUsage': 'Wofür nutzen wir Ihre Daten?',
      'privacy.dataUsage.text':
        'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
      'privacy.rights': 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
      'privacy.rights.text':
        'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
      'privacy.rights.contact':
        'Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',
      'privacy.analytics': 'Analyse-Tools und Tools von Drittanbietern',
      'privacy.analytics.text':
        'Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.',
      'privacy.hosting': 'Hosting',
      'privacy.hosting.text1':
        'Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.',
      'privacy.hosting.text2':
        'Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).',
      'privacy.mandatoryInfo': 'Allgemeine Hinweise und Pflichtinformationen',
      'privacy.dataProtection': 'Datenschutz',
      'privacy.dataProtection.text1':
        'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
      'privacy.dataProtection.text2':
        'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
      'privacy.responsibleParty': 'Hinweis zur verantwortlichen Stelle',
      'privacy.responsibleParty.text':
        'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
      'privacy.responsibleParty.definition':
        'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',
      'privacy.storageDuration': 'Speicherdauer',
      'privacy.storageDuration.text':
        'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.',
      'privacy.revocation': 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
      'privacy.revocation.text':
        'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
      'privacy.dataPortability': 'Recht auf Datenübertragbarkeit',
      'privacy.dataPortability.text':
        'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
      'privacy.encryption': 'SSL- bzw. TLS-Verschlüsselung',
      'privacy.encryption.text1':
        "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 'http://' auf 'https://' wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
      'privacy.encryption.text2':
        'Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
      'privacy.contactForm': 'Kontaktformular',
      'privacy.contactForm.text1':
        'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
      'privacy.contactForm.text2':
        'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.',
      'privacy.contactForm.text3':
        'Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.',
      'privacy.backButton': 'Zurück zur Startseite',
    },
    en: {
      'nav.logo': 'Ronny Pollmer',
      'nav.about': 'About Me',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',

      'header.name': 'Ronny Pollmer',
      'header.title': 'Frontend Developer',
      'header.projectsBtn': 'My Projects',
      'header.contactBtn': 'Contact Me',

      'about.title': 'About Me',
      'about.name': 'Ronny Pollmer',
      'about.location': 'Geisenfeld, Germany',
      'about.availability': 'Available for Remote & On-Site Positions',
      'about.relocation': 'Open for Relocation',
      'about.languages': 'German (Native), English (Communication Proficient)',
      'about.description':
        "My name is Ronny Pollmer – a passionate Frontend Developer with an eye for design and a knack for problem-solving. My IT career began with a childhood dream that I'm finally realizing after years. Inspired by the magic of programming, I took the step into web development and discovered my passion for clean code and appealing design. With a solid foundation in hardware diagnostics and initial programming experience, I mastered the challenges of further education – always balancing work, family, and learning. This experience sharpened my perseverance and stress resistance, which I now bring to every project. My strengths lie in HTML, CSS, and the art of transforming complex problems into elegant solutions. Projects like 'El Pollo Loco' taught me how much detail goes into good software and how fulfilling it is to master such challenges. In team projects, I experienced how productive collaboration leads to great results. I'm looking for a team that values transparency and good teamwork, and I want to develop apps that delight users both functionally and visually. In addition to my technical skills, I'm constantly improving my English skills – because lifelong learning is important to me. With my enthusiasm for clean code and thoughtful user experiences, I look forward to exciting projects!",

      'skills.title': 'Technical Skills',
      'skills.coreCompetencies': 'My Core Competencies',
      'skills.currentlyLearning': 'Currently learning:',

      'projects.title': 'My Projects',
      'projects.pokedex.title': 'Pokédex',
      'projects.pokedex.description':
        'An interactive directory of all Pokémon with detailed information and search functionality.',
      'projects.elPolloLoco.title': 'El Pollo Loco',
      'projects.elPolloLoco.description':
        'A Jump and Run game where the player must collect coins and bottles to defeat a final boss.',
      'projects.join.title': 'Join',
      'projects.join.description':
        'A business application for managing projects and teams.',
      'projects.portfolio.title': 'This Portfolio',
      'projects.portfolio.description':
        'The source code of this portfolio project is available on GitHub. Check out the code and learn more about the implementation.',
      'projects.liveDemo': 'Live Demo',
      'projects.githubRepo': 'GitHub Repository',

      'contact.title': 'Contact',
      'contact.letsWorkTogether': "Let's Work Together",
      'contact.description':
        'Looking for a collaboration? I am currently open to new career opportunities and look forward to hearing from you. Let’s find out how I can support your team!',
      'contact.form.name': 'Your Name *',
      'contact.form.email': 'Your Email *',
      'contact.form.message': 'Your Message *',
      'contact.form.privacy.prefix':
        'I agree that my data may be processed in accordance with the ',
      'contact.form.privacy.link': 'Privacy Policy',
      'contact.form.privacy.suffix': '.',
      'contact.form.submit': 'Send Message',
      'contact.successMessage': 'Thank you! Your message has been sent.',

      'footer.name': 'Ronny Pollmer',
      'footer.title': 'Frontend Developer',
      'footer.about': 'About Me',
      'footer.skills': 'Skills',
      'footer.projects': 'Projects',
      'footer.contact': 'Contact',
      'footer.imprint': 'Imprint',
      'footer.privacy': 'Privacy Policy',

      'imprint.title': 'Imprint',
      'imprint.heading': 'Information pursuant to § 5 TMG',
      'imprint.contact': 'Contact',
      'imprint.profession': 'Profession',
      'imprint.disputeResolution': 'Dispute Resolution',
      'imprint.disputeResolution.text':
        'The European Commission provides a platform for online dispute resolution (ODR):',
      'imprint.disputeResolution.participation':
        'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
      'imprint.liabilityContent': 'Liability for Contents',
      'imprint.liabilityContent.text1':
        'As service providers, we are liable for our own content on these pages in accordance with general laws pursuant to § 7 (1) TMG. However, according to §§ 8 to 10 TMG, service providers are not obligated to permanently monitor submitted or stored information or to search for evidence that indicates illegal activities.',
      'imprint.liabilityContent.text2':
        'Legal obligations to remove information or to block the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge of a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.',
      'imprint.liabilityLinks': 'Liability for Links',
      'imprint.liabilityLinks.text1':
        'Our offer includes links to external third-party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.',
      'imprint.liabilityLinks.text2':
        'The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.',
      'imprint.copyright': 'Copyright',
      'imprint.copyright.text1':
        'The contents and works on these websites created by the website operator are subject to German copyright law. The reproduction, editing, distribution as well as the use of any kind outside the limits of the copyright law require the written consent of the respective author or creator. Downloads and copies of these websites are permitted for private use only.',
      'imprint.copyright.text2':
        'The commercial use of our contents without permission of the originator is prohibited. Copyright laws of third parties are respected as long as the contents on these websites do not originate from the operator. Contributions of third parties on this site are indicated as such. Should you become aware of copyright infringement, we ask that you notify us accordingly. We will remove such content immediately upon becoming aware of any violations.',
      'imprint.imageCredits': 'Image Credits',
      'imprint.imageCredits.list':
        '• Own screenshots and graphics<br>• Icons: Boxicons<br>• Technology logos: Own creation',
      'imprint.backButton': 'Back to Homepage',

      'privacy.title': 'Privacy Policy',
      'privacy.overview': 'Privacy at a Glance',
      'privacy.general': 'General Information',
      'privacy.general.text':
        'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you could be personally identified.',
      'privacy.dataCollection': 'Data Collection on this Website',
      'privacy.dataCollection.responsible':
        'Who is responsible for data collection on this website?',
      'privacy.dataCollection.how': 'How do we collect your data?',
      'privacy.dataCollection.how.text1':
        'Some data are collected when you provide it to us. This could, for example, be data you enter into a contact form.',
      'privacy.dataCollection.how.text2':
        'Other data are collected automatically or after your consent when visiting the website by our IT systems. This is primarily technical data (e.g., internet browser, operating system, or time of page view). This data is collected automatically as soon as you enter this website.',
      'privacy.dataUsage': 'What do we use your data for?',
      'privacy.dataUsage.text':
        'Part of the data is collected to ensure the proper functioning of the website. Other data can be used to analyze how visitors use the site.',
      'privacy.rights': 'What rights do you have regarding your data?',
      'privacy.rights.text':
        'You have the right to receive information about the origin, recipient, and purpose of your stored personal data at any time, free of charge. You also have the right to request that this data be corrected or deleted. If you have given your consent to data processing, you may revoke this consent at any time for the future. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data.',
      'privacy.rights.contact':
        'You can contact us at any time at the address given in the legal notice if you have further questions about data protection.',
      'privacy.analytics': 'Analytics and Third-Party Tools',
      'privacy.analytics.text':
        'When visiting this website, your surfing behavior may be statistically analyzed. This is done primarily with so-called analytics programs. Detailed information about these analytics programs can be found in the following privacy policy.',
      'privacy.hosting': 'Hosting',
      'privacy.hosting.text1':
        "This website is hosted by an external service provider (host). The personal data collected on this website is stored on the host's servers. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses, and other data generated via a website.",
      'privacy.hosting.text2':
        'The use of the host is for the purpose of fulfilling contracts with our potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of a secure, fast, and efficient provision of our online services by a professional provider (Art. 6(1)(f) GDPR).',
      'privacy.mandatoryInfo': 'General Information and Mandatory Disclosures',
      'privacy.dataProtection': 'Data Protection',
      'privacy.dataProtection.text1':
        'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.',
      'privacy.dataProtection.text2':
        'When you use this website, various personal data are collected. Personal data is data that can be used to identify you personally. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.',
      'privacy.responsibleParty': 'Information about the Responsible Party',
      'privacy.responsibleParty.text':
        'The party responsible for processing data on this website is:',
      'privacy.responsibleParty.definition':
        'The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).',
      'privacy.storageDuration': 'Storage Duration',
      'privacy.storageDuration.text':
        'Unless a more specific storage period is specified within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, deletion will take place after these reasons no longer apply.',
      'privacy.revocation': 'Revocation of Your Consent to Data Processing',
      'privacy.revocation.text':
        'Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The legality of the data processing carried out before the revocation remains unaffected by the revocation.',
      'privacy.dataPortability': 'Right to Data Portability',
      'privacy.dataPortability.text':
        'You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done to the extent technically feasible.',
      'privacy.encryption': 'SSL or TLS Encryption',
      'privacy.encryption.text1':
        "This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator. You can recognize an encrypted connection by the fact that the address line of the browser changes from 'http://' to 'https://' and by the lock symbol in your browser line.",
      'privacy.encryption.text2':
        'If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.',
      'privacy.contactForm': 'Contact Form',
      'privacy.contactForm.text1':
        'If you send us inquiries via the contact form, your information from the inquiry form, including the contact data you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not share this data without your consent.',
      'privacy.contactForm.text2':
        'The processing of this data is based on Art. 6(1)(b) GDPR if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries addressed to us (Art. 6(1)(f) GDPR) or on your consent (Art. 6(1)(a) GDPR) if this has been requested.',
      'privacy.contactForm.text3':
        'The data you enter in the contact form will remain with us until you ask us to delete it, revoke your consent to store it, or the purpose for storing the data no longer applies (e.g., after your request has been processed). Mandatory statutory provisions – in particular retention periods – remain unaffected.',
      'privacy.backButton': 'Back to Homepage',
    },
  };

  constructor() {
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.startsWith('de') ? 'de' : 'en';
    this.currentLang = (savedLang as 'de' | 'en') || browserLang;
  }

  setLanguage(lang: 'de' | 'en') {
    this.currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
  }

  t(key: string): string {
    const langData = this.translations[this.currentLang] as Record<
      string,
      string
    >;
    return langData[key] || key;
  }
}
