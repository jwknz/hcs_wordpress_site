;(function($){$('.fl-node-5eb35376a6d98 .pp-breadcrumbs a').parent().css({'padding':'0','background-color':'transparent','border':'0','margin':'0','box-shadow':'none'});$('.fl-node-5eb35376a6d98 .pp-breadcrumbs a').parent().parent().css({'padding':'0','background-color':'transparent','border':'0','margin':'0','box-shadow':'none'});})(jQuery);;(function($){PPSearchForm=function(settings){this.id=settings.id;this.node=$('.fl-node-'+this.id);this.form=this.node.find('.pp-search-form');this._init();};PPSearchForm.prototype={id:'',node:'',form:'',_init:function(){this.form.find('.pp-search-form__input').on('focus',$.proxy(function(){this.form.addClass('pp-search-form--focus');},this));this.form.find('.pp-search-form__input').on('blur',$.proxy(function(){this.form.removeClass('pp-search-form--focus');},this));this.form.find('.pp-search-form__toggle').on('click',$.proxy(function(){this.form.find('.pp-search-form__container').addClass('pp-search-form--lightbox').find('.pp-search-form__input').focus();this._focus(this.form);},this));this.form.find('.pp-search-form--lightbox-close').on('click',$.proxy(function(){this.form.find('.pp-search-form__container').removeClass('pp-search-form--lightbox');},this));var self=this;$(document).keyup(function(e){if(27==e.which&&self.form.find('.pp-search-form--lightbox').length>0){self.form.find('.pp-search-form__container').removeClass('pp-search-form--lightbox');}});},_focus:function(form){var $el=form.find('.pp-search-form__input');if($el[0].setSelectionRange){var len=$el.val().length*2;setTimeout(function(){$el[0].setSelectionRange(len,len);},1);}else{$el.val($el.val());}}};})(jQuery);;(function($){new PPSearchForm({id:'5ec473190aa62',});})(jQuery);