/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: grc-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".bannergroup","#mainBanner,\n.LeftMenuAd,\n.adForumAdDiv",".ads,\n.dockads.left,\n.inlineads","DIV[id=\"MaxFooterBannerCon\"]","A[href*=\"gamebookers\"],\nA[href*=\"williamhill\"],\nDIV[id=\"MaxFooter\"],\nDIV[id=\"leo14102010e\"],\nDIV[id=\"vavouralis\"],\nIFRAME[src*=\"VistaBet\"]","A[href*=\"spinpalace\"]","#block-views-ads-sidebar-block-block","A[href=\"http://www.amnizia.com/advertisement\"],\nA[href=\"http://www.elcid.com/\"],\nA[href=\"http://www.text-link-ads.com/\"]","#block-kentroxenonglossonlogos,\n#headline","#afdiv","#thr_adsense_widget-2,\n#thr_adsense_widget-3,\n.code-block,\n.thr_adsense_wrapper","#left-adv,\n#right-adv,\n.disaronnobox","EMBED#efirstPage","strong > a[href^=\"http://autotriti.adman.gr/click\"]","A.fjmdiucexipcopnrmtke",".prices__promoted-separator,\nDIV#shopping-normal,\ndiv[data-is-promoted=\"\"]","A[href*=\"linkwise\"],\nIFRAME.blockrandom","A[href*=\"http://www.capital.gr/click.asp\"],\nTABLE[style=\"border: 1px solid rgb(194, 210, 216); background-color: rgb(240, 248, 255); font-size: 12px; padding: 2px;\"]",".below-facets-ad,\n.carzilla-ad > li,\n[href*=\"funshop.gr\"],\nol > li:has(.carzilla-ad),\nol > li:has([href*=\"funshop.gr\"])","#adLinks","div[class=\"story-textlinks row\"]","#adtxtlink,\n#editor_link[style*=\"background:transparent url(http://www.sport24.gr/incoming/article\"],\n#top_story_wrap > .grid_12 > div:nth-of-type(7) > a[href^=\"http://www.stoiximan.gr\"],\n.mythos,\nA.cokeLink,\nA.cokeLink2,\nA[href*=\"http://www.betclic.com/\"],\nA[href=\"http://goo.gl/3vrB4h\"],\nDIV#bfair,\nDIV.proan,\nDIV[style=\"border-bottom: 5px solid rgb(0, 102, 204); clear: both;\"],\nIMG[alt=\"in association with betoto\"],\ndiv[class=\"ad468\"],\ndiv[class=\"ad728\"],\ndiv[class=\"betotoTxtPrem\"],\ndiv[class=\"bfairTxtPrem txtLink\"],\ndiv[class=\"intTxtPrem txtLink\"],\ndiv[class=\"trailer\"],\ndiv[class=\"txtLink\"],\ndiv[id=\"ctl00_Div1\"],\ndiv[id=\"s2c\"]","#stoiximan-cont > a[href^=\"http://www.stoiximan.gr\"]",".leftClickable,\n.rightClickable","A[href*=\"http://www.plaisio.gr\"]","#first-big-banner,\n.module-shadow","A.sponsLink","#sma-banner-wide,\n#sponsors-mainmodule","#front-banner,\n#front-mobbanner2-container,\n#news-mobdown-title-banner2,\n[id^=\"front-banner\"]",".space3d,\n.td-a-rec,\n.td-pb-span4.tdc-column.vc_column_container.wpb_column.tdi_128.vc_column,\ndiv[id*=\"clever_\"],\niframe[src*=\"unblockia\"]","A[href*=\"http://www.bet-at-home.com/\"]","a.adv-link,\na.notrack","aside",".side,\n.static","#advsliding352,\ndiv[class=\"agores\"]",".deal","#custom_html-11,\n#custom_html-14,\n#custom_html-17,\n#custom_html-24,\n#custom_html-25,\n#custom_html-30,\n#custom_html-4,\n#custom_html-6,\n.afterheader,\n.background-cover,\n.custom-html-widget,\n.e3lan-top","#header-sidebar,\n#sidebar,\n.wpb_single_image:not(#printCover)",".attachment-full.aligncenter,\n.eng_ads,\n.eng_recs_holder","[src*=\"/BANNERS/\"],\n[src*=\"/banners/\"],\ndiv.title.sp-module:nth-of-type(5)",".ads-after-article-body","#crosscol-overflow","#text-10,\n#text-16,\n.td_block_widget,\n.vc_widget_sidebar",".ad-970-250","DIV#b177,\nDIV#b178,\nDIV#b199,\nDIV#b25,\nDIV#b32,\nDIV#b39,\nDIV#b41,\nDIV#b42,\nIMG#BLOGGER_PHOTO_ID_5491192352761655986,\nTD.content.first","#article-ad-container1,\n#article-ad-container3,\n#article-inread-ad-container,\n.print-hide.post-inline-ad",".skinBanner,\n.sw-banner,\nvideo",".sls,\n.srs","DIV#promotext,\nDIV.banner300250,\nDIV.underphoto","#custom_html-2,\n.bos_searchbox_widget_class",".adv,\n.widget_text[class^=\"widget-\"],\n[href^=\"https://casadikouros.gr\"],\n[href^=\"https://istikbalkouros.gr\"],\n[href^=\"https://kriton-energy.com\"],\nimg[src$=\".gif\"]",".td_block_15,\n.td_flex_block,\n.td_mod_wrap,\n.tdi_88_ffb,\n.vc_raw_html","#page-body-header,\n#sidebar-one","#af-preloader,\n.adsbygoogle,\n.theiaStickySidebar",".widget-content",".banner.medrect,\n.banner.minirect",".bdaia-ad-container,\n.bdaia-bellow-header,\n.bdaia-custom-area > .bd-container > div,\n.bdaia-widget-e3",".superbanner",".header-billboard","IMG[src=\"images/728_generic_betnow.gif\"]","div[align=\"left\"]","div[class=\"lad\"],\ndiv[class^=\"ad\"]","#block-block-11,\n#block-block-247,\n#block-wblocks-wblocks_companies,\n#block-wblocks-wblocks_promoted_companies,\n#content-banner-korios,\n.game-center-matches-item-sponsor,\n.linkLeftCntr,\n.linkRightCntr,\nA.betAtHome,\nA[href*=\"http://ads.meridianbet.gr/\"],\nA[href*=\"http://adserving.unibet.com/\"],\nA[href*=\"http://ff.connextra.com/\"],\nA[href*=\"http://media.mybet.com/\"],\nA[href*=\"http://sportingbet.gr/\"],\nA[href*=\"http://www.novibet.com/Handlers/\"],\nA[href*=\"http://www.sportingbet.gr/paradise-poker/\"],\nA[href*=\"https://www.playbet.com/portal/\"],\nA[href^=\"http://www.bet365.gr/\"],\nDIV[id^=\"block-wadman\"]","#block-views-promoted_companies-block_1","A[href*=\"http://partner.sbaffiliates.com/\"]","#textlinks",".bottom-popout.is-open","DIV[id=\"floatit\"]","P[style=\"color: rgb(255, 0, 0);\"],\ntd[class=\"message-box\"]","DIV[id=\"_atssh\"],\niframe[src=\"*\"]","#rightcolumn > div:nth-of-type(1),\nfooter > div:nth-of-type(1) > div:nth-of-type(2)","A[href*=\"stanjames\"]","#full-width-ad,\n#full-width-ad-inner,\n#taboola-alternating-below-article-3","DIV.bannerhptop",".banner--full,\n.elementor-inner-column.elementor-col-33.elementor-column.elementor-element-79c1.elementor-element.has_ae_slider > .elementor-element-populated.elementor-column-wrap,\n.elementor-inner-column.elementor-col-33.elementor-column.elementor-element-7f24.elementor-element.has_ae_slider > .elementor-element-populated.elementor-column-wrap,\n.elementor-top-column.elementor-col-50.elementor-column.elementor-element-fc62ef0.elementor-element.has_ae_slider > .elementor-element-populated.elementor-column-wrap,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.adrotateSmall.elementor-element-1183.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-5032.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-99aff7b.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-aabbe09.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-f45669a.elementor-element > .elementor-widget-container,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-f8eec79.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.opapad.elementor-element-48f3775.elementor-element > .elementor-widget-container,\n.post-horizad","#HeaderBanner,\n#HomePageRightBanner3,\n#LeftBanner1,\n#LeftBanner2,\n#LeftBanner3,\n#MiddleBanner1,\n#RightBanner1,\n#RightBanner2,\n#RightBanner4,\n#RightBanner5,\n#RightBanner6,\n#RightBanner8,\n#in-home-rel-banners,\n#middle_banner_1,\n#middle_banner_2,\n.is-hidden-xsmall.wrap-das-placeholder,\n.stamps,\nDIV#CenterRectangleBanner.adverticement,\nDIV#RightVerticalBanner.adverticement,\nDIV.admessage,\nDIV[style=\"width: 150px; height: 100px; margin-top: 5px; margin-bottom: 5px;\"],\ndiv[class=\"textlink\"]","[href^=\"https://gml-grp.com/C.ashx\"]","#block-dfptaghome-horizontal-2,\n#block-dfptaghome-vertical-1,\n#block-dfptaghome-vertical-2,\n#block-dfptaghome-vertical-3,\n#block-dfptagside-bar-1-article,\n#block-dfptagside-bar-2-article,\n.in_read_read,\n.tag-billboard.admanager-content,\n.tag-hp_sidebar.admanager-content,\n.tag-novi_banner.admanager-content,\n.tag-sidebar1.admanager-content,\n.tag-sidebar2.admanager-content,\ndiv.banner-place-in",".banner-728x90-top,\n.featured-2,\n.insMainAd.ad.grid--entry","div[class=\"wp125ad odd\"]",".left,\n.right",".asdbg.wrap-right.inarticle-add-mob.inarticle-add",".boxzilla,\n.boxzilla-overlay,\n.itech-adlabel","#mvp-leader-wrap",".OverallBlockBg,\n.ban-box,\n.ban_pushdown,\n.hban,\n.show.catfish_ad,\n.takeover-ban,\ndiv[class*=\"ban_hor_\"]","#nx-stick-help,\n.ad-block-universal,\n.nxAds,\n.nxsidebar","#text-12",".stream-item-top.stream-item,\n.theiaStickySidebar > .widget_custom_html.widget.container-wrapper.widget_text,\n.theiaStickySidebar > .widget_media_image.widget.container-wrapper,\n[href=\"http://poulos-shop.gr\"],\n[href=\"http://www.toolpoint.gr\"]","div[class=\"RightColumnBanners\"],\ndiv[class=\"bannerTables\"]","#topfeatured,\n.alignleft.size-full.wp-image-16703,\n.box_banner,\n.top_ad_big,\n.wpbrbannerinside",".banner","#carousel-1",".container-full-width.container","#underUnderRotator,\n#widgetAD > div,\n.above-row,\n.fixedbottom,\n.head728,\n.home-aggelies,\n.module:nth-of-type(3),\n.underRotatorAd590,\n.underRotatorModuleAd590,\ndiv[id^=\"div-gpt-ad\"]",".custom_area_single_01,\n.elementor-element-3db4f540,\n.elementor-element-5680254d,\n.elementor-element-5716b5fa,\n.elementor-element-c2a8f89,\n.elementor-section-items-middle,\n.elementor-widget-image,\n.jeg_ad,\n.widget_sp_image,\n[class^=\"custom_position_single\"]",".region-banner-top.region.row","#itrofi-left,\n#itrofi-right,\n.bannerContent","DIV.textLink",".a-42.a-single,\n.a-46.a-single > [href=\"https://www.badrabbit.gr/\"],\n.td_single_image_bg,\n.widget_custom_html.custom_html-2,\n.widget_media_image","#skin-container","#box_text_ads","#text-88 > .textwidget",".is-relative.extra-sidebar",".float-right.header-ainfo",".cityAdv,\n.newsbeast","#\\5f widget-5,\n#text-202339834,\nA[href*=\"http://www.ez-smoke.net/\"],\nA[href*=\"http://www.indolucky7.com/sbobet/sbobet.html\"],\nA[href=\"http://www.mp4converter.net/dvd-ripper-mac.html\"]",".in-feed-banner,\n.mt-0.text-center.banner,\n.order-md-1.order-0.sidebar-widget","#leftboxhome,\n#rightboxhome,\n.leftbox,\n.rightbox,\na[href=\"http://www.myphone.gr/forum/\"] > img","#google_ads_container","DIV.banner",".naxos-pano-apo-tin-epikefalida-se-ola,\n.td-fix-index.tdb-block-inner > .naxos-target.naxos-meta-to-periechomeno",".ctHomesidebar,\n.ctMainPostAds","DIV#advsliding258","div.games","DIV[style=\"background: url(\\\"Themes/1/Default/Media/image-ads-sponsor.jpg\\\") no-repeat scroll left center rgb(243, 243, 243); text-align: center; border-bottom: 1px solid rgb(230, 230, 230); padding: 4px 0px;\"],\nDIV[style=\"background:url(Themes/1/Default/Media/image-ads-sponsor.jpg) no-repeat left;  text-align:center;background-color: #F3F3F3;border-bottom:1px solid #E6E6E6;padding:4px 0px;\"]","#editor_link,\n#link-deliveras,\n#mainContent > .alpha.grid_12 > .bolder.lineborder,\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(4),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(5),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(6),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(8),\n.adSlot-height--premium.code-widget,\n.hp_billboard_a.ads_element,\n.hp_section_b.ads_element,\n.hp_section_c.ads_element,\n.hp_section_d.ads_element,\n.hp_section_e.ads_element,\n.latest_stories.ads_element,\n.minHeight--400,\n.seatimage,\nDIV[class=\"dheadRightBoxBot\"],\ndiv[class=\"banner\"]","#secondary","#adFixFooter,\n#artFoot,\n#imgAd,\n.amSlotInReadVideo.jsx-3307064496,\n.doNotPrint.amSlotFeed.jsx-2939975430,\n.icon-popular.nespressoAdd,\n.menuAdd,\n.topShare_textad,\n.txtLinks,\n.undeMenuAmSlot2.skinContained.doNotPrint.amSlot.jsx-426522538,\nA[href*=\"http://bs.serving-sys.com/\"],\ndiv.sidebarAmSlot.jsx-1829390467","#json-textlinks,\n.skin-link,\nDIV[style=\"mergin:5px 0\"]","#left,\n#right,\n#sponsor-link,\nDIV[style=\"margin: 10px 0 0 0; display: block;clear:both;\"]",".sidebar,\naside.pospromo","#ctl00_articleLeftColumn_ctl04_adRotatorUpdatePanel,\n#ctl00_articleLeftColumn_ctl05_adRotatorUpdatePanel,\n#ctl00_articleLeftColumn_ctl06_adRotatorUpdatePanel,\n#ctl00_topBannersRight_ctl00_adRotatorUpdatePanel,\n.top_banners_outer",".topClickable","div[class=\"story-textlinks\"]","DIV[style=\"border: 1px solid rgb(224, 224, 224); padding: 2px; margin-left: 20px; background-color: rgb(244, 244, 252); width: 140px; font-size: 12px;\"]","#banners,\n.banners_mid_2","div.banner","#googleNewsBanner,\n#header > .span8,\n#sp-content-top-left > .visible-desktop.module,\n#sp-content-top-right > div.module > .clearfix.mod-wrapper > .clearfix.mod-content > .clearfix.mod-inner > .custom,\n#sp-right > div.module > .clearfix.mod-wrapper > .clearfix.mod-content > .clearfix.mod-inner > .custom,\n.clever_41786_pushdown,\n.yeslidergroup,\ndiv#sas_placement1119:nth-of-type(5),\ndiv.module:nth-of-type(9),\ndiv[id^=\"hstp-\"]","div[id^=\"epom-\"]","div[id=\"ad-links\"]","#block-block-40,\n#block-block-41,\n#left-ad-container,\n#region-sidebar-second,\n#right-ad-container,\n.block-header-728x90","#text-64,\n#text-65,\ndiv.single-subscribe-block","#text-19",".banner-centered,\n.mobile-reverse:has(div[id^=\"div-gpt-\"]),\n.tw-50[style^=\"overflow\"]",".big-banner-top,\n.main-margin.container > .newstrack-content.row > .post-margin-right.col-xs-8.col-md-8 > .waypoints.post-content > .affiliate > .textwidget",".banneritem",".cs-banner-elementor,\n.cs-sidebar__area.cs-widget-area,\n.elementor-widget-image.elementor-widget.elementor-element-0023e56.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-83f1fd8.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-9f5026d.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-d8db731.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-f67660b.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-fda8036.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-187d168.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-697f9a4.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-9b1d83d.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-d4636fd.elementor-element,\n.single-ads","div.wrap-prodeals-widget","#provoc_sidebar_1,\n#provoc_sidebar_2,\n#provoc_sidebar_3,\n.billboardCnt,\n.billboardStickyWrap.container,\ndiv.inArticleLG",".wide-banner","#realTopBanner,\n#realTopBannerGap,\n.banner-wrapper","#right_col,\n.gk_tab_container0-style1,\n.gk_tab_wrap-style1","body > table:nth-of-type(2)","DIV.banners","IMG[src=\"images/betathome.jpg\"]","#sp-banners-carousel,\n#sp-banners-top,\n#sp-left,\n#sp-right,\n.sp-page-title,\n.sppb-section-content-center",".skin.news[href=\"https://www.facebook.com/NAIstinEllada\\A \"],\nDIV#jw_wwg,\nDIV#kw_logo,\nDIV[id=\"sony-internet-tv-holder\"],\nSPAN#jwlogo","#banner_160_filters,\n#banner_160_home,\n#banner_728_home,\n#new_contract_online_overlay,\n#sponsorship,\n.labeled-item.with-skus-slider.card.cf,\n.product-ad,\n.s_call_to_action,\n.selected-product-cards,\nDIV[id=\"afc\"],\nDIV[id=\"home_728x90\"],\nli.labeled-product.labeled-item.card.cf","#backgroundlink,\n.textlinks,\nA.banner,\nA.footballbet,\nA.ga_track,\nA[href*=\"/specials/williamhill?\"],\nA[href*=\"http://www.e-germanos.gr\"],\nA[href=\"#0.1_\"],\nDIV[id=\"seios-link\"],\nLI.blue.casino,\nLI.blue.poker,\nSPAN.icon.icon-latest-news-ad","DIV.text-link-container.marg-top-10,\nDIV[style=\"float: left; width: 70px; padding-top: 7px;\"]","#editor_link[style*=\"background:transparent url(http://www.contra.gr/Columns/article\"],\n#hp_300x250a,\n#hp_300x250b,\n#hp_300x250c,\n#hp_300x250d,\n#page > .content-top-wrap,\n#someplaceholder,\n.BetPartnersWidget--show-bet.BetPartnersWidget,\n.article-single__body > .content-thirdParty,\n.article-single__body > .creative_placeholder.content-thirdParty,\n.content-thirdParty,\n.premium_banner,\nA[class=\"ad\"],\nA[href*=\"acidbet.gr\"],\nA[href*=\"betclic.com\"],\nA[href*=\"doubleclick.net\"],\nA[href*=\"e-shop.gr\"],\nA[href*=\"http://www.menperfect.gr\"],\nA[href*=\"http://www.sport24.gr/html/ent/042/ent.374042.asp\"],\nA[href*=\"http://www.sport24.gr/html/ent/765/ent.371765.asp\"],\nA[href*=\"mens-x.gr\"],\nA[href*=\"www.bwin.com\"],\nDIV.code.currentArea-logo,\n[href^=\"https://www.bet365.gr/olp/open-account\"],\n[id^=\"ros\"],\ndiv.ad,\ndiv[id^=\"ENGAGEYA\"]","#RightBanner3,\n#RightBanner7,\n#middlebanner3","#advertisment","#ad-box-right,\nA[href*=\"http://serve.williamhillcasino.com/\"]","#box-block-block-12",".textlink","#fasa,\n#text-39,\n.mobile_adv",".custom-html-widget2,\ncenter",".code-block-6,\n.header-promo,\n.thene-prin-to-arthro,\n.thene-widget","#kalogritsas300","#g-content-top-a,\n.customhidden-mobile,\n.moduletable.sideAdvertFix,\n.moduletable.sideFix,\n.sponsor","#sidebar > .widget_block.widget,\n#under-post-content,\n.before-content.section,\n.content-inner > .footer-wide.section,\n.owl-stage-outer,\n.size-full.wp-image-110042.aligncenter,\n.size-full.wp-image-122324.aligncenter,\n.wp-image-120708.size-full.aligncenter,\n.wp-image-120723.size-full.aligncenter","#content > div.center:has(> div.content-wrapper > div.taboola-feed),\n#sma-top-box > .boxHead_TopBar,\n.advert,\n.blog-list > div.blog-post:has(> div.abs),\n.sidebar-wrapper > div.sticky-block:has(> div.advert),\n.sticky-block:has(> div.sticky > div.advert),\ndiv[style=\"height:286px;\"]","#MAINAD-box,\n.ADBox","#BannerCategArticle300Right1,\n#BannerCategArticle300Right2,\n#BannerCategArticle300Right3,\n#BannerCategArticle300Right4,\n#Categheaderbanner728,\n#Homeheaderbanner728","DIV#HTML14,\nDIV#HTML15","A[href*=\"http://www.kazinoinfo.com/\"],\nDIV.box_main_ads","#wholesite1 > a[href^=\"http://jobby.gr\"],\n.cls-sticky-wrapper,\nDIV[class=\"subBanner\"],\nDIV[id=\"sb-container\"]","#after-popular,\n#inside-banner-1,\n#inside-banner-2,\n#inside-banner-3,\n#top-banner,\n.banner-min-h-600,\n.inside-articles-banner","#frame_id_1,\n#frame_id_2,\n.central_banner_area,\n.hyperad_iframe,\n.new60sbanners,\n[href=\"http://www.escore.gr/\"],\ndiv.adds_sec:nth-of-type(4),\ndiv.adds_sec:nth-of-type(5)",".HTML.widget:not(:last-child) > div:first-child","#ad_13_left_1",".row.sidebar-nav","#financial_widget > .financial_widget_top_line.financial_widget_line > .financial_widget_top_line_medium.financial_widget_line_medium > .peiraios_link[href=\"http://www.piraeusbankgroup.com/\"],\nEMBED#mymovie","A#promoLink",".connxtvscroll","#main-content > .content-wrap:nth-of-type(1) > .content > .candiabanners-index",".infacets.maskshop,\n.inlist.maskshop","#top_story_wrap > .grid_12 > div:nth-of-type(8) > a[href^=\"https://www.stoiximan.gr\"]","[href*=\"adman.gr\"]","a[href=\"http://www.kratisinow.gr\"],\niframe[src=\"http://kratisinow.digitup.eu/widget/widget-artists\"]",".cart-reminder",".left_fixed,\n.right_fixed",".ad___auto.ad","#ipbwrapper > .bgad[href=\"http://www.kotsovolos.gr/site/mobile-phones-gps/mobile-phones/smartphones?v=0&company=Apple&11202=44834&utm_source=insomnia.gr&utm_medium=skin&utm_content=NEWiphone6s-6splus-insomnia-skin-2015&utm_campaign=iphone6s-6splus-insomnia-\"]","#banner-top-container,\n#left-dress2,\n.banner-side-collection,\n.categories2:nth-of-type(3)","#das_out,\n.textads-wrapper,\na[href*=\"/lines/click/\"]","[href*=\"bit.ly\"]","#featurette",".bet-logos","#main > .ads,\n.aside",".ad__desktop.ad__div,\n.ad__div,\ndiv.sticky-el.ad__desktop.ad__div","#AdPremiumSticky",".text-center.local-guides__banner","#header_billboard,\n.sticky-diaf.wrap-diaf,\n.top-diaf.wrap-diaf,\ndiv.widget.widget-diaf","A[href*=\"ad-emea.doubleclick.net/click\"],\nIMG[src*=\"ad-emea.doubleclick.net/\"]",".adResult",".ad_wrapper",".pub_300x250,\n.pub_728x90,\n.text-ad,\n.textAd,\n.text_ad"];

