// Compiled by ClojureScript 0.0-2080
goog.provide('snazzy.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
snazzy.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
snazzy.core.jsonp = (function jsonp(uri){var out = cljs.core.async.chan.call(null);var req = (new goog.net.Jsonp((new goog.Uri(uri))));req.send(null,(function (e){return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
snazzy.core.wiki_search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
snazzy.core.search_url = (function search_url(q){return [cljs.core.str(snazzy.core.wiki_search_url),cljs.core.str(q)].join('');
});
var clicks_17769 = snazzy.core.listen.call(null,goog.dom.getElement("search"),"click");var c__5824__auto___17770 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_17753){var state_val_17754 = (state_17753[1]);if((state_val_17754 === 7))
{var inst_17744 = (state_17753[2]);var inst_17745 = console.log(inst_17744);var state_17753__$1 = (function (){var statearr_17755 = state_17753;(statearr_17755[7] = inst_17745);
return statearr_17755;
})();var statearr_17756_17771 = state_17753__$1;(statearr_17756_17771[2] = null);
(statearr_17756_17771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17754 === 6))
{var inst_17749 = (state_17753[2]);var state_17753__$1 = state_17753;var statearr_17757_17772 = state_17753__$1;(statearr_17757_17772[2] = inst_17749);
(statearr_17757_17772[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17754 === 5))
{var state_17753__$1 = state_17753;var statearr_17758_17773 = state_17753__$1;(statearr_17758_17773[2] = null);
(statearr_17758_17773[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17754 === 4))
{var state_17753__$1 = state_17753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17753__$1,7,clicks_17769);
} else
{if((state_val_17754 === 3))
{var inst_17751 = (state_17753[2]);var state_17753__$1 = state_17753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17753__$1,inst_17751);
} else
{if((state_val_17754 === 2))
{var state_17753__$1 = state_17753;if(true)
{var statearr_17759_17774 = state_17753__$1;(statearr_17759_17774[1] = 4);
} else
{var statearr_17760_17775 = state_17753__$1;(statearr_17760_17775[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17754 === 1))
{var state_17753__$1 = state_17753;var statearr_17761_17776 = state_17753__$1;(statearr_17761_17776[2] = null);
(statearr_17761_17776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_17765 = (new Array(8));(statearr_17765[0] = state_machine__5755__auto__);
(statearr_17765[1] = 1);
return statearr_17765;
});
var state_machine__5755__auto____1 = (function (state_17753){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_17753);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e17766){if((e17766 instanceof Object))
{var ex__5758__auto__ = e17766;var statearr_17767_17777 = state_17753;(statearr_17767_17777[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17778 = state_17753;
state_17753 = G__17778;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_17753){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_17753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_17768 = f__5825__auto__.call(null);(statearr_17768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___17770);
return statearr_17768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
snazzy.core.o.call(null,console.log(cljs.core.async._LT__BANG_.call(null,snazzy.core.jsonp.call(null,snazzy.core.search_url.call(null,"cats")))));

//# sourceMappingURL=core.js.map