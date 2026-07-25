import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Envelope.css';

const fullText = `**Hello, et**

Siguro sa ngayon, napapaisip ka na kung bakit paulit-ulit ko itong ginagawa. Kung bakit gumagawa pa rin ako ng mga ganitong sorpresa, nagsusulat ng mga salita, at naghahanap ng iba't ibang paraan para sabihin sa'yo ang isang bagay na pwede ko namang sabihin sa ilang simpleng salita lang.

Ang totoo… hindi ko rin alam kung paano ko ba talaga ito maipapaliwanag.

Hindi pa tayo nagkikita nang personal. Hindi ko pa nakikita kung paano ka ngumiti sa harapan ko. Hindi ko pa naririnig ang boses mo nang kaharap kita, at hindi pa tayo nakakapag-share ng kahit isang simpleng sandali na magkasama sa iisang lugar.

Pero kahit gano'n…

Kahit sa online lang tayo nagkakilala, naging isa ka sa mga taong inaabangan kong makausap.

Nakakagulat isipin kung paano nagagawa ng isang taong hindi ko pa nakikita nang personal na mapangiti ako sa simpleng message lang.

Kung paano nagagawa ng isang simpleng conversation natin na maging mas maganda ang isang ordinaryong araw.

Sa totoo lang, messages lang naman ang meron tayo. Mga kwento, tawanan, random na usapan, at mga simpleng moments na baka para sa ibang tao ay wala lang.

Pero para sa'kin, may halaga sila.

Alam kong apat na beses na akong umamin sa'yo tungkol sa nararamdaman ko.

At heto na naman ako ngayon, gumagawa ulit ng panibagong confession.

Siguro medyo matigas talaga ulo ko.

O baka hindi ko pa lang talaga nahanap yung tamang mga salita para maipaliwanag kung ano talaga ang nararamdaman ko para sa'yo.

Ayokong isipin mo na ginagawa ko lahat ng ito dahil may hinihintay akong kapalit mula sa'yo.

Ayokong madaliin ka.

Ayokong maramdaman mong kailangan mong sagutin ang feelings ko dahil lang paulit-ulit akong umaamin sa'yo.

Gusto ko lang maging honest sa'yo.

**Gusto kita.**

Gusto ko yung taong nakilala ko sa pamamagitan ng mga conversations natin.

Gusto ko yung pakiramdam na dala mo sa'kin kapag nag-uusap tayo.

Gusto ko yung mga maliliit na bagay tungkol sa'yo na unti-unti kong nakikilala, kahit na malayo tayo sa isa't isa.

At oo, baka medyo nakakabaliw isipin na nagkakaroon ako ng ganitong feelings para sa isang taong hindi ko pa naman nakikita nang personal.

Pero siguro, hindi naman talaga laging naghihintay ang feelings sa tamang pagkakataon.

Minsan, may mga taong nagiging special sa atin nang hindi natin namamalayan.

At sa'kin…

**Ikaw 'yon.**

Hindi ko alam kung ano ang mangyayari sa atin sa hinaharap.

Hindi ko alam kung darating ba yung araw na magkikita tayo at pagtatawanan natin kung paano nagsimula ang lahat ng ito online.

Hindi ko rin alam kung magiging higit pa ba tayo sa kung ano tayo ngayon.

Pero may isang bagay akong sigurado…

**Handa akong maghintay.**

Hindi kita mamadaliin.

Hindi kita pipilitin.

At hindi ko rin hihilingin na suklian mo agad ang nararamdaman ko.

Gusto ko lang ipakita sa'yo na seryoso ako.

Kung kailangan kong maghintay, maghihintay ako.

Kung kailangan kong kilalanin ka pa nang mas malalim, gagawin ko.

At kung kailangan kong patuloy kang ligawan hanggang sa dumating ang araw na makita mo rin kung gaano kita kagusto…

**Hindi ako magsasawa.**

Hindi dahil gusto kong pilitin kang mahalin ako.

Kundi dahil gusto kong ipakita sa'yo na may isang taong handang manatili, handang maghintay, at handang gawin ang lahat sa tamang paraan para mapatunayan kung gaano ka niya pinapahalagahan.

Kaya oo…

**Hihintayin kita.**

At habang naghihintay ako, hindi ako magsasawang ligawan ka.

Hindi ako magsasawang gumawa ng mga simpleng bagay para mapangiti ka.

Hindi ako magsasawang ipaalala sa'yo kung gaano ka ka-special sa'kin.

At hindi ako magsasawang sabihin sa'yo ang mga salitang:

**"Gusto kita."**

Kahit ilang beses ko pa itong sabihin.

Kahit pang-lima na itong confession ko.

Kahit ilang confession website pa ang gawin ko.

Dahil kung ikaw ang dahilan…

**I don't think I'll ever get tired of trying.**

Nagpapasalamat ako na nakilala kita.

Kahit online lang.

Kahit sa pamamagitan lang ng screen.

Kahit messages lang ang pagitan natin.

Nagagawa mo pa rin na maging isang taong gusto kong sulatan.

Isang taong worth it gawan ng limang confession websites.

At sa totoo lang…

Hindi ko alam kung ito na ba ang huli.

Baka oo.

Baka hindi.

Pero alam ko na sa likod ng bawat website, bawat message, at bawat confession na ginawa ko para sa'yo, may isang simpleng katotohanan na hindi nagbabago.

**Totoo talaga na gusto kita.**

Hindi dahil nakita na kita nang personal.

Hindi dahil matagal na tayong magkakilala.

Kundi dahil somewhere between all our conversations, unti-unti kitang naging mahalaga sa'kin nang hindi ko inaasahan.

Kaya kung dumating man yung araw na magkita tayo sa personal, sana pagtingin ko sa'yo, maisip ko:

*"Buti na lang, sinubukan kong kilalanin siya."*

At sana, pagdating ng araw na iyon, masasabi ko rin sa sarili ko:

*"Buti na lang, hindi ako nagsawang maghintay."*

At kung sakaling kailangan ko pang maghintay nang mas matagal…

Okay lang.

Dahil para sa'yo, willing akong maghintay.

Willing akong magpakatotoo.

At higit sa lahat…

**Willing akong patuloy kang ligawan.**

Ito na ang pang-lima kong confession.

At siguro, pagkatapos ng lahat ng websites at lahat ng salitang isinulat ko, ang pinakasimple pa rin na confession ang pinaka-totoo:

**Gusto kita.**

At gusto kitang makilala pa nang higit.

Hanggang sa dumating ang araw na iyon, nandito lang ako—

Isang taong nasa likod ng screen, naghihintay at umaasang balang araw, somehow, ang mga salitang ito ay hindi na lang basta mga salitang binabasa mo.

Baka balang araw…

**masabi ko rin ito sa'yo nang harapan.**

At kapag dumating ang araw na iyon, sana masasabi ko sa'yo nang buong tapang:

**"Matagal kitang hinintay.**

**At hindi ako nagsawang ligawan ka."**

**PS: Dash**`;