const hostnamesMap = new Map([["2810.gr",0],["adslgr.com",1],["aegeanews24.gr",2],["aek365.com",3],["aek365.gr",[3,4,5]],["milaraki.com",[5,105]],["techteam.gr",5],["alterthess.gr",6],["amnizia.com",7],["anagnostis.org",8],["antenna.gr",9],["antikleidi.com",10],["athinorama.gr",11],["auto24.gr",12],["autotriti.gr",13],["avgi.gr",14],["bestprice.gr",15],["bno.gr",16],["capital.gr",17],["car.gr",18],["clickatlife.gr",19],["cnn.gr",20],["contra.gr",[21,22,23,24]],["www.sport24.gr",[22,179]],["cosmo.gr",[23,26]],["www.techgear.gr",[23,191]],["sport-fm.gr",[24,109,148]],["sport24.gr",[24,150]],["corfuland.gr",25],["cretalive.gr",27],["crete2day.com",28],["cyclades24.gr",29],["derby.gr",30],["gazzetta.gr",[30,62,63,64]],["dialogos.com.cy",[31,32]],["newmoney.gr",[32,113]],["philenews.com",32],["dokari.gr",33],["e-go.gr",[34,35]],["ethnos.gr",[35,47,48]],["imerisia.gr",[35,47,73]],["e-ptolemeos.gr",36],["e-thessalia.gr",37],["efsyn.gr",38],["eleftheria.gr",39],["eleftherostypos.gr",40],["elektronikosanagnostis.blogspot.com",41],["veriotis.gr",[41,128,170]],["emvolos.gr",42],["energypress.gr",43],["enet.gr",44],["enikos.gr",45],["enimerosi.com",46],["eviaportal.gr",49],["evros-news.gr",50],["filadelfia-xalkidona.gr",51],["fileleutheros.net",52],["filoitexnisfilosofias.com",53],["fimotro.blogspot.com",54],["flix.gr",55],["fonien.gr",56],["forthnet.gr",57],["galinos.gr",58],["gamato.info",59],["gasprice.gr",60],["gato.gr",61],["sportdog.gr",63],["in.gr",[64,75]],["gossip-tv.gr",[65,66]],["newsbomb.gr",[65,118]],["onsports.gr",[65,66]],["greekddl.com",67],["greeksubtitlesproject.com",68],["hiphop.gr",69],["i-kyr.gr",70],["i-live.gr",71],["iefimerida.gr",72],["imerodromos.gr",74],["inpaok.com",76],["insider.gr",77],["insomnia.gr",78],["interesting.gr",79],["inthevip.gr",80],["ipaidia.gr",81],["itechnews.gr",82],["kalamatatimes.gr",83],["kathimerini.com.cy",84],["kathimerini.gr",85],["katohika.gr",86],["kavalapoint.gr",87],["kerdos.gr",88],["koutipandoras.gr",[89,90]],["live24.gr",[90,96]],["monobala.gr",[90,106]],["politis.com.cy",[90,133]],["popaganda.gr",[90,134]],["skai.gr",[90,146]],["kozanilife.gr",91],["krinilive.gr",92],["lamiareport.gr",93],["larissanet.gr",94],["lesvosnews.net",95],["livescores.gr",97],["logotypos.gr",98],["luben.tv",99],["madata.gr",100],["makeleio.gr",101],["megatv.com",102],["mesogianews.gr",103],["meteo.gr",104],["myphone.gr",107],["naftemporiki.gr",[108,109]],["naxospress.gr",110],["naxostimes.gr",111],["new.e-go.gr",112],["news.in.gr",114],["news247.gr",115],["newsauto.gr",116],["start2click.com",116],["newsbeast.gr",117],["newsit.gr",119],["nickelodeon.gr",120],["nooz.gr",121],["oneman.gr",122],["onmed.gr",123],["opensoft.gr",124],["oroskopos.gr",125],["parapolitika.gr",126],["parianostypos.gr",[127,128]],["pathfinder.gr",129],["patrainews.gr",130],["pcsteps.gr",131],["pitsirikos.net",132],["prismanews.gr",135],["proininews.gr",136],["pronews.gr",137],["provocateur.gr",138],["queen.gr",139],["real.gr",140],["realestatenews.gr",141],["runningnews.gr",142],["www.trinews.gr",142],["sday.gr",143],["sentragoal.gr",144],["serraikanea.gr",145],["skroutz.gr",147],["sport.gr",149],["sports.in.gr",151],["stonisi.gr",152],["subs4free.com",153],["supersyntages.gr",154],["tanea.gr",155],["tovima.gr",[155,164]],["techgear.gr",156],["tharrosnews.gr",157],["thenewspaper.gr",158],["thepressproject.gr",159],["thestival.gr",160],["tirnavospress.gr",161],["tlife.gr",162],["toarkoudi.gr",163],["tro-ma-ktiko.blogspot.com",165],["tvsubtitles.gr",166],["tvxs.gr",167],["unboxholics.com",168],["usay.gr",169],["vimaonline.gr",171],["voicenews.gr",172],["voria.gr",173],["williamhill.com",174],["womenonly.gr",175],["www.candiadoc.gr",176],["www.car.gr",177],["www.contra.gr",[178,179]],["www.news247.gr",[179,187]],["www.dwrean.net",180],["www.e-food.gr",181],["www.eklogika.gr",182],["www.flash.gr",183],["www.insomnia.gr",184],["www.kritikes-aggelies.gr",185],["www.lifo.gr",186],["www.skroutz.gr",188],["www.sport-fm.gr",189],["www.taxheaven.gr",190],["www.xo.gr",192],["xo.gr",193],["ypodomes.com",194],["zoomnews.gr",195]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["aggeliestanea.gr",[196]],["athensmagazine.gr",[197]],["ediva.gr",[198]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/