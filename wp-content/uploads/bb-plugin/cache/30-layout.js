
var wpAjaxUrl='https://hamiltonchristian.school.nz/wp-admin/admin-ajax.php';var flBuilderUrl='https://hamiltonchristian.school.nz/wp-content/plugins/bb-plugin/';var FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1000,easing:'swing',offset:100},paths:{pluginUrl:'https://hamiltonchristian.school.nz/wp-content/plugins/bb-plugin/',wpAjaxUrl:'https://hamiltonchristian.school.nz/wp-admin/admin-ajax.php'},breakpoints:{small:768,medium:992},waypoint:{offset:80}};(function($){if(typeof FLBuilderLayout!='undefined'){return;}
FLBuilderLayout={init:function()
{FLBuilderLayout._destroy();FLBuilderLayout._initClasses();FLBuilderLayout._initBackgrounds();if(0===$('.fl-builder-edit').length){FLBuilderLayout._initModuleAnimations();FLBuilderLayout._initAnchorLinks();FLBuilderLayout._initHash();FLBuilderLayout._initForms();}},refreshGalleries:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),mfContent=$element.find('.fl-mosaicflow-content'),wmContent=$element.find('.fl-gallery'),mfObject=null;if(mfContent){mfObject=mfContent.data('mosaicflow');if(mfObject){mfObject.columns=$([]);mfObject.columnsHeights=[];mfContent.data('mosaicflow',mfObject);mfContent.mosaicflow('refill');}}
if(wmContent){wmContent.trigger('refreshWookmark');}},refreshGridLayout:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),msnryContent=$element.find('.masonry');if(msnryContent.length){msnryContent.masonry('layout');}},reloadSlider:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),bxContent=$element.find('.bx-viewport > div').eq(0),bxObject=null;if(bxContent.length){bxObject=bxContent.data('bxSlider');if(bxObject){bxObject.reloadSlider();}}},resizeAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio'),player=null,mejsPlayer=null,rail=null,railWidth=400;if(audioPlayers.length&&typeof mejs!=='undefined'){audioPlayers.each(function(){player=$(this);mejsPlayer=mejs.players[player.attr('id')];rail=player.find('.mejs-controls .mejs-time-rail');var innerMejs=player.find('.mejs-inner'),total=player.find('.mejs-controls .mejs-time-total');if(typeof mejsPlayer!=='undefined'){railWidth=Math.ceil(player.width()*0.8);if(innerMejs.length){rail.css('width',railWidth+'px!important');mejsPlayer.options.autosizeProgress=true;setTimeout(function(){mejsPlayer.setControlsSize();},50);player.find('.mejs-inner').css({visibility:'visible',height:'inherit'});}}});}},preloadAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),contentWrap=$element.closest('.fl-accordion-item'),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio');if(!contentWrap.hasClass('fl-accordion-item-active')&&audioPlayers.find('.mejs-inner').length){audioPlayers.find('.mejs-inner').css({visibility:'hidden',height:0});}},resizeSlideshow:function(){if(typeof YUI!=='undefined'){YUI().use('node-event-simulate',function(Y){Y.one(window).simulate("resize");});}},reloadGoogleMap:function(element){var $element='undefined'==typeof element?$('body'):$(element),googleMap=$element.find('iframe[src*="google.com/maps"]');if(googleMap.length){googleMap.attr('src',function(i,val){return val;});}},_destroy:function()
{var win=$(window);win.off('scroll.fl-bg-parallax');win.off('resize.fl-bg-video');},_isTouch:function()
{if(('ontouchstart'in window)||(window.DocumentTouch&&document instanceof DocumentTouch)){return true;}
return false;},_isMobile:function()
{return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent);},_initClasses:function()
{var body=$('body'),ua=navigator.userAgent;if(!body.hasClass('archive')&&$('.fl-builder-content-primary').length>0){body.addClass('fl-builder');}
if(FLBuilderLayout._isTouch()){body.addClass('fl-builder-touch');}
if(FLBuilderLayout._isMobile()){body.addClass('fl-builder-mobile');}
if($(window).width()<FLBuilderLayoutConfig.breakpoints.small){body.addClass('fl-builder-breakpoint-small');}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.small&&$(window).width()<FLBuilderLayoutConfig.breakpoints.medium){body.addClass('fl-builder-breakpoint-medium');}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.medium){body.addClass('fl-builder-breakpoint-large');}
if(ua.indexOf('Trident/7.0')>-1&&ua.indexOf('rv:11.0')>-1){body.addClass('fl-builder-ie-11');}},_initBackgrounds:function()
{var win=$(window);if($('.fl-row-bg-parallax').length>0&&!FLBuilderLayout._isMobile()){FLBuilderLayout._scrollParallaxBackgrounds();FLBuilderLayout._initParallaxBackgrounds();win.on('scroll.fl-bg-parallax',FLBuilderLayout._scrollParallaxBackgrounds);}
if($('.fl-bg-video').length>0){FLBuilderLayout._initBgVideos();FLBuilderLayout._resizeBgVideos();win.on('resize.fl-bg-video',FLBuilderLayout._resizeBgVideos);}},_initParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._initParallaxBackground);},_initParallaxBackground:function()
{var row=$(this),content=row.find('> .fl-row-content-wrap'),src=row.data('parallax-image'),loaded=row.data('parallax-loaded'),img=new Image();if(loaded){return;}
else if(typeof src!='undefined'){$(img).on('load',function(){content.css('background-image','url('+src+')');row.data('parallax-loaded',true);});img.src=src;}},_scrollParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._scrollParallaxBackground);},_scrollParallaxBackground:function()
{var win=$(window),row=$(this),content=row.find('> .fl-row-content-wrap'),speed=row.data('parallax-speed'),offset=content.offset(),yPos=-((win.scrollTop()-offset.top)/speed);content.css('background-position','center '+yPos+'px');},_initBgVideos:function()
{$('.fl-bg-video').each(FLBuilderLayout._initBgVideo);},_initBgVideo:function()
{var wrap=$(this),width=wrap.data('width'),height=wrap.data('height'),mp4=wrap.data('mp4'),youtube=wrap.data('youtube'),vimeo=wrap.data('vimeo'),mp4Type=wrap.data('mp4-type'),webm=wrap.data('webm'),webmType=wrap.data('webm-type'),fallback=wrap.data('fallback'),loaded=wrap.data('loaded'),videoMobile=wrap.data('video-mobile'),fallbackTag='',videoTag=null,mp4Tag=null,webmTag=null;if(loaded){return;}
videoTag=$('<video autoplay loop muted playsinline></video>');if('undefined'!=typeof fallback&&''!=fallback){videoTag.attr('poster','data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
videoTag.css('background','transparent url("'+fallback+'") no-repeat center center')
videoTag.css('background-size','cover')
videoTag.css('height','100%')}
if('undefined'!=typeof mp4&&''!=mp4){mp4Tag=$('<source />');mp4Tag.attr('src',mp4);mp4Tag.attr('type',mp4Type);videoTag.append(mp4Tag);}
if('undefined'!=typeof webm&&''!=webm){webmTag=$('<source />');webmTag.attr('src',webm);webmTag.attr('type',webmType);videoTag.append(webmTag);}
if(!FLBuilderLayout._isMobile()||(FLBuilderLayout._isMobile()&&"yes"==videoMobile)){if('undefined'!=typeof youtube){FLBuilderLayout._initYoutubeBgVideo.apply(this);}
else if('undefined'!=typeof vimeo){FLBuilderLayout._initVimeoBgVideo.apply(this);}
else{wrap.append(videoTag);}}
else{videoTag.attr('src','')
wrap.append(videoTag);}
wrap.data('loaded',true);},_initYoutubeBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),startTime='undefined'!==typeof playerWrap.data('start')?playerWrap.data('start'):0,endTime='undefined'!==typeof playerWrap.data('end')?playerWrap.data('end'):0,loop='undefined'!==typeof playerWrap.data('loop')?playerWrap.data('loop'):1,stateCount=0,player,fallback_showing;if(videoId){fallback=playerWrap.data('fallback')||false
if(fallback){playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');fallbackTag.css('background-size','cover');fallbackTag.css('transition','background-image 1s')
playerWrap.append(fallbackTag);fallback_showing=true;}
FLBuilderLayout._onYoutubeApiReady(function(YT){setTimeout(function(){player=new YT.Player(videoPlayer[0],{videoId:videoId,events:{onReady:function(event){if("no"===enableAudio||FLBuilderLayout._isMobile()){event.target.mute();}
else if("yes"===enableAudio&&event.target.isMuted){event.target.unMute();}
playerWrap.data('YTPlayer',player);FLBuilderLayout._resizeYoutubeBgVideo.apply(playerWrap);event.target.playVideo();if(audioButton.length>0&&!FLBuilderLayout._isMobile()){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}},onStateChange:function(event){if(event.data===1){if(fallback_showing){$('.fl-bg-video-fallback').css('background-image','url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)')}}
if(stateCount<4){stateCount++;}
if(stateCount>1&&(-1===event.data||2===event.data)&&"yes"===enableAudio){player.mute();player.playVideo();audioButton.show();}
if(event.data===YT.PlayerState.ENDED&&1===loop){if(startTime>0){player.seekTo(startTime);}
else{player.playVideo();}}},onError:function(event){console.info('YT Error: '+event.data)
FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)}},playerVars:{playsinline:FLBuilderLayout._isMobile()?1:0,controls:0,showinfo:0,rel:0,start:startTime,end:endTime,}});},1);});}},_onErrorYoutubeVimeo:function(playerWrap){fallback=playerWrap.data('fallback')||false
if(!fallback){return false;}
playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');playerWrap.append(fallbackTag);},_onYoutubeApiReady:function(callback){if(window.YT&&YT.loaded){callback(YT);}else{setTimeout(function(){FLBuilderLayout._onYoutubeApiReady(callback);},350);}},_initVimeoBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),player,width=playerWrap.outerWidth(),ua=navigator.userAgent;if(typeof Vimeo!=='undefined'&&videoId){player=new Vimeo.Player(videoPlayer[0],{id:videoId,loop:true,title:false,portrait:false,background:true,autopause:false,muted:true});playerWrap.data('VMPlayer',player);if("no"===enableAudio){player.setVolume(0);}
else if("yes"===enableAudio){if(ua.indexOf("Safari")>-1||ua.indexOf("Chrome")>-1){player.setVolume(0);audioButton.show();}
else{player.setVolume(1);}}
player.play().catch(function(error){FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)});if(audioButton.length>0){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}}},_toggleBgVideoAudio:function(e){var player=e.data.player,control=e.data.button.find('.fl-audio-control');if(control.hasClass('fa-volume-off')){control.removeClass('fa-volume-off').addClass('fa-volume-up');e.data.button.find('.fa-times').hide();if('function'===typeof player.unMute){player.unMute();}
else{player.setVolume(1);}}
else{control.removeClass('fa-volume-up').addClass('fa-volume-off');e.data.button.find('.fa-times').show();if('function'===typeof player.unMute){player.mute();}
else{player.setVolume(0);}}},_videoBgSourceError:function(e)
{var source=$(e.target),wrap=source.closest('.fl-bg-video'),vid=wrap.find('video'),fallback=wrap.data('fallback'),fallbackTag='';source.remove();if(vid.find('source').length){return;}else if(''!==fallback){fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+fallback+')');wrap.append(fallbackTag);vid.remove();}},_resizeBgVideos:function()
{$('.fl-bg-video').each(function(){FLBuilderLayout._resizeBgVideo.apply(this);if($(this).parent().find('img').length>0){$(this).parent().imagesLoaded($.proxy(FLBuilderLayout._resizeBgVideo,this));}});},_resizeBgVideo:function()
{if(0===$(this).find('video').length&&0===$(this).find('iframe').length){return;}
var wrap=$(this),wrapHeight=wrap.outerHeight(),wrapWidth=wrap.outerWidth(),vid=wrap.find('video'),vidHeight=wrap.data('height'),vidWidth=wrap.data('width'),newWidth=wrapWidth,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newLeft=0,newTop=0,iframe=wrap.find('iframe');if(vid.length){if(vidHeight===''||typeof vidHeight==='undefined'||vidWidth===''||typeof vidWidth==='undefined'){vid.css({'left':'0px','top':'0px','width':newWidth+'px'});vid.on('loadedmetadata',FLBuilderLayout._resizeOnLoadedMeta);}
else{if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
vid.css({'left':newLeft+'px','top':newTop+'px','height':newHeight+'px','width':newWidth+'px'});}}
else if(iframe.length){if(typeof wrap.data('youtube')!=='undefined'){FLBuilderLayout._resizeYoutubeBgVideo.apply(this);}}},_resizeOnLoadedMeta:function(){var video=$(this),wrapHeight=video.parent().outerHeight(),wrapWidth=video.parent().outerWidth(),vidWidth=video[0].videoWidth,vidHeight=video[0].videoHeight,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newWidth=wrapWidth,newLeft=0,newTop=0;if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
video.parent().data('width',vidWidth);video.parent().data('height',vidHeight);video.css({'left':newLeft+'px','top':newTop+'px','width':newWidth+'px','height':newHeight+'px'});},_resizeYoutubeBgVideo:function()
{var wrap=$(this),wrapWidth=wrap.outerWidth(),wrapHeight=wrap.outerHeight(),player=wrap.data('YTPlayer'),video=player?player.getIframe():null,aspectRatioSetting='16:9',aspectRatioArray=aspectRatioSetting.split(':'),aspectRatio=aspectRatioArray[0]/aspectRatioArray[1],ratioWidth=wrapWidth/aspectRatio,ratioHeight=wrapHeight*aspectRatio,isWidthFixed=wrapWidth/wrapHeight>aspectRatio,width=isWidthFixed?wrapWidth:ratioHeight,height=isWidthFixed?ratioWidth:wrapHeight;if(video){$(video).width(width).height(height);}},_initModuleAnimations:function()
{if(typeof jQuery.fn.waypoint!=='undefined'){$('.fl-animation').each(function(){var node=$(this),nodeTop=node.offset().top,winHeight=$(window).height(),bodyHeight=$('body').height(),waypoint=FLBuilderLayoutConfig.waypoint,offset='80%';if(typeof waypoint.offset!==undefined){offset=FLBuilderLayoutConfig.waypoint.offset+'%';}
if(bodyHeight-nodeTop<winHeight*0.2){offset='100%';}
node.waypoint({offset:offset,handler:FLBuilderLayout._doModuleAnimation});});}},_doModuleAnimation:function()
{var module='undefined'==typeof this.element?$(this):$(this.element),delay=parseFloat(module.data('animation-delay')),duration=parseFloat(module.data('animation-duration'));if(!isNaN(duration)){module.css('animation-duration',duration+'s');}
if(!isNaN(delay)&&delay>0){setTimeout(function(){module.addClass('fl-animated');},delay*1000);}else{setTimeout(function(){module.addClass('fl-animated');},1);}},_initHash:function()
{var hash=window.location.hash.replace('#','').split('/').shift(),element=null,tabs=null,responsiveLabel=null,tabIndex=null,label=null;if(''!==hash){try{element=$('#'+hash);if(element.length>0){if(element.hasClass('fl-accordion-item')){setTimeout(function(){element.find('.fl-accordion-button').trigger('click');},100);}
if(element.hasClass('fl-tabs-panel')){setTimeout(function(){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){responsiveLabel.trigger('click');}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}},100);}}}
catch(e){}}},_initAnchorLinks:function()
{$('a').each(FLBuilderLayout._initAnchorLink);},_initAnchorLink:function()
{var link=$(this),href=link.attr('href'),loc=window.location,id=null,element=null;if('undefined'!=typeof href&&href.indexOf('#')>-1&&link.closest('svg').length<1){if(loc.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&loc.hostname==this.hostname){try{id=href.split('#').pop();if(!id){return;}
element=$('#'+id);if(element.length>0){if(link.hasClass('fl-scroll-link')||element.hasClass('fl-row')||element.hasClass('fl-col')||element.hasClass('fl-module')){$(link).on('click',FLBuilderLayout._scrollToElementOnLinkClick);}
if(element.hasClass('fl-accordion-item')){$(link).on('click',FLBuilderLayout._scrollToAccordionOnLinkClick);}
if(element.hasClass('fl-tabs-panel')){$(link).on('click',FLBuilderLayout._scrollToTabOnLinkClick);}}}
catch(e){}}}},_scrollToElementOnLinkClick:function(e,callback)
{var element=$('#'+$(this).attr('href').split('#').pop());FLBuilderLayout._scrollToElement(element,callback);e.preventDefault();},_scrollToElement:function(element,callback)
{var config=FLBuilderLayoutConfig.anchorLinkAnimations,dest=0,win=$(window),doc=$(document);if(element.length>0){if(element.offset().top>doc.height()-win.height()){dest=doc.height()-win.height();}
else{dest=element.offset().top-config.offset;}
$('html, body').animate({scrollTop:dest},config.duration,config.easing,function(){if('undefined'!=typeof callback){callback();}
if(undefined!=element.attr('id')){if(history.pushState){history.pushState(null,null,'#'+element.attr('id'));}
else{window.location.hash=element.attr('id');}}});}},_scrollToAccordionOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop());if(element.length>0){var callback=function(){if(element){element.find('.fl-accordion-button').trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}},_scrollToTabOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop()),tabs=null,label=null,responsiveLabel=null;if(element.length>0){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){var callback=function(){if(element){responsiveLabel.trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}
e.preventDefault();}},_initForms:function()
{if(!FLBuilderLayout._hasPlaceholderSupport){$('.fl-form-field input').each(FLBuilderLayout._initFormFieldPlaceholderFallback);}
$('.fl-form-field input').on('focus',FLBuilderLayout._clearFormFieldError);},_hasPlaceholderSupport:function()
{var input=document.createElement('input');return'undefined'!=input.placeholder;},_initFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if('undefined'!=placeholder&&''===val){field.val(placeholder);field.on('focus',FLBuilderLayout._hideFormFieldPlaceholderFallback);field.on('blur',FLBuilderLayout._showFormFieldPlaceholderFallback);}},_hideFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(val==placeholder){field.val('');}},_showFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(''===val){field.val(placeholder);}},_clearFormFieldError:function()
{var field=$(this);field.removeClass('fl-form-error');field.siblings('.fl-form-error-message').hide();}};$(function(){FLBuilderLayout.init();});})(jQuery);;(function($){PPImageCarousel=function(settings){this.id=settings.id;this.nodeClass='.fl-node-'+settings.id;this.wrapperClass=this.nodeClass+' .pp-image-carousel';this.elements='';this.slidesPerView=settings.slidesPerView;this.slidesToScroll=settings.slidesToScroll;this.settings=settings;this.swipers={};if(this._isSlideshow()){this.slidesPerView=settings.slideshow_slidesPerView;}
if(typeof Swiper==='undefined'){$(window).on('load',$.proxy(function(){if(typeof Swiper==='undefined'){return;}else{this._init();}},this));}else{this._init();}};PPImageCarousel.prototype={id:'',nodeClass:'',wrapperClass:'',elements:'',slidesPerView:{},slidesToScroll:{},settings:{},swipers:{},_init:function(){this.elements={mainSwiper:this.nodeClass+' .pp-image-carousel'};this.elements.swiperSlide=$(this.elements.mainSwiper).find('.swiper-slide');this.elements.thumbSwiper=this.nodeClass+' .pp-thumbnails-swiper';if(1>=this._getSlidesCount()){return;}
var swiperOptions=this._getSwiperOptions();this.swipers.main=new Swiper(this.elements.mainSwiper,swiperOptions.main);if(this._isSlideshow()&&1<this._getSlidesCount()){this.swipers.main.controller.control=this.swipers.thumbs=new Swiper(this.elements.thumbSwiper,swiperOptions.thumbs);this.swipers.thumbs.controller.control=this.swipers.main;}},_getEffect:function(){return this.settings.effect;},_getSlidesCount:function(){return this.elements.swiperSlide.length;},_getInitialSlide:function(){return this.settings.initialSlide;},_getSpaceBetween:function(){var space=this.settings.spaceBetween.desktop,space=parseInt(space);if(isNaN(space)){space=20;}
return space;},_getSpaceBetweenTablet:function(){var space=this.settings.spaceBetween.tablet,space=parseInt(space);if(isNaN(space)){space=this._getSpaceBetween();}
return space;},_getSpaceBetweenMobile:function(){var space=this.settings.spaceBetween.mobile,space=parseInt(space);if(isNaN(space)){space=this._getSpaceBetweenTablet();}
return space;},_getSlidesPerView:function(){if(this._isSlideshow()){return 1;}
var slidesPerView=this.slidesPerView.desktop;return Math.min(this._getSlidesCount(),+slidesPerView);},_getSlidesPerViewTablet:function(){if(this._isSlideshow()){return 1;}
var slidesPerView=this.slidesPerView.tablet;if(slidesPerView===''||slidesPerView===0){slidesPerView=this.slidesPerView.desktop}
if(!slidesPerView&&'coverflow'===this.settings.type){return Math.min(this._getSlidesCount(),3);}
return Math.min(this._getSlidesCount(),+slidesPerView);},_getSlidesPerViewMobile:function(){if(this._isSlideshow()){return 1;}
var slidesPerView=this.slidesPerView.mobile;if(slidesPerView===''||slidesPerView===0){slidesPerView=this._getSlidesPerViewTablet();}
if(!slidesPerView&&'coverflow'===this.settings.type){return Math.min(this._getSlidesCount(),3);}
return Math.min(this._getSlidesCount(),+slidesPerView);},_getThumbsSlidesPerView:function(){var slidesPerView=this.slidesPerView.desktop;return Math.min(this._getSlidesCount(),+slidesPerView);},_getThumbsSlidesPerViewTablet:function(){var slidesPerView=this.slidesPerView.tablet;if(slidesPerView===''||slidesPerView===0){slidesPerView=this.slidesPerView.desktop}
if(!slidesPerView&&'coverflow'===this.settings.type){return Math.min(this._getSlidesCount(),3);}
return Math.min(this._getSlidesCount(),+slidesPerView);},_getThumbsSlidesPerViewMobile:function(){var slidesPerView=this.slidesPerView.mobile;if(slidesPerView===''||slidesPerView===0){slidesPerView=this._getSlidesPerViewTablet();}
if(!slidesPerView&&'coverflow'===this.settings.type){return Math.min(this._getSlidesCount(),3);}
return Math.min(this._getSlidesCount(),+slidesPerView);},_getSlidesToScroll:function(device){if(!this._isSlideshow()&&'slide'===this._getEffect()){var slides=this.slidesToScroll[device];return Math.min(this._getSlidesCount(),+slides||1);}
return 1;},_getSlidesToScrollDesktop:function(){return this._getSlidesToScroll('desktop');},_getSlidesToScrollTablet:function(){return this._getSlidesToScroll('tablet');},_getSlidesToScrollMobile:function(){return this._getSlidesToScroll('mobile');},_getSwiperOptions:function(){var medium_breakpoint=this.settings.breakpoint.medium,responsive_breakpoint=this.settings.breakpoint.responsive;nodeClass=this.nodeClass;var options={navigation:{prevEl:nodeClass+' .pp-swiper-button-prev',nextEl:nodeClass+' .pp-swiper-button-next'},pagination:{el:nodeClass+' .swiper-pagination',type:this.settings.pagination,clickable:true},grabCursor:true,effect:this._getEffect(),initialSlide:this._getInitialSlide(),slidesPerView:this._getSlidesPerView(),slidesPerGroup:this._getSlidesToScrollDesktop(),spaceBetween:this._getSpaceBetween(),loop:'undefined'!==typeof this.settings.loop?this.settings.loop:true,speed:this.settings.speed,breakpoints:{}};if(this._isSlideshow()){options.loopedSlides=this._getSlidesCount();}
if(!this.settings.isBuilderActive&&this.settings.autoplay_speed!==false){options.autoplay={delay:this.settings.autoplay_speed,disableOnInteraction:!!this.settings.pause_on_interaction,stopOnLastSlide:'undefined'!==typeof this.settings.stopOnLastSlide?this.settings.stopOnLastSlide:false,};}
if('cube'!==this._getEffect()&&'fade'!==this._getEffect()){options.breakpoints[medium_breakpoint]={slidesPerView:this._getSlidesPerViewTablet(),slidesPerGroup:this._getSlidesToScrollTablet(),spaceBetween:this._getSpaceBetweenTablet()};options.breakpoints[responsive_breakpoint]={slidesPerView:this._getSlidesPerViewMobile(),slidesPerGroup:this._getSlidesToScrollMobile(),spaceBetween:this._getSpaceBetweenMobile()};}
var thumbsSliderOptions={slidesPerView:this._getThumbsSlidesPerView(),initialSlide:this._getInitialSlide(),centeredSlides:true,slideToClickedSlide:true,spaceBetween:this._getSpaceBetween(),loop:true,loopedSlides:this._getSlidesCount(),speed:this.settings.speed,onSlideChangeEnd:function(swiper){swiper.fixLoop();},breakpoints:{}};thumbsSliderOptions.breakpoints[medium_breakpoint]={slidesPerView:this._getThumbsSlidesPerViewTablet(),spaceBetween:this._getSpaceBetweenTablet()};thumbsSliderOptions.breakpoints[responsive_breakpoint]={slidesPerView:this._getThumbsSlidesPerViewMobile(),spaceBetween:this._getSpaceBetweenMobile()};if('coverflow'===this.settings.type){options.effect='coverflow';}
if(this._isSlideshow()){options.slidesPerView=1;delete options.pagination;delete options.breakpoints;}
return{main:options,thumbs:thumbsSliderOptions};},_isSlideshow:function(){return'slideshow'===this.settings.type;},_onElementChange:function(property){if(0===property.indexOf('width')){this.swipers.main.onResize();}
if(0===property.indexOf('spaceBetween')){this._updateSpaceBetween(this.swipers.main,property);}},_updateSpaceBetween:function(swiper,property){var newSpaceBw=this._getSpaceBetween(),deviceMatch=property.match('space_between_(.*)');if(deviceMatch){var breakpoints={tablet:this.settings.breakpoint.medium,mobile:this.settings.breakpoint.responsive};swiper.params.breakpoints[breakpoints[deviceMatch[1]]].spaceBetween=newSpaceBw;}else{swiper.originalParams.spaceBetween=newSpaceBw;}
swiper.params.spaceBetween=newSpaceBw;swiper.onResize();},};})(jQuery);var carousel_5ef14f2a6fa70='';(function($){var settings={id:'5ef14f2a6fa70',type:'carousel',initialSlide:0,slidesPerView:{desktop:4,tablet:3,mobile:2,},slidesToScroll:{desktop:1,tablet:1,mobile:1,},slideshow_slidesPerView:{desktop:5,tablet:0,mobile:0,},spaceBetween:{desktop:'0',tablet:'',mobile:'',},isBuilderActive:false,pagination:'none',autoplay:false,autoplay_speed:false,pause_on_interaction:true,effect:'slide',speed:1000,breakpoint:{medium:992,responsive:768},};settings.loop=true;carousel_5ef14f2a6fa70=new PPImageCarousel(settings);function updateCarousel(){setTimeout(function(){if('number'!==typeof carousel_5ef14f2a6fa70.swipers.main.length){carousel_5ef14f2a6fa70.swipers.main.update();if('object'===typeof carousel_5ef14f2a6fa70.swipers.thumbs){carousel_5ef14f2a6fa70.swipers.thumbs.update();}}else{carousel_5ef14f2a6fa70.swipers.main.forEach(function(item){if('undefined'!==typeof item){item.update();}});}},10);}
$(document).on('pp_modal_box_rendered',function(e,selector){if(selector.find('.fl-node-5ef14f2a6fa70').length>0){updateCarousel();}});$(document).on('fl-builder.pp-accordion-toggle-complete',function(e){if($(e.target).find('.fl-node-5ef14f2a6fa70').length>0){updateCarousel();}});$(document).on('pp-tabs-switched',function(e,selector){if(selector.find('.fl-node-5ef14f2a6fa70').length>0){updateCarousel();}});$('.fl-tabs').find('.fl-tabs-label').on('click',function(){var index=$(this).data('index');var panel=$(this).parents('.fl-tabs').find('.fl-tabs-panel-content[data-index="'+index+'"]');if(panel.find('.fl-node-5ef14f2a6fa70').length>0){updateCarousel();}});var state=0;$(document).on('pp_expandable_row_toggle',function(e,selector){if(selector.is('.pp-er-open')&&state===0&&selector.parent().find('.fl-node-5ef14f2a6fa70').length>0){updateCarousel();state=1;}});})(jQuery);jQuery(function($){$(function(){$('.fl-node-5ea253c897eb4 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});