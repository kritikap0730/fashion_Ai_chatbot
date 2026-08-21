import express from 'express';
const app=express(); const PORT=3000;
app.use(express.json()); app.use(express.static('public'));
app.post('/api/chat',(req,res)=>{ const text=String(req.body.message||'').trim(); res.json({reply:style(text)}); });
function has(t,...w){return w.some(x=>t.includes(x));}
function style(raw){
 const t=raw.toLowerCase();
 if(!t) return 'Tell me the occasion, your vibe, or even just one clothing item you own. I can build the look from there ✨';
 let vibe=has(t,'cute','feminine','girly','soft')?'feminine and polished':has(t,'cool','edgy','street','hip hop','concert')?'cool and effortless':has(t,'classy','elegant','formal','professional')?'polished and sophisticated':has(t,'casual','comfortable','comfy')?'casual and comfortable':'balanced, stylish and effortless';
 let top='a fitted or slightly structured top'; let bottom='straight-leg or wide-leg trousers'; let shoes='clean sneakers'; let extra='small hoops, a simple necklace and a compact shoulder bag';
 if(has(t,'black skirt','skirt')) {top='a fitted top or tucked-in blouse';bottom='your skirt with a clean waistline';}
 if(has(t,'jeans','denim')) {bottom='your jeans';top='a fitted tee, tank or blouse';}
 if(has(t,'dress')) {top='your dress';bottom='skip a separate bottom and let the dress be the focal point';}
 if(has(t,'black top')) {top='your black top';}
 if(has(t,'white sneakers')) shoes='your white sneakers';
 if(has(t,'heels')) shoes='low or mid-height heels';
 if(has(t,'boots')) shoes='ankle boots';
 if(has(t,'interview','internship','presentation')) {vibe='professional but modern';top='a neat blouse, knit top or tailored shirt';bottom='tailored trousers or a clean midi skirt';shoes='loafers, ballet flats or low block heels';extra='minimal jewelry and a structured tote';}
 if(has(t,'concert','festival','gig')) {vibe='cool, comfortable and photo-ready';top='a fitted tee, tank or statement top';bottom='baggy jeans, cargo pants or a mini skirt with shorts underneath';shoes='comfortable sneakers or sturdy boots';extra='small crossbody bag and a few statement accessories';}
 if(has(t,'date','dinner','restaurant')) {vibe='put-together with a little romance';top='a flattering fitted top or simple dress';bottom='dark straight-leg trousers or a sleek skirt';shoes='ballet flats, sleek sneakers or low heels';extra='delicate jewelry and a small shoulder bag';}
 if(has(t,'birthday','party','rooftop','night out')) {vibe='fun, dressed-up and effortless';top='a cute fitted top or statement blouse';bottom='dark jeans, tailored trousers or a mini skirt';shoes='platform sneakers, boots or low heels';extra='statement earrings and a small bag';}
 if(has(t,'wedding','reception')) {vibe='elegant and occasion-appropriate';top='a dress, blouse or refined traditional-inspired top';bottom='a midi/maxi skirt or tailored trousers';shoes='dressy flats or low heels';extra='one statement accessory rather than many competing pieces';}
 if(has(t,'puja','temple','religious','family')) {vibe='respectful, neat and comfortable';top='a modest blouse, kurta or clean traditional-inspired top';bottom='a midi/maxi skirt, trousers or appropriate traditional bottom';shoes='comfortable flats or clean sandals';extra='simple jewelry and a practical bag';}
 let time=has(t,'morning','daytime')?'For daytime, keep fabrics light and accessories simple.':has(t,'evening','night','7pm','8pm','9pm')?'For evening, deepen the colors and add one slightly dressier detail.':'If the weather is warm, choose breathable fabric; if it is cool, add a light jacket or cardigan.';
 return `✨ **Your FashionAI recommendation**\n\n**Vibe:** ${vibe}.\n\n**1. Main piece:** ${top}.\n**2. Bottom:** ${bottom}.\n**3. Shoes:** ${shoes}.\n**4. Accessories:** ${extra}.\n**5. Styling:** Keep the outfit balanced — if one piece is bold, keep the rest cleaner.\n\n${time}\n\n**Why it works:** I’m not limiting you to a fixed occasion list. I’m reading the details you gave me and building a look around the setting, mood and level of dressiness. 💕\n\nIf you tell me **what clothes you already own, your preferred colors, budget, and the exact place/weather**, I can make this much more specific.`;
}
app.listen(PORT,()=>console.log(`FashionAI local is running at http://localhost:${PORT}`));
