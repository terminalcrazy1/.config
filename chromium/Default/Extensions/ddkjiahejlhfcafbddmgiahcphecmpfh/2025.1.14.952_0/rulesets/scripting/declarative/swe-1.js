/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: swe-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".sp-message-open body\",\"action\":[\"style\",\"overflow:initial!important; position:unset!important; margin-top:unset!important;\"]}"],["{\"selector\":\"body.cookies-not-set\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\"html.force--consent.show--consent\",\"action\":[\"style\",\"overflow-y:unset!important;\"]}"],["{\"selector\":\".MediaWrapper-content\",\"action\":[\"style\",\"opacity:unset!important\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"--scrollbar-width:initial!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"opacity:1!important\"]}"],["{\"selector\":\".pum-open\",\"action\":[\"style\",\"overflow:auto!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow:initial!important\"]}"],["{\"selector\":\".bbImageWrapper--preview.active img\",\"action\":[\"style\",\"-webkit-filter:none!important; filter:none!important; transform:none!important; -webkit-transform:none!important;\"]}","{\"selector\":\"body.forum-logged-out .svartalistan-results-login-required\",\"action\":[\"style\",\"height: unset !important;\"]}"],["{\"selector\":\"*\",\"action\":[\"style\",\"user-select: auto !important;\"]}"],["{\"selector\":\"html, body\",\"action\":[\"style\",\"overflow:auto!important;\"]}"],["{\"selector\":\"html::before\",\"action\":[\"style\",\"content: \\\"OBS! VARNING! Om denna sida är en butik så är det förmodligen en bluffbutik. Detta är ett meddelande från den svenska listan i din annonsblockerare.\\\" !important; font-size: 18px !important; font-family: sans !important; background-color: red !important; color: white !important; padding: 6px !important; width: 100% !important; display: block !important; text-align: center !important;\"]}"],["{\"selector\":\".sp-message-open body\",\"action\":[\"style\",\"overflow:unset!important;position:unset!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"html, body\",\"action\":[\"style\",\"overflow:unset!important;\"]}"],["{\"selector\":\".opacity-fade\",\"action\":[\"style\",\"opacity:1!important; transition:none!important; animation:unset!important;\"]}"],["{\"selector\":\"*\",\"action\":[\"style\",\"-webkit-touch-callout: default !important; -webkit-user-select: text !important; -moz-user-select: text !important; -ms-user-select: text !important; user-select: text !important;\"]}","{\"selector\":\"::selection\",\"action\":[\"style\",\"background-color:#007aff!important;color:#fff!important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"user-select:unset!important; -moz-user-select:unset!important; -webkit-user-select:unset!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"position:unset!important;overflow-y:scroll!important;\"]}"],["{\"selector\":\"body.didomi-popup-open\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\".main-page-content\",\"action\":[\"style\",\"background-image:none!important;\"]}"],["{\"selector\":\".paywalled.hidden\",\"action\":[\"style\",\"display:unset!important\"]}"],["{\"selector\":\".tapet-popup-js-no-scroll, .tapet-no-scroll\",\"action\":[\"style\",\"overflow-y:initial!important; position:unset!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"display:unset!important\"]}"],["{\"selector\":\"#master.cookie-consenting\",\"action\":[\"style\",\"margin-top:0!important;\"]}"],["{\"selector\":\".mediaconnect-protected-content .Carousel\",\"action\":[\"style\",\"opacity:unset!important;\"]}"],["{\"selector\":\".mediaconnect-protected-content, .mediaconnect-protected-content--show\",\"action\":[\"style\",\"max-height: unset !important; overflow: unset !important;\"]}","{\"selector\":\".mediaconnect-protected-content::after\",\"action\":[\"style\",\"background: unset !important;\"]}"],["{\"selector\":\".sesamy-protected-content\",\"action\":[\"style\",\"max-height:unset!important;overflow:unset!important;\"]}","{\"selector\":\".sesamy-protected-content.active::after\",\"action\":[\"style\",\"background:unset!important;\"]}"],["{\"selector\":\"html.modal-cacsp-open\",\"action\":[\"style\",\"position:unset!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y:initial!important\"]}"],["{\"selector\":\"body[data-modal-open]\",\"action\":[\"style\",\"overflow-y:unset!important;\"]}"],["{\"selector\":\".cli-barmodal-open\",\"action\":[\"style\",\"overflow:auto!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\"html.overflow-hidden\",\"action\":[\"style\",\"overflow:unset!important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"height:unset!important;\"]}"],["{\"selector\":\".wp-pagenavi\",\"action\":[\"style\",\"position:unset!important;z-index:unset!important\"]}"],["{\"selector\":\".thb-page-transition-on\",\"action\":[\"style\",\"opacity:1!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow:unset!important; position:unset!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\".js-preloader > .document, .js-preloader > .hero-section\",\"action\":[\"style\",\"opacity: 1 !important; visibility: visible !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"opacity:unset!important\"]}"],["{\"selector\":\".lock-scroll\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\"#MoreLink_content-container\",\"action\":[\"style\",\"height:unset!important;\"]}","{\"selector\":\".thecontent, .entry-content\",\"action\":[\"style\",\"max-height: unset !important; overflow: initial !important; height: unset !important;\"]}","{\"selector\":\".wp-caption\",\"action\":[\"style\",\"display:initial!important\"]}"],["{\"selector\":\"#LoggaDiv\",\"action\":[\"style\",\"position:unset!important;\"]}"],["{\"selector\":\".et_pb_section\",\"action\":[\"style\",\"opacity:1!important; animation-duration:unset!important; animation-fill-mode:unset!important;\"]}"],["{\"selector\":\".loading\",\"action\":[\"style\",\"opacity:1!important\"]}"],["{\"selector\":\".overflow-hidden\",\"action\":[\"style\",\"overflow-y: initial !important;\"]}"],["{\"selector\":\"body.modal-active\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow:unset!important; position:unset!important;\"]}"],["{\"selector\":\".header-menu__wrapp\",\"action\":[\"style\",\"position:unset!important\"]}"],["{\"selector\":\".no-scroll\",\"action\":[\"style\",\"overflow: initial !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"html.g1-popup-visible\",\"action\":[\"style\",\"overflow: initial !important;\"]}"],["{\"selector\":\":is(a[data-testid=\\\"region-tag\\\"], a[data-testid^=\\\"taglist-item\\\"])\",\"action\":[\"style\",\"background-image:none!important; background:rgb(2,114,140)!important;\"]}"],["{\"selector\":\".modal-open\",\"action\":[\"style\",\"overflow:initial!important\"]}"],["{\"selector\":\".tds-locked-content\",\"action\":[\"style\",\"display:unset!important;\"]}"],["{\"selector\":\"section.huvudsektion\",\"action\":[\"style\",\"margin-top:unset!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow:initial!important; position:initial!important;\"]}"],["{\"selector\":\"#loadfade\",\"action\":[\"style\",\"animation:unset!important; -moz-animation:unset!important; -webkit-animation:unset!important;\"]}","{\"selector\":\"html, .unselectable\",\"action\":[\"style\",\"-moz-user-select:initial!important; -webkit-user-select:initial!important; -webkit-touch-callout:initial!important; user-select:initial!important; -webkit-tap-highlight-color:initial!important; cursor:initial!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"visibility:visible!important;\"]}"],["{\"selector\":\".tf_svg_lazy\",\"action\":[\"style\",\"transition:none!important; filter:none!important; transform:none!important;\"]}"],["{\"selector\":\":is(header, .article-single-page, .single #content)\",\"action\":[\"style\",\"margin-top:unset!important;\"]}"],["{\"selector\":\".popup\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body.compensate-for-scrollbar\",\"action\":[\"style\",\"overflow:unset!important;\"]}"],["{\"selector\":\"body[style*=\\\"hidden\\\"]\",\"action\":[\"style\",\"overflow:unset!important;position:unset!important;top:unset!important;\"]}"],["{\"selector\":\".entry-content\",\"action\":[\"style\",\"display: initial !important;\"]}"],["{\"selector\":\".avod-web-player-pause\",\"action\":[\"style\",\"background-color:transparent!important;\"]}"],["{\"selector\":\".fancybox-lock\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\"body.cookie-modal-open\",\"action\":[\"style\",\"overflow:unset!important;\"]}"],["{\"selector\":\".hero[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height:unset!important;\"]}"]];

