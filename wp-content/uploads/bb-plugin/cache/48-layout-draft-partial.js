
(function($){PPAdvancedMenu=function(settings){this.settingsId=settings.id;this.nodeClass='.fl-node-'+settings.id;this.wrapperClass=this.nodeClass+' .pp-advanced-menu';this.type=settings.type;this.mobileToggle=settings.mobile;this.mobileBelowRow='below'===settings.menuPosition;this.breakPoints=settings.breakPoints;this.mobileBreakpoint=settings.mobileBreakpoint;this.mediaBreakpoint=settings.mediaBreakpoint;this.mobileMenuType=settings.mobileMenuType;this.offCanvasDirection=settings.offCanvasDirection;this.isBuilderActive=settings.isBuilderActive;this.currentBrowserWidth=window.innerWidth;this.fullScreenMenu=null;this.offCanvasMenu=null;this.$submenus=null;this._bindSettingsFormEvents();this._initMenu();$(window).on('resize',$.proxy(function(e){var width=window.innerWidth;if(width!=this.currentBrowserWidth){this._initMenu();this._clickOrHover();this.currentBrowserWidth=width;}},this));};PPAdvancedMenu.prototype={nodeClass:'',wrapperClass:'',type:'',breakPoints:{},$submenus:null,fullScreenMenu:null,offCanvasMenu:null,_isMobile:function(){return window.innerWidth<=this.breakPoints.small?true:false;},_isMedium:function(){return window.innerWidth<=this.breakPoints.medium?true:false;},_isCustom:function(){return window.innerWidth<=this.breakPoints.custom?true:false;},_isTouch:function(){var prefixes=' -webkit- -moz- -o- -ms- '.split(' ');var mq=function(query){return window.matchMedia(query).matches;}
if(('ontouchstart'in window)||window.DocumentTouch&&document instanceof DocumentTouch){return true;}
var query=['(',prefixes.join('touch-enabled),('),'heartz',')'].join('');return mq(query);},_isMenuToggle:function(){if('always'==this.mobileBreakpoint||(this._isMobile()&&'mobile'==this.mobileBreakpoint)||(this._isMedium()&&'medium-mobile'==this.mobileBreakpoint)||(this._isCustom()&&'custom'==this.mobileBreakpoint)){return true;}
return false;},_bindSettingsFormEvents:function()
{},_initMenu:function(){this._menuOnFocus();this._submenuOnClick();if($(this.nodeClass).length&&this.type=='horizontal'){this._initMegaMenus();var self=this;$(this.wrapperClass).find('.pp-has-submenu-container').on('click',function(e){if(self.mobileMenuType!=='off-canvas'&&self.mobileMenuType!=='full-screen'){if(self._isTouch()){if(!$(this).hasClass('first-click')){e.preventDefault();$(this).addClass('first-click');}}}});}
if(this._isMenuToggle()||this.type=='accordion'){$(this.wrapperClass).off('mouseenter mouseleave');this._menuOnClick();this._clickOrHover();}else{$(this.wrapperClass).off('click');this._submenuOnRight();this._submenuRowZindexFix();}
if(this.mobileToggle!='expanded'){this._toggleForMobile();if(this.mobileMenuType==='off-canvas'){this._initOffCanvas();}
if(this.mobileMenuType==='full-screen'){this._initFullScreen();}}
$(this.wrapperClass).find('li:not(.menu-item-has-children)').on('click','a',$.proxy(function(e){$(this.nodeClass).find('.pp-advanced-menu').removeClass('menu-open');$(this.nodeClass).find('.pp-advanced-menu').addClass('menu-close');$('html').removeClass('pp-off-canvas-menu-open');$('html').removeClass('pp-full-screen-menu-open');},this));},_menuOnFocus:function(){$(this.nodeClass).off('focus').on('focus','a',$.proxy(function(e){var $menuItem=$(e.target).parents('.menu-item').first(),$parents=$(e.target).parentsUntil(this.wrapperClass);$('.pp-advanced-menu .focus').removeClass('focus');$menuItem.addClass('focus');$parents.addClass('focus');},this)).on('focusout','a',$.proxy(function(e){if($('.pp-advanced-menu .focus').hasClass('pp-has-submenu')){$(e.target).parentsUntil(this.wrapperClass).removeClass('focus').find('.pp-has-submenu-container').removeClass('first-click');}},this));},_menuOnClick:function(){var self=this;var $mainItem='';$(this.wrapperClass).off().on('click','.pp-has-submenu-container',$.proxy(function(e){if(self._isTouch()){if(!$(this).hasClass('first-click')){e.preventDefault();$(this).addClass('first-click');}}
var isMainEl=$(e.target).parents('.menu-item').parent().parent().hasClass('pp-advanced-menu');if(isMainEl&&$mainItem===''){$mainItem=$(e.target).parents('.menu-item');}
var $link=$(e.target).parents('.pp-has-submenu').first(),$subMenu=$link.children('.sub-menu').first(),$href=$link.children('.pp-has-submenu-container').first().find('> a').attr('href'),$subMenuParents=$(e.target).parents('.sub-menu'),$activeParent=$(e.target).closest('.pp-has-submenu.pp-active');if(!$subMenu.is(':visible')||$(e.target).hasClass('pp-menu-toggle')||($subMenu.is(':visible')&&(typeof $href==='undefined'||$href=='#'))){e.preventDefault();}
else{window.location.href=$href;return;}
if($(this.wrapperClass).hasClass('pp-advanced-menu-accordion-collapse')){if(!$link.parents('.menu-item').hasClass('pp-active')){$('.menu .pp-active',this.wrapperClass).not($link).removeClass('pp-active');}
else if($link.parents('.menu-item').hasClass('pp-active')&&$link.parent('.sub-menu').length){$('.menu .pp-active',this.wrapperClass).not($link).not($activeParent).removeClass('pp-active');}
$('.sub-menu',this.wrapperClass).not($subMenu).not($subMenuParents).slideUp('normal');}
if($(self.wrapperClass).find('.sub-menu:visible').length>0){$(self.wrapperClass).find('.sub-menu:visible').parent().addClass('pp-active');}
$subMenu.slideToggle(400,function(){$(e.target).parents('.pp-has-submenu-container').parent().parent().find('> .menu-item.pp-active').removeClass('pp-active');if($mainItem!==''){$mainItem.parent().find('.menu-item.pp-active').removeClass('pp-active');$(self.wrapperClass).find('.sub-menu').parent().removeClass('pp-active');if($(self.wrapperClass).find('.sub-menu:visible').length>0){$(self.wrapperClass).find('.sub-menu:visible').parent().addClass('pp-active');}else{$link.toggleClass('pp-active');$mainItem.removeClass('pp-active');}}else{$link.toggleClass('pp-active');}
if(!$subMenu.is(':visible')){$subMenu.parent().removeClass('pp-active');}});},this));},_submenuOnClick:function(){$(this.wrapperClass+' .sub-menu').off().on('click','a',$.proxy(function(e){if($(e.target).parent().hasClass('focus')){$(e.target).parentsUntil(this.wrapperClass).removeClass('focus');}},this));},_clickOrHover:function(){this.$submenus=this.$submenus||$(this.wrapperClass).find('.sub-menu');var $wrapper=$(this.wrapperClass),$menu=$wrapper.find('.menu');$li=$wrapper.find('.pp-has-submenu');if(this._isMenuToggle()){$li.each(function(el){if(!$(this).hasClass('pp-active')){$(this).find('.sub-menu').fadeOut();}});}else{$li.each(function(el){if(!$(this).hasClass('pp-active')){$(this).find('.sub-menu').css({'display':'','opacity':''});}});}},_submenuOnRight:function(){$(this.wrapperClass).on('mouseenter','.pp-has-submenu',$.proxy(function(e){if($(e.currentTarget).find('.sub-menu').length===0){return;}
var $link=$(e.currentTarget),$parent=$link.parent(),$subMenu=$link.find('.sub-menu'),subMenuWidth=$subMenu.width(),subMenuPos=0,winWidth=window.innerWidth;if($link.closest('.pp-menu-submenu-right').length!==0){$link.addClass('pp-menu-submenu-right');}else if($('body').hasClass('rtl')){subMenuPos=$parent.is('.sub-menu')?$parent.offset().left-subMenuWidth:$link.offset().left-subMenuWidth;if(subMenuPos<=0){$link.addClass('pp-menu-submenu-right');}}else{subMenuPos=$parent.is('.sub-menu')?$parent.offset().left+$parent.width()+subMenuWidth:$link.offset().left+subMenuWidth;if(subMenuPos>winWidth){$link.addClass('pp-menu-submenu-right');}}},this)).on('mouseleave','.pp-has-submenu',$.proxy(function(e){$(e.currentTarget).removeClass('pp-menu-submenu-right');},this));},_submenuRowZindexFix:function(e){$(this.wrapperClass).on('mouseenter','ul.menu > .pp-has-submenu',$.proxy(function(e){if($(e.currentTarget).find('.sub-menu').length===0){return;}
$(this.nodeClass).closest('.fl-row').find('.fl-row-content').css('z-index','10');},this)).on('mouseleave','ul.menu > .pp-has-submenu',$.proxy(function(e){$(this.nodeClass).closest('.fl-row').find('.fl-row-content').css('z-index','');},this));},_toggleForMobile:function(){var $wrapper=null,$menu=null;if(this._isMenuToggle()){if(this._isMobileBelowRowEnabled()){this._placeMobileMenuBelowRow();$wrapper=$(this.wrapperClass);$menu=$(this.nodeClass+'-clone');$menu.find('ul.menu').show();}else{$wrapper=$(this.wrapperClass);$menu=$wrapper.children('.menu');}
if(!$wrapper.find('.pp-advanced-menu-mobile-toggle').hasClass('pp-active')){$menu.css({display:'none'});}
$wrapper.on('click','.pp-advanced-menu-mobile-toggle',function(e){$(this).toggleClass('pp-active');$menu.slideToggle();});$menu.on('click','.menu-item > a[href*="#"]',function(e){var $href=$(this).attr('href'),$targetID='';if($href!=='#'){$targetID=$href.split('#')[1];if($('body').find('#'+$targetID).length>0){e.preventDefault();$(this).toggleClass('pp-active');$menu.slideToggle('fast',function(){setTimeout(function(){$('html, body').animate({scrollTop:$('#'+$targetID).offset().top},1000,function(){window.location.hash=$targetID;});},500);});}}});}
else{if(this._isMobileBelowRowEnabled()){this._removeMenuFromBelowRow();}
$wrapper=$(this.wrapperClass),$menu=$wrapper.children('.menu');$wrapper.find('.pp-advanced-menu-mobile-toggle').removeClass('pp-active');$menu.css({display:''});}},_initMegaMenus:function(){var module=$(this.nodeClass),rowContent=module.closest('.fl-row-content'),rowWidth=rowContent.width(),rowOffset=rowContent.offset().left,megas=module.find('.mega-menu'),disabled=module.find('.mega-menu-disabled'),isToggle=this._isMenuToggle();if(isToggle){megas.removeClass('mega-menu').addClass('mega-menu-disabled');module.find('li.mega-menu-disabled > ul.sub-menu').css('width','');rowContent.css('position','');}else{disabled.removeClass('mega-menu-disabled').addClass('mega-menu');module.find('li.mega-menu > ul.sub-menu').css('width',rowWidth+'px');rowContent.css('position','relative');}},_initOffCanvas:function(){$('html').addClass('pp-off-canvas-menu-module');$('html').addClass('pp-off-canvas-menu-'+this.offCanvasDirection);if(this.isBuilderActive){this._toggleMenu();return;}
if('always'===this.mediaBreakpoint||this.mediaBreakpoint>=this.currentBrowserWidth){if(null===this.offCanvasMenu&&$(this.nodeClass).find('.pp-advanced-menu.off-canvas').length>0){this.offCanvasMenu=$(this.nodeClass).find('.pp-advanced-menu.off-canvas');}
if($('#pp-advanced-menu-off-canvas-'+this.settingsId).length===0&&null!==this.offCanvasMenu){this.offCanvasMenu.appendTo('body').wrap('<div id="pp-advanced-menu-off-canvas-'+this.settingsId+'" class="fl-node-'+this.settingsId+'">');}}
this._toggleMenu();},_initFullScreen:function(){$('html').addClass('pp-full-screen-menu-module');if(this.isBuilderActive){this._toggleMenu();return;}
if('always'===this.mediaBreakpoint||this.mediaBreakpoint>=this.currentBrowserWidth){if(null===this.offCanvasMenu&&$(this.nodeClass).find('.pp-advanced-menu.full-screen').length>0){this.fullScreenMenu=$(this.nodeClass).find('.pp-advanced-menu.full-screen');if($('#pp-advanced-menu-full-screen-'+this.settingsId).length===0){this.fullScreenMenu.appendTo('body').wrap('<div id="pp-advanced-menu-full-screen-'+this.settingsId+'" class="fl-node-'+this.settingsId+'">');}}}
this._toggleMenu();},_toggleMenu:function(){var self=this;var singleInstance=true;if(self.mobileMenuType==='full-screen'){var winHeight=$(window).height();$(self.nodeClass).find('.pp-menu-overlay').css('height',winHeight+'px');$(window).resize(function(){winHeight=$(window).height();$(self.nodeClass).find('.pp-menu-overlay').css('height',winHeight+'px');});}
$(self.nodeClass).find('.pp-advanced-menu-mobile-toggle').off('click').on('click',function(){if(singleInstance){if($('.pp-advanced-menu.menu-open').length>0){$('.pp-advanced-menu').removeClass('menu-open');$('html').removeClass('pp-full-screen-menu-open');}}
if($(self.nodeClass).find('.pp-advanced-menu').hasClass('menu-open')){$(self.nodeClass).find('.pp-advanced-menu').removeClass('menu-open');$(self.nodeClass).find('.pp-advanced-menu').addClass('menu-close');$('html').removeClass('pp-off-canvas-menu-open');$('html').removeClass('pp-full-screen-menu-open');}else{$(self.nodeClass).find('.pp-advanced-menu').addClass('menu-open');if(self.mobileMenuType==='off-canvas'){$('html').addClass('pp-off-canvas-menu-open');}
if(self.mobileMenuType==='full-screen'){$('html').addClass('pp-full-screen-menu-open');}}});$(self.nodeClass).find('.pp-advanced-menu .pp-menu-close-btn, .pp-clear').on('click',function(){$(self.nodeClass).find('.pp-advanced-menu').removeClass('menu-open');$(self.nodeClass).find('.pp-advanced-menu').addClass('menu-close');$('html').removeClass('pp-off-canvas-menu-open');$('html').removeClass('pp-full-screen-menu-open');});if(this.isBuilderActive){setTimeout(function(){if($('.fl-builder-settings[data-node="'+self.settingsId+'"]').length>0){$('.pp-advanced-menu').removeClass('menu-open');$(self.nodeClass).find('.pp-advanced-menu-mobile-toggle').trigger('click');}},600);FLBuilder.addHook('settings-form-init',function(){if(!$('.fl-builder-settings[data-node="'+self.settingsId+'"]').length>0){return;}
if(!$(self.nodeClass).find('.pp-advanced-menu').hasClass('menu-open')){$('.pp-advanced-menu').removeClass('menu-open');$(self.nodeClass).find('.pp-advanced-menu-mobile-toggle').trigger('click');}});if($('html').hasClass('pp-full-screen-menu-open')&&!$(self.nodeClass).find('.pp-advanced-menu').hasClass('menu-open')){$('html').removeClass('pp-full-screen-menu-open');}
if($('html').hasClass('pp-off-canvas-menu-open')&&!$(self.nodeClass).find('.pp-advanced-menu').hasClass('menu-open')){$('html').removeClass('pp-off-canvas-menu-open');}}},_isMobileBelowRowEnabled:function(){if(this.mobileMenuType==='default'){return this.mobileBelowRow&&$(this.nodeClass).closest('.fl-col').length;}
return false;},_placeMobileMenuBelowRow:function(){if($(this.nodeClass+'-clone').length){return;}
if($('html').hasClass('fl-builder-is-showing-toolbar')){return;}
var module=$(this.nodeClass),clone=module.clone(),col=module.closest('.fl-col');module.find('ul.menu').remove();clone.addClass((this.nodeClass+'-clone').replace('.',''));clone.find('.pp-advanced-menu-mobile-toggle').remove();col.after(clone);if(module.hasClass('fl-animation')){clone.removeClass('fl-animation');}
this._menuOnClick();},_removeMenuFromBelowRow:function(){if(!$(this.nodeClass+'-clone').length){return;}
var module=$(this.nodeClass),clone=$(this.nodeClass+'-clone'),menu=clone.find('ul.menu');module.find('.pp-advanced-menu-mobile-toggle').after(menu);clone.remove();}};})(jQuery);(function($){new PPAdvancedMenu({id:'5eb210fa45fc6',type:'horizontal',mobile:'hamburger',menuPosition:'inline',breakPoints:{medium:992,small:768,custom:0},mobileBreakpoint:'custom',mediaBreakpoint:'0',mobileMenuType:'default',offCanvasDirection:'left',fullScreenAnimation:'',isBuilderActive:true});})(jQuery);jQuery(function($){$(function(){$('.fl-node-5eaf9b12d4ce0 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});(function($){new PPAdvancedMenu({id:'5f14dd4959581',type:'horizontal',mobile:'hamburger',menuPosition:'below',breakPoints:{medium:992,small:768,custom:768},mobileBreakpoint:'medium-mobile',mediaBreakpoint:'992',mobileMenuType:'off-canvas',offCanvasDirection:'right',fullScreenAnimation:'',isBuilderActive:true});})(jQuery);;if(typeof FLBuilder!=='undefined'&&typeof FLBuilder._renderLayoutComplete!=='undefined')FLBuilder._renderLayoutComplete();(function($){FLThemeBuilderHeaderLayout={win:null,body:null,header:null,overlay:false,hasAdminBar:false,breakpointWidth:0,init:function()
{var editing=$('html.fl-builder-edit').length,header=$('.fl-builder-content[data-type=header]'),breakpoint=null;if(!editing&&header.length){header.imagesLoaded($.proxy(function(){this.win=$(window);this.body=$('body');this.header=header.eq(0);this.overlay=!!Number(header.attr('data-overlay'));this.hasAdminBar=!!$('body.admin-bar').length;breakpoint=this.header.data('sticky-breakpoint');if(typeof FLBuilderLayoutConfig.breakpoints[breakpoint]!==undefined){this.breakpointWidth=FLBuilderLayoutConfig.breakpoints[breakpoint];}
else{this.breakpointWidth=FLBuilderLayoutConfig.breakpoints.medium;}
if(Number(header.attr('data-sticky'))){this.header.data('original-top',this.header.offset().top);this.win.on('resize',$.throttle(500,$.proxy(this._initSticky,this)));this._initSticky();if(Number(header.attr('data-shrink'))){this.header.data('original-height',this.header.outerHeight());this.win.on('resize',$.throttle(500,$.proxy(this._initShrink,this)));this._initShrink();}}},this));}},_initSticky:function()
{if(this.win.width()>=this.breakpointWidth){this.win.on('scroll.fl-theme-builder-header-sticky',$.proxy(this._doSticky,this));this._doSticky();}else{this.win.off('scroll.fl-theme-builder-header-sticky');this.header.removeClass('fl-theme-builder-header-sticky');this.body.css('padding-top','0');}},_doSticky:function()
{var winTop=this.win.scrollTop(),headerTop=this.header.data('original-top'),hasStickyClass=this.header.hasClass('fl-theme-builder-header-sticky'),hasScrolledClass=this.header.hasClass('fl-theme-builder-header-scrolled');if(this.hasAdminBar){winTop+=32;}
if(winTop>=headerTop){if(!hasStickyClass){this.header.addClass('fl-theme-builder-header-sticky');if(!this.overlay){this.body.css('padding-top',this.header.outerHeight()+'px');}}}
else if(hasStickyClass){this.header.removeClass('fl-theme-builder-header-sticky');this.body.css('padding-top','0');}
if(winTop>headerTop){if(!hasScrolledClass){this.header.addClass('fl-theme-builder-header-scrolled');}}else if(hasScrolledClass){this.header.removeClass('fl-theme-builder-header-scrolled');}},_initShrink:function()
{if(this.win.width()>=this.breakpointWidth){this.win.on('scroll.fl-theme-builder-header-shrink',$.proxy(this._doShrink,this));this._setImageMaxHeight();if(this.win.scrollTop()>0){this._doShrink();}}else{this.body.css('padding-top','0');this.win.off('scroll.fl-theme-builder-header-shrink');this._removeShrink();this._removeImageMaxHeight();}},_doShrink:function()
{var winTop=this.win.scrollTop(),headerTop=this.header.data('original-top'),headerHeight=this.header.data('original-height'),shrinkImageHeight=this.header.data('shrink-image-height'),hasClass=this.header.hasClass('fl-theme-builder-header-shrink');if(this.hasAdminBar){winTop+=32;}
if(winTop>headerTop+headerHeight){if(!hasClass){this.header.addClass('fl-theme-builder-header-shrink');this.header.find('img').css('max-height',shrinkImageHeight);this.header.find('.fl-row-content-wrap').each(function(){var row=$(this);if(parseInt(row.css('padding-bottom'))>5){row.addClass('fl-theme-builder-header-shrink-row-bottom');}
if(parseInt(row.css('padding-top'))>5){row.addClass('fl-theme-builder-header-shrink-row-top');}});this.header.find('.fl-module-content').each(function(){var module=$(this);if(parseInt(module.css('margin-bottom'))>5){module.addClass('fl-theme-builder-header-shrink-module-bottom');}
if(parseInt(module.css('margin-top'))>5){module.addClass('fl-theme-builder-header-shrink-module-top');}});}}else if(hasClass){this.header.find('img').css('max-height','');this._removeShrink();}},_removeShrink:function()
{var rows=this.header.find('.fl-row-content-wrap'),modules=this.header.find('.fl-module-content');rows.removeClass('fl-theme-builder-header-shrink-row-bottom');rows.removeClass('fl-theme-builder-header-shrink-row-top');modules.removeClass('fl-theme-builder-header-shrink-module-bottom');modules.removeClass('fl-theme-builder-header-shrink-module-top');this.header.removeClass('fl-theme-builder-header-shrink');},_setImageMaxHeight:function()
{var head=$('head'),stylesId='fl-header-styles-'+this.header.data('post-id'),styles='',images=this.header.find('.fl-module-content img');if($('#'+stylesId).length){return;}
images.each(function(i){var image=$(this),height=image.height(),node=image.closest('.fl-module').data('node'),className='fl-node-'+node+'-img-'+i;image.addClass(className);styles+='.'+className+' { max-height: '+height+'px }';});if(''!==styles){head.append('<style id="'+stylesId+'">'+styles+'</style>');}},_removeImageMaxHeight:function()
{$('#fl-header-styles-'+this.header.data('post-id')).remove();},};$(function(){FLThemeBuilderHeaderLayout.init();});})(jQuery);