const renderFormattedText = (text) => {
  const paragraphs = text.split('\n\n');
  return paragraphs.map((paragraph, pIdx) => {
    const lines = paragraph.split('\n');
    return (
      <p key={pIdx} style={{ 
        marginBottom: '1.2rem', 
        textAlign: 'left', 
        lineHeight: '1.6', 
        color: '#3d2b1f',
        fontFamily: "'Dancing Script', cursive",
        fontSize: '1.35rem'
      }}>
        {lines.map((line, lIdx) => {
          const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/g);
          return (
            <React.Fragment key={lIdx}>
              {lIdx > 0 && <br />}
              {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={i} style={{ color: '#800F2F', fontWeight: 700, fontSize: '1.45rem' }}>{part.slice(2, -2)}</strong>;
                }
                if (part.startsWith('*') && part.endsWith('*')) {
                  return <em key={i} style={{ color: '#590D22', fontWeight: 600 }}>{part.slice(1, -1)}</em>;
                }
                return part;
              })}
            </React.Fragment>
          );
        })}
      </p>
    );
  });
};

const Envelope = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const letterRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      let currentLength = 0;
      let isCancelled = false;

      const startTyping = setTimeout(() => {
        const typeNext = () => {
          if (isCancelled) return;
          if (currentLength <= fullText.length) {
            setDisplayedText(fullText.substring(0, currentLength));
            const char = fullText[currentLength - 1];
            currentLength += 1;

            // Natural, romantic typing pauses on punctuation
            let delay = 38; 
            if (char === '.' || char === '?' || char === '!') delay = 350;
            else if (char === ',') delay = 180;
            else if (char === '\n') delay = 220;

            setTimeout(typeNext, delay);
          }
        };
        typeNext();
      }, 1000);

      return () => {
        isCancelled = true;
        clearTimeout(startTyping);
      };
    }
  }, [isOpen]);

  // Auto scroll down as text reveals
  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.scrollTop = letterRef.current.scrollHeight;
    }
  }, [displayedText]);

  const toggleEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <h2 style={{ marginBottom: '3rem', fontFamily: 'Playfair Display', color: 'var(--text-main)', textAlign: 'center' }}>
        {isOpen ? "Isang mensahe para sa 'yo..." : "I-tap para buksan"}
      </h2>

      <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`} onClick={toggleEnvelope}>
        <div className="envelope-flap">
          <div className="wax-seal"></div>
        </div>
        <div className="envelope-front"></div>
        <div className="letter" ref={letterRef}>
          <div className="letter-content" style={{ width: '100%' }}>
            <h3 style={{ 
              fontFamily: "'Great Vibes', cursive", 
              color: '#590D22', 
              marginBottom: '1.2rem', 
              fontSize: '2.5rem', 
              textAlign: 'center'
            }}>
              Para sa 'yo,
            </h3>
            
            <div style={{ fontSize: '1.05rem' }}>
              {renderFormattedText(displayedText)}
              {isOpen && displayedText.length < fullText.length && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  style={{ color: '#590D22', fontWeight: 'bold', fontSize: '1.4rem' }}
                >
                  |
                </motion.span>
              )}
            </div>

            <div style={{ marginTop: '2rem', marginBottom: '1rem', color: '#d81b60', fontSize: '2.5rem', textAlign: 'center' }}>
              🤍
            </div>

            {/* Next Stage Button */}
            {displayedText.length >= fullText.length && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}
              >
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onComplete) onComplete();
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(89, 13, 34, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '0.9rem 2rem',
                    fontSize: '1.1rem',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    background: 'linear-gradient(45deg, #590D22, #C5939A)',
                    color: '#fff',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(89, 13, 34, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Tingnan ang Huling Pahina 💫
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {/* Simple Confetti Effect when open */}
      {isOpen && (
        <div className="confetti-container">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                y: '-10vh', 
                x: `${Math.random() * 100}vw`,
                opacity: 1
              }}
              animate={{ 
                y: '100vh',
                rotate: Math.random() * 360,
                opacity: 0
              }}
              transition={{ 
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                position: 'absolute',
                width: '10px',
                height: '10px',
                backgroundColor: i % 3 === 0 ? '#ffb3c6' : (i % 3 === 1 ? '#ff4d6d' : '#d4af37'),
                borderRadius: i % 2 === 0 ? '50%' : '2px',
                boxShadow: '0 0 5px rgba(0,0,0,0.1)'
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Envelope;