const hostnamesMap = new Map([["aftonbladet.se",[0,6]],["godare.se",0],["livsstil.se",0],["omni.se",0],["omniekonomi.se",0],["svd.se",[0,58]],["aip.nu",1],["lansposten.se",1],["dalabygden.se",1],["sormlandsbygden.se",1],["alltommc.se",2],["arkitekten.se",3],["biblioteksforeningen.se",4],["biostock.se",5],["tobaksfakta.se",5],["bulletin.nu",6],["inredningsarkitektur.se",6],["fof.se",[6,24,25]],["allas.se",6],["elle.se",6],["femina.se",6],["hant.se",6],["mabra.com",6],["residencemagazine.se",6],["svenskdam.se",6],["motherhood.se",6],["lchfarkivet.se",6],["kollega.se",6],["folkofolk.se",6],["skyscanner.se",6],["dagensarena.se",6],["bokadirekt.se",6],["barometern.se",[6,18]],["blt.se",[6,18]],["bt.se",[6,18]],["kristianstadsbladet.se",[6,18]],["olandsbladet.se",[6,18]],["smp.se",[6,18]],["sydostran.se",[6,18]],["trelleborgsallehanda.se",[6,18]],["ut.se",[6,18]],["ystadsallehanda.se",[6,18]],["vaxjobladet.se",[6,18]],["nsk.se",[6,18]],["klt.nu",[6,18]],["samnytt.se",6],["sjofartstidningen.se",6],["filmtopp.se",6],["byggahus.se",7],["byggipedia.se",8],["bytbil.com",9],["com.se",10],["www.com.se",10],["pagalnew.com.se",10],["corren.se",11],["folkbladet.se",11],["mvt.se",11],["nt.se",11],["vt.se",11],["vimmerbytidning.se",11],["kuriren.nu",11],["nsd.se",11],["norran.se",11],["pt.se",11],["ekuriren.se",11],["strengnastidning.se",11],["kkuriren.se",11],["sn.se",11],["eposten.se",11],["unt.se",11],["helagotland.se",11],["tv.nu",11],["klart.se",11],["dagensvimmerby.se",12],["dagensvastervik.se",12],["dagenskalmar.nu",12],["dagenshultsfred.se",12],["designbase.se",13],["digitalfotoforalla.se",[14,18]],["pctidningen.se",[14,18]],["dinbyggare.se",15],["discoveringtheplanet.com",16],["dn.se",[17,18]],["di.se",18],["expressen.se",[18,21]],["atl.nu",18],["landlantbruk.se",18],["land.se",18],["hd.se",18],["sydsvenskan.se",18],["allehanda.se",18],["tidningenangermanland.se",18],["arbetarbladet.se",18],["avestatidning.com",18],["bblat.se",18],["dalademokraten.se",18],["fagersta-posten.se",18],["gd.se",18],["lt.se",18],["ltz.se",18],["na.se",18],["norrteljetidning.se",18],["nynashamnsposten.se",18],["op.se",18],["salaallehanda.com",18],["st.nu",18],["tidningenharjedalen.se",18],["vlt.se",18],["falkopingstidning.se",18],["jp.se",18],["skaraborgslanstidning.se",18],["skovdenyheter.se",18],["smalandsdagblad.se",18],["smalanningen.se",18],["smt.se",18],["tranastidning.se",18],["vastgotabladet.se",18],["vetlandaposten.se",18],["vn.se",18],["bandypuls.se",18],["ljusdalsposten.se",18],["ljusnan.se",18],["soderhamnskuriren.se",18],["ht.se",18],["moratidning.se",18],["borlangetidning.se",18],["falukuriren.se",18],["sodran.se",18],["nyaludvikatidning.se",18],["skd.se",18],["nvp.se",18],["nuiosteraker.se",18],["netdoktorpro.se",18],["popularhistoria.se",18],["aktuellhallbarhet.se",18],["byggindustrin.se",18],["dagensmedia.se",18],["dagensmedicin.se",18],["fastighetsnytt.se",18],["resume.se",18],["dagenssamhalle.se",18],["market.se",18],["dagligvarunytt.se",18],["privataaffarer.se",18],["illvet.se",18],["iform.se",18],["varldenshistoria.se",18],["slakthistoria.se",18],["dust2.se",19],["etc.se",20],["fasting.nu",22],["firstfoto.se",23],["elinstallatoren.se",25],["spraktidningen.se",25],["modernpsykologi.se",25],["vvsforum.se",25],["fokus.se",26],["futsalmagasinet.se",27],["goteborg.com",28],["hammarbyfotboll.se",29],["hejauppsala.com",30],["bredband.se",30],["hemnet.se",31],["hockeynews.se",32],["idrottensaffarer.se",33],["improveme.se",34],["karinrahm.se",35],["kb.se",36],["dansportalen.se",36],["hh.se",36],["kokaihop.se",37],["kultwatch.se",38],["livetsgoda.se",39],["livsmedelsverket.se",40],["ljudochbild.se",41],["lundgiants.se",42],["macken.xyz",43],["matochpyssel.nu",44],["matspar.se",45],["modernalivet.se",46],["m.yelp.se",47],["naringslivetvgl.se",48],["dalarnasaffarer.se",48],["stockholmsaffarer.se",48],["jamtlandsaffarer.se",48],["hallandsnaringsliv.se",48],["sjuharadsnaringsliv.se",48],["oru.se",49],["proshop.se",50],["pussad.se",51],["radio.se",52],["runnersworld.se",53],["motormagasinet.se",53],["dagenshandel.se",53],["food-supply.se",53],["plastnet.se",53],["habit.se",53],["woodnet.se",53],["foodnet.se",53],["transportnet.se",53],["processnet.se",53],["packnet.se",53],["verkstaderna.se",53],["medtechmagazine.se",53],["recyclingnet.se",53],["rt-forum.se",53],["uochd.se",53],["lifesciencesweden.se",53],["fri-kopenskap.se",53],["cleannet.se",53],["metal-supply.se",53],["framtidensbygg.se",53],["entreprenad.com",53],["branschstegen.se",53],["skogsforum.se",53],["bio.se",53],["svenskahousegruppen.se",53],["hembygd.se",53],["samfalligheterna.se",54],["sjofart.ax",55],["skogssallskapet.se",56],["formas.se",56],["rf.se",56],["spelhubben.se",57],["svensktidskrift.se",59],["tandlakartidningen.se",60],["tasteline.com",61],["taxiidag.se",62],["tidningencurie.se",63],["tidningenridsport.se",64],["tv4play.se",65],["tv4.se",65],["fotbollskanalen.se",65],["koket.se",65],["vinbanken.se",66],["vi.se",67],["vokabel.se",68]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/