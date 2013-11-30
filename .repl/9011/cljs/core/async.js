// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15339 = (function (f,fn_handler,meta15340){
this.f = f;
this.fn_handler = fn_handler;
this.meta15340 = meta15340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15339.cljs$lang$type = true;
cljs.core.async.t15339.cljs$lang$ctorStr = "cljs.core.async/t15339";
cljs.core.async.t15339.cljs$lang$ctorPrWriter = (function (this__9284__auto__,writer__9285__auto__,opt__9286__auto__){return cljs.core._write.call(null,writer__9285__auto__,"cljs.core.async/t15339");
});
cljs.core.async.t15339.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15341){var self__ = this;
var _15341__$1 = this;return self__.meta15340;
});
cljs.core.async.t15339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15341,meta15340__$1){var self__ = this;
var _15341__$1 = this;return (new cljs.core.async.t15339(self__.f,self__.fn_handler,meta15340__$1));
});
cljs.core.async.__GT_t15339 = (function __GT_t15339(f__$1,fn_handler__$1,meta15340){return (new cljs.core.async.t15339(f__$1,fn_handler__$1,meta15340));
});
}
return (new cljs.core.async.t15339(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15343 = buff;if(G__15343)
{var bit__9366__auto__ = null;if(cljs.core.truth_((function (){var or__8740__auto__ = bit__9366__auto__;if(cljs.core.truth_(or__8740__auto__))
{return or__8740__auto__;
} else
{return G__15343.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15343.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15343);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15343);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_15344 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15344);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_15344);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8728__auto__ = ret;if(cljs.core.truth_(and__8728__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8728__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9563__auto___15345 = n;var x_15346 = 0;while(true){
if((x_15346 < n__9563__auto___15345))
{(a[x_15346] = 0);
{
var G__15347 = (x_15346 + 1);
x_15346 = G__15347;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15348 = (i + 1);
i = G__15348;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15352 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15352 = (function (flag,alt_flag,meta15353){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15353 = meta15353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15352.cljs$lang$type = true;
cljs.core.async.t15352.cljs$lang$ctorStr = "cljs.core.async/t15352";
cljs.core.async.t15352.cljs$lang$ctorPrWriter = (function (this__9284__auto__,writer__9285__auto__,opt__9286__auto__){return cljs.core._write.call(null,writer__9285__auto__,"cljs.core.async/t15352");
});
cljs.core.async.t15352.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t15352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t15352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15354){var self__ = this;
var _15354__$1 = this;return self__.meta15353;
});
cljs.core.async.t15352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15354,meta15353__$1){var self__ = this;
var _15354__$1 = this;return (new cljs.core.async.t15352(self__.flag,self__.alt_flag,meta15353__$1));
});
cljs.core.async.__GT_t15352 = (function __GT_t15352(flag__$1,alt_flag__$1,meta15353){return (new cljs.core.async.t15352(flag__$1,alt_flag__$1,meta15353));
});
}
return (new cljs.core.async.t15352(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15358 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15358 = (function (cb,flag,alt_handler,meta15359){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15359 = meta15359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15358.cljs$lang$type = true;
cljs.core.async.t15358.cljs$lang$ctorStr = "cljs.core.async/t15358";
cljs.core.async.t15358.cljs$lang$ctorPrWriter = (function (this__9284__auto__,writer__9285__auto__,opt__9286__auto__){return cljs.core._write.call(null,writer__9285__auto__,"cljs.core.async/t15358");
});
cljs.core.async.t15358.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15360){var self__ = this;
var _15360__$1 = this;return self__.meta15359;
});
cljs.core.async.t15358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15360,meta15359__$1){var self__ = this;
var _15360__$1 = this;return (new cljs.core.async.t15358(self__.cb,self__.flag,self__.alt_handler,meta15359__$1));
});
cljs.core.async.__GT_t15358 = (function __GT_t15358(cb__$1,flag__$1,alt_handler__$1,meta15359){return (new cljs.core.async.t15358(cb__$1,flag__$1,alt_handler__$1,meta15359));
});
}
return (new cljs.core.async.t15358(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15361_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15361_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8740__auto__ = wport;if(cljs.core.truth_(or__8740__auto__))
{return or__8740__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15362 = (i + 1);
i = G__15362;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8740__auto__ = ret;if(cljs.core.truth_(or__8740__auto__))
{return or__8740__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8728__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8728__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8728__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15363){var map__15365 = p__15363;var map__15365__$1 = ((cljs.core.seq_QMARK_.call(null,map__15365))?cljs.core.apply.call(null,cljs.core.hash_map,map__15365):map__15365);var opts = map__15365__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15363 = null;if (arguments.length > 1) {
  p__15363 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15363);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15366){
var ports = cljs.core.first(arglist__15366);
var p__15363 = cljs.core.rest(arglist__15366);
return alts_BANG___delegate(ports,p__15363);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15374 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15374 = (function (ch,f,map_LT_,meta15375){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15375 = meta15375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15374.cljs$lang$type = true;
cljs.core.async.t15374.cljs$lang$ctorStr = "cljs.core.async/t15374";
cljs.core.async.t15374.cljs$lang$ctorPrWriter = (function (this__9284__auto__,writer__9285__auto__,opt__9286__auto__){return cljs.core._write.call(null,writer__9285__auto__,"cljs.core.async/t15374");
});
cljs.core.async.t15374.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15374.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15374.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15374.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15377 = (function (fn1,_,meta15375,ch,f,map_LT_,meta15378){
this.fn1 = fn1;
this._ = _;
this.meta15375 = meta15375;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15378 = meta15378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15377.cljs$lang$type = true;
cljs.core.async.t15377.cljs$lang$ctorStr = "cljs.core.async/t15377";
cljs.core.async.t15377.cljs$lang$ctorPrWriter = (function (this__9284__auto__,writer__9285__auto__,opt__9286__auto__){return cljs.core._write.call(null,writer__9285__auto__,"cljs.core.async/t15377");
});
cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__15367_SHARP_){return f1.call(null,(((p1__15367_SHARP_ == null))?null:self__.f.call(null,p1__15367_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15379){var self__ = this;
var _15379__$1 = this;return self__.meta15378;
});
cljs.core.async.t15377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15379,meta15378__$1){var self__ = this;
var _15379__$1 = this;return (new cljs.core.async.t15377(self__.fn1,self__._,self__.meta15375,self__.ch,self__.f,self__.map_LT_,meta15378__$1));
});
cljs.core.async.__GT_t15377 = (function __GT_t15377(fn1__$1,___$2,meta15375__$1,ch__$2,f__$2,map_LT___$2,meta15378){return (new cljs.core.async.t15377(fn1__$1,___$2,meta15375__$1,ch__$2,f__$2,map_LT___$2,meta15378));
});
}
return (new cljs.core.async.t15377(fn1,___$1,self__.meta15375,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8728__auto__ = ret;if(cljs.core.truth_(and__8728__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8728__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15374.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15374.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15376){var self__ = this;
var _15376__$1 = this;return self__.meta15375;
});
cljs.core.async.t15374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15376,meta15375__$1){var self__ = this;
var _15376__$1 = this;return (new cljs.core.async.t15374(self__.ch,self__.f,self__.map_LT_,meta15375__$1));
});
cljs.core.async.__GT_t15374 = (function __GT_t15374(ch__$1,f__$1,map_LT___$1,meta15375){return (new cljs.core.async.t15374(ch__$1,f__$1,map_LT___$1,meta15375));
});
}
return (new cljs.core.async.t15374(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15383 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15383 = (function (ch,f,map_GT_,meta15384){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15384 = meta15384;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15383.cljs$lang$type = true;
cljs.core.async.t15383.cljs$lang$ctorStr = "cljs.core.async/t15383";
cljs.core.async.t15383.cljs$lang$ctorPrWriter = (function (this__9284__auto__,writer__9285__auto__,opt__9286__auto__){return cljs.core._write.call(null,writer__9285__auto__,"cljs.core.async/t15383");
});
cljs.core.async.t15383.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15383.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15383.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15383.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15383.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15383.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15385){var self__ = this;
var _15385__$1 = this;return self__.meta15384;
});
cljs.core.async.t15383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15385,meta15384__$1){var self__ = this;
var _15385__$1 = this;return (new cljs.core.async.t15383(self__.ch,self__.f,self__.map_GT_,meta15384__$1));
});
cljs.core.async.__GT_t15383 = (function __GT_t15383(ch__$1,f__$1,map_GT___$1,meta15384){return (new cljs.core.async.t15383(ch__$1,f__$1,map_GT___$1,meta15384));
});
}
return (new cljs.core.async.t15383(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15389 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15389 = (function (ch,p,filter_GT_,meta15390){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15390 = meta15390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15389.cljs$lang$type = true;
cljs.core.async.t15389.cljs$lang$ctorStr = "cljs.core.async/t15389";
cljs.core.async.t15389.cljs$lang$ctorPrWriter = (function (this__9284__auto__,writer__9285__auto__,opt__9286__auto__){return cljs.core._write.call(null,writer__9285__auto__,"cljs.core.async/t15389");
});
cljs.core.async.t15389.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15389.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15389.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15391){var self__ = this;
var _15391__$1 = this;return self__.meta15390;
});
cljs.core.async.t15389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15391,meta15390__$1){var self__ = this;
var _15391__$1 = this;return (new cljs.core.async.t15389(self__.ch,self__.p,self__.filter_GT_,meta15390__$1));
});
cljs.core.async.__GT_t15389 = (function __GT_t15389(ch__$1,p__$1,filter_GT___$1,meta15390){return (new cljs.core.async.t15389(ch__$1,p__$1,filter_GT___$1,meta15390));
});
}
return (new cljs.core.async.t15389(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11786__auto___15474 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_15453){var state_val_15454 = (state_15453[1]);if((state_val_15454 === 1))
{var state_15453__$1 = state_15453;var statearr_15455_15475 = state_15453__$1;(statearr_15455_15475[2] = null);
(statearr_15455_15475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15454 === 2))
{var state_15453__$1 = state_15453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15453__$1,4,ch);
} else
{if((state_val_15454 === 3))
{var inst_15451 = (state_15453[2]);var state_15453__$1 = state_15453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15453__$1,inst_15451);
} else
{if((state_val_15454 === 4))
{var inst_15435 = (state_15453[7]);var inst_15435__$1 = (state_15453[2]);var inst_15436 = (inst_15435__$1 == null);var state_15453__$1 = (function (){var statearr_15456 = state_15453;(statearr_15456[7] = inst_15435__$1);
return statearr_15456;
})();if(cljs.core.truth_(inst_15436))
{var statearr_15457_15476 = state_15453__$1;(statearr_15457_15476[1] = 5);
} else
{var statearr_15458_15477 = state_15453__$1;(statearr_15458_15477[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15454 === 5))
{var inst_15438 = cljs.core.async.close_BANG_.call(null,out);var state_15453__$1 = state_15453;var statearr_15459_15478 = state_15453__$1;(statearr_15459_15478[2] = inst_15438);
(statearr_15459_15478[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15454 === 6))
{var inst_15435 = (state_15453[7]);var inst_15440 = p.call(null,inst_15435);var state_15453__$1 = state_15453;if(cljs.core.truth_(inst_15440))
{var statearr_15460_15479 = state_15453__$1;(statearr_15460_15479[1] = 8);
} else
{var statearr_15461_15480 = state_15453__$1;(statearr_15461_15480[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15454 === 7))
{var inst_15449 = (state_15453[2]);var state_15453__$1 = state_15453;var statearr_15462_15481 = state_15453__$1;(statearr_15462_15481[2] = inst_15449);
(statearr_15462_15481[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15454 === 8))
{var inst_15435 = (state_15453[7]);var state_15453__$1 = state_15453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15453__$1,11,out,inst_15435);
} else
{if((state_val_15454 === 9))
{var state_15453__$1 = state_15453;var statearr_15463_15482 = state_15453__$1;(statearr_15463_15482[2] = null);
(statearr_15463_15482[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15454 === 10))
{var inst_15446 = (state_15453[2]);var state_15453__$1 = (function (){var statearr_15464 = state_15453;(statearr_15464[8] = inst_15446);
return statearr_15464;
})();var statearr_15465_15483 = state_15453__$1;(statearr_15465_15483[2] = null);
(statearr_15465_15483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15454 === 11))
{var inst_15443 = (state_15453[2]);var state_15453__$1 = state_15453;var statearr_15466_15484 = state_15453__$1;(statearr_15466_15484[2] = inst_15443);
(statearr_15466_15484[1] = 10);
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
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_15470 = (new Array(9));(statearr_15470[0] = state_machine__11692__auto__);
(statearr_15470[1] = 1);
return statearr_15470;
});
var state_machine__11692__auto____1 = (function (state_15453){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_15453);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e15471){if((e15471 instanceof Object))
{var ex__11695__auto__ = e15471;var statearr_15472_15485 = state_15453;(statearr_15472_15485[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15486 = state_15453;
state_15453 = G__15486;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_15453){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_15453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_15473 = f__11787__auto__.call(null);(statearr_15473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___15474);
return statearr_15473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11786__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_15638){var state_val_15639 = (state_15638[1]);if((state_val_15639 === 1))
{var state_15638__$1 = state_15638;var statearr_15640_15677 = state_15638__$1;(statearr_15640_15677[2] = null);
(statearr_15640_15677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 2))
{var state_15638__$1 = state_15638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15638__$1,4,in$);
} else
{if((state_val_15639 === 3))
{var inst_15636 = (state_15638[2]);var state_15638__$1 = state_15638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15638__$1,inst_15636);
} else
{if((state_val_15639 === 4))
{var inst_15584 = (state_15638[7]);var inst_15584__$1 = (state_15638[2]);var inst_15585 = (inst_15584__$1 == null);var state_15638__$1 = (function (){var statearr_15641 = state_15638;(statearr_15641[7] = inst_15584__$1);
return statearr_15641;
})();if(cljs.core.truth_(inst_15585))
{var statearr_15642_15678 = state_15638__$1;(statearr_15642_15678[1] = 5);
} else
{var statearr_15643_15679 = state_15638__$1;(statearr_15643_15679[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 5))
{var inst_15587 = cljs.core.async.close_BANG_.call(null,out);var state_15638__$1 = state_15638;var statearr_15644_15680 = state_15638__$1;(statearr_15644_15680[2] = inst_15587);
(statearr_15644_15680[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 6))
{var inst_15584 = (state_15638[7]);var inst_15589 = f.call(null,inst_15584);var inst_15594 = cljs.core.seq.call(null,inst_15589);var inst_15595 = inst_15594;var inst_15596 = null;var inst_15597 = 0;var inst_15598 = 0;var state_15638__$1 = (function (){var statearr_15645 = state_15638;(statearr_15645[8] = inst_15597);
(statearr_15645[9] = inst_15598);
(statearr_15645[10] = inst_15595);
(statearr_15645[11] = inst_15596);
return statearr_15645;
})();var statearr_15646_15681 = state_15638__$1;(statearr_15646_15681[2] = null);
(statearr_15646_15681[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 7))
{var inst_15634 = (state_15638[2]);var state_15638__$1 = state_15638;var statearr_15647_15682 = state_15638__$1;(statearr_15647_15682[2] = inst_15634);
(statearr_15647_15682[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 8))
{var inst_15597 = (state_15638[8]);var inst_15598 = (state_15638[9]);var inst_15600 = (inst_15598 < inst_15597);var inst_15601 = inst_15600;var state_15638__$1 = state_15638;if(cljs.core.truth_(inst_15601))
{var statearr_15648_15683 = state_15638__$1;(statearr_15648_15683[1] = 10);
} else
{var statearr_15649_15684 = state_15638__$1;(statearr_15649_15684[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 9))
{var inst_15631 = (state_15638[2]);var state_15638__$1 = (function (){var statearr_15650 = state_15638;(statearr_15650[12] = inst_15631);
return statearr_15650;
})();var statearr_15651_15685 = state_15638__$1;(statearr_15651_15685[2] = null);
(statearr_15651_15685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 10))
{var inst_15598 = (state_15638[9]);var inst_15596 = (state_15638[11]);var inst_15603 = cljs.core._nth.call(null,inst_15596,inst_15598);var state_15638__$1 = state_15638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15638__$1,13,out,inst_15603);
} else
{if((state_val_15639 === 11))
{var inst_15595 = (state_15638[10]);var inst_15609 = (state_15638[13]);var inst_15609__$1 = cljs.core.seq.call(null,inst_15595);var state_15638__$1 = (function (){var statearr_15655 = state_15638;(statearr_15655[13] = inst_15609__$1);
return statearr_15655;
})();if(inst_15609__$1)
{var statearr_15656_15686 = state_15638__$1;(statearr_15656_15686[1] = 14);
} else
{var statearr_15657_15687 = state_15638__$1;(statearr_15657_15687[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 12))
{var inst_15629 = (state_15638[2]);var state_15638__$1 = state_15638;var statearr_15658_15688 = state_15638__$1;(statearr_15658_15688[2] = inst_15629);
(statearr_15658_15688[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 13))
{var inst_15597 = (state_15638[8]);var inst_15598 = (state_15638[9]);var inst_15595 = (state_15638[10]);var inst_15596 = (state_15638[11]);var inst_15605 = (state_15638[2]);var inst_15606 = (inst_15598 + 1);var tmp15652 = inst_15597;var tmp15653 = inst_15595;var tmp15654 = inst_15596;var inst_15595__$1 = tmp15653;var inst_15596__$1 = tmp15654;var inst_15597__$1 = tmp15652;var inst_15598__$1 = inst_15606;var state_15638__$1 = (function (){var statearr_15659 = state_15638;(statearr_15659[14] = inst_15605);
(statearr_15659[8] = inst_15597__$1);
(statearr_15659[9] = inst_15598__$1);
(statearr_15659[10] = inst_15595__$1);
(statearr_15659[11] = inst_15596__$1);
return statearr_15659;
})();var statearr_15660_15689 = state_15638__$1;(statearr_15660_15689[2] = null);
(statearr_15660_15689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 14))
{var inst_15609 = (state_15638[13]);var inst_15611 = cljs.core.chunked_seq_QMARK_.call(null,inst_15609);var state_15638__$1 = state_15638;if(inst_15611)
{var statearr_15661_15690 = state_15638__$1;(statearr_15661_15690[1] = 17);
} else
{var statearr_15662_15691 = state_15638__$1;(statearr_15662_15691[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 15))
{var state_15638__$1 = state_15638;var statearr_15663_15692 = state_15638__$1;(statearr_15663_15692[2] = null);
(statearr_15663_15692[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 16))
{var inst_15627 = (state_15638[2]);var state_15638__$1 = state_15638;var statearr_15664_15693 = state_15638__$1;(statearr_15664_15693[2] = inst_15627);
(statearr_15664_15693[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 17))
{var inst_15609 = (state_15638[13]);var inst_15613 = cljs.core.chunk_first.call(null,inst_15609);var inst_15614 = cljs.core.chunk_rest.call(null,inst_15609);var inst_15615 = cljs.core.count.call(null,inst_15613);var inst_15595 = inst_15614;var inst_15596 = inst_15613;var inst_15597 = inst_15615;var inst_15598 = 0;var state_15638__$1 = (function (){var statearr_15665 = state_15638;(statearr_15665[8] = inst_15597);
(statearr_15665[9] = inst_15598);
(statearr_15665[10] = inst_15595);
(statearr_15665[11] = inst_15596);
return statearr_15665;
})();var statearr_15666_15694 = state_15638__$1;(statearr_15666_15694[2] = null);
(statearr_15666_15694[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 18))
{var inst_15609 = (state_15638[13]);var inst_15618 = cljs.core.first.call(null,inst_15609);var state_15638__$1 = state_15638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15638__$1,20,out,inst_15618);
} else
{if((state_val_15639 === 19))
{var inst_15624 = (state_15638[2]);var state_15638__$1 = state_15638;var statearr_15667_15695 = state_15638__$1;(statearr_15667_15695[2] = inst_15624);
(statearr_15667_15695[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15639 === 20))
{var inst_15609 = (state_15638[13]);var inst_15620 = (state_15638[2]);var inst_15621 = cljs.core.next.call(null,inst_15609);var inst_15595 = inst_15621;var inst_15596 = null;var inst_15597 = 0;var inst_15598 = 0;var state_15638__$1 = (function (){var statearr_15668 = state_15638;(statearr_15668[15] = inst_15620);
(statearr_15668[8] = inst_15597);
(statearr_15668[9] = inst_15598);
(statearr_15668[10] = inst_15595);
(statearr_15668[11] = inst_15596);
return statearr_15668;
})();var statearr_15669_15696 = state_15638__$1;(statearr_15669_15696[2] = null);
(statearr_15669_15696[1] = 8);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_15673 = (new Array(16));(statearr_15673[0] = state_machine__11692__auto__);
(statearr_15673[1] = 1);
return statearr_15673;
});
var state_machine__11692__auto____1 = (function (state_15638){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_15638);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e15674){if((e15674 instanceof Object))
{var ex__11695__auto__ = e15674;var statearr_15675_15697 = state_15638;(statearr_15675_15697[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15698 = state_15638;
state_15638 = G__15698;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_15638){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_15638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_15676 = f__11787__auto__.call(null);(statearr_15676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto__);
return statearr_15676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return c__11786__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11786__auto___15779 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_15758){var state_val_15759 = (state_15758[1]);if((state_val_15759 === 1))
{var state_15758__$1 = state_15758;var statearr_15760_15780 = state_15758__$1;(statearr_15760_15780[2] = null);
(statearr_15760_15780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15759 === 2))
{var state_15758__$1 = state_15758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15758__$1,4,from);
} else
{if((state_val_15759 === 3))
{var inst_15756 = (state_15758[2]);var state_15758__$1 = state_15758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15758__$1,inst_15756);
} else
{if((state_val_15759 === 4))
{var inst_15741 = (state_15758[7]);var inst_15741__$1 = (state_15758[2]);var inst_15742 = (inst_15741__$1 == null);var state_15758__$1 = (function (){var statearr_15761 = state_15758;(statearr_15761[7] = inst_15741__$1);
return statearr_15761;
})();if(cljs.core.truth_(inst_15742))
{var statearr_15762_15781 = state_15758__$1;(statearr_15762_15781[1] = 5);
} else
{var statearr_15763_15782 = state_15758__$1;(statearr_15763_15782[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15759 === 5))
{var state_15758__$1 = state_15758;if(cljs.core.truth_(close_QMARK_))
{var statearr_15764_15783 = state_15758__$1;(statearr_15764_15783[1] = 8);
} else
{var statearr_15765_15784 = state_15758__$1;(statearr_15765_15784[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15759 === 6))
{var inst_15741 = (state_15758[7]);var state_15758__$1 = state_15758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15758__$1,11,to,inst_15741);
} else
{if((state_val_15759 === 7))
{var inst_15754 = (state_15758[2]);var state_15758__$1 = state_15758;var statearr_15766_15785 = state_15758__$1;(statearr_15766_15785[2] = inst_15754);
(statearr_15766_15785[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15759 === 8))
{var inst_15745 = cljs.core.async.close_BANG_.call(null,to);var state_15758__$1 = state_15758;var statearr_15767_15786 = state_15758__$1;(statearr_15767_15786[2] = inst_15745);
(statearr_15767_15786[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15759 === 9))
{var state_15758__$1 = state_15758;var statearr_15768_15787 = state_15758__$1;(statearr_15768_15787[2] = null);
(statearr_15768_15787[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15759 === 10))
{var inst_15748 = (state_15758[2]);var state_15758__$1 = state_15758;var statearr_15769_15788 = state_15758__$1;(statearr_15769_15788[2] = inst_15748);
(statearr_15769_15788[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15759 === 11))
{var inst_15751 = (state_15758[2]);var state_15758__$1 = (function (){var statearr_15770 = state_15758;(statearr_15770[8] = inst_15751);
return statearr_15770;
})();var statearr_15771_15789 = state_15758__$1;(statearr_15771_15789[2] = null);
(statearr_15771_15789[1] = 2);
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
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_15775 = (new Array(9));(statearr_15775[0] = state_machine__11692__auto__);
(statearr_15775[1] = 1);
return statearr_15775;
});
var state_machine__11692__auto____1 = (function (state_15758){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_15758);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e15776){if((e15776 instanceof Object))
{var ex__11695__auto__ = e15776;var statearr_15777_15790 = state_15758;(statearr_15777_15790[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15758);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15791 = state_15758;
state_15758 = G__15791;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_15758){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_15758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_15778 = f__11787__auto__.call(null);(statearr_15778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___15779);
return statearr_15778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11786__auto___15878 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_15856){var state_val_15857 = (state_15856[1]);if((state_val_15857 === 1))
{var state_15856__$1 = state_15856;var statearr_15858_15879 = state_15856__$1;(statearr_15858_15879[2] = null);
(statearr_15858_15879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 2))
{var state_15856__$1 = state_15856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15856__$1,4,ch);
} else
{if((state_val_15857 === 3))
{var inst_15854 = (state_15856[2]);var state_15856__$1 = state_15856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15856__$1,inst_15854);
} else
{if((state_val_15857 === 4))
{var inst_15837 = (state_15856[7]);var inst_15837__$1 = (state_15856[2]);var inst_15838 = (inst_15837__$1 == null);var state_15856__$1 = (function (){var statearr_15859 = state_15856;(statearr_15859[7] = inst_15837__$1);
return statearr_15859;
})();if(cljs.core.truth_(inst_15838))
{var statearr_15860_15880 = state_15856__$1;(statearr_15860_15880[1] = 5);
} else
{var statearr_15861_15881 = state_15856__$1;(statearr_15861_15881[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 5))
{var inst_15840 = cljs.core.async.close_BANG_.call(null,tc);var inst_15841 = cljs.core.async.close_BANG_.call(null,fc);var state_15856__$1 = (function (){var statearr_15862 = state_15856;(statearr_15862[8] = inst_15840);
return statearr_15862;
})();var statearr_15863_15882 = state_15856__$1;(statearr_15863_15882[2] = inst_15841);
(statearr_15863_15882[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 6))
{var inst_15837 = (state_15856[7]);var inst_15843 = p.call(null,inst_15837);var state_15856__$1 = state_15856;if(cljs.core.truth_(inst_15843))
{var statearr_15864_15883 = state_15856__$1;(statearr_15864_15883[1] = 9);
} else
{var statearr_15865_15884 = state_15856__$1;(statearr_15865_15884[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 7))
{var inst_15852 = (state_15856[2]);var state_15856__$1 = state_15856;var statearr_15866_15885 = state_15856__$1;(statearr_15866_15885[2] = inst_15852);
(statearr_15866_15885[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 8))
{var inst_15849 = (state_15856[2]);var state_15856__$1 = (function (){var statearr_15867 = state_15856;(statearr_15867[9] = inst_15849);
return statearr_15867;
})();var statearr_15868_15886 = state_15856__$1;(statearr_15868_15886[2] = null);
(statearr_15868_15886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 9))
{var state_15856__$1 = state_15856;var statearr_15869_15887 = state_15856__$1;(statearr_15869_15887[2] = tc);
(statearr_15869_15887[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 10))
{var state_15856__$1 = state_15856;var statearr_15870_15888 = state_15856__$1;(statearr_15870_15888[2] = fc);
(statearr_15870_15888[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 11))
{var inst_15837 = (state_15856[7]);var inst_15847 = (state_15856[2]);var state_15856__$1 = state_15856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15856__$1,8,inst_15847,inst_15837);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_15874 = (new Array(10));(statearr_15874[0] = state_machine__11692__auto__);
(statearr_15874[1] = 1);
return statearr_15874;
});
var state_machine__11692__auto____1 = (function (state_15856){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_15856);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e15875){if((e15875 instanceof Object))
{var ex__11695__auto__ = e15875;var statearr_15876_15889 = state_15856;(statearr_15876_15889[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15856);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15890 = state_15856;
state_15856 = G__15890;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_15856){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_15856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_15877 = f__11787__auto__.call(null);(statearr_15877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___15878);
return statearr_15877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11786__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_15937){var state_val_15938 = (state_15937[1]);if((state_val_15938 === 7))
{var inst_15933 = (state_15937[2]);var state_15937__$1 = state_15937;var statearr_15939_15955 = state_15937__$1;(statearr_15939_15955[2] = inst_15933);
(statearr_15939_15955[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 6))
{var inst_15923 = (state_15937[7]);var inst_15926 = (state_15937[8]);var inst_15930 = f.call(null,inst_15923,inst_15926);var inst_15923__$1 = inst_15930;var state_15937__$1 = (function (){var statearr_15940 = state_15937;(statearr_15940[7] = inst_15923__$1);
return statearr_15940;
})();var statearr_15941_15956 = state_15937__$1;(statearr_15941_15956[2] = null);
(statearr_15941_15956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 5))
{var inst_15923 = (state_15937[7]);var state_15937__$1 = state_15937;var statearr_15942_15957 = state_15937__$1;(statearr_15942_15957[2] = inst_15923);
(statearr_15942_15957[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 4))
{var inst_15926 = (state_15937[8]);var inst_15926__$1 = (state_15937[2]);var inst_15927 = (inst_15926__$1 == null);var state_15937__$1 = (function (){var statearr_15943 = state_15937;(statearr_15943[8] = inst_15926__$1);
return statearr_15943;
})();if(cljs.core.truth_(inst_15927))
{var statearr_15944_15958 = state_15937__$1;(statearr_15944_15958[1] = 5);
} else
{var statearr_15945_15959 = state_15937__$1;(statearr_15945_15959[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 3))
{var inst_15935 = (state_15937[2]);var state_15937__$1 = state_15937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15937__$1,inst_15935);
} else
{if((state_val_15938 === 2))
{var state_15937__$1 = state_15937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15937__$1,4,ch);
} else
{if((state_val_15938 === 1))
{var inst_15923 = init;var state_15937__$1 = (function (){var statearr_15946 = state_15937;(statearr_15946[7] = inst_15923);
return statearr_15946;
})();var statearr_15947_15960 = state_15937__$1;(statearr_15947_15960[2] = null);
(statearr_15947_15960[1] = 2);
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
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_15951 = (new Array(9));(statearr_15951[0] = state_machine__11692__auto__);
(statearr_15951[1] = 1);
return statearr_15951;
});
var state_machine__11692__auto____1 = (function (state_15937){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_15937);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e15952){if((e15952 instanceof Object))
{var ex__11695__auto__ = e15952;var statearr_15953_15961 = state_15937;(statearr_15953_15961[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15937);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15952;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15962 = state_15937;
state_15937 = G__15962;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_15937){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_15937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_15954 = f__11787__auto__.call(null);(statearr_15954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto__);
return statearr_15954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return c__11786__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11786__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_16024){var state_val_16025 = (state_16024[1]);if((state_val_16025 === 1))
{var inst_16004 = cljs.core.seq.call(null,coll);var inst_16005 = inst_16004;var state_16024__$1 = (function (){var statearr_16026 = state_16024;(statearr_16026[7] = inst_16005);
return statearr_16026;
})();var statearr_16027_16045 = state_16024__$1;(statearr_16027_16045[2] = null);
(statearr_16027_16045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 2))
{var inst_16005 = (state_16024[7]);var state_16024__$1 = state_16024;if(cljs.core.truth_(inst_16005))
{var statearr_16028_16046 = state_16024__$1;(statearr_16028_16046[1] = 4);
} else
{var statearr_16029_16047 = state_16024__$1;(statearr_16029_16047[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 3))
{var inst_16022 = (state_16024[2]);var state_16024__$1 = state_16024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16024__$1,inst_16022);
} else
{if((state_val_16025 === 4))
{var inst_16005 = (state_16024[7]);var inst_16008 = cljs.core.first.call(null,inst_16005);var state_16024__$1 = state_16024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16024__$1,7,ch,inst_16008);
} else
{if((state_val_16025 === 5))
{var state_16024__$1 = state_16024;if(cljs.core.truth_(close_QMARK_))
{var statearr_16030_16048 = state_16024__$1;(statearr_16030_16048[1] = 8);
} else
{var statearr_16031_16049 = state_16024__$1;(statearr_16031_16049[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 6))
{var inst_16020 = (state_16024[2]);var state_16024__$1 = state_16024;var statearr_16032_16050 = state_16024__$1;(statearr_16032_16050[2] = inst_16020);
(statearr_16032_16050[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 7))
{var inst_16005 = (state_16024[7]);var inst_16010 = (state_16024[2]);var inst_16011 = cljs.core.next.call(null,inst_16005);var inst_16005__$1 = inst_16011;var state_16024__$1 = (function (){var statearr_16033 = state_16024;(statearr_16033[7] = inst_16005__$1);
(statearr_16033[8] = inst_16010);
return statearr_16033;
})();var statearr_16034_16051 = state_16024__$1;(statearr_16034_16051[2] = null);
(statearr_16034_16051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 8))
{var inst_16015 = cljs.core.async.close_BANG_.call(null,ch);var state_16024__$1 = state_16024;var statearr_16035_16052 = state_16024__$1;(statearr_16035_16052[2] = inst_16015);
(statearr_16035_16052[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 9))
{var state_16024__$1 = state_16024;var statearr_16036_16053 = state_16024__$1;(statearr_16036_16053[2] = null);
(statearr_16036_16053[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 10))
{var inst_16018 = (state_16024[2]);var state_16024__$1 = state_16024;var statearr_16037_16054 = state_16024__$1;(statearr_16037_16054[2] = inst_16018);
(statearr_16037_16054[1] = 6);
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
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_16041 = (new Array(9));(statearr_16041[0] = state_machine__11692__auto__);
(statearr_16041[1] = 1);
return statearr_16041;
});
var state_machine__11692__auto____1 = (function (state_16024){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_16024);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e16042){if((e16042 instanceof Object))
{var ex__11695__auto__ = e16042;var statearr_16043_16055 = state_16024;(statearr_16043_16055[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16024);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16056 = state_16024;
state_16024 = G__16056;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_16024){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_16024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_16044 = f__11787__auto__.call(null);(statearr_16044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto__);
return statearr_16044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return c__11786__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16058 = {};return obj16058;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8728__auto__ = _;if(and__8728__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8728__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9343__auto__ = (((_ == null))?null:_);return (function (){var or__8740__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16060 = {};return obj16060;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8728__auto__ = m;if(and__8728__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8728__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9343__auto__ = (((m == null))?null:m);return (function (){var or__8740__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8728__auto__ = m;if(and__8728__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8728__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9343__auto__ = (((m == null))?null:m);return (function (){var or__8740__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8728__auto__ = m;if(and__8728__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8728__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9343__auto__ = (((m == null))?null:m);return (function (){var or__8740__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16275 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16275 = (function (cs,ch,mult,meta16276){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16276 = meta16276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16275.cljs$lang$type = true;
cljs.core.async.t16275.cljs$lang$ctorStr = "cljs.core.async/t16275";
cljs.core.async.t16275.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9284__auto__,writer__9285__auto__,opt__9286__auto__){return cljs.core._write.call(null,writer__9285__auto__,"cljs.core.async/t16275");
});})(cs))
;
cljs.core.async.t16275.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16275.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16275.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16275.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16275.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16277){var self__ = this;
var _16277__$1 = this;return self__.meta16276;
});})(cs))
;
cljs.core.async.t16275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16277,meta16276__$1){var self__ = this;
var _16277__$1 = this;return (new cljs.core.async.t16275(self__.cs,self__.ch,self__.mult,meta16276__$1));
});})(cs))
;
cljs.core.async.__GT_t16275 = ((function (cs){
return (function __GT_t16275(cs__$1,ch__$1,mult__$1,meta16276){return (new cljs.core.async.t16275(cs__$1,ch__$1,mult__$1,meta16276));
});})(cs))
;
}
return (new cljs.core.async.t16275(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11786__auto___16489 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_16407){var state_val_16408 = (state_16407[1]);if((state_val_16408 === 32))
{var inst_16356 = (state_16407[7]);var inst_16280 = (state_16407[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16407,31,Object,null,30);var inst_16363 = cljs.core.async.put_BANG_.call(null,inst_16356,inst_16280,done);var state_16407__$1 = state_16407;var statearr_16409_16490 = state_16407__$1;(statearr_16409_16490[2] = inst_16363);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16407__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 1))
{var state_16407__$1 = state_16407;var statearr_16410_16491 = state_16407__$1;(statearr_16410_16491[2] = null);
(statearr_16410_16491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 33))
{var inst_16369 = (state_16407[9]);var inst_16371 = cljs.core.chunked_seq_QMARK_.call(null,inst_16369);var state_16407__$1 = state_16407;if(inst_16371)
{var statearr_16411_16492 = state_16407__$1;(statearr_16411_16492[1] = 36);
} else
{var statearr_16412_16493 = state_16407__$1;(statearr_16412_16493[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 2))
{var state_16407__$1 = state_16407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16407__$1,4,ch);
} else
{if((state_val_16408 === 34))
{var state_16407__$1 = state_16407;var statearr_16413_16494 = state_16407__$1;(statearr_16413_16494[2] = null);
(statearr_16413_16494[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 3))
{var inst_16405 = (state_16407[2]);var state_16407__$1 = state_16407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16407__$1,inst_16405);
} else
{if((state_val_16408 === 35))
{var inst_16394 = (state_16407[2]);var state_16407__$1 = state_16407;var statearr_16414_16495 = state_16407__$1;(statearr_16414_16495[2] = inst_16394);
(statearr_16414_16495[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 4))
{var inst_16280 = (state_16407[8]);var inst_16280__$1 = (state_16407[2]);var inst_16281 = (inst_16280__$1 == null);var state_16407__$1 = (function (){var statearr_16415 = state_16407;(statearr_16415[8] = inst_16280__$1);
return statearr_16415;
})();if(cljs.core.truth_(inst_16281))
{var statearr_16416_16496 = state_16407__$1;(statearr_16416_16496[1] = 5);
} else
{var statearr_16417_16497 = state_16407__$1;(statearr_16417_16497[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 36))
{var inst_16369 = (state_16407[9]);var inst_16373 = cljs.core.chunk_first.call(null,inst_16369);var inst_16374 = cljs.core.chunk_rest.call(null,inst_16369);var inst_16375 = cljs.core.count.call(null,inst_16373);var inst_16348 = inst_16374;var inst_16349 = inst_16373;var inst_16350 = inst_16375;var inst_16351 = 0;var state_16407__$1 = (function (){var statearr_16418 = state_16407;(statearr_16418[10] = inst_16351);
(statearr_16418[11] = inst_16349);
(statearr_16418[12] = inst_16350);
(statearr_16418[13] = inst_16348);
return statearr_16418;
})();var statearr_16419_16498 = state_16407__$1;(statearr_16419_16498[2] = null);
(statearr_16419_16498[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 5))
{var inst_16287 = cljs.core.deref.call(null,cs);var inst_16288 = cljs.core.seq.call(null,inst_16287);var inst_16289 = inst_16288;var inst_16290 = null;var inst_16291 = 0;var inst_16292 = 0;var state_16407__$1 = (function (){var statearr_16420 = state_16407;(statearr_16420[14] = inst_16290);
(statearr_16420[15] = inst_16291);
(statearr_16420[16] = inst_16292);
(statearr_16420[17] = inst_16289);
return statearr_16420;
})();var statearr_16421_16499 = state_16407__$1;(statearr_16421_16499[2] = null);
(statearr_16421_16499[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 37))
{var inst_16369 = (state_16407[9]);var inst_16378 = cljs.core.first.call(null,inst_16369);var state_16407__$1 = (function (){var statearr_16422 = state_16407;(statearr_16422[18] = inst_16378);
return statearr_16422;
})();var statearr_16423_16500 = state_16407__$1;(statearr_16423_16500[2] = null);
(statearr_16423_16500[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 6))
{var inst_16339 = cljs.core.deref.call(null,cs);var inst_16340 = cljs.core.keys.call(null,inst_16339);var inst_16341 = cljs.core.count.call(null,inst_16340);var inst_16342 = cljs.core.reset_BANG_.call(null,dctr,inst_16341);var inst_16347 = cljs.core.seq.call(null,inst_16340);var inst_16348 = inst_16347;var inst_16349 = null;var inst_16350 = 0;var inst_16351 = 0;var state_16407__$1 = (function (){var statearr_16424 = state_16407;(statearr_16424[19] = inst_16342);
(statearr_16424[10] = inst_16351);
(statearr_16424[11] = inst_16349);
(statearr_16424[12] = inst_16350);
(statearr_16424[13] = inst_16348);
return statearr_16424;
})();var statearr_16425_16501 = state_16407__$1;(statearr_16425_16501[2] = null);
(statearr_16425_16501[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 38))
{var inst_16391 = (state_16407[2]);var state_16407__$1 = state_16407;var statearr_16426_16502 = state_16407__$1;(statearr_16426_16502[2] = inst_16391);
(statearr_16426_16502[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 7))
{var inst_16403 = (state_16407[2]);var state_16407__$1 = state_16407;var statearr_16427_16503 = state_16407__$1;(statearr_16427_16503[2] = inst_16403);
(statearr_16427_16503[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 39))
{var inst_16369 = (state_16407[9]);var inst_16387 = (state_16407[2]);var inst_16388 = cljs.core.next.call(null,inst_16369);var inst_16348 = inst_16388;var inst_16349 = null;var inst_16350 = 0;var inst_16351 = 0;var state_16407__$1 = (function (){var statearr_16428 = state_16407;(statearr_16428[20] = inst_16387);
(statearr_16428[10] = inst_16351);
(statearr_16428[11] = inst_16349);
(statearr_16428[12] = inst_16350);
(statearr_16428[13] = inst_16348);
return statearr_16428;
})();var statearr_16429_16504 = state_16407__$1;(statearr_16429_16504[2] = null);
(statearr_16429_16504[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 8))
{var inst_16291 = (state_16407[15]);var inst_16292 = (state_16407[16]);var inst_16294 = (inst_16292 < inst_16291);var inst_16295 = inst_16294;var state_16407__$1 = state_16407;if(cljs.core.truth_(inst_16295))
{var statearr_16430_16505 = state_16407__$1;(statearr_16430_16505[1] = 10);
} else
{var statearr_16431_16506 = state_16407__$1;(statearr_16431_16506[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 40))
{var inst_16378 = (state_16407[18]);var inst_16379 = (state_16407[2]);var inst_16380 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16381 = cljs.core.async.untap_STAR_.call(null,m,inst_16378);var state_16407__$1 = (function (){var statearr_16432 = state_16407;(statearr_16432[21] = inst_16379);
(statearr_16432[22] = inst_16380);
return statearr_16432;
})();var statearr_16433_16507 = state_16407__$1;(statearr_16433_16507[2] = inst_16381);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16407__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 9))
{var inst_16337 = (state_16407[2]);var state_16407__$1 = state_16407;var statearr_16434_16508 = state_16407__$1;(statearr_16434_16508[2] = inst_16337);
(statearr_16434_16508[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 41))
{var inst_16280 = (state_16407[8]);var inst_16378 = (state_16407[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16407,40,Object,null,39);var inst_16385 = cljs.core.async.put_BANG_.call(null,inst_16378,inst_16280,done);var state_16407__$1 = state_16407;var statearr_16435_16509 = state_16407__$1;(statearr_16435_16509[2] = inst_16385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16407__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 10))
{var inst_16290 = (state_16407[14]);var inst_16292 = (state_16407[16]);var inst_16298 = cljs.core._nth.call(null,inst_16290,inst_16292);var inst_16299 = cljs.core.nth.call(null,inst_16298,0,null);var inst_16300 = cljs.core.nth.call(null,inst_16298,1,null);var state_16407__$1 = (function (){var statearr_16436 = state_16407;(statearr_16436[23] = inst_16299);
return statearr_16436;
})();if(cljs.core.truth_(inst_16300))
{var statearr_16437_16510 = state_16407__$1;(statearr_16437_16510[1] = 13);
} else
{var statearr_16438_16511 = state_16407__$1;(statearr_16438_16511[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 42))
{var inst_16400 = (state_16407[2]);var state_16407__$1 = (function (){var statearr_16439 = state_16407;(statearr_16439[24] = inst_16400);
return statearr_16439;
})();var statearr_16440_16512 = state_16407__$1;(statearr_16440_16512[2] = null);
(statearr_16440_16512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 11))
{var inst_16309 = (state_16407[25]);var inst_16289 = (state_16407[17]);var inst_16309__$1 = cljs.core.seq.call(null,inst_16289);var state_16407__$1 = (function (){var statearr_16441 = state_16407;(statearr_16441[25] = inst_16309__$1);
return statearr_16441;
})();if(inst_16309__$1)
{var statearr_16442_16513 = state_16407__$1;(statearr_16442_16513[1] = 16);
} else
{var statearr_16443_16514 = state_16407__$1;(statearr_16443_16514[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 12))
{var inst_16335 = (state_16407[2]);var state_16407__$1 = state_16407;var statearr_16444_16515 = state_16407__$1;(statearr_16444_16515[2] = inst_16335);
(statearr_16444_16515[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 13))
{var inst_16299 = (state_16407[23]);var inst_16302 = cljs.core.async.close_BANG_.call(null,inst_16299);var state_16407__$1 = state_16407;var statearr_16448_16516 = state_16407__$1;(statearr_16448_16516[2] = inst_16302);
(statearr_16448_16516[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 14))
{var state_16407__$1 = state_16407;var statearr_16449_16517 = state_16407__$1;(statearr_16449_16517[2] = null);
(statearr_16449_16517[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 15))
{var inst_16290 = (state_16407[14]);var inst_16291 = (state_16407[15]);var inst_16292 = (state_16407[16]);var inst_16289 = (state_16407[17]);var inst_16305 = (state_16407[2]);var inst_16306 = (inst_16292 + 1);var tmp16445 = inst_16290;var tmp16446 = inst_16291;var tmp16447 = inst_16289;var inst_16289__$1 = tmp16447;var inst_16290__$1 = tmp16445;var inst_16291__$1 = tmp16446;var inst_16292__$1 = inst_16306;var state_16407__$1 = (function (){var statearr_16450 = state_16407;(statearr_16450[14] = inst_16290__$1);
(statearr_16450[15] = inst_16291__$1);
(statearr_16450[16] = inst_16292__$1);
(statearr_16450[26] = inst_16305);
(statearr_16450[17] = inst_16289__$1);
return statearr_16450;
})();var statearr_16451_16518 = state_16407__$1;(statearr_16451_16518[2] = null);
(statearr_16451_16518[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 16))
{var inst_16309 = (state_16407[25]);var inst_16311 = cljs.core.chunked_seq_QMARK_.call(null,inst_16309);var state_16407__$1 = state_16407;if(inst_16311)
{var statearr_16452_16519 = state_16407__$1;(statearr_16452_16519[1] = 19);
} else
{var statearr_16453_16520 = state_16407__$1;(statearr_16453_16520[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 17))
{var state_16407__$1 = state_16407;var statearr_16454_16521 = state_16407__$1;(statearr_16454_16521[2] = null);
(statearr_16454_16521[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 18))
{var inst_16333 = (state_16407[2]);var state_16407__$1 = state_16407;var statearr_16455_16522 = state_16407__$1;(statearr_16455_16522[2] = inst_16333);
(statearr_16455_16522[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 19))
{var inst_16309 = (state_16407[25]);var inst_16313 = cljs.core.chunk_first.call(null,inst_16309);var inst_16314 = cljs.core.chunk_rest.call(null,inst_16309);var inst_16315 = cljs.core.count.call(null,inst_16313);var inst_16289 = inst_16314;var inst_16290 = inst_16313;var inst_16291 = inst_16315;var inst_16292 = 0;var state_16407__$1 = (function (){var statearr_16456 = state_16407;(statearr_16456[14] = inst_16290);
(statearr_16456[15] = inst_16291);
(statearr_16456[16] = inst_16292);
(statearr_16456[17] = inst_16289);
return statearr_16456;
})();var statearr_16457_16523 = state_16407__$1;(statearr_16457_16523[2] = null);
(statearr_16457_16523[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 20))
{var inst_16309 = (state_16407[25]);var inst_16319 = cljs.core.first.call(null,inst_16309);var inst_16320 = cljs.core.nth.call(null,inst_16319,0,null);var inst_16321 = cljs.core.nth.call(null,inst_16319,1,null);var state_16407__$1 = (function (){var statearr_16458 = state_16407;(statearr_16458[27] = inst_16320);
return statearr_16458;
})();if(cljs.core.truth_(inst_16321))
{var statearr_16459_16524 = state_16407__$1;(statearr_16459_16524[1] = 22);
} else
{var statearr_16460_16525 = state_16407__$1;(statearr_16460_16525[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 21))
{var inst_16330 = (state_16407[2]);var state_16407__$1 = state_16407;var statearr_16461_16526 = state_16407__$1;(statearr_16461_16526[2] = inst_16330);
(statearr_16461_16526[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 22))
{var inst_16320 = (state_16407[27]);var inst_16323 = cljs.core.async.close_BANG_.call(null,inst_16320);var state_16407__$1 = state_16407;var statearr_16462_16527 = state_16407__$1;(statearr_16462_16527[2] = inst_16323);
(statearr_16462_16527[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 23))
{var state_16407__$1 = state_16407;var statearr_16463_16528 = state_16407__$1;(statearr_16463_16528[2] = null);
(statearr_16463_16528[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 24))
{var inst_16309 = (state_16407[25]);var inst_16326 = (state_16407[2]);var inst_16327 = cljs.core.next.call(null,inst_16309);var inst_16289 = inst_16327;var inst_16290 = null;var inst_16291 = 0;var inst_16292 = 0;var state_16407__$1 = (function (){var statearr_16464 = state_16407;(statearr_16464[14] = inst_16290);
(statearr_16464[15] = inst_16291);
(statearr_16464[16] = inst_16292);
(statearr_16464[17] = inst_16289);
(statearr_16464[28] = inst_16326);
return statearr_16464;
})();var statearr_16465_16529 = state_16407__$1;(statearr_16465_16529[2] = null);
(statearr_16465_16529[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 25))
{var inst_16351 = (state_16407[10]);var inst_16350 = (state_16407[12]);var inst_16353 = (inst_16351 < inst_16350);var inst_16354 = inst_16353;var state_16407__$1 = state_16407;if(cljs.core.truth_(inst_16354))
{var statearr_16466_16530 = state_16407__$1;(statearr_16466_16530[1] = 27);
} else
{var statearr_16467_16531 = state_16407__$1;(statearr_16467_16531[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 26))
{var inst_16398 = (state_16407[2]);var state_16407__$1 = (function (){var statearr_16468 = state_16407;(statearr_16468[29] = inst_16398);
return statearr_16468;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16407__$1,42,dchan);
} else
{if((state_val_16408 === 27))
{var inst_16351 = (state_16407[10]);var inst_16349 = (state_16407[11]);var inst_16356 = cljs.core._nth.call(null,inst_16349,inst_16351);var state_16407__$1 = (function (){var statearr_16469 = state_16407;(statearr_16469[7] = inst_16356);
return statearr_16469;
})();var statearr_16470_16532 = state_16407__$1;(statearr_16470_16532[2] = null);
(statearr_16470_16532[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 28))
{var inst_16348 = (state_16407[13]);var inst_16369 = (state_16407[9]);var inst_16369__$1 = cljs.core.seq.call(null,inst_16348);var state_16407__$1 = (function (){var statearr_16474 = state_16407;(statearr_16474[9] = inst_16369__$1);
return statearr_16474;
})();if(inst_16369__$1)
{var statearr_16475_16533 = state_16407__$1;(statearr_16475_16533[1] = 33);
} else
{var statearr_16476_16534 = state_16407__$1;(statearr_16476_16534[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 29))
{var inst_16396 = (state_16407[2]);var state_16407__$1 = state_16407;var statearr_16477_16535 = state_16407__$1;(statearr_16477_16535[2] = inst_16396);
(statearr_16477_16535[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 30))
{var inst_16351 = (state_16407[10]);var inst_16349 = (state_16407[11]);var inst_16350 = (state_16407[12]);var inst_16348 = (state_16407[13]);var inst_16365 = (state_16407[2]);var inst_16366 = (inst_16351 + 1);var tmp16471 = inst_16349;var tmp16472 = inst_16350;var tmp16473 = inst_16348;var inst_16348__$1 = tmp16473;var inst_16349__$1 = tmp16471;var inst_16350__$1 = tmp16472;var inst_16351__$1 = inst_16366;var state_16407__$1 = (function (){var statearr_16478 = state_16407;(statearr_16478[10] = inst_16351__$1);
(statearr_16478[11] = inst_16349__$1);
(statearr_16478[12] = inst_16350__$1);
(statearr_16478[13] = inst_16348__$1);
(statearr_16478[30] = inst_16365);
return statearr_16478;
})();var statearr_16479_16536 = state_16407__$1;(statearr_16479_16536[2] = null);
(statearr_16479_16536[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16408 === 31))
{var inst_16356 = (state_16407[7]);var inst_16357 = (state_16407[2]);var inst_16358 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16359 = cljs.core.async.untap_STAR_.call(null,m,inst_16356);var state_16407__$1 = (function (){var statearr_16480 = state_16407;(statearr_16480[31] = inst_16358);
(statearr_16480[32] = inst_16357);
return statearr_16480;
})();var statearr_16481_16537 = state_16407__$1;(statearr_16481_16537[2] = inst_16359);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16407__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_16485 = (new Array(33));(statearr_16485[0] = state_machine__11692__auto__);
(statearr_16485[1] = 1);
return statearr_16485;
});
var state_machine__11692__auto____1 = (function (state_16407){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_16407);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e16486){if((e16486 instanceof Object))
{var ex__11695__auto__ = e16486;var statearr_16487_16538 = state_16407;(statearr_16487_16538[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16407);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16486;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16539 = state_16407;
state_16407 = G__16539;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_16407){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_16407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_16488 = f__11787__auto__.call(null);(statearr_16488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___16489);
return statearr_16488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16541 = {};return obj16541;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8728__auto__ = m;if(and__8728__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8728__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9343__auto__ = (((m == null))?null:m);return (function (){var or__8740__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8728__auto__ = m;if(and__8728__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8728__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9343__auto__ = (((m == null))?null:m);return (function (){var or__8740__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8728__auto__ = m;if(and__8728__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8728__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9343__auto__ = (((m == null))?null:m);return (function (){var or__8740__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8728__auto__ = m;if(and__8728__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8728__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9343__auto__ = (((m == null))?null:m);return (function (){var or__8740__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8728__auto__ = m;if(and__8728__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8728__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9343__auto__ = (((m == null))?null:m);return (function (){var or__8740__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16651 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16652){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta16652 = meta16652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16651.cljs$lang$type = true;
cljs.core.async.t16651.cljs$lang$ctorStr = "cljs.core.async/t16651";
cljs.core.async.t16651.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9284__auto__,writer__9285__auto__,opt__9286__auto__){return cljs.core._write.call(null,writer__9285__auto__,"cljs.core.async/t16651");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16651.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16651.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16651.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16651.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16651.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16651.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16651.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16653){var self__ = this;
var _16653__$1 = this;return self__.meta16652;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16653,meta16652__$1){var self__ = this;
var _16653__$1 = this;return (new cljs.core.async.t16651(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16652__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16651 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16651(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16652){return (new cljs.core.async.t16651(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16652));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16651(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__11786__auto___16760 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_16718){var state_val_16719 = (state_16718[1]);if((state_val_16719 === 1))
{var inst_16657 = (state_16718[7]);var inst_16657__$1 = calc_state.call(null);var inst_16658 = cljs.core.seq_QMARK_.call(null,inst_16657__$1);var state_16718__$1 = (function (){var statearr_16720 = state_16718;(statearr_16720[7] = inst_16657__$1);
return statearr_16720;
})();if(inst_16658)
{var statearr_16721_16761 = state_16718__$1;(statearr_16721_16761[1] = 2);
} else
{var statearr_16722_16762 = state_16718__$1;(statearr_16722_16762[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 2))
{var inst_16657 = (state_16718[7]);var inst_16660 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16657);var state_16718__$1 = state_16718;var statearr_16723_16763 = state_16718__$1;(statearr_16723_16763[2] = inst_16660);
(statearr_16723_16763[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 3))
{var inst_16657 = (state_16718[7]);var state_16718__$1 = state_16718;var statearr_16724_16764 = state_16718__$1;(statearr_16724_16764[2] = inst_16657);
(statearr_16724_16764[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 4))
{var inst_16657 = (state_16718[7]);var inst_16663 = (state_16718[2]);var inst_16664 = cljs.core.get.call(null,inst_16663,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16665 = cljs.core.get.call(null,inst_16663,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16666 = cljs.core.get.call(null,inst_16663,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16667 = inst_16657;var state_16718__$1 = (function (){var statearr_16725 = state_16718;(statearr_16725[8] = inst_16664);
(statearr_16725[9] = inst_16665);
(statearr_16725[10] = inst_16667);
(statearr_16725[11] = inst_16666);
return statearr_16725;
})();var statearr_16726_16765 = state_16718__$1;(statearr_16726_16765[2] = null);
(statearr_16726_16765[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 5))
{var inst_16667 = (state_16718[10]);var inst_16670 = cljs.core.seq_QMARK_.call(null,inst_16667);var state_16718__$1 = state_16718;if(inst_16670)
{var statearr_16727_16766 = state_16718__$1;(statearr_16727_16766[1] = 7);
} else
{var statearr_16728_16767 = state_16718__$1;(statearr_16728_16767[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 6))
{var inst_16716 = (state_16718[2]);var state_16718__$1 = state_16718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16718__$1,inst_16716);
} else
{if((state_val_16719 === 7))
{var inst_16667 = (state_16718[10]);var inst_16672 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16667);var state_16718__$1 = state_16718;var statearr_16729_16768 = state_16718__$1;(statearr_16729_16768[2] = inst_16672);
(statearr_16729_16768[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 8))
{var inst_16667 = (state_16718[10]);var state_16718__$1 = state_16718;var statearr_16730_16769 = state_16718__$1;(statearr_16730_16769[2] = inst_16667);
(statearr_16730_16769[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 9))
{var inst_16675 = (state_16718[12]);var inst_16675__$1 = (state_16718[2]);var inst_16676 = cljs.core.get.call(null,inst_16675__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16677 = cljs.core.get.call(null,inst_16675__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16678 = cljs.core.get.call(null,inst_16675__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16718__$1 = (function (){var statearr_16731 = state_16718;(statearr_16731[13] = inst_16678);
(statearr_16731[14] = inst_16677);
(statearr_16731[12] = inst_16675__$1);
return statearr_16731;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16718__$1,10,inst_16676);
} else
{if((state_val_16719 === 10))
{var inst_16683 = (state_16718[15]);var inst_16682 = (state_16718[16]);var inst_16681 = (state_16718[2]);var inst_16682__$1 = cljs.core.nth.call(null,inst_16681,0,null);var inst_16683__$1 = cljs.core.nth.call(null,inst_16681,1,null);var inst_16684 = (inst_16682__$1 == null);var inst_16685 = cljs.core._EQ_.call(null,inst_16683__$1,change);var inst_16686 = (inst_16684) || (inst_16685);var state_16718__$1 = (function (){var statearr_16732 = state_16718;(statearr_16732[15] = inst_16683__$1);
(statearr_16732[16] = inst_16682__$1);
return statearr_16732;
})();if(cljs.core.truth_(inst_16686))
{var statearr_16733_16770 = state_16718__$1;(statearr_16733_16770[1] = 11);
} else
{var statearr_16734_16771 = state_16718__$1;(statearr_16734_16771[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 11))
{var inst_16682 = (state_16718[16]);var inst_16688 = (inst_16682 == null);var state_16718__$1 = state_16718;if(cljs.core.truth_(inst_16688))
{var statearr_16735_16772 = state_16718__$1;(statearr_16735_16772[1] = 14);
} else
{var statearr_16736_16773 = state_16718__$1;(statearr_16736_16773[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 12))
{var inst_16678 = (state_16718[13]);var inst_16683 = (state_16718[15]);var inst_16697 = (state_16718[17]);var inst_16697__$1 = inst_16678.call(null,inst_16683);var state_16718__$1 = (function (){var statearr_16737 = state_16718;(statearr_16737[17] = inst_16697__$1);
return statearr_16737;
})();if(cljs.core.truth_(inst_16697__$1))
{var statearr_16738_16774 = state_16718__$1;(statearr_16738_16774[1] = 17);
} else
{var statearr_16739_16775 = state_16718__$1;(statearr_16739_16775[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 13))
{var inst_16714 = (state_16718[2]);var state_16718__$1 = state_16718;var statearr_16740_16776 = state_16718__$1;(statearr_16740_16776[2] = inst_16714);
(statearr_16740_16776[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 14))
{var inst_16683 = (state_16718[15]);var inst_16690 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16683);var state_16718__$1 = state_16718;var statearr_16741_16777 = state_16718__$1;(statearr_16741_16777[2] = inst_16690);
(statearr_16741_16777[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 15))
{var state_16718__$1 = state_16718;var statearr_16742_16778 = state_16718__$1;(statearr_16742_16778[2] = null);
(statearr_16742_16778[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 16))
{var inst_16693 = (state_16718[2]);var inst_16694 = calc_state.call(null);var inst_16667 = inst_16694;var state_16718__$1 = (function (){var statearr_16743 = state_16718;(statearr_16743[10] = inst_16667);
(statearr_16743[18] = inst_16693);
return statearr_16743;
})();var statearr_16744_16779 = state_16718__$1;(statearr_16744_16779[2] = null);
(statearr_16744_16779[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 17))
{var inst_16697 = (state_16718[17]);var state_16718__$1 = state_16718;var statearr_16745_16780 = state_16718__$1;(statearr_16745_16780[2] = inst_16697);
(statearr_16745_16780[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 18))
{var inst_16678 = (state_16718[13]);var inst_16677 = (state_16718[14]);var inst_16683 = (state_16718[15]);var inst_16700 = cljs.core.empty_QMARK_.call(null,inst_16678);var inst_16701 = inst_16677.call(null,inst_16683);var inst_16702 = cljs.core.not.call(null,inst_16701);var inst_16703 = (inst_16700) && (inst_16702);var state_16718__$1 = state_16718;var statearr_16746_16781 = state_16718__$1;(statearr_16746_16781[2] = inst_16703);
(statearr_16746_16781[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 19))
{var inst_16705 = (state_16718[2]);var state_16718__$1 = state_16718;if(cljs.core.truth_(inst_16705))
{var statearr_16747_16782 = state_16718__$1;(statearr_16747_16782[1] = 20);
} else
{var statearr_16748_16783 = state_16718__$1;(statearr_16748_16783[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 20))
{var inst_16682 = (state_16718[16]);var state_16718__$1 = state_16718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16718__$1,23,out,inst_16682);
} else
{if((state_val_16719 === 21))
{var state_16718__$1 = state_16718;var statearr_16749_16784 = state_16718__$1;(statearr_16749_16784[2] = null);
(statearr_16749_16784[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 22))
{var inst_16675 = (state_16718[12]);var inst_16711 = (state_16718[2]);var inst_16667 = inst_16675;var state_16718__$1 = (function (){var statearr_16750 = state_16718;(statearr_16750[19] = inst_16711);
(statearr_16750[10] = inst_16667);
return statearr_16750;
})();var statearr_16751_16785 = state_16718__$1;(statearr_16751_16785[2] = null);
(statearr_16751_16785[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16719 === 23))
{var inst_16708 = (state_16718[2]);var state_16718__$1 = state_16718;var statearr_16752_16786 = state_16718__$1;(statearr_16752_16786[2] = inst_16708);
(statearr_16752_16786[1] = 22);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_16756 = (new Array(20));(statearr_16756[0] = state_machine__11692__auto__);
(statearr_16756[1] = 1);
return statearr_16756;
});
var state_machine__11692__auto____1 = (function (state_16718){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_16718);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e16757){if((e16757 instanceof Object))
{var ex__11695__auto__ = e16757;var statearr_16758_16787 = state_16718;(statearr_16758_16787[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16718);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16788 = state_16718;
state_16718 = G__16788;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_16718){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_16718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_16759 = f__11787__auto__.call(null);(statearr_16759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___16760);
return statearr_16759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16790 = {};return obj16790;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8728__auto__ = p;if(and__8728__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8728__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9343__auto__ = (((p == null))?null:p);return (function (){var or__8740__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8728__auto__ = p;if(and__8728__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8728__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9343__auto__ = (((p == null))?null:p);return (function (){var or__8740__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8728__auto__ = p;if(and__8728__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8728__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9343__auto__ = (((p == null))?null:p);return (function (){var or__8740__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8728__auto__ = p;if(and__8728__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8728__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9343__auto__ = (((p == null))?null:p);return (function (){var or__8740__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9343__auto__)]);if(or__8740__auto__)
{return or__8740__auto__;
} else
{var or__8740__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8740__auto____$1)
{return or__8740__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__8740__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8740__auto__))
{return or__8740__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8740__auto__,mults){
return (function (p1__16791_SHARP_){if(cljs.core.truth_(p1__16791_SHARP_.call(null,topic)))
{return p1__16791_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16791_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8740__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16916 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16917){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16917 = meta16917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16916.cljs$lang$type = true;
cljs.core.async.t16916.cljs$lang$ctorStr = "cljs.core.async/t16916";
cljs.core.async.t16916.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9284__auto__,writer__9285__auto__,opt__9286__auto__){return cljs.core._write.call(null,writer__9285__auto__,"cljs.core.async/t16916");
});})(mults,ensure_mult))
;
cljs.core.async.t16916.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16916.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16916.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16916.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16916.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16918){var self__ = this;
var _16918__$1 = this;return self__.meta16917;
});})(mults,ensure_mult))
;
cljs.core.async.t16916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16918,meta16917__$1){var self__ = this;
var _16918__$1 = this;return (new cljs.core.async.t16916(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16917__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16916 = ((function (mults,ensure_mult){
return (function __GT_t16916(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16917){return (new cljs.core.async.t16916(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16917));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16916(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11786__auto___17040 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_16992){var state_val_16993 = (state_16992[1]);if((state_val_16993 === 1))
{var state_16992__$1 = state_16992;var statearr_16994_17041 = state_16992__$1;(statearr_16994_17041[2] = null);
(statearr_16994_17041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 2))
{var state_16992__$1 = state_16992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16992__$1,4,ch);
} else
{if((state_val_16993 === 3))
{var inst_16990 = (state_16992[2]);var state_16992__$1 = state_16992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16992__$1,inst_16990);
} else
{if((state_val_16993 === 4))
{var inst_16921 = (state_16992[7]);var inst_16921__$1 = (state_16992[2]);var inst_16922 = (inst_16921__$1 == null);var state_16992__$1 = (function (){var statearr_16995 = state_16992;(statearr_16995[7] = inst_16921__$1);
return statearr_16995;
})();if(cljs.core.truth_(inst_16922))
{var statearr_16996_17042 = state_16992__$1;(statearr_16996_17042[1] = 5);
} else
{var statearr_16997_17043 = state_16992__$1;(statearr_16997_17043[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 5))
{var inst_16928 = cljs.core.deref.call(null,mults);var inst_16929 = cljs.core.vals.call(null,inst_16928);var inst_16930 = cljs.core.seq.call(null,inst_16929);var inst_16931 = inst_16930;var inst_16932 = null;var inst_16933 = 0;var inst_16934 = 0;var state_16992__$1 = (function (){var statearr_16998 = state_16992;(statearr_16998[8] = inst_16934);
(statearr_16998[9] = inst_16933);
(statearr_16998[10] = inst_16932);
(statearr_16998[11] = inst_16931);
return statearr_16998;
})();var statearr_16999_17044 = state_16992__$1;(statearr_16999_17044[2] = null);
(statearr_16999_17044[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 6))
{var inst_16969 = (state_16992[12]);var inst_16971 = (state_16992[13]);var inst_16921 = (state_16992[7]);var inst_16969__$1 = topic_fn.call(null,inst_16921);var inst_16970 = cljs.core.deref.call(null,mults);var inst_16971__$1 = cljs.core.get.call(null,inst_16970,inst_16969__$1);var state_16992__$1 = (function (){var statearr_17000 = state_16992;(statearr_17000[12] = inst_16969__$1);
(statearr_17000[13] = inst_16971__$1);
return statearr_17000;
})();if(cljs.core.truth_(inst_16971__$1))
{var statearr_17001_17045 = state_16992__$1;(statearr_17001_17045[1] = 19);
} else
{var statearr_17002_17046 = state_16992__$1;(statearr_17002_17046[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 7))
{var inst_16988 = (state_16992[2]);var state_16992__$1 = state_16992;var statearr_17003_17047 = state_16992__$1;(statearr_17003_17047[2] = inst_16988);
(statearr_17003_17047[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 8))
{var inst_16934 = (state_16992[8]);var inst_16933 = (state_16992[9]);var inst_16936 = (inst_16934 < inst_16933);var inst_16937 = inst_16936;var state_16992__$1 = state_16992;if(cljs.core.truth_(inst_16937))
{var statearr_17007_17048 = state_16992__$1;(statearr_17007_17048[1] = 10);
} else
{var statearr_17008_17049 = state_16992__$1;(statearr_17008_17049[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 9))
{var inst_16967 = (state_16992[2]);var state_16992__$1 = state_16992;var statearr_17009_17050 = state_16992__$1;(statearr_17009_17050[2] = inst_16967);
(statearr_17009_17050[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 10))
{var inst_16934 = (state_16992[8]);var inst_16933 = (state_16992[9]);var inst_16932 = (state_16992[10]);var inst_16931 = (state_16992[11]);var inst_16939 = cljs.core._nth.call(null,inst_16932,inst_16934);var inst_16940 = cljs.core.async.muxch_STAR_.call(null,inst_16939);var inst_16941 = cljs.core.async.close_BANG_.call(null,inst_16940);var inst_16942 = (inst_16934 + 1);var tmp17004 = inst_16933;var tmp17005 = inst_16932;var tmp17006 = inst_16931;var inst_16931__$1 = tmp17006;var inst_16932__$1 = tmp17005;var inst_16933__$1 = tmp17004;var inst_16934__$1 = inst_16942;var state_16992__$1 = (function (){var statearr_17010 = state_16992;(statearr_17010[8] = inst_16934__$1);
(statearr_17010[14] = inst_16941);
(statearr_17010[9] = inst_16933__$1);
(statearr_17010[10] = inst_16932__$1);
(statearr_17010[11] = inst_16931__$1);
return statearr_17010;
})();var statearr_17011_17051 = state_16992__$1;(statearr_17011_17051[2] = null);
(statearr_17011_17051[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 11))
{var inst_16945 = (state_16992[15]);var inst_16931 = (state_16992[11]);var inst_16945__$1 = cljs.core.seq.call(null,inst_16931);var state_16992__$1 = (function (){var statearr_17012 = state_16992;(statearr_17012[15] = inst_16945__$1);
return statearr_17012;
})();if(inst_16945__$1)
{var statearr_17013_17052 = state_16992__$1;(statearr_17013_17052[1] = 13);
} else
{var statearr_17014_17053 = state_16992__$1;(statearr_17014_17053[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 12))
{var inst_16965 = (state_16992[2]);var state_16992__$1 = state_16992;var statearr_17015_17054 = state_16992__$1;(statearr_17015_17054[2] = inst_16965);
(statearr_17015_17054[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 13))
{var inst_16945 = (state_16992[15]);var inst_16947 = cljs.core.chunked_seq_QMARK_.call(null,inst_16945);var state_16992__$1 = state_16992;if(inst_16947)
{var statearr_17016_17055 = state_16992__$1;(statearr_17016_17055[1] = 16);
} else
{var statearr_17017_17056 = state_16992__$1;(statearr_17017_17056[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 14))
{var state_16992__$1 = state_16992;var statearr_17018_17057 = state_16992__$1;(statearr_17018_17057[2] = null);
(statearr_17018_17057[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 15))
{var inst_16963 = (state_16992[2]);var state_16992__$1 = state_16992;var statearr_17019_17058 = state_16992__$1;(statearr_17019_17058[2] = inst_16963);
(statearr_17019_17058[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 16))
{var inst_16945 = (state_16992[15]);var inst_16949 = cljs.core.chunk_first.call(null,inst_16945);var inst_16950 = cljs.core.chunk_rest.call(null,inst_16945);var inst_16951 = cljs.core.count.call(null,inst_16949);var inst_16931 = inst_16950;var inst_16932 = inst_16949;var inst_16933 = inst_16951;var inst_16934 = 0;var state_16992__$1 = (function (){var statearr_17020 = state_16992;(statearr_17020[8] = inst_16934);
(statearr_17020[9] = inst_16933);
(statearr_17020[10] = inst_16932);
(statearr_17020[11] = inst_16931);
return statearr_17020;
})();var statearr_17021_17059 = state_16992__$1;(statearr_17021_17059[2] = null);
(statearr_17021_17059[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 17))
{var inst_16945 = (state_16992[15]);var inst_16954 = cljs.core.first.call(null,inst_16945);var inst_16955 = cljs.core.async.muxch_STAR_.call(null,inst_16954);var inst_16956 = cljs.core.async.close_BANG_.call(null,inst_16955);var inst_16957 = cljs.core.next.call(null,inst_16945);var inst_16931 = inst_16957;var inst_16932 = null;var inst_16933 = 0;var inst_16934 = 0;var state_16992__$1 = (function (){var statearr_17022 = state_16992;(statearr_17022[8] = inst_16934);
(statearr_17022[9] = inst_16933);
(statearr_17022[10] = inst_16932);
(statearr_17022[11] = inst_16931);
(statearr_17022[16] = inst_16956);
return statearr_17022;
})();var statearr_17023_17060 = state_16992__$1;(statearr_17023_17060[2] = null);
(statearr_17023_17060[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 18))
{var inst_16960 = (state_16992[2]);var state_16992__$1 = state_16992;var statearr_17024_17061 = state_16992__$1;(statearr_17024_17061[2] = inst_16960);
(statearr_17024_17061[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 19))
{var state_16992__$1 = state_16992;var statearr_17025_17062 = state_16992__$1;(statearr_17025_17062[2] = null);
(statearr_17025_17062[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 20))
{var state_16992__$1 = state_16992;var statearr_17026_17063 = state_16992__$1;(statearr_17026_17063[2] = null);
(statearr_17026_17063[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 21))
{var inst_16985 = (state_16992[2]);var state_16992__$1 = (function (){var statearr_17027 = state_16992;(statearr_17027[17] = inst_16985);
return statearr_17027;
})();var statearr_17028_17064 = state_16992__$1;(statearr_17028_17064[2] = null);
(statearr_17028_17064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 22))
{var inst_16982 = (state_16992[2]);var state_16992__$1 = state_16992;var statearr_17029_17065 = state_16992__$1;(statearr_17029_17065[2] = inst_16982);
(statearr_17029_17065[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 23))
{var inst_16969 = (state_16992[12]);var inst_16973 = (state_16992[2]);var inst_16974 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16969);var state_16992__$1 = (function (){var statearr_17030 = state_16992;(statearr_17030[18] = inst_16973);
return statearr_17030;
})();var statearr_17031_17066 = state_16992__$1;(statearr_17031_17066[2] = inst_16974);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16992__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16993 === 24))
{var inst_16971 = (state_16992[13]);var inst_16921 = (state_16992[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16992,23,Object,null,22);var inst_16978 = cljs.core.async.muxch_STAR_.call(null,inst_16971);var state_16992__$1 = state_16992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16992__$1,25,inst_16978,inst_16921);
} else
{if((state_val_16993 === 25))
{var inst_16980 = (state_16992[2]);var state_16992__$1 = state_16992;var statearr_17032_17067 = state_16992__$1;(statearr_17032_17067[2] = inst_16980);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16992__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_17036 = (new Array(19));(statearr_17036[0] = state_machine__11692__auto__);
(statearr_17036[1] = 1);
return statearr_17036;
});
var state_machine__11692__auto____1 = (function (state_16992){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_16992);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e17037){if((e17037 instanceof Object))
{var ex__11695__auto__ = e17037;var statearr_17038_17068 = state_16992;(statearr_17038_17068[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17069 = state_16992;
state_16992 = G__17069;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_16992){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_16992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_17039 = f__11787__auto__.call(null);(statearr_17039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___17040);
return statearr_17039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11786__auto___17206 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_17176){var state_val_17177 = (state_17176[1]);if((state_val_17177 === 1))
{var state_17176__$1 = state_17176;var statearr_17178_17207 = state_17176__$1;(statearr_17178_17207[2] = null);
(statearr_17178_17207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 2))
{var inst_17139 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17140 = 0;var state_17176__$1 = (function (){var statearr_17179 = state_17176;(statearr_17179[7] = inst_17140);
(statearr_17179[8] = inst_17139);
return statearr_17179;
})();var statearr_17180_17208 = state_17176__$1;(statearr_17180_17208[2] = null);
(statearr_17180_17208[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 3))
{var inst_17174 = (state_17176[2]);var state_17176__$1 = state_17176;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17176__$1,inst_17174);
} else
{if((state_val_17177 === 4))
{var inst_17140 = (state_17176[7]);var inst_17142 = (inst_17140 < cnt);var state_17176__$1 = state_17176;if(cljs.core.truth_(inst_17142))
{var statearr_17181_17209 = state_17176__$1;(statearr_17181_17209[1] = 6);
} else
{var statearr_17182_17210 = state_17176__$1;(statearr_17182_17210[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 5))
{var inst_17160 = (state_17176[2]);var state_17176__$1 = (function (){var statearr_17183 = state_17176;(statearr_17183[9] = inst_17160);
return statearr_17183;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17176__$1,12,dchan);
} else
{if((state_val_17177 === 6))
{var state_17176__$1 = state_17176;var statearr_17184_17211 = state_17176__$1;(statearr_17184_17211[2] = null);
(statearr_17184_17211[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 7))
{var state_17176__$1 = state_17176;var statearr_17185_17212 = state_17176__$1;(statearr_17185_17212[2] = null);
(statearr_17185_17212[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 8))
{var inst_17158 = (state_17176[2]);var state_17176__$1 = state_17176;var statearr_17186_17213 = state_17176__$1;(statearr_17186_17213[2] = inst_17158);
(statearr_17186_17213[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 9))
{var inst_17140 = (state_17176[7]);var inst_17153 = (state_17176[2]);var inst_17154 = (inst_17140 + 1);var inst_17140__$1 = inst_17154;var state_17176__$1 = (function (){var statearr_17187 = state_17176;(statearr_17187[7] = inst_17140__$1);
(statearr_17187[10] = inst_17153);
return statearr_17187;
})();var statearr_17188_17214 = state_17176__$1;(statearr_17188_17214[2] = null);
(statearr_17188_17214[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 10))
{var inst_17144 = (state_17176[2]);var inst_17145 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17176__$1 = (function (){var statearr_17189 = state_17176;(statearr_17189[11] = inst_17144);
return statearr_17189;
})();var statearr_17190_17215 = state_17176__$1;(statearr_17190_17215[2] = inst_17145);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17176__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 11))
{var inst_17140 = (state_17176[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17176,10,Object,null,9);var inst_17149 = chs__$1.call(null,inst_17140);var inst_17150 = done.call(null,inst_17140);var inst_17151 = cljs.core.async.take_BANG_.call(null,inst_17149,inst_17150);var state_17176__$1 = state_17176;var statearr_17191_17216 = state_17176__$1;(statearr_17191_17216[2] = inst_17151);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17176__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 12))
{var inst_17162 = (state_17176[12]);var inst_17162__$1 = (state_17176[2]);var inst_17163 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17162__$1);var state_17176__$1 = (function (){var statearr_17192 = state_17176;(statearr_17192[12] = inst_17162__$1);
return statearr_17192;
})();if(cljs.core.truth_(inst_17163))
{var statearr_17193_17217 = state_17176__$1;(statearr_17193_17217[1] = 13);
} else
{var statearr_17194_17218 = state_17176__$1;(statearr_17194_17218[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 13))
{var inst_17165 = cljs.core.async.close_BANG_.call(null,out);var state_17176__$1 = state_17176;var statearr_17195_17219 = state_17176__$1;(statearr_17195_17219[2] = inst_17165);
(statearr_17195_17219[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 14))
{var inst_17162 = (state_17176[12]);var inst_17167 = cljs.core.apply.call(null,f,inst_17162);var state_17176__$1 = state_17176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17176__$1,16,out,inst_17167);
} else
{if((state_val_17177 === 15))
{var inst_17172 = (state_17176[2]);var state_17176__$1 = state_17176;var statearr_17196_17220 = state_17176__$1;(statearr_17196_17220[2] = inst_17172);
(statearr_17196_17220[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17177 === 16))
{var inst_17169 = (state_17176[2]);var state_17176__$1 = (function (){var statearr_17197 = state_17176;(statearr_17197[13] = inst_17169);
return statearr_17197;
})();var statearr_17198_17221 = state_17176__$1;(statearr_17198_17221[2] = null);
(statearr_17198_17221[1] = 2);
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
}
}
}
}
}
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_17202 = (new Array(14));(statearr_17202[0] = state_machine__11692__auto__);
(statearr_17202[1] = 1);
return statearr_17202;
});
var state_machine__11692__auto____1 = (function (state_17176){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_17176);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e17203){if((e17203 instanceof Object))
{var ex__11695__auto__ = e17203;var statearr_17204_17222 = state_17176;(statearr_17204_17222[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17176);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17223 = state_17176;
state_17176 = G__17223;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_17176){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_17176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_17205 = f__11787__auto__.call(null);(statearr_17205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___17206);
return statearr_17205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11786__auto___17331 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_17307){var state_val_17308 = (state_17307[1]);if((state_val_17308 === 1))
{var inst_17278 = cljs.core.vec.call(null,chs);var inst_17279 = inst_17278;var state_17307__$1 = (function (){var statearr_17309 = state_17307;(statearr_17309[7] = inst_17279);
return statearr_17309;
})();var statearr_17310_17332 = state_17307__$1;(statearr_17310_17332[2] = null);
(statearr_17310_17332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17308 === 2))
{var inst_17279 = (state_17307[7]);var inst_17281 = cljs.core.count.call(null,inst_17279);var inst_17282 = (inst_17281 > 0);var state_17307__$1 = state_17307;if(cljs.core.truth_(inst_17282))
{var statearr_17311_17333 = state_17307__$1;(statearr_17311_17333[1] = 4);
} else
{var statearr_17312_17334 = state_17307__$1;(statearr_17312_17334[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17308 === 3))
{var inst_17305 = (state_17307[2]);var state_17307__$1 = state_17307;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17307__$1,inst_17305);
} else
{if((state_val_17308 === 4))
{var inst_17279 = (state_17307[7]);var state_17307__$1 = state_17307;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17307__$1,7,inst_17279);
} else
{if((state_val_17308 === 5))
{var inst_17301 = cljs.core.async.close_BANG_.call(null,out);var state_17307__$1 = state_17307;var statearr_17313_17335 = state_17307__$1;(statearr_17313_17335[2] = inst_17301);
(statearr_17313_17335[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17308 === 6))
{var inst_17303 = (state_17307[2]);var state_17307__$1 = state_17307;var statearr_17314_17336 = state_17307__$1;(statearr_17314_17336[2] = inst_17303);
(statearr_17314_17336[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17308 === 7))
{var inst_17286 = (state_17307[8]);var inst_17287 = (state_17307[9]);var inst_17286__$1 = (state_17307[2]);var inst_17287__$1 = cljs.core.nth.call(null,inst_17286__$1,0,null);var inst_17288 = cljs.core.nth.call(null,inst_17286__$1,1,null);var inst_17289 = (inst_17287__$1 == null);var state_17307__$1 = (function (){var statearr_17315 = state_17307;(statearr_17315[8] = inst_17286__$1);
(statearr_17315[10] = inst_17288);
(statearr_17315[9] = inst_17287__$1);
return statearr_17315;
})();if(cljs.core.truth_(inst_17289))
{var statearr_17316_17337 = state_17307__$1;(statearr_17316_17337[1] = 8);
} else
{var statearr_17317_17338 = state_17307__$1;(statearr_17317_17338[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17308 === 8))
{var inst_17279 = (state_17307[7]);var inst_17286 = (state_17307[8]);var inst_17288 = (state_17307[10]);var inst_17287 = (state_17307[9]);var inst_17291 = (function (){var c = inst_17288;var v = inst_17287;var vec__17284 = inst_17286;var cs = inst_17279;return ((function (c,v,vec__17284,cs,inst_17279,inst_17286,inst_17288,inst_17287,state_val_17308){
return (function (p1__17224_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17224_SHARP_);
});
;})(c,v,vec__17284,cs,inst_17279,inst_17286,inst_17288,inst_17287,state_val_17308))
})();var inst_17292 = cljs.core.filterv.call(null,inst_17291,inst_17279);var inst_17279__$1 = inst_17292;var state_17307__$1 = (function (){var statearr_17318 = state_17307;(statearr_17318[7] = inst_17279__$1);
return statearr_17318;
})();var statearr_17319_17339 = state_17307__$1;(statearr_17319_17339[2] = null);
(statearr_17319_17339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17308 === 9))
{var inst_17287 = (state_17307[9]);var state_17307__$1 = state_17307;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17307__$1,11,out,inst_17287);
} else
{if((state_val_17308 === 10))
{var inst_17299 = (state_17307[2]);var state_17307__$1 = state_17307;var statearr_17321_17340 = state_17307__$1;(statearr_17321_17340[2] = inst_17299);
(statearr_17321_17340[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17308 === 11))
{var inst_17279 = (state_17307[7]);var inst_17296 = (state_17307[2]);var tmp17320 = inst_17279;var inst_17279__$1 = tmp17320;var state_17307__$1 = (function (){var statearr_17322 = state_17307;(statearr_17322[7] = inst_17279__$1);
(statearr_17322[11] = inst_17296);
return statearr_17322;
})();var statearr_17323_17341 = state_17307__$1;(statearr_17323_17341[2] = null);
(statearr_17323_17341[1] = 2);
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
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_17327 = (new Array(12));(statearr_17327[0] = state_machine__11692__auto__);
(statearr_17327[1] = 1);
return statearr_17327;
});
var state_machine__11692__auto____1 = (function (state_17307){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_17307);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e17328){if((e17328 instanceof Object))
{var ex__11695__auto__ = e17328;var statearr_17329_17342 = state_17307;(statearr_17329_17342[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17307);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17343 = state_17307;
state_17307 = G__17343;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_17307){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_17307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_17330 = f__11787__auto__.call(null);(statearr_17330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___17331);
return statearr_17330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11786__auto___17436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_17413){var state_val_17414 = (state_17413[1]);if((state_val_17414 === 1))
{var inst_17390 = 0;var state_17413__$1 = (function (){var statearr_17415 = state_17413;(statearr_17415[7] = inst_17390);
return statearr_17415;
})();var statearr_17416_17437 = state_17413__$1;(statearr_17416_17437[2] = null);
(statearr_17416_17437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 2))
{var inst_17390 = (state_17413[7]);var inst_17392 = (inst_17390 < n);var state_17413__$1 = state_17413;if(cljs.core.truth_(inst_17392))
{var statearr_17417_17438 = state_17413__$1;(statearr_17417_17438[1] = 4);
} else
{var statearr_17418_17439 = state_17413__$1;(statearr_17418_17439[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 3))
{var inst_17410 = (state_17413[2]);var inst_17411 = cljs.core.async.close_BANG_.call(null,out);var state_17413__$1 = (function (){var statearr_17419 = state_17413;(statearr_17419[8] = inst_17410);
return statearr_17419;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17413__$1,inst_17411);
} else
{if((state_val_17414 === 4))
{var state_17413__$1 = state_17413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17413__$1,7,ch);
} else
{if((state_val_17414 === 5))
{var state_17413__$1 = state_17413;var statearr_17420_17440 = state_17413__$1;(statearr_17420_17440[2] = null);
(statearr_17420_17440[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 6))
{var inst_17408 = (state_17413[2]);var state_17413__$1 = state_17413;var statearr_17421_17441 = state_17413__$1;(statearr_17421_17441[2] = inst_17408);
(statearr_17421_17441[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 7))
{var inst_17395 = (state_17413[9]);var inst_17395__$1 = (state_17413[2]);var inst_17396 = (inst_17395__$1 == null);var inst_17397 = cljs.core.not.call(null,inst_17396);var state_17413__$1 = (function (){var statearr_17422 = state_17413;(statearr_17422[9] = inst_17395__$1);
return statearr_17422;
})();if(inst_17397)
{var statearr_17423_17442 = state_17413__$1;(statearr_17423_17442[1] = 8);
} else
{var statearr_17424_17443 = state_17413__$1;(statearr_17424_17443[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 8))
{var inst_17395 = (state_17413[9]);var state_17413__$1 = state_17413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17413__$1,11,out,inst_17395);
} else
{if((state_val_17414 === 9))
{var state_17413__$1 = state_17413;var statearr_17425_17444 = state_17413__$1;(statearr_17425_17444[2] = null);
(statearr_17425_17444[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 10))
{var inst_17405 = (state_17413[2]);var state_17413__$1 = state_17413;var statearr_17426_17445 = state_17413__$1;(statearr_17426_17445[2] = inst_17405);
(statearr_17426_17445[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17414 === 11))
{var inst_17390 = (state_17413[7]);var inst_17400 = (state_17413[2]);var inst_17401 = (inst_17390 + 1);var inst_17390__$1 = inst_17401;var state_17413__$1 = (function (){var statearr_17427 = state_17413;(statearr_17427[10] = inst_17400);
(statearr_17427[7] = inst_17390__$1);
return statearr_17427;
})();var statearr_17428_17446 = state_17413__$1;(statearr_17428_17446[2] = null);
(statearr_17428_17446[1] = 2);
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
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_17432 = (new Array(11));(statearr_17432[0] = state_machine__11692__auto__);
(statearr_17432[1] = 1);
return statearr_17432;
});
var state_machine__11692__auto____1 = (function (state_17413){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_17413);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e17433){if((e17433 instanceof Object))
{var ex__11695__auto__ = e17433;var statearr_17434_17447 = state_17413;(statearr_17434_17447[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17448 = state_17413;
state_17413 = G__17448;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_17413){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_17413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_17435 = f__11787__auto__.call(null);(statearr_17435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___17436);
return statearr_17435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11786__auto___17545 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_17520){var state_val_17521 = (state_17520[1]);if((state_val_17521 === 1))
{var inst_17497 = null;var state_17520__$1 = (function (){var statearr_17522 = state_17520;(statearr_17522[7] = inst_17497);
return statearr_17522;
})();var statearr_17523_17546 = state_17520__$1;(statearr_17523_17546[2] = null);
(statearr_17523_17546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17521 === 2))
{var state_17520__$1 = state_17520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17520__$1,4,ch);
} else
{if((state_val_17521 === 3))
{var inst_17517 = (state_17520[2]);var inst_17518 = cljs.core.async.close_BANG_.call(null,out);var state_17520__$1 = (function (){var statearr_17524 = state_17520;(statearr_17524[8] = inst_17517);
return statearr_17524;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17520__$1,inst_17518);
} else
{if((state_val_17521 === 4))
{var inst_17500 = (state_17520[9]);var inst_17500__$1 = (state_17520[2]);var inst_17501 = (inst_17500__$1 == null);var inst_17502 = cljs.core.not.call(null,inst_17501);var state_17520__$1 = (function (){var statearr_17525 = state_17520;(statearr_17525[9] = inst_17500__$1);
return statearr_17525;
})();if(inst_17502)
{var statearr_17526_17547 = state_17520__$1;(statearr_17526_17547[1] = 5);
} else
{var statearr_17527_17548 = state_17520__$1;(statearr_17527_17548[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17521 === 5))
{var inst_17497 = (state_17520[7]);var inst_17500 = (state_17520[9]);var inst_17504 = cljs.core._EQ_.call(null,inst_17500,inst_17497);var state_17520__$1 = state_17520;if(inst_17504)
{var statearr_17528_17549 = state_17520__$1;(statearr_17528_17549[1] = 8);
} else
{var statearr_17529_17550 = state_17520__$1;(statearr_17529_17550[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17521 === 6))
{var state_17520__$1 = state_17520;var statearr_17531_17551 = state_17520__$1;(statearr_17531_17551[2] = null);
(statearr_17531_17551[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17521 === 7))
{var inst_17515 = (state_17520[2]);var state_17520__$1 = state_17520;var statearr_17532_17552 = state_17520__$1;(statearr_17532_17552[2] = inst_17515);
(statearr_17532_17552[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17521 === 8))
{var inst_17497 = (state_17520[7]);var tmp17530 = inst_17497;var inst_17497__$1 = tmp17530;var state_17520__$1 = (function (){var statearr_17533 = state_17520;(statearr_17533[7] = inst_17497__$1);
return statearr_17533;
})();var statearr_17534_17553 = state_17520__$1;(statearr_17534_17553[2] = null);
(statearr_17534_17553[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17521 === 9))
{var inst_17500 = (state_17520[9]);var state_17520__$1 = state_17520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17520__$1,11,out,inst_17500);
} else
{if((state_val_17521 === 10))
{var inst_17512 = (state_17520[2]);var state_17520__$1 = state_17520;var statearr_17535_17554 = state_17520__$1;(statearr_17535_17554[2] = inst_17512);
(statearr_17535_17554[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17521 === 11))
{var inst_17500 = (state_17520[9]);var inst_17509 = (state_17520[2]);var inst_17497 = inst_17500;var state_17520__$1 = (function (){var statearr_17536 = state_17520;(statearr_17536[10] = inst_17509);
(statearr_17536[7] = inst_17497);
return statearr_17536;
})();var statearr_17537_17555 = state_17520__$1;(statearr_17537_17555[2] = null);
(statearr_17537_17555[1] = 2);
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
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_17541 = (new Array(11));(statearr_17541[0] = state_machine__11692__auto__);
(statearr_17541[1] = 1);
return statearr_17541;
});
var state_machine__11692__auto____1 = (function (state_17520){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_17520);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e17542){if((e17542 instanceof Object))
{var ex__11695__auto__ = e17542;var statearr_17543_17556 = state_17520;(statearr_17543_17556[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17557 = state_17520;
state_17520 = G__17557;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_17520){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_17520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_17544 = f__11787__auto__.call(null);(statearr_17544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___17545);
return statearr_17544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11786__auto___17692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_17662){var state_val_17663 = (state_17662[1]);if((state_val_17663 === 1))
{var inst_17625 = (new Array(n));var inst_17626 = inst_17625;var inst_17627 = 0;var state_17662__$1 = (function (){var statearr_17664 = state_17662;(statearr_17664[7] = inst_17627);
(statearr_17664[8] = inst_17626);
return statearr_17664;
})();var statearr_17665_17693 = state_17662__$1;(statearr_17665_17693[2] = null);
(statearr_17665_17693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17663 === 2))
{var state_17662__$1 = state_17662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17662__$1,4,ch);
} else
{if((state_val_17663 === 3))
{var inst_17660 = (state_17662[2]);var state_17662__$1 = state_17662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17662__$1,inst_17660);
} else
{if((state_val_17663 === 4))
{var inst_17630 = (state_17662[9]);var inst_17630__$1 = (state_17662[2]);var inst_17631 = (inst_17630__$1 == null);var inst_17632 = cljs.core.not.call(null,inst_17631);var state_17662__$1 = (function (){var statearr_17666 = state_17662;(statearr_17666[9] = inst_17630__$1);
return statearr_17666;
})();if(inst_17632)
{var statearr_17667_17694 = state_17662__$1;(statearr_17667_17694[1] = 5);
} else
{var statearr_17668_17695 = state_17662__$1;(statearr_17668_17695[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17663 === 5))
{var inst_17630 = (state_17662[9]);var inst_17627 = (state_17662[7]);var inst_17635 = (state_17662[10]);var inst_17626 = (state_17662[8]);var inst_17634 = (inst_17626[inst_17627] = inst_17630);var inst_17635__$1 = (inst_17627 + 1);var inst_17636 = (inst_17635__$1 < n);var state_17662__$1 = (function (){var statearr_17669 = state_17662;(statearr_17669[10] = inst_17635__$1);
(statearr_17669[11] = inst_17634);
return statearr_17669;
})();if(cljs.core.truth_(inst_17636))
{var statearr_17670_17696 = state_17662__$1;(statearr_17670_17696[1] = 8);
} else
{var statearr_17671_17697 = state_17662__$1;(statearr_17671_17697[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17663 === 6))
{var inst_17627 = (state_17662[7]);var inst_17648 = (inst_17627 > 0);var state_17662__$1 = state_17662;if(cljs.core.truth_(inst_17648))
{var statearr_17673_17698 = state_17662__$1;(statearr_17673_17698[1] = 12);
} else
{var statearr_17674_17699 = state_17662__$1;(statearr_17674_17699[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17663 === 7))
{var inst_17658 = (state_17662[2]);var state_17662__$1 = state_17662;var statearr_17675_17700 = state_17662__$1;(statearr_17675_17700[2] = inst_17658);
(statearr_17675_17700[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17663 === 8))
{var inst_17635 = (state_17662[10]);var inst_17626 = (state_17662[8]);var tmp17672 = inst_17626;var inst_17626__$1 = tmp17672;var inst_17627 = inst_17635;var state_17662__$1 = (function (){var statearr_17676 = state_17662;(statearr_17676[7] = inst_17627);
(statearr_17676[8] = inst_17626__$1);
return statearr_17676;
})();var statearr_17677_17701 = state_17662__$1;(statearr_17677_17701[2] = null);
(statearr_17677_17701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17663 === 9))
{var inst_17626 = (state_17662[8]);var inst_17640 = cljs.core.vec.call(null,inst_17626);var state_17662__$1 = state_17662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17662__$1,11,out,inst_17640);
} else
{if((state_val_17663 === 10))
{var inst_17646 = (state_17662[2]);var state_17662__$1 = state_17662;var statearr_17678_17702 = state_17662__$1;(statearr_17678_17702[2] = inst_17646);
(statearr_17678_17702[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17663 === 11))
{var inst_17642 = (state_17662[2]);var inst_17643 = (new Array(n));var inst_17626 = inst_17643;var inst_17627 = 0;var state_17662__$1 = (function (){var statearr_17679 = state_17662;(statearr_17679[12] = inst_17642);
(statearr_17679[7] = inst_17627);
(statearr_17679[8] = inst_17626);
return statearr_17679;
})();var statearr_17680_17703 = state_17662__$1;(statearr_17680_17703[2] = null);
(statearr_17680_17703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17663 === 12))
{var inst_17626 = (state_17662[8]);var inst_17650 = cljs.core.vec.call(null,inst_17626);var state_17662__$1 = state_17662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17662__$1,15,out,inst_17650);
} else
{if((state_val_17663 === 13))
{var state_17662__$1 = state_17662;var statearr_17681_17704 = state_17662__$1;(statearr_17681_17704[2] = null);
(statearr_17681_17704[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17663 === 14))
{var inst_17655 = (state_17662[2]);var inst_17656 = cljs.core.async.close_BANG_.call(null,out);var state_17662__$1 = (function (){var statearr_17682 = state_17662;(statearr_17682[13] = inst_17655);
return statearr_17682;
})();var statearr_17683_17705 = state_17662__$1;(statearr_17683_17705[2] = inst_17656);
(statearr_17683_17705[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17663 === 15))
{var inst_17652 = (state_17662[2]);var state_17662__$1 = state_17662;var statearr_17684_17706 = state_17662__$1;(statearr_17684_17706[2] = inst_17652);
(statearr_17684_17706[1] = 14);
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
}
}
}
}
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_17688 = (new Array(14));(statearr_17688[0] = state_machine__11692__auto__);
(statearr_17688[1] = 1);
return statearr_17688;
});
var state_machine__11692__auto____1 = (function (state_17662){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_17662);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e17689){if((e17689 instanceof Object))
{var ex__11695__auto__ = e17689;var statearr_17690_17707 = state_17662;(statearr_17690_17707[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17662);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17708 = state_17662;
state_17662 = G__17708;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_17662){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_17662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_17691 = f__11787__auto__.call(null);(statearr_17691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___17692);
return statearr_17691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11786__auto___17851 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11787__auto__ = (function (){var switch__11691__auto__ = (function (state_17821){var state_val_17822 = (state_17821[1]);if((state_val_17822 === 1))
{var inst_17780 = (new Array(0));var inst_17781 = inst_17780;var inst_17782 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17821__$1 = (function (){var statearr_17823 = state_17821;(statearr_17823[7] = inst_17781);
(statearr_17823[8] = inst_17782);
return statearr_17823;
})();var statearr_17824_17852 = state_17821__$1;(statearr_17824_17852[2] = null);
(statearr_17824_17852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17822 === 2))
{var state_17821__$1 = state_17821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17821__$1,4,ch);
} else
{if((state_val_17822 === 3))
{var inst_17819 = (state_17821[2]);var state_17821__$1 = state_17821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17821__$1,inst_17819);
} else
{if((state_val_17822 === 4))
{var inst_17785 = (state_17821[9]);var inst_17785__$1 = (state_17821[2]);var inst_17786 = (inst_17785__$1 == null);var inst_17787 = cljs.core.not.call(null,inst_17786);var state_17821__$1 = (function (){var statearr_17825 = state_17821;(statearr_17825[9] = inst_17785__$1);
return statearr_17825;
})();if(inst_17787)
{var statearr_17826_17853 = state_17821__$1;(statearr_17826_17853[1] = 5);
} else
{var statearr_17827_17854 = state_17821__$1;(statearr_17827_17854[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17822 === 5))
{var inst_17789 = (state_17821[10]);var inst_17785 = (state_17821[9]);var inst_17782 = (state_17821[8]);var inst_17789__$1 = f.call(null,inst_17785);var inst_17790 = cljs.core._EQ_.call(null,inst_17789__$1,inst_17782);var inst_17791 = cljs.core.keyword_identical_QMARK_.call(null,inst_17782,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17792 = (inst_17790) || (inst_17791);var state_17821__$1 = (function (){var statearr_17828 = state_17821;(statearr_17828[10] = inst_17789__$1);
return statearr_17828;
})();if(cljs.core.truth_(inst_17792))
{var statearr_17829_17855 = state_17821__$1;(statearr_17829_17855[1] = 8);
} else
{var statearr_17830_17856 = state_17821__$1;(statearr_17830_17856[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17822 === 6))
{var inst_17781 = (state_17821[7]);var inst_17806 = inst_17781.length;var inst_17807 = (inst_17806 > 0);var state_17821__$1 = state_17821;if(cljs.core.truth_(inst_17807))
{var statearr_17832_17857 = state_17821__$1;(statearr_17832_17857[1] = 12);
} else
{var statearr_17833_17858 = state_17821__$1;(statearr_17833_17858[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17822 === 7))
{var inst_17817 = (state_17821[2]);var state_17821__$1 = state_17821;var statearr_17834_17859 = state_17821__$1;(statearr_17834_17859[2] = inst_17817);
(statearr_17834_17859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17822 === 8))
{var inst_17789 = (state_17821[10]);var inst_17785 = (state_17821[9]);var inst_17781 = (state_17821[7]);var inst_17794 = inst_17781.push(inst_17785);var tmp17831 = inst_17781;var inst_17781__$1 = tmp17831;var inst_17782 = inst_17789;var state_17821__$1 = (function (){var statearr_17835 = state_17821;(statearr_17835[11] = inst_17794);
(statearr_17835[7] = inst_17781__$1);
(statearr_17835[8] = inst_17782);
return statearr_17835;
})();var statearr_17836_17860 = state_17821__$1;(statearr_17836_17860[2] = null);
(statearr_17836_17860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17822 === 9))
{var inst_17781 = (state_17821[7]);var inst_17797 = cljs.core.vec.call(null,inst_17781);var state_17821__$1 = state_17821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17821__$1,11,out,inst_17797);
} else
{if((state_val_17822 === 10))
{var inst_17804 = (state_17821[2]);var state_17821__$1 = state_17821;var statearr_17837_17861 = state_17821__$1;(statearr_17837_17861[2] = inst_17804);
(statearr_17837_17861[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17822 === 11))
{var inst_17789 = (state_17821[10]);var inst_17785 = (state_17821[9]);var inst_17799 = (state_17821[2]);var inst_17800 = (new Array(0));var inst_17801 = inst_17800.push(inst_17785);var inst_17781 = inst_17800;var inst_17782 = inst_17789;var state_17821__$1 = (function (){var statearr_17838 = state_17821;(statearr_17838[12] = inst_17801);
(statearr_17838[13] = inst_17799);
(statearr_17838[7] = inst_17781);
(statearr_17838[8] = inst_17782);
return statearr_17838;
})();var statearr_17839_17862 = state_17821__$1;(statearr_17839_17862[2] = null);
(statearr_17839_17862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17822 === 12))
{var inst_17781 = (state_17821[7]);var inst_17809 = cljs.core.vec.call(null,inst_17781);var state_17821__$1 = state_17821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17821__$1,15,out,inst_17809);
} else
{if((state_val_17822 === 13))
{var state_17821__$1 = state_17821;var statearr_17840_17863 = state_17821__$1;(statearr_17840_17863[2] = null);
(statearr_17840_17863[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17822 === 14))
{var inst_17814 = (state_17821[2]);var inst_17815 = cljs.core.async.close_BANG_.call(null,out);var state_17821__$1 = (function (){var statearr_17841 = state_17821;(statearr_17841[14] = inst_17814);
return statearr_17841;
})();var statearr_17842_17864 = state_17821__$1;(statearr_17842_17864[2] = inst_17815);
(statearr_17842_17864[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17822 === 15))
{var inst_17811 = (state_17821[2]);var state_17821__$1 = state_17821;var statearr_17843_17865 = state_17821__$1;(statearr_17843_17865[2] = inst_17811);
(statearr_17843_17865[1] = 14);
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
}
}
}
}
}
}
}
}
});return ((function (switch__11691__auto__){
return (function() {
var state_machine__11692__auto__ = null;
var state_machine__11692__auto____0 = (function (){var statearr_17847 = (new Array(15));(statearr_17847[0] = state_machine__11692__auto__);
(statearr_17847[1] = 1);
return statearr_17847;
});
var state_machine__11692__auto____1 = (function (state_17821){while(true){
var ret_value__11693__auto__ = (function (){try{while(true){
var result__11694__auto__ = switch__11691__auto__.call(null,state_17821);if(cljs.core.keyword_identical_QMARK_.call(null,result__11694__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11694__auto__;
}
break;
}
}catch (e17848){if((e17848 instanceof Object))
{var ex__11695__auto__ = e17848;var statearr_17849_17866 = state_17821;(statearr_17849_17866[5] = ex__11695__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17821);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11693__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17867 = state_17821;
state_17821 = G__17867;
continue;
}
} else
{return ret_value__11693__auto__;
}
break;
}
});
state_machine__11692__auto__ = function(state_17821){
switch(arguments.length){
case 0:
return state_machine__11692__auto____0.call(this);
case 1:
return state_machine__11692__auto____1.call(this,state_17821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11692__auto____0;
state_machine__11692__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11692__auto____1;
return state_machine__11692__auto__;
})()
;})(switch__11691__auto__))
})();var state__11788__auto__ = (function (){var statearr_17850 = f__11787__auto__.call(null);(statearr_17850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11786__auto___17851);
return statearr_17850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11788__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
